const path = require('path');
const fs = require('fs');
const puppeteer = require('./node_modules/puppeteer-core');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const snapshots = [
  { t: 0.5, name: '01_hook_start' },
  { t: 1.8, name: '02_hook_punch' },
  { t: 3.8, name: '03_tuntas_intro' },
  { t: 5.4, name: '04_tuntas_jadwal' },
  { t: 6.2, name: '05_tuntas_biaya' },
  { t: 7.8, name: '06_ripeir_intro' },
  { t: 9.8, name: '07_ripeir_zoom' },
  { t: 13.0, name: '08_bento_offer' }
];

async function capture(ratio, width, height, showGuide = false) {
  const outDir = path.resolve(__dirname, 'previews', ratio + (showGuide ? '_guide' : ''));
  fs.mkdirSync(outDir, { recursive: true });

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

  await page.evaluate(async (guide) => {
    document.body.style.overflow = 'hidden';
    await document.fonts.ready;
    if (window.fit) window.fit();
    const g = document.getElementById('safe-guide');
    if (g) {
      if (guide) {
        document.body.classList.add('show-guide');
        g.classList.remove('hide');
      } else {
        document.body.classList.remove('show-guide');
        g.classList.add('hide');
      }
    }
  }, showGuide);

  await new Promise(r => setTimeout(r, 400));
  const stageEl = await page.$('#stage');

  for (const s of snapshots) {
    const frame = Math.round(s.t * 30);
    await page.evaluate((f) => {
      window.seekFrame(f, 30);
    }, frame);

    await new Promise(r => setTimeout(r, 50));

    const shotPath = path.join(outDir, `${s.name}_${s.t}s.png`);
    await stageEl.screenshot({ path: shotPath, type: 'png' });
    console.log(`Saved [${ratio}${showGuide ? ' GUIDE' : ''}]: ${shotPath}`);
  }

  await browser.close();
}

async function run() {
  console.log('Capturing 9:16...');
  await capture('9x16', 1080, 1920, false);
  console.log('Capturing 9:16 with Safe Zone Guide...');
  await capture('9x16', 1080, 1920, true);

  console.log('Capturing 4:5...');
  await capture('4x5', 1080, 1350, false);
  console.log('Capturing 4:5 with Safe Zone Guide...');
  await capture('4x5', 1080, 1350, true);

  console.log('Done capturing previews!');
}

run().catch(console.error);
