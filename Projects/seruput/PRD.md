# PRD.md - Seruput Kopi
Versi 3.0 (As-Is Production Specification)
Tanggal: 14 Oktober 2026

Dokumen ini menetapkan tujuan, scope, dan batasan produk Seruput Kopi sesuai kondisi aktual (as-is) website saat ini. Salinan teks final ada di CONTENT.md. Arahan visual dan token desain ada di DESIGN.md. Arsitektur implementasi teknis ada di SPEC.md.

---

## 1. Konteks

`Seruput Kopi` adalah konsep website satu halaman untuk kedai kopi mandiri di tepi kanal Venice, Italia. Dibuat oleh ENLESWEB sebagai contoh paket Starter (Layout A) sekaligus template siap-pakai untuk calon klien kedai kopi. `Seruput Kopi` adalah konsep website demonstrasi dan bukan bisnis yang sedang beroperasi secara komersial. Seluruh informasi racikan menu, jam buka, alamat, biji kopi, ulasan, dan kontak adalah data contoh.

Fungsi bagi ENLESWEB:
- Menjadi representasi nyata paket Starter di bagian portofolio ENLESWEB, berdampingan dengan demo Growth (Jerseay, berflower, ripeir) dan Starter lainnya (klimis).
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
