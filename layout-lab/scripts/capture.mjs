import puppeteer from 'puppeteer-core';
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

await new Promise((resolve) => server.listen(4328, resolve));

const browser = await puppeteer.launch({
  executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox']
});

const page = await browser.newPage();
await page.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: 'light' }]);
await page.evaluateOnNewDocument(() => {
  try { localStorage.setItem('layout-lab-theme', 'light'); } catch (e) {}
});

const sections = [
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

for (const sec of sections) {
  for (const variant of sec.variants) {
    for (const vp of viewports) {
      await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: 1 });
      await page.goto(`http://localhost:4328/galeri/?section=${sec.kind}&variant=${variant}&clean=1`, {
        waitUntil: 'domcontentloaded'
      });
      const el = await page.$(`[data-variant-box="${variant}"].active`);
      if (el) {
        const outPath = path.join('docs', 'screens', `${variant}-${vp.name}.png`);
        await el.screenshot({ path: outPath });
        console.log(`Captured ${outPath}`);
      } else {
        console.warn(`Element not found for ${variant}`);
      }
    }
  }
}

const pagesToCapture = [
  { name: 'index', path: '/' },
  { name: 'galeri', path: '/galeri/' },
  { name: 'uji', path: '/uji/' },
  { name: 'legal', path: '/legal/' },
  { name: 'pratinjau', path: '/pratinjau/?s=N2,H1,K1,S1,P2,G1,U1,B1,Q1,R1,L1,C2,F1' }
];

for (const p of pagesToCapture) {
  for (const vp of viewports) {
    await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: 1 });
    await page.goto(`http://localhost:4328${p.path}`, { waitUntil: 'networkidle0' });
    const outPath = path.join('docs', 'screens', `page-${p.name}-${vp.name}.png`);
    await page.screenshot({ path: outPath, fullPage: false });
    console.log(`Captured ${outPath}`);
  }
}

// Dark mode preview for index
await page.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: 'dark' }]);
await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 1 });
await page.goto('http://localhost:4328/', { waitUntil: 'networkidle0' });
await page.evaluate(() => {
  document.documentElement.setAttribute('data-theme', 'dark');
  try { localStorage.setItem('layout-lab-theme', 'dark'); } catch (e) {}
});
await page.screenshot({ path: path.join('docs', 'screens', 'page-index-dark-1280.png'), fullPage: false });
console.log('Captured docs/screens/page-index-dark-1280.png');

// Capture deck active variants screenshot in light mode
await page.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: 'light' }]);
await page.setViewport({ width: 1280, height: 900, deviceScaleFactor: 1 });
await page.goto('http://localhost:4328/', { waitUntil: 'networkidle0' });
await page.evaluate(() => {
  document.documentElement.removeAttribute('data-theme');
  try {
    localStorage.removeItem('layout-lab-theme');
    localStorage.removeItem('layout-lab-composer-recipe');
  } catch (e) {}
});
await page.goto('http://localhost:4328/', { waitUntil: 'networkidle0' });
const deckEl = await page.$('#composer-deck');
if (deckEl) {
  await deckEl.screenshot({ path: path.join('docs', 'screens', 'deck-active-variants.png') });
  console.log('Captured docs/screens/deck-active-variants.png');
}

await browser.close();
server.close();
console.log('All screenshots captured successfully.');
