# PRD.md - tuntas
Versi 3.0 (As-Is Built Specification)
Tanggal: 14 Oktober 2026

Dokumen ini mencatat tujuan, ruang lingkup, dan arsitektur produk website tuntas sesuai kondisi riil (as-is) yang terbangun pada repositori saat ini.
Seluruh rincian teks bersumber dari CONTENT.md, desain visual dari DESIGN.md, dan implementasi teknis dari SPEC.md.

---

## 1. Konteks Produk
tuntas adalah konsep website untuk bimbingan belajar (bimbel) kelompok kecil dan les privat jenjang SD, SMP, dan SMA. Dibuat oleh ENLESWEB sebagai contoh paket Business. tuntas bukan klien komersial nyata, bukan bimbel yang sedang beroperasi secara fisik, dan tidak digunakan sebagai bukti sosial palsu.

### Fungsi bagi ENLESWEB:
- **Showcase Paket Business:** Berfungsi sebagai demo resmi paket Business pada galeri proyek homepage ENLESWEB, mendampingi demo Starter dan Growth (seperti Jerseay, berflower, dan ripeir).
- **Pembuktian Kapabilitas:** Memperlihatkan bahwa paket Business menghasilkan website multi-halaman lengkap yang terstruktur rapi, berkarakter unik, ramah aksesibilitas, dilengkapi optimasi SEO dasar, serta memiliki alur konversi WhatsApp yang matang tanpa memerlukan modul interaktif kompleks tingkat Growth.
- **Fondasi Arketipe Desain:** Menjadi referensi implementasi arketipe "H4 Index/Table Hero" dengan metafora fisik lembar buku tulis bergaris SiDU dan ledger administrasi pendidikan.

Prinsip penulisan: *Concrete > Clever*, *Information > Marketing*, *Description > Slogan*. Menolak kata promosi klise (*hyperbole-free*).

---

## 2. Tujuan Website
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

---

## 3. Sasaran Audiens
- **Pengunjung Demo:** Calon klien ENLESWEB (pemilik lembaga kursus, bimbel, sekolah non-formal, penyedia jasa pendidikan) yang membuka portofolio lewat perangkat ponsel maupun desktop.
- **Persona Konsep:** Orang tua atau wali murid siswa SD hingga SMA (rentang usia 30 sampai 50 tahun) yang mencari pendampingan belajar terarah dengan rasio siswa kecil dan jadwal yang pasti.
- **Gaya Bahasa:** Bahasa Indonesia baku, santun, lugas, bersahabat, menggunakan sapaan "Anda".

---

## 4. Penawaran Layanan (Data Konsep As-Is)

### 4.1 Layanan Belajar
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

### 4.2 Pemetaan Fitur Paket Business (As-Is)

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

---

## 5. Ruang Lingkup Halaman (As-Is)

### 5.1 Enam Halaman Utama + 404

| No | Halaman | Rute | Peran & Struktur Halaman As-Is |
| --- | --- | --- | --- |
| 1 | Beranda | `/` | **Signature Hero:** Lembar buku SiDU, H1 monumental terkalibrasi baseline kisi 64px, 1 CTA stempel WhatsApp 32px, tabel Master Schedule Ledger 3 tier tanpa harga eksplisit (desktop 3 kolom sejajar, mobile reflow panel bertumpuk). Dilanjutkan: Program belajar (ledger rows), Dua format belajar (tabel komparasi), Cara belajar (4 baris horizontal), dan Final CTA konsultasi. |
| 2 | Program | `/program` | PageHeader, jump links (`#sd`, `#smp`, `#sma`), kartu rincian per jenjang (kelas, mata pelajaran lengkap dengan square bullet markers, format, tombol konsultasi WhatsApp terpisah per jenjang). |
| 3 | Jadwal dan Biaya | `/jadwal-biaya` | PageHeader, Callout intro data contoh, tabel jadwal kelompok kecil (kelas SD A/B, SMP A/B, SMA A/B dengan hari dan slot jam), tabel biaya lengkap (biaya bulanan kelompok kecil Rp300.000 sampai Rp400.000, biaya privat per sesi Rp90.000 sampai Rp120.000, biaya pendaftaran Rp50.000), daftar catatan ketentuan, dan tombol WhatsApp. |
| 4 | Cara Belajar | `/cara-belajar` | PageHeader, 4 langkah terperinci (Pemetaan awal, Rencana belajar, Pertemuan rutin, Catatan perkembangan bulanan), daftar persiapan alat belajar, aturan jika berhalangan hadir, dan tombol konsultasi WhatsApp. |
| 5 | Tentang dan Lokasi | `/tentang` | PageHeader, profil bimbingan tuntas, jam operasional, alamat contoh Yogyakarta, embed peta Google Maps responsif (layout 2 kolom di desktop), tautan media sosial Instagram, dan kartu catatan transparansi konsep ENLESWEB. |
| 6 | Kontak | `/kontak` | Container 2 kolom desktop: kolom kiri memuat judul, intro, tombol WhatsApp utama, jam operasional, alamat contoh, dan media sosial; kolom kanan memuat Form Kontak interaktif (Nama wali, nama siswa, jenjang, format, mapel, pesan) yang otomatis merangkai pesan WA. |
| - | 404 | `/404` | Halaman status not-found yang tetap konsisten di atas lembar buku tulis SiDU dengan tautan kembali ke Beranda. |

### 5.2 Elemen Global
- **Skip Link:** Aksesibilitas keyboard langsung ke `#konten`.
- **Navbar:** Sticky header transparan dengan efek latar solid (`var(--line-ruled-solid)`) saat di-scroll, merek `tuntas`, 5 menu navigasi, dan tombol WhatsApp `size="nav"`. Di layar kecil (<1024px) beralih ke tombol toggle menu dengan panel drawer responsif.
- **Garis Margin Merah Menerus:** Elemen visual pembeda utama (`.notebook-margin-guide`) dengan border kanan merah halus (`2px solid var(--correction-subtle)`) dan 120 baris sel perforasi margin (`.margin-cell-box`) pada layar tablet/desktop ($\ge 768\text{px}$).
- **Footer Lembar Kertas:** Tatanan 3 kolom di atas lembar kertas bergaris dengan garis pembatas atas tinta biru (`border-top: 1px solid var(--line-ruled)`), memuat identitas merek, tagline, tautan internal, jam operasional, tautan Instagram, tombol WhatsApp, dan catatan konsep `Website oleh ENLESWEB.`.
- **Floating WhatsApp:** Tombol mengambang melingkar di kanan bawah dengan warna hijau resmi WhatsApp (`#25D366`), atribut aksesibilitas lengkap (`aria-label`), dan topik dinamis per halaman.

---

## 6. Batasan Sistem (Guarantees & Constraints)
- **Zero Em/En Dash:** Seluruh teks antarmuka dilarang menggunakan karakter em dash (`—`) atau en dash (`–`), wajib menggunakan tanda baca koma, titik, atau kata "sampai".
- **Zero Forbidden Buzzwords:** Larangan keras terhadap kata sifat promosi generik seperti *terbaik, terpercaya, profesional, berkualitas, gratis, garansi, modern, presisi, premium, seamless, elevate, crafted, powerful, nilai naik, lulus, juara*.
- **Tanpa Nominal Rupiah di Hero/Beranda:** Menjaga kemudahan pemeliharaan data publik; rincian angka biaya rupiah dilokalisasi eksklusif pada halaman `/jadwal-biaya`.
- **Integritas Uji Otomatis:** Setiap perubahan wajib lulus uji verifikasi `npm run build`, `node scripts/slop-lint.mjs` (0 FAIL, 0 REVIEW), dan `node scripts/verify.mjs` (100% PASS, seluruh 13 aturan terpenuhi).
