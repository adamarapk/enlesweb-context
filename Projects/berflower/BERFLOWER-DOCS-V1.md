# BERFLOWER DOKUMENTASI UTAMA V1 (BERFLOWER-DOCS-V1)

Tanggal Pembaruan: 7 Oktober 2026  
Sumber Konsolidasi: PRD.md, DESIGN.md, CONTENT.md, SPEC.md  
Status Sistem: Production & As-Is Multi-Page Florist Concept Implementation  
Brand: berflower (Toko Bunga & Hadiah Konsep di Venice, Italia)  

---

## DAFTAR ISI (TABLE OF CONTENTS)

1. [DOKUMEN 1: PRD.md (Product Requirements Document)](#dokumen-1-prdmd-product-requirements-document)
   - 1. Konteks
   - 2. Tujuan Situs
   - 3. Audiens
   - 4. Penawaran (Ringkasan Struktur)
   - 5. Scope (IN)
   - 6. Di Luar Scope (OUT)
   - 7. Launch Cut dan Integrasi ke ENLESWEB
   - 8. Batasan Bisnis (LOCKED)
   - 9. Perilaku Konversi (Demo Mode)
   - 10. Kriteria Selesai (Definition of Done)
   - 11. QA Konversi
   - 12. Risiko yang Diketahui
   - 13. Daftar Keputusan Sistem

2. [DOKUMEN 2: DESIGN.md (Visual & Design Specification)](#dokumen-2-designmd-visual--design-specification)
   - 1. Karakter & Target Rasa
   - 2. Token Desain (Warna, Tipografi, Spasi, Radius Organik)
   - 3. Tombol, Tautan, dan Komponen Interaktif
   - 4. Navbar, Menu Mobile, Cart Indicator, dan Floating WhatsApp
   - 5. Beranda: Detail Section
   - 6. Koleksi: Daftar Produk, Filter, dan Aksi
   - 7. Hadiah: Baris Editorial dan Item Tambahan
   - 8. Rangkai Buket (BouquetBuilder.astro)
   - 9. Keranjang Belanja (keranjang.astro)
   - 10. Cara Pesan, Kontak, 404
   - 11. Footer
   - 12. Perlakuan Foto
   - 13. Interaksi, Animasi, dan Motion Control
   - 14. Aksesibilitas Visual

3. [DOKUMEN 3: CONTENT.md (Website Copy Specification)](#dokumen-3-contentmd-website-copy-specification)
   - 1. Aturan Keras Copywriting
   - 2. Meta Halaman (DEFAULT)
   - 3. Elemen Bersama (Navbar, Floating WA, Footer)
   - 4. Beranda
   - 5. Koleksi
   - 6. Hadiah
   - 7. Rangkai Buket (Bouquet Builder)
   - 8. Keranjang Belanja (Cart)
   - 9. Cara Pesan
   - 10. Kontak
   - 11. Halaman 404
   - 12. Pesan WhatsApp (Demo Mode & Mode Toko)
   - 13. Daftar Aset Foto
   - 14. Larangan Teks

4. [DOKUMEN 4: SPEC.md (Technical Architecture & Engineering Specification)](#dokumen-4-specmd-technical-architecture--engineering-specification)
   - 1. Stack Teknologi & Runtime
   - 2. Struktur File Aktual
   - 3. Pemetaan Halaman ke Komponen
   - 4. Konfigurasi Bisnis (site.ts)
   - 5. Data Produk, Hadiah, dan Bouquet Builder
   - 6. Integrasi WhatsApp (whatsapp.ts)
   - 7. State Management & Skrip Klien (Client Islands)
   - 8. CSS, Token, dan Font
   - 9. Gambar dan Performa
   - 10. SEO dan Meta Tags (Base.astro)
   - 11. Skrip Otomasi Verifikasi QA (scripts/verify.mjs)
   - 12. QA Checklist Teknis
   - 13. Panduan Deploy Vercel

---

## DOKUMEN 1: PRD.md (Product Requirements Document)

=== BATAS AWAL FILE: PRD.md ===

# PRD.md - berflower
Versi 1.2 (As-Is Website Specification)

#### 1. Konteks
berflower adalah konsep website untuk toko bunga dan hadiah di Venice (Venezia), Italia, dibuat ENLESWEB sebagai contoh kemampuan tingkat Growth. Bukan client nyata, bukan toko yang beroperasi.
Fungsi di dalam bisnis ENLESWEB:
* Menjadi project demo kedua yang ditampilkan di project section homepage ENLESWEB.
* Menunjukkan range capability: Jerseay (studio jersey, katalog dan brief), berflower (toko bunga, katalog, filter, perangkai buket kustom, keranjang client-side, form pesanan), ripeir (workshop perbaikan).
* Membuktikan bahwa ENLESWEB dapat membuat website multi-halaman dengan desain editorial khusus, konfigurator interaktif (Bouquet Builder), keranjang belanja reaktif client-side dengan Nano Stores, alur checkout WhatsApp terstruktur, dan form pesanan, seluruhnya berjalan murni di sisi browser tanpa server backend database.
Prinsip: jangan menjual teknologi. Tunjukkan hasil website yang jelas, hidup, dan mudah dipakai.

#### 2. Tujuan Situs
Dua tujuan, dengan urutan prioritas (LOCKED):
Tujuan bagi pengunjung portofolio ENLESWEB (utama):
1. Mereka menilai bahwa kualitas desain, interaktivitas, dan penyusunan halaman setara tingkat Growth.
2. Mereka paham bahwa ini contoh buatan ENLESWEB, bukan client nyata.
Tujuan bagi pengunjung dalam dunia konsep (pembeli bunga fiktif):
1. Clarity: paham apa yang dijual, bagaimana cara memesan, dan berapa harganya.
2. Honesty: tidak ada klaim yang tidak bisa dibuktikan.
3. Trust: ada alasan percaya tanpa bukti palsu.
4. Action: jalur memesan dan checkout lewat WhatsApp sangat jelas dan intuitif.
Konversi demo: pengunjung mengklik tombol WhatsApp, merangkai buket kustom, menambahkan item ke keranjang, atau mengirim pesan pemesanan melalui form pesanan maupun checkout keranjang.

#### 3. Audiens
* Pengunjung portofolio: calon customer ENLESWEB (pemilik bisnis kecil-menengah) yang datang dari project section homepage ENLESWEB. Mayoritas membuka lewat HP.
* Pembeli dalam dunia konsep: orang di Venice (Venezia) dan sekitarnya usia sekitar 20 sampai 45 yang membeli bunga untuk acara. Mayoritas membuka lewat HP.
* Bahasa sederhana, tidak teknis. Sapaan: "kamu/-mu" (DEFAULT, sama dengan ENLESWEB).

#### 4. Penawaran (Ringkasan Struktur)
Rincian teks dan harga bersumber dari CONTENT.md.
* Tiga kategori bunga: Buket, Bunga Meja, Papan Bunga (7 produk).
* Tiga paket hadiah: Buket dan Cokelat, Buket Wisuda, Hampers Bunga (3 paket) dan 2 tambahan pelengkap (boneka wisuda kecil, cokelat batang).
* Rangkai buket kustom (Bouquet Builder): konfigurator interaktif untuk memilih bunga utama (mawar merah, bunga matahari, tulip, peony), bunga pelengkap (baby's breath, eucalyptus, statice), kertas pembungkus (krem, merah muda, kertas kraft), pita (krem, merah muda, hijau), serta kartu ucapan kustom dengan pilihan gaya tulisan (serif, serif miring, sans).
* Keranjang belanja interaktif (Cart Island): penampung pesanan client-side dengan penyesuaian kuantitas, editor kartu ucapan per item, subtotal otomatis, dan formulir data pengiriman.
* Enam acara sebagai jalur masuk: Ulang tahun, Wisuda, Anniversary, Ucapan selamat, Duka cita, Hari Ibu.
* Pemesanan: Seluruhnya diselesaikan melalui WhatsApp (Direct WhatsApp Checkout). Pengunjung dapat memesan langsung per produk/paket, mengisi form pesanan di /cara-pesan, atau menyusun keranjang belanja di /keranjang lalu mengirim ringkasan pesanan ke WhatsApp. Tidak ada pembayaran online pihak ketiga atau checkout gateway otomatis (LOCKED).
* Tidak ada badge "Terlaris", "Favorit", "Best Seller", atau pita buatan sendiri (LOCKED).
* Tidak ada janji durasi persiapan atau pengiriman (LOCKED, sama seperti prinsip ENLESWEB).

#### 5. Scope (IN)
##### 5.1 Tujuh Halaman Utama + 1 Halaman Utilitas
| Halaman | Rute | Fungsi |
| ------ | ------ | ------ |
| Beranda | / | Memahami toko, melihat 3 kategori dan 6 acara, teaser hadiah, langkah cara pesan ringkas, profil konsep, CTA penutup |
| Koleksi | /koleksi | Melihat 7 produk, memfilter menurut kategori dan acara, memesan langsung via WhatsApp atau menambahkan ke keranjang |
| Hadiah | /hadiah | Melihat 3 paket hadiah dan item tambahan, memesan via WhatsApp atau menambahkan ke keranjang |
| Rangkai Buket | /rangkai-buket | Konfigurator interaktif menyusun bunga utama, pelengkap, kertas, pita, kartu ucapan kustom, melihat estimasi harga, dan menambahkan ke keranjang |
| Keranjang | /keranjang | Mengelola item belanja dari koleksi/hadiah/racikan buket, mengatur kuantitas, menyesuaikan kartu ucapan per item, mengisi data pemesan & jadwal, dan checkout ke WhatsApp |
| Cara Pesan | /cara-pesan | Memahami alur 4 langkah pemesanan lengkap, mengisi form pesanan langsung, membaca pertanyaan umum (FAQ) |
| Kontak | /kontak | Kontak WhatsApp, jam operasional, area antar, titik ambil sendiri studio Venice, embed peta Google Maps, catatan konsep ENLESWEB |
| 404 | /404 | Halaman utilitas ketika alamat URL tidak ditemukan |

##### 5.2 Elemen Bersama
* Navbar: merek berflower, 3 tautan utama desktop (Koleksi, Hadiah, Buat Buket), menu dropdown info (Cara Pesan, Kontak), CartIndicator (ikon keranjang interaktif dengan label dan counter badge dinamis yang terhubung ke Nano Stores).
* Menu mobile (< 1024px): toggle 44x44px membuka drawer panel dengan navigasi Fraunces 1.5rem dan sub-kelompok info.
* Floating WhatsApp Button: Tombol bulat mengambang FAB warna hijau resmi WhatsApp (#25D366) di pojok kanan bawah (58x58px pada desktop/tablet, 52x52px pada mobile < 640px dengan safe-area-inset) dengan logo SVG putih dan bayangan lembut, aktif di seluruh halaman (baik desktop maupun mobile).
* Footer: latar --leaf, merek, tagline, 3 ikon media sosial (Instagram, TikTok, Pinterest), kolom Lokasi & Studio Venice (alamat Calle Larga San Marco 412, jam buka 09.00-19.00 CET, embed peta Google Maps interaktif, tautan pin Google Maps), 5 tautan navigasi (Koleksi, Hadiah, Buat Buket, Cara Pesan, Kontak), catatan konsep ENLESWEB, dan baris pembuat.
* Skip link: "Lewati ke konten" menuju #main-content.
* View Transitions: `<ClientRouter />` dari `astro:transitions` untuk transisi halaman mulus tanpa full-page reload.

##### 5.3 Persyaratan per Halaman
Beranda (urutan section):
1. Hero: headline (dengan frasa "dipesan lewat WhatsApp" dicetak miring), teks pendukung, tombol tunggal utama WhatsApp [Pesan via WhatsApp], dan foto buket transparan (hero-bouquet.png) yang mengambang langsung di atas canvas halaman tanpa card container.
2. Koleksi: tiga kategori dalam komposisi asimetris dengan foto editorial dan tautan filter ke /koleksi?kategori={slug}.
3. Acara: indeks tipografi enam baris, masing-masing tautan ke /koleksi dengan filter acara (?acara={slug}).
4. Hadiah: blok editorial foto dan teks menuju /hadiah.
5. Cara pesan ringkas: empat langkah dalam susunan horizontal/grid dengan tautan ke /cara-pesan.
6. Tentang berflower: dua kolom editorial di atas canvas krem dengan penegasan konsep buatan ENLESWEB.
7. CTA penutup: blok warna penuh --paper-deep dengan headline, kalimat pendukung, dan tombol [Ceritakan Acaramu via WhatsApp].

Koleksi:
* Header halaman dengan judul dan teks pengantar mengenai ketersediaan bunga.
* DemoNote: catatan penanda konsep buatan ENLESWEB.
* Filter kategori interaktif (Semua, Buket, Bunga Meja, Papan Bunga) dan filter acara lewat parameter URL (?acara=...).
* Tujuh produk ditampilkan dalam grid editorial. Setiap kartu memuat foto, nama produk, deskripsi, harga dengan format tabular, tautan [Pesan lewat WhatsApp], dan tombol [Tambah ke keranjang].
* Tanpa JavaScript, semua 7 produk tetap tampil (progressive enhancement).

Hadiah:
* Header halaman dengan judul dan teks pengantar.
* DemoNote: catatan penanda konsep buatan ENLESWEB.
* Tiga paket hadiah dalam baris editorial: foto, nama, deskripsi, harga, tautan [Pesan Paket Ini], dan tombol [Tambah ke keranjang].
* Bagian item tambahan (boneka wisuda kecil, cokelat batang) dan informasi kartu ucapan (maksimal 150 karakter).
* Tombol CTA WhatsApp penutup [Tanya Paket Hadiah via WhatsApp].

Rangkai Buket:
* Header halaman dengan judul dan teks pengantar.
* Konfigurator Bouquet Builder:
  1. Pemilihan bunga utama: stepper input kuantitas untuk Mawar merah, Bunga matahari, Tulip, Peony.
  2. Pemilihan bunga pelengkap: stepper input kuantitas untuk Baby's breath, Eucalyptus, Statice.
  3. Pemilihan kertas pembungkus: radio button dengan lingkaran visual swatch warna (Krem, Merah muda, Kertas kraft).
  4. Pemilihan pita: radio button dengan lingkaran visual swatch warna (Krem, Merah muda, Hijau).
  5. Pembuat kartu ucapan: input teks Untuk, Dari, textarea Pesan (maksimal 150 karakter), dan pilihan gaya tulisan (Serif, Serif miring, Sans) dengan kotak pratinjau live preview yang memperbarui teks dan font secara real-time.
  6. Panel ringkasan estimasi harga dan tombol submit [Tambah buket ke keranjang] yang menyimpan komposisi buket ke dalam store keranjang.

Keranjang:
* Header halaman dengan judul dan teks pengantar.
* Tampilan kosong (Empty State): pesan bahwa keranjang masih kosong dengan tautan menuju /koleksi dan /rangkai-buket.
* Daftar item belanja yang tersimpan:
  - Kartu produk katalog atau buket racikan sendiri (dilengkapi rincian bunga utama, pelengkap, kertas, dan pita).
  - Kontrol kuantitas interaktif (tombol -, input angka, tombol +) dan total harga baris.
  - Tombol [Hapus item].
  - Accordion `<details>` editor kartu ucapan per item: formulir pengisian penerima, pengirim, pesan, dan pilihan font dengan pratinjau langsung.
* Sidebar ringkasan belanja (Cart Summary):
  - Subtotal estimasi dan catatan konfirmasi harga/ongkir.
  - Formulir pemesanan: Nama (wajib), Acara (opsional), Tanggal dibutuhkan (wajib, minimum hari ini), Cara terima (pilihan radio: Diantar di Venice, Ambil sendiri).
  - Tombol [Lanjutkan ke WhatsApp] yang menyusun seluruh isi keranjang dan formulir ke dalam pesan chat WhatsApp.
  - Tombol [Kosongkan keranjang] untuk membersihkan seluruh data belanja.

Cara Pesan:
* Header halaman dan empat langkah alur pemesanan versi lengkap dengan penomoran besar.
* Formulir pesanan langsung (OrderForm) yang menyusun pesan WhatsApp terstruktur tanpa backend.
* Pertanyaan umum (FaqList): empat pertanyaan dalam komponen akordion native `<details>`.

Kontak:
* Blok informasi kontak: WhatsApp, jam operasional (Setiap hari, 09.00 sampai 19.00 CET), area antar (Venice dan sekitarnya), titik ambil sendiri studio (Calle Larga San Marco, 412, Venezia).
* Tautan Instagram dan embed iframe Google Maps interaktif dengan tombol pin maps.
* Blok "Tentang contoh ini" dengan tombol [Hubungi ENLESWEB].

#### 6. Di Luar Scope (OUT)
* Database server backend, API eksternal, akun pengguna, sistem login, dashboard pelanggan, dan CMS.
* Payment gateway online pihak ketiga (kartu kredit, Virtual Account, QRIS otomatis dalam web). Seluruh pembayaran disepakati via WhatsApp.
* Halaman detail produk tunggal (/produk/{id}) terpisah (seluruh aksi pembelian dilakukan langsung dari katalog atau keranjang).
* Sinkronisasi inventaris stok real-time dan pelacakan kurir otomatis.
* Testimoni, ulasan pengguna fiktif, angka penjualan buatan, dan lencana klaim pasar.
* Skrip analitik pihak ketiga dan Meta Pixel (DEFAULT: tidak ada).
* Animasi berlebihan, scroll-jacking, dan carousel otomatis.

#### 7. Launch Cut dan Integrasi ke ENLESWEB
berflower dianggap siap ditampilkan jika seluruh chain berikut terpenuhi:
| Tahap | Bukti |
| ------ | ------ |
| Build | npm run build exit code 0, 0 error, 0 warning |
| Check | npm run check lulus 0 error |
| Verify | npm run verify lolos 0 error |
| Responsive QA | Lulus di 360, 390, 720, 1024, 1440 px |
| Deploy | Berjalan di Vercel |
| Public URL | URL HTTPS publik bisa dibuka di HP dan desktop |
| Screenshot | Thumbnail 16:10 tersedia |
| Homepage integration | URL dan thumbnail dipasang di repo ENLESWEB |
| Final QA | Project section ENLESWEB diuji ulang: tombol aktif, tautan benar, tidak ada broken state |

#### 8. Batasan Bisnis (LOCKED)
* berflower bukan client nyata. Tidak boleh disebut atau dipakai sebagai client, testimoni, atau angka client ENLESWEB.
* Setiap halaman memuat penanda konsep yang terlihat (catatan di footer, DemoNote di Koleksi & Hadiah, serta paragraf pada Beranda dan Kontak).
* Tidak boleh ada klaim hasil atau klaim pasar: "terlaris", "terbaik", "termurah", "terpercaya", "ribuan pelanggan", "sejak tahun ...".
* Tidak boleh ada janji waktu: "same day", "1 jam sampai", "pasti tepat waktu".
* Tidak boleh ada klaim yang tidak bisa dibuktikan tentang bunga: "100% segar", "langsung dari kebun", "bebas pestisida".
* Tidak boleh memakai foto yang menampilkan toko nyata, papan nama, merek, atau wajah orang yang dikenali.
* Harga hanya boleh berasal dari CONTENT.md dan bouquet-builder.ts.
* Kata dilarang di teks: premium, presisi, elevate, seamless, crafted, powerful, modern, exceptional, next-level, dan sejenisnya.
* Tidak ada badge atau hierarki buatan sendiri (Featured, Best Seller, Pilihan Kami).
* Tidak ada em dash di teks pelanggan.

#### 9. Perilaku Konversi (Demo Mode)
Konfigurasi WhatsApp beroperasi dalam Demo Mode (site.demoMode: true):
* Klik tombol WhatsApp umum (baik tombol halaman maupun Floating WhatsApp Button) membuka chat ke nomor WhatsApp ENLESWEB (site.enleswebWhatsappNumber) dengan pesan kontekstual:
  `Halo ENLESWEB, saya sedang melihat contoh website berflower, halaman {halaman}. Saya mau tanya tentang pembuatan website.`
* Form pesanan di /cara-pesan menyusun pesan terstruktur dari isian pengunjung, lalu membuka WhatsApp ke nomor ENLESWEB dengan header `Halo ENLESWEB, saya mencoba form pesanan di contoh website berflower.`, detail pesanan, dan penutup `Saya mau tanya tentang pembuatan website seperti ini.` Tidak ada data yang disimpan di server.
* Form checkout di /keranjang membaca seluruh isi keranjang dari store Nano Stores dan formulir pengiriman, lalu merakit pesan terstruktur ke WhatsApp ENLESWEB berisi daftar item belanja, rincian kustom buket, kartu ucapan, subtotal estimasi, dan data pemesan.
* Setiap tombol WhatsApp memuat data-wa-topic dan data-cta-location untuk pelacakan QA. Floating button membawa data-cta-location="floating-button" dengan pesan kontekstual per halaman. Tombol checkout keranjang membawa data-cta-location="cart_checkout". Tombol hubungi ENLESWEB di halaman Kontak membawa data-cta-location="contact_enlesweb" dengan topik "pembuatan website".

#### 10. Kriteria Selesai (Definition of Done)
berflower siap direview jika semua kriteria berikut terpenuhi:
* Seluruh teks sama persis dengan CONTENT.md, tanpa em dash dan tanpa kata terlarang.
* Tujuh halaman utama (/ , /koleksi , /hadiah , /rangkai-buket , /keranjang , /cara-pesan , /kontak) dan halaman 404 tersedia, tersambung lewat navigasi, dan tidak ada tautan rusak.
* Komponen interaktif client-side (Bouquet Builder, Add to Cart, Cart Indicator, Cart Line Editor, dan Form Validasi) berfungsi lancar di peramban.
* State keranjang belanja tersimpan secara persisten di localStorage browser via Nano Stores.
* 11 foto produk dan paket hadiah serta 1 aset buket hero terpasang dengan alt text dan catatan lisensi di CREDITS.md.
* Beranda menampilkan penawaran dan tombol WhatsApp di layar pertama HP 360x740 dan 390x844 tanpa scroll.
* Koleksi: filter kategori dan filter acara bekerja, dan semua 7 produk tampil jika JavaScript mati.
* Penanda konsep terlihat di footer semua halaman, DemoNote pada Koleksi dan Hadiah, serta teks di Beranda dan Kontak.
* Floating WhatsApp Button berfungsi di seluruh halaman pada desktop dan mobile.
* Footer menampilkan lokasi studio Venice lengkap dengan embed peta Google Maps dan ikon media sosial.
* Seluruh pemeriksaan skrip `npm run verify`, `npm run check`, dan `npm run build` lulus 0 error.
* Dideploy ke Vercel dengan URL HTTPS publik.

#### 11. QA Konversi
Urutan penilaian:
1. Dalam beberapa detik pengunjung paham: toko bunga dan hadiah konsep di Venice, pesan lewat WhatsApp.
2. Pengunjung portofolio paham bahwa ini contoh buatan ENLESWEB tingkat Growth dengan kemampuan multi-halaman dan fitur interaktif mandiri.
3. Harga produk dan opsi racikan buket terlihat transparan tanpa harus membuka menu tersembunyi.
4. WhatsApp adalah aksi paling jelas di setiap halaman (termasuk tombol mengambang FAB yang selalu terjangkau).
5. Dari Beranda, pengunjung bisa mencapai produk untuk acaranya atau membuka perangkai buket dalam satu atau dua ketukan.
6. Form pesanan dan checkout keranjang terasa ringkas, responsif, dan tidak membingungkan di layar HP.
7. Tidak ada klaim palsu yang tidak dapat dipertanggungjawabkan.
8. Tampilan terasa dirancang khusus untuk toko bunga editorial, bukan template generik.

#### 12. Risiko yang Diketahui
1. Demo disangka toko nyata. Mitigasi: penanda konsep di footer, DemoNote di katalog & hadiah, Beranda, dan Kontak; mode demo mengarahkan WhatsApp ke ENLESWEB; noindex pada robots.txt dan meta tag.
2. Lisensi foto. Foto bunga bermutu adalah kunci desain editorial. Mitigasi: catat sumber di CREDITS.md; jangan pakai foto bermerek atau menampilkan wajah orang.
3. Kesenjangan ekspektasi. Demo setara Growth dengan interaktivitas keranjang belanja client-side, sedangkan paket lain ENLESWEB menjual Starter. Mitigasi: label "Contoh tingkat Growth" di project section ENLESWEB.
4. Persistensi keranjang belanja sisi klien. Data keranjang mengandalkan localStorage perangkat pengguna. Mitigasi: validasi decoding skema data di cart.ts dan fallback state kosong jika storage bermasalah.
5. Bobot foto pada perangkat HP. Mitigasi: kompresi Astro assets WebP/AVIF responsif melalui Sharp.

#### 13. Daftar Keputusan Sistem
| Keputusan | Status |
| ------ | ------ |
| Nama proyek: berflower (huruf kecil) | LOCKED |
| Konsep buatan ENLESWEB, bukan client nyata, contoh tingkat Growth | LOCKED |
| Tujuh halaman utama (Beranda, Koleksi, Hadiah, Rangkai Buket, Keranjang, Cara Pesan, Kontak) + 404 | LOCKED |
| Arah visual editorial hangat (krem, serif, foto besar, tanpa kartu berlapis) | LOCKED |
| Stack Astro 7, output static | LOCKED |
| State management client-side: Nano Stores dengan persistent storage (localStorage) | LOCKED |
| Transisi antar-halaman: Astro ClientRouter (View Transitions) | LOCKED |
| Deploy Vercel | LOCKED |
| Pemesanan WhatsApp Direct Checkout (tanpa payment gateway dan tanpa server backend) | LOCKED |
| Tanpa testimoni, statistik, badge, dan klaim hasil fiktif | LOCKED |
| Palet, font, dan token desain pada DESIGN.md | DEFAULT |
| Kota konsep: Venice (Venezia), Italia | DEFAULT |
| Alamat studio: Calle Larga San Marco, 412, 30124 Venezia VE, Italia | DEFAULT |
| Jam operasional: Setiap hari, 09.00 sampai 19.00 CET | DEFAULT |
| Floating WhatsApp Button di seluruh halaman (FAB 58x58px hijau #25D366) | DEFAULT |
| Cart Indicator pada navbar desktop dan mobile | DEFAULT |
| Hero single-CTA [Pesan via WhatsApp] dan foto buket transparan | DEFAULT |
| Footer dengan embed peta Google Maps dan ikon media sosial | DEFAULT |
| demoMode = true (WhatsApp mengarah ke ENLESWEB) | DEFAULT |
| noindex selama demo (site.indexable: false) | DEFAULT |
| Tanpa Meta Pixel dan analitik pihak ketiga | DEFAULT |
| Nomor WhatsApp ENLESWEB untuk mode demo (site.enleswebWhatsappNumber) | CLOSED |
| URL produksi Vercel dan domain kustom (jika ada) | CLOSED |
| URL ENLESWEB untuk tautan footer dan Kontak | CLOSED |
| OG image dan favicon final | CLOSED |

=== BATAS AKHIR FILE: PRD.md ===

---

## DOKUMEN 2: DESIGN.md (Visual & Design Specification)

=== BATAS AWAL FILE: DESIGN.md ===

# DESIGN.md - berflower
Versi 1.2 (As-Is Website Visual and Design Specification)

Dokumen ini hanya membahas tampilan: warna, tipografi, layout, komponen, dan interaksi visual yang saat ini digunakan dan ditampilkan pada website berflower. Teks ada di CONTENT.md. Scope ada di PRD.md. Implementasi teknis ada di SPEC.md. Status: LOCKED (dari pemilik), DEFAULT (usulan yang dipakai apa adanya, boleh diganti pemilik), OPEN (belum ada data).

#### 1. Karakter
##### 1.1 Target Rasa
Arah (LOCKED): editorial hangat. Bayangkan halaman majalah tentang bunga: kertas krem, huruf serif besar, foto besar, banyak ruang, tenang dan tertata. Bukan toko online penuh kartu bertumpuk, bukan template florist pastel generik, bukan butik mewah yang dingin dan eksklusif. Ketertarikan visual berasal dari: foto editorial besar, tipografi serif dengan penekanan miring terukur, komposisi asimetris, garis tipis 1px, interaktivitas konfigurator buket yang nyata, dan satu warna aksi (--clay). Default konten berada langsung di atas kertas krem canvas halaman. Pemisah berupa garis tipis dan jarak terukur, bukan kartu bayangan mengambang.

##### 1.2 Pembeda dari ENLESWEB
berflower tidak boleh terlihat seperti ENLESWEB. Tabel berikut mengikat.

| Aspek | ENLESWEB | berflower |
| ------ | ------ | ------ |
| Latar | Putih bersih #FFFFFF | Krem hangat #F6F0E6 (--paper) |
| Aksen | Kuning-hijau #E4FF30 | Clay #9E3F3A (--clay, hanya untuk aksi) |
| Font | Poppins untuk semua | Fraunces Variable (judul) dan DM Sans (isi & form) |
| Bentuk | Radius 10 sampai 14px, tombol 3D | Radius 0, 3px, dan serangkaian radius organik daun/bunga |
| Tombol | Tactile shelf 3D, tanpa border | Datar, tanpa bayangan, warna solid --clay |
| Hero | Teks tengah, objek SVG berlapis | Grid 12 kolom, teks kiri, buket bunga transparan mengambang di kanan |
| Navigasi WhatsApp | CTA hilang, tombol melayang bulat | Floating WhatsApp Button: FAB 58x58px hijau #25D366 di pojok kanan bawah |
| Keranjang Belanja | Tidak ada keranjang | Cart Island client-side interaktif dengan Cart Indicator di navbar |
| Pemisah | Garis dan kartu --surface | Garis tipis 1px (--line) dan blok warna penuh (--paper-deep) |
| Ilustrasi | SVG objek taktil | Fotografi kurasi editorial, tanpa ilustrasi vektor generik |
| Motion | Scroll reveal | Animasi masuk spring halus (heroFadeUp, heroFadeScale, cardFadeUp) dan view transition antar-halaman |
| Footer | Hitam #111111 | Hijau tua --leaf dengan embed peta Venice dan medsos |

#### 2. Token Desain
Semua nilai di bawah diimplementasikan sebagai CSS custom properties di `src/styles/global.css`. Jangan memakai nilai di luar token.

##### 2.1 Warna
| Token | Nilai | Status | Fungsi |
| ------ | ------ | ------ | ------ |
| --paper | #F6F0E6 | DEFAULT | Latar halaman utama |
| --paper-deep | #EDE3D2 | DEFAULT | Blok warna penuh (CTA penutup, latar ringkasan checkout, hover baris, badge counter keranjang) |
| --paper-light | #FCF9F4 | DEFAULT | Latar input form, tab filter, dan pratinjau kartu ucapan |
| --ink | #2B2420 | DEFAULT | Teks utama, tombol saat hover, outline fokus |
| --ink-muted | #6B5E55 | DEFAULT | Teks sekunder, deskripsi, border input, border tombol tambah keranjang |
| --line | #D9CDB9 | DEFAULT | Garis pemisah tipis 1px |
| --clay | #9E3F3A | DEFAULT | Warna aksi: isi tombol utama, garis bawah tab/link aktif, teks error form, tombol hapus item |
| --leaf | #2F4235 | DEFAULT | Latar footer |
| --leaf-text | #CFC6B3 | DEFAULT | Teks sekunder di atas --leaf |

Perkiraan rasio kontras (memenuhi WCAG AA & AAA):
* --ink di atas --paper: sekitar 13,5:1.
* --ink-muted di atas --paper: sekitar 5,5:1. Di atas --paper-deep: sekitar 4,9:1.
* --paper di atas --clay (teks tombol): sekitar 5,7:1.
* --paper di atas --leaf: sekitar 9,5:1. --leaf-text di atas --leaf: sekitar 6,3:1.

##### 2.2 Aturan Pemakaian Warna
1. --clay hanya untuk elemen aksi dan status: isi tombol utama, garis bawah tab filter aktif, teks error form, warna hover tautan sekunder, tombol hapus item, dan indikator penting. Tidak untuk dekorasi background umum, heading, atau latar section.
2. --leaf hanya untuk footer. Tidak dipakai sebagai latar section lain.
3. Dilarang gradien warna-warni dekoratif, glow berlebihan, blob abstrak, dan glassmorphism masif.
4. Informasi status tidak pernah disampaikan hanya lewat warna (elemen aktif juga memakai teks, garis, atau atribut aria).

##### 2.3 Tipografi
Font (DEFAULT): Fraunces Variable (judul, angka besar, dan nama produk) dan DM Sans (isi, tombol, form, label). Keduanya self-hosted via Fontsource. Bobot Fraunces: 400 dan 500, dengan gaya miring (italic) untuk penekanan. Bobot DM Sans: 400, 500, 600.
Fallback judul: Georgia, "Times New Roman", serif. Fallback isi: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif.

| Peran | Token CSS | Font | Ukuran | Bobot | Tinggi baris | Letter-spacing |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| Hero headline | --font-display | Fraunces | clamp(2.25rem, 1.4rem + 4.2vw, 4.75rem) | 500 | 1.05 | -0.02em |
| Judul halaman (h1 non-hero) | --font-page-title | Fraunces | clamp(2.25rem, 1.5rem + 3.2vw, 3.75rem) | 500 | 1.08 | -0.02em |
| Judul section (h2) | --font-section-title | Fraunces | clamp(1.75rem, 1.2rem + 2vw, 3rem) | 500 | 1.12 | -0.015em |
| Baris indeks acara | --font-index | Fraunces | clamp(1.75rem, 1.2rem + 2.4vw, 3rem) | 400 | 1.1 | -0.015em |
| Nama produk, paket, kategori (h3) | --font-item-name | Fraunces | 1.25rem | 500 | 1.25 | 0 |
| Paragraf pembuka (Tentang) | --font-lead | Fraunces | clamp(1.25rem, 1.05rem + 1vw, 1.75rem) | 400 | 1.4 | -0.005em |
| Teks isi | --font-body | DM Sans | 1rem mobile, 1.0625rem desktop | 400 | 1.65 | 0 |
| Harga | --font-price | DM Sans | 1rem | 500 | 1.4 | 0 (tabular-nums) |
| Teks kecil (catatan, label) | --font-small | DM Sans | 0.875rem | 500 | 1.5 | 0 |
| Label tombol | --font-button | DM Sans | 1rem | 600 | 1 | 0 |
| Tautan navigasi | --font-nav | DM Sans | 0.9375rem | 500 | 1 | 0 |

Aturan tipografi:
* Teks isi minimum 16px. Teks kecil minimum 14px.
* text-wrap: balance pada headline dan judul. text-wrap: pretty pada paragraf.
* Panjang baris teks isi maksimum 60ch.
* Penekanan miring (italic) pada frasa "dipesan lewat WhatsApp" di headline hero.
* Merek selalu ditulis huruf kecil: `berflower`.

##### 2.4 Jarak (Skala 4px / 8px)
Tokens: 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 64, 72, 80, 96, 128 px.
Padding vertikal antar section: 56px mobile, 80px/96px desktop (>= 1024px).
Hero: padding-top 24px/40px, padding-bottom 48px/64px.

##### 2.5 Radius dan Garis
| Token | Nilai | Fungsi |
| ------ | ------ | ------ |
| --radius-none | 0 | Blok CTA penutup, footer |
| --radius-sm | 3px | Tombol utama, input form, tombol kuantitas, tombol tambah keranjang |
| --radius-organic-1 | 36px 14px 44px 18px | Radius sudut organik lembut kartu/foto produk |
| --radius-organic-2 | 18px 44px 14px 36px | Variasi sudut organik 2 |
| --radius-organic-3 | 44px 20px 36px 14px | Variasi sudut organik 3 |
| --radius-organic-4 | 16px 36px 20px 44px | Variasi sudut organik 4 |
| --radius-organic-hero | 44px 18px 52px 22px | Radius organik panggung visual teaser hadiah |
| --radius-card-sm | 24px 10px 28px 12px | Radius kartu kecil, thumbnail mobile, wrapper tab filter, box pratinjau kartu ucapan |
| --radius-card-sm-alt | 12px 28px 10px 24px | Alternatif radius kartu kecil |

Aturan garis:
* Garis pemisah standar: 1px solid var(--line).
* Border input: 1px solid var(--ink-muted).
* Garis bawah tautan teks: 1.5px solid var(--ink), offset 5px.
* Zero box-shadow dekoratif pada konten kanvas. Pengecualian: bayangan elevasi fungsional pada Floating WhatsApp Button.

##### 2.6 Container dan Grid
* Lebar maksimum konten: 1200px, di tengah (`margin-inline: auto`).
* Padding horizontal container: 20px (mobile), 40px (>= 720px).
* Grid 12 kolom dengan gap 24px / 32px / 48px pada layar desktop.

##### 2.7 Breakpoint
* mobile: < 720px
* tablet: 720px sampai 1023px
* desktop: >= 1024px
* desktop besar: >= 1440px (container tetap 1200px)

#### 3. Tombol, Tautan, dan Komponen Interaktif
##### 3.1 Tombol Utama (WhatsAppButton)
* Isi: --clay. Teks: --paper, bobot 600. Tanpa border. Tanpa bayangan.
* Radius: --radius-sm (3px).
* Tinggi minimum 48px, padding horizontal 24px.
* Hover dan fokus: isi menjadi --ink, teks tetap --paper. Transisi 150ms.
* Ditekan: translateY(1px).
* Fokus keyboard: outline 2px solid var(--ink) dengan offset 3px.
* Ukuran: size-default 48px (padding 24px, dipakai di Kontak WhatsApp), size-hero 56px (padding 32px, dipakai di Hero Beranda, Final CTA, CTA Hadiah, dan tombol ENLESWEB Kontak), size-nav 44px (padding 20px), size-bar 56px (lebar penuh).

##### 3.2 Tautan Sekunder (TextLink)
* Teks --ink, bobot 600, garis bawah 1.5px --ink, offset 5px. Diikuti glyph panah "→" (SVG aria-hidden) bila bernilai navigasi.
* Hover: warna teks dan garis menjadi --clay, ketebalan garis 2.5px, panah bergeser 4px ke kanan.
* Area tap minimal 44px tinggi.
* Mendukung mode `isWhatsApp` dengan atribut pelacakan `data-wa-topic` dan `data-cta-location`.

##### 3.3 Tombol Tambah ke Keranjang (AddToCartButton)
* Tombol outline sekunder di kartu produk katalog dan paket hadiah.
* Border: 1px solid var(--ink-muted), latar transparan, warna teks var(--ink), radius 3px.
* Ukuran: min-height 44px, padding horizontal 16px, font-size 0.875rem (DM Sans 500).
* Hover/focus: border dan teks berubah menjadi var(--clay).
* Feedback reaktif: Saat diklik, menambahkan item ke Nano Stores `$cart` dan teks tombol berubah menjadi [Ditambahkan] selama 1.4 detik sebelum kembali ke [Tambah ke keranjang].

##### 3.4 Form dan Kontrol Input
* Label di atas input, DM Sans 500, font-size 0.875rem/0.9375rem, warna --ink.
* Input, select, textarea: latar --paper-light, border 1px --ink-muted, radius 3px, tinggi minimum 44px/48px, font-size 16px (mencegah auto-zoom di iOS safari), padding 10px-12px.
* Fokus: border --ink dan outline 2px --ink offset 2px.
* Pilihan radio ("Cara terima", kertas pembungkus, pita): area tap nyaman 44px+, penanda lingkaran dengan accent-color: var(--clay).
* Stepper kuantitas: tombol minus dan plus berukuran 44x44px dengan input angka di tengah.
* Pesan kesalahan form: teks di bawah field berwarna --clay, atribut `aria-describedby` atau `role="alert"`.

##### 3.5 DemoNote
* Catatan penanda konsep satu baris minimalis yang diletakkan di atas daftar katalog dan hadiah:
  `Konsep website buatan ENLESWEB. Toko, produk, dan harga di sini adalah contoh.`
* Berada rapi di dalam container, teks warna `--ink-muted`, font-size 0.875rem.

#### 4. Navbar, Menu Mobile, Cart Indicator, dan Floating WhatsApp
##### 4.1 Navbar
Desktop (>= 1024px):
* Kiri: merek berflower (Fraunces 500, 1.5rem, huruf kecil).
* Tengah/Kanan: 3 tautan utama (Koleksi, Hadiah, Buat Buket) dengan gap 32px.
* Menu dropdown "Info" (<details class="info-menu">): tombol pemicu dengan chevron panah rotasi halus saat terbuka, memuat submenu dropdown (Cara Pesan, Kontak). Menutup saat klik luar, klik link, atau tekan Escape.
* CartIndicator: diletakkan di samping menu navigasi.
* Tinggi 76px. Latar --paper, posisi sticky top 0, z-index 100.
* Saat scroll lebih dari 8px: border-bottom 1px --line muncul transisi 150ms.
* Halaman aktif ditandai garis bawah 1.5px --ink dan `aria-current="page"`.

Mobile dan tablet (< 1024px):
* Kiri: merek. Kanan: CartIndicator dan toggle burger 44x44px. Tinggi navbar 60px.
* Toggle burger: 3 garis baris icon SVG/CSS yang beranimasi membentuk silang "X" saat aktif.
* Drawer mobile: panel latar --paper di bawah navbar. Menampilkan tautan utama Fraunces 1.5rem (tinggi 64px, dipisahkan garis 1px --line) dan sub-kelompok Info (Cara Pesan, Kontak). Menutup saat tautan diklik, toggle diklik, atau tombol Escape ditekan.

##### 4.2 Cart Indicator (CartIndicator.astro)
* Terpasang di navbar pada desktop maupun mobile.
* Ikon SVG troli keranjang belanja dengan stroke-width 1.7.
* Label teks "Keranjang" (hanya tampil di desktop, disembunyikan di layar mobile).
* Badge counter melingkar: diameter 22px, border-radius 50%, latar `--paper-deep`, teks `--ink`, font tabular 0.75rem.
* Terhubung secara reaktif ke Nano Stores `$cart`: badge otomatis memperbarui angka saat item ditambah/diubah/dihapus, dan memperbarui `aria-label` ramah pembaca layar (misal: "Keranjang, 2 item").

##### 4.3 Floating WhatsApp Button (FloatingWhatsApp.astro)
* Tombol aksi mengambang melingkar warna hijau resmi WhatsApp `#25D366` (hover `#20BA5C`, active `#1E9E4F`) di pojok kanan bawah.
* Dimensi responsif:
  - Desktop & Tablet (>= 640px): FAB 58x58px, ikon SVG 32x32px, posisi `right: 24px; bottom: 24px`.
  - Mobile (< 640px): FAB 52x52px, ikon SVG 28x28px, posisi `right: 16px; bottom: calc(16px + env(safe-area-inset-bottom, 0px))` agar proporsional di layar ponsel dan tidak menutupi area konten utama.
* z-index: 85 (berada di bawah drawer menu z-index 100).
* Ikon: SVG resmi WhatsApp warna putih bersih dengan outline balon chat dan siluet gagang telepon.
* Aksesibilitas: teks tersembunyi pembaca layar `<span class="sr-only">Hubungi via WhatsApp</span>`, `aria-label="Chat WhatsApp Toko Bunga"`, dan atribut `title="Chat via WhatsApp"`.
* Bayangan lembut: `box-shadow: 0 4px 16px rgba(18, 140, 126, 0.35), 0 2px 4px rgba(0, 0, 0, 0.12)`.
* Efek transisi hover: `transform: translateY(-3px) scale(1.02)`.
* Aktif di seluruh halaman (baik desktop maupun mobile).
* Dilengkapi atribut tracking `data-cta-location="floating-button"` dan `data-wa-topic={topic}`.

#### 5. Beranda: Detail Section
##### 5.1 Hero
* Grid 12 kolom di desktop (gap 48px). Teks di kolom 1 sampai 7, rata kiri.
* Sisi kanan (kolom 8 sampai 12): panggung visual buket bunga transparan (`hero-bouquet.png`), dimuat eager (`fetchpriority="high"`), mengambang langsung di atas kanvas krem tanpa box container.
* Headline teks dengan frasa penekanan miring `Fraunces italic`, teks pendukung (maksimum 44ch), dan tombol tunggal utama [Pesan via WhatsApp] (size-hero).
* Mobile: tata letak bertumpuk, teks di atas dan gambar buket di bawah. Headline dan tombol utama terlihat di layar pertama HP 360x740 dan 390x844 tanpa scroll.

##### 5.2 Koleksi (Tiga Kategori Asimetris)
* Komposisi asimetris dengan foto editorial kategori (buket, bunga meja, papan bunga).
* Desktop: Buket menempati kolom 1-7 (tinggi 440px), Bunga Meja menempati kolom 8-12 baris 1 (tinggi 200px), Papan Bunga menempati kolom 8-12 baris 2 (tinggi 200px).
* Tautan sekunder per kategori menuju rute `/koleksi?kategori={slug}`.

##### 5.3 Acara (Indeks Tipografi)
* Enam baris penuh lebar tanpa foto, dipisahkan garis tipis 1px --line.
* Desktop: grid 2 kolom dengan gap 32px. Nama acara di kiri (--font-index), kalimat pengantar di tengah, glyph panah di kanan.
* Hover baris: warna nama acara dan panah berubah menjadi --clay, panah bergeser 4px ke kanan.

##### 5.4 Hadiah (Teaser)
* Dua kolom di desktop (kolom 1-5 foto, kolom 6-12 teks). Foto berbingkai radius organik.
* Teks pengantar dan tautan sekunder [Lihat Paket Hadiah] menuju `/hadiah`.

##### 5.5 Cara Pesan Ringkas
* Empat langkah alur pemesanan dalam susunan grid horizontal 4 kolom di desktop (2 kolom di tablet, 1 kolom di mobile).
* Nomor langkah Fraunces 1.75rem, judul, dan kalimat singkat, dipisahkan garis pembatas atas.
* Tautan sekunder [Baca Selengkapnya] menuju `/cara-pesan`.

##### 5.6 Tentang berflower
* Dua kolom editorial di atas kanvas krem (kolom 1-4 judul h2, kolom 5-12 teks narasi). Tanpa kartu berlapis, menegaskan konsep buatan ENLESWEB.

##### 5.7 CTA Penutup
* Blok warna penuh `--paper-deep` selebar container, padding vertikal 64px (mobile) dan 80px (desktop).
* Menampilkan judul ajakan, teks pendukung, dan tombol [Ceritakan Acaramu via WhatsApp].

#### 6. Koleksi: Daftar Produk, Filter, dan Aksi
##### 6.1 Filter Kategori & Acara
* Baris tab kategori di dalam container berpembatas halus: Semua, Buket, Bunga Meja, Papan Bunga.
* Tab aktif: ditandai atribut `aria-current="true"`, warna teks --paper, latar belakang --clay, bobot 600.
* Mobile: tab dapat digulir horizontal secara mandiri (overflow-x: auto) tanpa membuat halaman scroll horizontal.
* Baris notifikasi acara aktif (Active Occasion Bar): muncul dinamis jika parameter URL `?acara=...` aktif, menampilkan label acara dan tombol [Tampilkan Semua].
* Element live announcer `aria-live="polite"` untuk membacakan perubahan filter ke screen reader.

##### 6.2 Daftar Produk (ProductItem)
* Desktop: grid 3 kolom, gap 40px horizontal dan 32px vertikal. Tablet: 2 kolom. Mobile: baris fleksibel dengan thumbnail foto 100x125px di kiri dan detail di kanan.
* Setiap kartu produk: foto berformat WebP dengan sudut organik, nama produk (h3), deskripsi produk (clamp 2 baris), harga dengan tabular-nums, dan aksi ganda:
  1. TextLink: [Pesan lewat WhatsApp] (membuka chat WhatsApp langsung untuk produk ini).
  2. AddToCartButton: [Tambah ke keranjang] (memasukkan produk ke keranjang belanja Nano Stores).

#### 7. Hadiah: Baris Editorial dan Item Tambahan
* DemoNote di atas daftar paket.
* Tiga paket hadiah dalam baris editorial horizontal (GiftRow): foto berasio 4:5 di kiri, nama paket, deskripsi, harga, tautan [Pesan Paket Ini], dan tombol [Tambah ke keranjang].
* Grid 2 kolom di desktop untuk tambahan dan kartu ucapan:
  - Kolom kiri: daftar item tambahan (boneka wisuda kecil Rp50.000, cokelat batang Rp30.000) dengan garis pemisah tipis.
  - Kolom kanan: penjelasan kartu ucapan (maksimal 150 karakter).
* Tombol aksi penutup [Tanya Paket Hadiah via WhatsApp] (size-hero).

#### 8. Rangkai Buket (BouquetBuilder.astro)
* Halaman konfigurator interaktif multi-langkah di `/rangkai-buket`.
* Layout: 12 kolom di desktop (kolom 1-8 form configurator, kolom 9-12 sticky sidebar estimasi harga).
* Kelompok pilihan:
  1. Bunga utama: daftar pilihan bunga (Mawar merah, Bunga matahari, Tulip, Peony) dengan nama, harga per tangkai, dan stepper input angka kuantitas (0-99).
  2. Bunga pelengkap: daftar pilihan filler (Baby's breath, Eucalyptus, Statice) dengan harga per ikat dan stepper input kuantitas.
  3. Kertas pembungkus: pilihan radio button dengan lingkaran visual swatch warna (Krem, Merah muda, Kertas kraft). Swatch terpilih memiliki outline tegas 2px.
  4. Pita: pilihan radio button dengan lingkaran visual swatch warna (Krem, Merah muda, Hijau).
  5. Pembuat kartu ucapan: input Untuk, Dari, textarea Pesan (maks 150 char), dan dropdown pilihan font (Serif, Serif miring, Sans).
  6. Pratinjau kartu ucapan (Card Preview): boks berlatar `--paper-light` dengan radius organik lembut yang memperbarui teks dan font secara langsung saat pengguna mengetik.
* Sticky summary box: latar `--paper-deep`, label estimasi harga, angka harga tabular besar, tombol aksi [Tambah buket ke keranjang], dan baris pesan status (validasi setidaknya 1 bunga utama, atau konfirmasi berhasil).

#### 9. Keranjang Belanja (keranjang.astro)
* Halaman keranjang belanja reaktif di `/keranjang` menggunakan Nano Stores persistent store.
* Layout: 2 kolom di desktop (daftar item 7fr, sticky sidebar 5fr).
* Tampilan kosong (Empty State): saat keranjang 0 item, menampilkan judul "Keranjangmu masih kosong.", penjelasan singkat, dan dua tautan navigasi ke `/koleksi` dan `/rangkai-buket`.
* Komponen baris keranjang (Cart Line):
  - Nama produk atau "Buket racikan sendiri".
  - Untuk buket kustom: rincian daftar bunga utama, pelengkap, kertas, dan pita.
  - Harga satuan dan total harga baris (tabular-nums).
  - Tombol [Hapus item].
  - Stepper kuantitas: tombol minus, input angka (1-99), dan tombol plus. Tombol otomatis disabled saat mencapai batas minimum 1 atau maksimum 99.
  - Editor kartu ucapan per item: accordion native `<details>` yang memuat formulir kartu ucapan perorangan beserta box live preview kartu.
* Sidebar ringkasan belanja (Cart Summary):
  - Latar `--paper-deep`, sticky di desktop.
  - Subtotal estimasi belanja otomatis.
  - Formulir pemesanan terstruktur: field Nama (wajib), field Acara (opsional), field Tanggal (wajib, minimum hari ini), field Cara terima (pilihan radio: Diantar di Venice, Ambil sendiri).
  - Tombol utama [Lanjutkan ke WhatsApp] (merakit seluruh item keranjang dan isian form ke chat WhatsApp).
  - Tombol [Kosongkan keranjang] untuk menghapus seluruh belanjaan.
  - Catatan mode demo bahwa pesan dikirim ke ENLESWEB.

#### 10. Cara Pesan, Kontak, 404
##### 10.1 Cara Pesan
* Empat langkah vertikal alur pemesanan lengkap dengan nomor urut besar Fraunces.
* Form pesanan langsung (OrderForm) bagi pengunjung yang ingin memesan satu item atau konsultasi langsung tanpa alur keranjang.
* Accordion pertanyaan umum (FaqList) menggunakan `<details>` dan `<summary>` dengan ikon plus/silang native tanpa JS tambahan.

##### 10.2 Kontak
* Blok informasi kontak: WhatsApp, jam operasional, area antar, dan studio Venice.
* Tautan Instagram dan embed iframe Google Maps interaktif berbingkai halus dengan tombol link [Buka di Google Maps].
* Blok "Tentang contoh ini" dengan tombol [Hubungi ENLESWEB] (size-hero).

##### 10.3 Halaman 404
* Card minimalis bergaris batas tipis di tengah halaman dengan judul besar "Halaman tidak ditemukan", kalimat ramah, dan tautan [Kembali ke Beranda].

#### 11. Footer
* Latar `--leaf` (hijau tua) dari ujung ke ujung layar, teks `--paper`.
* Kolom 1 (Brand & Medsos): Merek `berflower`, tagline, dan 3 tombol media sosial (Instagram, TikTok, Pinterest) berbingkai ikon SVG.
* Kolom 2 (Lokasi & Studio Venice): Label `Venice, Italia`, alamat lengkap `Calle Larga San Marco, 412, 30124 Venezia VE, Italia`, iframe embed peta Google Maps interaktif, dan tombol pin [Buka di Google Maps].
* Kolom 3 (Menu Navigasi): 5 menu navigasi lengkap (`Koleksi`, `Hadiah`, `Buat Buket`, `Cara Pesan`, `Kontak`).
* Baris tengah: Catatan konsep ENLESWEB dengan hyperlink jika URL tersedia.
* Baris bawah: Garis batas halus dan teks `Dibuat oleh ENLESWEB`.

#### 12. Perlakuan Foto
* Foto produk dan paket berformat WebP responsif melalui Astro Image API (`astro:assets`) dan engine Sharp.
* Hero bouquet menggunakan aset transparan `hero-bouquet.png` dengan pemuatan eager (`fetchpriority="high"`).
* Seluruh foto lainnya dimuat secara lazy decoding async.
* Sumber dan lisensi foto tercatat rapi di `CREDITS.md`.

#### 13. Interaksi, Animasi, dan Motion Control
##### 13.1 Animasi Diizinkan
1. Transisi hover tombol dan tautan: warna dan translasi 150ms.
2. Spring curve: `--ease-spring: cubic-bezier(0.16, 1, 0.3, 1)`.
3. Keyframe hero: `@keyframes heroFadeUp` (teks dan CTA) dan `@keyframes heroFadeScale` (visual buket).
4. Keyframe card: `@keyframes cardFadeUp`.
5. Crossfade antar halaman: `@view-transition { navigation: auto; }` didukung Astro `<ClientRouter />`.

##### 13.2 Animasi Dilarang
* Scroll-jacking, parallax bertingkat yang membebani browser, carousel otomatis bergerak sendiri, dan animasi berulang yang mengganggu keterbacaan.

##### 13.3 Aksesibilitas Motion
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  @view-transition {
    navigation: none;
  }
}
```

#### 14. Aksesibilitas Visual
* Seluruh kontras warna memenuhi standar WCAG AA (teks utama > 13:1, teks sekunder > 5:1).
* Indikator fokus keyboard: `outline: 2px solid var(--ink); outline-offset: 3px`.
* Ukuran area sentuh (tap target) minimal 44x44px pada seluruh kontrol interaktif.
* Input form disetel 16px font-size untuk mencegah auto-zoom di browser mobile iOS.

=== BATAS AKHIR FILE: DESIGN.md ===

---

## DOKUMEN 3: CONTENT.md (Website Copy Specification)

=== BATAS AWAL FILE: CONTENT.md ===

# CONTENT.md - berflower
Versi 1.2 (As-Is Website Copy Specification)

Dokumen ini adalah satu-satunya sumber teks, harga, label tombol, dan pesan WhatsApp yang digunakan dan ditampilkan di website berflower. Teks di dalam kurung siku [...] adalah label tombol. Teks di dalam kurung kurawal {...} adalah variabel. Tidak ada em dash di teks pelanggan. Seluruh isi bisnis di dokumen ini berstatus DEFAULT (konsep rekaan toko bunga di Venice, Italia).

#### 1. Aturan Keras Copywriting
* Concrete > Clever. Information > Marketing. Description > Slogan.
* Sebut fakta: jenis bunga, jumlah tangkai, isi paket, komponen racikan buket. Bukan perasaan.
* Tanpa eyebrow di atas heading. Tanpa tagline tambahan.
* Tanpa kata sifat promosi dan klise toko bunga: indah, memukau, sempurna, istimewa, tak terlupakan, dirangkai dengan cinta, segar setiap hari.
* Tanpa angka atau klaim yang tidak bisa dibuktikan.
* Tanpa tanda em dash pada teks pelanggan. Gunakan titik, koma, atau struktur kalimat baru.

#### 2. Meta Halaman (DEFAULT)
Bahasa dokumen: id. Open Graph title sama dengan Title, Open Graph description sama dengan Meta description.

| Halaman | Title | Meta description |
| ------ | ------ | ------ |
| Beranda | berflower | Buket, bunga meja, papan bunga |
| Koleksi | Koleksi bunga | berflower |
| Hadiah | Paket hadiah | berflower |
| Rangkai Buket | Rangkai buket | Susun bunga utama, pelengkap, kertas, dan pita pilihanmu. |
| Keranjang | Keranjang pesanan | Periksa pesanan dan lengkapi detail sebelum membuka WhatsApp. |
| Cara Pesan | Cara pesan | berflower |
| Kontak | Kontak dan lokasi | berflower |
| 404 | Halaman tidak ditemukan | berflower |

#### 3. Elemen Bersama
##### 3.1 Navbar
* Merek: berflower
* Tautan utama: Koleksi, Hadiah, Buat Buket
* Menu dropdown Info:
  * Label: Info
  * Submenu: Cara Pesan, Kontak
* Indikator keranjang (CartIndicator):
  * Tautan: /keranjang
  * Label desktop: Keranjang
  * Aksesibilitas pembaca layar: Keranjang, {jumlah} item
* Label menu mobile untuk pembaca layar: Buka menu dan Tutup menu
* Skip link: Lewati ke konten

##### 3.2 Floating WhatsApp Button (Seluruh Halaman)
* Tombol FAB mengambang melingkar warna hijau WhatsApp (#25D366) di pojok kanan bawah (58x58px pada desktop/tablet, 52x52px pada mobile < 640px dengan safe-area-inset).
* Aksesibilitas:
  * Teks tersembunyi pembaca layar: Hubungi via WhatsApp
  * Label aria: Chat WhatsApp Toko Bunga
  * Judul tooltip: Chat via WhatsApp
* Topik dinamis sesuai halaman aktif: pesanan bunga, tanya produk, atau pertanyaan umum.
* Lokasi tracking: floating-button

##### 3.3 Footer
* Merek: berflower
* Tagline: Buket, bunga meja, papan bunga, dan hadiah.
* Media Sosial: Instagram, TikTok, Pinterest (tautan ke akun media sosial)
* Lokasi & Studio:
  * Kota: Venice, Italia
  * Alamat: Calle Larga San Marco, 412, 30124 Venezia VE, Italia
  * Peta: Embed peta Google Maps interaktif
  * Tombol peta: [Buka di Google Maps]
* Navigasi: Koleksi, Hadiah, Buat Buket, Cara Pesan, Kontak
* Catatan konsep: Konsep website buatan ENLESWEB. Toko, produk, dan harga di sini adalah contoh.
* Tautan: ENLESWEB (aktif jika site.enleswebUrl terisi; jika kosong, teks biasa tanpa tautan)
* Baris bawah: Dibuat oleh ENLESWEB

#### 4. Beranda
##### 4.1 Hero
* Headline (h1): Buket dan hadiah bunga, dipesan lewat WhatsApp. (Frasa "dipesan lewat WhatsApp" dicetak miring).
* Teks pendukung: Pilih dari koleksi, ceritakan acaranya, dan kami siapkan untuk diantar di Venice atau diambil sendiri.
* Tombol utama: [Pesan via WhatsApp]
  * Topik: pesanan bunga
  * Lokasi: hero
* Foto visual: hero-bouquet (aset transparan buket mawar merah muda dan peony)

##### 4.2 Koleksi
Judul section: Koleksi bunga
Tiga kategori (nama, deskripsi, tautan):
1. Buket. Bunga rangkai genggam untuk diberikan langsung. Tautan: [Lihat Buket] menuju /koleksi?kategori=buket
2. Bunga Meja. Rangkaian dalam vas atau keranjang untuk ditaruh di meja. Tautan: [Lihat Bunga Meja] menuju /koleksi?kategori=bunga-meja
3. Papan Bunga. Untuk ucapan selamat dan duka cita, dikirim ke lokasi acara. Tautan: [Lihat Papan Bunga] menuju /koleksi?kategori=papan-bunga

##### 4.3 Acara
Judul section: Untuk acara apa?
Baris indeks (nama, satu kalimat), semuanya tautan ke /koleksi?acara={slug}:

| Slug | Nama | Kalimat |
| ------ | ------ | ------ |
| ulang-tahun | Ulang tahun | Buket dan bunga meja untuk yang berulang tahun. |
| wisuda | Wisuda | Buket dan hadiah untuk yang diwisuda. |
| anniversary | Anniversary | Buket mawar dan lily. |
| ucapan-selamat | Ucapan selamat | Papan bunga untuk pembukaan usaha atau pelantikan. |
| duka-cita | Duka cita | Papan bunga dan rangkaian putih. |
| hari-ibu | Hari Ibu | Bunga meja dan hampers untuk ibu. |

##### 4.4 Hadiah
* Judul: Bunga dengan hadiah tambahan.
* Teks: Buket bisa dipadukan dengan cokelat, boneka wisuda, atau hampers. Kartu ucapan sudah termasuk.
* Tautan: [Lihat Paket Hadiah] menuju /hadiah
* Foto: gift-cokelat

##### 4.5 Cara Pesan Ringkas
Judul section: Cara pesan
Empat langkah (judul dan satu kalimat):
1. Pilih pesanan. Lihat koleksi atau paket hadiah.
2. Ceritakan lewat form. Isi acara, tanggal, dan cara terima.
3. Konfirmasi. Kami balas dengan harga akhir dan jadwal.
4. Terima pesanan. Diantar di Venice atau diambil sendiri.
Tautan: [Baca Selengkapnya] menuju /cara-pesan

##### 4.6 Tentang berflower
* Judul: Tentang berflower
* Paragraf 1: berflower adalah toko bunga dan hadiah konsep di Venice. Setiap buket disusun sesuai pesanan, jadi jenis bunga dan warna bisa disesuaikan dengan acara dan anggaranmu.
* Paragraf 2: Website ini dibuat ENLESWEB sebagai contoh tingkat Growth untuk toko bunga.

##### 4.7 CTA Penutup
* Judul: Mau pesan bunga untuk sebuah acara?
* Teks pendukung: Ceritakan acaranya. Kami bantu pilihkan bunganya.
* Tombol: [Ceritakan Acaramu via WhatsApp]
  * Topik: bunga untuk sebuah acara
  * Lokasi: home_final

#### 5. Koleksi
* Judul halaman (h1): Koleksi bunga
* Pengantar: Harga bisa berubah mengikuti ketersediaan bunga. Kami konfirmasi lewat WhatsApp sebelum pesanan disiapkan.
* Catatan penanda konsep (DemoNote): Konsep website buatan ENLESWEB. Toko, produk, dan harga di sini adalah contoh.
* Label filter kategori: Semua, Buket, Bunga Meja, Papan Bunga
* Catatan filter acara aktif: Menampilkan untuk acara: {acara}.
* Tombol hapus filter acara: [Tampilkan Semua]
* Pengumuman pembaca layar saat filter berubah: Menampilkan {jumlah} produk.
* Aksi per produk:
  * Tautan WhatsApp: [Pesan lewat WhatsApp] (Topik: {nama produk}, Lokasi: product_{id})
  * Tombol keranjang: [Tambah ke keranjang] (Status sementara: [Ditambahkan], Lokasi: product_{id})

##### Daftar Produk (format: id, kategori, nama, deskripsi, harga, acara)
| id | Kategori | Nama | Deskripsi | Harga | Acara (slug) |
| ------ | ------ | ------ | ------ | ------ | ------ |
| buket-mawar | buket | Buket Mawar Merah Muda | 10 tangkai mawar merah muda, dibungkus kertas krem. | Rp185.000 | ulang-tahun, wisuda, anniversary |
| buket-gerbera | buket | Buket Gerbera Kuning | 7 tangkai gerbera dengan daun pelengkap. | Rp150.000 | ulang-tahun, wisuda |
| buket-lily | buket | Buket Lily Putih | 5 tangkai lily putih, dibungkus kertas krem. | Rp240.000 | anniversary, hari-ibu, duka-cita |
| meja-krisan | bunga-meja | Bunga Meja Krisan | Krisan putih dan daun hijau dalam vas kaca. | Rp175.000 | ucapan-selamat, duka-cita |
| meja-campur | bunga-meja | Bunga Meja Campur | Mawar, anyelir, dan gerbera dalam keranjang rotan. | Rp225.000 | ulang-tahun, ucapan-selamat, hari-ibu |
| papan-selamat | papan-bunga | Papan Bunga Ucapan Selamat | Papan bunga warna cerah dengan tulisan sesuai permintaan. | Rp650.000 | ucapan-selamat |
| papan-duka | papan-bunga | Papan Bunga Duka Cita | Papan bunga putih dan hijau dengan tulisan sesuai permintaan. | Rp600.000 | duka-cita |

Format harga di layar: Rp{angka dengan titik ribuan}, tanpa spasi.

#### 6. Hadiah
* Judul halaman (h1): Paket hadiah
* Pengantar: Bunga yang dipadukan dengan hadiah lain. Kartu ucapan sudah termasuk di semua paket.
* Catatan penanda konsep (DemoNote): Konsep website buatan ENLESWEB. Toko, produk, dan harga di sini adalah contoh.

##### Paket (id, nama, deskripsi, harga)
| id | Nama | Deskripsi | Harga |
| ------ | ------ | ------ | ------ |
| gift-cokelat | Buket dan Cokelat | Buket mawar 10 tangkai dengan 2 batang cokelat. | Rp275.000 |
| gift-wisuda | Buket Wisuda | Buket gerbera dengan boneka wisuda kecil. | Rp225.000 |
| gift-hampers | Hampers Bunga | Bunga meja kecil, teh celup, dan kue kering dalam satu kotak. | Rp320.000 |

Aksi per paket:
* Tautan WhatsApp: [Pesan Paket Ini] (Topik: paket {nama}, Lokasi: gift_{id})
* Tombol keranjang: [Tambah ke keranjang] (Status sementara: [Ditambahkan], Lokasi: gift_{id})

##### Tambahan
Judul: Bisa ditambahkan ke buket mana pun
* Boneka wisuda kecil: Rp50.000
* Cokelat batang: Rp30.000

##### Kartu Ucapan
* Judul: Kartu ucapan
* Teks: Tulis isi kartunya saat memesan, maksimal 150 karakter.

##### CTA
* Tombol: [Tanya Paket Hadiah via WhatsApp]
  * Topik: paket hadiah
  * Lokasi: gifts_cta

#### 7. Rangkai Buket (Bouquet Builder)
* Judul halaman (h1): Rangkai buket
* Pengantar: Susun bunga dan pelengkap pilihanmu. Harga di halaman ini adalah contoh dan akan dikonfirmasi lewat WhatsApp.
* Pesan noscript: Gunakan JavaScript di browser untuk menyusun buket dan menambahkannya ke keranjang.

##### 7.1 Pilihan Komponen dan Harga
1. Bunga utama (label: Bunga utama, bantuan: Pilih jumlah untuk setiap jenis bunga.):
   * Label jumlah: Jumlah
   * Mawar merah (id: mawar-merah): Rp20.000 per tangkai
   * Bunga matahari (id: sunflower): Rp25.000 per tangkai
   * Tulip (id: tulip): Rp35.000 per tangkai
   * Peony (id: peony): Rp50.000 per tangkai
2. Bunga pelengkap (label: Bunga pelengkap, bantuan: Tambahkan filler sesuai komposisi yang kamu inginkan.):
   * Label harga: per ikat
   * Baby's breath (id: baby-breath): Rp15.000 per ikat
   * Eucalyptus (id: eucalyptus): Rp12.000 per ikat
   * Statice (id: statice): Rp10.000 per ikat
3. Kertas pembungkus (label: Kertas pembungkus):
   * Krem (id: krem, warna: #F6F0E6): Rp10.000
   * Merah muda (id: soft-pink, warna: #E8C6C4): Rp15.000
   * Kertas kraft (id: kraft, warna: #C9A878): Rp12.000
4. Pita (label: Pita):
   * Krem (id: cream-ribbon, warna: #F6F0E6): Rp5.000
   * Merah muda (id: rose-ribbon, warna: #D89A9A): Rp5.000
   * Hijau (id: leaf-ribbon, warna: #697B62): Rp5.000
5. Komposisi awal default: 1 Mawar merah, kertas Krem, pita Krem (estimasi awal: Rp35.000).

##### 7.2 Pembuat Kartu Ucapan
* Judul: Kartu ucapan
* Bantuan: Isi kartu untuk buket ini. Pesan maksimal 150 karakter.
* Field label:
  * Untuk (card-to, maksimal 80 karakter)
  * Dari (card-from, maksimal 80 karakter)
  * Pesan (card-message, maksimal 150 karakter)
  * Gaya tulisan (card-font): pilihan Serif, Serif miring, Sans
* Pratinjau kartu (Card Preview): Pratinjau kartu, Untuk, Dari

##### 7.3 Aksi dan Feedback
* Label estimasi: Estimasi harga
* Tombol: [Tambah buket ke keranjang]
* Nama item saat masuk keranjang: Buket racikan sendiri
* Validasi: Pilih setidaknya satu bunga utama.
* Status sukses: Buket ditambahkan ke keranjang.

#### 8. Keranjang Belanja (Cart)
* Judul halaman (h1): Keranjang
* Pengantar: Periksa pesanan dan lengkapi detail sebelum membuka WhatsApp.
* Pesan noscript: Gunakan JavaScript di browser untuk memuat dan mengubah isi keranjang.

##### 8.1 Tampilan Kosong (Empty State)
* Judul: Keranjangmu masih kosong.
* Teks: Pilih produk atau rangkai buket untuk mulai menyusun pesanan.
* Tautan aksi: [Lihat koleksi] (ke /koleksi) dan [Rangkai buket] (ke /rangkai-buket)

##### 8.2 Baris Item Belanja
* Label per item: per item
* Aksi kuantitas: [Kurangi jumlah] (-), [Tambah jumlah] (+), kuantitas input
* Aksi hapus: [Hapus item]
* Konfirmasi hapus: Hapus item ini dari keranjang?
* Total harga baris: Jumlah harga

##### 8.3 Editor Kartu Ucapan per Item
* Accordion summary: Kartu ucapan untuk item ini
* Bantuan: Pesan maksimal 150 karakter.
* Field: Untuk, Dari, Pesan, Gaya tulisan (Serif, Serif miring, Sans)
* Pratinjau kartu: Pratinjau kartu, Untuk, Dari

##### 8.4 Ringkasan dan Formulir Pemesanan
* Judul sidebar: Detail pesanan
* Subtotal: Subtotal estimasi
* Catatan estimasi: Harga akhir dan biaya antar dikonfirmasi lewat WhatsApp.
* Field formulir:
  * Nama: Nama (wajib)
  * Acara: Acara (opsional, placeholder: Pilih acara (opsional))
  * Tanggal: Tanggal dibutuhkan (wajib, minimal hari ini)
  * Cara terima: Cara terima (pilihan radio: Diantar di Venice, Ambil sendiri)
* Tombol checkout: [Lanjutkan ke WhatsApp]
  * Topik: ringkasan pesanan
  * Lokasi: cart_checkout
* Tombol reset: [Kosongkan keranjang]
* Catatan demo: Di contoh ini, pesan dikirim ke ENLESWEB.
* Pesan kesalahan:
  * Tambahkan item sebelum melanjutkan.
  * Nomor WhatsApp belum tersedia.

#### 9. Cara Pesan
Judul halaman (h1): Cara pesan

##### 9.1 Empat Langkah
1. Judul: Pilih pesanan. Isi: Lihat koleksi atau paket hadiah. Belum tahu mau pilih apa? Ceritakan acaranya, kami bantu pilihkan.
2. Judul: Ceritakan lewat form. Isi: Isi form di bawah. Form ini menyusun pesan WhatsApp, kamu tinggal mengirimnya.
3. Judul: Konfirmasi. Isi: Kami membalas dengan harga akhir, ongkir, jadwal, dan cara pembayaran.
4. Judul: Terima pesanan. Isi: Pesanan diantar ke alamatmu di Venice atau diambil sendiri.

##### 9.2 Form Pesanan
Judul section: Form pesanan

| Field | Label | Tipe | Wajib | Catatan |
| ------ | ------ | ------ | ------ | ------ |
| nama | Nama | teks | ya | Input teks standar |
| pesanan | Pesanan | pilihan | ya | Placeholder: "Pilih pesanan...", dikelompokkan optgroup "Koleksi Bunga" (7 produk) dan "Paket Hadiah" (3 paket), serta opsi "Belum tahu, mau konsultasi" |
| acara | Acara | pilihan | tidak | Placeholder: "Pilih acara (opsional)...", opsi 6 acara dan "Lainnya" |
| tanggal | Tanggal dibutuhkan | tanggal | ya | Teks bantu: Pesan jauh hari untuk tanggal tertentu. |
| terima | Cara terima | pilihan radio | ya | Opsi: Diantar di Venice, Ambil sendiri |
| kartu | Isi kartu ucapan | teks panjang | tidak | Maksimal 150 karakter |
| catatan | Catatan | teks panjang | tidak |  |

Pesan kesalahan:
* Nama kosong: Isi nama kamu.
* Pesanan kosong: Pilih pesanan.
* Tanggal kosong: Pilih tanggal.
* Cara terima kosong: Pilih cara terima.

Tombol kirim: [Kirim Pesanan via WhatsApp] (Lokasi: form)
Catatan di bawah tombol: Form ini tidak menyimpan data. Pesan dikirim lewat WhatsApp.
Catatan demo: Di contoh ini, pesan dikirim ke ENLESWEB.

##### 9.3 Pertanyaan (FAQ)
Judul section: Pertanyaan
1. Q: Apakah jenis bunga bisa diganti? A: Bisa. Jenis dan warna disesuaikan dengan ketersediaan, dan kami konfirmasi dulu lewat WhatsApp sebelum disiapkan.
2. Q: Berapa lama pesanan disiapkan? A: Tergantung jenis pesanan dan tanggalnya. Kami kabari saat konfirmasi.
3. Q: Bisa kirim ke luar Venice? A: Saat ini area antar adalah Venice. Untuk area lain, tanyakan lewat WhatsApp.
4. Q: Bagaimana cara membayar? A: Cara pembayaran kami kirim saat konfirmasi pesanan.

#### 10. Kontak
Judul halaman (h1): Kontak dan lokasi

Blok informasi (judul dan isi):
* WhatsApp: Tombol [Chat via WhatsApp] (Topik: pertanyaan umum, Lokasi: contact).
* Jam buka: Setiap hari, 09.00 sampai 19.00 CET.
* Area antar: Venice (Venezia) dan sekitarnya.
* Ambil sendiri: Calle Larga San Marco, 412, Venezia. Detail titik kami kirim setelah pesanan dikonfirmasi.
* Instagram: Tautan [Lihat di Instagram]
* Peta: Tautan [Buka di Google Maps]

Blok "Tentang contoh ini":
* Judul: Tentang contoh ini
* Teks: berflower adalah konsep website buatan ENLESWEB. Toko, produk, dan harga di sini adalah contoh. Mau website seperti ini untuk bisnismu?
* Tombol: [Hubungi ENLESWEB] (Lokasi: contact_enlesweb)

#### 11. Halaman 404
* Judul (h1): Halaman tidak ditemukan
* Teks: Alamat yang kamu buka tidak ada.
* Tautan: [Kembali ke Beranda] (menuju /)

#### 12. Pesan WhatsApp (Demo Mode & Mode Toko)
Website mendukung dua konfigurasi pesan WhatsApp berdasarkan nilai `site.demoMode`:

##### 12.1 Demo Mode (site.demoMode = true, Aktif Saat Ini)
Nomor tujuan: site.enleswebWhatsappNumber

Format umum klik tombol WhatsApp:
`Halo ENLESWEB, saya sedang melihat contoh website berflower, halaman {halaman}. Saya mau tanya tentang pembuatan website.`
Nilai {halaman}: Beranda, Koleksi, Hadiah, Rangkai Buket, Keranjang, Cara Pesan, atau Kontak.

Format tombol Hubungi ENLESWEB di halaman Kontak:
`Halo ENLESWEB, saya sedang melihat contoh website berflower, halaman Kontak. Saya mau tanya tentang pembuatan website.`

Format pesan form pesanan (/cara-pesan):
```text
Halo ENLESWEB, saya mencoba form pesanan di contoh website berflower.

Nama: {nama}
Pesanan: {pesanan}
Acara: {acara}
Tanggal dibutuhkan: {tanggal}
Cara terima: {terima}
Isi kartu ucapan: "{kartu}"
Catatan: {catatan}

Saya mau tanya tentang pembuatan website seperti ini.
```
*(Baris untuk field opsional yang kosong tidak dicetak)*

Format pesan ringkasan keranjang (/keranjang):
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

##### 12.2 Mode Toko Konsep (site.demoMode = false)
Nomor tujuan: site.shopWhatsappNumber
* Format umum klik tombol: `Halo berflower, saya mau tanya tentang {topik}.`
* Format header form pesanan & keranjang: `Halo berflower, saya mau pesan.` (tanpa kalimat penutup ENLESWEB).
* Tombol [Hubungi ENLESWEB] pada halaman Kontak tetap mengarah ke nomor ENLESWEB dengan pesan konteks portofolio.

##### 12.3 Tabel Titik Sentuh WhatsApp
| Lokasi tombol | data-cta-location | Topik |
| ------ | ------ | ------ |
| Floating button (seluruh halaman) | floating-button | (dinamis per halaman) |
| Hero Beranda | hero | pesanan bunga |
| CTA penutup Beranda | home_final | bunga untuk sebuah acara |
| Produk (Koleksi) | product_{id} | {nama produk} |
| Tambah keranjang Produk | product_{id} | - |
| Paket hadiah | gift_{id} | paket {nama paket} |
| Tambah keranjang Paket | gift_{id} | - |
| CTA Hadiah | gifts_cta | paket hadiah |
| Checkout Keranjang | cart_checkout | ringkasan pesanan |
| Form pesanan | form | form pesanan |
| Kontak: WhatsApp | contact | pertanyaan umum |
| Kontak: Hubungi ENLESWEB | contact_enlesweb | pembuatan website |

#### 13. Daftar Aset Foto
| id | Dipakai di | Format / Rasio | Deskripsi Foto |
| ------ | ------ | ------ | ------ |
| hero-bouquet | Hero Beranda | PNG/WebP transparan | Buket mawar merah muda dan peony berbungkus kertas kraft dengan pita sutra |
| buket-mawar | Koleksi, Kategori Buket | 4:5 JPG/WebP | Buket sepuluh tangkai mawar merah muda |
| buket-gerbera | Koleksi | 4:5 JPG/WebP | Buket gerbera kuning dengan daun pelengkap |
| buket-lily | Koleksi | 4:5 JPG/WebP | Buket lily putih berbungkus kertas krem |
| meja-krisan | Koleksi, Kategori Bunga Meja | 4:5 JPG/WebP | Krisan putih dalam vas kaca |
| meja-campur | Koleksi | 4:5 JPG/WebP | Rangkaian mawar, anyelir, dan gerbera dalam keranjang rotan |
| papan-selamat | Koleksi, Kategori Papan Bunga | 4:5 JPG/WebP | Papan bunga ucapan selamat berwarna cerah |
| papan-duka | Koleksi | 4:5 JPG/WebP | Papan bunga duka cita berwarna putih dan hijau |
| gift-cokelat | Hadiah, Teaser Beranda | 4:5 JPG/WebP | Buket mawar dengan dua batang cokelat |
| gift-wisuda | Hadiah | 4:5 JPG/WebP | Buket gerbera dengan boneka wisuda kecil |
| gift-hampers | Hadiah | 4:5 JPG/WebP | Kotak hampers berisi bunga meja kecil, teh celup, dan kue kering |
| og-image | Open Graph | 1200x630 PNG | Komposisi visual berflower untuk pratinjau media sosial |

#### 14. Larangan Teks
* Jangan menambah kata sifat promosi ("terbaik", "terlaris", "istimewa", "indah", "berkualitas", dan sejenisnya).
* Jangan menambah klaim hasil, angka, atau tahun yang tidak terverifikasi.
* Jangan menambah eyebrow, tagline, atau slogan di luar yang tertulis di sini.
* Jangan menjanjikan durasi persiapan atau pengiriman.
* Jangan menulis testimoni, ulasan, atau kutipan pelanggan.
* Jangan menggunakan tanda em dash pada teks pelanggan. Gunakan titik, koma, atau struktur kalimat baru.
* Jangan menghilangkan penanda konsep di footer, DemoNote, Beranda, dan Kontak.

=== BATAS AKHIR FILE: CONTENT.md ===

---

## DOKUMEN 4: SPEC.md (Technical Architecture & Engineering Specification)

=== BATAS AWAL FILE: SPEC.md ===

# SPEC.md - berflower
Versi 1.2 (Technical Architecture and Implementation Specification)

Dokumen ini membahas arsitektur teknis: stack, struktur file, pemetaan komponen, konfigurasi, skrip klien dan state management, integrasi WhatsApp, SEO, QA teknis, deploy Vercel, dan urutan pengerjaan yang saat ini digunakan dan diimplementasikan pada website berflower. Teks ada di CONTENT.md. Tampilan ada di DESIGN.md. Scope ada di PRD.md. Status: LOCKED, DEFAULT, OPEN.

#### 1. Stack
* Framework: Astro 7.3.5, output: 'static' (LOCKED: Astro)
* Language: TypeScript mode strict (devDependencies: typescript dan @astrojs/check)
* State Management: **Nano Stores** (`nanostores` ^1.5.5, `@nanostores/persistent` ^1.3.5) untuk manajemen state keranjang belanja reaktif client-side yang tersimpan persisten di `localStorage` ('berflower_cart_v1').
* Page Transitions: Astro View Transitions menggunakan `<ClientRouter />` dari `astro:transitions` di `src/layouts/Base.astro`.
* Styling: Vanilla CSS murni dengan custom properties (src/styles/global.css dan scoped styling komponen). Tanpa Tailwind dan tanpa UI framework luar.
* Runtime Engine: Node.js >= 22.12
* Image Processing: Sharp (^0.34.0) via `astro:assets` (format WebP responsif)
* Font: @fontsource-variable/fraunces (termasuk bobot variabel dan gaya miring) dan @fontsource/dm-sans (bobot 400, 500, 600), self-hosted, nol permintaan ke server font eksternal.
* Package manager: npm
* Hosting: Vercel (LOCKED, untuk project demo)

Perintah proyek:
* `npm install`
* `npm run dev` (host 0.0.0.0 port 4322)
* `npm run build` (wajib exit code 0, 0 error, 0 warning)
* `npm run preview`
* `npm run check` (pemeriksaan tipe Astro dan TypeScript)
* `npm run verify` (otomatisasi pengujian QA 9 kriteria)
* `npm run verify:release` (pengujian rilis termasuk ketiadaan placeholder)

#### 2. Struktur File
```
/
├── AGENTS.md
├── PRD.md
├── CONTENT.md
├── DESIGN.md
├── SPEC.md
├── BERFLOWER-DOCS-V1.md
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── vercel.json
├── scripts/
│   ├── make-placeholders.mjs
│   └── verify.mjs            (skrip verifikasi QA otomatis)
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── og-image.png          (CLOSED)
└── src/
    ├── config/
    │   └── site.ts           (konfigurasi bisnis dan studio terpusat)
    ├── content/
    │   └── copy.ts           (seluruh teks, salinan persis CONTENT.md)
    ├── data/
    │   ├── products.ts       (7 produk, selaras CONTENT.md)
    │   ├── gifts.ts          (3 paket dan tambahan, selaras CONTENT.md)
    │   ├── occasions.ts      (6 acara, selaras CONTENT.md)
    │   └── bouquet-builder.ts(opsi bunga, pelengkap, kertas, pita, helper harga)
    ├── stores/
    │   └── cart.ts           (Nano Stores atom persistent cart, kalkulasi subtotal)
    ├── lib/
    │   ├── whatsapp.ts       (generator URL WhatsApp, perakit pesan form & cart)
    │   └── format.ts         (format rupiah, format tanggal id-ID)
    ├── styles/
    │   └── global.css        (token, reset, font, radius organik, motion)
    ├── assets/
    │   └── photos/           (foto buket transparan, 11 foto produk + CREDITS.md)
    ├── layouts/
    │   └── Base.astro        (ClientRouter, dokumen HTML, meta, skip link, FloatingWA)
    ├── components/
    │   ├── Navbar.astro      (navbar desktop, dropdown info, drawer mobile)
    │   ├── CartIndicator.astro(ikon troli dan counter badge reaktif Nano Stores)
    │   ├── AddToCartButton.astro(tombol tambah belanjaan ke Nano Stores)
    │   ├── BouquetBuilder.astro(konfigurator buket interaktif & preview kartu)
    │   ├── DemoNote.astro    (catatan penanda konsep buatan ENLESWEB)
    │   ├── Footer.astro      (footer 5 menu, medsos, embed Google Maps Venice)
    │   ├── FloatingWhatsApp.astro (tombol mengambang FAB 58x58px hijau #25D366)
    │   ├── WhatsAppButton.astro   (tombol utama seragam)
    │   ├── TextLink.astro         (tautan sekunder teks)
    │   ├── Hero.astro             (headline, single CTA, buket transparan)
    │   ├── CategoryShowcase.astro (koleksi 3 kategori)
    │   ├── OccasionIndex.astro    (indeks acara 6 baris)
    │   ├── GiftTeaser.astro       (teaser hadiah)
    │   ├── OrderSteps.astro       (langkah pemesanan compact/full)
    │   ├── AboutBrief.astro       (tentang toko konsep)
    │   ├── FinalCta.astro         (CTA penutup Beranda)
    │   ├── FilterTabs.astro       (tab filter kategori & baris acara aktif)
    │   ├── ProductList.astro      (kontainer daftar produk)
    │   ├── ProductItem.astro      (kartu produk: WhatsApp link + AddToCart)
    │   ├── GiftRow.astro          (baris paket hadiah: WhatsApp link + AddToCart)
    │   ├── OrderForm.astro        (form pesanan langsung tanpa keranjang)
    │   ├── FaqList.astro          (komponen <details> FAQ native)
    │   ├── ContactInfo.astro      (blok kontak dan lokasi studio)
    │   └── PageHeader.astro       (h1 dan pengantar halaman)
    └── pages/
        ├── index.astro
        ├── koleksi.astro
        ├── hadiah.astro
        ├── rangkai-buket.astro
        ├── keranjang.astro
        ├── cara-pesan.astro
        ├── kontak.astro
        └── 404.astro
```

Aturan tata kelola file:
* Seluruh teks pelanggan diimpor dari `src/content/copy.ts`. Data produk, paket, acara, dan perangkai buket dari `src/data/*`.
* Seluruh nilai bisnis variabel dan informasi studio diimpor dari `src/config/site.ts`.
* State keranjang belanja dikelola terpusat di `src/stores/cart.ts`.
* Tidak ada CSS atau nilai di luar token `DESIGN.md` dan `src/styles/global.css`.

#### 3. Pemetaan Halaman ke Komponen
| Halaman | Komponen Utama |
| ------ | ------ |
| / | Hero, CategoryShowcase, OccasionIndex, GiftTeaser, OrderSteps (compact), AboutBrief, FinalCta |
| /koleksi | PageHeader, DemoNote, FilterTabs, ProductList, ProductItem x7 (TextLink, AddToCartButton) |
| /hadiah | PageHeader, DemoNote, GiftRow x3 (TextLink, AddToCartButton), daftar tambahan, WhatsAppButton |
| /rangkai-buket | BouquetBuilder (stepper bunga & pelengkap, swatch kertas & pita, live card preview, sticky submit) |
| /keranjang | Halaman keranjang (empty state, cart line items, accordion card editor, checkout form, WhatsApp checkout) |
| /cara-pesan | PageHeader, OrderSteps (full), OrderForm, FaqList |
| /kontak | PageHeader, ContactInfo (WhatsApp, jam, area, studio, embed Google Maps, blok ENLESWEB) |
| /404 | not-found section, TextLink |
| Semua Halaman | Base.astro membungkus ClientRouter, Navbar (dengan CartIndicator), `<main id="main-content">`, Footer, dan FloatingWhatsApp |

Semantik HTML:
* `<header>` membungkus navbar. `<nav aria-label="Navigasi utama">` di dalamnya.
* `<main id="main-content">` membungkus konten halaman. Skip link menuju `#main-content`.
* `<footer>` membungkus footer interaktif.
* Tepat satu `<h1>` per halaman. Judul section `<h2>`. Nama produk/item `<h3>`.
* Section memakai `<section>` dengan `aria-labelledby`.

#### 4. Konfigurasi Bisnis: `src/config/site.ts`
```ts
export interface SiteConfig {
  name: string;
  city: string;
  address: string;
  demoMode: boolean;
  enleswebWhatsappNumber: string;
  shopWhatsappNumber: string;
  siteUrl: string;
  enleswebUrl: string;
  instagramUrl: string;
  tiktokUrl: string;
  pinterestUrl: string;
  mapsUrl: string;
  mapsEmbedUrl: string;
  indexable: boolean;
  hours: string;
}

export const site: SiteConfig = {
  name: 'berflower',
  city: 'Venice',
  address: 'Calle Larga San Marco, 412, 30124 Venezia VE, Italia',
  demoMode: true,
  enleswebWhatsappNumber: '6281234567890',
  shopWhatsappNumber: '',
  siteUrl: '',
  enleswebUrl: '',
  instagramUrl: 'https://instagram.com/unknown',
  tiktokUrl: 'https://tiktok.com/@unknown',
  pinterestUrl: 'https://pinterest.com/unknown',
  mapsUrl: 'https://maps.google.com/?q=Calle+Larga+San+Marco,+412,+30124+Venezia+VE,+Italy',
  mapsEmbedUrl: 'https://maps.google.com/maps?q=Calle+Larga+San+Marco,+412,+30124+Venezia+VE,+Italy&t=&z=16&ie=UTF8&iwloc=&output=embed',
  indexable: false,
  hours: 'Setiap hari, 09.00 sampai 19.00 CET',
};
```

Logika Penanganan Nilai:
* `demoMode: true`: seluruh interaksi WhatsApp (tombol, form pesanan, dan checkout keranjang) diarahkan ke nomor WhatsApp ENLESWEB dengan pesan konteks portofolio.
* Jika `enleswebUrl` kosong: teks ENLESWEB di footer dan halaman Kontak dirender sebagai teks biasa tanpa hyperlink.
* Jika `siteUrl` kosong: tag `<link rel="canonical">` dan `og:url` tidak dicetak untuk mencegah URL salah.
* `indexable: false`: menyisipkan tag `<meta name="robots" content="noindex, nofollow" />`.

#### 5. Data Produk, Hadiah, dan Bouquet Builder
* `src/data/products.ts`: 7 produk bunga (Buket, Bunga Meja, Papan Bunga) lengkap dengan harga rupiah, deskripsi, slug acara, dan foto resolusi tinggi.
* `src/data/gifts.ts`: 3 paket hadiah (Buket dan Cokelat, Buket Wisuda, Hampers Bunga) dan daftar tambahan pelengkap.
* `src/data/occasions.ts`: 6 acara (ulang-tahun, wisuda, anniversary, ucapan-selamat, duka-cita, hari-ibu).
* `src/data/bouquet-builder.ts`:
  - 4 bunga utama (Mawar merah, Bunga matahari, Tulip, Peony)
  - 3 bunga pelengkap (Baby's breath, Eucalyptus, Statice)
  - 3 kertas pembungkus (Krem, Merah muda, Kertas kraft)
  - 3 pita (Krem, Merah muda, Hijau)
  - Helper kalkulasi harga `priceBouquet(composition)`
  - Helper deskripsi teks `describeBouquet(composition)`
* Format harga terpusat via `src/lib/format.ts`: `rupiah(n) => 'Rp' + n.toLocaleString('id-ID')`.

#### 6. Integrasi WhatsApp: `src/lib/whatsapp.ts`
Implementasi perutean Demo Mode:
```ts
import { site } from '../config/site';
import { copy } from '../content/copy';
import { describeBouquet } from '../data/bouquet-builder';
import { formatDate, rupiah } from './format';
import type { CartLine } from '../stores/cart';

export function waUrl(topic: string, page: string): string {
  const text = site.demoMode
    ? copy.wa.demoTemplate.replace('{halaman}', page)
    : copy.wa.shopTemplate.replace('{topik}', topic);
  return createWaLink(getActiveNumber(), text);
}

export function waEnlesweb(): string {
  return createWaLink(site.enleswebWhatsappNumber, copy.wa.enleswebTemplate);
}

export function waFromOrder(fields: OrderFormFields): string {
  const message = buildOrderMessage(fields, site.demoMode);
  return createWaLink(getActiveNumber(), message);
}

export function waFromCart(fields: CartCheckoutFields, lines: CartLine[]): string {
  return createWaLink(getActiveNumber(), buildCartMessage(fields, lines));
}
```

Format tautan & kepatuhan:
* Protokol resmi `https://wa.me/{nomor}?text={encodedText}`.
* Seluruh tautan WhatsApp dipasangi `target="_blank"` dan `rel="noopener noreferrer"`.
* Tombol [Hubungi ENLESWEB] di halaman Kontak memakai `waEnlesweb()` yang selalu mengarah ke nomor ENLESWEB.
* Atribut tracking `data-cta-location` dan `data-wa-topic` disematkan pada setiap elemen interaktif.

#### 7. State Management & Skrip Klien (Client Islands)
Semua skrip disematkan langsung di komponen Astro atau store Nano Stores tanpa framework runtime eksternal:

##### 7.1 Persistent Cart Store (`src/stores/cart.ts`)
* Menggunakan `@nanostores/persistent` dengan atom `'berflower_cart_v1'`.
* Sanitasi decoding JSON (`decodeCart`) memvalidasi integritas data (kuantitas bulat 1-99, nomor harga finite, opsi kartu ucapan, dan komposisi buket kustom).
* Fungsi mutasi:
  - `addCartLine(line)`: menambahkan item baru atau menambah kuantitas jika opsi sama persis.
  - `updateCartLine(id, updateFn)`: memperbarui data item (kuantitas atau kartu ucapan).
  - `removeCartLine(id)`: menghapus satu item berdasarkan ID.
  - `clearCart()`: mengosongkan seluruh keranjang.
* Fungsi derivatif:
  - `cartItemCount(lines)`: menghitung total kuantitas item di keranjang.
  - `cartTotal(lines)`: menghitung total harga subtotal belanjaan.

##### 7.2 Cart Indicator (`CartIndicator.astro`)
* Terpasang di navbar desktop dan mobile (`#cart-indicator`, `#cart-count`). Berlangganan reaktif pada atom `$cart` via `$cart.subscribe()`.
* Label desktop `<span class="cart-label">Keranjang</span>` (disembunyikan di mobile < 1024px).
* Badge counter tabular melingkar (diameter 22px, latar `--paper-deep`, teks `--ink`).
* Memperbarui teks counter badge dan atribut `aria-label` ramah pembaca layar secara seketika saat isi keranjang berubah (misal: "Keranjang, 0 item", "Keranjang, 1 item").

##### 7.3 Tombol Tambah ke Keranjang (`AddToCartButton.astro`)
* Membaca data item dari data-attribute, memanggil `addCartLine()`.
* Menampilkan feedback animasi teks tombol berubah menjadi [Ditambahkan] selama 1.4 detik.

##### 7.4 Konfigurator Rangkai Buket (`BouquetBuilder.astro`)
* Membaca input kuantitas bunga utama & pelengkap, radio kertas pembungkus & pita.
* Komposisi awal default: 1 Mawar merah, wrapping Krem, pita Krem (estimasi awal: Rp35.000).
* Menghitung estimasi harga real-time melalui `priceBouquet(readComposition())`.
* Live preview rendering kartu ucapan: menyinkronkan nama penerima (maks 80 char), pengirim (maks 80 char), teks pesan (maks 150 char), dan kelas font (`font-serif`, `font-serif-italic`, `font-sans`).
* Validasi submit memastikan setidaknya ada satu bunga utama yang dipilih (`hasMainBloom`), menampilkan pesan error jika kosong, lalu memanggil `addCartLine()` dengan tipe `kind: 'custom'`.

##### 7.5 Halaman Keranjang Reaktif (`keranjang.astro`)
* Berlangganan langsung ke `$cart`: merender ulang daftar item atau menampilkan empty state secara otomatis.
* Stepper kuantitas (+, -, input) dengan batas 1 sampai 99 (tombol disabled di batas ekstrem).
* Editor kartu ucapan in-place via accordion `<details>` yang memperbarui giftCard item secara persisten dengan mekanisme `skipLineRender = true` untuk mempertahankan posisi kursor dan fokus ketikan pengguna.
* Validasi formulir pengiriman (nama wajib, tanggal min hari ini, cara terima wajib) dan pemanggilan `waFromCart()` untuk membuka chat WhatsApp dengan ringkasan pesanan lengkap beserta tanggal berformat lokal Indonesia (`formatDate`).

##### 7.6 Navbar saat Scroll dan Menu Drawer (`Navbar.astro`)
* Memantau `window.scrollY > 8` untuk menyematkan `data-scrolled="true"` pada header.
* Drawer mobile dengan aksesibilitas keyboard: `aria-expanded`, penanganan tombol `Escape`, dan penguncian scroll saat drawer terbuka.
* Dropdown menu "Info" native `<details>` yang menutup otomatis saat link diklik atau klik di luar menu.
* Diinisialisasi ulang pada event `astro:page-load` (View Transitions).

##### 7.7 Filter Koleksi Interaktif (`FilterTabs.astro` dan `ProductList.astro`)
* Membaca dan memperbarui query string URL `?kategori=...` dan `?acara=...` via `history.replaceState`.
* Menyembunyikan produk non-cocok dengan atribut `hidden` dan memperbarui `aria-current` pada tab aktif.
* Pengumuman jumlah hasil yang tampil untuk teknologi asistif via elemen `aria-live="polite"`.
* Progressive Enhancement: Tanpa JavaScript, seluruh 7 produk tetap tampil lengkap.

##### 7.8 Form Pesanan Interaktif Langsung (`OrderForm.astro`)
* Opsi pesanan di-generate dinamis saat build dari `products.ts` dan `gifts.ts`.
* Validasi field wajib sisi klien (nama, pesanan, tanggal, cara terima) dan pembukaan WhatsApp via `waFromOrder()`.

##### 7.9 Accordion Pertanyaan (`FaqList.astro`)
* Menggunakan elemen HTML bawaan `<details>` dan `<summary>` dengan transisi ikon rotasi tanpa JS tambahan.

#### 8. CSS, Token, dan Font
* Diimplementasikan di `src/styles/global.css`:
  - Warna: `--paper`, `--paper-deep`, `--paper-light`, `--ink`, `--ink-muted`, `--line`, `--clay`, `--leaf`, `--leaf-text`.
  - Radius: `--radius-none: 0`, `--radius-sm: 3px`, serta serangkaian token radius organik (`--radius-organic-1` sampai `--radius-organic-4`, `--radius-organic-hero`, `--radius-card-sm`, `--radius-card-sm-alt`).
  - Tipografi: token fluid clamp (`--font-display`, `--font-page-title`, `--font-section-title`, `--font-index`, `--font-item-name`, `--font-lead`, `--font-body`, `--font-price`, `--font-small`, `--font-button`, `--font-nav`).
  - Spring motion: `--ease-spring: cubic-bezier(0.16, 1, 0.3, 1)`.
  - Keyframes: `@keyframes heroFadeUp`, `@keyframes heroFadeScale`, `@keyframes cardFadeUp`.
  - View Transitions: `@view-transition { navigation: auto; }`.
* Font di-bundle mandiri (self-hosted) dari `@fontsource-variable/fraunces` dan `@fontsource/dm-sans`. Preload berkas woff2 disematkan di `<head>` untuk Fraunces wght normal dan DM Sans 400.

#### 9. Gambar dan Performa
* Seluruh foto produk dan buket diproses menggunakan Astro Image API (`astro:assets`) menghasilkan berkas WebP modern via Sharp.
* Panggung hero memuat buket transparan (`hero-bouquet.png`) secara eager dengan `fetchpriority="high"`.
* Seluruh gambar katalog lainnya menggunakan `loading="lazy"` dan `decoding="async"`.
* Dimensi width dan height selalu didefinisikan (CLS = 0).

#### 10. SEO dan Meta Tags (`Base.astro`)
* Bahasa dokumen: `<html lang="id">`.
* Tema warna: `<meta name="theme-color" content="#F6F0E6">`.
* Judul dan deskripsi otomatis diambil dari `copy.meta` per halaman.
* Karena status demo (`site.indexable: false`), setiap halaman mencetak `<meta name="robots" content="noindex, nofollow" />` dan berkas `public/robots.txt` melarang perayapan mesin pencari.
* Meta Open Graph dan Twitter Card tercetak dinamis.

#### 11. Skrip Otomasi Verifikasi QA (`scripts/verify.mjs`)
Pengujian kualitas kode dijalankan secara otomatis dengan perintah `npm run verify`:
1. **Pemeriksaan Em Dash & En Dash**: Memastikan tidak ada karakter `—` (`\u2014`) atau `–` (`\u2013`) di seluruh berkas kode `src/`.
2. **Pemeriksaan Kata Terlarang**: Memindai kata klise terlarang (premium, presisi, elevate, seamless, crafted, powerful, modern, exceptional, next-level, terlaris, terbaik, termurah, terpercaya, same day).
3. **Kecocokan Data Produk & Harga**: Memvalidasi id, harga numerik, dan nama dari 7 produk bunga.
4. **Kecocokan Data Paket Hadiah**: Memvalidasi id, harga numerik, dan nama dari 3 paket hadiah.
5. **Verifikasi Foto & Lisensi**: Memastikan seluruh 11 foto produk dan catatan lisensi di `CREDITS.md` sinkron dan tersedia.
6. **Integritas Konfigurasi `site.ts`**: Memeriksa kelayakan konfigurasi studio.
7. **Kelengkapan Rute Halaman**: Memvalidasi keberadaan 8 rute wajib (`index.astro`, `koleksi.astro`, `hadiah.astro`, `rangkai-buket.astro`, `keranjang.astro`, `cara-pesan.astro`, `kontak.astro`, `404.astro`).
8. **Kelengkapan Atribut WhatsApp**: Memeriksa keberadaan atribut `data-cta-location` dan prop `location` di seluruh komponen tombol dan tautan.
9. **Integritas Tautan Internal**: Memastikan tidak ada hyperlink internal yang rusak (404 internal) menuju rute `/`, `/koleksi`, `/hadiah`, `/rangkai-buket`, `/keranjang`, `/cara-pesan`, `/kontak`.

#### 12. QA Checklist Teknis
* [x] `npm run build` sukses 0 error dan 0 warning (exit code 0).
* [x] `npm run check` lulus 0 error pada Astro dan TypeScript.
* [x] `npm run verify` lulus seluruh pengujian otomatis 9 kriteria.
* [x] Seluruh teks bersumber dari `src/content/copy.ts`.
* [x] Nama merek `berflower` selalu ditulis huruf kecil di semua tempat.
* [x] Floating WhatsApp Button (FAB 58px hijau #25D366) muncul dan dapat diakses di seluruh halaman.
* [x] Cart Indicator aktif di navbar dengan counter badge reaktif.
* [x] Konfigurator Rangkai Buket bekerja interaktif dan berhasil menambahkan racikan buket ke keranjang.
* [x] Keranjang belanja persisten menyimpan item di localStorage dan menyusun ringkasan checkout ke WhatsApp.
* [x] Hero Beranda menampilkan foto buket transparan dan tombol tunggal [Pesan via WhatsApp].
* [x] Footer menampilkan lokasi studio Venice lengkap dengan iframe embed Google Maps dan tautan 5 menu navigasi.
* [x] Bebas scroll horizontal pada pengujian responsive 360px hingga 1440px.

#### 13. Panduan Deploy Vercel
1. Hubungkan repository git ke platform Vercel.
2. Preset konfigurasi proyek:
   * Framework preset: Astro
   * Build command: `astro build`
   * Output directory: `dist`
   * Node.js Version: 22.x
3. Berkas `vercel.json`:
```json
{
  "cleanUrls": true,
  "trailingSlash": false,
  "headers": [
    {
      "source": "/_astro/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ]
}
```
4. Verifikasi URL publik: memastikan seluruh 8 halaman dapat diakses dan interaksi WhatsApp serta keranjang berfungsi sempurna di perangkat smartphone fisik.

=== BATAS AKHIR FILE: SPEC.md ===
