# SPEC.md - tuntas
Versi 3.0 (As-Is Technical Architecture and Implementation Specification)
Tanggal: 14 Oktober 2026

Dokumen ini mendokumentasikan arsitektur teknis, stack teknologi, struktur berkas, implementasi komponen, skrip klien, logika WhatsApp, dan rangkaian verifikasi otomatis website tuntas sesuai kondisi as-is di repositori.
Teks bersumber dari CONTENT.md, ruang lingkup dari PRD.md, dan sistem visual dari DESIGN.md.

---

## 1. Stack Teknologi (As-Is)
- **Framework Utama:** Astro v5 (output: `'static'`), konfigurasi di `astro.config.mjs`.
- **Bahasa & Type-Checking:** TypeScript mode strict (`tsconfig.json`), `@astrojs/check`.
- **Sistem Styling:** Pure CSS dengan CSS Custom Properties (`src/styles/global.css` dan scoped styling komponen `.astro`). Tanpa framework utilitas pihak ketiga (tanpa Tailwind, tanpa Bootstrap).
- **Tipografi Self-Hosted:**
  - `@fontsource/space-grotesk` (700 Bold untuk display dan heading).
  - `@fontsource/atkinson-hyperlegible` (400 Regular dan 700 Bold untuk teks body).
  - Preloaded berkas woff2 di `<head>` pada `src/layouts/Base.astro`.
- **Integrasi SEO:** `@astrojs/sitemap` (aktif kondisional saat `PUBLIC_INDEXABLE=true`).
- **Skrip Klien:** Vanilla TypeScript/JavaScript langsung di tag `<script>` Astro tanpa pustaka runtime eksternal.
- **Pengelola Paket:** npm.
- **Target Hosting:** Vercel (konfigurasi di `vercel.json` dengan security headers).

### Perintah Proyek (NPM Scripts)

| Perintah | Deskripsi Fungsi |
| --- | --- |
| `npm run dev` | Menjalankan server pengembangan Astro lokal. |
| `npm run build` | Menghasilkan berkas statis di direktori `dist/` (exit code wajib 0). |
| `npm run preview` | Pratinjau hasil build lokal dari direktori `dist/`. |
| `npm run check` | Pemeriksaan diagnostik tipe Astro dan TypeScript. |
| `npm run verify` | Menjalankan verifikasi otomatis 13 aturan kualitas pada `dist/`. |
| `npm run verify:release` | Melakukan build ganda (demo dan indexable mode) lalu memverifikasi keduanya. |
| `npm test` | Menjalankan `npm run build` dilanjutkan `npm run verify`. |

---

## 2. Struktur Berkas Repositori (As-Is)

```
d:/myself/experiments/tuntas/
├── .agents/                    (Skill antislop lokal untuk kode, copywriting, ui, mobile)
├── anti-slop/                  (Catatan audit antislop)
├── public/
│   ├── favicon.svg             (Favicon logo tuntas)
│   └── hero-still-life.jpg     (Aset cadangan)
├── scripts/
│   ├── slop-lint.mjs           (Linter kata terlarang dan aturan antislop)
│   ├── verify.mjs              (Test suite 13 aturan rilis pada dist/)
│   ├── verify-release.mjs      (Runner verifikasi build rilis ganda)
│   ├── serve-project.mjs       (Runner server lokal mandiri)
│   └── serve-all.mjs           (Runner batch server)
├── src/
│   ├── components/
│   │   ├── BulletList.astro        (Komponen daftar poin rapi)
│   │   ├── Callout.astro           (Kotak catatan khusus latar tint)
│   │   ├── ContactForm.astro       (Form interaktif generator pesan WhatsApp)
│   │   ├── DataTable.astro         (Tabel data generik tabular)
│   │   ├── FactSheet.astro         (Komponen lembar fakta)
│   │   ├── FinalCta.astro          (Section konsultasi penutup di Beranda)
│   │   ├── FloatingWhatsApp.astro  (Tombol WhatsApp melayang hijau bulat di kanan bawah)
│   │   ├── Footer.astro            (Footer lembar kertas dengan garis batas atas)
│   │   ├── FormatCards.astro       (Tabel komparasi format belajar di Beranda)
│   │   ├── Hero.astro              (Hero utama dengan lembar SiDU & master schedule table)
│   │   ├── MapEmbed.astro          (Embed iframe Google Maps interaktif)
│   │   ├── Navbar.astro            (Header sticky dengan transisi scroll dan drawer mobile)
│   │   ├── PageHeader.astro        (Header judul sub-halaman)
│   │   ├── ProgramRows.astro       (Baris ledger program belajar di Beranda)
│   │   ├── ProgramSection.astro    (Bagian rincian program di halaman /program)
│   │   ├── SocialLinks.astro       (Tautan media sosial Instagram)
│   │   ├── StepList.astro          (4 langkah cara belajar horizontal)
│   │   └── WhatsAppButton.astro    (Tombol taktil WA: default, hero, nav, stamp)
│   ├── config/
│   │   └── site.ts                 (Konfigurasi mode demo, nomor WA, metadata situs)
│   ├── content/
│   │   └── copy.ts                 (Kamus teks lengkap, identik dengan CONTENT.md)
│   ├── data/
│   │   ├── fees.ts                 (Data biaya terstruktur numerik dan format rupiah)
│   │   └── schedule.ts             (Data jadwal slot kelompok per kelas)
│   ├── layouts/
│   │   └── Base.astro              (Layout induk dengan grid lembar buku tulis SiDU & margin cells)
│   ├── lib/
│   │   ├── format.ts               (Helper pemformatan rupiah, hari, dan rentang jam)
│   │   └── whatsapp.ts             (Generator URL dan perangkai pesan WhatsApp)
│   ├── pages/
│   │   ├── 404.astro               (Halaman status not-found 404)
│   │   ├── cara-belajar.astro      (Rute /cara-belajar)
│   │   ├── index.astro             (Rute / Beranda)
│   │   ├── jadwal-biaya.astro      (Rute /jadwal-biaya)
│   │   ├── kontak.astro            (Rute /kontak)
│   │   ├── program.astro           (Rute /program)
│   │   ├── robots.txt.ts           (Endpoint dinamis /robots.txt)
│   │   └── tentang.astro           (Rute /tentang)
│   ├── styles/
│   │   └── global.css              (Token CSS, palet SiDU, tipografi, grid baris kertas)
│   └── env.d.ts                    (Definisi tipe environment Astro)
├── astro.config.mjs            (Konfigurasi build Astro)
├── package.json                (Manifest proyek)
├── package-lock.json           (Kunci versi dependensi)
├── tsconfig.json               (Konfigurasi TypeScript strict)
├── vercel.json                 (Konfigurasi deployment Vercel)
├── AGENTS.md                   (Panduan agent dan antislop pointer)
├── CONTENT.md                  (Spesifikasi salinan teks resmi)
├── DESIGN.md                   (Spesifikasi desain visual dan token)
├── PRD.md                      (Spesifikasi produk dan ruang lingkup)
├── SPEC.md                     (Spesifikasi teknis as-is ini)
└── TUNTAS-DOCS-V3.md           (Dokumentasi master monolitik terpadu V3)
```

---

## 3. Rincian Modul Data dan Lib (As-Is)

### 3.1 `src/config/site.ts`
- Menyimpan konfigurasi global:
  - `name`: `'tuntas'`
  - `city`: `'Yogyakarta'`
  - `address`: `'Jl. Contoh No. 12, Yogyakarta'`
  - `demoMode`: boolean (secara default `true` untuk showcase ENLESWEB)
  - `enleswebWhatsappNumber`: `'6285156801570'` (nomor resmi ENLESWEB untuk demo)
  - `studioWhatsappNumber`: `''` (diisi nomor bimbel asli saat mode produksi)
  - `siteUrl`: URL produksi dari `PUBLIC_SITE_URL`
  - `enleswebUrl`: `''` (tautan kembali ke ENLESWEB jika tersedia)
  - `instagramUrl`: `'https://www.instagram.com/enlesweb/'`
  - `mapsUrl`: `'https://maps.google.com/?q=Yogyakarta'`
  - `mapsEmbedUrl`: `'https://maps.google.com/maps?q=Yogyakarta&t=&z=12&ie=UTF8&iwloc=&output=embed'`
  - `indexable`: boolean (mengendalikan indexation `meta robots` dan sitemap)

### 3.2 `src/data/fees.ts` & `src/data/schedule.ts`
- Menyimpan data terstruktur yang dirender di halaman `/jadwal-biaya`:
  - `fees.ts`: Menyimpan biaya bulanan kelompok kecil (`sd: 300000`, `smp: 350000`, `sma: 400000`), biaya privat per sesi (`sd: 90000`, `smp: 100000`, `sma: 120000`), konstanta `GROUP_SESSIONS_PER_MONTH = 8`, dan `REGISTRATION_FEE = 50000`.
  - `schedule.ts`: Menyimpan slot sesi reguler untuk kelas `SD A`, `SD B`, `SMP A`, `SMP B`, `SMA A`, `SMA B` dengan properti `days` (`['Senin', 'Kamis']` atau `['Selasa', 'Jumat']`) serta jam mulai dan selesai.

### 3.3 `src/lib/whatsapp.ts`
- Fungsi `waUrl(topic, page)`: Membangun link `https://wa.me/{nomor}?text={encodedText}`.
  - Mode Demo: Menggunakan template `Halo ENLESWEB, saya sedang melihat contoh website tuntas, halaman {halaman}. Saya mau tanya tentang pembuatan website.`.
  - Mode Studio: Menggunakan template `Halo tuntas, saya mau tanya tentang {topik}.`.
- Fungsi `waFromContact(f: ContactFields)`: Mengonversi data isian formulir kontak menjadi format teks WhatsApp terstruktur lengkap siap kirim.

### 3.4 `src/lib/format.ts`
- Fungsi utilitas:
  - `rupiah(n: number)`: Format mata uang Indonesia (`Rp300.000`).
  - `joinDays(days: readonly string[])`: Menggabungkan hari (`Senin dan Kamis`).
  - `timeRange(start: string, end: string)`: Menggabungkan rentang jam (`15.30 sampai 17.00`).
  - `fill(template, vars)`: Mengganti placeholder `{kunci}` dengan nilai dinamis.

---

## 4. Implementasi Layout dan Komponen Kunci (As-Is)

### 4.1 Layout Induk `Base.astro`
- Membungkus seluruh halaman di dalam `<main id="konten" class="notebook-sheet">`.
- Mengatur grid `.notebook-wrapper`:
  - Desktop / Tablet: `grid-template-columns: 44px 1fr`
  - Mobile: `grid-template-columns: 18px 1fr`
- Kolom kiri `.notebook-margin-guide` menampilkan garis vertikal merah halus (`border-right: 2px solid var(--correction-subtle)`).
- Menghasilkan 120 baris sel perforasi margin (`.notebook-margin-cells` dengan elemen `.margin-cell-box`) pada viewport tablet dan desktop ($\ge 768\text{px}$).
- Latar bergaris biru tinta berulang setiap 32px menggunakan `repeating-linear-gradient`.
- Melakukan preload berkas woff2 font Display (Space Grotesk 700) dan Body (Atkinson Hyperlegible 400 dan 700).
- Skrip inline menginisialisasi `IntersectionObserver` untuk animasi kelas `.reveal-on-scroll` saat elemen memasuki viewport.

### 4.2 Hero Beranda `Hero.astro`
- Mengimplementasikan skala tipografi monumental terkalibrasi kisi 64px & 32px:
  - H1 (`.hero-headline`): Desktop `font-size: 2.25rem` (36px), `line-height: 64px`, `transform: translateY(9px)`, `margin-bottom: 32px`.
  - Lead (`.hero-lead`): Desktop `font-size: 1.0625rem` (17px), `line-height: 32px`, `transform: translateY(6px)`, `margin-bottom: 32px`.
  - CTA Action Row: `height: 32px; margin-bottom: 32px;`, memuat `WhatsAppButton` berukuran `stamp` (tinggi 32px).
  - Master Schedule Table: Kontainer terpadu bergaris tinta 1px, memuat caption bar (`Jadwal kelompok kecil per kelas` dan penegasan `Maksimal 6 siswa`). Menampilkan tabel 3 kolom horizontal di desktop dan beralih ke panel bertumpuk vertikal di mobile tanpa overflow horizontal.

### 4.3 Navigasi Header `Navbar.astro`
- Header dengan `position: sticky; top: 0; z-index: 100`.
- Skrip klien memantau event `scroll`: saat `window.scrollY > 8`, atribut `data-scrolled="true"` ditambahkan pada header, mengubah latar transparan menjadi warna solid `var(--line-ruled-solid)`.
- Mengendalikan drawer navigasi mobile menggunakan atribut aksesibilitas `aria-expanded` dan event listener keyboard untuk tombol `Escape`.

### 4.4 Form Kontak `ContactForm.astro`
- Formulir interaktif murni sisi klien tanpa backend basis data:
  - Field: Nama Wali (wajib), Nama Siswa (wajib), Jenjang (wajib, select), Format Belajar (wajib, radio), Mata Pelajaran (opsional), dan Pesan (opsional).
  - Validasi JavaScript saat submit memeriksa kelengkapan data.
  - Jika ada field kosong, kotak `#form-error-summary` menampilkan daftar pesan kesalahan dan fokus diarahkan ke elemen yang bermasalah.
  - Jika valid, URL WhatsApp terformat disusun secara otomatis dan dibuka di tab baru (`window.open`), disertai tampilan `#form-success-banner` dan tombol fallback.

### 4.5 Floating WhatsApp `FloatingWhatsApp.astro`
- Komponen mengambang di pojok kanan bawah layar (`position: fixed; bottom: 20px; right: 20px;`).
- Tombol lingkaran sempurna (`border-radius: 50%`) dengan warna hijau resmi WhatsApp (`var(--wa): #25D366`), ukuran 56px di mobile dan 60px di desktop.
- Menentukan parameter topik pesan WhatsApp secara dinamis berdasarkan halaman aktif melalui `copy.floatingTopics[activePage]`.

---

## 5. Rangkaian Verifikasi Kualitas Otomatis (As-Is)

Skrip `scripts/verify.mjs` memvalidasi 13 aturan mutlak pada direktori hasil kompilasi `dist/`:
1. **Rule 1 (Em/En Dash Check):** Memastikan tidak ada satupun karakter em dash (`—`) atau en dash (`–`) di seluruh file kode sumber (`src/`) dan hasil build (`dist/`).
2. **Rule 2 (Forbidden Buzzwords Check):** Memastikan 0 kata promosi/buzzword terlarang (*terbaik, terpercaya, profesional, berkualitas, gratis, garansi, modern, presisi, premium, elevate, seamless, crafted, powerful, nilai naik, lulus, juara*) pada teks HTML `dist/`.
3. **Rule 3 (Page Count Check):** Memastikan tepat 6 halaman utama (`index.html`, `program.html`, `jadwal-biaya.html`, `cara-belajar.html`, `tentang.html`, `kontak.html`) ditambah `404.html`.
4. **Rule 4 (Heading Structure Check):** Memastikan tepat satu tag `<h1>` per halaman dan hierarki heading tanpa loncatan level semantik.
5. **Rule 5 (Meta Tags Check):** Memastikan `<title>` dan meta description unik per halaman; panjang meta description antara 50 sampai 160 karakter untuk 6 halaman utama.
6. **Rule 6 (Data Integrity Check):** Memvalidasi nilai biaya (`Rp300.000`, `Rp350.000`, `Rp400.000`, `Rp90.000`, `Rp100.000`, `Rp120.000`, `Rp50.000`) dan kode kelas jadwal cocok persis di `jadwal-biaya.html`.
7. **Rule 7 (CTA Attributes & Styling Check):** Memvalidasi 12 titik atribut `data-cta-location` terpasang lengkap, seluruh link WA memiliki `target="_blank"` dan `rel="noopener noreferrer"`, serta properti `box-shadow` secara ketat hanya diizinkan pada `.btn-tactile`.
8. **Rule 8 (WhatsApp Integration Check):** Pada mode demo, seluruh link WhatsApp wajib mengarah ke nomor ENLESWEB `6285156801570` dan diawali teks `"Halo ENLESWEB"`.
9. **Rule 9 (Link & Anchor Validity Check):** Seluruh tautan internal dan anchor hash valid tanpa string `"unknown"`, `"undefined"`, atau `"null"`.
10. **Rule 10 (Accessibility Alt Check):** Seluruh tag `<img>` wajib memiliki atribut `alt`.
11. **Rule 11 (Transparency Notice Check):** Penanda konsep `Website oleh ENLESWEB.` atau `Konsep website buatan ENLESWEB` wajib ada di footer semua halaman serta penanda data contoh di halaman tentang dan jadwal-biaya.
12. **Rule 12 (Robots Indexation Check):** Tag meta `robots` bernilai `noindex, nofollow` dan tag canonical ditiadakan pada mode demo.
13. **Rule 13 (Leak Prevention Check):** Memastikan tidak ada kebocoran nomor telepon atau email pribadi yang tidak diinginkan.

Skrip `scripts/slop-lint.mjs` memvalidasi kepatuhan salinan teks dan estetika antislop di seluruh halaman (0 FAIL, 0 REVIEW).
