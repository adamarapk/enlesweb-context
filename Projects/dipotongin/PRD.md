# PRD.md - dipotongin
Versi: 3.0 (As-Is Website dipotongin)
Tanggal: 14 Oktober 2026

Dokumen Product Requirements Document (PRD) ini mendefinisikan konteks, tujuan, ruang lingkup, dan batasan produk website `dipotongin` persis sesuai implementasi aktual (as-is) pada kode, struktur multi-page, dan fitur interaktif website saat ini.

---

## 1. Konteks Produk

`dipotongin` adalah website studio pangkas rambut pria (barbershop) lokal yang dikembangkan oleh ENLESWEB sebagai representasi utama untuk template **Paket Growth** (website multi-page dengan tampilan full-custom dan fitur frontend interaktif berkinerja tinggi tanpa ketergantungan backend berat).

* **Status Entitas:** `dipotongin` merupakan konsep desain barbershop independen untuk percontohan paket Growth ENLESWEB, bukan entitas komersial nyata. Seluruh data layanan, jam operasional, alamat studio di Venice, dan tautan kontak merupakan data contoh terstruktur yang realistis.
* **Peran bagi ENLESWEB:** Membuktikan bahwa website paket Growth mampu menghadirkan karakter visual bertema kriya cetak fisik (letterpress vintage & kraft paper taktil), arsitektur multi-page yang terstruktur rapi, serta fitur interaktif cerdas (Kuis Konsultasi Gaya Rambut 1 Menit) yang terbukti mendorong konversi chat WhatsApp secara to-the-point tanpa memerlukan server/database terpisah.
* **Arsitektur Halaman:** Terdiri dari Beranda (`/`) dengan Layout B (arsitektur editorial dua kolom: kartu member fisik menempel secara sticky di sisi kiri mendampingi papan tarif layanan di sisi kanan), Halaman Mandiri Konsultasi Gaya Rambut (`/konsultasi`), dan Halaman Error 404 (`/404.html`).

---

## 2. Tujuan Website (Product Goals)

Prioritas tujuan produk disusun secara tegas dan terukur:

1. **Clarity (Kejelasan 3 Detik):** Pengunjung langsung mengenali identitas studio pangkas rambut pria melalui carousel visual studio San Marco, Venice, membaca jam operasional harian, melihat alamat fisik studio, dan memindai seluruh tarif layanan tanpa friksi.
2. **Honesty (Kejujuran Informasi & Anti-Slop):** Tanpa kata sifat puitis berlebihan ('ramah', 'terpercaya', 'sentuhan ajaib'), tanpa klaim kecerdasan buatan gaib (menggunakan lencana jujur `REKOMENDASI PANDUAN`), tanpa ulasan bintang lima fiktif, tanpa penghitung waktu mundur palsu, dan tanpa manipulasi kuota. Seluruh informasi disajikan faktual dan operasional.
3. **Trust & Tangibility (Karakter Benda Fisik Taktil):** Menghadirkan replika digital dari dua benda fisik nyata:
   * **Kartu Member Loyalitas Fisik:** Berbahan serat kertas kraft cokelat dengan cetakan tinta stempel arang, 8 slot stempel pangkas, status operasional toko fisik, tombol WhatsApp, dan jalan pintas ke kuis konsultasi.
   * **Tiket Rekomendasi Pangkas Resmi:** Tiket fisik digital dengan notch lingkaran stempel, kode acak tiket, rekomendasi model potongan rambut, alasan kecocokan bentuk wajah, paket layanan resmi, estimasi durasi dan harga, tips penataan harian, serta produk yang disarankan.
4. **Interactive Growth Experience (Fitur Kustom Frontend):** Fitur interaktif Kuis Konsultasi Gaya Rambut 3 langkah yang mencocokkan bentuk wajah, tekstur rambut, dan rutinitas harian pengunjung secara instan di sisi klien, menyimpan status jawaban di LocalStorage, dan menghasilkan tautan WhatsApp dengan draf pesan otomatis yang ringkas.
5. **Action (Konversi Cepat To-the-Point):** Menghubungkan pengunjung secara langsung ke kasir/studio melalui WhatsApp terstandar di setiap titik temu strategis: Navbar, Hero, Kartu Member, Seksi Layanan, Seksi Lokasi, Seksi Kontak, Tiket Hasil Konsultasi, dan Floating WhatsApp Button.

---

## 3. Target Audiens

1. **Calon Klien ENLESWEB (Pemilik Bisnis Jasa & Studio Grooming):** Pemilik barbershop, salon pria, atau studio perawatan profesional yang membutuhkan bukti nyata bahwa website paket Growth dapat memiliki fitur interaktif yang fungsional, bernilai jual tinggi, responsif, dan mudah dipelihara.
2. **Pengunjung Konsep Barbershop (Pelanggan Pangkas):** Pria dan warga lokal di area San Marco, Venice yang mencari tempat pangkas rambut rapi, cukur jenggot, dan perawatan kepala dengan sistem pangkas walk-in langsung, serta ingin mengetahui model rambut yang paling cocok untuk bentuk wajahnya sebelum datang ke studio.

---

## 4. Ruang Lingkup Fitur (In-Scope)

### 4.1 Halaman Beranda (`/`)

1. **Header & Sticky Navbar (`#beranda`):**
   * Wordmark brand `dipotongin` yang mengarah ke beranda.
   * Tautan navigasi internal: Layanan & Tarif (`#layanan`), Konsultasi Gaya (`/konsultasi` dengan pill badge bertuliskan `Kuis`), Kartu Member (`#kartu-member`), Lokasi (`#lokasi`), dan Kontak (`#kontak`).
   * Tombol aksi WhatsApp: `Tanya lewat WhatsApp`.
   * Menu drawer responsif untuk layar mobile dengan tombol toggle aksesibel.
2. **Hero Section (`#beranda`):**
   * Heading H1 tersembunyi secara aksesibel (`class="sr-only"`): `dipotongin`.
   * Borderless photo carousel 6 slide dokumentasi fotografi studio di San Marco, Venice (interior, aksi tukang cukur, kompres handuk hangat, peralatan tradisional Solingen, layanan walk-in, dan detail kursi vintage).
   * Navigasi carousel lengkap: tombol geser sebelumnya/berikutnya, indikator dot bar, transisi blur-fade, serta mekanisme auto-loop yang otomatis berhenti jika pengguna mengaktifkan mode `prefers-reduced-motion`.
3. **Editorial Layout Dua Kolom:**
   * **Kolom Kiri (Signature Element - Kartu Member Loyalitas `#kartu-member`):**
     * Substrat fisik bermotif serat kertas kraft (`#C29F75`, `/kraft-paper-texture.png`) dengan elevasi bayangan halus.
     * Header kartu: Ikon gunting, judul cetak `KARTU MEMBER`, dan lencana `8 STEMPEL PANGKAS`.
     * Matriks 8 slot stempel pangkas (slot `01` sampai `07` bernomor, slot `08` bintang reward `★`).
     * Garis reward bersih: `8 Stempel: Bonus 1x Pangkas`.
     * Baris status operasional plang toko: Indikator status buka harian `BUKA 10.00 - 21.00` dan tombol `Detail` menuju jadwal lengkap.
     * Tombol aksi WhatsApp: `Cek antrean WhatsApp`.
     * Tautan pintas kuis interaktif: `Kuis Gaya Rambut (1 Mnt)` dengan target sentuh aman minimum 44px dan focus indicator.
   * **Kolom Kanan (Daftar Layanan & Tarif `#layanan`):**
     * Heading seksi dan pengantar tarif transparan.
     * 3 kategori layanan resmi: Potong Rambut, Cukur dan Rapikan, serta Paket Perawatan (dilengkapi lencana `Paket Lengkap`).
     * 8 item layanan lengkap dengan harga rupiah tegas (rentang Rp20.000 sampai Rp75.000), estimasi durasi dalam menit, dan rincian teknis pengerjaan pangkas.
     * **Callout Card Kuis Konsultasi:** Kartu berlatar kanvas linen dengan badge `FITUR KONSULTASI`, tag `Estimasi 1 Mnt`, judul `Bingung memilih model potongan yang pas?`, deskripsi pengantar, dan tombol `Cari Model Rambutmu` mengarah ke `/konsultasi`.
     * Kotak aksi tarif: `Tanya Tarif & Waktu` disertai tombol `Tanya tentang layanan`.
4. **Seksi Jam Operasional & Lokasi Studio (`#lokasi`):**
   * Rincian jadwal harian: Senin sampai Kamis (10.00 sampai 20.00), Jumat (10.00 sampai 20.00), Sabtu dan Minggu (09.00 sampai 21.00).
   * Kotak pengumuman sistem walk-in langsung tanpa antrean online yang rumit.
   * Alamat fisik studio di Calle Larga XXII Marzo, 2093, San Marco, Venice, Italia.
   * Tautan eksternal `Buka Google Maps ->` dan tombol WhatsApp `Tanya petunjuk arah`.
   * Frame embed peta Google Maps responsif berbingkai emas antik dengan sudut membulat.
5. **Seksi Kontak (`#kontak`):**
   * Heading konsultasi pangkas operasional.
   * Dua tombol aksi berdampingan: tombol utama WhatsApp (`Tanya lewat WhatsApp`) dan tombol sekunder berstandar kartu member (`Instagram`).
6. **Footer Kolom Terpadu:**
   * Kolom Brand: Wordmark `dipotongin`, tagline studio, dan alamat lengkap di Venice.
   * Kolom Navigasi: Tautan cepat ke seluruh seksi beranda dan halaman Konsultasi Gaya.
   * Kolom Jam & Sosial: Jadwal harian dan tautan Instagram resmi.
   * Kolom Google Maps: Embed peta Google Maps interaktif menyatu proporsional di dalam kolom footer.
   * Baris Hak Cipta & Kredit: Atribusi `Website oleh ENLESWEB.` dengan tautan aman `rel="noopener noreferrer"`.
7. **Floating WhatsApp Button:**
   * Tombol aksi mengambang lingkaran di sudut kanan bawah layar (`bottom: 24px; right: 24px;`).
   * Menggunakan standar resmi WhatsApp: diameter 56px, warna hijau resmi `#25D366`, border putih 2px, dan ikon WhatsApp putih.

---

### 4.2 Halaman Konsultasi Gaya Rambut (`/konsultasi`)

Halaman mandiri khusus fitur interaktif paket Growth:
1. **Navigasi Breadcrumb:** Tautan kembali dengan ikon panah: `Kembali ke Beranda`.
2. **Header Editorial:**
   * Lencana atas: `PANDUAN PANGKAS STUDIO` dan `Estimasi 1 Menit`.
   * Judul H1: `Konsultasi Gaya Rambut`.
   * Paragraf pengantar proporsi potongan rambut.
3. **Wizard Kuis Interaktif 3 Langkah:**
   * **Progress Bar Stempel:** 4 slot progres vintage (Langkah 01, Langkah 02, Langkah 03, dan Hasil Tiket `★`).
   * **Langkah 1: Bentuk Kontur Wajah:** 4 pilihan kartu radio berikon garis presisi (Oval Simetris, Kotak / Persegi, Bulat Melingkar, Lonjong / Panjang).
   * **Langkah 2: Karakter & Tekstur Rambut:** 3 pilihan kartu radio (Lurus & Tebal, Ikal & Bergelombang, Halus & Ringan).
   * **Langkah 3: Rutinitas Styling Harian:** 3 pilihan kartu radio (Rapi & Terstruktur, Tekstur Alami, Praktis (Cuci & Jalan)).
   * **Navigasi Step:** Tombol `Sebelumnya` dan tombol `Lanjut ke Langkah Berikutnya` dengan minimum tap target 44px dan focus indicator.
4. **Tiket Rekomendasi Pangkas Fisik (Hasil Kuis):**
   * Header tiket beraroma tiket kriya pangkas: nomor tiket acak berbasis timestamp (misal: `#TKT-9482`), tag studio, dan lencana jujur `REKOMENDASI PANDUAN`.
   * Nama model potongan rambut (misal: `Classic Low Taper & Side Part`, `Textured French Crop with Mid Fade`, `Clean Low Taper Fade & Textured Quiff`, `Classic Executive Scissor Cut`, `Clean Buzz Cut with Razor Outline`).
   * Alasan kecocokan bentuk wajah (*face shape match reason*).
   * Kotak paket layanan resmi terhubung: Nama paket layanan resmi studio, durasi pengerjaan, tarif rupiah tegas, dan rincian pengerjaan.
   * Panduan penataan harian (*styling tip*) dan rekomendasi produk pangkas.
   * Tombol aksi utama: `Kirim Ringkasan ke WhatsApp` yang membuka chat WhatsApp dengan pesan ringkas to-the-point berisi hasil rekomendasi.
   * Tombol sekunder: `Ulangi Kuis` dan `Kembali ke Beranda`.
5. **Catatan Operasional Studio:** Kotak pemberitahuan bahwa rekomendasi kuis adalah panduan proporsi awal dan tukang cukur akan memeriksa tekstur rambut secara langsung sebelum pangkas.

---

### 4.3 Halaman Error 404 (`/404.html`)

* Heading `Halaman Tidak Ditemukan`.
* Deskripsi bahwa halaman tidak tersedia atau tautan telah berpindah.
* Tombol taktil emas berstandar member card: `Kembali ke Beranda`.

---

## 5. Batasan dan Hal yang Sengaja Tidak Dilakukan (Out of Scope)

Sesuai filosofi anti-slop, kejujuran informasi, dan efisiensi paket Growth:
1. **Tanpa Booking Engine Rumit / Kalender Online Berat:** Tidak ada sistem reservasi online berbelit yang mewajibkan login akun atau kartu kredit. Alur konfirmasi memanfaatkan tombol chat langsung WhatsApp dan sistem pangkas walk-in.
2. **Tanpa Klaim AI Berlebihan:** Tidak menggunakan istilah bombastis seperti 'Kecerdasan Buatan Canggih' atau 'Analisis Wajah Deep Learning'. Fitur kuis secara jujur dilabeli sebagai `PANDUAN PANGKAS STUDIO` dan `REKOMENDASI PANDUAN`.
3. **Tanpa Ulasan / Testimoni Karangan:** Tidak ada widget ulasan bintang 5 fiktif dengan foto wajah buatan generator AI.
4. **Tanpa Harga Tersembunyi:** Seluruh tarif nominal pangkas tercantum transparan dan terbuka tanpa embel-embel 'Mulai dari' yang menjebak.
5. **Tanpa Efek Parallax atau Animasi Membebani:** Transisi kuis dan carousel berjalan cepat, ringan, dan langsung dinonaktifkan jika sistem operasi mendeteksi `prefers-reduced-motion`.
