# SERUPUT-DOCS-V3.md - Dokumentasi Terpadu Seruput Kopi
Versi 3.0 (As-Is Production Documentation)
Tanggal: 14 Oktober 2026

Dokumen ini adalah kompilasi lengkap dokumentasi terpadu untuk website **Seruput Kopi** (Paket Starter ENLESWEB, Layout A) yang mencakup 4 pilar dokumen produk:
1. **PRD.md** - Kebutuhan dan batasan produk as-is (Versi 3.0)
2. **SPEC.md** - Arsitektur implementasi teknis as-is (Versi 3.0)
3. **DESIGN.md** - Spesifikasi visual dan token desain terkunci as-is (Versi 3.0)
4. **CONTENT.md** - Sumber tunggal teks (single source of truth copy) as-is (Versi 3.0)

Seluruh isi dokumen ini mencerminkan kondisi nyata (as-is) website saat ini tanpa halusinasi.

================================================================================
BAGIAN 1: PRD.md
================================================================================

# PRD.md - Seruput Kopi
Versi 3.0 (As-Is Production Specification)
Tanggal: 14 Oktober 2026

Dokumen ini menetapkan tujuan, scope, dan batasan produk Seruput Kopi sesuai kondisi aktual (as-is) website saat ini. Salinan teks final ada di CONTENT.md. Arahan visual dan token desain ada di DESIGN.md. Arsitektur implementasi teknis ada di SPEC.md.

---

## 1. Konteks

`Seruput Kopi` adalah konsep website satu halaman untuk kedai kopi mandiri di tepi kanal Venice, Italia. Dibuat oleh ENLESWEB sebagai contoh paket Starter (Layout A) sekaligus template siap-pakai untuk calon klien kedai kopi. `Seruput Kopi` adalah konsep website demonstrasi dan bukan bisnis yang sedang beroperasi secara komersial. Seluruh informasi racikan menu, jam buka, alamat, biji kopi, ulasan, dan kontak adalah data contoh.

Fungsi bagi ENLESWEB:
- Menjadi representasi nyata paket Starter di bagian portofolio ENLESWEB, berdampingan dengan demo Starter lainnya (ripeir) dan demo Growth (Jerseay, dipotongin, berflower).
- Menunjukkan bahwa paket Starter mampu menyajikan informasi bisnis esensial yang langsung dibutuhkan calon pelanggan: daftar menu racikan, jam buka operasional, lokasi presisi dengan peta, etalase biji kopi sangrai, ulasan pengunjung, dan jalur kontak WhatsApp langsung.
- Menunjukkan fleksibilitas pemilihan desain paket Starter: `Seruput Kopi` mengimplementasikan Layout A (satu kolom naratif editorial dengan arketipe Menu-as-Hero).
- Kemudahan pemeliharaan (*maintenance-friendly*) tanpa CMS: situs sengaja tidak menampilkan angka nominal harga individual di halaman agar tidak mudah usang saat terjadi fluktuasi harga atau rotasi biji kopi, melainkan mengarahkan ke WhatsApp untuk pembaruan harga dan stok harian.

Prinsip penulisan: Concrete > Clever, Information > Marketing, Description > Slogan. Bebas dari klaim berlebihan dan kalimat filosofis muluk.

---

## 2. Tujuan Situs

Dua lapis tujuan dengan urutan prioritas:

1. **Lapis demo & template (utama):** Calon klien ENLESWEB melihat bahwa paket Starter menghasilkan website satu halaman yang fungsional, memiliki identitas visual kuat, berkarakter taktil, dan terstruktur rapi untuk bisnis kedai kopi.
2. **Lapis konsep:** Pengunjung kedai memahami jenis racikan kopi, seduhan filter, minuman non-kopi, kudapan, biji kopi sangrai, ulasan penikmat kopi, jam buka, dan alamat kedai, lalu dapat membuka WhatsApp untuk bertanya harga harian atau memesan meja.

Urutan prioritas:
1. **Clarity:** Pengunjung segera mengenali kedai kopi, pilihan racikan menu, biji kopi, jam buka, dan lokasi tanpa hambatan navigasi.
2. **Honesty:** Transparansi penuh bahwa website ini adalah konsep demo buatan ENLESWEB; tidak ada klaim rating bintang palsu atau statistik fiktif.
3. **Trust:** Informasi tersaji rapi, konsisten, tautan kontak berfungsi nyata, dan keterbatasan demo dijelaskan terbuka.
4. **Action:** WhatsApp sebagai saluran komunikasi utama yang mudah dijangkau dari berbagai bagian halaman.

---

## 3. Audiens

- **Pengunjung demo:** Pemilik kedai kopi, pengusaha kuliner kecil, dan UMKM yang mengevaluasi paket Starter ENLESWEB. Mayoritas mengakses lewat ponsel pintar.
- **Persona konsep:** Penikmat kopi dan pejalan santai di Venice yang mencari tempat ngopi santai di tepi kanal Cannaregio, ingin mengetahui pilihan racikan menu, biji sangrai, dan jam buka sebelum berkunjung.
- **Gaya Bahasa:** Bahasa Indonesia sederhana, hangat, lugas, aktif, dan ramah dengan sapaan "kamu".

---

## 4. Penawaran Konsep dan Pemetaan Paket Starter

### 4.1 Penawaran Konsep (Data Contoh)

- Kedai kopi lokal dengan menu kopi berbasis espresso, seduhan filter manual, minuman non-kopi, kudapan hangat, dan etalase biji kopi sangrai kemasan 200g.
- Konsep racikan: `seduh dadakan` (diseduh langsung saat dipesan).
- Satu halaman dengan navigasi anchor ke Menu (`#menu`), Tentang (`#tentang`), Biji Kopi (`#biji-kopi`), Ulasan (`#ulasan`), Lokasi (`#lokasi`), dan Kontak (`#kontak`).
- Lokasi nyata terpilih untuk demo: kawasan tepi kanal Cannaregio, Venice, Italia (`Fondamenta della Misericordia, 2599, 30121 Venezia VE, Italia`).
- Signature element: Rol Struk Kasir Menu-as-Hero (*straight-cut thermal receipt slip*) yang menampilkan seluruh 11 menu racikan dengan dotted leaders dan stempel cap `SEDUH DADAKAN`.
- Pengarah harga: Mengarahkan pengunjung bertanya via WhatsApp untuk informasi harga dan ketersediaan stok biji harian tanpa memajang angka nominal di halaman.
- Embed Google Maps interaktif dan tautan peta resmi disematkan di footer dan section lokasi.
- Kredit tunggal di footer: `Website oleh ENLESWEB.`

### 4.2 Pemetaan Fitur Paket Starter ke Website As-Is

| Fitur Paket Starter | Implementasi di Seruput Kopi |
| --- | --- |
| Website satu halaman | 1 halaman landing page utama (`/`) + 1 halaman sistem 404 (`/404`) |
| Pilihan desain | Layout A: satu kolom naratif editorial dengan arketipe Menu-as-Hero |
| Informasi bisnis | Headline hero, rol struk menu lengkap, cerita kedai, papan jam buka, alamat, peta, dan kontak |
| Daftar produk/layanan | 11 item racikan menu dalam 4 kategori terstruktur rapi |
| Mini-Galeri Suasana | Editorial Photo Diptych 2 foto daylight natural (`story-brew.jpg` & `hero-coffee.jpg`) dengan caption Space Mono |
| Etalase Biji Kopi | 3 varian biji kopi sangrai kemasan 200g dengan detail proses, ketinggian, tasting notes, dan tombol WA spesifik |
| Social Proof | 3 kartu kutipan ulasan konkret tanpa foto AI generik atau rating bintang fiktif |
| Tombol WhatsApp | Navbar desktop, CTA struk hero, 3 tombol kartu beans, tombol kontak, dan floating button melayang (total 8 tautan valid) |
| Google Maps | Tautan eksternal ke Google Maps dan embed iframe peta lokasi di footer |
| Tampilan responsif | Uji responsif mulus pada 360px, 390px, 768px, 1024px, dan 1440px |
| SEO dasar | Judul unik, meta deskripsi, 1 tag `<h1>`, hierarki heading konsisten, alt teks gambar, noindex demo |

### 4.3 Batasan Paket Starter

| Aspek | Ada di Seruput Kopi (Starter) | Tidak Ada (Business / Growth / Custom) |
| --- | --- | --- |
| Halaman | 1 halaman naratif utama | Multi-halaman terpisah untuk tiap kategori |
| Desain | Layout A terpilih dari katalog desain | Desain kustom dari nol per sub-halaman |
| Pengelolaan Menu & Beans | Statis via file data TypeScript (bebas CMS) | CMS dinamis, dashboard admin, login |
| Transaksi | Tautan chat WhatsApp per produk | Keranjang belanja, checkout online, payment gateway |
| Interaksi | Anchor scroll, hamburger drawer mobile | Filter interaktif, pencarian, pemesanan meja otomatis |
| Lokasi | 1 lokasi tunggal di Venice | Manajemen multi-cabang dengan filter pencarian |

---

## 5. Scope (IN)

### 5.1 Struktur Section Halaman Utama

1. **Navbar (`#navbar`):**
   - Brand `Seruput Kopi` (menaut ke `#beranda`).
   - Tautan navigasi desktop: Menu (`#menu`), Tentang (`#tentang`), Biji Kopi (`#biji-kopi`), Ulasan (`#ulasan`), Lokasi (`#lokasi`), Kontak (`#kontak`).
   - Tombol CTA desktop: `Tanya via WhatsApp`.
   - Tombol toggle hamburger mobile dengan panel drawer accessible.
2. **Hero Section (`#beranda`):**
   - Heading H1: `Kopi Susu Gula Aren, Biji Filter Pilihan, dan Meja Santai.`
   - Teks pengantar suasana kedai dan lokasi Venice.
   - Signature Element Rol Struk Menu-as-Hero (`#menu`):
     - Kertas thermal putih bersih berpotongan lurus rapi (*straight-cut*).
     - Stempel taktil `SEDUH DADAKAN` di kanan atas rotasi 3 derajat.
     - Kop struk brand dan alamat Venice.
     - Metadata struk rata kiri: `No Nota`, `Waktu`, `Kasir`, `Meja`.
     - 4 kategori menu: Kopi Espresso & Susu (4 item), Seduhan Filter Manual (2 item), Minuman Non-Kopi (3 item), Kudapan Hangat (2 item).
     - Format baris: nomor kuantitas `1`, nama item, dotted leaders `....`, deskripsi bahan diawali tanda `>`.
     - Catatan kaki struk aktif: `"Catatan: Kami menyeduh pesananmu dadakan saat kamu memesan."` dan pengarah harga ke WhatsApp.
     - Tombol CTA: `Tanya Harga & Stok via WhatsApp`.
     - Teks penutup struk: `Terima kasih sudah singgah.`
     - Controlled overlap: margin-bottom negatif menyeberangi perbatasan section Story.
3. **Story & Mini-Galeri Section (`#tentang`):**
   - Heading H2: `Kedai Kopi Bersahaja di Kawasan Cannaregio Venice`.
   - 2 paragraf naratif ramah dalam kalimat aktif.
   - Editorial Photo Diptych: 2 foto daylight natural berkarakter (`story-brew.jpg` dan `hero-coffee.jpg`) dengan caption tipografi Space Mono.
   - Kotak transparansi demo ENLESWEB.
4. **Beans Showcase Section (`#biji-kopi`):**
   - Heading H2: `Biji Kopi Pilihan dari Meja Sangrai Kami`.
   - Paragraf pengantar sangrai kelompok kecil dalam kemasan 200 gram.
   - 3 kartu biji kopi sangrai (Aceh Gayo, Bali Kintamani, Toraja Sapan) dengan detail proses, ketinggian, tasting notes, dan tombol pemesanan WhatsApp spesifik.
5. **Social Proof Section (`#ulasan`):**
   - Heading H2: `Catatan dari Meja Singgah`.
   - Paragraf pengantar kesan jujur pengunjung.
   - 3 kartu kutipan ulasan konkret (fokus pada rasa racikan dan suasana) tanpa foto AI generik atau rating bintang buatan.
6. **Location Section (`#lokasi`):**
   - Heading H2: `Jam Buka dan Lokasi Kedai`.
   - Teks pengantar suasana tepi kanal Fondamenta della Misericordia.
   - Papan cardless typography-driven:
     - Kolom Jadwal Operasional: Senin sampai Kamis (07.00 sampai 21.00 CET), Jumat sampai Sabtu (07.00 sampai 22.00 CET), Minggu (07.00 sampai 21.00 CET), dengan dotted leaders.
     - Kolom Alamat Kedai: Alamat lengkap Venice, patokan jembatan Ponte delle Guglie, akses pejalan kaki, dan tombol `Buka di Google Maps`.
7. **Contact Section (`#kontak`):**
   - Heading H2: `Ada yang Ingin Kamu Tanyakan?`.
   - Paragraf ajakan ramah.
   - Tombol utama: `Chat WhatsApp Barista`.
8. **Footer:**
   - Identitas brand, tagline Venice, dan jam buka ringkas.
   - Navigasi tautan footer (Menu, Tentang, Biji Kopi, Ulasan, Lokasi, Kontak).
   - Tampilan embed iframe Google Maps lokasi Venice.
   - Garis pembatas halus.
   - Teks kredit tunggal: `Website oleh ENLESWEB.`
9. **Floating WhatsApp:**
   - Tombol melayang di pojok kanan bawah dengan ikon WhatsApp svg resmi dan background hitam arang.
10. **Halaman 404 (`/404`):**
    - Kode error `404`, pesan ramah `Halaman ini tidak ditemukan.`, dan tombol `Kembali ke beranda`.

---

## 6. Di Luar Scope (OUT)

- Transaksi e-commerce, keranjang belanja, checkout, dan integrasi payment gateway.
- Angka nominal harga rupiah/euro eksplisit pada antarmuka web (agar mudah dirawat tanpa CMS).
- Sistem akun pengguna, autentikasi, dashboard, dan backend database.
- Multi-cabang atau fitur pencari lokasi dinamis.
- Testimoni palsu berlebihan, rating bintang fiktif, atau klaim pemasaran superlatif (*terbaik, nomor satu, presisi, premium*). Ulasan yang disajikan adalah data contoh demonstrasi fitur template.
- Parallax berlebihan, scroll-jacking, carousel otomatis, atau dekorasi yang mengaburkan kejelasan teks.
- Foto wajah pelanggan atau stok foto AI dengan pencahayaan palsu/dramatis berlebihan.

---

## 7. Kriteria Kelulusan Kualitas (QA & Launch Gate)

1. **Build Statis Bersih:** `npm run build` selesai tanpa error atau peringatan.
2. **Uji Verifikasi Sistem:** `npm run verify` meluluskan seluruh asersi pengujian (struktur 1 H1, 6 target anchor `#menu`, `#tentang`, `#biji-kopi`, `#ulasan`, `#lokasi`, `#kontak`, format 8 link wa.me, nihil broken link, nihil karakter terlarang em/en dash).
3. **Slop Lint Keras:** `node scripts/slop-lint.mjs --docs CONTENT.md,src/content,src/data` menghasilkan `0 FAIL, 0 REVIEW`.
4. **Aksesibilitas:** Seluruh tombol dan tautan memiliki target sentuh minimal 44x44px, fokus keyboard terlihat jelas, kontras teks memenuhi standar WCAG AA.

================================================================================
BAGIAN 2: SPEC.md
================================================================================

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

================================================================================
BAGIAN 3: DESIGN.md
================================================================================

# DESIGN.md - Seruput Kopi
Versi 3.0 (As-Is Visual & Design Specification)
Tanggal: 14 Oktober 2026

Dokumen ini adalah spesifikasi desain terkunci permanen untuk website **Seruput Kopi** (Paket Starter ENLESWEB, Layout A). Dokumen ini mengunci tata letak hero Center Stage Receipt (Menu-as-Hero), artefak fisik struk kasir potongan lurus (*straight-cut thermal receipt*), palet warna P1 Merah Tomat Jenuh + Putih Tulang + Hitam Arang, mini-galeri suasana diptych, etalase biji kopi sangrai, social proof kartu kutipan, serta kepatuhan penuh terhadap standar antislop.

Status: SELURUH STATUS TERKUNCI (LOCKED).

---

## 1. Karakter dan Target Rasa

### 1.1 Target Rasa (LOCKED)
Hangat, bersahaja, santai, dan akrab. Mengacu pada kedai kopi mandiri di tepi kanal Venice yang mengutamakan kejujuran rasa, kejelasan informasi racikan, jam buka pasti, dan kenyamanan pengunjung tanpa pretensi estetika korporat atau jargon filosofis yang muluk.

### 1.2 Dials Liveliness Antislop (LOCKED)
* **ENERGY 2 (Balanced):** Kontras tegas antara kanvas hero merah tomat jenuh (`#CE3216`) dengan rol struk putih bersih (`#FFFFFF`) dan kanvas utama putih tulang (`#FBF9F5`).
* **RHYTHM 2 (Consistent dengan variasi bertingkat):** Alur naratif satu kolom vertikal (Layout A) yang mengalir teratur dari objek rol struk kasir menu-as-hero, cerita kedai yang intim dengan mini-galeri foto daylight natural, etalase 3 kartu biji kopi sangrai, 3 kartu kutipan ulasan konkret, papan jam buka dan alamat cardless dengan dotted leaders, hingga penutup footer yang bersih.
* **MOTION 1 (Static & Fungsional):** Transisi interaktif dasar 150ms pada hover dan fokus. Tidak ada scroll-jacking, tidak ada parallax, tidak ada carousel otomatis. Penuh kepatuhan pada `prefers-reduced-motion`.

---

## 2. Token Desain (CSS Custom Properties - LOCKED)

```css
:root {
  /* PALET WARNA P1: MERAH TOMAT JENUH + PUTIH TULANG + HITAM ARANG (LOCKED) */
  --canvas-hero: #CE3216;       /* Merah tomat jenuh tegas untuk hero section (Risk Card 5) */
  --canvas: #FBF9F5;            /* Putih tulang hangat untuk kanvas utama */
  --surface-receipt: #FFFFFF;   /* Kertas thermal putih bersih untuk struk kasir */
  --surface: #FFFFFF;           /* Permukaan putih bersih untuk section board & kartu */
  --surface-subtle: #F2EFE9;    /* Lapis halus untuk aksen, chip, dan disclaimer */
  --ink-hero: #FFFFFF;          /* Putih bersih untuk heading H1 di atas kanvas hero */
  --ink: #141414;               /* Hitam arang tegas untuk teks struk, body, dan heading */
  --ink-muted: #555555;         /* Abu arang sedang untuk deskripsi dan teks pendukung */
  --line: #E2DDD5;              /* Garis pembatas halus antar komponen */
  --line-receipt: #D0CBC2;      /* Garis pemisah putus-putus pada struk kasir */
  --accent: #CE3216;            /* Merah tomat jenuh untuk stempel dan kategori */
  --accent-hover: #AF250D;      /* State hover aksen */
  --wa: #25D366;                /* Hijau WhatsApp resmi */
  --wa-hover: #20BA5A;          /* Hover hijau WhatsApp */
  --focus-outline: #CE3216;     /* Outline fokus keyboard tegas */

  /* TIPOGRAFI TERVERIFIKASI FONTSOURCE (LOCKED) */
  --font-display: 'Bricolage Grotesque', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono: 'Space Mono', monospace, ui-monospace;
  --font-body: 'Bricolage Grotesque', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

  /* SKALA RUANG (4px base) */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;

  /* RADIUS DAN GARIS (LOCKED) */
  --radius-sm: 2px;             /* Sudut elemen kecil dan chip */
  --radius: 4px;                /* Sudut tombol dan kontainer */
  --radius-receipt: 2px;        /* Potongan lurus rapi struk fisik */
  --border-subtle: 1px solid var(--line);
  --border-receipt: 1px dashed var(--line-receipt);

  /* BATAS KONTAINER */
  --container-max: 1120px;
  --reading-max: 680px;
  --transition-fast: 150ms ease-in-out;
}
```

---

## 3. Signature Element: Rol Struk Kasir Menu-as-Hero (LOCKED)

Signature element Seruput Kopi adalah selembar rol struk kasir fisik thermal panjang berpotongan lurus (*straight-cut thermal receipt roll*) yang memuat seluruh 11 menu racikan kedai langsung di hero section:

1. **Format Kertas:** Kertas thermal putih bersih (`#FFFFFF`) berlatar bayangan lembut (`box-shadow: 0 20px 48px rgba(0,0,0,0.38)`), bertekstur tipografi monospace murni (`Space Mono`), potongan atas-bawah lurus rapi (tanpa efek zigzag/gerigi kartun).
2. **Kop Toko:** Tulisan `SERUPUT KOPI.` tebal di bagian atas, disertai alamat `Fondamenta della Misericordia No. 2599, Venice | WA: 0812-3456-7890`.
3. **Stempel Cap Taktil:** Stempel kotak taktil `SEDUH DADAKAN` di sudut kanan atas dengan rotasi 3 derajat, border 2px aksen merah tomat, huruf tebal huruf besar.
4. **Metadata Nota Rata Kiri:** Label dan nilai tersusun rata kiri dengan titik dua rapi:
   - `No Nota : SK/12/1026/0042`
   - `Waktu   : Hari ini, Seduh Dadakan`
   - `Kasir   : Barista Seruput`
   - `Meja    : Meja Bar / Bebas`
5. **Daftar Menu & Dotted Leaders:** 11 racikan menu terbagi dalam 4 kategori (`KOPI ESPRESSO & SUSU`, `SEDUHAN FILTER MANUAL`, `MINUMAN NON-KOPI`, `KUDAPAN HANGAT`). Setiap baris mencantumkan kuantitas pesanan `1`, nama item, dotted leaders (`................................`), dan deskripsi bahan konkret berawalan `> `.
6. **Bebas Nominal Angka:** Struk tidak mencantumkan nominal harga kaku. Di bagian bawah tercantum pengarah: `"Harga & stok harian: Tanya via WhatsApp."` dengan tombol pemesanan langsung: `Tanya Harga & Stok via WhatsApp`.
7. **Controlled Overlap (Risk Card 4):** Struk kasir memiliki `margin-bottom: -64px`, sehingga secara fisik menyeberangi perbatasan kanvas merah tomat hero menuju kanvas putih tulang section Story.

---

## 4. Hirarki Visual & Tata Letak

### 4.1 Navbar
- Latar merah tomat jenuh (`#CE3216`), sticky saat scroll dengan efek blur ringan (`rgba(206, 50, 22, 0.96)`).
- Brand teks `Seruput Kopi` di kiri, navigasi anchor 6 tautan (`#menu`, `#tentang`, `#biji-kopi`, `#ulasan`, `#lokasi`, `#kontak`), tombol `Tanya via WhatsApp` di desktop, dan hamburger menu sentuh 44px di mobile.

### 4.2 Hero Section
- Latar merah tomat jenuh tanpa foto.
- Heading H1 besar (`clamp(2.5rem, 5.5vw, 4.25rem)`) warna putih di tengah: `Kopi Susu Gula Aren, Biji Filter Pilihan, dan Meja Santai.`
- Teks pengantar hangat tentang kedai di Fondamenta della Misericordia Venice.
- Struk Menu-as-Hero menempati center stage sebagai atraksi visual utama.

### 4.3 Cerita Kedai & Mini-Galeri (Story Section)
- Berlatar kanvas putih tulang (`#FBF9F5`) dengan padding atas mengkompensasi overlap struk kasir.
- Judul editorial H2: `Kedai Kopi Bersahaja di Kawasan Cannaregio Venice`.
- Teks naratif aktif 2 paragraf tentang kopi susu gula aren, seduhan filter, dan area teras tepi kanal.
- **Editorial Photo Diptych:** 2 foto daylight natural berkarakter (`story-brew.jpg` dan `hero-coffee.jpg`) dengan aspect ratio 16:10, berbingkai halus, dilengkapi caption monospace `Space Mono` ukuran 0.8125rem.
- Kotak transparansi konsep demo ENLESWEB.

### 4.4 Biji Kopi Sangrai (Beans Showcase Section)
- Berlatar kanvas putih tulang (`#FBF9F5`) dengan garis pembatas halus di atasnya.
- Label kategori `MEJA SANGRAI` aksen merah tomat kapital, judul H2 `Biji Kopi Pilihan dari Meja Sangrai Kami`, dan teks pengantar.
- Grid 3 kartu (desktop) / 1 kolom (mobile):
  - Border kartu halus `1px solid var(--line)`, background `var(--surface)`.
  - Header kartu: Badge proses sangrai (`Space Mono` aksen merah) dan berat bersih 200 gram.
  - Nama kopi tebal `Bricolage Grotesque` ukuran 1.25rem.
  - Asal daerah dan ketinggian dengan pemisah vertikal halus.
  - Deskripsi rasa konkret dan deretan chip *tasting notes* bersahaja.
  - Tombol pemesanan sekunder WhatsApp dengan ikon resmi dan teks `Tanya Stok Biji Kopi via WhatsApp`.

### 4.5 Catatan Meja Singgah (Social Proof Section)
- Berlatar kanvas putih tulang (`#FBF9F5`) dengan garis pembatas halus di atasnya.
- Label kategori `ULASAN PENGUNJUNG` aksen merah tomat kapital, judul H2 `Catatan dari Meja Singgah`, dan teks pengantar.
- Grid 3 kartu kutipan (desktop) / 1 kolom (mobile):
  - Tanda kutip besar elegan di sudut kiri atas kartu.
  - Paragraf kutipan bergaya miring (*italic*) yang berfokus pada rasa racikan dan ketenangan suasana.
  - Garis pemisah putus-putus (*dashed line*) di atas footer kartu.
  - Nama pengunjung (font body bold), peran/status pejalan (`Space Mono`), dan badge pesanan favorit dengan nilai aksen merah tomat.
  - Nihil foto avatar stok AI palsu dan nihil bintang review generik.

### 4.6 Jam Buka dan Lokasi (Location Section)
- Berlatar putih bersih (`#FFFFFF`) dengan garis pembatas halus.
- Papan cardless dua kolom (desktop) / satu kolom (mobile):
  - Kolom kiri: Jadwal operasional terstruktur dengan dotted leaders.
  - Kolom kanan: Alamat lengkap Venice, patokan jembatan, informasi akses teras, dan tombol `Buka di Google Maps`.

### 4.7 Kontak (Contact Section)
- Berlatar kanvas putih tulang (`#FBF9F5`).
- Judul H2: `Ada yang Ingin Kamu Tanyakan?`.
- Paragraf ajakan ramah dan tombol `Chat WhatsApp Barista`.

### 4.8 Footer
- Berlatar merah tomat jenuh (`#CE3216`).
- Identitas brand, tagline Venice, jam operasional ringkas, dan navigasi tautan 6 anchor.
- Frame peta interaktif Google Maps embed di Venice.
- Garis pembatas putih transparan dan kredit tunggal: `Website oleh ENLESWEB.`

---

## 5. Aturan Anti-Slop & Kepatuhan Visual

1. **Bebas Komentar Dekoratif:** File CSS dan markup HTML bersih dari banner ASCII, huruf kapital berteriak, dan narasi alur kerja baris-demi-baris (`antislop-code`).
2. **Fotografi Natural:** Tidak menggunakan foto AI klise dengan kedalaman ruang tipis ekstrem atau pencahayaan buatan berlebihan. Foto meja kayu dan seduhan kopi diambil dari sudut pandang mata manusia yang wajar.
3. **Kontras Aksesibel:** Seluruh teks di atas latar merah tomat menggunakan warna putih bersih (`#FFFFFF`, kontras rasio > 4.5:1), teks di atas latar putih tulang menggunakan warna hitam arang (`#141414`, kontras rasio > 14:1).
4. **Target Sentuh:** Seluruh tautan dan tombol memiliki tinggi minimal 44px dengan outline fokus keyboard tegas (`outline: 2px solid var(--focus-outline)`).
5. **Nihil Slop Gerakan:** Tidak ada slider/carousel otomatis, tidak ada bento grid klise, dan tidak ada popup testimonial melayang.

================================================================================
BAGIAN 4: CONTENT.md
================================================================================

# CONTENT.md - Seruput Kopi
Versi 3.0 (Template Expansion: Gallery, Beans & Reviews Specification)
Tanggal: 14 Oktober 2026


Dokumen ini adalah sumber tunggal copy situs Seruput Kopi. Seluruh implementasi harus mengikuti teks di sini. Teks dirancang konkret, membumi, ramah, dan bebas dari kalimat filosofis yang muluk.

---

## 1. Aturan Keras Copywriting

- Nama merek selalu ditulis `Seruput Kopi`.
- Bahasa Indonesia sederhana, hangat, ramah, dan konkret.
- Tidak menggunakan teks filosofis atau metafora yang muluk.
- Konsep persiapan seduhan menggunakan `seduh dadakan` atau `dadakan`.
- Lokasi ditetapkan di `Venice, Italia` (Fondamenta della Misericordia, Cannaregio).
- Tidak menampilkan angka harga nominal individual di website (menjaga kemudahan pemeliharaan tanpa CMS).
- Tidak menggunakan klaim kualitas berlebihan seperti "terbaik", "nomor satu", "premium", "terpercaya", dan "paling enak".
- Tidak menggunakan em dash atau en dash. Gunakan tanda koma, titik, titik dua, atau kata "sampai".
- Ulasan pengunjung disajikan sebagai data contoh demonstrasi fitur template tanpa klaim rating bintang fiktif.
- Footer mencantumkan kredit tunggal `Website oleh ENLESWEB.` dan tampilan Google Maps.

- Semua data operasional adalah data contoh untuk demo paket Starter ENLESWEB.

---

## 2. Meta Halaman

| Elemen | Nilai |
| --- | --- |
| Title | Seruput Kopi: Kedai Kopi dan Sangrai Dadakan Venice |
| Meta description | Kedai kopi lokal di Fondamenta della Misericordia No. 2599 Venice dengan kopi susu gula aren, seduhan filter biji pilihan, minuman non-kopi, jam buka pasti, dan kontak WhatsApp. Konsep paket Starter oleh ENLESWEB. |
| Bahasa | `id` |
| Robots | `noindex, nofollow` selama demo |
| Canonical | Tidak dicetak sampai URL publik dikonfigurasi dan mode indeks diaktifkan |

---

## 3. Navbar dan Skip Link

- Skip link: `Lewati ke konten utama`
- Merek: `Seruput Kopi`
- Tautan: `Menu`, `Tentang`, `Biji Kopi`, `Ulasan`, `Lokasi`, `Kontak`
- CTA desktop: `Tanya via WhatsApp`
- Label tombol menu mobile: `Buka menu navigasi`
- Label tombol saat terbuka: `Tutup menu navigasi`


---

## 4. Beranda

### 4.1 Hero & Menu Nota Panjang (Menu-as-Hero)

**H1:** Kopi Susu Gula Aren, Biji Filter Pilihan, dan Meja Santai.

**Teks pendukung:** Menyeduh setiap hari di Fondamenta della Misericordia No. 2599, Venice. Tempat ngopi santai dengan pilihan kopi susu, seduhan dadakan, cokelat, dan camilan hangat.

**Penanda konsep:** Konsep kedai kopi buatan ENLESWEB. Seluruh informasi merupakan data contoh.

#### Rol Struk Fisik Menu-as-Hero

- **Kop Toko:** `SERUPUT KOPI.`
- **Keterangan:** `Fondamenta della Misericordia No. 2599, Venice | WA: 0812-3456-7890`
- **Stempel Cap:** SEDUH DADAKAN
- **Metadata Struk:**
  - `No Nota : SK/12/1026/0042`
  - `Waktu   : Hari ini, Seduh Dadakan`
  - `Kasir   : Barista Seruput`
  - `Meja    : Meja Bar / Bebas`
- **Kategori dan Daftar Menu:**
  - **Kopi Espresso & Susu**
    - `1 Es Kopi Susu Seruput` : Espresso ganda, susu murni, dan gula aren organik cair.
    - `1 Espresso Solo / Doppio` : Ekstraksi biji kopi pilihan dengan crema tebal alami.
    - `1 Americano Dingin / Panas` : Barista menuangkan dua sloki espresso di atas air mineral dingin.
    - `1 Flat White / Latte` : Espresso sangrai medium berpadu dengan susu murni berbusa lembut.
  - **Seduhan Filter Manual**
    - `1 Manual Brew V60` : Seduhan tetes tangan biji arabika lokal bergilir mingguan.
    - `1 Japanese Ice Drip` : Kopi filter seduh dingin yang bersih dan beraroma buah.
  - **Minuman Non-Kopi**
    - `1 Cokelat Klasik Panas / Dingin` : Cokelat murni berpadu dengan susu murni hangat berbusa tipis.
    - `1 Matcha Latte` : Bubuk teh hijau murni dengan susu murni berbusa lembut.
    - `1 Teh Melati Dingin` : Seduhan pucuk daun teh melati Jawa yang harum menenangkan.
  - **Kudapan Hangat**
    - `1 Roti Panggang Mentega` : Roti gandum bakar arang dengan selai srikaya buatan dapur.
    - `1 Pisang Goreng Madu` : Pisang goreng renyah berlumur madu hutan liar dan wijen sangrai.
- **Catatan Kaki Struk:**
  - `Catatan: Kami menyeduh pesananmu dadakan saat kamu memesan.`
  - `Harga & stok harian: Tanya via WhatsApp.`
  - `Terima kasih sudah singgah.`
- **Aksi Pemesanan:**
  - `Tanya Harga & Stok via WhatsApp`

---

### 4.2 Cerita Kedai

**Judul:** Kedai Kopi Bersahaja di Kawasan Cannaregio Venice

**Paragraf 1:**
Seruput Kopi menyeduh kopi setiap hari di tepi kanal Fondamenta della Misericordia Venice. Kami menyediakan kopi susu gula aren yang pas, seduhan filter manual dari biji kopi pilihan, minuman non-kopi, serta kudapan panggang hangat.

**Paragraf 2:**
Tempat duduk santai di ruang dalam dan teras luar tepi kanal siap menyambutmu untuk rehat sebentar di tengah hari. Kami menyeduh seluruh menu secara dadakan saat kamu memesan.

**Galeri Foto Suasana Kedai:**
- `[01] Meja santai dekat jendela dengan es kopi susu dan roti bakar.`
- `[02] Suasana hangat seduhan kopi di meja bar utama.`

**Paragraf Transparansi Demo:**
Website ini merupakan konsep demo paket Starter oleh ENLESWEB untuk usaha kedai kopi lokal. Seluruh informasi merupakan data contoh.

---

### 4.3 Biji Kopi Sangrai (Meja Sangrai)

**Label:** MEJA SANGRAI

**Judul:** Biji Kopi Pilihan dari Meja Sangrai Kami

**Teks pengantar:** Kami menyangrai biji kopi dalam kelompok kecil untuk menjaga aroma dan rasa aslinya. Tersedia dalam kemasan 200 gram.

**Daftar Biji Kopi:**
- **Aceh Gayo Pantan Musara**
  - Asal: Aceh Tengah, Sumatra
  - Ketinggian: 1.500 sampai 1.650 mdpl
  - Proses: Anaerobic Natural
  - Profil sangrai: Sangrai Ringan
  - Catatan rasa: Melati, Blackcurrant, Madu Hutan
  - Deskripsi: Seduhan cerah dengan aroma bunga segar dan rasa buah matang yang bersih di lidah.
  - Berat: 200 gram
  - Pesan WhatsApp: `Halo Seruput Kopi, saya ingin pesan biji kopi Aceh Gayo Pantan Musara kemasan 200g. Apakah stok masih tersedia?`
- **Bali Kintamani Ulian**
  - Asal: Kintamani, Bali
  - Ketinggian: 1.200 sampai 1.350 mdpl
  - Proses: Full Washed
  - Profil sangrai: Sangrai Sedang
  - Catatan rasa: Jeruk Manis, Gula Palem, Teh Hitam
  - Deskripsi: Asam sitrus yang lembut dan menyegarkan dengan penutup manis gula palem yang seimbang.
  - Berat: 200 gram
  - Pesan WhatsApp: `Halo Seruput Kopi, saya ingin pesan biji kopi Bali Kintamani Ulian kemasan 200g. Apakah stok masih tersedia?`
- **Toraja Sapan Misliana**
  - Asal: Toraja Utara, Sulawesi
  - Ketinggian: 1.600 sampai 1.800 mdpl
  - Proses: Semi Washed
  - Profil sangrai: Sangrai Sedang
  - Catatan rasa: Cokelat Hitam, Rempah Hangat, Kayu Manis
  - Deskripsi: Kopi berkarakter pekat dan mantap dengan kehangatan rempah yang pas untuk seduhan pagi.
  - Berat: 200 gram
  - Pesan WhatsApp: `Halo Seruput Kopi, saya ingin pesan biji kopi Toraja Sapan Misliana kemasan 200g. Apakah stok masih tersedia?`

**Aksi:** Tanya Stok Biji Kopi via WhatsApp

---

### 4.4 Ulasan Pengunjung (Catatan dari Meja Singgah)

**Label:** ULASAN PENGUNJUNG

**Judul:** Catatan dari Meja Singgah

**Teks pengantar:** Kesan jujur dari mereka yang mampir mencicipi racikan kami.

**Daftar Ulasan:**
- Danang K. (Pejalan santai): "Kopi susu gula arennya tidak kemanisan dan rasa kopinya tetap tegas. Pas dinikmati di meja luar dekat kanal saat sore hari." | Pesanan: Es Kopi Susu Seruput
- Risa P. (Penikmat seduh manual): "Seduhan manual filter Gayo terasa bersih dan segar. Baristanya ramah menjelaskan profil sangrainya dengan santai." | Pesanan: Manual Brew V60
- Bima S. (Pengunjung lokal): "Tempat yang tenang untuk membaca buku atau istirahat sejenak setelah berjalan jauh. Kudapan rotinya harum dan empuk." | Pesanan: Roti Panggang Mentega

---

### 4.5 Jam Buka dan Lokasi Kedai

**Judul:** Jam Buka dan Lokasi Kedai

**Teks pengantar:** Kami menyeduh setiap hari di kawasan tepi kanal Fondamenta della Misericordia Venice. Suasana santai tepi air dengan akses pejalan kaki yang ramah.

**Jadwal Operasional:**
- Senin sampai Kamis: 07.00 sampai 21.00 CET
- Jumat sampai Sabtu: 07.00 sampai 22.00 CET
- Minggu: 07.00 sampai 21.00 CET
- Catatan: Pesanan terakhir 30 menit sebelum jam tutup kedai.

**Alamat:** Fondamenta della Misericordia, 2599, 30121 Venezia VE, Italia.

**Patokan:** 50 meter dari Jembatan Ponte delle Guglie, persis di tepi kanal Cannaregio.

**Akses & Ruang:** Ruang duduk dalam berpendingin udara dan area teras tepi kanal ramah pejalan kaki.

**Tautan Peta:** Buka di Google Maps

---

### 4.6 Kontak

**Judul:** Ada yang Ingin Kamu Tanyakan?

**Teks:** Kirimkan pesan santai ke WhatsApp kami untuk bertanya tentang ketersediaan meja, stok biji kopi filter hari ini, atau pesanan khusus.

**CTA utama:** Chat WhatsApp Barista

**Tautan sosial:** Instagram (hanya tampil jika URL dikonfigurasi)

---


## 5. Footer dan Peta

### 5.1 Footer

**Merek:** Seruput Kopi

**Tagline:** Kedai Kopi & Sangrai Dadakan. Venice, Italia.

**Navigasi:** Menu, Tentang, Lokasi, Kontak

**Jam ringkas:** Buka Setiap Hari, 07.00 sampai 21.00 CET

**Peta Lokasi Kedai:** Peta Lokasi Kedai

**Alamat Peta:** Fondamenta della Misericordia, 2599, 30121 Venezia VE, Italia.

**Kredit:** Website oleh ENLESWEB.

### 5.2 Tombol WhatsApp Melayang

**Label aksesibel:** Hubungi melalui WhatsApp

**Teks visual jika diperlukan:** WhatsApp

---

## 6. Pesan WhatsApp

### 6.1 Mode demo (`site.demoMode = true`)

- Umum: `Halo ENLESWEB, saya ingin bertanya tentang contoh website kedai kopi Seruput Kopi.`
- Menu: `Halo ENLESWEB, saya ingin bertanya tentang bagian menu pada demo Seruput Kopi.`
- Lokasi: `Halo ENLESWEB, saya ingin bertanya tentang bagian lokasi pada demo Seruput Kopi.`

### 6.2 Mode studio (`site.demoMode = false`)

- Umum: `Halo Seruput Kopi, saya ingin bertanya tentang kedai.`
- Menu: `Halo Seruput Kopi, saya ingin bertanya tentang menu dan harga hari ini.`
- Lokasi: `Halo Seruput Kopi, saya ingin bertanya tentang jam buka dan alamat kedai.`

---

## 7. Halaman 404

**Judul:** Halaman ini tidak ditemukan.

**Teks:** Tautan yang kamu buka mungkin sudah berubah atau tidak tersedia.

**Tautan:** Kembali ke beranda

---

## 8. Larangan Teks

- Tidak menulis bahwa Seruput Kopi adalah kedai nyata yang sedang beroperasi komersial.
- Tidak menyebut pemilik atau karyawan fiktif.
- Tidak mengarang sejarah kedai yang berlebihan.
- Tidak menggunakan kata klaim terlarang: *presisi, premium, seamless, revolusioner, terdepan, nomor satu, terbaik, garansi, elevate, crafted, powerful, modern*.
- Tidak menambahkan rating bintang atau statistik fiktif; ulasan pengunjung adalah data contoh demonstrasi template.
- Tidak menampilkan angka harga nominal eksplisit di website.

- Tidak menggunakan em dash atau en dash.