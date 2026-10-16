# SPEC.md - dipotongin
Versi: 3.0 (As-Is Spesifikasi Teknis & Arsitektur Kode)
Tanggal: 14 Oktober 2026

Dokumen ini mendefinisikan spesifikasi teknis, arsitektur modul, tipe data TypeScript, struktur komponen, siklus hidup state interaktif frontend, dan standar verifikasi otomatis website `dipotongin` persis sesuai implementasi kode aktual (as-is).

---

## 1. Fondasi Teknologi & Stack

* **Framework:** Astro versi 5.4.2 (Mode `output: "static"` murni, menghasilkan HTML/CSS/JS statis yang dapat di-hosting di server statis mana pun seperti Cloudflare Pages, Vercel, Netlify, atau GitHub Pages).
* **Bahasa & Compiler:** TypeScript versi 5.7.3 dalam mode ketat (`strict: true`, lolos `astro check` dengan 0 eror, 0 peringatan, dan 0 hint).
* **Styling:** CSS Scoped murni dengan custom properties global di `:root`, Flexbox, dan CSS Grid responsif tanpa dependensi framework CSS pihak ketiga (nol Tailwind, nol Bootstrap).
* **Font Hosting Lokal (Fontsource Tanpa CDN):**
  * `@fontsource/besley` (bobot 400, 600, 700, 800, 900 untuk headings, wordmark, dan lencana stempel)
  * `@fontsource/albert-sans` (bobot 400, 500, 600, 700 untuk body text, label opsi, dan angka tabular)
* **Kinerja & Privasi:** Nol tracker analitik pihak ketiga, nol cookie banner invasif, zero-bloat static assets.

---

## 2. Struktur Direktori Proyek

```text
d:\myself\experiments\klimis\
├── public/
│   ├── favicon.svg              # Ikon browser bertema gunting pangkas
│   ├── kraft-paper-texture.png  # Aset tekstur serat fisik kertas kraft
│   └── robots.txt               # Aturan perayapan mesin pencari (Disallow: / pada mode demo)
├── scripts/
│   ├── verify.mjs               # Test suite 10 aturan verifikasi otomatis
│   ├── verify-release.mjs       # Verifikasi kesiapan rilis produksi
│   └── slop-lint.mjs            # Linter pencegah pola teks generik AI
├── src/
│   ├── assets/images/           # Aset fotografi pangkas studio San Marco, Venice
│   │   ├── barbershop-interior.jpg
│   │   ├── barber-action.jpg
│   │   ├── barber-hot-towel.jpg
│   │   ├── hero-tools.png
│   │   ├── barbershop-active.jpg
│   │   └── chair-detail.png
│   ├── components/
│   │   ├── BaseHead.astro       # Metadata SEO, font import, dan noindex demo
│   │   ├── ConsultationQuiz.astro # Komponen kuis interaktif 3 langkah & tiket rekomendasi
│   │   ├── ContactSection.astro # Seksi konfirmasi kontak WhatsApp & Instagram
│   │   ├── Footer.astro         # Footer 4 kolom dengan frame embed Google Maps
│   │   ├── Hero.astro           # Photo carousel borderless dengan auto-loop & prefers-reduced-motion
│   │   ├── LocationSection.astro# Jadwal harian, alamat Venice, dan embed peta
│   │   ├── Navbar.astro         # Sticky header navigasi, pill badge kuis, dan mobile drawer
│   │   ├── ServicesSection.astro# Papan tarif pangkas 3 kategori & callout kuis gaya
│   │   ├── SidebarInfo.astro    # Kartu member fisik kraft paper 8 stempel & link kuis
│   │   ├── WhatsAppButton.astro # Tombol WhatsApp terstandar elevasi kartu member
│   │   └── FloatingWhatsApp.astro# Tombol WhatsApp mengambang lingkaran hijau resmi
│   ├── config/
│   │   └── site.ts              # Konfigurasi metadata studio dan kontak
│   ├── data/
│   │   ├── layanan.ts           # Definisi katalog layanan, harga, dan durasi
│   │   └── konsultasi.ts        # Definisi data kuis 3 langkah dan 5 profil rekomendasi
│   ├── layouts/
│   │   └── BaseLayout.astro     # Kerangka HTML utama dengan skip-link aksesibel
│   ├── lib/
│   │   └── whatsapp.ts          # Generator URL WhatsApp dan template pesan
│   ├── pages/
│   │   ├── 404.astro            # Halaman error 404 terstandar
│   │   ├── index.astro          # Beranda utama Layout B dua kolom
│   │   └── konsultasi.astro     # Halaman mandiri fitur kuis konsultasi gaya rambut
│   └── styles/
│       └── global.css           # Token desain, tipografi Besley & Albert Sans, elevasi taktil
├── astro.config.mjs             # Konfigurasi Astro
├── package.json                 # Konfigurasi package & scripts npm
├── tsconfig.json                # Konfigurasi compiler TypeScript
├── PRD.md                       # Product Requirements Document (V3.0)
├── DESIGN.md                    # Panduan Sistem Desain (V3.0)
├── CONTENT.md                   # Salinan Teks Tunggal (V3.0)
├── SPEC.md                      # Dokumen ini (Spesifikasi Teknis V3.0)
└── KLIMIS-DOCS-V3.md            # Dokumentasi Master Konsolidasi (V3.0)
```

---

## 3. Struktur Tipe Data TypeScript

### 3.1 Layanan & Tarif (`src/data/layanan.ts`)

```ts
export type ServiceCategory = 'Potong Rambut' | 'Cukur dan Rapikan' | 'Paket Perawatan';

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: string;
  category: ServiceCategory;
}

export const layananCategories: ServiceCategory[] = [
  'Potong Rambut',
  'Cukur dan Rapikan',
  'Paket Perawatan',
];

export const layananList: ServiceItem[] = [
  // 8 paket layanan resmi...
];
```

### 3.2 Kuis Konsultasi Gaya Rambut (`src/data/konsultasi.ts`)

```ts
export interface QuizOption {
  id: string;
  label: string;
  description: string;
  iconType: string;
}

export interface QuizStep {
  id: 'faceShape' | 'hairType' | 'stylingRoutine';
  stepNumber: string;
  title: string;
  subtitle: string;
  options: QuizOption[];
}

export interface HairstyleRecommendation {
  id: string;
  name: string;
  categoryName: string;
  summary: string;
  faceMatchReason: string;
  officialPackage: string;
  officialPrice: string;
  officialDuration: string;
  packageDescription: string;
  stylingTip: string;
  recommendedProduct: string;
}

export const QUIZ_STEPS: QuizStep[] = [
  // Langkah 1: Bentuk Kontur Wajah (4 opsi)
  // Langkah 2: Karakter & Tekstur Rambut (3 opsi)
  // Langkah 3: Rutinitas Styling Harian (3 opsi)
];

export const RECOMMENDATIONS: Record<string, HairstyleRecommendation> = {
  'side-part-taper': { /* Classic Low Taper & Side Part */ },
  'textured-crop': { /* Textured French Crop with Mid Fade */ },
  'taper-quiff': { /* Clean Low Taper Fade & Textured Quiff */ },
  'scissor-natural': { /* Classic Executive Scissor Cut */ },
  'clean-buzz': { /* Clean Buzz Cut with Razor Outline */ },
};

export function calculateRecommendation(
  faceShape: string,
  hairType: string,
  stylingRoutine: string
): HairstyleRecommendation {
  // Matriks logika rekomendasi deterministik di sisi klien
}
```

### 3.3 Metadata Studio (`src/config/site.ts`)

```ts
export interface OpeningHours {
  days: string;
  hours: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  address: string;
  openingHours: OpeningHours[];
  whatsappNumber: string;
  instagramUrl: string;
  mapsEmbedUrl: string;
  mapsDirectUrl: string;
  enleswebUrl: string;
}
```

### 3.4 Utilitas WhatsApp (`src/lib/whatsapp.ts`)

```ts
export type WhatsAppTopic = 'umum' | 'layanan' | 'antrean' | 'lokasi' | 'konsultasi';

export function getWhatsAppNumber(): string;
export function createWhatsAppUrl(topic: WhatsAppTopic): string;
export function getConsultationWhatsAppUrl(
  recommendedStyle: string,
  faceShape?: string,
  hairType?: string,
  officialPackage?: string
): string;
```

---

## 4. Arsitektur State & Siklus Hidup Frontend

### 4.1 State Machine Kuis Konsultasi (`ConsultationQuiz.astro`)

Kuis konsultasi diimplementasikan secara interaktif di sisi klien menggunakan JavaScript modular tanpa framework eksternal:

```text
[Langkah 01: Bentuk Wajah] -> [Langkah 02: Karakter Rambut] -> [Langkah 03: Rutinitas] -> [Hasil: Tiket Pangkas]
         ^                               ^                               ^                       |
         |_______________________________|_______________________________|___________(Ulangi)____|
```

1. **State Penyimpanan Jawaban:**
   * Objek `state.answers = { faceShape: null, hairType: null, stylingRoutine: null }`
   * Objek `state.currentStep = 1` (rentang 1 sampai 4, di mana 4 adalah layar tiket).
2. **Sinkronisasi LocalStorage:**
   * Setiap kali opsi dipilih, jawaban disimpan ke `localStorage.setItem('dipotongin_quiz_answers', JSON.stringify(answers))`.
   * Jika pengunjung me-refresh atau kembali ke halaman konsultasi, jawaban sebelumnya dimuat kembali secara otomatis.
3. **Sinkronisasi URL Search Parameters:**
   * URL browser diperbarui secara halus (`window.history.replaceState`) dengan query parameter `?step=X` untuk mendukung navigasi back button browser.
4. **Rendering Tiket Rekomendasi:**
   * Saat mencapai langkah 4, fungsi `calculateRecommendation()` mengeksekusi logika deterministik, menghasilkan nomor tiket acak (misal: `#TKT-8291`), dan merender data rekomendasi lengkap beserta tombol WhatsApp dengan draf pesan otomatis:
     > `Halo studio dipotongin, saya telah menyelesaikan Kuis Konsultasi Gaya Rambut di website dengan rekomendasi: *[Nama Model]* (Paket: *[Paket Resmi]*). Saya ingin menanyakan ketersediaan bangku pangkas.`

### 4.2 Hero Photo Carousel & Reduced Motion (`Hero.astro`)

1. **Auto-Loop Interval:** Interval perputaran otomatis berjalan setiap 5000ms.
2. **Pemeriksaan `prefers-reduced-motion`:**
   ```javascript
   const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
   if (prefersReducedMotion.matches) {
     // Hentikan auto-timer dan pertahankan transisi instan
   }
   prefersReducedMotion.addEventListener('change', (e) => {
     if (e.matches) stopAutoLoop();
     else startAutoLoop();
   });
   ```
3. **Hover & Keyboard Pause:** Auto-loop dijeda ketika kursor berada di atas area carousel (`mouseenter`) atau saat elemen menerima fokus keyboard (`focusin`).

---

## 5. Verifikasi Kualitas Otomatis (`scripts/verify.mjs`)

Test suite otomatis menjalankan 10 gerbang uji kualitas (*quality gates*) pada seluruh kode sumber `src/` dan output build `dist/`:

1. **Aturan 1 (Ketiadaan Dash Tipografis Terlarang):** 0 karakter em-dash (—) dan en-dash (–) di seluruh file `.astro`, `.ts`, dan `.html`.
2. **Aturan 2 (Heading Tunggal):** Tepat 1 tag `<h1>` pada halaman beranda (`index.html`).
3. **Aturan 3 (Validitas Internal Anchor):** Seluruh anchor link internal (`#layanan`, `#kartu-member`, `#lokasi`, `#kontak`) terverifikasi memiliki ID yang cocok di DOM seluruh halaman dist.
4. **Aturan 4 (Nol Tautan Kosong):** Ketiadaan tautan placeholder `href="#"`, `href=""`, atau unlinked buttons.
5. **Aturan 5 (Anti-Slop Marketing Buzzwords):** Bebas 100% dari kata pemasaran hiperbolis terlarang (`terbaik`, `nomor satu`, `premium`, `terpercaya`, `paling rapi`, `gratis`).
6. **Aturan 6 (Metadata Mode Demo):** Tag `<meta name="robots" content="noindex, nofollow" />` aktif pada mode demo; `og:image` placeholder ditiadakan dengan benar.
7. **Aturan 7 (Aksesibilitas Gambar):** Seluruh tag `<img>` wajib memiliki atribut `alt` yang deskriptif dan operasional.
8. **Aturan 8 (Keamanan Tautan Eksternal):** Seluruh tautan tab baru (`target="_blank"`) wajib memiliki atribut keamanan `rel="noopener noreferrer"`.
9. **Aturan 9 (Integritas Conditional Rendering):** Frame Google Maps dan tautan Instagram terisolasi secara kondisional tanpa meninggalkan link kosong yang rusak.
10. **Aturan 10 (Integrasi WhatsApp):** Seluruh link WhatsApp mengarah ke format nomor resmi terdaftar dengan format query `text` yang ter-encode rapi.
