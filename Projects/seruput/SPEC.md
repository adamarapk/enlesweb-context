# SPEC.md - Seruput Kopi
Versi 3.0 (As-Is Technical Architecture and Implementation Specification)
Tanggal: 14 Oktober 2026

Dokumen ini mendokumentasikan spesifikasi teknis implementasi aktual (as-is) untuk website **Seruput Kopi**. Salinan teks sumber tunggal ada di CONTENT.md. Batasan produk ada di PRD.md. Panduan visual ada di DESIGN.md.

---

## 1. Stack Teknologi

- **Framework:** Astro v5.4.2 (mode output: `static`).
- **Bahasa:** TypeScript v5.7.3 dengan konfigurasi strict dan `@astrojs/check`.
- **Styling:** CSS murni via custom properties di `src/styles/global.css` dan scoped styles komponen Astro. Tidak menggunakan Tailwind atau UI library eksternal.
- **Tipografi:** Self-hosted melalui paket Fontsource:
  - `@fontsource/bricolage-grotesque` (bobot 400, 700, 800) untuk Display dan Body.
  - `@fontsource/space-mono` (bobot 400, 700) untuk Struk Kasir Monospace, Badge, dan Caption.
- **Aset Gambar:** Komponen bawaan `<Image />` dari `astro:assets` untuk optimasi webp otomatis dan pencegahan layout shift (CLS).
- **Runtime & Tools:** Node.js LTS, package manager npm.
- **Pengujian & QA:** Script mandiri Node.js ESM (`scripts/verify.mjs`, `scripts/verify-release.mjs`, `scripts/slop-lint.mjs`).

Perintah utama:
| Perintah | Deskripsi |
| --- | --- |
| `npm run dev` | Menjalankan server pengembangan Astro lokal |
| `npm run build` | Melakukan build statis ke direktori `dist/` |
| `npm run preview` | Menjalankan server preview lokal dari hasil build `dist/` |
| `npm run check` | Memeriksa tipe TypeScript dan diagnostik file Astro |
| `npm run verify` | Menjalankan asersi validasi HTML, struktur heading, link WhatsApp, dan kepatuhan copy |
| `npm run verify:release` | Memeriksa syarat build bersih untuk rilis |
| `node scripts/slop-lint.mjs --docs CONTENT.md,src/content,src/data` | Memindai teks HTML terkompilasi terhadap korpus dokumen dan daftar kata terlarang |

---

## 2. Struktur File Aktual (As-Is)

```text
seruput/
├── public/
│   ├── favicon.svg               # Favicon cangkir kopi SVG minimalis
│   └── robots.txt                # Pengaturan crawling (Disallow: / saat demo)
├── scripts/
│   ├── slop-lint.mjs             # Pemindai kata terlarang dan teks tanpa sumber
│   ├── verify-release.mjs        # Pemeriksa kesiapan rilis produksi
│   └── verify.mjs                # Asersi struktural HTML, tautan, dan konten (6 anchor & 8 WA link)
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── hero-coffee.jpg   # Foto daylight seduhan kopi di meja bar kayu
│   │       └── story-brew.jpg    # Foto daylight natural cangkir kopi & roti bakar
│   ├── components/
│   │   ├── BaseHead.astro        # Metadata dokumen, OpenGraph, dan import font
│   │   ├── BeansSection.astro    # Etalase 3 biji kopi sangrai dengan pesan WhatsApp per item
│   │   ├── ContactSection.astro  # Section ajakan kontak dan tombol WhatsApp
│   │   ├── FloatingWhatsApp.astro# Tombol melayang WhatsApp sudut kanan bawah
│   │   ├── Footer.astro          # Footer dengan Google Maps embed dan kredit ENLESWEB
│   │   ├── Hero.astro            # Hero headline & Rol Struk Kasir Menu-as-Hero
│   │   ├── LocationSection.astro # Papan jam buka dan alamat Venice cardless
│   │   ├── Navbar.astro          # Header navigasi desktop dan drawer mobile (6 anchor link)
│   │   ├── SocialProofSection.astro # Ulasan pengunjung konkret tanpa foto avatar AI
│   │   ├── Story.astro           # Cerita kedai dengan editorial photo diptych & disclaimer demo
│   │   └── WhatsAppButton.astro  # Komponen tautan tombol WhatsApp berbasis topik
│   ├── config/
│   │   └── site.ts               # Konfigurasi alamat Venice, jam, maps, dan demoMode
│   ├── data/
│   │   ├── beans.ts              # Data 3 varian biji kopi sangrai terpilih
│   │   ├── menu.ts               # Data 11 item menu racikan dalam 4 kategori
│   │   └── reviews.ts            # Data 3 ulasan pengunjung konkret
│   ├── layouts/
│   │   └── BaseLayout.astro      # Rangka dasar HTML, skip-link, dan scroll-reveal
│   ├── lib/
│   │   └── whatsapp.ts           # Generator tautan wa.me terenkode berdasarkan topik dan pesan custom
│   ├── pages/
│   │   ├── 404.astro             # Halaman penanganan 404 tidak ditemukan
│   │   └── index.astro           # Halaman beranda utama satu halaman
│   └── styles/
│       └── global.css            # Token desain CSS, reset, aksesibilitas, dan utilitas
├── astro.config.mjs              # Konfigurasi Astro
├── CONTENT.md                    # Sumber tunggal teks terverifikasi (Versi 3.0)
├── DESIGN.md                     # Spesifikasi desain dan token CSS (Versi 3.0)
├── package.json                  # Dependensi dan npm scripts
├── PRD.md                        # Spesifikasi produk as-is (Versi 3.0)
├── README.md                     # Dokumentasi pengantar proyek
├── SERUPUT-DOCS-V3.md            # Dokumentasi terpadu terkompilasi (Versi 3.0)
├── SPEC.md                       # Spesifikasi arsitektur teknis ini (Versi 3.0)
└── tsconfig.json                 # Konfigurasi TypeScript Astro
```

---

## 3. Komponen dan Tanggung Jawab Teknis

### 3.1 `BaseLayout.astro` & `BaseHead.astro`
- Mengelola kerangka dasar `<!doctype html>`, `<html lang="id">`.
- Menginjeksi tag meta `viewport`, `charset`, `title`, dan `description`.
- Menangani `robots`: mencetak `<meta name="robots" content="noindex, nofollow" />` selama `site.demoMode = true`.
- Mengimpor font self-hosted Fontsource secara lokal untuk performa optimal tanpa koneksi pihak ketiga.
- Menyediakan skip link `#main` untuk aksesibilitas pembaca layar dan keyboard.
- Skrip ringan IntersectionObserver untuk transisi scroll reveal yang ramah `prefers-reduced-motion`.

### 3.2 `Navbar.astro`
- Sticky header dengan latar merah tomat jenuh dan efek blur kaca (`backdrop-filter: blur(10px)`).
- Menampilkan teks merek `Seruput Kopi` dengan target klik menuju `#beranda`.
- Tautan anchor navigasi: Menu (`#menu`), Tentang (`#tentang`), Biji Kopi (`#biji-kopi`), Ulasan (`#ulasan`), Lokasi (`#lokasi`), Kontak (`#kontak`).
- Desktop CTA menggunakan `<WhatsAppButton topic="umum" text="Tanya via WhatsApp" />`.
- Tombol menu mobile hamburger dengan atribut aksesibel penuh (`aria-expanded`, `aria-controls`, `aria-label`).
- Panel menu mobile drawer yang dapat ditutup via tombol toggle, tombol Escape, atau saat pengguna memilih salah satu link navigasi.

### 3.3 `Hero.astro` (Signature Element Menu-as-Hero)
- Memuat heading tunggal H1 halaman: `Kopi Susu Gula Aren, Biji Filter Pilihan, dan Meja Santai.`
- Mengintegrasikan seluruh menu ke dalam artefak fisik struk kasir thermal panjang (`#menu`):
  - Kertas thermal putih bersih dengan potongan lurus (*straight-cut*).
  - Stempel cap taktil `SEDUH DADAKAN` di kanan atas rotasi 3deg.
  - Kop toko dan alamat Venice.
  - Metadata struk rata kiri: `No Nota`, `Waktu`, `Kasir`, `Meja`.
  - Looping 4 kategori dari `src/data/menu.ts`.
  - Format item: kuantitas `1`, nama item, dotted leaders, dan deskripsi bahan aktif berawalan `> `.
  - Catatan kaki aktif: `"Catatan: Kami menyeduh pesananmu dadakan saat kamu memesan."` dan pengarah harga harian via WhatsApp.
  - Tombol CTA: `Tanya Harga & Stok via WhatsApp`.
  - Teks penutup: `Terima kasih sudah singgah.`
  - Overlap fisik dengan `margin-bottom: -64px` melintasi kanvas merah tomat ke kanvas putih tulang.

### 3.4 `Story.astro` (Cerita Kedai & Mini-Galeri)
- Heading H2: `Kedai Kopi Bersahaja di Kawasan Cannaregio Venice`.
- Teks naratif aktif 2 paragraf tentang kopi susu gula aren dan suasana tepi kanal.
- **Editorial Photo Diptych:** Memuat 2 foto daylight natural menggunakan komponen `<Image />` Astro:
  1. `story-brew.jpg` (es kopi susu dan roti bakar di meja dekat jendela).
  2. `hero-coffee.jpg` (seduhan kopi di meja bar utama).
  - Dilengkapi caption `<figcaption>` bertipografi monospaced `Space Mono`.
- Kotak transparansi konsep demo ENLESWEB.

### 3.5 `BeansSection.astro` (Etalase Biji Kopi Sangrai)
- Section ID: `#biji-kopi`.
- Heading H2: `Biji Kopi Pilihan dari Meja Sangrai Kami`.
- Looping data `featuredBeans` dari `src/data/beans.ts`.
- Format kartu:
  - Header: Badge proses sangrai (`bean.process`) dan berat bersih (`bean.weight`).
  - Nama produk (`bean.name`), asal (`bean.origin`), ketinggian (`bean.altitude`).
  - Deskripsi rasa konkret dan deretan chip `bean.tastingNotes`.
  - Tombol aksi pemesanan WhatsApp spesifik memanfaatkan fungsi `createCustomWhatsAppUrl(bean.waMessage)`.

### 3.6 `SocialProofSection.astro` (Catatan Meja Singgah)
- Section ID: `#ulasan`.
- Heading H2: `Catatan dari Meja Singgah`.
- Looping data `reviewsData` dari `src/data/reviews.ts`.
- Format kartu:
  - Tanda kutip pembuka dekoratif `&ldquo;`.
  - Teks kutipan ulasan `review.quote` dalam elemen `<blockquote>`.
  - Footer kartu: Nama peninjau `review.reviewer`, peran `review.role`, dan badge pesanan favorit `review.favoriteOrder`.
  - Bersih dari foto avatar AI dan bintang review buatan.

### 3.7 `LocationSection.astro`
- Heading H2: `Jam Buka dan Lokasi Kedai`.
- Papan cardless 2 kolom:
  - Kolom Jadwal Operasional dengan dotted leaders dan catatan batas pesanan 30 menit sebelum tutup.
  - Kolom Alamat Kedai dengan alamat Venice lengkap, patokan jembatan Ponte delle Guglie, akses teras ramah pejalan kaki, dan tombol tautan `Buka di Google Maps`.

### 3.8 `ContactSection.astro`
- Heading H2: `Ada yang Ingin Kamu Tanyakan?`.
- Paragraf ajakan ramah untuk bertanya ketersediaan meja atau stok biji filter hari ini.
- Tombol utama `<WhatsAppButton topic="umum" text="Chat WhatsApp Barista" />`.

### 3.9 `Footer.astro`
- Identitas brand, tagline Venice, dan jam buka ringkas.
- Frame iframe embed resmi Google Maps untuk koordinat Venice (`loading="eager"`, `referrerpolicy="no-referrer-when-downgrade"`).
- Navigasi tautan footer 6 anchor.
- Teks kredit tunggal tanpa embel-embel: `Website oleh ENLESWEB.`

### 3.10 `WhatsAppButton.astro` & `FloatingWhatsApp.astro`
- Mengonstruksi tautan `https://wa.me/<nomor>?text=<pesan>` menggunakan helper `createWhatsAppUrl()`.
- Menggunakan ikon WhatsApp SVG resmi (tanpa font ikon eksternal).
- Tombol melayang diposisikan fixed dengan penyesuaian `safe-area-inset-bottom` untuk kenyamanan di perangkat mobile iOS/Android.

---

## 4. Konfigurasi Data & Routing WhatsApp

### 4.1 `src/config/site.ts`
- Menyimpan seluruh data konfigurasi global situs (nama, tagline, jam buka, alamat Venice, nomor WA demo/studio, koordinat peta).

### 4.2 `src/data/menu.ts`
- 11 racikan menu dalam 4 kategori terverifikasi, ditulis dengan kalimat aktif dan bebas dari angka nominal harga kaku.

### 4.3 `src/data/beans.ts`
- Tipe `BeanItem` dan 3 varian biji sangrai: Aceh Gayo Pantan Musara, Bali Kintamani Ulian, dan Toraja Sapan Misliana, lengkap dengan pesan WhatsApp otomatis.

### 4.4 `src/data/reviews.ts`
- Tipe `ReviewItem` dan 3 ulasan konkret dari pejalan santai, penikmat seduh manual, dan pengunjung lokal.

### 4.5 `src/lib/whatsapp.ts`
- Mendukung `createWhatsAppUrl(topic)` untuk pesan umum/menu/lokasi.
- Mendukung `createCustomWhatsAppUrl(customMessage)` untuk pesan produk spesifik (biji kopi) dengan penyesuaian otomatis antara mode demo dan mode studio.

---

## 5. Kepatuhan Aksesibilitas, Pengujian & QA

1. **Heading Semantik:** Tepat 1 tag `<h1>` pada halaman beranda, diikuti `<h2>` berurutan pada setiap section (`#beranda`, `#tentang`, `#biji-kopi`, `#ulasan`, `#lokasi`, `#kontak`).
2. **Kontras Warna:** Seluruh kombinasi warna memenuhi standar rasio kontras WCAG 2.1 AA (minimal 4.5:1 untuk teks normal).
3. **Navigasi Keyboard:** Semua elemen interaktif dapat diakses melalui tabulasi keyboard dengan outline fokus tegas (`--focus-outline: #CE3216`).
4. **Target Sentuh:** Seluruh tombol dan tautan memenuhi standar ukuran minimal 44x44px.
5. **Zero Layout Shift:** Dimensi gambar didefinisikan secara eksplisit via komponen `<Image />`.
6. **Verifikasi Terotomasi:** Script `scripts/verify.mjs` memvalidasi seluruh 6 anchor navigasi, 8 tautan WhatsApp valid, dan ketiadaan klaim terlarang maupun karakter terlarang em/en dash.
