# Panduan Desain & Arah Wireframe (`layout-lab`)

## Design Read
> Reading this as: a mini composer for arranging dummy section variants into a client layout preview. It compares page structure; it does not create a production website or the blueprint builder described by Decision 011. The wireframe presentation is monochrome, with ENERGY 1 / RHYTHM 2 / MOTION 1.

---

## 1. Tiga Parameter Dial (Liveliness Toolkit)
- **ENERGY: 1 (Calm):** Presisi arsitektural tanpa ornamen, visual netral agar fokus murni pada evaluasi proporsi dan keterbacaan struktur blok.
- **RHYTHM: 2 (Balanced):** Garis dasar komponen konsisten dengan variasi tata letak spasial yang tegas antar-varian pada kanvas 1280px.
- **MOTION: 1 (Calm):** Transisi dan animasi CSS dinonaktifkan secara global. CSS mengatur scroll otomatis saat `prefers-reduced-motion` aktif, tetapi studio dan pratinjau memanggil `scrollIntoView({ behavior: 'smooth' })` secara eksplisit; pemanggilan itu tetap meminta smooth scroll.

---

## 2. Token Warna & Rasio Kontras
Warna dasar memakai token `:root` dan `[data-theme="dark"]`. Rasio di bawah membandingkan pasangan token yang dicantumkan. Rasio tersebut bukan bukti bahwa seluruh halaman telah lulus audit WCAG 2.1 AA, dan repositori ini belum menyertakan bukti audit aksesibilitas menyeluruh:

### Tema Terang (Light Mode Default)
| Token CSS | Nilai Hex | Peran Elemen | Rasio vs `#ffffff` | Rasio vs `#e5e5e5` | Evaluasi WCAG AA |
|---|---|---|---|---|---|
| `--wf-bg` | `#ffffff` | Latar utama kanvas & kartu | 1.00:1 (Dasar) | - | Kanvas Netral |
| `--wf-fill` | `#e5e5e5` | Bidang kotak `Visual`, tombol pasif | 1.30:1 (Surface) | - | Dibingkai `--wf-line` (5.56:1) |
| `--wf-line` | `#595959` | Garis tepi kontainer, pemisah blok, border | **7.00:1** | **5.56:1** | **LULUS** (>3:1 Non-Text AA) |
| `--wf-ink` | `#111111` | Teks judul, teks isi, tombol aksi aktif | **18.88:1** | **14.99:1** | **LULUS** (>4.5:1 AA / >7:1 AAA) |

### Tema Gelap (Dark Mode via `[data-theme="dark"]`)
| Token CSS | Nilai Hex | Peran Elemen | Rasio vs `#121212` | Rasio vs `#242424` | Evaluasi WCAG AA |
|---|---|---|---|---|---|
| `--wf-bg` | `#121212` | Latar utama kanvas & kartu gelap | 1.00:1 (Dasar) | - | Kanvas Gelap Netral |
| `--wf-fill` | `#242424` | Bidang visual sekunder, tombol pasif | 1.24:1 (Surface) | - | Dibingkai `--wf-line` (5.12:1) |
| `--wf-line` | `#949494` | Garis tepi kontainer, pemisah blok, border | **6.18:1** | **5.12:1** | **LULUS** (>3:1 Non-Text AA) |
| `--wf-ink` | `#f5f5f5` | Teks judul, teks isi, tombol aksi aktif | **17.18:1** | **14.24:1** | **LULUS** (>4.5:1 AA / >7:1 AAA) |

*Indikator Fokus Keyboard:* `.wf-lab-nav a:focus-visible, .wf-lab-nav button:focus-visible` menggunakan `outline: 2px solid var(--wf-bg)` pada bilah navbar, menghasilkan rasio **18.88:1** (tema terang) dan **17.18:1** (tema gelap).

---

## 3. Sistem & Spesifikasi Tipografi
Sistem tipografi `layout-lab` menerapkan pembagian peran yang tegas antara jenis huruf arsitektural utama dan penanda monospace teknis:
- **Jenis Huruf Utama (Sans-Serif):** `"IBM Plex Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`
  - **Bobot yang diminta:** 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold), 800 (ExtraBold).
  - **Mekanisme Pemuatan:** Bobot 400–700 diimpor melalui `@fontsource/ibm-plex-sans`; stylesheet Google Fonts eksternal meminta bobot 400–800. Bobot 800 dan permintaan font eksternal tidak menjamin tampilan offline yang identik.
  - **Cakupan Penggunaan:** Elemen `html`, `body`, seluruh heading judul (`h1`–`h6`), paragraf konten, tombol (`button`), serta kontrol formulir (`input`, `select`, `textarea`).
- **Jenis Huruf Monospace:** `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`
  - **Peran Elemen:** Kode (`code`, `kbd`, `samp`, `pre`), label status dan lencana penanda varian (`.galeri-variant-tag`), indikator status antarmuka (`.wf-state-mark`), judul status kosong (`.wf-empty-title`), placeholder visual (`.wf-visual`), serta bilah kontrol laboratorium (`.wf-lab-nav`, `.wf-skip-link`).

---

## 4. Alasan Satu Baris untuk Setiap Keputusan Desain (R-31)
- **Warna:** Monokrom hitam-putih-abu menghilangkan bias visual estetika agar evaluasi terfokus pada proporsi ruang dan hierarki blok.
- **Tema Gelap:** Pengalih tema di bilah navigasi menyimpan pilihan terang/gelap di `localStorage`; tema sistem operasi juga dipakai saat belum ada pilihan tersimpan. Kesesuaian tema bagi pengguna dengan kebutuhan aksesibilitas belum diaudit.
- **Penyimpanan Lokal:** `localStorage` menyimpan preferensi tema (`layout-lab-theme`) dan resep composer (`layout-lab-composer-recipe`). Akses ditangani dengan `try/catch`.
- **Tautan Lompat Konten (`.wf-skip-link`):** Memungkinkan pengguna papan ketik melompati bilah navigasi global langsung ke konten utama (R-32).
- **Tipografi:** Mengadopsi "IBM Plex Sans" (bobot 400, 500, 600, 700, 800 dengan fallback `"IBM Plex Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`) sebagai jenis huruf sans-serif utama untuk memperkuat karakter visual arsitektural dan keterbacaan teknis yang presisi. Stack monospace (`ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`) dipertahankan untuk kode, label status, dan penanda varian.
- **Tata Letak:** Komponen memakai breakpoint sesuai kebutuhan masing-masing, umumnya 768px dan 1024px; panel deck composer juga memakai 1200px. Capture tersedia pada lebar 390px dan 1280px, tetapi cakupan itu belum membuktikan seluruh kombinasi bebas limpahan horizontal.
- **Spasi:** Skala modular terukur dari `--wf-space-1` (4px) sampai `--wf-space-8` (64px) memberi keteraturan ritmis antara kepadatan layar saku dan kenyamanan desktop.
- **Kotak Visual:** Kotak abu-abu berlabel teks tegas `"Visual"` memperjelas alokasi ruang gambar serta mempermudah pengujian skenario tanpa-gambar.
- **Bebas Eyebrow (R-09):** Seluruh lencana/eyebrow di atas heading ditiadakan sepenuhnya tanpa perkecualian; hierarki informasi ditegakkan secara langsung oleh heading dan tipografi konten tanpa ornamen badge.
- **Status Antarmuka (`.wf-empty-state` & `.wf-state-indicator`):** Halaman `/uji` merender fixture status kosong, memuat, dan galat untuk varian yang mendukungnya. Fixture tersebut lokal, bukan respons backend.
- **Ketahanan Parameter Galeri:** Penanganan fallback kueri URL mencegah halaman kosong bila pengguna memasukkan parameter section yang tidak terdaftar (C-4).

---

## 5. Protokol Resolusi Konflik R-37
- **F1 (Empat Kolom) vs R-05 (4-Column Template Footer):** Dipertahankan sesuai spesifikasi wireframe. Untuk mencegah pola SaaS klise (`Product/Company/Resources/Legal`), kolom F1 disusun berdasarkan modul fungsional sistem (`Identitas Sistem`, `Navigasi Struktur`, `Spesifikasi Teknis`, `Dokumentasi`). *Alasan R-31: Menguji distribusi beban horizontal 4 kolom setara pada kanvas 1280px dan mekanisme pelipatan bertahap 1 -> 2 -> 4 kolom.*
- **S1 (Grid Kartu) vs R-14 (Feature Cards Seragam):** Dipertahankan sebagai representasi wireframe grid kartu dengan kartu utama dibedakan melalui hierarki kontainer murni (garis batas lebih tebal `2px solid var(--wf-ink)`), tanpa ornamen lencana/eyebrow apa pun di atas heading per R-09. *Alasan R-31: Membedakan hierarki informasi kartu utama dari kartu sekunder secara struktural tanpa menggunakan ornamen badge atau warna.*

---

## 6. Registri Destinasi Tautan Nyata (R-24, R-26, R-38)
Daftar berikut menjelaskan tujuan tautan saat aplikasi dijalankan secara lokal:
- `/#section-navbar`: Melompat ke anchor section navbar di halaman beranda.
- `/#section-hero`: Melompat ke anchor section hero di halaman beranda.
- `/#section-layanan`: Melompat ke anchor section layanan di halaman beranda.
- `/#section-footer`: Melompat ke anchor section footer di halaman beranda.
- `/galeri`: Membuka galeri perbandingan 43 varian section berdampingan atau mandiri.
- `/pratinjau?s=...`: Membuka komposisi preview dengan resep section di query string; koma pada resep tampil sebagai `%2C` setelah encoding URL. Ini satu-satunya halaman dokumen yang diizinkan oleh Worker deployment.
- `/uji`: Membuka laboratorium uji resiliensi data (pendek, panjang, tanpa gambar, status antarmuka).
- `/legal#ketentuan`, `/legal#privasi`, `/legal#aksesibilitas`: Halaman informasi internal untuk penggunaan lokal; tidak disajikan dari Worker klien.

**Akses rute:** Build Astro menghasilkan lima halaman statis: `/`, `/galeri`, `/legal`, `/pratinjau`, dan `/uji`. Halaman preview menyembunyikan navigasi lab dan JavaScript mencegah klik ke rute internal satu origin. Alur klien yang dimaksud membagikan tautan `/pratinjau`; ketiadaan navigasi tidak mencegah seseorang meminta URL internal secara langsung. Source saat ini juga memiliki allowlist Worker: hanya request `GET`/`HEAD` untuk `/pratinjau` (dengan atau tanpa garis miring akhir, serta query resep) dan aset build `/_astro/*` yang diteruskan; path atau metode lain mendapat 404 saat Worker berjalan di depan aset. Server pengembangan Astro tidak menerapkan allowlist itu. Konfigurasi domain dan deployment belum tersedia; rencana hosting adalah subdomain terpisah dari `enlesweb.com`. Studio membentuk URL preview memakai `PUBLIC_PREVIEW_BASE_URL`; tanpa variabel itu, origin saat ini dipakai.

---

## 7. Arsitektur Status Antarmuka UI (R-27)
Fixture di `/uji` menyediakan beberapa status antarmuka untuk schema/varian yang mendukungnya:
1. **Empty State (`kosong*`):** Ditampilkan ketika `daftar` atau `kartuInfo` berupa array kosong `[]`, menampilkan `.wf-empty-state` dengan judul dan CTA terarah.
2. **Loading State (`loading*`):** Ditampilkan ketika fixture menetapkan `status: 'loading'`; animasi CSS dinonaktifkan secara global.
3. **Error State (`error*`):** Ditampilkan ketika `status: 'error'`, menampilkan pesan galat spesifik dan tombol muat ulang/kembali.

---

## 8. Kriteria Desain (Bukan Hasil Verifikasi)
- **C-1 Intentionality:** Ini kriteria desain; repositori belum membuktikan alasan setiap penempatan blok didokumentasikan di kode varian.
- **C-2 Functional Completeness:** Tautan internal mengarah ke rute aplikasi lokal. Pada deployment klien, Worker mengembalikan 404 untuk rute dokumen selain `/pratinjau`.
- **C-3 Content-Driven Composition:** Section menyediakan struktur untuk pola konten website umum; data yang terlihat tetap fixture dummy dan belum divalidasi terhadap kebutuhan klien tertentu.
- **C-4 Resilience:** Halaman `/uji` menyediakan fixture data pendek, panjang, tanpa gambar/field opsional, serta status antarmuka. Ketersediaan fixture bukan bukti bahwa setiap kombinasi telah lulus audit menyeluruh.
- **C-5 Evidence Over Claims:** Semua isi section, termasuk ulasan bernama, merupakan data dummy untuk preview layout dan tidak boleh diperlakukan sebagai bukti pelanggan atau testimoni nyata.
