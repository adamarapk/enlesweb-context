const puppeteer = require('./node_modules/puppeteer-core');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function reStitch() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true
  });

  const page = await browser.newPage();
  await page.goto('about:blank');

  // Load images as Base64
  const readB64 = name => fs.readFileSync(path.resolve(__dirname, 'assets', name)).toString('base64');
  
  const bTuntas1 = readB64('sstuntas1.jpg');
  const bTuntas2 = readB64('sstuntas2.jpg');
  const bTuntas4 = readB64('sstuntas4.jpg');

  const bRipeir1 = readB64('ssripeir1.jpg');
  const bRipeir3 = readB64('ssripeir3.jpg');
  const bRipeir5 = readB64('ssripeir5.jpg');

  const bSeruput1 = readB64('ssseruput1.jpg');

  const stitched = await page.evaluate(async (t1B, t2B, t4B, r1B, r3B, r5B, s1B) => {
    function loadImg(b64) {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = 'data:image/jpeg;base64,' + b64;
      });
    }

    const t1 = await loadImg(t1B);
    const t2 = await loadImg(t2B);
    const t4 = await loadImg(t4B);

    const r1 = await loadImg(r1B);
    const r3 = await loadImg(r3B);
    const r5 = await loadImg(r5B);

    const s1 = await loadImg(s1B);

    const topPad = 60; // 60px breathing room so phone's rounded corners don't clip the website navbar

    // ========================================================
    // 1. TUNTAS (Cut out Chrome header y=0..245)
    // ========================================================
    // Part 1: t1 from y=245 down to 2374 (exact seam border after SD schedule)
    const t1_start = 245;
    const t1_end = 2374;
    const t1_h = t1_end - t1_start;

    // Part 2: t2 from y=475 down to 980 (SMP & SMA schedule rows, completing the full Jadwal table)
    const t2_start = 475;
    const t2_end = 980;
    const t2_h = t2_end - t2_start;

    // Part 3: t4 from y=245 down to 1350 (Dua format belajar fee table + Lihat Jadwal dan Biaya button)
    const t4_start = 245;
    const t4_end = 1350;
    const t4_h = t4_end - t4_start;

    const tTotalH = topPad + t1_h + t2_h + t4_h;
    const cT = document.createElement('canvas');
    cT.width = 1080;
    cT.height = tTotalH;
    const ctxT = cT.getContext('2d');

    // Fill top padding with website's white navbar color
    ctxT.fillStyle = '#FFFFFF';
    ctxT.fillRect(0, 0, 1080, topPad + 10);

    ctxT.drawImage(t1, 0, t1_start, 1080, t1_h, 0, topPad, 1080, t1_h);

    // Patch bersih dari t2 untuk menghapus tombol WhatsApp hijau dari t1 (agar tuntas bersih seperti ripeir)
    const patchSx = 500, patchSy = 250, patchSw = 580, patchSh = 225;
    ctxT.drawImage(t2, patchSx, patchSy, patchSw, patchSh, patchSx, topPad + (patchSy + 1899 - t1_start), patchSw, patchSh);

    ctxT.drawImage(t2, 0, t2_start, 1080, t2_h, 0, topPad + t1_h, 1080, t2_h);
    ctxT.drawImage(t4, 0, t4_start, 1080, t4_h, 0, topPad + t1_h + t2_h, 1080, t4_h);

    const tuntasB64 = cT.toDataURL('image/jpeg', 0.94);

    // ========================================================
    // 2. RIPEIR (Cut out Chrome header y=0..245)
    // ========================================================
    // Part 1: r1 from y=245 to y=1800 (Navbar 'ripeir', Hero, WhatsApp button, workbench deskmat top)
    const r1_start = 245;
    const r1_end = 1800;
    const r1_h = r1_end - r1_start;

    // Part 2: r3 from y=245 to y=2050 (Layanan Servis header + full Laptop repair card)
    const r3_start = 245;
    const r3_end = 2050;
    const r3_h = r3_end - r3_start;

    // Part 3: r5 from y=245 to y=1950 (full Handphone repair card)
    const r5_start = 245;
    const r5_end = 1950;
    const r5_h = r5_end - r5_start;

    const rTotalH = topPad + r1_h + r3_h + r5_h;
    const cR = document.createElement('canvas');
    cR.width = 1080;
    cR.height = rTotalH;
    const ctxR = cR.getContext('2d');

    // Fill top padding with ripeir's dark header color
    ctxR.fillStyle = '#08100E';
    ctxR.fillRect(0, 0, 1080, topPad + 10);

    ctxR.drawImage(r1, 0, r1_start, 1080, r1_h, 0, topPad, 1080, r1_h);
    ctxR.drawImage(r3, 0, r3_start, 1080, r3_h, 0, topPad + r1_h, 1080, r3_h);
    ctxR.drawImage(r5, 0, r5_start, 1080, r5_h, 0, topPad + r1_h + r3_h, 1080, r5_h);

    const ripeirB64 = cR.toDataURL('image/jpeg', 0.94);

    // ========================================================
    // 3. SERUPUT (Cut out Chrome header y=0..245)
    // ========================================================
    const s1_start = 245;
    const s1_end = 2400;
    const s1_h = s1_end - s1_start;
    const sTotalH = topPad + s1_h;

    const cS = document.createElement('canvas');
    cS.width = 1080;
    cS.height = sTotalH;
    const ctxS = cS.getContext('2d');

    // Fill top padding with Seruput's terracotta navbar color (#DF1400)
    ctxS.fillStyle = '#DF1400';
    ctxS.fillRect(0, 0, 1080, topPad + 10);

    ctxS.drawImage(s1, 0, s1_start, 1080, s1_h, 0, topPad, 1080, s1_h);

    const seruputB64 = cS.toDataURL('image/jpeg', 0.94);

    return { tuntasB64, ripeirB64, seruputB64, tTotalH, rTotalH, sTotalH };
  }, bTuntas1, bTuntas2, bTuntas4, bRipeir1, bRipeir3, bRipeir5, bSeruput1);

  const saveJpg = (b64, dest) => {
    const buf = Buffer.from(b64.replace(/^data:image\/jpeg;base64,/, ''), 'base64');
    fs.writeFileSync(dest, buf);
    console.log(`Saved ${dest} (size: ${buf.length})`);
  };

  saveJpg(stitched.tuntasB64, path.resolve(__dirname, 'assets', 'tuntas-chrome-android.jpg'));
  saveJpg(stitched.ripeirB64, path.resolve(__dirname, 'assets', 'ripeir-chrome-android.jpg'));
  saveJpg(stitched.seruputB64, path.resolve(__dirname, 'assets', 'seruput-chrome-android.jpg'));

  console.log('Stitching completed successfully!');
  console.log(`tuntas height: ${stitched.tTotalH}px | ripeir height: ${stitched.rTotalH}px | seruput height: ${stitched.sTotalH}px`);
  await browser.close();
}

reStitch().catch(console.error);
