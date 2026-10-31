# Panduan Desain & Arah Wireframe (`layout-lab`)

Status per 31 Oktober 2026

## Design Read
> Reading this as: a mini composer for arranging dummy section variants into a client layout preview. It compares page structure; it does not create a production website or the blueprint builder described by Decision 011. The wireframe presentation is monochrome, with ENERGY 1 / RHYTHM 2 / MOTION 1.

---

## 1. Tiga Parameter Dial (Liveliness Toolkit)
- **ENERGY: 1 (Calm):** Presisi arsitektural tanpa ornamen, visual netral agar fokus murni pada evaluasi proporsi dan keterbacaan struktur blok.
- **RHYTHM: 2 (Balanced):** Garis dasar komponen konsisten dengan variasi tata letak spasial yang tegas antar-varian pada kanvas 1280px.
- **MOTION: 1 (Calm):** Transisi dan animasi CSS dinonaktifkan secara global pada kanvas wireframe (`transition: none !important; animation: none !important`). Elemen shell studio admin (`.ew-studio-shell`) mendukung transisi interaksi halus 150ms pada `prefers-reduced-motion: no-preference`. Pengguliran otomatis studio dan pratinjau memanggil `scrollIntoView({ behavior: 'smooth' })` secara eksplisit untuk auto-focus deck.

---

## 2. Token Warna & Rasio Kontras

Sistem desain menerapkan arsitektur Dual-Layer Token System:
1. **Studio Admin Shell (`--ew-*`):** Antarmuka workbench studio bergaya ENLESWEB dengan tipografi Poppins, aksen tactile `#E4FF30`, serta transisi interaksi halus.
2. **Wireframe Canvas (`--wf-*`):** Kanvas pratinjau wireframe klien yang terisolasi ketat dalam monokrom murni (hitam-putih-abu), font IBM Plex Sans, dan `transition: none !important` untuk evaluasi struktural tanpa bias estetika.

Warna dasar memakai token `:root` dan `[data-theme="dark"]` yang didefinisikan pada `src/styles/wireframe.css`. Rasio di bawah membandingkan pasangan token yang dicantumkan. Rasio tersebut bukan bukti bahwa seluruh halaman telah lulus audit WCAG 2.1 AA, dan repositori ini belum menyertakan bukti audit aksesibilitas menyeluruh:

### 2.1 Token Studio Admin Shell (`--ew-*`)

#### Tema Terang (Light Mode Shell)
| Token CSS | Nilai Hex | Peran Elemen | Rasio vs Latar | Evaluasi WCAG AA |
|---|---|---|---|---|
| `--ew-canvas` | `#FFFFFF` | Latar utama workbench shell | 1.00:1 (Dasar) | Kanvas Netral |
| `--ew-surface` | `#F5F5F2` | Kartu kontainer, bilah deck, header utilitas | 1.11:1 vs `#FFFFFF` | Surface Kontainer |
| `--ew-surface-hover` | `#EAEAE4` | Status sorot kursor kartu & tombol deck | 1.20:1 vs `#FFFFFF` | Surface Hover |
| `--ew-ink` | `#111111` | Teks judul, teks label, tombol teks gelap | **18.88:1** vs `#FFFFFF`<br>**17.06:1** vs `#F5F5F2` | **LULUS** (>4.5:1 AA / >7:1 AAA) |
| `--ew-ink-muted` | `#55554F` | Teks sekunder, deskripsi micro-label | **7.46:1** vs `#FFFFFF`<br>**6.74:1** vs `#F5F5F2` | **LULUS** (>4.5:1 AA / >7:1 AAA) |
| `--ew-line` | `#E5E5DF` | Garis pembatas kartu & pemisah utilitas | 1.25:1 vs `#FFFFFF` | Batas Struktural Ringan |
| `--ew-line-strong` | `#666660` | Garis batas interaktif, pembatas fokus | **5.78:1** vs `#FFFFFF` | **LULUS** (>3:1 Non-Text AA) |
| `--ew-accent` | `#E4FF30` | Latar tombol aksi primer tactile | **16.77:1** vs `#111111` (Teks) | **LULUS** (>4.5:1 AA / >7:1 AAA) |
| `--ew-accent-shelf` | `#A3C400` | Garis tepi & bayangan tactile tombol aksen | **3.22:1** vs `#FFFFFF` | Aksen Tepi Tactile |

*Token Dimensi & Radius Shell:* `--ew-radius-sm: 6px`, `--ew-radius-md: 10px`, `--ew-radius-lg: 14px`, `--ew-shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.04)`.

#### Tema Gelap (Dark Mode Shell via `[data-theme="dark"]`)
| Token CSS | Nilai Hex | Peran Elemen | Rasio vs Latar | Evaluasi WCAG AA |
|---|---|---|---|---|
| `--ew-canvas` | `#141413` | Latar utama workbench shell gelap | 1.00:1 (Dasar) | Kanvas Gelap Netral |
| `--ew-surface` | `#1E1E1C` | Kartu kontainer, bilah deck gelap | 1.06:1 vs `#141413` | Surface Kontainer Gelap |
| `--ew-surface-hover` | `#2A2A27` | Status sorot kursor kartu & tombol deck | 1.17:1 vs `#141413` | Surface Hover Gelap |
| `--ew-ink` | `#F5F5F2` | Teks judul, teks label, tombol teks | **16.88:1** vs `#141413`<br>**14.99:1** vs `#1E1E1C` | **LULUS** (>4.5:1 AA / >7:1 AAA) |
| `--ew-ink-muted` | `#B8B8B0` | Teks sekunder, deskripsi micro-label | **9.24:1** vs `#141413`<br>**8.37:1** vs `#1E1E1C` | **LULUS** (>4.5:1 AA / >7:1 AAA) |
| `--ew-line` | `#2E2E2A` | Garis pembatas kartu gelap | 1.25:1 vs `#141413` | Batas Struktural Ringan |
| `--ew-line-strong` | `#8E8E86` | Garis batas interaktif, pembatas fokus | **5.59:1** vs `#141413` | **LULUS** (>3:1 Non-Text AA) |
| `--ew-accent` | `#E4FF30` | Latar tombol aksi primer tactile | **16.77:1** vs `#111111` (Teks) | **LULUS** (>4.5:1 AA / >7:1 AAA) |
| `--ew-accent-shelf` | `#A3C400` | Garis tepi tactile tombol aksen | **6.67:1** vs `#141413` | Aksen Tepi Tactile |

*Token Bayangan Gelap:* `--ew-shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.25)`.

### 2.2 Token Wireframe Canvas (`--wf-*`)

#### Tema Terang (Light Mode Default)
| Token CSS | Nilai Hex | Peran Elemen | Rasio vs `#ffffff` | Rasio vs `#e5e5e5` | Evaluasi WCAG AA |
|---|---|---|---|---|---|
| `--wf-bg` | `#ffffff` | Latar utama kanvas & kartu | 1.00:1 (Dasar) | - | Kanvas Netral |
| `--wf-fill` | `#e5e5e5` | Bidang kotak `Visual`, tombol pasif | 1.30:1 (Surface) | - | Dibingkai `--wf-line` (5.56:1) |
| `--wf-line` | `#595959` | Garis tepi kontainer, pemisah blok, border | **7.00:1** | **5.56:1** | **LULUS** (>3:1 Non-Text AA) |
| `--wf-ink` | `#111111` | Teks judul, teks isi, tombol aksi aktif | **18.88:1** | **14.99:1** | **LULUS** (>4.5:1 AA / >7:1 AAA) |

#### Tema Gelap (Dark Mode via `[data-theme="dark"]`)
| Token CSS | Nilai Hex | Peran Elemen | Rasio vs `#121212` | Rasio vs `#242424` | Evaluasi WCAG AA |
|---|---|---|---|---|---|
| `--wf-bg` | `#121212` | Latar utama kanvas & kartu gelap | 1.00:1 (Dasar) | - | Kanvas Gelap Netral |
| `--wf-fill` | `#242424` | Bidang visual sekunder, tombol pasif | 1.24:1 (Surface) | - | Dibingkai `--wf-line` (5.12:1) |
| `--wf-line` | `#949494` | Garis tepi kontainer, pemisah blok, border | **6.18:1** | **5.12:1** | **LULUS** (>3:1 Non-Text AA) |
| `--wf-ink` | `#f5f5f5` | Teks judul, teks isi, tombol aksi aktif | **17.18:1** | **14.24:1** | **LULUS** (>4.5:1 AA / >7:1 AAA) |

*Indikator Fokus Keyboard:* `.wf-lab-nav a:focus-visible, .wf-lab-nav button:focus-visible` menggunakan `outline: 2px solid var(--wf-bg)` pada bilah navbar, menghasilkan rasio **18.88:1** (tema terang) dan **17.18:1** (tema gelap). Kontrol Studio Admin menggunakan `outline: 2px solid var(--ew-accent)` dengan outline offset 2px.

---

## 3. Sistem & Spesifikasi Tipografi
Sistem tipografi `layout-lab` menerapkan pembagian peran ganda antara shell antarmuka workbench studio dan kanvas wireframe:
- **Jenis Huruf Studio Admin Shell (`.ew-studio-shell`, `#lab-global-bar`):** `'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
  - **Bobot yang diminta:** 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold), 800 (ExtraBold).
  - **Mekanisme Pemuatan:** Stylesheet Google Fonts di `BaseLayout.astro`.
  - **Cakupan Penggunaan:** Navigasi global ENLESWEB, header toolbar studio, sidebar deck kontrol varian, kartu ringkasan galeri, dan halaman uji/legal workbench.
- **Jenis Huruf Wireframe Canvas (`--wf-*`):** `"IBM Plex Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`
  - **Bobot yang diminta:** 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold), 800 (ExtraBold).
  - **Mekanisme Pemuatan:** Bobot 400–700 diimpor melalui `@fontsource/ibm-plex-sans`; stylesheet Google Fonts eksternal meminta bobot 400–800.
  - **Cakupan Penggunaan:** Kanvas pratinjau layout klien (`/p/ID`), area rendering composer, blok render galeri, dan varian uji ketahanan.
- **Jenis Huruf Monospace:** `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`
  - **Peran Elemen:** Kode (`code`, `kbd`, `samp`, `pre`), label status dan lencana penanda varian (`.galeri-variant-tag`), indikator status antarmuka (`.wf-state-mark`), judul status kosong (`.wf-empty-title`), placeholder visual (`.wf-visual`), ID resep (`#composer-recipe-display`), serta bilah kontrol laboratorium (`.wf-lab-nav`, `.wf-skip-link`).

---

## 4. Alasan Satu Baris untuk Setiap Keputusan Desain (R-31)
- **Warna:** Monokrom hitam-putih-abu menghilangkan bias visual estetika agar evaluasi terfokus pada proporsi ruang dan hierarki blok.
- **Tema Gelap:** Pengalih tema di bilah navigasi menyimpan pilihan terang/gelap di `localStorage`; tema sistem operasi juga dipakai saat belum ada pilihan tersimpan. Kesesuaian tema bagi pengguna dengan kebutuhan aksesibilitas belum diaudit.
- **Penyimpanan Lokal:** `localStorage` menyimpan preferensi tema (`layout-lab-theme`) dan resep composer (`layout-lab-composer-recipe`). Akses ditangani dengan `try/catch`.
- **Tautan Lompat Konten (`.wf-skip-link`):** Memungkinkan pengguna papan ketik melompati bilah navigasi global langsung ke konten utama (R-32).
- **Tipografi:** Mengadopsi "IBM Plex Sans" (bobot 400, 500, 600, 700, 800) sebagai jenis huruf sans-serif utama untuk memperkuat karakter visual arsitektural dan keterbacaan teknis yang presisi. Stack monospace dipertahankan untuk kode, label status, dan penanda varian.
- **Tata Letak:** Komponen memakai breakpoint sesuai kebutuhan masing-masing, umumnya 768px dan 1024px; panel deck composer juga memakai 1200px.
- **Spasi:** Skala modular terukur dari `--wf-space-1` (4px) sampai `--wf-space-8` (64px) memberi keteraturan ritmis antara kepadatan layar saku dan kenyamanan desktop.
- **Kotak Visual:** Kotak abu-abu berlabel teks tegas `"Visual"` memperjelas alokasi ruang gambar serta mempermudah pengujian skenario tanpa-gambar.
- **Kesetaraan Paket Biaya & Layanan:** Seluruh paket biaya (`B1`–`B3`) dan item layanan (`S1`–`S4`) diperlakukan setara (*equal tier*) dengan border 1px seragam dan tombol aksi konsisten tanpa penonjolan artifisial (R-09, R-14).
- **Grid Adaptif Bebas Orphan Card:** `G1`, `G2`, dan `U1` menggunakan penataan grid adaptif (misal grid 2x2 saat 4 item pada `G1`/`U1` serta kartu ganjil terakhir merentang penuh pada `G2`) guna mencegah kartu gantung dan lubang kosong di kanvas 1280px.
- **Bebas Eyebrow (R-09):** Seluruh lencana/eyebrow di atas heading ditiadakan sepenuhnya tanpa perkecualian; hierarki informasi ditegakkan secara langsung oleh heading dan tipografi konten tanpa ornamen badge.
- **Status Antarmuka (`.wf-empty-state` & `.wf-state-indicator`):** Halaman `/uji` merender fixture status kosong, memuat, dan galat untuk varian yang mendukungnya. Fixture tersebut lokal, bukan respons backend.
- **Ketahanan Parameter Galeri:** Penanganan fallback kueri URL mencegah halaman kosong bila pengguna memasukkan parameter section yang tidak terdaftar (C-4).
- **Dual-Layer Workbench Shell:** Memisahkan antarmuka perakit internal bergaya ENLESWEB (`--ew-*`) dari kanvas wireframe monokrom (`--wf-*`) agar admin merasakan nuansa produk digital profesional tanpa mengotori atau membiaskan objektivitas preview wireframe klien.
- **2-Tier Workspace Header:** Memisahkan kontrol arsitektur halaman (preset, reset, toggle deck, viewport) dari utilitas operasional klien (indikator section aktif, muat ID klien, salin link) untuk mempercepat alur kerja perakitan.
- **Simulated Browser Mockup Stage:** Membingkai kanvas pratinjau dalam frame browser dengan tab URL dinamis dan indikator status untuk memberikan konteks nyata representasi situs sebelum dikirim ke klien.
- **Layout Micro-Labels:** Memberikan deskripsi fungsi dan peran tata letak pada setiap varian section di deck agar admin dapat memilih varian berdasarkan kebutuhan arsitektural informasi tanpa menebak-nebak.
- **Auto-Focus Canvas Scroll & Highlight Flash:** Mengarahkan viewport kanvas secara otomatis ke blok section yang baru dipilih pada deck disertai highlight flash halus untuk memberikan umpan balik visual langsung tanpa hambatan navigasi manual.
- **Scaled Virtual Artboard (1280px Desktop):** Kanvas studio dirender pada lebar desktop asli 1280px dan diskalakan secara proporsional (`scale = Math.min(1.0, Math.max(0.2, availableWidth / 1280))`) dengan toggle Auto-Fit / 100% Zoom agar tampilan desktop tidak mengalami reflow sempit pada layar laptop kecil atau panel workbench terbelah.
- **Sandboxed Live Iframe & Chassis iPhone 15 (390px Mobile):** Mengisolasi media query kanvas dalam iframe mandiri (`/p/<id>?clean=1`) dengan chassis iPhone 15 fisik (dimensi sasis 414×844px dengan viewport iframe 390×796px di bawah status bar 48px pada Studio Admin, serta 390×844px penuh pada pratinjau mandiri klien), lengkap dengan cutout Dynamic Island, status bar 9:41, tombol samping perangkat keras, dan home indicator agar simulasi rendering mobile mencerminkan tampilan perangkat fisik 100% akurat tanpa distorsi media query layar desktop.
- **Shortcut Keyboard Panel Deck (`[`):** Mengaktifkan pelipatan atau pembukaan panel kontrol section secara instan dengan satu tombol tanpa mengalihkan kursor dari kanvas.
- **Netralisasi Salinan Konten (Commit 87548e1):** Menghilangkan buzzword dan klaim pemasaran klise pada 13 skema data agar calon klien mengevaluasi tata letak secara murni dan objektif berdasarkan struktur informasi riil yang jujur.

---

## 5. Protokol Resolusi Konflik R-37
- **F1 (Empat Kolom) vs R-05 (4-Column Template Footer):** Dipertahankan sesuai spesifikasi wireframe. Untuk mencegah pola SaaS klise (`Product/Company/Resources/Legal`), kolom F1 disusun berdasarkan modul fungsional sistem (`Identitas Sistem`, `Navigasi Struktur`, `Spesifikasi Teknis`, `Dokumentasi`). *Alasan R-31: Menguji distribusi beban horizontal 4 kolom setara pada kanvas 1280px dan mekanisme pelipatan bertahap 1 -> 2 -> 4 kolom.*
- **S1 (Grid Kartu) vs R-14 (Feature Cards Seragam):** Seluruh kartu layanan bersifat seragam dan setara tanpa kartu yang di-highlight agar evaluasi layout murni berfokus pada ritme dan keterbacaan konten.
- **B1 (Grid Paket Biaya) vs R-14 (Feature Cards Seragam):** Seluruh paket biaya diperlakukan setara dengan penataan kontainer dan tombol aksi yang seragam, tanpa hierarki penonjolan paket tertentu.

---

## 6. Registri Destinasi Tautan Nyata (R-24, R-26, R-38)
Daftar berikut menjelaskan tujuan tautan saat aplikasi dijalankan secara lokal maupun produksi:
- `#section-navbar`: Melompat ke anchor section navbar pada halaman aktif.
- `#section-hero`: Melompat ke anchor section hero pada halaman aktif.
- `#section-layanan`: Melompat ke anchor section layanan pada halaman aktif.
- `#section-footer`: Melompat ke anchor section footer pada halaman aktif.
- `/studio-admin/`: Membuka studio perakit halaman internal (menyediakan preset, susunan varian, generator ID, dan muat ID klien).
- `/studio-admin/galeri`: Membuka galeri perbandingan 43 varian section berdampingan atau mandiri.
- `/studio-admin/uji`: Membuka laboratorium uji resiliensi data (pendek, panjang, tanpa gambar, status antarmuka).
- `/studio-admin/legal#ketentuan`, `/studio-admin/legal#privasi`, `/studio-admin/legal#aksesibilitas`: Halaman informasi internal untuk kepatuhan dan legalitas.
- `/p/<id>`: Membuka pratinjau klien dengan ID resep terenkode Base62. Validasi checksum dijalankan sebelum rendering. Tautan menu ke section nonaktif disembunyikan secara otomatis, dan tombol CTA dialihkan ke fallback target aktif terdekat.

**Akses rute & keamanan:** Build Astro menghasilkan lima halaman statis: `/p/index.html` dan empat halaman di bawah `/studio-admin/`. Root `/` dan `/pratinjau` tidak disajikan dan mengembalikan 404 Not Found baik di Cloudflare Worker (`src/worker.ts`) maupun di middleware Vite lokal. Allowlist Worker memastikan deployment publik aman tanpa membocorkan halaman admin kepada klien yang menghapus segmen path dari tautan `/p/ID`. Studio membentuk URL pratinjau klien dari `PUBLIC_PREVIEW_BASE_URL` atau origin saat ini.

---

## 7. Arsitektur Status Antarmuka UI (R-27)
Fixture di `/studio-admin/uji` menyediakan beberapa status antarmuka untuk schema/varian yang mendukungnya:
1. **Empty State (`kosong*`):** Ditampilkan ketika `daftar` atau `kartuInfo` berupa array kosong `[]`, menampilkan `.wf-empty-state` dengan judul dan CTA terarah.
2. **Loading State (`loading*`):** Ditampilkan ketika fixture menetapkan `status: 'loading'`; animasi CSS dinonaktifkan secara global.
3. **Error State (`error*`):** Ditampilkan ketika `status: 'error'`, menampilkan pesan galat spesifik dan tombol muat ulang/kembali.

---

## 8. Kriteria Desain (Bukan Hasil Verifikasi)
- **C-1 Intentionality:** Ini kriteria desain; repositori belum membuktikan alasan setiap penempatan blok didokumentasikan di kode varian.
- **C-2 Functional Completeness:** Tautan internal mengarah ke rute aplikasi lokal. Pada deployment klien, Worker mengembalikan 404 untuk root `/` dan `/pratinjau`, serta hanya menyajikan tautan pratinjau klien `/p/<id>` yang valid dan rute internal `/studio-admin/*`.
- **C-3 Content-Driven Composition:** Section menyediakan struktur untuk pola konten website umum; data dummy telah dimurnikan per 29 Oktober 2026 dengan salinan netral yang berorientasi pengunjung tanpa klaim bombastis.
- **C-4 Resilience:** Halaman `/studio-admin/uji` menyediakan fixture data pendek, panjang, tanpa gambar/field opsional, serta status antarmuka. Ketersediaan fixture bukan bukti bahwa setiap kombinasi telah lulus audit menyeluruh.
- **C-5 Evidence Over Claims:** Semua isi section, termasuk ulasan bernama, merupakan data dummy untuk preview layout dan tidak boleh diperlakukan sebagai bukti pelanggan atau testimoni nyata.
