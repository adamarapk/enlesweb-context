# Inventaris Pola Tata Letak (Layout Inventory) 7 Repositori ENLESWEB

Dokumen ini menyajikan inventarisasi struktural murni pola tata letak (*layout patterns*) dari 7 repositori ENLESWEB: `enlesweb`, `seruput`, `ripeir`, `tuntas`, `jerseay`, `klimis`, dan `berflower`. Seluruh analisis berfokus secara ketat pada arketipe tata letak, struktur slot elemen, pemisahan field wajib vs. opsional, perilaku responsif pada lebar 390px (mobile) dan 1280px (desktop), serta sitasi file dan nomor baris sumber. Seluruh analisis bebas dari penyebutan warna, font, maupun metafora dekoratif.

Tangkapan layar resolusi tinggi untuk setiap section dan halaman konteks (total 155 berkas PNG) tersimpan di folder:
`d:\myself\web\7project\_audit\layout-inventory\<nama_repo>\`

---

## 1. Tabel Ringkasan Eksekutif Pola Tata Letak (Tervalidasi 7 Repositori)

Tabel berikut merangkum sebaran arketipe tata letak struktural murni yang teridentifikasi pada ke-8 kategori section di seluruh 7 repositori:

| Kategori Section | Arketipe Tata Letak Struktural Murni | Repositori Pengguna | Frekuensi | Karakteristik Ruang & Responsif |
| :--- | :--- | :--- | :---: | :--- |
| **Navbar** | Baris 3 zona horizontal (kiri identitas, tengah menu horizontal, kanan tombol aksi + hamburger drop-down) | `enlesweb`, `seruput`, `ripeir` | 3 | Desktop baris tunggal seimbang; mobile dropdown vertikal meluncur ke bawah dari bilah navigasi |
| | Baris 2 zona asimetris terpadu (kiri nama, kanan wadah gabungan menu + tombol aksi) | `tuntas`, `klimis` | 2 | Tautan dan tombol menyatu di sisi kanan; mobile toggle drop-down |
| | Baris adaptif mengambang dengan panel drawer samping (*off-canvas*) | `jerseay` | 1 | Header mengambang; mobile tombol "Menu" membuka drawer samping 320px dari kanan dengan penguncian fokus (*focus trap*) |
| | Baris multi-utilitas 4 elemen (nama, dropdown bersarang, indikator status, hamburger) | `berflower` | 1 | Dropdown bertingkat (`<details>`); indikator status tetap muncul di mobile berdampingan dengan hamburger |
| **Hero** | Dua kolom asimetris (kiri teks hirarkis & tombol aksi ganda, kanan visual objek terisolasi) | `enlesweb`, `ripeir`, `berflower` | 3 | 50:50 atau 60:40 di desktop; runtuh menjadi 1 kolom vertikal di mobile (teks atas, visual bawah) |
| | Satu kolom monumental terpusat dengan modul data langsung (struk / master ledger) | `seruput`, `tuntas` | 2 | Judul intro langsung diikuti struk kasir vertikal atau tabel jadwal 3 kolom; mobile tabel beralih ke kartu tumpuk |
| | Kanvas visual sinematik lebar penuh (rasio 16:9 dengan overlay teks editorial tepi) | `jerseay` | 1 | Gambar mendominasi 100% lebar layar; teks dan aksi diletakkan di atas lapisan pelindung keterbacaan tepi |
| | Panggung slider *carousel* foto lebar penuh tanpa garis tepi dengan kontrol samping | `klimis` | 1 | 6 slide dokumentasi berputar dengan tombol prev/next dan titik tablist; mobile sentuh geser (*swipe*) |
| **Layanan / Katalog** | Grid kartu komparasi modular multi-kolom (3 atau 4 kolom kartu terpisah) | `enlesweb` (paket), `seruput` (biji), `ripeir` (servis), `berflower` (koleksi) | 4 | Kartu modular berulang (judul, daftar spesifikasi/fitur, harga, tombol pesan); mobile runtuh 1 kolom |
| | Daftar baris horizontal bertabel & matriks komparasi tabular | `tuntas` (program & jadwal) | 1 | Baris daftar berjenjang memanjang horizontal + tabel komparasi format; mobile scroll horizontal atau kartu pasangan label-nilai |
| | *Lookbook* editorial zig-zag bergantian dengan *micro-specs* tabular garis tipis | `jerseay` (layanan) | 1 | Format bergantian berselang-seling (foto 7 kolom, teks 5 kolom) dengan strip spesifikasi tabular 3 baris |
| | Papan menu tarif terstruktur dengan rincian tindakan & titik pengisi | `klimis` (tarif) | 1 | Blok layanan utama berdaftar rincian tindakan + deretan item tambahan bertitik pengisi (*leader dots*) |
| | Panggung pratinjau terpisah dengan pemilih tab vertikal interaktif (*Master-Detail Split Stage*) | `enlesweb` (proyek), `jerseay` (portofolio pilihan) | 2 | Desktop 2 kolom: panggung mockup aktif kiri, deretan tombol switcher kanan; klik tombol menukar mockup panggung |
| **Langkah / Alur** | Grid horizontal kartu berurutan bernomor digit besar | `berflower` (home) | 1 | 3 kartu sejajar berdampingan; mobile runtuh menjadi 1 kolom vertikal ke bawah |
| | Dua kolom: Judul samping menempel (*sticky*) & Akordeon linier interaktif berjalur rel | `enlesweb` | 1 | Desktop 2 kolom: judul menempel kiri, akordeon interaktif berjalur rel kanan (langkah 1 terbuka, klik chevron membuka langkah); mobile 1 kolom akordeon |
| | Daftar baris tabular bergaris pemisah horizontal 3-kolom (*Hairline Row Ledger*) | `ripeir`, `tuntas` | 2 | Baris-baris bergaris pemisah horizontal: kolom nomor urut digit, kolom judul, kolom uraian/prosedur |
| | Bilah rantai langkah sebaris berpanah dengan tautan telusuri (*Inline Arrow-Chained Flow Strip*) | `jerseay` (home) | 1 | Baris tunggal horizontal ringkas: Langkah 1 &rarr; Langkah 2 &rarr; Langkah 3 &rarr; Langkah 4 bersanding tautan telusuri |
| | Diagram alur node interaktif (*Node Workflow Canvas* dengan konektor kurva SVG dinamis) | `jerseay` (proses) | 1 | Kartu proses berselang-seling dengan soket masuk/keluar dan jalur kabel kurva SVG berpanah dinamis |
| **Keunggulan** | Dua kolom asimetris: Kolom narasi cerita profil & Kartu pernyataan nilai tunggal | `enlesweb` | 1 | Kiri narasi cerita profil; kanan 1 kartu pernyataan nilai bisnis bersudut lengkung; mobile bertumpuk 1 kolom |
| | Kartu mengambang menempel (*sticky sidebar* loyalitas & jaminan) | `klimis` | 1 | Desktop kolom samping melayang (sticky) mendampingi katalog; mobile beralih menjadi kartu teratas (`order: 1`) |
| | Tiga pilar sejajar bernomor digit besar / Tiga kartu ulasan pembuktian sosial | `ripeir`, `seruput` | 2 | 3 kolom pilar horizontal atau kartu testimoni; mobile runtuh menjadi 3 kartu vertikal bertumpuk |
| | Kartu kontainer horizontal tunggal memanjang berbingkai lapang | `berflower` | 1 | Kotak kontainer tunggal lapang berisi komitmen mutu tanpa visual berat; sangat hemat ruang layar |
| | Dua kolom editorial narasi & dokumentasi / peta pendamping | `seruput` (story), `tuntas` (tentang) | 2 | Pembagian 2 kolom: satu sisi teks narasi filosofi, sisi lain foto dokumentasi atau modul lokasi |
| **Info Lokasi & Jam** | Dua kolom terbelah (satu sisi teks rincian alamat & jadwal terstruktur, sisi lain iframe peta interaktif) | `seruput`, `klimis`, `tuntas` (tentang) | 3 | Rincian alamat semantik `<address>` & tabel jam operasional bersanding langsung dengan iframe peta interaktif |
| | Modul peta lokasi terintegrasi langsung di dalam kolom footer | `berflower` | 1 | Menghemat blok seksi beranda; modul iframe peta dan alamat fisik ditempatkan di dalam kolom footer |
| | Bilah alamat dan jam respons ringkas berbasis teks/tautan tanpa iframe | `enlesweb`, `ripeir`, `jerseay` | 3 | Ringkas, hemat kuota dan beban unduhan; teks alamat fisik semantik dan tautan eksternal ke peta luar |
| **CTA Akhir** | Kartu kontainer berbingkai tunggal terpusat penuh (*Single Centered Box*) | `enlesweb`, `seruput`, `berflower`, `klimis` | 4 | Kartu terpusat di tengah dengan satu tombol aksi utama yang melebar 100% selebar kolom pada mobile |
| | Bilah horizontal dua kolom terbagi diapit garis pemisah (kiri teks ajakan, kanan tombol aksi) | `ripeir` (tombol tunggal), `jerseay` (tombol ganda) | 2 | Garis pembatas tipis atas-bawah; teks di satu sisi dan tombol aksi (tunggal atau formulir + chat) di sisi lain |
| | Format tiket pendaftaran asimetris dengan tombol stempel | `tuntas` | 1 | Tata letak asimetris bergaya tiket bergaris tepi tipis dengan tombol aksi berukuran stempel formal |
| **Footer** | Multi-kolom berjenjang 4 kolom (profil, navigasi utama, kebijakan privasi terpisah, kontak) | `enlesweb` | 1 | Tata letak terlengkap dengan tautan kebijakan privasi terpisah dan jam respons; mobile bertumpuk 1 kolom |
| | Tiga kolom fungsional dengan tombol aksi langsung di dalam kolom profil | `jerseay` | 1 | Kolom pertama memuat tombol mini aksi formulir brief dan chat WhatsApp berdampingan navigasi dan spesialisasi |
| | Tiga kolom klasik terstruktur (profil merek, jam operasional, navigasi) | `seruput`, `ripeir`, `tuntas`, `klimis` | 4 | Struktur standar efisien untuk situs lokal dan bisnis jasa teknis |
| | Multi-utilitas terpadu 3 kolom (media sosial, modul peta interaktif, navigasi internal) | `berflower` | 1 | Footer kaya komponen dengan peta tersemat dan baris ikon media sosial |

---

## 2. Rekomendasi 3 Arketipe Paling Berbeda per Section (Varian Wireframe)

Berikut adalah rekomendasi 3 arketipe paling berbeda secara struktural untuk tiap kategori section. Rekomendasi ini dirancang agar tim perancang wireframe memiliki 3 alternatif tata letak murni yang saling bertolak belakang dalam pendekatan ruang:

### A. Rekomendasi Navbar
1. **Varian 1: Baris 3 Zona Klasik dengan Dropdown Panel Vertikal Meluncur** (Basis: `enlesweb`, `ripeir`)
   - *Karakter Ruang*: Pembagian horizontal 3 zona (kiri identitas brand, tengah deretan tautan, kanan tombol aksi). Di mobile (390px), tautan tengah dan tombol aksi digantikan tombol hamburger yang membuka panel vertikal meluncur ke bawah dari bilah navigasi.
   - *Target Wireframe*: Sangat ideal untuk landing page satu halaman standar yang memerlukan akses langsung tombol aksi di baris navigasi desktop.
2. **Varian 2: Baris Adaptif Mengambang dengan Drawer Samping Off-Canvas** (Basis: `jerseay`)
   - *Karakter Ruang*: Header mengambang di atas konten hero. Di mobile (390px), tombol teks "Menu" membuka drawer samping dari kanan selebar 320px dengan tirai pelindung (*backdrop scrim*), tombol tutup silang mandiri, dan penguncian fokus aksesibel (*focus trap*).
   - *Target Wireframe*: Cocok untuk situs multi-halaman berorientasi portofolio atau studio profesional yang memerlukan hierarki navigasi terisolasi dan bebas gangguan saat dibuka.
3. **Varian 3: Baris Multi-Utilitas dengan Submenu Bersarang & Status Persisten** (Basis: `berflower`)
   - *Karakter Ruang*: Baris 4 elemen yang memadukan menu dropdown bertingkat (`<details>/<summary>`) di desktop dan wadah status persisten (misal ikon keranjang / badge) yang tetap tampil di mobile berdampingan dengan hamburger.
   - *Target Wireframe*: Sangat tepat untuk katalog produk, e-commerce ringan, atau direktori layanan kompleks yang memiliki banyak sub-halaman informasi.

### B. Rekomendasi Hero
1. **Varian 1: Dua Kolom Asimetris (Kiri Teks & Aksi, Kanan Objek Visual Potong)** (Basis: `enlesweb`, `berflower`)
   - *Karakter Ruang*: Pembagian 50:50 atau 60:40. Kolom kiri memuat hierarki judul utama, label harga/penawaran, paragraf penjelas, dan tombol aksi ganda; kolom kanan menampilkan objek visual potong terisolasi (*cutout*). Di mobile bertumpuk 1 kolom linier (teks atas, visual bawah).
   - *Target Wireframe*: Pola konversi standar industri dengan rasio keberhasilan tinggi untuk produk tunggal atau jasa spesifik.
2. **Varian 2: Satu Kolom Monumental Terpusat dengan Tabel/Struk Data Langsung** (Basis: `tuntas`, `seruput`)
   - *Karakter Ruang*: Meniadakan panggung ilustrasi konvensional. Menggunakan judul skala monumental di atas, langsung diikuti modul data fungsional terintegrasi (struk kasir lengkap bertitik pengisi atau master ledger jadwal 3 kolom). Di mobile, tabel beralih ke kartu vertikal padat.
   - *Target Wireframe*: Sangat unggul untuk bisnis yang mengutamakan transparansi data langsung (jadwal kelas bimbingan, menu makanan/minuman, tarif transparan) tanpa basa-basi visual.
3. **Varian 3: Kanvas Visual Sinematik Lebar Penuh (Rasio 16:9 dengan Overlay Editorial Tepi)** (Basis: `jerseay`)
   - *Karakter Ruang*: Panggung visual mendominasi 100% lebar layar dengan rasio 16:9 dan ketinggian minimal terkontrol (min 600px). Teks editorial dan tombol aksi ganda diletakkan di atas lapisan pelindung keterbacaan di tepi kiri.
   - *Target Wireframe*: Sempurna untuk merek yang membutuhkan pembuktian mutu visual instan (studio desain jersey, fotografi, pakaian olahraga kustom).

### C. Rekomendasi Layanan / Katalog
1. **Varian 1: Grid Kartu Komparasi Multi-Kolom Modular** (Basis: `enlesweb` paket, `seruput`, `ripeir`)
   - *Karakter Ruang*: Grid 3 atau 4 kartu berdiri sendiri yang berulang secara teratur. Masing-masing kartu memuat judul, daftar fitur/spesifikasi, nominal harga, dan tombol aksi mandiri. Di mobile menjadi 1 kolom bertumpuk ke bawah.
   - *Target Wireframe*: Paling modular, fleksibel, dan mudah diisi konten komparatif bervariasi tanpa merusak tata letak.
2. **Varian 2: Lookbook Editorial Zig-Zag dengan Micro-Specs Tabular Garis Tipis** (Basis: `jerseay` layanan)
   - *Karakter Ruang*: Setiap entri disajikan dalam format dua kolom besar berselang-seling kiri dan kanan (foto 7 kolom, teks 5 kolom) dilengkapi strip spesifikasi teknis berbentuk tabel garis tipis (Siluet, Standar, Keluaran) dan tombol brief.
   - *Target Wireframe*: Sangat kuat untuk katalog portofolio proyek unggulan, lookbook produk kustom, atau studi kasus bernilai tinggi.
3. **Varian 3: Split Stage Master-Detail Interaktif (Panggung Pratinjau Kiri, Pemilih Tab Kanan)** (Basis: `enlesweb` proyek)
   - *Karakter Ruang*: Desktop 2 kolom (1.35fr : 1fr): Kolom kiri menampilkan kartu panggung aktif (mockup rasio 16:10, metadata badge, deskripsi, tautan CTA); kolom kanan menampilkan tumpukan tombol pemilih minimized dengan ikon/favicon dan chevron yang secara interaktif menukar konten panggung kiri. Di mobile bertumpuk (panggung atas, pemilih bawah).
   - *Target Wireframe*: Showcase interaktif multi-proyek, katalog produk dengan pratinjau langsung tanpa pindah halaman.

### D. Rekomendasi Langkah / Alur
1. **Varian 1: Dua Kolom: Judul Samping Menempel (*Sticky Header*) & Akordeon Linier Interaktif Berjalur Rel** (Basis: `enlesweb`)
   - *Karakter Ruang*: Desktop 2 kolom: sisi kiri judul seksi menempel mengambang (`sticky`); sisi kanan berupa alur rel vertikal (`step-rail`) menghubungkan tombol langkah interaktif (`button.step-header-btn`). Klik chevron membuka deskripsi langkah terkait dan menutup langkah lain. Di mobile menjadi 1 kolom akordeon.
   - *Target Wireframe*: Alur multi-langkah (4-6 tahap) yang memerlukan penjelasan detail tanpa membuat halaman menjadi terlalu panjang.
2. **Varian 2: Daftar Baris Tabular Bergaris Pemisah Horizontal 3-Kolom (*Hairline Row Ledger*)** (Basis: `ripeir`, `tuntas`)
   - *Karakter Ruang*: Meniadakan kartu kotak. Baris-baris terstruktur dipisahkan oleh garis horizontal tipis atas-bawah. Di desktop membentuk 3 kolom per baris: Nomor urut (kolom sempit) | Judul langkah (kolom sedang) | Uraian prosedur teknis (kolom lebar). Di mobile elemen bertumpuk di dalam baris.
   - *Target Wireframe*: Prosedur teknis, alur pendaftaran formal, atau tahapan perbaikan bengkel/servis.
3. **Varian 3: Diagram Alur Node Interaktif (*Node Workflow Canvas* dengan Konektor Kurva SVG)** (Basis: `jerseay` proses)
   - *Karakter Ruang*: Kartu-kartu tahapan kerja diletakkan berselang-seling kiri dan kanan (staggered 48% lebar) dengan soket input/output dan dihubungkan oleh konektor kurva SVG berpanah. Di mobile beralih menjadi 1 kolom penuh (100% lebar) dengan konektor vertikal.
   - *Target Wireframe*: Alur kerja perancangan studio, alur rekayasa bertahap, atau alur kerja multi-disiplin.

### E. Rekomendasi Keunggulan
1. **Varian 1: Dua Kolom Asimetris (Kiri Narasi Cerita Profil, Kanan Kartu Pernyataan Nilai Tunggal)** (Basis: `enlesweb`)
   - *Karakter Ruang*: Kolom kiri menyajikan narasi filosofi dan latar belakang usaha; kolom kanan memuat satu kartu kontainer bersudut lengkung lapang yang menonjolkan satu pernyataan nilai keuntungan nyata bagi pelanggan.
   - *Target Wireframe*: Keseimbangan antara cerita personal pendiri/studio dan proposisi nilai bisnis konkret.
2. **Varian 2: Kartu Menempel Mengambang (*Sticky Sidebar Loyalty / Garansi*)** (Basis: `klimis`)
   - *Karakter Ruang*: Modul keunggulan ditempatkan sebagai kartu kolom samping yang melayang mengikuti scroll layar (sticky) mendampingi daftar konten katalog. Di mobile beralih posisi menjadi kartu paling atas (`order: 1`) sebelum katalog.
   - *Target Wireframe*: Program retensi pelanggan (kartu stempel loyalitas, garansi kepuasan, jaminan pengerjaan) agar selalu terlihat saat pengunjung memilih layanan.
3. **Varian 3: Kartu Kontainer Horizontal Tunggal Lapang / Tiga Pilar Sejajar** (Basis: `berflower`, `ripeir`)
   - *Karakter Ruang*: Kotak kontainer tunggal memanjang berisi komitmen mutu atau 3 pilar berdampingan bernomor digit besar tanpa visual berat.
   - *Target Wireframe*: Sangat hemat tinggi layar vertikal dan cocok untuk bisnis yang ingin menekankan prinsip kerja atau integritas secara lugas.

### F. Rekomendasi Info Lokasi dan Jam
1. **Varian 1: Dua Kolom Terbelah (Kiri Teks Rincian Alamat & Jadwal, Kanan Iframe Peta Responsif)** (Basis: `seruput`, `klimis`)
   - *Karakter Ruang*: Kolom kiri menyajikan data terstruktur lengkap (alamat semantik `<address>`, rincian jam per hari kerja vs akhir pekan, patokan rute jalan kaki) bersanding dengan peta interaktif di sisi kanan.
   - *Target Wireframe*: Wajib untuk bisnis lokal fisik yang sangat mengandalkan kunjungan langsung pelanggan (kedai kopi, bengkel, barbershop).
2. **Varian 2: Modul Peta Tersemat Langsung di Dalam Kolom Footer** (Basis: `berflower`)
   - *Karakter Ruang*: Meniadakan seksi lokasi tersendiri di badan halaman. Modul peta iframe dan alamat lengkap disematkan langsung di dalam salah satu kolom footer.
   - *Target Wireframe*: Efisien untuk situs yang ingin mempertahankan alur halaman beranda tetap ramping tanpa mengorbankan info navigasi fisik.
3. **Varian 3: Bilah Lokasi Tekstual Ringkas & Tautan Navigasi Eksternal** (Basis: `enlesweb`, `ripeir`, `jerseay`)
   - *Karakter Ruang*: Murni teks alamat dan jadwal jam respons cepat tanpa memuat iframe peta pihak ketiga yang berat. Dilengkapi tautan eksternal ke penyedia peta luar.
   - *Target Wireframe*: Paling efisien beban unduhan, optimal untuk studio digital, layanan berbasis panggilan/pengiriman, atau servis jemput perangkat.

### G. Rekomendasi CTA Akhir
1. **Varian 1: Kartu Kontainer Berbingkai Tunggal Terpusat Penuh (*Single Centered Card*)** (Basis: `enlesweb`, `seruput`, `berflower`, `klimis`)
   - *Karakter Ruang*: Wadah kartu tunggal di tengah halaman dengan batas padding lapang, judul penawaran tegas, kalimat penjelas bebas komitmen, dan satu tombol aksi ukuran besar selebar 100% pada mobile.
   - *Target Wireframe*: Pola aksi penutup universal paling fokus tanpa distraksi tautan lain.
2. **Varian 2: Bilah Horizontal Dua Kolom Terbagi (Kiri Teks Ajakan, Kanan Tombol Aksi Ganda)** (Basis: `jerseay`, `ripeir`)
   - *Karakter Ruang*: Garis batas tipis atas-bawah memisahkan seksi ini dari konten sebelumnya. Teks ajakan di sisi kiri dan grup tombol aksi ganda (Mulai Formulir Brief + WhatsApp Langsung) di sisi kanan.
   - *Target Wireframe*: Sangat bersih, arsitektural, dan cocok untuk layanan yang menyediakan dua jalur kontak (formal via formulir vs cepat via chat).
3. **Varian 3: Format Kupon/Tiket Pendaftaran Asimetris dengan Tombol Stempel** (Basis: `tuntas`)
   - *Karakter Ruang*: Format asimetris bergaya tiket pendaftaran bergaris tepi tipis dengan teks ajakan konsultasi/evaluasi belajar di satu sisi dan tombol aksi stempel di sisi lain.
   - *Target Wireframe*: Memberikan kesan penawaran bernilai tinggi yang personal (sesi konsultasi gratis, tiket evaluasi awal).

### H. Rekomendasi Footer
1. **Varian 1: Multi-Kolom Berjenjang 4 Kolom Klasik** (Basis: `enlesweb`)
   - *Karakter Ruang*: 4 Kolom terbagi proporsional: Profil studio/merek, tautan navigasi internal, tautan kebijakan privasi terpisah, dan informasi kontak/jam respons. Ditutup baris hak cipta bawah.
   - *Target Wireframe*: Standar terbaik untuk situs perusahaan, agensi, atau bisnis formal yang memerlukan kepatuhan privasi data.
2. **Varian 2: Tiga Kolom Fungsional dengan Tombol Aksi Langsung di Kolom Profil** (Basis: `jerseay`)
   - *Karakter Ruang*: Mengintegrasikan tombol aksi mini ("Mulai Brief" & "WhatsApp Studio") langsung di dalam kolom profil footer, berdampingan dengan kolom struktur situs dan kolom kategori layanan.
   - *Target Wireframe*: Menjaga peluang konversi tetap tinggi bahkan ketika pengunjung telah menggulir sampai ujung terbawah halaman.
3. **Varian 3: Multi-Utilitas Terpadu (Sosial Media, Peta Embed, Navigasi, & Catatan Konsep)** (Basis: `berflower`, `seruput`)
   - *Karakter Ruang*: Memadukan baris ikon media sosial, kartu peta lokasi interaktif, tautan navigasi multi-halaman, serta baris penafian konsep template di bagian bawah.
   - *Target Wireframe*: Paling kaya fitur untuk toko retail lokal, studio kriya, atau warung/kedai komunitas.

---

## 3. Inventaris Detail per Kategori Section

### 3.1. NAVBAR (Navigasi Header)

#### Tabel Analisis Arketipe Navbar
| Arketipe | Repo Asal | Jumlah Repo | Kelebihan | Risiko / Kelemahan |
| :--- | :--- | :---: | :--- | :--- |
| **Baris 3 Zona Horizontal (Kiri Logo/Nama, Tengah Tautan, Kanan Tombol Aksi + Hamburger Drop-down)** | `enlesweb`, `seruput`, `ripeir` | 3 | Aksesibilitas navigasi sangat jelas; tombol aksi selalu tampak di desktop; pola universal yang dikenali pengunjung | Teks tautan menu yang terlalu banyak (>6 item) dapat bertubrukan dengan tombol aksi pada resolusi tablet (768px-1023px) |
| **Baris 2 Zona Asimetris Terpadu (Kiri Nama, Kanan Grup Tautan + Tombol)** | `tuntas`, `klimis` | 2 | Menghemat ruang horizontal; tautan dan tombol menyatu di satu sisi kanan | Membutuhkan breakpoint mobile lebih cepat (disembunyikan di bawah 1024px) agar tidak patah baris |
| **Baris Adaptif Mengambang dengan Menu Drawer Samping (Off-Canvas)** | `jerseay` | 1 | Tampilan desktop sangat bersih; drawer samping mobile (320px) terisolasi penuh dengan tirai pelindung dan penjerat fokus (*focus trap*) | Membutuhkan kode pendukung untuk menangani event buka/tutup, klik backdrop, dan status `inert` pada elemen di belakang drawer |
| **Baris 4 Elemen Multi-Utilitas (Nama, Dropdown Bersarang, Indikator Status, Toggle)** | `berflower` | 1 | Mendukung menu bersarang bertingkat (`<details>`); indikator status (keranjang) tetap aktif di layar mobile | Kompleksitas interaksi di perangkat sentuh untuk menu bersarang; potensi tumpang tindih elemen jika judul tautan panjang |

#### Inventarisasi Teknis per Repositori:
1. **enlesweb**
   - *Arketipe*: Baris 3 zona horizontal dengan panel dropdown vertikal penuh
   - *Struktur Slot*:
     - Gambar logo merek (`<Image src={navbrandLogo}>`, 40x28px)
     - Teks nama merek (`span.brand-text`)
     - Daftar tautan menu horizontal desktop (`ul.nav-links > li > a.nav-link`, 5 tautan)
     - Tombol aksi primer desktop (`WhatsAppButton`, topic: general)
     - Tombol pemicu hamburger mobile (`#menu-toggle`, atribut `aria-controls="nav-menu-panel"`)
     - Panel menu drawer mobile vertikal (`#nav-menu-panel.mobile-menu-panel`, `hidden`)
   - *Field Wajib*: Gambar/teks nama merek, daftar tautan menu, tombol hamburger mobile.
   - *Field Opsional*: Tombol aksi langsung di navbar desktop.
   - *Perilaku Mobile (390px)*: Di bawah 768px, tautan desktop dan tombol aksi disembunyikan (`display: none`). Tombol hamburger ditampilkan. Saat tombol ditekan, panel `#nav-menu-panel` membuka ke bawah secara vertikal dengan transisi meluncur.
   - *Sumber*: [`enlesweb/src/components/Navbar.astro:8-104`](file:///d:/myself/web/enlesweb-workspace/enlesweb/src/components/Navbar.astro#L8-L104)
   - *Screenshot*: [Desktop](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/enlesweb/navbar-desktop.png) | [Mobile](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/enlesweb/navbar-mobile.png) | [Mobile Drawer](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/enlesweb/navbar-mobile-drawer.png)

2. **seruput**
   - *Arketipe*: Baris 3 zona horizontal dengan teks teknis dan panel dropdown scroll-aware
   - *Struktur Slot*:
     - Teks nama merek (`a.navbar-brand > span.brand-text`)
     - Daftar tautan navigasi tengah (`nav.desktop-nav > ul.nav-list > li > a.nav-link`, 6 tautan: Menu, Tentang, Biji Kopi, Ulasan, Lokasi, Kontak)
     - Tombol aksi desktop (`div.desktop-cta > WhatsAppButton`)
     - Tombol pemicu hamburger mobile (`button#mobile-menu-toggle`, `aria-controls="mobile-nav"`)
     - Panel menu mobile drop-down (`div#mobile-nav.mobile-nav`) memuat daftar tautan vertikal dan tombol WhatsApp di bawahnya
   - *Field Wajib*: Nama merek, daftar tautan navigasi, tombol toggle mobile.
   - *Field Opsional*: Tombol aksi WhatsApp desktop.
   - *Perilaku Mobile (390px)*: Di bawah 768px, menu desktop dan tombol aksi di-hide. Tombol toggle aktif. Klik tombol membuka panel navigasi vertikal drop-down berlatar buram (*backdrop-filter: blur*).
   - *Sumber*: [`seruput/src/components/Navbar.astro:20-120, 301-307`](file:///d:/myself/web/enlesweb-workspace/seruput/src/components/Navbar.astro#L20-L120)
   - *Screenshot*: [Desktop](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/seruput/navbar-desktop.png) | [Mobile](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/seruput/navbar-mobile.png) | [Mobile Drawer](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/seruput/navbar-mobile-drawer.png)

3. **ripeir**
   - *Arketipe*: Baris 3 zona terpusat dengan garis pembatas ganda
   - *Struktur Slot*:
     - Teks nama merek (`a.navbar__brand`)
     - Daftar tautan desktop terpusat (`nav.navbar__nav-desktop > ul.navbar__links`, 4 tautan)
     - Tombol aksi primer kanan (`div.navbar__desktop-cta > WhatsAppButton`)
     - Tombol pemicu drawer garis ganda (`button#drawer-toggle.navbar__toggle`, 44x44px target sentuh)
     - Panel drawer mobile layar penuh (`div#drawer-menu.drawer`, atribut `aria-hidden="true"`)
   - *Field Wajib*: Teks merek, tautan navigasi desktop, tombol toggle.
   - *Field Opsional*: Tombol WhatsApp navbar desktop.
   - *Perilaku Mobile (390px)*: Di bawah 768px, navigasi tengah dan tombol WhatsApp hilang. Tombol toggle garis ganda menampilkan panel drawer layar penuh dengan tautan berukuran sentuh minimal 48px.
   - *Sumber*: [`ripeir/src/components/Navbar.astro:13-90`](file:///d:/myself/web/enlesweb-workspace/ripeir/src/components/Navbar.astro#L13-L90)
   - *Screenshot*: [Desktop](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/ripeir/navbar-desktop.png) | [Mobile](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/ripeir/navbar-mobile.png) | [Mobile Drawer](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/ripeir/navbar-mobile-drawer.png)

4. **tuntas**
   - *Arketipe*: Baris 2 zona asimetris terpadu
   - *Struktur Slot*:
     - Teks nama lembaga (`a.brand-link`)
     - Kontainer terpadu desktop (`nav.desktop-nav`): daftar tautan horizontal (Beranda, Program, Cara Belajar, Jadwal & Biaya, Tentang, Kontak) + tombol WhatsApp primer bersebelahan
     - Tombol toggle hamburger mobile (`button#nav-toggle-btn.mobile-toggle`)
     - Panel menu mobile vertikal drop-down (`div#nav-menu-panel.mobile-menu-panel`, `hidden`)
   - *Field Wajib*: Nama merek, daftar tautan, tombol hamburger.
   - *Field Opsional*: Tombol WhatsApp terpadu di dalam desktop nav.
   - *Perilaku Mobile (390px)*: Di bawah 1024px (`@media (max-width: 1023px)`), seluruh grup `.desktop-nav` disembunyikan. Tombol toggle hamburger memicu panel vertikal drop-down dengan tombol WhatsApp penuh selebar panel di bagian bawah menu.
   - *Sumber*: [`tuntas/src/components/Navbar.astro:16-120`](file:///d:/myself/web/enlesweb-workspace/tuntas/src/components/Navbar.astro#L16-L120)
   - *Screenshot*: [Desktop](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/tuntas/navbar-desktop.png) | [Mobile](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/tuntas/navbar-mobile.png) | [Mobile Drawer](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/tuntas/navbar-mobile-drawer.png)

5. **jerseay**
   - *Arketipe*: Baris adaptif mengambang dengan drawer samping off-canvas (320px) dan focus-trap
   - *Struktur Slot*:
     - Teks nama studio kapital (`a#nav-logo`, 44px min-height)
     - Daftar navigasi desktop horizontal (`nav.hidden.lg:flex` > tautan dengan elemen span penanda aktif `span.nav-link-indicator`)
     - Tombol aksi primer desktop (`a#nav-cta-btn`, "Mulai Brief")
     - Tombol buka drawer mobile bertuliskan teks dan ikon (`button#mobile-menu-open-btn`, label teks "MENU" + ikon baris tiga)
     - Panel drawer samping off-canvas (`div#mobile-menu-drawer` & `div#mobile-menu-panel` selebar 320px) memuat:
       - Header drawer dengan teks brand dan tombol tutup silang (`#mobile-menu-close-btn`)
       - Daftar tautan navigasi vertikal bergaris pemisah tipis
       - Aksi bawah drawer dengan teks pengantar dan tombol penuh "Mulai Brief"
     - Modul penjerat fokus (*focus trap*) dan atribut `inert` pada kontainer utama saat drawer aktif
   - *Field Wajib*: Nama studio, daftar tautan navigasi, tombol toggle mobile, tombol tutup drawer.
   - *Field Opsional*: Penanda garis bawah aktif (`nav-link-indicator`), tombol aksi desktop.
   - *Perilaku Mobile (390px)*: Di bawah 1024px, menu tengah dan tombol desktop hilang. Tombol "MENU" membuka drawer geser samping dari tepi kanan dengan transisi selebar 320px, mengaktifkan tirai pelindung (*backdrop scrim*), mengurung fokus keyboard, serta mengunci scroll dokumen.
   - *Sumber*: [`jerseay/src/components/navigation/Navbar.astro:18-150, 270-350`](file:///d:/myself/web/enlesweb-workspace/jerseay/src/components/navigation/Navbar.astro#L18-L150)
   - *Screenshot*: [Desktop](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/jerseay/navbar-desktop.png) | [Mobile](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/jerseay/navbar-mobile.png) | [Mobile Drawer](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/jerseay/navbar-mobile-drawer.png)

6. **klimis**
   - *Arketipe*: Baris 2 zona asimetris dengan penanda kuis
   - *Struktur Slot*:
     - Teks nama studio (`a.brand-link > span.brand-mark`)
     - Daftar tautan menu desktop (`nav.desktop-nav > ul.nav-list`), mencakup tautan reguler dan tautan khusus dengan kapsul badge (`span.nav-badge-pill`, "Kuis")
     - Tombol aksi desktop (`div.desktop-cta > WhatsAppButton`)
     - Tombol hamburger mobile (`button#menu-toggle.mobile-toggle`)
     - Panel drawer mobile vertikal (`div#mobile-nav.mobile-drawer`) dengan badge kapsul khusus ("Kuis 1 Mnt")
   - *Field Wajib*: Nama studio, tautan navigasi, tombol hamburger.
   - *Field Opsional*: Badge kapsul penanda interaktif pada item menu, tombol aksi WhatsApp.
   - *Perilaku Mobile (390px)*: Di bawah 1024px, `.desktop-nav` disembunyikan. Hamburger memicu drawer menu vertikal meluncur ke bawah dari header dengan pembungkus tombol WhatsApp di sisi bawah.
   - *Sumber*: [`klimis/src/components/Navbar.astro:15-78`](file:///d:/myself/web/enlesweb-workspace/klimis/src/components/Navbar.astro#L15-L78)
   - *Screenshot*: [Desktop](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/klimis/navbar-desktop.png) | [Mobile](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/klimis/navbar-mobile.png) | [Mobile Drawer](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/klimis/navbar-mobile-drawer.png)

7. **berflower**
   - *Arketipe*: Baris 4 elemen multi-utilitas dengan menu bersarang & indikator status persisten
   - *Struktur Slot*:
     - Teks nama toko (`a.brand`)
     - Daftar navigasi desktop horizontal (`nav.desktop-nav > ul.nav-list`)
     - Dropdown menu bersarang (`li.info-menu-item > details.info-menu > summary.info-menu-toggle` dengan ikon panah, membungkus submenu: Cara Pesan, Kontak)
     - Indikator keranjang belanja (`a#cart-indicator.cart-indicator` berisi ikon tas belanja SVG, teks label, dan counter badge `span#cart-count`)
     - Tombol toggle garis tiga mobile (`button#menu-toggle.mobile-toggle`)
     - Panel menu mobile drop-down bertingkat (`div#nav-menu-panel.mobile-panel`, `hidden`) memecah navigasi menjadi kelompok menu utama dan kelompok menu info
   - *Field Wajib*: Nama toko, tautan navigasi, tombol toggle mobile.
   - *Field Opsional*: Menu dropdown bersarang (`<details>`), indikator status keranjang belanja.
   - *Perilaku Mobile (390px)*: Di bawah 1024px, navigasi desktop disembunyikan. Namun, indikator keranjang belanja tetap tampil di samping tombol hamburger. Panel drawer memecah tautan utama dan tautan info ke dalam dua sub-grup vertikal terpisah.
   - *Sumber*: [`berflower/src/components/Navbar.astro:10-110`](file:///d:/myself/web/enlesweb-workspace/berflower/src/components/Navbar.astro#L10-L110)
   - *Screenshot*: [Desktop](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/berflower/navbar-desktop.png) | [Mobile](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/berflower/navbar-mobile.png) | [Mobile Drawer](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/berflower/navbar-mobile-drawer.png)

---

### 3.2. HERO (Kepala Halaman)

#### Tabel Analisis Arketipe Hero
| Arketipe | Repo Asal | Jumlah Repo | Kelebihan | Risiko / Kelemahan |
| :--- | :--- | :---: | :--- | :--- |
| **Dua Kolom Asimetris (Kiri Teks & Aksi, Kanan Objek Visual Potong/Komposisi)** | `enlesweb`, `ripeir`, `berflower` | 3 | Hierarki pesan langsung terbaca; pembuktian produk/layanan instan lewat visual di sisi kanan; konversi tinggi | Butuh aset visual/foto potong berkualitas tinggi tanpa latar belakang; teks judul yang terlalu panjang dapat mendesak objek visual ke bawah |
| **Satu Kolom Monumental Terpusat dengan Modul Data Langsung (Struk / Ledger)** | `seruput`, `tuntas` | 2 | Sangat transparan; menyajikan data fungsional langsung (harga menu/jadwal belajar) tanpa basa-basi; mandiri dari aset foto | Sangat bergantung pada kepadatan teks/angka; pada layar ponsel beresolusi sempit tabel/struk rentan membutuhkan penyusutan ukuran teks |
| **Kanvas Visual Sinematik Penuh (Rasio 16:9 dengan Overlay Editorial Tepi)** | `jerseay` | 1 | Dampak visual panggung sangat kuat; nuansa panggung profesional; memisahkan area gambar dan teks via gradien | Rentan masalah kontras teks jika gambar latar terlalu ramai di balik gradien; memakan tinggi layar vertikal signifikan |
| **Panggung Carousel Slider Lebar Penuh dengan Kontrol Samping & Titik Navigasi** | `klimis` | 1 | Mampu menampilkan multi-dokumentasi suasana studio dalam satu wadah; interaktif | Elemen slide berikutnya tersembunyi jika pengunjung tidak menggeser; membutuhkan script pengatur interval rotasi dan aksesibilitas ARIA |

#### Inventarisasi Teknis per Repositori:
1. **enlesweb**
   - *Arketipe*: Dua kolom asimetris (kiri teks bertingkat + tag harga + tombol aksi ganda; kanan komposisi visual geometris 3D)
   - *Struktur Slot*:
     - Judul utama multi-baris (`h1#hero-title.hero-headline`)
     - Label harga menonjol mandiri (`div.hero-price-wrapper > span.hero-price`)
     - Tombol aksi primer WhatsApp (`WhatsAppButton`)
     - Tautan aksi sekunder teks bergaris bawah (`a.secondary-link`)
     - Objek komposisi grafis geometris (`div.hero-composition > HeroObject`)
     - Latar belakang ambient wash SVG (`div.hero-ambient-wash`)
   - *Field Wajib*: Judul utama, tag harga, tombol primer.
   - *Field Opsional*: Tautan sekunder, objek visual sekunder, latar ambient SVG.
   - *Perilaku Mobile (390px)*: Beralih dari 2 kolom horizontal menjadi 1 kolom vertikal bertumpuk. Judul dan harga di atas, tombol aksi di tengah, dan objek grafis berpindah ke bagian bawah dengan ukuran proporsional.
   - *Sumber*: [`enlesweb/src/components/Hero.astro:64-99`](file:///d:/myself/web/enlesweb-workspace/enlesweb/src/components/Hero.astro#L64-L99)
   - *Screenshot*: [Desktop](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/enlesweb/hero-desktop.png) | [Mobile](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/enlesweb/hero-mobile.png)

2. **seruput**
   - *Arketipe*: Satu kolom terpusat monumental dengan kartu struk kasir katalog lengkap
   - *Struktur Slot*:
     - Judul utama pernyataan kedai (`h1#hero-title.hero-title`)
     - Paragraf pengantar alamat dan jenis seduhan (`p.hero-lead`)
     - Kartu struk kasir vertikal monumental (`article.receipt-slip`) memuat:
       - Stempel cap seduh dadakan (`div.receipt-stamp`)
       - Header nama kedai dan nomor WhatsApp (`p.receipt-brand` & `p.receipt-addr`)
       - Baris metadata: No Nota, Waktu, Kasir, Meja (`div.receipt-meta`)
       - Pengelompokan kategori menu bertitik pengisi (`div.receipt-category-group`)
       - Baris total item dan tombol WhatsApp pesan langsung di dalam struk
   - *Field Wajib*: Judul pengantar, kartu struk daftar menu, tombol pesan.
   - *Field Opsional*: Baris metadata struk (no nota, kasir, meja), stempel cap.
   - *Perilaku Mobile (390px)*: Tetap 1 kolom terpusat. Kartu struk otomatis mengisi 100% lebar kontainer ponsel (350-390px), garis pemisah memendek fleksibel, dan tombol aksi WhatsApp menjadi tombol blok selebar kartu.
   - *Sumber*: [`seruput/src/components/Hero.astro:18-115`](file:///d:/myself/web/enlesweb-workspace/seruput/src/components/Hero.astro#L18-L115)
   - *Screenshot*: [Desktop](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/seruput/hero-desktop.png) | [Mobile](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/seruput/hero-mobile.png)

3. **ripeir**
   - *Arketipe*: Dua kolom panggung visual (kiri teks teknis & aksi ganda, kanan visual objek bongkaran di atas alas kerja)
   - *Struktur Slot*:
     - Latar gambar visual alas kerja cutting mat (`div.hero-deskmat-bg`)
     - Judul utama pernyataan kesiapan perbaikan (`h1#hero-title.hero-title`)
     - Paragraf pendukung dengan batasan lebar baca (`p.hero-support`)
     - Grup tombol aksi: primer WhatsApp + sekunder tautan garis batas luar (`div.hero-actions`)
     - Panggung visual jangkar objek laptop terbongkar (`div.hero-visual`)
   - *Field Wajib*: Judul utama, paragraf pendukung, tombol aksi primer.
   - *Field Opsional*: Tombol aksi sekunder, panggung visual jangkar objek.
   - *Perilaku Mobile (390px)*: Dua kolom beralih menjadi susunan bertumpuk vertikal (teks di atas, visual di bawah). Tombol aksi primer dan sekunder masing-masing mengisi lebar penuh secara bertumpuk.
   - *Sumber*: [`ripeir/src/components/Hero.astro:23-50`](file:///d:/myself/web/enlesweb-workspace/ripeir/src/components/Hero.astro#L23-L50)
   - *Screenshot*: [Desktop](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/ripeir/hero-desktop.png) | [Mobile](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/ripeir/hero-mobile.png)

4. **tuntas**
   - *Arketipe*: Dua blok bertumpuk monumental (atas: blok intro monumental & tombol stempel; bawah: tabel jadwal master ledger per jenjang)
   - *Struktur Slot*:
     - Judul utama metode tuntas (`h1.hero-headline`)
     - Paragraf penjelas format kelompok kecil (`p.hero-lead`)
     - Tombol aksi primer WhatsApp berukuran stempel (`div.hero-action-row > WhatsAppButton`)
     - Blok jadwal master ledger (`div.hero-ledger-block`) memuat:
       - Bilah keterangan batas siswa per kelas (`div.ledger-caption-bar`)
       - Tabel 3 kolom desktop (`table.hero-schedule-table`) membagi jenjang SD, SMP, SMA dengan hari dan jam sesi
       - Panel kartu bertumpuk mobile (`div.ledger-mobile-stack`)
   - *Field Wajib*: Judul utama, paragraf pengantar, tombol aksi primer, jadwal sesi per jenjang.
   - *Field Opsional*: Catatan kapasitas maksimal siswa.
   - *Perilaku Mobile (390px)*: Tabel 3 kolom disembunyikan (`.ledger-desktop-only { display: none }`). Digantikan oleh kartu tumpuk vertikal per jenjang (`.ledger-mobile-only`) dengan baris hari dan jam belajar, sementara tombol WhatsApp melebar 100%.
   - *Sumber*: [`tuntas/src/components/Hero.astro:32-175`](file:///d:/myself/web/enlesweb-workspace/tuntas/src/components/Hero.astro#L32-L175)
   - *Screenshot*: [Desktop](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/tuntas/hero-desktop.png) | [Mobile](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/tuntas/hero-mobile.png)

5. **jerseay**
   - *Arketipe*: Kanvas visual sinematik lebar penuh 16:9 dengan overlay teks editorial sisi kiri
   - *Struktur Slot*:
     - Gambar latar visual banner rasio 16:9 (`img.filter.contrast-105`)
     - Lapisan gradien pelindung keterbacaan teks kiri ke kanan dan bawah ke atas
     - Judul studio editorial huruf tebal (`h1#hero-title`)
     - Paragraf pendukung 1 kalimat ringkas penjelas alat konfigurator web
     - Tombol aksi ganda: primer "Rancang Kit" dengan ikon panah + sekunder teks bergaris bawah "Mulai Brief"
   - *Field Wajib*: Gambar latar sinematik, judul studio, tombol aksi primer.
   - *Field Opsional*: Paragraf pendukung, tombol aksi sekunder.
   - *Perilaku Mobile (390px)*: Bidang latar mempertahankan ketinggian minimum 600px. Gradien pelindung menebal untuk menjamin keterbacaan teks. Tombol primer dan sekunder bertumpuk jika lebar layar sempit.
   - *Sumber*: [`jerseay/src/components/home/HomeHero.astro:6-71`](file:///d:/myself/web/enlesweb-workspace/jerseay/src/components/home/HomeHero.astro#L6-L71)
   - *Screenshot*: [Desktop](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/jerseay/hero-desktop.png) | [Mobile](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/jerseay/hero-mobile.png)

6. **klimis**
   - *Arketipe*: Panggung carousel slider foto lebar penuh tanpa garis tepi dengan kontrol samping
   - *Struktur Slot*:
     - Judul dokumen untuk pembaca layar (`h1#hero-title.sr-only`)
     - Panggung carousel 6 slide foto dokumentasi studio barbershop (`div.carousel-stage`)
     - Tag studio dan keterangan subjudul pada tiap slide (`slide.tag` & `slide.sub`)
     - Tombol navigasi sebelumnya/berikutnya (`button#carouselPrevBtn` & `button#carouselNextBtn`)
     - Indikator navigasi tablist titik slide (`div.carousel-indicators`)
   - *Field Wajib*: Slide gambar foto, tombol navigasi prev/next, indikator titik tablist.
   - *Field Opsional*: Tag teks dan subjudul penjelas foto per slide.
   - *Perilaku Mobile (390px)*: Ketinggian carousel menyesuaikan proporsi layar sentuh (52vh hingga 65vh). Navigasi dapat dipicu lewat gesekan jari (*touch swipe*) maupun tombol samping.
   - *Sumber*: [`klimis/src/components/Hero.astro:55-150`](file:///d:/myself/web/enlesweb-workspace/klimis/src/components/Hero.astro#L55-L150)
   - *Screenshot*: [Desktop](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/klimis/hero-desktop.png) | [Mobile](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/klimis/hero-mobile.png)

7. **berflower**
   - *Arketipe*: Dua kolom terbelah (kiri teks editorial bertajuk penekanan miring, kanan foto produk potong siluet)
   - *Struktur Slot*:
     - Judul editorial dengan penekanan kata miring (`h1#hero-title > copy.home.hero.headlineLead + em.hero-em`)
     - Paragraf pendukung kesegaran bunga dan pemesanan harian (`p.hero-support`)
     - Tombol aksi primer WhatsApp (`WhatsAppButton`)
     - Wadah foto produk buket siluet tanpa latar belakang (`div.hero-image-wrapper > Image`, skala 360-1200px)
   - *Field Wajib*: Judul utama, paragraf pendukung, tombol aksi WhatsApp, foto produk siluet.
   - *Field Opsional*: Elemen penekanan kata miring pada judul.
   - *Perilaku Mobile (390px)*: Dua kolom beralih menjadi 1 kolom vertikal bertumpuk. Teks berada di bagian atas, diikuti foto produk buket di bagian bawah dengan penskalaan gambar proporsional.
   - *Sumber*: [`berflower/src/components/Hero.astro:12-51`](file:///d:/myself/web/enlesweb-workspace/berflower/src/components/Hero.astro#L12-L51)
   - *Screenshot*: [Desktop](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/berflower/hero-desktop.png) | [Mobile](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/berflower/hero-mobile.png)

---

### 3.3. LAYANAN / KATALOG

#### Tabel Analisis Arketipe Layanan & Katalog
| Arketipe | Repo Asal | Jumlah Repo | Kelebihan | Risiko / Kelemahan |
| :--- | :--- | :---: | :--- | :--- |
| **Grid Kartu Komparasi Multi-Kolom Modular (3 atau 4 Kolom Kartu)** | `enlesweb` (paket), `seruput` (biji), `ripeir` (servis), `berflower` (koleksi) | 4 | Struktur berulang teratur; mudah dipahami; fleksibel menambah atau mengurangi jumlah entri layanan | Jika jumlah kartu tidak kelipatan genap (misal 5 atau 7), baris terakhir menyisakan ruang kosong asimetris pada layar desktop |
| **Daftar Baris Horizontal Bertabel & Matriks Perbandingan Tabular** | `tuntas` (program & jadwal) | 1 | Sangat padat informasi; menghemat tinggi scroll vertikal; memfasilitasi komparasi langsung antar jenjang/format | Membutuhkan penanganan responsif khusus di mobile (pembungkus overflow horizontal atau rekonstruksi ke format kartu pasangan label-nilai) |
| **Lookbook Editorial Zig-Zag dengan Micro-Specs Tabular Garis Tipis** | `jerseay` (layanan) | 1 | Tampilan portofolio sangat berbobot dan bergaya majalah arsitektural; spesifikasi teknis disajikan ringkas via tabel garis tipis | Membutuhkan aset gambar lanskap berkualitas tinggi untuk setiap entri; memakan tinggi halaman vertikal yang sangat panjang |
| **Papan Menu Tarif Terstruktur dengan Rincian Tindakan & Titik Pengisi** | `klimis` (tarif) | 1 | Menghadirkan kejelasan tarif instan; daftar tindakan memberi transparansi proses ritual pangkas | Kepadatan baris teks tinggi; rentan terpotong jika nama layanan tambahan terlalu panjang |
| **Split Stage Master-Detail Interaktif (Panggung Pratinjau Kiri, Pemilih Tab Kanan)** | `enlesweb` (proyek), `jerseay` (portofolio pilihan) | 2 | Pratinjau visual aktif di panggung utama tanpa perlu berpindah halaman; sangat hemat tinggi vertikal | Membutuhkan penanganan skrip interaksi tombol penukar panggung (*switcher*) |

#### Inventarisasi Teknis per Repositori:
1. **enlesweb**
   - *Arketipe 1 (Paket Layanan)*: Grid 3 kolom kartu paket komparasi bertingkat + Kartu paket kustom
     - *Struktur Slot*:
       - Judul seksi & subjudul pengantar paket
       - 3 Kartu paket bertingkat (`section#paket > div.packages-grid > PackageColumn`): Starter (Rp450.000), Business (Rp750.000), Growth (Rp1.200.000)
       - Tiap kartu memuat: nama paket, harga nominal, deskripsi, launch note opsional, daftar fitur inti (`package-core-list`), dropdown penyingkap `<details class="package-details">` untuk fitur tambahan (`package-more-list`), tombol WhatsApp per paket
       - Kartu penawaran paket kustom di bagian bawah (`CustomPackage`): judul kebutuhan khusus, deskripsi, tombol konsultasi
     - *Field Wajib*: Nama paket, harga, daftar fitur inti, tombol aksi WhatsApp.
     - *Field Opsional*: Launch note, penyingkap dropdown fitur tambahan, kartu paket kustom terpisah.
     - *Perilaku Mobile (390px)*: Grid 3 kolom desktop beralih menjadi 1 kolom vertikal bertumpuk berurutan ke bawah.
     - *Sumber*: [`enlesweb/src/components/Packages.astro:8-60`](file:///d:/myself/web/enlesweb-workspace/enlesweb/src/components/Packages.astro#L8-L60) & [`PackageColumn.astro:34-100`](file:///d:/myself/web/enlesweb-workspace/enlesweb/src/components/PackageColumn.astro#L34-L100)
     - *Screenshot*: [Desktop](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/enlesweb/packages-desktop.png) | [Mobile](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/enlesweb/packages-mobile.png)
   - *Arketipe 2 (Proyek Showcase)*: Split Stage Master-Detail Interaktif (Panggung Pratinjau Kiri, Pemilih Tab Kanan)
     - *Struktur Slot*:
       - Judul seksi pameran proyek
       - Panggung aktif kiri (`div.projects-stage`): gambar mockup rasio 16:10, metadata tipe/tier, deskripsi proyek, tautan CTA
       - Pemilih kanan (`div.minimized-projects-list`): 6 tombol switcher dengan favicon, nama proyek, tier, dan panah chevron untuk menukar mockup panggung secara dinamis
     - *Field Wajib*: Mockup gambar, judul proyek, tombol pemilih, tautan aksi.
     - *Field Opsional*: Favicon, badge penanda tier.
     - *Perilaku Mobile (390px)*: Bertumpuk vertikal: panggung aktif mockup di atas, deretan tombol pemilih di bawah.
     - *Sumber*: [`enlesweb/src/components/Projects.astro:30-150`](file:///d:/myself/web/enlesweb-workspace/enlesweb/src/components/Projects.astro#L30-L150)
     - *Screenshot*: [Desktop](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/enlesweb/projects-desktop.png) | [Mobile](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/enlesweb/projects-mobile.png)

2. **seruput**
   - *Arketipe*: Grid 3 kolom kartu komoditas biji kopi
   - *Struktur Slot*:
     - Judul seksi & teks kurasi biji kopi musiman
     - 3 Kartu produk biji kopi (`article.bean-card`):
       - Nama varietas & daerah asal (`h3.bean-title`)
       - Tag karakteristik rasa / notes (`div.bean-tags > span.tag`)
       - Spesifikasi proses pascapanen & elevasi tanam mdpl (`div.bean-specs`)
       - Harga nominal per kemasan 200g (`span.bean-price`)
       - Tombol pesan biji kopi via WhatsApp (`WhatsAppButton`)
   - *Field Wajib*: Nama varietas, asal daerah, catatan rasa, harga, tombol pesan.
   - *Field Opsional*: Ketinggian kebun tanam (mdpl), proses pascapanen.
   - *Perilaku Mobile (390px)*: Grid 3 kolom desktop runtuh menjadi 1 kolom bertumpuk vertikal dengan jarak lapang antar kartu.
   - *Sumber*: [`seruput/src/components/BeansSection.astro:5-65`](file:///d:/myself/web/enlesweb-workspace/seruput/src/components/BeansSection.astro#L5-L65)
   - *Screenshot*: [Desktop](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/seruput/beans-desktop.png) | [Mobile](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/seruput/beans-mobile.png)

3. **ripeir**
   - *Arketipe*: Grid modular 4 kartu kategori perangkat servis
   - *Struktur Slot*:
     - Judul seksi & rincian garansi pengerjaan servis
     - 4 Kartu kategori perangkat (`article.service-card`):
       - Ikon kategori perangkat (laptop, komputer, handphone, tablet)
       - Judul kategori perangkat
       - Daftar poin masalah/gejala kerusakan umum yang dilayani
       - Estimasi durasi perbaikan meja servis
       - Tombol konsultasi WhatsApp per kategori perangkat
   - *Field Wajib*: Kategori perangkat, daftar masalah yang ditangani, estimasi waktu, tombol konsultasi.
   - *Field Opsional*: Ikon grafis perangkat.
   - *Perilaku Mobile (390px)*: Grid 2x2 desktop beralih menjadi 1 kolom vertikal bertumpuk ke bawah dengan tombol aksi melebar penuh.
   - *Sumber*: [`ripeir/src/components/ServicesGrid.astro:8-60`](file:///d:/myself/web/enlesweb-workspace/ripeir/src/components/ServicesGrid.astro#L8-L60)
   - *Screenshot*: [Desktop](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/ripeir/services-desktop.png) | [Mobile](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/ripeir/services-mobile.png)

4. **tuntas**
   - *Arketipe*: Baris horizontal bertabel per jenjang & Matriks komparasi tabular
   - *Struktur Slot*:
     - Baris jenjang program (`section.programs-section > ProgramRows`): baris horizontal memanjang memuat nama jenjang (SD, SMP, SMA), rentang kelas, daftar mata pelajaran, dan tombol navigasi telusuri
     - Matriks komparasi format belajar (`section.formats-section > FormatCards`): tabel komparasi parameter antara kelas kelompok kecil vs kelas privat personal
     - Tabel jadwal dan rincian biaya komprehensif (`jadwal-biaya.astro`): tabel data multi-kolom formal (jenjang, sesi bulanan, kuota kelas, tarif)
   - *Field Wajib*: Nama program, target jenjang, mata pelajaran, format belajar, tarif nominal.
   - *Field Opsional*: Tabel komparasi parameter privat vs kelompok.
   - *Perilaku Mobile (390px)*: Baris jenjang beralih ke format kartu vertikal per jenjang. Tabel matriks dan tabel biaya dilengkapi kontainer gulir horizontal (*overflow-x: auto*) atau konversi ke format pasangan baris label-nilai.
   - *Sumber*: [`tuntas/src/components/ProgramRows.astro:14-80`](file:///d:/myself/web/enlesweb-workspace/tuntas/src/components/ProgramRows.astro#L14-L80), [`FormatCards.astro:5-60`](file:///d:/myself/web/enlesweb-workspace/tuntas/src/components/FormatCards.astro#L5-L60), [`jadwal-biaya.astro:45-80`](file:///d:/myself/web/enlesweb-workspace/tuntas/src/pages/jadwal-biaya.astro#L45-L80)
   - *Screenshot*: [Program Rows Desktop](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/tuntas/program-rows-desktop.png) | [Program Rows Mobile](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/tuntas/program-rows-mobile.png) | [Format Cards Desktop](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/tuntas/format-cards-desktop.png) | [Format Cards Mobile](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/tuntas/format-cards-mobile.png) | [Fees Table Desktop](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/tuntas/fees-table-desktop.png) | [Fees Table Mobile](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/tuntas/fees-table-mobile.png)

5. **jerseay**
   - *Arketipe 1 (Layanan)*: Lookbook editorial zig-zag bergantian dengan micro-specs tabular garis tipis
     - *Struktur Slot*:
       - Header seksi katalog dengan bilah navigasi lompat cepat (*quick jump anchor bar*) ke cabang olahraga
       - Deretan artikel pameran per cabang olahraga (`section[aria-label="Daftar Cabang Olahraga"] > article`, 5 artikel: Futsal, Sepeda, Esports, Basket, Komunitas):
         - Wadah foto showcase jersey rasio 4:3 / 16:11 (lebar 7 kolom grid desktop)
         - Kolom konten editorial (lebar 5 kolom grid desktop): judul cabang, paragraf konsep kebutuhan teknis
         - Strip micro-specs tabular bergaris pembatas tipis: Siluet, Standar regulasi liga, dan Format keluaran pola 1:1
         - Grup tombol aksi: primer "Mulai Brief", sekunder "Rancang Kit", dan tautan "Lihat Proyek"
       - Strip penutup inquiry cabang olahraga khusus
     - *Field Wajib*: Foto showcase, nama cabang olahraga, spesifikasi teknis tabular, tombol brief.
     - *Field Opsional*: Tombol tautan konfigurator "Rancang Kit", tautan halaman studi kasus proyek.
     - *Perilaku Mobile (390px)*: Susunan zig-zag kiri-kanan runtuh menjadi satu kolom memanjang: foto berada di atas, diikuti judul, teks konsep, micro-specs tabular, dan tombol aksi di bawahnya.
     - *Sumber*: [`jerseay/src/pages/layanan/index.astro:52-130`](file:///d:/myself/web/enlesweb-workspace/jerseay/src/pages/layanan/index.astro#L52-L130)
     - *Screenshot*: [Desktop](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/jerseay/layanan-catalog-desktop.png) | [Mobile](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/jerseay/layanan-catalog-mobile.png)
   - *Arketipe 2 (Portofolio Proyek)*: Showcase proyek pilihan dua gambar asimetris (`FeaturedProject.astro`) & Grid 3 kolom pratinjau proyek studio (`ProjectPreview.astro`)
     - *Sumber*: [`jerseay/src/components/home/FeaturedProject.astro:18-60`](file:///d:/myself/web/enlesweb-workspace/jerseay/src/components/home/FeaturedProject.astro#L18-L60) & [`ProjectPreview.astro:31-60`](file:///d:/myself/web/enlesweb-workspace/jerseay/src/components/home/ProjectPreview.astro#L31-L60)
     - *Screenshot*: [Featured Project Desktop](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/jerseay/featured-project-desktop.png) | [Featured Project Mobile](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/jerseay/featured-project-mobile.png) | [Project Preview Desktop](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/jerseay/project-preview-desktop.png) | [Project Preview Mobile](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/jerseay/project-preview-mobile.png)

6. **klimis**
   - *Arketipe*: Papan menu daftar tarif terstruktur dengan rincian tindakan & titik pengisi
   - *Struktur Slot*:
     - Judul seksi & catatan durasi pengerjaan per layanan
     - Blok layanan utama (`div.service-item-prominent`): nama layanan pangkas, durasi pengerjaan, harga nominal besar, dan rincian tindakan ritual cukur
     - Blok layanan grooming tambahan (`div.addon-item`): nama servis tambahan, titik pengisi (*leader dots*), dan harga nominal
   - *Field Wajib*: Nama paket pangkas, durasi menit, harga nominal, rincian tindakan.
   - *Field Opsional*: Daftar layanan grooming tambahan bertitik pengisi.
   - *Perilaku Mobile (390px)*: Di dalam wadah dua kolom desktop, pada mobile seksi papan harga ini berada di urutan kedua setelah kartu member (`order: 2`), dan seluruh entri tersusun vertikal dengan harga rata kanan secara konsisten.
   - *Sumber*: [`klimis/src/components/ServicesSection.astro:10-90`](file:///d:/myself/web/enlesweb-workspace/klimis/src/components/ServicesSection.astro#L10-L90)
   - *Screenshot*: [Desktop](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/klimis/services-desktop.png) | [Mobile](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/klimis/services-mobile.png)

7. **berflower**
   - *Arketipe*: Tab filter kategori horizontal + Grid 3 kolom kartu produk e-commerce
   - *Struktur Slot*:
     - Bilah filter tab kategori horizontal (`nav.filter-nav > ul.filter-tabs`: Semua, Buket, Bunga Meja, Papan Bunga)
     - Grid produk 3 kolom (`section.product-list-wrapper > ul.product-grid > li.product-item`):
       - Foto buket rasio 4:5 dengan lazy loading
       - Nama produk bunga
       - Deskripsi singkat jumlah tangkai dan pembungkus
       - Harga nominal berformat Rupiah
       - Tautan pesan WhatsApp langsung
       - Tombol interaktif "Tambah ke keranjang"
   - *Field Wajib*: Foto produk, nama produk, harga nominal, tombol aksi WhatsApp/keranjang.
   - *Field Opsional*: Tab filter kategori, tombol tambah ke keranjang lokal.
   - *Perilaku Mobile (390px)*: Grid 3 kolom desktop beralih menjadi susunan 1 kolom fleksibel. Bilah filter tab kategori menggunakan wadah gulir horizontal (*overflow-x: auto*) yang dapat digeser jari.
   - *Sumber*: [`berflower/src/pages/koleksi.astro:10-23`](file:///d:/myself/web/enlesweb-workspace/berflower/src/pages/koleksi.astro#L10-L23)
   - *Screenshot*: [Desktop](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/berflower/product-list-desktop.png) | [Mobile](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/berflower/product-list-mobile.png)

---

### 3.4. LANGKAH / ALUR (Alur Proses Kerja)

#### Tabel Analisis Arketipe Langkah & Alur
| Arketipe | Repo Asal | Jumlah Repo | Kelebihan | Risiko / Kelemahan |
| :--- | :--- | :---: | :--- | :--- |
| **Dua Kolom: Judul Samping Menempel (*Sticky Header*) & Akordeon Linier Interaktif Berjalur Rel** | `enlesweb` | 1 | Judul tetap tampak di sisi kiri saat pengguna menggulir alur; akordeon interaktif menghemat tinggi layar secara drastis | Membutuhkan kode penanganan interaksi klik untuk membuka/menutup langkah dan memutar ikon chevron |
| **Daftar Baris Tabular Bergaris Pemisah Horizontal 3-Kolom (*Hairline Row Ledger*)** | `ripeir`, `tuntas` | 2 | Nuansa formal teratur; memisahkan nomor langkah, judul aksi, dan uraian prosedur dalam grid tabular tanpa kotak kartu | Jika uraian langkah terlalu panjang, baris ledger melebar vertikal secara tidak seimbang |
| **Grid Horizontal Kartu Berurutan Bernomor Digit Besar** | `berflower` (home) | 1 | Pola universal paling mudah dibaca urutannya; pemisahan kartu tegas | Membutuhkan pembatasan karakter teks agar tinggi kartu di desktop tetap seimbang |
| **Bilah Rantai Langkah Sebaris Berpanah dengan Tautan Telusuri** | `jerseay` (home) | 1 | Sangat ringkas; menghemat tinggi halaman beranda; menghubungkan alur dalam satu baris fleksibel | Hanya memuat judul tahap tanpa uraian penjelasan; butuh tautan ke halaman proses terpisah |
| **Diagram Alur Node Terhubung (*Node Workflow Canvas* dengan Konektor SVG Dinamis)** | `jerseay` (proses) | 1 | Dampak visual rekayasa/desain sangat tinggi; interaktif; memvisualisasikan ketergantungan output antar tahap | Kompleksitas kalkulasi koordinat path kabel SVG via skrip pada event perubahan ukuran layar |

#### Inventarisasi Teknis per Repositori:
1. **enlesweb**
   - *Arketipe*: Dua kolom: Judul samping menempel (*sticky header*) & Akordeon linier interaktif berjalur rel
   - *Struktur Slot*:
     - Kolom kiri: Judul seksi menempel mengambang (`h2#process-title`, `position: sticky; top: 112px;`)
     - Kolom kanan: Rel vertikal (`.step-rail`) dan daftar 5 langkah (`ol.process-list > li.process-step`):
       1. "Ceritakan bisnismu"
       2. "Susun halaman"
       3. "Desain dan pembuatan"
       4. "Penyempurnaan"
       5. "Tayang"
     - Elemen per langkah: nomor urut lingkaran (`.step-marker`), tombol pemicu akordeon (`button.step-header-btn`) dengan ikon chevron SVG (`.step-chevron`), wadah uraian langkah yang dapat dilipat (`.step-body-wrapper`, default langkah 1 terbuka)
   - *Field Wajib*: Nomor langkah, judul tahap, tombol pemicu akordeon, uraian aktivitas.
   - *Field Opsional*: Rel garis vertikal penghubung.
   - *Perilaku Mobile (390px)*: Dua kolom beralih menjadi 1 kolom vertikal berjalur rel; judul seksi berada di atas akordeon; interaksi klik tombol membuka langkah terkait dan menutup langkah lainnya.
   - *Sumber*: [`enlesweb/src/components/Process.astro:7-80, 94-107`](file:///d:/myself/web/enlesweb-workspace/enlesweb/src/components/Process.astro#L7-L80) & [`copy.ts:221-248`](file:///d:/myself/web/enlesweb-workspace/enlesweb/src/content/copy.ts#L221-L248)
   - *Screenshot*: [Desktop](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/enlesweb/process-desktop.png) | [Mobile](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/enlesweb/process-mobile.png)

2. **ripeir**
   - *Arketipe*: Daftar baris tabular bergaris pemisah horizontal 3-kolom (*Hairline Row Ledger*)
   - *Struktur Slot*:
     - Judul seksi & estimasi total durasi servis
     - 4 Baris tahapan servis (`article.step-item`):
       - Kolom nomor digit terstruktur (lebar 48px, digit 1 s.d. 4)
       - Kolom judul prosedur (lebar 240px: Konsultasi Kerusakan, Estimasi Biaya & Persetujuan, Pengerjaan di Meja Servis, Pengujian & Garansi)
       - Kolom paragraf detail teknis prosedur (`flex: 1`)
     - Tombol konsultasi WhatsApp di bagian bawah daftar
   - *Field Wajib*: Nomor digit, judul prosedur, teks detail tindakan, tombol konsultasi.
   - *Field Opsional*: Estimasi total durasi perbaikan.
   - *Perilaku Mobile (390px)*: Nomor, judul, dan uraian bertumpuk vertikal di dalam baris bergaris batas atas-bawah tipis (`border-top` / `border-bottom`).
   - *Sumber*: [`ripeir/src/components/StepList.astro:19-33, 69-140`](file:///d:/myself/web/enlesweb-workspace/ripeir/src/components/StepList.astro#L19-L33)
   - *Screenshot*: [Desktop](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/ripeir/steps-desktop.png) | [Mobile](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/ripeir/steps-mobile.png)

3. **tuntas**
   - *Arketipe*: Baris ledger bertabel dengan kolom nomor terpisah
   - *Struktur Slot*:
     - Bilah header seksi dengan judul dan tautan tombol outline ("Pelajari Cara Belajar")
     - Baris item ledger bergaris pemisah (`article.step-ledger-item`):
       - Kolom nomor urut digit (`div.step-num-col`, memuat `index + 1.`)
       - Kolom isi (`div.step-body-col`): judul langkah pendaftaran (`h3.step-title`) & detail uraian instruksi (`p.step-desc`)
   - *Field Wajib*: Nomor langkah, judul tahapan, rincian instruksi.
   - *Field Opsional*: Tautan tombol telusuri panduan lengkap di bilah header.
   - *Perilaku Mobile (390px)*: Nomor urut dan judul langkah bertumpuk vertikal di atas paragraf penjelas; garis pemisah antar baris tetap dipertahankan untuk memisahkan tahapan secara tegas.
   - *Sumber*: [`tuntas/src/components/StepList.astro:15-60`](file:///d:/myself/web/enlesweb-workspace/tuntas/src/components/StepList.astro#L15-L60)
   - *Screenshot*: [Desktop](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/tuntas/steps-desktop.png) | [Mobile](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/tuntas/steps-mobile.png)

4. **jerseay**
   - *Arketipe 1 (Home)*: Bilah rantai langkah sebaris berpanah dengan tautan telusuri (*Inline Arrow-Chained Flow Strip*)
     - *Struktur Slot*:
       - Baris flex horizontal: 4 nama tahap (`<span>Brief</span> &rarr; <span>Arah Visual</span> &rarr; <span>Desain</span> &rarr; <span>File Produksi</span>`)
       - Tautan telusuri di sisi kanan ("Pelajari proses &rarr;")
     - *Field Wajib*: Nama 4 tahapan alur, tanda panah pemisah sebaris, tautan telusuri.
     - *Perilaku Mobile (390px)*: Elemen membungkus baris secara fleksibel (*flex-wrap*).
     - *Sumber*: [`jerseay/src/components/home/ProcessPreview.astro:10-35`](file:///d:/myself/web/enlesweb-workspace/jerseay/src/components/home/ProcessPreview.astro#L10-L35)
     - *Screenshot*: [Desktop](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/jerseay/process-preview-desktop.png) | [Mobile](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/jerseay/process-preview-mobile.png)
   - *Arketipe 2 (Proses)*: Diagram alur node interaktif (*Node Workflow Canvas* dengan konektor kurva SVG dinamis)
     - *Struktur Slot*:
       - Kanvas alur kerja dengan lapisan jalur kurva kabel SVG (`svg#workflow-wires` dengan penanda kepala panah `marker#wire-arrow`)
       - 4 Kartu node proses (`article.workflow-node`, tersusun berselang-seling kiri dan kanan 48% lebar):
         - Titik soket masuk kiri (`div.node-socket-in`) & soket keluar kanan (`div.node-socket-out`)
         - Judul tahap: Brief Kebutuhan, Arah Visual, Desain, File Produksi
         - Rincian keluaran berkas (spesifikasi panel, vektor 1:1, konfirmasi roster)
       - Blok penutup di bawah alur: teks ajakan tim dan tombol "Mulai Brief"
     - *Field Wajib*: Kartu node tahapan kerja, urutan proses, rincian keluaran berkas.
     - *Field Opsional*: Jalur kabel kurva SVG dan soket konektor.
     - *Perilaku Mobile (390px)*: Seluruh kartu node beralih menjadi 1 kolom penuh (lebar 100%), dan kabel SVG melengkung menghubungkan soket bawah ke soket atas secara vertikal linier.
     - *Sumber*: [`jerseay/src/pages/proses/index.astro:35-115`](file:///d:/myself/web/enlesweb-workspace/jerseay/src/pages/proses/index.astro#L35-L115)
     - *Screenshot*: [Desktop](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/jerseay/workflow-canvas-desktop.png) | [Mobile](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/jerseay/workflow-canvas-mobile.png)

5. **berflower**
   - *Arketipe*: 3 Kolom horizontal minimalis bernomor digit besar
   - *Struktur Slot*:
     - Judul seksi alur pemesanan bunga ringkas
     - 3 Kartu langkah proses (`div.step-compact-card`):
       - Nomor urut digit besar (`.step-number`: 1, 2, 3)
       - Judul aksi langkah (Pilih Bunga, Tentukan Kartu & Tanggal, Konfirmasi WhatsApp)
       - Paragraf pendek instruksi pemesanan
       - Tautan panduan lengkap di bawah (`TextLink`)
   - *Field Wajib*: Nomor langkah, judul aksi, teks instruksi.
   - *Field Opsional*: Tautan panduan lengkap.
   - *Perilaku Mobile (390px)*: Berubah dari 3 kolom horizontal menjadi 1 kolom vertikal bertumpuk ke bawah dengan nomor digit di atas tiap blok.
   - *Sumber*: [`berflower/src/components/OrderSteps.astro:20-60`](file:///d:/myself/web/enlesweb-workspace/berflower/src/components/OrderSteps.astro#L20-L60)
   - *Screenshot*: [Desktop](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/berflower/order-steps-desktop.png) | [Mobile](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/berflower/order-steps-mobile.png)

---

### 3.5. KEUNGGULAN / VALUE PROPOSITIONS / ABOUT

#### Tabel Analisis Arketipe Keunggulan
| Arketipe | Repo Asal | Jumlah Repo | Kelebihan | Risiko / Kelemahan |
| :--- | :--- | :---: | :--- | :--- |
| **Dua Kolom Asimetris (Kiri Narasi Cerita Profil, Kanan Kartu Pernyataan Nilai Tunggal)** | `enlesweb` | 1 | Keseimbangan proporsional antara narasi filosofis studio dan proposisi nilai bisnis konkret dalam satu kartu sorotan | Membutuhkan perumusan kalimat nilai bisnis yang padat dan kuat dalam kartu tunggal |
| **Kartu Menempel Mengambang (*Sticky Sidebar Loyalty / Garansi*)** | `klimis` | 1 | Elemen keunggulan dan program loyalitas selalu tampak melayang mendampingi daftar harga layanan | Mengurangi lebar kolom konten utama di desktop; butuh pengaturan `order` CSS yang cermat di mobile |
| **Kartu Kontainer Horizontal Tunggal Lapang / Tiga Pilar Sejajar** | `ripeir`, `berflower` | 2 | Ringkas; sangat hemat ruang vertikal; pesan komitmen integritas/kesegaran tersampaikan secara tegas | Terbatas hanya untuk 3 poin pilar atau paragraf komitmen terpadu |
| **Dua Kolom Editorial Narasi & Dokumentasi / Peta Pendamping** | `seruput` (story), `tuntas` (tentang) | 2 | Pembuktian autentik lewat foto kegiatan atau modul lokasi yang mendampingi teks filosofi | Membutuhkan aset foto dokumentasi kegiatan nyata |

#### Inventarisasi Teknis per Repositori:
1. **enlesweb**
   - *Arketipe*: Dua kolom asimetris: Kolom narasi cerita profil & Kartu pernyataan nilai tunggal
   - *Struktur Slot*:
     - Kolom kiri (`.about-story`): Judul seksi (`h2#about-title`) dan dua paragraf narasi filosofi pembuatan situs web (`.about-p1`, `.about-p2`)
     - Kolom kanan: Satu kartu kontainer bersudut lengkung (`div.about-card`) memuat paragraf pernyataan nilai bisnis (`.about-value` / `copy.businessValue.statement`)
   - *Field Wajib*: Judul seksi, teks narasi profil, kartu pernyataan nilai tunggal.
   - *Field Opsional*: Paragraf kedua narasi.
   - *Perilaku Mobile (390px)*: Dua kolom desktop runtuh menjadi satu kolom vertikal bertumpuk: teks narasi profil di atas, diikuti kartu nilai bisnis di bawahnya.
   - *Sumber*: [`enlesweb/src/components/About.astro:7-21, 38-50`](file:///d:/myself/web/enlesweb-workspace/enlesweb/src/components/About.astro#L7-L21)
   - *Screenshot*: [Desktop](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/enlesweb/about-desktop.png) | [Mobile](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/enlesweb/about-mobile.png)

2. **seruput**
   - *Arketipe*: Dua kolom editorial narasi racikan & Grid 3 kartu testimoni pembuktian sosial
   - *Struktur Slot*:
     - Seksi Story: Dua kolom editorial (kiri foto aktivitas barista menyeduh, kanan narasi filosofi seduhan dadakan dan etika santai)
     - Seksi Social Proof: Grid 3 kolom kartu kutipan ulasan pelanggan (`article.review-card`) memuat teks ulasan pengalaman ngopi, nama pelanggan, dan badge penanda pelanggan tetap
   - *Field Wajib*: Foto dokumentasi / teks narasi cerita; teks kutipan testimoni dan identitas ulasan.
   - *Field Opsional*: Badge penanda pelanggan tetap.
   - *Perilaku Mobile (390px)*: Story bertumpuk foto di atas teks di bawah; kartu testimoni bertumpuk menjadi 1 kolom vertikal.
   - *Sumber*: [`seruput/src/components/Story.astro:6-50`](file:///d:/myself/web/enlesweb-workspace/seruput/src/components/Story.astro#L6-L50) & [`SocialProofSection.astro:5-60`](file:///d:/myself/web/enlesweb-workspace/seruput/src/components/SocialProofSection.astro#L5-L60)
   - *Screenshot*: [Story Desktop](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/seruput/story-desktop.png) | [Story Mobile](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/seruput/story-mobile.png) | [Social Proof Desktop](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/seruput/social-proof-desktop.png) | [Social Proof Mobile](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/seruput/social-proof-mobile.png)

3. **ripeir**
   - *Arketipe*: Tiga kartu pilar horizontal sejajar bernomor digit besar
   - *Struktur Slot*:
     - Judul seksi prinsip integritas teknisi servis
     - 3 Kartu pilar prinsip (`article.principles__card`):
       - Nomor pilar digit besar (01, 02, 03)
       - Judul prinsip (Transparansi Masalah, Suku Cadang Teruji, Garansi Tertulis)
       - Teks komitmen integritas pengerjaan
   - *Field Wajib*: Nomor pilar, judul prinsip, teks komitmen.
   - *Field Opsional*: Durasi formal jaminan garansi.
   - *Perilaku Mobile (390px)*: 3 Kolom kartu sejajar desktop beralih menjadi susunan 3 kartu vertikal bertumpuk penuh selebar kontainer.
   - *Sumber*: [`ripeir/src/components/Principles.astro:6-55`](file:///d:/myself/web/enlesweb-workspace/ripeir/src/components/Principles.astro#L6-L55)
   - *Screenshot*: [Desktop](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/ripeir/principles-desktop.png) | [Mobile](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/ripeir/principles-mobile.png)

4. **tuntas**
   - *Arketipe*: Dua kolom editorial profil bimbingan belajar tuntas
   - *Struktur Slot*:
     - Kolom kiri: Tiga paragraf filosofi belajar konsep tanpa hafalan, blok jam konsultasi orang tua, dan blok alamat cabang
     - Kolom kanan: Modul peta lokasi tersemat Google Maps
     - Kartu konsep situs editorial di bawah grid
   - *Field Wajib*: Teks narasi profil bimbingan, jadwal konsultasi, alamat.
   - *Field Opsional*: Peta embed, kartu konsep situs.
   - *Perilaku Mobile (390px)*: Dua kolom beralih menjadi 1 kolom vertikal bertumpuk; peta dialihkan ke posisi bawah alamat via blok `.mobile-map-block`.
   - *Sumber*: [`tuntas/src/pages/tentang.astro:21-108`](file:///d:/myself/web/enlesweb-workspace/tuntas/src/pages/tentang.astro#L21-L108)
   - *Screenshot*: [Desktop](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/tuntas/tentang-main-desktop.png) | [Mobile](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/tuntas/tentang-main-mobile.png)

5. **klimis**
   - *Arketipe*: Kartu vertikal stempel loyalitas mengambang (*sticky sidebar*)
   - *Struktur Slot*:
     - Header kartu member dengan simulasi nomor identitas pelanggan
     - 6 Kotak stempel lingkaran (5 terisi stempel gunting pangkas, ke-6 kotak hadiah pangkas gratis)
     - Baris jam operasional pangkas harian
     - Kotak jaminan kepuasan pangkas rapi tanpa antrean rumit
   - *Field Wajib*: Kotak simulasi stempel loyalitas, jadwal jam buka, jaminan kepuasan.
   - *Field Opsional*: Nomor seri kartu pelanggan.
   - *Perilaku Mobile (390px)*: Pada desktop melayang di kolom samping (`position: sticky; top: calc(var(--header-height) + var(--space-4)); width: 370px`). Pada mobile beralih menjadi kartu horizontal teratas (`order: 1`), sebelum daftar layanan pangkas.
   - *Sumber*: [`klimis/src/components/SidebarInfo.astro:5-80`](file:///d:/myself/web/enlesweb-workspace/klimis/src/components/SidebarInfo.astro#L5-L80) & [`pages/index.astro:48-60`](file:///d:/myself/web/enlesweb-workspace/klimis/src/pages/index.astro#L48-L60)
   - *Screenshot*: [Desktop](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/klimis/sidebar-info-desktop.png) | [Mobile](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/klimis/sidebar-info-mobile.png)

6. **berflower**
   - *Arketipe*: Kartu kontainer horizontal tunggal memanjang berbingkai lapang
   - *Struktur Slot*:
     - Judul seksi tentang studio kriya florist
     - Dua paragraf narasi komitmen kesegaran tangkai bunga pasar pagi dan sistem kemasan tangkai basah berair
     - Tautan teks bergaris bawah ke halaman panduan cara pesan
   - *Field Wajib*: Judul seksi, teks narasi komitmen, tautan panduan.
   - *Field Opsional*: Tanda tangan digital florist.
   - *Perilaku Mobile (390px)*: Padding dalam kartu berkurang; teks bertumpuk linier dari judul, isi narasi, hingga tautan penutup.
   - *Sumber*: [`berflower/src/components/AboutBrief.astro:6-45`](file:///d:/myself/web/enlesweb-workspace/berflower/src/components/AboutBrief.astro#L6-L45)
   - *Screenshot*: [Desktop](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/berflower/about-brief-desktop.png) | [Mobile](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/berflower/about-brief-mobile.png)

---

### 3.6. INFO LOKASI DAN JAM (Alamat, Jam Kerja, Peta)

#### Tabel Analisis Arketipe Info Lokasi & Jam
| Arketipe | Repo Asal | Jumlah Repo | Kelebihan | Risiko / Kelemahan |
| :--- | :--- | :---: | :--- | :--- |
| **Dua Kolom Terbelah (Kiri Rincian Alamat & Jam, Kanan Iframe Peta Interaktif)** | `seruput`, `klimis`, `tuntas` (tentang) | 3 | Memberikan kepastian navigasi fisik lengkap bagi pelanggan; interaktif | Modul iframe peta membebani pemuatan jaringan; butuh styling responsif agar tinggi peta proporsional |
| **Modul Peta Lokasi Terintegrasi Langsung di Dalam Kolom Footer** | `berflower` | 1 | Menghemat satu blok seksi beranda penuh; alamat dan peta tetap mudah diakses di bagian akhir halaman | Luas bidang peta di kolom footer lebih terbatas dibanding seksi mandiri penuh |
| **Bilah Alamat & Jam Respons Ringkas Berbasis Teks/Tautan Tanpa Iframe** | `enlesweb`, `ripeir`, `jerseay` | 3 | Sangat ringan; cepat diakses; tidak membebani performa mobile | Pengunjung tidak dapat menjelajahi radius jalanan secara langsung sebelum membuka tautan keluar |

#### Inventarisasi Teknis per Repositori:
1. **seruput**
   - *Arketipe*: Dua kolom terbelah (kiri rincian alamat & tabel jam buka, kanan iframe peta interaktif)
   - *Struktur Slot*:
     - Judul seksi & alamat kedai dalam tag semantik `<address>`
     - Jadwal jam operasional harian: Senin - Jumat (08.00 - 22.00) dan Sabtu - Minggu (09.00 - 23.00)
     - Catatan petunjuk jalan kaki dari perhentian transportasi terdekat
     - Modul iframe Google Maps tersemat responsif
     - Tombol tautan eksternal "Buka di Google Maps" di tab baru
   - *Field Wajib*: Alamat fisik lengkap, jadwal jam operasional, tautan Google Maps.
   - *Field Opsional*: Iframe peta tersemat, catatan petunjuk rute jalan kaki.
   - *Perilaku Mobile (390px)*: Dua kolom beralih menjadi 1 kolom vertikal: teks alamat dan jam di atas, peta iframe di bawah dengan rasio 16:9.
   - *Sumber*: [`seruput/src/components/LocationSection.astro:6-75`](file:///d:/myself/web/enlesweb-workspace/seruput/src/components/LocationSection.astro#L6-L75)
   - *Screenshot*: [Desktop](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/seruput/location-desktop.png) | [Mobile](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/seruput/location-mobile.png)

2. **klimis**
   - *Arketipe*: Dua kolom terbalik (kiri iframe peta interaktif, kanan kartu rincian jam & alamat)
   - *Struktur Slot*:
     - Wadah iframe peta Google Maps responsif di sisi kiri
     - Kartu alamat studio pangkas rambut dan patokan gedung di sisi kanan
     - Jadwal jam operasional walk-in tanpa reservasi
     - Tautan tombol navigasi Google Maps
   - *Field Wajib*: Alamat lengkap studio, jam operasional walk-in, tautan peta luar.
   - *Field Opsional*: Iframe peta tersemat, keterangan patokan gedung.
   - *Perilaku Mobile (390px)*: Peta dan teks alamat bertumpuk 1 kolom vertikal dengan lebar 100% dan ketinggian peta 300px.
   - *Sumber*: [`klimis/src/components/LocationSection.astro:6-85`](file:///d:/myself/web/enlesweb-workspace/klimis/src/components/LocationSection.astro#L6-L85)
   - *Screenshot*: [Desktop](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/klimis/location-desktop.png) | [Mobile](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/klimis/location-mobile.png)

3. **tuntas**
   - *Arketipe*: Kolom pendamping peta tersemat dengan bilah tautan eksternal
   - *Struktur Slot*:
     - Judul seksi jam operasional & alamat cabang bimbingan
     - Rincian alamat fisik dan catatan fasilitas ruang belajar
     - Modul iframe peta Google Maps responsif (`MapEmbed.astro`)
     - Tautan teks pembuka aplikasi navigasi peta
   - *Field Wajib*: Alamat cabang, jam operasional, tautan peta luar.
   - *Field Opsional*: Iframe peta tersemat.
   - *Perilaku Mobile (390px)*: Ditampilkan di bawah alamat teks via kontainer `.mobile-map-block`. *(Catatan bug CSS: Pada desktop repositori asli tuntas, baris 147-149 `tentang.astro` menimpa display peta desktop karena urutan deklarasi kelas)*.
   - *Sumber*: [`tuntas/src/components/MapEmbed.astro:1-45`](file:///d:/myself/web/enlesweb-workspace/tuntas/src/components/MapEmbed.astro#L1-L45) & [`tentang.astro:130-160`](file:///d:/myself/web/enlesweb-workspace/tuntas/src/pages/tentang.astro#L130-L160)
   - *Screenshot*: [Desktop](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/tuntas/map-location-desktop.png) | [Mobile](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/tuntas/map-location-mobile.png)

4. **berflower**
   - *Arketipe*: Modul peta terintegrasi langsung di dalam kolom footer & kartu kontak di halaman `/kontak`
   - *Struktur Slot*:
     - Kartu info kontak halaman `/kontak` (alamat fisik, jam buka kurasi bunga, tombol chat WhatsApp)
     - Kolom lokasi footer: label kota, alamat fisik `<address>`, wadah iframe peta `footer-map-card`, dan tautan "Buka di Google Maps"
   - *Field Wajib*: Alamat toko fisik, jam buka kurasi bunga, tautan Google Maps.
   - *Field Opsional*: Iframe peta tersemat di dalam footer.
   - *Perilaku Mobile (390px)*: Pada footer, kolom peta berada di antara kolom identitas toko dan kolom navigasi menu, melebar 100% selebar kolom mobile.
   - *Sumber*: [`berflower/src/components/ContactInfo.astro:5-70`](file:///d:/myself/web/enlesweb-workspace/berflower/src/components/ContactInfo.astro#L5-L70) & [`Footer.astro:40-62`](file:///d:/myself/web/enlesweb-workspace/berflower/src/components/Footer.astro#L40-L62)
   - *Screenshot*: [Contact Info Desktop](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/berflower/contact-info-desktop.png) | [Contact Info Mobile](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/berflower/contact-info-mobile.png)

5. **enlesweb, ripeir, jerseay**
   - *Arketipe*: Bilah alamat dan jam respons ringkas berbasis teks/tautan tanpa iframe
   - *Struktur Slot*: Alamat fisik semantik `<address>`, email / nomor WhatsApp, komitmen jam respons di footer / bilah navigasi, tautan keluar ke penyedia peta eksternal.
   - *Field Wajib*: Teks kontak dan alamat.
   - *Field Opsional*: Tautan peta eksternal.
   - *Perilaku Mobile (390px)*: Tersusun vertikal di dalam kolom footer dengan efisiensi tinggi tanpa beban unduhan iframe.
   - *Sumber*: [`enlesweb/src/components/Footer.astro:58-72`](file:///d:/myself/web/enlesweb-workspace/enlesweb/src/components/Footer.astro#L58-L72), [`ripeir/src/components/Footer.astro:42-55`](file:///d:/myself/web/enlesweb-workspace/ripeir/src/components/Footer.astro#L42-L55), [`jerseay/src/components/navigation/Footer.astro:12-38`](file:///d:/myself/web/enlesweb-workspace/jerseay/src/components/navigation/Footer.astro#L12-L38)

---

### 3.7. FINAL CTA (Ajakan Bertindak Akhir)

#### Tabel Analisis Arketipe CTA Akhir
| Arketipe | Repo Asal | Jumlah Repo | Kelebihan | Risiko / Kelemahan |
| :--- | :--- | :---: | :--- | :--- |
| **Kartu Kontainer Berbingkai Tunggal Terpusat Penuh** | `enlesweb`, `seruput`, `berflower`, `klimis` | 4 | Fokus aksi tunggal maksimal; batas visual tegas; tingkat konversi tinggi | Kurang dinamis jika pemilik bisnis memiliki dua jalur aksi berbeda (misal formulir vs chat) |
| **Bilah Horizontal Dua Kolom Terbagi diapit Garis Pemisah (Kiri Teks, Kanan Tombol Aksi)** | `ripeir` (tombol tunggal), `jerseay` (tombol ganda) | 2 | Tampilan sangat bersih dan arsitektural; menyediakan jalur aksi terpisah di sisi kanan | Pada teks judul yang panjang, tombol aksi terdesak ke bawah saat layar menyempit |
| **Format Kupon/Tiket Pendaftaran Asimetris dengan Tombol Stempel** | `tuntas` | 1 | Nuansa personal; memberi kesan penawaran evaluasi awal yang bernilai | Membutuhkan tata letak asimetris yang cermat agar tidak tampak seperti spanduk lepas |

#### Inventarisasi Teknis per Repositori:
1. **enlesweb**
   - *Arketipe*: Kartu kontainer berbingkai tunggal terpusat penuh
   - *Struktur Slot*:
     - Judul ajakan pembuatan web (`h2#final-cta-title`)
     - Paragraf pendukung kepemilikan aset dan tanpa biaya langganan bulanan
     - Tombol aksi WhatsApp primer ukuran besar (`WhatsAppButton`)
   - *Field Wajib*: Judul ajakan, tombol aksi WhatsApp.
   - *Field Opsional*: Paragraf penjelas jaminan biaya.
   - *Perilaku Mobile (390px)*: Padding dalam kartu berkurang; tombol aksi WhatsApp otomatis melebar 100% selebar layar ponsel.
   - *Sumber*: [`enlesweb/src/components/FinalCta.astro:6-45`](file:///d:/myself/web/enlesweb-workspace/enlesweb/src/components/FinalCta.astro#L6-L45)
   - *Screenshot*: [Desktop](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/enlesweb/final-cta-desktop.png) | [Mobile](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/enlesweb/final-cta-mobile.png)

2. **seruput**
   - *Arketipe*: Kartu kontak terpusat dengan aksen stempel tiket kedai
   - *Struktur Slot*:
     - Judul ajakan mampir ke meja bar kedai
     - Paragraf suasana santai tanpa reservasi kaku
     - Tombol aksi primer WhatsApp ke nomor barista (`WhatsAppButton`)
     - Catatan waktu seduh dadakan
   - *Field Wajib*: Judul ajakan, tombol pesan WhatsApp.
   - *Field Opsional*: Catatan suasana kedai.
   - *Perilaku Mobile (390px)*: Kartu memusat dan tombol aksi menjadi tombol blok penuh selebar layar.
   - *Sumber*: [`seruput/src/components/ContactSection.astro:6-65`](file:///d:/myself/web/enlesweb-workspace/seruput/src/components/ContactSection.astro#L6-L65)
   - *Screenshot*: [Desktop](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/seruput/contact-desktop.png) | [Mobile](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/seruput/contact-mobile.png)

3. **ripeir**
   - *Arketipe*: Bilah horizontal dua kolom terbagi diapit garis pemisah tipis
   - *Struktur Slot*:
     - Judul ajakan konsultasi kerusakan perangkat gratis (`h2#final-cta-title`)
     - Paragraf estimasi biaya di awal tanpa komitmen perbaikan
     - Tombol aksi primer WhatsApp ukuran besar (`WhatsAppButton`)
   - *Field Wajib*: Judul ajakan konsultasi, tombol kontak teknisi.
   - *Field Opsional*: Kalimat penjelas tanpa komitmen perbaikan.
   - *Perilaku Mobile (390px)*: Dua kolom beralih menjadi 1 kolom vertikal bertumpuk: teks di atas, tombol WhatsApp penuh di bawahnya.
   - *Sumber*: [`ripeir/src/components/FinalCta.astro:6-50`](file:///d:/myself/web/enlesweb-workspace/ripeir/src/components/FinalCta.astro#L6-L50)
   - *Screenshot*: [Desktop](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/ripeir/final-cta-desktop.png) | [Mobile](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/ripeir/final-cta-mobile.png)

4. **tuntas**
   - *Arketipe*: Format tiket pendaftaran asimetris dengan tombol stempel
   - *Struktur Slot*:
     - Judul penawaran sesi evaluasi belajar (`h2#final-cta-heading`)
     - Paragraf jaminan tanpa paksaan mendaftar paket
     - Tombol WhatsApp berukuran stempel (`WhatsAppButton`)
   - *Field Wajib*: Judul sesi evaluasi, tombol WhatsApp.
   - *Field Opsional*: Teks jaminan bebas komitmen.
   - *Perilaku Mobile (390px)*: Berubah dari susunan baris horizontal fleksibel menjadi satu kolom vertikal bertumpuk dengan tombol penuh selebar layar.
   - *Sumber*: [`tuntas/src/components/FinalCta.astro:6-55`](file:///d:/myself/web/enlesweb-workspace/tuntas/src/components/FinalCta.astro#L6-L55)
   - *Screenshot*: [Desktop](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/tuntas/final-cta-desktop.png) | [Mobile](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/tuntas/final-cta-mobile.png)

5. **jerseay**
   - *Arketipe*: Bilah horizontal dua kolom terbagi diapit garis pemisah tipis dengan tombol aksi ganda
   - *Struktur Slot*:
     - Judul ajakan tim olahraga (`h2#final-cta-heading`)
     - Subjudul panduan brief konsultasi desain
     - Tombol primer "Mulai Brief" dengan ikon panah
     - Tombol sekunder garis batas "WhatsApp Studio"
   - *Field Wajib*: Judul ajakan, tombol aksi formulir brief.
   - *Field Opsional*: Tombol sekunder chat WhatsApp.
   - *Perilaku Mobile (390px)*: Teks dan grup tombol bertumpuk vertikal; tombol aksi primer dan sekunder masing-masing menjadi tombol penuh selebar kontainer ponsel.
   - *Sumber*: [`jerseay/src/components/home/HomeFinalCTA.astro:6-65`](file:///d:/myself/web/enlesweb-workspace/jerseay/src/components/home/HomeFinalCTA.astro#L6-L65)
   - *Screenshot*: [Desktop](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/jerseay/final-cta-desktop.png) | [Mobile](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/jerseay/final-cta-mobile.png)

6. **klimis**
   - *Arketipe*: Plakat terpusat bergaya kertas tiket
   - *Struktur Slot*:
     - Judul ajakan duduk di kursi pangkas rambut
     - Teks penjelas layanan walk-in tanpa antrean
     - Tombol WhatsApp booking kursi pangkas
   - *Field Wajib*: Judul ajakan, tombol kontak.
   - *Field Opsional*: Catatan walk-in tanpa antrean kaku.
   - *Perilaku Mobile (390px)*: Plakat memusat dengan tombol aksi melebar 100% selebar layar ponsel.
   - *Sumber*: [`klimis/src/components/ContactSection.astro:6-75`](file:///d:/myself/web/enlesweb-workspace/klimis/src/components/ContactSection.astro#L6-L75)
   - *Screenshot*: [Desktop](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/klimis/contact-desktop.png) | [Mobile](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/klimis/contact-mobile.png)

7. **berflower**
   - *Arketipe*: Kartu bertumpuk terpusat lapang
   - *Struktur Slot*:
     - Judul pesanan buket bunga kustom (`h2#final-cta-title`)
     - Paragraf konfirmasi ketersediaan tangkai dan anggaran fleksibel
     - Tombol aksi WhatsApp primer (`WhatsAppButton`)
   - *Field Wajib*: Judul konsultasi, tombol pesan kustom.
   - *Field Opsional*: Paragraf penjelas fleksibilitas buket.
   - *Perilaku Mobile (390px)*: Padding dalam kartu mengecil; tombol aksi memanjang penuh selebar kontainer.
   - *Sumber*: [`berflower/src/components/FinalCta.astro:6-50`](file:///d:/myself/web/enlesweb-workspace/berflower/src/components/FinalCta.astro#L6-L50)
   - *Screenshot*: [Desktop](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/berflower/final-cta-desktop.png) | [Mobile](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/berflower/final-cta-mobile.png)

---

### 3.8. FOOTER (Kaki Halaman)

#### Tabel Analisis Arketipe Footer
| Arketipe | Repo Asal | Jumlah Repo | Kelebihan | Risiko / Kelemahan |
| :--- | :--- | :---: | :--- | :--- |
| **Multi-Kolom Berjenjang 4 Kolom Klasik (Profil, Navigasi, Kebijakan Privasi, Kontak)** | `enlesweb` | 1 | Informasi terlengkap; kepatuhan legal kebijakan privasi terpisah; struktur korporat teratur | Membutuhkan ruang vertikal panjang saat runtuh menjadi 1 kolom di layar ponsel |
| **Tiga Kolom Fungsional dengan Tombol Aksi Langsung di Kolom Profil** | `jerseay` | 1 | Mempertahankan peluang konversi di ujung bawah halaman lewat tombol aksi mini | Ruang kolom profil menjadi padat karena memuat teks dan tombol sekaligus |
| **Tiga Kolom Klasik Terstruktur (Profil Merek, Jam Operasional, Navigasi)** | `seruput`, `ripeir`, `tuntas`, `klimis` | 4 | Sangat seimbang dan efisien; memenuhi ekspektasi umum navigasi kaki halaman | Kurang fleksibel jika perlu memuat tautan legal atau sub-kategori yang banyak |
| **Multi-Utilitas Terpadu (Sosial Media, Modul Peta Embed, Navigasi, Catatan Konsep)** | `berflower` | 1 | Menggabungkan fungsi navigasi fisik (peta), media sosial, dan tautan menu internal sekaligus | Peta iframe di dalam footer membebani pemuatan halaman |

#### Inventarisasi Teknis per Repositori:
1. **enlesweb**
   - *Arketipe*: Footer 4 kolom berjenjang (Profil, Navigasi Utama, Kebijakan Privasi, Kontak)
   - *Struktur Slot*:
     - Kolom 1: Logo gambar, teks nama merek, dan paragraf deskripsi ringkas studio web
     - Kolom 2: Daftar tautan navigasi internal (Beranda, Paket, Proyek, Proses, Tentang)
     - Kolom 3: Tautan kebijakan privasi terpisah
     - Kolom 4: Info kontak WhatsApp dan alamat surat elektronik
     - Baris penutup: Hak cipta dan kredit tahun rilis
   - *Field Wajib*: Nama merek, tautan navigasi, hak cipta.
   - *Field Opsional*: Logo gambar, tautan halaman kebijakan privasi terpisah.
   - *Perilaku Mobile (390px)*: 4 Kolom horizontal runtuh menjadi susunan 1 kolom bertumpuk vertikal dari kolom 1 hingga kolom 4.
   - *Sumber*: [`enlesweb/src/components/Footer.astro:8-90`](file:///d:/myself/web/enlesweb-workspace/enlesweb/src/components/Footer.astro#L8-L90)
   - *Screenshot*: [Desktop](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/enlesweb/footer-desktop.png) | [Mobile](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/enlesweb/footer-mobile.png)

2. **seruput**
   - *Arketipe*: Footer 3 kolom klasik terstruktur (Profil, Jam Kerja, Tautan Menu)
   - *Struktur Slot*:
     - Kolom 1: Nama kedai & tagline filosofi racikan
     - Kolom 2: Jam operasional lengkap hari kerja vs akhir pekan
     - Kolom 3: Daftar tautan cepat ke seksi-seksi halaman beranda
     - Baris bawah: Catatan penafian konsep template & hak cipta
   - *Field Wajib*: Nama kedai, jam operasional, tautan navigasi, hak cipta.
   - *Field Opsional*: Catatan penafian konsep.
   - *Perilaku Mobile (390px)*: 3 Kolom horizontal desktop beralih menjadi 1 kolom vertikal bertumpuk.
   - *Sumber*: [`seruput/src/components/Footer.astro:6-85`](file:///d:/myself/web/enlesweb-workspace/seruput/src/components/Footer.astro#L6-L85)
   - *Screenshot*: [Desktop](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/seruput/footer-desktop.png) | [Mobile](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/seruput/footer-mobile.png)

3. **ripeir**
   - *Arketipe*: Footer 3 kolom modular teknis (Profil Servis, Tautan Seksi, Alamat Workshop)
   - *Struktur Slot*:
     - Kolom 1: Teks merek & cakupan perangkat yang dilayani
     - Kolom 2: Tautan cepat ke seksi layanan, cara kerja, prinsip
     - Kolom 3: Alamat meja servis workshop dan nomor kontak teknisi
     - Baris bawah: Garis pembatas tipis dan hak cipta
   - *Field Wajib*: Nama merek, navigasi halaman, alamat kontak, hak cipta.
   - *Field Opsional*: Rincian spesialisasi teknis di kolom profil.
   - *Perilaku Mobile (390px)*: Kolom-kolom tersusun bertumpuk secara linier ke bawah.
   - *Sumber*: [`ripeir/src/components/Footer.astro:6-75`](file:///d:/myself/web/enlesweb-workspace/ripeir/src/components/Footer.astro#L6-L75)
   - *Screenshot*: [Desktop](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/ripeir/footer-desktop.png) | [Mobile](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/ripeir/footer-mobile.png)

4. **tuntas**
   - *Arketipe*: Footer 3 kolom berbasis ledger (Profil Lembaga, Halaman Utama, Jam Konsultasi)
   - *Struktur Slot*:
     - Kolom 1: Nama lembaga bimbingan belajar & ringkasan metode kelompok kecil
     - Kolom 2: Daftar tautan halaman multi-page (`/tentang`, `/program`, `/jadwal-biaya`, `/kontak`)
     - Kolom 3: Jam konsultasi harian & alamat cabang
     - Baris bawah: Kredit pengembang dan penafian konsep
   - *Field Wajib*: Nama lembaga, tautan halaman situs, kontak, hak cipta.
   - *Field Opsional*: Penafian konsep template.
   - *Perilaku Mobile (390px)*: Beralih menjadi susunan vertikal 1 kolom dengan jarak antar grup tautan minimal 44px untuk kenyamanan sentuh.
   - *Sumber*: [`tuntas/src/components/Footer.astro:6-95`](file:///d:/myself/web/enlesweb-workspace/tuntas/src/components/Footer.astro#L6-L95)
   - *Screenshot*: [Desktop](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/tuntas/footer-desktop.png) | [Mobile](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/tuntas/footer-mobile.png)

5. **jerseay**
   - *Arketipe*: Footer arsitektural 3 kolom dengan tombol aksi cepat langsung di kolom profil
   - *Struktur Slot*:
     - Kolom 1 (lebar 5 kolom grid desktop): Teks studio, deskripsi satu kalimat, dan sepasang tombol aksi mini ("Mulai Brief" & "WhatsApp Studio")
     - Kolom 2 (lebar 3 kolom grid desktop): Struktur navigasi halaman studio
     - Kolom 3 (lebar 4 kolom grid desktop): Daftar spesialisasi cabang olahraga dan konfigurator rancang kit
     - Baris bawah: Baris hak cipta satu baris
   - *Field Wajib*: Nama studio, tautan navigasi, hak cipta.
   - *Field Opsional*: Tombol aksi mini langsung di dalam kolom profil footer, daftar sub-kategori spesialisasi.
   - *Perilaku Mobile (390px)*: Grid 12 kolom desktop (`grid-cols-1 md:grid-cols-12`) runtuh menjadi 1 kolom vertikal bertumpuk; tombol aksi mini tetap mempertahankan target sentuh 44px.
   - *Sumber*: [`jerseay/src/components/navigation/Footer.astro:12-90`](file:///d:/myself/web/enlesweb-workspace/jerseay/src/components/navigation/Footer.astro#L12-L90)
   - *Screenshot*: [Desktop](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/jerseay/footer-desktop.png) | [Mobile](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/jerseay/footer-mobile.png)

6. **klimis**
   - *Arketipe*: Footer 3 kolom klasik (Profil Barbershop, Jam & Lokasi, Navigasi Seksi)
   - *Struktur Slot*:
     - Kolom 1: Teks nama studio barbershop & tagline pangkas rambut
     - Kolom 2: Jam operasional harian dan patokan lokasi
     - Kolom 3: Tautan seksi beranda dan tautan khusus kuis konsultasi gaya rambut
     - Baris bawah: Kredit hak cipta
   - *Field Wajib*: Nama studio, jam buka, navigasi, hak cipta.
   - *Field Opsional*: Tautan khusus kuis gaya rambut.
   - *Perilaku Mobile (390px)*: Bertumpuk vertikal satu kolom dari atas ke bawah.
   - *Sumber*: [`klimis/src/components/Footer.astro:6-80`](file:///d:/myself/web/enlesweb-workspace/klimis/src/components/Footer.astro#L6-L80)
   - *Screenshot*: [Desktop](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/klimis/footer-desktop.png) | [Mobile](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/klimis/footer-mobile.png)

7. **berflower**
   - *Arketipe*: Footer multi-fitur 3 kolom kaya konten (Sosial Media, Modul Peta Embed, Navigasi Menu)
   - *Struktur Slot*:
     - Kolom 1: Nama toko, tagline, dan deretan 3 tombol ikon media sosial berbingkai (Instagram, TikTok, Pinterest)
     - Kolom 2: Lokasi studio lengkap dengan label kota, alamat fisik `<address>`, wadah iframe peta Google Maps responsif (`footer-map-card`), dan tautan "Buka di Google Maps"
     - Kolom 3: Menu navigasi internal lengkap (Koleksi, Hadiah, Buat Buket, Cara Pesan, Kontak)
     - Baris tengah: Catatan penafian konsep template ENLESWEB
     - Baris bawah: Kredit hak cipta
   - *Field Wajib*: Nama toko, tautan menu, alamat fisik, hak cipta.
   - *Field Opsional*: Ikon media sosial eksternal, modul iframe peta tersemat di footer, catatan penafian konsep.
   - *Perilaku Mobile (390px)*: Ketiga kolom bertumpuk secara vertikal (profil toko & sosial di atas, peta dan alamat di tengah, tautan menu di bawah). Peta tetap responsif selebar kolom.
   - *Sumber*: [`berflower/src/components/Footer.astro:8-115`](file:///d:/myself/web/enlesweb-workspace/berflower/src/components/Footer.astro#L8-L115)
   - *Screenshot*: [Desktop](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/berflower/footer-desktop.png) | [Mobile](file:///d:/myself/web/enlesweb-workspace/_audit/layout-inventory/berflower/footer-mobile.png)

---

## 4. Audit dan Verifikasi Berkas Tangkapan Layar (Screenshot Audit)

Seluruh 155 berkas tangkapan layar PNG yang disimpan pada folder `d:\myself\web\7project\_audit\layout-inventory\` telah diperiksa dan diverifikasi secara langsung:

| Repositori | Total Berkas PNG | Rincian Tangkapan Layar yang Tersedia | Status Verifikasi |
| :--- | :---: | :--- | :---: |
| `enlesweb` | 19 | `navbar` (desktop, mobile, drawer), `hero` (desktop, mobile), `packages` (desktop, mobile), `projects` (desktop, mobile), `process` (desktop, mobile), `about` (desktop, mobile), `final-cta` (desktop, mobile), `footer` (desktop, mobile), `context-home` (desktop, mobile) | Lengkap & Terverifikasi |
| `seruput` | 19 | `navbar` (desktop, mobile, drawer), `hero` (desktop, mobile), `story` (desktop, mobile), `beans` (desktop, mobile), `social-proof` (desktop, mobile), `location` (desktop, mobile), `contact` (desktop, mobile), `footer` (desktop, mobile), `context-home` (desktop, mobile) | Lengkap & Terverifikasi |
| `ripeir` | 17 | `navbar` (desktop, mobile, drawer), `hero` (desktop, mobile), `services` (desktop, mobile), `steps` (desktop, mobile), `principles` (desktop, mobile), `final-cta` (desktop, mobile), `footer` (desktop, mobile), `context-home` (desktop, mobile) | Lengkap & Terverifikasi |
| `tuntas` | 29 | `navbar` (desktop, mobile, drawer), `hero` (desktop, mobile), `program-rows` (desktop, mobile), `format-cards` (desktop, mobile), `steps` (desktop, mobile), `final-cta` (desktop, mobile), `footer` (desktop, mobile), `tentang-main` (desktop, mobile), `map-location` (desktop, mobile), `fees-table` (desktop, mobile), `schedule-table` (desktop, mobile), `context-home`, `context-tentang`, `context-jadwal-biaya` (desktop & mobile) | Lengkap & Terverifikasi |
| `jerseay` | 25 | `navbar` (desktop, mobile, drawer), `hero` (desktop, mobile), `process-preview` (desktop, mobile), `featured-project` (desktop, mobile), `project-preview` (desktop, mobile), `final-cta` (desktop, mobile), `footer` (desktop, mobile), `layanan-catalog` (desktop, mobile), `workflow-canvas` (desktop, mobile), `context-home`, `context-layanan`, `context-proses` (desktop & mobile) | Lengkap & Terverifikasi |
| `klimis` | 17 | `navbar` (desktop, mobile, drawer), `hero` (desktop, mobile), `sidebar-info` (desktop, mobile), `services` (desktop, mobile), `location` (desktop, mobile), `contact` (desktop, mobile), `footer` (desktop, mobile), `context-home` (desktop, mobile) | Lengkap & Terverifikasi |
| `berflower` | 29 | `navbar` (desktop, mobile, drawer), `hero` (desktop, mobile), `about-brief` (desktop, mobile), `category-showcase` (desktop, mobile), `order-steps` (desktop, mobile), `gift-teaser` (desktop, mobile), `occasion-index` (desktop, mobile), `final-cta` (desktop, mobile), `footer` (desktop, mobile), `product-list` (desktop, mobile), `contact-info` (desktop, mobile), `context-home`, `context-koleksi`, `context-kontak` (desktop & mobile) | Lengkap & Terverifikasi |
| **TOTAL** | **155** | **Seluruh 8 kategori seksi + drawer terbuka + full-page context untuk 7 repo** | **100% Valid** |

---

## 5. Remaining Questions & Gaps

Bagian ini mencatat keterbatasan bukti, anomali kode yang ditemukan selama investigasi, serta rekomendasi prioritas untuk investigator atau pengembang berikutnya:

1. **Anomali CSS Overwrite pada Peta Desktop `tuntas`**:
   - *Temuan*: Pada file [`tuntas/src/pages/tentang.astro:141-149`](file:///d:/myself/web/enlesweb-workspace/tuntas/src/pages/tentang.astro#L141-L149), deklarasi tanpa media query `.tentang-right-col { display: none; }` diletakkan tepat setelah blok `@media (min-width: 1024px) { .tentang-right-col { display: block; } }`. Karena kedua aturan memiliki spesifisitas kelas yang identik (0, 1, 0), aturan yang ditulis lebih bawah menimpa aturan media query di atasnya. Bersamaan dengan itu, `.mobile-map-block` memiliki `@media (min-width: 1024px) { display: none; }`.
   - *Dampak Nyata*: Pada layar desktop 1280px, peta embed Google Maps menghilang sepenuhnya dari tampilan (`display: none`), sehingga berkas `map-location-desktop.png` hanya berukuran 4,839 bytes.
   - *Fokus Rekomendasi*: Pindahkan deklarasi dasar `.tentang-right-col { display: none; }` ke posisi sebelum blok media query `@media (min-width: 1024px)` pada file `tuntas/src/pages/tentang.astro`.

2. **Dukungan Aksesibilitas Focus-Trap pada Mobile Drawer**:
   - *Temuan*: Audit aksesibilitas menunjukkan bahwa hanya `jerseay` ([`Navbar.astro:279-350`](file:///d:/myself/web/enlesweb-workspace/jerseay/src/components/navigation/Navbar.astro#L279-L350)) yang mengimplementasikan penjerat fokus keyboard (menahan tombol Tab agar tidak menjelajah elemen halaman di balik drawer yang terbuka) dan menandai kontainer utama dengan `mainContent.inert = true`. Enam repositori lainnya (`enlesweb`, `seruput`, `ripeir`, `tuntas`, `klimis`, `berflower`) hanya menyembunyikan panel dengan atribut `hidden` saat tertutup, tetapi membiarkan fokus keyboard menembus ke latar belakang saat menu mobile terbuka.
   - *Fokus Rekomendasi*: Standarisasi modul skrip navigasi mobile di seluruh template ENLESWEB dengan mengadopsi modul penjerat fokus (*focus-trap*) milik `jerseay`.

3. **Inkonsistensi Threshold Scroll-Listener pada Header Mengambang**:
   - *Temuan*: Repositori `jerseay` menggunakan script listener scroll yang mengubah latar belakang header dari transparan menjadi padat begitu melewati ambang batas 40px, dan `seruput` ([`Navbar.astro:301-307`](file:///d:/myself/web/enlesweb-workspace/seruput/src/components/Navbar.astro#L301-L307)) memiliki scroll-listener aktif pada ambang batas 20px. Sementara itu, 5 repositori lainnya (`enlesweb`, `ripeir`, `tuntas`, `klimis`, `berflower`) menggunakan header padat permanen sejak posisi scroll 0.
   - *Pertanyaan yang Belum Terjawab*: Apakah varian wireframe header adaptif mengambang (transparan ke padat saat digulir) perlu dibakukan sebagai standar tersendiri khusus untuk hero bertipe kanvas sinematik penuh (seperti `jerseay`), atau dibiarkan sebagai opsi fleksibel per template?

4. **Integrasi Pola Master-Detail Split Stage ke Standar Wireframe**:
   - *Temuan*: Pola `Projects.astro` di `enlesweb` (panggung pratinjau 16:10 aktif di kiri, pemilih tab vertikal di kanan) terbukti sangat efektif untuk katalog portofolio interaktif tanpa memakan tinggi halaman vertikal yang berlebihan.
   - *Fokus Rekomendasi*: Memasukkan pola Master-Detail Split Stage sebagai salah satu varian wireframe resmi untuk kategori Layanan / Katalog / Portofolio di template ENLESWEB masa depan.
