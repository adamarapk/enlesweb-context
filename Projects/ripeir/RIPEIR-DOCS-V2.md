# RIPEIR DOKUMENTASI UTAMA V2 (RIPEIR-DOCS-V2)

Tanggal Pembaruan: 14 Oktober 2026  
Sumber Konsolidasi: PRD.md, DESIGN.md, CONTENT.md, SPEC.md  
Status Sistem: Production & As-Is Single-Page Scroll Starter Workshop Implementation  
Brand: ripeir (Servis Laptop, Komputer, Handphone, dan Tablet)  

---

## DAFTAR ISI (TABLE OF CONTENTS)

1. [DOKUMEN 1: PRD.md (Product Requirements Document)](#dokumen-1-prdmd-product-requirements-document)
   - Changelog Versi 2.0 (Starter Single-Page As-Is Synchronization)
   - 1.1 Konteks
   - 1.2 Tujuan Situs
   - 1.3 Audiens
   - 1.4 Ringkasan Bisnis Konsep
   - 1.5 Scope (IN)
   - 1.6 Di Luar Scope (OUT)
   - 1.7 Launch Cut (Perilaku Saat Data OPEN Kosong & Status Aktual)
   - 1.8 Batasan Bisnis dan Konten (LOCKED)
   - 1.9 Perilaku Konversi & 10 Titik Sentuh WhatsApp
   - 1.10 Kriteria Selesai (Definition of Done)

2. [DOKUMEN 2: DESIGN.md (Visual & Design Specification)](#dokumen-2-designmd-visual--design-specification)
   - Changelog Versi 2.0 (Starter Single-Page As-Is Synchronization)
   - 3.1 Karakter dan Target Rasa
   - 3.2 Token Desain (Warna & Aksen)
   - 3.3 Tipografi (IBM Plex Superfamily)
   - 3.4 Komponen & Tata Letak Seksi Halaman
   - 3.5 Animasi & Aksesibilitas (Motion & A11y)

3. [DOKUMEN 3: CONTENT.md (Website Copy Specification)](#dokumen-3-contentmd-website-copy-specification)
   - Changelog Versi 2.0 (Starter Single-Page As-Is Synchronization)
   - 2.1 Aturan Keras Copywriting
   - 2.2 Meta Halaman
   - 2.3 Navbar, Drawer, dan Skip Link
   - 2.4 Beranda (Hero, Layanan, Cara Kerja, Prinsip, Final CTA)
   - 2.5 Footer Serba Ada (#kontak)
   - 2.6 Floating WhatsApp Action Button
   - 2.7 Halaman 404
   - 2.8 Rincian 10 Titik Sentuh Pesan WhatsApp
   - 2.9 Larangan Teks Spesifik (Anti-Slop)

4. [DOKUMEN 4: SPEC.md (Technical Architecture & Engineering Specification)](#dokumen-4-specmd-technical-architecture--engineering-specification)
   - Changelog Versi 2.0 (Starter Single-Page As-Is Synchronization)
   - 4.1 Tech Stack (Aktual)
   - 4.2 Struktur Berkas Proyek Aktual
   - 4.3 Konfigurasi Bisnis Terpusat: src/config/site.ts
   - 4.4 Generator URL WhatsApp: src/lib/whatsapp.ts
   - 4.5 Arsitektur Komponen Kunci
   - 4.6 Pipeline Verifikasi Otomatis (npm test)

---

# DOKUMEN 1: PRD.md (Product Requirements Document)
Versi 2.0 (Starter Single-Page As-Is Synchronization)

## Changelog Versi 1.1 (As-Is Synchronization)
- **Visual Hero:** Disinkronkan ke implementasi aktual menggunakan latar workbench cutting mat realistis (`hero-deskmat-full.jpg`) dengan ambient overlay dan laptop terurai.
- **Floating WhatsApp Button:** Disinkronkan dari fixed bottom bar mobile menjadi tombol melayang (floating circular button) di sudut kanan bawah pada desktop (60px) dan mobile (54px) dengan warna resmi WhatsApp (`#25D366`), ikon SVG putih, dan tooltip desktop.
- **Elemen Footer:** Disinkronkan mencakup 4 tautan media sosial (Instagram, X, YouTube, GitHub), blok workshop berisi alamat nyata demo Venezia, jam buka, embed iframe peta interaktif Google Maps, serta tombol tautan Google Maps.
- **Animasi & Interaktivitas:** Disinkronkan penambahan transisi scroll reveal halus (`.animate-section` dengan `IntersectionObserver`) yang mendukung `prefers-reduced-motion: reduce`.
- **Palet Warna Desain:** Token warna disinkronkan ke implementasi CSS aktual (`#08100e`, `#101c18`, `#050a08`, `#1c2b26`, `#2c4038`, `#12221d`).
- **Status Data Konfigurasi:** Data demo workshop Venezia di `site.ts` didokumentasikan sebagai status aktif saat ini.

## Changelog Versi 1.2 (Panduan Pesan WhatsApp)
- Menambahkan panduan susun pesan WhatsApp di halaman Kontak sebagai pengecualian form yang disetujui.
- Menambah satu titik CTA menjadi 13. Pesan builder dirakit sementara di browser tanpa penyimpanan atau tracking.

## Changelog Versi 2.0 (Starter Single-Page As-Is Synchronization)
- **Perombakan Arsitektur Halaman:** Menurunkan website dari paket Growth multi-halaman menjadi paket Starter murni satu halaman scroll (`index.astro` dan fallback `404.astro`).
- **Pembersihan Halaman Lama:** Menghapus total rute multi-halaman `/layanan`, `/cara-kerja`, `/sebelum-servis`, `/tentang`, dan `/kontak`.
- **Pembersihan Seksi Sebelum Servis:** Menghapus total panduan persiapan sebelum servis dan catatan penanganan darurat cairan.
- **Penyederhanaan Layanan:** Mengganti seksi panjang per perangkat dan form builder pesan interaktif dengan grid 4 kartu perangkat (`ServicesGrid.astro` format 2x2 di desktop / 1 kolom di mobile) dengan daftar masalah umum dan tombol WhatsApp langsung per perangkat.
- **Pemadatan Cara Kerja:** Menyederhanakan alur kerja menjadi 4 langkah esensial (01. Cerita di WhatsApp, 02. Bawa atau kirim, 03. Cek dan estimasi biaya, 04. Pengerjaan dan selesai) tanpa tautan eksternal.
- **Footer Serba Ada & Target Anchor Kontak:** Menggabungkan informasi workshop, jam buka, alamat, embed Google Maps, navigasi internal, media sosial, dan kredit ringkas `"Website oleh ENLESWEB."` ke dalam Footer dengan atribut `id="kontak"`.
- **Navigasi Internal Anchor:** Navbar desktop dan mobile drawer dialihkan ke tautan anchor `#layanan`, `#cara-kerja`, dan `#kontak` dengan scroll halus dan penutupan drawer otomatis saat tautan diklik.
- **Titik Sentuh CTA WhatsApp:** Menyelaraskan jumlah titik sentuh CTA aktif dari 13 menjadi 10 lokasi aktual yang lolos uji verifikasi.

## 1.1 Konteks
ripeir adalah konsep website untuk bisnis servis laptop dan perangkat elektronik. ripeir dibuat oleh ENLESWEB sebagai proyek demo tingkat Starter. ripeir bukan klien nyata, bukan bisnis yang beroperasi, dan tidak boleh dipakai sebagai bukti sosial (live demo bukan client proof).

Fungsi ripeir bagi ENLESWEB: menunjukkan kemampuan menyusun dan membangun website landing page satu halaman (Starter) yang ringkas, berbobot, dan berkarakter kuat untuk bisnis jasa, tanpa kerumitan alur multi-halaman. ripeir tidak membuktikan hasil bisnis, jumlah klien, atau pengalaman komersial.

Prinsip penulisan: Concrete > Clever, Information > Marketing, Description > Slogan.

## 1.2 Tujuan Situs
Dua lapis tujuan:
1. **Sebagai demo:** calon customer ENLESWEB melihat landing page servis satu halaman yang padat, elegan, dan layak ditiru untuk bisnis paket Starter mereka.
2. **Di dalam dunia konsep:** pengunjung yang perangkatnya bermasalah memahami jenis servis yang ditangani, alur pengerjaan, dan lokasi workshop dalam satu scroll cepat, lalu menghubungi via WhatsApp.

**Urutan prioritas (LOCKED, diwarisi dari ENLESWEB):**
1. **Clarity:** pengunjung paham perangkat apa yang diservis dan bagaimana prosesnya secara langsung tanpa perlu berpindah halaman.
2. **Honesty:** tidak ada klaim yang tidak bisa dibuktikan. Situs tidak berpura-pura menjadi bisnis nyata.
3. **Trust:** rasa percaya dibangun lewat alur kerja yang transparan, prinsip kerja apa adanya, dan kejelasan data workshop nyata.
4. **Action:** jalur menghubungi lewat WhatsApp selalu terjangkau di setiap titik seksi dan melalui floating action bar.

## 1.3 Audiens
- **Pengunjung demo:** calon customer ENLESWEB, pemilik bisnis jasa atau UMKM. Menilai efektivitas paket Starter: kemudahan navigasi 1 halaman, estetika teknis yang matang, dan keringkasan konten.
- **Persona konsep:** pemilik laptop, komputer, handphone, atau tablet yang bermasalah. Usia beragam (20 sampai 50+), mayoritas non-teknis, mencari solusi cepat melalui smartphone.
- Bahasa sederhana, tidak menggurui, dan tidak teknis. Sapaan: `"kamu/-mu"` (LOCKED). Istilah teknis terbatas pada komponen populer (layar, baterai, keyboard, penyimpanan).

## 1.4 Ringkasan Bisnis Konsep
- **Nama:** `ripeir`, ditulis huruf kecil di semua tempat (LOCKED).
- **Jenis bisnis:** servis laptop dan perangkat elektronik (LOCKED).
- **Empat jenis perangkat:** laptop, komputer, handphone, tablet (LOCKED).
- **Alur layanan ringkas:** cerita di WhatsApp -> bawa/kirim -> cek dan estimasi biaya -> pengerjaan dan selesai.
- **Hal yang tidak ditampilkan di situs karena belum diputuskan (OPEN):** daftar harga spesifik, garansi tertulis, durasi menit/jam pasti, penjualan spare part.

## 1.5 Scope (IN)
Website statis murni satu halaman scroll (Starter) dengan rute sistem 404:

| No | Halaman | Path | Tujuan halaman |
|---|---|---|---|
| 1 | Beranda (Single Page) | `/` | Seluruh informasi servis, alur kerja, prinsip, kontak, dan peta dalam satu alur scroll |
| - | 404 Not Found | `/404` | Halaman sistem navigasi fallback jika URL tidak ditemukan |

### Alur Seksi Beranda (Atas ke Bawah):
1. **Navbar Sticky:** Identitas brand ripeir, tautan anchor (`#layanan`, `#cara-kerja`, `#kontak`), tombol CTA WhatsApp nav, dan drawer menu responsif di mobile.
2. **Hero:** Headline (h1), deskripsi singkat, tombol utama WhatsApp hero, tombol sekunder ghost menuju `#layanan`, dan visual workbench deskmat cutting mat realistis dengan laptop terurai.
3. **Layanan (`#layanan`):** Judul dan intro seksi, diikuti grid 4 kartu perangkat (Laptop, Komputer, Handphone, Tablet). Tiap kartu memuat nama perangkat, rangkuman, daftar kerusakan umum, dan tombol WhatsApp spesifik perangkat. Ditutup dengan catatan konsultasi perangkat lain.
4. **Cara Kerja (`#cara-kerja`):** Judul seksi dan alur pengerjaan padat 4 langkah (01–04) dengan nomor monospace beraksen oranye, judul langkah, dan deskripsi penjelasan ringkas. Dilengkapi tombol CTA WhatsApp alur kerja.
5. **Prinsip Kerja:** Tiga komitmen dasar servis (Dicek dulu, Kamu yang memutuskan, Apa adanya).
6. **Final CTA:** Banner ajakan bertindak sebelum footer dengan tombol WhatsApp penutup.
7. **Footer Serba Ada (`#kontak`):** Menggabungkan 3 kolom (Brand + kontak WA + medsos; Workshop + Jam operasional; Embed peta Google Maps interaktif + tombol Maps), navigasi cepat anchor, dan catatan kredit `"Website oleh ENLESWEB."`.
8. **Floating WhatsApp Button (`ActionBar`):** Tombol melayang circular hijau resmi WhatsApp di sudut kanan bawah dengan tooltip desktop dan target WhatsApp.

## 1.6 Di Luar Scope (OUT)
- Rute halaman terpisah (`/layanan`, `/cara-kerja`, `/sebelum-servis`, `/tentang`, `/kontak`).
- Panduan persiapan sebelum servis dan panduan penanganan cairan darurat.
- Formulir dinamis penyusun pesan WhatsApp (message builder).
- Fitur booking jadwal, booking kedatangan, atau sistem antrean.
- Formulir kontak input teks atau sistem upload foto kerusakan.
- Keranjang belanja, pembayaran online, atau e-commerce suku cadang.
- Fitur pelacakan status servis online.
- Blog, artikel tutorial, tips trik, atau halaman ulasan / testimoni buatan.
- Pelacakan analitik pihak ketiga atau pixel iklan.

## 1.7 Launch Cut (Perilaku Saat Data OPEN Kosong & Status Aktual)
Perilaku situs saat variabel konfigurasi di `src/config/site.ts` bernilai kosong atau nilai placeholder demo:

| Elemen | Status Default / Kosong | Perilaku Aktual Demo (As-Is) |
|---|---|---|
| Nomor WhatsApp | `whatsappNumber: '6200000000000'` | Tautan WhatsApp tetap berfungsi mengarah ke nomor placeholder internasional yang valid |
| Tautan ENLESWEB | `enleswebUrl: ''` | Kredit footer tampil sebagai teks biasa (bukan link tag `<a>`) |
| Alamat Workshop | `address: ''` | Jika kosong, seluruh blok alamat dan iframe peta disembunyikan secara bersih. Saat ini aktif terisi alamat demo Venezia |
| Embed Peta | Mengikuti ketersediaan `address` | Iframe Google Maps dirender dengan query alamat aman ter-encode |
| Tautan Google Maps | `mapsUrl: ''` | Tombol `[Buka di Google Maps]` disembunyikan jika kosong. Saat ini aktif terisi |
| Jam Buka | `openingHours: []` | Disembunyikan bila array kosong. Saat ini aktif terisi Senin-Jumat & Sabtu |
| Indexing Mesin Pencari | `indexable: false` | Meta robots dirender: `<meta name="robots" content="noindex, nofollow" />` |
| URL Kanonikal & OG Image | `siteUrl: ''`, file og kosong | Tag canonical, `og:url`, `og:image`, dan `twitter:card` dihilangkan sepenuhnya dari HTML |

## 1.8 Batasan Bisnis dan Konten (LOCKED)
1. **Larangan Testimoni:** Tidak ada testimoni, rating bintang, ulasan pelanggan, atau kutipan pengguna.
2. **Larangan Angka Fabrikasi:** Tidak ada angka statistik tanpa bukti seperti "1000+ perangkat diservis" atau "99% puas".
3. **Larangan Klaim Absolut & Buzzwords:** Bebas dari kata terlarang (anti-slop): *terbaik, profesional, berkualitas tinggi, terpercaya, cepat dan terpercaya, gratis, premium, presisi, elevate, seamless, crafted, powerful, modern, pasti bisa, data aman 100%, semua kerusakan teratasi, suku cadang original, teknisi bersertifikat, semua merek*.
4. **Larangan Em Dash:** Tidak boleh menggunakan karakter em dash (`—` atau `&mdash;` atau `\u2014`). Gunakan tanda hubung strip biasa `-` atau koma `,`.
5. **Penulisan Merek:** `ripeir` ditulis huruf kecil di semua tempat, tidak boleh berhuruf kapital (`Ripeir` atau `RIPEIR`).
6. **Format H1:** Tepat satu elemen `<h1>` per halaman HTML.
   - Halaman `/`: `Servis laptop, komputer, handphone, dan tablet.`
   - Halaman `/404`: `Halaman tidak ditemukan`

## 1.9 Perilaku Konversi & 10 Titik Sentuh WhatsApp
Setiap tombol CTA WhatsApp menggunakan skema `https://wa.me/{whatsappNumber}?text={encodeURIComponent(pesan)}`.

| No | Titik Sentuh (`data-cta-location`) | Topik Pesan | Format Pesan Default |
|---|---|---|---|
| 1 | `nav` | servis perangkat | `Halo ripeir, saya mau tanya tentang servis perangkat.` |
| 2 | `action_bar` | servis perangkat | `Halo ripeir, saya mau tanya tentang servis perangkat.` |
| 3 | `hero` | servis perangkat | `Halo ripeir, saya mau tanya tentang servis perangkat.` |
| 4 | `layanan_laptop` | servis laptop | `Halo ripeir, saya mau tanya tentang servis laptop.` |
| 5 | `layanan_komputer` | servis komputer | `Halo ripeir, saya mau tanya tentang servis komputer.` |
| 6 | `layanan_handphone` | servis handphone | `Halo ripeir, saya mau tanya tentang servis handphone.` |
| 7 | `layanan_tablet` | servis tablet | `Halo ripeir, saya mau tanya tentang servis tablet.` |
| 8 | `cara_kerja` | proses servis | `Halo ripeir, saya mau tanya tentang proses servis.` |
| 9 | `final_cta` | servis perangkat | `Halo ripeir, saya mau tanya tentang servis perangkat.` |
| 10 | `footer` | servis perangkat | `Halo ripeir, saya mau tanya tentang servis perangkat.` |

## 1.10 Kriteria Selesai (Definition of Done)
1. Seluruh konten servis disajikan tuntas dalam 1 halaman scroll di `/`.
2. Seluruh 10 titik CTA WhatsApp berfungsi dengan URL encoding yang valid.
3. Halaman responsif sempurna dari mobile (320px) hingga desktop besar (1440px+).
4. Tap target tombol dan interaksi minimal 44x44px.
5. Kontras teks memenuhi standar aksesibilitas antislop-human (> 7:1 untuk teks normal, > 4.5:1 untuk teks pendukung).
6. Script verifikasi otomatis `npm test` lulus 100% tanpa error (0 error).
7. `astro check` menghasilkan 0 error, 0 warning, 0 hint.
8. `astro build` menghasilkan 2 file halaman statis (`index.html` dan `404.html`).

---

# DOKUMEN 2: DESIGN.md (Visual & Design Specification)
Versi 2.0 (Starter Single-Page As-Is Synchronization)

## 3.1 Karakter dan Target Rasa
- **Arah (LOCKED):** Meja kerja teknisi (technician workbench), gelap/netral beraksen cutting mat hijau tua presisi, tegas, dan fungsional.
- **Target rasa:** Rapi seperti lembar spesifikasi teknis peralatan, tenang tanpa dekorasi semu, berbobot, dan dapat diandalkan.
- **Bukan:** Toko aksesoris berantakan, template SaaS warna-warni neon, kartu transparan (glassmorphism), atau tema gelap murahan dengan sudut membulat berlebihan.

### Prinsip Visual & Pembatas
1. **Informasi di atas dekorasi:** Konten tersusun rapi menggunakan garis pemisah 1px berorientasi presisi.
2. **Sudut tegas:** Radius standar 2px (`--radius-sm`). Sudut membulat 50% hanya untuk floating action button WhatsApp.
3. **Satu aksen oranye sinyal:** (`#FF6B1A`) sebagai warna aksi utama dan penanda nomor langkah kerja.
4. **Warna hijau WhatsApp resmi:** (`#25D366`) hanya diperuntukkan bagi Floating Action Button di sudut layar.
5. **Nuansa meja kerja nyata:** Dihadirkan lewat visual deskmat cutting mat di hero, palet hijau cemara gelap, dan teks monospace pada nomor serta kode teknis.
6. **Bebas bayangan semu:** Seluruh elemen menggunakan `box-shadow: none !important`.

## 3.2 Token Desain

### 3.2.1 Warna (Tema Gelap Tunggal)
| Token | Nilai | Fungsi |
|---|---|---|
| `--bg` | `#08100e` | Latar halaman utama (deep dark spruce black) |
| `--bg-raised` | `#101c18` | Latar kartu layanan, final CTA, dan panel peta |
| `--bg-sunken` | `#050a08` | Latar footer dan blok navigasi bawah |
| `--line` | `#1c2b26` | Garis pemisah standar 1px |
| `--line-strong` | `#2c4038` | Batas kartu layanan, tombol sekunder, border panel peta |
| `--grid` | `#12221d` | Garis grid ambient |
| `--text` | `#E8EBED` | Teks judul dan body utama (> 15:1 rasio kontras) |
| `--text-muted` | `#98A2AB` | Teks sekunder, deskripsi pendukung (~7:1 rasio kontras) |
| `--accent` | `#FF6B1A` | Aksen sinyal utama (oranye teknis, nomor langkah `01`–`04`) |
| `--accent-hover` | `#FF8540` | Hover tombol utama dan link interaktif |
| `--accent-active` | `#E85A0E` | Tombol utama saat ditekan |

Khusus Tombol Floating WhatsApp:
- Latar tombol: `#25D366`
- Latar hover: `#20BA5A`
- Latar active: `#1DA851`
- Warna ikon: `#FFFFFF`

## 3.3 Tipografi
Menggunakan font open-source berlisensi bebas yang di-host lokal via `@fontsource`:
1. **IBM Plex Sans Condensed (600, 700):** Digunakan untuk seluruh elemen judul (H1, H2, H3). Karakter condensed memberi kesan teknis, tegas, dan efisien dalam memanfaatkan ruang horizontal.
2. **IBM Plex Sans (400, 500, 600):** Digunakan untuk teks isi (body), deskripsi, dan tombol. Nyaman dibaca pada layar kecil.
3. **IBM Plex Mono (500):** Digunakan untuk nomor urut langkah (`01`–`04`), nomor telepon WhatsApp, label kendala teknis, dan merek brand ripeir di footer.

## 3.4 Komponen & Tata Letak Seksi Halaman

### 3.4.1 Header & Navbar
- Posisi sticky di bagian atas dengan tinggi 64px (desktop) atau 56px (mobile), berlatar `--bg` dengan border bawah 1px `--line`.
- Sisi kiri: Merek teks `ripeir` (huruf kecil).
- Tengah (Desktop): Tautan anchor internal (`#layanan`, `#cara-kerja`, `#kontak`) dengan transisi warna teks saat hover.
- Kanan (Desktop): Tombol WhatsApp berukuran kompak (`size="nav"`).
- Mobile: Tombol hamburger drawer 44x44px yang membuka panel menu vertikal. Saat tautan diklik, halaman bergulir halus ke seksi target dan drawer tertutup seketika.

### 3.4.2 Hero Section
- Menampilkan workstation teknisi realistis dengan latar `hero-deskmat-full.jpg` dan overlay ambient.
- Judul H1: `Servis laptop, komputer, handphone, dan tablet.`
- Paragraf pendukung dengan lebar terbatas (`prose-limit`).
- Tombol ganda: Tombol oranye primer WhatsApp dan tombol sekunder ghost `[Lihat Layanan]` yang mengarahkan scroll ke `#layanan`.
- Transisi warna gradasi halus di bagian bawah hero menuju latar belakang seksi berikutnya.

### 3.4.3 Seksi Layanan (`ServicesGrid.astro`)
- Target ID: `id="layanan"`, dilengkapi `scroll-margin-top: 80px`.
- Judul H2 `Layanan servis` dan deskripsi singkat.
- Tata letak Grid 2x2 di desktop (>= 768px) dan 1 kolom di mobile.
- Struktur Kartu:
  - Header: Nama perangkat dalam huruf monospace (`Laptop`, `Komputer`, `Handphone`, `Tablet`) dan ringkasan servis.
  - Body: Label `KENDALA UMUM:` dan daftar bullet strip berisi 7–8 masalah umum perangkat tersebut.
  - Action: Tombol WhatsApp spesifik perangkat (misal `Tanya Servis Laptop`).
- Kotak penutup berpola garis putus-putus (`dashed`) untuk konsultasi perangkat di luar 4 kategori.

### 3.4.4 Seksi Cara Kerja (`StepList.astro`)
- Target ID: `id="cara-kerja"`, dilengkapi `scroll-margin-top: 80px`.
- Judul H2 `Empat langkah servis` dan deskripsi intro.
- Menampilkan 4 baris tahapan linear:
  - `01` Cerita di WhatsApp
  - `02` Bawa atau kirim
  - `03` Cek dan estimasi biaya
  - `04` Pengerjaan dan selesai
- Tombol penutup WhatsApp untuk konsultasi proses servis.

### 3.4.5 Seksi Prinsip Kerja (`Principles.astro`)
- Judul H2 `Cara kami bekerja.`
- 3 baris komitmen transparan: `Dicek dulu`, `Kamu yang memutuskan`, `Apa adanya`.

### 3.4.6 Seksi Final CTA (`FinalCta.astro`)
- Blok callout berlatar `--bg-raised` dengan border `--line-strong` dan radius 2px.
- Judul H2 `Perangkatmu bermasalah?` dan tombol oranye lebar `[Ceritakan Masalahnya via WhatsApp]`.

### 3.4.7 Seksi Footer Serba Ada (`Footer.astro`)
- Target ID: `id="kontak"`, scroll-margin-top 80px, berlatar `--bg-sunken`.
- Kolom 1: Merek `ripeir`, tagline, nomor WhatsApp monospace besar, dan 4 ikon media sosial.
- Kolom 2: Jam Operasional terstruktur tabel mini dan alamat workshop lengkap disertai catatan kedatangan.
- Kolom 3: Kartu peta Google Maps interaktif ter-filter tema gelap dan tombol eksternal `[Buka di Google Maps]`.
- Baris Penutup: Kredit minimalis `"Website oleh ENLESWEB."` di sebelah kiri dan navigasi cepat anchor di sebelah kanan.

### 3.4.8 Floating WhatsApp Button (`ActionBar.astro`)
- Tombol lingkaran melayang berdiameter 60px (desktop) / 54px (mobile) di pojok kanan bawah.
- Latar hijau WhatsApp resmi (`#25D366`), ikon SVG putih proporsional 28px, dan tooltip teks pada desktop.

## 3.5 Animasi & Aksesibilitas (Motion & A11y)
- **Scroll Reveal:** Setiap seksi memiliki kelas `.animate-section` yang diobservasi oleh `IntersectionObserver` di `Base.astro`. Saat memasuki viewport, seksi mengalami transisi opasitas dan translasi vertikal naik 16px secara halus.
- **Scroll Margin:** Seluruh target anchor (`#layanan`, `#cara-kerja`, `#kontak`) memiliki `scroll-margin-top: 80px` agar tidak tertutup oleh navbar sticky.
- **Preferensi Gerakan:** Jika pengguna mengaktifkan `prefers-reduced-motion: reduce`, seluruh animasi dinonaktifkan secara otomatis dan konten langsung tampil 100% visible.
- **Ukuran Tap Target:** Seluruh tombol dan tautan memenuhi standar minimum 44x44px.

---

# DOKUMEN 3: CONTENT.md (Website Copy Specification)
Versi 2.0 (Starter Single-Page As-Is Synchronization)

> **Aturan Utama:** Salin persis teks di dokumen ini, termasuk tanda baca dan huruf besar-kecil. Teks di dalam kurung siku `[...]` adalah label tombol. Teks di dalam kurung kurawal `{...}` adalah variabel. Tidak ada em dash (—) di teks pelanggan. Nama `ripeir` selalu ditulis huruf kecil di semua tempat.

## 2.1 Aturan Keras Copywriting
- Bahasa: Indonesia sederhana, tidak teknis. Sapaan: `kamu/-mu`.
- Kalimat pendek. Satu kalimat, satu gagasan.
- Deskripsi, bukan slogan. Konkret, bukan cerdik.
- Setiap pernyataan tentang cara kerja harus berupa proses atau batasan, bukan klaim hasil.
- Dilarang keras menggunakan kata promosi kosong (anti-slop) dan tanda em dash (`—`).

## 2.2 Meta Halaman
- Bahasa dokumen: `id`

| Halaman | Title | Meta Description |
|---|---|---|
| Beranda | `ripeir \| Servis laptop, komputer, handphone, dan tablet` | `Servis laptop, komputer, handphone, dan tablet. Ceritakan masalahnya lewat WhatsApp. Kami cek dulu dan kabari hasilnya sebelum perbaikan dimulai.` |
| 404 | `Halaman tidak ditemukan \| ripeir` | `Halaman yang kamu buka tidak ada.` |

## 2.3 Navbar, Drawer, dan Skip Link
- Merek: `ripeir` (tautan ke `/`)
- Tautan desktop & drawer:
  1. `Layanan` (href: `#layanan`)
  2. `Cara Kerja` (href: `#cara-kerja`)
  3. `Kontak` (href: `#kontak`)
- Tombol desktop: `[Chat WhatsApp]` (data-cta-location: `nav`, topik: `servis perangkat`)
- Label pembaca layar:
  - Tombol buka menu: `Buka menu`
  - Tombol tutup menu: `Tutup menu`
  - Navigasi utama: `Navigasi utama`
  - Skip link: `Lewati ke konten` (href: `#konten`)

## 2.4 Beranda (Single Page)

### 2.4.1 Hero
- **Headline (h1):** `Servis laptop, komputer, handphone, dan tablet.`
- **Teks Pendukung:** `Ceritakan masalahnya lewat WhatsApp. Kami cek dulu, kabari hasilnya, dan baru memperbaiki setelah kamu setuju.`
- **Tombol Utama:** `[Chat via WhatsApp]` (data-cta-location: `hero`, topik: `servis perangkat`)
- **Tombol Sekunder:** `[Lihat Layanan]` (href: `#layanan`)
- **Aria Label Objek Hero:** `Ilustrasi laptop terurai menjadi layar, mainboard, baterai, dan casing bawah.`
- **Callout Komponen Objek:** `Layar`, `Mainboard`, `Baterai`, `Casing bawah`

### 2.4.2 Seksi Layanan (`#layanan`)
- **Headline (h2):** `Layanan servis`
- **Intro:** `Pilih jenis perangkatmu. Ringkasan kendala umum yang dapat dikonsultasikan langsung lewat WhatsApp.`
- **Kartu 1: Laptop**
  - Nama: `Laptop`
  - Ringkasan: `Servis laptop untuk kebutuhan kerja, sekolah, dan sehari-hari.`
  - Kendala Umum:
    - `Tidak mau menyala`
    - `Layar pecah, bergaris, atau gelap`
    - `Baterai cepat habis atau tidak mengisi`
    - `Keyboard atau touchpad tidak berfungsi`
    - `Berjalan lambat atau sering macet`
    - `Panas berlebih dan kipas berisik`
    - `Penyimpanan penuh atau perlu diganti`
    - `Terkena cairan`
  - Tombol: `[Tanya Servis Laptop]` (data-cta-location: `layanan_laptop`, topik: `servis laptop`)
- **Kartu 2: Komputer**
  - Nama: `Komputer`
  - Ringkasan: `Servis komputer desktop, termasuk menambah atau mengganti komponen.`
  - Kendala Umum:
    - `Tidak mau menyala`
    - `Menyala tetapi tidak ada tampilan`
    - `Mati sendiri atau restart terus`
    - `Kipas berisik atau suhu tinggi`
    - `Berjalan lambat`
    - `Perlu menambah atau mengganti komponen`
    - `Pemasangan ulang sistem`
  - Tombol: `[Tanya Servis Komputer]` (data-cta-location: `layanan_komputer`, topik: `servis komputer`)
- **Kartu 3: Handphone**
  - Nama: `Handphone`
  - Ringkasan: `Servis handphone untuk masalah layar, baterai, daya, dan suara.`
  - Kendala Umum:
    - `Layar retak atau tidak merespons sentuhan`
    - `Baterai cepat habis`
    - `Tidak mau mengisi daya`
    - `Tidak mau menyala`
    - `Speaker atau mikrofon bermasalah`
    - `Kamera bermasalah`
    - `Berjalan lambat atau sering macet`
    - `Terkena cairan`
  - Tombol: `[Tanya Servis Handphone]` (data-cta-location: `layanan_handphone`, topik: `servis handphone`)
- **Kartu 4: Tablet**
  - Nama: `Tablet`
  - Ringkasan: `Servis tablet untuk masalah layar, baterai, dan pengisian daya.`
  - Kendala Umum:
    - `Layar retak atau tidak merespons sentuhan`
    - `Baterai cepat habis`
    - `Tidak mau mengisi daya`
    - `Tidak mau menyala`
    - `Speaker atau mikrofon bermasalah`
    - `Berjalan lambat atau sering macet`
  - Tombol: `[Tanya Servis Tablet]` (data-cta-location: `layanan_tablet`, topik: `servis tablet`)
- **Catatan Perangkat Lain:** `Perangkat selain empat jenis ini? Tanyakan dulu lewat WhatsApp sebelum membawanya.`

### 2.4.3 Seksi Cara Kerja (`#cara-kerja`)
- **Headline (h2):** `Empat langkah servis`
- **Intro:** `Alur servis ringkas dari ceritamu di WhatsApp sampai perangkat kembali siap digunakan.`
- **Langkah-langkah:**
  - `01` **Cerita di WhatsApp:** `Hubungi kami dan jelaskan kendala perangkatmu. Kami diskusikan perkiraan masalahnya sejak awal.`
  - `02` **Bawa atau kirim:** `Bawa perangkat ke workshop atau kirim lewat kurir yang aman. Kabari kami sebelum mengirim.`
  - `03` **Cek dan estimasi biaya:** `Kami memeriksa perangkatmu dan memberikan estimasi biaya perbaikan. Pekerjaan baru dimulai setelah kamu setuju.`
  - `04` **Pengerjaan dan selesai:** `Perbaikan dikerjakan sesuai kesepakatan. Perangkat diuji kembali sebelum kamu ambil.`
- **Tombol Seksi:** `[Chat via WhatsApp]` (data-cta-location: `cara_kerja`, topik: `proses servis`)

### 2.4.4 Seksi Prinsip Kerja
- **Headline (h2):** `Cara kami bekerja.`
- **Poin-poin:**
  - **Dicek dulu:** `Kami periksa perangkatmu lebih dulu dan menjelaskan masalahnya dengan bahasa yang mudah dipahami.`
  - **Kamu yang memutuskan:** `Biaya dan pilihan perbaikan kami kabarkan sebelum pekerjaan dimulai. Kamu setuju dulu, baru kami kerjakan.`
  - **Apa adanya:** `Tidak semua kerusakan bisa diperbaiki. Kalau memang tidak bisa, kami sampaikan sebagaimana adanya.`

### 2.4.5 Seksi Final CTA
- **Headline (h2):** `Perangkatmu bermasalah?`
- **Teks Pendukung:** `Ceritakan masalahnya. Kami cek dulu dan kabari hasilnya.`
- **Tombol:** `[Ceritakan Masalahnya via WhatsApp]` (data-cta-location: `final_cta`, topik: `servis perangkat`)

## 2.5 Footer Serba Ada (`#kontak`)
- **Merek:** `ripeir`
- **Tagline:** `Servis laptop, komputer, handphone, dan tablet.`
- **Kontak WA:** `WhatsApp +{site.whatsappNumber}` (data-cta-location: `footer`, topik: `servis perangkat`)
- **Tautan Medsos:** Instagram, X, YouTube, GitHub
- **Judul Bagian Workshop:** `Workshop & Kontak`
- **Alamat Workshop:** `{site.address}`
- **Catatan Workshop:** `Kabari lewat WhatsApp sebelum datang.`
- **Judul Jam Operasional:** `Jam Operasional`
- **Label Tombol Peta:** `[Buka di Google Maps]` (href: `{site.mapsUrl}`)
- **Kredit ENLESWEB:** `Website oleh ENLESWEB.` (tautan ke `{site.enleswebUrl}` jika terisi, teks biasa jika kosong)
- **Tautan Cepat Navigasi Footer:** `Layanan` (`#layanan`), `Cara Kerja` (`#cara-kerja`), `Kontak` (`#kontak`)

## 2.6 Floating WhatsApp Action Button
- **Label:** `Chat via WhatsApp` (data-cta-location: `action_bar`, topik: `servis perangkat`)
- **Aria-label:** `Chat via WhatsApp tentang servis perangkat`
- **Tooltip Desktop:** `Chat via WhatsApp`

## 2.7 Halaman 404
- **Headline (h1):** `Halaman tidak ditemukan`
- **Teks:** `Alamat yang kamu buka tidak ada di website ini.`
- **Tombol Aksi:** `[Kembali ke Beranda]` (href: `/`)

## 2.8 Rincian 10 Titik Sentuh Pesan WhatsApp
1. `nav`: `Halo ripeir, saya mau tanya tentang servis perangkat.`
2. `action_bar`: `Halo ripeir, saya mau tanya tentang servis perangkat.`
3. `hero`: `Halo ripeir, saya mau tanya tentang servis perangkat.`
4. `layanan_laptop`: `Halo ripeir, saya mau tanya tentang servis laptop.`
5. `layanan_komputer`: `Halo ripeir, saya mau tanya tentang servis komputer.`
6. `layanan_handphone`: `Halo ripeir, saya mau tanya tentang servis handphone.`
7. `layanan_tablet`: `Halo ripeir, saya mau tanya tentang servis tablet.`
8. `cara_kerja`: `Halo ripeir, saya mau tanya tentang proses servis.`
9. `final_cta`: `Halo ripeir, saya mau tanya tentang servis perangkat.`
10. `footer`: `Halo ripeir, saya mau tanya tentang servis perangkat.`

## 2.9 Larangan Teks Spesifik (Anti-Slop)
Daftar kata dan frasa yang dilarang muncul pada teks website:
`terbaik`, `profesional`, `berkualitas tinggi`, `terpercaya`, `cepat dan terpercaya`, `gratis`, `premium`, `presisi`, `elevate`, `seamless`, `crafted`, `powerful`, `modern`, `pasti bisa`, `data aman 100%`, `semua kerusakan teratasi`, `suku cadang original`, `teknisi bersertifikat`, `semua merek`.
Tanda em dash (`—` atau `&mdash;` atau `\u2014`) dilarang di semua tempat.
Nama merek wajib ditulis `ripeir` (huruf kecil).

---

# DOKUMEN 4: SPEC.md (Technical Architecture & Engineering Specification)
Versi 2.0 (Starter Single-Page As-Is Synchronization)

## 4.1 Tech Stack (Aktual)
- **Framework:** Astro 5.4+ (`output: 'static'`).
- **Language:** TypeScript mode `strict` (`devDependencies: typescript`, `@astrojs/check`).
- **Styling:** Vanilla CSS dengan CSS Custom Properties (`src/styles/global.css`) dan scoped styling komponen Astro. Tanpa framework CSS eksternal.
- **Fonts (Self-hosted via Fontsource):**
  - `@fontsource/ibm-plex-sans-condensed` (600, 700)
  - `@fontsource/ibm-plex-sans` (400, 500, 600)
  - `@fontsource/ibm-plex-mono` (500)
- **Deployment:** Vercel (static pre-rendered via `vercel.json`).

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

## 4.3 Konfigurasi Bisnis Terpusat: `src/config/site.ts`
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

## 4.4 Generator URL WhatsApp: `src/lib/whatsapp.ts`
Menghasilkan URL direct link WhatsApp resmi:
- Fungsi `waUrl(topic: string)`:
  Mengembalikan tautan: `https://wa.me/{whatsappNumber}?text=Halo%20ripeir%2C%20saya%20mau%20tanya%20tentang%20{encodedTopic}.`
- Fungsi `waDraftMessage(device, problem, started?, note?)`:
  Menghasilkan template teks draft pesan terstruktur.

## 4.5 Arsitektur Komponen Kunci
- **ActionBar.astro:** Floating button di sudut kanan bawah (`z-index: 99`) berlatar `#25D366` dengan tooltip desktop dan `data-cta-location="action_bar"`.
- **Base.astro:** Mengatur head, meta tags, link favicon, skip link `#konten`, dan script observer animasi `.animate-section`.
- **ServicesGrid.astro:** CSS grid 2x2 desktop / 1 kolom mobile menyajikan 4 perangkat dengan kendala dan tombol WhatsApp terisolasi.
- **Footer.astro:** Menjadi target `#kontak` dengan informasi workshop lengkap, embed iframe Google Maps ter-filter, tombol eksternal Maps, navigasi anchor, dan kredit `"Website oleh ENLESWEB."`.

## 4.6 Pipeline Verifikasi Otomatis (`npm test`)
- `scripts/verify-all.mjs`: Memvalidasi bebas em dash, bebas kata terlarang (anti-slop), tepat 1 H1 per halaman, penulisan huruf kecil `ripeir`, dan kelengkapan 10 titik CTA.
- `scripts/verify-launch-cut.mjs`: Memvalidasi draft pesan WhatsApp, ketiadaan tag canonical/OG saat data kosong, perilaku link kredit ENLESWEB, alamat workshop, serta parameter URL ke-10 titik sentuh CTA.
