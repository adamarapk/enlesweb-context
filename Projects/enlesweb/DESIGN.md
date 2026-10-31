# DESIGN.md - ENLESWEB Homepage

Versi 1.2 (As-Is Website Visual & Design Specification - 14 Oktober 2026)

Dokumen ini hanya membahas tampilan: warna, tipografi, layout, komponen, dan interaksi visual. Teks ada di CONTENT.md. Scope ada di PRD.md. Implementasi teknis ada di SPEC.md.

Status: LOCKED (dari pemilik), DEFAULT (usulan yang dipakai apa adanya, boleh diganti pemilik), OPEN (belum ada data).

---

## 1. Karakter

Target rasa (LOCKED): **profesional, ramah, dirancang dengan sengaja.**

Bukan startup main-main, bukan agensi korporat, bukan marketplace template, bukan studio mewah yang eksklusif.

Prinsip harga (LOCKED): Rp450.000 harus terasa layak karena kualitas penyajian, bukan karena tampilan yang terlihat murah.

Struktur tanpa mengotakkan semuanya. Default: konten di atas kanvas putih bersih, bukan setiap section menjadi kartu.

Ketertarikan visual berasal dari: tipografi, skala, pemenggalan baris, komposisi, ruang kosong, satu objek taktil di hero, dan satu warna aksen. Bukan dari dekorasi berlebih.

---

## 2. Token desain

Semua nilai di bawah diimplementasikan sebagai CSS custom properties (SPEC.md bagian 8). Jangan memakai nilai di luar token.

### 2.1 Warna

| Token | Nilai | Status | Fungsi |
|---|---|---|---|
| `--accent` | `#E4FF30` | LOCKED | Satu-satunya warna aksen |
| `--ink` | `#111111` | DEFAULT | Teks utama, garis tegas, latar tombol final CTA dan footer |
| `--ink-muted` | `#55554F` | DEFAULT | Teks sekunder, label pembantu, fitur lipat |
| `--canvas` | `#FFFFFF` | LOCKED | Latar halaman putih bersih (permintaan pemilik bisnis) |
| `--surface` | `#F5F5F2` | DEFAULT | Latar placeholder visual proyek, kartu proses, kartu manfaat bisnis |
| `--line` | `#E5E5DF` | DEFAULT | Garis pemisah tipis antar kolom dan section |
| `--neutral-object` | `#D1D1CB` | DEFAULT | Potongan netral pada komposisi objek hero |

### 2.2 Aturan pemakaian aksen

`#E4FF30` adalah kuning-hijau terang. Rasio kontras terhadap kanvas putih adalah sekitar 1,1:1 (tidak terbaca sebagai teks atau garis tipis). Terhadap `--ink` rasionya sangat tinggi (~17:1).

Aturan:
1. Aksen hanya boleh dipakai sebagai **isi/latar**, dengan teks `--ink` di atasnya.
2. Aksen tidak boleh dipakai sebagai warna teks di atas kanvas atau permukaan terang.
3. Aksen tidak boleh dipakai sebagai garis tipis di atas kanvas terang.
4. Aksen sebagai teks hanya diizinkan di atas latar `--ink` (misalnya saat tombol di-hover atau di footer).
5. Tempat aksen dipakai (LOCKED):
   - Isi tombol utama WhatsApp dan tombol paket.
   - Sorotan garis di belakang harga hero dan catatan peluncuran Starter (25% tinggi teks di bagian dasar huruf: `linear-gradient(180deg, transparent 75%, var(--accent) 75%)`).
   - Sapuan aksen gradien abstrak diagonal (*ambient gradient sweep*) pada Hero mobile (< 768px) yang mengalir dari atas headline melintasi tombol hingga menyentuh judul section Paket ("Pilih website sesuai kebutuhan bisnismu.") dengan gaussian blur lembut tanpa mengorbankan keterbacaan teks headline.
   - Penanda nomor Proses yang sedang aktif (*highlighted*).
   - Garis indikator minimal (36px x 3px) pada Kartu Manfaat Bisnis di Section Tentang.
   - Kartu latar banner Final CTA.
   - Potongan aksen modular pada komposisi HeroObject SVG.
   - Tombol WhatsApp melayang (*Floating WhatsApp Button*).

### 2.3 Tipografi

Font (LOCKED): **Poppins**. Satu keluarga font untuk semua teks.

Bobot yang dipakai: 400, 500, 600, 700. Jangan memakai bobot lain. Seluruh 4 bobot (700, 600, 500, 400) di-preload via `<link rel="preload" as="font" type="font/woff2">` di `<head>` untuk menjamin teks langsung terlukis seketika tanpa keterlambatan swap font dan mengeliminasi layout shift pada desktop maupun mobile.

Fallback: `system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`.

Skala tipografi fluid memakai `clamp(min, ideal, max)`:

| Peran | Token CSS | Ukuran | Bobot | Tinggi baris | Letter-spacing |
|---|---|---|---|---|---|
| Hero headline | `--font-hero-headline` | `clamp(1.75rem, 1.1rem + 3.2vw, 3.75rem)` | 600 | 1.12 | -0.02em |
| Judul section (h2) | `--font-section-title` | `clamp(1.5rem, 1.1rem + 1.6vw, 2.5rem)` | 600 | 1.2 | -0.015em |
| Harga paket | `--font-package-price` | `clamp(1.75rem, 1.4rem + 1.2vw, 2.25rem)` | 600 | 1.1 | -0.01em |
| Harga hero | `--font-hero-price` | `clamp(1.25rem, 1rem + 1.2vw, 2rem)` | 600 | 1.2 | 0 |
| Nama paket / judul langkah | `--font-package-name` | `1.25rem` | 600 | 1.3 | 0 |
| Teks isi | `--font-body-mobile` / `desktop` | `1rem` mobile, `1.0625rem` desktop | 400 | 1.6 | 0 |
| Teks pendukung hero | `--font-hero-support-mobile` / `desktop` | `1.0625rem` mobile, `1.25rem` desktop | 400 | 1.55 | 0 |
| Teks kecil (label, catatan) | `--font-small` | `0.875rem` | 500 | 1.5 | 0 |
| Label tombol | `--font-button` | `1rem` | 600 | 1 | 0 |
| Pernyataan manfaat | `--font-business-value` | `clamp(1.25rem, 1rem + 1.2vw, 2rem)` | 500 | 1.4 | -0.01em |

Aturan tipografi:
- Ukuran teks minimum 14px (`0.875rem`) hanya untuk label dan catatan. Teks isi minimum 16px. Audiens mencakup usia 40+.
- `text-wrap: balance` pada headline dan judul section.
- Panjang baris teks isi maksimum `62ch`.
- Jangan memakai huruf kapital semua untuk label atau judul, kecuali merek `ENLESWEB`.

### 2.4 Jarak (skala 4px)

Tokens: `4, 8, 12, 16, 24, 32, 40, 48, 56, 64, 72, 96, 120, 128, 160 px`.

Padding vertikal antar section:
- Section Paket, Proyek, Proses, Tentang: 48px mobile, 64px desktop (disesuaikan agar kompak dan tidak melelahkan scroll).
- Hero: 40px atas, 48px bawah (mobile); min-height `calc(100dvh - 72px)` di desktop.

### 2.5 Radius, garis, dan sistem affordance fisik 3D tombol

| Token | Nilai | Fungsi |
|---|---|---|
| `--radius-sm` | `6px` | Penanda nomor, toggle menu |
| `--radius-md` | `10px` | Tombol utama, kartu proses, kartu minimized proyek |
| `--radius-lg` | `14px` | Potongan objek hero, kartu final CTA |

Aturan garis dan bayangan:
- Garis tipis: `1px solid var(--line)`.
- Garis bawah link: `1.5px solid var(--ink)` dengan offset 4px.
- **Peniadaan border pada seluruh tombol (*borderless*)**: Seluruh tombol utama dan tombol paket dibuat tanpa border (`border: none`).
- **Affordance Fisik 3D Tombol (*Engineered Tactile Shelf*)**:
  - Default: `box-shadow: 0 3px 0 #A3C400, inset 0 1px 0 rgba(255, 255, 255, 0.6)`. Shelf 3px presisi dengan warna turunan aksen alami tanpa blur abu-abu kotor, ditambah highlight halus di sisi atas untuk kesan fisik engineered.
  - Hover / Fokus: latar menjadi `--ink`, teks menjadi `--accent`, `box-shadow: 0 3px 0 #000000, inset 0 1px 0 rgba(255, 255, 255, 0.15)`. Transisi kontras tajam tanpa blur yang mengotori latar putih.
  - Aktif / Ditekan: `transform: translateY(2px)`, shelf menipis menjadi `box-shadow: 0 1px 0 #A3C400, inset 0 1px 0 rgba(255, 255, 255, 0.4)` (atau `0 1px 0 #000000` saat hover). Memberikan kesan ketukan fisik yang reaktif dan bersih.

### 2.6 Container

- Lebar maksimum konten: `1120px`, di tengah (`margin-inline: auto`).
- Padding horizontal: 20px (mobile), 32px (>= 768px).
- Semua konten utama mengikuti satu garis tepi yang sama, termasuk navbar dan footer.

### 2.7 Breakpoint

- `mobile`: `< 768px`
- `tablet`: `768px` sampai `1023px`
- `desktop`: `>= 1024px`
- `desktop besar`: `>= 1440px` (container tetap 1120px)

---

## 3. Komponen dasar

### 3.1 Tombol utama (WhatsApp dan semua tombol paket)

- Isi: `--accent`. Teks: `--ink`, bobot 600.
- Garis: `none` (borderless).
- Radius: `--radius-md` (10px).
- Affordance: Engineered Tactile 3D bottom shelf 3px `#A3C400`, inset specular highlight `rgba(255, 255, 255, 0.6)` di tepi atas, dan depression 2px saat ditekan.
- Tinggi minimum: 48px (area tap memenuhi standar WCAG AA). Padding horizontal 24px.
- Hover dan fokus: isi menjadi `--ink`, teks menjadi `--accent`, shelf berubah menjadi 3px `#000000`. Transisi 150ms.
- Fokus keyboard: outline `2px solid var(--ink)` dengan offset 3px.

Ukuran per peran:
- `size-default` (Paket & Custom): min-height 48px, padding-inline 24px.
- `size-hero`: min-height 56px, padding-inline 32px.
- `size-nav`: min-height 44px (desktop), padding-inline 20px.
- `size-final`: min-height 52px, padding-inline 28px, background solid `--ink` dengan teks putih dan hover aksen.

### 3.2 Tombol nonaktif ("Segera")

- Isi: `var(--surface)`. Teks: `--ink-muted`. Garis: `none`.
- Kursor: `not-allowed`. Tanpa efek hover atau aktif.
- Radius: `--radius-md`. Min-height 48px.
- `aria-label="Segera tersedia"`.

### 3.3 Tautan sekunder

- Teks `--ink`, bobot 600, garis bawah `1.5px solid var(--ink)` dengan `text-underline-offset: 4px`.
- Hover: ketebalan garis bawah menjadi 2.5px.

### 3.4 Floating WhatsApp Button

- Posisi: `fixed`, pojok kanan-bawah layar.
- Jarak: `bottom: max(20px, env(safe-area-inset-bottom, 20px))`, `right: max(20px, env(safe-area-inset-right, 20px))` (32px di desktop).
- Bentuk: Lingkaran bulat sempurna (diameter 56px di mobile, 60px di desktop).
- Isi: `--accent` dengan ikon vektor telepon WhatsApp `--ink`.
- Hover/Fokus: membesar ringan (`translateY(-2px)`), isi menjadi `--ink`, ikon menjadi `--accent`.
- Tekan: `translateY(1px)`.
- Z-index: 95.

---

## 4. Navbar

Desktop (>= 768px):
- Kiri: logo geometris SVG (`navbrand-logo.svg`, lebar 40px) dan teks merek `EnlesWeb` (Poppins 700, `1.125rem`).
- Tengah: tiga tautan anchor (Paket, Proyek, Proses), bobot 500, jarak 32px.
- Kanan: tombol WhatsApp (tombol utama, tinggi 44px).
- Tinggi navbar: 72px.

Mobile (< 768px):
- Kiri: logo geometris SVG dan teks merek `EnlesWeb`.
- Kanan: tombol toggle menu drawer (44x44px).
- **Tombol CTA dihilangkan dari header mobile**: untuk menjaga ruang bernapas header smartphone agar tidak padat dan sesak. Akses konversi mobile sepenuhnya didelegasikan kepada Floating WhatsApp Button yang selalu siap dijangkau ibu jari pengguna.
- Tinggi navbar: 64px.
- Panel menu mobile: terbuka tepat di bawah navbar secara mulus (150ms), memuat 3 tautan anchor dengan baris tinggi 56px dipisahkan garis `--line`. Panel menutup otomatis saat tautan diklik, saat tombol menu diklik lagi, atau saat tombol Escape ditekan.

Perilaku scroll dan tembus pendaran hero:
- Posisi: `sticky`, menempel di atas layar (`top: 0`, `z-index: 100`).
- Awal (scroll 0px, drawer tertutup): `background-color: transparent`, `border-bottom: 1px solid transparent`. Pendaran aksen (*ambient wash*) dari hero mengalir menembus navbar transparan secara alami tanpa halangan.
- Setelah scroll lebih dari 8px atau saat drawer mobile terbuka (`data-menu-open="true"`): latar berubah mulus menjadi solid `--canvas` (`#FFFFFF`), garis bawah tipis `1px solid var(--line)`, transisi 150ms.

---

## 5. Hero

### 5.1 Komposisi

Desktop (>= 768px):
- Blok teks di tengah, lebar maksimum `880px`, rata tengah.
- Urutan: headline, sorotan harga, baris tombol CTA.
- Headline dipenggal pada tiga baris terencana: `Website untuk bisnismu,` / `sudah termasuk domain` / `dan hosting 1 tahun.`
- Harga hero: tepat di bawah headline, jarak 24px. Teks harga menggunakan sorotan garis aksen 1/4 tinggi teks (`linear-gradient(180deg, transparent 75%, var(--accent) 75%)`).
- Baris tombol: tombol utama `[Chat via WhatsApp]` (tinggi 56px) dan tautan sekunder `[Lihat Paket]` sejajar horizontal di tengah dengan jarak 24px.
- Komposisi Visual Berlapis HeroObject berada di lapisan latar belakang (`z-index: 1`) di bawah teks hero (`z-index: 2`).
- Penyatuan navbar dan ambient wash: hero mengaplikasikan margin-top negatif `-72px` dengan kompensasi `padding-top: calc(var(--space-64) + 72px)` dan `scroll-margin-top: 0` agar pendaran aksen mengalir menembus navbar transparan.

Mobile (< 768px):
- Rata kiri.
- Urutan: headline, sorotan harga, tombol utama lebar penuh, tautan sekunder di bawahnya.
- Seluruh teks dan tombol utama tampil di layar pertama pengguna smartphone (viewport 360x740 dan 390x844) tanpa memerlukan scroll vertikal.
- Penyatuan navbar dan ambient sweep: hero mengaplikasikan margin-top negatif `-64px` dengan kompensasi `padding-top: calc(var(--space-40) + 64px)` dan `scroll-margin-top: 0` sehingga gradien ambient mengalir menembus navbar transparan.

### 5.2 Visual Hero: Mobile Ambient Sweep vs Desktop Layered Composition

1. **Mobile (< 768px) - Ambient Gradient Sweep**:
   - Komposisi objek modular SVG disembunyikan (`display: none`) untuk menjaga keringkasan dan kecepatan pandang mobile.
   - Sebagai gantinya, dihadirkan sapuan aksen gradien abstrak diagonal (*ambient gradient sweep*) menggunakan SVG dengan gaussian blur bertingkat (stdDeviation 36 & 44).
   - Alur sapuan: berawal dari pendaran lembut di kiri atas headline, melintasi area tombol, dan memanjang ke bawah hingga menyentuh judul section Paket ("Pilih website sesuai kebutuhan bisnismu.").
   - Opacity terkontrol ketat (memudar dari 0.80 di atas hingga 0% di bawah) sehingga teks headline dan harga tetap memiliki kontras sempurna dan tajam dibaca.

2. **Desktop (>= 768px) - Komposisi Berlapis HeroObject**:
   - Dibuat sebagai SVG terpadu di `src/components/HeroObject.astro` di lapisan bawah teks hero:
     1. Latar: Jendela browser/wireframe website (fill terang rendah kontras, bilah alamat geometris).
     2. Sisi kiri: Kartu domain dengan aksen pill dan ekstensi geometris.
     3. Sisi kanan: Kartu rak server hosting dengan indikator status aksen.
     4. Depan/Pusat: Potongan puzzle modular khas ENLESWEB (Piece A netral dan Piece B aksen) yang mengunci kesatuan komponen.
   - Depth-of-field blur bertingkat (Gaussian blur 4.5px latar, 2.5px midground, 1px foreground optical) untuk kedalaman taktil tenang tanpa mengganggu keterbacaan teks.
   - Tanpa border (`stroke="none"`), tanpa animasi berulang.

---

## 6. Paket

### 6.1 Struktur 3 Kolom Sejajar

Desktop (>= 1024px):
- Tiga paket (Starter, Business, Growth) ditampilkan 3 kolom sama lebar, tanpa kartu, kotak, atau bayangan, dipisahkan garis vertikal `1px solid var(--line)`.
- **Keseragaman Visual (LOCKED)**: Starter, Business, dan Growth memiliki ukuran harga, tipografi, dan padding kolom yang seragam. Tidak ada badge "Most Popular" atau kartu Growth yang membesar.
- **Penyelarasan Baris Tipografi (Pixel-Perfect Alignment)**:
  - Tinggi area deskripsi diseragamkan (`min-height: 96px`).
  - Slot catatan peluncuran (`.package-launch-slot`) selalu dipertahankan di ketiga kolom dengan `min-height: 54.4px` (menyamai 2 baris catatan Starter). Pada mobile (< 1024px), slot kosong disembunyikan (`:empty { display: none }`).
  - Baris fitur inti ke-2 disinkronkan (`min-height: 48px`) untuk mengimbangi teks 2 baris pada Business ("Desain disesuaikan dengan bisnismu").
  - Menghasilkan keselarasan horizontal sempurna untuk baris fitur, tombol toggle dropdown, dan tombol CTA paket.

Mobile (< 1024px):
- Ditumpuk vertikal, dipisahkan garis horizontal `1px solid var(--line)`. Padding vertikal 40px per paket.

### 6.2 Daftar Fitur Inti dan Lipat `<details>`

- Daftar Inti: lima baris dengan urutan yang sama di ketiga kolom. Ikon centang SVG `16px` berwarna `--ink`.
- Bagian Lipat (`<details>`):
  - **Tertutup secara default pada semua ukuran layar** (keputusan pemilik bisnis).
  - `<summary>`: tautan sekunder dengan chevron panah yang berputar 180° saat terbuka. Target tap minimal 44px.
  - Label berganti secara otomatis antara `Lihat semua yang termasuk` (saat tertutup) dan `Sembunyikan` (saat terbuka).

### 6.3 Custom

- Berada di bawah tiga kolom paket, dipisahkan garis horizontal `1px solid var(--line)` dengan jarak 64px.
- Desktop (>= 1024px): tata letak 2 kolom (kiri: nama, harga, deskripsi, daftar 7 contoh kebutuhan dengan titik bulat geometris minimalis, catatan harga; kanan: tombol `[Diskusikan Kebutuhan Custom]`).
- Mobile: ditumpuk rapi, tombol di bawah catatan harga.

---

## 7. Proyek (Sistem Highlight & Minimize)

### 7.1 Struktur Showcase

- Konsep: Menampilkan contoh kemampuan nyata untuk ketiga tingkatan paket tanpa memaksa pengunjung melakukan scroll panjang.
- Sistem **Highlight & Minimize**:
  - Enam proyek portofolio konsep tampil:
    1. `jerseay` (Tingkat Growth, default highlighted): Studio jersey custom (`https://jerseay.enlesweb.com/`).
    2. `dipotongin` (Tingkat Growth): Studio barbershop (`https://dipotongin.enlesweb.com/`).
    3. `tuntas` (Tingkat Business): Bimbel kelompok kecil dan privat (`https://tuntas.enlesweb.com/`).
    4. `seruput` (Tingkat Starter): Kedai kopi dan sangrai dadakan (`https://seruput.enlesweb.com/`).
    5. `ripeir` (Tingkat Starter): Workshop perbaikan barang (`https://ripeir.enlesweb.com/`).
    6. `berflower` (Tingkat Growth): Toko bunga dan hadiah (`https://berflower.enlesweb.com/`).
  - Satu proyek tampil secara penuh dalam panggung pameran berasio 16:10 (*highlighted stage*).
  - Lima proyek lainnya tampil sebagai kartu ringkas (*minimized cards*) di bawah panggung.
  - Default proyek highlighted: **Jerseay**.
  - Mengklik kartu minimized mana pun akan menukar posisi: proyek yang dipilih menjadi highlighted penuh di stage, dan proyek sebelumnya otomatis diminimize.
  - Pada mobile (< 1024px), interaksi switcher dilengkapi auto-scroll halus kembali ke panggung pameran (*stage*).

### 7.2 Visual dan Tombol Proyek

- Visual: Tangkapan layar website berkualitas tinggi dioptimalkan melalui `astro:assets` (format WebP/PNG di `src/assets/projects/{id}.*` dengan `object-fit: cover`).
- Favicon identitas: setiap kartu minimized dilengkapi logo/favicon SVG unik dari masing-masing konsep proyek di `src/assets/projects/{id}-favicon.svg`.
- Label konsep dinamis: setiap kartu proyek secara eksplisit menampilkan label sesuai tingkatannya:
  - Starter: `Konsep buatan kami sendiri. Contoh tingkat Starter.`
  - Business: `Konsep buatan kami sendiri. Contoh tingkat Business.`
  - Growth: `Konsep buatan kami sendiri. Contoh tingkat Growth.`
- Tombol tindakan:
  - Keenam proyek dilengkapi tombol aktif `[Lihat Website]` yang membuka URL demo live di tab baru (`target="_blank" rel="noopener noreferrer"`).
  - Mekanisme keamanan fallback: jika URL dikosongkan di `site.ts`, tombol otomatis menjadi nonaktif `[Segera]` dengan atribut `aria-label="Segera tersedia"` dan mencetak peringatan build aman di konsol.

---

## 8. Proses (Sistem Highlight & Minimize Timeline)

### 8.1 Struktur Timeline

- Menggunakan **satu sumbu vertikal lurus** sebagai tulang punggung yang menghubungkan penanda nomor dari langkah 1 sampai langkah 5. Sumbu berhenti tepat di langkah kelima ("Tayang").
- Penanda: lingkaran 40x40px (radius 50%) dengan nomor di tengah (Poppins 600, 1rem).
  - Status minimized: latar `--canvas`, border `1.5px solid var(--line)`, nomor `--ink`.
  - Status highlighted: latar `--accent`, border `1.5px solid var(--ink)`, nomor `--ink`.
  - Langkah 5 saat highlighted: latar `--ink`, border `1.5px solid var(--ink)`, nomor `--accent`.
- Kartu langkah (*step card*): saat highlight berlatar `--surface` memuat judul dan paragraf penjelasan; saat minimize hanya menampilkan nomor dan judul langkah.
- Accordion interaktif: Langkah 1 di-highlight secara default, langkah 2 sampai 5 diminimize. Mengetuk nomor atau judul langkah akan membuka detail langkah terkait.

### 8.2 Tata Letak

- Desktop (>= 1024px): Tata letak 2 kolom (kiri: judul section `Lima langkah sampai websitemu tayang.` yang sticky; kanan: vertical timeline interaktif).
- Mobile & tablet (< 1024px): 1 kolom lurus vertikal, judul di atas dan timeline di bawah.

---

## 9. Tentang & Pernyataan Manfaat Bisnis (`#tentang`)

Sesuai keputusan pemilik bisnis, narasi Tentang ENLESWEB dan Pernyataan Manfaat Bisnis digabungkan ke dalam satu section `#tentang` dalam tata letak editorial asimetris (LOCKED):

- Desktop (>= 1024px): 2 kolom seimbang.
  - **Kolom Kiri (Cerita & Narasi)**:
    - Judul: h2 `Tentang ENLESWEB`.
    - Paragraf 1: `ENLESWEB membantu pemilik bisnis punya website tanpa harus mengurus urusan teknisnya sendiri.`
    - Paragraf 2: `Kami mengerjakan desain, pembuatan, dan penayangan website, dari yang sederhana sampai yang dirancang khusus.`
  - **Kolom Kanan (Kartu Manfaat Bisnis)**:
    - Kartu taktil berlatar `--surface` (`#F5F5F2`), borderless, sudut membulat lebar `clamp(20px, 3vw, 28px)`, padding `clamp(28px, 3.5vw, 40px)`.
    - Dilengkapi garis indikator minimal di atas (36px x 3px, warna `--accent`, radius 2px).
    - Teks: `Calon pelangganmu bisa langsung chat lewat WhatsApp, melihat lokasi di Google Maps, dan membaca layanan atau produkmu tanpa harus bertanya satu per satu.`
- Mobile (< 1024px): Tersusun bertumpuk vertikal secara alami dan ringkas.

---

## 10. CTA penutup

- Kartu banner berlatar warna aksen penuh `--accent` (`#E4FF30`), sudut melengkung halus `clamp(24px, 3.5vw, 36px)`, tanpa garis tepi (`border: none`).
- Judul: `Mau buat website untuk bisnismu?`
- Tombol aksi: solid ink `#111111` dengan teks putih dan hover aksen, bertuliskan `[Ceritakan via WhatsApp]`.
- Objek visual modular SVG disembunyikan pada mobile (< 768px) untuk menjaga ringkasnya kartu banner konversi penutup.

---

## 11. Footer

Latar belakang solid `--ink` (`#111111`) penuh dari ujung ke ujung layar tanpa garis pembatas atas.
- Tingkat atas:
  - Merek: logo geometris SVG aksen (`navbrand-logo-accent.svg`, lebar 32px) dan teks `EnlesWeb` putih, Poppins 700.
  - Tagline: `#A3A39E`.
  - Kontak: WhatsApp dengan nomor terformat yang dapat diklik (putih dengan hover aksen).
  - Navigasi: Paket, Proyek, Proses (putih dengan hover aksen, target tap minimal 44px).
- Tingkat bawah:
  - Garis pemisah tipis `1px solid rgba(255, 255, 255, 0.12)`.
  - Hak cipta: `© EnlesWeb` berwarna `#8A8A85` (memenuhi standar kontras WCAG AA).
  - Tautan utilitas: `[Kebijakan Privasi]` berwarna `#8A8A85` dengan hover `--accent` dan target sentuh minimal 44px (berdampingan di kanan pada desktop, bertumpuk di bawah pada mobile).

---

## 12. Interaksi, Animasi & Motion Control

### 12.1 Animasi Diizinkan

1. **Progressive Scroll Reveal (Ultra-Ringan Berbasis GPU)**:
   - Menggunakan skrip sebaris berpelindung fitur di `<head>` (`if ('IntersectionObserver' in window) { document.documentElement.classList.add('js-reveal'); }`) yang aktif sebelum body di-parse, mencegah pembatalan cache style dan kalkulasi ulang style menyeluruh pada thread utama desktop.
   - Menggunakan native `IntersectionObserver` ringan di `Base.astro` tanpa dependensi eksternal yang inisialisasinya dijadwalkan via `requestIdleCallback` (dengan fallback `setTimeout 100ms`) dan dipasang langsung ke seluruh elemen `.reveal-on-scroll` tanpa perulangan sinkron `getBoundingClientRect()`, sepenuhnya mengeliminasi layout thrashing dan forced reflow.
   - **Prinsip Render Awal Instan**: Seluruh elemen di layar pertama (*above the fold* seperti Hero headline, harga, tombol CTA, dan navbar) dirender instan pada frame pertama dengan `opacity: 1` tanpa animasi *entrance* atau transisi tunda, menjamin *Largest Contentful Paint* (LCP) terjadi dalam ~0.3–1.0 detik.
   - Judul section Paket (`#packages-title`) dibebaskan dari kelas `.reveal-on-scroll` karena berada di bagian bawah viewport awal smartphone.
   - Elemen yang berada di bawah layar pertama dengan kelas `.reveal-on-scroll` muncul bertahap saat di-scroll ke dalam viewport (`threshold: 0`, `rootMargin: '0px 0px -28px 0px'`).
   - Transisi halus: `opacity 500ms cubic-bezier(0.16, 1, 0.3, 1), transform 500ms cubic-bezier(0.16, 1, 0.3, 1)` dengan `translateY(24px)`.
   - Menggunakan properti `will-change: opacity, transform` untuk akselerasi perangkat keras GPU pada smartphone kelas menengah (*mid-range*).
   - One-shot reveal: pengamatan dihentikan (`unobserve`) setelah elemen muncul, menghasilkan 0% beban CPU residual.
2. **Hover dan Tekan Tombol**:
   - Transisi warna, bayangan fisik 3D, dan pergeseran posisi (150ms).
3. **Navbar Scroll**:
   - Transisi latar transparan ke solid `--canvas` setelah scroll 8px (150ms) dengan pelacakan status internal bebas forced reflow, didukung pembungkusan pengecekan scroll awal dalam `requestIdleCallback` (dengan fallback `setTimeout 100ms`).
4. **Akordeon & Dropdown**:
   - Rotasi panah `<summary>` dan chevron langkah proses (150ms).
   - Pembukaan panel menu mobile (150ms).
5. **Isolasi Layer GPU (Hardware Compositing)**:
   - Objek visual hero dengan efek Gaussian blur (`.hero-ambient-wash` pada mobile dan `.hero-composition-inner` pada desktop) diisolasi pada layer GPU terpisah menggunakan `contain: paint; will-change: transform; transform: translateZ(0);` untuk mengeliminasi beban repaint dan jank saat scroll.

### 12.2 Animasi Dilarang

- Dilarang memakai scroll-jacking, parallax scrolling, animasi objek hero yang terus-menerus berputar, atau efek floating tanpa akhir.

### 12.3 Aksesibilitas Motion (`prefers-reduced-motion: reduce`)

Wajib dihormati secara mutlak:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  html.js-reveal .reveal-on-scroll {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
}
```

---

## 13. Aksesibilitas visual

- Kontras teks `--ink` (#111111) dan `--ink-muted` (#55554F) terhadap `--canvas` (#FFFFFF) dan `--surface` (#F5F5F2) melampaui standar WCAG AA (minimal 4.5:1).
- Teks di atas `--accent` selalu `--ink` (rasio ~17:1).
- Fokus keyboard selalu terlihat jelas: outline `2px solid var(--ink)` dengan offset 3px.
- Area sentuh (tap target) seluruh elemen interaktif memenuhi ukuran minimum 44x44px.
- Informasi tidak pernah disampaikan hanya melalui warna saja.

---

## 14. Halaman Utilitas: Kebijakan Privasi (`/kebijakan-privasi`)

Halaman statis editorial bersih yang memuat dokumen legal kepatuhan privasi data:

1. **Header Minimalis**:
   - Posisi `sticky` di atas layar (`top: 0`, `z-index: 100`) dengan latar solid `--canvas` (`#FFFFFF`) dan garis bawah `1px solid var(--line)`. Tinggi 64px mobile, 72px desktop.
   - Sisi kiri: Logo EnlesWeb (SVG + teks merek `EnlesWeb`) yang menaut ke `/`.
   - Sisi kanan: Tautan `[Kembali ke Beranda]` dilengkapi ikon panah SVG bersih (`<svg>` stroke width 2, tanpa karakter panah unicode teks) dengan hover background `--surface` dan tap target minimal 44px.
2. **Tata Letak & Tipografi Konten**:
   - Kontainer membaca terpusat (`max-width: 740px`, ~65 karakter per baris untuk kenyamanan membaca optimal).
   - Judul h1: `clamp(2rem, 1.4rem + 2vw, 3rem)`, bobot 600, warna `--ink`.
   - Sub-judul h2: `1.25rem`, bobot 600, warna `--ink`, dipisahkan garis tipis `1px solid var(--line)`.
   - Paragraf: ukuran `1rem` mobile, `1.0625rem` desktop, tinggi baris 1.65, warna `--ink-muted` (#55554F) dengan kontras rasio > 7:1 di atas kanvas putih.
   - Bebas dari elemen dekoratif atau visual slop yang mengaburkan teks hukum.
3. **Footer**:
   - Menampilkan `Footer.astro` di bagian bawah dengan tautan aktif kembali ke halaman utama dan hak cipta.
