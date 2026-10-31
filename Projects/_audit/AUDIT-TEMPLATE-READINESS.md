# AUDIT KESIAPAN TEMPLATE ENLESWEB (7 REPOSITORI)

Tanggal audit: 2026-10-20 | Lingkungan uji: Windows, Node `v22.13.1`, npm `11.1.0`, Git `2.51.0.windows.1` `[FAKTA]`
Catatan per repo: `d:\myself\web\7project\_audit\notes\<nama-repo>.md` | Log build: `d:\myself\web\7project\_audit\scripts\build-<nama-repo>.log` `[FAKTA]`

---

## 1. Ringkasan Eksekutif

1. `[FAKTA]` Seluruh 7 repositori berhasil menjalankan `npm ci` dan `npm run build` (exit code `0`) dalam 6,4 hingga 21,8 detik, tetapi `seruput` gagal pada `npm run check` dengan 13 error TypeScript (`ts(18047)`) di `src/components/Navbar.astro:303-326`.
2. `[FAKTA]` Tidak ada satu pun berkas kode sumber di dalam `src/` (`.astro`, `.ts`, `.css`) yang identik secara byte (`SHA256`) antar-repositori; kemiripan baris unik tertinggi pada `Navbar.astro`, `Footer.astro`, `WhatsAppButton.astro`, dan `FloatingWhatsApp.astro` hanya `20,0%` sampai `27,1%`.
3. `[FAKTA]` Konvensi arsitektur terbelah menjadi tiga pola: pola `site.ts` + `copy.ts` terpusat (`enlesweb`, `ripeir`, `tuntas`, `berflower`), pola `site.ts` + `src/data/*.ts` dengan teks tertanam di komponen (`seruput`, `klimis`), serta pola Tailwind + `siteConfig` (`jerseay`).
4. `[FAKTA]` Pemisahan data dan kode terbaik pada kelompok Starter/jasa ada di `ripeir` (`530` kata di `src/content/copy.ts` vs `2` kata prosa di template `.astro`, `0` error `astro check`), sedangkan `seruput` (`345` kata di `.astro`) dan `klimis` (`298` kata di `.astro`) masih menanam banyak teks di komponen.
5. `[FAKTA]` Mekanisme `demoMode` belum aman untuk produksi klien: ketika `demoMode` diubah ke `false`, teks disclaimer konsep/demo di halaman dan footer (`seruput/src/components/Story.astro:54`, `tuntas/src/content/copy.ts:293`, `jerseay/src/components/navigation/Footer.astro:91`, `berflower/src/components/DemoNote.astro:5`) tetap tampil karena tidak dikondisikan pada `site.demoMode`.
6. `[FAKTA]` Tidak ditemukan berkas `.env` atau kunci rahasia API di seluruh 7 repositori; hanya `enlesweb` yang menanam Meta Pixel ID publik di `src/config/site.ts:20`, sementara 4 repositori (`ripeir`, `tuntas`, `berflower`, `enlesweb`) menanam tautan placeholder atau akun studio di konfigurasi/komponen.
7. `[ESTIMASI]` `ripeir` direkomendasikan sebagai SATU repositori dasar terbaik untuk varian Starter generik "bisnis jasa" karena struktur `site.ts` + `copy.ts` paling bersih dan hanya memerlukan sekitar `1,5 jam` perapikan ringan sebelum siap disalin lintas klien.

---

## 2. Tabel Skor dan Kategori 7 Repo

Skala skor per dimensi: `0` (buruk/gagal) sampai `3` (sangat baik/siap pakai), total maksimum `15` (kolom uji tukar dihapus sesuai kesepakatan). Penilaian bersifat `[ESTIMASI]` auditor berdasarkan bukti faktual pada Bagian 3 dan Bagian 4.

| # | Repo (Paket, Niche) | Build Sehat (0-3) | Pemisahan Data (0-3) | Token Desain (0-3) | Kunci Niche (0-3) | Kesiapan Preview (0-3) | Total (/15) | Kategori & Estimasi Usaha |
|---|---|---:|---:|---:|---:|---:|---:|---|
| 1 | **enlesweb** (Situs utama) | 3 | 3 | 2 | 1 | 1 | **10/15** | **ACUAN** (bukan calon template) |
| 2 | **seruput** (Starter, kedai kopi) | 2 | 1 | 2 | 2 | 2 | **9/15** | **REFACTOR** (`~3,5 jam` `[ESTIMASI]`) |
| 3 | **ripeir** (Starter, servis perangkat) | 3 | 3 | 3 | 3 | 2 | **14/15** | **RAPIKAN RINGAN** (`~1,5 jam` `[ESTIMASI]`) |
| 4 | **tuntas** (Business, bimbel) | 3 | 2 | 3 | 2 | 3 | **13/15** | **REFACTOR** (`~3,0 jam` `[ESTIMASI]`) |
| 5 | **jerseay** (Growth, jersey kustom) | 3 | 1 | 1 | 0 | 1 | **6/15** | **TIDAK LAYAK** dijadikan dasar (`>8 jam` `[ESTIMASI]`) |
| 6 | **klimis / dipotongin** (Growth, barbershop) | 3 | 2 | 2 | 1 | 2 | **10/15** | **REFACTOR** (`~4,0 jam` `[ESTIMASI]`) |
| 7 | **berflower** (Growth, florist) | 3 | 3 | 2 | 0 | 2 | **10/15** | **TIDAK LAYAK** untuk Starter jasa (`>8 jam` `[ESTIMASI]`) |

---

## 3. Temuan per Repo dengan Bukti

### Pemeriksaan Rahasia & `.env` Lintas 7 Repo
- `[FAKTA]` Pemindaian berkas `.env*`, `*.pem`, `*.key` di luar `node_modules` dan `.git` pada ketujuh repositori menghasilkan `0` berkas.
- `[FAKTA]` Pemindaian pola token/rahasia (`AIza...`, `sk-...`, `ghp_...`, `SECRET`, `API_KEY`, `PRIVATE_KEY`, `TOKEN`, `metaPixelId`) di `src/`, `public/`, dan `scripts/` tidak menemukan kunci rahasia privat. Satu-satunya ID pelacak yang tertanam di kode adalah `metaPixelId` publik di `enlesweb/src/config/site.ts:20` (nilai tidak ditampilkan sesuai aturan audit).

---

### 3.1. `enlesweb` (Situs Utama, Acuan Konvensi)

#### Tahap 1: Inventarisasi
- `[FAKTA]` **Versi & Engine:** Astro `7.3.5` terpasang (`enlesweb/package.json:14` `"astro": "^7.3.5"`), TypeScript `^5.9.3` (`package.json:19`). Tidak ada field `engines` di `package.json` dan tidak ada `.nvmrc`; `node_modules/astro/package.json` mensyaratkan `node >=22.12.0`.
- `[FAKTA]` **Dependensi & Styling:** `@fontsource/poppins ^5.3.0`, `@astrojs/check ^0.9.10`, `@astrojs/sitemap ^3.7.4`, `potrace ^2.1.8`, `wrangler ^4.147.0` (`package.json:12-21`). Pendekatan styling: CSS murni di `src/styles/global.css` (145 baris) + `<style>` terlingkup di tiap komponen `.astro`.
- `[FAKTA]` **Package Manager & Skrip:** npm dengan `package-lock.json`. Skrip (`package.json:5-11`): `dev` (`astro dev`), `check` (`astro check`), `build` (`astro check && astro build`), `preview` (`astro preview`), `deploy` (`npm run build && wrangler deploy`).
- `[FAKTA]` **Struktur `src/` & Halaman:** `assets/` (27 berkas), `components/` (14 berkas `.astro`), `config/site.ts` (56 baris), `content/copy.ts` (334 baris), `layouts/Base.astro` (265 baris), `lib/whatsapp.ts` (5 baris), `pages/` (2 halaman statis: `index.astro` 25 baris, `kebijakan-privasi.astro` 201 baris; `0` rute dinamis), `styles/global.css` (145 baris).
- `[FAKTA]` **Hosting & Git:** Cloudflare Workers/Assets melalui `wrangler.json:1-8` (`"directory": "./dist"`) dan `public/_headers:1-5`. Commit terakhir: `2026-10-18T21:06:15+07:00` (`869aa1c`, total 27 commit). Working tree memiliki 3 perubahan dokumen belum di-commit (`ENLESWEB-CONTEXT-PROGRESS-HISTORY.md`, `ENLESWEB-DOCS-V3.md`, `ENLESWEB-DOCS-V4.md`).

#### Tahap 2: Kesehatan Build
- `[FAKTA]` `npm ci`: sukses (exit `0`) dalam `46,3 detik`. Warning: `EBADENGINE undici@8.11.2` (meminta Node `>=22.19.0`, lokal `v22.13.1`) dan `deprecated phin@2.9.3 / 3.7.1`.
- `[FAKTA]` `npm run build` (mencakup `astro check && astro build`): sukses (exit `0`) dalam `21,8 detik`. Hasil `astro check`: `24 files, 0 errors, 0 warnings, 0 hints`. Ukuran `dist/`: `41 berkas`, `1.629.774 byte` (`1,55 MB`).

#### Tahap 3: Pemisahan Data dan Kode
- **a. Lokasi data bisnis:** `[FAKTA]` Identitas bisnis berada di `src/config/site.ts:17-60` (`name` L18, `whatsappNumber` L19, `metaPixelId` L20, `siteUrl` L21, `instagramUrl` L22, `showLaunchNote` L26, `projects` L28-59). Seluruh teks narasi, harga paket, FAQ, dan kebijakan privasi berada di `src/content/copy.ts:1-334` (`~952 kata` `[ESTIMASI]`). Tautan Google Maps dan jam buka tidak ada (`0` kemunculan).
- **b. Nilai hardcode di komponen/halaman:** `[FAKTA]` Prosa langsung di dalam template `.astro` adalah `0 simpul / 0 kata` (seluruh teks ditarik dari `copy.ts`). Namun ditemukan hardcode berikut lewat grep:
  - Nomor WA literal: `2` berkas (`src/config/site.ts:19` dan tertanam di teks kebijakan privasi `src/content/copy.ts:322`).
  - Nama usaha di pembuat WA: `1` berkas (`src/lib/whatsapp.ts:4` menanam string `"Halo EnlesWeb..."` alih-alih memakai `site.name`).
  - Domain `enlesweb.com`: `3` berkas di luar `site.ts` (`astro.config.mjs:5`, `public/robots.txt:4`, `public/llms.txt`).
  - Kode warna hex (`#...`): `148` kemunculan di `7` berkas (`HeroObject.astro` 82, `FinalCta.astro` 33, `Hero.astro` 12, `Footer.astro` 7, `global.css` 7, `Projects.astro` 4, `WhatsAppButton.astro` 3).
- **c. Sentralisasi token desain:** `[FAKTA]` Token warna (`--accent: #E4FF30`, `--ink`, `--canvas`, dll.), radius (`--radius-sm/md/lg`), dan font (`--font-family`) terpusat di `src/styles/global.css:6-53`. Mengganti warna aksen **tidak cukup dari satu tempat** karena kode hex `#E4FF30` juga tertanam langsung di elemen SVG `src/components/FinalCta.astro:66,74,84`. Font diimpor di dua tempat: `src/styles/global.css:1-4` dan preload `.woff2` di `src/layouts/Base.astro:4-7`.
- **d. Pembuat WA, SEO, JSON-LD:** `[FAKTA]` Pembuat WA terpusat di `src/lib/whatsapp.ts:3-5` (`waUrl(topic)`). Metadata SEO (`<title>`, `<meta description>`, canonical, OpenGraph), JSON-LD (`ProfessionalService` + `OfferCatalog`), dan skrip Meta Pixel terpusat di `src/layouts/Base.astro:75-274`.
- **e. Aset gambar & favicon:** `[FAKTA]` Favicon dirujuk dari `/favicon.svg` (`Base.astro:77`), gambar OG dicek otomatis dengan `fs.existsSync(path.join(process.cwd(), 'public', 'og-image.png'))` (`Base.astro:28-30`), dan tangkapan layar proyek diimpor dari `src/assets/projects/` di dalam `Projects.astro`. Aset dapat diganti tanpa menyentuh kode komponen selama nama berkas sama.
- **f. Flag demoMode / banner konsep:** `[FAKTA]` Tidak memiliki `demoMode` atau `noindex` karena merupakan situs produksi utama; hanya memiliki flag `showLaunchNote: true` di `src/config/site.ts:26`.

#### Tahap 4: Kunci Niche
- `[FAKTA]` Terkunci penuh pada penjualan jasa pembuatan website ENLESWEB: matriks 3 kolom paket (`Packages.astro` 79 baris, `PackageColumn.astro` 298 baris, `CustomPackage.astro` 133 baris), etalase 6 proyek konsep (`Projects.astro` 460 baris, `ProjectItem.astro` 98 baris), ilustrasi SVG `HeroObject.astro` (404 baris), dan pelacakan konversi `AddToCart`/`ViewContent` Meta Pixel (`Base.astro:196-274`).

---

### 3.2. `seruput` (Seruput Kopi - Starter, Kedai Kopi)

#### Tahap 1: Inventarisasi
- `[FAKTA]` **Versi & Engine:** Astro `5.18.2` terpasang (`seruput/package.json:18` `"astro": "^5.4.2"`), TypeScript `^5.7.3` (`package.json:22`). Tanpa `engines` di `package.json` dan tanpa `.nvmrc`.
- `[FAKTA]` **Dependensi & Styling:** 4 paket font (`@fontsource/bricolage-grotesque`, `@fontsource/fraunces`, `@fontsource/plus-jakarta-sans`, `@fontsource/space-mono`), `@astrojs/check ^0.9.4`. Tanpa `@astrojs/sitemap`. Styling CSS murni di `src/styles/global.css` (149 baris) + `<style>` komponen.
- `[FAKTA]` **Package Manager & Skrip:** npm dengan `package-lock.json`. Skrip (`package.json:6-13`): `dev`, `start`, `build` (`astro build` **tanpa** `astro check`), `preview`, `check` (`astro check`), `verify` (`node scripts/verify.mjs`), `verify:release` (`node scripts/verify-release.mjs`).
- `[FAKTA]` **Struktur `src/` & Halaman:** `assets/images/` (2 berkas `.jpg`), `components/` (11 berkas `.astro`), `config/site.ts` (42 baris), `data/` (`beans.ts` 50 baris, `menu.ts` 68 baris, `reviews.ts` 30 baris), `layouts/BaseLayout.astro` (64 baris), `lib/whatsapp.ts` (33 baris), `pages/` (`index.astro` 25 baris, `404.astro` 96 baris; `0` rute dinamis), `styles/global.css` (149 baris).
- `[FAKTA]` **Hosting & Git:** Tidak ada berkas konfigurasi hosting (`vercel.json` maupun `wrangler.json` absen). Commit terakhir: `2026-10-14T16:48:49+07:00` (`e734867`, 7 commit), working tree bersih.

#### Tahap 2: Kesehatan Build
- `[FAKTA]` `npm ci`: sukses (exit `0`) dalam `21,2 detik` (warning `EBADENGINE undici@8.11.2`, `deprecated tsconfck@3.1.6`).
- `[FAKTA]` `npm run build`: sukses (exit `0`) dalam `6,4 detik` (2 halaman). Ukuran `dist/`: `38 berkas`, `572.387 byte` (`0,55 MB`).
- `[FAKTA]` `npm run check` (dijalankan terpisah): **GAGAL (exit `1`) dengan `13 errors, 0 warnings, 0 hints`**. Seluruh 13 error adalah `error ts(18047): 'navbar' / 'mobileNav' / 'toggleBtn' is possibly 'null'` di `src/components/Navbar.astro:303-326`.
- `[FAKTA]` `node scripts/verify.mjs` dan `node scripts/slop-lint.mjs`: lulus (`0 FAIL, 0 REVIEW`).

#### Tahap 3: Pemisahan Data dan Kode
- **a. Lokasi data bisnis:** `[FAKTA]` `src/config/site.ts:24-44` menyimpan `name`, `tagline`, `siteUrl`, `enleswebUrl`, `demoMode`, `publicIndexable`, `studioWhatsappNumber`, `demoWhatsappNumber`, `instagramUrl`, `mapsUrl`, `mapsEmbedUrl`, `address`, `patokan`, `akses`, dan `openingHours`. Data produk berada di `src/data/menu.ts`, `src/data/beans.ts`, dan `src/data/reviews.ts`. Tidak ada `copy.ts` dan tidak ada Pixel ID.
- **b. Nilai hardcode di komponen/halaman:** `[FAKTA]` Sangat banyak teks bisnis dan niche yang tertanam langsung di komponen `.astro` (`42 simpul / ~345 kata` `[ESTIMASI]`):
  - Nomor WA & alamat dummy tertanam di struk hero: `src/components/Hero.astro:22` (`Fondamenta della Misericordia No. 2599, Venice | WA: 0812-3456-7890`) dan `Hero.astro:13`, tidak mengambil dari `site.address` maupun `site.studioWhatsappNumber`.
  - Nama usaha/niche (`Seruput`, `Venice`, `kopi`, `kanal`) muncul `105 kali` di `13 berkas`, termasuk `Story.astro` (17 kali), `lib/whatsapp.ts` (16 kali), `menu.ts` (15 kali), `beans.ts` (10 kali), `Hero.astro` (9 kali), `BaseHead.astro` (8 kali), `Footer.astro` (5 kali), `BeansSection.astro` (5 kali).
  - Kode warna hex (`#...`): `33` kemunculan di `9` berkas (`global.css` 15, `FloatingWhatsApp.astro` 5, `Footer.astro` 3, `Navbar.astro` 3, `Hero.astro` 2, `WhatsAppButton.astro` 2, `ContactSection.astro` 1, `LocationSection.astro` 1, `404.astro` 1).
- **c. Sentralisasi token desain:** `[FAKTA]` Token warna dan font berada di `src/styles/global.css:1-44`. Warna aksen `#CE3216` ditulis di 3 variabel berbeda (`--canvas-hero` L2, `--accent` L12, `--focus-outline` L16) plus `--accent-hover: #AF250D` (L13), tetapi tidak bocor sebagai literal hex di komponen (`0` kemunculan `#CE3216` di luar `global.css`). Dua paket font di `package.json` (`@fontsource/fraunces` dan `@fontsource/plus-jakarta-sans`) **tidak diimpor di mana pun** di `src/` (dependensi mati; `BaseHead.astro:3-7` hanya mengimpor `bricolage-grotesque` dan `space-mono`).
- **d. Pembuat WA, SEO, JSON-LD:** `[FAKTA]` Pembuat WA berada di `src/lib/whatsapp.ts:17-39` (`createWhatsAppUrl`, `createCustomWhatsAppUrl`), tetapi pesan WA menanam nama `"Seruput Kopi"` secara literal (`whatsapp.ts:6-15,36`) dan `createCustomWhatsAppUrl` pada `demoMode: true` memaksa semua pesan kustom menjadi pertanyaan tentang `"contoh biji kopi pada demo Seruput Kopi"` (`whatsapp.ts:35-37`). SEO berada di `src/components/BaseHead.astro:15-38` dengan default `title` dan `description` hardcode Seruput Kopi (L16-17). JSON-LD tidak ada (`0`).
- **e. Aset gambar & favicon:** `[FAKTA]` Favicon `/favicon.svg` di `public/`. Dua gambar (`hero-coffee.jpg`, `story-brew.jpg`) di `src/assets/images/` diimpor langsung di `src/components/Story.astro:3-4` dengan teks `alt` yang tertanam di `Story.astro:28-31,42-45`.
- **f. Flag demoMode / banner konsep:** `[FAKTA]` `demoMode: true` (`site.ts:29`) hanya mengubah nomor dan pesan WA di `lib/whatsapp.ts:18,27,35`. Kotak disclaimer `"Website ini merupakan konsep demo paket Starter oleh ENLESWEB..."` di `src/components/Story.astro:54` dan deskripsi `"Konsep paket Starter oleh ENLESWEB"` di `BaseHead.astro:17` **ditulis hardcode tanpa memeriksa `site.demoMode`**, sehingga tetap tampil walaupun `demoMode` diubah ke `false`.

#### Tahap 4: Kunci Niche
| Struktur Terkunci Niche | Berkas & Nomor Baris | Perkiraan Baris | Bentuk |
|---|---|---:|---|
| Struk kasir (`No Nota`, `Kasir: Barista Seruput`, `SEDUH DADAKAN`) + menu di Hero | `src/components/Hero.astro:17-76` | ~180 baris (dari 305) | **Logika & markup layout** (sulit diganti ke non-F&B) `[FAKTA]` |
| Data menu 4 kategori kopi/kudapan | `src/data/menu.ts:1-68` | 68 baris | **Data** + tipe union literal kategori di L4,7-12 `[FAKTA]` |
| Katalog biji kopi sangrai (`origin`, `altitude`, `roastProfile`, `tastingNotes`) | `src/data/beans.ts:1-50` + `src/components/BeansSection.astro:1-229` | 279 baris | **Data + komponen khusus niche** `[FAKTA]` |
| Cerita kedai & seduh dadakan | `src/components/Story.astro:1-143` | 143 baris | **Teks & struktur tertanam di komponen** `[FAKTA]` |
| Ulasan pengunjung (`favoriteOrder`) | `src/data/reviews.ts:1-30` + `src/components/SocialProofSection.astro:1-163` | 193 baris | **Data + komponen** (berisi testimoni fiktif) `[FAKTA]` |

---

### 3.3. `ripeir` (Starter, Servis Perangkat)

#### Tahap 1: Inventarisasi
- `[FAKTA]` **Versi & Engine:** Astro `5.18.2` terpasang (`ripeir/package.json:15` `"astro": "^5.4.2"`), TypeScript `^5.7.3`. Tanpa `engines` di `package.json` dan tanpa `.nvmrc`.
- `[FAKTA]` **Dependensi & Styling:** `@fontsource/ibm-plex-mono`, `@fontsource/ibm-plex-sans`, `@fontsource/ibm-plex-sans-condensed`, `@astrojs/check ^0.9.4`, `@types/node`. Tanpa `@astrojs/sitemap`. Styling CSS murni di `src/styles/global.css` (205 baris) + `<style>` komponen.
- `[FAKTA]` **Package Manager & Skrip:** npm dengan `package-lock.json`. Skrip (`package.json:6-12`): `dev`, `build` (`astro check && astro build`), `preview`, `check`, `test` (`node scripts/verify-all.mjs && node scripts/verify-launch-cut.mjs`).
- `[FAKTA]` **Struktur `src/` & Halaman:** `components/` (10 berkas `.astro`), `config/site.ts` (29 baris), `content/copy.ts` (240 baris), `layouts/Base.astro` (128 baris), `lib/whatsapp.ts` (33 baris), `pages/` (`index.astro` 19 baris, `404.astro` 47 baris; `0` rute dinamis), `styles/global.css` (205 baris). Aset gambar berada di `public/images/`.
- `[FAKTA]` **Hosting & Git:** Vercel melalui `vercel.json:1-19` (`cleanUrls: true`, header keamanan `X-Content-Type-Options` & `Referrer-Policy`). Commit terakhir: `2026-10-14T15:05:59+07:00` (`6726acc`, 12 commit), working tree bersih.

#### Tahap 2: Kesehatan Build
- `[FAKTA]` `npm ci`: sukses (exit `0`) dalam `22,0 detik` (warning `EBADENGINE undici@8.11.2`, `deprecated tsconfck@3.1.6`).
- `[FAKTA]` `npm run build` (mencakup `astro check && astro build`): sukses (exit `0`) dalam `17,3 detik`. Hasil `astro check`: `22 files, 0 errors, 0 warnings, 0 hints`. Ukuran `dist/`: `66 berkas`, `1.994.050 byte` (`1,90 MB`).
- `[FAKTA]` `npm test`: seluruh pengujian di `verify-all.mjs` dan `verify-launch-cut.mjs` LULUS (`0 error(s)`).

#### Tahap 3: Pemisahan Data dan Kode
- **a. Lokasi data bisnis:** `[FAKTA]` `src/config/site.ts:17-29` menyimpan `name`, `whatsappNumber`, `siteUrl`, `enleswebUrl`, `indexable`, `address`, `openingHours`, dan `mapsUrl`. Seluruh copy halaman, navigasi, layanan, langkah kerja, prinsip, footer, dan 404 berada di `src/content/copy.ts:1-240` (`~530 kata` `[ESTIMASI]`). Tidak ada Pixel ID.
- **b. Nilai hardcode di komponen/halaman:** `[FAKTA]` Prosa yang tertanam di template `.astro` hampir nol (`1 simpul / 2 kata` di `ServicesGrid.astro`). Temuan hardcode dari grep:
  - Nomor WA literal: hanya `1` di `src/config/site.ts:19` (`0` di komponen maupun `copy.ts`).
  - Tautan media sosial placeholder: `4` tautan hardcode di `src/components/Footer.astro:41,65,83,106` (`https://instagram.com/unknown`, `https://x.com/unknown`, `https://youtube.com/@unknown`, `https://github.com/unknown`) karena `SiteConfig` belum memiliki field sosial.
  - Nama brand di `copy.ts`: `copy.nav.brand` (`copy.ts:15`) dan `copy.footer.brand` (`copy.ts:210`) menulis string `'ripeir'` secara terpisah dari `site.name`.
  - Kode warna hex (`#...`): `20` kemunculan di `3` berkas (`global.css` 11, `ActionBar.astro` 5 untuk warna hijau WhatsApp `#25D366`, `HeroObject.astro` 4 pada ilustrasi SVG).
- **c. Sentralisasi token desain:** `[FAKTA]` Sangat bersih: seluruh warna tema (`--bg`, `--bg-raised`, `--line`, `--text`, `--accent: #FF6B1A`, `--accent-hover`, `--accent-active`), radius (`--radius-0`, `--radius-sm`), dan font (`--font-family-condensed`, `--font-family-sans`, `--font-family-mono`) berada di `src/styles/global.css:8-44`. Mengganti warna aksen cukup dari `src/styles/global.css:18-20`. Seluruh `@import '@fontsource/...'` hanya ada di `src/styles/global.css:1-6`.
- **d. Pembuat WA, SEO, JSON-LD:** `[FAKTA]` Pembuat WA terpusat di `src/lib/whatsapp.ts:1-33` (`waUrl(topic)`, `waMessageUrl`, `waDraftMessage`, `ctaAttrs`) dan sudah dinamis menggunakan `${site.name}` (`whatsapp.ts:4,19`). SEO (`<title>`, `<meta description>`, canonical, robots `noindex`, `og:image` otomatis via `fs.existsSync`) terpusat di `src/layouts/Base.astro:19-61`. Embed Google Maps dibuat otomatis dari `encodeURIComponent(site.address)` di `src/components/Footer.astro:11` tanpa perlu menyalin `mapsEmbedUrl` terpisah. JSON-LD tidak ada (`0`).
- **e. Aset gambar & favicon:** `[FAKTA]` Favicon `/favicon.svg` (`Base.astro:61`), `public/og-image.png` opsional (`Base.astro:19`), foto di `public/images/` dirujuk dari `copy.ts`. Dapat diganti tanpa menyentuh komponen.
- **f. Flag demoMode / banner konsep:** `[FAKTA]` Memiliki `indexable: false` di `src/config/site.ts:22` yang mengendalikan `<meta name="robots" content="noindex, nofollow" />` (`Base.astro:33-35`), sementara `public/robots.txt` statis berisi `Disallow: /`. Tidak ada flag `demoMode` atau banner konsep.

#### Tahap 4: Kunci Niche
| Struktur Terkunci Niche | Berkas & Nomor Baris | Perkiraan Baris | Bentuk |
|---|---|---:|---|
| Daftar 4 kategori layanan + daftar poin masalah/item & CTA per kategori | `src/content/copy.ts:85-175` + `src/components/ServicesGrid.astro:1-167` | 90 data + 167 UI | **Data murni + Grid generik** (mudah diganti ke menu layanan barbershop/salon/bengkel/katering; cukup ubah nama properti `devices`/`issues` atau isi datanya) `[FAKTA]` |
| Langkah kerja (`StepList`) & Prinsip layanan (`Principles`) | `src/content/copy.ts:55-83,176-208` + `StepList.astro` (126) + `Principles.astro` (77) | ~60 data + 203 UI | **Data murni + Komponen generik** `[FAKTA]` |
| Fungsi `waDraftMessage(device, issue, ...)` | `src/lib/whatsapp.ts:12-26` | 15 baris | **Logika kecil** (hanya dipakai di skrip tes `verify-launch-cut.mjs:37`, tidak dipanggil oleh komponen UI mana pun) `[FAKTA]` |
| Ilustrasi SVG `HeroObject.astro` | `src/components/HeroObject.astro:1-56` | 56 baris | **Markup visual** (mudah diganti foto/ilustrasi usaha lain) `[FAKTA]` |

---

### 3.4. `tuntas` (Business, Bimbel)

#### Tahap 1: Inventarisasi
- `[FAKTA]` **Versi & Engine:** Astro `7.3.8` (`tuntas/package.json:18` `"astro": "^7.3.8"`), TypeScript `^6.0.3` (`package.json:23`). Tanpa `engines` di `package.json` dan tanpa `.nvmrc`.
- `[FAKTA]` **Dependensi & Styling:** `@fontsource/atkinson-hyperlegible ^5.3.0`, `@fontsource/space-grotesk ^5.3.0`, `@astrojs/check ^0.9.10`, `@astrojs/sitemap ^3.7.4`. Styling CSS murni di `src/styles/global.css` (293 baris, tema buku tulis bergaris SIDU) + `<style>` komponen.
- `[FAKTA]` **Package Manager & Skrip:** npm dengan `package-lock.json`. Skrip (`package.json:6-14`): `dev`, `build` (`astro build` tanpa `check`), `preview`, `check`, `verify` (`node scripts/verify.mjs`), `verify:release` (`node scripts/verify-release.mjs`), `test` (`npm run build && npm run verify`).
- `[FAKTA]` **Struktur `src/` & Halaman:** `components/` (18 berkas `.astro`), `config/site.ts` (37 baris), `content/copy.ts` (376 baris), `data/` (`fees.ts` 16 baris, `schedule.ts` 19 baris), `layouts/Base.astro` (114 baris), `lib/` (`format.ts` 10 baris, `whatsapp.ts` 53 baris), `pages/` (7 halaman `.astro`: `index`, `program`, `jadwal-biaya`, `cara-belajar`, `tentang`, `kontak`, `404` + 1 endpoint `robots.txt.ts`; `0` rute dinamis), `styles/global.css` (293 baris).
- `[FAKTA]` **Hosting & Git:** Vercel melalui `vercel.json:1-12`. Commit terakhir: `2026-10-14T13:17:55+07:00` (`95b84a5`, 20 commit), working tree bersih.

#### Tahap 2: Kesehatan Build
- `[FAKTA]` `npm ci`: sukses (exit `0`) dalam `19,1 detik` (warning `EBADENGINE undici@8.11.2`).
- `[FAKTA]` `npm run build`: sukses (exit `0`) dalam `7,5 detik`. Ukuran `dist/`: `27 berkas`, `1.201.729 byte` (`1,15 MB`).
- `[FAKTA]` `npm run check`: sukses (`41 files, 0 errors, 0 warnings, 0 hints`).
- `[FAKTA]` `npm run verify` & `npm run verify:release` (dual-build mode demo + mode indeks ke `dist-release/`): seluruh pemeriksaan LULUS.

#### Tahap 3: Pemisahan Data dan Kode
- **a. Lokasi data bisnis:** `[FAKTA]` `src/config/site.ts:16-30` menyimpan `name`, `city`, `address`, `demoMode`, `enleswebWhatsappNumber`, `studioWhatsappNumber`, `siteUrl` (dari `import.meta.env.PUBLIC_SITE_URL`), `enleswebUrl`, `instagramUrl`, `mapsUrl`, `mapsEmbedUrl`, `indexable` (dari `import.meta.env.PUBLIC_INDEXABLE`). Copy di `src/content/copy.ts` (`~986 kata` `[ESTIMASI]`), tarif di `src/data/fees.ts`, jadwal di `src/data/schedule.ts`. Tidak ada Pixel ID.
- **b. Nilai hardcode di komponen/halaman:** `[FAKTA]` Prosa di template `.astro` berjumlah `41 simpul / ~136 kata` `[ESTIMASI]`, yang terkonsentrasi di `src/components/Hero.astro:51-165` (`36 simpul / 121 kata`) karena tabel sampul buku di Hero menuliskan jadwal/jenjang secara literal alih-alih merender dari `src/data/schedule.ts`. Selain itu:
  - Alamat contoh ditulis berulang di `3` tempat: `src/config/site.ts:19`, `src/content/copy.ts:285`, dan `src/content/copy.ts:306`.
  - Pembuatan URL `https://wa.me/...` ditulis ulang di dalam `<script>` klien `src/components/ContactForm.astro:303` di luar `src/lib/whatsapp.ts`.
  - Kode warna hex (`#...`): `17` kemunculan di `3` berkas (`global.css` 15, `ContactForm.astro:349` `#FEF3F2`, `Base.astro:42` `#FFFFFF`).
- **c. Sentralisasi token desain:** `[FAKTA]` Token warna, tipografi, dan radius terpusat di `src/styles/global.css:5-49`. Mengganti warna aksen cukup dari `--accent` dan `--accent-hover` di `global.css:15-16`. Namun tema visual "buku tulis bergaris SIDU" tertanam secara struktural di `src/layouts/Base.astro:87-104` (merender 120 baris kotak margin buku `.notebook-margin-cells`). Font diimpor di dua tempat (`global.css:1-3` dan preload `.woff2` di `Base.astro:3-5`).
- **d. Pembuat WA, SEO, JSON-LD:** `[FAKTA]` Pembuat WA di `src/lib/whatsapp.ts:24-53` (`waUrl(topic, page)`, `waFromContact`). SEO dan `robots.txt` dinamis (`src/pages/robots.txt.ts:1-16`) + `@astrojs/sitemap` bersyarat (`astro.config.mjs:4,15`) adalah yang paling matang di antara semua repo. JSON-LD tidak ada (`0`).
- **e. Aset gambar & favicon:** `[FAKTA]` Favicon `/favicon.svg` dan foto `/hero-still-life.jpg` berada di `public/`; `public/og-image.png` dicek via `fs.existsSync` (`Base.astro:30`).
- **f. Flag demoMode / banner konsep:** `[FAKTA]` Memiliki guard build-time di `src/config/site.ts:32-37` (melempar `Error` jika `demoMode: false` tetapi `studioWhatsappNumber` kosong, atau `indexable: true` tetapi `PUBLIC_SITE_URL` kosong). Namun teks disclaimer demo di `src/content/copy.ts:75,85,150,219,228,286,293,306` dirender permanen di halaman tanpa memeriksa `site.demoMode` (hanya `ContactForm.astro:163` yang memeriksa `site.demoMode`).

#### Tahap 4: Kunci Niche
| Struktur Terkunci Niche | Berkas & Nomor Baris | Perkiraan Baris | Bentuk |
|---|---|---:|---|
| Skema jenjang `'sd' \| 'smp' \| 'sma'` pada tarif & jadwal | `src/data/fees.ts:1-16`, `src/data/schedule.ts:1-19`, `src/content/copy.ts:26-57` | 67 baris | **Data + Tipe union TypeScript terkunci** `[FAKTA]` |
| Form pendaftaran wali/siswa/jenjang/mapel | `src/components/ContactForm.astro:1-499` + `src/lib/whatsapp.ts:12-19,31-53` | 530 baris | **Logika & validasi form khusus bimbel** `[FAKTA]` |
| Sampul & margin buku tulis SIDU + tabel jadwal Hero | `src/components/Hero.astro:1-392` + `src/layouts/Base.astro:87-104` | 410 baris | **Markup layout khusus niche pendidikan** `[FAKTA]` |
| Komponen tabel program & format belajar | `ProgramSection.astro` (141), `ProgramRows.astro` (149), `FormatCards.astro` (174), `DataTable.astro` (124) | 588 baris | **Logika presentasi semi-terkunci** `[FAKTA]` |

---

### 3.5. `jerseay` (Growth, Jersey Kustom)

#### Tahap 1: Inventarisasi
- `[FAKTA]` **Versi & Engine:** Astro `5.18.2` (`jerseay/package.json:15` `"astro": "^5.18.2"`), TypeScript `^5.9.3`. Tanpa `engines` di `package.json` dan tanpa `.nvmrc`.
- `[FAKTA]` **Dependensi & Styling:** `@astrojs/tailwind ^6.0.2`, `tailwindcss ^3.4.17` (`package.json:13,16`), `@astrojs/check ^0.9.10`, `@astrojs/sitemap ^3.7.4`. Satu-satunya repo yang memakai **Tailwind CSS** (`tailwind.config.mjs:1-35`) dan memuat font dari **Google Fonts CDN** (`src/layouts/BaseLayout.astro:50-55`), bukan `@fontsource`.
- `[FAKTA]` **Package Manager & Skrip:** npm dengan `package-lock.json`. Skrip (`package.json:6-11`): `dev`, `start`, `build` (`astro build` tanpa `check`), `preview`, `check`, `verify` (`node --experimental-strip-types scripts/verify-rancang.mjs`).
- `[FAKTA]` **Struktur `src/` & Halaman:** `components/` dikelompokkan dalam 6 subfolder (`configurator/` 7 berkas, `conversion/` 1, `home/` 5, `navigation/` 2, `project/` 1, `ui/` 4 = total 20 komponen), `config/site.ts` (28 baris), `content/rancang.ts` (112 baris), `data/` (`configurator.ts` 213, `projects.ts` 332, `services.ts` 88), `layouts/BaseLayout.astro` (77 baris), `lib/` (`brief.ts` 154, `color.ts` 24, `contrast.ts` 30, `roster.ts` 223, `storage.ts` 74, `whatsapp.ts` 107), `utils/whatsapp.ts` (2 baris re-export), `pages/` (7 rute menghasilkan **11 halaman HTML**, termasuk **1 rute dinamis** `src/pages/proyek/[project].astro` 126 baris).
- `[FAKTA]` **Hosting & Git:** Tanpa `vercel.json`/`wrangler.json`. Commit terakhir: `2026-10-14T16:06:58+07:00` (`f805689`, 18 commit), working tree bersih.

#### Tahap 2: Kesehatan Build
- `[FAKTA]` `npm ci`: sukses (exit `0`) dalam `26,3 detik` (warning `EBADENGINE undici@8.11.0`, `deprecated tsconfck@3.1.6`).
- `[FAKTA]` `npm run build`: sukses (exit `0`) dalam `9,3 detik` (11 halaman + sitemap). Ukuran `dist/`: `39 berkas`, `7.107.083 byte` (`6,78 MB`, terbesar karena foto `.jpg` di `public/images/` berukuran 792–951 KB per berkas tidak dikompresi oleh Astro Assets).
- `[FAKTA]` `npm run check`: sukses (`47 files, 0 errors, 0 warnings, 2 hints`). `npm run verify`: `10 pass, 0 fail`.

#### Tahap 3: Pemisahan Data dan Kode
- **a. Lokasi data bisnis:** `[FAKTA]` `src/config/site.ts:6-28` mengekspor `siteConfig` (bukan `site`) berisi `name`, `tagline`, `description`, `demoMode`, `enleswebWhatsappNumber`, `studioWhatsappNumber`, `whatsappNumber`, `enleswebUrl`, `hours`, `location`, `navLinks`, `primaryCta`. Tidak ada field `address` lengkap, `instagramUrl`, `mapsUrl`, maupun `indexable`. Tidak ada `copy.ts` umum (hanya `src/content/rancang.ts` untuk konfigurator).
- **b. Nilai hardcode di komponen/halaman:** `[FAKTA]` Prosa yang tertanam langsung di berkas `.astro` sangat besar: `168 simpul / ~661 kata` `[ESTIMASI]` (terutama `src/pages/mulai-brief/index.astro` 558 baris dengan 191 kata, `src/pages/rancang/index.astro` 1.339 baris dengan 77 kata, `src/pages/layanan/index.astro` 53 kata). Selain itu:
  - Nomor WA literal muncul `3 kali` di `2 berkas`: `src/config/site.ts:11,13` dan fallback hardcode di `src/lib/whatsapp.ts:34`.
  - Pembuatan URL `wa.me` ditulis ulang di `src/pages/mulai-brief/index.astro` dan `src/pages/rancang/index.astro` selain di `src/lib/whatsapp.ts`.
  - Domain `https://jerseay.studio` tertanam di `astro.config.mjs:7` dan `src/layouts/BaseLayout.astro:41,47`.
  - Kode warna hex (`#...`): `146` kemunculan di `11` berkas (`data/configurator.ts` 40, `JerseyPreview.astro` 30, `rancang/index.astro` 17, `VisualGallery.astro` 13, `projects.ts` 12, `global.css` 11, `ColorPicker.astro` 10, `brief.ts` 4, `contrast.ts` 4, `FloatingWhatsApp.astro` 3, `proses/index.astro` 2).
- **c. Sentralisasi token desain:** `[FAKTA]` Token terpecah antara `tailwind.config.mjs:6-31` (`black-950..800`, `gray-700..100`, font `Plus Jakarta Sans`) dan `src/styles/global.css:6-19` (`--color-black-*`, `--font-family-sans: 'Inter'`). Tidak ada token warna aksen (`--accent`); seluruh komponen memakai kelas utilitas monokrom (`bg-black-900`, `text-gray-600`), sehingga mengganti warna aksen memerlukan pengeditan puluhan berkas `.astro`.
- **d. Pembuat WA, SEO, JSON-LD:** `[FAKTA]` `src/lib/whatsapp.ts:52-92` menanam kalimat pesan WA khusus jersey di dalam blok `switch (location)` (15 cabang kasus). SEO di `src/layouts/BaseLayout.astro:29-48` menanam `<meta name="robots" content="noindex, nofollow" />` secara **permanen tanpa kondisi** (L31), padahal `astro.config.mjs:8` mengaktifkan `sitemap()` (kontradiksi konfigurasi). JSON-LD tidak ada (`0`).
- **e. Aset gambar & favicon:** `[FAKTA]` Seluruh gambar diletakkan di `public/images/` dan dirujuk via path string di `data/projects.ts` dan komponen.
- **f. Flag demoMode / banner konsep:** `[FAKTA]` `siteConfig.demoMode` (`site.ts:10`) mengendalikan nomor/pesan WA dan menampilkan banner di `src/pages/mulai-brief/index.astro:28`, tetapi disclaimer `"Konsep website buatan ENLESWEB. Contoh tingkat Growth. Jerseay bukan studio yang beroperasi."` di `src/components/navigation/Footer.astro:91` ditulis permanen tanpa memeriksa `siteConfig.demoMode`.

#### Tahap 4: Kunci Niche
- `[FAKTA]` Lebih dari `4.000 baris` kode terkunci pada domain kustomisasi jersey olahraga: halaman konfigurator `src/pages/rancang/index.astro` (1.339 baris), SVG preview 3 varian kit `src/components/configurator/JerseyPreview.astro` (703 baris), 6 komponen konfigurator lain (648 baris), parser daftar pemain/ukuran `src/lib/roster.ts` (223 baris), generator pesan brief `src/lib/brief.ts` (154 baris), aturan olahraga `src/data/configurator.ts` (213 baris), dan halaman formulir brief `src/pages/mulai-brief/index.astro` (558 baris).

---

### 3.6. `klimis` / `dipotongin` (Growth, Barbershop)

#### Tahap 1: Inventarisasi
- `[FAKTA]` **Versi & Engine:** Astro `5.18.2` terpasang (`klimis/package.json:21` `"astro": "^5.4.2"`), TypeScript `^5.7.3`. Tanpa `engines` di `package.json` dan tanpa `.nvmrc`. Nama paket di `package.json:2` adalah `"klimis"`, sedangkan nama usaha di `src/config/site.ts:23` dan remote Git adalah `"dipotongin"`.
- `[FAKTA]` **Dependensi & Styling:** 6 paket `@fontsource/*` (`albert-sans`, `archivo`, `archivo-black`, `besley`, `plus-jakarta-sans`, `space-grotesk`), `@astrojs/check ^0.9.4`. Tanpa `@astrojs/sitemap`. Styling CSS murni di `src/styles/global.css` (122 baris) + `<style>` komponen.
- `[FAKTA]` **Package Manager & Skrip:** npm dengan `package-lock.json`. Skrip (`package.json:6-15`): `dev`, `start`, `build` (`astro check && astro build`), `preview`, `astro`, `check`, `verify` (`node scripts/verify.mjs`), `verify:release` (`node scripts/verify-release.mjs`).
- `[FAKTA]` **Struktur `src/` & Halaman:** `assets/images/` (6 berkas gambar), `components/` (11 berkas `.astro`), `config/site.ts` (38 baris), `data/` (`konsultasi.ts` 207 baris, `layanan.ts` 83 baris), `layouts/BaseLayout.astro` (37 baris), `lib/whatsapp.ts` (66 baris), `pages/` (3 halaman: `index.astro` 92 baris, `konsultasi.astro` 153 baris, `404.astro` 102 baris; `0` rute dinamis), `styles/global.css` (122 baris).
- `[FAKTA]` **Hosting & Git:** Tanpa `vercel.json`/`wrangler.json`. Commit terakhir: `2026-10-14T15:57:23+07:00` (`09d1011`, 23 commit), working tree bersih.

#### Tahap 2: Kesehatan Build
- `[FAKTA]` `npm ci`: sukses (exit `0`) dalam `22,0 detik` (warning `EBADENGINE undici@8.11.2`, `deprecated tsconfck@3.1.6`).
- `[FAKTA]` `npm run build` (`astro check && astro build`): sukses (exit `0`) dalam `16,5 detik` (`25 files, 0 errors, 0 warnings`). Ukuran `dist/`: `52 berkas`, `5.937.903 byte` (`5,66 MB`).
- `[FAKTA]` `npm run verify`: LULUS seluruh pemeriksaan. `node scripts/slop-lint.mjs`: `3 halaman, 0 FAIL, 31 REVIEW` (31 teks di HTML hasil build terdeteksi tidak berasal dari dokumen sumber/data karena tertanam di komponen `.astro`).

#### Tahap 3: Pemisahan Data dan Kode
- **a. Lokasi data bisnis:** `[FAKTA]` `src/config/site.ts:22-38` menyimpan `name`, `tagline`, `siteUrl`, `enleswebUrl`, `demoMode`, `publicIndexable`, `studioWhatsappNumber`, `instagramUrl`, `mapsUrl`, `mapsEmbedUrl`, `address`, `openingHours`. Layanan berada di `src/data/layanan.ts`, kuis di `src/data/konsultasi.ts`. Tidak ada `copy.ts` dan tidak ada Pixel ID.
- **b. Nilai hardcode di komponen/halaman:** `[FAKTA]` Prosa di template `.astro` mencapai `58 simpul / ~298 kata` `[ESTIMASI]` (terkonfirmasi oleh 31 temuan `REVIEW` dari `slop-lint.mjs`):
  - Nomor WA fallback demo tertanam di `src/lib/whatsapp.ts:5` (`DEMO_PHONE_FALLBACK`), bukan di `src/config/site.ts`.
  - Slide galeri Hero beserta alamat `"Calle Larga XXII Marzo, Venice"` dan deskripsi barbershop tertanam di frontmatter `src/components/Hero.astro:10-48`.
  - Teks kartu member loyalitas tertanam seluruhnya di `src/components/SidebarInfo.astro:1-326`.
  - Kode warna hex (`#...`): `119` kemunculan di `12` berkas (`SidebarInfo.astro` 31, `ConsultationQuiz.astro` 23, `ContactSection.astro` 16, `global.css` 15, `Footer.astro` 13, `ServicesSection.astro` 5, `WhatsAppButton.astro` 5, `FloatingWhatsApp.astro` 5, `Navbar.astro` 2, `404.astro` 2, `Hero.astro` 1, `LocationSection.astro` 1).
- **c. Sentralisasi token desain:** `[FAKTA]` Token berada di `src/styles/global.css:11-45`, tetapi warna aksen `#C29F75` diduplikasi ke 5 variabel (`--canvas-accent`, `--card-border`, `--card-reward`, `--card-kraft`, `--focus`) dan juga ditulis literal di `src/components/SidebarInfo.astro:103,107`. Empat dari enam paket font di `package.json` (`archivo`, `archivo-black`, `plus-jakarta-sans`, `space-grotesk`) **tidak dipakai sama sekali di `src/`** (`0` kecocokan grep; dependensi mati).
- **d. Pembuat WA, SEO, JSON-LD:** `[FAKTA]` Pembuat WA di `src/lib/whatsapp.ts:1-66` memiliki validasi bagus (melempar `Error` jika `demoMode: false` dan `studioWhatsappNumber` kosong di L43-47), namun pesan di `MESSAGES` (L7-18) dan `getConsultationWhatsAppUrl` (L62-66) menanam kata `"dipotongin"` dan `"pangkas rambut"`. Selain itu `ConsultationQuiz.astro` merakit URL `wa.me` sendiri di sisi klien. SEO di `src/components/BaseHead.astro:9-40` menanam default title/description barbershop (L10-11). JSON-LD tidak ada (`0`).
- **e. Aset gambar & favicon:** `[FAKTA]` Favicon `/favicon.svg` dan tekstur `/kraft-paper-texture.png` di `public/`. Enam gambar di `src/assets/images/` diimpor langsung di `src/components/Hero.astro:2-7`.
- **f. Flag demoMode / banner konsep:** `[FAKTA]` `site.demoMode` (`site.ts:27`) otomatis mengaktifkan `noindex` (`BaseHead.astro:14` `const isNoIndex = site.demoMode || !site.publicIndexable`) dan mengalihkan nomor/pesan WA, tetapi default `<title>` dan `<meta description>` di `BaseHead.astro:10-11` tetap memuat kata `"konsep website barbershop lokal... Konsep dibuat oleh ENLESWEB"` meskipun `demoMode` diubah ke `false`.

#### Tahap 4: Kunci Niche
| Struktur Terkunci Niche | Berkas & Nomor Baris | Perkiraan Baris | Bentuk |
|---|---|---:|---|
| Kuis interaktif rekomendasi gaya rambut (bentuk wajah, jenis rambut, perawatan) | `src/components/ConsultationQuiz.astro` (1.059), `src/data/konsultasi.ts` (207), `src/pages/konsultasi.astro` (153) | 1.419 baris | **Logika & data terkunci kuat pada barbershop** `[FAKTA]` |
| Kartu member loyalitas stempel 10x cukur + tekstur kertas kraft | `src/components/SidebarInfo.astro:1-326` + `scripts/generate-kraft-texture.mjs` (120) | 446 baris | **Markup & styling khusus barbershop** `[FAKTA]` |
| Daftar layanan (`name`, `description`, `duration`, `price`, `category`, `steps`) | `src/data/layanan.ts:1-83` + `src/components/ServicesSection.astro:1-325` | 83 data + 325 UI | **Data & komponen mudah dipakai ulang** untuk bisnis jasa lain (cukup ubah union `ServiceCategory` di `layanan.ts:1`) `[FAKTA]` |
| Galeri bento Hero dengan properti peralatan cukur | `src/components/Hero.astro:1-430` | 430 baris | **Data slide & layout tertanam di komponen** `[FAKTA]` |

---

### 3.7. `berflower` (Growth, Florist)

#### Tahap 1: Inventarisasi
- `[FAKTA]` **Versi & Engine:** Astro `7.3.5` dipin eksak (`berflower/package.json:16` `"astro": "7.3.5"`), TypeScript `^6.0.3`, dan **satu-satunya repo yang mendefinisikan `"engines": { "node": ">=22.12" }`** (`package.json:4-6`).
- `[FAKTA]` **Dependensi & Styling:** `@fontsource-variable/fraunces ^5.2.5`, `@fontsource/dm-sans ^5.2.5`, `nanostores ^1.5.5`, `@nanostores/persistent ^1.3.5`, `sharp ^0.34.0`. Tanpa `@astrojs/sitemap`. Styling CSS murni di `src/styles/global.css` (200 baris) + `<style>` komponen.
- `[FAKTA]` **Package Manager & Skrip:** npm dengan `package-lock.json`. Skrip (`package.json:7-14`): `dev`, `build` (`astro build` tanpa `check`), `preview`, `check`, `verify` (`node scripts/verify.mjs`), `verify:release` (`node scripts/verify.mjs --release`).
- `[FAKTA]` **Struktur `src/` & Halaman:** `assets/photos/` (14 foto `.jpg` + `CREDITS.md`), `components/` (25 berkas `.astro`), `config/site.ts` (52 baris), `content/copy.ts` (406 baris), `data/` (`bouquet-builder.ts` 80, `gifts.ts` 52, `occasions.ts` 37, `products.ts` 91), `layouts/Base.astro` (100 baris, memakai `<ClientRouter />` View Transitions), `lib/` (`format.ts` 14, `whatsapp.ts` 106), `pages/` (8 halaman statis: `index`, `koleksi`, `rangkai-buket`, `hadiah`, `keranjang`, `cara-pesan`, `kontak`, `404`; `0` rute dinamis), `stores/cart.ts` (135 baris), `styles/global.css` (200 baris).
- `[FAKTA]` **Hosting & Git:** Vercel melalui `vercel.json:1-12` (identik dengan `tuntas`). Commit terakhir: `2026-10-07T22:21:55+07:00` (`8d13499`, 10 commit), working tree bersih.

#### Tahap 2: Kesehatan Build
- `[FAKTA]` `npm ci`: sukses (exit `0`) dalam `20,1 detik` (warning `EBADENGINE undici@8.11.2`).
- `[FAKTA]` `npm run build`: sukses (exit `0`) dalam `9,9 detik` (8 halaman). Ukuran `dist/`: `89 berkas`, `5.348.967 byte` (`5,10 MB`).
- `[FAKTA]` `npm run check`: sukses (`48 files, 0 errors, 0 warnings, 0 hints`).
- `[FAKTA]` `npm run verify`: LULUS semua pemeriksaan. `npm run verify:release`: GAGAL pada pemeriksaan rilis karena `enleswebWhatsappNumber` di `src/config/site.ts:30` masih bernilai nomor uji placeholder `6281234567890` (`✖ FAIL: [RELEASE CHECK] Nomor WhatsApp masih menggunakan nomor uji`).

#### Tahap 3: Pemisahan Data dan Kode
- **a. Lokasi data bisnis:** `[FAKTA]` `src/config/site.ts:19-52` menyimpan `name`, `city`, `address`, `demoMode`, `enleswebWhatsappNumber`, `shopWhatsappNumber`, `siteUrl`, `enleswebUrl`, `instagramUrl`, `tiktokUrl`, `pinterestUrl`, `mapsUrl`, `mapsEmbedUrl`, `indexable`, `hours` (berupa string tunggal, berbeda dari array `OpeningHour[]` di repo lain). Copy berada di `src/content/copy.ts:1-406` (`~870 kata` `[ESTIMASI]`), katalog di `src/data/*.ts`. Tidak ada Pixel ID.
- **b. Nilai hardcode di komponen/halaman:** `[FAKTA]` Prosa langsung di template `.astro` sangat sedikit (`6 simpul / 20 kata` `[ESTIMASI]`). Temuan hardcode dari grep:
  - Nomor WA literal: hanya `1` di `src/config/site.ts:30`.
  - Tautan sosial di `src/config/site.ts:42-44` berisi URL placeholder `https://instagram.com/unknown`, `https://tiktok.com/@unknown`, `https://pinterest.com/unknown`.
  - Pembuatan URL `wa.me` ditulis ulang di `<script>` klien `src/components/OrderForm.astro` selain di `src/lib/whatsapp.ts`.
  - Kode warna hex (`#...`): `22` kemunculan di `5` berkas (`global.css` 9, `data/bouquet-builder.ts` 6 untuk swatch warna kertas/pita, `FloatingWhatsApp.astro` 5, `Footer.astro` 1, `Base.astro:43` `theme-color`).
- **c. Sentralisasi token desain:** `[FAKTA]` Token warna dan tipografi terpusat di `src/styles/global.css:7-49`, namun menggunakan penamaan spesifik domain florist (`--paper`, `--paper-deep`, `--clay: #9E3F3A`, `--leaf: #2F4235`, `--radius-organic-1..4`) bukan token generik (`--canvas`, `--accent`). Mengganti warna aksen cukup mengubah `--clay` dan `--leaf` di `global.css:15-16`. Font diimpor di `global.css:1-5` dan dipreload di `Base.astro:4-5,52-64`.
- **d. Pembuat WA, SEO, JSON-LD:** `[FAKTA]` Pembuat WA terpusat di `src/lib/whatsapp.ts:1-106` (`waUrl`, `waEnlesweb`, `buildOrderMessage`, `waFromOrder`, `waFromBouquet`, `waFromCart`) dengan template dari `copy.wa`. SEO terpusat di `src/layouts/Base.astro:26-84`. JSON-LD tidak ada (`0`).
- **e. Aset gambar & favicon:** `[FAKTA]` Favicon `/favicon.svg` dan `/og-image.png` di `public/`. Empat belas foto produk di `src/assets/photos/` diimpor dari `src/data/products.ts`, `src/data/gifts.ts`, dan `src/components/Hero.astro` serta dioptimasi dengan `sharp` (`astro.config.mjs:6-10`).
- **f. Flag demoMode / banner konsep:** `[FAKTA]` Cacat desain penting pada komponen `src/components/DemoNote.astro:1-19`: komponen ini **sama sekali tidak memeriksa `site.demoMode`** dan selalu merender `<p class="demo-note-line">{copy.footer.conceptNote}</p>` di halaman `koleksi.astro:19` dan `hadiah.astro:24`. Begitu pula `src/pages/keranjang.astro:71` merender `<p class="demo-note">{copy.cart.demoNote}</p>` tanpa kondisi `site.demoMode`.

#### Tahap 4: Kunci Niche
- `[FAKTA]` Terkunci berat pada e-commerce/katalog florist multi-halaman: state keranjang belanja persistent berbasis `nanostores` (`src/stores/cart.ts` 135 baris, `src/pages/keranjang.astro` 382 baris, `AddToCartButton.astro` 79 baris, `CartIndicator.astro` 82 baris), perangkai buket interaktif (`src/components/BouquetBuilder.astro` 247 baris, `src/data/bouquet-builder.ts` 80 baris), paket hadiah (`src/data/gifts.ts` 52 baris, `src/pages/hadiah.astro` 181 baris), dan form pemesanan bunga dengan field kartu ucapan & tanggal kirim (`src/components/OrderForm.astro` 548 baris).

---

## 4. Matriks Perbandingan & Analisis Inti Bersama (Tahap 5)

### 4.1. Matriks Perbandingan 7 Repositori `[FAKTA]`

| Dimensi | `enlesweb` (Acuan) | `seruput` (Starter) | `ripeir` (Starter) | `tuntas` (Business) | `jerseay` (Growth) | `klimis` (Growth) | `berflower` (Growth) |
|---|---|---|---|---|---|---|---|
| **Versi Astro terpasang** | `7.3.5` (`^7.3.5`) | `5.18.2` (`^5.4.2`) | `5.18.2` (`^5.4.2`) | `7.3.8` (`^7.3.8`) | `5.18.2` (`^5.18.2`) | `5.18.2` (`^5.4.2`) | `7.3.5` (`7.3.5`) |
| **Versi TypeScript** | `^5.9.3` | `^5.7.3` | `^5.7.3` | `^6.0.3` | `^5.9.3` | `^5.7.3` | `^6.0.3` |
| **Pendekatan Styling** | CSS murni + token `:root` | CSS murni + token `:root` | CSS murni + token `:root` | CSS murni + token `:root` | **Tailwind v3** + CSS | CSS murni + token `:root` | CSS murni + token `:root` |
| **Pemuatan Font** | `@fontsource` + preload woff2 | `@fontsource` (2 paket mati) | `@fontsource` di `global.css` | `@fontsource` + preload woff2 | **Google Fonts CDN** | `@fontsource` (4 paket mati) | `@fontsource` + preload woff2 |
| **Skrip `npm run build`** | `astro check && astro build` | `astro build` (tanpa check!) | `astro check && astro build` | `astro build` (tanpa check) | `astro build` (tanpa check) | `astro check && astro build` | `astro build` (tanpa check) |
| **Hasil `astro check`** | `0 error` | **13 error** (`Navbar.astro`) | `0 error` | `0 error` | `0 error` (`2 hint`) | `0 error` | `0 error` |
| **Berkas & Simbol Config** | `config/site.ts` (`site`) | `config/site.ts` (`site`) | `config/site.ts` (`site`) | `config/site.ts` (`site`) | `config/site.ts` (`siteConfig`) | `config/site.ts` (`site`) | `config/site.ts` (`site`) |
| **Flag Indeksasi Mesin Cari** | Tidak ada (selalu indeks) | `site.publicIndexable` | `site.indexable` | `site.indexable` (env) | Hardcode `noindex` | `site.demoMode \|\| !site.publicIndexable` | `site.indexable` |
| **Lokasi Copy & Data** | `content/copy.ts` (`952` kata) | `data/*.ts` + **komponen** (`345` kata di `.astro`) | `content/copy.ts` (`530` kata, `2` kata di `.astro`) | `content/copy.ts` + `data/*.ts` (`136` kata di `.astro`) | `data/*.ts` + `content/rancang.ts` (`661` kata di `.astro`) | `data/*.ts` + **komponen** (`298` kata di `.astro`) | `content/copy.ts` + `data/*.ts` (`20` kata di `.astro`) |
| **Fungsi Utama di `lib/whatsapp.ts`** | `waUrl(topic)` | `createWhatsAppUrl(topic)` | `waUrl(topic)` | `waUrl(topic, page)` | `getWhatsAppUrl(loc, detail)` | `getWhatsAppUrl(topic)` | `waUrl(topic, page)` |
| **Komponen Layout & Head** | `layouts/Base.astro` | `layouts/BaseLayout.astro` + `components/BaseHead.astro` | `layouts/Base.astro` | `layouts/Base.astro` | `layouts/BaseLayout.astro` | `layouts/BaseLayout.astro` + `components/BaseHead.astro` | `layouts/Base.astro` (+ `<ClientRouter />`) |
| **Komponen WA Mengambang** | `FloatingWhatsApp.astro` | `FloatingWhatsApp.astro` | `ActionBar.astro` | `FloatingWhatsApp.astro` | `conversion/FloatingWhatsApp.astro` | `FloatingWhatsApp.astro` | `FloatingWhatsApp.astro` + `StickyWhatsApp.astro` |
| **Jumlah Halaman (Rute Dinamis)** | 2 halaman (0 dinamis) | 2 halaman (0 dinamis) | 2 halaman (0 dinamis) | 7 halaman + `robots.txt.ts` (0 dinamis) | 11 halaman (**1 dinamis**: `[project].astro`) | 3 halaman (0 dinamis) | 8 halaman (0 dinamis) |
| **Konfigurasi Hosting** | `wrangler.json` + `_headers` | Tidak ada | `vercel.json` | `vercel.json` | Tidak ada | Tidak ada | `vercel.json` |
| **JSON-LD / Sitemap** | Ada / Ada | Tidak / Tidak | Tidak / Tidak | Tidak / Bersyarat | Tidak / Ada (konflik noindex) | Tidak / Tidak | Tidak / Tidak |

### 4.2. Pencarian Berkas Identik (`SHA256`) & Kemiripan Komponen Inti `[FAKTA]`

1. **Hasil Hash `SHA256` Lintas 7 Repo:**
   - **Di dalam `src/`:** `0 berkas` kode (`.astro`, `.ts`, `.css`) memiliki hash `SHA256` yang sama antar-repositori. Satu-satunya berkas di `src/` yang identik adalah 6 berkas ikon `enlesweb/src/assets/projects/favicon-<repo>.svg` yang merupakan salinan persis dari `public/favicon.svg` milik masing-masing repo.
   - **Di luar `src/`:**
     - `public/robots.txt` (`SHA256=331EA9090DB0`): identik di 4 repo (`seruput`, `ripeir`, `klimis`, `berflower`).
     - `scripts/slop-lint.mjs` (`SHA256=CC11FEEFFABC`): identik di 3 repo (`seruput`, `tuntas`, `klimis`).
     - `tsconfig.json` (`SHA256=39664A764652`): identik di 2 repo (`ripeir`, `klimis`).
     - `vercel.json` (`SHA256=D39CD878D549`): identik di 2 repo (`tuntas`, `berflower`).
2. **Kemiripan Baris Unik (Jaccard Similarity) pada Kandidat Inti Bersama:**
   - `Navbar.astro` (294–345 baris): kemiripan tertinggi hanya `26,2%` (`enlesweb` vs `tuntas`) dan `20,6%` (`seruput` vs `klimis`). Semua memiliki pola perilaku yang sama (header sticky + drawer mobile + trap tombol `Escape`), tetapi nama kelas CSS dan sumber daftar tautan berbeda (`copy.nav` vs array lokal di komponen vs `siteConfig.navLinks`).
   - `Footer.astro` (90–444 baris): kemiripan tertinggi `21,7%` (`seruput` vs `klimis`) dan `20,0%` (`enlesweb` vs `tuntas`).
   - `FloatingWhatsApp.astro` (31–114 baris): kemiripan tertinggi `26,4%` (`enlesweb` vs `seruput`) dan `25,7%` (`enlesweb` vs `tuntas`). SVG ikon WhatsApp identik (`d="M12.04 2c-5.46..."`), tetapi pemanggilan fungsi URL berbeda (`waUrl` vs `createWhatsAppUrl` vs `getWhatsAppUrl`).
   - `WhatsAppButton.astro` (82–122 baris, tidak ada di `jerseay`): kemiripan tertinggi `27,1%` (`ripeir` vs `tuntas`) dan `25,8%` (`enlesweb` vs `tuntas`).
3. **Kandidat yang Layak Dijadikan "Inti Bersama" (Shared Core):** `[ESTIMASI]`
   - **Sangat layak diseragamkan 100% identik antar-template:**
     1. `src/config/site.ts` (kontrak interface `SiteConfig` tunggal).
     2. `src/lib/whatsapp.ts` (satu fungsi `waUrl(topic, page?)` + sanitasi nomor + switch otomatis `demoMode`).
     3. `src/lib/format.ts` (`rupiah`, `joinDays`, `timeRange`, `fill` , gabungan `tuntas/src/lib/format.ts` dan `berflower/src/lib/format.ts`).
     4. `src/layouts/Base.astro` (meta SEO, canonical bersyarat, `noindex` otomatis saat `demoMode || !indexable`, JSON-LD `LocalBusiness`, dan banner konsep otomatis saat `demoMode: true`).
     5. `src/components/FloatingWhatsApp.astro` & `src/components/WhatsAppButton.astro`.
     6. `src/pages/robots.txt.ts` (endpoint dinamis milik `tuntas` supaya tidak perlu mengedit `public/robots.txt` secara manual).
     7. `scripts/slop-lint.mjs` & `vercel.json`.
   - **Layak diseragamkan strukturnya dengan styling berbasis CSS token:** `Navbar.astro` dan `Footer.astro`.

### 4.3. Seberapa "Identik" Ketujuh Repo Secara Keseluruhan?

- **Tingkat keseragaman aktual saat ini: ~35% (Rendah di level kode, Tinggi di level filosofi produk)** `[ESTIMASI]` berdasarkan bukti faktual berikut:
  - **Kesamaan filosofi (100%):** `7 dari 7` repo menggunakan Astro output statis (`output: 'static'`), bahasa Indonesia, konversi terpusat ke WhatsApp tanpa backend database, `0` penggunaan em dash (`—`), dan struktur folder dasar `src/{components,config,layouts,lib,pages,styles}` `[FAKTA]`.
  - **Kesamaan tumpukan teknis (~71%):** `6 dari 7` repo memakai CSS murni + variabel `:root` dan `@fontsource` (kecuali `jerseay` yang memakai Tailwind + Google Fonts CDN), tetapi versi Astro terbelah dua (`4` repo di Astro `5.18.2` vs `3` repo di Astro `7.3.x`) `[FAKTA]`.
  - **Kesamaan kontrak kode & API internal (~25%):** Nama fungsi pembuat tautan WhatsApp terpecah menjadi 4 variasi (`waUrl(topic)`, `waUrl(topic, page)`, `createWhatsAppUrl(topic)`, `getWhatsAppUrl(...)`), nama properti indeksasi terpecah (`indexable` vs `publicIndexable`), pola file teks terpecah (`4` repo memakai `src/content/copy.ts` vs `3` repo tanpa `copy.ts`), dan kemiripan baris komponen inti hanya `20%–27%` `[FAKTA]`. Akibatnya, saat ini komponen atau skrip otomatisasi dari satu repo **tidak dapat langsung disalin (drop-in)** ke repo lain tanpa penyesuaian impor.

---

## 5. Skema JSON Usulan (Tahap 8a - Jangan Diimplementasikan)

Skema minimal berikut hanya mencakup data yang **selalu berubah antar-klien** pada varian Starter/bisnis jasa, memisahkan konfigurasi identitas/teknis (`site`), tema visual (`theme`), dan konten bisnis (`business` + `catalog`). `[ESTIMASI]`

### 5.1. Definisi Tipe / Skema Minimal

```ts
export interface ClientTemplateData {
  meta: {
    tier: 'starter' | 'business' | 'growth';
    demoMode: boolean;          // true = tampilkan banner konsep + paksa noindex + arahkan WA ke studio ENLESWEB
    indexable: boolean;         // hanya berlaku jika demoMode === false
    siteUrl: string;            // kosongkan saat preview jika tidak pakai canonical, wajib saat indexable = true
    enleswebUrl: string;        // URL kredit footer
    enleswebWhatsapp: string;   // nomor WA ENLESWEB untuk mode demo
    metaPixelId?: string;       // opsional
  };
  business: {
    name: string;               // nama usaha klien
    categoryLabel: string;      // mis. "Barbershop & Grooming", "Bengkel Servis Perangkat", "Katering Harian"
    tagline: string;            // 1 kalimat proposisi nilai di hero & footer
    whatsappNumber: string;     // format 628... (wajib jika demoMode === false)
    city: string;
    address: string;
    landmarkNote?: string;      // patokan lokasi / catatan kedatangan
    mapsUrl: string;
    mapsEmbedUrl?: string;      // opsional; jika kosong, dibuat otomatis dari address
    openingHours: Array<{
      days: string;
      hours: string;
    }>;
    socials?: {
      instagram?: string;
      tiktok?: string;
      googleMaps?: string;
    };
  };
  theme: {
    accentColor: string;        // hex utama, mis. "#FF6B1A"
    accentHoverColor: string;   // hex hover, mis. "#FF8540"
    canvasColor: string;        // latar utama
    inkColor: string;           // teks utama
  };
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    primaryCtaLabel: string;
    primaryCtaTopic: string;
    image: {
      src: string;
      alt: string;
    };
  };
  catalog: {
    sectionTitle: string;
    sectionIntro: string;
    categories: Array<{
      id: string;
      name: string;
      summary: string;
      priceRangeOrBadge?: string; // opsional: tarif mulai / estimasi durasi
      items: string[];            // daftar layanan / menu / cakupan pekerjaan
      ctaLabel: string;
      ctaTopic: string;
    }>;
  };
  steps: {
    sectionTitle: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  highlights: {
    sectionTitle: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
}
```

### 5.2. Contoh Isian JSON (Studi Kasus: Salon / Barbershop Lokal)

```json
{
  "meta": {
    "tier": "starter",
    "demoMode": true,
    "indexable": false,
    "siteUrl": "https://preview-salon-rapi.enlesweb.com",
    "enleswebUrl": "https://enlesweb.com",
    "enleswebWhatsapp": "6285156801570",
    "metaPixelId": ""
  },
  "business": {
    "name": "Ruang Rapi Studio",
    "categoryLabel": "Pangkas Rambut & Perawatan Pria",
    "tagline": "Pangkas rapi, handuk hangat, dan jadwal pasti lewat WhatsApp.",
    "whatsappNumber": "6281299887766",
    "city": "Bandung",
    "address": "Jl. Progo No. 18,itarum, Bandung Wetan, Kota Bandung",
    "landmarkNote": "Seberang kedai roti Progo, tersedia parkir motor dan mobil di halaman depan.",
    "mapsUrl": "https://maps.google.com/?q=Jl.+Progo+No.+18+Bandung",
    "openingHours": [
      { "days": "Senin sampai Jumat", "hours": "10.00 sampai 20.00 WIB" },
      { "days": "Sabtu sampai Minggu", "hours": "09.00 sampai 21.00 WIB" }
    ],
    "socials": {
      "instagram": "https://instagram.com/ruangrapistudio"
    }
  },
  "theme": {
    "accentColor": "#B85D19",
    "accentHoverColor": "#9A4B11",
    "canvasColor": "#F8F6F1",
    "inkColor": "#161615"
  },
  "hero": {
    "eyebrow": "STUDIO PANGKAS BANDUNG",
    "headline": "Potong rambut tanpa antre panjang, tanya slot langsung via WhatsApp.",
    "subheadline": "Layanan pangkas reguler, fade, rapikan jenggot, dan kompres handuk hangat dengan alat steril di setiap giliran.",
    "primaryCtaLabel": "Tanya Slot Hari Ini",
    "primaryCtaTopic": "jadwal pangkas hari ini",
    "image": {
      "src": "/images/hero-main.jpg",
      "alt": "Kursi pangkas dan peralatan cukur di Ruang Rapi Studio Bandung"
    }
  },
  "catalog": {
    "sectionTitle": "Layanan & Tarif",
    "sectionIntro": "Pilih paket perawatan yang kamu butuhkan. Semua layanan sudah termasuk keramas bilas dan penataan akhir.",
    "categories": [
      {
        "id": "pangkas",
        "name": "Potong Rambut",
        "summary": "Pangkas reguler maupun gradasi fade sesuai bentuk kepala.",
        "priceRangeOrBadge": "Rp45.000 - Rp55.000 | 45 menit",
        "items": [
          "Konsultasi model potongan sebelum mulai",
          "Pangkas gunting dan clipper bertahap",
          "Keramas bilas air hangat",
          "Pijat ringan bahu dan aplikasi pomade/hair tonic"
        ],
        "ctaLabel": "Pesan Potong Rambut",
        "ctaTopic": "layanan potong rambut"
      },
      {
        "id": "jenggot",
        "name": "Cukur & Rapikan Jenggot",
        "summary": "Perapian kumis, jenggot, dan garis rahang dengan pisau silet baru.",
        "priceRangeOrBadge": "Rp30.000 | 25 menit",
        "items": [
          "Kompres handuk hangat pembuka pori",
          "Cukur busa dengan mata silet sekali pakai",
          "Aplikasi aftershave penenang kulit"
        ],
        "ctaLabel": "Pesan Cukur Jenggot",
        "ctaTopic": "layanan cukur jenggot"
      }
    ]
  },
  "steps": {
    "sectionTitle": "Cara Booking",
    "items": [
      { "title": "1. Chat jam kedatangan", "description": "Kirim pesan WhatsApp untuk mengecek jam kosong hari ini atau besok." },
      { "title": "2. Datang 5 menit sebelum jadwal", "description": "Kursi langsung siap tanpa menunggu antrean panjang." },
      { "title": "3. Konsultasi & pangkas", "description": "Sampaikan model yang diinginkan kepada kapster sebelum mulai." }
    ]
  },
  "highlights": {
    "sectionTitle": "Standar Studio",
    "items": [
      { "title": "Silet selalu baru", "description": "Mata pisau cukur diganti di depan pelanggan untuk setiap sesi." },
      { "title": "Durasi terukur", "description": "Rata-rata sesi 45 menit sehingga jadwal harianmu tetap terjaga." },
      { "title": "Tarif transparan", "description": "Tidak ada biaya tambahan tersembunyi untuk keramas atau styling." }
    ]
  }
}
```

---

## 6. Rekomendasi SATU Repo Dasar untuk Starter "Bisnis Jasa" (Tahap 6)

### Rekomendasi: **`ripeir`** (`d:\myself\web\7project\ripeir`) `[ESTIMASI]`

**Alasan teknis berbasis bukti (`[FAKTA]`):**
1. **Pemisahan data dan kode paling bersih di kelas Starter:** Hanya memiliki `1 simpul / 2 kata` prosa yang tertanam di template `.astro`, sedangkan seluruh `~530 kata` konten berada di `src/content/copy.ts:1-240` dan konfigurasi usaha di `src/config/site.ts:17-29`. Bandingkan dengan kandidat Starter lain, `seruput`, yang menanam `42 simpul / 345 kata` di komponen `.astro` (termasuk alamat dan nomor WA dummy di `Hero.astro:22`).
2. **Kesehatan build dan pemeriksaan tipe sempurna:** `npm run build` di `ripeir` sudah menyertakan `astro check && astro build` (`package.json:8`) dan menghasilkan `0 errors, 0 warnings, 0 hints` pada 22 berkas, ditambah `npm test` (`verify-all.mjs` & `verify-launch-cut.mjs`) yang memverifikasi seluruh titik konversi WhatsApp. Sebaliknya, `seruput` gagal `astro check` dengan 13 error TypeScript di `Navbar.astro:303-326`.
3. **Arsitektur komponen one-page yang agnostik terhadap jenis jasa:** Urutan bagian di `ripeir/src/pages/index.astro:15-19` (`Hero` -> `ServicesGrid` -> `StepList` -> `Principles` -> `FinalCta` -> `Footer` dengan peta & jam buka) cocok langsung untuk **barbershop, salon, bengkel, maupun katering**:
   - `ServicesGrid.astro` (167 baris) merender kartu kategori beserta daftar item dan tombol WA per kategori dari `copy.layanan.devices` (`copy.ts:89-174`). Untuk salon/barbershop diisi paket perawatan & rincian layanan; untuk katering diisi paket menu/box & isi lauk; untuk bengkel diisi jenis servis & keluhan.
   - `StepList.astro` (126 baris) merender alur pemesanan/pengerjaan 3-4 langkah.
   - `Principles.astro` (77 baris) merender jaminan/standar usaha.
   - `Footer.astro` (444 baris) sudah merender alamat, jam buka (`site.openingHours`), dan iframe Google Maps otomatis dari `encodeURIComponent(site.address)` (`Footer.astro:11`).
4. **Mengapa bukan `klimis`, `tuntas`, `berflower`, atau `jerseay`?**
   - `klimis` adalah paket Growth dengan `1.419 baris` logika kuis gaya rambut (`ConsultationQuiz.astro` + `konsultasi.ts`), `326 baris` kartu member loyalitas (`SidebarInfo.astro`), tanpa `copy.ts`, dan `31 REVIEW` teks tanpa sumber pada `slop-lint.mjs`.
   - `tuntas` adalah paket Business 7 halaman dengan layout buku tulis SIDU yang terkunci di `Base.astro:87-104` dan form pendaftaran siswa 499 baris (`ContactForm.astro`).
   - `berflower` dan `jerseay` adalah paket Growth multi-halaman dengan keranjang belanja (`nanostores`) atau konfigurator jersey (`>4.000 baris`).

---

## 7. Rencana Rapikan / Daftar Refactor Berurutan (Tahap 8b - Jangan Diimplementasikan)

Daftar berikut diurutkan menurut **rasio dampak dibanding usaha (impact-to-effort tertinggi lebih dulu)** untuk menjadikan `ripeir` sebagai master template Starter "bisnis jasa" dan menyeragamkan konvensi lintas repo. Seluruh angka jam bersifat `[ESTIMASI]`.

| Prioritas | Tindakan Refactor | Target Berkas | Dampak | Estimasi Jam |
|---:|---|---|---|---:|
| **1** | **Tambahkan `demoMode`, nomor WA ganda (`enleswebWhatsappNumber` & `studioWhatsappNumber`), guard build-time, dan komponen banner konsep otomatis.** Saat `demoMode: true`, paksa `<meta name="robots" content="noindex, nofollow">`, arahkan semua CTA ke nomor ENLESWEB, dan tampilkan banner konsep di atas halaman; saat `demoMode: false`, sembunyikan banner dan wajibkan nomor WA klien terisi (adopsi pola `tuntas/src/config/site.ts:32-37` + `klimis/src/lib/whatsapp.ts:43-47`). | `ripeir/src/config/site.ts`, `src/lib/whatsapp.ts`, `src/layouts/Base.astro` | Tinggi (mencegah kebocoran nomor uji & label demo saat rilis klien) | **0,5 jam** |
| **2** | **Pindahkan tautan sosial hardcode dari `Footer.astro` ke `site.ts` (opsional/kondisional) dan satukan `copy.nav.brand` / `copy.footer.brand` agar membaca `site.name`.** Sembunyikan ikon sosial jika URL kosong (seperti `seruput/src/components/Footer.astro:17`). | `ripeir/src/config/site.ts`, `src/content/copy.ts:15,210`, `src/components/Footer.astro:39-115` | Tinggi (menghapus link mati `instagram.com/unknown` di produksi) | **0,4 jam** |
| **3** | **Ganti nama properti niche `devices`/`issues` di `copy.layanan` menjadi generik (`categories`/`items` + field opsional `priceOrMeta`) dan ganti `HeroObject.astro` agar mendukung gambar/foto dari `copy.home.hero.image`.** | `ripeir/src/content/copy.ts:85-175`, `src/components/ServicesGrid.astro`, `src/components/Hero.astro` | Tinggi (membuat `ripeir` langsung cocok untuk salon, barbershop, katering, bengkel) | **0,6 jam** |
| **4** | **Adopsi endpoint dinamis `src/pages/robots.txt.ts` (dari `tuntas`) dan JSON-LD `LocalBusiness` opsional (dari `enlesweb`) ke `Base.astro`.** Hapus `public/robots.txt` statis agar status `Allow` vs `Disallow` selalu sinkron dengan `site.indexable`. | `ripeir/src/pages/robots.txt.ts`, `src/layouts/Base.astro` | Sedang-Tinggi (menghilangkan risiko lupa mengubah `robots.txt` saat go-live) | **0,5 jam** |
| **5** | **(Perbaikan repo eksisting lain) Perbaiki 13 error TypeScript `Navbar.astro` di `seruput` dan tambahkan `astro check &&` ke skrip `build` di `seruput`, `tuntas`, `jerseay`, `berflower`.** | `seruput/src/components/Navbar.astro:303-326`, `package.json` di 4 repo | Sedang (menjamin type-safety di CI/build semua repo) | **0,5 jam** |
| **6** | **(Perbaikan repo eksisting lain) Bungkus semua teks disclaimer konsep/demo dengan kondisi `{site.demoMode && ...}`** di `seruput`, `tuntas`, `jerseay`, `klimis`, dan `berflower`, serta hapus 6 paket `@fontsource` mati di `seruput` dan `klimis`. | `seruput/src/components/Story.astro:54`, `berflower/src/components/DemoNote.astro:5`, `jerseay/.../Footer.astro:91`, `tuntas/src/content/copy.ts`, `klimis/src/components/BaseHead.astro:10-11` | Sedang (mencegah disclaimer konsep muncul di situs klien berbayar) | **1,5 jam** |
| **7** | **Ekstrak `copy.ts` penuh pada `seruput` dan `klimis`** untuk memindahkan `345 kata` (`seruput`) dan `298 kata` (`klimis`) dari komponen `.astro` ke `src/content/copy.ts`. | `seruput/src/components/*.astro`, `klimis/src/components/*.astro` | Sedang (menyeragamkan 6 repo non-Tailwind ke pola `site.ts` + `copy.ts`) | **3,5 jam** |

*Catatan: Prioritas 1 sampai 3 (`1,5 jam`) sudah cukup untuk mengubah `ripeir` menjadi template Starter generik yang siap pakai.*

---

## 8. Risiko Saat Info Ditukar & Rencana Deploy Preview Aman (Tahap 8c & 8d)

### 8.1. Risiko Saat Info Bisnis Ditukar `[FAKTA]`
1. **Label demo / klaim konsep ENLESWEB tertinggal di situs klien aktif:**
   - Pada `seruput` (`Story.astro:54`, `BaseHead.astro:17`), `tuntas` (`copy.ts:75,85,150,219,228,286,293,306`), `jerseay` (`Footer.astro:91`), `klimis` (`BaseHead.astro:10-11`), dan `berflower` (`DemoNote.astro:5`, `keranjang.astro:71`), kalimat `"Website ini adalah konsep buatan ENLESWEB... bukan usaha yang beroperasi"` **tidak terhubung ke `site.demoMode`**. Jika operator hanya mengubah `demoMode: false` tanpa menyunting teks tersebut, situs klien asli akan menyatakan dirinya bukan usaha yang beroperasi.
2. **Teks dan istilah khusus niche tertinggal di pesan WhatsApp atau sub-komponen:**
   - Pada `seruput/src/lib/whatsapp.ts:35-37`, fungsi `createCustomWhatsAppUrl` di mode demo mengabaikan argumen dan mengirim pesan `"contoh biji kopi pada demo Seruput Kopi"`.
   - Pada `seruput/src/components/Hero.astro:22`, nomor WA `0812-3456-7890` dan alamat Venice tertanam di HTML struk, sehingga mengganti `src/config/site.ts` tidak mengubah nomor WA dan alamat yang tampil di atas lipatan halaman.
   - Pada `klimis/src/components/Hero.astro:12-21`, nama jalan `"Calle Larga XXII Marzo, Venice"` tertanam di atribut `alt` dan `sub` gambar hero.
3. **Tautan media sosial placeholder (`.../unknown` atau akun `@enlesweb`) ikut tayang:**
   - `ripeir/src/components/Footer.astro:41,65,83,106` dan `berflower/src/config/site.ts:42-44` menanam URL `https://instagram.com/unknown` dsb., sedangkan `tuntas/src/config/site.ts:25` mengarahkan Instagram ke `https://www.instagram.com/enlesweb/`.
4. **Kebocoran `robots.txt` atau `noindex` saat rilis produksi (atau sebaliknya saat preview):**
   - Di `seruput`, `ripeir`, `klimis`, dan `berflower`, berkas `public/robots.txt` berisi `Disallow: /` secara statis, terpisah dari flag `indexable`/`publicIndexable` di `site.ts`. Di `jerseay/src/layouts/BaseLayout.astro:31`, `<meta name="robots" content="noindex, nofollow" />` ditulis mati tanpa flag sama sekali.
5. **Risiko Aturan Anti-Slop (Em Dash, Kata Superlatif, Testimoni/Klaim Palsu):**
   - **Em dash (`—`):** `0` kemunculan di seluruh 7 repo `[FAKTA]`. Namun ketika operator memasukkan copy klien baru, em dash mudah masuk jika skrip `slop-lint.mjs` atau `verify.mjs` tidak dijalankan di `npm run build`.
   - **Testimoni fiktif:** `seruput/src/data/reviews.ts:9-30` memuat 3 kutipan ulasan pelanggan fiktif (`Danang K.`, `Risa P.`, `Bima S.`). Jika komponen `SocialProofSection.astro` dipakai untuk klien baru tanpa ulasan asli yang terverifikasi, hal ini melanggar aturan anti-klaim palsu.
6. **Meta Pixel ID & Kebijakan Privasi:**
   - Hanya `enlesweb` yang memiliki `metaPixelId` (`src/config/site.ts:20`) dan halaman `/kebijakan-privasi` (`src/pages/kebijakan-privasi.astro`). Keenam repo template belum memiliki dukungan `metaPixelId` opsional maupun halaman kebijakan privasi bila klien menjalankan iklan berbayar.

### 8.2. Rencana Deploy Preview Aman (Tanpa Menyentuh Domain Klien) `[ESTIMASI]`

1. **Subdomain Preview Milik Sendiri:**
   - Gunakan wildcard subdomain di bawah domain studio sendiri (mis. `<slug-prospek>.preview.enlesweb.com` pada Cloudflare Pages/Workers atau Vercel Project terpisah), **bukan** nama domain yang menyerupai domain resmi prospek di root publik, dan atur `site.demoMode = true` serta `site.indexable = false`.
2. **Tiga Lapisan Proteksi `noindex` (Mencegah Preview Masuk Google dan Mengalahkan SEO Klien):**
   - **Lapisan 1 (HTML Meta):** Di `Base.astro`, paksa `<meta name="robots" content="noindex, nofollow, noarchive" />` dan hilangkan `<link rel="canonical">` setiap kali `site.demoMode === true || !site.indexable`.
   - **Lapisan 2 (`robots.txt` Dinamis):** Gunakan `src/pages/robots.txt.ts` (seperti di `tuntas`) yang mengembalikan `User-agent: *\nDisallow: /` saat `demoMode === true || !indexable`, serta menonaktifkan integrasi `@astrojs/sitemap`.
   - **Lapisan 3 (HTTP Header di `vercel.json` / `_headers`):** Tambahkan header respons HTTP `X-Robots-Tag: noindex, nofollow, noarchive` pada deployment preview sehingga file gambar/PDF pun tidak diindeks mesin pencari.
3. **Banner Konsep Otomatis Berbasis Flag `site.demoMode`:**
   - Pasang satu komponen `<ConceptBanner />` tepat di dalam `Base.astro` (di atas `<Navbar />`) yang hanya dirender jika `site.demoMode === true`:
     > *"CONTOH KONSEP DESAIN OLEH ENLESWEB - Halaman ini adalah pratinjau konsep, bukan situs resmi [Nama Usaha]. Seluruh tombol pemesanan diarahkan ke tim ENLESWEB."*
   - Dengan menaruh banner ini di `Base.astro` berbasis `site.demoMode`, seluruh teks halaman utama dapat berisi copy bersih tanpa perlu menyelipkan kalimat disclaimer di tengah konten yang rawan terlupa saat serah-terima.
4. **Penghapusan / Kedaluwarsa Otomatis Setelah 14 Hari:**
   - Tambahkan field `previewExpiresAt: 'YYYY-MM-DD'` di `site.ts` (atau variabel environment deployment `PUBLIC_PREVIEW_EXPIRES_AT`).
   - **Opsi A (Otomatis di Edge/CI):** Gunakan jadwal GitHub Actions (`cron: '0 2 * * *'`) yang membaca daftar deployment preview di Vercel/Cloudflare API dan menghapus deployment yang berumur `> 14 hari` sejak tanggal pembuatan.
   - **Opsi B (Pengaman Ganda di Klien/Edge):** Tambahkan pemeriksaan tanggal sederhana di `Base.astro` saat `demoMode === true`: jika `Date.now() > Date.parse(site.previewExpiresAt)`, sembunyikan konten utama dan tampilkan layar pemberitahuan bahwa masa pratinjau 14 hari telah berakhir beserta tombol WhatsApp ke ENLESWEB.

---

## 9. Pertanyaan Terbuka

1. **Standarisasi Versi Astro (`5.18.2` vs `7.3.x`) dan Node Engine:** Apakah seluruh template akan diseragamkan ke Astro `7.3.x` dengan `engines: { "node": ">=22.19.0" }` (agar peringatan `EBADENGINE undici@8.11.2` hilang), atau tetap mempertahankan Astro `5.18.2` pada template yang sudah ada?
2. **Kebijakan Testimoni pada Paket Starter (`seruput`):** Apakah bagian ulasan pelanggan (`SocialProofSection.astro` + `src/data/reviews.ts`) pada `seruput` akan dihapus dari standar template Starter sesuai aturan anti-klaim/testimoni, atau dipertahankan khusus untuk klien yang menyerahkan kutipan ulasan Google Maps asli?
3. **Target Hosting Standar Template:** Saat ini `enlesweb` memakai Cloudflare (`wrangler.json`), `ripeir`/`tuntas`/`berflower` memakai `vercel.json`, sedangkan `seruput`/`jerseay`/`klimis` belum memiliki file konfigurasi hosting. Apakah seluruh template klien akan distandarkan ke Vercel atau Cloudflare Pages/Workers?
4. **Dukungan Meta Pixel pada Template Klien:** Apakah field opsional `metaPixelId` (beserta halaman `/kebijakan-privasi` otomatis seperti di `enlesweb`) perlu dimasukkan ke dalam `Base.astro` standar untuk seluruh paket (Starter/Business/Growth), atau hanya untuk paket tertentu?
