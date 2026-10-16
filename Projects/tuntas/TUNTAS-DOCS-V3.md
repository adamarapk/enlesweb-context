# TUNTAS DOKUMENTASI UTAMA V3 (TUNTAS-DOCS-V3)

Tanggal Pembaruan: 14 Oktober 2026
Sumber Konsolidasi: PRD.md, CONTENT.md, DESIGN.md, SPEC.md
Status Sistem: Production & Launch-Ready Implementation (As-Is Built Website)
Prinsip Desain: Arketipe H4 Index/Table Hero, Metafora Lembar Buku Tulis SiDU & Ledger Administrasi Bimbel

---

## DAFTAR ISI (TABLE OF CONTENTS)

1. **DOKUMEN 1: PRD.md (Product Requirements Document)**
   - 1.1 Konteks Produk
   - 1.2 Tujuan Website (Lapis Demo ENLESWEB & Lapis Konsep Bimbel)
   - 1.3 Sasaran Audiens & Persona
   - 1.4 Penawaran Layanan (3 Jenjang, 2 Format, Aturan Operasional)
   - 1.5 Pemetaan Fitur Paket Business
   - 1.6 Ruang Lingkup Halaman (6 Halaman Utama + 404 & Elemen Global)
   - 1.7 Batasan Sistem (Guarantees & Constraints)

2. **DOKUMEN 2: CONTENT.md (As-Is Website Copy Specification)**
   - 2.1 Aturan Keras Copywriting
   - 2.2 Meta Halaman (Title & Description)
   - 2.3 Navbar dan Skip Link
   - 2.4 Beranda (Hero, Program Belajar, Dua Format Belajar, Cara Belajar Ringkas, Final CTA)
   - 2.5 Halaman Program (/program)
   - 2.6 Halaman Jadwal dan Biaya (/jadwal-biaya)
   - 2.7 Halaman Cara Belajar (/cara-belajar)
   - 2.8 Halaman Tentang dan Lokasi (/tentang)
   - 2.9 Halaman Kontak (/kontak)
   - 2.10 Footer dan Floating WhatsApp
   - 2.11 Format Pesan WhatsApp (Mode Demo vs Mode Studio Bimbel Asli)
   - 2.12 Tabel 12 Titik Sentuh WhatsApp (data-cta-location)
   - 2.13 Halaman 404

3. **DOKUMEN 3: DESIGN.md (As-Is Visual and Design Specification)**
   - 3.1 Karakter Visual dan Arah Desain
   - 3.2 Pembeda Visual Terhadap Proyek Lain di Ledger ENLESWEB
   - 3.3 Token Desain (Palet Warna Buku Tulis SiDU & Tinta)
   - 3.4 Tipografi & Kalibrasi Baseline Hero
   - 3.5 Radius Sudut dan Batasan Bayangan
   - 3.6 Komponen Antarmuka Utama (Lembar Kertas, Margin Guide & Perforasi Sel, Tombol Stempel, Master Schedule Table, Header Navigasi, Footer, Floating WA)
   - 3.7 Spesifikasi Responsif dan Breakpoints

4. **DOKUMEN 4: SPEC.md (As-Is Technical Architecture and Implementation Specification)**
   - 4.1 Stack Teknologi & Perintah NPM
   - 4.2 Struktur Berkas Repositori
   - 4.3 Rincian Modul Data dan Lib (config/site, data/fees, data/schedule, lib/whatsapp, lib/format)
   - 4.4 Implementasi Layout dan Komponen Kunci (Base.astro, Hero.astro, Navbar.astro, ContactForm.astro, FloatingWhatsApp.astro, dsb)
   - 4.5 Rangkaian Verifikasi Kualitas Otomatis (13 Aturan verify.mjs & slop-lint.mjs)

---

# BAGIAN 1: PRD.md (Product Requirements Document)

## 1.1 Konteks Produk
tuntas adalah konsep website untuk bimbingan belajar (bimbel) kelompok kecil dan les privat jenjang SD, SMP, dan SMA. Dibuat oleh ENLESWEB sebagai contoh paket Business. tuntas bukan klien komersial nyata, bukan bimbel yang sedang beroperasi secara fisik, dan tidak digunakan sebagai bukti sosial palsu.

### Fungsi bagi ENLESWEB:
- **Showcase Paket Business:** Berfungsi sebagai demo resmi paket Business pada galeri proyek homepage ENLESWEB, mendampingi demo Starter dan Growth (seperti Jerseay, berflower, dan ripeir).
- **Pembuktian Kapabilitas:** Memperlihatkan bahwa paket Business menghasilkan website multi-halaman lengkap yang terstruktur rapi, berkarakter unik, ramah aksesibilitas, dilengkapi optimasi SEO dasar, serta memiliki alur konversi WhatsApp yang matang tanpa memerlukan modul interaktif kompleks tingkat Growth.
- **Fondasi Arketipe Desain:** Menjadi referensi implementasi arketipe "H4 Index/Table Hero" dengan metafora fisik lembar buku tulis bergaris SiDU dan ledger administrasi pendidikan.

Prinsip penulisan: *Concrete > Clever*, *Information > Marketing*, *Description > Slogan*. Menolak kata promosi klise (*hyperbole-free*).

## 1.2 Tujuan Website
Dua tingkatan tujuan dengan hierarki prioritas:

1. **Lapis Demo ENLESWEB (Utama):**
   Calon klien (pemilik bimbel, kursus privat, atau penyedia jasa lokal) dapat melihat bukti konkret bahwa paket Business menghasilkan website berbobot profesional, terstruktur rapi, multi-halaman, serta dirancang khusus mengikuti model operasional mereka.
2. **Lapis Konsep Bimbel:**
   Orang tua atau wali siswa dapat memahami secara gamblang jenjang apa saja yang diajarkan, format belajar, jadwal operasional, alur bimbingan, serta rincian biaya yang transparan, kemudian dengan mudah menghubungi pengelola via WhatsApp.

### Nilai Inti:
- **Kejelasan (Clarity):** Pengunjung langsung memahami fokus layanan dalam hitungan detik.
- **Kejujuran (Honesty):** Tanpa klaim hasil belajar muluk (tanpa janji kenaikan nilai, garansi kelulusan, atau testimoni rekaan).
- **Keteraturan (Order):** Disajikan dengan analogi lembar buku tulis bergaris dan buku kas/tabel yang disiplin.
- **Aksi Mudah (Frictionless Action):** Jalur konsultasi WhatsApp selalu dapat diakses di setiap halaman (12 titik sentuh terencana).

## 1.3 Sasaran Audiens
- **Pengunjung Demo:** Calon klien ENLESWEB (pemilik lembaga kursus, bimbel, sekolah non-formal, penyedia jasa pendidikan) yang membuka portofolio lewat perangkat ponsel maupun desktop.
- **Persona Konsep:** Orang tua atau wali murid siswa SD hingga SMA (rentang usia 30 sampai 50 tahun) yang mencari pendampingan belajar terarah dengan rasio siswa kecil dan jadwal yang pasti.
- **Gaya Bahasa:** Bahasa Indonesia baku, santun, lugas, bersahabat, menggunakan sapaan "Anda".

## 1.4 Penawaran Layanan (Data Konsep As-Is)

### 1.4.1 Layanan Belajar
- **3 Jenjang Sekolah:**
  - **SD:** Kelas 4 sampai 6 (Matematika, Bahasa Indonesia, IPA).
  - **SMP:** Kelas 7 sampai 9 (Matematika, IPA, Bahasa Inggris, Bahasa Indonesia).
  - **SMA:** Kelas 10 sampai 12 (Matematika, Fisika, Kimia, Biologi, Bahasa Inggris).
- **2 Format Belajar:**
  - **Kelompok Kecil:** Maksimal 6 siswa per kelas, durasi 90 menit per sesi, jadwal rutin 2 kali per pekan, biaya bulanan tetap.
  - **Les Privat:** 1 siswa per sesi, durasi 60 menit per sesi, materi dan jadwal fleksibel disepakati bersama, biaya per pertemuan.
- **Aturan Operasional:**
  - Jam belajar: Senin sampai Sabtu, 14.00 sampai 21.00 WIB.
  - Alur belajar bertahap: (1) Pemetaan awal, (2) Rencana belajar, (3) Pertemuan rutin, (4) Catatan perkembangan bulanan.
  - Tanpa kelas percobaan gratis, tanpa diskon gimmicky, tanpa janji kenaikan ranking sekolah.

### 1.4.2 Pemetaan Fitur Paket Business (As-Is)

| Fitur Paket Business | Implementasi Konkret di tuntas |
| --- | --- |
| Hingga 6 Halaman Utama | 6 Halaman fungsional: Beranda, Program, Jadwal dan Biaya, Cara Belajar, Tentang dan Lokasi, Kontak (+ 1 halaman 404). |
| Desain Khusus & Berkarakter | Metafora lembar buku tulis bergaris SiDU (`--line-ruled` 32px), garis margin guide merah vertikal dengan 120 sel perforasi, dan tombol stempel tinta 32px. |
| Hierarki Konten Terarah | Mengikuti perjalanan logis orang tua: Gambaran umum (Beranda) → Pilihan jenjang (Program) → Hari & biaya (Jadwal & Biaya) → Alur pendampingan (Cara Belajar) → Profil & tempat (Tentang) → Form & konsultasi (Kontak). |
| Responsif Penuh | Diuji dan terkalibrasi presisi pada breakpoint mobile (390px / 360px) hingga desktop besar (1440px). |
| Tombol WhatsApp Kontekstual | 12 titik sentuh dengan atribut `data-cta-location` dan parameter pesan dinamis sesuai konteks halaman. |
| Tombol WhatsApp Melayang | Komponen mengambang melingkar (`border-radius: 50%`) di kanan bawah dengan warna hijau resmi WhatsApp (`#25D366`). |
| Integrasi Google Maps | Embed peta interaktif area Yogyakarta dan tautan langsung ke Google Maps di halaman Tentang dan Kontak. |
| Form Kontak Berbasis WhatsApp | Form kontak terstruktur di `/kontak` yang secara dinamis menyusun teks format WhatsApp rapi siap kirim tanpa penyimpanan basis data. |
| Optimasi Teknis SEO | Title dan meta description unik tiap halaman, 1 tag `h1` per halaman, hierarki heading tanpa loncatan level, validasi robots.txt. |
| Catatan Transparansi | Footer menampilkan label "Website oleh ENLESWEB." dan penanda konsep transparan di halaman Tentang dan Jadwal & Biaya. |

## 1.5 Ruang Lingkup Halaman (As-Is)

### 1.5.1 Enam Halaman Utama + 404

| No | Halaman | Rute | Peran & Struktur Halaman As-Is |
| --- | --- | --- | --- |
| 1 | Beranda | `/` | **Signature Hero:** Lembar buku SiDU, H1 monumental terkalibrasi baseline kisi 64px, 1 CTA stempel WhatsApp 32px, tabel Master Schedule Ledger 3 tier tanpa harga eksplisit (desktop 3 kolom sejajar, mobile reflow panel bertumpuk). Dilanjutkan: Program belajar (ledger rows), Dua format belajar (tabel komparasi), Cara belajar (4 baris horizontal), dan Final CTA konsultasi. |
| 2 | Program | `/program` | PageHeader, jump links (`#sd`, `#smp`, `#sma`), kartu rincian per jenjang (kelas, mata pelajaran lengkap dengan square bullet markers, format, tombol konsultasi WhatsApp terpisah per jenjang). |
| 3 | Jadwal dan Biaya | `/jadwal-biaya` | PageHeader, Callout intro data contoh, tabel jadwal kelompok kecil (kelas SD A/B, SMP A/B, SMA A/B dengan hari dan slot jam), tabel biaya lengkap (biaya bulanan kelompok kecil Rp300.000 sampai Rp400.000, biaya privat per sesi Rp90.000 sampai Rp120.000, biaya pendaftaran Rp50.000), daftar catatan ketentuan, dan tombol WhatsApp. |
| 4 | Cara Belajar | `/cara-belajar` | PageHeader, 4 langkah terperinci (Pemetaan awal, Rencana belajar, Pertemuan rutin, Catatan perkembangan bulanan), daftar persiapan alat belajar, aturan jika berhalangan hadir, dan tombol konsultasi WhatsApp. |
| 5 | Tentang dan Lokasi | `/tentang` | PageHeader, profil bimbingan tuntas, jam operasional, alamat contoh Yogyakarta, embed peta Google Maps responsif (layout 2 kolom di desktop), tautan media sosial Instagram, dan kartu catatan transparansi konsep ENLESWEB. |
| 6 | Kontak | `/kontak` | Container 2 kolom desktop: kolom kiri memuat judul, intro, tombol WhatsApp utama, jam operasional, alamat contoh, dan media sosial; kolom kanan memuat Form Kontak interaktif (Nama wali, nama siswa, jenjang, format, mapel, pesan) yang otomatis merangkai pesan WA. |
| - | 404 | `/404` | Halaman status not-found yang tetap konsisten di atas lembar buku tulis SiDU dengan tautan kembali ke Beranda. |

### 1.5.2 Elemen Global
- **Skip Link:** Aksesibilitas keyboard langsung ke `#konten`.
- **Navbar:** Sticky header transparan dengan efek latar solid (`var(--line-ruled-solid)`) saat di-scroll, merek `tuntas`, 5 menu navigasi, dan tombol WhatsApp `size="nav"`. Di layar kecil (<1024px) beralih ke tombol toggle menu dengan panel drawer responsif.
- **Garis Margin Merah Menerus:** Elemen visual pembeda utama (`.notebook-margin-guide`) dengan border kanan merah halus (`2px solid var(--correction-subtle)`) dan 120 baris sel perforasi margin (`.margin-cell-box`) pada layar tablet/desktop ($\ge 768\text{px}$).
- **Footer Lembar Kertas:** Tatanan 3 kolom di atas lembar kertas bergaris dengan garis pembatas atas tinta biru (`border-top: 1px solid var(--line-ruled)`), memuat identitas merek, tagline, tautan internal, jam operasional, tautan Instagram, tombol WhatsApp, dan catatan konsep `Website oleh ENLESWEB.`.
- **Floating WhatsApp:** Tombol mengambang melingkar di kanan bawah dengan warna hijau resmi WhatsApp (`#25D366`), atribut aksesibilitas lengkap (`aria-label`), dan topik dinamis per halaman.

## 1.6 Batasan Sistem (Guarantees & Constraints)
- **Zero Em/En Dash:** Seluruh teks antarmuka dilarang menggunakan karakter em dash (`—`) atau en dash (`–`), wajib menggunakan tanda baca koma, titik, atau kata "sampai".
- **Zero Forbidden Buzzwords:** Larangan keras terhadap kata sifat promosi generik seperti *terbaik, terpercaya, profesional, berkualitas, gratis, garansi, modern, presisi, premium, seamless, elevate, crafted, powerful, nilai naik, lulus, juara*.
- **Tanpa Nominal Rupiah di Hero/Beranda:** Menjaga kemudahan pemeliharaan data publik; rincian angka biaya rupiah dilokalisasi eksklusif pada halaman `/jadwal-biaya`.
- **Integritas Uji Otomatis:** Setiap perubahan wajib lulus uji verifikasi `npm run build`, `node scripts/slop-lint.mjs` (0 FAIL, 0 REVIEW), dan `node scripts/verify.mjs` (100% PASS, seluruh 13 aturan terpenuhi).

---

# BAGIAN 2: CONTENT.md (As-Is Website Copy Specification)

## 2.1 Aturan Keras Copywriting
- Bahasa Indonesia baku, sederhana, komunikatif, dan tidak teknis. Sapaan: "Anda".
- Kalimat lugas dan padat. Satu kalimat, satu gagasan.
- Prinsip utama: *Concrete > Clever*, *Information > Marketing*, *Description > Slogan*.
- Pernyataan mengenai metode kerja berupa proses konkret atau batasan operasional, bukan janji hasil.
- Tanpa eyebrow di atas heading. Tanpa tagline promosi tambahan.
- Menyajikan fakta konkret: jenjang, mata pelajaran, jumlah siswa, durasi sesi, hari, jam, dan biaya.
- Nominal biaya rupiah pada homepage tidak ditampilkan (harga hanya dilokalisasi di halaman `/jadwal-biaya` demi kemudahan pemeliharaan).

## 2.2 Meta Halaman (Title & Description)

Bahasa dokumen: `id`. Open Graph title identik dengan Title, Open Graph description identik dengan Meta description.

| Halaman | Title | Meta description |
| --- | --- | --- |
| Beranda | `tuntas \| Bimbel kelompok kecil dan les privat SD, SMP, SMA` | Bimbel kelompok kecil dan les privat untuk SD, SMP, dan SMA. Lihat program, jadwal, dan biaya, lalu tanyakan lewat WhatsApp. |
| Program | `Program \| tuntas` | Program belajar untuk SD kelas 4 sampai 6, SMP kelas 7 sampai 9, dan SMA kelas 10 sampai 12, format kelompok kecil atau privat. |
| Jadwal dan Biaya | `Jadwal dan Biaya \| tuntas` | Jadwal kelompok kecil dan biaya belajar per program. Seluruh jadwal dan biaya di contoh ini adalah data contoh. |
| Cara Belajar | `Cara Belajar \| tuntas` | Empat langkah belajar di tuntas, dari pemetaan awal sampai catatan perkembangan. |
| Tentang dan Lokasi | `Tentang dan Lokasi \| tuntas` | Tentang tuntas, jam operasional, dan lokasi. Contoh website bimbel buatan ENLESWEB. |
| Kontak | `Kontak \| tuntas` | Hubungi tuntas lewat WhatsApp atau isi form kontak. Form menyusun pesan WhatsApp yang tinggal dikirim. |
| 404 | `Halaman tidak ditemukan \| tuntas` | Halaman yang Anda buka tidak ada. |

## 2.3 Navbar dan Skip Link
- Merek: `tuntas` (tautan ke `/`)
- Tautan menu desktop (1024px ke atas):
  - Program (`/program`)
  - Jadwal dan Biaya (`/jadwal-biaya`)
  - Cara Belajar (`/cara-belajar`)
  - Tentang (`/tentang`)
  - Kontak (`/kontak`)
- Tombol WhatsApp desktop: `[Chat WhatsApp]` (Topik: `pendaftaran bimbel`, Lokasi: `nav`)
- Tautan menu mobile (drawer di bawah 1024px):
  - Beranda (`/`)
  - Program (`/program`)
  - Jadwal dan Biaya (`/jadwal-biaya`)
  - Cara Belajar (`/cara-belajar`)
  - Tentang (`/tentang`)
  - Kontak (`/kontak`)
- Aksesibilitas:
  - Skip link: `Lewati ke konten` (menuju `#konten`)
  - Label pembaca layar menu: `Buka menu` dan `Tutup menu`
  - Label aria navigasi: `Navigasi utama`

## 2.4 Beranda (`/`)

### 2.4.1 Hero (Signature SiDU & Master Ledger)
- Headline (h1): `Bimbel kelompok kecil dan les privat untuk SD, SMP, dan SMA.`
- Teks Pendukung (lead): `Belajar mengikuti pemetaan awal setiap siswa. Lihat program, jadwal, dan biayanya, lalu tanyakan lewat WhatsApp.`
- Tombol Utama (stempel 32px): `[Chat via WhatsApp]` (Topik: `pendaftaran bimbel`, Lokasi: `hero`)
- Master Schedule Ledger (Tabel Terintegrasi Langsung):
  - Judul Bar Caption: `Jadwal kelompok kecil per kelas`
  - Catatan Bar Caption: `Maksimal 6 siswa`
  - 3 Kolom Jenjang:
    - **SD:** `Kelas 4 sampai 6`
      - Slot 1: `Senin dan Kamis`, `15.30 sampai 17.00`
      - Slot 2: `Selasa dan Jumat`, `15.30 sampai 17.00`
      - Format: `Kelompok kecil dan privat`
    - **SMP:** `Kelas 7 sampai 9`
      - Slot 1: `Senin dan Kamis`, `17.30 sampai 19.00`
      - Slot 2: `Selasa dan Jumat`, `17.30 sampai 19.00`
      - Format: `Kelompok kecil dan privat`
    - **SMA:** `Kelas 10 sampai 12`
      - Slot 1: `Senin dan Kamis`, `19.00 sampai 20.30`
      - Slot 2: `Selasa dan Jumat`, `19.00 sampai 20.30`
      - Format: `Kelompok kecil dan privat`

### 2.4.2 Program Belajar
- Judul Section (h2): `Program belajar`
- Tautan Header: `[Lihat Semua Program]` (menuju `/program`)
- 3 Baris Ledger Horizontal:
  - **SD:** Kelas 4 sampai 6 | Matematika, Bahasa Indonesia, IPA (Tautan menuju `/program#sd`)
  - **SMP:** Kelas 7 sampai 9 | Matematika, IPA, Bahasa Inggris, Bahasa Indonesia (Tautan menuju `/program#smp`)
  - **SMA:** Kelas 10 sampai 12 | Matematika, Fisika, Kimia, Biologi, Bahasa Inggris (Tautan menuju `/program#sma`)

### 2.4.3 Dua Format Belajar
- Judul Section (h2): `Dua format belajar`
- Tabel Komparasi Format:
  - **Jumlah siswa:** Kelompok kecil: `Maksimal 6 siswa` | Privat: `1 siswa`
  - **Lama pertemuan:** Kelompok kecil: `90 menit` | Privat: `60 menit`
  - **Jadwal:** Kelompok kecil: `Tetap, dua kali per pekan` | Privat: `Disepakati bersama`
  - **Biaya:** Kelompok kecil: `Per bulan` | Privat: `Per pertemuan`
- Tautan Catatan Kaki: `[Lihat Jadwal dan Biaya]` (menuju `/jadwal-biaya`)

### 2.4.4 Cara Belajar Ringkas
- Judul Section (h2): `Cara belajar`
- Tautan Header: `[Baca Cara Belajar]` (menuju `/cara-belajar`)
- 4 Baris Horizontal:
  1. `Pemetaan awal` - Pengajar memeriksa kemampuan awal siswa.
  2. `Rencana belajar` - Materi dan format ditentukan dari hasil pemetaan.
  3. `Pertemuan rutin` - Siswa belajar sesuai jadwal.
  4. `Catatan perkembangan` - Orang tua menerima catatan setiap akhir bulan.

### 2.4.5 CTA Penutup
- Judul (h2): `Mau menanyakan program untuk anak Anda?`
- Teks Pendukung: `Ceritakan jenjang dan kebutuhan belajarnya. Kami bantu pilihkan format dan jadwal.`
- Tombol: `[Tanyakan via WhatsApp]` (Topik: `program belajar`, Lokasi: `final_cta`)

## 2.5 Halaman Program (`/program`)
- Judul Halaman (h1): `Program belajar`
- Paragraf Pengantar: `Tiga jenjang dengan dua format belajar. Jadwal dan biaya ada di halaman Jadwal dan Biaya.`
- Jump Links: `[SD]` (`#sd`), `[SMP]` (`#smp`), `[SMA]` (`#sma`)
- Konten Tiap Jenjang:
  - **SD (`#sd`):**
    - Kelas: `Kelas 4 sampai 6`
    - Mata pelajaran: `Matematika, Bahasa Indonesia, IPA`
    - Deskripsi: `Latihan soal rutin dan pendampingan mengerjakan tugas sekolah.`
    - Format: `Kelompok kecil dan privat`
    - Tombol: `[Tanya Program SD]` (Topik: `program SD`, Lokasi: `program_sd`)
  - **SMP (`#smp`):**
    - Kelas: `Kelas 7 sampai 9`
    - Mata pelajaran: `Matematika, IPA, Bahasa Inggris, Bahasa Indonesia`
    - Deskripsi: `Pendalaman materi kelas dan latihan soal sesuai kurikulum yang dipakai sekolah.`
    - Format: `Kelompok kecil dan privat`
    - Tombol: `[Tanya Program SMP]` (Topik: `program SMP`, Lokasi: `program_smp`)
  - **SMA (`#sma`):**
    - Kelas: `Kelas 10 sampai 12`
    - Mata pelajaran: `Matematika, Fisika, Kimia, Biologi, Bahasa Inggris`
    - Deskripsi: `Pendalaman materi per mata pelajaran dan latihan soal sesuai kebutuhan siswa.`
    - Format: `Kelompok kecil dan privat`
    - Tombol: `[Tanya Program SMA]` (Topik: `program SMA`, Lokasi: `program_sma`)
- Catatan Penutup: `Mata pelajaran lain? Tanyakan dulu lewat WhatsApp.`

## 2.6 Halaman Jadwal dan Biaya (`/jadwal-biaya`)
- Judul Halaman (h1): `Jadwal dan biaya`
- Paragraf Pengantar (Callout): `Semua jadwal dan biaya di halaman ini adalah data contoh untuk keperluan demo.`

### 2.6.1 Tabel Jadwal Kelompok Kecil
- Judul (h2): `Jadwal kelompok kecil`
- Caption: `Jadwal kelompok kecil per kelas`
- Kolom: `Kelas` | `Hari` | `Jam`
  - SD A: `Senin dan Kamis` | `15.30 sampai 17.00`
  - SD B: `Selasa dan Jumat` | `15.30 sampai 17.00`
  - SMP A: `Senin dan Kamis` | `17.30 sampai 19.00`
  - SMP B: `Selasa dan Jumat` | `17.30 sampai 19.00`
  - SMA A: `Senin dan Kamis` | `19.00 sampai 20.30`
  - SMA B: `Selasa dan Jumat` | `19.00 sampai 20.30`
- Catatan Jadwal: `Jadwal privat disepakati bersama pada jam operasional, Senin sampai Sabtu, 14.00 sampai 21.00.`

### 2.6.2 Tabel Biaya
- Judul (h2): `Biaya`
- Caption: `Biaya contoh per program`
- Kolom: `Program` | `Kelompok kecil (per bulan)` | `Privat (per pertemuan)`
  - SD (Kelas 4 sampai 6): `Rp300.000` | `Rp90.000`
  - SMP (Kelas 7 sampai 9): `Rp350.000` | `Rp100.000`
  - SMA (Kelas 10 sampai 12): `Rp400.000` | `Rp120.000`
- Catatan Ketentuan Biaya:
  - `Kelompok kecil: 8 pertemuan per bulan, 90 menit per pertemuan.`
  - `Privat: 60 menit per pertemuan.`
  - `Biaya pendaftaran Rp50.000 dibayar satu kali.`
  - `Cara pembayaran kami sampaikan saat pendaftaran.`
- Tombol: `[Tanya Jadwal via WhatsApp]` (Topik: `jadwal dan biaya`, Lokasi: `jadwal_biaya`)

## 2.7 Halaman Cara Belajar (`/cara-belajar`)
- Judul Halaman (h1): `Cara belajar di tuntas`
- Paragraf Pengantar: `Empat langkah dari pertemuan pertama sampai catatan perkembangan.`

### 2.7.1 Empat Langkah Alur Belajar
1. `Pemetaan awal`
   Pengajar menanyakan kebutuhan siswa dan memeriksa kemampuan awalnya lewat beberapa soal.
2. `Rencana belajar`
   Hasil pemetaan dipakai untuk menentukan materi yang dibahas lebih dulu dan format yang sesuai.
3. `Pertemuan rutin`
   Siswa belajar sesuai jadwal. Setiap pertemuan membahas materi dan latihan soal.
4. `Catatan perkembangan`
   Setiap akhir bulan, orang tua menerima catatan materi yang sudah dibahas dan yang masih perlu latihan lewat WhatsApp.

### 2.7.2 Ketentuan Tambahan
- Bagian `Yang perlu disiapkan`:
  - Buku pelajaran dan catatan dari sekolah.
  - Alat tulis.
  - Daftar materi atau tugas yang sedang dikerjakan di sekolah.
- Bagian `Jika siswa berhalangan hadir`:
  - `Kabari kami lewat WhatsApp sebelum jadwal dimulai. Penjadwalan pengganti kami bicarakan per kasus.`
- Tombol: `[Tanya Cara Belajar via WhatsApp]` (Topik: `cara belajar`, Lokasi: `cara_belajar`)

## 2.8 Halaman Tentang dan Lokasi (`/tentang`)
- Judul Halaman (h1): `Tentang tuntas`
- Paragraf Profil:
  - `tuntas adalah bimbel kelompok kecil dan les privat untuk siswa SD, SMP, dan SMA.`
  - `Setiap kelompok memiliki satu pengajar utama dan maksimal enam siswa.`
- Jam Operasional:
  - Judul (h2): `Jam operasional`
  - Keterangan: `Senin sampai Sabtu, 14.00 sampai 21.00.`
- Lokasi:
  - Judul (h2): `Lokasi`
  - Alamat: `Jl. Contoh No. 12, Yogyakarta`
  - Catatan: `Alamat ini adalah contoh. Peta hanya menunjukkan area kota.`
  - Embed Peta: Google Maps interaktif (Area Yogyakarta)
  - Tombol: `[Buka di Google Maps]` (menuju tautan Google Maps)
- Media Sosial:
  - Judul (h2): `Media sosial`
  - Tautan: `[Instagram]` (menuju profil Instagram ENLESWEB)
- Blok Transparansi Konsep:
  - Judul (h2): `Tentang website ini`
  - Paragraf: `Website ini adalah konsep buatan ENLESWEB, contoh tingkat Business. tuntas bukan bimbel yang beroperasi, jadi tidak ada siswa, hasil belajar, atau ulasan yang diklaim di sini. Alamat, jadwal, dan biaya adalah data contoh. Tautan media sosial mengarah ke akun ENLESWEB.`
  - Tombol: `[Kunjungi ENLESWEB]`

## 2.9 Halaman Kontak (`/kontak`)
- Judul Halaman (h1): `Hubungi tuntas`
- Paragraf Pengantar: `Tanyakan program lewat WhatsApp atau isi form di bawah. Form menyusun pesan WhatsApp yang tinggal Anda kirim.`
- Tombol Utama: `[Chat via WhatsApp]` (Topik: `pendaftaran bimbel`, Lokasi: `contact`)

### 2.9.1 Ringkasan Info Kontak
- Jam operasional: `Senin sampai Sabtu, 14.00 sampai 21.00.`
- Alamat: `Jl. Contoh No. 12, Yogyakarta (alamat contoh)`
- Tautan Peta: `[Buka di Google Maps]`
- Media Sosial: `[Instagram]`

### 2.9.2 Form Kontak Interaktif
- Judul (h2): `Form kontak`
- Bidang Isian (Fields):
  - Nama orang tua atau wali (wajib) | Pesan error: `Isi nama orang tua atau wali.`
  - Nama siswa (wajib, cukup nama panggilan) | Pesan error: `Isi nama siswa.`
  - Jenjang (wajib, dropdown pilihan: SD, SMP, SMA) | Pesan error: `Pilih jenjang.`
  - Format yang diminati (wajib, radio pilihan: Kelompok kecil, Privat, Belum tahu) | Pesan error: `Pilih format belajar.`
  - Mata pelajaran (opsional, placeholder: `Contoh: Matematika dan IPA`)
  - Pesan (opsional, placeholder: `Tulis kebutuhan belajar atau pertanyaan Anda.`)
- Tombol Kirim Form: `[Kirim via WhatsApp]` (Topik: `form kontak`, Lokasi: `form`)
- Catatan Form: `Form ini tidak menyimpan data. Pesan dikirim lewat WhatsApp.`
- Catatan Demo: `Di contoh ini, pesan dikirim ke ENLESWEB. Gunakan data contoh, bukan data siswa sungguhan.`
- Validasi & Sukses:
  - Error summary: `Terdapat data yang belum lengkap pada form:`
  - Success text: `Pesan WhatsApp telah disiapkan di tab baru.`
  - Fallback button: `Buka WhatsApp`

## 2.10 Footer dan Floating WhatsApp

### 2.10.1 Footer
- Merek: `tuntas`
- Tagline: `Bimbel kelompok kecil dan les privat.`
- Tombol Kontak: `[Chat WhatsApp]` (Topik: `pendaftaran bimbel`, Lokasi: `footer`)
- Navigasi (Judul: `Navigasi`): Program, Jadwal dan Biaya, Cara Belajar, Tentang, Kontak
- Jam Operasional (Judul: `Jam operasional`): `Senin sampai Sabtu, 14.00 sampai 21.00`
- Media Sosial: `[Instagram]`
- Catatan Konsep: `Website oleh ENLESWEB.`

### 2.10.2 Tombol WhatsApp Melayang (Floating WhatsApp)
- Aria-label: `Chat via WhatsApp (buka tab baru)`
- Aria-label pembungkus: `Kontak cepat WhatsApp`
- Lokasi: `floating_wa`
- Topik dinamis per halaman:
  - Beranda: `pendaftaran bimbel`
  - Program: `program belajar`
  - Jadwal dan Biaya: `jadwal dan biaya`
  - Cara Belajar: `cara belajar`
  - Tentang dan Lokasi: `pendaftaran bimbel`
  - Kontak: `pendaftaran bimbel`

## 2.11 Format Pesan WhatsApp

### 2.11.1 Mode Demo (`site.demoMode = true`)
Nomor tujuan resmi: `site.enleswebWhatsappNumber` (`6285156801570`).

- **Pesan Tombol Standar:**
  ```text
  Halo ENLESWEB, saya sedang melihat contoh website tuntas, halaman {halaman}. Saya mau tanya tentang pembuatan website.
  ```
  *(Variabel `{halaman}`: Beranda, Program, Jadwal dan Biaya, Cara Belajar, Tentang dan Lokasi, Kontak)*

- **Pesan Form Kontak:**
  ```text
  Halo ENLESWEB, saya mencoba form kontak di contoh website tuntas.

  Nama orang tua atau wali: {wali}
  Nama siswa: {siswa}
  Jenjang: {jenjang}
  Format: {format}
  Mata pelajaran: {mapel}
  Pesan: {pesan}

  Saya mau tanya tentang pembuatan website seperti ini.
  ```

### 2.11.2 Mode Studio Bimbel Asli (`site.demoMode = false`)
- **Pesan Tombol Standar:**
  ```text
  Halo tuntas, saya mau tanya tentang {topik}.
  ```
- **Pesan Form Kontak:**
  ```text
  Halo tuntas, saya ingin menanyakan program belajar.

  Nama orang tua atau wali: {wali}
  Nama siswa: {siswa}
  Jenjang: {jenjang}
  Format: {format}
  Mata pelajaran: {mapel}
  Pesan: {pesan}

  Mohon informasi jadwal dan biaya yang sesuai.
  ```

## 2.12 Tabel 12 Titik Sentuh WhatsApp (`data-cta-location`)

| No | Lokasi Elemen | Nilai `{topik}` | Nilai `data-cta-location` |
| --- | --- | --- | --- |
| 1 | Navbar (Desktop) | pendaftaran bimbel | `nav` |
| 2 | Tombol Melayang (Floating) | dinamis per halaman | `floating_wa` |
| 3 | Hero Beranda (Stempel 32px) | pendaftaran bimbel | `hero` |
| 4 | Program SD | program SD | `program_sd` |
| 5 | Program SMP | program SMP | `program_smp` |
| 6 | Program SMA | program SMA | `program_sma` |
| 7 | Jadwal dan Biaya | jadwal dan biaya | `jadwal_biaya` |
| 8 | Cara Belajar | cara belajar | `cara_belajar` |
| 9 | Kontak (Tombol Utama) | pendaftaran bimbel | `contact` |
| 10 | Kontak (Kirim Form) | form kontak | `form` |
| 11 | Final CTA Beranda | program belajar | `final_cta` |
| 12 | Footer | pendaftaran bimbel | `footer` |

## 2.13 Halaman 404
- Judul (h1): `Halaman tidak ditemukan`
- Paragraf: `Alamat yang Anda buka tidak ada di website ini.`
- Tombol: `[Kembali ke Beranda]` (menuju `/`)

---

# BAGIAN 3: DESIGN.md (As-Is Visual and Design Specification)

## 3.1 Karakter Visual dan Arah Desain

### 3.1.1 Konsep Utama (Signature Metaphor)
Website tuntas dibangun dengan metafora **Lembar Buku Tulis SiDU Bergaris** dan **Ledger Administrasi Bimbel**:
- **Bukan Template SaaS Generik:** Menolak kartu rounded mengambang dengan shadow blur halus (*floating SaaS cards*), header tabel biru muda gradasi, dan stepper lingkaran bernomor.
- **Taktil Lembaran Fisik:** Setiap halaman disajikan sebagai lembar kertas buku tulis nyata (`.notebook-sheet`), lengkap dengan garis pembatas margin merah vertikal di sebelah kiri (`.notebook-margin-guide`), kisi baris buku tulis berulang setiap 32px (`repeating-linear-gradient`), serta barisan perforasi lubang kertas SiDU (`.notebook-margin-cells`) yang terkalibrasi per baris 32px pada layar tablet dan desktop.
- **Estetika Datar & Tajam:** Seluruh komponen kontainer, border tabel, dan tombol tampil dengan sudut siku-siku (`border-radius: 0px`), menyerupai garis cap atau stempel tinta cetak di atas lembaran fisik buku administrasi. Pengecualian radius hanya berlaku untuk tombol melayang WhatsApp (`border-radius: 50%`) dan kotak sel perforasi margin (`border-radius: 3px`).

## 3.2 Pembeda Visual Terhadap Proyek Lain di Ledger ENLESWEB

| Aspek | ENLESWEB | Jerseay | berflower | ripeir | tuntas (As-Is) |
| --- | --- | --- | --- | --- | --- |
| Latar | Putih bersih | Monokromatik hitam/putih | Krem hangat | Gelap hijau-hitam | Kertas SiDU (`#FFFFFF`) dengan kisi garis tinta biru tipis 32px |
| Elemen Karakter | Objek SVG taktil | Foto produk jersey | Editorial floris | Meja kerja gelap | Garis margin merah vertikal menerus dengan sel perforasi 32px |
| Font Display | Poppins | Plus Jakarta Sans | Fraunces | IBM Plex Mono | Space Grotesk 700 (arsitektur ledger tegas) |
| Font Body | Poppins | Plus Jakarta Sans | DM Sans | IBM Plex Sans | Atkinson Hyperlegible (kejelasan baca prima) |
| Radius Sudut | 10–14px, tombol 3D | 8px, hairline | Organik lembut | 2px, tajam presisi | **0px** (rata lembar buku), kecuali tombol WA melayang (50%) |
| Tombol WhatsApp | Melayang aksen | Melayang hijau standar | Melayang hijau standar | Melayang hijau standar | Melayang, hijau resmi WhatsApp (`#25D366`), lingkaran 56px/60px |
| Rangka Hero | Split teks + SVG | Showcase foto jersey | Hero editorial split | Grid meja kerja | Lembar SiDU: H1 2 baris terkalibrasi baseline 64px, 1 CTA stempel 32px, Master Schedule Ledger |

## 3.3 Token Desain (As-Is)
Seluruh token didefinisikan sebagai CSS custom properties di `src/styles/global.css`.

### 3.3.1 Palet Warna (Buku Tulis SiDU & Tinta)

| Token CSS | Kode Warna | Penggunaan As-Is |
| --- | --- | --- |
| `--canvas` | `#FFFFFF` | Latar utama lembar kertas buku tulis. |
| `--surface` | `#FFFFFF` | Latar blok formulir, header, dan sel formulir. |
| `--ink` | `#0F224A` | Tinta utama (pena pilot/ballpoint gelap): teks utama, border tabel, judul, border tombol stempel. |
| `--ink-muted` | `#3E4D68` | Teks sekunder, label tabel, deskripsi pendukung, border garis sekunder. |
| `--line` | `#D0DBEC` | Garis kisi horizontal dan pemisah sel tabel (garis tinta tipis). |
| `--line-ruled` | `rgba(20, 45, 120, 0.08)` | Garis bantu buku tulis berulang setiap 32px (`repeating-linear-gradient`). |
| `--line-ruled-solid` | `#ECEEF4` | Latar solid saat header navbar dalam status scroll (`site-header[data-scrolled='true']`). |
| `--tint` | `#F2F6FC` | Latar aksen sangat lembut untuk baris keterangan atau sorotan sel. |
| `--accent` | `#163275` | Latar tombol CTA utama dan link interaktif aktif. |
| `--accent-hover` | `#0D1F4D` | Status hover tombol CTA utama. |
| `--correction` | `#C5221F` | Merah koreksi/pulpen guru: nomor langkah 1 sampai 4, teks catatan tabel, dan pesan kesalahan. |
| `--correction-subtle`| `#FCA5A5` | Aksen merah sekunder: garis border margin vertikal kiri dan kotak sel perforasi margin. |
| `--error` | `#B42318` | Status peringatan kesalahan form kontak. |
| `--wa` | `#25D366` | Warna resmi tombol WhatsApp melayang. |
| `--wa-hover` | `#20BA5A` | Hover tombol WhatsApp melayang. |
| `--ink-on-dark-muted` | `#B8C0CF` | Teks pendukung kontras di atas latar gelap. |

### 3.3.2 Tipografi

| Kategori | Font Family | Sumber | Bobot |
| --- | --- | --- | --- |
| **Display / Heading** | `'Space Grotesk', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif` | `@fontsource/space-grotesk` | 700 (Bold) |
| **Body / Konten** | `'Atkinson Hyperlegible', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif` | `@fontsource/atkinson-hyperlegible` | 400 (Regular), 700 (Bold) |

#### Skala Tipografi Global:
- `--font-hero`: `clamp(2.75rem, 2rem + 3.8vw, 4.5rem)`
- `--font-page-title`: `clamp(2rem, 1.4rem + 2.5vw, 3rem)`
- `--font-section-title`: `clamp(1.5rem, 1.25rem + 1vw, 2.125rem)`
- `--font-card-title`: `1.125rem`
- `--font-item-name-lg`: `1.5rem`
- `--font-item-name`: `1.25rem`
- `--font-body-fluid`: `clamp(0.9375rem, 0.9rem + 0.2vw, 1.0625rem)`
- `--font-lead`: `clamp(1.125rem, 1rem + 0.35vw, 1.25rem)`
- `--font-label`: `0.8125rem`
- `--font-caption`: `0.875rem`
- `--font-small`: `0.875rem`
- `--font-button`: `1rem`
- `--font-sidu-meta`: `0.875rem`

#### Kalibrasi Baseline Hero (`Hero.astro`):
- **Headline H1 (`.hero-headline`):**
  - **Desktop (1024px+):** `font-size: 2.25rem` (36px), `font-weight: 700`, `line-height: 64px` (tepat 2 baris buku SiDU per baris teks), `letter-spacing: -0.03em`, `color: var(--ink)`, `margin: 0 0 32px 0`, `transform: translateY(9px)`.
  - **Mobile (<768px):** `font-size: 2rem` (32px), `line-height: 64px`, `margin-bottom: 44px`, `transform: translateY(12px)`.
- **Lead Text (`.hero-lead`):**
  - **Desktop:** `font-size: 1.0625rem` (17px), `line-height: 32px` (tepat 1 baris buku SiDU per baris teks), `color: var(--ink-muted)`, `max-width: 58ch`, `margin: 0 0 32px 0`, `transform: translateY(6px)`.
  - **Mobile:** `line-height: 32px`, `margin-bottom: 54px`, `transform: translateY(22px)`.
- **Tombol Action Row (`.hero-action-row`):**
  - `height: 32px`, `margin-bottom: 32px`, memuat tombol stempel `WhatsAppButton` setinggi 32px yang pas memenuhi 1 baris kisi buku tulis.

## 3.4 Radius Sudut dan Bayangan
- **Radius Nol:** `--radius-sm: 0px`, `--radius: 0px`, `--radius-md: 0px`, `--radius-lg: 0px`. Seluruh kartu, formulir, sel tabel, dan tombol stempel berbentuk siku-siku tajam.
- **Pengecualian Radius:**
  - Kotak perforasi lubang kertas margin (`.margin-cell-box`): `border-radius: 3px`.
  - Tombol melayang WhatsApp (`.floating-wa-link`): `border-radius: 50%`.
- **Batasan Bayangan:** `box-shadow` dilarang digunakan di seluruh layout, kartu, dan komponen, kecuali secara ketat dan minimal pada tombol interaktif berkelas `.btn-tactile`.

## 3.5 Komponen Antarmuka Utama (As-Is)

### 3.5.1 Lembar Buku Tulis dan Garis Margin Kiri (`Base.astro` & `global.css`)
- Container `.notebook-wrapper` membentang dengan 2 kolom:
  - Desktop / Tablet: `grid-template-columns: 44px 1fr`, `max-width: 1080px`.
  - Mobile (<768px): `grid-template-columns: 18px 1fr`.
- Kolom kiri `.notebook-margin-guide` menampilkan garis vertikal merah halus (`border-right: 2px solid var(--correction-subtle)`).
- **Perforasi Sel Margin (`.notebook-margin-cells`):**
  - Hanya tampil pada viewport tablet dan desktop ($\ge 768\text{px}$).
  - Merender 120 baris sel setinggi 32px (`.margin-cell-row`) dengan kotak perforasi transparan `.margin-cell-box` (`width: 32px; height: 18px; border: 1px solid var(--correction-subtle); border-radius: 3px;`).

### 3.5.2 Tombol CTA Stempel Tinta (`WhatsAppButton.astro`)
- Memiliki 4 varian ukuran: `default`, `hero`, `nav`, dan `stamp`.
- Seluruh varian memiliki tinggi kompak 32px (`height: 32px; min-height: 32px; max-height: 32px; line-height: 32px; padding: 0 16px; font-size: 0.875rem;`).
- Target sentuh aksesibilitas minimal 44px dipertahankan dengan pseudo-element `::before` yang memiliki area klik `inset: -6px 0`.
- Warna latar `var(--accent)` (`#163275`) dengan hover `var(--ink)` (`#0F224A`).

### 3.5.3 Master Schedule Ledger Table (`Hero.astro`)
- Terintegrasi langsung di dalam Hero tanpa kotak kartu SaaS rounded:
  - Blok kontainer memiliki border luar penuh 1px tinta (`border: 1px solid var(--ink)`).
  - Baris caption (`.ledger-caption-bar`): Tinggi 32px di desktop (64px di mobile), memuat judul `Jadwal kelompok kecil per kelas` dan label penegasan merah `Maksimal 6 siswa` (warna `var(--correction)`).
  - Tampilan Desktop: Tabel horizontal 3 kolom jenjang (SD, SMP, SMA) dengan tinggi header 64px, baris slot jadwal 64px per sesi (Senin & Kamis, Selasa & Jumat), serta baris format belajar 64px.
  - Tampilan Mobile: Otomatis reflow menjadi panel bertumpuk vertikal (`.mobile-tier-item`) dengan pembatas garis tinta 1px tanpa scroll horizontal.
  - **Bebas Harga Numerik di Homepage:** Nominal rupiah dilokalisasi eksklusif pada halaman `/jadwal-biaya`.

### 3.5.4 Baris Ledger Program Belajar (`ProgramRows.astro`)
- Menampilkan 3 baris ledger horizontal (SD, SMP, SMA) yang dipisahkan garis tinta bersih.
- Menampilkan badge nama jenjang, cakupan kelas, daftar mata pelajaran, dan tautan langsung ke anchor halaman program (`/program#sd`, `/program#smp`, `/program#sma`).

### 3.5.5 Tabel Komparasi Format Belajar (`FormatCards.astro`)
- Membandingkan format Kelompok Kecil (maksimal 6 siswa) vs Privat (1 siswa) secara tabular:
  - Parameter: Jumlah siswa, Lama pertemuan, Jadwal, Biaya ("Per bulan" vs "Per pertemuan").
  - Menampilkan kartu ringkasan komparasi di mobile dan tabel komparasi rapi di desktop.

### 3.5.6 Alur Cara Belajar (`StepList.astro`)
- Menampilkan 4 langkah belajar berurutan secara horizontal dengan penomoran indeks merah asli (`1.`, `2.`, `3.`, `4.`):
  1. Pemetaan awal
  2. Rencana belajar
  3. Pertemuan rutin
  4. Catatan perkembangan

### 3.5.7 Header Navigasi Sticky (`Navbar.astro`)
- Header sticky dengan tinggi 64px di mobile dan 72px di desktop.
- Latar transparan secara default, dan bertransisi mulus ke warna solid `var(--line-ruled-solid)` (`#ECEEF4`) ketika halaman digulir (`data-scrolled="true"`).
- Navigasi mobile menggunakan tombol burger toggle aksesibel dengan panel drawer overlay.

### 3.5.8 Footer Lembar Kertas (`Footer.astro`)
- Latar kertas putih (`var(--canvas)`) dengan garis pembatas atas tinta biru tipis (`border-top: 1px solid var(--line-ruled)`).
- 3 blok kolom: Identitas Brand & Tagline + CTA WhatsApp, Daftar Navigasi Halaman, serta Jam Operasional + Media Sosial Instagram.
- Garis pemisah bawah bermotif garis putus-putus (`border-top: 1px dashed var(--line)`) dengan pernyataan konsep: `Website oleh ENLESWEB.`.

### 3.5.9 Floating WhatsApp (`FloatingWhatsApp.astro`)
- Lingkaran hijau resmi WhatsApp `#25D366` (hover `#20BA5A`) dengan ikon putih di sudut kanan bawah layar (`width: 56px; height: 56px;` di mobile, `60px; height: 60px;` di desktop, `border-radius: 50%`).

## 3.6 Spesifikasi Responsif dan Breakpoints
- **Mobile (360px – 767px):**
  - Margin guide menyempit ke 18px (sel perforasi disembunyikan).
  - Padding container: 14px kiri dan kanan.
  - Tabel Hero reflow ke stacked panels vertikal.
  - Header navigasi beralih ke tombol toggle menu dengan full drawer overlay.
  - Floating WhatsApp berukuran 56px.
- **Tablet (768px – 1023px):**
  - Margin guide 44px dengan barisan sel perforasi 32px aktif.
  - Padding container: 32px kiri dan kanan.
  - Grid multi-kolom mulai terbuka.
- **Desktop (1024px – 1440px+):**
  - Navigasi desktop penuh horizontal dengan tombol WhatsApp `size="nav"`.
  - Layout 3 kolom tabel jadwal Hero tampil penuh.
  - Batas maksimal container 1080px di tengah layar.
  - Floating WhatsApp berukuran 60px.

---

# BAGIAN 4: SPEC.md (As-Is Technical Architecture and Implementation Specification)

## 4.1 Stack Teknologi (As-Is)
- **Framework Utama:** Astro v5 (output: `'static'`), konfigurasi di `astro.config.mjs`.
- **Bahasa & Type-Checking:** TypeScript mode strict (`tsconfig.json`), `@astrojs/check`.
- **Sistem Styling:** Pure CSS dengan CSS Custom Properties (`src/styles/global.css` dan scoped styling komponen `.astro`). Tanpa framework utilitas pihak ketiga (tanpa Tailwind, tanpa Bootstrap).
- **Tipografi Self-Hosted:**
  - `@fontsource/space-grotesk` (700 Bold untuk display dan heading).
  - `@fontsource/atkinson-hyperlegible` (400 Regular dan 700 Bold untuk teks body).
  - Preloaded berkas woff2 di `<head>` pada `src/layouts/Base.astro`.
- **Integrasi SEO:** `@astrojs/sitemap` (aktif kondisional saat `PUBLIC_INDEXABLE=true`).
- **Skrip Klien:** Vanilla TypeScript/JavaScript langsung di tag `<script>` Astro tanpa pustaka runtime eksternal.
- **Pengelola Paket:** npm.
- **Target Hosting:** Vercel (konfigurasi di `vercel.json` dengan security headers).

### Perintah Proyek (NPM Scripts)

| Perintah | Deskripsi Fungsi |
| --- | --- |
| `npm run dev` | Menjalankan server pengembangan Astro lokal. |
| `npm run build` | Menghasilkan berkas statis di direktori `dist/` (exit code wajib 0). |
| `npm run preview` | Pratinjau hasil build lokal dari direktori `dist/`. |
| `npm run check` | Pemeriksaan diagnostik tipe Astro dan TypeScript. |
| `npm run verify` | Menjalankan verifikasi otomatis 13 aturan kualitas pada `dist/`. |
| `npm run verify:release` | Melakukan build ganda (demo dan indexable mode) lalu memverifikasi keduanya. |
| `npm test` | Menjalankan `npm run build` dilanjutkan `npm run verify`. |

## 4.2 Struktur Berkas Repositori (As-Is)

```
d:/myself/experiments/tuntas/
├── .agents/                    (Skill antislop lokal untuk kode, copywriting, ui, mobile)
├── anti-slop/                  (Catatan audit antislop)
├── public/
│   ├── favicon.svg             (Favicon logo tuntas)
│   └── hero-still-life.jpg     (Aset cadangan)
├── scripts/
│   ├── slop-lint.mjs           (Linter kata terlarang dan aturan antislop)
│   ├── verify.mjs              (Test suite 13 aturan rilis pada dist/)
│   ├── verify-release.mjs      (Runner verifikasi build rilis ganda)
│   ├── serve-project.mjs       (Runner server lokal mandiri)
│   └── serve-all.mjs           (Runner batch server)
├── src/
│   ├── components/
│   │   ├── BulletList.astro        (Komponen daftar poin rapi)
│   │   ├── Callout.astro           (Kotak catatan khusus latar tint)
│   │   ├── ContactForm.astro       (Form interaktif generator pesan WhatsApp)
│   │   ├── DataTable.astro         (Tabel data generik tabular)
│   │   ├── FactSheet.astro         (Komponen lembar fakta)
│   │   ├── FinalCta.astro          (Section konsultasi penutup di Beranda)
│   │   ├── FloatingWhatsApp.astro  (Tombol WhatsApp melayang hijau bulat di kanan bawah)
│   │   ├── Footer.astro            (Footer lembar kertas dengan garis batas atas)
│   │   ├── FormatCards.astro       (Tabel komparasi format belajar di Beranda)
│   │   ├── Hero.astro              (Hero utama dengan lembar SiDU & master schedule table)
│   │   ├── MapEmbed.astro          (Embed iframe Google Maps interaktif)
│   │   ├── Navbar.astro            (Header sticky dengan transisi scroll dan drawer mobile)
│   │   ├── PageHeader.astro        (Header judul sub-halaman)
│   │   ├── ProgramRows.astro       (Baris ledger program belajar di Beranda)
│   │   ├── ProgramSection.astro    (Bagian rincian program di halaman /program)
│   │   ├── SocialLinks.astro       (Tautan media sosial Instagram)
│   │   ├── StepList.astro          (4 langkah cara belajar horizontal)
│   │   └── WhatsAppButton.astro    (Tombol taktil WA: default, hero, nav, stamp)
│   ├── config/
│   │   └── site.ts                 (Konfigurasi mode demo, nomor WA, metadata situs)
│   ├── content/
│   │   └── copy.ts                 (Kamus teks lengkap, identik dengan CONTENT.md)
│   ├── data/
│   │   ├── fees.ts                 (Data biaya terstruktur numerik dan format rupiah)
│   │   └── schedule.ts             (Data jadwal slot kelompok per kelas)
│   ├── layouts/
│   │   └── Base.astro              (Layout induk dengan grid lembar buku tulis SiDU & margin cells)
│   ├── lib/
│   │   ├── format.ts               (Helper pemformatan rupiah, hari, dan rentang jam)
│   │   └── whatsapp.ts             (Generator URL dan perangkai pesan WhatsApp)
│   ├── pages/
│   │   ├── 404.astro               (Halaman status not-found 404)
│   │   ├── cara-belajar.astro      (Rute /cara-belajar)
│   │   ├── index.astro             (Rute / Beranda)
│   │   ├── jadwal-biaya.astro      (Rute /jadwal-biaya)
│   │   ├── kontak.astro            (Rute /kontak)
│   │   ├── program.astro           (Rute /program)
│   │   ├── robots.txt.ts           (Endpoint dinamis /robots.txt)
│   │   └── tentang.astro           (Rute /tentang)
│   ├── styles/
│   │   └── global.css              (Token CSS, palet SiDU, tipografi, grid baris kertas)
│   └── env.d.ts                    (Definisi tipe environment Astro)
├── astro.config.mjs            (Konfigurasi build Astro)
├── package.json                (Manifest proyek)
├── package-lock.json           (Kunci versi dependensi)
├── tsconfig.json               (Konfigurasi TypeScript strict)
├── vercel.json                 (Konfigurasi deployment Vercel)
├── AGENTS.md                   (Panduan agent dan antislop pointer)
├── CONTENT.md                  (Spesifikasi salinan teks resmi)
├── DESIGN.md                   (Spesifikasi desain visual dan token)
├── PRD.md                      (Spesifikasi produk dan ruang lingkup)
├── SPEC.md                     (Spesifikasi teknis as-is ini)
└── TUNTAS-DOCS-V3.md           (Dokumentasi master monolitik terpadu V3)
```

## 4.3 Rincian Modul Data dan Lib (As-Is)

### 4.3.1 `src/config/site.ts`
- Menyimpan konfigurasi global:
  - `name`: `'tuntas'`
  - `city`: `'Yogyakarta'`
  - `address`: `'Jl. Contoh No. 12, Yogyakarta'`
  - `demoMode`: boolean (secara default `true` untuk showcase ENLESWEB)
  - `enleswebWhatsappNumber`: `'6285156801570'` (nomor resmi ENLESWEB untuk demo)
  - `studioWhatsappNumber`: `''` (diisi nomor bimbel asli saat mode produksi)
  - `siteUrl`: URL produksi dari `PUBLIC_SITE_URL`
  - `enleswebUrl`: `''` (tautan kembali ke ENLESWEB jika tersedia)
  - `instagramUrl`: `'https://www.instagram.com/enlesweb/'`
  - `mapsUrl`: `'https://maps.google.com/?q=Yogyakarta'`
  - `mapsEmbedUrl`: `'https://maps.google.com/maps?q=Yogyakarta&t=&z=12&ie=UTF8&iwloc=&output=embed'`
  - `indexable`: boolean (mengendalikan indexation `meta robots` dan sitemap)

### 4.3.2 `src/data/fees.ts` & `src/data/schedule.ts`
- Menyimpan data terstruktur yang dirender di halaman `/jadwal-biaya`:
  - `fees.ts`: Menyimpan biaya bulanan kelompok kecil (`sd: 300000`, `smp: 350000`, `sma: 400000`), biaya privat per sesi (`sd: 90000`, `smp: 100000`, `sma: 120000`), konstanta `GROUP_SESSIONS_PER_MONTH = 8`, dan `REGISTRATION_FEE = 50000`.
  - `schedule.ts`: Menyimpan slot sesi reguler untuk kelas `SD A`, `SD B`, `SMP A`, `SMP B`, `SMA A`, `SMA B` dengan properti `days` (`['Senin', 'Kamis']` atau `['Selasa', 'Jumat']`) serta jam mulai dan selesai.

### 4.3.3 `src/lib/whatsapp.ts`
- Fungsi `waUrl(topic, page)`: Membangun link `https://wa.me/{nomor}?text={encodedText}`.
  - Mode Demo: Menggunakan template `Halo ENLESWEB, saya sedang melihat contoh website tuntas, halaman {halaman}. Saya mau tanya tentang pembuatan website.`.
  - Mode Studio: Menggunakan template `Halo tuntas, saya mau tanya tentang {topik}.`.
- Fungsi `waFromContact(f: ContactFields)`: Mengonversi data isian formulir kontak menjadi format teks WhatsApp terstruktur lengkap siap kirim.

### 4.3.4 `src/lib/format.ts`
- Fungsi utilitas:
  - `rupiah(n: number)`: Format mata uang Indonesia (`Rp300.000`).
  - `joinDays(days: readonly string[])`: Menggabungkan hari (`Senin dan Kamis`).
  - `timeRange(start: string, end: string)`: Menggabungkan rentang jam (`15.30 sampai 17.00`).
  - `fill(template, vars)`: Mengganti placeholder `{kunci}` dengan nilai dinamis.

## 4.4 Implementasi Layout dan Komponen Kunci (As-Is)

### 4.4.1 Layout Induk `Base.astro`
- Membungkus seluruh halaman di dalam `<main id="konten" class="notebook-sheet">`.
- Mengatur grid `.notebook-wrapper`:
  - Desktop / Tablet: `grid-template-columns: 44px 1fr`
  - Mobile: `grid-template-columns: 18px 1fr`
- Kolom kiri `.notebook-margin-guide` menampilkan garis vertikal merah halus (`border-right: 2px solid var(--correction-subtle)`).
- Menghasilkan 120 baris sel perforasi margin (`.notebook-margin-cells` dengan elemen `.margin-cell-box`) pada viewport tablet dan desktop ($\ge 768\text{px}$).
- Latar bergaris biru tinta berulang setiap 32px menggunakan `repeating-linear-gradient`.
- Melakukan preload berkas woff2 font Display (Space Grotesk 700) dan Body (Atkinson Hyperlegible 400 dan 700).
- Skrip inline menginisialisasi `IntersectionObserver` untuk animasi kelas `.reveal-on-scroll` saat elemen memasuki viewport.

### 4.4.2 Hero Beranda `Hero.astro`
- Mengimplementasikan skala tipografi monumental terkalibrasi kisi 64px & 32px:
  - H1 (`.hero-headline`): Desktop `font-size: 2.25rem` (36px), `line-height: 64px`, `transform: translateY(9px)`, `margin-bottom: 32px`.
  - Lead (`.hero-lead`): Desktop `font-size: 1.0625rem` (17px), `line-height: 32px`, `transform: translateY(6px)`, `margin-bottom: 32px`.
  - CTA Action Row: `height: 32px; margin-bottom: 32px;`, memuat `WhatsAppButton` berukuran `stamp` (tinggi 32px).
  - Master Schedule Table: Kontainer terpadu bergaris tinta 1px, memuat caption bar (`Jadwal kelompok kecil per kelas` dan penegasan `Maksimal 6 siswa`). Menampilkan tabel 3 kolom horizontal di desktop dan beralih ke panel bertumpuk vertikal di mobile tanpa overflow horizontal.

### 4.4.3 Navigasi Header `Navbar.astro`
- Header dengan `position: sticky; top: 0; z-index: 100`.
- Skrip klien memantau event `scroll`: saat `window.scrollY > 8`, atribut `data-scrolled="true"` ditambahkan pada header, mengubah latar transparan menjadi warna solid `var(--line-ruled-solid)`.
- Mengendalikan drawer navigasi mobile menggunakan atribut aksesibilitas `aria-expanded` dan event listener keyboard untuk tombol `Escape`.

### 4.4.4 Form Kontak `ContactForm.astro`
- Formulir interaktif murni sisi klien tanpa backend basis data:
  - Field: Nama Wali (wajib), Nama Siswa (wajib), Jenjang (wajib, select), Format Belajar (wajib, radio), Mata Pelajaran (opsional), dan Pesan (opsional).
  - Validasi JavaScript saat submit memeriksa kelengkapan data.
  - Jika ada field kosong, kotak `#form-error-summary` menampilkan daftar pesan kesalahan dan fokus diarahkan ke elemen yang bermasalah.
  - Jika valid, URL WhatsApp terformat disusun secara otomatis dan dibuka di tab baru (`window.open`), disertai tampilan `#form-success-banner` dan tombol fallback.

### 4.4.5 Floating WhatsApp `FloatingWhatsApp.astro`
- Komponen mengambang di pojok kanan bawah layar (`position: fixed; bottom: 20px; right: 20px;`).
- Tombol lingkaran sempurna (`border-radius: 50%`) dengan warna hijau resmi WhatsApp (`var(--wa): #25D366`), ukuran 56px di mobile dan 60px di desktop.
- Menentukan parameter topik pesan WhatsApp secara dinamis berdasarkan halaman aktif melalui `copy.floatingTopics[activePage]`.

## 4.5 Rangkaian Verifikasi Kualitas Otomatis (As-Is)

Skrip `scripts/verify.mjs` memvalidasi 13 aturan mutlak pada direktori hasil kompilasi `dist/`:
1. **Rule 1 (Em/En Dash Check):** Memastikan tidak ada satupun karakter em dash (`—`) atau en dash (`–`) di seluruh file kode sumber (`src/`) dan hasil build (`dist/`).
2. **Rule 2 (Forbidden Buzzwords Check):** Memastikan 0 kata promosi/buzzword terlarang (*terbaik, terpercaya, profesional, berkualitas, gratis, garansi, modern, presisi, premium, elevate, seamless, crafted, powerful, nilai naik, lulus, juara*) pada teks HTML `dist/`.
3. **Rule 3 (Page Count Check):** Memastikan tepat 6 halaman utama (`index.html`, `program.html`, `jadwal-biaya.html`, `cara-belajar.html`, `tentang.html`, `kontak.html`) ditambah `404.html`.
4. **Rule 4 (Heading Structure Check):** Memastikan tepat satu tag `<h1>` per halaman dan hierarki heading tanpa loncatan level semantik.
5. **Rule 5 (Meta Tags Check):** Memastikan `<title>` dan meta description unik per halaman; panjang meta description antara 50 sampai 160 karakter untuk 6 halaman utama.
6. **Rule 6 (Data Integrity Check):** Memvalidasi nilai biaya (`Rp300.000`, `Rp350.000`, `Rp400.000`, `Rp90.000`, `Rp100.000`, `Rp120.000`, `Rp50.000`) dan kode kelas jadwal cocok persis di `jadwal-biaya.html`.
7. **Rule 7 (CTA Attributes & Styling Check):** Memvalidasi 12 titik atribut `data-cta-location` terpasang lengkap, seluruh link WA memiliki `target="_blank"` dan `rel="noopener noreferrer"`, serta properti `box-shadow` secara ketat hanya diizinkan pada `.btn-tactile`.
8. **Rule 8 (WhatsApp Integration Check):** Pada mode demo, seluruh link WhatsApp wajib mengarah ke nomor ENLESWEB `6285156801570` dan diawali teks `"Halo ENLESWEB"`.
9. **Rule 9 (Link & Anchor Validity Check):** Seluruh tautan internal dan anchor hash valid tanpa string `"unknown"`, `"undefined"`, atau `"null"`.
10. **Rule 10 (Accessibility Alt Check):** Seluruh tag `<img>` wajib memiliki atribut `alt`.
11. **Rule 11 (Transparency Notice Check):** Penanda konsep `Website oleh ENLESWEB.` atau `Konsep website buatan ENLESWEB` wajib ada di footer semua halaman serta penanda data contoh di halaman tentang dan jadwal-biaya.
12. **Rule 12 (Robots Indexation Check):** Tag meta `robots` bernilai `noindex, nofollow` dan tag canonical ditiadakan pada mode demo.
13. **Rule 13 (Leak Prevention Check):** Memastikan tidak ada kebocoran nomor telepon atau email pribadi yang tidak diinginkan.

Skrip `scripts/slop-lint.mjs` memvalidasi kepatuhan salinan teks dan estetika antislop di seluruh halaman (0 FAIL, 0 REVIEW).
