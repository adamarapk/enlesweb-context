# DESIGN.md - dipotongin
Versi: 3.0 (As-Is Spesifikasi Desain & Visual)
Tanggal: 14 Oktober 2026

Dokumen ini mendefinisikan sistem desain visual, palet warna, tipografi, token elevasi taktil, dan tata letak website `dipotongin` persis sesuai implementasi aktual (as-is) pada kode saat ini.

---

## 1. Konsep & Benda Fisik Acuan

Sistem visual `dipotongin` didasarkan pada dua artefak fisik nyata di studio pangkas rambut pria klasik:

1. **Benda Fisik 1: Kartu Member Loyalitas Barbershop (Vintage Kraft Paper Loyalty Card)**
   * Berbahan kertas karton kraft cokelat tebal (`#C29F75`, tekstur fisik `/kraft-paper-texture.png`) dengan cetakan stempel tinta arang pekat (`#141412`), bingkai garis bersih, dan 8 lingkaran slot stempel pangkas.
2. **Benda Fisik 2: Tiket Rekomendasi Pangkas Studio (Tangible Haircut Service Ticket)**
   * Tiket fisik digital berlatar arang gelap tebal (`#1A1A18`) dengan notch setengah lingkaran khas lubang stempel/grommet di bagian atas, nomor tiket operasional, dan stempel rekomendasi berbingkai emas antik.

### Karakter Visual & Tiga Dials Desain

* **ENERGY: 2** (Tipografi letterpress berwibawa Besley dipadukan Albert Sans yang tenang dan proporsional; kontras warna mantap tanpa dekorasi berlebihan).
* **RHYTHM: 3** (Kontras komposisi asimetris Layout B: kartu saku kraft cokelat menempel di sisi kiri mendampingi papan tarif kanvas terang di sisi kanan pada layar beranda, serta alur step-by-step terfokus pada halaman kuis).
* **MOTION: 1** (Interaksi taktil mikro instan pada hover tombol; transisi fade halus pada hero carousel yang sepenuhnya patuh pada preferensi sistem `prefers-reduced-motion`).

---

## 2. Palet Warna & Token CSS

Seluruh token warna terdaftar resmi di `:root` pada `src/styles/global.css`:

```css
:root {
  /* Color Tokens */
  --canvas: #F6F5F0;          /* Latar belakang utama (Putih Kapur / Linen Kanvas) */
  --canvas-accent: #C29F75;   /* Cokelat Kraft Plakat (Aksen panel kartu member) */
  --surface: #FFFFFF;         /* Permukaan putih bersih */
  --ink: #121312;             /* Teks utama & garis struktur tegas (Hitam Arang) */
  --muted: #5A5C58;           /* Teks sekunder (Kontras WCAG AA > 4.5:1) */
  --line: #D6D4CC;            /* Garis hairline pembatas item */

  /* Member Card & Kraft Tokens */
  --card-bg: #1A1A18;         /* Substrat fisik kartu member gelap (Hitam Arang) */
  --card-border: #C29F75;     /* Emas antik / kraft bingkai kartu member */
  --card-stamp-bg: #282824;   /* Latar slot stempel */
  --card-reward: #C29F75;     /* Aksen bintang bonus stempel ke-8 */
  --card-kraft: #C29F75;      /* Warna dasar serat kertas kraft */
  --card-kraft-dark: #B49269; /* Nada gelap kertas kraft */
  --card-kraft-hover: #B59167;/* Nada hover tombol kraft */
  --card-ink: #141412;        /* Tinta stempel pekat kartu member */
  --focus: #C29F75;           /* Outline fokus aksesibilitas keyboard */
}
```

---

## 3. Tipografi

Tipografi menggunakan font resmi self-hosted via Fontsource tanpa ketergantungan CDN eksternal:

* **Headings, Wordmark & Stamp Labels:** `'Besley', Georgia, 'Times New Roman', serif` (`@fontsource/besley`), bobot 400, 600, 700, 800, 900.
  * Memberikan nuansa letterpress cetak kuno, berkarakter tegas, elegan, dan bebas dari kesan generic web korporat.
  * Wordmark Hero & Judul Seksi H2: `font-family: var(--font-heading); font-weight: 900; line-height: 1.15; letter-spacing: -0.02em s.d. -0.035em; text-wrap: balance;`
  * Heading H1 Halaman Konsultasi: `font-size: clamp(2rem, 5vw, 3rem); font-family: var(--font-heading); font-weight: 900;`
  * Judul Model Rekomendasi Tiket: `font-size: clamp(1.8rem, 4.5vw, 2.5rem); font-family: var(--font-heading); font-weight: 900;`
* **Body Text, Deskripsi, Navigasi & Label Form:** `'Albert Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` (`@fontsource/albert-sans`), bobot 400 (normal), 500 (medium), 600 (semi-bold), 700 (bold).
  * Teks Paragraf: `line-height: 1.6; text-wrap: pretty;`
* **Angka Tabular (`.tabular-nums`):**
  * `font-variant-numeric: tabular-nums; font-feature-settings: 'tnum' 1;`
  * Digunakan untuk penyelarasan angka jam operasional, estimasi waktu kuis, durasi pangkas, dan nominal tarif rupiah.

---

## 4. Sistem Elevasi & Geometri Taktil (Standar Member Card)

Seluruh tombol, kartu, dan bingkai interaktif di website distandarkan secara seragam mengikuti bahasa elevasi kartu fisik:

```css
:root {
  /* Spatial & Container */
  --max-width: 1140px;
  --header-height: 64px;

  /* Corner Radius */
  --radius-sm: 4px;   /* Lencana kecil, slot stempel, tag jam */
  --radius-md: 6px;   /* Seluruh tombol interaktif, kartu opsi kuis, notice box, drawer */
  --radius-lg: 8px;   /* Kartu member, frame embed peta, tiket rekomendasi */

  /* Tactile Elevation Tokens */
  --shadow-card: 0 16px 36px rgba(0, 0, 0, 0.16), 0 4px 12px rgba(0, 0, 0, 0.08);
  --shadow-btn: 0 4px 14px rgba(0, 0, 0, 0.18), 0 1px 3px rgba(0, 0, 0, 0.1);
  --shadow-btn-hover: 0 6px 18px rgba(0, 0, 0, 0.25), 0 2px 6px rgba(0, 0, 0, 0.14);
}
```

### 4.1 Standar Tombol & Aksesibilitas (WCAG AA & Antislop)

1. **Target Sentuh Minimum (Min Tap Target >= 44px):**
   * Seluruh tombol interaktif, link CTA, tombol navigasi wizard kuis (`btn-prev-step`, `btn-next-step`), tombol kartu kuis di sidebar (`card-quiz-link`), dan tombol callout (`btn-open-consultation`) memiliki tinggi minimum setidaknya 44px (`min-height: 44px`, tombol utama CTA WhatsApp `min-height: 48px`).
2. **Indikator Fokus Aksesibel (`:focus-visible`):**
   * Seluruh elemen interaktif memiliki state fokus yang jelas dan kontras tinggi:
     `outline: 2px solid var(--focus); outline-offset: 2px;`
3. **Tombol Utama (CTA WhatsApp):**
   * Latar: `var(--card-border)` (`#C29F75`)
   * Teks: `#121312`
   * Border: `1.5px solid var(--card-border)`
   * Font: Albert Sans (bobot 700) atau Besley (bobot 800/900)
   * Radius: `6px` (`--radius-md`)
   * Elevasi: `var(--shadow-btn)`
   * Hover: angkat `-1px` dengan `var(--shadow-btn-hover)` dan warna `var(--card-kraft-hover)` (`#B59167`)
4. **Tombol Sekunder (Instagram & Action Alt):**
   * Latar: `var(--card-bg)` (`#1A1A18`)
   * Teks: `#FFFFFF` / `#D6D4CC`
   * Border: `1.5px solid var(--card-border)`
   * Hover: latar `#2A2A26`, warna teks `#FFFFFF`
5. **Floating WhatsApp Action Button:**
   * Lingkaran penuh 56px (`border-radius: 50%`) posisi fixed di sudut kanan bawah (`bottom: 24px; right: 24px;`).
   * Latar hijau resmi WhatsApp (`#25D366`), border `2px solid #FFFFFF`, bayangan taktil `0 4px 16px rgba(0, 0, 0, 0.25)`, dan ikon resmi WhatsApp warna putih.

---

## 5. Tata Letak (Layout Architecture)

### 5.1 Hero Section Beranda
* Borderless photo carousel 6 slide berlatar studio San Marco, Venice.
* `<h1>dipotongin</h1>` tersemat secara aksesibel (`class="sr-only"`).
* Scrim gradasi gelap lembut di bagian bawah foto memastikan tombol panah dan indikator navigasi terbaca tajam.
* Dilengkapi event listener sistem terhadap `prefers-reduced-motion` untuk menghentikan auto-loop slide bagi pengunjung yang sensitif terhadap pergerakan animasi.

### 5.2 Layout B: Two-Column Editorial (Beranda)
* **Desktop (>= 1024px):**
  * Grid dua kolom: `grid-template-columns: 370px 1fr; gap: var(--space-12);`
  * Kolom kiri: Kartu member fisik kraft paper yang menempel secara sticky (`position: sticky; top: calc(var(--header-height) + 16px);`).
  * Kolom kanan: Papan daftar layanan dan tarif, dilengkapi Callout Card Kuis Konsultasi dan Kotak Tanya Tarif.
* **Mobile (< 1024px):**
  * Tumpukan kolom vertikal: Kartu member berada pada urutan pertama (`order: 1`), diikuti langsung oleh papan layanan (`order: 2`).

### 5.3 Halaman Konsultasi Gaya Rambut (`/konsultasi`)
* **Kontainer Terpusat:** Lebar optimal maksimum 780px (`max-width: 780px`) untuk meminimalkan beban kognitif pengunjung saat menjawab kuis.
* **Progress Bar Slot Stempel:** 4 slot progres horizontal yang bertransisi statusnya saat langkah berganti (aktif, selesai dengan tanda centang stempel, dan bintang reward pada langkah hasil).
* **Grid Kartu Opsi Kuis:** Grid 2 kolom pada desktop dan 1 kolom pada mobile. Kartu memiliki border `1.5px solid var(--line)`, icon ilustrasi stroke 2px, judul tebal, deskripsi singkat, dan stempel centang taktil saat kartu terpilih (`[aria-checked="true"]`).
* **Layar Tiket Rekomendasi:** Kotak tiket arang berborder emas antik dengan notch stempel setengah lingkaran di bagian atas, pembagian dua kolom (kiri: detail model potongan & tips, kanan: kotak paket layanan resmi), dan footer tombol aksi WhatsApp.

### 5.4 Seksi Lokasi & Seksi Kontak
* **Seksi Lokasi:** Dua kolom grid (Jadwal Operasional di kiri dan Alamat Studio di kanan) serta frame peta Google Maps responsif berborder emas `2px solid var(--card-border)` dengan `var(--shadow-card)`.
* **Seksi Kontak:** Kotak terbuka bergaris pembatas `2px solid var(--ink)` yang memuat tombol WhatsApp primer dan tombol Instagram sekunder berdampingan.

### 5.5 Footer Terpadu
* Grid responsif 4 kolom pada desktop:
  * Kolom 1 (1.3fr): Identitas brand `dipotongin`, tagline studio, dan alamat lengkap di Venice.
  * Kolom 2 (0.8fr): Tautan navigasi internal (Layanan & Tarif, Konsultasi Gaya, Kartu Member, Lokasi, Kontak).
  * Kolom 3 (1.1fr): Jam operasional harian dan tautan Instagram.
  * Kolom 4 (1.4fr): Frame peta Google Maps interaktif terintegrasi langsung di footer tanpa header banner terpisah.
