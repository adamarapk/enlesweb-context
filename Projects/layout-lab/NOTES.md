# Catatan Pengembang (`layout-lab`)

Status per 31 Oktober 2026: composer internal untuk eksplorasi layout telah disempurnakan dan terverifikasi secara menyeluruh. Lab beroperasi sebagai wireframe composer monokrom murni di bawah Decision 022 sebelum DP. Menggunakan contoh bisnis umum dengan salinan netral dan data dummy arsitektural, tidak menghasilkan website produksi atau blueprint JSON, dan tidak menggantikan preview pengerjaan resmi setelah DP. Lihat [README](README.md) sebagai panduan masuk.

Indeks dokumentasi visual: [Arsip Tangkapan Layar Resmi (29 Oktober 2026)](docs/screens/README.md).

## Catatan Arsitektur
1. **Pemisahan Logika & Struktur:**
   - Seluruh 43 varian pada 13 kategori section berbagi schema TypeScript per kategori di `src/schema/<jenis>.ts`: `navbar`, `hero`, `profil`, `keunggulan`, `layanan`, `langkah`, `galeri`, `ulasan`, `biaya`, `tanya-jawab`, `lokasi`, `cta`, dan `footer`.
   - Schema TypeScript dipisahkan per kategori dan menjadi tipe data bagi varian pada kategori tersebut.
2. **Dual-Layer Token Architecture:**
   - **Studio Shell (`--ew-*`):** Antarmuka perakit admin mengadopsi token ENLESWEB di `src/styles/wireframe.css` (`--ew-canvas`, `--ew-surface`, `--ew-ink`, `--ew-ink-muted`, `--ew-line`, `--ew-accent: #e4ff30`, `--ew-radius-*`). Mendukung tema terang dan gelap via `[data-theme="dark"]`. Menggunakan jenis huruf Poppins dan mendukung transisi halus 150ms pada elemen shell saat `prefers-reduced-motion: no-preference`.
   - **Wireframe Canvas (`--wf-*`):** Kanvas pratinjau klien menggunakan token monokrom murni (`--wf-bg`, `--wf-ink`, `--wf-line`, `--wf-fill`, `--wf-radius: 2px`, `--wf-space-1` s.d. `--wf-space-8`). Menggunakan jenis huruf IBM Plex Sans, dan seluruh elemen kanvas terkunci pada `transition: none !important` dan `animation: none !important` demi evaluasi struktural tanpa bias.
   - Rasio kontras teks memenuhi standar WCAG AA (4.5:1) dan AAA (13.9:1) secara konsisten di seluruh tema terang dan gelap.
3. **Scaled Virtual Artboard & Sandboxed Live Iframe (iPhone 15 Chassis):**
   - **Matematika Penskalaan Desktop (1280px):** Pada mode desktop, kanvas live dirender pada lebar kanonikal 1280px di dalam pembungkus `.composer-artboard-scaler`. Skala virtual dihitung dinamis berdasarkan lebar kontainer: `scale = Math.min(1.0, Math.max(0.2, availableWidth / 1280))`. Mode Fit menyesuaikan artboard secara proporsional, sementara mode 100% Zoom memungkinkan panning horizontal penuh tanpa memicu reflow sempit pada layout desktop.
   - **Isolasi Iframe Sandboxed (`/p/<id>?clean=1`):** Kanvas pratinjau dirender melalui elemen `<iframe>` yang menyajikan rute pratinjau mandiri dengan parameter `?clean=1`. Isolasi iframe menjamin media query CSS (khususnya breakpoint mobile 390px vs desktop 1280px) berjalan murni tanpa terdistorsi oleh dimensi jendela browser host.
   - **Chassis Fisik iPhone 15 (390px Mobile):** Pada mode mobile, kanvas iframe (390×796px) dibingkai oleh chassis fisik iPhone 15 berukuran 414×844px lengkap dengan Dynamic Island cutout (dengan titik lensa kamera), status bar 9:41 (ikon sinyal, Wi-Fi, baterai), tombol samping fisik (Action, Volume Up, Volume Down, Power), dan Home Indicator bawah.
   - **Sinkronisasi Komunikasi Runtime:** Komunikasi dua arah antara Studio Shell dan Iframe Kanvas berlangsung melalui `window.postMessage`:
     - `SYNC_RECIPE` (Shell → Iframe): Mengirimkan `{ type: 'SYNC_RECIPE', codes, theme }` untuk menyinkronkan susunan section aktif dan tema secara reaktif tanpa memuat ulang iframe.
     - `SCROLL_TO` (Shell → Iframe): Mengarahkan scroll kanvas ke elemen section target disertai efek highlight flash (`.ew-highlight-flash` selama 1200ms).
     - `SET_THEME` (Shell → Iframe): Mengubah mode tema terang atau gelap (`data-theme="dark"`) pada root iframe seketika.
     - `RECIPE_SYNCED` (Iframe → Shell): Mengembalikan `scrollHeight` aktual iframe ke parent shell setelah perakitan DOM selesai untuk penyesuaian tinggi kontainer.
     - `FRAME_RESIZED` (Iframe → Shell): Mengirimkan pembaruan `scrollHeight` ke host shell setiap kali terjadi perubahan dimensi jendela atau konten.
   - **Shortcut Keyboard Fokus:** Tombol keyboard `[` (*bracket* kiri) terpasang secara global untuk melipat (*collapse*) atau membuka panel kontrol deck section seketika saat pengguna tidak sedang mengetik di elemen input.
4. **Refaktor Netralisasi Salinan (Commit 87548e1):**
   - Seluruh 13 skema data standar (`src/schema/*.ts`) telah dimurnikan dari istilah pemasaran bombastis (*marketing buzzwords*) dan pola bahasa klise khas *AI slop*.
   - Salinan teks placeholder kini mengusung suara langsung yang berorientasi pada pengunjung (*visitor-facing voice*), jujur, ringkas, dan relevan dengan skenario operasional bisnis riil (misalnya rincian paket tertulis di awal, satu jalur kontak, dan jadwal yang disepakati).
5. **Mekanisme Menu Mobile Tunggal:**
   - Seluruh varian navbar (`N1`–`N4`) menggunakan handler menu bersama di `BaseLayout.astro`, dengan `aria-expanded` dan panel menu.
   - Keempat varian memiliki komposisi desktop masing-masing; breakpoint tiap varian mengikuti stylesheet komponennya.
6. **Kesetaraan Komponen & Ketiadaan Highlight Pemasaran:**
   - Seluruh pricelist biaya (`B1`–`B3`) dan item layanan (`S1`–`S4`) diperlakukan setara (*equal tier*) tanpa highlight kontainer artifisial, garis batas tebal, atau tombol aksi pembeda, memastikan evaluasi murni fokus pada arsitektur tata letak.
   - Varian galeri `G2` memiliki border seragam 1px tanpa pembeda tebal kartu.
7. **Pemurnian Peran Khusus Section:**
   - Seluruh varian footer (`F1`–`F4`) bebas dari kartu CTA terintegrasi (`F4` ditransformasikan menjadi split footer asimetris: brand di kiri, navigasi terkelompok di kanan) agar fungsi konversi aksi tetap terpusat di section CTA (`C1`–`C3`).
   - Tanya jawab (`Q1`–`Q3`) dieliminasi dari left-border dekoratif khas pola *AI slop*.
   - Profil (`R1`–`R3`) difokuskan murni pada narasi identitas dan metrik pencapaian tanpa baris kartu mitra/afiliasi.
8. **Data Preview:**
   - Seluruh konten section, termasuk ulasan, nama, kutipan, harga, alamat, dan kontak, adalah data dummy untuk preview layout dan bukan data klien ENLESWEB.
   - `layout-lab` adalah composer mini internal untuk memilih varian dan menyusun urutan section. Tautan resep preview memakai kode varian pada query URL; aplikasi tidak menghasilkan blueprint JSON atau website produksi. Tool ini bukan Website Builder yang dimaksud Decision 011.
9. **Akses Deployment Klien & Struktur Rute:**
   - Build Astro menghasilkan halaman statis di bawah `/studio-admin/` (`index.html`, `galeri/index.html`, `uji/index.html`, `legal/index.html`) serta `/p/index.html`.
   - Root `/` dan `/pratinjau` tidak memiliki file statis dan ditolak dengan 404 Not Found oleh Cloudflare Worker (`src/worker.ts`) dan middleware Vite lokal.
   - `src/worker.ts` dikonfigurasi dengan `name = "layout-lab-enlesweb"` dan `workers_dev = true`:
     - Menolak request selain `GET` dan `HEAD`.
     - Mengizinkan aset `/_astro/*` dan rute admin `/studio-admin/*` (rute `/studio-admin` tanpa trailing slash diarahkan secara otomatis via 301 redirect ke `/studio-admin/`).
     - Untuk `/p/<id>`, mendekode ID dengan `decodeRecipeId(id)`. Jika valid, menyajikan aset `/p/` dengan penanganan redirect internal agar URL `/p/<id>` di peramban klien tetap utuh. Jika tidak valid, mengembalikan 404 Not Found.
   - Format ID pratinjau klien: Stateless Compact ID berbasis Base62 dengan salt acak 16-bit dan checksum 12-bit (`src/utils/recipe-codec.ts`). Setiap susunan section menghasilkan ID unik yang berbeda setiap kali diacak ulang tanpa memerlukan database/KV.
   - Sinkronisasi Navbar & Footer: halaman `/p/<id>` dan Studio secara otomatis menyembunyikan tautan menu ke `#section-*` yang tidak aktif pada resep, serta mengalihkan tombol CTA ke target section aktif terdekat.
   - Default Tema Terang: halaman `/p/<id>` selalu dikunci ke Tema Terang (tidak terpengaruh oleh preferensi gelap perangkat klien) kecuali diberi query eksplisit `?tema=gelap`.
   - Studio Admin dilengkapi tombol Acak ID, input "Muat dari Link / ID Klien", dukungan parameter `/studio-admin/?p=<id>`, serta 5 preset skenario klien (*Lengkap · 13 Section*, *Starter · Ringkas*, *Business · Jasa*, *Business · Korporat*, dan *Growth · Katalog*).

## Hasil Audit Implementasi (2026-10-29)
- `npm run build` lulus 100%. Lint eyebrow bersih dari pelanggaran (memeriksa 65 berkas di `src/`), `astro check` memeriksa 70 file dengan 0 error, 0 warning, dan 0 hint. Output statis menghasilkan 5 file HTML (`/p/index.html` dan 4 halaman di bawah `/studio-admin/`).
- `npm test` lulus 100% (**46 assertion** composer, keamanan rute, robustness codec fuzzing, F4 pure footer assertion, & fallback CTA + 86 skenario visual eyebrow di Playwright). Seluruh assertion lulus tanpa kegagalan.
- Allowlist Cloudflare Worker dan middleware dev Vite telah diuji secara menyeluruh: akses ke `/`, `/pratinjau`, `/p`, dan `/p/<invalid-id>` terbukti mengembalikan 404 Not Found; rute `/p/<valid-id>` menyajikan pratinjau dengan 200 OK.
- Seluruh tangkapan layar kanonikal pada `docs/screens/` telah disinkronkan as-is per commit `1bcdc6d` (frame iPhone 15 & sandboxed canvas) dan commit `f2657ea` (studio workbench ENLESWEB). Terdiri dari 86 tangkapan layar varian komponen, 12 tangkapan layar sistem & state, dan 3 arsip kompatibilitas transisi path.

## Catatan Pemeliharaan & Upgrade Dependensi (31 Oktober 2026)
- **Upgrade Stack Inti (Commit `9a1de77` & `19671bf`):**
  - Astro diperbarui ke versi `^7.4.4` berjalan di atas runtime Node `22.23.4`.
  - TypeScript diperbarui ke `^6.0.3` dan `@astrojs/check` ke `^0.9.12`.
  - Pengujian visual browser mengandalkan `playwright-core ^1.64.1` dan `puppeteer-core ^25.16.0`.
  - Mengaktifkan override dependensi `vite ^8.3.5` untuk memitigasi seluruh kerentanan keamanan (0 CVE terdeteksi).
- **Hasil Audit Verifikasi 31 Oktober 2026:**
  - `npm run build` lulus 100%: 65 berkas di `src/` bersih dari pelanggaran lint eyebrow/uppercase/letter-spacing; `astro check` memverifikasi 70 berkas dengan 0 error, 0 warning, dan 0 hint; build statis sukses mendistribusikan 5 rute HTML.
  - `npm test` lulus 100%: 46 assertion otomatis di `scripts/test-perakit-pratinjau.mjs` dan 86 skenario uji visual Playwright di `/studio-admin/galeri/` lulus tanpa kegagalan.

---

## Gagasan Varian Tambahan di Masa Depan (Ide Cadangan)
*Catatan: Sesuai larangan ketat spesifikasi proyek, varian di bawah ini HANYA dicatat sebagai ide riset dan TIDAK diimplementasikan ke dalam kode rilis.*

1. **Navbar:**
   - `N5`: [Brand]|[Mega-Menu Multi-Kolom]|[Pencarian+Aksi]
   - `N6`: [Sidebar Melayang Vertikal Kiri] untuk tata letak dasbor teknis
2. **Hero:**
   - `H5`: [Latar Media Interaktif / Kanvas 3D] dengan teks terpusat minimalis
   - `H6`: [Lini Masa Horizontal / Step Sequence] langsung di dalam blok pembuka
3. **Layanan:**
   - `S5`: [Tabel Perbandingan Matriks Fitur Lengkap] untuk evaluasi teknis berlapis
   - `S6`: [Akordeon Interaktif Runtun Vertikal] dengan preview visual dinamis di sisi kanan
4. **Footer:**
   - `F5`: [Footer Minimalis Satu Sudut] khusus landing page dokumentasi teknis satu halaman
   - `F6`: [Peta Situs Interaktif Berjenjang] dengan indeks pencarian cepat
5. **Galeri:**
   - `G4`: [Korsel Horizontal Layar Penuh] dengan navigasi tombol panah keyboard
   - `G5`: [Katalog Masonry Multi-Tinggi] dengan filter taksonomi arsitektural
6. **Ulasan:**
   - `U4`: [Kutipan Tunggal Raksasa Terpusat] dengan tombol paginasi angka
   - `U5`: [Kolom Ganda Bento dengan Statistik Tersemat] di sudut bawah ulasan
7. **Biaya:**
   - `B4`: [Tabel Matriks Perbandingan Fitur Komprehensif] dengan baris periksa silang
   - `B5`: [Penggeser Kalkulator Biaya Dinamis] berbasis slider parameter volume
8. **Tanya Jawab:**
   - `Q4`: [Dua Kolom Tab Kategori] dengan panel akordeon dinamis di kolom isi
   - `Q5`: [Bilah Pencarian Cepat Langsung] di atas daftar pertanyaan umum
9. **Profil:**
   - `R4`: [Garis Waktu Sejarah Perjalanan] dengan penanda tahun struktural
   - `R5`: [Kisi Kartu Tim Pengembang] dengan spesifikasi keahlian monokrom
