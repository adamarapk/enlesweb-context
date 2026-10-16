# DESIGN.md - tuntas
Versi 3.0 (As-Is Visual and Design Specification)
Tanggal: 14 Oktober 2026

Dokumen ini mendokumentasikan sistem desain, token warna, tipografi, arsitektur lembar kertas, dan komponen visual website tuntas sesuai kondisi as-is yang terimplementasi di kode sumber.
Teks bersumber dari CONTENT.md, ruang lingkup dari PRD.md, dan arsitektur teknis dari SPEC.md.

---

## 1. Karakter Visual dan Arah Desain

### 1.1 Konsep Utama (Signature Metaphor)
Website tuntas dibangun dengan metafora **Lembar Buku Tulis SiDU Bergaris** dan **Ledger Administrasi Bimbel**:
- **Bukan Template SaaS Generik:** Menolak kartu rounded mengambang dengan shadow blur halus (*floating SaaS cards*), header tabel biru muda gradasi, dan stepper lingkaran bernomor.
- **Taktil Lembaran Fisik:** Setiap halaman disajikan sebagai lembar kertas buku tulis nyata (`.notebook-sheet`), lengkap dengan garis pembatas margin merah vertikal di sebelah kiri (`.notebook-margin-guide`), kisi baris buku tulis berulang setiap 32px (`repeating-linear-gradient`), serta barisan perforasi lubang kertas SiDU (`.notebook-margin-cells`) yang terkalibrasi per baris 32px pada layar tablet dan desktop.
- **Estetika Datar & Tajam:** Seluruh komponen kontainer, border tabel, dan tombol tampil dengan sudut siku-siku (`border-radius: 0px`), menyerupai garis cap atau stempel tinta cetak di atas lembaran fisik buku administrasi. Pengecualian radius hanya berlaku untuk tombol melayang WhatsApp (`border-radius: 50%`) dan kotak sel perforasi margin (`border-radius: 3px`).

### 1.2 Pembeda Visual Terhadap Proyek Lain di Ledger ENLESWEB

| Aspek | ENLESWEB | Jerseay | berflower | ripeir | tuntas (As-Is) |
| --- | --- | --- | --- | --- | --- |
| Latar | Putih bersih | Monokromatik hitam/putih | Krem hangat | Gelap hijau-hitam | Kertas SiDU (`#FFFFFF`) dengan kisi garis tinta biru tipis 32px |
| Elemen Karakter | Objek SVG taktil | Foto produk jersey | Editorial floris | Meja kerja gelap | Garis margin merah vertikal menerus dengan sel perforasi 32px |
| Font Display | Poppins | Plus Jakarta Sans | Fraunces | IBM Plex Mono | Space Grotesk 700 (arsitektur ledger tegas) |
| Font Body | Poppins | Plus Jakarta Sans | DM Sans | IBM Plex Sans | Atkinson Hyperlegible (kejelasan baca prima) |
| Radius Sudut | 10–14px, tombol 3D | 8px, hairline | Organik lembut | 2px, tajam presisi | **0px** (rata lembar buku), kecuali tombol WA melayang (50%) |
| Tombol WhatsApp | Melayang aksen | Melayang hijau standar | Melayang hijau standar | Melayang hijau standar | Melayang, hijau resmi WhatsApp (`#25D366`), lingkaran 56px/60px |
| Rangka Hero | Split teks + SVG | Showcase foto jersey | Hero editorial split | Grid meja kerja | Lembar SiDU: H1 2 baris terkalibrasi baseline 64px, 1 CTA stempel 32px, Master Schedule Ledger |

---

## 2. Token Desain (As-Is)
Seluruh token didefinisikan sebagai CSS custom properties di `src/styles/global.css`.

### 2.1 Palet Warna (Buku Tulis SiDU & Tinta)

| Token CSS | Kode Warna | Penggunaan As-Is |
| --- | --- | --- |
| `--canvas` | `#FFFFFF` | Latar utama lembar kertas buku tulis. |
| `--surface` | `#FFFFFF` | Latar blok formulir, header, dan sel formulir. |
| `--ink` | `#0F224A` | Tinta utama (pena pilot/ballpoint gelap): teks utama, border tabel, judul, border tombol stempel. |
| `--ink-muted` | `#3E4D68` | Teks sekunder, label tabel, deskripsi pendukung, border garis sekunder. |
| `--line` | `#D0DBEC` | Garis kisi horizontal dan pemisah sel tabel (garis tinta tipis). |
| `--line-ruled` | `rgba(20, 45, 120, 0.08)` | Garis bantu buku tulis berulang setiap 32px (`repeating-linear-gradient`). |
| `--line-ruled-solid` | `#ECEEF4` | Latar solid saat header navbar dalam status scroll (`site-header[data-scrolled='true']`). |
| `--tint` | `#F2F6FC` | Latar aksen sangat lembut untuk baris keterangan atau sorotan sel. |
| `--accent` | `#163275` | Latar tombol CTA utama dan link interaktif aktif. |
| `--accent-hover` | `#0D1F4D` | Status hover tombol CTA utama. |
| `--correction` | `#C5221F` | Merah koreksi/pulpen guru: nomor langkah 1 sampai 4, teks catatan tabel, dan pesan kesalahan. |
| `--correction-subtle`| `#FCA5A5` | Aksen merah sekunder: garis border margin vertikal kiri dan kotak sel perforasi margin. |
| `--error` | `#B42318` | Status peringatan kesalahan form kontak. |
| `--wa` | `#25D366` | Warna resmi tombol WhatsApp melayang. |
| `--wa-hover` | `#20BA5A` | Hover tombol WhatsApp melayang. |
| `--ink-on-dark-muted` | `#B8C0CF` | Teks pendukung kontras di atas latar gelap. |

### 2.2 Tipografi

| Kategori | Font Family | Sumber | Bobot |
| --- | --- | --- | --- |
| **Display / Heading** | `'Space Grotesk', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif` | `@fontsource/space-grotesk` | 700 (Bold) |
| **Body / Konten** | `'Atkinson Hyperlegible', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif` | `@fontsource/atkinson-hyperlegible` | 400 (Regular), 700 (Bold) |

#### Skala Tipografi Global:
- `--font-hero`: `clamp(2.75rem, 2rem + 3.8vw, 4.5rem)`
- `--font-page-title`: `clamp(2rem, 1.4rem + 2.5vw, 3rem)`
- `--font-section-title`: `clamp(1.5rem, 1.25rem + 1vw, 2.125rem)`
- `--font-card-title`: `1.125rem`
- `--font-item-name-lg`: `1.5rem`
- `--font-item-name`: `1.25rem`
- `--font-body-fluid`: `clamp(0.9375rem, 0.9rem + 0.2vw, 1.0625rem)`
- `--font-lead`: `clamp(1.125rem, 1rem + 0.35vw, 1.25rem)`
- `--font-label`: `0.8125rem`
- `--font-caption`: `0.875rem`
- `--font-small`: `0.875rem`
- `--font-button`: `1rem`
- `--font-sidu-meta`: `0.875rem`

#### Kalibrasi Baseline Hero (`Hero.astro`):
- **Headline H1 (`.hero-headline`):**
  - **Desktop (1024px+):** `font-size: 2.25rem` (36px), `font-weight: 700`, `line-height: 64px` (tepat 2 baris buku SiDU per baris teks), `letter-spacing: -0.03em`, `color: var(--ink)`, `margin: 0 0 32px 0`, `transform: translateY(9px)`.
  - **Mobile (<768px):** `font-size: 2rem` (32px), `line-height: 64px`, `margin-bottom: 44px`, `transform: translateY(12px)`.
- **Lead Text (`.hero-lead`):**
  - **Desktop:** `font-size: 1.0625rem` (17px), `line-height: 32px` (tepat 1 baris buku SiDU per baris teks), `color: var(--ink-muted)`, `max-width: 58ch`, `margin: 0 0 32px 0`, `transform: translateY(6px)`.
  - **Mobile:** `line-height: 32px`, `margin-bottom: 54px`, `transform: translateY(22px)`.
- **Tombol Action Row (`.hero-action-row`):**
  - `height: 32px`, `margin-bottom: 32px`, memuat tombol stempel `WhatsAppButton` setinggi 32px yang pas memenuhi 1 baris kisi buku tulis.

### 2.3 Radius Sudut dan Bayangan
- **Radius Nol:** `--radius-sm: 0px`, `--radius: 0px`, `--radius-md: 0px`, `--radius-lg: 0px`. Seluruh kartu, formulir, sel tabel, dan tombol stempel berbentuk siku-siku tajam.
- **Pengecualian Radius:**
  - Kotak perforasi lubang kertas margin (`.margin-cell-box`): `border-radius: 3px`.
  - Tombol melayang WhatsApp (`.floating-wa-link`): `border-radius: 50%`.
- **Batasan Bayangan:** `box-shadow` dilarang digunakan di seluruh layout, kartu, dan komponen, kecuali secara ketat dan minimal pada tombol interaktif berkelas `.btn-tactile`.

---

## 3. Komponen Antarmuka Utama (As-Is)

### 3.1 Lembar Buku Tulis dan Garis Margin Kiri (`Base.astro` & `global.css`)
- Container `.notebook-wrapper` membentang dengan 2 kolom:
  - Desktop / Tablet: `grid-template-columns: 44px 1fr`, `max-width: 1080px`.
  - Mobile (<768px): `grid-template-columns: 18px 1fr`.
- Kolom kiri `.notebook-margin-guide` menampilkan garis vertikal merah halus (`border-right: 2px solid var(--correction-subtle)`).
- **Perforasi Sel Margin (`.notebook-margin-cells`):**
  - Hanya tampil pada viewport tablet dan desktop ($\ge 768\text{px}$).
  - Merender 120 baris sel setinggi 32px (`.margin-cell-row`) dengan kotak perforasi transparan `.margin-cell-box` (`width: 32px; height: 18px; border: 1px solid var(--correction-subtle); border-radius: 3px;`).

### 3.2 Tombol CTA Stempel Tinta (`WhatsAppButton.astro`)
- Memiliki 4 varian ukuran: `default`, `hero`, `nav`, dan `stamp`.
- Seluruh varian memiliki tinggi kompak 32px (`height: 32px; min-height: 32px; max-height: 32px; line-height: 32px; padding: 0 16px; font-size: 0.875rem;`).
- Target sentuh aksesibilitas minimal 44px dipertahankan dengan pseudo-element `::before` yang memiliki area klik `inset: -6px 0`.
- Warna latar `var(--accent)` (`#163275`) dengan hover `var(--ink)` (`#0F224A`).

### 3.3 Master Schedule Ledger Table (`Hero.astro`)
- Terintegrasi langsung di dalam Hero tanpa kotak kartu SaaS rounded:
  - Blok kontainer memiliki border luar penuh 1px tinta (`border: 1px solid var(--ink)`).
  - Baris caption (`.ledger-caption-bar`): Tinggi 32px di desktop (64px di mobile), memuat judul `Jadwal kelompok kecil per kelas` dan label penegasan merah `Maksimal 6 siswa` (warna `var(--correction)`).
  - Tampilan Desktop: Tabel horizontal 3 kolom jenjang (SD, SMP, SMA) dengan tinggi header 64px, baris slot jadwal 64px per sesi (Senin & Kamis, Selasa & Jumat), serta baris format belajar 64px.
  - Tampilan Mobile: Otomatis reflow menjadi panel bertumpuk vertikal (`.mobile-tier-item`) dengan pembatas garis tinta 1px tanpa scroll horizontal.
  - **Bebas Harga Numerik di Homepage:** Nominal rupiah dilokalisasi eksklusif pada halaman `/jadwal-biaya`.

### 3.4 Baris Ledger Program Belajar (`ProgramRows.astro`)
- Menampilkan 3 baris ledger horizontal (SD, SMP, SMA) yang dipisahkan garis tinta bersih.
- Menampilkan badge nama jenjang, cakupan kelas, daftar mata pelajaran, dan tautan langsung ke anchor halaman program (`/program#sd`, `/program#smp`, `/program#sma`).

### 3.5 Tabel Komparasi Format Belajar (`FormatCards.astro`)
- Membandingkan format Kelompok Kecil (maksimal 6 siswa) vs Privat (1 siswa) secara tabular:
  - Parameter: Jumlah siswa, Lama pertemuan, Jadwal, Biaya ("Per bulan" vs "Per pertemuan").
  - Menampilkan kartu ringkasan komparasi di mobile dan tabel komparasi rapi di desktop.

### 3.6 Alur Cara Belajar (`StepList.astro`)
- Menampilkan 4 langkah belajar berurutan secara horizontal dengan penomoran indeks merah asli (`1.`, `2.`, `3.`, `4.`):
  1. Pemetaan awal
  2. Rencana belajar
  3. Pertemuan rutin
  4. Catatan perkembangan

### 3.7 Header Navigasi Sticky (`Navbar.astro`)
- Header sticky dengan tinggi 64px di mobile dan 72px di desktop.
- Latar transparan secara default, dan bertransisi mulus ke warna solid `var(--line-ruled-solid)` (`#ECEEF4`) ketika halaman digulir (`data-scrolled="true"`).
- Navigasi mobile menggunakan tombol burger toggle aksesibel dengan panel drawer overlay.

### 3.8 Footer Lembar Kertas (`Footer.astro`)
- Latar kertas putih (`var(--canvas)`) dengan garis pembatas atas tinta biru tipis (`border-top: 1px solid var(--line-ruled)`).
- 3 blok kolom: Identitas Brand & Tagline + CTA WhatsApp, Daftar Navigasi Halaman, serta Jam Operasional + Media Sosial Instagram.
- Garis pemisah bawah bermotif garis putus-putus (`border-top: 1px dashed var(--line)`) dengan pernyataan konsep: `Website oleh ENLESWEB.`.

### 3.9 Floating WhatsApp (`FloatingWhatsApp.astro`)
- Lingkaran hijau resmi WhatsApp `#25D366` (hover `#20BA5A`) dengan ikon putih di sudut kanan bawah layar (`width: 56px; height: 56px;` di mobile, `60px; height: 60px;` di desktop, `border-radius: 50%`).

---

## 4. Spesifikasi Responsif dan Breakpoints
- **Mobile (360px – 767px):**
  - Margin guide menyempit ke 18px (sel perforasi disembunyikan).
  - Padding container: 14px kiri dan kanan.
  - Tabel Hero reflow ke stacked panels vertikal.
  - Header navigasi beralih ke tombol toggle menu dengan full drawer overlay.
  - Floating WhatsApp berukuran 56px.
- **Tablet (768px – 1023px):**
  - Margin guide 44px dengan barisan sel perforasi 32px aktif.
  - Padding container: 32px kiri dan kanan.
  - Grid multi-kolom mulai terbuka.
- **Desktop (1024px – 1440px+):**
  - Navigasi desktop penuh horizontal dengan tombol WhatsApp `size="nav"`.
  - Layout 3 kolom tabel jadwal Hero tampil penuh.
  - Batas maksimal container 1080px di tengah layar.
  - Floating WhatsApp berukuran 60px.
