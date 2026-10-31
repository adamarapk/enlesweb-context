# ENLESWEB Homepage - Walkthrough Implementasi & Hasil Verifikasi

Dokumen ini mendokumentasikan implementasi homepage satu halaman **ENLESWEB** yang dibangun menggunakan Astro statis (`output: 'static'`), TypeScript strict, CSS custom properties tanpa framework UI, dan font self-hosted Poppins.

---

## 1. Ringkasan Implementasi

Situs dibangun secara presisi mengikuti hierarki dokumen:
* Scope & batasan: `PRD.md`
* Teks, harga, copy, pesan WA: `CONTENT.md`
* Visual, warna, tipografi, jarak: `DESIGN.md`
* Stack teknis & struktur: `SPEC.md`
* Standar kualitas & anti-slop: `AGENTS.md` / `SKILL.md`

### Struktur Berkas yang Dibuat

```
enlesweb/
├── package.json                   # Astro 7.3.5, @fontsource/poppins 5.3.0, TypeScript 5.9.3, @astrojs/check 0.9.10
├── astro.config.mjs               # output: 'static'
├── tsconfig.json                  # extends: "astro/tsconfigs/strict"
├── .gitignore                     # node_modules/, dist/, .astro/
├── public/
│   ├── favicon.svg                # Favicon aksen geometris proporsional dengan huruf "E" tebal
│   └── robots.txt                 # User-agent: * Allow: /
└── src/
    ├── env.d.ts                   # Ambient types untuk build-time Node fs/path/process
    ├── config/
    │   └── site.ts                # Satu-satunya sumber kebenaran konfigurasi bisnis & TODO(OPEN)
    ├── content/
    │   └── copy.ts                # Salinan persis 100% dari CONTENT.md (tanpa em dash, tanpa kata terlarang)
    ├── lib/
    │   └── whatsapp.ts            # Generator URL wa.me dengan encoding pesan otomatis
    ├── styles/
    │   └── global.css             # CSS custom properties (token warna, font clamp, radius, reset)
    ├── assets/
    │   ├── hero-object.svg        # Objek puzzle modular 2 potongan (neutral & accent) dengan soft contact shadow
    │   └── projects/              # Direktori screenshot proyek (opsional: jerseay.webp, berflower.webp, ripeir.webp)
    ├── layouts/
    │   └── Base.astro             # Layout dasar, OG metadata, script listener tracking Pixel
    ├── components/
    │   ├── WhatsAppButton.astro   # Tombol WhatsApp terpusat (primary & link variants, dukungan slot label responsif)
    │   ├── Navbar.astro           # Sticky header, scroll listener (>8px), menu drawer accessible, resize auto-close
    │   ├── HeroObject.astro       # Inline SVG objek taktil modular (instansi tunggal di DOM, defs unik)
    │   ├── Hero.astro             # Headline 3-baris desktop, price highlight, CTA WhatsApp, spasi antar-kata mobile aman
    │   ├── PackageColumn.astro    # Kolom paket (Starter, Business, Growth) dengan core list & details
    │   ├── CustomPackage.astro    # Jalur custom terpisah di bawah paket (2 kolom desktop, dash indicator)
    │   ├── Packages.astro         # Container paket (tumpuk di <1024px, 3 kolom di >=1024px)
    │   ├── ProjectItem.astro      # Item proyek dengan dukungan astro:assets Image & fallback typographic placeholder
    │   ├── Projects.astro         # Grid 12 kolom asimetris desktop & stack mobile
    │   ├── Process.astro          # 5 langkah vertikal dengan sumbu penghubung & offset langkah genap desktop
    │   ├── BusinessValue.astro    # Pernyataan manfaat tenang di tengah tanpa kartu dan tanpa judul
    │   ├── About.astro            # Bagian Tentang ENLESWEB tenang di tengah
    │   ├── FinalCta.astro         # Ajakan penutup WhatsApp 52px
    │   └── Footer.astro           # Footer 2 tingkat dengan nomor WhatsApp dan copyright
    └── pages/
        └── index.astro            # Halaman utama menggabungkan seluruh komponen
```

---

## 2. Kepatuhan pada Keputusan Utama (Locked Decisions)

1. **Jerseay dengan URL Kosong**:
   - Jika `status === 'live'` tetapi `url` kosong, tombol otomatis dirender sebagai `<button type="button" disabled aria-label="Segera tersedia">Segera</button>`.
   - Build mengeluarkan `console.warn`:
     `[build] Proyek "jerseay" berstatus 'live' tetapi URL masih kosong. Tombol ditampilkan nonaktif sebagai [Segera].`
2. **Dependensi Dev**:
   - Hanya `typescript` dan `@astrojs/check` yang ditambahkan ke `devDependencies`.
   - Runtime dependencies hanya `astro` dan `@fontsource/poppins`. Zero client framework bundle.
3. **Penyelarasan Tampilan & Status Paket (Keputusan Pemilik Bisnis)**:
   - Tiga paket (Starter, Business, Growth) dibuat berpenampilan sama persis: ukuran harga (`var(--font-package-price)`) dan padding kolom seragam tanpa perbedaan khusus untuk Growth.
   - Tiga kolom paket tersusun sejajar di desktop (`@media (min-width: 1024px)`) dan bertumpuk rapi di bawah `1024px`.
   - Komponen `<details data-package-details>` **tertutup secara default di seluruh ukuran layar** (desktop, tablet, dan mobile) sesuai instruksi pemilik bisnis.
   - Label `<summary>` berganti dinamis antara "Lihat semua yang termasuk" (saat tertutup) dan "Sembunyikan" (saat terbuka).
4. **Antislop & Anti-AI-Writing**:
   - Zero em dash (`—`) pada seluruh teks pelanggan.
   - Zero kata terlarang (`gratis`, `premium`, `presisi`, `modern`, `crafted`, `powerful`, `seamless`, `elevate`).
   - Tidak ada badge "Most Popular", "Best Value", atau eyebrow badge.
5. **Penyelarasan Baris Tipografi Paket (Starter, Business, Growth)**:
   - Area deskripsi diberi `min-height: 96px` pada desktop (`@media (min-width: 1024px)`) agar baris berikutnya mulai di koordinat vertikal yang sama.
   - Slot catatan peluncuran (`.package-launch-slot`) selalu dipertahankan di ketiga kolom dengan `min-height: 54.4px` (menyamai 2 baris catatan Starter). Pada mobile (`< 1024px`), slot kosong otomatis disembunyikan (`:empty { display: none }`).
   - Baris fitur inti ke-2 disinkronkan (`min-height: 48px`) untuk mengimbangi teks 2 baris pada Business ("Desain disesuaikan dengan bisnismu").
   - Hasil pengukuran Chrome DevTools: Koordinat vertikal sub-pixel sejajar sempurna di ketiga kolom desktop untuk Item 1 (538px), Item 2 (574px), Item 3 (634px), Item 4 (670px), Item 5 (706px), Details (754px), dan Tombol CTA (830px).
6. **Desain Editorial Asimetris Tentang ENLESWEB (Non-Kaku)**:
   - Menggantikan susunan teks 1 kolom rata-tengah yang monoton dengan tata letak editorial asimetris 2 kolom (`1fr 1.15fr`) di desktop dan tumpukan vertikal alami di mobile.
   - Kolom kiri: Judul section `Tentang ENLESWEB` dan narasi 2 paragraf berjarak proporsional.
   - Kolom kanan: Kartu taktil borderless berlatar `--surface` (`#F5F5F2`), sudut membulat lebar `clamp(20px, 3vw, 28px)`, garis aksen minimal di atasnya (36px x 3px), dan tipografi seimbang (`text-wrap: balance`) untuk pernyataan manfaat bisnis.
   - Seluruh kolom paket mempertahankan perlakuan tenang tanpa kotak/kartu/bayangan, dipisahkan garis vertikal `1px solid var(--line)`.
   - Sumbu proses berjalan lurus di sebelah kiri penanda, menghubungkan nomor 1 hingga 5, dan berhenti tepat di langkah 5 ("Tayang" dengan penanda gelap dan nomor aksen).
5. **Pembersihan Garis Em Dash Visual & Penanda Sederhana Custom**:
   - **Penghapusan Garis Visual Em Dash**: Garis horizontal visual yang sebelumnya berada di depan daftar item custom (`.custom-dash`) dan label konsep proyek (`.concept-line`) telah dihapus secara menyeluruh sehingga tampilan bebas dari elemen berbentuk em dash / strip.
   - **Penanda Sederhana Bulat (Dot Bullet)**: Sesuai arahan pemilik bisnis, item contoh kebutuhan custom kini diberi penanda sederhana berupa titik bulat geometris minimalis (`5px x 5px`, `border-radius: 50%`, warna `--ink`, sejajar baris pertama) tanpa em dash.
   - **Pengetatan Jarak Antar-Section**: Jarak vertikal antar-section diperkecil secara proporsional di seluruh halaman:
     - `padding-block` section standar (Paket, Proyek, Proses, Manfaat Bisnis, Tentang): disesuaikan dari 72px–160px menjadi **48px di mobile** dan **64px di desktop**.
     - `Final CTA`: disesuaikan menjadi padding 48px/56px di mobile dan 64px/72px di desktop.
     - `Footer`: padding-block bagian atas disesuaikan menjadi 48px.
     - Jarak margin judul section (`margin-bottom`) dipadatkan dari 48px menjadi 32px.
     - Jarak efektif antar-section kini berkurang ~50%, menghasilkan komposisi editorial yang lebih padat, kohesif, dan tidak terasa berjarak renggang berlebihan.
6. **Komposisi Visual Berlapis Hero (Layered Composition - Flank Spread & Depth Blur)**:
   - **Tanpa Border (Borderless)**: Seluruh kartu, jendela wireframe, dan potongan puzzle dibuat tanpa garis tepi (`stroke="none"`), murni mengandalkan bidang surface tonal, aksen, dan bayangan kontak.
   - **Depth-of-Field Blur**: Diterapkan blur bertingkat (Gaussian blur 4.5px pada browser latar, 2.5px pada kartu midground, dan 1px optical filter) sehingga seluruh lapisan objek membaur lembut ke kedalaman ruang, dan teks foreground tetap tajam sempurna.
   - **Flank Spread**: Objek disebar membingkai margin samping (domain di kiri, server dan puzzle di kanan), memastikan area tengah (headline, harga, paragraf, tombol CTA) memiliki ruang bernapas maksimal.
   - **Penyederhanaan & Perataan Vertikal**: Subtitle hero dihapus sesuai arahan pemilik, dan seluruh konten hero di desktop diatur berada tepat di tengah vertikal viewport (`min-height: calc(100dvh - 72px)` dengan `display: flex; align-items: center`), sehingga headline dan tombol tampil seimbang, tenang, dan proporsional.
   - Tanpa teks palsu/karangan, tanpa animasi, bebas gradien SaaS/3D blob, dan kontras keterbacaan teks utama tetap WCAG AAA.
   - Responsif: Di desktop membentang selebar `clamp(760px, 94vw, 1260px)`; di mobile diposisikan rapi di bawah tautan "Lihat Paket" (maks 190px) dengan kartu server disembunyikan.
7. **Showcase Proyek Sederhana & Kompak (Highlight di Kiri, Minimized di Kanan - Zero Scroll)**:
   - Sesuai arahan spesifik pemilik bisnis agar proyek dibuat sederhana, tidak menumpuk, dan tidak perlu scroll:
   - Diimplementasikan tata letak 2 kolom berdampingan pada layar desktop (>= 840px / 1024px):
     - **Kolom Kiri**: Proyek yang sedang di-**Highlight** (tampil penuh dengan visual pratinjau rasio 16:10, nama, tipe bisnis, deskripsi, label konsep, dan tombol aksi).
     - **Kolom Kanan**: Proyek-proyek yang sedang di-**Minimize** (kartu ringkas tersusun vertikal di sebelah kanan proyek highlight, berisi inisial badge, nama, tipe, dan tombol "Tampilkan").
   - **Default Highlight**: Proyek `Jerseay` tampil penuh di sisi kiri secara default saat pertama kali halaman dimuat.
   - **Interaktivitas Instan**: Mengetuk salah satu kartu minimized di sisi kanan (`berflower` atau `ripeir`) langsung memindahkan proyek tersebut ke posisi highlight di sisi kiri, dan proyek sebelumnya otomatis berpindah ke daftar kartu minimized di sisi kanan.
   - **Tampilan Mobile (< 840px)**: Proyek yang di-highlight tampil di bagian atas selebar penuh layar HP, dan kartu-kartu minimized tersusun rapi tepat di bawahnya tanpa scroll berlebih.
8. **Vertical Timeline Proses yang Luwes & Dinamis (Highlight & Minimize 5 Langkah)**:
   - Sesuai arahan spesifik pemilik bisnis agar timeline proses tidak kaku dan mengalir luwes dengan konsep minimize & highlight:
     - **Tampilan Minimize**: Hanya menampilkan nomor pada penanda dan judul langkah (`angka dan judul`). Deskripsi disembunyikan.
     - **Tampilan Highlight**: Menampilkan nomor penanda dengan latar aksen `#E4FF30`, judul langkah, ikon panah rotasi 180°, dan deskripsi langkah di atas kartu berlatar `--surface` yang elegan.
     - **Default Highlight**: Langkah 1 aktif secara default, langkah 2 sampai 5 diminimize.
     - **Tata Letak Desktop Luwes 2 Kolom**: Mengeliminasi offset zigzag kaku 64px. Pada desktop (>= 1024px), judul section `Lima langkah sampai websitemu tayang.` berada di sisi kiri (sticky), dan timeline interaktif berada di sisi kanan selebar kolom yang proporsional tanpa ruang kosong canggung.
     - **Sumbu Vertikal Mulus & Penanda Melingkar**: Penanda didesain melingkar modern (`40x40px`, radius 50%) yang terhubung secara kontinu dengan garis sumbu vertikal `2px solid var(--line)` dari langkah 1 hingga langkah 5 tanpa putus.
     - **Interaktivitas Bebas**: Mengetuk penanda nomor atau baris langkah mana pun langsung mengaktifkan langkah tersebut dan me-minimize langkah lainnya, dengan transisi halus dan target sentuh ramah mobile (>= 48px).
9. **Penyatuan Pernyataan Manfaat Bisnis ke dalam Section Tentang (LOCKED)**:
   - Sesuai arahan spesifik pemilik bisnis agar pernyataan manfaat bisnis dan bagian Tentang tidak dipisahkan melainkan dijadikan satu:
     - Komponen `BusinessValue.astro` terpisah ditiadakan dari `index.astro`.
     - Teks pernyataan manfaat bisnis (`copy.businessValue.statement`) diintegrasikan langsung ke dalam satu alur naratif di dalam `About.astro` di bawah judul `Tentang ENLESWEB`.
     - Susunan naratif mengalir alami: perkenalan ENLESWEB dan urusan teknis (p1) -> rentang pengerjaan website sederhana hingga khusus (p2) -> manfaat langsung bagi pengunjung website (chat WhatsApp, Google Maps, baca produk tanpa tanya satu per satu).
     - Menghilangkan jarak jeda section berlebih sebelum Final CTA, menghasilkan alur penutup halaman yang tenang, padat, dan kohesif.
10. **Latar Belakang Putih Bersih (Pure White Canvas - LOCKED)**:
    - Sesuai arahan spesifik pemilik bisnis karena warna sebelumnya (`#FAFAF7`) dirasa terlalu pucat:
      - Token `--canvas` diubah menjadi putih bersih `#FFFFFF`.
      - Token `--surface` disesuaikan menjadi `#F5F5F2` dan `--line` menjadi `#E5E5DF` agar kontras kartu dan garis pemisah tetap tenang, presisi, dan proporsional.
      - Seluruh visual halaman menjadi lebih cerah, segar, dan kontras keterbacaan teks meningkat lebih tajam.
11. **Redesain Final CTA (Latar Accent, Tanpa Border, Judul + Action Saja, Objek Modular Kanan - LOCKED)**:
    - Sesuai arahan spesifik pemilik bisnis dan referensi desain visual:
      - Kartu Final CTA didesain dengan latar belakang penuh warna aksen `--accent` (`#E4FF30`).
      - **Tanpa Border (Borderless)**: `border: none` (garis tepi dihilangkan sepenuhnya).
      - **Radius Sudut Membulat**: Menggunakan `border-radius: clamp(24px, 3.5vw, 36px)` yang harmonis dan proporsional.
      - **Struktur Ringkas Tanpa Teks Subtitle**: Subtitle teks dihilangkan sesuai instruksi, sehingga kartu hanya memuat judul ajakan (`copy.finalCta.title`) yang langsung diikuti tombol aksi WhatsApp (`copy.finalCta.cta`).
      - **Tombol Kontras Tinggi**: Tombol aksi menggunakan warna `--ink` solid (`#111111`) dengan teks putih dan efek hover invert ke aksen, memastikan keterbacaan tajam dan kontras WCAG AAA (18.88:1).
      - **Objek Modular Kanan (Medium Tactile SVG)**: Di sisi kanan judul dan tombol, diletakkan objek grafis modular website berukuran sedang (`max-width: 240px`) yang menampilkan sasis website miring bergradasi netral, pill badge domain, dan rak server proporsional.
      - Responsif: Pada layar desktop (>= 768px), konten teks dan tombol di sisi kiri sejajar berdampingan dengan objek grafis di sisi kanan; pada mobile, elemen tertata rapi vertikal ke tengah dengan jarak aman.
12. **Redesain Footer (Latar Ink Gelap & Tipografi Kontras Tinggi - LOCKED)**:
    - Sesuai arahan spesifik pemilik bisnis:
      - Seluruh penampang footer (`.site-footer`) kini berlatar belakang warna `--ink` (`#111111`) penuh dari ujung ke ujung.
      - Garis pemisah atas (`border-top`) dihilangkan agar transisi dari kanvas putih dan kartu Final CTA terasa tenang dan bersih.
      - **Tipografi & Kontras Aksesibilitas**:
        - Teks merek (`.brand`) dan link menu/WhatsApp menggunakan warna `#FFFFFF` (rasio kontras 18.88:1 - WCAG AAA).
        - Tagline menggunakan warna `#A3A39E` (rasio kontras 7.45:1 - WCAG AAA).
        - Copyright menggunakan warna `#8A8A85` (rasio kontras 5.44:1 - WCAG AA).
      - Efek hover pada seluruh tautan navigasi dan nomor WhatsApp bertransisi ke warna aksen `--accent` (`#E4FF30`, rasio kontras 16.77:1 terhadap ink).
13. **Peniadaan Border pada Seluruh Tombol (Borderless Buttons - LOCKED)**:
    - Sesuai arahan spesifik pemilik bisnis untuk menghilangkan border pada semua tombol:
      - Seluruh tombol WhatsApp utama (`WhatsAppButton.astro`: Navbar, Hero, Paket Starter/Business/Growth, Custom Package) kini menggunakan `border: none;` dengan latar aksen `--accent` solid dan modern.
      - Tombol Final CTA (`FinalCta.astro`) kini menggunakan `border: none !important;` dengan latar `--ink` solid dan bayangan lembut.
      - Tombol proyek aktif (`.project-btn-active`) kini menggunakan `border: none;`.
      - Tombol proyek nonaktif (`.project-btn-disabled`) kini menggunakan latar belakang `var(--surface)` dengan `border: none;`.
      - Kartu tombol proyek minimized (`.minimized-project-card`) dan badge inisial (`.minimized-badge`) kini berlatar `var(--surface)` bersih tanpa border (`border: none;`).
      - Seluruh tombol tetap mempertahankan indikator fokus keyboard visual yang tegas (`:focus-visible` outline 2px solid var(--ink) dengan offset 3px) demi kepatuhan penuh standar aksesibilitas WCAG AA dan panduan antislop.
14. **Sorotan Garis Teks (Line Highlight 1/4 Tinggi Teks - LOCKED)**:
    - Sesuai arahan spesifik pemilik bisnis untuk mengubah gaya highlight teks menjadi sorotan garis (line highlight) setinggi 1/4 (25%) teks:
      - Catatan peluncuran Starter (`copy.packages.items.starter.launchNote`: "Harga peluncuran untuk 10 klien pertama.") kini menggunakan `linear-gradient(180deg, transparent 75%, var(--accent) 75%)` dengan `-webkit-box-decoration-break: clone; box-decoration-break: clone;` dan `display: inline;` sehingga tiap baris teks mendapatkan garis highlight aksen yang presisi di 25% bagian bawah teks.
      - Sorotan harga Hero (`copy.hero.price`: "Mulai Rp450.000.") kini juga diselaraskan menggunakan `linear-gradient(180deg, transparent 75%, var(--accent) 75%)` dengan `box-decoration-break: clone;` dan `display: inline;`.
      - Efek blok latar penuh tebal digantikan garis aksen editorial yang bersih, ringan, dan proporsional.

---

## 3. Hasil Pengujian & Verifikasi

### A. Otomatisasi Build & Typecheck
```powershell
npm run build
```
- `astro check`: **0 errors, 0 warnings, 0 hints** (21 files diperiksa).
- `astro build`: Sukses menghasilkan direktori `dist/` dalam waktu <1 detik.
- Build mencetak peringatan aman `console.warn` untuk URL Jerseay yang masih berstatus OPEN.

### B. Kontras Warna WCAG AA (`contrast-check.py`)
Semua pasangan warna diuji dengan skrip resmi `.agents/skills/antislop-human/contrast-check.py`:
- `--ink` (`#111111`) di atas `--canvas` (`#FFFFFF`): **18.88:1** (LULUS WCAG AAA)
- `--ink-muted` (`#55554F`) di atas `--canvas` (`#FFFFFF`): **7.50:1** (LULUS WCAG AAA)
- `--ink` (`#111111`) di atas `--accent` (`#E4FF30`): **16.77:1** (LULUS WCAG AAA)
- `--ink-muted` (`#55554F`) di atas `--surface` (`#F5F5F2`): **6.87:1** (LULUS WCAG AA)
- Teks putih (`#FFFFFF`) di atas footer `--ink` (`#111111`): **18.88:1** (LULUS WCAG AAA)
- Aksen `--accent` (`#E4FF30`) di atas footer `--ink` (`#111111`): **16.77:1** (LULUS WCAG AAA)
- Tagline (`#A3A39E`) di atas footer `--ink` (`#111111`): **7.45:1** (LULUS WCAG AAA)
- Copyright (`#8A8A85`) di atas footer `--ink` (`#111111`): **5.44:1** (LULUS WCAG AA)

### C. Pemindaian Pola Terlarang
- Pencarian em dash `—` di seluruh `src/` dan `dist/index.html`: **0 temuan**.
- Pencarian kata klise AI / buzzwords di seluruh `src/` dan `dist/index.html`: **0 temuan**.
- Pencarian `outline: none` tanpa fokus pengganti: **0 temuan**.
- Pencarian `localStorage`, `sessionStorage`, `document.cookie`: **0 temuan**.
- Verifikasi teks pelanggan di komponen: seluruh teks diimpor dari `src/content/copy.ts`.

### D. Parameter URL WhatsApp & Meta Tracking
Tepat 8 tautan WhatsApp diuji pada file output build `dist/index.html` (sesuai tabel `CONTENT.md` Bagian 11):
1. `nav`: `Halo%20ENLESWEB%2C%20saya%20mau%20tanya%20tentang%20pembuatan%20website.` (topic: `pembuatan website`, location: `nav`)
2. `hero`: topic: `pembuatan website`, location: `hero`
3. `package_starter`: topic: `paket Starter`, location: `package_starter`
4. `package_business`: topic: `paket Business`, location: `package_business`
5. `package_growth`: topic: `paket Growth`, location: `package_growth`
6. `package_custom`: topic: `paket Custom`, location: `package_custom`
7. `final_cta`: topic: `pembuatan website`, location: `final_cta`
8. `footer`: topic: `pembuatan website`, location: `footer`

### E. Verifikasi Toggle `showLaunchNote`
- Diuji dengan `showLaunchNote: false`: teks `Harga peluncuran untuk 10 klien pertama.` berhasil hilang dari output build.
- Dikembalikan ke `showLaunchNote: true` (LOCKED default): catatan tampil kembali dengan sorotan aksen pada kartu Starter.

### F. Verifikasi Dukungan Gambar Proyek (`astro:assets`)
- Diuji dengan menambahkan file gambar pada `src/assets/projects/jerseay.png`: Astro berhasil mendeteksi via `import.meta.glob`, memproses gambar responsif WebP optimal, dan me-render tag `<img>` dengan `alt="Jerseay tampilan website"` serta `object-fit: cover`.
- Diuji saat file gambar tidak ada: komponen otomatis menampilkan typographic placeholder `--surface` dengan nama proyek.

---

## 4. Item OPEN yang Tersisa untuk Pemilik Bisnis

Sesuai `SPEC.md` Bagian 14, berikut adalah nilai placeholder `TODO(OPEN)` yang siap diganti oleh pemilik di `src/config/site.ts`:

1. `whatsappNumber`: Saat ini masih nomor dummy `'6200000000000'`. Ganti dengan nomor WhatsApp aktif (tanpa +, tanpa spasi, diawali kode negara 62).
2. `metaPixelId`: Telah terkonfigurasi dengan ID Meta Pixel resmi `'1099411523003859'` (CLOSED).
3. `site.projects[0].url`: URL demo Jerseay saat ini masih kosong `''`. Isi dengan URL website demo Jerseay agar tombol otomatis aktif.
4. `siteUrl`: Saat ini masih kosong `''`. Isi dengan domain final (misal `https://enlesweb.id`) untuk mengaktifkan tag canonical dan `og:url`.
5. `public/og-image.png`: Belum disediakan. Tempatkan file gambar pratinjau (rekomendasi 1200x630) di folder `public/`.
6. Screenshot proyek nyata: Placeholder tipografi saat ini aktif secara otomatis di `src/components/ProjectItem.astro`. Bila ada screenshot, tempatkan di `src/assets/projects/{id}.webp` atau `.png`.
7. Kebijakan privasi & cookie consent banner: Keputusan hukum di tangan pemilik bisnis sebelum Pixel diaktifkan.
