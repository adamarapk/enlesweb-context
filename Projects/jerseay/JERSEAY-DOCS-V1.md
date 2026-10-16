# JERSEAY DOKUMENTASI UTAMA (JERSEAY-DOCS-V1)

Tanggal Pembaruan: Oktober 2026  
Versi Sistem: 3.0 (Tingkat Growth As-Is)  
Sumber Konsolidasi: PRD.md, DESIGN.md, CONTENT.md, SPEC.md  
Status Sistem: Production & As-Is Multi-Page Studio Implementation (Tingkat Growth ENLESWEB)  
Brand: Jerseay Studio (Studio Perancangan Jersey Kustom Modern)  

---

## DAFTAR ISI (TABLE OF CONTENTS)

1. [DOKUMEN 1: PRD.md (Product Requirements Document)](#dokumen-1-prdmd-product-requirements-document)
   - 1.1 Ringkasan Produk & Corong Konversi
   - 1.2 Arah dan Karakter Brand
   - 1.3 Arsitektur Informasi dan Rute Halaman
   - 1.4 Spesifikasi Halaman dan Komponen
   - 1.5 Sistem Token Desain dan Styling
   - 1.6 Integrasi WhatsApp & Manajemen Pesan
   - 1.7 Kepatuhan Aksesibilitas (WCAG AA) & Antislop
   - 1.8 Definisi Selesai (Definition of Done)

2. [DOKUMEN 2: DESIGN.md (Design Direction & Visual Specification)](#dokumen-2-designmd-design-direction--visual-specification)
   - 2.1 Brand Identity & Anti-patterns
   - 2.2 Antislop Dials & Levers (ENERGY 2 / RHYTHM 2 / MOTION 1)
   - 2.3 Sistem Warna (Monochrome Atelier Palette & Aksen Fungsional)
   - 2.4 Tipografi (Plus Jakarta Sans & Technical Monospace)
   - 2.5 Tata Letak dan Komposisi Halaman
   - 2.6 Sistem Komponen (Button, Navbar, Modul Konfigurator, Form Adaptif, FAB WhatsApp)
   - 2.7 Arah Motion dan Transisi
   - 2.8 Panduan Bahasa dan Penulisan CTA Resmi

3. [DOKUMEN 3: CONTENT.md (As-Is Website Copy Specification)](#dokumen-3-contentmd-as-is-website-copy-specification)
   - 3.1 Meta Halaman (SEO & Open Graph)
   - 3.2 Navigasi Header & Mobile Drawer
   - 3.3 Beranda (Hero, Proyek Pilihan, Proyek Lain, Alur Kerja, Final CTA)
   - 3.4 Arsip Portofolio (/proyek)
   - 3.5 Detail Studi Kasus (/proyek/[slug] & Lookbook Visual)
   - 3.6 Spesialisasi Cabang Olahraga (/layanan)
   - 3.7 Alur Kerja Studio (/proses)
   - 3.8 Modul Unggulan: Konfigurator Kit & Roster Builder (/rancang)
   - 3.9 Formulir Brief Adaptif (/mulai-brief)
   - 3.10 Salinan Pesan WhatsApp Terstruktur
   - 3.11 Floating WhatsApp Button Copy
   - 3.12 Footer Studio Copy
   - 3.13 Halaman 404 (Tidak Ditemukan)
   - 3.14 Prinsip Copywriting & Kepatuhan Antislop

4. [DOKUMEN 4: SPEC.md (Technical Architecture & Engineering Specification)](#dokumen-4-specmd-technical-architecture--engineering-specification)
   - 4.1 Stack Teknologi & Runtime
   - 4.2 Struktur Direktori Aktual
   - 4.3 Rute & Strategi Rendering Halaman (Multi-Page SSG)
   - 4.4 Spesifikasi Kontrak Komponen & Props
   - 4.5 Model Data & Skema TypeScript (configurator, siteConfig, projects, whatsapp)
   - 4.6 Logika Interaktivitas Sisi Klien (Kontras WCAG, Parser Roster, Storage, Bezier SVG)
   - 4.7 Sistem Token Desain & Styling Tailwind
   - 4.8 Kepatuhan Aksesibilitas (WCAG AA), SEO, & Antislop
   - 4.9 Verifikasi Kualitas & Prosedur QA (10 Subtest verify-rancang.mjs)

---

=== BATAS AWAL FILE: PRD.md ===
# Product Requirements Document (PRD)

# Jerseay: Website Studio Jersey Kustom

**Versi Dokumen:** 3.0  
**Status:** Sinkron Penuh dengan Implementasi As-Is Website Terkini (Tingkat Growth ENLESWEB)  
**Tanggal:** Oktober 2026  
**Brand:** Jerseay  
**Jenis Produk:** Website Portofolio, Katalog Spesialisasi Editorial, Konfigurator Kit & Roster Builder (/rancang), serta Studio Konsultasi Desain  
**Framework:** Astro 5.x (Static Site Generation), Tailwind CSS 3.4.x, TypeScript  
**Konversi Utama:** WhatsApp Terstruktur (melalui Konfigurator Kit, Formulir Brief Adaptif, dan Tautan Kontekstual Per Halaman)  
**Target Audiens:** 20-30 tahun (Pengurus tim olahraga, kapten klub, komunitas kompetitif, tim esports)

---

## 1. Ringkasan Produk

Jerseay adalah studio perancangan jersey kustom modern yang berfokus pada kebutuhan tim olahraga kompetitif, klub balap sepeda, tim esports, dan komunitas atletik. 

Website Jerseay berfungsi sebagai:
1. **Brand Presence:** Menampilkan identitas studio dengan standar visual editorial yang percaya diri, minimalis, dan berorientasi pada produk.
2. **Katalog Spesialisasi:** Menjelaskan kapabilitas perancangan untuk berbagai cabang olahraga beserta spesifikasi teknis dan siluet tanding.
3. **Portofolio & Lookbook:** Membuktikan kualitas hasil rancangan melalui studi kasus visual beresolusi tinggi, foto makro detail jahitan/kerah, dan spesifikasi nomor punggung tim.
4. **Modul Unggulan Konfigurator Kit & Roster Builder (/rancang):** Menyediakan kanvas interaktif berbasis web untuk meracik siluet jersey, palet warna, motif pola SVG, zona logo sponsor, serta tabel roster pemain dengan validasi duplikasi nomor dan ekspor CSV.
5. **Pusat Alur Kerja (Workflow Hub):** Memberikan transparansi mengenai tahapan kerja studio dari penerimaan brief hingga penyerahan file vektor pola siap cetak 1:1.
6. **Brief Builder Adaptif Interaktif (/mulai-brief):** Menyediakan formulir pengumpulan kebutuhan tim yang menyesuaikan kolom input dengan cabang olahraga yang dipilih, menyimpan draf otomatis ke peramban, dan menyusun pesan WhatsApp terformat rapi.

Website ini **bukan e-commerce retail** dan tidak menggunakan:
* Keranjang belanja (cart)
* Fitur checkout otomatis
* Akun pengguna / login konsumen
* Payment gateway otomatis
* Dashboard pesanan mandiri
* Database transaksi backend

Seluruh proses transaksi, penyesuaian desain personal, dan konfirmasi produksi difasilitasi melalui konsultasi langsung via **WhatsApp**.

### Corong Konversi Utama (Core Funnel)

```text
Kunjungan Beranda (Hero Sinematik & CTA Rancang Kit)
   ↓
Eksplorasi Cabang Olahraga & Arsip Proyek (/layanan, /proyek)
   ↓
Inspeksi Studi Kasus & Lookbook Detail (/proyek/[slug])
   ↓
Konfigurasi Kit Real-time & Penyusunan Roster Tim (/rancang)
   ↓
Pemahaman Alur Kerja Studio (/proses)
   ↓
Penyusunan Kebutuhan Tim via Formulir Adaptif (/mulai-brief)
   ↓
Konsultasi WhatsApp Terstruktur (Pesan Brief Otomatis / Ringkasan Roster)
```

---

## 2. Arah dan Karakter Brand

### Nama Brand
**Jerseay**

### Konsep Inti Brand
> **"Identitas adalah Kunci."**

### Karakteristik Visual & Suara Brand
Jerseay diposisikan sebagai studio atelier desain olahraga fungsional:
* **Minimalis dan Arsitektural:** Menggunakan tata letak grid terstruktur, garis hairline tegas, dan whitespace yang lapang.
* **Fokus pada Produk (Product First):** Fotografi jersey asli mendominasi antarmuka, menghindari dekorasi berlebihan seperti gradien warna-warni, bayangan tebal, kartu bertumpuk, atau badge kategori kosmetik yang tidak fungsional.
* **Presisi Teknis:** Mengintegrasikan tipografi monospaced untuk kode warna, spesifikasi siluet, regulasi nomor, dan detail ukuran.
* **Lugas dan Kredibel:** Menggunakan copy yang faktual, ringkas, dan langsung pada konteks tanpa hiperbola marketing atau statistik fiktif.
* **Kejujuran Status Konsep:** Footer seluruh halaman memuat penanda bahwa website ini merupakan contoh tingkat Growth buatan ENLESWEB dan bukan studio yang menerima transaksi komersial mandiri tanpa konsultasi.

---

## 3. Arsitektur Informasi dan Rute Halaman

Website Jerseay dibangun dengan arsitektur multi-halaman statis (Multi-Page SSG) yang cepat, responsif, dan ramah SEO. Total terdapat **10 halaman utama** ditambah **1 halaman 404**:

```text
JERSEAY WEB ARCHITECTURE
│
├── / (Beranda / Studio)
│   ├── Header Navigasi Transparan-ke-Solid (5 Menu)
│   ├── Hero Sinematik 16:9 ("Desain jersey kustom untuk tim olahraga.")
│   │   ├── Subtitle: Aksi Rancang Kit & Brief Tim
│   │   ├── CTA Primer: Rancang Kit (/rancang)
│   │   └── CTA Sekunder: Mulai Brief (/mulai-brief)
│   ├── Showcase Proyek Pilihan (Futsal Surabaya)
│   ├── Showcase Proyek Lain (Sepeda, Esports, Basket)
│   ├── Preview Alur Kerja Studio (Horizontal Flow 4 Tahap)
│   ├── CTA Penutup Beranda (Dua Tombol: Mulai Brief & Rancang Kit)
│   ├── Floating WhatsApp FAB (Bulat Murni Hijau #25D366, Konteks Home)
│   └── Footer Arsitektural (Tautan Rancang & Penanda Konsep ENLESWEB)
│
├── /proyek (Arsip Portofolio Proyek)
│   ├── Header Halaman Arsip
│   └── Grid Editorial 2 Kolom (Unboxed Showcase)
│
├── /proyek/[project] (Studi Kasus & Lookbook Detail Proyek Dinamis)
│   ├── Tautan Navigasi Kembali ke Portofolio
│   ├── Header Editorial Komersial (Judul, Ringkasan, Swatch Palet)
│   ├── Aksi Ganda: "Rancang dengan palet ini" (/rancang?proyek=...) & "Mulai Brief"
│   ├── Galeri Lookbook 3 Spread (Siluet Depan, Detail Makro, Sistem Pola & Tipografi)
│   └── Strip Tautan Proyek Berikutnya (Sirkular)
│
├── /layanan (Katalog Spesialisasi Cabang Olahraga)
│   ├── Header Halaman & Bar Navigasi Anchor Cepat (5 Cabang)
│   ├── Daftar Spesialisasi Alternating 7:5 (Futsal, Sepeda, Esports, Basket, Komunitas)
│   ├── Tabel Mikro-Spesifikasi (Siluet, Standar/Fitur, Keluaran)
│   └── Inquiry Cabang Olahraga Lain (Divider border-y, CTA Mulai Brief & WhatsApp)
│
├── /proses (Alur Kerja Studio)
│   ├── Header Alur Kerja
│   ├── Kanvas Diagram Alur Kerja (4 Node Staggered dengan Kurva Bezier SVG Dinamis)
│   └── CTA Penutup Alur Kerja ("Punya kebutuhan jersey untuk tim Anda?")
│
├── /rancang (Modul Unggulan: Konfigurator Kit & Roster Builder)
│   ├── Stepper Navigasi 5 Langkah (Dasar, Warna, Tipografi/Logo, Roster, Ringkasan)
│   ├── Pratinjau Interaktif SVG Jersey (Tampak Depan & Belakang Real-Time)
│   ├── Pengatur Palet Warna & Validasi Kontras WCAG AA
│   ├── Pemilih Pola Panel Geometris & Intensitas
│   ├── Pemilih Zona Logo Sponsor (6 Titik Penempatan)
│   ├── Tabel Roster Pemain (Validasi Nomor Duplikat, Modal Tempel Cepat, Ekspor CSV)
│   ├── Ringkasan Pesanan & Generator Pesan WhatsApp Terstruktur
│   └── Penyimpanan Draf Lokal Otomatis (localStorage)
│
├── /mulai-brief (Formulir Konsultasi & Brief Builder Adaptif)
│   ├── Header Formulir Konsultasi
│   ├── Alert Banner Validasi Kesalahan Aksesibel
│   ├── Formulir Input Parameter Dasar (Nama, Olahraga, Jumlah, Tanggal, Referensi, Catatan)
│   ├── Bidang Input Adaptif Dinamis per Cabang Olahraga
│   ├── Penanganan Parameter URL (?sport=...) dengan Kamus 18 Sinonim
│   ├── Penyimpanan Draf Lokal Otomatis (localStorage)
│   ├── State Konfirmasi Sukses (Ringkasan Data Brief)
│   └── Generator Tautan WhatsApp Otomatis
│
└── /404 (Halaman Tidak Ditemukan)
    ├── Header Arsitektural Studio
    ├── Pesan Halaman Tidak Ditemukan
    └── Tombol Navigasi Kembali ke Beranda & Rancang Kit
```

---

## 4. Spesifikasi Halaman dan Komponen

### 4.1. Header & Navigasi (`Navbar.astro`)
* **Struktur:**
  - Kiri: Logo teks brand `JERSEAY`
  - Tengah: Tautan navigasi desktop 5 menu (`Studio`, `Proyek`, `Layanan`, `Proses`, `Rancang`)
  - Kanan: Tombol aksi `Mulai Brief` (menuju `/mulai-brief`)
  - Mobile: Tombol toggle menu dengan label `Menu` dan ikon hamburger
* **Perilaku Beranda:**
  - Header berada dalam status transparan (`bg-transparent text-white`) di atas hero banner gelap.
  - Saat pengguna menggulir ke bawah (scroll > 40px), header bertransisi mulus menjadi `bg-white/95 backdrop-blur-sm border-b border-gray-200 text-black-900 shadow-xs`.
* **Perilaku Subhalaman:**
  - Menggunakan status solid putih bersih (`bg-white/95 backdrop-blur-sm border-b border-gray-200 text-black-900`) sejak awal pemuatan halaman.
* **Drawer Mobile:**
  - Panel geser kanan dengan latar belakang gelap (`bg-black-950/60`).
  - Dilengkapi mekanisme penahanan fokus (keyboard focus trap) dan penutupan dengan tombol Escape serta klik backdrop.
  - Memuat seluruh 5 navigasi utama ditambah tombol `Mulai Brief`. Setiap tautan memiliki tinggi sentuh minimal 44px.

### 4.2. Beranda (`pages/index.astro`)

#### Section 01: Hero Sinematik (`HomeHero.astro`)
* **Format Visual:** Rasio aspek sinematik 16:9 (`min-h-[600px] md:min-h-[720px] max-h-[92vh]`).
* **Aset:** `/images/hero-banner.jpg` dengan lapisan gradien vinet kiri terarah untuk memastikan kontras teks memenuhi standar WCAG AA.
* **Headline H1:** "Desain jersey kustom untuk tim olahraga."
* **Sub-judul:** "Rancang siluet, palet warna, dan roster pemain langsung di studio web, atau ajukan brief kebutuhan tim."
* **Aksi Ganda:**
  1. Tombol Primer: `Rancang Kit` (menuju `/rancang`) dengan latar putih, teks hitam, dan ikon panah kanan.
  2. Tautan Sekunder: `Mulai Brief` (menuju `/mulai-brief`) dengan gaya underline teks putih.

#### Section 02: Proyek Pilihan (`FeaturedProject.astro`)
* **Judul Section:** `Proyek Pilihan`.
* **Grid 12 Kolom:**
  - 7 Kolom (Kiri): Foto siluet utama tanding futsal rasio 4:3 (`/images/featured-futsal.jpg`) dengan efek zoom halus saat hover.
  - 5 Kolom (Kanan): Foto makro jahitan kerah V-neck rasio 16:10 (`/images/featured-futsal-detail.jpg`), judul `Tim Futsal Liga Regional Surabaya`, teks ringkasan "Kit tanding monokrom dengan kontras visual tinggi untuk turnamen indoor.", dan tautan aksi `Lihat Proyek`.

#### Section 03: Proyek Lain (`ProjectPreview.astro`)
* **Judul Section:** `Proyek Lain` dengan tautan kanan `Lihat Proyek` (menuju `/proyek`).
* **Grid 3 Kolom:** Menampilkan kartu proyek cabang olahraga lainnya:
  1. Balap Sepeda: Komunitas Sepeda Bandung Barat
  2. Esports: Skuad Esports Turnamen Nasional
  3. Bola Basket: Klub Basket Komunitas Jakarta Selatan
* **Elemen Kartu:** Wadah foto studio rasio 4:3, judul tebal dengan hover underline, dan tautan aksi `Lihat Proyek` disertai ikon panah bergerak.

#### Section 04: Alur Kerja Ringkas (`ProcessPreview.astro`)
* **Judul Section:** `Alur Kerja` dengan tautan kanan `Pelajari proses` (menuju `/proses`).
* **Alur Horizontal:** Menampilkan urutan 4 pilar ringkas terhubung panah: `Brief` → `Arah Visual` → `Desain` → `File Produksi`.

#### Section 05: CTA Penutup Beranda (`HomeFinalCTA.astro`)
* **Desain:** Latar putih bersih dengan garis pembatas atas (`border-t border-gray-200`).
* **Judul:** "Diskusikan proyek jersey tim Anda."
* **Teks Pengantar:** "Kirim ringkasan kebutuhan tim untuk mendiskusikan arah visual dan spesifikasi produksi bersama studio."
* **Dua Tombol Aksi:**
  1. Tombol Primer: `Mulai Brief` (menuju `/mulai-brief`).
  2. Tombol Sekunder: `Rancang Kit` (menuju `/rancang`).

### 4.3. Arsip Portofolio (`pages/proyek/index.astro`)
* **Judul Halaman:** `Arsip Proyek`
* **Layout:** Grid editorial unboxed 2 kolom lebar pada desktop (1 kolom pada mobile) dengan spasi vertikal lapang.
* **Konten Kartu:** Gambar jersey rasio 16:11, judul studi kasus dengan garis bawah interaktif, ringkasan brief terpotong 2 baris (`line-clamp-2`), dan tautan aksi `Lihat Proyek`.

### 4.4. Studi Kasus & Lookbook Detail Proyek (`pages/proyek/[project].astro`)
* **Rute Dinamis:** Dibuat secara statis saat build berdasarkan data di `src/data/projects.ts` melalui `getStaticPaths()`.
* **Proyek Terdaftar:**
  1. `futsal-liga-surabaya` (Tim Futsal Liga Regional Surabaya)
  2. `sepeda-bandung-barat` (Komunitas Sepeda Bandung Barat)
  3. `esports-turnamen-nasional` (Skuad Esports Turnamen Nasional)
  4. `basket-jakarta-selatan` (Klub Basket Komunitas Jakarta Selatan)
* **Header Komersial:**
  - Navigasi breadcrumb: `Kembali ke Portofolio`
  - Judul proyek H1, ringkasan brief, label status konsep, dan kotak swatch palet warna resmi (`Palet Terpilih`).
  - **Aksi Ganda:**
    1. Tombol Sekunder Khusus: `Rancang dengan palet ini` (menuju `/rancang?proyek=[slug]`).
    2. Tombol Primer: `Mulai Brief` (menuju `/mulai-brief?sport=[kategori]`).
* **Galeri Visual Lookbook (`VisualGallery.astro`):**
  - Spread 01: Tampak Depan Siluet Utama (16:10 / 4:3).
  - Spread 02: Dual Spread Detail Makro Kerah/Konstruksi (kiri) dan Tampak Belakang & Tipografi Roster (kanan).
  - Spread 03: Technical Systems Spread (Sistem Pola Panel Geometris dan Spesimen Tipografi Lapangan).
* **Strip Proyek Berikutnya:** Navigasi sirkular antar proyek portofolio.

### 4.5. Modul Unggulan: Konfigurator Kit & Roster Builder (`pages/rancang/index.astro`)
Halaman ini adalah modul tingkat Growth unggulan Jerseay Studio untuk menyelesaikan kebutuhan nyata tim olahraga:

* **Struktur Halaman 2 Kolom:**
  - Kolom Kiri (Desktop Sticky): Komponen `JerseyPreview.astro` yang menampilkan render SVG interaktif jersey tampak depan atau belakang, lengkap dengan warna aktif, motif pola, nomor punggung, nama punggung, dan zona logo.
  - Kolom Kanan: Stepper navigasi 5 langkah interaktif (`Stepper.astro`) dan panel form kontrol.
* **Langkah 1: Dasar**
  - Input Nama Tim.
  - Pemilihan Cabang Olahraga (`futsal-football`, `cycling`, `esports`, `basket`, `community`).
  - Pemilihan Siluet Kerah/Potongan sesuai cabang.
  - Opsi Bawahan (Celana Tanding) dan Varian Kit (Kandang, Tandang, Kiper).
* **Langkah 2: Warna & Pola**
  - `ColorPicker.astro`: Pemilihan warna primer, sekunder, aksen, dan teks nomor.
  - Dukungan pemilihan cepat dari palet preset proyek studi kasus.
  - Kalkulasi rasio kontras WCAG otomatis antara warna nomor dan warna latar jersey, dengan label keterbacaan (Sangat terbaca, Terbaca, Kurang terbaca, Sulit terbaca) serta tombol pintas "Gunakan putih" atau "Gunakan hitam".
  - `PatternPicker.astro`: Pemilihan pola panel geometris (`none`, `grid45`, `hlines`, `angled`, `dots`) dan intensitas pola (`soft`, `medium`, `bold`).
* **Langkah 3: Nama, Nomor & Logo**
  - Pemilihan gaya huruf (Tegas / Teknis).
  - Sakelar opsi tampilan nomor di dada.
  - `LogoZones.astro`: Pemilihan zona penempatan sponsor (dada kiri, dada tengah, lengan kiri, lengan kanan, punggung atas, punggung bawah).
* **Langkah 4: Roster Pemain (`RosterTable.astro`)**
  - Tabel input daftar pemain: Nama (maksimal 14 karakter), Nomor (0-99), Ukuran (S, M, L, XL, XXL), dan Pilihan Varian Kit.
  - Validasi duplikasi nomor punggung pada kit yang sama secara real-time.
  - Modal Tempel Cepat (Batch Paste): Mendukung pemisahan nama, nomor, dan ukuran menggunakan koma, tab, titik koma, atau tanda pipa.
  - Fitur urutkan menurut nomor punggung dan hapus semua baris.
  - Batas maksimal 40 pemain per sesi rancang.
* **Langkah 5: Ringkasan & Keluaran (`SummaryPanel.astro`)**
  - Tinjauan spesifikasi kit lengkap, total pemain, dan ringkasan distribusi ukuran pakaian.
  - Generator pesan WhatsApp dengan pembatasan panjang aman (fallback ke pesan ringkas jika roster panjang melebihi 1800 karakter URL).
  - Tombol Salin Ringkasan teks ke clipboard.
  - Tombol Unduh Roster CSV dengan standar UTF-8 BOM agar rapi saat dibuka di Microsoft Excel.
* **Penyimpanan Draf:** Seluruh konfigurasi dan daftar roster tersimpan secara otomatis di `localStorage` peramban. Pengguna dapat melanjutkan draf atau memilih mulai baru.

### 4.6. Halaman Layanan (`pages/layanan/index.astro`)
* **Header & Quick Jump Bar:** Tautan anchor instan ke 5 cabang olahraga (`#futsal-football`, `#cycling`, `#esports`, `#basket`, `#community`).
* **Tata Letak Lookbook Bergantian (7:5):** Gambar siluet tanding 7 kolom berpasangan dengan teks 5 kolom dan tabel mikro-spesifikasi (Siluet, Standar/Fitur, Keluaran).
* **Tombol Kontekstual:** Tombol `Mulai Brief` terarah ke cabang terkait dan tombol `Lihat Proyek`.
* **Inquiry Cabang Lain:** Section penutup bergaris batas atas-bawah dengan tombol `Mulai Brief` dan `Tanya Desainer via WhatsApp`.

### 4.7. Halaman Alur Kerja (`pages/proses/index.astro`)
* **Header Halaman:** `Alur Kerja` studio.
* **Kanvas Alur Kerja Node:** 4 stasiun kerja kanonis (`Brief Kebutuhan`, `Arah Visual`, `Desain`, `File Produksi`) yang terhubung kurva Bezier SVG dinamis (`#workflow-wires`) dengan pembacaan posisi socket secara responsif.
* **CTA Penutup:** Ajakan konsultasi awal dengan tombol `Mulai Brief`.

### 4.8. Formulir Brief Adaptif (`pages/mulai-brief/index.astro`)
* **Parameter Dasar:** Nama/Tim, Cabang Olahraga (dropdown dengan pemetaan parameter URL `?sport=`), Jumlah Jersey, Target Tanggal, Status Desain Referensi, Referensi Visual, Catatan Tambahan.
* **Bidang Input Adaptif Dinamis:** Menampilkan pertanyaan spesifik saat cabang tertentu dipilih:
  - Futsal/Sepak Bola: Kit kiper terpisah, nomor dada.
  - Balap Sepeda: Strip reflektif saku belakang, panjang lengan aero.
  - Esports: Jumlah slot sponsor (0 sampai 6), nickname punggung.
  - Bola Basket: Termasuk celana tanding, nomor dada FIBA/Perbasi.
  - Komunitas: Jenis kegiatan (fun run/gathering), variasi panjang lengan.
* **Penyimpanan Draf:** Formulir secara otomatis menyimpan progres ketikan ke `localStorage` sehingga data tidak hilang saat halaman dimuat ulang.
* **Konfirmasi Sukses:** Menampilkan ringkasan brief siap kirim, tautan langsung ke WhatsApp, dan tombol untuk mengubah data kembali.

### 4.9. Halaman 404 (`pages/404.astro`)
* Halaman status Not Found dengan tata letak editorial minimalis.
* Headline arsitektural studio yang tenang dan jelas.
* Tombol navigasi cepat kembali ke Beranda atau menuju halaman Rancang Kit.

### 4.10. Floating WhatsApp Button (`FloatingWhatsApp.astro`)
* Aktif pada seluruh halaman website melalui `BaseLayout.astro`.
* Berbentuk tombol aksi lingkaran mengambang (Circular FAB) berdiameter 56px (`w-14 h-14 rounded-full`) warna hijau WhatsApp `#25D366` tanpa bayangan dekoratif.
* Menggunakan konteks pesan spesifik per rute (`data-cta-location`).

### 4.11. Footer Arsitektural (`Footer.astro`)
* **Kolom 1:** Wordmark `JERSEAY`, deskripsi studio, tombol `Mulai Brief` dan `WhatsApp Studio`.
* **Kolom 2:** Tautan struktur studio (`Studio`, `Proyek`, `Layanan`, `Proses`, `Rancang`, `Mulai Brief`).
* **Kolom 3:** Jam operasional studio, cakupan wilayah layanan Indonesia, dan fokus presisi studio.
* **Baris Bawah:** Hak cipta resmi dan penanda konsep demo ENLESWEB:
  "Konsep website buatan ENLESWEB. Contoh tingkat Growth. Jerseay bukan studio yang beroperasi."

---

## 5. Sistem Token Desain dan Styling

### 5.1. Token Warna (Tailwind Configuration)

```javascript
colors: {
  black: {
    950: '#0A0A0A',
    900: '#111111',
    800: '#1A1A1A',
  },
  gray: {
    700: '#404040',
    600: '#595959',
    500: '#737373',
    300: '#D4D4D4',
    200: '#E5E5E5',
    100: '#F5F5F5',
  },
}
```

### 5.2. Tipografi
* **Sans-Serif Primer:** `Plus Jakarta Sans`, dengan fallback `Inter`, `system-ui`, `-apple-system`, `sans-serif`.
* **Monospace Teknis:** `font-mono` untuk metadata, tabel spesifikasi, kode warna hex, nomor punggung jersey, tabel roster, dan ringkasan brief.

### 5.3. Border Radius
* `rounded-xs`: `4px` (digunakan pada bidang input formulir dan tag kecil)
* `rounded-sm`: `8px` (digunakan pada tombol dan kartu utama)
* `rounded-md`: `12px`
* `rounded-full`: tombol WhatsApp bulat

---

## 6. Integrasi WhatsApp & Manajemen Pesan

Seluruh tautan obrolan WhatsApp dikelola secara tersentralisasi pada `src/lib/whatsapp.ts` dan `src/utils/whatsapp.ts`.

### Mode Demo vs Mode Produksi
- **Mode Demo (`siteConfig.demoMode = true`):** Nomor tujuan mengarah ke nomor perwakilan ENLESWEB (`6285156801570`). Pesan pembuka mengonfirmasi konteks peninjauan demo:
  "Halo ENLESWEB, saya sedang melihat contoh website Jerseay, halaman [Nama Halaman]. Saya mau tanya tentang pembuatan website."
- **Mode Studio:** Nomor tujuan membaca dari variabel lingkungan `PUBLIC_WHATSAPP_NUMBER` dengan fallback ke nomor default studio (`6281234567890`).

### Matriks Konteks Pesan WhatsApp Studio

| Konteks (`location`) | Teks Pesan Pembuka Studio |
| :--- | :--- |
| `home` / `hero` | "Halo Jerseay, saya ingin konsultasi custom jersey untuk tim saya." |
| `proyek_index` / `portfolio` | "Halo Jerseay, saya melihat portfolio Jerseay dan ingin konsultasi desain jersey serupa." |
| `proyek_detail` | "Halo Jerseay, saya tertarik dengan model jersey [detail]. Bisakah saya buat desain serupa untuk tim saya?" |
| `layanan` / `service` | "Halo Jerseay, saya ingin konsultasi custom jersey untuk cabang olahraga tim saya." (atau kategori spesifik jika detail disertakan) |
| `proses` | "Halo Jerseay, saya ingin bertanya tentang alur kerja perancangan jersey." |
| `mulai_brief` | "Halo Jerseay, saya ingin bertanya sebelum mengisi brief jersey tim." |
| `rancang` | "Halo Jerseay, saya ingin bertanya tentang rancangan kit dan roster tim saya." |
| `not_found` | "Halo Jerseay, saya ingin konsultasi pembuatan custom jersey." |
| `brief` (Formulir) | Pesan terstruktur ringkasan brief kebutuhan tim lengkap dengan salam pembuka dan permintaan jadwal konsultasi. |
| `configurator` (Rancang) | Pesan terstruktur ringkasan kit dan daftar roster pemain lengkap dengan rincian ukuran dan warna. |

---

## 7. Kepatuhan Aksesibilitas (WCAG AA) & Antislop

1. **Kontras Warna:** Seluruh elemen teks antarmuka memenuhi batas kontras WCAG AA (minimal 4.5:1 untuk teks normal). Modul konfigurator dilengkapi kalkulator rasio kontras langsung di peramban.
2. **Navigasi Keyboard & Aksesibilitas Screen Reader:**
   - Tautan lewati konten (`#main-content`) tersedia di baris pertama DOM.
   - Indikator fokus tegas `focus-visible:outline-2 focus-visible:outline-black-900`.
   - Wilayah dinamis dilengkapi penanda ARIA live (`role="status"`, `role="alert"`, `aria-live="polite"`).
3. **Ukuran Target Sentuh Mobile:** Seluruh tombol dan tautan interaktif memenuhi target sentuh minimum 44px x 44px.
4. **Kejujuran Data & Konsep:** Tidak ada angka testimoni fiktif atau klaim kosong. Penanda konsep dicantumkan secara transparan di footer.
5. **Nol Em Dash & En Dash:** Karakter em dash dan en dash dilarang secara ketat di seluruh dokumen dan antarmuka kode sumber.

---

## 8. Definisi Selesai (Definition of Done)

Website Jerseay memenuhi standar rilis produksi tingkat Growth apabila:

* [x] Memiliki tepat 10 halaman utama statis (`/`, `/proyek`, 4 detail proyek, `/layanan`, `/proses`, `/mulai-brief`, `/rancang`) ditambah 1 halaman `404.astro`.
* [x] Seluruh halaman memiliki tepat satu tag `<main>` dan satu tag `<h1>` semantik.
* [x] Modul `/rancang` berfungsi penuh di sisi klien: stepper 5 langkah, SVG preview jersey depan-belakang, picker warna dengan rasio kontras, picker motif, picker logo, tabel roster dengan validasi nomor duplikat, dan ekspor CSV UTF-8 BOM.
* [x] Formulir `/mulai-brief` beroperasi secara adaptif per cabang olahraga dan menyimpan progres ke `localStorage`.
* [x] Tombol WhatsApp melayang kontekstual di setiap halaman dengan 10 pasangan konteks yang unik.
* [x] Detail proyek memiliki tombol aksi "Rancang dengan palet ini" yang terhubung langsung ke `/rancang`.
* [x] Seluruh alur lolos pengujian otomatis skrip `npm run verify` dengan 10 subtest sukses.
* [x] Bebas dari karakter em dash, en dash, dan kata marketing klise khas AI.
=== BATAS AKHIR FILE: PRD.md ===

=== BATAS AWAL FILE: DESIGN.md ===
# Jerseay Design Direction

**Versi Dokumen:** 3.0  
**Status:** Sinkron Penuh dengan Implementasi As-Is Website Terkini (Tingkat Growth ENLESWEB)  
**Tanggal:** Oktober 2026  

---

## 1. Brand Identity

Jerseay adalah studio perancangan jersey kustom modern yang berfokus pada kebutuhan tim olahraga kompetitif, klub balap sepeda, tim esports, dan komunitas atletik. 

Konsep inti brand:
> **"Identitas adalah Kunci."**

Jerseay memposisikan diri sebagai atelier desain atletik fungsional, bukan sekadar percetakan massal atau marketplace murah. Fokus utama adalah kekuatan karakter visual, ketepatan anatomi pola tanding, regulasi nomor punggung, dan kesiapan file separasi cetak untuk mitra garmen.

Target audiens:
- Usia: 20-30 tahun
- Karakter: Kapten tim, pengurus komunitas olahraga, manajer tim esports, dan atlet yang mengutamakan kredibilitas visual serta kejelasan teknis.

Kepribadian brand:
- Minimalis dan terstruktur
- Percaya diri dan profesional
- Modern dan bernuansa editorial sportswear
- Fungsional dan presisi
- Terbuka dan solutif (approachable)

Hal yang dihindari (Anti-patterns):
- Klise grafis olahraga mencolok (api, petir, efek neon berlebihan)
- Gradien biru-ungu generik khas AI
- Kartu membulat ekstrem (pill-shaped cards) atau layout bento tanpa alasan
- Elemen dekoratif tanpa fungsi (floating blobs, orbs, badge kategori kosmetik)
- Statistik fiktif dan ulasan pelanggan palsu
- Teks marketing generik penuh buzzwords
- Karakter em dash (U+2014) dan en dash (U+2013) pada seluruh teks antarmuka dan dokumentasi

---

## 2. Antislop Dials & Levers

Sesuai panduan sistem antislop, arah visual proyek Jerseay dikunci pada konfigurasi dial berikut:

```text
Dial: ENERGY 2 / RHYTHM 2 / MOTION 1
```

### Penjelasan Dial:
- **ENERGY 2 (Balanced):** Tampilan percaya diri, bersih, dan berbobot tanpa berteriak. Energi dibangun dari skala tipografi headline dan fotografi jersey kontras tinggi, bukan dari warna neon atau efek dekoratif berlebih.
- **RHYTHM 2 (Structured with Rhythmic Breaks):** Alur halaman konsisten pada grid arsitektural namun memiliki pergantian ritme yang jelas: dari hero sinematik 16:9, showcase editorial asimetris (7:5), kisi kartu 3 kolom unboxed, kanvas alur kerja interaktif berbasis node SVG, triple-spread lookbook makro detail pada detail proyek, hingga modul studio dua kolom interaktif pada halaman `/rancang`.
- **MOTION 1 (Subtle & Functional):** Transisi mikro yang halus (durasi 150-300ms ease-out). Tidak ada animasi melayang konstan, parallax berat, atau transisi halaman berlebihan yang menghambat konversi.

### Implementasi Levers:
- **Focal Point Tunggal:** Setiap viewport memiliki satu elemen visual dominan: foto hero sinematik pada beranda, galeri lookbook pada detail proyek, kanvas diagram pada halaman alur kerja, atau pratinjau jersey SVG interaktif pada halaman konfigurator.
- **Hierarchical Contrast:** Kontras tegas antara hitam pekat (`#0A0A0A` / `#111111`) dan putih bersih (`#FFFFFF`) dengan teks sekunder abu-abu netral terukur.
- **Whitespace sebagai Struktur:** Jarak antar section lapang (48-80px pada desktop, 32-48px pada mobile) untuk memberikan ruang bernapas pada fotografi produk.
- **Aksen Terukur:** Aksen warna hanya muncul pada fotografi produk asli, swatch palet warna proyek, indikator rasio kontras WCAG, dan FAB WhatsApp hijau `#25D366`. Elemen antarmuka lainnya tetap tenang dan monokrom.
- **Motif Identitas:** Tipografi teknis monospaced (`font-mono`) untuk kode warna, spesifikasi teknis, nomor punggung jersey, tabel roster pemain, dan ringkasan brief.

---

## 3. Sistem Warna (Monochrome Atelier Palette)

Jerseay menggunakan palet monokrom klasik yang tenang untuk memastikan fotografi produk dan visual jersey menjadi primadona antarmuka.

### Token Warna Utama

| Nama Token | Nilai Hex | Peran Antarmuka |
| :--- | :--- | :--- |
| `black-950` | `#0A0A0A` | Latar hero banner sinematik dan permukaan gelap kontras tinggi |
| `black-900` | `#111111` | Warna teks judul utama (H1, H2, H3), tombol primer, dan garis hairline aktif |
| `black-800` | `#1A1A1A` | Status hover untuk tombol primer |
| `gray-700` | `#404040` | Teks paragraf pendukung dan body copy utama |
| `gray-600` | `#595959` | Teks sekunder, label formulir, dan metadata pelengkap |
| `gray-500` | `#737373` | Teks placeholder, deskripsi mikro, dan garis pembatas halus |
| `gray-300` | `#D4D4D4` | Garis tepi kontrol input, tombol sekunder, dan swatch warna |
| `gray-200` | `#E5E5E5` | Garis pembatas arsitektural antar section (`border-gray-200`) |
| `gray-100` | `#F5F5F5` | Latar kartu informasi ringan dan status hover tombol sekunder |
| `white` | `#FFFFFF` | Latar belakang kanvas halaman utama dan teks kontras di atas bidang gelap |

### Warna Aksen & Status Fungsional

| Nama Token | Nilai Hex | Peran & Penggunaan |
| :--- | :--- | :--- |
| `whatsapp-green`| `#25D366` | Tombol kontak WhatsApp melayang (FAB) dan tautan konversi |
| `status-pass` | `#15803d` | Indikator kontras WCAG memenuhi syarat keterbacaan nomor |
| `status-warn` | `#b45309` | Indikator kontras nomor kurang terbaca dari jarak jauh |
| `status-fail` | `#b91c1c` | Pesan peringatan kesalahan input dan indikator nomor sulit terbaca |
| `accent-gold` | `#D4AF37` | Garis pola teknis jersey sepeda Bandung Barat |
| `accent-blue` | `#1D4ED8` | Lapisan grafis sudut jersey esports VTX-PRO |
| `accent-amber` | `#D97706` | Aksen grafis pola basket Jakarta Selatan |
| `accent-lime` | `#A3E635` | Teks highlight in-game roster VTX-PRO esports |

---

## 4. Tipografi

Sistem tipografi memadukan keanggunan modern sans-serif dengan presisi monospace teknis studio atletik:

### 1. Sans-Serif Utama: `Plus Jakarta Sans`
- Karakter: Bersih, tegas, proporsional, dan sangat mudah dibaca pada berbagai ukuran layar.
- Hierarki Skala:
  - Display Hero: 36px - 60px (Semibold 600, tracking tight, leading 1.15)
  - H1 Halaman: 32px - 48px (Semibold 600, tracking tight, leading tight)
  - H2 Section: 24px - 36px (Semibold 600, tracking tight, leading tight)
  - H3 Komponen: 18px - 24px (Semibold 600, leading snug)
  - Body Reguler: 15px - 16px (Regular 400, leading relaxed 1.6)
  - Body Kecil: 13px - 14px (Regular 400, leading normal)

### 2. Monospace Teknis: `font-mono`
- Karakter: Menegaskan presisi teknis studio dan nuansa rancang bangun pakaian olahraga.
- Penggunaan: Label palet warna hex, spesifikasi mikro, penomoran roster, tabel daftar pemain, dan ringkasan data brief.
- Skala: 11px - 13px (Medium 500, uppercase, tracking wider).

---

## 5. Tata Letak dan Komposisi Halaman

Struktur layout menerapkan multi-page architecture berbasis Astro dengan prinsip editorial sportswear lookbook:

### 1. Batas Kontainer
- Maksimum lebar kontainer: `1240px` (`max-w-container`)
- Padding horizontal:
  - Mobile (< 640px): `20px` (`px-5`)
  - Tablet (640px - 1023px): `24px` (`px-6`)
  - Desktop (>= 1024px): `32px` (`px-8`)

### 2. Prinsip Komposisi Visual
- **Product Photography Dominates Decorative UI:** Fotografi jersey asli dan render kit adalah konten utama. Antarmuka bertindak sebagai bingkai galeri yang bersih tanpa ornamen kosmetik atau stempel kategori buatan.
- **Asymmetric Balance (7:5):** Fitur utama menggunakan rasio 7 kolom untuk gambar siluet besar dan 5 kolom untuk detail tekstur serta penjelasan ringkas.
- **Unboxed Architecture:** Mengurangi penggunaan kotak kontainer berulang (card inside card). Konten dipisahkan oleh whitespace dan garis hairline (`border-gray-200`) yang tipis dan tegas.
- **Node-Graph Workflow:** Pada halaman `/proses`, alur kerja disajikan dalam 4 stasiun kerja staggered yang saling terhubung dengan kurva Bezier SVG dinamis.
- **Triple-Spread Lookbook Architecture:** Pada detail studi kasus (`/proyek/[project]`), karya disajikan dalam 3 spread berbobot (Tampak Depan, Dual-Spread Detail Makro & Tampak Belakang, serta Sistem Pola & Tipografi).
- **Two-Column Interactive Atelier (/rancang):** Tata letak dua kolom fungsional:
  - Sisi Kiri (Sticky Desktop): Area pratinjau jersey SVG dinamis dengan kontrol tampak depan dan belakang.
  - Sisi Kanan: Panel stepper 5 langkah dengan kartu formulir terstruktur, pemilih warna dengan rasio kontras, dan tabel roster pemain.

---

## 6. Sistem Komponen

### 1. Tombol (Button System)
Seluruh tombol memenuhi standar target sentuh minimum mobile (tinggi minimal 44px) dengan radius terukur (`rounded-sm: 8px`) dan mikro-interaksi `active:scale-[0.99] duration-150`.

- **Varian Tombol:**
  - **Primary:** Latar `black-900`, teks `white`, hover `black-800`. Digunakan untuk aksi konversi utama (`Mulai Brief`, `Rancang Kit`).
  - **Secondary:** Latar `white`, border `gray-300`, teks `black-900`, hover `gray-100` dan border `black-900`. Digunakan untuk aksi pendukung (`Rancang dengan palet ini`, `WhatsApp Studio`).
  - **Ghost:** Latar transparan, teks `black-900`, hover `gray-100`. Digunakan untuk aksi utilitas dan navigasi sekunder.
  - **Inverted:** Latar `white`, teks `black-900`, hover `gray-100`. Digunakan pada permukaan gelap di dalam banner hero.

### 2. Navigasi (Header & Navbar)
- **Desktop:**
  - Posisi `sticky top-0 z-40`, tinggi 80px (`h-20`).
  - Beranda (`/`): Memulai dengan latar transparan dan teks putih di atas banner gelap. Saat di-scroll melewati hero (scroll > 40px), otomatis beralih menjadi latar `bg-white/95 backdrop-blur-sm border-b border-gray-200 text-black-900 shadow-xs`.
  - Subhalaman: Menggunakan status solid putih bersih dengan blur sejak awal.
  - Tautan aktif: Ditandai dengan ketebalan teks dan status `data-active="true"`.
  - 5 Tautan Menu: `Studio`, `Proyek`, `Layanan`, `Proses`, `Rancang` ditambah tombol aksi `Mulai Brief`.
- **Mobile Menu Drawer:**
  - Drawer geser dari kanan dengan latar scrim gelap (`bg-black-950/60`).
  - Dilengkapi penguncian fokus keyboard (focus trap), penanganan tombol ESC, serta tombol tutup berukuran sentuh 44px.

### 3. Modul Konfigurator Kit & Roster Builder (`/rancang`)
Komponen modular yang menyusun alur kerja perancangan:
- **`JerseyPreview.astro`:** Menghasilkan render SVG jersey yang akurat untuk siluet v-neck, crew, aero slim-fit, dan basket. Menampilkan warna primer, sekunder, aksen, teks nomor dan nama punggung, motif geometris SVG, serta titik penempatan logo sponsor. Dilengkapi tombol beralih `Tampak Depan` dan `Tampak Belakang`.
- **`Stepper.astro`:** Komponen navigasi langkah 1 sampai 5 dengan indikator status aktif, selesai, dan belum terisi.
- **`ColorPicker.astro`:** Pemilih warna dengan kotak swatch warna preset proyek, input hex kustom, serta kalkulator rasio kontras WCAG AA yang mengevaluasi keterbacaan nomor terhadap warna badan jersey secara seketika.
- **`PatternPicker.astro`:** Pilihan motif pola panel jersey (polos, kisi 45 derajat, garis horizontal, garis sudut, matriks titik) dengan selektor intensitas (halus, sedang, tegas).
- **`LogoZones.astro`:** Seleksi multi-titik untuk lokasi penempatan logo sponsor tim pada jersey.
- **`RosterTable.astro`:** Tabel daftar pemain dengan kolom nama, nomor, ukuran, dan varian kit. Dilengkapi tombol tambah baris, hapus baris, modal tempel daftar teks cepat (mendukung pemisah koma, tab, pipa), validasi nomor ganda pada kit yang sama, serta tombol unduh CSV berformat UTF-8 BOM.
- **`SummaryPanel.astro`:** Rangkuman menyeluruh konfigurasi jersey, ringkasan jumlah ukuran pakaian, generator URL pesan WhatsApp dengan proteksi batas panjang karakter, serta tombol salin ringkasan teks.

### 4. Formulir Konsultasi Adaptif (`/mulai-brief`)
- Menggunakan input field arsitektural langsung pada grid halaman tanpa dibungkus kartu tebal.
- Bidang input dasar: Nama/Tim, Cabang Olahraga, Jumlah Jersey, Target Tanggal, Status Referensi, Referensi Visual, dan Catatan Kebutuhan.
- Bidang adaptif per cabang olahraga: Menampilkan pertanyaan pelengkap saat cabang futsal, balap sepeda, esports, bola basket, atau komunitas dipilih.
- Penyimpanan draf otomatis ke `localStorage` sehingga data aman jika halaman ter-refresh tidak sengaja.
- Validasi instan di sisi klien dengan banner peringatan merah ramah pembaca layar (`role="alert"`).
- State konfirmasi: Menampilkan ringkasan data brief siap kirim, tautan langsung ke WhatsApp, dan tombol untuk mengubah data kembali.

### 5. Floating Conversion: Floating WhatsApp Button (`FloatingWhatsApp.astro`)
- Berbentuk tombol aksi lingkaran mengambang (Circular FAB) berdiameter 56px (`w-14 h-14 rounded-full`).
- Warna hijau WhatsApp `#25D366` dengan hover `#20ba59`, tanpa efek bayangan drop-shadow.
- Menetap di sudut kanan bawah (`fixed bottom-6 right-6 z-40`) pada desktop dan mobile.
- Mengirimkan pesan pembuka spesifik sesuai konteks halaman tempat tombol diklik (`data-cta-location`).

### 6. Footer Arsitektural (`Footer.astro`)
- Memuat 3 kolom informasi: pengenalan studio dan aksi cepat, tautan struktur studio (5 menu ditambah Mulai Brief), dan informasi operasional studio.
- Memuat penanda konsep resmi yang jujur dan transparan:
  "Konsep website buatan ENLESWEB. Contoh tingkat Growth. Jerseay bukan studio yang beroperasi."

---

## 7. Arah Motion dan Transisi

Motion dirancang fungsional dan tenang (tidak mengalihkan perhatian):
- **Durasi standar:** 150ms untuk interaksi klik tombol, 300ms untuk transisi warna navbar dan menu drawer mobile.
- **Hover efek gambar:** `scale-[1.02]` dengan transisi `duration-700 ease-out`.
- **Canvas Alur Kerja:** Garis kurva SVG penghubung node dihitung secara dinamis saat render dan menyesuaikan ukuran saat resize window serta perubahan font.
- **SVG Pratinjau Jersey:** Pembaruan warna, nomor, nama, dan pola berlangsung seketika melalui manipulasi atribut SVG di sisi klien tanpa jeda rendering.
- **Accessibility:** Mendukung media query `@media (prefers-reduced-motion: reduce)` yang menonaktifkan seluruh transformasi dan transisi gerak bagi pengguna yang sensitif.

---

## 8. Panduan Bahasa dan Penulisan CTA (Antislop Compliant)

Bahasa yang digunakan bersifat faktual, lugas, dan menghargai kecerdasan audiens:
- **Tanpa em dash (U+2014) dan en dash (U+2013):** Kedua karakter tersebut dilarang total. Gunakan tanda titik dua (`:`), tanda pisah tunggal (`-`), tanda koma (`,`), atau kurung `()`.
- **Tanpa klaim kosong:** Jangan menuliskan "Terbaik di Indonesia", "Bahan paling revolusioner", atau statistik yang tidak dapat diverifikasi.
- **CTA Kontekstual & Konsisten:** Tombol harus menyatakan secara persis tindakan yang akan terjadi.

### Daftar CTA Resmi Jerseay

| Penempatan | Teks CTA | Tujuan Tindakan |
| :--- | :--- | :--- |
| Hero Beranda (Primer) | `Rancang Kit` | Membuka modul konfigurator `/rancang` |
| Hero Beranda (Sekunder) | `Mulai Brief` | Membuka formulir konsultasi `/mulai-brief` |
| Showcase Pilihan | `Lihat Proyek` | Membuka studi kasus `/proyek/futsal-liga-surabaya` |
| Proyek Lain (Header) | `Lihat Proyek` | Membuka arsip portofolio `/proyek` |
| Proyek Lain (Kartu) | `Lihat Proyek` | Membuka studi kasus cabang olahraga terkait |
| Alur Kerja Beranda | `Pelajari proses` | Membuka alur kerja studio lengkap di `/proses` |
| CTA Penutup Beranda | `Mulai Brief` | Membuka formulir `/mulai-brief` |
| CTA Penutup Beranda | `Rancang Kit` | Membuka modul konfigurator `/rancang` |
| Detail Proyek (Aksi Khusus)| `Rancang dengan palet ini` | Membuka `/rancang?proyek=[slug]` dengan palet terisi |
| Detail Proyek (Header) | `Mulai Brief` | Membuka `/mulai-brief?sport=[kategori]` |
| Breadcrumb Detail Proyek | `Kembali ke Portofolio` | Kembali ke halaman arsip `/proyek` |
| Navigasi Proyek Berikutnya | `Lihat Proyek` | Menuju proyek studi kasus berikutnya secara sirkular |
| Halaman Layanan (Per Cabang)| `Mulai Brief` | Menuju formulir brief terfilter cabang olahraga |
| Halaman Layanan (Studi Kasus)| `Lihat Proyek` | Menuju studi kasus cabang olahraga terkait |
| Halaman Layanan (Inquiry) | `Mulai Brief` | Menuju formulir konsultasi `/mulai-brief` |
| Halaman Layanan (Inquiry) | `Tanya Desainer via WhatsApp` | Membuka obrolan WhatsApp konsultasi umum studio |
| Alur Kerja Studio | `Mulai Brief` | Menuju formulir `/mulai-brief` |
| Konfigurator: Stepper | `Lanjut` / `Kembali` | Berpindah antar langkah pengerjaan rancangan |
| Konfigurator: Pratinjau | `Tampak Depan` / `Tampak Belakang` | Mengubah sudut pandang SVG jersey |
| Konfigurator: Warna | `Gunakan putih` / `Gunakan hitam` | Tombol perbaikan kontras nomor punggung |
| Konfigurator: Roster | `Tambah Pemain` | Menambahkan baris kosong ke tabel roster |
| Konfigurator: Roster | `Tempel Daftar` | Membuka modal input teks massal |
| Konfigurator: Roster | `Urutkan Menurut Nomor` | Mengurutkan baris tabel dari nomor terkecil |
| Konfigurator: Roster | `Hapus Semua` | Mengosongkan daftar pemain |
| Konfigurator: Keluaran | `Buka di WhatsApp` | Membuka chat WhatsApp dengan data ringkasan kit |
| Konfigurator: Keluaran | `Salin Ringkasan` | Menyalin teks ringkasan pesanan ke clipboard |
| Konfigurator: Keluaran | `Unduh Roster CSV` | Mengunduh berkas tabel roster format .csv UTF-8 BOM |
| Formulir Konsultasi | `Kirim Brief` | Memvalidasi dan menyusun pesan WhatsApp |
| Sukses Formulir Brief | `Buka di WhatsApp` | Membuka pesan brief terformat di WhatsApp |
| Sukses Formulir Brief | `Ubah Data Brief` | Mengembalikan formulir ke status edit |
| Floating WhatsApp Button | Ikon WhatsApp Bulat | Membuka obrolan WhatsApp dengan konteks halaman aktif |
| Footer Studio | `Mulai Brief` | Membuka formulir `/mulai-brief` |
| Footer Studio | `WhatsApp Studio` | Membuka obrolan WhatsApp studio resmi |
=== BATAS AKHIR FILE: DESIGN.md ===

=== BATAS AWAL FILE: CONTENT.md ===
# Jerseay Website Copy Specification (CONTENT.md)

**Versi Dokumen:** 3.0  
**Status:** Sinkron Penuh dengan Implementasi As-Is Website Terkini (Tingkat Growth ENLESWEB)  
**Tanggal:** Oktober 2026  
**Standar Bahasa:** Bahasa Indonesia Baku, Arsitektural, Lugas, Bebas Em Dash (U+2014) dan En Dash (U+2013)  

---

## 1. Meta Halaman (SEO & Open Graph)

| Halaman | Rute | Tag Judul (`<title>`) | Meta Deskripsi (`description`) |
| :--- | :--- | :--- | :--- |
| Beranda | `/` | `Jerseay - Studio Jersey Kustom` | `Studio jersey kustom untuk tim dan komunitas dari eksplorasi desain hingga file siap produksi.` |
| Arsip Proyek | `/proyek` | `Arsip Proyek : Jerseay Studio` | `Dokumentasi visual proyek jersey kustom yang dirancang untuk performa lapangan dan identitas tim.` |
| Detail: Futsal | `/proyek/futsal-liga-surabaya` | `Tim Futsal Liga Regional Surabaya : Jerseay Studio` | `Studi kasus desain jersey tim futsal kompetitif regional dengan pola monokrom dan nomor terbaca jelas.` |
| Detail: Sepeda | `/proyek/sepeda-bandung-barat`| `Komunitas Sepeda Bandung Barat : Jerseay Studio` | `Jersey balap sepeda jalan raya dengan visibilitas tinggi, saku fungsional, dan identitas rute tanjakan.` |
| Detail: Esports | `/proyek/esports-turnamen-nasional`| `Skuad Esports Turnamen Nasional : Jerseay Studio` | `Jersey tanding turnamen game dengan penataan logo sponsor terstruktur dan tipografi nama pemain.` |
| Detail: Basket | `/proyek/basket-jakarta-selatan` | `Klub Basket Komunitas Jakarta Selatan : Jerseay Studio` | `Jersey basket tanpa lengan dengan proporsi nomor dada dan punggung yang mengikuti regulasi turnamen.` |
| Layanan | `/layanan` | `Spesialisasi Cabang Olahraga : Jerseay Studio` | `Katalog spesialisasi perancangan jersey kustom: Futsal, Sepak Bola, Balap Sepeda, Esports, Basket, dan Komunitas Olahraga.` |
| Proses | `/proses` | `Alur Kerja Studio : Jerseay Studio` | `Alur kerja perancangan jersey: Brief, Arah Visual, Desain, dan File Produksi.` |
| Rancang Kit | `/rancang` | `Rancang Kit : Jerseay Studio` | `Susun warna, pola, nama, nomor, dan roster jersey tim Anda, lalu kirim ringkasannya ke studio.` |
| Mulai Brief | `/mulai-brief` | `Mulai Brief : Jerseay Studio` | `Kirim ringkasan kebutuhan jersey tim Anda untuk memulai proses konsultasi desain bersama Jerseay Studio.` |
| Tidak Ditemukan | `/404` | `Halaman Tidak Ditemukan : Jerseay Studio` | `Halaman yang Anda cari tidak dapat ditemukan di studio web Jerseay.` |

---

## 2. Navigasi Header & Mobile Drawer (`Navbar.astro`)

- Wordmark Brand: `JERSEAY`
- Aria Label Logo: `Jerseay Studio Beranda`
- Tautan Navigasi Desktop:
  1. `Studio` (menuju `/`)
  2. `Proyek` (menuju `/proyek`)
  3. `Layanan` (menuju `/layanan`)
  4. `Proses` (menuju `/proses`)
  5. `Rancang` (menuju `/rancang`)
- Tombol Aksi Kanan (Desktop & Drawer): `[Mulai Brief]` (menuju `/mulai-brief`)
- Tombol Buka Menu Mobile:
  - Teks: `Menu`
  - Aria Label: `Buka menu navigasi`
- Tombol Tutup Menu Mobile:
  - Aria Label: `Tutup menu navigasi`
- Judul Menu Drawer Mobile: `Menu Navigasi`

---

## 3. Beranda (`pages/index.astro`)

### 3.1 Hero Banner Sinematik (`HomeHero.astro`)
- Tagline H1: `Desain jersey kustom untuk tim olahraga.`
- Subtitle Pendukung: `Rancang siluet, palet warna, dan roster pemain langsung di studio web, atau ajukan brief kebutuhan tim.`
- Tombol Aksi Primer: `[Rancang Kit]` (menuju `/rancang`)
- Tautan Aksi Sekunder: `[Mulai Brief]` (menuju `/mulai-brief`)
- Alt Teks Gambar Hero: `Showcase jersey atletik kustom Jerseay Studio`

### 3.2 Showcase Proyek Pilihan (`FeaturedProject.astro`)
- Judul Section: `Proyek Pilihan`
- Sub-kategori: `Futsal & Sepak Bola`
- Judul Proyek: `Tim Futsal Liga Regional Surabaya`
- Teks Ringkasan: `Kit tanding monokrom dengan kontras visual tinggi untuk turnamen indoor.`
- Tombol Aksi: `[Lihat Proyek]` (menuju `/proyek/futsal-liga-surabaya`)
- Alt Foto Siluet Depan: `Jersey Futsal Surabaya - Siluet Tanding`
- Alt Foto Makro Detail: `Detail Jahitan Kerah Jersey Futsal Surabaya`

### 3.3 Proyek Lain (`ProjectPreview.astro`)
- Judul Section: `Proyek Lain`
- Tautan Header Kanan: `[Lihat Proyek]` (menuju `/proyek`)
- Kartu 1 (Balap Sepeda):
  - Kategori: `Balap Sepeda`
  - Judul: `Komunitas Sepeda Bandung Barat`
  - Tautan Aksi: `[Lihat Proyek]` (menuju `/proyek/sepeda-bandung-barat`)
- Kartu 2 (Esports):
  - Kategori: `Esports`
  - Judul: `Skuad Esports Turnamen Nasional`
  - Tautan Aksi: `[Lihat Proyek]` (menuju `/proyek/esports-turnamen-nasional`)
- Kartu 3 (Bola Basket):
  - Kategori: `Bola Basket`
  - Judul: `Klub Basket Komunitas Jakarta Selatan`
  - Tautan Aksi: `[Lihat Proyek]` (menuju `/proyek/basket-jakarta-selatan`)

### 3.4 Alur Kerja Ringkas (`ProcessPreview.astro`)
- Judul Section: `Alur Kerja`
- Tautan Header Kanan: `[Pelajari proses]` (menuju `/proses`)
- 4 Langkah Alur:
  1. `Brief`
  2. `Arah Visual`
  3. `Desain`
  4. `File Produksi`

### 3.5 CTA Penutup Beranda (`HomeFinalCTA.astro`)
- Judul H2: `Diskusikan proyek jersey tim Anda.`
- Teks Pengantar: `Kirim ringkasan kebutuhan tim untuk mendiskusikan arah visual dan spesifikasi produksi bersama studio.`
- Tombol Aksi Primer: `[Mulai Brief]` (menuju `/mulai-brief`)
- Tombol Aksi Sekunder: `[Rancang Kit]` (menuju `/rancang`)

---

## 4. Arsip Portofolio (`pages/proyek/index.astro`)

- Judul H1: `Arsip Proyek`
- Deskripsi: `Eksplorasi visual dan studi kasus perancangan jersey untuk tim kompetitif dan komunitas olahraga.`
- Konten Setiap Kartu:
  - Judul proyek
  - Ringkasan singkat (`shortBrief`)
  - Tautan teks: `[Lihat Proyek]` (disertai ikon panah kanan)

---

## 5. Detail Studi Kasus & Lookbook (`pages/proyek/[project].astro`)

### 5.1 Header Komersial
- Breadcrumb: `[Kembali ke Portofolio]`
- Kategori & Label Tahun: `{category} : Concept project ({year})`
- Judul H1: `{title}`
- Ringkasan Brief: `{brief}`
- Label Palet: `Palet Terpilih`
- Tombol Aksi Ganda:
  1. Tombol Sekunder Khusus: `[Rancang dengan palet ini]` (menuju `/rancang?proyek={slug}`)
  2. Tombol Primer: `[Mulai Brief]` (menuju `/mulai-brief?sport={category}`)

### 5.2 Lookbook Visual 3 Spread (`VisualGallery.astro`)
- **Spread 01 (Siluet Utama):**
  - Label: `Tampak Depan Siluet`
  - Keterangan: Foto tampak depan beresolusi tinggi.
- **Spread 02 (Detail Konstruksi & Roster Punggung):**
  - Panel Kiri: `Detail Kerah & Konstruksi` (spesifikasi rajut ganda, rib elastis, sirkulasi udara).
  - Panel Kanan: `Tampak Belakang & Tipografi Roster` (tata letak nomor punggung dan nama tim).
- **Spread 03 (Sistem Pola & Spesimen Tipografi):**
  - Panel Kiri: `Sistem Pola Panel` (deskripsi grafis geometris vektor).
  - Panel Kanan: `Spesimen Tipografi Lapangan` (karakteristik angka 0-9 dan huruf A-Z untuk keterbacaan jarak jauh).

### 5.3 Navigasi Sirkular Bawah
- Teks Header: `Proyek Berikutnya`
- Judul Proyek Target
- Tautan Aksi: `[Lihat Proyek]`

---

## 6. Spesialisasi Cabang Olahraga (`pages/layanan/index.astro`)

- Judul H1: `Spesialisasi Cabang Olahraga`
- Deskripsi: `Perancangan kit tanding dan seragam olahraga yang dikembangkan sesuai tuntutan teknis pergerakan tubuh serta regulasi pertandingan.`
- Quick Jump Bar:
  - `[Futsal & Sepak Bola]`
  - `[Balap Sepeda]`
  - `[Esports & Gaming]`
  - `[Bola Basket]`
  - `[Tim & Komunitas]`
- Header Tabel Mikro-Spesifikasi:
  - Kolom 1: `Siluet`
  - Kolom 2: `Standar` (atau `Fitur`)
  - Kolom 3: `Keluaran`
- Aksi Tiap Cabang:
  - Tombol Primer: `[Mulai Brief]` (menuju `/mulai-brief?sport={id}`)
  - Tombol Sekunder: `[Lihat Proyek]` (bila tersedia studi kasus)
- Kotak Inquiry Bawah:
  - Judul H2: `Punya Cabang Olahraga Lain?`
  - Teks: `Studio kami juga mengerjakan seragam untuk cabang olahraga dan kebutuhan spesifik lainnya. Konsultasikan konsep tim Anda secara langsung.`
  - Tombol Primer: `[Mulai Brief]`
  - Tombol Sekunder: `[Tanya Desainer via WhatsApp]`

---

## 7. Alur Kerja Studio (`pages/proses/index.astro`)

- Judul H1: `Alur Kerja`
- Sub-judul: `Dari penerimaan brief hingga penyerahan file pola siap produksi.`
- 4 Stasiun Kerja Kanonis:
  1. `01 / Brief Kebutuhan`
     - Detail: `Pengumpulan data: cabang olahraga, estimasi jumlah roster, batas waktu, dan referensi visual tim.`
  2. `02 / Arah Visual`
     - Detail: `Penentuan palet warna utama, sistem tipografi nama dan nomor, serta proporsi penempatan sponsor.`
  3. `03 / Desain`
     - Detail: `Eksplorasi artwork tampak depan dan belakang dengan detail konstruksi panel jersey serta konfirmasi roster tim.`
  4. `04 / File Produksi`
     - Detail: `Pemisahan panel pola cetak 1:1 dalam format vektor siap sublimasi untuk mitra vendor garmen pilihan Anda.`
- Section Penutup:
  - Judul H2: `Punya kebutuhan jersey untuk tim Anda?`
  - Sub-judul: `Konsultasikan ide desain awal bersama kami.`
  - Tombol Aksi: `[Mulai Brief]`

---

## 8. Modul Unggulan: Konfigurator Kit & Roster Builder (`pages/rancang/index.astro`)

### 8.1 Header & Notifikasi
- Judul H1: `Rancang Kit`
- Subtitle: `Susun warna, pola, nama, nomor, dan daftar pemain. Hasilnya menjadi ringkasan yang bisa dikirim ke studio, disalin, atau diunduh.`
- Catatan Penyimpanan: `Data rancangan tersimpan di perangkat ini saja dan tidak dikirim ke mana pun sampai Anda membuka WhatsApp.`
- Catatan Demo: `Ini contoh website. Gunakan data contoh, bukan data pemain sungguhan.`
- Banner Pemulihan Draf: `Draf sebelumnya tersedia.` dengan tombol `[Lanjutkan]` dan `[Mulai Baru]`.

### 8.2 Stepper 5 Langkah
- Langkah 1: `Dasar` (Langkah 1: Dasar)
- Langkah 2: `Warna & Pola` (Langkah 2: Warna dan Pola)
- Langkah 3: `Nama, Nomor, Logo` (Langkah 3: Nama, Nomor, dan Logo)
- Langkah 4: `Roster` (Langkah 4: Daftar Pemain)
- Langkah 5: `Ringkasan` (Langkah 5: Tinjau dan Keluaran)

### 8.3 Label & Opsi Formulir
- Nama Tim: `Nama Tim` (placeholder: "cth. Apex FC")
- Cabang Olahraga: `Cabang Olahraga`
- Siluet: `Siluet Jersey`
- Celana: `Termasuk Bawahan Celana`
- Sistem Varian Kit: `Sistem Varian Kit` (`Kandang (Utama)`, `Tandang`, `Kiper`)
- Warna: `Warna Utama`, `Warna Sekunder`, `Warna Aksen`, `Warna Nama & Nomor`
- Format Hex: `Kode warna (#RRGGBB)`
- Pilihan Palet Preset: `Pilihan Palet Proyek`
- Pola: `Motif Pola` (Polos, Kisi 45 Derajat, Garis Horizontal, Garis Sudut, Titik Bundar)
- Intensitas Pola: `Intensitas Pola` (`Halus`, `Sedang`, `Tegas`)
- Gaya Huruf: `Gaya Huruf` (`Tegas (Plus Jakarta Sans)`, `Teknis (Font Mono)`)
- Nomor Dada: `Tampilkan Nomor di Dada`
- Zona Logo: `Zona Penempatan Logo Sponsor` (Dada Kiri, Dada Tengah, Lengan Kiri, Lengan Kanan, Punggung Atas, Punggung Bawah)
- Roster: `Nama`, `Nomor`, `Ukuran`, `Kit`
- Target Tanggal: `Target Tanggal Pengerjaan`
- Catatan: `Catatan Khusus untuk Studio`
- Total Pemain: `Total Pemain`
- Ringkasan Ukuran: `Ringkasan Ukuran`

### 8.4 Teks Keterbacaan & Rasio Kontras WCAG
- Judul: `Keterbacaan nomor`
- Format Rasio: `{ratio}:1, {label}`
- Label Status:
  - `Sangat terbaca` (rasio >= 7:1)
  - `Terbaca` (rasio >= 4.5:1)
  - `Kurang terbaca dari jarak jauh` (rasio >= 3:1)
  - `Sulit terbaca` (rasio < 3:1)
- Tombol Rekomendasi Cepat: `[Gunakan putih]` / `[Gunakan hitam]`
- Catatan Warna Cetak: `Warna di layar bisa berbeda dari hasil cetak. Studio mengonfirmasi warna pada tahap desain.`

### 8.5 Modal Tempel Daftar Pemain (Batch Paste)
- Judul Modal: `Tempel Daftar Pemain`
- Deskripsi: `Tempel daftar nama, nomor, dan ukuran. Pisahkan kolom dengan koma, tab, titik koma, atau tanda pipa (|). Contoh: FARHAN, 10, L`
- Placeholder: `FARHAN, 10, L\nDIMAS, 7, M\nBAGAS, 1, XL`
- Judul Pratinjau: `Pratinjau Hasil Pembacaan`
- Tombol Aksi: `[Terapkan]` dan `[Batal]`

### 8.6 Tombol Aksi Konfigurator
- Navigasi: `[Lanjut]`, `[Kembali]`
- Pratinjau: `[Tampak Depan]`, `[Tampak Belakang]`, `[Sembunyikan Pratinjau]`, `[Tampilkan Pratinjau]`
- Roster: `[Tambah Pemain]`, `[Tempel Daftar]`, `[Urutkan Menurut Nomor]`, `[Hapus Semua]`
- Keluaran: `[Buka di WhatsApp]`, `[Salin Ringkasan]`, `[Unduh Roster CSV]`

### 8.7 Pesan Validasi & Peringatan
- `Harap isi nama tim.`
- `Pilih cabang olahraga.`
- `Kode warna harus berformat #RRGGBB.`
- `Nama maksimal 14 karakter.`
- `Nama hanya boleh berisi huruf, angka, spasi, titik, tanda hubung, dan apostrof.`
- `Nomor harus berupa angka 0 sampai 99.`
- `Nomor {n} dipakai lebih dari satu pemain pada kit yang sama.`
- `Pilih ukuran.`
- `Tambahkan minimal satu pemain.`
- `Roster maksimal 40 baris.`
- `Ringkasan disalin.`
- `Roster terlalu panjang untuk pesan WhatsApp. Unduh CSV atau salin ringkasan, lalu kirim lewat chat.`

---

## 9. Formulir Brief Adaptif (`pages/mulai-brief/index.astro`)

### 9.1 Header Halaman
- Judul H1: `Mulai Brief`
- Deskripsi: `Isi rincian kebutuhan seragam tim Anda di bawah ini. Studio kami akan mempelajari data awal untuk menyusun kerangka visual dan estimasi pengerjaan.`
- Penanda Demo: `Konsep website contoh. Data kebutuhan disiapkan untuk konsultasi studio.`

### 9.2 Kolom Input Dasar & Adaptif
1. `Nama / Tim (*)` (wajib, placeholder: "cth. Farhan / Apex Futsal Club")
2. `Jenis Olahraga (*)` (wajib: Futsal, Sepak Bola, Balap Sepeda, Esports, Bola Basket, Komunitas / Lainnya)
3. **Bidang Adaptif Dinamis:**
   - Futsal / Sepak Bola:
     - `Kit Kiper Terpisah?` (Ya / Tidak)
     - `Nomor Dada Diperlukan?` (Ya / Tidak)
   - Balap Sepeda:
     - `Strip Reflektif?` (Ya / Tidak)
     - `Panjang Lengan` (Pendek / Panjang)
   - Esports:
     - `Jumlah Slot Sponsor` (0, 1-2, 3-4, 5-6)
     - `Nickname Tercetak di Punggung?` (Ya / Tidak)
   - Bola Basket:
     - `Termasuk Celana Tanding?` (Ya / Tidak)
     - `Nomor Dada Diperlukan?` (Ya / Tidak)
   - Komunitas:
     - `Jenis Kegiatan` (cth. Fun Run, Gathering Kantor)
     - `Panjang Lengan` (Pendek, Panjang, Campuran)
4. `Jumlah Jersey (*)` (wajib, angka minimal 1, placeholder: "cth. 20")
5. `Target Tanggal (*)` (wajib, format tanggal)
6. `Sudah Punya Desain? (*)` (wajib: "Sudah ada referensi / mockup" atau "Belum (mulai dari nol)")
7. `Referensi Visual (Opsional)` (placeholder: tautan Google Drive, Instagram, warna)
8. `Kebutuhan / Catatan Tambahan (Opsional)` (placeholder: bahan khusus, regulasi)

### 9.3 Validasi & State Konfirmasi Sukses
- Banner Peringatan: `Silakan lengkapi seluruh kolom wajib yang ditandai bintang (*).`
- Judul Sukses: `Data Kebutuhan Telah Dirangkum`
- Deskripsi Sukses: `Ringkasan brief Anda telah disiapkan. Lanjutkan obrolan langsung bersama tim Jerseay Studio via WhatsApp.`
- Tombol Utama: `[Buka di WhatsApp]`
- Tombol Sekunder: `[Ubah Data Brief]`

---

## 10. Salinan Pesan WhatsApp Terstruktur (`whatsapp.ts`)

### 10.1 Pesan dalam Mode Demo (`siteConfig.demoMode = true`)
Semua tautan WhatsApp di mode demo mengarah ke nomor perwakilan ENLESWEB (`6285156801570`) dengan pesan:
```text
Halo ENLESWEB, saya sedang melihat contoh website Jerseay, halaman {Nama Halaman}. Saya mau tanya tentang pembuatan website.
```

### 10.2 Pesan Obrolan Umum Studio (Mode Non-Demo)

| Konteks (`location`) | Teks Pesan Pembuka WhatsApp |
| :--- | :--- |
| `home` / `hero` | `Halo Jerseay, saya ingin konsultasi custom jersey untuk tim saya.` |
| `proyek_index` / `portfolio` | `Halo Jerseay, saya melihat portfolio Jerseay dan ingin konsultasi desain jersey serupa.` |
| `proyek_detail` | `Halo Jerseay, saya tertarik dengan model jersey {detail}. Bisakah saya buat desain serupa untuk tim saya?` |
| `layanan` / `service` | `Halo Jerseay, saya ingin konsultasi custom jersey untuk kategori {detail}.` |
| `proses` | `Halo Jerseay, saya ingin bertanya tentang alur kerja perancangan jersey.` |
| `mulai_brief` | `Halo Jerseay, saya ingin bertanya sebelum mengisi brief jersey tim.` |
| `rancang` | `Halo Jerseay, saya ingin bertanya tentang rancangan kit dan roster tim saya.` |
| `not_found` | `Halo Jerseay, saya ingin konsultasi pembuatan custom jersey.` |
| `faq` | `Halo Jerseay, saya memiliki pertanyaan mengenai pemesanan jersey yang ingin didiskusikan langsung.` |
| `final` / `sticky` | `Halo Jerseay, saya siap memulai diskusi dan order custom jersey untuk tim kami.` |
| `general` | `Halo Jerseay, saya ingin konsultasi pembuatan custom jersey.` |

### 10.3 Format Pesan Brief Lengkap
```text
Halo Jerseay Studio, saya ingin mengirim ringkasan kebutuhan jersey tim:

RINGKASAN BRIEF JERSEAY STUDIO
- Nama / Tim: {Nama}
- Cabang Olahraga: {Sport}
- Estimasi Jumlah: {Jumlah} pcs
- Target Tanggal: {Target}
- Kit Kiper: {Opsi jika futsal}
- Nomor Dada: {Opsi jika futsal/basket}
- Strip Reflektif: {Opsi jika sepeda}
- Panjang Lengan: {Opsi jika sepeda/komunitas}
- Slot Logo Sponsor: {Opsi jika esports}
- Nickname Punggung: {Opsi jika esports}
- Celana Tanding: {Opsi jika basket}
- Jenis Kegiatan: {Opsi jika komunitas}
- Preferensi Desain: {Preferensi}
- Catatan Tambahan: {Catatan}

Warna di layar bisa berbeda dari hasil cetak. Studio mengonfirmasi warna pada tahap desain.

Mohon informasi ketersediaan jadwal konsultasi desain.
```

### 10.4 Format Pesan Konfigurator Kit & Roster
```text
Halo Jerseay Studio, saya ingin mengirim hasil rancangan kit tim:

RANCANGAN KIT: {Nama Tim}
- Cabang Olahraga: {Sport}
- Siluet: {Siluet}
- Warna Utama: {Hex}
- Warna Sekunder: {Hex}
- Aksen: {Hex}
- Warna Nomor: {Hex} ({Status Kontras})
- Pola: {Pola} ({Intensitas})
- Nomor Dada: {Ya/Tidak}
- Bawahan Celana: {Ya/Tidak}
- Zona Logo: {Daftar Zona}
- Target Tanggal: {Target}
- Total Pemain: {N} orang
- Distribusi Ukuran: {S: a, M: b, L: c, XL: d, XXL: e}

DAFTAR PEMAIN:
1. {Nama} #{Nomor} ({Ukuran}) [{Kit}]
...

Warna di layar bisa berbeda dari hasil cetak. Studio mengonfirmasi warna pada tahap desain.

Mohon informasi ketersediaan jadwal konsultasi desain.
```

---

## 11. Floating WhatsApp Button (`FloatingWhatsApp.astro`)

- Aria Label Wadah: `Kontak WhatsApp Jerseay Studio`
- Aria Label Tombol: `Hubungi WhatsApp`
- Format Visual: Tombol aksi mengambang (Floating Action Button) berbentuk lingkaran penuh (`rounded-full`) diameter 56px (`w-14 h-14`), warna hijau WhatsApp `#25D366`, tanpa efek bayangan dekoratif.
- Posisi: Menetap di sudut kanan bawah layar (`fixed bottom-6 right-6 z-40`) pada desktop dan mobile.
- Konteks Lokasi: Membawa atribut `data-cta-location` yang dinamis mengikuti halaman aktif.

---

## 12. Footer Studio (`Footer.astro`)

### 12.1 Kolom 1 (Intro Studio)
- Wordmark: `JERSEAY`
- Aria Label: `Jerseay Studio Beranda`
- Deskripsi: `Studio jersey kustom untuk tim dan komunitas dari eksplorasi desain hingga file siap produksi.`
- Tombol Aksi 1: `[Mulai Brief]` (menuju `/mulai-brief`)
- Tombol Aksi 2: `[WhatsApp Studio]` (tautan WhatsApp)
- Aria Label Tombol WhatsApp: `Hubungi studio via WhatsApp`

### 12.2 Kolom 2 (Struktur Studio)
- Judul H3: `Struktur Studio`
- Tautan Menu:
  1. `Studio` (menuju `/`)
  2. `Proyek` (menuju `/proyek`)
  3. `Layanan` (menuju `/layanan`)
  4. `Proses` (menuju `/proses`)
  5. `Rancang` (menuju `/rancang`)
  6. `Mulai Brief` (menuju `/mulai-brief`)

### 12.3 Kolom 3 (Informasi Studio)
- Judul H3: `Informasi Studio`
- Jam Operasional: `Senin - Sabtu: 09:00 - 18:00 WIB`
- Cakupan Layanan: `Melayani pemesanan kit tim dan komunitas seluruh Indonesia.`
- Pernyataan Fokus: `Studio berfokus pada desain fungsional, tata letak nomor, dan kesiapan file produksi.`

### 12.4 Baris Hak Cipta & Penanda Konsep
- Teks Hak Cipta: `© {tahun} Jerseay Studio. Seluruh hak cipta dilindungi.`
- Penanda Konsep: `Konsep website buatan ENLESWEB. Contoh tingkat Growth. Jerseay bukan studio yang beroperasi.`

---

## 13. Halaman 404 (`pages/404.astro`)

- Judul H1: `404`
- Subtitle: `Halaman Tidak Ditemukan`
- Deskripsi: `Halaman yang Anda tuju tidak tersedia atau telah dipindahkan.`
- Tombol Aksi:
  1. `[Kembali ke Beranda]` (menuju `/`)
  2. `[Rancang Kit]` (menuju `/rancang`)

---

## 14. Prinsip Copywriting & Kepatuhan Antislop

1. **Nol Em Dash (U+2014) & Nol En Dash (U+2013):** Kedua karakter tersebut dilarang keras di seluruh halaman website dan dokumentasi. Gunakan tanda titik dua (`:`), tanda pisah tunggal (`-`), atau koma (`,`).
2. **Kredibilitas Berbasis Fakta:** Tidak menggunakan angka statistik fiktif ("10.000+ tim", "Kepuasan 99%"), ulasan buatan, atau lencana kepuasan tanpa data riil.
3. **Bebas Buzzwords Klise:** Menghindari kata-kata marketing generik AI seperti "revolusioner", "seamless", "solusi mutakhir", "terdepan di Indonesia".
4. **Kejelasan Tombol (Explicit Action):** Tombol aksi menggunakan frasa tindakan nyata (`[Rancang Kit]`, `[Mulai Brief]`, `[Lihat Proyek]`, `[Rancang dengan palet ini]`, `[Unduh Roster CSV]`, `[Buka di WhatsApp]`).
5. **Kejujuran Status Konsep:** Penanda bahwa website adalah contoh tingkat Growth dicantumkan di footer dan di pesan WhatsApp pada mode demo.
=== BATAS AKHIR FILE: CONTENT.md ===

=== BATAS AWAL FILE: SPEC.md ===
# Technical Architecture & Engineering Specification (SPEC.md)

# Jerseay: Website Studio Jersey Kustom

**Versi Dokumen:** 3.0  
**Status:** Sinkron Penuh dengan Implementasi As-Is Website Terkini (Tingkat Growth ENLESWEB)  
**Tanggal:** Oktober 2026  
**Standar Bahasa:** Teknis, Presisi, Berorientasi Kode, Bebas Em Dash (U+2014) dan En Dash (U+2013)  

---

## 1. Stack Teknologi & Runtime

| Lapisan | Teknologi | Versi | Peran & Justifikasi Arsitektur |
| :--- | :--- | :--- | :--- |
| **Framework** | Astro | `^5.18.2` | Static Site Generation (SSG) murni. Menghasilkan HTML statis tanpa JS overhead untuk konten portofolio dan rendering terhidrasi parsial untuk komponen interaktif. |
| **Styling** | Tailwind CSS | `^3.4.17` | Utility-first styling via `@astrojs/tailwind` v6.0.2. Sistem token desain terkontrol tanpa CSS eksternal yang tidak terpakai. |
| **Bahasa** | TypeScript | `^5.9.3` | Type-safety untuk model data studi kasus, skema konfigurasi kit, logika roster, utilitas kontras WCAG, dan validasi brief. |
| **Runtime & Node** | Node.js | `>= 22.x` | Lingkungan eksekusi build dan skrip verifikasi otomatis menggunakan native type stripping (`--experimental-strip-types`). |
| **Penyimpanan Klien** | Web Storage API | Native | Penyimpanan draf kit dan draf brief sisi klien via `localStorage` tanpa ketergantungan server backend. |
| **Keluaran Data** | WhatsApp API & CSV | Native | Kompilasi data ke WhatsApp URI scheme (`wa.me`) dan Blob berkas `.csv` (UTF-8 BOM). |

---

## 2. Struktur Direktori Aktual

```text
jerseay/
├── public/
│   ├── favicon.svg
│   └── images/
│       ├── hero-banner.jpg           # Foto hero 16:9 beresolusi tinggi
│       ├── featured-futsal.jpg        # Foto siluet utama futsal
│       ├── featured-futsal-detail.jpg # Foto makro jahitan kerah futsal
│       ├── project-cycling.jpg        # Foto siluet balap sepeda
│       ├── project-cycling-detail.jpg # Foto detail saku & tekstur sepeda
│       ├── project-esports.jpg        # Foto siluet jersey esports
│       ├── project-esports-detail.jpg # Foto detail kerah & print esports
│       └── project-basket.jpg         # Foto siluet jersey basket
├── scripts/
│   ├── ts-resolver.mjs               # Custom loader untuk impor TypeScript di pengujian Node.js
│   └── verify-rancang.mjs            # Skrip verifikasi QA otomatis (10 subtest fungsional & antislop)
├── src/
│   ├── config/
│   │   └── site.ts                   # Konfigurasi studio terpusat (navLinks, mode demo, kontak WhatsApp)
│   ├── content/
│   │   └── rancang.ts                # Copy deck modul konfigurator (label, tombol, pesan error, modal)
│   ├── data/
│   │   ├── configurator.ts           # Data opsi cabang, siluet, palet preset, zona logo, & aturan cabang
│   │   ├── projects.ts               # Data portofolio, lookbook 3 spread, & swatch warna
│   │   └── services.ts               # Data spesialisasi cabang olahraga & mikro-spesifikasi
│   ├── layouts/
│   │   └── BaseLayout.astro          # Shell HTML5, meta SEO/OG, skip link, slot, dan FAB WhatsApp kontekstual
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.astro          # Komponen tombol serbaguna (Primary, Secondary, Ghost, Inverted)
│   │   │   ├── Container.astro       # Kontainer pembungkus lebar maksimal (1240px)
│   │   │   ├── Icon.astro            # Komponen ikon SVG terenkapsulasi
│   │   │   └── Section.astro         # Kontainer section semantik dengan padding vertikal terukur
│   │   ├── navigation/
│   │   │   ├── Navbar.astro          # Header sticky, transisi scroll beranda, & drawer mobile 5 menu
│   │   │   └── Footer.astro          # Footer arsitektural 3 kolom dengan penanda konsep ENLESWEB
│   │   ├── home/
│   │   │   ├── HomeHero.astro        # Banner sinematik 16:9 dengan aksi ganda Rancang Kit & Mulai Brief
│   │   │   ├── FeaturedProject.astro # Showcase proyek futsal Surabaya (7:5)
│   │   │   ├── ProjectPreview.astro  # Grid 3 kolom proyek cabang olahraga lain
│   │   │   ├── ProcessPreview.astro  # Alur horizontal 4 tahap alur kerja
│   │   │   └── HomeFinalCTA.astro    # Section penutup beranda dengan tombol Mulai Brief & Rancang Kit
│   │   ├── project/
│   │   │   └── VisualGallery.astro   # Galeri lookbook 3 spread (depan, detail, sistem pola)
│   │   ├── conversion/
│   │   │   └── FloatingWhatsApp.astro# FAB WhatsApp bulat (fixed bottom-6 right-6) dengan konteks rute
│   │   └── configurator/
│   │       ├── ColorPicker.astro     # Pemilih warna primer, sekunder, aksen, & kalkulator kontras WCAG
│   │       ├── JerseyPreview.astro   # Renderer SVG interaktif jersey tampak depan & belakang
│   │       ├── LogoZones.astro       # Selektor penempatan 6 zona logo sponsor tim
│   │       ├── PatternPicker.astro   # Pemilih pola panel geometris SVG dan intensitas
│   │       ├── RosterTable.astro     # Tabel roster pemain, validasi duplikasi, & batch paste modal
│   │       ├── Stepper.astro         # Komponen navigasi langkah 1 sampai 5
│   │       └── SummaryPanel.astro    # Ringkasan spesifikasi kit, distribusi ukuran, WhatsApp, & ekspor CSV
│   ├── lib/
│   │   ├── brief.ts                  # Penyusun pesan WhatsApp brief adaptif & pesan konfigurator
│   │   ├── color.ts                  # Utilitas normalisasi dan validasi kode warna hex
│   │   ├── contrast.ts               # Algoritma perhitungan luminansi relatif & rasio kontras WCAG
│   │   ├── roster.ts                 # Parser teks roster batch, validasi baris, dan generator CSV UTF-8 BOM
│   │   ├── storage.ts                # Manajemen penyimpanan draf lokal browser (localStorage)
│   │   └── whatsapp.ts               # Utilitas sanitasi nomor & pembuat tautan WhatsApp per halaman
│   ├── pages/
│   │   ├── 404.astro                 # Halaman status Not Found arsitektural
│   │   ├── index.astro               # Rute beranda (/)
│   │   ├── layanan/
│   │   │   └── index.astro           # Rute katalog spesialisasi (/layanan)
│   │   ├── proses/
│   │   │   └── index.astro           # Rute kanvas alur kerja kurva Bezier (/proses)
│   │   ├── mulai-brief/
│   │   │   └── index.astro           # Rute formulir brief builder adaptif (/mulai-brief)
│   │   ├── rancang/
│   │   │   └── index.astro           # Rute modul konfigurator kit & roster builder (/rancang)
│   │   └── proyek/
│   │       ├── index.astro           # Rute arsip portofolio (/proyek)
│   │       └── [project].astro       # Rute dinamis studi kasus (/proyek/[slug])
│   ├── styles/
│   │   └── global.css                # Reset global, seleksi teks, & optimasi scroll
│   └── utils/
│       └── whatsapp.ts               # Wrapper utilitas WhatsApp untuk backward compatibility
├── astro.config.mjs
├── package.json
├── tailwind.config.mjs
└── tsconfig.json
```

---

## 3. Rute & Strategi Rendering Halaman

Website Jerseay mengimplementasikan arsitektur Multi-Page statis murni tanpa ketergantungan runtime server. Total terdapat **10 halaman utama** ditambah **1 halaman 404**:

| Rute URL | Berkas Sumber | Metode Rendering | Sumber Data | Jumlah Halaman Dihasilkan |
| :--- | :--- | :--- | :--- | :--- |
| `/` | `src/pages/index.astro` | SSG (Statis) | `siteConfig`, `projects` | 1 |
| `/proyek` | `src/pages/proyek/index.astro` | SSG (Statis) | `projects` | 1 |
| `/proyek/[project]` | `src/pages/proyek/[project].astro` | SSG via `getStaticPaths()` | `projects` | 4 halaman (`futsal-liga-surabaya`, `sepeda-bandung-barat`, `esports-turnamen-nasional`, `basket-jakarta-selatan`) |
| `/layanan` | `src/pages/layanan/index.astro` | SSG (Statis) | `services`, `whatsapp` | 1 |
| `/proses` | `src/pages/proses/index.astro` | SSG (Statis) | Array `nodes` lokal | 1 |
| `/rancang` | `src/pages/rancang/index.astro` | SSG (Statis) | `configurator.ts`, `rancang.ts` | 1 |
| `/mulai-brief` | `src/pages/mulai-brief/index.astro` | SSG (Statis) | `siteConfig`, `brief.ts` | 1 |
| `/404` | `src/pages/404.astro` | SSG (Statis) | `siteConfig` | 1 (Halaman status Not Found) |
| **Total** | | | | **10 Halaman Utama + 1 Halaman 404** |

### Implementasi `getStaticPaths()` pada `/proyek/[project].astro`
```typescript
export function getStaticPaths() {
  return projects.map((project, index) => {
    const nextIndex = (index + 1) % projects.length;
    const nextProject = projects[nextIndex];
    return {
      params: { project: project.slug },
      props: { project, nextProject },
    };
  });
}
```

---

## 4. Spesifikasi Kontrak Komponen & Props

### 4.1 Shell Layout: `BaseLayout.astro`
- **Props Interface:**
  ```typescript
  interface Props {
    title?: string;
    description?: string;
    ogImage?: string;
    whatsappContext?: WhatsAppLocation;
    whatsappDetail?: string;
  }
  ```
- **Fitur Shell:**
  - Injeksi `<meta name="robots" content="noindex, nofollow" />` untuk kepatuhan konsep demo.
  - Tautan aksesibel skip-to-content (`#main-content`).
  - Slot `header`, `default` (konten di dalam `<main>`), `footer`, dan `floating`.
  - Injeksi otomatis `FloatingWhatsApp.astro` dengan konteks rute spesifik.

### 4.2 Komponen Konversi: `FloatingWhatsApp.astro`
- **Props Interface:**
  ```typescript
  interface Props {
    context?: WhatsAppLocation;
    detail?: string;
    class?: string;
  }
  ```
- **Logika:** Menghasilkan URL chat WhatsApp kontekstual melalui `getWhatsAppUrl(context, detail)` dan menandai elemen tautan dengan atribut `data-cta-location={context}`.

### 4.3 Komponen Modul Konfigurator (`src/components/configurator/`)
1. **`JerseyPreview.astro`:**
   - Props: Menerima konfigurasi siluet, warna primer/sekunder/aksen/nomor, nama tim, nomor dada, motif pola, dan zona logo.
   - Output: Elemen SVG inline dua sisi (depan dan belakang) dengan layer panel yang terpisah dan terindeks atribut `data-part`.
2. **`ColorPicker.astro`:**
   - Menyediakan antarmuka pemilihan warna berbasis hex, swatch palet preset, dan kalkulator rasio kontras WCAG real-time.
3. **`PatternPicker.astro`:**
   - Menyediakan pilihan pola panel (`none`, `grid45`, `hlines`, `angled`, `dots`) dan sakelar intensitas (`soft`, `medium`, `bold`).
4. **`LogoZones.astro`:**
   - Menyediakan kontrol penempatan logo sponsor tim pada 6 zona strategis jersey.
5. **`RosterTable.astro`:**
   - Menyediakan tabel data pemain dengan baris dinamis, modal tempel daftar teks massal, validasi nomor duplikat, dan penghitung total ukuran.
6. **`Stepper.astro`:**
   - Komponen indikator progres 5 langkah dengan penanganan klik langkah sebelumnya.
7. **`SummaryPanel.astro`:**
   - Menyajikan ringkasan spesifikasi teknis, daftar ukuran, tombol pemicu unduh CSV, tombol salin teks ringkasan, dan tautan kirim ke WhatsApp.

---

## 5. Model Data & Skema TypeScript

### 5.1 Konfigurasi Studio: `src/config/site.ts`
```typescript
export interface NavLink {
  label: string;
  href: string;
}

export const siteConfig = {
  name: "Jerseay",
  tagline: "Studio Jersey Kustom",
  description: "Studio jersey kustom untuk tim dan komunitas dari eksplorasi desain hingga file siap produksi.",
  demoMode: true,
  enleswebWhatsappNumber: "6285156801570",
  studioWhatsappNumber: process.env.PUBLIC_WHATSAPP_NUMBER || "",
  whatsappNumber: "6285156801570",
  enleswebUrl: "https://enlesweb.com",
  hours: "Senin - Sabtu: 09:00 - 18:00 WIB",
  location: "Indonesia",
  navLinks: [
    { label: "Studio", href: "/" },
    { label: "Proyek", href: "/proyek" },
    { label: "Layanan", href: "/layanan" },
    { label: "Proses", href: "/proses" },
    { label: "Rancang", href: "/rancang" },
  ] as NavLink[],
  primaryCta: {
    label: "Mulai Brief",
    href: "/mulai-brief",
  },
};
```

### 5.2 Model Data Konfigurator: `src/data/configurator.ts`
```typescript
export type SportSlug = 'futsal-football' | 'cycling' | 'esports' | 'basket' | 'community';
export type PatternId = 'none' | 'grid45' | 'hlines' | 'angled' | 'dots';
export type PatternIntensity = 'soft' | 'medium' | 'bold';
export type SizeCode = 'S' | 'M' | 'L' | 'XL' | 'XXL';
export type KitVariantId = 'home' | 'away' | 'keeper';
export type LogoZoneId =
  | 'chest-left'
  | 'chest-center'
  | 'sleeve-left'
  | 'sleeve-right'
  | 'back-upper'
  | 'back-lower';

export interface KitColors {
  primary: string;   // Format #RRGGBB
  secondary: string;
  accent: string;
  text: string;
}

export interface KitVariant {
  id: KitVariantId;
  name: string;
  colors: KitColors;
}

export interface KitConfig {
  version: 1;
  teamName: string;
  sport: SportSlug | null;
  silhouetteId: string;
  variants: KitVariant[];
  pattern: PatternId;
  patternIntensity: PatternIntensity;
  typeface: 'bold' | 'technical';
  logoZones: LogoZoneId[];
  chestNumber: boolean;
  includeBottoms: boolean;
  targetDate: string;
  notes: string;
  sportOptions: Record<string, string | boolean | number>;
  updatedAt: number;
}

export interface RosterEntry {
  id: string;
  name: string;
  number: number | null;
  size: SizeCode | null;
  variant: KitVariantId;
}
```

### 5.3 Konteks WhatsApp & Manajemen Pesan: `src/lib/whatsapp.ts`
```typescript
export type WhatsAppLocation =
  | 'home'
  | 'proyek_index'
  | 'proyek_detail'
  | 'layanan'
  | 'proses'
  | 'mulai_brief'
  | 'rancang'
  | 'not_found'
  | 'hero'
  | 'service'
  | 'portfolio'
  | 'faq'
  | 'final'
  | 'sticky'
  | 'general';

export const MAX_ENCODED_LENGTH = 1800;

export function sanitizeWhatsAppNumber(rawNumber: string): string;
export function getActiveWhatsAppNumber(): string;
export function getWhatsAppMessage(location?: WhatsAppLocation, detail?: string): string;
export function getWhatsAppUrl(location?: WhatsAppLocation, detail?: string): string;
export function buildLongMessageUrl(phone: string, full: string, compact: string): string;
```

---

## 6. Logika Interaktivitas Sisi Klien

### 6.1 Kalkulator Rasio Kontras WCAG (`src/lib/contrast.ts`)
1. Menghitung luminansi relatif RGB standar sRGB sesuai formula W3C:
   $$\text{luminansi} = 0.2126 \times R + 0.7152 \times G + 0.0722 \times B$$
2. Menghitung rasio kontras antara warna teks nomor dan warna latar jersey:
   $$\text{rasio} = \frac{L_1 + 0.05}{L_2 + 0.05}$$
3. Memberikan klasifikasi keterbacaan:
   - $\ge 7.0$: Sangat terbaca (Lolos WCAG AAA)
   - $\ge 4.5$: Terbaca (Lolos WCAG AA)
   - $\ge 3.0$: Kurang terbaca dari jarak jauh
   - $< 3.0$: Sulit terbaca (Peringatan kontras rendah)

### 6.2 Parser & Validasi Roster Pemain (`src/lib/roster.ts`)
- **Pemisah Delimiter:** Mendukung pemisahan koma (`,`), titik koma (`;`), tab (`\t`), atau pipa (`|`).
- **Validasi Data:**
  - Nama pemain: maksimal 14 karakter, hanya karakter alfabetis, numerik, spasi, titik, tanda hubung, dan apostrof.
  - Nomor punggung: integer rentang `0` sampai `99`.
  - Duplikasi nomor: mendeteksi nomor yang sama pada kit varian yang sama dan menandai baris yang berkonflik.
  - Batas maksimal: 40 pemain per berkas.
- **Ekspor CSV:** Menghasilkan string CSV berawalan UTF-8 Byte Order Mark (`\uFEFF`) dengan header kolom `Nama,Nomor,Ukuran,Kit` dan tanda kutip aman untuk karakter koma.

### 6.3 Penyimpanan Draf Lokal (`src/lib/storage.ts`)
- Menyimpan konfigurasi kit dan daftar roster ke `localStorage` dengan penanganan galat jika kuota peramban penuh atau fitur dinonaktifkan (`SecurityError`).
- Memulihkan data draf secara otomatis saat halaman `/rancang` dimuat kembali.

### 6.4 Formulir Brief Adaptif (`src/pages/mulai-brief/index.astro`)
- Memantau perubahan pada dropdown `Cabang Olahraga` dan menampilkan grup input adaptif yang relevan secara dinamis (`#adaptive-futsal`, `#adaptive-cycling`, `#adaptive-esports`, `#adaptive-basket`, `#adaptive-community`).
- Mengumumkan kemunculan bidang tambahan kepada pembaca layar melalui container ARIA live (`#adaptive-field-announcement`).
- Menyimpan nilai isian formulir ke `localStorage` secara seketika dan memulihkannya saat halaman dimuat ulang.

### 6.5 Kanvas Diagram Alur Kerja Kurva Bezier (`src/pages/proses/index.astro`)
- Mengukur koordinat tepat dari socket keluar (`node-socket-out`) dan socket masuk (`node-socket-in`) dari setiap stasiun kerja.
- Menghasilkan kurva kubik Bezier SVG (`path data d="M ... C ... "`) yang menghubungkan stasiun kerja secara visual.
- Memperbarui garis kabel secara reaktif melalui event listener `resize` dan `ResizeObserver`.

---

## 7. Sistem Token Desain & Styling Tailwind

```javascript
// tailwind.config.mjs
theme: {
  extend: {
    colors: {
      black: {
        950: '#0A0A0A',
        900: '#111111',
        800: '#1A1A1A',
      },
      gray: {
        700: '#404040',
        600: '#595959',
        500: '#737373',
        300: '#D4D4D4',
        200: '#E5E5E5',
        100: '#F5F5F5',
      },
    },
    maxWidth: {
      container: '1240px',
    },
    borderRadius: {
      xs: '4px',
      sm: '8px',
      md: '12px',
      lg: '16px',
    },
  },
}
```

---

## 8. Kepatuhan Aksesibilitas (WCAG AA), SEO, & Antislop

1. **Aksesibilitas (WCAG AA):**
   - Struktur satu tag `<main>` dan satu tag `<h1>` pada seluruh 10 halaman utama dan 1 halaman 404.
   - Tautan lewati ke konten utama (`#main-content`) pada awal dokumen.
   - Seluruh elemen sentuh memenuhi ukuran minimal 44px x 44px.
   - Peringatan formulir menggunakan `role="alert"` dan kontainer sukses menggunakan `role="status"`.
2. **SEO & Metadata:**
   - Meta title, description, dan Open Graph terkonfigurasi spesifik per rute.
   - Canonical URL dan fallback sharing metadata.
3. **Kepatuhan Antislop:**
   - 0 kemunculan karakter em dash (U+2014) dan en dash (U+2013).
   - Bebas dari statistik rekaan, review fiktif, dan kata klise marketing generik.
   - Penanda konsep tingkat Growth dicantumkan secara jujur di footer.

---

## 9. Verifikasi Kualitas & Prosedur QA

Prosedur pengujian otomatis dilakukan melalui skrip pengujian bawaan:

```bash
# Menjalankan verifikasi tipe Astro
npm run check

# Menjalankan 10 subtest fungsional dan antislop
npm run verify
```

### Cakupan 10 Subtest `verify-rancang.mjs`:
1. `contrastRatio`: Menghitung rasio luminansi WCAG secara akurat.
2. `ratioLabel`: Memvalidasi ambang batas label keterbacaan nomor.
3. `normalizeHex`: Normalisasi format hex dan penolakan format tidak valid.
4. `parseRosterText`: Parsing pemisah koma, titik koma, tab, pipa, dan penandaan baris rusak.
5. `validateRoster`: Validasi nomor ganda, nomor di luar batas 0-99, dan batas panjang nama 14 karakter.
6. `rosterToCsv`: Memverifikasi awalan UTF-8 BOM, header kolom, dan tanda kutip pada data berkoma.
7. `buildBriefMessage & buildConfiguratorMessage`: Memverifikasi pesan WhatsApp, disclaimer warna, dan mode demo.
8. `buildLongMessageUrl`: Memverifikasi fallback URL ringkas jika panjang pesan melebihi 1800 karakter.
9. `Audit Teks Antislop`: Memverifikasi 0 em dash, 0 en dash, dan 0 kata terlarang di seluruh folder `src/`.
10. `Audit Struktur Dist`: Memverifikasi tepat satu tag `<h1>` dan satu tag `<main>` per halaman, serta keberadaan tepat 10 halaman utama dan 1 halaman 404 di direktori `dist/`.
=== BATAS AKHIR FILE: SPEC.md ===
