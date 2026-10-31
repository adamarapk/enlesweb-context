/**
 * ENLESWEB Iklan D (15s) - Safe Zone Verifier + Keyframe Capture
 *
 * Turunan verify-light-theme.js / preview-snapshots.js.
 * Mengukur bounding box tiap elemen teks terhadap Safe Zone pada 2 rasio,
 * lalu menyimpan screenshot keyframe ke previews/15s-d/ (folder baru, tidak
 * menimpa previews/9x16/, previews/4x5/, maupun file .mp4 yang sudah ada).
 *
 * Usage: node campaign-1/verify-15s-d.js
 */

const path = require('path');
const fs = require('fs');
const puppeteer = require('./node_modules/puppeteer-core');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const FILE = 'enlesweb-ads-15s-d.html';

const SNAPSHOTS = [
  { t: 0.0,  name: '01_frame0_hook' },
  { t: 0.8,  name: '02_hook_pivot' },
  { t: 1.6,  name: '03_hook_swash' },
  { t: 2.6,  name: '04_hook_exit' },
  { t: 3.4,  name: '05_split_columns' },
  { t: 4.9,  name: '06_split_business_scroll' },
  { t: 6.2,  name: '07_split_starter_scroll' },
  { t: 7.6,  name: '08_detail_crop_in' },
  { t: 8.6,  name: '09_detail_caption' },
  { t: 9.6,  name: '10_detail_scrolled' },
  { t: 11.4, name: '11_cta_price' },
  { t: 12.9, name: '12_cta_wa' },
  { t: 13.8, name: '13_cta_endcard' },
  { t: 14.9, name: '14_cta_hold' }
];

/* Elemen yang WAJIB 100% di dalam Safe Zone */
const TEXT_ELS = [
  '#hook-l1', '#hook-l2', '#hook-l3', '#hook-sub',
  '#tier-name-starter', '#tier-price-starter', '#tier-spec-starter',
  '#tier-name-business', '#tier-price-business', '#tier-spec-business',
  '#detail-cap',
  '#brand-row', '#cta-price', '#cta-sub', '#inc-1', '#inc-2', '#inc-3',
  '#cta-line', '#cta-num', '#cta-note'
];

/* Elemen mockup/visual: boleh melewati batas bawah Safe Zone */
const BLEED_ELS = ['#phone-starter', '#phone-business', '#crop-win', '#split-divider'];

const SAFE = {
  '9x16': { left: 65, right: 1015, top: 270, bottom: 1250 },
  '4x5':  { left: 65, right: 1015, top: 250, bottom: 1010 }
};

async function measureAndCapture(ratio, width, height) {
  const outDir = path.resolve(__dirname, 'previews', '15s-d', ratio);
  fs.mkdirSync(outDir, { recursive: true });

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    defaultViewport: { width, height, deviceScaleFactor: 1 },
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu', '--hide-scrollbars', `--window-size=${width},${height}`]
  });

  const page = await browser.newPage();
  await page.setViewport({ width, height, deviceScaleFactor: 1 });

  const consoleErrors = [];
  page.on('console', (m) => { if (m.type() === 'error') consoleErrors.push(m.text()); });
  page.on('pageerror', (e) => consoleErrors.push('PAGEERROR: ' + e.message));

  const params = new URLSearchParams({ clean: '1', ratio: ratio === '4x5' ? '4x5' : '9x16', pause: '1' });
  const fileUrl = `file://${path.resolve(__dirname, FILE).replace(/\\/g, '/')}?${params.toString()}`;
  await page.goto(fileUrl, { waitUntil: 'networkidle0' });

  await page.evaluate(async () => {
    document.body.style.overflow = 'hidden';
    await document.fonts.ready;
    if (window.fit) window.fit();
  });
  await new Promise(r => setTimeout(r, 400));

  // Assertion API global
  const api = await page.evaluate(() => ({
    total: window.TOTAL,
    hasSeekFrame: typeof window.seekFrame === 'function',
    duration: (window.gsap && document.getElementById('stage')) ? null : null
  }));
  const tlInfo = await page.evaluate(() => {
    const res = { duration: null };
    // tl berada di scope script (const), tidak di window; ukur lewat seekFrame
    const before = document.getElementById('rng').value;
    return res;
  });

  const stageEl = await page.$('#stage');
  const safe = SAFE[ratio];
  let failures = 0;
  let checked = 0;

  console.log(`\n================ VERIFY ${ratio} (${width}x${height}) ================`);

  for (const s of SNAPSHOTS) {
    const frame = Math.round(s.t * 30);
    await page.evaluate((f) => { window.seekFrame(f, 30); }, frame);
    await new Promise(r => setTimeout(r, 60));

    await stageEl.screenshot({ path: path.join(outDir, `${s.name}_${s.t}s.png`), type: 'png' });

    const metrics = await page.evaluate((sels, bleeds) => {
      const res = { text: {}, bleed: {} };
      const read = (sel) => {
        const el = document.querySelector(sel);
        if (!el) return null;
        const st = window.getComputedStyle(el);
        const opacity = parseFloat(st.opacity);
        const visible = opacity > 0.05 && st.visibility !== 'hidden' && st.display !== 'none';
        if (!visible) return null;
        const r = el.getBoundingClientRect();
        return {
          x: Math.round(r.left), y: Math.round(r.top),
          r: Math.round(r.right), b: Math.round(r.bottom),
          w: Math.round(r.width), h: Math.round(r.height),
          opacity: Math.round(opacity * 100) / 100
        };
      };
      sels.forEach(sel => { const m = read(sel); if (m) res.text[sel] = m; });
      bleeds.forEach(sel => { const m = read(sel); if (m) res.bleed[sel] = m; });
      return res;
    }, TEXT_ELS, BLEED_ELS);

    const problems = [];
    for (const [sel, m] of Object.entries(metrics.text)) {
      checked++;
      const inX = m.x >= safe.left - 5 && m.r <= safe.right + 5;
      const inY = m.y >= safe.top - 5 && m.b <= safe.bottom + 5;
      if (!inX || !inY) {
        failures++;
        problems.push(`${sel} x=${m.x}..${m.r} y=${m.y}..${m.b} (X=${inX ? 'ok' : 'FAIL'} Y=${inY ? 'ok' : 'FAIL'})`);
      }
    }
    console.log(`[t=${s.t.toFixed(1)}s] ${s.name} | text=${Object.keys(metrics.text).length} bleed=${Object.keys(metrics.bleed).length} | ${problems.length ? 'FAIL' : 'OK'}`);
    problems.forEach(p => console.log('    ! ' + p));

    // Frame 0: hook l1+l2 harus tegas (opaque) dan di dalam safe zone
    if (s.t === 0.0) {
      const f0 = await page.evaluate(() => {
        const a = document.getElementById('hook-l1');
        const b = document.getElementById('hook-l2');
        const cs = (el) => window.getComputedStyle(el);
        return {
          l1op: parseFloat(cs(a).opacity),
          l2op: parseFloat(cs(b).opacity),
          l1vis: cs(a).visibility,
          l2vis: cs(b).visibility
        };
      });
      const assertive = f0.l1op > 0.9 && f0.l2op > 0.9 && f0.l1vis !== 'hidden' && f0.l2vis !== 'hidden';
      console.log(`    FRAME0 hook l1 opacity=${f0.l1op} l2 opacity=${f0.l2op} -> ${assertive ? 'ASSERTIVE OK' : 'FAIL (blank/pale at 0.00s)'}`);
      if (!assertive) failures++;
    }
  }

  console.log(`  safe zone: x ${safe.left}..${safe.right}, y ${safe.top}..${safe.bottom}`);
  console.log(`  checked text boxes: ${checked}, failures: ${failures}`);
  if (consoleErrors.length) {
    console.log('  CONSOLE ERRORS:');
    consoleErrors.forEach(e => console.log('    ! ' + e));
  } else {
    console.log('  console: clean');
  }

  await browser.close();
  return { failures, checked };
}

/* =========================================================
   PEMERIKSAAN API GLOBAL, QUERY PARAM, DAN TOOLBAR
   ========================================================= */
async function checkApi() {
  const results = [];
  const assert = (name, pass, detail) => {
    results.push({ name, pass, detail });
    console.log(`  [${pass ? 'PASS' : 'FAIL'}] ${name}${detail ? ' -> ' + detail : ''}`);
  };

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    defaultViewport: { width: 1400, height: 1000, deviceScaleFactor: 1 },
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu', '--hide-scrollbars']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 1000, deviceScaleFactor: 1 });

  const base = `file://${path.resolve(__dirname, FILE).replace(/\\/g, '/')}`;
  const errs = [];
  page.on('pageerror', (e) => errs.push(e.message));

  console.log('\n================ API & PARAMETER ================');

  // 1. Default load: API global + durasi timeline
  await page.goto(base + '?pause', { waitUntil: 'networkidle0' });
  await page.evaluate(async () => { await document.fonts.ready; });
  await new Promise(r => setTimeout(r, 300));

  const api = await page.evaluate(() => {
    let dur = null;
    try { dur = eval('tl.duration()'); } catch (e) { dur = 'ERR:' + e.message; }
    return {
      total: window.TOTAL,
      seek: typeof window.seekFrame,
      duration: dur,
      rng: document.getElementById('rng').value
    };
  });
  assert('window.TOTAL === 15.0', api.total === 15.0, 'nilai=' + api.total);
  assert('window.seekFrame adalah fungsi', api.seek === 'function', 'typeof=' + api.seek);
  assert('tl.duration() === 15 (toleransi 1e-6)', typeof api.duration === 'number' && Math.abs(api.duration - 15) < 1e-6, 'durasi=' + api.duration);

  // 2. seekFrame(450, 30) harus mendarat di t=15 (frame terakhir 30 fps)
  const seekEnd = await page.evaluate(() => {
    window.seekFrame(450, 30);
    return document.getElementById('rng').value;
  });
  assert('seekFrame(450,30) -> t=15.0', Math.abs(parseFloat(seekEnd) - 15) < 1e-6, 't=' + seekEnd);

  // 3. seekFrame(0) -> t=0 dan hook l1/l2 tetap opaque
  const seekZero = await page.evaluate(() => {
    window.seekFrame(0, 30);
    const cs = (id) => window.getComputedStyle(document.getElementById(id));
    return {
      t: document.getElementById('rng').value,
      l1: parseFloat(cs('hook-l1').opacity),
      l2: parseFloat(cs('hook-l2').opacity),
      ctaOpacity: parseFloat(cs('sc-cta').opacity),
      splitOpacity: parseFloat(cs('sc-split').opacity)
    };
  });
  assert('seekFrame(0) -> t=0', Math.abs(parseFloat(seekZero.t)) < 1e-6, 't=' + seekZero.t);
  assert('frame 0: hook l1+l2 opaque', seekZero.l1 > 0.9 && seekZero.l2 > 0.9, `l1=${seekZero.l1} l2=${seekZero.l2}`);
  assert('frame 0: adegan lain tersembunyi', seekZero.ctaOpacity < 0.05 && seekZero.splitOpacity < 0.05,
    `cta=${seekZero.ctaOpacity} split=${seekZero.splitOpacity}`);

  // 4. ?ratio=4x5
  await page.goto(base + '?pause&ratio=4x5', { waitUntil: 'networkidle0' });
  await page.evaluate(async () => { await document.fonts.ready; });
  const r45 = await page.evaluate(() => {
    const st = document.getElementById('stage');
    return { has: st.classList.contains('r45'), h: st.offsetHeight, w: st.offsetWidth };
  });
  assert('?ratio=4x5 -> .r45 aktif dan stage 1080x1350', r45.has && r45.h === 1350 && r45.w === 1080, `h=${r45.h} w=${r45.w}`);

  // 5. ?clean -> toolbar tersembunyi dan skala 1:1
  await page.goto(base + '?pause&clean', { waitUntil: 'networkidle0' });
  await page.evaluate(async () => { await document.fonts.ready; });
  const clean = await page.evaluate(() => {
    const ctl = document.getElementById('ctl');
    const st = document.getElementById('stage');
    return { ctlDisplay: getComputedStyle(ctl).display, transform: st.style.transform, bodyOverflow: document.body.style.overflow };
  });
  assert('?clean -> toolbar display none', clean.ctlDisplay === 'none', 'display=' + clean.ctlDisplay);
  assert('?clean -> stage skala 1:1', clean.transform === 'scale(1)', 'transform=' + clean.transform);

  // 6. ?t=8.5 -> timeline pada 8.5 detik
  await page.goto(base + '?t=8.5', { waitUntil: 'networkidle0' });
  await page.evaluate(async () => { await document.fonts.ready; });
  await new Promise(r => setTimeout(r, 400));
  const at = await page.evaluate(() => document.getElementById('rng').value);
  assert('?t=8.5 -> timeline pada 8.5 dtk', Math.abs(parseFloat(at) - 8.5) < 0.02, 't=' + at);

  // 7. ?t=99 -> clamp ke 15
  await page.goto(base + '?t=99', { waitUntil: 'networkidle0' });
  await page.evaluate(async () => { await document.fonts.ready; });
  await new Promise(r => setTimeout(r, 400));
  const clamped = await page.evaluate(() => document.getElementById('rng').value);
  assert('?t=99 -> clamp ke 15', Math.abs(parseFloat(clamped) - 15) < 0.02, 't=' + clamped);

  // 8. ?pause -> tidak autoplay
  await page.goto(base + '?pause', { waitUntil: 'networkidle0' });
  await page.evaluate(async () => { await document.fonts.ready; });
  await new Promise(r => setTimeout(r, 900));
  const paused = await page.evaluate(() => document.getElementById('rng').value);
  assert('?pause -> timeline tetap di 0', Math.abs(parseFloat(paused)) < 0.02, 't=' + paused);

  // 9. Tanpa ?pause -> autoplay berjalan
  await page.goto(base, { waitUntil: 'networkidle0' });
  await page.evaluate(async () => { await document.fonts.ready; });
  await new Promise(r => setTimeout(r, 900));
  const playing = await page.evaluate(() => document.getElementById('rng').value);
  assert('tanpa ?pause -> autoplay berjalan', parseFloat(playing) > 0.2, 't=' + playing);

  // 10. Toolbar: tombol play/pause, rasio, guide, scrubber
  await page.goto(base + '?pause', { waitUntil: 'networkidle0' });
  await page.evaluate(async () => { await document.fonts.ready; });
  const toolbar = await page.evaluate(async () => {
    const pp = document.getElementById('pp');
    const rt = document.getElementById('rt');
    const gt = document.getElementById('guide-toggle');
    const rng = document.getElementById('rng');
    const st = document.getElementById('stage');
    const guide = document.getElementById('safe-guide');
    const out = {};

    pp.click();
    await new Promise(r => setTimeout(r, 400));
    out.playStarted = parseFloat(rng.value) > 0.05;
    out.ppLabel = pp.textContent;
    pp.click();
    await new Promise(r => setTimeout(r, 150));
    out.ppPaused = pp.textContent === 'Play';

    rt.click();
    out.ratioToggled = st.classList.contains('r45') && rt.textContent === 'Ganti ke 9:16';
    rt.click();
    out.ratioBack = !st.classList.contains('r45') && rt.textContent === 'Ganti ke 4:5';

    gt.click();
    out.guideHidden = guide.classList.contains('hide');
    gt.click();
    out.guideBack = !guide.classList.contains('hide');

    rng.value = '5.5';
    rng.dispatchEvent(new Event('input'));
    out.scrub = Math.abs(parseFloat(rng.value) - 5.5) < 1e-6;
    out.scrubTime = document.getElementById('tt').textContent;
    return out;
  });
  assert('toolbar Play menjalankan timeline', toolbar.playStarted, 'label=' + toolbar.ppLabel);
  assert('toolbar Pause menghentikan timeline', toolbar.ppPaused);
  assert('toolbar toggle rasio 9:16 <-> 4:5', toolbar.ratioToggled && toolbar.ratioBack);
  assert('toolbar toggle safe zone', toolbar.guideHidden && toolbar.guideBack);
  assert('toolbar scrubber mengatur waktu', toolbar.scrub, 'time=' + toolbar.scrubTime);

  assert('tidak ada page error', errs.length === 0, errs.join(' | ') || 'bersih');

  await browser.close();
  const failed = results.filter(r => !r.pass);
  console.log(`\n  API/PARAM: ${results.length - failed.length} PASS, ${failed.length} FAIL`);
  return failed.length;
}

async function main() {
  const a = await measureAndCapture('9x16', 1080, 1920);
  const b = await measureAndCapture('4x5', 1080, 1350);
  const apiFails = await checkApi();
  const total = a.failures + b.failures;
  console.log(`\n================ RINGKASAN ================`);
  console.log(`9x16: ${a.failures} failure dari ${a.checked} pemeriksaan`);
  console.log(`4x5 : ${b.failures} failure dari ${b.checked} pemeriksaan`);
  console.log(`API/param/toolbar: ${apiFails} failure`);
  console.log(total === 0 && apiFails === 0 ? 'SEMUA PEMERIKSAAN LOLOS' : `TOTAL FAILURE: ${total + apiFails}`);
  console.log('Screenshot: previews/15s-d/<rasio>/');
}

main().catch(err => { console.error(err); process.exit(1); });
