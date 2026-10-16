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
