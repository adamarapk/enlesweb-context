const path = require('path');
const fs = require('fs');
const puppeteer = require('./node_modules/puppeteer-core');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const snapshots = [
  { t: 0.5, name: '01_hook_start' },
  { t: 1.8, name: '02_hook_punch' },
  { t: 3.8, name: '03_tuntas_intro' },
  { t: 5.0, name: '04_tuntas_jadwal' },
  { t: 6.0, name: '05_tuntas_biaya' },
  { t: 7.8, name: '06_ripeir_intro' },
  { t: 9.8, name: '07_ripeir_zoom' },
  { t: 12.5, name: '08_offer_editorial' }
];

async function measureAndCapture(ratio, width, height) {
  const outDir = path.resolve(__dirname, 'previews', ratio);
  const outDirGuide = path.resolve(__dirname, 'previews', ratio + '_guide');
  fs.mkdirSync(outDir, { recursive: true });
  fs.mkdirSync(outDirGuide, { recursive: true });

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    defaultViewport: { width, height, deviceScaleFactor: 1 },
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu', '--hide-scrollbars', `--window-size=${width},${height}`]
  });

  const page = await browser.newPage();
  await page.setViewport({ width, height, deviceScaleFactor: 1 });

  const urlParams = new URLSearchParams({
    clean: '1',
    ratio: ratio === '4x5' ? '4x5' : '9x16',
    pause: '1'
  });

  const fileUrl = `file://${path.resolve(__dirname, 'enlesweb-ads-15s-a.html').replace(/\\/g, '/')}?${urlParams.toString()}`;
  await page.goto(fileUrl, { waitUntil: 'networkidle0' });

  await page.evaluate(async () => {
    document.body.style.overflow = 'hidden';
    await document.fonts.ready;
    if (window.fit) window.fit();
  });

  await new Promise(r => setTimeout(r, 400));
  const stageEl = await page.$('#stage');

  console.log(`\n================= VERIFYING ${ratio} (${width}x${height}) =================`);

  // Safe zone bounds
  const safeZone = ratio === '4x5' 
    ? { left: 65, right: 1015, top: 250, bottom: 1010 }
    : { left: 65, right: 1015, top: 270, bottom: 1250 };

  for (const s of snapshots) {
    const frame = Math.round(s.t * 30);
    await page.evaluate((f) => {
      window.seekFrame(f, 30);
    }, frame);

    await new Promise(r => setTimeout(r, 60));

    // Capture clean
    await page.evaluate(() => {
      document.body.classList.remove('show-guide');
      const g = document.getElementById('safe-guide');
      if (g) g.classList.add('hide');
    });
    const shotPathClean = path.join(outDir, `${s.name}_${s.t}s.png`);
    await stageEl.screenshot({ path: shotPathClean, type: 'png' });

    // Capture with guide
    await page.evaluate(() => {
      document.body.classList.add('show-guide');
      const g = document.getElementById('safe-guide');
      if (g) g.classList.remove('hide');
    });
    const shotPathGuide = path.join(outDirGuide, `${s.name}_${s.t}s_guide.png`);
    await stageEl.screenshot({ path: shotPathGuide, type: 'png' });

    // Measure bounding boxes
    const metrics = await page.evaluate((sz) => {
      const res = {};
      const els = [
        '#scene-hook',
        '#hook-punch',
        '#tier-badge-wrap',
        '#badge-business',
        '#badge-starter',
        '#phone-rig',
        '#zona-c-wrap',
        '#cue-tuntas-1',
        '#cue-tuntas-2',
        '#cue-ripeir-1',
        '#cue-ripeir-2',
        '#scene-offer',
        '#note-concept'
      ];

      for (const sel of els) {
        const el = document.querySelector(sel);
        if (el) {
          const style = window.getComputedStyle(el);
          const opacity = parseFloat(style.opacity);
          const visibility = style.visibility;
          const display = style.display;
          if (opacity > 0.05 && visibility !== 'hidden' && display !== 'none') {
            const r = el.getBoundingClientRect();
            res[sel] = {
              x: Math.round(r.left),
              y: Math.round(r.top),
              w: Math.round(r.width),
              h: Math.round(r.height),
              r: Math.round(r.right),
              b: Math.round(r.bottom),
              opacity
            };
          }
        }
      }
      return res;
    }, safeZone);

    console.log(`[t = ${s.t}s] ${s.name}:`);
    for (const [k, m] of Object.entries(metrics)) {
      const isDecorative = (k === '#phone-rig');
      const inX = m.x >= safeZone.left - 5 && m.r <= safeZone.right + 5;
      const inY = isDecorative ? (m.y >= safeZone.top - 5) : (m.y >= safeZone.top - 5 && m.b <= safeZone.bottom + 5);
      const statusY = isDecorative ? (m.b > safeZone.bottom ? 'BLEED (OK)' : 'OK') : (inY ? 'OK' : 'FAIL');
      console.log(`  ${k}: x=${m.x}..${m.r}, y=${m.y}..${m.b} | Safe: X=${inX?'OK':'FAIL'}, Y=${statusY}`);
    }
  }

  await browser.close();
}

async function main() {
  await measureAndCapture('9x16', 1080, 1920);
  await measureAndCapture('4x5', 1080, 1350);
  console.log('\nAll measurements and snapshots complete!');
}

main().catch(console.error);
