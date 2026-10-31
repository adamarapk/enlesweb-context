# layout-lab

Status per 31 Oktober 2026

`layout-lab` adalah composer internal untuk mencoba dan memvalidasi susunan section website sebelum tahap DP (*down payment*). Pengguna dapat memilih 43 varian section dari 13 kategori fungsional, mengatur urutan hierarkinya, melakukan simulasi responsivitas desktop/mobile, serta menyalin tautan pratinjau klien berbasis Stateless Compact ID yang aman. Seluruh konten menggunakan contoh bisnis umum dengan salinan netral dan data dummy arsitektural.

---

## Status Penggunaan & Batasan Sistem

- **Sesuai Decision 022:** Pratinjau `layout-lab` dirancang sebagai alat bantu penjualan sebelum kesepakatan dan DP bagi prospek yang mempertimbangkan pemesanan.
- **Wireframe Monokrom:** Dibangun dengan prinsip Decision 022 (`ENERGY 1 / RHYTHM 2 / MOTION 1`) untuk menguji alur konten, hierarki informasi, dan keterbacaan tanpa bias visual seperti warna dekoratif, ilustrasi warna-warni, atau gradien.
- **Bukan Website Builder (Decision 011):** Lab ini tidak menghasilkan website produksi atau blueprint JSON dan bukan Website Builder. Gerbang perancangan Website Builder tetap setelah klien ke-10 go live, selesai, tayang, dan lunas.
- **Data Dummy & Salinan Netral:** Seluruh nama bisnis, ulasan, harga, alamat, jam buka, dan kontak hanyalah data tiruan untuk pengujian beban tata letak. Ulasan bukan testimoni nyata (kepatuhan C-5), dan seluruh teks placeholder skema menggunakan pendekatan bahasa langsung yang jujur (*visitor-facing voice*) bebas dari klaim bombastis.

### Studio Perakit Split-Screen & Dual-Layer Architecture

Antarmuka Studio Admin (`/studio-admin/`) dirancang dengan pemisahan peran yang tegas antara kontrol perakitan dan kanvas tampilan:

1. **Dual-Layer Token System:**
   - **Studio Admin Shell (`--ew-*`):** Mengadopsi antarmuka bergaya ENLESWEB dengan jenis huruf Poppins, latar surface netral, aksen tactile `#E4FF30`, dan transisi kontrol interaktif.
   - **Wireframe Canvas (`--wf-*`):** Kanvas pratinjau klien terisolasi dalam monokrom murni (hitam-putih-abu) menggunakan jenis huruf IBM Plex Sans dan `transition: none !important` demi evaluasi struktural tanpa bias estetika.
2. **Scaled Virtual Artboard (1280px Desktop):**
   Kanvas desktop dirender pada lebar kanonikal 1280px dan diskalakan secara matematis menggunakan CSS `transform: scale()` menyesuaikan lebar area kerja (`scale = Math.min(1.0, Math.max(0.2, availableWidth / 1280))`). Dilengkapi tombol toggle untuk beralih antara mode **Auto-Fit** dan **100% Zoom** dengan dukungan horizontal panning tanpa memotong sisi tata letak.
3. **Sandboxed Live Iframe & Chassis iPhone 15 (390px Mobile):**
   Pratinjau mobile diisolasi di dalam sandboxed live iframe (`/p/<id>?clean=1`). Pada Studio Admin, kanvas iframe (390×796px) dibingkai oleh chassis fisik iPhone 15 berukuran 414×844px lengkap dengan Dynamic Island cutout, status bar 9:41 (ikon sinyal, Wi-Fi, baterai), tombol samping fisik (Action, Volume Up/Down, Power), serta Home Indicator (lebar 390px terisolasi di bawah status bar setinggi 48px). Pada pratinjau mandiri klien (`/p/<id>`), kanvas dirender pada viewport penuh 390×844px. Isolasi ini menjamin media query CSS mobile berjalan 100% akurat tanpa terpengaruh oleh lebar jendela peramban utama.
4. **Auto-Focus Deck Scroll:**
   Setiap interaksi pemilihan varian pada panel deck secara otomatis mengirimkan sinyal ke kanvas iframe untuk menggulirkan tampilan ke section yang bersangkutan dengan efek kilatan fokus visual halus (`.ew-highlight-flash`).
5. **Panel Kontrol Dapat Dilipat (*Collapsible Deck*):**
   Panel kontrol section di sisi kiri dapat disembunyikan untuk memberikan ruang pandang kanvas penuh, baik melalui tombol antarmuka maupun tombol pintas keyboard `[` (*bracket* kiri).

---

## Isi Composer & 13 Kategori Section

Tersedia **43 varian unik** yang terbagi ke dalam 13 kategori antarmuka. Seluruh skema (`src/schema/*.ts`) telah dimurnikan melalui refaktor salinan netral (commit `87548e1`) agar bebas dari kata-kata klise (*AI slop*) dan klaim pemasaran berlebihan:

1. **Navbar (`N1`–`N4`):** Dari brand kiri + menu kanan, split tengah, brand tengah, hingga brand kiri dengan aksi kontak terintegrasi.
2. **Hero (`H1`–`H4`):** Split teks-visual 16:10, headline terpusat minimalis, kartu metrik terintegrasi, dan split visual penuh.
3. **Layanan (`S1`–`S4`):** Grid kartu 3 kolom, daftar tabular spesifikasi, split kolom dengan header sticky, dan baris berselang-seling. Seluruh item layanan diperlakukan setara (*equal tier*) tanpa highlight kontainer.
4. **Footer (`F1`–`F4`):** 4-kolom modular, baris tunggal horizontal, terpusat bertumpuk, dan split asimetris brand-navigasi. Seluruh varian footer murni tanpa kartu CTA terintegrasi agar fokus pada peran navigasi penutup.
5. **Langkah Kerja (`P1`–`P3`):** Alur horizontal 4 kolom, garis waktu vertikal (*timeline*), dan grid 2x2 nomor besar.
6. **Keunggulan (`K1`–`K3`):** Kisi 3 kolom dengan placeholder ikon, daftar horizontal 2 kolom penuh kanvas (bebas dead space), dan pernyataan besar dengan kolom headline *sticky*.
7. **Lokasi & Operasional (`L1`–`L3`):** Split peta 16:10 dan jadwal, panggung peta lebar penuh dengan kartu mengambang, serta kartu informasi operasional bertumpuk tanpa peta.
8. **Aksi / CTA (`C1`–`C3`):** Spanduk horizontal, blok penutup terpusat, dan kartu 2 kolom dengan kontak langsung.
9. **Galeri (`G1`–`G3`):** Grid adaptif 2x2 bebas orphan card pada 4 item (`G1`), bento seimbang dengan border 1px seragam (`G2`), dan komparasi visual berdampingan 16:10 (`G3`).
10. **Ulasan Pelanggan (`U1`–`U3`):** Grid adaptif 2x2 pada 4 ulasan (`U1`), kartu bertumpuk dengan header sticky (`U2`), dan daftar satu kolom bergaris pemisah (`U3`).
11. **Biaya / Pricelist (`B1`–`B3`):** Kartu harga vertikal, daftar baris horizontal dengan rincian fitur, dan kartu bertumpuk. Seluruh paket biaya setara tanpa penonjolan tier tertentu.
12. **Tanya Jawab (`Q1`–`Q3`):** Akordeon satu kolom terpusat, split header sticky dengan akordeon kanan, dan kisi 2 kolom terbuka langsung. Bersih dari left-border dekoratif khas *AI slop*.
13. **Profil Perusahaan (`R1`–`R3`):** Split teks-visual seimbang tengah, narasi terpusat murni tipografi, dan split visual vertikal tinggi. Bersih dari kartu mitra/afiliasi.

---

## Menjalankan Secara Lokal

Stack dependensi terverifikasi per 31 Oktober 2026: runtime Node.js `22.23.4`, Astro `^7.4.4`, TypeScript `^6.0.3`, `@astrojs/check ^0.9.12`, `playwright-core ^1.64.1`, `puppeteer-core ^25.16.0`, dan override `vite ^8.3.5` untuk memitigasi seluruh CVE keamanan (commit `9a1de77` dan `19671bf`).

1. Pasang dependensi:
   ```powershell
   npm ci
   ```
2. Jalankan server lokal:
   ```powershell
   npm run dev
   ```
3. Akses Studio Perakit internal di peramban:
   ```
   http://localhost:4321/studio-admin/
   ```

---

## Arsitektur Rute & Keamanan

Build Astro menghasilkan 5 file statis utama (`/p/index.html` dan 4 halaman di bawah `/studio-admin/`):

- `/studio-admin/`: Studio Perakit Halaman (penyusun susunan section, generator ID, simulasi viewport 1280px & 390px, 5 preset skenario klien: *Lengkap · 13 Section*, *Starter · Ringkas*, *Business · Jasa*, *Business · Korporat*, dan *Growth · Katalog*, live iframe canvas, serta tema terang/gelap).
- `/studio-admin/galeri`: Galeri komparasi 43 varian berdampingan dengan sticky jump-bar 13 kategori.
- `/studio-admin/uji`: Laboratorium uji resiliensi data (pendek, panjang, tanpa gambar, empty/loading/error state).
- `/studio-admin/legal`: Keterangan penggunaan, privasi, dan aksesibilitas lab.
- `/p/<id>`: Pratinjau susunan section klien yang valid berbasis Stateless Compact ID (Base62 + salt 16-bit + checksum 12-bit). Berfungsi ganda sebagai kanvas sandboxed pada Studio Admin (dengan parameter `?clean=1`) maupun pratinjau mandiri klien. Terkunci ke Tema Terang secara default, otomatis menyembunyikan tautan menu ke section yang tidak aktif, dan mengalihkan tombol CTA jika section CTA tidak disertakan.
- `/`: Mengembalikan **404 Not Found** (mencegah akses publik ke studio internal).
- `/pratinjau`: Mengembalikan **404 Not Found** (dialihkan ke format `/p/<id>`).

Konfigurasi Cloudflare Workers (`src/worker.ts`) menggunakan binding `ASSETS` dengan penanganan redirect internal untuk memastikan pratinjau `/p/<id>` disajikan langsung tanpa mengubah path URL di peramban klien.

---

## Verifikasi, Linting, dan Tangkapan Layar

- **Pemeriksaan Lint Bebas Eyebrow & Build:**
  ```powershell
  npm run build
  ```
  Menjalankan `scripts/no-eyebrow-lint.mjs` (memeriksa 65 file di `src/`), `astro check` (0 error, 0 warning, 0 hint pada 70 berkas), dan `astro build` (menghasilkan 5 rute HTML statis).
- **Rangkaian Pengujian Otomatis:**
  ```powershell
  npm test
  ```
  Menjalankan 86 skenario uji visual Playwright di `/galeri` dan 46 assertion composer, keamanan rute, robustness codec fuzzing, F4 pure footer assertion, & fallback CTA di `scripts/test-perakit-pratinjau.mjs`.
- **Pembaruan Tangkapan Layar:**
  ```powershell
  npm run screenshot
  ```
  Mengambil tangkapan layar seluruh varian dan halaman sistem pada viewport 1280px dan 390px ke dalam folder `docs/screens/`.

---

## Dokumentasi Terkait

- [Catatan Teknis & Arsitektur Pengembang](NOTES.md)
- [Arsitektur Kontrak Desain Monokrom](DESIGN.md)
- [Laporan Audit Komposisi 13 Kategori (43 Varian)](docs/audit-komposisi-layout-13-kategori.md)
- [Indeks Tangkapan Layar Resmi (29 Oktober 2026)](docs/screens/README.md)
