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
| Nomor WhatsApp ENLESWEB untuk mode demo (site.enleswebWhatsappNumber) | OPEN |
| URL produksi Vercel dan domain kustom (jika ada) | OPEN |
| URL ENLESWEB untuk tautan footer dan Kontak | OPEN |
| OG image dan favicon final | OPEN |
