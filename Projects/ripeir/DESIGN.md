# DESIGN.md - ripeir (Visual & Design Specification)
Versi 2.0 (Starter Single-Page As-Is Synchronization)

---

## Changelog Versi 1.1 (As-Is Synchronization)
- **Token Warna:** Diperbarui agar presisi dengan implementasi `src/styles/global.css` (`--bg: #08100e`, `--bg-raised: #101c18`, `--bg-sunken: #050a08`, `--line: #1c2b26`, `--line-strong: #2c4038`, `--grid: #12221d`).
- **Floating WhatsApp Button:** Spesifikasi baru untuk tombol aksi cepat melayang di sudut kanan bawah (`.floating-wa`) berukuran 60px di desktop dan 54px di mobile dengan warna resmi WhatsApp (`#25D366`), ikon SVG putih proporsional, dan tooltip interaktif desktop.
- **Komposisi Visual Hero:** Diperbarui dari SVG wireframe 4-layer menjadi latar visual workbench cutting mat teknisi realistis (`/images/hero-deskmat-full.jpg`) lengkap dengan ambient lighting, tipografi centered legibel, dan transisi fade ke section berikutnya.
- **Sistem Animasi:** Dokumentasi kelas `.animate-section` dengan `IntersectionObserver`, transisi opasitas dan translasi vertikal bertahap, serta kepatuhan penuh terhadap preferensi aksesibilitas `prefers-reduced-motion: reduce`.
- **Spesifikasi Footer 3-Kolom:** Dokumentasi tata letak footer mencakup tautan media sosial (Instagram, X, YouTube, GitHub), blok informasi workshop, dan embed iframe peta lokasi Google Maps.

## Changelog Versi 1.2 (Panduan Pesan WhatsApp)
- Menetapkan tampilan form Kontak sebagai kelompok kontrol berlabel dengan state error yang terlihat, fokus keyboard, dan reflow satu kolom pada layar sempit.
- Mempertahankan token warna, garis, tombol, dan radius yang sudah digunakan. Hijau WhatsApp tetap khusus untuk tombol aksi cepat melayang.

## Changelog Versi 2.0 (Starter Single-Page As-Is Synchronization)
- **Arsitektur Tata Letak Single Page:** Seluruh alur informasi disatukan ke dalam satu alur scroll vertikal di halaman utama (`/`), didukung tautan anchor scroll `#layanan`, `#cara-kerja`, dan `#kontak`.
- **Grid Layanan 4 Kartu (`ServicesGrid.astro`):** Merombak katalog layanan menjadi grid 2x2 pada desktop dan 1 kolom pada mobile. Setiap kartu mengadopsi struktur lembar kerja teknis: nama perangkat monospace, ringkasan, daftar kendala ber-bullet strip, dan tombol WhatsApp inline khusus untuk perangkat tersebut.
- **Alur Kerja Padat 4 Langkah (`StepList.astro`):** Menyederhanakan tampilan cara kerja menjadi 4 tahapan linear dengan penomoran monospace aksen oranye (`01`–`04`), judul tebal, deskripsi singkat, dan CTA WhatsApp proses pengerjaan.
- **Footer Workshop Terpadu (`Footer.astro`):** Memfungsikan footer sebagai target anchor `#kontak` dengan tata letak 3 kolom: Identitas bengkel & WhatsApp, Jadwal jam operasional & alamat, serta Peta interaktif Google Maps dengan tombol tautan eksternal. Diakhiri baris kredit `"Website oleh ENLESWEB."`.
- **Navigasi Header Bersih:** Navbar desktop dan drawer mobile mengarahkan pengguna secara mulus ke seksi yang relevan tanpa muat ulang halaman.

---

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

---

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

---

## 3.3 Tipografi
Menggunakan font open-source berlisensi bebas yang di-host lokal via `@fontsource`:

1. **IBM Plex Sans Condensed (600, 700):** Digunakan untuk seluruh elemen judul (H1, H2, H3). Karakter condensed memberi kesan teknis, tegas, dan efisien dalam memanfaatkan ruang horizontal.
2. **IBM Plex Sans (400, 500, 600):** Digunakan untuk teks isi (body), deskripsi, dan tombol. Nyaman dibaca pada layar kecil.
3. **IBM Plex Mono (500):** Digunakan untuk nomor urut langkah (`01`–`04`), nomor telepon WhatsApp, label kendala teknis, dan merek brand ripeir di footer.

---

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
- 3 baris komitmen transparan:
  - `Dicek dulu`
  - `Kamu yang memutuskan`
  - `Apa adanya`

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
- Menggunakan `position: fixed; z-index: 99;`.

---

## 3.5 Animasi & Aksesibilitas (Motion & A11y)
- **Scroll Reveal:** Setiap seksi memiliki kelas `.animate-section` yang diobservasi oleh `IntersectionObserver` di `Base.astro`. Saat memasuki viewport, seksi mengalami transisi opasitas dan translasi vertikal naik 16px secara halus.
- **Scroll Margin:** Seluruh target anchor (`#layanan`, `#cara-kerja`, `#kontak`) memiliki `scroll-margin-top: 80px` agar tidak tertutup oleh navbar sticky.
- **Preferensi Gerakan:** Jika pengguna mengaktifkan `prefers-reduced-motion: reduce`, seluruh animasi dinonaktifkan secara otomatis dan konten langsung tampil 100% visible.
- **Ukuran Tap Target:** Seluruh tombol dan tautan memenuhi standar minimum 44x44px.
