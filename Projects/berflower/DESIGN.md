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
