# KLIMIS-DOCS-V3.md - dipotongin
Versi: 3.0 (Master Documentation As-Is Website dipotongin)
Tanggal: 14 Oktober 2026

Dokumen ini merupakan dokumentasi induk konsolidasi yang memuat seluruh spesifikasi produk (PRD), sistem desain (DESIGN), salinan teks tunggal (CONTENT), dan spesifikasi teknis (SPEC) untuk website `dipotongin` persis sesuai implementasi kode aktual (as-is) sebagai representasi template **Paket Growth** ENLESWEB.

---

# BAGIAN 1: PRODUCT REQUIREMENTS DOCUMENT (PRD)

## 1.1 Konteks & Latar Belakang
`dipotongin` adalah konsep website barbershop pria lokal yang dirancang oleh ENLESWEB sebagai contoh unggulan **Paket Growth** (website multi-page dengan tampilan full-custom dan fitur frontend interaktif berkinerja tinggi tanpa ketergantungan backend berat).

* **Status Entitas:** Konsep desain independen, bukan entitas komersial nyata. Seluruh data layanan, jadwal buka, alamat di Venice, dan kontak adalah data contoh terstruktur yang realistis.
* **Tujuan Paket Growth:** Membuktikan bahwa website paket Growth memiliki identitas visual taktil berwibawa bertema kriya cetak letterpress & kartu kraft fisik, arsitektur multi-page, serta fitur custom frontend interaktif (Kuis Konsultasi Gaya Rambut 1 Menit) yang meningkatkan konversi chat WhatsApp tanpa ketergantungan backend database yang rumit.
* **Format Layout:** Mengadopsi Layout B (arsitektur editorial dua kolom pada beranda: kartu member loyalitas di kiri dan papan tarif di kanan), halaman mandiri `/konsultasi`, serta halaman error `/404.html`.

## 1.2 Tujuan Utama (Product Goals)
1. **Kejelasan 3 Detik (Clarity):** Pengunjung langsung memahami bahwa `dipotongin` adalah studio pangkas pria melalui carousel visual studio San Marco, Venice, melihat alamat studio di Venice, jadwal buka harian, dan memindai tarif layanan dengan cepat.
2. **Kejujuran Informasi (Honesty & Anti-Slop):** Tanpa kata sifat puitis ('ramah', 'teliti', 'bersahaja'), tanpa ulasan fiktif, tanpa hitung mundur palsu. Fitur kuis secara jujur dilabeli sebagai `PANDUAN PANGKAS STUDIO` dan `REKOMENDASI PANDUAN` tanpa membual tentang AI gaib.
3. **Karakter Fisik Taktil (Trust & Tangibility):** Menggunakan dua Benda Fisik Acuan nyata: Kartu Member Loyalitas Fisik (karton kraft cokelat tebal dengan 8 stempel) dan Tiket Pangkas Fisik Resmi pada hasil kuis.
4. **Fitur Kustom Frontend (Growth Experience):** Fitur Kuis Konsultasi Gaya Rambut 1 Menit (3 langkah) yang merekomendasikan model pangkas dan paket layanan secara deterministik di sisi klien, menyimpan status di browser (LocalStorage), dan menghasilkan pesan to-the-point ke WhatsApp.
5. **Konversi WhatsApp Cepat (Action):** Menghubungkan pengunjung ke WhatsApp di setiap seksi utama dan dari tiket hasil konsultasi gaya.

## 1.3 Ruang Lingkup Halaman (In-Scope)
* **Navbar & Header (`#beranda`):** Wordmark `dipotongin`, menu navigasi lengkap dengan badge kuis `Kuis`, tombol CTA WhatsApp, dan menu drawer responsif.
* **Hero Section (`#beranda`):** Carousel visual 6 slide studio San Marco, Venice dengan dokumentasi foto borderless, transisi taktil, dan kepatuhan penuh pada aksesibilitas `prefers-reduced-motion`.
* **Kartu Member Loyalitas (`#kartu-member`):** Kartu berlatar kraft arang dengan 8 slot stempel pangkas, banner reward, status buka harian plang toko, tombol cek antrean WhatsApp, dan link pintas kuis gaya rambut 1 menit berstandar 44px tap target.
* **Daftar Layanan & Tarif (`#layanan`):** 3 kategori layanan memuat 8 paket resmi (Rp20.000 sampai Rp75.000), dilengkapi Callout Box panduan Kuis Konsultasi Gaya Rambut dan Kotak Tanya Tarif.
* **Halaman Kuis Konsultasi Gaya (`/konsultasi`):** Halaman terdedikasi multi-page berisikan kuis 3 langkah bertahap (Bentuk Wajah, Jenis Rambut, Rutinitas Styling), indikator progress stempel vintage, layar tiket rekomendasi fisik digital, integrasi URL parameters & LocalStorage, serta tombol kirim pesan to-the-point ke WhatsApp.
* **Jam Operasional & Lokasi (`#lokasi`):** Jadwal harian, catatan walk-in langsung, alamat fisik di Calle Larga XXII Marzo, Venice, dan frame peta interaktif berbingkai emas antik.
* **Seksi Kontak (`#kontak`):** Pertanyaan seputar layanan pangkas dengan dua tombol: WhatsApp primer dan Instagram sekunder.
* **Footer Terpadu:** 4 kolom responsif memuat brand, tautan navigasi internal (termasuk Konsultasi Gaya), jadwal operasional, dan embed Google Maps.
* **Floating WhatsApp Button:** Tombol aksi mengambang lingkaran hijau resmi WhatsApp (`#25D366`) di sudut kanan bawah layar.
* **Halaman Error 404 (`/404.html`):** Pesan halaman tidak ditemukan dan tombol kembali ke beranda berstandar kartu member.

---

# BAGIAN 2: DESIGN SPECIFICATION (DESIGN)

## 2.1 Benda Fisik Acuan & Dials Desain
* **Benda Fisik 1:** Kartu Member Loyalitas Barbershop Fisik (*vintage kraft paper loyalty card* `#C29F75`, tekstur fisik `/kraft-paper-texture.png`, tinta stempel arang `#141412`).
* **Benda Fisik 2:** Tiket Rekomendasi Pangkas Studio (*tangible haircut service ticket* dengan notch lubang stempel setengah lingkaran di bagian atas).
* **Dials Desain:**
  * **ENERGY: 2** (Tipografi letterpress berwibawa Besley dipadukan Albert Sans yang tenang dan proporsional; kontras warna mantap tanpa dekorasi berlebihan).
  * **RHYTHM: 3** (Kontras komposisi asimetris Layout B: kartu member kraft di kiri, papan tarif di kanan pada beranda, serta alur step-by-step terfokus pada halaman kuis).
  * **MOTION: 1** (Interaksi taktil mikro instan pada hover tombol; transisi fade halus pada hero carousel yang sepenuhnya patuh pada `prefers-reduced-motion`).

## 2.2 Token Warna CSS (`src/styles/global.css`)
```css
:root {
  --canvas: #F6F5F0;          /* Latar utama kanvas (Putih Kapur / Linen) */
  --canvas-accent: #C29F75;   /* Cokelat Kraft Plakat */
  --surface: #FFFFFF;         /* Latar permukaan putih */
  --ink: #121312;             /* Teks hitam pekat & garis struktur utama */
  --muted: #5A5C58;           /* Teks sekunder (Kontras WCAG AA > 4.5:1) */
  --line: #D6D4CC;            /* Garis hairline pembatas item */
  --card-bg: #1A1A18;         /* Substrat kartu member gelap (Hitam Arang) */
  --card-border: #C29F75;     /* Emas antik bingkai kartu member */
  --card-stamp-bg: #282824;   /* Slot lingkaran stempel */
  --card-reward: #C29F75;     /* Aksen bintang bonus stempel ke-8 */
  --card-kraft: #C29F75;      /* Warna dasar serat kertas kraft */
  --card-kraft-dark: #B49269; /* Nada gelap kertas kraft */
  --card-kraft-hover: #B59167;/* Nada hover tombol kraft */
  --card-ink: #141412;        /* Tinta stempel pekat kartu member */
  --focus: #C29F75;           /* Outline fokus aksesibilitas */
}
```

## 2.3 Tipografi Fontsource
* **Headings, Wordmark & Stamp Labels:** `'Besley', Georgia, 'Times New Roman', serif` (`@fontsource/besley`), bobot 400, 600, 700, 800, 900.
* **Body Text, Navigasi & Label Form:** `'Albert Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` (`@fontsource/albert-sans`), bobot 400, 500, 600, 700.
* **Angka Tabular (`.tabular-nums`):** `font-variant-numeric: tabular-nums; font-feature-settings: 'tnum' 1;` untuk keselarasan angka jam, durasi, dan tarif rupiah.

## 2.4 Standar Elevasi & Tombol Member Card
* **Target Sentuh Minimum (Min Tap Target >= 44px):** Seluruh elemen interaktif memiliki `min-height: 44px` (`min-height: 48px` untuk tombol utama WhatsApp).
* **Focus Indicator (`:focus-visible`):** `outline: 2px solid var(--focus); outline-offset: 2px;` aktif di semua tombol dan link interaktif.
* **Elevasi Kartu (`--shadow-card`):** `0 16px 36px rgba(0, 0, 0, 0.16), 0 4px 12px rgba(0, 0, 0, 0.08)`.
* **Elevasi Tombol (`--shadow-btn`):** `0 4px 14px rgba(0, 0, 0, 0.18), 0 1px 3px rgba(0, 0, 0, 0.1)`.
* **Elevasi Tombol Hover (`--shadow-btn-hover`):** `0 6px 18px rgba(0, 0, 0, 0.25), 0 2px 6px rgba(0, 0, 0, 0.14)` dengan angkat `-1px`.
* **Floating WhatsApp Action Button:** Lingkaran 56px posisi fixed bottom-right dengan latar hijau resmi WhatsApp (`#25D366`), border `2px solid #FFFFFF`, dan ikon resmi WhatsApp warna putih `#FFFFFF`.
* **Radius Sudut:** `--radius-sm: 4px` (tag/lencana), `--radius-md: 6px` (seluruh tombol, kartu opsi kuis, kotak notice), `--radius-lg: 8px` (kontainer kartu dan frame peta).

---

# BAGIAN 3: CONTENT DICTIONARY (CONTENT)

## 3.1 Teks Antarmuka Lengkap
* **Brand Name:** `dipotongin`
* **Navigasi Navbar:**
  * `Layanan & Tarif` (`#layanan` / `/#layanan`)
  * `Konsultasi Gaya` (`/konsultasi` dengan badge `Kuis`)
  * `Kartu Member` (`#kartu-member` / `/#kartu-member`)
  * `Lokasi` (`#lokasi` / `/#lokasi`)
  * `Kontak` (`#kontak` / `/#kontak`)
  * Tombol CTA: `Tanya lewat WhatsApp`
* **Hero Carousel (6 Slide Foto Dokumentasi):**
  1. Slide 1: `Studio San Marco` | `Calle Larga XXII Marzo, Venice` | Alt: `Interior studio barbershop dipotongin di San Marco, Venice dengan deretan kursi kulit klasik dan cermin kayu berukir`
  2. Slide 2: `Pangkas Presisi` | `Gunting manual dan ketelitian pangkas` | Alt: `Master barber profesional sedang memotong rambut pelanggan menggunakan gunting dan sisir menghadap jendela kanal Venice`
  3. Slide 3: `Handuk Hangat` | `Kompres hangat dan ritual cukur klasik` | Alt: `Ritual cukur tradisional dengan kompres handuk hangat dan busa cukur di studio dipotongin San Marco Venice`
  4. Slide 4: `Peralatan Tradisional` | `Pisau lipat Solingen dan gunting baja` | Alt: `Peralatan pangkas tradisional meliputi pisau cukur lipat Solingen, gunting baja, dan sisir klasik di atas batu slate`
  5. Slide 5: `Layanan Walk-in` | `Pangkas langsung tanpa antrean online` | Alt: `Suasana aktif pangkas rambut pria dan layanan walk-in di studio dipotongin San Marco Venice`
  6. Slide 6: `Kursi Klasik Vintage` | `Jok kulit tebal dan sandaran mekanik` | Alt: `Detail jahitan kulit dan sandaran tangan kursi pangkas rambut vintage klasik di studio dipotongin`
* **Kartu Member Loyalitas:**
  * Judul: `KARTU MEMBER` | Lencana: `8 STEMPEL PANGKAS`
  * Judul Stempel: `Kartu Stempel Pangkas` | Aturan: `1 stempel tiap pangkas`
  * Slot: 8 slot (`01` sampai `07` nomor, slot `08` bintang reward `★`)
  * Banner Reward: `8 Stempel: Bonus 1x Pangkas`
  * Plang Buka: `BUKA 10.00 - 21.00` | Tombol `Detail`
  * Aksi: Tombol WhatsApp `Cek antrean WhatsApp` & Link Kuis `Kuis Gaya Rambut (1 Mnt)`
* **Daftar Layanan & Tarif (8 Item):**
  1. *Potong Rambut Reguler* (Rp40.000 / 45 mnt): Konsultasi model rambut, cuci rambut awal, pangkas gunting dan clipper, serta bilas bersih.
  2. *Potong Rambut Anak* (Rp35.000 / 30 mnt): Pemangkasan rambut anak usia di bawah 12 tahun menggunakan gunting dan clipper guard.
  3. *Taper dan Fade Bersih* (Rp50.000 / 40 mnt): Gradasi samping dan tengkuk menggunakan clipper multi-guard dan razor leher.
  4. *Rapikan Jenggot dan Kumis* (Rp25.000 / 25 mnt): Pemangkasan panjang jenggot, penegasan garis tepi rahang dengan razor, dan kompres hangat.
  5. *Cukur Habis Kepala* (Rp35.000 / 35 mnt): Pencukuran kepala menggunakan busa cukur, pisau silet baru, dan kompres handuk hangat.
  6. *Rapikan Samping dan Tengkuk* (Rp20.000 / 20 mnt): Perapian garis leher dan area sekitar telinga menggunakan clipper tanpa memotong bagian atas.
  7. *Pangkas Komplit Handuk Hangat* (Rp75.000 / 60 mnt): Pangkas rambut, cukur jenggot, keramas dua kali, pijat pundak, dan kompres handuk hangat. (Lencana: `Paket Lengkap`).
  8. *Cuci dan Segarkan Kepala* (Rp30.000 / 25 mnt): Keramas dua tahap, pijat kulit kepala, pengaplikasian tonik, dan pengeringan rambut.
* **Callout Box Kuis Seksi Layanan:**
  * Lencana: `FITUR KONSULTASI` | Tag: `Estimasi 1 Mnt`
  * Judul: `Bingung memilih model potongan yang pas?`
  * Deskripsi: `Cocokkan bentuk wajah dan jenis helai rambutmu dengan model potongan dan paket resmi studio melalui kuis interaktif 3 langkah.`
  * Tombol: `Cari Model Rambutmu`
* **Kotak Tanya Tarif:** `Tanya Tarif & Waktu` - `Ingin menanyakan estimasi waktu, jenis potongan rambut, atau antrean hari ini?` | Tombol: `Tanya tentang layanan`.
* **Jadwal & Lokasi:**
  * Senin sampai Kamis: 10.00 sampai 20.00 | Jumat: 10.00 sampai 20.00 | Sabtu dan Minggu: 09.00 sampai 21.00
  * Catatan Walk-in: `Sistem pangkas walk-in langsung. Tanpa antrean reservasi online yang rumit.`
  * Alamat: `Calle Larga XXII Marzo, 2093, 30124 Venezia, Italia (Area San Marco)`
  * Tombol: `Buka Google Maps ->` dan `Tanya petunjuk arah`
* **Seksi Kontak:** `Ada pertanyaan seputar layanan pangkas?` | Tombol: `Tanya lewat WhatsApp` dan `Instagram`.
* **Footer:** Brand, navigasi lengkap, jam buka harian, embed peta, dan atribusi `Website oleh ENLESWEB.`.

## 3.2 Halaman & Kuis Konsultasi Gaya Rambut (`/konsultasi`)
* **Header:**
  * Breadcrumb: `Kembali ke Beranda`
  * Lencana: `PANDUAN PANGKAS STUDIO` | `Estimasi 1 Menit`
  * H1: `Konsultasi Gaya Rambut`
  * Lead: `Temukan model potongan dan paket layanan resmi yang paling selaras dengan bentuk wajah, karakter helai rambut, serta kebiasaan harianmu.`
* **Kuis 3 Langkah:**
  * Langkah 01 (Bentuk Wajah): Oval Simetris, Kotak / Persegi, Bulat Melingkar, Lonjong / Panjang.
  * Langkah 02 (Tekstur Rambut): Lurus & Tebal, Ikal & Bergelombang, Halus & Ringan.
  * Langkah 03 (Rutinitas): Rapi & Terstruktur, Tekstur Alami, Praktis (Cuci & Jalan).
* **5 Profil Hasil Rekomendasi:**
  1. *Classic Low Taper & Side Part* (Belah Samping Rapi Klasik) -> Paket: *Potong Rambut Reguler* (Rp40.000 / 45 mnt).
  2. *Textured French Crop with Mid Fade* (Crop Tekstur Kasual) -> Paket: *Taper dan Fade Bersih* (Rp50.000 / 40 mnt).
  3. *Clean Low Taper Fade & Textured Quiff* (Taper Fade Jambul Bervolume) -> Paket: *Taper dan Fade Bersih* (Rp50.000 / 40 mnt).
  4. *Classic Executive Scissor Cut* (Pangkas Gunting Alami) -> Paket: *Potong Rambut Reguler* (Rp40.000 / 45 mnt).
  5. *Clean Buzz Cut with Razor Outline* (Cepak Bersih Garis Tegas) -> Paket: *Rapikan Samping dan Tengkuk* (Rp20.000 / 20 mnt).
* **Status Badge Tiket:** `REKOMENDASI PANDUAN`
* **Tombol Aksi Tiket:** `Kirim Ringkasan ke WhatsApp`, `Ulangi Kuis`, `Kembali ke Beranda`.
* **Catatan Operasional Footnote:**
  > "Hasil kuis ini merupakan panduan proporsi awal. Tukang cukur kami di studio Calle Larga XXII Marzo akan tetap memeriksa tekstur rambut secara langsung di cermin sebelum pemotongan dimulai."

## 3.3 Format Draf Pesan WhatsApp
* **Umum:** `Halo ENLESWEB, saya melihat website dipotongin dan ingin bertanya tentang pembuatan website untuk barbershop.`
* **Layanan:** `Halo ENLESWEB, saya ingin bertanya tentang bagian layanan pada demo dipotongin.`
* **Antrean:** `Halo studio dipotongin, saya ingin menanyakan antrean dan ketersediaan bangku pangkas hari ini.`
* **Lokasi:** `Halo ENLESWEB, saya ingin bertanya tentang bagian lokasi pada demo dipotongin.`
* **Tiket Konsultasi:** `Halo studio dipotongin, saya telah menyelesaikan Kuis Konsultasi Gaya Rambut di website dengan rekomendasi: *[Nama Model]* (Paket: *[Paket Resmi]*). Saya ingin menanyakan ketersediaan bangku pangkas.`

---

# BAGIAN 4: TECHNICAL SPECIFICATION (SPEC)

## 4.1 Framework & Compiler
* Astro 5.4.2 dalam mode static output murni.
* TypeScript 5.7.3 strict mode dengan 0 diagnostic error pada `astro check`.
* Self-hosted fonts melalui npm `@fontsource/besley` dan `@fontsource/albert-sans`.
* Komponen floating: `FloatingWhatsApp.astro` terintegrasi global via `BaseLayout.astro`.
* Komponen kuis: `ConsultationQuiz.astro` dengan arsitektur modular di `/konsultasi`.

## 4.2 State Machine & Sinkronisasi Kuis
* Menyimpan jawaban ke `localStorage.getItem('dipotongin_quiz_answers')`.
* Sinkronisasi browser history query parameter `?step=X` menggunakan `window.history.replaceState`.
* Eksekusi logika deterministik via `calculateRecommendation()` di `src/data/konsultasi.ts`.
* Generator URL WhatsApp interaktif dengan draf pesan tiket resmi.

## 4.3 Verifikasi Kualitas Otomatis (`verify.mjs`)
Memenuhi 100% dari 10 aturan uji:
1. Bebas dari karakter em-dash (—) dan en-dash (–) di seluruh source dan dist HTML.
2. Tepat satu `<h1>` pada halaman beranda.
3. Seluruh internal anchor (`#layanan`, `#kartu-member`, `#lokasi`, `#kontak`) terverifikasi valid di DOM pada seluruh halaman dist/.
4. Nol tautan `href="#"` atau unlinked placeholder.
5. Nol kata sifat atau buzzwords pemasaran terlarang (`terbaik`, `nomor satu`, `premium`, `terpercaya`, `paling rapi`, `gratis`).
6. Tag `noindex, nofollow` aktif pada mode demo.
7. Seluruh tag gambar memiliki atribut `alt` deskriptif.
8. Seluruh tautan tab baru memiliki `rel="noopener noreferrer"`.
9. Conditional rendering Maps dan Instagram bersih tanpa kebocoran link kosong.
10. Tautan WhatsApp valid dengan nomor demo ENLESWEB.
