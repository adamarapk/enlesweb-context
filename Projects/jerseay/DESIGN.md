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