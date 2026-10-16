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
