# SPEC.md - ENLESWEB Homepage

Versi 1.2 (As-Is Technical Architecture & Implementation Specification - 14 Oktober 2026)

Dokumen ini membahas arsitektur teknis website yang telah terbangun: stack, struktur file, pemetaan komponen, konfigurasi, skrip klien, tracking WhatsApp & Meta Pixel, SEO, QA teknis, dan urutan pemeliharaan. Teks ada di CONTENT.md. Tampilan ada di DESIGN.md. Scope ada di PRD.md.

Status: LOCKED, DEFAULT, OPEN (arti di AGENTS.md bagian 5).

---

## 1. Stack (DEFAULT)

- Astro versi stabil terbaru, `output: 'static'`, dengan `build.inlineStylesheets: 'always'` (seluruh CSS 8.3 KiB disematkan langsung di dalam `<head>` HTML untuk mengeliminasi 100% permintaan render-blocking CSS)
- TypeScript mode `strict` (devDependencies: `typescript` dan `@astrojs/check` untuk type checking tanpa menambah ukuran bundle klien)
- CSS murni dengan custom properties (`src/styles/global.css` dan scoped styling komponen). Tidak memakai Tailwind atau framework UI (React/Vue/Svelte)
- JavaScript klien murni (*vanilla JS*) inline tanpa library eksternal
- Font: `@fontsource/poppins` (self-hosted, nol permintaan eksternal ke server Google Fonts; preload seluruh 4 bobot 700, 600, 500, dan 400 di `<head>` untuk render teks instan dan eliminasi layout shift desktop & mobile)
- Package manager: npm
- Hosting target: Cloudflare Workers (domain kanonikal produksi `enlesweb.com`, aset statis dioptimalkan via `public/_headers` dan routing murni tanpa SPA fallback di `wrangler.json`)

Perintah proyek:
- `npm install`
- `npm run dev`
- `npm run build` (wajib selesai dengan exit code 0, 0 errors, 0 warning)
- `npm run preview`

---

## 2. Struktur file aktual

```
/
├── AGENTS.md
├── PRD.md
├── CONTENT.md
├── DESIGN.md
├── SPEC.md
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── llms.txt                (standar discoverability Agentic Browsing Lighthouse)
│   ├── _headers                (caching immutable 1 tahun untuk /_astro/*)
│   └── og-image.png            (berkas fisik 1200x630 aktif)
└── src/
    ├── config/
    │   └── site.ts             (semua konfigurasi bisnis terpusat)
    ├── content/
    │   └── copy.ts             (seluruh teks, salinan persis CONTENT.md)
    ├── lib/
    │   └── whatsapp.ts         (pembentuk URL tautan WhatsApp otomatis)
    ├── styles/
    │   └── global.css          (token desain, reset, font, progressive scroll)
    ├── assets/
    │   ├── hero-object.svg
    │   └── projects/           (jerseay, dipotongin, tuntas, seruput, ripeir, berflower + favicons)
    ├── layouts/
    │   └── Base.astro          (dokumen HTML, meta tags, Pixel, IntersectionObserver)
    ├── components/
    │   ├── Navbar.astro        (header, link anchor, drawer mobile)
    │   ├── Hero.astro          (headline, harga, CTA, ambient sweep mobile)
    │   ├── HeroObject.astro    (komposisi berlapis SVG hero taktil desktop)
    │   ├── Packages.astro      (kontainer 3 kolom paket)
    │   ├── PackageColumn.astro (kolom paket Starter, Business, Growth + details)
    │   ├── CustomPackage.astro (jalur terpisah custom di bawah paket)
    │   ├── Projects.astro      (showcase proyek sistem Highlight & Minimize)
    │   ├── ProjectItem.astro   (tampilan stage proyek highlighted)
    │   ├── Process.astro       (5 langkah timeline vertikal accordion)
    │   ├── About.astro         (penggabungan Tentang ENLESWEB & Manfaat Bisnis)
    │   ├── FinalCta.astro      (banner konversi penutup berlatar aksen)
    │   ├── Footer.astro        (footer tingkat dua berlatar solid ink)
    │   ├── WhatsAppButton.astro (komponen tombol seragam dengan affordance fisik 3D)
    │   └── FloatingWhatsApp.astro (tombol WhatsApp melayang di kanan bawah)
    └── pages/
        ├── index.astro         (pintu masuk utama landing page)
        └── kebijakan-privasi.astro (halaman statis kebijakan privasi)
```

Aturan tata kelola file:
- Seluruh teks pelanggan wajib diimpor dari `src/content/copy.ts`. Dilarang menulis *hardcoded copy* di dalam komponen.
- Seluruh nilai bisnis variabel (`whatsappNumber`, `metaPixelId`, `siteUrl`, `showLaunchNote`, daftar proyek) wajib diimpor dari `src/config/site.ts`.

---

## 3. Pemetaan section ke komponen

| Urutan | Section | Komponen | Anchor ID |
|---|---|---|---|
| 1 | Navbar | `Navbar.astro`, `WhatsAppButton.astro` | - |
| 2 | Hero | `Hero.astro`, `HeroObject.astro`, `WhatsAppButton.astro` | `hero` |
| 3 | Paket | `Packages.astro`, `PackageColumn.astro` x3, `CustomPackage.astro`, `WhatsAppButton.astro` | `paket` |
| 4 | Proyek | `Projects.astro`, `ProjectItem.astro` x6, `WhatsAppButton.astro` | `proyek` |
| 5 | Proses | `Process.astro` | `proses` |
| 6 | Tentang & Manfaat bisnis | `About.astro` | `tentang` |
| 7 | CTA penutup | `FinalCta.astro`, `WhatsAppButton.astro` | - |
| 8 | Footer | `Footer.astro` | - |
| 9 | Floating WhatsApp | `FloatingWhatsApp.astro` | - |

Semantik HTML:
- `<header>` membungkus navbar.
- `<main id="main-content">` membungkus section Hero sampai Final CTA.
- `<footer>` membungkus footer.
- Tepat satu `<h1>`: headline hero.
- Judul section memakai `<h2>`. Nama paket, nama proyek, dan judul langkah memakai `<h3>`.
- Section memakai `<section id="...">` dengan `aria-labelledby` yang mengaitkan judul section.

---

## 4. Konfigurasi bisnis: `src/config/site.ts`

```ts
export const site = {
  name: 'EnlesWeb',

  // TODO(OPEN): nomor WhatsApp bisnis dummy. Format: kode negara + nomor tanpa tanda baca (misal: 62812xxxxxxxx).
  whatsappNumber: '6200000000000',

  // TODO(OPEN): ID Pixel dari Meta Events Manager. Kosongkan jika belum ada (tidak memuat skrip Pixel).
  metaPixelId: '',

  // TODO(OPEN): URL produksi website tanpa trailing slash.
  siteUrl: '',

  // LOCKED: true untuk menampilkan catatan "Harga peluncuran untuk 10 klien pertama." pada Starter.
  showLaunchNote: true,

  projects: [
    {
      id: 'jerseay',
      status: 'live',
      url: 'https://jerseay.enlesweb.com/',
    },
    {
      id: 'dipotongin',
      status: 'live',
      url: 'https://dipotongin.enlesweb.com/',
    },
    {
      id: 'tuntas',
      status: 'live',
      url: 'https://tuntas.enlesweb.com/',
    },
    {
      id: 'seruput',
      status: 'live',
      url: 'https://seruput.enlesweb.com/',
    },
    {
      id: 'ripeir',
      status: 'live',
      url: 'https://ripeir.enlesweb.com/',
    },
    {
      id: 'berflower',
      status: 'live',
      url: 'https://berflower.enlesweb.com/',
    },
  ],
} as const;
```

Logika penanganan proyek dan nomor:
- Keenam proyek contoh berstatus `live` dengan URL demo aktif. Jika salah satu URL dikosongkan di konfigurasi, tombol proyek tersebut dirender secara aman sebagai tombol nonaktif `[Segera]` dengan atribut `aria-label="Segera tersedia"` dan sistem mencetak peringatan build `console.warn` tanpa menggagalkan build.
- Format tampilan nomor WhatsApp di footer: `+` diikuti string `whatsappNumber`.

---

## 5. Skrip klien (Vanilla JS)

Seluruh skrip klien menggunakan JavaScript murni ringan yang disematkan langsung di komponen terkait (`<script>` Astro).

### 5.1 Bagian lipat paket (`Packages.astro` & `PackageColumn.astro`)
- Menggunakan elemen standar `<details>` dan `<summary>`.
- Default: `<details>` tertutup secara default pada semua ukuran layar (`details.open = false`) untuk menjaga kekompakan tampilan.
- Label teks diambil dari atribut HTML `data-label-open` dan `data-label-closed` tanpa mengimpor file `copy.ts` di skrip klien, sepenuhnya mengeliminasi berkas bundle JS klien `copy.js`.
- Label `<summary>` berganti secara otomatis antara `Lihat semua yang termasuk` (saat tertutup) dan `Sembunyikan` (saat terbuka) melalui event listener `toggle`.
- Tanpa mutasi DOM awal yang memicu layout recalc, karena HTML server sudah merender kondisi tertutup.

### 5.2 Navbar transparan & saat scroll (`Navbar.astro`)
- Memulai render dengan latar transparan (`background-color: transparent`, `border-bottom-color: transparent`) pada posisi `top: 0` (`z-index: 100`). Elemen navbar langsung tampil tanpa animasi entrance `opacity: 0` agar render awal tidak tertunda.
- Gambar logo brand navbar (`navbrand-logo.svg`) dilengkapi `loading="eager"` untuk eliminasi delay LCP dan percepatan visual header.
- Label menu drawer mobile diambil via `data-label-open` dan `data-label-close` pada tombol menu (tanpa bundle `copy.js`).
- Sapuan pendaran aksen (*ambient sweep*) dari Hero mengalir bebas menembus navbar transparan berkat margin-top negatif pada Hero (`-64px` mobile, `-72px` desktop) dengan kompensasi padding atas.
- Memantau event `window.scroll` dengan opsi `{ passive: true }`.
- Menggunakan pelacakan status internal `isScrolled !== isScrolledState` dan hanya memanggil `setAttribute`/`removeAttribute` saat status berubah untuk mencegah *Forced Reflow* (0 ms reflow time).
- Pengecekan scroll awal dijadwalkan menggunakan `requestIdleCallback` (dengan fallback `setTimeout 100ms`) untuk mencegah eksekusi layout baca sinkron (*synchronous reflow*) selama parsing dan evaluasi modul skrip.
- Menambahkan atribut `data-scrolled="true"` pada elemen `<header>` saat `window.scrollY > 8` untuk mengubah latar transparan menjadi solid `--canvas` (`#FFFFFF`) dengan garis bawah tipis `1px solid var(--line)` (transisi 150ms).

### 5.3 Menu mobile drawer (`Navbar.astro`)
- Mengontrol tombol toggle drawer dengan `aria-expanded` dan `aria-controls="nav-menu-panel"`.
- Saat drawer terbuka (`data-menu-open="true"`), navbar otomatis mengaktifkan latar solid `--canvas` (`#FFFFFF`) agar menu drawer kontras dan terbaca jelas.
- Panel menu mobile terbuka tepat di bawah navbar dan menutup otomatis saat:
  1. Tautan navigasi di dalam panel diklik.
  2. Tombol toggle menu diklik kembali.
  3. Tombol `Escape` ditekan pada keyboard (fokus kembali ke tombol menu).

### 5.4 Showcase Proyek Highlight & Minimize (`Projects.astro`)
- Menampilkan 6 proyek portofolio konsep: 1 proyek terpilih di panggung pameran (*stage* berasio 16:10), dan 5 proyek lainnya tersusun rapi sebagai kartu ringkas (*minimized cards*).
- Mengklik kartu minimized mana pun akan memanggil fungsi `highlightProject(targetId)` yang menukar tampilan kartu dan stage secara instan.
- Pada layar smartphone (< 840px), interaksi switcher dilengkapi auto-scroll halus kembali ke panggung pameran (`stage.scrollIntoView({ behavior: 'smooth', block: 'nearest' })`).

### 5.5 Akordeon Timeline Proses (`Process.astro`)
- Menghubungkan 5 langkah vertikal dengan rel dinamis (*step rail*).
- Langkah 1 aktif secara default, sedangkan langkah 2 sampai 5 diminimize.
- Mengklik baris langkah mana pun akan memperluas (*expand*) deskripsi langkah tersebut dengan rotasi ikon chevron 180° dan latar kartu `--surface`.

### 5.6 Progressive Scroll Reveal (`Base.astro`)
- Menggunakan skrip sebaris berpelindung fitur di `<head>` (`if ('IntersectionObserver' in window) { document.documentElement.classList.add('js-reveal'); }`) yang aktif sebelum body di-parse, sehingga aturan CSS `.reveal-on-scroll` tidak memicu pembatalan cache style (*style invalidation*) atau kalkulasi ulang style menyeluruh (*recalculate styles*) setelah dokumen selesai di-load.
- Menggunakan native `IntersectionObserver` ringan di `Base.astro` yang inisialisasinya dijadwalkan via `requestIdleCallback` (dengan fallback `setTimeout 100ms`) dan dipasang langsung ke seluruh elemen `.reveal-on-scroll` tanpa perulangan sinkron `getBoundingClientRect()`, sepenuhnya mengeliminasi layout thrashing dan forced reflow pada thread utama.
- Pengaturan observer: `rootMargin: '0px 0px -28px 0px'`, `threshold: 0`.
- Saat elemen masuk viewport, kelas `.is-visible` ditambahkan dan pengamatan segera dihentikan (`revealObserver.unobserve(entry.target)`), menghasilkan nol beban CPU setelah animasi selesai.
- Animasi bertransisi pada properti `opacity` dan `transform: translateY(24px)` dengan akselerasi GPU (`will-change: opacity, transform`), sangat ramah daya untuk perangkat smartphone kelas menengah (*mid-range*).
- Secara otomatis dinonaktifkan ketika sistem mendeteksi `prefers-reduced-motion: reduce`.
- Judul section Paket (`#packages-title`) dibebaskan dari kelas `.reveal-on-scroll` karena berada di bagian bawah viewport awal mobile 412x823, menjamin LCP bebas hambatan.

---

## 6. Integrasi tautan WhatsApp & Tracking: `src/lib/whatsapp.ts`

```ts
import { site } from '../config/site';

export function waUrl(topic: string): string {
  const text = `Halo ENLESWEB, saya mau tanya tentang ${topic}.`;
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
```

Format tautan WhatsApp:
- Protokol: `https://wa.me/{nomor}?text={encodedText}`.
- Membuka aplikasi WhatsApp di smartphone atau WhatsApp Web/Desktop di peramban komputer.
- Seluruh tautan WhatsApp dilengkapi atribut pengaman: `target="_blank"`, `rel="noopener noreferrer"`.
- Seluruh elemen dilengkapi atribut data tracking: `data-wa-topic="{topic}"` dan `data-cta-location="{location}"`.

### Tabel 9 Titik Sentuh WhatsApp (LOCKED)

| Lokasi Tombol | `location` | Topik `{topic}` | Keterangan |
|---|---|---|---|
| Navbar (desktop) | `nav` | `pembuatan website` | Tombol CTA teks di header |
| Hero | `hero` | `pembuatan website` | Tombol utama hero |
| Paket Starter | `package_starter` | `paket Starter` | Tombol di kolom Starter |
| Paket Business | `package_business` | `paket Business` | Tombol di kolom Business |
| Paket Growth | `package_growth` | `paket Growth` | Tombol di kolom Growth |
| Custom | `package_custom` | `paket Custom` | Tombol di kartu Custom |
| CTA penutup | `final_cta` | `pembuatan website` | Tombol banner Final CTA |
| Footer | `footer` | `pembuatan website` | Tautan ikon WhatsApp di footer |
| Floating WhatsApp | `floating_wa` | `pembuatan website` | Tombol aksi melayang di kanan-bawah layar |

---

## 7. Meta Pixel & Tracking (`Base.astro`)

### 7.1 Pemuatan Asinkron Teroptimasi (Opsi A Murni Berbasis Interaksi)
- Disematkan di `<head>` pada `Base.astro` hanya jika `site.metaPixelId` terisi (panjang > 0).
- Menggunakan inisialisasi stub antrean `window.fbq` instan di `<head>` (0 KiB jaringan), sehingga pemanggilan `fbq('init')` dan `fbq('track', 'PageView')` langsung aktif sejak detik pertama tanpa kehilangan event klik WhatsApp yang cepat.
- File eksternal `fbevents.js` (153 KiB) ditunda pengunduhannya murni hingga interaksi pertama pengguna (`scroll`, `pointerdown`, `touchstart`, `keydown`, `click`) tanpa timer `setTimeout(3500ms)`, mengeliminasi *Total Blocking Time* (TBT = 0 ms) dan beban eksekusi thread utama pada pengujian benchmark PageSpeed Desktop maupun Mobile.
- Jika `site.metaPixelId` kosong, tidak ada skrip Pixel yang dimuat dan tidak ada error konsol yang dihasilkan.

### 7.2 Pelacakan Event Resmi (Standar Meta Patuh Kebijakan)

1. **Event `PageView` (Standar Meta)**: dikirim otomatis saat halaman pertama kali dimuat oleh skrip dasar Meta Pixel.
2. **Event `AddToCart` (Standar Meta)**: dikirim setiap kali terjadi klik pada tombol WhatsApp (`data-wa-topic`). Jika tombol memiliki `data-package-value`, parameter `value` dan `currency: 'IDR'` disertakan untuk optimasi bidding berbasis nilai di Meta Ads (karena event Lead/Contact/InitiateCheckout dibatasi oleh konfigurasi backend Meta pada akun ini).
3. **Event `ViewContent` (Standar Meta)**:
   - *Portfolio Demo*: dikirim saat tombol `[Lihat Website]` (`data-project-demo`) diklik dengan `content_ids`.
   - *Pricing Section*: dikirim satu kali saat section `#paket` masuk ke viewport (via IntersectionObserver).
   - *Rincian Paket*: dikirim saat accordion rincian paket dibuka (`content_name: 'Rincian Paket ...'`).
   - *Switcher Portofolio*: dikirim saat kartu portofolio dipilih (`content_name: 'Portofolio ...'`).
   - *Langkah Proses*: dikirim saat langkah proses dibuka (`content_name: 'Langkah X: ...'`).

Aturan:
- Tidak memanggil `preventDefault` (navigasi ke aplikasi WhatsApp dan link demo berjalan instan tanpa terhambat).
- Aman dari ad-blocker dan saat Pixel ID tidak aktif (`typeof window.fbq !== 'function'`).
- Menggunakan 100% event standar Meta resmi tanpa bypass agar akun Meta aman dari suspend.

---

## 8. CSS, Token, dan Font

- Seluruh token dari DESIGN.md bagian 2 diimplementasikan di `:root` pada `src/styles/global.css`:
  - Warna: `--accent: #E4FF30`, `--ink: #111111`, `--ink-muted: #55554F`, `--canvas: #FFFFFF`, `--surface: #F5F5F2`, `--line: #E5E5DF`, `--neutral-object: #D1D1CB`.
  - Radius: `--radius-sm: 6px`, `--radius-md: 10px`, `--radius-lg: 14px`.
  - Spasi: Skala 4px (`--space-4` hingga `--space-160`).
  - Tipografi: Skala fluid clamp (`--font-hero-headline`, `--font-section-title`, dll.).
- Font Poppins diimpor secara lokal via `@fontsource/poppins` (bobot 400, 500, 600, 700). Seluruh 4 bobot (700, 600, 500, 400) di-preload via `<link rel="preload" as="font" type="font/woff2">` di `<head>` untuk menjamin teks langsung terlukis seketika tanpa keterlambatan swap font dan mengeliminasi layout shift pada desktop maupun mobile.
- Isolasi Lapisan Komposisi GPU: Elemen grafis SVG dengan filter blur (`.hero-ambient-wash` pada `Hero.astro` dan `.hero-composition-inner` pada `HeroObject.astro`) diberi properti `contain: paint; will-change: transform; transform: translateZ(0);` untuk mengisolasi rasterisasi filter SVG pada layer GPU mandiri, menghilangkan beban reflow dan jank saat scroll.
- Reset minimal: `box-sizing: border-box`, margin 0 pada heading/paragraf/daftar, `img, svg { max-width: 100%; display: block; }`.
- Sistem tombol: Seluruh tombol berstatus borderless (`border: none`) dengan affordance fisik 3D *Engineered Tactile Shelf* 3px `#A3C400`, inset specular highlight `rgba(255, 255, 255, 0.6)` di sisi atas, clean ink inversion pada hover, dan depression 2px saat aktif/ditekan.
- Dukungan Aksesibilitas Gerak (`prefers-reduced-motion: reduce`): Mematikan seluruh transisi dan animasi CSS jika pengguna mengaktifkan mode minim gerak pada sistem operasi mereka.

---

## 9. SEO & Meta Tags (`Base.astro`)

- `<html lang="id">`
- `<meta charset="utf-8">`, `<meta name="viewport" content="width=device-width, initial-scale=1">`
- `<meta name="color-scheme" content="light">`
- `<title>` dan `<meta name="description">` berasal dari `copy.meta`.
- `<link rel="icon" type="image/svg+xml" href="/favicon.svg">`
- `<meta name="geo.region" content="ID">`, `<meta name="geo.placename" content="Indonesia">`.
- Open Graph tags: `og:type` = `website`, `og:title`, `og:description`, `og:locale` = `id_ID`.
- `og:url` dan `<link rel="canonical">` mengarah ke kanonikal produksi `https://enlesweb.com`.
- `og:image` dan `twitter:card = summary_large_image` menggunakan berkas fisik `public/og-image.png` (1200x630).
- Structured Data (Schema.org JSON-LD): Tipe `ProfessionalService` dengan entitas bisnis EnlesWeb, area layanan `ID`, tautan media sosial, serta penawaran paket harga (`Offer`) yang terpetakan dinamis dari `copy.packages.items`.
- Sitemap Otomatis: Dihasilkan oleh integrasi `@astrojs/sitemap` (`dist/sitemap-index.xml`).
- `public/robots.txt`: `User-agent: *`, `Allow: /`, dan referensi `Sitemap: https://enlesweb.com/sitemap-index.xml`.
- `public/llms.txt`: Dokumentasi discoverability AI agent yang mematuhi spesifikasi Lighthouse Agentic Browsing (H1, kutipan deskripsi, rincian paket resmi dari `CONTENT.md`, dan tautan markdown).
- `public/_headers`: Konfigurasi Cloudflare edge caching (`Cache-Control: public, max-age=31536000, immutable` untuk `/_astro/*` dan `Content-Type: text/plain; charset=utf-8` untuk `/llms.txt`).

---

## 10. Aksesibilitas dan Performa

Aksesibilitas (WCAG AA Standard):
- Kontras warna teks biasa terhadap latar belakang minimal 4.5:1; kontras teks besar dan elemen interaktif minimal 3:1.
- Seluruh elemen interaktif dapat dioperasikan penuh dengan keyboard (Tab, Enter, Space, Escape) dengan indikator fokus terlihat tegas (`outline: 2px solid var(--ink); outline-offset: 3px;`).
- Target area sentuh (tap targets) minimal 44x44px pada smartphone.
- Elemen dekoratif SVG ditandai dengan `aria-hidden="true"`.
- Tombol nonaktif dilengkapi `aria-label="Segera tersedia"`.
- Tepat satu `<h1>` pada hero, dan urutan heading semantik teratur tanpa lompatan.

Performa & Metrik Benchmark Terverifikasi:
- Benchmark Desktop (Lighthouse Desktop terverifikasi): **Performance 100/100, Accessibility 100, Best Practices 100, SEO 100, Agentic Browsing 3/3 (100%)**.
  - Total Blocking Time (TBT): 0 ms.
  - First Contentful Paint (FCP): 0.3 s.
  - Largest Contentful Paint (LCP): 0.6 s.
  - Cumulative Layout Shift (CLS): 0.007 (~0).
  - Speed Index: 0.9 s.
- Benchmark Mobile (PageSpeed Insights remote via web.dev live URL `enlesweb.com`, Moto G Power / Slow 4G): **Performance 95/100, Accessibility 100, Best Practices 100, SEO 100, Agentic Browsing 3/3 (100%)**.
  - First Contentful Paint (FCP): 1.0 s.
  - Largest Contentful Paint (LCP): 1.1 s.
  - Cumulative Layout Shift (CLS): 0.
  - Speed Index: 3.8 s.
  - Total Blocking Time (TBT): ~220 ms (dipengaruhi eksekusi skrip deteksi bot Cloudflare `cdn-cgi/challenge-platform/h/b/scripts/jsd/...` yang berjalan pada bot runner pengujian headless tanpa interaksi pengguna riil).
- Nol framework JS di sisi klien (Astro SSG murni, 0 KiB JS bundle `copy.js`).
- Pemuatan Meta Pixel murni ditunda hingga interaksi pertama pengguna (`scroll`, `pointerdown`, `touchstart`, `keydown`, `click`) tanpa timer otomatis, menjaga TBT 0 ms.
- Preload seluruh 4 bobot font Poppins (700, 600, 500, 400) di `<head>` dan inlined stylesheet CSS 8.3 KiB.
- Routing Cloudflare Workers tanpa SPA fallback (`not_found_handling` dinonaktifkan) untuk mengembalikan HTTP 404 asli bagi URL non-existent.

---

## 11. QA Checklist Teknis

Sebelum rilis atau deploy, verifikasi daftar berikut:

### Build & Tipe
- [ ] `npm run build` sukses tanpa error dan tanpa warning TypeScript (exit code 0).
- [ ] `npm run preview` menampilkan hasil rendering identik dengan mode dev.

### Konten & Sumber Tunggal
- [ ] Seluruh teks sama persis dengan `CONTENT.md` tanpa ada em dash (`—`) atau kata promosi klise.
- [ ] Seluruh teks diimpor dari `src/content/copy.ts`.
- [ ] Seluruh konfigurasi variabel bisnis berada di `src/config/site.ts`.

### Navigasi & Interaksi
- [ ] Tautan anchor `#hero`, `#paket`, `#proyek`, `#proses`, `#tentang` bekerja mulus tanpa tertutup sticky navbar (`scroll-margin-top: 88px`).
- [ ] Menu mobile drawer terbuka dan tertutup mulus (klik toggle, klik tautan, atau tombol Escape).
- [ ] Navbar berubah transparan ke solid `--canvas` setelah scroll 8px tanpa forced reflow (pengecekan awal dijadwalkan via `requestIdleCallback`).
- [ ] `<details>` paket tertutup secara default pada semua resolusi layar, dan label toggle berganti dengan benar tanpa bundle `copy.js`.
- [ ] Switcher proyek (Highlight & Minimize) menukar kartu dengan mulus dan mengembalikan scroll ke stage pada layar HP.
- [ ] Akordeon Proses memperluas langkah dengan mulus saat nomor/judul diklik.

### WhatsApp & Tracking
- [ ] Seluruh 9 tombol WhatsApp membuka URL `wa.me/{nomor}?text=...` dengan teks topik yang sesuai.
- [ ] Seluruh tombol WhatsApp memuat atribut `data-wa-topic` dan `data-cta-location` yang benar.
- [ ] Meta Pixel mengantre event `AddToCart` dan `PageView` secara instan dan mengunduh `fbevents.js` murni pada interaksi pertama pengguna tanpa timer otomatis.
- [ ] Tidak ada error di konsol peramban saat Pixel ID kosong atau ad-blocker aktif.

### Utilitas & Legal
- [ ] Halaman statis `/kebijakan-privasi` aktif, dapat diakses dari footer, dan memuat 5 poin kepatuhan privasi data.
- [ ] Tautan kembali di header `/kebijakan-privasi` menggunakan ikon SVG bersih yang mengarahkan pengguna kembali ke `/`.
- [ ] Berkas `/llms.txt` aktif dan mematuhi spesifikasi Agentic Browsing.

---

## 12. Panduan Deploy Cloudflare Pages / Workers

1. Hubungkan repository git ke Cloudflare Workers.
2. Konfigurasi build setting:
   - Framework preset: `Astro`
   - Build command: `npm run build`
   - Build output directory: `dist`
3. Pipeline otomatis terpasang via `.github/workflows/deploy.yml` dan `wrangler.json`.
4. Domain produksi final `enlesweb.com` telah resmi dibeli (Decision 018) dan nameserver/DNS diarahkan ke Cloudflare Workers sebagai domain utama kanonikal (`https://enlesweb.com`).
5. Di Cloudflare Dashboard, nonaktifkan otomatis fitur **Cloudflare Web Analytics / RUM Beacon** untuk menghilangkan injeksi `beacon.min.js`.

---

## 13. Catatan OPEN Tersisa (Sisa 2 Tugas Eksekusi Murni Minggu 0)

1. `domain enlesweb.com`: **CLOSED** (Domain resmi telah dibeli oleh pemilik bisnis di Domainesia dan diarahkan DNS ke Cloudflare Workers, nilai kanonikal `siteUrl: 'https://enlesweb.com'` aktif, Decision 018).
2. `materi iklan Meta`: render iklan Carousel 4 slide berlabel tier & harga (`tuntas: Paket Business Rp750.000`, `Jerseay: Paket Growth Rp1.200.000`, `ripeir: Paket Starter Rp450.000`) + *problem-aware hook* via tooling internal `carousel-generator/` (Decision 016).
3. `draf template PDF Bukti Pemesanan`: menyiapkan 1 halaman template PDF Bukti Pemesanan ber-TTD digital yang mencantumkan Nama Lengkap Pendiri (sama persis dengan rekening bank penerima) sebagai Penanggung Jawab Resmi Studio ENLESWEB, kuota update konten ringan tahunan (2x/4x/6x), waktu pembelian domain pasca-DP + materi lengkap, dan aturan *On-Hold* 60 hari kalender (Decision 017).
*(Catatan: nomor WhatsApp 6285156801570, Meta Pixel ID 1099411523003859, public/og-image.png, pengujian fisik HP/Pixel, halaman kebijakan privasi, optimasi PageSpeed Insights 100/100, dan berkas llms.txt / _headers telah RESOLVED / CLOSED).*
