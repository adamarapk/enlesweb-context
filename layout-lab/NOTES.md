# Catatan Pengembang (`layout-lab`)

Status per 21 Oktober 2026: composer internal untuk eksplorasi layout sudah dibuat dan masih berjalan lokal. Belum ada deployment publik atau penggunaan dengan klien. Decision 022 menetapkan penggunaan preview layout sebelum DP setelah URL publik aktif dan diverifikasi. Lab menggunakan contoh bisnis umum dengan data dummy, tidak menghasilkan website produksi atau blueprint JSON, dan tidak menggantikan preview pengerjaan resmi setelah DP. Lihat [README](README.md) sebagai panduan masuk.

Indeks dokumentasi visual: [screenshot hasil build audit 21 Oktober 2026](docs/screens-as-is-2026-10-21/README.md).

## Catatan Arsitektur
1. **Pemisahan Logika & Struktur:**
   - Seluruh 43 varian pada 13 kategori section berbagi schema TypeScript per kategori di `src/schema/<jenis>.ts`: `navbar`, `hero`, `profil`, `keunggulan`, `layanan`, `langkah`, `galeri`, `ulasan`, `biaya`, `tanya-jawab`, `lokasi`, `cta`, dan `footer`.
   - Schema TypeScript dipisahkan per kategori dan menjadi tipe data bagi varian pada kategori tersebut.
2. **Kepatuhan Nilai Display:**
   - Warna dasar dan skala spasi utama memakai token CSS di `src/styles/wireframe.css` (`--wf-bg`, `--wf-ink`, `--wf-line`, `--wf-fill`, `--wf-radius`, `--wf-space-*`).
   - Ukuran komponen dan breakpoint juga memakai nilai eksplisit saat diperlukan; jangan menyebut semua dimensi sebagai token.
3. **Mekanisme Menu Mobile Tunggal:**
   - Seluruh varian navbar (`N1`–`N4`) menggunakan handler menu bersama di `BaseLayout.astro`, dengan `aria-expanded` dan panel menu.
   - Keempat varian memiliki komposisi desktop masing-masing; breakpoint tiap varian mengikuti stylesheet komponennya.
4. **Data Preview:**
   - Seluruh konten section, termasuk ulasan, nama, kutipan, harga, alamat, dan kontak, adalah data dummy untuk preview layout dan bukan data klien ENLESWEB.
   - `layout-lab` adalah composer mini internal untuk memilih varian dan menyusun urutan section. Tautan resep preview memakai kode varian pada query URL; aplikasi tidak menghasilkan blueprint JSON atau website produksi. Tool ini bukan Website Builder yang dimaksud Decision 011.
5. **Akses Deployment Klien:**
   - Build Astro menghasilkan halaman `/`, `/galeri`, `/legal`, `/pratinjau`, dan `/uji`. Halaman `/pratinjau` menyembunyikan bilah navigasi lab dan mencegah klik ke rute internal satu origin dari konten preview.
   - `src/worker.ts` juga memiliki allowlist request untuk deployment: hanya `GET`/`HEAD` ke `/pratinjau`, `/pratinjau/`, dan aset `/_astro/*` yang diteruskan ke binding aset; path atau metode lain menghasilkan 404. Ini adalah perilaku tambahan yang ada di kode, bukan alasan UI preview tidak menampilkan navigasi ke studio.
   - Alur klien yang dimaksud hanya membagikan tautan `/pratinjau`. Tanpa Worker, halaman internal tetap dibuat oleh build statis dan dapat diminta langsung melalui URL; tidak adanya navigasi saja tidak mencegah akses langsung.
   - Allowlist baru berlaku bila Worker dijalankan di depan aset; uji lokal yang ada tidak membuktikan konfigurasi hosting aktif.
   - Hosting direncanakan mengikuti pola ENLESWEB pada subdomain terpisah dari `enlesweb.com`. Nama subdomain dan konfigurasi deployment belum tersedia di `wrangler.toml`.
   - Studio membuat URL klien dari `PUBLIC_PREVIEW_BASE_URL`; bila variabel tidak disetel, origin yang sedang dibuka digunakan.
   - Resep memakai parameter `s`. `URLSearchParams` mengodekan koma sebagai `%2C` pada URL yang disalin atau dibuka; halaman preview membacanya kembali sebagai daftar varian.
   - Decision 022 menetapkan preview layout sebagai langkah penjualan sebelum DP. Admin memilih susunan yang sesuai kebutuhan prospek dan membagikan rute `/pratinjau` hanya setelah deployment publik dan URL diverifikasi. Konten tetap dummy, dan preview ini bukan draf proyek maupun preview pengerjaan resmi setelah DP.

## Hasil Audit Implementasi (2026-10-21)
- `npm run build` lulus pada 2026-10-21. Lint eyebrow bersih, `astro check` memeriksa 69 file dan melaporkan 0 error, 0 warning, dan 0 hint; output statis memuat lima halaman di atas.
- `npm test` belum lulus seluruhnya. Pemeriksaan visual meliputi 86 kombinasi (43 varian pada lebar 390 dan 1280 piksel) dan semuanya lulus. Tes composer lulus 26 dari 27 assertion.
- Satu assertion composer mencari koma mentah pada href preview. Implementasi membentuk query dengan `URLSearchParams`, sehingga koma tampil sebagai `%2C`. Kegagalan assertion ini belum membuktikan perilaku tautan preview rusak; assertion belum menormalisasi encoding URL.
- Smoke check langsung pada handler Worker dengan binding aset tiruan menghasilkan 200 untuk `/pratinjau?s=N1`, `/pratinjau/` dengan metode `HEAD`, dan `/_astro/app.css`; root, `/galeri`, `POST /pratinjau`, dan direktori `/_astro/` menghasilkan 404. Ini bukan uji deployment Cloudflare.
- Rasio delapan pasangan token terang/gelap dihitung ulang dengan contrast checker. Perhitungan token tidak mencakup seluruh kombinasi warna di semua varian dan bukan audit aksesibilitas menyeluruh.
- Repo belum memiliki bukti audit aksesibilitas menyeluruh.
- Capture dari hasil build terbaru menghasilkan 98 screenshot di `docs/screens-as-is-2026-10-21/`: 43 varian pada dua lebar layar, lima halaman pada dua lebar layar, satu beranda tema gelap, dan satu panel composer. Screenshot halaman legal yang baru tidak memuat klaim lisensi MIT dan menyebut isi section sebagai data dummy.
- File yang sudah ada di `docs/screens/` tidak ditimpa karena telah memiliki perubahan lokal sebelum capture ini. Folder itu berisi capture terdahulu; gunakan `docs/screens-as-is-2026-10-21/` untuk melihat tampilan hasil build yang diaudit pada tanggal ini. Contoh: [Beranda](docs/screens-as-is-2026-10-21/page-index-1280.png), [Galeri](docs/screens-as-is-2026-10-21/page-galeri-1280.png), [Pratinjau klien](docs/screens-as-is-2026-10-21/page-pratinjau-1280.png), [Uji](docs/screens-as-is-2026-10-21/page-uji-1280.png), dan [Legal](docs/screens-as-is-2026-10-21/page-legal-1280.png).

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
