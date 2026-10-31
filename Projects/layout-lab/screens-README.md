# Arsip Tangkapan Layar Resmi (`docs/screens/`)

Koleksi gambar PNG pada folder ini adalah tangkapan layar kanonikal (*as-is*) hasil rendering otomatis menggunakan skrip [`capture.mjs`](../../scripts/capture.mjs) yang telah disinkronkan per 29 Oktober 2026 (mengikuti pembaruan antarmuka studio pada commit `f2657ea` serta frame iPhone 15 sandboxed canvas pada commit `1bcdc6d`).

Folder ini mendokumentasikan seluruh antarmuka yang aktif digunakan pada `layout-lab` untuk validasi komposisi visual, pengujian responsivitas, dan pencegahan regresi.

---

## 1. Spesifikasi Penangkapan

- **Viewport Desktop:** 1280 × 800 piksel (penanda `-1280.png`).
- **Viewport Mobile:** 390 × 844 piksel (penanda `-390.png`).
- **Engine:** Chromium Headless via Playwright / Puppeteer.
- **Status Warna:** Standar wireframe monokrom dengan kontras teks minimum 4.5:1 (WCAG AA) dan 13.9:1 (WCAG AAA).
- **Simulasi Mobile Workbench:** Pada Studio Admin (`page-studio-admin-390.png`), kanvas mobile dirender di dalam sandboxed live iframe (390×796px) yang dibingkai oleh chassis fisik iPhone 15 (414×844px) lengkap dengan Dynamic Island, status bar 9:41, tombol samping perangkat keras, dan home indicator. Pada pratinjau mandiri (`page-pratinjau-390.png`), tampilan dirender pada viewport penuh 390×844px.

---

## 2. Cakupan Tangkapan Layar (Total 101 File Gambar)

### A. 43 Varian Komponen Section (86 File)
Tiap varian memiliki tangkapan layar desktop (`-1280.png`) dan mobile (`-390.png`), menampilkan salinan netral bebas pola *AI slop*:
- **Navbar (4 varian):** `N1`, `N2`, `N3`, `N4`
- **Hero (4 varian):** `H1`, `H2`, `H3`, `H4`
- **Layanan (4 varian, setara tanpa highlight):** `S1`, `S2`, `S3`, `S4`
- **Footer (4 varian, murni tanpa CTA terintegrasi):** `F1`, `F2`, `F3`, `F4`
- **Langkah Kerja (3 varian):** `P1`, `P2`, `P3`
- **Keunggulan (3 varian):** `K1`, `K2` (lebar penuh 2-kolom bebas dead space), `K3` (sticky headline)
- **Lokasi & Operasional (3 varian):** `L1` (split 16:10), `L2` (peta penuh), `L3` (info bertumpuk)
- **Aksi / CTA (3 varian):** `C1`, `C2`, `C3`
- **Galeri Dokumentasi (3 varian):** `G1` (grid adaptif 2x2 pada 4 item), `G2` (bento seimbang 1px border), `G3` (perbandingan 16:10)
- **Ulasan Pelanggan (3 varian):** `U1` (grid adaptif 2x2 pada 4 ulasan), `U2` (kartu bertumpuk), `U3` (daftar satu kolom)
- **Biaya / Pricelist (3 varian, seluruh paket setara):** `B1`, `B2`, `B3`
- **Tanya Jawab (3 varian, bebas AI-slop left border):** `Q1`, `Q2`, `Q3`
- **Profil Perusahaan (3 varian, bebas kartu mitra):** `R1` (center vertical), `R2` (naratif terpusat), `R3` (split vertikal)

### B. Halaman Sistem & State Aktif (12 File)
- **Studio Perakit Halaman:** [`page-studio-admin-1280.png`](page-studio-admin-1280.png) & [`page-studio-admin-390.png`](page-studio-admin-390.png) (menampilkan workbench split-screen dan chassis iPhone 15).
- **Galeri Komparasi Varian:** [`page-galeri-1280.png`](page-galeri-1280.png) & [`page-galeri-390.png`](page-galeri-390.png)
- **Laboratorium Uji Resiliensi:** [`page-uji-1280.png`](page-uji-1280.png) & [`page-uji-390.png`](page-uji-390.png)
- **Informasi Legal & Kepatuhan:** [`page-legal-1280.png`](page-legal-1280.png) & [`page-legal-390.png`](page-legal-390.png)
- **Pratinjau Klien (`/p/<id>`):** [`page-pratinjau-1280.png`](page-pratinjau-1280.png) & [`page-pratinjau-390.png`](page-pratinjau-390.png)
- **Studio Admin Tema Gelap:** [`page-studio-admin-dark-1280.png`](page-studio-admin-dark-1280.png)
- **Status Aktif Deck Varian:** [`deck-active-variants.png`](deck-active-variants.png)

### C. Arsip Kompatibilitas Transisi Path (3 File)
Tangkapan layar historis untuk verifikasi kompatibilitas path transisi:
- [`page-index-1280.png`](page-index-1280.png)
- [`page-index-390.png`](page-index-390.png)
- [`page-index-dark-1280.png`](page-index-dark-1280.png)

---

## 3. Cara Memperbarui Tangkapan Layar

Untuk memperbarui seluruh tangkapan layar saat kode komponen atau skema mengalami perubahan:

```powershell
npm run build
npm run screenshot
```
