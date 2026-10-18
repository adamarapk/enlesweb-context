const puppeteer = require('./node_modules/puppeteer-core');
const fs = require('fs');
const path = require('path');

async function stitchRipeir() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--allow-file-access-from-files']
  });

  const page = await browser.newPage();
  const htmlPath = path.resolve(__dirname, 'stitch-runner.html').replace(/\\/g, '/');
  await page.goto('file:///' + htmlPath);

  const base64Data = await page.evaluate(async (assetsDir) => {
    function loadImg(src) {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
      });
    }

    const r1 = await loadImg(assetsDir + '/ssripeir1.jpg');
    const r3 = await loadImg(assetsDir + '/ssripeir3.jpg');
    const r5 = await loadImg(assetsDir + '/ssripeir5.jpg');

    // Section 1: r1 from 0 to 1800 (contains status bar, address bar ripeir.vercel.app, hero, WhatsApp button, and workbench deskmat top)
    const h1 = 1800;
    // Section 2: r3 from 240 (below status & navbar) to 2050 (contains Layanan Servis, and full Laptop repair card with Tanya Servis Laptop button)
    const y3_start = 240;
    const y3_end = 2050;
    const h3 = y3_end - y3_start;

    // Section 3: r5 from 240 (below status & navbar) to 1950 (contains full Handphone repair card with Tanya Servis Handphone button)
    const y5_start = 240;
    const y5_end = 1950;
    const h5 = y5_end - y5_start;

    const totalH = h1 + h3 + h5;
    const canvas = document.createElement('canvas');
    canvas.width = 1080;
    canvas.height = totalH;
    const ctx = canvas.getContext('2d');

    // Draw section 1 (Hero)
    ctx.drawImage(r1, 0, 0, 1080, h1, 0, 0, 1080, h1);
    // Draw section 2 (Layanan Servis - Laptop)
    ctx.drawImage(r3, 0, y3_start, 1080, h3, 0, h1, 1080, h3);
    // Draw section 3 (Handphone)
    ctx.drawImage(r5, 0, y5_start, 1080, h5, 0, h1 + h3, 1080, h5);

    return canvas.toDataURL('image/jpeg', 0.94);
  }, path.resolve(__dirname, 'assets').replace(/\\/g, '/'));

  const buffer = Buffer.from(base64Data.replace(/^data:image\/jpeg;base64,/, ''), 'base64');
  fs.writeFileSync('campaign-1/assets/ripeir-chrome-android.jpg', buffer);
  console.log('Stitched ripeir-chrome-android.jpg written, size:', buffer.length);
  await browser.close();
}

stitchRipeir().catch(console.error);
