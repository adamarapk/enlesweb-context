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

const PORT = 4331;
await new Promise((resolve) => server.listen(PORT, resolve));

const browser = await puppeteer.launch({
  executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox']
});

const page = await browser.newPage();
const results = [];

function assert(condition, message) {
  if (!condition) {
    results.push({ pass: false, message });
    console.error(`FAIL: ${message}`);
  } else {
    results.push({ pass: true, message });
    console.log(`PASS: ${message}`);
  }
}

try {
  console.log('=== TEST 1: PRATINJAU KLIEN (DEFAULT RECIPE) ===');
  await page.goto(`http://localhost:${PORT}/pratinjau/`, { waitUntil: 'domcontentloaded' });
  await page.evaluate(() => new Promise((r) => requestAnimationFrame(r)));

  // 1. Verify clean mode: lab global bar is hidden
  const labBarDisplay = await page.evaluate(() => {
    const bar = document.getElementById('lab-global-bar');
    return bar ? window.getComputedStyle(bar).display : 'none';
  });
  assert(labBarDisplay === 'none', 'Header bar LAB tersembunyi pada mode clean di /pratinjau');

  // 2. Verify visible variants in default recipe
  const defaultVisible = await page.evaluate(() => {
    const wraps = Array.from(document.querySelectorAll('.pratinjau-variant-wrap'));
    return wraps
      .filter((w) => window.getComputedStyle(w).display !== 'none')
      .map((w) => w.getAttribute('data-variant-code'));
  });
  assert(defaultVisible.length === 13, `Tepat 13 section tampil pada default recipe (ditemukan: ${defaultVisible.length})`);
  assert(defaultVisible[0] === 'N1', `Varian pertama adalah N1 (ditemukan: ${defaultVisible[0]})`);
  assert(defaultVisible[12] === 'F1', `Varian terakhir adalah F1 (ditemukan: ${defaultVisible[12]})`);

  console.log('\n=== TEST 2: PRATINJAU DENGAN QUERY RECIPE KHUSUS & FALLBACK ===');
  const customRecipe = 'N2,H1,K2,S2,U1,C2,F2';
  await page.goto(`http://localhost:${PORT}/pratinjau/?s=${customRecipe}`, { waitUntil: 'domcontentloaded' });
  await page.evaluate(() => new Promise((r) => requestAnimationFrame(r)));

  const customVisible = await page.evaluate(() => {
    const wraps = Array.from(document.querySelectorAll('.pratinjau-variant-wrap'));
    return wraps
      .filter((w) => window.getComputedStyle(w).display !== 'none')
      .map((w) => w.getAttribute('data-variant-code'));
  });
  assert(
    customVisible.join(',') === customRecipe,
    `Hanya 7 section sesuai resep yang tampil dan urutan DOM identik (${customVisible.join(',')})`
  );

  // Check hidden variants (e.g. N1, H2, S1 should be display: none)
  const isN1Hidden = await page.evaluate(() => {
    const n1 = document.querySelector('[data-variant-code="N1"]');
    return n1 ? window.getComputedStyle(n1).display === 'none' : true;
  });
  assert(isN1Hidden, 'Varian yang tidak dipilih (N1) tersembunyi sepenuhnya');

  // Test invalid recipe query fallback (graceful recovery to full stack)
  await page.goto(`http://localhost:${PORT}/pratinjau/?s=INVALID_CODE_123,XYZ`, { waitUntil: 'domcontentloaded' });
  await page.evaluate(() => new Promise((r) => requestAnimationFrame(r)));
  const fallbackCount = await page.evaluate(() => {
    const wraps = Array.from(document.querySelectorAll('.pratinjau-variant-wrap'));
    return wraps.filter((w) => window.getComputedStyle(w).display !== 'none').length;
  });
  assert(fallbackCount === 13, `Resep invalid otomatis fallback menampilkan 13 section standar (ditemukan: ${fallbackCount})`);

  // Test Biaya CTA link points to #section-cta instead of #kontak
  await page.goto(`http://localhost:${PORT}/pratinjau/?s=B1,C1`, { waitUntil: 'domcontentloaded' });
  await page.evaluate(() => new Promise((r) => requestAnimationFrame(r)));
  const biayaCtaHref = await page.evaluate(() => {
    const btn = document.querySelector('.b1-btn');
    return btn ? btn.getAttribute('href') : null;
  });
  assert(biayaCtaHref === '#section-cta', `Tombol paket biaya mengarah ke #section-cta (ditemukan: ${biayaCtaHref})`);

  // Test Lokasi maps button does not open new tab when mapsUrl is an anchor
  await page.goto(`http://localhost:${PORT}/pratinjau/?s=L1`, { waitUntil: 'domcontentloaded' });
  await page.evaluate(() => new Promise((r) => requestAnimationFrame(r)));
  const mapsTarget = await page.evaluate(() => {
    const link = document.querySelector('.l1-actions a');
    return link ? link.getAttribute('target') : null;
  });
  assert(mapsTarget === null, `Tombol peta lokasi tidak membuka tab baru untuk tautan anchor internal (target: ${mapsTarget})`);

  console.log('\n=== TEST 3: PRATINJAU ANCHOR & TEMA GELAP ===');
  await page.goto(`http://localhost:${PORT}/pratinjau/?s=${customRecipe}&tema=gelap`, { waitUntil: 'domcontentloaded' });
  const isDark = await page.evaluate(() => document.documentElement.getAttribute('data-theme') === 'dark');
  assert(isDark, 'Parameter tema=gelap mengaktifkan atribut data-theme="dark"');

  // Verify anchor targets exist in the visible sections
  const hasAnchors = await page.evaluate(() => {
    return !!document.getElementById('section-navbar') && !!document.getElementById('section-layanan');
  });
  assert(hasAnchors, 'Section aktif memiliki ID anchor #section-* yang sesuai');

  console.log('\n=== TEST 4: STUDIO PERAKIT (BERANDA /) ===');
  await page.goto(`http://localhost:${PORT}/`, { waitUntil: 'domcontentloaded' });
  await page.evaluate(() => new Promise((r) => requestAnimationFrame(r)));

  // Check toolbar elements
  const hasControls = await page.evaluate(() => {
    return (
      !!document.getElementById('composer-toolbar') &&
      !!document.getElementById('composer-recipe-display') &&
      !!document.getElementById('btn-copy-preview') &&
      !!document.getElementById('btn-open-preview') &&
      !!document.getElementById('composer-deck') &&
      !!document.getElementById('composer-canvas')
    );
  });
  assert(hasControls, 'Seluruh kontrol studio perakit (toolbar, resep, copy, deck, kanvas) terpasang di DOM');

  // Test preset click: "Jasa & Layanan"
  await page.click('[data-preset="jasa"]');
  await page.evaluate(() => new Promise((r) => requestAnimationFrame(r)));

  const jasaRecipe = await page.evaluate(() => {
    return document.getElementById('composer-recipe-display').textContent.trim();
  });
  const expectedJasa = 'N2,H1,K3,S1,P2,G3,U1,B2,Q2,L1,C3,F1';
  assert(jasaRecipe === expectedJasa, `Klik preset Jasa & Layanan mengubah resep menjadi ${expectedJasa}`);

  // Test client preview link URL
  const previewLinkHref = await page.evaluate(() => {
    return document.getElementById('btn-open-preview').getAttribute('href');
  });
  assert(previewLinkHref.includes('/pratinjau?s=' + expectedJasa), 'Tombol Buka Pratinjau Klien mengarah ke URL pratinjau dengan parameter resep aktif');

  // Test Navbar and Footer button locking
  const isNavbarAndFooterLocked = await page.evaluate(() => {
    const rows = Array.from(document.querySelectorAll('.composer-deck-row'));
    const navUp = rows[0].querySelector('.composer-mini-btn:first-child').disabled;
    const navDown = rows[0].querySelector('.composer-mini-btn:last-child').disabled;
    const footUp = rows[rows.length - 1].querySelector('.composer-mini-btn:first-child').disabled;
    const footDown = rows[rows.length - 1].querySelector('.composer-mini-btn:last-child').disabled;
    return navUp && navDown && footUp && footDown;
  });
  assert(isNavbarAndFooterLocked, 'Navbar terkunci di paling atas dan Footer terkunci di paling bawah (tombol urutan nonaktif)');

  // Test preset Ringkas + activating Galeri puts Galeri before Footer (never after Footer)
  await page.click('[data-preset="ringkas"]');
  await page.evaluate(() => new Promise((r) => requestAnimationFrame(r)));
  await page.evaluate(() => {
    const rows = Array.from(document.querySelectorAll('.composer-deck-row'));
    const galeriRow = rows.find((r) => r.querySelector('.composer-row-name').textContent.trim() === 'Galeri');
    if (galeriRow) {
      const checkbox = galeriRow.querySelector('input[type="checkbox"]');
      checkbox.click();
    }
  });
  await page.evaluate(() => new Promise((r) => requestAnimationFrame(r)));

  const ringkasWithGaleri = await page.evaluate(() => {
    return document.getElementById('composer-recipe-display').textContent.trim();
  });
  assert(
    ringkasWithGaleri.endsWith(',F2') && /,(G[1-3]),F2$/.test(ringkasWithGaleri),
    `Mengaktifkan Galeri pada preset Ringkas menempatkan Galeri sebelum Footer: ${ringkasWithGaleri}`
  );

  // Test Viewport toggle
  await page.click('#vp-mobile-btn');
  const isMobile = await page.evaluate(() => {
    return document.getElementById('composer-viewport').classList.contains('is-mobile-view');
  });
  assert(isMobile, 'Tombol Mobile 390px mengaktifkan kelas simulasi mobile');

  await page.click('#vp-desktop-btn');
  const isDesktop = await page.evaluate(() => {
    return !document.getElementById('composer-viewport').classList.contains('is-mobile-view');
  });
  assert(isDesktop, 'Tombol Desktop mengembalikan kanvas ke lebar penuh');

  // Test deck toggle
  await page.click('#toggle-deck-btn');
  const isDeckCollapsed = await page.evaluate(() => {
    return document.getElementById('composer-deck').classList.contains('is-collapsed');
  });
  assert(isDeckCollapsed, 'Tombol toggle deck dapat menyembunyikan panel kontrol section');

  // Re-open deck
  await page.click('#toggle-deck-btn');

  console.log('\n=== TEST 5: GALERI STICKY JUMP-BAR & BUTTON GUNAKAN ===');
  await page.goto(`http://localhost:${PORT}/galeri/`, { waitUntil: 'domcontentloaded' });
  const hasJumpBar = await page.evaluate(() => {
    const bar = document.getElementById('galeri-sticky-jump-bar');
    if (!bar) return false;
    const links = Array.from(bar.querySelectorAll('.galeri-jump-link'));
    return links.length === 13;
  });
  assert(hasJumpBar, 'Galeri memiliki sticky jump-bar dengan 13 tautan kategori section');

  const hasUseButtons = await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('.galeri-btn-use'));
    return btns.length === 13;
  });
  assert(hasUseButtons, 'Semua 13 toolbar di galeri memiliki tombol "Gunakan di Perakit"');

  console.log('\n=== TEST 6: INDIKATOR VARIAN DECK & INTERAKTIVITAS RUNTIME ===');
  await page.goto(`http://localhost:${PORT}/`, { waitUntil: 'domcontentloaded' });
  await page.evaluate(() => {
    document.documentElement.removeAttribute('data-theme');
    try { localStorage.setItem('layout-lab-theme', 'light'); } catch (e) {}
  });
  await page.evaluate(() => new Promise((r) => requestAnimationFrame(r)));

  // 1. Verify active variant button styling (high contrast solid ink, white text, 800 weight, aria-pressed=true)
  const activeBtnProps = await page.evaluate(() => {
    const btn = document.querySelector('.composer-v-choice.active');
    if (!btn) return null;
    const cs = window.getComputedStyle(btn);
    return {
      bg: cs.backgroundColor,
      color: cs.color,
      fontWeight: cs.fontWeight,
      ariaPressed: btn.getAttribute('aria-pressed')
    };
  });
  assert(
    activeBtnProps &&
    activeBtnProps.bg === 'rgb(17, 17, 17)' &&
    activeBtnProps.color === 'rgb(255, 255, 255)' &&
    activeBtnProps.fontWeight === '800' &&
    activeBtnProps.ariaPressed === 'true',
    'Tombol varian aktif memiliki kontras tinggi solid ink (#111111), teks putih (#ffffff), font 800, dan aria-pressed="true"'
  );

  // 2. Verify inactive variant button styling (aria-pressed=false)
  const inactiveBtnProps = await page.evaluate(() => {
    const btn = document.querySelector('.composer-v-choice:not(.active)');
    if (!btn) return null;
    const cs = window.getComputedStyle(btn);
    return {
      bg: cs.backgroundColor,
      color: cs.color,
      ariaPressed: btn.getAttribute('aria-pressed')
    };
  });
  assert(
    inactiveBtnProps &&
    inactiveBtnProps.bg === 'rgb(255, 255, 255)' &&
    inactiveBtnProps.color === 'rgb(17, 17, 17)' &&
    inactiveBtnProps.ariaPressed === 'false',
    'Tombol varian nonaktif memiliki background terang, teks ink, dan aria-pressed="false"'
  );

  // 3. Verify variant indicator tag in title row
  const hasVariantTags = await page.evaluate(() => {
    const tags = Array.from(document.querySelectorAll('.composer-variant-tag'));
    return tags.length === 13 && tags.every((t) => /^\[[A-Z][1-4]\]$/.test(t.textContent.trim()));
  });
  assert(hasVariantTags, 'Seluruh 13 kartu deck menampilkan tag varian aktif di baris judul (format [A-Z][1-4])');

  // 4. Verify clicking variant button switches active state, updates title tag, and updates recipe
  await page.evaluate(() => {
    const heroRow = Array.from(document.querySelectorAll('.composer-deck-row'))
      .find((r) => r.getAttribute('data-kind') === 'hero');
    const h3Btn = Array.from(heroRow.querySelectorAll('.composer-v-choice'))
      .find((b) => b.textContent.trim() === 'H3');
    h3Btn.click();
  });

  const heroSwitched = await page.evaluate(() => {
    const heroRow = Array.from(document.querySelectorAll('.composer-deck-row'))
      .find((r) => r.getAttribute('data-kind') === 'hero');
    const tag = heroRow.querySelector('.composer-variant-tag').textContent.trim();
    const h3Btn = Array.from(heroRow.querySelectorAll('.composer-v-choice'))
      .find((b) => b.textContent.trim() === 'H3');
    const recipe = document.getElementById('composer-recipe-display').textContent.trim();
    return {
      tag,
      h3Active: h3Btn.classList.contains('active'),
      h3Aria: h3Btn.getAttribute('aria-pressed'),
      inRecipe: recipe.includes('H3')
    };
  });
  assert(
    heroSwitched.tag === '[H3]' && heroSwitched.h3Active && heroSwitched.h3Aria === 'true' && heroSwitched.inRecipe,
    'Klik varian H3 mengubah tag menjadi [H3], tombol H3 aktif dengan aria-pressed="true", dan resep memuat H3'
  );

  // 5. Verify clicking variant on inactive section activates it immediately
  await page.evaluate(() => {
    // Uncheck Keunggulan
    const keunggulanRow = Array.from(document.querySelectorAll('.composer-deck-row'))
      .find((r) => r.getAttribute('data-kind') === 'keunggulan');
    keunggulanRow.querySelector('input[type="checkbox"]').click();
  });

  const keunggulanInactive = await page.evaluate(() => {
    const keunggulanRow = Array.from(document.querySelectorAll('.composer-deck-row'))
      .find((r) => r.getAttribute('data-kind') === 'keunggulan');
    return keunggulanRow.classList.contains('is-inactive') &&
      keunggulanRow.querySelector('.composer-row-status')?.textContent.trim() === '(Nonaktif)';
  });
  assert(keunggulanInactive, 'Menonaktifkan checkbox memberi kelas is-inactive dan status (Nonaktif)');

  // Click K2 while inactive -> should activate and select K2
  await page.evaluate(() => {
    const keunggulanRow = Array.from(document.querySelectorAll('.composer-deck-row'))
      .find((r) => r.getAttribute('data-kind') === 'keunggulan');
    const k2Btn = Array.from(keunggulanRow.querySelectorAll('.composer-v-choice'))
      .find((b) => b.textContent.trim() === 'K2');
    k2Btn.click();
  });

  const keunggulanReactivated = await page.evaluate(() => {
    const keunggulanRow = Array.from(document.querySelectorAll('.composer-deck-row'))
      .find((r) => r.getAttribute('data-kind') === 'keunggulan');
    const tag = keunggulanRow.querySelector('.composer-variant-tag').textContent.trim();
    const isInactive = keunggulanRow.classList.contains('is-inactive');
    const recipe = document.getElementById('composer-recipe-display').textContent.trim();
    return { tag, isInactive, inRecipe: recipe.includes('K2') };
  });
  assert(
    !keunggulanReactivated.isInactive && keunggulanReactivated.tag === '[K2]' && keunggulanReactivated.inRecipe,
    'Klik varian K2 pada kartu nonaktif langsung mengaktifkan section dan memilih varian K2'
  );

} catch (err) {
  console.error('Test execution error:', err);
  assert(false, 'Unhandled exception during test: ' + err.message);
} finally {
  await browser.close();
  server.close();
}

const failed = results.filter((r) => !r.pass);
console.log('\n========================================');
console.log(`TOTAL PENGUJIAN: ${results.length}`);
console.log(`LULUS: ${results.length - failed.length}`);
console.log(`GAGAL: ${failed.length}`);
console.log('========================================\n');

if (failed.length > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
