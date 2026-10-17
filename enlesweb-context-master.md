# ENLESWEB CONTEXT MASTER: DOKUMENTASI TERPADU PLATFORM & 6 TEMPLATE KONSEP

**Versi:** 3.5 (Pencatatan Pembelian Domain Resmi enlesweb.com CLOSED & Decision 018)  
**Tanggal Rilis:** 17 Oktober 2026  
**Status Sistem:** Production & Launch-Ready As-Is Website Ecosystem (Tersinkronisasi Penuh Decision 001–018 & SOP v1.2 CLOSED)  
**Target Pengguna Dokumen:** Dokumentasi Teknis Standar, Panduan Arsitektur Sistem, dan Wiki Pengembang  
**Ringkasan Pembaruan:** Pencatatan resmi pembelian domain kanonikal `enlesweb.com` (CLOSED / SELESAI, Decision 018), pengalihan status rilis ke Cloudflare Workers custom domain, dan pemutakhiran sisa tugas Minggu 0 menjadi 2 tugas eksekusi murni (materi iklan Carousel 4 slide dan template PDF Bukti Pemesanan).  

---

## RINGKASAN EKSEKUTIF EKOSISTEM

Ekosistem **ENLESWEB** adalah platform agensi perancangan dan pengembangan website independen berkinerja tinggi yang berfokus pada kepastian dan kemudahan bagi pemilik usaha lokal (transparansi harga paket, domain dan hosting 1 tahun sudah termasuk), efisiensi operasional, dan kecepatan konversi bisnis via WhatsApp. 

ENLESWEB menyajikan penawaran komersial yang terbagi menjadi 3 tingkatan paket inti dan 1 jalur kustom terpisah:
1. **Paket Starter (Rp450.000)**: Website 1 halaman (*single-page*), pilih dari desain yang tersedia, sudah termasuk domain & hosting 1 tahun, 2 kali revisi saat pengerjaan, serta gratis 2 kali putaran update konten ringan di tahun pertama (diatur di SOP & Bukti Pemesanan PDF). Memuat catatan khusus harga peluncuran untuk 10 klien pertama (`site.showLaunchNote = true`).
2. **Paket Business (Rp750.000)**: Website hingga 6 halaman (*multi-page*), desain disesuaikan dengan bisnis klien, sudah termasuk domain & hosting 1 tahun, 2 kali revisi saat pengerjaan, serta gratis 4 kali putaran update konten ringan di tahun pertama.
3. **Paket Growth (Rp1.200.000)**: Website hingga 10 halaman dengan desain khusus, pengalaman pengunjung/frontend interaktif khusus (*custom client islands*), sudah termasuk domain & hosting 1 tahun, 4 kali revisi saat pengerjaan, serta gratis 6 kali putaran update konten ringan di tahun pertama.
4. **Paket Custom (Mulai Rp2.000.000)**: Jalur terpisah di luar paket Growth untuk kebutuhan lebih dari 10 halaman atau integrasi sistem khusus (tombol aksi: `[Diskusikan Kebutuhan Custom]`, topik: `paket Custom`).

Seluruh paket dibuktikan secara nyata melalui **6 Proyek Portofolio Konsep** aktif (live di Vercel), yang mendemonstrasikan bahwa setiap website memiliki identitas visual unik (*signature physical metaphor*), kepatuhan ketat terhadap protokol anti-slop, dan rasio kontras visual WCAG AA.

---

## DAFTAR ISI (TABLE OF CONTENTS)

- [1. Standar Fondasi Platform & Prinsip Ekosistem](#1-standar-fondasi-platform--prinsip-ekosistem)
  - [1.1 Visi Komersial & Nilai Inti](#11-visi-komersial--nilai-inti)
  - [1.2 Struktur Tiga Tier Paket Komersial & Jalur Custom](#12-struktur-tiga-tier-paket-komersial--jalur-custom)
  - [1.3 Protokol Anti-Slop & Editorial Voice Terpadu](#13-protokol-anti-slop--editorial-voice-terpadu)
  - [1.4 Standar Rekayasa Web Universal](#14-standar-rekayasa-web-universal)
  - [1.5 Arsitektur Konversi WhatsApp & Tracking Terpadu](#15-arsitektur-konversi-whatsapp--tracking-terpadu)
  - [1.6 Infrastruktur & Pipeline Deployment](#16-infrastruktur--pipeline-deployment)
- [2. Matriks Komparasi 6 Template Portofolio Konsep](#2-matriks-komparasi-6-template-portofolio-konsep)
- [3. Spesifikasi Platform Induk (ENLESWEB Main Website)](#3-spesifikasi-platform-induk-enlesweb-main-website)
  - [3.1 Product Requirements (PRD)](#31-product-requirements-prd)
  - [3.2 Desain & Token Visual (DESIGN)](#32-desain--token-visual-design)
  - [3.3 Salinan Konten & Titik Sentuh WhatsApp (CONTENT)](#33-salinan-konten--titik-sentuh-whatsapp-content)
  - [3.4 Arsitektur Teknis & Skrip Klien (SPEC)](#34-arsitektur-teknis--skrip-klien-spec)
- [4. Spesifikasi Template Paket Starter](#4-spesifikasi-template-paket-starter)
  - [4.1 Seruput Kopi (Kedai Kopi & F&B)](#41-seruput-kopi-kedai-kopi--fb)
    - [4.1.1 PRD & Batasan Starter](#411-prd--batasan-starter)
    - [4.1.2 Desain: Signature Rol Struk Kasir & Token](#412-desain-signature-rol-struk-kasir--token)
    - [4.1.3 Salinan Konten & Alur WhatsApp](#413-salinan-konten--alur-whatsapp)
    - [4.1.4 Arsitektur Komponen & Data](#414-arsitektur-komponen--data)
  - [4.2 ripeir (Workshop Perbaikan & Reparasi)](#42-ripeir-workshop-perbaikan--reparasi)
    - [4.2.1 PRD & Alur Pelanggan](#421-prd--alur-pelanggan)
    - [4.2.2 Desain: Industrial Workshop Dark Theme & Token](#422-desain-industrial-workshop-dark-theme--token)
    - [4.2.3 Salinan Konten & 10 Titik Sentuh WhatsApp](#423-salinan-konten--10-titik-sentuh-whatsapp)
    - [4.2.4 Arsitektur Komponen & Verifikasi](#424-arsitektur-komponen--verifikasi)
- [5. Spesifikasi Template Paket Business](#5-spesifikasi-template-paket-business)
  - [5.1 tuntas (Bimbel Kelompok Kecil & Les Privat)](#51-tuntas-bimbel-kelompok-kecil--les-privat)
    - [5.1.1 PRD & Rute Multi-Halaman](#511-prd--rute-multi-halaman)
    - [5.1.2 Desain: Signature Lembar SiDU & Token](#512-desain-signature-lembar-sidu--token)
    - [5.1.3 Salinan Konten & 12 Titik Sentuh WhatsApp](#513-salinan-konten--12-titik-sentuh-whatsapp)
    - [5.1.4 Arsitektur Komponen, Jadwal & Biaya](#514-arsitektur-komponen-jadwal--biaya)
- [6. Spesifikasi Template Paket Growth](#6-spesifikasi-template-paket-growth)
  - [6.1 Jerseay (Studio Jersey & Apparel Olahraga Kustom)](#61-jerseay-studio-jersey--apparel-olahraga-kustom)
    - [6.1.1 PRD & Corong Konversi](#611-prd--corong-konversi)
    - [6.1.2 Desain: Monochrome Atelier & Monospace Teknis](#612-desain-monochrome-atelier--monospace-teknis)
    - [6.1.3 Modul Kustom: Kit Configurator & Roster Builder](#613-modul-kustom-kit-configurator--roster-builder)
    - [6.1.4 Salinan Konten, Brief Adaptif & Format Pesan](#614-salinan-konten-brief-adaptif--format-pesan)
    - [6.1.5 Arsitektur Teknis](#615-arsitektur-teknis)
  - [6.2 dipotongin (Barbershop Pria & Grooming)](#62-dipotongin-barbershop-pria--grooming)
    - [6.2.1 PRD & Layout B Editorial Dua Kolom](#621-prd--layout-b-editorial-dua-kolom)
    - [6.2.2 Desain: Karakter Kriya Cetak Letterpress & Kartu Member Arang](#622-desain-karakter-kriya-cetak-letterpress--kartu-member-arang)
    - [6.2.3 Modul Kustom: Kuis Konsultasi Gaya Rambut 1 Menit & Tiket Pangkas](#623-modul-kustom-kuis-konsultasi-gaya-rambut-1-menit--tiket-pangkas)
    - [6.2.4 Salinan Konten, 8 Paket Tarif & Routing WA](#624-salinan-konten-8-paket-tarif--routing-wa)
    - [6.2.5 Arsitektur Teknis](#625-arsitektur-teknis)
  - [6.3 berflower (Florist & Toko Hadiah Konsep Venice)](#63-berflower-florist--toko-hadiah-konsep-venice)
    - [6.3.1 PRD & 7 Halaman Terpadu](#631-prd--7-halaman-terpadu)
    - [6.3.2 Desain: Botani Puitis, Kertas Sutra & Token](#632-desain-botani-puitis-kertas-sutra--token)
    - [6.3.3 Modul Kustom: Rangkai Buket Interaktif & Keranjang Terintegrasi](#633-modul-kustom-rangkai-buket-interaktif--keranjang-terintegrasi)
    - [6.3.4 Salinan Konten, Katalog Produk & Payload WhatsApp](#634-salinan-konten-katalog-produk--payload-whatsapp)
    - [6.3.5 Arsitektur Teknis & State Nanostores](#635-arsitektur-teknis--state-nanostores)
- [7. QA Terpadu & Panduan Deployment](#7-qa-terpadu--panduan-deployment)
  - [7.1 Checklist Verifikasi Kualitas Lintas Proyek](#71-checklist-verifikasi-kualitas-lintas-proyek)
  - [7.2 Prosedur Rilis Cloudflare & Vercel](#72-prosedur-rilis-cloudflare--vercel)

---

# 1. Standar Fondasi Platform & Prinsip Ekosistem

### 1.1 Visi Komersial & Nilai Inti
ENLESWEB didirikan untuk menyelesaikan masalah umum pelaku usaha lokal dan UMKM saat memesan website:
- **Kepastian dan Kemudahan (Tanpa Biaya Platform Tersembunyi):** Berbeda dengan SaaS pembuat website (seperti Wix/Shopify) yang membebankan sewa platform bulanan terus-menerus atau jasa agensi yang membingungkan, ENLESWEB mengedepankan kepastian harga paket di muka, proses pemesanan praktis via WhatsApp, serta penayangan website statis berkinerja tinggi di infrastruktur modern (Cloudflare Pages / Vercel).
- **Transparansi Harga & Sudah Termasuk Domain + Hosting 1 Tahun:** Biaya pembuatan transparan (Mulai Rp450.000) sudah mencakup nama domain pilihan klien (.com, .id, dll. dengan rekomendasi standar `.com` di SOP chat) dan hosting selama 1 tahun penuh tanpa biaya platform bulanan tersembunyi.
- **Kebijakan Perpanjangan Tahun ke-2+, Update Konten Ringan Tahunan, & Perlindungan Transaksi (LOCKED - Decision 002, 015, 017):**
  - **Kepemilikan Akun Provider, Registrant Tahun Pertama, & Waktu Pembelian Domain:** Seluruh akun registrar dan data *registrant* domain pada tahun pertama didaftarkan atas nama **ENLESWEB** demi menghilangkan birokrasi verifikasi dokumen identitas awal (seperti KTP untuk `.id`). Pembelian domain dieksekusi setelah DP 50% diterima dan materi dasar klien lengkap (melindungi arus kas studio).
  - **Kuota Gratis Putaran Update Konten Ringan Tahunan (Decision 015):** Selama tahun pertama pasca-tayang, klien mendapat kuota gratis update konten ringan (perubahan teks, harga, jam buka, atau foto pada bagian yang sudah ada tanpa mengubah struktur layout, maksimal 5–10 item per kiriman pesan WhatsApp, SLA 1–2 hari kerja): **Starter 2x**, **Business 4x**, dan **Growth 6x** per tahun (selebihnya Rp50.000/putaran). Garansi perbaikan bug teknis tetap gratis 30 hari.
  - **Dua Opsi Fleksibel Tahun Kedua (Renewal):** Saat masa perpanjangan tiba, klien diberikan pilihan bebas tanpa *vendor lock-in*:
    1. **Perpanjangan Terkelola (bersama ENLESWEB):** Flat all-in **Rp400.000 / tahun** (untuk domain `.com` atau `.id`) atau **Rp300.000 / tahun** (domain lainnya). Biaya ini mencakup perpanjangan domain, hosting, pemeliharaan teknis, serta **reset otomatis kuota gratis putaran update konten ringan tahunan sesuai paket awal (2x/4x/6x per tahun)**.
    2. **Opsi Mandiri (Transfer Domain & File):** Jika klien ingin mengelola website secara mandiri, ENLESWEB memberikan opsi transfer kepemilikan domain (kode transfer EPP / *Auth Code*) dan penyerahan file arsip *build* statis website (`.zip` dari `dist/`) secara cuma-cuma tanpa biaya perpanjangan.
  - **Reaktivasi Website Bebas Biaya Tambahan (Decision 005) & Aturan On-Hold 60 Hari (Decision 017):** Jika website sempat dinonaktifkan karena melewati masa tenggang 14 hari, tidak ada denda atau biaya reaktivasi tambahan selama domain belum dilepas registrar. Saat pengerjaan awal, jika klien belum melengkapi materi dasar lewat dari 7 hari kalender sejak DP, proyek masuk ke status *On-Hold* (antrean pasif) hingga maksimal 60 hari kalender sejak tanggal DP.
  - **Integritas Klaim Pemasaran:** ENLESWEB tidak memakai "tanpa biaya langganan berulang" sebagai klaim pemasaran utama. Janji inti yang dipegang adalah **Kepastian dan Kemudahan**: harga paket jelas di awal, domain dan hosting 1 tahun sudah termasuk, alur komunikasi via WhatsApp (`Delivery & Operations/sop.md` v1.2 CLOSED), bukti pemesanan formal PDF ber-TTD digital dengan Nama Lengkap Pendiri yang sama persis dengan rekening bank penerima, serta ketentuan perpanjangan tahun kedua yang terbuka dan transparan sejak awal.
- **Konversi Langsung ke WhatsApp:** Bagi konsumen di Indonesia, WhatsApp adalah jalur penutupan transaksi paling efektif. Seluruh arsitektur situs diarahkan untuk memicu pesan WhatsApp yang telah terisi konteks spesifik (*pre-filled*).
- **Kecepatan Akses Instan:** Menggunakan static-site generation (SSG), halaman dirender instan di jaringan CDN tepi (*edge network*) dengan skor performa mendekati 100 di perangkat bergerak.

---

### 1.2 Struktur Tiga Tier Paket Komersial & Jalur Custom

| Parameter | Paket Starter | Paket Business | Paket Growth | Paket Custom |
|---|---|---|---|---|
| **Harga (LOCKED)** | **Rp450.000** | **Rp750.000** | **Rp1.200.000** | **Mulai Rp2.000.000** |
| **Domain 1 Tahun** | **Sudah Termasuk** | **Sudah Termasuk** | **Sudah Termasuk** | Sesuai kebutuhan |
| **Hosting 1 Tahun** | **Sudah Termasuk** | **Sudah Termasuk** | **Sudah Termasuk** | Sesuai kebutuhan |
| **Perpanjangan Thn 2+ (LOCKED)** | **Flat Rp400rb/thn (.com/.id) atau Rp300rb/thn (lainnya) + Reset Kuota Update / Opsi Mandiri (EPP + dist zip)** | **Flat Rp400rb/thn (.com/.id) atau Rp300rb/thn (lainnya) + Reset Kuota Update / Opsi Mandiri (EPP + dist zip)** | **Flat Rp400rb/thn (.com/.id) atau Rp300rb/thn (lainnya) + Reset Kuota Update / Opsi Mandiri (EPP + dist zip)** | Sesuai kebutuhan |
| **Jumlah Halaman** | 1 halaman (*single-page*) | Hingga 6 halaman | Hingga 10 halaman | Lebih dari 10 halaman |
| **Pilihan Desain** | Pilih dari desain yang tersedia | Desain disesuaikan dengan bisnis | Desain khusus untuk bisnis | Desain & sistem kustom penuh |
| **Revisi Pengerjaan & Update Pasca-Tayang** | 2x revisi pengerjaan + **Gratis 2x update ringan/thn** (di SOP/PDF) | 2x revisi pengerjaan + **Gratis 4x update ringan/thn** (di SOP/PDF) | 4x revisi pengerjaan + **Gratis 6x update ringan/thn** (di SOP/PDF) | Sesuai kesepakatan |
| **Catatan Khusus** | Harga peluncuran untuk 10 klien pertama | Untuk bisnis berkembang | Fitur frontend interaktif (*client islands*) | Kebutuhan integrasi backend/khusus |
| **Target Bisnis** | Kedai kopi, bengkel reparasi, warung makan, barbershop esensial | Bimbel/les privat, klinik, konsultan, studio foto | Studio jersey kustom, barbershop premium, florist konsep | Portal multi-cabang, e-commerce kustom |
| **Perwakilan Konsep** | `Seruput Kopi`, `ripeir` | `tuntas` | `Jerseay`, `dipotongin`, `berflower` | - |

---

### 1.3 Protokol Anti-Slop & Editorial Voice Terpadu

Semua materi teks di ENLESWEB dan ke-6 template wajib mematuhi standar penulisan berikut:

1. **Bebas Tanda Hubung Em Dash (—) pada Copy Pelanggan:**
   - Dilarang keras menggunakan karakter em dash (`—`) pada seluruh teks antarmuka publik. Gunakan titik dua (`:`), tanda kurung, koma, atau titik.
2. **Larangan Superlatif & Kata Promosi Terlarang:**
   - Dilarang memakai kata promosi klise: *"terbaik"*, *"nomor 1"*, *"terpercaya"*, *"revolusioner"*, *"canggih"*, *"murah meriah"*, *"ajaib"*, *"premium"*, *"presisi"*, *"elevate"*, *"seamless"*, *"crafted"*, *"powerful"*, *"modern"*, atau sejenisnya di teks pelanggan.
   - Dilarang memakai kata *"gratis"* untuk layanan servis atau pengerjaan dasar (seperti pada alur bengkel).
   - Ganti dengan fakta konkret: cantumkan angka, bahan fisik, nama jalan, daftar harga, dan spesifikasi nyata.
3. **Larangan Rekayasa Bukti Sosial Palsu:**
   - Dilarang membuat rating bintang fiktif (misal: "⭐⭐⭐⭐⭐ 4.9/5 dari 1000 ulasan").
   - Dilarang memuat testimoni palsu dengan avatar hasil generator AI. Bukti sosial harus berupa catatan riil, foto produk nyata, atau kutipan jujur.
4. **Larangan Tekanan Psikologis Artifisial (Fake Urgency):**
   - Dilarang memasang penghitung waktu mundur (*fake countdown timer*), pop-up manipulatif ("*5 orang sedang melihat ini*"), atau klaim kelangkaan palsu ("*Sisa 1 slot lagi!*").
5. **Kejujuran Status Konsep (Demo Transparency):**
   - Seluruh website showcase secara transparan mencantumkan catatan bahwa proyek merupakan konsep desain dan teknologi untuk portofolio ENLESWEB. Jika mode demo aktif, pesan WhatsApp menyertakan label penanda demo.

---

### 1.4 Standar Rekayasa Web Universal

1. **Framework & Runtime:**
   - Framework utama: **Astro** (versi 4.x atau 5.x) dengan strategi Zero-JS secara default (*pure HTML/CSS output*).
   - Platform ENLESWEB induk dibangun menggunakan **CSS Murni** dengan scoped styling Astro (tanpa Tailwind CSS).
   - Template konsep tertentu menggunakan Tailwind CSS murni (seperti Jerseay) atau Pure CSS dengan CSS Custom Properties terstruktur.
2. **Aksesibilitas Visual & Kontras (WCAG 2.1 AA):**
   - Rasio kontras teks biasa minimal **4.5:1** terhadap latar belakangnya.
   - Rasio kontras teks besar (bold >= 18px atau regular >= 24px) minimal **3.0:1**.
   - Rasio kontras teks gelap di atas aksen (seperti `--ink` di atas `--accent`) mencapai **>10:1**.
   - Seluruh elemen yang dapat diklik (*tap targets*) memiliki area interaksi minimum **44px × 44px**.
   - Setiap link dan tombol memiliki status visual jelas saat `:focus-visible` (ring outline kontras tanpa menghilangkan garis bantu keyboard).
3. **Aksesibilitas Gerak (Motion Accessibility):**
   - Semua animasi dan transisi CSS wajib dibungkus dalam query `@media (prefers-reduced-motion: reduce)`. Jika pengguna mengaktifkan pengurangan gerak, transisi diubah menjadi instan (`transition: none; animation: none;`).
4. **Optimasi Aset & Performa:**
   - Gambar disajikan dalam format modern (WebP/AVIF) dengan atribut `loading="lazy"`, `decoding="async"`, serta dimensi eksplisit `width` dan `height` untuk mencegah *Cumulative Layout Shift* (CLS).
   - Penggunaan font lokal atau self-hosted (format WOFF2) dengan `font-display: swap`.

---

### 1.5 Arsitektur Konversi WhatsApp & Tracking Terpadu

Setiap titik kontak konversi dihubungkan ke WhatsApp dengan standar implementasi terpusat:

1. **Skema URL:**
   ```
   https://wa.me/{nomor}?text={encodedText}
   ```
2. **Atribut Pelacakan DOM:**
   Setiap tombol atau tautan WhatsApp wajib menyertakan atribut data:
   - `data-cta-location`: mengidentifikasi lokasi spesifik tombol menggunakan format snake_case baku (contoh: `nav`, `hero`, `package_starter`, `floating_wa`).
   - `data-wa-topic`: topik pesan yang dikirimkan.
3. **Integrasi Meta Pixel Terkunci:**
   - Menggunakan event **`AddToCart`** (disertai parameter `value` dan `currency: 'IDR'`) saat tombol WhatsApp diklik, **bukan `Lead` atau `Contact`**, karena pembatasan konfigurasi akun backend Meta Platforms, Inc.
   - Jika Pixel ID kosong atau pengguna menggunakan ekstensi ad-blocker, skrip proteksi memastikan tautan WhatsApp tetap terbuka normal tanpa menimbulkan error pada konsol browser.

---

### 1.6 Infrastruktur & Pipeline Deployment

- **Hosting Produksi Platform Induk:** Cloudflare Pages atau Cloudflare Workers (dengan adapter static `@astrojs/cloudflare`).
- **Hosting Showcase Portofolio:** Vercel Static Hosting.
- **Continuous Integration (CI/CD):**
  - Linting & tipe data: `npm run lint` / `astro check`.
  - Automated testing: Vitest atau unit test internal.
  - Build pipeline: `npm run build` menghasilkan direktori statis `dist/`.

---

# 2. Matriks Komparasi 6 Template Portofolio Konsep

| Parameter | Seruput Kopi | ripeir | tuntas | Jerseay | dipotongin | berflower |
|---|---|---|---|---|---|---|
| **Paket ENLESWEB** | Starter (Rp450rb) | Starter (Rp450rb) | Business (Rp750rb) | Growth (Rp1.2jt) | Growth (Rp1.2jt) | Growth (Rp1.2jt) |
| **Niche Industri** | Kedai Kopi & F&B | Workshop Servis & Reparasi | Bimbel & Les Privat | Studio Jersey Kustom | Barbershop Pria | Florist & Hadiah Konsep |
| **Arsitektur Halaman** | Single-page | Single-page | Multi-page (6 rute + 404) | Multi-page (10 halaman utama + 404) | Multi-page (2 rute + 404) | Multi-page (7 rute + 404) |
| **Live Demo URL** | [seruput-kopi.vercel.app](https://seruput-kopi.vercel.app/) | [ripeir.vercel.app](https://ripeir.vercel.app/) | [tuntas-steel.vercel.app](https://tuntas-steel.vercel.app/) | [jerseay.vercel.app](https://jerseay.vercel.app/) | [dipotongin.vercel.app](https://dipotongin.vercel.app/) | [berflower-lilac.vercel.app](https://berflower-lilac.vercel.app/) |
| **Signature Metaphor** | Rol Struk Kasir Panjang (Potongan Lurus Bersih) | Papan Kerja Bengkel & Nota Servis | Lembar Buku Tulis SiDU (Margin Merah Vertikal) | Kain Dry-fit & Label Kerah Tenun | Kartu Member Kraft (8 Stempel) & Tiket Pangkas | Kertas Sutra Pembungkus & Segel Lilin |
| **Tema Warna** | Merah tomat hero, putih tulang & hitam arang | Deep dark spruce black & oranye sinyal | Kertas putih SiDU & biru tinta pulpen | Monokrom Atelier (Putih terang, hitam, aksen WA) | Putih linen terang & substrat kartu arang | Kertas paper gading, terracotta clay & hijau daun |
| **Token Warna Utama** | `#CE3216`, `#FBF9F5`, `#141414` | `#08100e`, `#E8EBED`, `#FF6B1A` | `#FFFFFF`, `#0F224A`, `#163275`, `#C5221F` | `#FFFFFF`, `#111111`, `#0A0A0A`, `#25D366` | `#F6F5F0`, `#C29F75`, `#121312`, `#1A1A18` | `#F6F0E6`, `#2B2420`, `#9E3F3A`, `#2F4235` |
| **Pasangan Tipografi** | Bricolage Grotesque + Space Mono | IBM Plex Sans Condensed + IBM Plex Sans + Mono | Space Grotesk + Atkinson Hyperlegible | Plus Jakarta Sans + Monospace Teknis (`font-mono`) | Besley + Albert Sans | Fraunces Variable + DM Sans |
| **Fitur Interaktif Khas** | Nota Menu-as-Hero & Etalase Biji (Tanya WA) | 10 Titik Routing Diagnosa Servis 4 Perangkat | Tabel Jadwal/Biaya As-Is & Form Konsultasi | 5-Step Roster Configurator (WCAG & Batch Paste) | Kuis Konsultasi Gaya 1 Menit & Tiket Pangkas | Bouquet Builder Rangkai Sendiri & Persistent Cart |

---

# 3. Spesifikasi Platform Induk (ENLESWEB Main Website)

### 3.1 Product Requirements (PRD)

- **Identitas Platform:** ENLESWEB (`enlesweb.com`): Agensi perancangan website independen berbasis di Indonesia.
- **Tujuan Halaman:** Mengubah pengunjung cold-traffic (khususnya dari Meta Ads) menjadi prospek chat WhatsApp berkualitas tinggi dalam 3 menit pertama.
- **Struktur Halaman Utama (9 Section):**
  1. `Navbar`: Header sticky transparan yang bertransisi ke solid latar saat scroll, navigasi menu, dan tombol CTA utama di desktop. Di layar mobile (< 768px), tombol CTA dihilangkan dari header demi ruang bernapas dan didelegasikan ke Floating WhatsApp.
  2. `#hero`: Pernyataan nilai pembuka (*"Website untuk bisnismu, sudah termasuk domain dan hosting 1 tahun. Mulai Rp450.000"*), penawaran harga transparan, bukti 6 konsep demo, dan CTA primer WhatsApp.
  3. `#paket`: Tiga kolom komparasi paket (Starter Rp450rb, Business Rp750rb, Growth Rp1.200rb) dengan tinggi baris tersinkronisasi sub-pixel, akordeon rincian `<details>` (tertutup default), dan jalur penawaran Custom (Mulai Rp2.000.000).
  4. `#proyek`: Panggung pameran proyek portofolio 16:10 dengan switcher interaktif untuk meninjau 6 konsep website nyata.
  5. `#proses`: Timeline horizontal/akordeon 5 langkah kerja (Pilih Paket, Diskusi Konten, Desain & Coding, Review & Revisi, Peluncuran).
  6. `#tentang`: Filosofi agensi, prinsip kemudahan dan kepastian tanpa kerumitan teknis bagi pemilik usaha, serta kejelasan kepemilikan aset.
  7. `#cta`: Banner penutup sebelum footer yang mengajak konsultasi langsung.
  8. `Footer`: 4 kolom tautan internal, tautan utilitas kebijakan privasi, informasi legal, dan hak cipta.
  9. `Floating WhatsApp`: Tombol aksi mengambang dengan status aktif di sudut kanan bawah.
- **Halaman Utilitas Mandiri:**
  - `/kebijakan-privasi`: Halaman kepatuhan 5 klausul legal ringkas untuk verifikasi kampanye Meta Ads.

---

### 3.2 Desain & Token Visual (DESIGN)

#### 3.2.1 Filosofi Visual
Desain ENLESWEB mengusung gaya **Engineered Utility**. Bersih, kontras tinggi, fungsional tanpa ornamen dekoratif yang memperlambat render halaman.

#### 3.2.2 Token Desain (CSS Custom Properties Terkunci)
```css
:root {
  /* Kanvas & Tinta Resmi ENLESWEB */
  --accent: #E4FF30;           /* LOCKED: Satu-satunya warna aksen (kuning-hijau terang) */
  --ink: #111111;              /* DEFAULT: Teks utama, garis tegas */
  --ink-muted: #55554F;        /* DEFAULT: Teks sekunder, label pembantu */
  --canvas: #FFFFFF;           /* LOCKED: Latar halaman putih bersih */
  --surface: #F5F5F2;          /* DEFAULT: Latar placeholder visual proyek, kartu proses */
  --line: #E5E5DF;             /* DEFAULT: Garis pemisah tipis */
  --neutral-object: #D1D1CB;   /* DEFAULT: Potongan netral komposisi objek hero */

  /* Tipografi Resmi */
  --font-sans: 'Poppins', system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;

  /* Radius Resmi */
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 14px;
}
```

#### 3.2.3 Engineered Tactile Button Affordance (Borderless 3D Shelf)
Tombol aksi ENLESWEB menghindari efek blur drop-shadow standar. Tombol menggunakan konstruksi shelf fisik tanpa border:
- **Default State:** Latar `--accent` (`#E4FF30`), teks `--ink` (`#111111`), tanpa border (`border: none`), box-shadow `0 3px 0 #A3C400, inset 0 1px 0 rgba(255, 255, 255, 0.6)`.
- **Hover/Focus State:** Inversi kontras menjadi latar `--ink` (`#111111`) dengan teks `--accent` (`#E4FF30`), shelf bawah 3px `#000000` (`box-shadow: 0 3px 0 #000000`).
- **Active State:** Depresi fisik 2px (`transform: translateY(2px)`), shelf bawah menipis menjadi `0 1px 0 #A3C400`.

#### 3.2.4 Navbar Transparan & Ambient Bleed
- Posisi `fixed` di `top: 0`, `z-index: 100`, tinggi 64px (mobile) / 72px (desktop).
- Memulai render transparan (`background: transparent`, `border-color: transparent`). Area Hero menerapkan margin negatif (`-64px` / `-72px`) sehingga gradasi aksen mengalir di balik navbar.
- Skrip mendeteksi scroll window > 8px atau saat menu mobile drawer dibuka: kelas CSS `.is-scrolled` diterapkan untuk mengubah latar menjadi solid `--canvas` dengan garis batas `1px solid var(--line)`.

---

### 3.3 Salinan Konten & Titik Sentuh WhatsApp (CONTENT)

#### 3.3.1 Matriks 9 Titik Sentuh Pesan WhatsApp Otomatis (Format Seragam)
Seluruh tombol WhatsApp pada website induk memanggil generator tautan terpusat dengan nomor default `6285156801570`. Format pesan seragam: `Halo ENLESWEB, saya mau tanya tentang {topik}.`

| ID Titik Sentuh (`data-cta-location`) | Topik Pesan (`data-wa-topic`) | Teks Pesan Otomatis Terisi |
|---|---|---|
| `nav` | `pembuatan website` | `Halo ENLESWEB, saya mau tanya tentang pembuatan website.` |
| `hero` | `pembuatan website` | `Halo ENLESWEB, saya mau tanya tentang pembuatan website.` |
| `package_starter` | `paket Starter` | `Halo ENLESWEB, saya mau tanya tentang paket Starter.` |
| `package_business` | `paket Business` | `Halo ENLESWEB, saya mau tanya tentang paket Business.` |
| `package_growth` | `paket Growth` | `Halo ENLESWEB, saya mau tanya tentang paket Growth.` |
| `package_custom` | `paket Custom` | `Halo ENLESWEB, saya mau tanya tentang paket Custom.` |
| `final_cta` | `pembuatan website` | `Halo ENLESWEB, saya mau tanya tentang pembuatan website.` |
| `footer` | `pembuatan website` | `Halo ENLESWEB, saya mau tanya tentang pembuatan website.` |
| `floating_wa` | `pembuatan website` | `Halo ENLESWEB, saya mau tanya tentang pembuatan website.` |

*(Catatan: Tombol sekunder di Hero `[Lihat Paket]` berupa anchor scroll langsung ke `#paket`).*

#### 3.3.2 Klausul Resmi Halaman Kebijakan Privasi (`/kebijakan-privasi`)
1. **Pendahuluan:** ENLESWEB menghormati privasi pengunjung. Dokumen ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda saat mengunjungi situs ini.
2. **Data yang Kami Kumpulkan:**
   - *Data yang Anda berikan:* Nama, nomor telepon, atau pesan saat menghubungi kami via WhatsApp atau tautan kontak.
   - *Data teknis otomatis:* Alamat IP, jenis peramban, resolusi layar, dan interaksi dasar dengan halaman via cookie atau Meta Pixel.
3. **Penggunaan Informasi:** Memproses permintaan konsultasi pembuatan website, menyusun penawaran paket, dan mengoptimalkan efektivitas kampanye promosi (tanpa memperjualbelikan data ke pihak ketiga).
4. **Cookie dan Meta Pixel:** Kami menggunakan Meta Pixel untuk mengukur konversi kampanye iklan. Anda dapat mengelola preferensi cookie melalui pengaturan peramban Anda.
5. **Hak Pengguna dan Kontak Resmi:** Anda berhak menanyakan data atau meminta penghapusan riwayat percakapan dan kontak kapan saja via WhatsApp `+6285156801570` atau Instagram `@enlesweb`.

---

### 3.4 Arsitektur Teknis & Skrip Klien (SPEC)

#### 3.4.1 Struktur Direktori Proyek Aktual (Pure CSS, Tanpa Tailwind)
```
enlesweb-master/
├── public/
│   ├── favicon.svg
│   ├── og-image.png
│   └── robots.txt
├── src/
│   ├── config/
│   │   └── site.ts           # Konfigurasi bisnis terpusat (nomor WA, URL demo, Pixel)
│   ├── content/
│   │   └── copy.ts           # Seluruh salinan teks landing page terpusat
│   ├── lib/
│   │   └── whatsapp.ts       # Generator URL wa.me dan sanitasi parameter
│   ├── styles/
│   │   └── global.css        # CSS murni dengan custom properties & scoped styling
│   ├── layouts/
│   │   └── Base.astro        # Layout induk HTML5, meta SEO, script Meta Pixel
│   ├── components/
│   │   ├── Navbar.astro      # Sticky translucent navbar + mobile drawer (3 anchor link)
│   │   ├── Hero.astro        # Hero section + value proposition badges
│   │   ├── HeroObject.astro  # Komposisi visual modular SVG hero desktop
│   │   ├── Packages.astro    # Section pembungkus paket komersial
│   │   ├── PackageColumn.astro # Kolom komparasi paket dengan sync sub-pixel
│   │   ├── CustomPackage.astro  # Jalur penawaran khusus di luar Growth
│   │   ├── Projects.astro    # Stage switcher 16:10 untuk 6 proyek portofolio
│   │   ├── ProjectItem.astro # Kartu proyek portofolio ringkas
│   │   ├── Process.astro     # Akordeon timeline 5 langkah kerja
│   │   ├── About.astro       # Penjelasan filosofi zero-bloat
│   │   ├── FinalCta.astro    # Closing call to action
│   │   ├── Footer.astro      # 4 kolom tautan + legal footer
│   │   ├── WhatsAppButton.astro # Komponen tombol taktil WhatsApp
│   │   └── FloatingWhatsApp.astro # Tombol mengambang sudut kanan bawah
│   └── pages/
│       ├── index.astro       # Landing page utama
│       └── kebijakan-privasi.astro # Halaman privasi statis
├── astro.config.mjs
└── package.json
```

---

# 4. Spesifikasi Template Paket Starter

---

## 4.1 Seruput Kopi (Kedai Kopi & F&B)

### 4.1.1 PRD & Batasan Starter
- **Konsep:** Kedai kopi lokal artisan dengan fasilitas sangrai biji kopi dadakan dan suasana ruang singgah yang nyaman.
- **Tujuan Halaman:** Menghadirkan rasa kehangatan kedai fisik, menampilkan racikan menu seduhan secara transparan, memamerkan varietas biji kopi sangrai, dan memfasilitasi pesanan pesan-antar via WhatsApp.
- **Batasan Starter & Anti-Slop (LOCKED):** **Website TIDAK menampilkan angka harga nominal eksplisit**. Seluruh harga dan stok harian diarahkan untuk ditanyakan langsung via WhatsApp (`"Harga & stok harian: Tanya via WhatsApp"`). Tidak menyediakan sistem reservasi meja otomatis.

### 4.1.2 Desain: Signature Rol Struk Kasir & Token
- **Signature Physical Metaphor:** Rol Struk Kasir Kertas Thermal Putih Bersih (*Menu-as-Hero*). Pada area Hero, menu disajikan dalam kontainer rol struk thermal dengan **potongan atas-bawah lurus rapi (*straight-cut thermal receipt roll*), tanpa efek zigzag/gerigi kartun**.
- **Token Desain Resmi (Palet P1 Terkunci):**
  ```css
  --canvas-hero: #CE3216;       /* Merah tomat jenuh tegas untuk hero */
  --canvas: #FBF9F5;            /* Putih tulang hangat untuk kanvas utama */
  --surface-receipt: #FFFFFF;   /* Kertas thermal struk kasir */
  --ink: #141414;               /* Hitam arang tegas */
  --ink-muted: #555555;
  --line: #E2DDD5;
  --line-receipt: #D0CBC2;      /* Garis pemisah struk */
  --accent: #CE3216;            /* Merah tomat jenuh untuk stempel */
  --accent-hover: #AF250D;
  --wa: #25D366;
  ```
- **Tipografi:** Display & Body: `'Bricolage Grotesque'`; Monospace Struk: `'Space Mono'`.

### 4.1.3 Salinan Konten & Alur WhatsApp
- **11 Racikan Menu Resmi Terkunci (Tanpa Nominal Rupiah):**
  1. *Kopi Espresso & Susu:* `Es Kopi Susu Seruput`, `Espresso Solo / Doppio`, `Americano Dingin / Panas`, `Flat White / Latte`.
  2. *Seduhan Filter Manual:* `Manual Brew V60`, `Japanese Ice Drip`.
  3. *Minuman Non-Kopi:* `Cokelat Klasik Panas / Dingin`, `Matcha Latte`, `Teh Melati Dingin`.
  4. *Kudapan Hangat:* `Roti Panggang Mentega`, `Pisang Goreng Madu`.
- **3 Varietas Profil Biji Kopi Sangrai Resmi (Kemasan 200 gram):**
  1. *Aceh Gayo Pantan Musara:* Aceh Tengah, 1.500-1.650 mdpl, Anaerobic Natural, Sangrai Ringan, Tasting notes: Melati, Blackcurrant, Madu Hutan.
  2. *Bali Kintamani Ulian:* Kintamani Bali, 1.200-1.350 mdpl, Full Washed, Sangrai Sedang, Tasting notes: Jeruk Manis, Gula Palem, Teh Hitam.
  3. *Toraja Sapan Misliana:* Toraja Utara, 1.600-1.800 mdpl, Semi Washed, Sangrai Sedang, Tasting notes: Cokelat Hitam, Rempah Hangat, Kayu Manis.
- **Template Pesan WhatsApp Resmi:**
  - Demo: `Halo ENLESWEB, saya ingin bertanya tentang contoh website kedai kopi Seruput Kopi.`
  - Mode Toko: `Halo Seruput Kopi, saya ingin bertanya tentang menu dan harga hari ini.` / `Halo Seruput Kopi, saya ingin bertanya tentang stok biji kopi sangrai {nama_biji}.`

---

## 4.2 ripeir (Workshop Perbaikan & Reparasi)

### 4.2.1 PRD & Alur Pelanggan
- **Konsep:** Workshop teknisi profesional untuk reparasi perangkat elektronik harian.
- **Empat Kategori Perangkat Terkunci (LOCKED):** `laptop`, `komputer`, `handphone`, `tablet`. (Tidak melayani perangkat audio/headphone).
- **Status OPEN:** Situs sengaja tidak mencantumkan daftar harga kaku, klaim garansi tertulis, atau durasi pengerjaan pasti karena memerlukan diagnosa fisik terlebih dahulu.
- **Larangan Anti-Slop:** Dilarang keras menggunakan kata *"gratis"* (misalnya "diagnosa gratis"). Empat langkah alur servis resmi:
  1. `01 Cerita di WhatsApp`
  2. `02 Bawa atau kirim`
  3. `03 Cek dan estimasi biaya`
  4. `04 Pengerjaan dan selesai`

### 4.2.2 Desain: Industrial Workshop Dark Theme & Token
- **Signature Physical Metaphor:** Papan Kerja Bengkel (*Toolbox Pegboard*) & Tag Servis Fisik.
- **Token Desain Resmi (Tema Gelap Tunggal):**
  ```css
  --bg: #08100e;            /* Deep dark spruce black */
  --bg-raised: #101c18;     /* Latar kartu layanan, final CTA */
  --bg-sunken: #050a08;     /* Latar footer */
  --line: #1c2b26;          /* Garis pemisah standar 1px */
  --line-strong: #2c4038;
  --grid: #12221d;
  --text: #E8EBED;          /* Teks terang kontras tinggi */
  --text-muted: #98A2AB;
  --accent: #FF6B1A;        /* Oranye sinyal teknis */
  --accent-hover: #FF8540;
  --accent-active: #E85A0E;
  ```
- **Tipografi Superfamily IBM Plex:**
  - Judul (H1, H2, H3): `IBM Plex Sans Condensed` (600, 700)
  - Teks Isi & Tombol: `IBM Plex Sans` (400, 500, 600)
  - Nomor Urut (`01`-`04`), WA & Label: `IBM Plex Mono` (500)

### 4.2.3 Salinan Konten & 10 Titik Sentuh WhatsApp Resmi
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

---

# 5. Spesifikasi Template Paket Business

---

## 5.1 tuntas (Bimbel Kelompok Kecil & Les Privat)

### 5.1.1 PRD & Rute Multi-Halaman
- **Konsep:** Lembaga bimbingan belajar kurikulum nasional (SD, SMP, SMA) berformat kelompok kecil (maksimal 5 siswa) dan les privat 1-on-1.
- **Arsitektur Rute (6 Halaman Utama + 404):**
  1. `/`: Beranda utama dengan jadwal dan komparasi format belajar.
  2. `/program`: Rincian kurikulum tingkat SD, SMP, SMA, dan persiapan asesmen.
  3. `/jadwal-biaya`: Tabel jadwal harian kelompok kecil dan matriks biaya transparan per jenjang.
  4. `/cara-belajar`: Penjelasan metode 4 langkah (Pemetaan Awal, Bedah Konsep Dasar, Latihan Bertingkat, Evaluasi Bulanan).
  5. `/tentang`: Profil pengajar, filosofi belajar mandiri, dan transparansi ruang kelas.
  6. `/kontak`: Alamat studio belajar, embed peta, formulir kontak pra-registrasi.
  7. `/404`: Halaman 404 bertema lembar buku tulis kosong.

### 5.1.2 Desain: Signature Lembar SiDU & Token
- **Signature Physical Metaphor:** Lembar Buku Tulis Bergaris Klasik SiDU (*Sinar Dunia*). Garis margin merah vertikal khas di sisi kiri kontainer konten utama (`--correction-subtle`), kisi garis tipis berulang 32px (`--line-ruled`), dan tombol cap stempel tinta (`--accent`).
- **Token Desain Resmi:**
  ```css
  --canvas: #FFFFFF;                  /* Kertas putih bersih SiDU */
  --surface: #FFFFFF;
  --ink: #0F224A;                     /* Biru tinta pulpen gelap */
  --ink-muted: #3E4D68;
  --line: #D0DBEC;
  --line-ruled: rgba(20, 45, 120, 0.08); /* Kisi garis buku SiDU berulang 32px */
  --line-ruled-solid: #ECEEF4;
  --tint: #F2F6FC;
  --accent: #163275;                  /* Tombol stempel utama */
  --accent-hover: #0D1F4D;
  --correction: #C5221F;              /* Merah koreksi guru */
  --correction-subtle: #FCA5A5;       /* Garis margin merah vertikal kiri */
  --wa: #25D366;
  ```
- **Tipografi:** Display / Headings: `'Space Grotesk'` (700 Bold); Body & Tabel: `'Atkinson Hyperlegible'` (400, 700).

### 5.1.3 Salinan Konten, Biaya & Jadwal As-Is
- **Matriks Biaya Resmi:**
  - *SD (Kelas 4-6):* Kelompok kecil **Rp300.000**/bulan | Privat **Rp90.000**/pertemuan.
  - *SMP (Kelas 7-9):* Kelompok kecil **Rp350.000**/bulan | Privat **Rp100.000**/pertemuan.
  - *SMA (Kelas 10-12):* Kelompok kecil **Rp400.000**/bulan | Privat **Rp120.000**/pertemuan.
  - *Ketentuan:* Kelompok kecil 8 sesi/bulan (90 mnt/sesi). Les privat 60 mnt/sesi. Biaya pendaftaran **Rp50.000** dibayar satu kali (`REGISTRATION_FEE = 50000`).
- **Jadwal Kelompok Kecil Terkunci:**
  - SD A: Senin & Kamis (15.30 - 17.00) | SD B: Selasa & Jumat (15.30 - 17.00)
  - SMP A: Senin & Kamis (17.30 - 19.00) | SMP B: Selasa & Jumat (17.30 - 19.00)
  - SMA A: Senin & Kamis (19.00 - 20.30) | SMA B: Selasa & Jumat (19.00 - 20.30)
  - Les Privat: Fleksibel Senin sampai Sabtu (14.00 - 21.00).
- **12 Titik WhatsApp Resmi (`data-cta-location`):**
  1. `nav`: `pendaftaran bimbel`
  2. `floating_wa`: dinamis per halaman
  3. `hero`: `pendaftaran bimbel`
  4. `program_sd`: `program SD`
  5. `program_smp`: `program SMP`
  6. `program_sma`: `program SMA`
  7. `jadwal_biaya`: `jadwal dan biaya`
  8. `cara_belajar`: `cara belajar`
  9. `contact`: `pendaftaran bimbel`
  10. `form`: `form kontak`
  11. `final_cta`: `program belajar`
  12. `footer`: `pendaftaran bimbel`

---

# 6. Spesifikasi Template Paket Growth

---

## 6.1 Jerseay (Studio Jersey & Apparel Olahraga Kustom)

### 6.1.1 PRD & Corong Konversi
- **Konsep:** Studio perancangan dan manufaktur jersey olahraga kustom (futsal, sepak bola, basket, lari, esports).
- **Total Rute (10 Halaman Utama + 404):**
  - *6 Halaman Statis:* `/` (Beranda), `/proyek` (Arsip Portofolio), `/layanan` (Spesialisasi 5 Cabang), `/proses` (Alur Kerja Studio), `/rancang` (Konfigurator & Roster), `/mulai-brief` (Formulir Brief Adaptif).
  - *4 Halaman Proyek Dinamis (`/proyek/[project]`):* `futsal-liga-surabaya`, `sepeda-bandung-barat`, `esports-turnamen-nasional`, `basket-jakarta-selatan`.
  - *1 Halaman Utilitas:* `/404`.

### 6.1.2 Desain: Monochrome Atelier & Monospace Teknis
- **Signature Physical Metaphor:** Kain Dry-fit Berpori, Label Kerah Tenun (*Woven Neck Label*), dan Papan Taktik Tim.
- **Sistem Warna Resmi (Monochrome Atelier Berbasis Tailwind CSS):**
  - Latar Kanvas Utama: `white` (`#FFFFFF`) (Halaman berlatar putih bersih, bukan gelap).
  - Latar Banner Sinematik: `black-950` (`#0A0A0A`).
  - Judul & Tombol Utama: `black-900` (`#111111`), hover `black-800` (`#1A1A1A`).
  - Teks Body: `gray-700` (`#404040`), `gray-600` (`#595959`).
  - Garis Pembatas: `gray-200` (`#E5E5E5`), `gray-300` (`#D4D4D4`).
  - Aksen Fungsional: `whatsapp-green` (`#25D366`), `status-pass` (`#15803d`), `status-warn` (`#b45309`), `status-fail` (`#b91c1c`).
  *(Catatan: Volt lime `#D4FF00` hanyalah warna preset proyek tim esport `VTX-PRO`, bukan warna aksen tema global studio).*
- **Tipografi:** Heading & Body: `Plus Jakarta Sans`; Nomor, Kode & Data Teknis: Monospace Teknis (`font-mono`).

### 6.1.3 Modul Kustom: Kit Configurator & Roster Builder (`/rancang`)
- **Alur 5 Langkah Konfigurator Asli (Tanpa Hitungan Rupiah):**
  1. *Langkah 1: Dasar:* Nama Tim, Cabang Olahraga, Siluet Kerah/Potongan, Celana Tanding, Varian Kit (Kandang/Tandang/Kiper).
  2. *Langkah 2: Warna & Pola:* ColorPicker dengan kalkulator kontras WCAG otomatis, PatternPicker 5 pola geometris & intensitas.
  3. *Langkah 3: Nama, Nomor & Logo:* Gaya huruf (Tegas/Teknis), nomor dada, LogoZones 6 titik penempatan sponsor.
  4. *Langkah 4: Roster Pemain:* RosterTable (maksimal 40 pemain, validasi duplikat nomor punggung). Fitur Batch Paste mendukung pemisah koma, tab, titik koma, atau pipa (`name, number, size`).
  5. *Langkah 5: Ringkasan & Keluaran:* SummaryPanel, ekspor CSV UTF-8 BOM, dan generator pesan WhatsApp URL-safe.
- **Format Pesan WhatsApp Hasil Konfigurator:**
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

## 6.2 dipotongin (Barbershop Pria & Grooming)

### 6.2.1 PRD & Layout B Editorial Dua Kolom
- **Konsep:** Studio pangkas rambut pria kontemporer bergaya kriya cetak letterpress.
- **Format Layout B:** Beranda menampilkan kartu member loyalitas di sisi kiri dan papan tarif resmi di sisi kanan, serta halaman mandiri `/konsultasi`.

### 6.2.2 Desain: Karakter Kriya Cetak Letterpress & Kartu Member Arang
- **Signature Physical Metaphor:** Kartu Member Loyalitas Fisik (8 Stempel Pangkas) dan Tiket Pangkas Fisik Resmi.
- **Token Desain Resmi:**
  ```css
  --canvas: #F6F5F0;          /* Putih Kapur / Linen Terang (Kanvas Utama Halaman) */
  --canvas-accent: #C29F75;   /* Cokelat Kraft Plakat */
  --surface: #FFFFFF;
  --ink: #121312;             /* Teks hitam pekat */
  --muted: #5A5C58;
  --line: #D6D4CC;
  --card-bg: #1A1A18;         /* Substrat fisik kartu member loyalitas arang gelap */
  --card-border: #C29F75;     /* Emas antik bingkai kartu member */
  --card-stamp-bg: #282824;
  --card-reward: #C29F75;
  --card-kraft: #C29F75;
  --card-ink: #141412;
  --focus: #C29F75;
  ```
  *(Catatan: Halaman web berlatar putih linen terang `#F6F5F0`. Hanya substrat kartu member yang berlatar gelap `#1A1A18`).*
- **Tipografi:** Headings & Wordmark: `'Besley', Georgia, serif`; Body & Label: `'Albert Sans', sans-serif`.

### 6.2.3 Modul Kustom: Kuis Konsultasi Gaya Rambut 1 Menit & Tiket Pangkas
- Halaman `/konsultasi` menyediakan modul 3 langkah (Bentuk Wajah, Jenis Rambut, Rutinitas Styling Harian).
- Menghasilkan rekomendasi gaya deterministik dan Tiket Pangkas Digital dengan tombol kirim ke WhatsApp:
  `Halo studio dipotongin, saya telah menyelesaikan Kuis Konsultasi Gaya Rambut di website dengan rekomendasi: *[Nama Model]* (Paket: *[Paket Resmi]*). Saya ingin menanyakan ketersediaan bangku pangkas.`

### 6.2.4 Salinan Konten: 8 Paket Tarif Layanan Terkunci
1. *Potong Rambut Reguler:* **Rp40.000** (45 menit)
2. *Potong Rambut Anak:* **Rp35.000** (30 menit)
3. *Taper dan Fade Bersih:* **Rp50.000** (40 menit)
4. *Rapikan Jenggot dan Kumis:* **Rp25.000** (25 menit)
5. *Cukur Habis Kepala:* **Rp35.000** (35 menit)
6. *Rapikan Samping dan Tengkuk:* **Rp20.000** (20 menit)
7. *Pangkas Komplit Handuk Hangat:* **Rp75.000** (60 menit, Lencana: `Paket Lengkap`)
8. *Cuci dan Segarkan Kepala:* **Rp30.000** (25 menit)
*(Tidak ada layanan pewarnaan, bleaching, atau hair spa).*

---

## 6.3 berflower (Florist & Toko Hadiah Konsep Venice)

### 6.3.1 PRD & 7 Halaman Terpadu
- **Konsep:** Butik bunga artistik dan bingkisan kurasi konsep berbasis di Venice, Italia.
- **Arsitektur Rute (7 Halaman Utama + 404):** `/` (Beranda), `/koleksi`, `/hadiah`, `/rangkai-buket`, `/keranjang`, `/cara-pesan`, `/kontak`, `/404`.

### 6.3.2 Desain: Botani Puitis, Kertas Sutra & Token
- **Signature Physical Metaphor:** Kertas Pembungkus Bunga Sutra Bertekstur dan Kartu Ucapan Segel Lilin Timbal.
- **Token Desain Resmi (`src/styles/global.css`):**
  ```css
  --paper: #F6F0E6;          /* Latar halaman utama */
  --paper-deep: #EDE3D2;     /* Blok warna CTA, summary checkout, badge */
  --paper-light: #FCF9F4;    /* Input form & pratinjau kartu */
  --ink: #2B2420;            /* Teks utama arang */
  --ink-muted: #6B5E55;
  --line: #D9CDB9;           /* Garis tipis 1px */
  --clay: #9E3F3A;           /* Aksen tombol utama, tab aktif, error form */
  --leaf: #2F4235;           /* Latar khusus footer */
  --leaf-text: #CFC6B3;      /* Teks di atas footer */
  ```
- **Tipografi:** Judul, Angka Besar & Nama Produk: **Fraunces Variable**; Teks Isi, Tombol & Form: **DM Sans**.

### 6.3.3 Modul Kustom: Rangkai Buket Interaktif (`/rangkai-buket`)
- **Komponen Bahan Baku & Harga Terkunci:**
  1. *Bunga Utama:* Mawar merah (Rp20.000/tangkai), Bunga matahari (Rp25.000/tangkai), Tulip (Rp35.000/tangkai), Peony (Rp50.000/tangkai).
  2. *Bunga Pelengkap:* Baby's breath (Rp15.000/ikat), Eucalyptus (Rp12.000/ikat), Statice (Rp10.000/ikat).
  3. *Kertas Pembungkus:* Krem `#F6F0E6` (Rp10.000), Merah muda `#E8C6C4` (Rp15.000), Kertas kraft `#C9A878` (Rp12.000).
  4. *Pita:* Krem (Rp5.000), Merah muda (Rp5.000), Hijau (Rp5.000).
  5. *Komposisi Default:* 1 Mawar merah, kertas Krem, pita Krem (Estimasi: Rp35.000).
  6. *Editor Kartu Ucapan:* Untuk (80 char), Dari (80 char), Pesan (150 char), Gaya tulisan (Serif, Serif miring, Sans).

### 6.3.4 Salinan Konten, Katalog Produk & Payload WhatsApp
- **7 Produk Katalog Resmi (`/koleksi`):**
  1. Buket Mawar Merah Muda (Rp185.000)
  2. Buket Gerbera Kuning (Rp150.000)
  3. Buket Lily Putih (Rp240.000)
  4. Bunga Meja Krisan (Rp175.000)
  5. Bunga Meja Campur (Rp225.000)
  6. Papan Bunga Ucapan Selamat (Rp650.000)
  7. Papan Bunga Duka Cita (Rp600.000)
- **3 Paket Hadiah Resmi (`/hadiah`):**
  1. Buket dan Cokelat (Rp275.000)
  2. Buket Wisuda (Rp225.000)
  3. Hampers Bunga (Rp320.000)
  - *Tambahan Add-on:* Boneka wisuda kecil (Rp50.000), Cokelat batang (Rp30.000).
- **Persistent Cart Store:** Menggunakan `@nanostores/persistent` dengan key atom `'berflower_cart_v1'`.
- **Payload Pesan WhatsApp Checkout Keranjang (Demo Mode):**
  ```text
  Halo ENLESWEB, saya mencoba form pesanan di contoh website berflower.

  Nama: {nama}
  Acara: {acara}
  Tanggal dibutuhkan: {tanggal format id-ID}
  Cara terima: {terima}

  Detail pesanan:
  1. {nama item} x{kuantitas} - {subtotal}
     - {rincian buket: Bunga utama, Pelengkap, Kertas, Pita}
     Kartu ucapan:
     Untuk: {to}
     Dari: {from}
     Pesan: "{message}"

  Subtotal estimasi: {subtotal}

  Saya mau tanya tentang pembuatan website seperti ini.
  ```

---

# 7. QA Terpadu & Panduan Deployment

### 7.1 Checklist Verifikasi Kualitas Lintas Proyek

#### 1. Validasi Kode & Tipe Data
- [ ] Eksekusi `npm run build` berhasil tanpa pesan kesalahan (*zero errors, zero unhandled rejections*).
- [ ] Pemeriksaan tipe data TypeScript (`astro check` atau `tsc --noEmit`) bersih 100%.
- [ ] Tidak ada berkas impor atau aset gambar yang menghasilkan kode status 404 pada konsol developer peramban.

#### 2. Kepatuhan Aksesibilitas & Tipografi (Anti-Slop)
- [ ] Seluruh teks antarmuka publik bebas 100% dari karakter em dash (`—`).
- [ ] Rasio kontras teks memenuhi standar WCAG AA (minimal 4.5:1 untuk teks normal, minimal 3.0:1 untuk teks besar).
- [ ] Seluruh tombol, field input, dan tautan memiliki target sentuh fisik minimum 44px × 44px.
- [ ] Seluruh animasi CSS dinonaktifkan ketika preferensi pengguna `prefers-reduced-motion: reduce` aktif.
- [ ] Tautan navigasi loncat (*Skip to content link*) tersedia di awal elemen `<body>` dan dapat difokuskan via tab keyboard.

#### 3. Alur Konversi & Sanitasi Parameter WhatsApp
- [ ] Semua tombol CTA WhatsApp menggunakan protokol `https://wa.me/{nomor}?text={encodedText}`.
- [ ] Nomor WhatsApp telah terkonfigurasi dengan format internasional yang valid tanpa tanda plus, tanda hubung, atau spasi (contoh: `6285156801570`).
- [ ] Parameter teks WhatsApp telah melalui proses `encodeURIComponent()` dengan benar tanpa karakter aneh atau terpotong.
- [ ] Setiap tombol konversi memuat atribut analitik `data-cta-location` dan `data-wa-topic`.
- [ ] Mode Demo (`site.demoMode`): Jika bernilai `true`, pesan WhatsApp menyertakan label penanda demo; jika `false`, pesan beralih ke format transaksi studio komersial.

#### 4. Kepatuhan SEO & Metadata
- [ ] Setiap halaman memiliki elemen `<title>` unik dengan panjang 40-60 karakter dan `<meta name="description">` informatif sepanjang 120-160 karakter.
- [ ] Tag Open Graph (`og:title`, `og:description`, `og:image`, `og:url`) dan Twitter Card terkonfigurasi lengkap.
- [ ] Berkas `public/robots.txt` dan sitemap XML otomatis (`sitemap-index.xml`) aktif dan merujuk domain kanonikal yang valid.

---

### 7.2 Prosedur Rilis Cloudflare & Vercel

#### Pipeline Cloudflare Pages / Workers (Website Induk ENLESWEB):
1. Hubungkan repositori GitHub ke Cloudflare Pages atau Workers.
2. Tetapkan konfigurasi kompilasi:
   - **Framework Preset:** `Astro`
   - **Build Command:** `npm run build`
   - **Build Output Directory:** `dist`
   - **Node.js Version:** `>= 18.17.0`
3. Tambahkan environment variable produksi di Cloudflare Dashboard jika diperlukan:
   - `PUBLIC_WHATSAPP_NUMBER`: Nomor resmi WhatsApp agensi.
   - `PUBLIC_META_PIXEL_ID`: ID Meta Pixel untuk tracking kampanye iklan berbayar (event `AddToCart`).
4. Hubungkan domain kanonikal utama (`enlesweb.com`) yang telah resmi dibeli (Decision 018) melalui menu DNS Cloudflare dengan status *Proxied*.

#### Pipeline Vercel (Showcase Portofolio Konsep):
1. Import repositori template konsep ke tim/akun Vercel.
2. Tetapkan Framework Preset ke `Astro`.
3. Biarkan Build Command default (`astro build`) dan Output Directory (`dist`).
4. Pastikan opsi *Automatic Deployments* aktif untuk branch `main`.
5. Uji coba seluruh tautan demo dari switcher panggung ENLESWEB (`https://enlesweb.com/#proyek`) ke masing-masing subdomain Vercel yang telah diverifikasi aktif.
