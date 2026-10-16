# Technical Architecture & Engineering Specification (SPEC.md)

# Jerseay: Website Studio Jersey Kustom

**Versi Dokumen:** 3.0  
**Status:** Sinkron Penuh dengan Implementasi As-Is Website Terkini (Tingkat Growth ENLESWEB)  
**Tanggal:** Oktober 2026  
**Standar Bahasa:** Teknis, Presisi, Berorientasi Kode, Bebas Em Dash (U+2014) dan En Dash (U+2013)  

---

## 1. Stack Teknologi & Runtime

| Lapisan | Teknologi | Versi | Peran & Justifikasi Arsitektur |
| :--- | :--- | :--- | :--- |
| **Framework** | Astro | `^5.18.2` | Static Site Generation (SSG) murni. Menghasilkan HTML statis tanpa JS overhead untuk konten portofolio dan rendering terhidrasi parsial untuk komponen interaktif. |
| **Styling** | Tailwind CSS | `^3.4.17` | Utility-first styling via `@astrojs/tailwind` v6.0.2. Sistem token desain terkontrol tanpa CSS eksternal yang tidak terpakai. |
| **Bahasa** | TypeScript | `^5.9.3` | Type-safety untuk model data studi kasus, skema konfigurasi kit, logika roster, utilitas kontras WCAG, dan validasi brief. |
| **Runtime & Node** | Node.js | `>= 22.x` | Lingkungan eksekusi build dan skrip verifikasi otomatis menggunakan native type stripping (`--experimental-strip-types`). |
| **Penyimpanan Klien** | Web Storage API | Native | Penyimpanan draf kit dan draf brief sisi klien via `localStorage` tanpa ketergantungan server backend. |
| **Keluaran Data** | WhatsApp API & CSV | Native | Kompilasi data ke WhatsApp URI scheme (`wa.me`) dan Blob berkas `.csv` (UTF-8 BOM). |

---

## 2. Struktur Direktori Aktual

```text
jerseay/
├── public/
│   ├── favicon.svg
│   └── images/
│       ├── hero-banner.jpg           # Foto hero 16:9 beresolusi tinggi
│       ├── featured-futsal.jpg        # Foto siluet utama futsal
│       ├── featured-futsal-detail.jpg # Foto makro jahitan kerah futsal
│       ├── project-cycling.jpg        # Foto siluet balap sepeda
│       ├── project-cycling-detail.jpg # Foto detail saku & tekstur sepeda
│       ├── project-esports.jpg        # Foto siluet jersey esports
│       ├── project-esports-detail.jpg # Foto detail kerah & print esports
│       └── project-basket.jpg         # Foto siluet jersey basket
├── scripts/
│   ├── ts-resolver.mjs               # Custom loader untuk impor TypeScript di pengujian Node.js
│   └── verify-rancang.mjs            # Skrip verifikasi QA otomatis (10 subtest fungsional & antislop)
├── src/
│   ├── config/
│   │   └── site.ts                   # Konfigurasi studio terpusat (navLinks, mode demo, kontak WhatsApp)
│   ├── content/
│   │   └── rancang.ts                # Copy deck modul konfigurator (label, tombol, pesan error, modal)
│   ├── data/
│   │   ├── configurator.ts           # Data opsi cabang, siluet, palet preset, zona logo, & aturan cabang
│   │   ├── projects.ts               # Data portofolio, lookbook 3 spread, & swatch warna
│   │   └── services.ts               # Data spesialisasi cabang olahraga & mikro-spesifikasi
│   ├── layouts/
│   │   └── BaseLayout.astro          # Shell HTML5, meta SEO/OG, skip link, slot, dan FAB WhatsApp kontekstual
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.astro          # Komponen tombol serbaguna (Primary, Secondary, Ghost, Inverted)
│   │   │   ├── Container.astro       # Kontainer pembungkus lebar maksimal (1240px)
│   │   │   ├── Icon.astro            # Komponen ikon SVG terenkapsulasi
│   │   │   └── Section.astro         # Kontainer section semantik dengan padding vertikal terukur
│   │   ├── navigation/
│   │   │   ├── Navbar.astro          # Header sticky, transisi scroll beranda, & drawer mobile 5 menu
│   │   │   └── Footer.astro          # Footer arsitektural 3 kolom dengan penanda konsep ENLESWEB
│   │   ├── home/
│   │   │   ├── HomeHero.astro        # Banner sinematik 16:9 dengan aksi ganda Rancang Kit & Mulai Brief
│   │   │   ├── FeaturedProject.astro # Showcase proyek futsal Surabaya (7:5)
│   │   │   ├── ProjectPreview.astro  # Grid 3 kolom proyek cabang olahraga lain
│   │   │   ├── ProcessPreview.astro  # Alur horizontal 4 tahap alur kerja
│   │   │   └── HomeFinalCTA.astro    # Section penutup beranda dengan tombol Mulai Brief & Rancang Kit
│   │   ├── project/
│   │   │   └── VisualGallery.astro   # Galeri lookbook 3 spread (depan, detail, sistem pola)
│   │   ├── conversion/
│   │   │   └── FloatingWhatsApp.astro# FAB WhatsApp bulat (fixed bottom-6 right-6) dengan konteks rute
│   │   └── configurator/
│   │       ├── ColorPicker.astro     # Pemilih warna primer, sekunder, aksen, & kalkulator kontras WCAG
│   │       ├── JerseyPreview.astro   # Renderer SVG interaktif jersey tampak depan & belakang
│   │       ├── LogoZones.astro       # Selektor penempatan 6 zona logo sponsor tim
│   │       ├── PatternPicker.astro   # Pemilih pola panel geometris SVG dan intensitas
│   │       ├── RosterTable.astro     # Tabel roster pemain, validasi duplikasi, & batch paste modal
│   │       ├── Stepper.astro         # Komponen navigasi langkah 1 sampai 5
│   │       └── SummaryPanel.astro    # Ringkasan spesifikasi kit, distribusi ukuran, WhatsApp, & ekspor CSV
│   ├── lib/
│   │   ├── brief.ts                  # Penyusun pesan WhatsApp brief adaptif & pesan konfigurator
│   │   ├── color.ts                  # Utilitas normalisasi dan validasi kode warna hex
│   │   ├── contrast.ts               # Algoritma perhitungan luminansi relatif & rasio kontras WCAG
│   │   ├── roster.ts                 # Parser teks roster batch, validasi baris, dan generator CSV UTF-8 BOM
│   │   ├── storage.ts                # Manajemen penyimpanan draf lokal browser (localStorage)
│   │   └── whatsapp.ts               # Utilitas sanitasi nomor & pembuat tautan WhatsApp per halaman
│   ├── pages/
│   │   ├── 404.astro                 # Halaman status Not Found arsitektural
│   │   ├── index.astro               # Rute beranda (/)
│   │   ├── layanan/
│   │   │   └── index.astro           # Rute katalog spesialisasi (/layanan)
│   │   ├── proses/
│   │   │   └── index.astro           # Rute kanvas alur kerja kurva Bezier (/proses)
│   │   ├── mulai-brief/
│   │   │   └── index.astro           # Rute formulir brief builder adaptif (/mulai-brief)
│   │   ├── rancang/
│   │   │   └── index.astro           # Rute modul konfigurator kit & roster builder (/rancang)
│   │   └── proyek/
│   │       ├── index.astro           # Rute arsip portofolio (/proyek)
│   │       └── [project].astro       # Rute dinamis studi kasus (/proyek/[slug])
│   ├── styles/
│   │   └── global.css                # Reset global, seleksi teks, & optimasi scroll
│   └── utils/
│       └── whatsapp.ts               # Wrapper utilitas WhatsApp untuk backward compatibility
├── astro.config.mjs
├── package.json
├── tailwind.config.mjs
└── tsconfig.json
```

---

## 3. Rute & Strategi Rendering Halaman

Website Jerseay mengimplementasikan arsitektur Multi-Page statis murni tanpa ketergantungan runtime server. Total terdapat **10 halaman utama** ditambah **1 halaman 404**:

| Rute URL | Berkas Sumber | Metode Rendering | Sumber Data | Jumlah Halaman Dihasilkan |
| :--- | :--- | :--- | :--- | :--- |
| `/` | `src/pages/index.astro` | SSG (Statis) | `siteConfig`, `projects` | 1 |
| `/proyek` | `src/pages/proyek/index.astro` | SSG (Statis) | `projects` | 1 |
| `/proyek/[project]` | `src/pages/proyek/[project].astro` | SSG via `getStaticPaths()` | `projects` | 4 halaman (`futsal-liga-surabaya`, `sepeda-bandung-barat`, `esports-turnamen-nasional`, `basket-jakarta-selatan`) |
| `/layanan` | `src/pages/layanan/index.astro` | SSG (Statis) | `services`, `whatsapp` | 1 |
| `/proses` | `src/pages/proses/index.astro` | SSG (Statis) | Array `nodes` lokal | 1 |
| `/rancang` | `src/pages/rancang/index.astro` | SSG (Statis) | `configurator.ts`, `rancang.ts` | 1 |
| `/mulai-brief` | `src/pages/mulai-brief/index.astro` | SSG (Statis) | `siteConfig`, `brief.ts` | 1 |
| `/404` | `src/pages/404.astro` | SSG (Statis) | `siteConfig` | 1 (Halaman status Not Found) |
| **Total** | | | | **10 Halaman Utama + 1 Halaman 404** |

### Implementasi `getStaticPaths()` pada `/proyek/[project].astro`
```typescript
export function getStaticPaths() {
  return projects.map((project, index) => {
    const nextIndex = (index + 1) % projects.length;
    const nextProject = projects[nextIndex];
    return {
      params: { project: project.slug },
      props: { project, nextProject },
    };
  });
}
```

---

## 4. Spesifikasi Kontrak Komponen & Props

### 4.1 Shell Layout: `BaseLayout.astro`
- **Props Interface:**
  ```typescript
  interface Props {
    title?: string;
    description?: string;
    ogImage?: string;
    whatsappContext?: WhatsAppLocation;
    whatsappDetail?: string;
  }
  ```
- **Fitur Shell:**
  - Injeksi `<meta name="robots" content="noindex, nofollow" />` untuk kepatuhan konsep demo.
  - Tautan aksesibel skip-to-content (`#main-content`).
  - Slot `header`, `default` (konten di dalam `<main>`), `footer`, dan `floating`.
  - Injeksi otomatis `FloatingWhatsApp.astro` dengan konteks rute spesifik.

### 4.2 Komponen Konversi: `FloatingWhatsApp.astro`
- **Props Interface:**
  ```typescript
  interface Props {
    context?: WhatsAppLocation;
    detail?: string;
    class?: string;
  }
  ```
- **Logika:** Menghasilkan URL chat WhatsApp kontekstual melalui `getWhatsAppUrl(context, detail)` dan menandai elemen tautan dengan atribut `data-cta-location={context}`.

### 4.3 Komponen Modul Konfigurator (`src/components/configurator/`)
1. **`JerseyPreview.astro`:**
   - Props: Menerima konfigurasi siluet, warna primer/sekunder/aksen/nomor, nama tim, nomor dada, motif pola, dan zona logo.
   - Output: Elemen SVG inline dua sisi (depan dan belakang) dengan layer panel yang terpisah dan terindeks atribut `data-part`.
2. **`ColorPicker.astro`:**
   - Menyediakan antarmuka pemilihan warna berbasis hex, swatch palet preset, dan kalkulator rasio kontras WCAG real-time.
3. **`PatternPicker.astro`:**
   - Menyediakan pilihan pola panel (`none`, `grid45`, `hlines`, `angled`, `dots`) dan sakelar intensitas (`soft`, `medium`, `bold`).
4. **`LogoZones.astro`:**
   - Menyediakan kontrol penempatan logo sponsor tim pada 6 zona strategis jersey.
5. **`RosterTable.astro`:**
   - Menyediakan tabel data pemain dengan baris dinamis, modal tempel daftar teks massal, validasi nomor duplikat, dan penghitung total ukuran.
6. **`Stepper.astro`:**
   - Komponen indikator progres 5 langkah dengan penanganan klik langkah sebelumnya.
7. **`SummaryPanel.astro`:**
   - Menyajikan ringkasan spesifikasi teknis, daftar ukuran, tombol pemicu unduh CSV, tombol salin teks ringkasan, dan tautan kirim ke WhatsApp.

---

## 5. Model Data & Skema TypeScript

### 5.1 Konfigurasi Studio: `src/config/site.ts`
```typescript
export interface NavLink {
  label: string;
  href: string;
}

export const siteConfig = {
  name: "Jerseay",
  tagline: "Studio Jersey Kustom",
  description: "Studio jersey kustom untuk tim dan komunitas dari eksplorasi desain hingga file siap produksi.",
  demoMode: true,
  enleswebWhatsappNumber: "6285156801570",
  studioWhatsappNumber: process.env.PUBLIC_WHATSAPP_NUMBER || "",
  whatsappNumber: "6285156801570",
  enleswebUrl: "https://enlesweb.com",
  hours: "Senin - Sabtu: 09:00 - 18:00 WIB",
  location: "Indonesia",
  navLinks: [
    { label: "Studio", href: "/" },
    { label: "Proyek", href: "/proyek" },
    { label: "Layanan", href: "/layanan" },
    { label: "Proses", href: "/proses" },
    { label: "Rancang", href: "/rancang" },
  ] as NavLink[],
  primaryCta: {
    label: "Mulai Brief",
    href: "/mulai-brief",
  },
};
```

### 5.2 Model Data Konfigurator: `src/data/configurator.ts`
```typescript
export type SportSlug = 'futsal-football' | 'cycling' | 'esports' | 'basket' | 'community';
export type PatternId = 'none' | 'grid45' | 'hlines' | 'angled' | 'dots';
export type PatternIntensity = 'soft' | 'medium' | 'bold';
export type SizeCode = 'S' | 'M' | 'L' | 'XL' | 'XXL';
export type KitVariantId = 'home' | 'away' | 'keeper';
export type LogoZoneId =
  | 'chest-left'
  | 'chest-center'
  | 'sleeve-left'
  | 'sleeve-right'
  | 'back-upper'
  | 'back-lower';

export interface KitColors {
  primary: string;   // Format #RRGGBB
  secondary: string;
  accent: string;
  text: string;
}

export interface KitVariant {
  id: KitVariantId;
  name: string;
  colors: KitColors;
}

export interface KitConfig {
  version: 1;
  teamName: string;
  sport: SportSlug | null;
  silhouetteId: string;
  variants: KitVariant[];
  pattern: PatternId;
  patternIntensity: PatternIntensity;
  typeface: 'bold' | 'technical';
  logoZones: LogoZoneId[];
  chestNumber: boolean;
  includeBottoms: boolean;
  targetDate: string;
  notes: string;
  sportOptions: Record<string, string | boolean | number>;
  updatedAt: number;
}

export interface RosterEntry {
  id: string;
  name: string;
  number: number | null;
  size: SizeCode | null;
  variant: KitVariantId;
}
```

### 5.3 Konteks WhatsApp & Manajemen Pesan: `src/lib/whatsapp.ts`
```typescript
export type WhatsAppLocation =
  | 'home'
  | 'proyek_index'
  | 'proyek_detail'
  | 'layanan'
  | 'proses'
  | 'mulai_brief'
  | 'rancang'
  | 'not_found'
  | 'hero'
  | 'service'
  | 'portfolio'
  | 'faq'
  | 'final'
  | 'sticky'
  | 'general';

export const MAX_ENCODED_LENGTH = 1800;

export function sanitizeWhatsAppNumber(rawNumber: string): string;
export function getActiveWhatsAppNumber(): string;
export function getWhatsAppMessage(location?: WhatsAppLocation, detail?: string): string;
export function getWhatsAppUrl(location?: WhatsAppLocation, detail?: string): string;
export function buildLongMessageUrl(phone: string, full: string, compact: string): string;
```

---

## 6. Logika Interaktivitas Sisi Klien

### 6.1 Kalkulator Rasio Kontras WCAG (`src/lib/contrast.ts`)
1. Menghitung luminansi relatif RGB standar sRGB sesuai formula W3C:
   $$\text{luminansi} = 0.2126 \times R + 0.7152 \times G + 0.0722 \times B$$
2. Menghitung rasio kontras antara warna teks nomor dan warna latar jersey:
   $$\text{rasio} = \frac{L_1 + 0.05}{L_2 + 0.05}$$
3. Memberikan klasifikasi keterbacaan:
   - $\ge 7.0$: Sangat terbaca (Lolos WCAG AAA)
   - $\ge 4.5$: Terbaca (Lolos WCAG AA)
   - $\ge 3.0$: Kurang terbaca dari jarak jauh
   - $< 3.0$: Sulit terbaca (Peringatan kontras rendah)

### 6.2 Parser & Validasi Roster Pemain (`src/lib/roster.ts`)
- **Pemisah Delimiter:** Mendukung pemisahan koma (`,`), titik koma (`;`), tab (`\t`), atau pipa (`|`).
- **Validasi Data:**
  - Nama pemain: maksimal 14 karakter, hanya karakter alfabetis, numerik, spasi, titik, tanda hubung, dan apostrof.
  - Nomor punggung: integer rentang `0` sampai `99`.
  - Duplikasi nomor: mendeteksi nomor yang sama pada kit varian yang sama dan menandai baris yang berkonflik.
  - Batas maksimal: 40 pemain per berkas.
- **Ekspor CSV:** Menghasilkan string CSV berawalan UTF-8 Byte Order Mark (`\uFEFF`) dengan header kolom `Nama,Nomor,Ukuran,Kit` dan tanda kutip aman untuk karakter koma.

### 6.3 Penyimpanan Draf Lokal (`src/lib/storage.ts`)
- Menyimpan konfigurasi kit dan daftar roster ke `localStorage` dengan penanganan galat jika kuota peramban penuh atau fitur dinonaktifkan (`SecurityError`).
- Memulihkan data draf secara otomatis saat halaman `/rancang` dimuat kembali.

### 6.4 Formulir Brief Adaptif (`src/pages/mulai-brief/index.astro`)
- Memantau perubahan pada dropdown `Cabang Olahraga` dan menampilkan grup input adaptif yang relevan secara dinamis (`#adaptive-futsal`, `#adaptive-cycling`, `#adaptive-esports`, `#adaptive-basket`, `#adaptive-community`).
- Mengumumkan kemunculan bidang tambahan kepada pembaca layar melalui container ARIA live (`#adaptive-field-announcement`).
- Menyimpan nilai isian formulir ke `localStorage` secara seketika dan memulihkannya saat halaman dimuat ulang.

### 6.5 Kanvas Diagram Alur Kerja Kurva Bezier (`src/pages/proses/index.astro`)
- Mengukur koordinat tepat dari socket keluar (`node-socket-out`) dan socket masuk (`node-socket-in`) dari setiap stasiun kerja.
- Menghasilkan kurva kubik Bezier SVG (`path data d="M ... C ... "`) yang menghubungkan stasiun kerja secara visual.
- Memperbarui garis kabel secara reaktif melalui event listener `resize` dan `ResizeObserver`.

---

## 7. Sistem Token Desain & Styling Tailwind

```javascript
// tailwind.config.mjs
theme: {
  extend: {
    colors: {
      black: {
        950: '#0A0A0A',
        900: '#111111',
        800: '#1A1A1A',
      },
      gray: {
        700: '#404040',
        600: '#595959',
        500: '#737373',
        300: '#D4D4D4',
        200: '#E5E5E5',
        100: '#F5F5F5',
      },
    },
    maxWidth: {
      container: '1240px',
    },
    borderRadius: {
      xs: '4px',
      sm: '8px',
      md: '12px',
      lg: '16px',
    },
  },
}
```

---

## 8. Kepatuhan Aksesibilitas (WCAG AA), SEO, & Antislop

1. **Aksesibilitas (WCAG AA):**
   - Struktur satu tag `<main>` dan satu tag `<h1>` pada seluruh 10 halaman utama dan 1 halaman 404.
   - Tautan lewati ke konten utama (`#main-content`) pada awal dokumen.
   - Seluruh elemen sentuh memenuhi ukuran minimal 44px x 44px.
   - Peringatan formulir menggunakan `role="alert"` dan kontainer sukses menggunakan `role="status"`.
2. **SEO & Metadata:**
   - Meta title, description, dan Open Graph terkonfigurasi spesifik per rute.
   - Canonical URL dan fallback sharing metadata.
3. **Kepatuhan Antislop:**
   - 0 kemunculan karakter em dash (U+2014) dan en dash (U+2013).
   - Bebas dari statistik rekaan, review fiktif, dan kata klise marketing generik.
   - Penanda konsep tingkat Growth dicantumkan secara jujur di footer.

---

## 9. Verifikasi Kualitas & Prosedur QA

Prosedur pengujian otomatis dilakukan melalui skrip pengujian bawaan:

```bash
# Menjalankan verifikasi tipe Astro
npm run check

# Menjalankan 10 subtest fungsional dan antislop
npm run verify
```

### Cakupan 10 Subtest `verify-rancang.mjs`:
1. `contrastRatio`: Menghitung rasio luminansi WCAG secara akurat.
2. `ratioLabel`: Memvalidasi ambang batas label keterbacaan nomor.
3. `normalizeHex`: Normalisasi format hex dan penolakan format tidak valid.
4. `parseRosterText`: Parsing pemisah koma, titik koma, tab, pipa, dan penandaan baris rusak.
5. `validateRoster`: Validasi nomor ganda, nomor di luar batas 0-99, dan batas panjang nama 14 karakter.
6. `rosterToCsv`: Memverifikasi awalan UTF-8 BOM, header kolom, dan tanda kutip pada data berkoma.
7. `buildBriefMessage & buildConfiguratorMessage`: Memverifikasi pesan WhatsApp, disclaimer warna, dan mode demo.
8. `buildLongMessageUrl`: Memverifikasi fallback URL ringkas jika panjang pesan melebihi 1800 karakter.
9. `Audit Teks Antislop`: Memverifikasi 0 em dash, 0 en dash, dan 0 kata terlarang di seluruh folder `src/`.
10. `Audit Struktur Dist`: Memverifikasi tepat satu tag `<h1>` dan satu tag `<main>` per halaman, serta keberadaan tepat 10 halaman utama dan 1 halaman 404 di direktori `dist/`.
