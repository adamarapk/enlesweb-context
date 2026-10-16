# SPEC.md - ripeir (Technical Architecture & Implementation Specification)
Versi 2.0 (Starter Single-Page As-Is Synchronization)

---

## Changelog Versi 1.1 (As-Is Synchronization)
- **Struktur Berkas Proyek:** Diperbarui dengan aset gambar aktif di `public/images/` (`hero-deskmat-full.jpg`, `hero-cutting-mat.jpg`) dan skrip uji di `scripts/`.
- **Konfigurasi Bisnis Terpusat:** Diperbarui mencakup data aktif workshop demo Venezia di `src/config/site.ts`.
- **Arsitektur Floating WhatsApp Action:** Dokumentasi implementasi `ActionBar.astro` sebagai tombol aksi melayang di sudut kanan bawah.
- **Arsitektur Sistem Animasi:** Dokumentasi implementasi skrip observer di `Base.astro` dengan penanganan `prefers-reduced-motion` dan URL anchor hash.
- **Arsitektur Footer & Peta Interaktif:** Dokumentasi integrasi embed iframe Google Maps dan tautan media sosial di `Footer.astro`.
- **Pipeline Verifikasi Otomatis:** Dokumentasi skrip verifikasi statis (`scripts/verify-all.mjs` dan `scripts/verify-launch-cut.mjs`) yang dijalankan via `npm test`.

## Changelog Versi 1.2 (Panduan Pesan WhatsApp)
- Menambahkan `WhatsAppMessageBuilder.astro`, skrip browser terbundel, dan helper URL pesan lengkap tanpa mengubah `waUrl(topic)`.
- Memperbarui pemeriksaan otomatis menjadi 13 lokasi CTA dan menambahkan validasi marker builder pada Kontak.

## Changelog Versi 2.0 (Starter Single-Page As-Is Synchronization)
- **Arsitektur Single Page Route:** Seluruh rute multi-halaman (`layanan.astro`, `cara-kerja.astro`, `sebelum-servis.astro`, `tentang.astro`, `kontak.astro`) dihapus. Proyek murni merender 2 halaman statis: `index.astro` dan fallback `404.astro`.
- **Pembersihan Komponen:** Menghapus komponen legacy yang tidak digunakan (`ContactDetails.astro`, `DeviceLinks.astro`, `DeviceSection.astro`, `JumpNav.astro`, `PageHeader.astro`, `PrepList.astro`, `UrgentNotes.astro`, `WhatsAppMessageBuilder.astro`).
- **Komponen Layanan Baru (`ServicesGrid.astro`):** Merangkum seluruh katalog 4 perangkat ke dalam komponen grid 2x2 responsif dengan daftar kendala dan tombol WhatsApp mandiri per perangkat.
- **Penyelarasan Cara Kerja (`StepList.astro`):** Memadatkan alur kerja menjadi 4 langkah pengerjaan mandiri tanpa tautan eksternal.
- **Footer Sebagai Target Anchor Kontak (`Footer.astro`):** Footer kini memuat atribut `id="kontak"` dengan informasi workshop lengkap (WhatsApp, jadwal, alamat, iframe Google Maps interaktif, tombol Maps eksternal) dan kredit `"Website oleh ENLESWEB."`.
- **Navigasi Internal Cerdas (`Navbar.astro`):** Menangani navigasi anchor `#layanan`, `#cara-kerja`, `#kontak` pada Beranda, dan otomatis mengalihkan dengan awalan slash (`/#layanan`) jika diakses dari halaman `404.astro`.
- **Pipeline Uji Statis:** Menyelaraskan `scripts/verify-all.mjs` dan `scripts/verify-launch-cut.mjs` untuk memvalidasi 10 titik sentuh CTA WhatsApp.

---

## 4.1 Tech Stack (Aktual)
- **Framework:** Astro 5.4+ (`output: 'static'`).
- **Language:** TypeScript mode `strict` (`devDependencies: typescript`, `@astrojs/check`).
- **Styling:** Vanilla CSS dengan CSS Custom Properties (`src/styles/global.css`) dan scoped styling komponen Astro. Tanpa framework CSS eksternal.
- **Fonts (Self-hosted via Fontsource):**
  - `@fontsource/ibm-plex-sans-condensed` (600, 700)
  - `@fontsource/ibm-plex-sans` (400, 500, 600)
  - `@fontsource/ibm-plex-mono` (500)
- **Deployment:** Vercel (static pre-rendered via `vercel.json`).

---

## 4.2 Struktur Berkas Proyek Aktual
```
/
├── PRD.md                      (Product Requirements Document v2.0)
├── CONTENT.md                  (Website Copy Specification v2.0)
├── DESIGN.md                   (Visual & Design Specification v2.0)
├── SPEC.md                     (Technical Architecture Specification v2.0)
├── RIPEIR-DOCS-V2.md           (Dokumen Konsolidasi Induk Master v2.0)
├── astro.config.mjs            (Konfigurasi Astro static)
├── package.json                (Dependensi & script build/test)
├── tsconfig.json               (Konfigurasi TypeScript strict)
├── vercel.json                 (Konfigurasi deployment Vercel)
├── scripts/
│   ├── verify-all.mjs          (Verifikasi teks, larangan kata, h1, em dash, & 10 CTA)
│   └── verify-launch-cut.mjs   (Verifikasi kelengkapan data & perilaku launch cut)
├── public/
│   ├── favicon.svg             (Favicon vektor)
│   ├── robots.txt              (Robots disallow / crawl rules)
│   └── images/
│       ├── hero-deskmat-full.jpg   (Aset visual utama hero cutting mat)
│       └── hero-cutting-mat.jpg    (Aset visual cadangan)
└── src/
    ├── config/
    │   └── site.ts             (Konfigurasi metadata, workshop, & kontak terpusat)
    ├── content/
    │   └── copy.ts             (Pusat data teks seluruh halaman)
    ├── lib/
    │   └── whatsapp.ts         (Generator URL WhatsApp untuk topik dan pesan draft)
    ├── styles/
    │   └── global.css          (Variabel warna, tipografi, reset, & utilitas animasi)
    ├── layouts/
    │   └── Base.astro          (Layout utama: head, meta tags, skip link, & scroll observer)
    ├── components/
    │   ├── ActionBar.astro     (Floating WhatsApp Button aksi cepat melayang)
    │   ├── FinalCta.astro      (Blok callout ajakan bertindak penutup)
    │   ├── Footer.astro        (Footer workshop 3-kolom terpadu id="kontak")
    │   ├── Hero.astro          (Hero section berlatar workbench cutting mat)
    │   ├── HeroObject.astro    (Komponen visual interaktif pendukung hero)
    │   ├── Navbar.astro        (Header navigasi sticky & mobile drawer anchor)
    │   ├── Principles.astro    (Seksi 3 komitmen cara kami bekerja)
    │   ├── ServicesGrid.astro  (Grid katalog 4 perangkat & kendala teknis)
    │   ├── StepList.astro      (Seksi 4 langkah pengerjaan cara kerja)
    │   └── WhatsAppButton.astro (Komponen tombol WhatsApp inline yang dapat digunakan kembali)
    └── pages/
        ├── index.astro         (Landing page utama single page scroll)
        └── 404.astro           (Halaman navigasi fallback sistem)
```

---

## 4.3 Konfigurasi Bisnis Terpusat: `src/config/site.ts`
Menyimpan konfigurasi bisnis workshop yang dapat disesuaikan tanpa menyentuh kode komponen:
```typescript
export interface OpeningHour {
  days: string;
  hours: string;
}

export interface SiteConfig {
  name: string;
  whatsappNumber: string;
  siteUrl: string;
  enleswebUrl: string;
  indexable: boolean;
  address: string;
  openingHours: OpeningHour[];
  mapsUrl: string;
}

export const site: SiteConfig = {
  name: 'ripeir',
  whatsappNumber: '6200000000000',
  siteUrl: '',
  enleswebUrl: '',
  indexable: false,
  address: 'San Polo 2185, 30125 Venezia VE, Italia',
  openingHours: [
    { days: 'Senin - Jumat', hours: '09.00 - 18.00' },
    { days: 'Sabtu', hours: '10.00 - 15.00' },
  ],
  mapsUrl: 'https://maps.google.com/?q=San+Polo+2185,+30125+Venezia+VE,+Italia',
};
```

---

## 4.4 Generator URL WhatsApp: `src/lib/whatsapp.ts`
Menghasilkan URL direct link WhatsApp resmi:
- Fungsi `waUrl(topic: string)`:
  Mengembalikan tautan: `https://wa.me/{whatsappNumber}?text=Halo%20ripeir%2C%20saya%20mau%20tanya%20tentang%20{encodedTopic}.`
- Fungsi `waDraftMessage(device, problem, started?, note?)`:
  Menghasilkan template teks draft pesan terstruktur.

---

## 4.5 Arsitektur Komponen Kunci

### 4.5.1 Floating Action Bar (`ActionBar.astro`)
- Menggunakan wrapper `<div class="action-bar" role="complementary">` berposisi `fixed` di sudut kanan bawah (`z-index: 99`).
- Tombol aksi berdimensi 60px (desktop) dan 54px (mobile), berlatar `#25D366` dengan ikon SVG proporsional putih dan tooltip label desktop.
- Mengirimkan atribut pelacakan `data-cta-location="action_bar"`.

### 4.5.2 Layout & Scroll Observer (`Base.astro`)
- Mengobservasi seluruh elemen dengan kelas `.animate-section` menggunakan browser `IntersectionObserver`.
- Memberikan transisi fade-in bertahap (staggered delay 80–100ms) saat seksi digulir memasuki layar.
- Mengakomodasi preferensi aksesibilitas `prefers-reduced-motion: reduce` dengan langsung menampilkan seksi seketika tanpa transisi.
- Otomatis menandai seluruh seksi menjadi tampak (`is-visible`) apabila URL memuat anchor hash.

### 4.5.3 Grid Layanan (`ServicesGrid.astro`)
- Menyajikan 4 perangkat dalam format CSS Grid 2 kolom di layar desktop dan 1 kolom di layar mobile.
- Terdiri atas header perangkat, daftar kendala teknis (`<ul>` ber-bullet strip), dan komponen `WhatsAppButton` spesifik jenis perangkat (`layanan_laptop`, `layanan_komputer`, `layanan_handphone`, `layanan_tablet`).

### 4.5.4 Footer Workshop Terpadu (`Footer.astro`)
- Memiliki atribut `id="kontak"` untuk melayani navigasi anchor langsung dari header dan drawer.
- Kolom 1: Merek, tagline, nomor WhatsApp monospace dengan `data-cta-location="footer"`, dan tautan media sosial.
- Kolom 2: Jam operasional dari `site.openingHours` dan alamat lengkap dari `site.address`.
- Kolom 3: Iframe peta Google Maps responsif yang difilter kontras gelap dan tombol tautan `site.mapsUrl`.
- Baris Penutup: Menampilkan kredit `"Website oleh ENLESWEB."` (dirender sebagai link bila `enleswebUrl` ada, atau teks biasa bila string kosong) dan menu navigasi anchor internal.

---

## 4.6 Pipeline Verifikasi Otomatis (`npm test`)
Pipeline verifikasi statis terdiri atas dua script uji mandiri:
1. **`scripts/verify-all.mjs`:**
   - Memastikan tidak ada karakter em dash (`—`, `&mdash;`, `\u2014`).
   - Memastikan tidak ada kata promosi terlarang (anti-slop).
   - Memastikan tepat satu tag `<h1>` per halaman HTML.
   - Memastikan tidak ada penulisan merek berkas kapital (`Ripeir` atau `RIPEIR`).
   - Memvalidasi kelengkapan 10 titik sentuh CTA WhatsApp di seluruh keluaran HTML statis `dist/`.
2. **`scripts/verify-launch-cut.mjs`:**
   - Memvalidasi pembentukan teks draft pesan WhatsApp.
   - Memvalidasi bahwa tag kanonikal dan Open Graph dihilangkan ketika `siteUrl` kosong dan `og-image.png` tidak tersedia.
   - Memvalidasi bahwa kredit ENLESWEB tidak membentuk tag link `<a>` ketika `enleswebUrl` kosong.
   - Memvalidasi alamat workshop dan tautan peta di footer.
   - Memvalidasi seluruh format URL dan topik pesan pada ke-10 titik sentuh CTA WhatsApp.
