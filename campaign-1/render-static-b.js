const fs = require('fs');
const path = require('path');
const puppeteer = require('./node_modules/puppeteer-core');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const CONFIGS = [
  {
    ratio: '4x5',
    width: 1080,
    height: 1350,
    outputPng: 'enlesweb-ads-b-4x5.png',
    guidePng: 'previews/static-b/4x5_guide.png',
    safeZone: { xMin: 65, xMax: 1015, yMin: 250, yMax: 1010 },
    zones: {
      showcase: { selector: '#showcase-4x5', expected: { xMin: 65, xMax: 475, yMin: 270, yMax: 1010 } },
      header:   { selector: '#header-4x5',   expected: { xMin: 505, xMax: 1015, yMin: 270, yMax: 390 } },
      price:    { selector: '#price-4x5',    expected: { xMin: 505, xMax: 1015, yMin: 390, yMax: 520 } },
      specs:    { selector: '#specs-4x5',    expected: { xMin: 505, xMax: 1015, yMin: 500, yMax: 900 } },
      note:     { selector: '#note-4x5',     expected: { xMin: 505, xMax: 1015, yMin: 950, yMax: 1010 } }
    }
  },
  {
    ratio: '9x16',
    width: 1080,
    height: 1920,
    outputPng: 'enlesweb-ads-b-9x16.png',
    guidePng: 'previews/static-b/9x16_guide.png',
    safeZone: { xMin: 65, xMax: 1015, yMin: 270, yMax: 1250 },
    zones: {
      header:   { selector: '#header-9x16',   expected: { xMin: 65, xMax: 1015, yMin: 270, yMax: 375 } },
      showcase: { selector: '#showcase-9x16', expected: { xMin: 65, xMax: 1015, yMin: 365, yMax: 830 } },
      price:    { selector: '#price-9x16',    expected: { xMin: 65, xMax: 1015, yMin: 815, yMax: 940 } },
      specs:    { selector: '#specs-9x16',    expected: { xMin: 65, xMax: 1015, yMin: 915, yMax: 1200 } },
      note:     { selector: '#note-9x16',     expected: { xMin: 65, xMax: 1015, yMin: 1195, yMax: 1250 } }
    }
  }
];

async function render() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu', '--hide-scrollbars']
  });

  const previewDir = path.resolve(__dirname, 'previews', 'static-b');
  fs.mkdirSync(previewDir, { recursive: true });

  const summaryResults = [];

  for (const cfg of CONFIGS) {
    console.log(`\n======================================================`);
    console.log(` RENDERING & VERIFYING ${cfg.ratio} (${cfg.width} x ${cfg.height})`);
    console.log(`======================================================`);

    const page = await browser.newPage();
    await page.setViewport({ width: cfg.width, height: cfg.height, deviceScaleFactor: 1 });

    const htmlPath = path.resolve(__dirname, 'enlesweb-ads-static-b.html').replace(/\\/g, '/');
    const urlClean = `file://${htmlPath}?clean=1&ratio=${cfg.ratio}`;
    await page.goto(urlClean, { waitUntil: 'networkidle0' });

    await page.evaluate(async () => {
      document.body.style.overflow = 'hidden';
      await document.fonts.ready;
      if (window.fit) window.fit();
    });

    await new Promise(r => setTimeout(r, 300));

    const stageEl = await page.$('#stage');
    if (!stageEl) throw new Error('#stage element not found!');

    // 1. Capture Clean Production PNG
    const outPath = path.resolve(__dirname, cfg.outputPng);
    await stageEl.screenshot({ path: outPath, type: 'png' });
    const stat = fs.statSync(outPath);
    console.log(`✓ Saved clean production image: ${cfg.outputPng} (${stat.size} bytes)`);

    // 2. Capture Preview with Safe Zone Guide
    await page.evaluate(() => {
      document.body.classList.add('show-guide');
      const g = document.getElementById('safe-guide');
      if (g) g.classList.remove('hide');
    });
    const guideOutPath = path.resolve(__dirname, cfg.guidePng);
    await stageEl.screenshot({ path: guideOutPath, type: 'png' });
    console.log(`✓ Saved safe zone guide preview: ${cfg.guidePng}`);

    // 3. Automated Bounding-Box & Text Overflow Measurements
    const measurements = await page.evaluate((selectors) => {
      const results = {};
      const stageRect = document.getElementById('stage').getBoundingClientRect();
      for (const [key, sel] of Object.entries(selectors)) {
        const el = document.querySelector(sel);
        if (!el) {
          results[key] = null;
          continue;
        }
        const rect = el.getBoundingClientRect();
        // Also check all child .spec-text, .offer-price, .note-concept rights
        let maxChildRight = Math.round(rect.right - stageRect.left);
        el.querySelectorAll('.spec-text, .offer-price, .note-concept, .label-sub').forEach(ch => {
          const cr = ch.getBoundingClientRect();
          const rEdge = Math.round(cr.right - stageRect.left);
          if (rEdge > maxChildRight) maxChildRight = rEdge;
        });
        results[key] = {
          x: Math.round(rect.left - stageRect.left),
          y: Math.round(rect.top - stageRect.top),
          width: Math.round(rect.width),
          height: Math.round(rect.height),
          right: Math.max(Math.round(rect.right - stageRect.left), maxChildRight),
          bottom: Math.round(rect.bottom - stageRect.top)
        };
      }
      return results;
    }, Object.fromEntries(Object.entries(cfg.zones).map(([k, v]) => [k, v.selector])));

    console.log('\n--- Bounding Box & Overflow Verifications ---');
    let allPassed = true;
    const checks = [];

    for (const [zoneKey, zoneDef] of Object.entries(cfg.zones)) {
      const actual = measurements[zoneKey];
      if (!actual) {
        console.error(`✗ Element not found: ${zoneDef.selector}`);
        allPassed = false;
        continue;
      }

      const exp = zoneDef.expected;
      const sz = cfg.safeZone;

      const inSafeX = actual.x >= sz.xMin && actual.right <= sz.xMax;
      const inSafeY = actual.y >= sz.yMin && actual.bottom <= sz.yMax;
      const safePassed = inSafeX && inSafeY;

      const status = safePassed ? 'PASS' : 'FAIL';
      if (!safePassed) allPassed = false;

      checks.push({ zone: zoneKey, status, actual });
      console.log(`[${status}] ${zoneKey.padEnd(8)}: actual [x: ${actual.x}..${actual.right}, y: ${actual.y}..${actual.bottom}] | safeZone [x: ${sz.xMin}..${sz.xMax}, y: ${sz.yMin}..${sz.yMax}]`);
    }

    summaryResults.push({
      ratio: cfg.ratio,
      width: cfg.width,
      height: cfg.height,
      allPassed
    });

    await page.close();
  }

  await browser.close();

  console.log('\n======================================================');
  console.log(' ALL RENDERS & VERIFICATIONS COMPLETED');
  console.log('======================================================');
  for (const s of summaryResults) {
    console.log(`Ratio ${s.ratio} (${s.width}x${s.height}): ${s.allPassed ? 'ALL CHECKS PASSED ✓' : 'SOME CHECKS FAILED ✗'}`);
  }
}

render().catch(err => {
  console.error('Fatal render error:', err);
  process.exit(1);
});
