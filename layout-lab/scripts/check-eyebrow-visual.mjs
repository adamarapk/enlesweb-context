import http from 'http';
import fs from 'fs';
import path from 'path';

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml'
};

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath.endsWith('/')) reqPath += 'index.html';
  if (!path.extname(reqPath)) reqPath += '/index.html';
  const filePath = path.join('dist', reqPath);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }
    const ext = path.extname(filePath);
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
    res.end(data);
  });
});

const PORT = 4329;
await new Promise((resolve) => server.listen(PORT, resolve));

let browser;
let isPlaywright = false;

try {
  let pwModule;
  try {
    pwModule = await import('playwright');
  } catch {
    pwModule = await import('playwright-core');
  }
  browser = await pwModule.chromium.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  isPlaywright = true;
} catch (e) {
  const puppeteer = (await import('puppeteer-core')).default;
  browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
}

const context = isPlaywright ? await browser.newContext() : null;
const page = isPlaywright ? await context.newPage() : await browser.newPage();

const allSections = [
  { kind: 'navbar', variants: ['N1', 'N2', 'N3', 'N4'] },
  { kind: 'hero', variants: ['H1', 'H2', 'H3', 'H4'] },
  { kind: 'layanan', variants: ['S1', 'S2', 'S3', 'S4'] },
  { kind: 'footer', variants: ['F1', 'F2', 'F3', 'F4'] },
  { kind: 'langkah', variants: ['P1', 'P2', 'P3'] },
  { kind: 'keunggulan', variants: ['K1', 'K2', 'K3'] },
  { kind: 'lokasi', variants: ['L1', 'L2', 'L3'] },
  { kind: 'cta', variants: ['C1', 'C2', 'C3'] },
  { kind: 'galeri', variants: ['G1', 'G2', 'G3'] },
  { kind: 'ulasan', variants: ['U1', 'U2', 'U3'] },
  { kind: 'biaya', variants: ['B1', 'B2', 'B3'] },
  { kind: 'tanya-jawab', variants: ['Q1', 'Q2', 'Q3'] },
  { kind: 'profil', variants: ['R1', 'R2', 'R3'] }
];

const viewports = [
  { name: '1280', width: 1280, height: 800 },
  { name: '390', width: 390, height: 844 }
];

const violations = [];
let testedCount = 0;

for (const sec of allSections) {
  for (const variant of sec.variants) {
    for (const vp of viewports) {
      if (isPlaywright) {
        await page.setViewportSize({ width: vp.width, height: vp.height });
        await page.goto(`http://localhost:${PORT}/galeri/?section=${sec.kind}&variant=${variant}&clean=1`, {
          waitUntil: 'domcontentloaded'
        });
      } else {
        await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: 1 });
        await page.goto(`http://localhost:${PORT}/galeri/?section=${sec.kind}&variant=${variant}&clean=1`, {
          waitUntil: 'domcontentloaded'
        });
      }

      // Small tick for client side JS to activate the variant
      await page.evaluate(() => new Promise((r) => requestAnimationFrame(r)));

      const result = await page.evaluate((vName) => {
        const box = document.querySelector(`[data-variant-box="${vName}"].active`);
        if (!box) {
          return { notFound: true, items: [] };
        }

        // Section headings (h1, h2)
        const headings = Array.from(box.querySelectorAll('h1, h2'));
        const issues = [];

        for (const h of headings) {
          const hRect = h.getBoundingClientRect();
          const hStyle = window.getComputedStyle(h);
          const hFontSize = parseFloat(hStyle.fontSize);

          const allElements = Array.from(box.querySelectorAll('*'));
          for (const el of allElements) {
            if (el === h || h.contains(el) || el.contains(h)) continue;

            const text = (el.innerText || el.textContent || '').trim();
            if (!text) continue;

            // Only check leaf or text-bearing children to avoid multi-reporting
            const childrenWithText = Array.from(el.children).filter(
              (c) => (c.innerText || c.textContent || '').trim().length > 0
            );
            if (childrenWithText.length > 0) continue;

            const style = window.getComputedStyle(el);
            if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') continue;

            const rect = el.getBoundingClientRect();
            if (rect.width <= 0 || rect.height <= 0) continue;

            const fontSize = parseFloat(style.fontSize);

            // Eyebrow check:
            // smaller font size, above heading within 96px, horizontal overlap
            const isAbove = rect.bottom <= hRect.top + 2 && hRect.top - rect.bottom <= 96;
            const hasHorizontalOverlap = Math.max(rect.left, hRect.left) < Math.min(rect.right, hRect.right);

            if (fontSize < hFontSize && isAbove && hasHorizontalOverlap) {
              issues.push({
                headingText: h.textContent.trim().slice(0, 40),
                headingTag: h.tagName,
                elementTag: el.tagName,
                elementClass: el.className,
                elementText: text.slice(0, 40),
                distanceY: Math.round(hRect.top - rect.bottom),
                fontSizeDiff: `${fontSize}px vs ${hFontSize}px`
              });
            }
          }
        }

        return { notFound: false, items: issues };
      }, variant);

      if (result.notFound) {
        continue;
      }

      testedCount++;

      if (result.items.length > 0) {
        for (const issue of result.items) {
          violations.push({
            kind: sec.kind,
            variant,
            viewport: vp.name,
            ...issue
          });
        }
      }
    }
  }
}

await browser.close();
server.close();

console.log('=== PEMERIKSAAN VISUAL NOL EYEBROW (PLAYWRIGHT) ===');
console.log(`Berhasil menguji ${testedCount} skenario varian & viewport di /galeri.`);

if (violations.length > 0) {
  console.error(`\nDITEMUKAN ${violations.length} PELANGGARAN VISUAL EYEBROW:`);
  for (const v of violations) {
    console.error(`  - [${v.kind.toUpperCase()} - ${v.variant} @ ${v.viewport}px]`);
    console.error(
      `    Elemen di atas ${v.headingTag} ("${v.headingText}"): <${v.elementTag} class="${v.elementClass}"> "${v.elementText}"`
    );
    console.error(`    Jarak vertikal: ${v.distanceY}px, Ukuran: ${v.fontSizeDiff}`);
  }
  console.error('\nUji visual eyebrow GAGAL (exit code 1).');
  process.exit(1);
} else {
  console.log('Seluruh varian yang diuji LULUS pemeriksaan visual: tidak ditemukan teks kecil di atas judul section.');
  console.log('Uji visual LULUS (exit code 0).\n');
  process.exit(0);
}
