# DESIGN.md - Seruput Kopi
Versi 3.0 (As-Is Visual & Design Specification)
Tanggal: 14 Oktober 2026

Dokumen ini adalah spesifikasi desain terkunci permanen untuk website **Seruput Kopi** (Paket Starter ENLESWEB, Layout A). Dokumen ini mengunci tata letak hero Center Stage Receipt (Menu-as-Hero), artefak fisik struk kasir potongan lurus (*straight-cut thermal receipt*), palet warna P1 Merah Tomat Jenuh + Putih Tulang + Hitam Arang, mini-galeri suasana diptych, etalase biji kopi sangrai, social proof kartu kutipan, serta kepatuhan penuh terhadap standar antislop.

Status: SELURUH STATUS TERKUNCI (LOCKED).

---

## 1. Karakter dan Target Rasa

### 1.1 Target Rasa (LOCKED)
Hangat, bersahaja, santai, dan akrab. Mengacu pada kedai kopi mandiri di tepi kanal Venice yang mengutamakan kejujuran rasa, kejelasan informasi racikan, jam buka pasti, dan kenyamanan pengunjung tanpa pretensi estetika korporat atau jargon filosofis yang muluk.

### 1.2 Dials Liveliness Antislop (LOCKED)
* **ENERGY 2 (Balanced):** Kontras tegas antara kanvas hero merah tomat jenuh (`#CE3216`) dengan rol struk putih bersih (`#FFFFFF`) dan kanvas utama putih tulang (`#FBF9F5`).
* **RHYTHM 2 (Consistent dengan variasi bertingkat):** Alur naratif satu kolom vertikal (Layout A) yang mengalir teratur dari objek rol struk kasir menu-as-hero, cerita kedai yang intim dengan mini-galeri foto daylight natural, etalase 3 kartu biji kopi sangrai, 3 kartu kutipan ulasan konkret, papan jam buka dan alamat cardless dengan dotted leaders, hingga penutup footer yang bersih.
* **MOTION 1 (Static & Fungsional):** Transisi interaktif dasar 150ms pada hover dan fokus. Tidak ada scroll-jacking, tidak ada parallax, tidak ada carousel otomatis. Penuh kepatuhan pada `prefers-reduced-motion`.

---

## 2. Token Desain (CSS Custom Properties - LOCKED)

```css
:root {
  /* PALET WARNA P1: MERAH TOMAT JENUH + PUTIH TULANG + HITAM ARANG (LOCKED) */
  --canvas-hero: #CE3216;       /* Merah tomat jenuh tegas untuk hero section (Risk Card 5) */
  --canvas: #FBF9F5;            /* Putih tulang hangat untuk kanvas utama */
  --surface-receipt: #FFFFFF;   /* Kertas thermal putih bersih untuk struk kasir */
  --surface: #FFFFFF;           /* Permukaan putih bersih untuk section board & kartu */
  --surface-subtle: #F2EFE9;    /* Lapis halus untuk aksen, chip, dan disclaimer */
  --ink-hero: #FFFFFF;          /* Putih bersih untuk heading H1 di atas kanvas hero */
  --ink: #141414;               /* Hitam arang tegas untuk teks struk, body, dan heading */
  --ink-muted: #555555;         /* Abu arang sedang untuk deskripsi dan teks pendukung */
  --line: #E2DDD5;              /* Garis pembatas halus antar komponen */
  --line-receipt: #D0CBC2;      /* Garis pemisah putus-putus pada struk kasir */
  --accent: #CE3216;            /* Merah tomat jenuh untuk stempel dan kategori */
  --accent-hover: #AF250D;      /* State hover aksen */
  --wa: #25D366;                /* Hijau WhatsApp resmi */
  --wa-hover: #20BA5A;          /* Hover hijau WhatsApp */
  --focus-outline: #CE3216;     /* Outline fokus keyboard tegas */

  /* TIPOGRAFI TERVERIFIKASI FONTSOURCE (LOCKED) */
  --font-display: 'Bricolage Grotesque', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono: 'Space Mono', monospace, ui-monospace;
  --font-body: 'Bricolage Grotesque', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

  /* SKALA RUANG (4px base) */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;

  /* RADIUS DAN GARIS (LOCKED) */
  --radius-sm: 2px;             /* Sudut elemen kecil dan chip */
  --radius: 4px;                /* Sudut tombol dan kontainer */
  --radius-receipt: 2px;        /* Potongan lurus rapi struk fisik */
  --border-subtle: 1px solid var(--line);
  --border-receipt: 1px dashed var(--line-receipt);

  /* BATAS KONTAINER */
  --container-max: 1120px;
  --reading-max: 680px;
  --transition-fast: 150ms ease-in-out;
}
```

---

## 3. Signature Element: Rol Struk Kasir Menu-as-Hero (LOCKED)

Signature element Seruput Kopi adalah selembar rol struk kasir fisik thermal panjang berpotongan lurus (*straight-cut thermal receipt roll*) yang memuat seluruh 11 menu racikan kedai langsung di hero section:

1. **Format Kertas:** Kertas thermal putih bersih (`#FFFFFF`) berlatar bayangan lembut (`box-shadow: 0 20px 48px rgba(0,0,0,0.38)`), bertekstur tipografi monospace murni (`Space Mono`), potongan atas-bawah lurus rapi (tanpa efek zigzag/gerigi kartun).
2. **Kop Toko:** Tulisan `SERUPUT KOPI.` tebal di bagian atas, disertai alamat `Fondamenta della Misericordia No. 2599, Venice | WA: 0812-3456-7890`.
3. **Stempel Cap Taktil:** Stempel kotak taktil `SEDUH DADAKAN` di sudut kanan atas dengan rotasi 3 derajat, border 2px aksen merah tomat, huruf tebal huruf besar.
4. **Metadata Nota Rata Kiri:** Label dan nilai tersusun rata kiri dengan titik dua rapi:
   - `No Nota : SK/12/1026/0042`
   - `Waktu   : Hari ini, Seduh Dadakan`
   - `Kasir   : Barista Seruput`
   - `Meja    : Meja Bar / Bebas`
5. **Daftar Menu & Dotted Leaders:** 11 racikan menu terbagi dalam 4 kategori (`KOPI ESPRESSO & SUSU`, `SEDUHAN FILTER MANUAL`, `MINUMAN NON-KOPI`, `KUDAPAN HANGAT`). Setiap baris mencantumkan kuantitas pesanan `1`, nama item, dotted leaders (`................................`), dan deskripsi bahan konkret berawalan `> `.
6. **Bebas Nominal Angka:** Struk tidak mencantumkan nominal harga kaku. Di bagian bawah tercantum pengarah: `"Harga & stok harian: Tanya via WhatsApp."` dengan tombol pemesanan langsung: `Tanya Harga & Stok via WhatsApp`.
7. **Controlled Overlap (Risk Card 4):** Struk kasir memiliki `margin-bottom: -64px`, sehingga secara fisik menyeberangi perbatasan kanvas merah tomat hero menuju kanvas putih tulang section Story.

---

## 4. Hirarki Visual & Tata Letak

### 4.1 Navbar
- Latar merah tomat jenuh (`#CE3216`), sticky saat scroll dengan efek blur ringan (`rgba(206, 50, 22, 0.96)`).
- Brand teks `Seruput Kopi` di kiri, navigasi anchor 6 tautan (`#menu`, `#tentang`, `#biji-kopi`, `#ulasan`, `#lokasi`, `#kontak`), tombol `Tanya via WhatsApp` di desktop, dan hamburger menu sentuh 44px di mobile.

### 4.2 Hero Section
- Latar merah tomat jenuh tanpa foto.
- Heading H1 besar (`clamp(2.5rem, 5.5vw, 4.25rem)`) warna putih di tengah: `Kopi Susu Gula Aren, Biji Filter Pilihan, dan Meja Santai.`
- Teks pengantar hangat tentang kedai di Fondamenta della Misericordia Venice.
- Struk Menu-as-Hero menempati center stage sebagai atraksi visual utama.

### 4.3 Cerita Kedai & Mini-Galeri (Story Section)
- Berlatar kanvas putih tulang (`#FBF9F5`) dengan padding atas mengkompensasi overlap struk kasir.
- Judul editorial H2: `Kedai Kopi Bersahaja di Kawasan Cannaregio Venice`.
- Teks naratif aktif 2 paragraf tentang kopi susu gula aren, seduhan filter, dan area teras tepi kanal.
- **Editorial Photo Diptych:** 2 foto daylight natural berkarakter (`story-brew.jpg` dan `hero-coffee.jpg`) dengan aspect ratio 16:10, berbingkai halus, dilengkapi caption monospace `Space Mono` ukuran 0.8125rem.
- Kotak transparansi konsep demo ENLESWEB.

### 4.4 Biji Kopi Sangrai (Beans Showcase Section)
- Berlatar kanvas putih tulang (`#FBF9F5`) dengan garis pembatas halus di atasnya.
- Label kategori `MEJA SANGRAI` aksen merah tomat kapital, judul H2 `Biji Kopi Pilihan dari Meja Sangrai Kami`, dan teks pengantar.
- Grid 3 kartu (desktop) / 1 kolom (mobile):
  - Border kartu halus `1px solid var(--line)`, background `var(--surface)`.
  - Header kartu: Badge proses sangrai (`Space Mono` aksen merah) dan berat bersih 200 gram.
  - Nama kopi tebal `Bricolage Grotesque` ukuran 1.25rem.
  - Asal daerah dan ketinggian dengan pemisah vertikal halus.
  - Deskripsi rasa konkret dan deretan chip *tasting notes* bersahaja.
  - Tombol pemesanan sekunder WhatsApp dengan ikon resmi dan teks `Tanya Stok Biji Kopi via WhatsApp`.

### 4.5 Catatan Meja Singgah (Social Proof Section)
- Berlatar kanvas putih tulang (`#FBF9F5`) dengan garis pembatas halus di atasnya.
- Label kategori `ULASAN PENGUNJUNG` aksen merah tomat kapital, judul H2 `Catatan dari Meja Singgah`, dan teks pengantar.
- Grid 3 kartu kutipan (desktop) / 1 kolom (mobile):
  - Tanda kutip besar elegan di sudut kiri atas kartu.
  - Paragraf kutipan bergaya miring (*italic*) yang berfokus pada rasa racikan dan ketenangan suasana.
  - Garis pemisah putus-putus (*dashed line*) di atas footer kartu.
  - Nama pengunjung (font body bold), peran/status pejalan (`Space Mono`), dan badge pesanan favorit dengan nilai aksen merah tomat.
  - Nihil foto avatar stok AI palsu dan nihil bintang review generik.

### 4.6 Jam Buka dan Lokasi (Location Section)
- Berlatar putih bersih (`#FFFFFF`) dengan garis pembatas halus.
- Papan cardless dua kolom (desktop) / satu kolom (mobile):
  - Kolom kiri: Jadwal operasional terstruktur dengan dotted leaders.
  - Kolom kanan: Alamat lengkap Venice, patokan jembatan, informasi akses teras, dan tombol `Buka di Google Maps`.

### 4.7 Kontak (Contact Section)
- Berlatar kanvas putih tulang (`#FBF9F5`).
- Judul H2: `Ada yang Ingin Kamu Tanyakan?`.
- Paragraf ajakan ramah dan tombol `Chat WhatsApp Barista`.

### 4.8 Footer
- Berlatar merah tomat jenuh (`#CE3216`).
- Identitas brand, tagline Venice, jam operasional ringkas, dan navigasi tautan 6 anchor.
- Frame peta interaktif Google Maps embed di Venice.
- Garis pembatas putih transparan dan kredit tunggal: `Website oleh ENLESWEB.`

---

## 5. Aturan Anti-Slop & Kepatuhan Visual

1. **Bebas Komentar Dekoratif:** File CSS dan markup HTML bersih dari banner ASCII, huruf kapital berteriak, dan narasi alur kerja baris-demi-baris (`antislop-code`).
2. **Fotografi Natural:** Tidak menggunakan foto AI klise dengan kedalaman ruang tipis ekstrem atau pencahayaan buatan berlebihan. Foto meja kayu dan seduhan kopi diambil dari sudut pandang mata manusia yang wajar.
3. **Kontras Aksesibel:** Seluruh teks di atas latar merah tomat menggunakan warna putih bersih (`#FFFFFF`, kontras rasio > 4.5:1), teks di atas latar putih tulang menggunakan warna hitam arang (`#141414`, kontras rasio > 14:1).
4. **Target Sentuh:** Seluruh tautan dan tombol memiliki tinggi minimal 44px dengan outline fokus keyboard tegas (`outline: 2px solid var(--focus-outline)`).
5. **Nihil Slop Gerakan:** Tidak ada slider/carousel otomatis, tidak ada bento grid klise, dan tidak ada popup testimonial melayang.
