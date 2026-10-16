# CONTENT.md - dipotongin
Versi: 3.0 (As-Is Salinan Teks & Konten Aktual)
Tanggal: 14 Oktober 2026

Dokumen ini adalah acuan tunggal salinan teks (*copywriting*) untuk seluruh komponen, halaman multi-page, dan fitur kuis interaktif website `dipotongin` persis sesuai implementasi kode aktual (as-is). 100% faktual, operasional, dan bebas dari kata sifat emosional maupun klaim pemasaran buatan.

---

## 1. Salinan Teks per Komponen Antarmuka

### 1.1 Header & Navigasi (`src/components/Navbar.astro`)
* **Brand Mark:** `dipotongin`
* **Tautan Menu Navigasi:**
  * `Layanan & Tarif` (mengarah ke `#layanan` pada beranda, atau `/#layanan` dari halaman lain)
  * `Konsultasi Gaya` (mengarah ke `/konsultasi`, dilengkapi lencana pill badge `Kuis`)
  * `Kartu Member` (mengarah ke `#kartu-member` / `/#kartu-member`)
  * `Lokasi` (mengarah ke `#lokasi` / `/#lokasi`)
  * `Kontak` (mengarah ke `#kontak` / `/#kontak`)
* **Tombol Navigasi Desktop & Mobile Drawer:** `Tanya lewat WhatsApp`
* **Label Aksesibilitas Mobile Toggle:** `Buka menu navigasi` (tertutup) | `Tutup menu navigasi` (terbuka)

---

### 1.2 Hero Section (`src/components/Hero.astro`)
* **H1 Tersembunyi Aksesibel:** `dipotongin`
* **Koleksi Slide Carousel (6 Slide Foto Dokumentasi Studio):**
  1. **Slide 1 (Interior Studio):**
     * Tag: `Studio San Marco`
     * Subtitle: `Calle Larga XXII Marzo, Venice`
     * Atribut Alt: `Interior studio barbershop dipotongin di San Marco, Venice dengan deretan kursi kulit klasik dan cermin kayu berukir`
  2. **Slide 2 (Aksi Pangkas):**
     * Tag: `Pangkas Presisi`
     * Subtitle: `Gunting manual dan ketelitian pangkas`
     * Atribut Alt: `Master barber profesional sedang memotong rambut pelanggan menggunakan gunting dan sisir menghadap jendela kanal Venice`
  3. **Slide 3 (Cukur Handuk Hangat):**
     * Tag: `Handuk Hangat`
     * Subtitle: `Kompres hangat dan ritual cukur klasik`
     * Atribut Alt: `Ritual cukur tradisional dengan kompres handuk hangat dan busa cukur di studio dipotongin San Marco Venice`
  4. **Slide 4 (Peralatan Pisau & Gunting):**
     * Tag: `Peralatan Tradisional`
     * Subtitle: `Pisau lipat Solingen dan gunting baja`
     * Atribut Alt: `Peralatan pangkas tradisional meliputi pisau cukur lipat Solingen, gunting baja, dan sisir klasik di atas batu slate`
  5. **Slide 5 (Layanan Pangkas Langsung):**
     * Tag: `Layanan Walk-in`
     * Subtitle: `Pangkas langsung tanpa antrean online`
     * Atribut Alt: `Suasana aktif pangkas rambut pria dan layanan walk-in di studio dipotongin San Marco Venice`
  6. **Slide 6 (Kursi Vintage):**
     * Tag: `Kursi Klasik Vintage`
     * Subtitle: `Jok kulit tebal dan sandaran mekanik`
     * Atribut Alt: `Detail jahitan kulit dan sandaran tangan kursi pangkas rambut vintage klasik di studio dipotongin`
* **Aria Label Kontrol:** `Lihat foto sebelumnya`, `Lihat foto berikutnya`, `Dokumentasi foto barbershop dipotongin`

---

### 1.3 Signature Element: Kartu Member Loyalitas (`src/components/SidebarInfo.astro`)
* **Aria Label:** `Kartu Member Loyalitas dan Jam Operasional`
* **Judul Kartu:** `KARTU MEMBER`
* **Lencana Atas:** `8 STEMPEL PANGKAS`
* **Judul Matriks Stempel:** `Kartu Stempel Pangkas`
* **Keterangan Aturan Stempel:** `1 stempel tiap pangkas`
* **Matriks 8 Slot Stempel:**
  * Slot 1 sampai 7: `01`, `02`, `03`, `04`, `05`, `06`, `07`
  * Slot 8 (Bonus Reward): `★`
* **Banner Bonus Reward:** `8 Stempel: Bonus 1x Pangkas`
* **Baris Status Operasional Plang Toko:**
  * Label: `BUKA`
  * Nilai Jam: `10.00 - 21.00`
  * Tombol Detail: `Detail` (mengarah ke `#lokasi`)
* **Tombol Aksi Kartu Member:**
  * Tombol WhatsApp: `Cek antrean WhatsApp`
  * Tautan Pintas Kuis: `Kuis Gaya Rambut (1 Mnt)` (mengarah ke `/konsultasi`)

---

### 1.4 Seksi Layanan dan Tarif (`src/components/ServicesSection.astro`)
* **Judul Seksi:** `Daftar Layanan dan Tarif`
* **Pengantar Seksi:**
  > "Tarif pangkas rambut, cukur, dan perawatan kepala di studio San Marco, Venice."
* **Kategori 1: Potong Rambut**
  1. **Potong Rambut Reguler** | Tarif: `Rp40.000` | Durasi: `45 mnt`
     *Deskripsi:* Konsultasi model rambut, cuci rambut awal, pangkas gunting dan clipper, serta bilas bersih.
  2. **Potong Rambut Anak** | Tarif: `Rp35.000` | Durasi: `30 mnt`
     *Deskripsi:* Pemangkasan rambut anak usia di bawah 12 tahun menggunakan gunting dan clipper guard.
  3. **Taper dan Fade Bersih** | Tarif: `Rp50.000` | Durasi: `40 mnt`
     *Deskripsi:* Gradasi samping dan tengkuk menggunakan clipper multi-guard dan razor leher.
* **Kategori 2: Cukur dan Rapikan**
  1. **Rapikan Jenggot dan Kumis** | Tarif: `Rp25.000` | Durasi: `25 mnt`
     *Deskripsi:* Pemangkasan panjang jenggot, penegasan garis tepi rahang dengan razor, dan kompres hangat.
  2. **Cukur Habis Kepala** | Tarif: `Rp35.000` | Durasi: `35 mnt`
     *Deskripsi:* Pencukuran kepala menggunakan busa cukur, pisau silet baru, dan kompres handuk hangat.
  3. **Rapikan Samping dan Tengkuk** | Tarif: `Rp20.000` | Durasi: `20 mnt`
     *Deskripsi:* Perapian garis leher dan area sekitar telinga menggunakan clipper tanpa memotong bagian atas.
* **Kategori 3: Paket Perawatan** (dilengkapi lencana `Paket Lengkap`)
  1. **Pangkas Komplit Handuk Hangat** | Tarif: `Rp75.000` | Durasi: `60 mnt`
     *Deskripsi:* Pangkas rambut, cukur jenggot, keramas dua kali, pijat pundak, dan kompres handuk hangat.
  2. **Cuci dan Segarkan Kepala** | Tarif: `Rp30.000` | Durasi: `25 mnt`
     *Deskripsi:* Keramas dua tahap, pijat kulit kepala, pengaplikasian tonik, dan pengeringan rambut.
* **Callout Card Kuis Konsultasi:**
  * Lencana: `FITUR KONSULTASI`
  * Durasi: `Estimasi 1 Mnt`
  * Judul: `Bingung memilih model potongan yang pas?`
  * Deskripsi: `Cocokkan bentuk wajah dan jenis helai rambutmu dengan model potongan dan paket resmi studio melalui kuis interaktif 3 langkah.`
  * Tombol Aksi: `Cari Model Rambutmu` (mengarah ke `/konsultasi`)
* **Kotak Tanya Tarif & Waktu:**
  * Judul: `Tanya Tarif & Waktu`
  * Catatan: `Ingin menanyakan estimasi waktu, jenis potongan rambut, atau antrean hari ini?`
  * Tombol: `Tanya tentang layanan`

---

### 1.5 Halaman & Kuis Konsultasi Gaya Rambut (`/konsultasi`)

#### Header Halaman
* **Breadcrumb:** `Kembali ke Beranda`
* **Lencana Atas:** `PANDUAN PANGKAS STUDIO` | `Estimasi 1 Menit`
* **Judul Utama H1:** `Konsultasi Gaya Rambut`
* **Deskripsi Lead:**
  > "Temukan model potongan dan paket layanan resmi yang paling selaras dengan bentuk wajah, karakter helai rambut, serta kebiasaan harianmu."

#### Pertanyaan & Opsi Kuis 3 Langkah

* **Langkah 01: Bentuk Kontur Wajah**
  * Subtitle: `Menentukan proporsi potongan samping dan volume rambut bagian atas.`
  * Tag Langkah: `LANGKAH 01 DARI 03`
  * Opsi 1: **Oval Simetris** - `Proporsi dahi dan rahang seimbang alami, cocok dengan hampir semua gaya rambut.`
  * Opsi 2: **Kotak / Persegi** - `Garis rahang tegas dan sudut pelipis lebar, ideal dengan gradasi samping rapi.`
  * Opsi 3: **Bulat Melingkar** - `Pipi berisi dan sudut lembut, memerlukan volume atas untuk proporsi jenjang.`
  * Opsi 4: **Lonjong / Panjang** - `Proporsi wajah memanjang vertikal, ideal dengan poni pendek dan samping bervolume.`

* **Langkah 02: Karakter & Tekstur Rambut**
  * Subtitle: `Menentukan teknik pangkas pisau, gunting tekstur, atau clipper guard.`
  * Tag Langkah: `LANGKAH 02 DARI 03`
  * Opsi 1: **Lurus & Tebal** - `Rambut kaku, padat, dan berdiri tegak, optimal dengan fade bersih atau crop.`
  * Opsi 2: **Ikal & Bergelombang** - `Memiliki alur gelombang alami, cocok dengan gunting tekstur dan taper halus.`
  * Opsi 3: **Halus & Ringan** - `Helai lembut dan mudah rebah, optimal dengan pangkas klasik berdimensi.`

* **Langkah 03: Rutinitas Styling Harian**
  * Subtitle: `Menyesuaikan gaya potongan dengan waktu luang perawatan harianmu.`
  * Tag Langkah: `LANGKAH 03 DARI 03`
  * Opsi 1: **Rapi & Terstruktur** - `Siap menyisir rapi dan memakai pomade water-based setiap pagi sebelum beraktivitas.`
  * Opsi 2: **Tekstur Alami** - `Menyukai tampilan acak natural dengan styling powder atau matte clay tanpa kilap.`
  * Opsi 3: **Praktis (Cuci & Jalan)** - `Tanpa produk rambut, cukup dikeringkan handuk dan langsung siap berangkat.`

#### 5 Profil Tiket Rekomendasi Resmi

1. **Classic Low Taper & Side Part**
   * Kategori Gaya: `Belah Samping Rapi Klasik`
   * Ringkasan: `Pangkas belah samping terstruktur dengan gradasi taper rendah di pelipis dan tengkuk leher.`
   * Alasan Keselarasan Wajah: `Memberikan aksen simetris berwibawa yang mempertegas garis rahang tanpa membuat area pelipis terlalu terbuka.`
   * Paket Layanan Resmi: `Potong Rambut Reguler` | Tarif: `Rp40.000` | Durasi: `45 mnt`
   * Rincian Paket: `Konsultasi model rambut, cuci rambut awal, pangkas gunting dan clipper, serta bilas bersih.`
   * Tips Styling: `Sisir rambut ke arah samping-belakang saat kondisi setengah lembap menggunakan pomade water-based berkilau medium.`
   * Rekomendasi Produk: `Water-based Pomade (Medium Hold & Medium Shine)`

2. **Textured French Crop with Mid Fade**
   * Kategori Gaya: `Crop Tekstur Kasual`
   * Ringkasan: `Poni depan pendek bertekstur bebas dipadukan fade samping bersih dan tengkuk rapi.`
   * Alasan Keselarasan Wajah: `Poni bertekstur menyamarkan dahi lebar dan mengarahkan fokus visual ke mata dan tulang pipi.`
   * Paket Layanan Resmi: `Taper dan Fade Bersih` | Tarif: `Rp50.000` | Durasi: `40 mnt`
   * Rincian Paket: `Gradasi samping dan tengkuk menggunakan clipper multi-guard dan razor leher.`
   * Tips Styling: `Taburkan sedikit styling matte powder pada akar rambut, lalu acak ringan menggunakan jemari tangan ke arah depan.`
   * Rekomendasi Produk: `Matte Texture Powder atau Matte Clay`

3. **Clean Low Taper Fade & Textured Quiff**
   * Kategori Gaya: `Taper Fade Jambul Bervolume`
   * Ringkasan: `Volume rambut atas diangkat ke atas-belakang dengan transisi taper tipis pada cambang.`
   * Alasan Keselarasan Wajah: `Tinggi volume jambul depan memberi efek ilusi wajah tampak lebih panjang, sangat efektif menyeimbangkan kontur wajah bulat.`
   * Paket Layanan Resmi: `Taper dan Fade Bersih` | Tarif: `Rp50.000` | Durasi: `40 mnt`
   * Rincian Paket: `Gradasi samping dan tengkuk menggunakan clipper multi-guard dan razor leher.`
   * Tips Styling: `Keringkan rambut dengan pengering rambut mengarah ke atas, kunci bentuk jambul dengan matte paste berdaya rekat kuat.`
   * Rekomendasi Produk: `Matte Paste (Strong Hold & Zero Shine)`

4. **Classic Executive Scissor Cut**
   * Kategori Gaya: `Pangkas Gunting Alami`
   * Ringkasan: `Pemangkasan penuh menggunakan gunting manual mengikuti arah jatuh rambut alami tanpa mesin clipper pendek.`
   * Alasan Keselarasan Wajah: `Memberikan lapisan rambut bervolume lembut yang menyamarkan sudut tajam pelipis dan menjaga kerapian natural.`
   * Paket Layanan Resmi: `Potong Rambut Reguler` | Tarif: `Rp40.000` | Durasi: `45 mnt`
   * Rincian Paket: `Konsultasi model rambut, cuci rambut awal, pangkas gunting dan clipper, serta bilas bersih.`
   * Tips Styling: `Cukup keringkan rambut dengan handuk bersih dan ratakan sedikit hair tonic untuk menjaga kesehatan kulit kepala.`
   * Rekomendasi Produk: `Hair Tonic Segar atau Sea Salt Spray Ringan`

5. **Clean Buzz Cut with Razor Outline**
   * Kategori Gaya: `Cepak Bersih Garis Tegas`
   * Ringkasan: `Potongan cepak seragam dengan garis pelipis dan tepi tengkuk yang ditegaskan silet tajam.`
   * Alasan Keselarasan Wajah: `Menonjolkan struktur tulang kepala dan garis rahang secara tegas, bersih dari helai rambut yang mengganggu.`
   * Paket Layanan Resmi: `Rapikan Samping dan Tengkuk` | Tarif: `Rp20.000` | Durasi: `20 mnt`
   * Rincian Paket: `Perapian garis leher dan area sekitar telinga menggunakan clipper tanpa memotong bagian atas.`
   * Tips Styling: `Bebas waktu sisir di depan cermin. Cukup bilas bersih saat mandi dan gunakan pelembap kulit kepala.`
   * Rekomendasi Produk: `Tanpa Produk Styling (Minimalist Routine)`

#### Elemen UI Tiket & Navigasi Kuis
* **Lencana Status Tiket:** `REKOMENDASI PANDUAN`
* **Tag Header Tiket:** `TIKET REKOMENDASI PANGKAS • STUDIO DIPOTONGIN`
* **Label Kotak Paket:** `PAKET LAYANAN STUDIO RESMI`
* **Label Durasi & Tarif:** `ESTIMASI WAKTU` | `TARIF RESMI`
* **Label Tips & Produk:** `TIPS PENATAAN HARIAN` | `PRODUK YANG DISARANKAN`
* **Tombol Aksi Tiket:**
  * Utama: `Kirim Ringkasan ke WhatsApp`
  * Sekunder 1: `Ulangi Kuis`
  * Sekunder 2: `Kembali ke Beranda`
* **Navigasi Step Kuis:** `Sebelumnya` | `Lanjut ke Langkah Berikutnya`
* **Catatan Operasional:**
  > "Hasil kuis ini merupakan panduan proporsi awal. Tukang cukur kami di studio Calle Larga XXII Marzo akan tetap memeriksa tekstur rambut secara langsung di cermin sebelum pemotongan dimulai."

---

### 1.6 Seksi Jam Operasional & Lokasi Studio (`src/components/LocationSection.astro`)
* **Judul Seksi:** `Jam operasional dan lokasi studio`
* **Pengantar Seksi:**
  > "Informasi jadwal harian dan lokasi studio di San Marco, Venice. Silakan datang langsung tanpa reservasi awal."
* **Kartu Jadwal Operasional:**
  * Judul Kartu: `Jadwal Operasional`
  * `Senin sampai Kamis`: `10.00 sampai 20.00`
  * `Jumat`: `10.00 sampai 20.00`
  * `Sabtu dan Minggu`: `09.00 sampai 21.00`
  * Catatan Walk-in: `Sistem pangkas walk-in langsung. Tanpa antrean reservasi online yang rumit.`
* **Kartu Alamat Studio:**
  * Judul Kartu: `Alamat Studio`
  * Teks Alamat: `Calle Larga XXII Marzo, 2093, 30124 Venezia, Italia (Area San Marco)`
  * Tautan Eksternal: `Buka Google Maps ->`
  * Tombol Aksi: `Tanya petunjuk arah`
* **Title Iframe Peta Google Maps:** `Peta Lokasi`

---

### 1.7 Seksi Kontak (`src/components/ContactSection.astro`)
* **Judul Seksi:** `Ada pertanyaan seputar layanan pangkas?`
* **Deskripsi Seksi:**
  > "Hubungi kasir untuk menanyakan ketersediaan bangku pangkas, antrean berjalan, atau konsultasi gaya rambut sebelum datang langsung."
* **Tombol Primer:** `Tanya lewat WhatsApp`
* **Tombol Sekunder:** `Instagram`

---

### 1.8 Footer Terpadu (`src/components/Footer.astro`)
* **Kolom Brand:**
  * Nama: `dipotongin`
  * Tagline: `Studio pangkas rambut pria di San Marco, Venice.`
  * Alamat: `Calle Larga XXII Marzo, 2093, 30124 Venezia, Italia (Area San Marco)`
* **Kolom Navigasi:**
  * Heading: `Navigasi Halaman`
  * Tautan: `Layanan & Tarif`, `Konsultasi Gaya`, `Kartu Member`, `Lokasi`, `Kontak`
* **Kolom Jam Operasional & Sosial:**
  * Heading: `Jam Operasional`
  * Jadwal harian & tautan `Instagram`
* **Kolom Peta:** Frame Google Maps interaktif terintegrasi
* **Baris Bawah:** `Website oleh ENLESWEB.`

---

### 1.9 Halaman Error 404 (`src/pages/404.astro`)
* **Judul H1:** `Halaman Tidak Ditemukan`
* **Deskripsi:** `Halaman yang kamu cari tidak tersedia atau tautan telah berpindah.`
* **Tombol Aksi:** `Kembali ke Beranda`

---

## 2. Template Teks Pesan WhatsApp Lengkap

Seluruh URL WhatsApp dibangun melalui generator `src/lib/whatsapp.ts`:

* **Umum (Navbar, Kontak):**
  > `Halo ENLESWEB, saya melihat website dipotongin dan ingin bertanya tentang pembuatan website untuk barbershop.`
* **Layanan (Seksi Layanan):**
  > `Halo ENLESWEB, saya ingin bertanya tentang bagian layanan pada demo dipotongin.`
* **Antrean (Kartu Member):**
  > `Halo studio dipotongin, saya ingin menanyakan antrean dan ketersediaan bangku pangkas hari ini.`
* **Lokasi (Seksi Lokasi):**
  > `Halo ENLESWEB, saya ingin bertanya tentang bagian lokasi pada demo dipotongin.`
* **Konsultasi Tiket (Hasil Kuis):**
  > `Halo studio dipotongin, saya telah menyelesaikan Kuis Konsultasi Gaya Rambut di website dengan rekomendasi: *[Nama Model]* (Paket: *[Paket Resmi]*). Saya ingin menanyakan ketersediaan bangku pangkas.`
