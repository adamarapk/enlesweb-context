# ENLESWEB DOKUMENTASI UTAMA V3 (ENLESWEB-DOCS-V3)

Versi: 1.4 (Sinkronisasi SOP Operasional v1.2 CLOSED, Decision 013–017, & Klausul Update Konten Ringan)
Tanggal Pembaruan: 16 Oktober 2026
Sumber Konsolidasi: PRD.md, CONTENT.md, DESIGN.md, SPEC.md
Status Sistem: Production & Launch-Ready Implementation V3 (Tersinkronisasi Penuh Decision 001–017 & SOP v1.2 CLOSED)
Ringkasan Pembaruan: Sinkronisasi status SOP operasional WhatsApp menjadi CLOSED (terkunci di `Delivery & Operations/sop.md` v1.2), pencatatan kebijakan kuota gratis putaran update konten ringan tahunan (Starter 2x, Business 4x, Growth 6x + reset saat perpanjangan terkelola), aturan waktu pembelian domain pasca-DP + materi lengkap, aturan tunda proyek (*On-Hold*) 60 hari kalender, serta penyisaan 3 tugas eksekusi murni Minggu 0.

---

## RINGKASAN PEMBARUAN V3 (CHANGELOG V3)

### Pembaruan Versi 1.4 (16 Oktober 2026 - Sinkronisasi SOP Operasional v1.2 CLOSED & Decision 013–017)
1. **Penutupan Status SOP Operasional WhatsApp (CLOSED di `Delivery & Operations/sop.md` v1.2)**:
   - Seluruh skrip alur chat WhatsApp (Template 5.1 s/d 5.9), rekomendasi paket dengan jembatan ekspektasi demo antar-tier dan *default framing* ekstensi `.com`, transparansi Nama Lengkap Pendiri di Bukti Pemesanan PDF ber-TTD digital, waktu pembelian domain (setelah DP 50% + materi dasar lengkap), serta perubahan aturan keterlambatan materi 7 hari menjadi status *On-Hold* hingga 60 hari kalender telah resmi dikunci (**CLOSED**). Copy homepage (`CONTENT.md` dan `src/content/copy.ts`) tetap tidak diubah.
2. **Kebijakan Kuota Putaran Update Konten Ringan Pasca-Tayang (Decision 015)**:
   - Menambahkan jatah gratis putaran update konten ringan tahunan selama 1 tahun pertama secara berjenjang di dalam SOP operasional dan Bukti Pemesanan PDF: **Starter 2x**, **Business 4x**, dan **Growth 6x** putaran update ringan per tahun (maksimal 5–10 item teks/harga/jam buka/foto per kiriman pesan WhatsApp tanpa ubah struktur layout, SLA 1–2 hari kerja; selebihnya Rp50.000/putaran). Kuota ini otomatis di-reset setiap tahun apabila klien memilih Perpanjangan Terkelola di tahun ke-2+.
3. **Sinkronisasi Fokus Eksekusi Minggu 0 (Decision 013–017)**:
   - Menyisakan 3 tugas eksekusi murni pra-iklan: (1) pembelian domain `enlesweb.com`, (2) pembuatan materi kreatif iklan Carousel 4 slide berlabel tier & harga + *problem-aware hook*, dan (3) penguncian draf template PDF Bukti Pemesanan.

### Pembaruan Versi 1.3 (15 Oktober 2026 - Sinkronisasi Keputusan Domain Registrant Decision 002)
1. **Sinkronisasi Skema Perpanjangan Tahun Ke-2 (Decision 002)**:
   - Menyelaraskan seluruh klausul perpanjangan tahun kedua di PRD.md dan CONTENT.md dengan keputusan kanonikal Decision 002:
     - Tahun pertama: domain dan hosting sudah termasuk dalam paket pembuatan, akun registrar dan nama *registrant* domain tahun pertama didaftarkan atas nama ENLESWEB demi kemudahan pendaftaran dan kecepatan aktivasi tanpa birokrasi verifikasi dokumen identitas awal (seperti KTP untuk `.id`).
     - Tahun kedua: klien bebas memilih (1) Perpanjangan Terkelola flat untuk semua paket: Rp400.000 per tahun untuk domain .com/.id dan hosting, atau Rp300.000 per tahun untuk domain selain itu; atau (2) Opsi Mandiri dengan transfer kepemilikan domain (kode transfer EPP / Auth Code) dan penyerahan file arsip *build* statis website (.zip dari `dist/`) secara cuma-cuma tanpa vendor lock-in.
     - Integritas positioning dan marketing copy: menegaskan janji utama "Kepastian dan Kemudahan" (tanpa memakai klaim tanpa biaya langganan berulang sebagai klaim utama) dengan transparansi biaya sejak awal.

### Pembaruan Baseline Versi 1.2 (14 Oktober 2026)
1. **Showcase 6 Proyek Portofolio Konsep Lengkap**:
   - Menampilkan 6 proyek portofolio konsep dengan live demo URL Vercel aktif untuk ketiga tingkatan paket:
     - Starter: Seruput Kopi (kedai kopi) & ripeir (workshop perbaikan barang)
     - Business: tuntas (bimbel & les privat)
     - Growth: Jerseay (studio jersey custom, default highlight), dipotongin (barbershop), & berflower (toko bunga)
   - Dilengkapi sistem switcher panggung berasio 16:10 (*highlighted stage*) dan 5 kartu ringkas (*minimized cards*) dengan auto-scroll kembali ke panggung pada mobile.
   - Mekanisme fallback aman merender tombol nonaktif `[Segera]` dengan warning build jika URL dikosongkan.

2. **Navbar Transparan & Ambient Bleed Hero**:
   - Navbar memulai render dengan latar transparan (`background-color: transparent`, `border-bottom: 1px solid transparent`) pada posisi `top: 0` (`z-index: 100`).
   - Hero mengaplikasikan margin-top negatif (`-64px` mobile, `-72px` desktop) dengan kompensasi padding atas sehingga sapuan pendaran aksen (*ambient gradient sweep*) mengalir bebas menembus navbar transparan tanpa sekat.
   - Navbar beralih mulus (150ms) menjadi solid kanvas (`--canvas: #FFFFFF`) dengan garis bawah tipis (`1px solid var(--line)`) saat di-scroll lebih dari 8px atau ketika mobile drawer dibuka.

3. **Engineered Tactile Button Affordance**:
   - Mengeliminasi difusi blur kotor pada tombol aksi, menggantinya dengan bottom shelf presisi 3px solid `#A3C400` dan inset specular highlight 1px (`rgba(255, 255, 255, 0.6)`) di sisi atas.
   - Interaksi hover/fokus menggunakan pembalikan kontras bersih (*clean ink inversion*) menjadi latar `--ink` dengan teks `--accent` dan shelf 3px `#000000`.
   - Memberikan depresi fisik 2px (`transform: translateY(2px)`) saat tombol ditekan (*active state*).

4. **Penyelarasan Baris Tipografi Paket Desktop Sub-Pixel**:
   - Sinkronisasi tinggi minimum area deskripsi (`min-height: 96px`), slot catatan peluncuran (`min-height: 54.4px`), dan baris fitur inti ke-2 (`min-height: 48px`) pada layar desktop (>= 1024px).
   - Seluruh baris fitur, toggle dropdown, dan tombol CTA sejajar horizontal sempurna di ketiga kolom paket.

5. **Kepatuhan Protokol Anti-Slop & WCAG AA**:
   - Bebas 100% dari tanda baca em dash (—) pada teks pelanggan.
   - Bebas dari klaim promosi buatan, testimoni palsu, rating, atau badge "Most Popular".
   - Rasio kontras teks melampaui standar WCAG AA (minimal 4.5:1 untuk teks biasa, ~17:1 untuk teks ink di atas aksen).
   - Seluruh nilai variabel bisnis terpusat di `src/config/site.ts` dan seluruh teks terpusat di `src/content/copy.ts`.

6. **Halaman Statis Kebijakan Privasi (/kebijakan-privasi)**:
   - Membuat halaman statis minimal `/kebijakan-privasi` dengan header minimalis (logo EnlesWeb dan tautan kembali berikon SVG bersih tanpa karakter panah unicode) serta struktur 5 poin lugas.
   - Menautkan tautan utilitas `Kebijakan Privasi` pada baris bawah footer (`footer-bottom`) berdampingan dengan hak cipta `© EnlesWeb` untuk memenuhi syarat kepatuhan kampanye iklan berbayar Meta Ads.

---

## DAFTAR ISI (TABLE OF CONTENTS)

1. DOKUMEN 1: PRD.md (Product Requirements Document)
   - 1.1 Konteks Bisnis dan Strategi
   - 1.2 Tujuan Halaman dan Prioritas
   - 1.3 Audiens Sasaran dan Traffic
   - 1.4 Ringkasan Struktur Penawaran
   - 1.5 Scope In (Cakupan Fitur 9 Section + Halaman Kebijakan Privasi)
   - 1.6 Scope Out (Di Luar Cakupan)
   - 1.7 Launch Cut (Status Rilis 6 Proyek Demo)
   - 1.8 Batasan Bisnis (LOCKED)
   - 1.9 Perilaku Konversi dan Tracking
   - 1.10 Kriteria Selesai (Definition of Done)
   - 1.11 QA Konversi dan Evaluasi
   - 1.12 Analisis Risiko dan Mitigasi
   - 1.13 Daftar Keputusan Sistem (LOCKED, DEFAULT, OPEN)

2. DOKUMEN 2: CONTENT.md (As-Is Website Copy Specification)
   - 2.1 Aturan Keras Copywriting
   - 2.2 Meta Halaman
   - 2.3 Navbar Copy
   - 2.4 Hero Copy
   - 2.5 Paket Copy (Starter, Business, Growth, Custom)
   - 2.6 Proyek Copy (Jerseay, dipotongin, tuntas, Seruput Kopi, ripeir, berflower)
   - 2.7 Proses Copy (5 Langkah)
   - 2.8 Tentang dan Pernyataan Manfaat Bisnis
   - 2.9 CTA Penutup Copy
   - 2.10 Footer Copy (Termasuk Tautan Kebijakan Privasi)
   - 2.11 Floating WhatsApp Button Copy
   - 2.12 Pesan WhatsApp Otomatis (9 Touchpoints)
   - 2.13 Larangan Teks Spesifik
   - 2.14 Kebijakan Privasi Copy (/kebijakan-privasi)

3. DOKUMEN 3: DESIGN.md (As-Is Website Visual & Design Specification)
   - 3.1 Karakter dan Target Rasa
   - 3.2 Token Desain (Warna, Tipografi, Spacing, Radius)
   - 3.3 Sistem Affordance Fisik 3D Tombol (Engineered Tactile Shelf)
   - 3.4 Container dan Breakpoint
   - 3.5 Detail Komponen UI (Navbar Transparan, Hero Ambient Bleed, Paket, 6 Proyek, Proses, Tentang, CTA, Footer)
   - 3.6 Mobile Ambient Sweep vs Desktop Layered Composition
   - 3.7 Interaksi, Animasi, dan Motion Control
   - 3.8 Aksesibilitas Visual (WCAG AA)
   - 3.9 Desain Halaman Utilitas: Kebijakan Privasi (/kebijakan-privasi)

4. DOKUMEN 4: SPEC.md (As-Is Technical Architecture & Implementation)
   - 4.1 Stack Teknis
   - 4.2 Struktur File Proyek Aktual (Termasuk kebijakan-privasi.astro)
   - 4.3 Pemetaan Section ke Komponen dan Semantik HTML
   - 4.4 Konfigurasi Bisnis Terpusat (src/config/site.ts)
   - 4.5 Skrip Klien Vanilla JS
   - 4.6 Integrasi WhatsApp dan Generator URL (src/lib/whatsapp.ts)
   - 4.7 Tracking Meta Pixel (Base.astro)
   - 4.8 CSS, Token, dan Font Self-Hosted
   - 4.9 SEO dan Meta Tags
   - 4.10 Aksesibilitas dan Target Performa
   - 4.11 QA Checklist Teknis
   - 4.12 Panduan Deploy Cloudflare Pages / Workers
   - 4.13 Catatan Status OPEN Tersisa

---

=== BATAS AWAL FILE: PRD.md ===

# PRD.md - ENLESWEB Homepage

Versi 1.3 (As-Is V3 Website Specification - Sinkronisasi Decision 002) - 15 Oktober 2026

Dokumen ini menjawab: apa yang dibangun, untuk siapa, apa batasnya, dan kapan dianggap selesai. Teks ada di CONTENT.md, tampilan di DESIGN.md, teknis di SPEC.md.

---

## 1. Konteks

ENLESWEB adalah bisnis jasa pembuatan website yang baru dimulai. Belum ada klien nyata. Strategi saat ini: tayangkan landing page, jalankan iklan Meta ke landing page itu, dan kerjakan sistem produksi website setelah ada klien masuk.

Homepage ini adalah satu-satunya halaman yang dibangun pada tahap ini.

Prinsip bisnis: jangan menjual teknologi. Jual hasil website, proses yang mudah, dan kebutuhan bisnis yang terselesaikan.

## 2. Tujuan halaman

Satu tujuan: pengunjung mengklik tombol WhatsApp.

Urutan prioritas (LOCKED):

1. Clarity: pengunjung paham apa yang dijual.
2. Honesty: tidak ada klaim yang tidak bisa dibuktikan.
3. Trust: ada alasan untuk percaya tanpa bukti palsu.
4. Action: jalur menghubungi sangat jelas.

## 3. Audiens dan traffic

- Pemilik bisnis kecil-menengah, UMKM, bisnis lokal, jasa profesional. Mayoritas non-teknis, usia sekitar 25 sampai 40+.
- Traffic utama berasal dari iklan Meta: audiens dingin, belum mengenal ENLESWEB, mayoritas membuka lewat HP.
- Bahasa untuk pelanggan harus sederhana dan tidak teknis. Sapaan: "kamu/-mu" (LOCKED).

## 4. Penawaran (ringkasan struktur)

Rincian teks dan harga hanya ada di CONTENT.md.

- Tiga paket inti dibandingkan berdampingan: Starter, Business, Growth.
- Penampilan ketiga paket (Starter, Business, Growth) dibuat serasi dan sejajar secara horizontal di desktop (>= 1024px) dengan tipografi dan padding kolom yang seragam sesuai keputusan pemilik bisnis (LOCKED).
- Custom adalah jalur terpisah untuk kebutuhan di luar Growth. Custom bukan paket keempat dalam perbandingan (LOCKED).
- Domain dan hosting 1 tahun termasuk di tiga paket inti, dan itu bukan pembeda paket.
- Starter memiliki catatan "harga peluncuran untuk 10 klien pertama". Catatan ini dapat diaktifkan/dinonaktifkan secara terpusat lewat konfigurasi `site.showLaunchNote` (LOCKED, lihat SPEC.md bagian 4).
- Tanpa badge, pita, atau klaim buatan sendiri seperti "Best Value" atau "Most Popular" (LOCKED).
- Tidak ada janji durasi pengerjaan di halaman (LOCKED, karena timeline belum final).

## 5. Scope (IN)

Halaman satu-page dengan urutan section berikut:

1. Navbar
2. Hero
3. Paket
4. Proyek
5. Proses
6. Tentang (Penggabungan narasi Tentang ENLESWEB dan Pernyataan Manfaat Bisnis dalam tata letak editorial asimetris)
7. CTA penutup
8. Footer
9. Floating WhatsApp Sticky Button (pojok kanan-bawah)

Persyaratan per section:

**Navbar**
- Berisi logo ikon geometri svg (`navbrand-logo.svg`) dan teks merek `EnlesWeb`, tiga tautan anchor (Paket, Proyek, Proses), dan tombol WhatsApp.
- Pada tampilan desktop (>= 768px): tombol CTA WhatsApp (`Chat WhatsApp`) tampil di sisi kanan navbar.
- Pada tampilan mobile (< 768px): tombol CTA dihilangkan dari navbar untuk memberikan ruang bernapas yang bersih pada header mobile (hanya memuat logo merek dan menu drawer toggle 44x44px). Jalur konversi mobile ditangani oleh tombol WhatsApp melayang (Floating WhatsApp sticky button).
- Saat halaman belum di-scroll (top 0px), navbar berlatar belakang transparan tanpa border bawah, sehingga pendaran visual dan ambient hero mengalir menembus bagian belakang navbar.
- Setelah halaman di-scroll lebih dari 8px (atau saat menu drawer mobile terbuka), navbar tetap menempel di atas dengan transisi halus (150ms) menuju latar solid `--canvas` (`#FFFFFF`) dan garis bawah tipis `1px solid var(--line)`.

**Hero**
- Dalam beberapa detik pertama pengunjung melihat: apa yang dijual, harga mulai Rp450.000 (dengan sorotan garis aksen 1/4 tinggi teks), penegasan domain + hosting 1 tahun, serta kalimat penjaminan pengerjaan desain dan penayangan.
- Satu tombol utama WhatsApp (`[Chat via WhatsApp]`) dan satu tautan sekunder (`[Lihat Paket]` menuju anchor `#paket`).
- Tidak ada eyebrow badge di atas headline.
- Komposisi Visual Hero:
  - Hero meluas ke puncak halaman melewati batas navbar dengan margin negatif dan padding kompensasi.
  - Desktop (>= 768px): Teks berada di tengah dengan latar belakang objek visual berlapis (*layered tactile composition*) SVG yang memadukan wireframe website, kartu domain, server, dan puzzle modular khas ENLESWEB di lapisan bawah secara tenang.
  - Mobile (< 768px): Objek modular disembunyikan (`display: none`) agar tidak mengotori layar pertama HP. Sebagai gantinya, dihadirkan sapuan aksen gradien abstrak diagonal (*ambient gradient sweep*) yang mengalir dari ujung kiri atas headline melintasi tombol hingga menyentuh judul section Paket ("Pilih website sesuai kebutuhan bisnismu.").
  - Teks headline, harga, teks pendukung, dan tombol WhatsApp tertata rapi dan muat dalam layar HP 360x740 dan 390x844 tanpa scroll.

**Paket**
- Tiga paket inti mudah dibandingkan dengan cepat: nama, harga, deskripsi, catatan peluncuran (Starter), dan 5 baris fitur inti.
- Komponen lipat `<details>`: tertutup secara default pada semua ukuran layar (keputusan pemilik bisnis) dengan label toggle dinamis "Lihat semua yang termasuk" / "Sembunyikan".
- Penyelarasan baris tipografi desktop (>= 1024px): area deskripsi (`min-height: 96px`), slot catatan peluncuran (`min-height: 54.4px`), dan baris fitur inti ke-2 (`min-height: 48px`) disinkronkan secara sub-pixel sehingga tombol CTA dan fitur sejajar horizontal sempurna di ketiga kolom.
- Custom tampil terpisah di bawah 3 kolom paket dengan pembatas garis tipis, memuat daftar contoh kebutuhan custom dengan penanda titik bulat geometris minimalis (tanpa em dash).
- Semua tombol paket berbobot visual sama (tanpa border, berlatar aksen `--accent`, dengan affordance fisik 3D *Engineered Tactile Shelf* 3px presisi).

**Proyek**
- Enam proyek tampil: Jerseay, dipotongin, tuntas, Seruput Kopi, ripeir, berflower.
- Proyek adalah contoh kemampuan, bukan bukti sosial. Setiap proyek diberi label konsep buatan sendiri sesuai tingkat paketnya (Starter, Business, atau Growth).
- Sistem **Highlight & Minimize**:
  - Desktop (>= 1024px): Tata letak 2 kolom (kiri: proyek highlighted penuh rasio 16:10, kanan: 5 proyek minimized ringkas).
  - Mobile (< 1024px): Ditumpuk secara kompak (highlight di atas, switcher kartu minimized di bawah dengan auto-scroll halus kembali ke stage).
  - Default proyek yang di-highlight adalah Jerseay.
- Status tombol saat ini:
  - Keenam proyek (`jerseay`, `dipotongin`, `tuntas`, `seruput`, `ripeir`, `berflower`) berstatus `live` dengan URL demo Vercel aktif (`[Lihat Website]`). Jika salah satu URL dikosongkan di `site.ts`, komponen otomatis menampilkan tombol nonaktif `[Segera]` dengan atribut `aria-label="Segera tersedia"` dan mencetak peringatan build `console.warn` (mencegah broken link).

**Proses**
- Lima langkah berurutan dalam satu sumbu vertikal lurus.
- Sistem **Highlight & Minimize Timeline**:
  - Langkah 1 aktif/highlight secara default, langkah 2 sampai 5 diminimize.
  - Mengetuk penanda nomor atau baris langkah mana pun akan memperluas (*expand*) deskripsi langkah tersebut dengan animasi panah rotasi 180° dan kartu `--surface`. Sumbu vertikal berhenti tepat di langkah kelima ("Tayang").

**Tentang (Penggabungan Narasi & Pernyataan Manfaat Bisnis)**
- Penggabungan narasi Tentang ENLESWEB dan Pernyataan Manfaat Bisnis ke dalam satu section editorial asimetris `#tentang` (LOCKED: keputusan pemilik bisnis).
- Kolom kiri: Judul section `Tentang ENLESWEB` dan 2 paragraf cerita tenang yang menegaskan bahwa pemilik bisnis tidak perlu pusing mengurus urusan teknis.
- Kolom kanan: Kartu taktil borderless berlatar `--surface` (`#F5F5F2`) dengan indikator aksen minimal (36px x 3px) yang memuat Pernyataan Manfaat Bisnis: calon pelanggan bisa langsung WhatsApp, Google Maps, dan membaca produk tanpa harus tanya satu per satu.

**CTA penutup**
- Kartu banner berlatar warna aksen penuh `--accent` (`#E4FF30`), sudut melengkung lebar borderless, memuat judul, teks ajakan konsultasi santai ("Ceritakan kebutuhanmu. Kami bantu tentukan paket yang paling sesuai."), dan tombol aksi WhatsApp solid ink `#111111`.
- Objek visual modular SVG disembunyikan di mobile (< 768px) untuk menjaga ringkasnya kartu konversi penutup.

**Footer**
- Berlatar belakang warna `--ink` (`#111111`) penuh dari ujung ke ujung tanpa border atas.
- Merek putih, tagline `#A3A39E`, ikon tautan WhatsApp resmi dan Instagram resmi (@enlesweb), tiga tautan navigasi (Paket, Proyek, Proses) dengan area tap minimum 44px (WCAG AA), dan hak cipta.

**Floating WhatsApp Button**
- Tombol aksi WhatsApp melayang (*sticky floating action button*) di pojok kanan-bawah layar.
- Berbentuk lingkaran berdiameter 56px di mobile dan 60px di desktop, berlatar aksen `--accent`, ikon vector telepon WhatsApp `--ink`, bayangan kontak halus, serta margin aman `env(safe-area-inset-bottom)`.
- Aktif pada tampilan mobile maupun desktop.

## 6. Di luar scope (OUT)

- Halaman lain (halaman Custom, detail proyek terpisah, blog, FAQ, harga lengkap, halaman terima kasih).
- Builder, blueprint JSON, dan engine produksi website.
- Form kontak di homepage. Jalur konversi 100% WhatsApp.
- CMS, login, pembayaran online, dashboard.
- Aturan revisi, pembayaran, perpanjangan domain/hosting, dan kontrak di luar homepage.
- Testimoni, rating, jumlah klien, statistik, logo klien, penghargaan.
- Scroll-jacking, parallax, efek melayang berulang.
- Multi-bahasa.

## 7. Launch cut
 
| Proyek | Tingkat Paket | Status saat go live | Tombol | URL Demo |
|---|---|---|---|---|
| Jerseay | Growth | Live, demo aktif | "Lihat Website" | `https://jerseay.vercel.app/` |
| dipotongin | Growth | Live, demo aktif | "Lihat Website" | `https://dipotongin.vercel.app/` |
| tuntas | Business | Live, demo aktif | "Lihat Website" | `https://tuntas-steel.vercel.app/` |
| Seruput Kopi | Starter | Live, demo aktif | "Lihat Website" | `https://seruput-kopi.vercel.app/` |
| ripeir | Starter | Live, demo aktif | "Lihat Website" | `https://ripeir.vercel.app/` |
| berflower | Growth | Live, demo aktif | "Lihat Website" | `https://berflower-lilac.vercel.app/` |

Catatan: Keenam proyek contoh berstatus `live` dengan demo Vercel aktif dan aset visual screenshot lokal di `src/assets/projects/` (didukung fallback SVG jika URL dikosongkan).

## 8. Batasan bisnis (LOCKED)

- Harga, nama paket, dan isi paket hanya boleh berasal dari CONTENT.md. Jangan ubah harga.
- Jangan menulis domain atau hosting "gratis", dan jangan menyiratkan domain gratis selamanya.
- Jangan menyebut ekstensi domain spesifik secara kaku (seperti `.com`, `.store`, atau `.shop`). Calon klien bebas memilih domain yang sesuai (.com, .id, dll.).
- Ketentuan perpanjangan tahun kedua (LOCKED - Decision 002): Pembuatan website sudah termasuk domain dan hosting selama 1 tahun pertama, dengan akun registrar dan nama *registrant* domain tahun pertama didaftarkan atas nama ENLESWEB demi kemudahan proses dan kecepatan aktivasi tanpa birokrasi verifikasi dokumen identitas awal. Pada tahun kedua, klien bebas memilih: (1) Perpanjangan Terkelola flat untuk semua paket: Rp400.000 per tahun untuk hosting dan domain .com/.id, atau Rp300.000 per tahun untuk ekstensi domain selain itu; atau (2) Opsi Mandiri dengan transfer kepemilikan domain (kode transfer EPP / Auth Code) dan penyerahan file arsip build statis website (.zip dari dist/) secara cuma-cuma agar klien dapat mengelola hosting mandiri tanpa vendor lock-in. Dalam komunikasi WhatsApp atau materi iklan, jangan menyiratkan domain gratis selamanya, melainkan sampaikan secara transparan bahwa paket pembuatan mencakup 1 tahun penuh, dan tahun kedua berlanjut dengan pilihan perpanjangan terkelola atau opsi mandiri.
- Jangan membuat klaim pasar atau klaim hasil (misalnya "naikkan penjualan", "peringkat 1 Google") tanpa dasar.
- Jangan memakai kata "premium", "presisi", "elevate", "seamless", "crafted", "powerful", "modern", atau sejenisnya di teks pelanggan.
- Business tidak boleh disebut "decoy". Business adalah paket yang sah.
- Keenam proyek portofolio konsep bukan klien nyata dan tidak boleh disebut atau dipakai sebagai klien, testimoni, atau angka klien.
- Tautan utilitas footer: tampilkan hanya halaman yang benar-benar ada. Halaman Kebijakan Privasi (`/kebijakan-privasi`) aktif dan ditautkan di bar bawah footer berdampingan dengan hak cipta.

## 9. Perilaku konversi

- Jalur konversi utama: WhatsApp.
- Terdapat tepat 9 titik sentuh tombol WhatsApp yang di-tracking: `nav`, `hero`, `package_starter`, `package_business`, `package_growth`, `package_custom`, `final_cta`, `footer`, dan `floating_wa`.
- Semua tombol WhatsApp membuka `wa.me/{nomor}?text=...` di mobile dan memiliki cadangan WhatsApp Web / Desktop di komputer.
- Pesan otomatis seragam: hanya bagian topik yang berbeda (paket, atau pembuatan website secara umum). Format ada di CONTENT.md bagian 11.
- Setiap klik WhatsApp dicatat ke Meta Pixel sebagai event standar resmi `AddToCart` dengan parameter nilai paket untuk value-based bidding (LOCKED). Detail teknis ada di SPEC.md bagian 7.
- Nomor WhatsApp resmi (`+6285156801570`) terpusat di `src/config/site.ts` (LOCKED).

## 10. Kriteria selesai (Definition of Done)

Homepage siap direview jika semua benar:

- Semua teks sama persis dengan CONTENT.md tanpa penambahan kata terlarang atau em dash.
- Hero menampilkan penawaran, harga, teks jaminan pengerjaan, dan tombol WhatsApp di layar HP 360x740 dan 390x844 tanpa scroll berlebih.
- Rp450.000 dan "domain dan hosting 1 tahun" terlihat jelas di hero.
- Tiga paket inti dapat dibandingkan secara sejajar di desktop, dan Custom terpisah di bawahnya.
- Tidak ada badge "Most Popular", "Best Value", atau badge buatan.
- Enam proyek tampil dengan label konsep (sistem Highlight & Minimize); keenam proyek aktif dengan demo URL Vercel live (`[Lihat Website]`), didukung mekanisme fallback nonaktif aman `[Segera]` dengan warning build jika URL dikosongkan.
- Proses memakai satu sumbu vertikal dengan interaksi accordion langkah yang mulus.
- Pernyataan manfaat bisnis dan Tentang menyatu dalam layout editorial asimetris `#tentang`.
- Semua tombol WhatsApp berfungsi dan membawa pesan otomatis yang benar.
- Event kontak Meta Pixel terkirim saat tombol WhatsApp diklik (setelah Pixel ID diisi).
- Seluruh tombol utama memiliki affordance fisik 3D *Engineered Tactile* (shelf 3px aksen `#A3C400`, inset specular highlight, clean ink inversion, zero diffuse blur).
- Animasi bertahap (*progressive scroll reveal*) ultra-ringan berbasis GPU berjalan mulus di smartphone kelas menengah dan menghormati `prefers-reduced-motion: reduce`.
- Tidak ada testimoni, statistik, klien, atau badge buatan.
- Tampilan di mobile tidak terasa seperti desktop yang diperkecil dan bebas dari scroll horizontal (0px overflow).
- Halaman Kebijakan Privasi (`/kebijakan-privasi`) aktif dan dapat diakses dari footer.
- Seluruh QA di SPEC.md bagian 11 lulus dengan hasil build 0 error dan 0 warning.

## 11. QA konversi

Urutan penilaian:

1. Dalam beberapa detik pertama pengunjung paham bahwa ENLESWEB membuat website untuk bisnis dan tim ENLESWEB yang menangani desain dan penayangannya.
2. Rp450.000 terlihat jelas dengan sorotan garis aksen.
3. Domain + hosting 1 tahun sudah termasuk terlihat jelas.
4. WhatsApp adalah aksi yang paling jelas, selalu dapat diakses baik melalui tombol section maupun Floating WhatsApp.
5. Pengunjung memahami perbedaan Starter, Business, dan Growth tanpa membaca seluruh halaman, dan memahami bahwa Custom adalah jalur terpisah.
6. Tidak ada klaim yang tidak bisa dibuktikan.
7. Desain dan tipografi membuat Rp450.000 terasa bernilai tinggi dan layak, bukan murahan.

## 12. Risiko yang diketahui

1. **Jurang ekspektasi (TERSELESAIKAN).** Sebelumnya hanya ada contoh proyek tingkat Growth. Kini telah tersedia contoh spesifik untuk ketiga tingkatan paket (Starter: Seruput Kopi & ripeir, Business: tuntas, Growth: dipotongin, Jerseay, berflower).
2. **Kapasitas.** Jika iklan menghasilkan banyak lead sebelum sistem siap, kualitas respons turun. Ini di luar homepage, tetapi pemilik perlu membatasi budget iklan awal dan jumlah proyek berjalan.
3. **Privasi dan Pixel (TERSELESAIKAN).** Halaman Kebijakan Privasi statis telah dibangun dan aktif di `/kebijakan-privasi` serta ditautkan di footer untuk memenuhi kewajiban hukum dan kepatuhan kampanye iklan Meta Ads.
4. **Enam proyek demo live.** Seluruh 6 proyek demo telah live di Vercel dan didukung aset screenshot lokal di `src/assets/projects/`.
5. **Aturan perpanjangan tahun kedua & SOP operasional revisi/update konten (TERSELESAIKAN).** Kebijakan perpanjangan domain dan hosting telah diputuskan dan LOCKED (Decision 002): tahun pertama sudah termasuk domain dan hosting dengan akun registrar dan registrant atas nama ENLESWEB (menghilangkan birokrasi verifikasi dokumen awal); tahun kedua klien bebas memilih perpanjangan terkelola flat all package (Rp400rb/tahun untuk domain .com/.id dan hosting, atau Rp300rb/tahun untuk ekstensi lainnya) atau opsi mandiri (transfer kode EPP + arsip file build zip dist/). SOP chat WhatsApp dan aturan pasca-tayang telah resmi dikunci (**CLOSED** di `Delivery & Operations/sop.md` v1.2, Decision 013–017), mencakup kuota gratis putaran update konten ringan tahunan di tahun pertama (Starter 2x, Business 4x, Growth 6x; selebihnya Rp50.000/putaran, serta otomatis di-reset setiap tahun saat memilih Perpanjangan Terkelola), waktu pembelian domain pasca-DP 50% + materi lengkap, aturan *On-Hold* 60 hari kalender, dan transparansi Nama Lengkap Pendiri di Bukti Pemesanan PDF.

## 13. Daftar keputusan

| Keputusan | Status |
|---|---|
| Satu halaman, urutan section di bagian 5 | LOCKED |
| Latar kanvas putih bersih (`--canvas: #FFFFFF`) | LOCKED |
| Peniadaan border pada seluruh tombol (*borderless* + 3D Engineered Tactile shelf 3px `#A3C400`) | LOCKED |
| Tiga paket sejajar horizontal dengan ukuran dan padding seragam | LOCKED |
| Details paket tertutup secara default pada semua ukuran layar | LOCKED |
| Enam proyek tampil dengan sistem Highlight & Minimize, demo live aktif | LOCKED |
| Fallback aman: jika URL proyek kosong merender tombol nonaktif `[Segera]` dengan warning build | LOCKED |
| Warna aksen tunggal `#E4FF30` dan font Poppins | LOCKED |
| Penyatuan Pernyataan Manfaat Bisnis ke dalam Section Tentang (`#tentang`) | LOCKED |
| Floating WhatsApp button melayang di pojok kanan bawah | LOCKED |
| Navbar transparan di posisi awal, menembus pendaran hero, solid `--canvas` saat di-scroll | LOCKED |
| Navbar mobile menyembunyikan tombol teks demi ruang bernapas | LOCKED |
| Objek modular hero disembunyikan di mobile, diganti ambient gradient sweep | LOCKED |
| Animasi bertahap progressive scroll reveal one-shot berbasis GPU | LOCKED |
| Meta Pixel dengan event kontak pada 9 lokasi CTA | LOCKED |
| Label "10 klien pertama" dikontrol via `site.showLaunchNote` | LOCKED |
| Pesan WhatsApp seragam | LOCKED |
| Nomor WhatsApp resmi (`+6285156801570`) | LOCKED |
| Pixel ID | LOCKED |
| Label proyek konsep disesuaikan per tingkat paket (Starter, Business, Growth) | LOCKED |
| OG image aktif di `public/og-image.png` | LOCKED |
| Halaman Kebijakan Privasi di `/kebijakan-privasi` dan tautan footer | LOCKED |
| Kebijakan perpanjangan tahun kedua: flat all package Rp400rb/thn (.com/.id) atau Rp300rb/thn (lainnya) / Opsi Mandiri (transfer EPP + dist zip); akun provider & registrant thn 1 atas nama ENLESWEB (Decision 002) | LOCKED |
| Domain produksi final `enlesweb.com` | OPEN |

=== BATAS AWAL FILE: CONTENT.md ===

# CONTENT.md - ENLESWEB Homepage

Versi 1.3 (As-Is Website Copy Specification - Sinkronisasi Decision 002) - 15 Oktober 2026

Dokumen ini adalah satu-satunya sumber teks, harga, label tombol, dan pesan WhatsApp. Agent dilarang menulis ulang, memperhalus, menerjemahkan, atau menyingkat teks di sini. Salin persis, termasuk tanda baca dan huruf besar-kecil.

Teks di dalam kurung siku `[...]` adalah label tombol. Teks di dalam kurung kurawal `{...}` adalah variabel.

Tidak ada em dash di teks pelanggan. Jangan menambahkannya.

---

## 1. Meta halaman (DEFAULT)

- Bahasa dokumen: `id`
- Title: `EnlesWeb | Website untuk bisnis, domain dan hosting 1 tahun`
- Meta description: `Website untuk bisnis dengan domain dan hosting 1 tahun sudah termasuk. Mulai Rp450.000. Ceritakan bisnismu lewat WhatsApp.`
- Open Graph title: sama dengan Title
- Open Graph description: sama dengan Meta description
- Open Graph image: LOCKED (berkas fisik `public/og-image.png` aktif, lihat SPEC.md bagian 9)

---

## 2. Navbar

- Merek: `EnlesWeb` (disertai logo geometris SVG `navbrand-logo.svg`)
- Tautan: `Paket`, `Proyek`, `Proses`
- Tombol desktop (>= 768px): `[Chat WhatsApp]` (label pendek `[WhatsApp]` tersedia di copy konfigurasi jika diperlukan)
- Tampilan mobile (< 768px): Tombol teks CTA disembunyikan dari navbar demi ruang bernapas header smartphone, dan fungsi konversi cepat didelegasikan ke `Floating WhatsApp Button` (lihat Bagian 11)
- Label menu mobile untuk pembaca layar: `Buka menu` dan `Tutup menu`

---

## 3. Hero

Headline:

`Website untuk bisnismu, sudah termasuk domain dan hosting 1 tahun.`

Harga:

`Mulai Rp450.000.`

Teks pendukung (tersedia di copy; pada komponen Hero difokuskan langsung ke headline, harga, dan tombol):

`Ceritakan bisnismu lewat WhatsApp, kami yang mengurus desain dan penayangannya.`

Tombol utama: `[Chat via WhatsApp]`
Tautan sekunder: `[Lihat Paket]`

---

## 4. Paket

Judul section: `Pilih website sesuai kebutuhan bisnismu.`

Label tombol lipat daftar fitur (semua ukuran layar):
- Saat tertutup (default): `Lihat semua yang termasuk`
- Saat terbuka: `Sembunyikan`

Daftar fitur pada elemen `<details>` tertutup secara default pada semua ukuran layar untuk menjaga tampilan tetap ringkas dan memudahkan perbandingan awal (LOCKED).

Setiap paket dibagi dua: **Inti** (selalu terlihat, lima baris dengan urutan yang sama di tiga paket agar mudah dibandingkan) dan **Lainnya** (masuk ke bagian yang bisa dilipat).

### 4.1 Starter

- Nama: `Starter`
- Harga: `Rp450.000`
- Deskripsi: `Website sederhana untuk bisnis yang ingin mulai tampil online.`
- Catatan peluncuran: `Harga promosi untuk 10 klien pertama.` (dikontrol via `site.showLaunchNote`)

Inti:
1. `1 halaman`
2. `Pilih dari desain yang tersedia`
3. `Domain 1 tahun`
4. `Hosting 1 tahun`
5. `2 kali revisi`

Lainnya:
- `Tampilan HP dan desktop`
- `Informasi bisnis, layanan atau produk, dan kontak`
- `Tombol WhatsApp`
- `Google Maps`
- `Link media sosial`
- `Form kontak sederhana`

Tombol: `[Pilih Starter]`
Topik WhatsApp: `paket Starter`

### 4.2 Business

- Nama: `Business`
- Harga: `Rp750.000`
- Deskripsi: `Website lebih lengkap untuk bisnis yang membutuhkan beberapa halaman informasi.`

Inti:
1. `Hingga 6 halaman`
2. `Desain disesuaikan dengan bisnismu`
3. `Domain 1 tahun`
4. `Hosting 1 tahun`
5. `2 kali revisi`

Lainnya:
- `Susunan halaman disesuaikan dengan kebutuhan bisnismu`
- `Tampilan HP dan desktop`
- `Informasi bisnis, layanan atau produk, dan kontak`
- `Tombol WhatsApp`
- `Google Maps`
- `Link media sosial`
- `Form kontak`
- `Pengaturan dasar agar website lebih mudah ditemukan di Google`
- `Bantuan menyusun dan menempatkan konten`

Tombol: `[Pilih Business]`
Topik WhatsApp: `paket Business`

### 4.3 Growth

- Nama: `Growth`
- Harga: `Rp1.200.000`
- Deskripsi: `Website dengan desain, susunan halaman, dan pengalaman pengunjung yang dibuat lebih khusus.`

Inti:
1. `Hingga 10 halaman`
2. `Desain khusus untuk bisnismu`
3. `Domain 1 tahun`
4. `Hosting 1 tahun`
5. `4 kali revisi`

Lainnya:
- `Susunan halaman mengikuti kebutuhan pengunjung`
- `Halaman dan bagian khusus sesuai kebutuhan`
- `Tampilan HP dan desktop`
- `Tombol WhatsApp yang disesuaikan di tiap halaman`
- `Google Maps`
- `Link media sosial`
- `Form yang disesuaikan dengan kebutuhan`
- `Pengaturan dasar agar website lebih mudah ditemukan di Google`
- `Bantuan menyusun dan menempatkan konten`

Tombol: `[Pilih Growth]`
Topik WhatsApp: `paket Growth`

### 4.4 Custom (terpisah dari perbandingan 3 kolom)

- Nama: `Custom`
- Harga: `Mulai Rp2.000.000`
- Deskripsi: `Untuk kebutuhan di luar paket Growth. Contohnya:`

Contoh (daftar titik geometris minimalis):
- `Edit isi website sendiri`
- `Toko online`
- `Pemesanan online`
- `Login pelanggan`
- `Dashboard`
- `Hubungan dengan sistem lain`
- `Fitur khusus`

Catatan harga: `Harga akhir kami tentukan setelah tahu apa saja yang perlu dikerjakan.`

Tombol: `[Diskusikan Kebutuhan Custom]`
Topik WhatsApp: `paket Custom`

---

## 5. Proyek

Judul section: `Contoh website yang kami buat sendiri.`

Label pada setiap kartu proyek disesuaikan menurut tingkat paketnya:
- Starter: `Konsep buatan kami sendiri. Contoh tingkat Starter.`
- Business: `Konsep buatan kami sendiri. Contoh tingkat Business.`
- Growth: `Konsep buatan kami sendiri. Contoh tingkat Growth.`

Sistem showcase menggunakan interaksi **Highlight & Minimize**:
- Satu proyek di-highlight penuh (rasio 16:10, default: Jerseay), 5 proyek lainnya ditampilkan sebagai kartu ringkas (minimized).
- Label aksi kartu minimized: `Tampilkan` (dengan `aria-label="Tampilkan proyek {Nama}"`).

### 5.1 Jerseay
- Nama: `Jerseay`
- Tingkat paket: `Growth`
- Label konsep: `Konsep buatan kami sendiri. Contoh tingkat Growth.`
- Jenis bisnis: `Studio jersey custom`
- Deskripsi: `Konsep website untuk studio jersey custom.`
- URL Demo: `https://jerseay.vercel.app/`
- Tombol: `[Lihat Website]` (aktif dengan link demo, atau fallback `[Segera]` jika URL dikosongkan)

### 5.2 dipotongin
- Nama: `dipotongin`
- Tingkat paket: `Growth`
- Label konsep: `Konsep buatan kami sendiri. Contoh tingkat Growth.`
- Jenis bisnis: `Studio barbershop`
- Deskripsi: `Konsep website barbershop dengan daftar layanan, kartu member loyalitas, jam operasional, dan lokasi.`
- URL Demo: `https://dipotongin.vercel.app/`
- Tombol: `[Lihat Website]` (aktif dengan link demo, atau fallback `[Segera]` jika URL dikosongkan)

### 5.3 tuntas
- Nama: `tuntas`
- Tingkat paket: `Business`
- Label konsep: `Konsep buatan kami sendiri. Contoh tingkat Business.`
- Jenis bisnis: `Bimbel kelompok kecil dan privat`
- Deskripsi: `Konsep website bimbel kelompok kecil dan les privat untuk SD, SMP, dan SMA.`
- URL Demo: `https://tuntas-steel.vercel.app/`
- Tombol: `[Lihat Website]` (aktif dengan link demo, atau fallback `[Segera]` jika URL dikosongkan)

### 5.4 Seruput Kopi
- Nama: `Seruput Kopi`
- Tingkat paket: `Starter`
- Label konsep: `Konsep buatan kami sendiri. Contoh tingkat Starter.`
- Jenis bisnis: `Kedai kopi dan sangrai dadakan`
- Deskripsi: `Konsep website kedai kopi lokal dengan menu seduh dadakan, biji kopi pilihan, dan lokasi.`
- URL Demo: `https://seruput-kopi.vercel.app/`
- Tombol: `[Lihat Website]` (aktif dengan link demo, atau fallback `[Segera]` jika URL dikosongkan)

### 5.5 ripeir
- Nama: `ripeir`
- Tingkat paket: `Starter`
- Label konsep: `Konsep buatan kami sendiri. Contoh tingkat Starter.`
- Jenis bisnis: `Workshop perbaikan barang`
- Deskripsi: `Konsep website servis laptop, komputer, handphone, dan tablet.`
- URL Demo: `https://ripeir.vercel.app/`
- Tombol: `[Lihat Website]` (aktif dengan link demo, atau fallback `[Segera]` jika URL dikosongkan)

### 5.6 berflower
- Nama: `berflower`
- Tingkat paket: `Growth`
- Label konsep: `Konsep buatan kami sendiri. Contoh tingkat Growth.`
- Jenis bisnis: `Toko bunga dan hadiah`
- Deskripsi: `Konsep website untuk toko bunga.`
- URL Demo: `https://berflower-lilac.vercel.app/`
- Tombol: `[Lihat Website]` (aktif dengan link demo, atau fallback `[Segera]` jika URL dikosongkan)

Nama proyek ditulis persis seperti di atas (huruf kecil untuk dipotongin, tuntas, ripeir, dan berflower). Keenam proyek memiliki tangkapan layar webp/png di `src/assets/projects/` dan favicon identitas svg masing-masing.

---

## 6. Proses

Judul section: `Lima langkah sampai websitemu tayang.`

Interaksi timeline: Langkah 1 aktif secara default, langkah 2 sampai 5 diminimize. Mengetuk nomor atau judul langkah mana pun akan membuka detail langkah terkait.

1. Judul: `Ceritakan bisnismu`
   Isi: `Kamu ceritakan bisnis, kebutuhan, layanan atau produk, dan informasi yang ingin ditampilkan.`

2. Judul: `Susun halaman`
   Isi: `Kami menentukan halaman dan susunan informasi yang sesuai dengan bisnismu.`

3. Judul: `Desain dan pembuatan`
   Isi: `Kami membuat website sesuai paket dan kebutuhan yang sudah disepakati.`

4. Judul: `Penyempurnaan`
   Isi: `Kami merapikan konten, tampilan, dan detail website sebelum tayang.`

5. Judul: `Tayang`
   Isi: `Kami menayangkan website dengan domain dan hosting yang sudah disiapkan.`

---

## 7. Tentang & Pernyataan Manfaat Bisnis (`#tentang`)

Bagian ini menyatukan narasi brand Tentang ENLESWEB dan Pernyataan Manfaat Bisnis dalam satu tata letak editorial asimetris yang elegan (LOCKED).

### Kolom Kiri: Narasi Brand
Judul: `Tentang EnlesWeb`

Paragraf 1:
`EnlesWeb membantu pemilik bisnis punya website tanpa harus mengurus urusan teknisnya sendiri.`

Paragraf 2:
`Kami mengerjakan desain, pembuatan, dan penayangan website, dari yang sederhana sampai yang dirancang secara khusus.`

### Kolom Kanan: Kartu Manfaat Bisnis
Teks kartu manfaat bisnis (tanpa judul terpisah):
`Calon pelangganmu bisa langsung chat lewat WhatsApp, melihat lokasi di Google Maps, dan membaca layanan atau produkmu tanpa harus bertanya satu per satu.`

Tidak ada tombol di section ini.

---

## 8. CTA penutup

Wadah berupa kartu berlatar `--accent` (`#E4FF30`) borderless dengan komposisi ringkas dan ilustrasi modular SVG di sisi kanan:

Judul: `Mau buat website untuk bisnismu?`

Teks pendukung (tersedia di copy konfigurasi): `Ceritakan kebutuhanmu. Kami bantu tentukan paket yang paling sesuai.`

Tombol: `[Ceritakan via WhatsApp]`

---

## 9. Footer

- Merek: `EnlesWeb` (disertai logo geometris SVG aksen `navbrand-logo-accent.svg`)
- Tagline: `Website, domain, dan hosting untuk bisnis.`
- Kontak & Sosial: Ikon resmi WhatsApp (ditautkan ke WhatsApp bisnis) dan ikon resmi Instagram (@enlesweb)
- Navigasi: `Paket`, `Proyek`, `Proses`
- Baris Bawah: `© EnlesWeb` dan tautan utilitas `[Kebijakan Privasi]` (`/kebijakan-privasi`)

---

## 10. Floating WhatsApp Button

Tombol melayang (*sticky floating action button*) di pojok kanan-bawah layar HP dan desktop:
- Ikon: WhatsApp vector phone icon
- Label aksesibilitas (`aria-label`): `Chat via WhatsApp`
- Topik WhatsApp: `pembuatan website`
- Tracking location: `floating_wa`

---

## 11. Pesan WhatsApp otomatis (seragam)

Format (LOCKED: seragam, hanya topik yang berbeda):

`Halo ENLESWEB, saya mau tanya tentang {topik}.`

Nilai `{topik}` pada 9 lokasi CTA:

| Lokasi tombol | `{topik}` | Tracking `data-cta-location` |
|---|---|---|
| Navbar (desktop) | `pembuatan website` | `nav` |
| Hero | `pembuatan website` | `hero` |
| Paket Starter | `paket Starter` | `package_starter` |
| Paket Business | `paket Business` | `package_business` |
| Paket Growth | `paket Growth` | `package_growth` |
| Custom | `paket Custom` | `package_custom` |
| CTA penutup | `pembuatan website` | `final_cta` |
| Footer (ikon WhatsApp) | `pembuatan website` | `footer` |
| Floating WhatsApp (sticky) | `pembuatan website` | `floating_wa` |

Contoh hasil pesan:
- `Halo ENLESWEB, saya mau tanya tentang paket Starter.`
- `Halo ENLESWEB, saya mau tanya tentang pembuatan website.`

Teks pesan di-encode sebagai parameter query URL oleh `src/lib/whatsapp.ts`.

---

## 12. Larangan teks

- Jangan menambah kata sifat promosi ("terbaik", "profesional", "berkualitas tinggi", "cutting-edge", dan sejenisnya).
- Jangan menambah klaim hasil atau angka yang tidak terverifikasi.
- Jangan menambah eyebrow, tagline, atau slogan di luar yang tertulis di sini.
- Jangan menulis "gratis" untuk domain atau hosting, dan jangan menyiratkan domain gratis selamanya. Sampaikan bahwa paket pembuatan mencakup 1 tahun penuh (dengan akun registrar dan registrant atas nama ENLESWEB di tahun ke-1), sedangkan tahun ke-2 dan seterusnya klien bebas memilih perpanjangan terkelola flat tahunan (Rp400.000/tahun untuk domain .com/.id dan hosting, atau Rp300.000/tahun untuk ekstensi lain) atau opsi mandiri (transfer domain via kode EPP + penyerahan arsip file build statis .zip dari dist/ tanpa biaya tambahan).
- Jangan menjanjikan durasi SLA atau pengerjaan tertentu.
- Jangan menggunakan tanda em dash (—) pada teks pelanggan. Gunakan titik, koma, atau struktur kalimat baru.

---

## 13. Kebijakan Privasi (`/kebijakan-privasi`)

Halaman statis minimal yang menyajikan komitmen perlindungan data dan kepatuhan Meta Ads:

- Title: `Kebijakan Privasi | EnlesWeb`
- Meta description: `Kebijakan Privasi EnlesWeb mengenai pengumpulan, penggunaan, dan perlindungan data pengunjung serta calon klien.`
- Tautan kembali di header: `[Kembali ke Beranda]` (disertai ikon SVG panah kiri)
- Judul artikel: `Kebijakan Privasi`
- Tanggal pembaruan: `Terakhir diperbarui: 14 Oktober 2026`

Isi 5 Poin:
1. `1. Pendahuluan`: EnlesWeb menghargai dan berkomitmen untuk melindungi privasi setiap pengunjung website dan calon klien kami. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan menjaga informasi saat kamu mengunjungi website ini atau menghubungi kami.
2. `2. Data yang Kami Kumpulkan`:
   - Saat kamu menghubungi kami melalui chat WhatsApp, kami menerima informasi yang kamu kirimkan seperti nama, nomor WhatsApp, serta rincian bisnis dan kebutuhan website yang ingin kamu buat.
   - Saat kamu mengakses website ini, server dan teknologi pihak ketiga (seperti Meta Pixel) mencatat data teknis secara otomatis, meliputi alamat IP, jenis perangkat, peramban, resolusi layar, halaman yang kamu buka, dan waktu kunjungan untuk keperluan analitik.
3. `3. Penggunaan Informasi`:
   - Kami menggunakan informasi tersebut untuk menjawab pertanyaanmu, memberikan rekomendasi paket website yang paling sesuai, menyusun penawaran, dan mengerjakan website yang telah disepakati.
   - Kami tidak pernah menjual, menyewakan, atau membagikan data pribadimu kepada pihak ketiga mana pun untuk kepentingan pemasaran mereka.
4. `4. Cookie dan Meta Pixel`: penjelasan kode Meta Pixel dari Meta Platforms, Inc. untuk mengukur efektivitas kampanye iklan dan pemahaman interaksi pengunjung, serta opsi menolak atau menghapus cookie melalui pengaturan browser.
5. `5. Hak Pengguna dan Kontak Resmi`: hak menanyakan data atau meminta penghapusan riwayat percakapan dan kontak, serta kontak resmi via WhatsApp di +6285156801570 dan Instagram @enlesweb.

=== BATAS AWAL FILE: DESIGN.md ===

# DESIGN.md - ENLESWEB Homepage

Versi 1.2 (As-Is Website Visual & Design Specification - Baseline 14 Oktober 2026 / Terkonsolidasi V3 15 Oktober 2026)

Dokumen ini hanya membahas tampilan: warna, tipografi, layout, komponen, dan interaksi visual. Teks ada di CONTENT.md. Scope ada di PRD.md. Implementasi teknis ada di SPEC.md.

Status: LOCKED (dari pemilik), DEFAULT (usulan yang dipakai apa adanya, boleh diganti pemilik), OPEN (belum ada data).

---

## 1. Karakter

Target rasa (LOCKED): **profesional, ramah, dirancang dengan sengaja.**

Bukan startup main-main, bukan agensi korporat, bukan marketplace template, bukan studio mewah yang eksklusif.

Prinsip harga (LOCKED): Rp450.000 harus terasa layak karena kualitas penyajian, bukan karena tampilan yang terlihat murah.

Struktur tanpa mengotakkan semuanya. Default: konten di atas kanvas putih bersih, bukan setiap section menjadi kartu.

Ketertarikan visual berasal dari: tipografi, skala, pemenggalan baris, komposisi, ruang kosong, satu objek taktil di hero, dan satu warna aksen. Bukan dari dekorasi berlebih.

---

## 2. Token desain

Semua nilai di bawah diimplementasikan sebagai CSS custom properties (SPEC.md bagian 8). Jangan memakai nilai di luar token.

### 2.1 Warna

| Token | Nilai | Status | Fungsi |
|---|---|---|---|
| `--accent` | `#E4FF30` | LOCKED | Satu-satunya warna aksen |
| `--ink` | `#111111` | DEFAULT | Teks utama, garis tegas, latar tombol final CTA dan footer |
| `--ink-muted` | `#55554F` | DEFAULT | Teks sekunder, label pembantu, fitur lipat |
| `--canvas` | `#FFFFFF` | LOCKED | Latar halaman putih bersih (permintaan pemilik bisnis) |
| `--surface` | `#F5F5F2` | DEFAULT | Latar placeholder visual proyek, kartu proses, kartu manfaat bisnis |
| `--line` | `#E5E5DF` | DEFAULT | Garis pemisah tipis antar kolom dan section |
| `--neutral-object` | `#D1D1CB` | DEFAULT | Potongan netral pada komposisi objek hero |

### 2.2 Aturan pemakaian aksen

`#E4FF30` adalah kuning-hijau terang. Rasio kontras terhadap kanvas putih adalah sekitar 1,1:1 (tidak terbaca sebagai teks atau garis tipis). Terhadap `--ink` rasionya sangat tinggi (~17:1).

Aturan:
1. Aksen hanya boleh dipakai sebagai **isi/latar**, dengan teks `--ink` di atasnya.
2. Aksen tidak boleh dipakai sebagai warna teks di atas kanvas atau permukaan terang.
3. Aksen tidak boleh dipakai sebagai garis tipis di atas kanvas terang.
4. Aksen sebagai teks hanya diizinkan di atas latar `--ink` (misalnya saat tombol di-hover atau di footer).
5. Tempat aksen dipakai (LOCKED):
   - Isi tombol utama WhatsApp dan tombol paket.
   - Sorotan garis di belakang harga hero dan catatan peluncuran Starter (25% tinggi teks di bagian dasar huruf: `linear-gradient(180deg, transparent 75%, var(--accent) 75%)`).
   - Sapuan aksen gradien abstrak diagonal (*ambient gradient sweep*) pada Hero mobile (< 768px) yang mengalir dari atas headline melintasi tombol hingga menyentuh judul section Paket ("Pilih website sesuai kebutuhan bisnismu.") dengan gaussian blur lembut tanpa mengorbankan keterbacaan teks headline.
   - Penanda nomor Proses yang sedang aktif (*highlighted*).
   - Garis indikator minimal (36px x 3px) pada Kartu Manfaat Bisnis di Section Tentang.
   - Kartu latar banner Final CTA.
   - Potongan aksen modular pada komposisi HeroObject SVG.
   - Tombol WhatsApp melayang (*Floating WhatsApp Button*).

### 2.3 Tipografi

Font (LOCKED): **Poppins**. Satu keluarga font untuk semua teks.

Bobot yang dipakai: 400, 500, 600, 700. Jangan memakai bobot lain.

Fallback: `system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`.

Skala tipografi fluid memakai `clamp(min, ideal, max)`:

| Peran | Token CSS | Ukuran | Bobot | Tinggi baris | Letter-spacing |
|---|---|---|---|---|---|
| Hero headline | `--font-hero-headline` | `clamp(1.75rem, 1.1rem + 3.2vw, 3.75rem)` | 600 | 1.12 | -0.02em |
| Judul section (h2) | `--font-section-title` | `clamp(1.5rem, 1.1rem + 1.6vw, 2.5rem)` | 600 | 1.2 | -0.015em |
| Harga paket | `--font-package-price` | `clamp(1.75rem, 1.4rem + 1.2vw, 2.25rem)` | 600 | 1.1 | -0.01em |
| Harga hero | `--font-hero-price` | `clamp(1.25rem, 1rem + 1.2vw, 2rem)` | 600 | 1.2 | 0 |
| Nama paket / judul langkah | `--font-package-name` | `1.25rem` | 600 | 1.3 | 0 |
| Teks isi | `--font-body-mobile` / `desktop` | `1rem` mobile, `1.0625rem` desktop | 400 | 1.6 | 0 |
| Teks pendukung hero | `--font-hero-support-mobile` / `desktop` | `1.0625rem` mobile, `1.25rem` desktop | 400 | 1.55 | 0 |
| Teks kecil (label, catatan) | `--font-small` | `0.875rem` | 500 | 1.5 | 0 |
| Label tombol | `--font-button` | `1rem` | 600 | 1 | 0 |
| Pernyataan manfaat | `--font-business-value` | `clamp(1.25rem, 1rem + 1.2vw, 2rem)` | 500 | 1.4 | -0.01em |

Aturan tipografi:
- Ukuran teks minimum 14px (`0.875rem`) hanya untuk label dan catatan. Teks isi minimum 16px. Audiens mencakup usia 40+.
- `text-wrap: balance` pada headline dan judul section.
- Panjang baris teks isi maksimum `62ch`.
- Jangan memakai huruf kapital semua untuk label atau judul, kecuali merek `ENLESWEB`.

### 2.4 Jarak (skala 4px)

Tokens: `4, 8, 12, 16, 24, 32, 40, 48, 56, 64, 72, 96, 120, 128, 160 px`.

Padding vertikal antar section:
- Section Paket, Proyek, Proses, Tentang: 48px mobile, 64px desktop (disesuaikan agar kompak dan tidak melelahkan scroll).
- Hero: 40px atas, 48px bawah (mobile); min-height `calc(100dvh - 72px)` di desktop.

### 2.5 Radius, garis, dan sistem affordance fisik 3D tombol

| Token | Nilai | Fungsi |
|---|---|---|
| `--radius-sm` | `6px` | Penanda nomor, toggle menu |
| `--radius-md` | `10px` | Tombol utama, kartu proses, kartu minimized proyek |
| `--radius-lg` | `14px` | Potongan objek hero, kartu final CTA |

Aturan garis dan bayangan:
- Garis tipis: `1px solid var(--line)`.
- Garis bawah link: `1.5px solid var(--ink)` dengan offset 4px.
- **Peniadaan border pada seluruh tombol (*borderless*)**: Seluruh tombol utama dan tombol paket dibuat tanpa border (`border: none`).
- **Affordance Fisik 3D Tombol (*Engineered Tactile Shelf*)**:
  - Default: `box-shadow: 0 3px 0 #A3C400, inset 0 1px 0 rgba(255, 255, 255, 0.6)`. Shelf 3px presisi dengan warna turunan aksen alami tanpa blur abu-abu kotor, ditambah highlight halus di sisi atas untuk kesan fisik engineered.
  - Hover / Fokus: latar menjadi `--ink`, teks menjadi `--accent`, `box-shadow: 0 3px 0 #000000, inset 0 1px 0 rgba(255, 255, 255, 0.15)`. Transisi kontras tajam tanpa blur yang mengotori latar putih.
  - Aktif / Ditekan: `transform: translateY(2px)`, shelf menipis menjadi `box-shadow: 0 1px 0 #A3C400, inset 0 1px 0 rgba(255, 255, 255, 0.4)` (atau `0 1px 0 #000000` saat hover). Memberikan kesan ketukan fisik yang reaktif dan bersih.

### 2.6 Container

- Lebar maksimum konten: `1120px`, di tengah (`margin-inline: auto`).
- Padding horizontal: 20px (mobile), 32px (>= 768px).
- Semua konten utama mengikuti satu garis tepi yang sama, termasuk navbar dan footer.

### 2.7 Breakpoint

- `mobile`: `< 768px`
- `tablet`: `768px` sampai `1023px`
- `desktop`: `>= 1024px`
- `desktop besar`: `>= 1440px` (container tetap 1120px)

---

## 3. Komponen dasar

### 3.1 Tombol utama (WhatsApp dan semua tombol paket)

- Isi: `--accent`. Teks: `--ink`, bobot 600.
- Garis: `none` (borderless).
- Radius: `--radius-md` (10px).
- Affordance: Engineered Tactile 3D bottom shelf 3px `#A3C400`, inset specular highlight `rgba(255, 255, 255, 0.6)` di tepi atas, dan depression 2px saat ditekan.
- Tinggi minimum: 48px (area tap memenuhi standar WCAG AA). Padding horizontal 24px.
- Hover dan fokus: isi menjadi `--ink`, teks menjadi `--accent`, shelf berubah menjadi 3px `#000000`. Transisi 150ms.
- Fokus keyboard: outline `2px solid var(--ink)` dengan offset 3px.

Ukuran per peran:
- `size-default` (Paket & Custom): min-height 48px, padding-inline 24px.
- `size-hero`: min-height 56px, padding-inline 32px.
- `size-nav`: min-height 44px (desktop), padding-inline 20px.
- `size-final`: min-height 52px, padding-inline 28px, background solid `--ink` dengan teks putih dan hover aksen.

### 3.2 Tombol nonaktif ("Segera")

- Isi: `var(--surface)`. Teks: `--ink-muted`. Garis: `none`.
- Kursor: `not-allowed`. Tanpa efek hover atau aktif.
- Radius: `--radius-md`. Min-height 48px.
- `aria-label="Segera tersedia"`.

### 3.3 Tautan sekunder

- Teks `--ink`, bobot 600, garis bawah `1.5px solid var(--ink)` dengan `text-underline-offset: 4px`.
- Hover: ketebalan garis bawah menjadi 2.5px.

### 3.4 Floating WhatsApp Button

- Posisi: `fixed`, pojok kanan-bawah layar.
- Jarak: `bottom: max(20px, env(safe-area-inset-bottom, 20px))`, `right: max(20px, env(safe-area-inset-right, 20px))` (32px di desktop).
- Bentuk: Lingkaran bulat sempurna (diameter 56px di mobile, 60px di desktop).
- Isi: `--accent` dengan ikon vektor telepon WhatsApp `--ink`.
- Hover/Fokus: membesar ringan (`translateY(-2px)`), isi menjadi `--ink`, ikon menjadi `--accent`.
- Tekan: `translateY(1px)`.
- Z-index: 95.

---

## 4. Navbar

Desktop (>= 768px):
- Kiri: logo geometris SVG (`navbrand-logo.svg`, lebar 40px) dan teks merek `EnlesWeb` (Poppins 700, `1.125rem`).
- Tengah: tiga tautan anchor (Paket, Proyek, Proses), bobot 500, jarak 32px.
- Kanan: tombol WhatsApp (tombol utama, tinggi 44px).
- Tinggi navbar: 72px.

Mobile (< 768px):
- Kiri: logo geometris SVG dan teks merek `EnlesWeb`.
- Kanan: tombol toggle menu drawer (44x44px).
- **Tombol CTA dihilangkan dari header mobile**: untuk menjaga ruang bernapas header smartphone agar tidak padat dan sesak. Akses konversi mobile sepenuhnya didelegasikan kepada Floating WhatsApp Button yang selalu siap dijangkau ibu jari pengguna.
- Tinggi navbar: 64px.
- Panel menu mobile: terbuka tepat di bawah navbar secara mulus (150ms), memuat 3 tautan anchor dengan baris tinggi 56px dipisahkan garis `--line`. Panel menutup otomatis saat tautan diklik, saat tombol menu diklik lagi, atau saat tombol Escape ditekan.

Perilaku scroll dan tembus pendaran hero:
- Posisi: `sticky`, menempel di atas layar (`top: 0`, `z-index: 100`).
- Awal (scroll 0px, drawer tertutup): `background-color: transparent`, `border-bottom: 1px solid transparent`. Pendaran aksen (*ambient wash*) dari hero mengalir menembus navbar transparan secara alami tanpa halangan.
- Setelah scroll lebih dari 8px atau saat drawer mobile terbuka (`data-menu-open="true"`): latar berubah mulus menjadi solid `--canvas` (`#FFFFFF`), garis bawah tipis `1px solid var(--line)`, transisi 150ms.

---

## 5. Hero

### 5.1 Komposisi

Desktop (>= 768px):
- Blok teks di tengah, lebar maksimum `880px`, rata tengah.
- Urutan: headline, sorotan harga, baris tombol CTA.
- Headline dipenggal pada tiga baris terencana: `Website untuk bisnismu,` / `sudah termasuk domain` / `dan hosting 1 tahun.`
- Harga hero: tepat di bawah headline, jarak 24px. Teks harga menggunakan sorotan garis aksen 1/4 tinggi teks (`linear-gradient(180deg, transparent 75%, var(--accent) 75%)`).
- Baris tombol: tombol utama `[Chat via WhatsApp]` (tinggi 56px) dan tautan sekunder `[Lihat Paket]` sejajar horizontal di tengah dengan jarak 24px.
- Komposisi Visual Berlapis HeroObject berada di lapisan latar belakang (`z-index: 1`) di bawah teks hero (`z-index: 2`).
- Penyatuan navbar dan ambient wash: hero mengaplikasikan margin-top negatif `-72px` dengan kompensasi `padding-top: calc(var(--space-64) + 72px)` dan `scroll-margin-top: 0` agar pendaran aksen mengalir menembus navbar transparan.

Mobile (< 768px):
- Rata kiri.
- Urutan: headline, sorotan harga, tombol utama lebar penuh, tautan sekunder di bawahnya.
- Seluruh teks dan tombol utama tampil di layar pertama pengguna smartphone (viewport 360x740 dan 390x844) tanpa memerlukan scroll vertikal.
- Penyatuan navbar dan ambient sweep: hero mengaplikasikan margin-top negatif `-64px` dengan kompensasi `padding-top: calc(var(--space-40) + 64px)` dan `scroll-margin-top: 0` sehingga gradien ambient mengalir menembus navbar transparan.

### 5.2 Visual Hero: Mobile Ambient Sweep vs Desktop Layered Composition

1. **Mobile (< 768px) - Ambient Gradient Sweep**:
   - Komposisi objek modular SVG disembunyikan (`display: none`) untuk menjaga keringkasan dan kecepatan pandang mobile.
   - Sebagai gantinya, dihadirkan sapuan aksen gradien abstrak diagonal (*ambient gradient sweep*) menggunakan SVG dengan gaussian blur bertingkat (stdDeviation 36 & 44).
   - Alur sapuan: berawal dari pendaran lembut di kiri atas headline, melintasi area tombol, dan memanjang ke bawah hingga menyentuh judul section Paket ("Pilih website sesuai kebutuhan bisnismu.").
   - Opacity terkontrol ketat (memudar dari 0.80 di atas hingga 0% di bawah) sehingga teks headline dan harga tetap memiliki kontras sempurna dan tajam dibaca.

2. **Desktop (>= 768px) - Komposisi Berlapis HeroObject**:
   - Dibuat sebagai SVG terpadu di `src/components/HeroObject.astro` di lapisan bawah teks hero:
     1. Latar: Jendela browser/wireframe website (fill terang rendah kontras, bilah alamat geometris).
     2. Sisi kiri: Kartu domain dengan aksen pill dan ekstensi geometris.
     3. Sisi kanan: Kartu rak server hosting dengan indikator status aksen.
     4. Depan/Pusat: Potongan puzzle modular khas ENLESWEB (Piece A netral dan Piece B aksen) yang mengunci kesatuan komponen.
   - Depth-of-field blur bertingkat (Gaussian blur 4.5px latar, 2.5px midground, 1px foreground optical) untuk kedalaman taktil tenang tanpa mengganggu keterbacaan teks.
   - Tanpa border (`stroke="none"`), tanpa animasi berulang.

---

## 6. Paket

### 6.1 Struktur 3 Kolom Sejajar

Desktop (>= 1024px):
- Tiga paket (Starter, Business, Growth) ditampilkan 3 kolom sama lebar, tanpa kartu, kotak, atau bayangan, dipisahkan garis vertikal `1px solid var(--line)`.
- **Keseragaman Visual (LOCKED)**: Starter, Business, dan Growth memiliki ukuran harga, tipografi, dan padding kolom yang seragam. Tidak ada badge "Most Popular" atau kartu Growth yang membesar.
- **Penyelarasan Baris Tipografi (Pixel-Perfect Alignment)**:
  - Tinggi area deskripsi diseragamkan (`min-height: 96px`).
  - Slot catatan peluncuran (`.package-launch-slot`) selalu dipertahankan di ketiga kolom dengan `min-height: 54.4px` (menyamai 2 baris catatan Starter). Pada mobile (< 1024px), slot kosong disembunyikan (`:empty { display: none }`).
  - Baris fitur inti ke-2 disinkronkan (`min-height: 48px`) untuk mengimbangi teks 2 baris pada Business ("Desain disesuaikan dengan bisnismu").
  - Menghasilkan keselarasan horizontal sempurna untuk baris fitur, tombol toggle dropdown, dan tombol CTA paket.

Mobile (< 1024px):
- Ditumpuk vertikal, dipisahkan garis horizontal `1px solid var(--line)`. Padding vertikal 40px per paket.

### 6.2 Daftar Fitur Inti dan Lipat `<details>`

- Daftar Inti: lima baris dengan urutan yang sama di ketiga kolom. Ikon centang SVG `16px` berwarna `--ink`.
- Bagian Lipat (`<details>`):
  - **Tertutup secara default pada semua ukuran layar** (keputusan pemilik bisnis).
  - `<summary>`: tautan sekunder dengan chevron panah yang berputar 180° saat terbuka. Target tap minimal 44px.
  - Label berganti secara otomatis antara `Lihat semua yang termasuk` (saat tertutup) dan `Sembunyikan` (saat terbuka).

### 6.3 Custom

- Berada di bawah tiga kolom paket, dipisahkan garis horizontal `1px solid var(--line)` dengan jarak 64px.
- Desktop (>= 1024px): tata letak 2 kolom (kiri: nama, harga, deskripsi, daftar 7 contoh kebutuhan dengan titik bulat geometris minimalis, catatan harga; kanan: tombol `[Diskusikan Kebutuhan Custom]`).
- Mobile: ditumpuk rapi, tombol di bawah catatan harga.

---

## 7. Proyek (Sistem Highlight & Minimize)

### 7.1 Struktur Showcase

- Konsep: Menampilkan contoh kemampuan nyata untuk ketiga tingkatan paket tanpa memaksa pengunjung melakukan scroll panjang.
- Sistem **Highlight & Minimize**:
  - Enam proyek portofolio konsep tampil:
    1. `jerseay` (Tingkat Growth, default highlighted): Studio jersey custom (`https://jerseay.vercel.app/`).
    2. `dipotongin` (Tingkat Growth): Studio barbershop (`https://dipotongin.vercel.app/`).
    3. `tuntas` (Tingkat Business): Bimbel kelompok kecil dan privat (`https://tuntas-steel.vercel.app/`).
    4. `seruput` (Tingkat Starter): Kedai kopi dan sangrai dadakan (`https://seruput-kopi.vercel.app/`).
    5. `ripeir` (Tingkat Starter): Workshop perbaikan barang (`https://ripeir.vercel.app/`).
    6. `berflower` (Tingkat Growth): Toko bunga dan hadiah (`https://berflower-lilac.vercel.app/`).
  - Satu proyek tampil secara penuh dalam panggung pameran berasio 16:10 (*highlighted stage*).
  - Lima proyek lainnya tampil sebagai kartu ringkas (*minimized cards*) di bawah panggung.
  - Default proyek highlighted: **Jerseay**.
  - Mengklik kartu minimized mana pun akan menukar posisi: proyek yang dipilih menjadi highlighted penuh di stage, dan proyek sebelumnya otomatis diminimize.
  - Pada mobile (< 1024px), interaksi switcher dilengkapi auto-scroll halus kembali ke panggung pameran (*stage*).

### 7.2 Visual dan Tombol Proyek

- Visual: Tangkapan layar website berkualitas tinggi dioptimalkan melalui `astro:assets` (format WebP/PNG di `src/assets/projects/{id}.*` dengan `object-fit: cover`).
- Favicon identitas: setiap kartu minimized dilengkapi logo/favicon SVG unik dari masing-masing konsep proyek di `src/assets/projects/{id}-favicon.svg`.
- Label konsep dinamis: setiap kartu proyek secara eksplisit menampilkan label sesuai tingkatannya:
  - Starter: `Konsep buatan kami sendiri. Contoh tingkat Starter.`
  - Business: `Konsep buatan kami sendiri. Contoh tingkat Business.`
  - Growth: `Konsep buatan kami sendiri. Contoh tingkat Growth.`
- Tombol tindakan:
  - Keenam proyek dilengkapi tombol aktif `[Lihat Website]` yang membuka URL demo Vercel live di tab baru (`target="_blank" rel="noopener noreferrer"`).
  - Mekanisme keamanan fallback: jika URL dikosongkan di `site.ts`, tombol otomatis menjadi nonaktif `[Segera]` dengan atribut `aria-label="Segera tersedia"` dan mencetak peringatan build aman di konsol.

---

## 8. Proses (Sistem Highlight & Minimize Timeline)

### 8.1 Struktur Timeline

- Menggunakan **satu sumbu vertikal lurus** sebagai tulang punggung yang menghubungkan penanda nomor dari langkah 1 sampai langkah 5. Sumbu berhenti tepat di langkah kelima ("Tayang").
- Penanda: lingkaran 40x40px (radius 50%) dengan nomor di tengah (Poppins 600, 1rem).
  - Status minimized: latar `--canvas`, border `1.5px solid var(--line)`, nomor `--ink`.
  - Status highlighted: latar `--accent`, border `1.5px solid var(--ink)`, nomor `--ink`.
  - Langkah 5 saat highlighted: latar `--ink`, border `1.5px solid var(--ink)`, nomor `--accent`.
- Kartu langkah (*step card*): saat highlight berlatar `--surface` memuat judul dan paragraf penjelasan; saat minimize hanya menampilkan nomor dan judul langkah.
- Accordion interaktif: Langkah 1 di-highlight secara default, langkah 2 sampai 5 diminimize. Mengetuk nomor atau judul langkah akan membuka detail langkah terkait.

### 8.2 Tata Letak

- Desktop (>= 1024px): Tata letak 2 kolom (kiri: judul section `Lima langkah sampai websitemu tayang.` yang sticky; kanan: vertical timeline interaktif).
- Mobile & tablet (< 1024px): 1 kolom lurus vertikal, judul di atas dan timeline di bawah.

---

## 9. Tentang & Pernyataan Manfaat Bisnis (`#tentang`)

Sesuai keputusan pemilik bisnis, narasi Tentang ENLESWEB dan Pernyataan Manfaat Bisnis digabungkan ke dalam satu section `#tentang` dalam tata letak editorial asimetris (LOCKED):

- Desktop (>= 1024px): 2 kolom seimbang.
  - **Kolom Kiri (Cerita & Narasi)**:
    - Judul: h2 `Tentang ENLESWEB`.
    - Paragraf 1: `ENLESWEB membantu pemilik bisnis punya website tanpa harus mengurus urusan teknisnya sendiri.`
    - Paragraf 2: `Kami mengerjakan desain, pembuatan, dan penayangan website, dari yang sederhana sampai yang dirancang khusus.`
  - **Kolom Kanan (Kartu Manfaat Bisnis)**:
    - Kartu taktil berlatar `--surface` (`#F5F5F2`), borderless, sudut membulat lebar `clamp(20px, 3vw, 28px)`, padding `clamp(28px, 3.5vw, 40px)`.
    - Dilengkapi garis indikator minimal di atas (36px x 3px, warna `--accent`, radius 2px).
    - Teks: `Calon pelangganmu bisa langsung chat lewat WhatsApp, melihat lokasi di Google Maps, dan membaca layanan atau produkmu tanpa harus bertanya satu per satu.`
- Mobile (< 1024px): Tersusun bertumpuk vertikal secara alami dan ringkas.

---

## 10. CTA penutup

- Kartu banner berlatar warna aksen penuh `--accent` (`#E4FF30`), sudut melengkung halus `clamp(24px, 3.5vw, 36px)`, tanpa garis tepi (`border: none`).
- Judul: `Mau buat website untuk bisnismu?`
- Tombol aksi: solid ink `#111111` dengan teks putih dan hover aksen, bertuliskan `[Ceritakan via WhatsApp]`.
- Objek visual modular SVG disembunyikan pada mobile (< 768px) untuk menjaga ringkasnya kartu banner konversi penutup.

---

## 11. Footer

Latar belakang solid `--ink` (`#111111`) penuh dari ujung ke ujung layar tanpa garis pembatas atas.
- Tingkat atas:
  - Merek: logo geometris SVG aksen (`navbrand-logo-accent.svg`, lebar 32px) dan teks `EnlesWeb` putih, Poppins 700.
  - Tagline: `#A3A39E`.
  - Kontak: WhatsApp dengan nomor terformat yang dapat diklik (putih dengan hover aksen).
  - Navigasi: Paket, Proyek, Proses (putih dengan hover aksen, target tap minimal 44px).
- Tingkat bawah:
  - Garis pemisah tipis `1px solid rgba(255, 255, 255, 0.12)`.
  - Hak cipta: `© EnlesWeb` berwarna `#8A8A85` (memenuhi standar kontras WCAG AA).
  - Tautan utilitas: `[Kebijakan Privasi]` berwarna `#8A8A85` dengan hover `--accent` dan target sentuh minimal 44px (berdampingan di kanan pada desktop, bertumpuk di bawah pada mobile).

---

## 12. Interaksi, Animasi & Motion Control

### 12.1 Animasi Diizinkan

1. **Progressive Scroll Reveal (Ultra-Ringan Berbasis GPU)**:
   - Menggunakan native `IntersectionObserver` ringan di `Base.astro` tanpa dependensi eksternal.
   - Elemen dengan kelas `.reveal-on-scroll` muncul bertahap saat di-scroll ke dalam viewport (`threshold: 0`, `rootMargin: '0px 0px -28px 0px'`).
   - Transisi halus: `opacity 500ms cubic-bezier(0.16, 1, 0.3, 1), transform 500ms cubic-bezier(0.16, 1, 0.3, 1)` dengan `translateY(24px)`.
   - Menggunakan properti `will-change: opacity, transform` untuk akselerasi perangkat keras GPU pada smartphone kelas menengah (*mid-range*).
   - One-shot reveal: pengamatan dihentikan (`unobserve`) setelah elemen muncul, menghasilkan 0% beban CPU residual.
2. **Hover dan Tekan Tombol**:
   - Transisi warna, bayangan fisik 3D, dan pergeseran posisi (150ms).
3. **Navbar Scroll**:
   - Transisi latar transparan ke solid `--canvas` setelah scroll 8px (150ms).
4. **Akordeon & Dropdown**:
   - Rotasi panah `<summary>` dan chevron langkah proses (150ms).
   - Pembukaan panel menu mobile (150ms).

### 12.2 Animasi Dilarang

- Dilarang memakai scroll-jacking, parallax scrolling, animasi objek hero yang terus-menerus berputar, atau efek floating tanpa akhir.

### 12.3 Aksesibilitas Motion (`prefers-reduced-motion: reduce`)

Wajib dihormati secara mutlak:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  html.js-reveal .reveal-on-scroll {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
}
```

---

## 13. Aksesibilitas visual

- Kontras teks `--ink` (#111111) dan `--ink-muted` (#55554F) terhadap `--canvas` (#FFFFFF) dan `--surface` (#F5F5F2) melampaui standar WCAG AA (minimal 4.5:1).
- Teks di atas `--accent` selalu `--ink` (rasio ~17:1).
- Fokus keyboard selalu terlihat jelas: outline `2px solid var(--ink)` dengan offset 3px.
- Area sentuh (tap target) seluruh elemen interaktif memenuhi ukuran minimum 44x44px.
- Informasi tidak pernah disampaikan hanya melalui warna saja.

---

## 14. Halaman Utilitas: Kebijakan Privasi (`/kebijakan-privasi`)

Halaman statis editorial bersih yang memuat dokumen legal kepatuhan privasi data:

1. **Header Minimalis**:
   - Posisi `sticky` di atas layar (`top: 0`, `z-index: 100`) dengan latar solid `--canvas` (`#FFFFFF`) dan garis bawah `1px solid var(--line)`. Tinggi 64px mobile, 72px desktop.
   - Sisi kiri: Logo EnlesWeb (SVG + teks merek `EnlesWeb`) yang menaut ke `/`.
   - Sisi kanan: Tautan `[Kembali ke Beranda]` dilengkapi ikon panah SVG bersih (`<svg>` stroke width 2, tanpa karakter panah unicode teks) dengan hover background `--surface` dan tap target minimal 44px.
2. **Tata Letak & Tipografi Konten**:
   - Kontainer membaca terpusat (`max-width: 740px`, ~65 karakter per baris untuk kenyamanan membaca optimal).
   - Judul h1: `clamp(2rem, 1.4rem + 2vw, 3rem)`, bobot 600, warna `--ink`.
   - Sub-judul h2: `1.25rem`, bobot 600, warna `--ink`, dipisahkan garis tipis `1px solid var(--line)`.
   - Paragraf: ukuran `1rem` mobile, `1.0625rem` desktop, tinggi baris 1.65, warna `--ink-muted` (#55554F) dengan kontras rasio > 7:1 di atas kanvas putih.
   - Bebas dari elemen dekoratif atau visual slop yang mengaburkan teks hukum.
3. **Footer**:
   - Menampilkan `Footer.astro` di bagian bawah dengan tautan aktif kembali ke halaman utama dan hak cipta.

=== BATAS AWAL FILE: SPEC.md ===

# SPEC.md - ENLESWEB Homepage

Versi 1.2 (As-Is Technical Architecture & Implementation Specification - Baseline 14 Oktober 2026 / Terkonsolidasi V3 15 Oktober 2026)

Dokumen ini membahas arsitektur teknis website yang telah terbangun: stack, struktur file, pemetaan komponen, konfigurasi, skrip klien, tracking WhatsApp & Meta Pixel, SEO, QA teknis, dan urutan pemeliharaan. Teks ada di CONTENT.md. Tampilan ada di DESIGN.md. Scope ada di PRD.md.

Status: LOCKED, DEFAULT, OPEN (arti di AGENTS.md bagian 5).

---

## 1. Stack (DEFAULT)

- Astro versi stabil terbaru, `output: 'static'`
- TypeScript mode `strict` (devDependencies: `typescript` dan `@astrojs/check` untuk type checking tanpa menambah ukuran bundle klien)
- CSS murni dengan custom properties (`src/styles/global.css` dan scoped styling komponen). Tidak memakai Tailwind atau framework UI (React/Vue/Svelte)
- JavaScript klien murni (*vanilla JS*) inline tanpa library eksternal
- Font: `@fontsource/poppins` (self-hosted, nol permintaan eksternal ke server Google Fonts)
- Package manager: npm
- Hosting target: Cloudflare Pages (situs statis)

Perintah proyek:
- `npm install`
- `npm run dev`
- `npm run build` (wajib selesai dengan exit code 0, 0 errors, 0 warning)
- `npm run preview`

---

## 2. Struktur file aktual

```
/
├── AGENTS.md
├── PRD.md
├── CONTENT.md
├── DESIGN.md
├── SPEC.md
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── og-image.png            (LOCKED/CLOSED: berkas fisik 1200x630 aktif)
└── src/
    ├── config/
    │   └── site.ts             (semua konfigurasi bisnis terpusat)
    ├── content/
    │   └── copy.ts             (seluruh teks, salinan persis CONTENT.md)
    ├── lib/
    │   └── whatsapp.ts         (pembentuk URL tautan WhatsApp otomatis)
    ├── styles/
    │   └── global.css          (token desain, reset, font, progressive scroll)
    ├── assets/
    │   ├── hero-object.svg
    │   └── projects/           (jerseay, dipotongin, tuntas, seruput, ripeir, berflower + favicons)
    ├── layouts/
    │   └── Base.astro          (dokumen HTML, meta tags, Pixel, IntersectionObserver)
    ├── components/
    │   ├── Navbar.astro        (header, link anchor, drawer mobile)
    │   ├── Hero.astro          (headline, harga, CTA, ambient sweep mobile)
    │   ├── HeroObject.astro    (komposisi berlapis SVG hero taktil desktop)
    │   ├── Packages.astro      (kontainer 3 kolom paket)
    │   ├── PackageColumn.astro (kolom paket Starter, Business, Growth + details)
    │   ├── CustomPackage.astro (jalur terpisah custom di bawah paket)
    │   ├── Projects.astro      (showcase proyek sistem Highlight & Minimize)
    │   ├── ProjectItem.astro   (tampilan stage proyek highlighted)
    │   ├── Process.astro       (5 langkah timeline vertikal accordion)
    │   ├── About.astro         (penggabungan Tentang ENLESWEB & Manfaat Bisnis)
    │   ├── FinalCta.astro      (banner konversi penutup berlatar aksen)
    │   ├── Footer.astro        (footer tingkat dua berlatar solid ink)
    │   ├── WhatsAppButton.astro (komponen tombol seragam dengan affordance fisik 3D)
    │   └── FloatingWhatsApp.astro (tombol WhatsApp melayang di kanan bawah)
    └── pages/
        ├── index.astro         (pintu masuk utama landing page)
        └── kebijakan-privasi.astro (halaman statis kebijakan privasi)
```

Aturan tata kelola file:
- Seluruh teks pelanggan wajib diimpor dari `src/content/copy.ts`. Dilarang menulis *hardcoded copy* di dalam komponen.
- Seluruh nilai bisnis variabel (`whatsappNumber`, `metaPixelId`, `siteUrl`, `showLaunchNote`, daftar proyek) wajib diimpor dari `src/config/site.ts`.

---

## 3. Pemetaan section ke komponen

| Urutan | Section | Komponen | Anchor ID |
|---|---|---|---|
| 1 | Navbar | `Navbar.astro`, `WhatsAppButton.astro` | - |
| 2 | Hero | `Hero.astro`, `HeroObject.astro`, `WhatsAppButton.astro` | `hero` |
| 3 | Paket | `Packages.astro`, `PackageColumn.astro` x3, `CustomPackage.astro`, `WhatsAppButton.astro` | `paket` |
| 4 | Proyek | `Projects.astro`, `ProjectItem.astro` x6, `WhatsAppButton.astro` | `proyek` |
| 5 | Proses | `Process.astro` | `proses` |
| 6 | Tentang & Manfaat bisnis | `About.astro` | `tentang` |
| 7 | CTA penutup | `FinalCta.astro`, `WhatsAppButton.astro` | - |
| 8 | Footer | `Footer.astro` | - |
| 9 | Floating WhatsApp | `FloatingWhatsApp.astro` | - |

Semantik HTML:
- `<header>` membungkus navbar.
- `<main id="main-content">` membungkus section Hero sampai Final CTA.
- `<footer>` membungkus footer.
- Tepat satu `<h1>`: headline hero.
- Judul section memakai `<h2>`. Nama paket, nama proyek, dan judul langkah memakai `<h3>`.
- Section memakai `<section id="...">` dengan `aria-labelledby` yang mengaitkan judul section.

---

## 4. Konfigurasi bisnis: `src/config/site.ts`

```ts
export const site = {
  name: 'EnlesWeb',

  // LOCKED (CLOSED): nomor WhatsApp bisnis resmi (+6285156801570). Format: kode negara + nomor tanpa tanda baca.
  whatsappNumber: '6285156801570',

  // LOCKED (CLOSED): ID Pixel resmi dari Meta Events Manager.
  metaPixelId: '1645267283847928',

  // LOCKED: URL kanonikal produksi website tanpa trailing slash.
  siteUrl: 'https://enlesweb.com',

  // LOCKED: true untuk menampilkan catatan "Harga peluncuran untuk 10 klien pertama." pada Starter.
  showLaunchNote: true,

  projects: [
    {
      id: 'jerseay',
      status: 'live',
      url: 'https://jerseay.vercel.app/',
    },
    {
      id: 'dipotongin',
      status: 'live',
      url: 'https://dipotongin.vercel.app/',
    },
    {
      id: 'tuntas',
      status: 'live',
      url: 'https://tuntas-steel.vercel.app/',
    },
    {
      id: 'seruput',
      status: 'live',
      url: 'https://seruput-kopi.vercel.app/',
    },
    {
      id: 'ripeir',
      status: 'live',
      url: 'https://ripeir.vercel.app/',
    },
    {
      id: 'berflower',
      status: 'live',
      url: 'https://berflower-lilac.vercel.app/',
    },
  ],
} as const;
```

Logika penanganan proyek dan nomor:
- Keenam proyek contoh berstatus `live` dengan URL demo Vercel aktif. Jika salah satu URL dikosongkan di konfigurasi, tombol proyek tersebut dirender secara aman sebagai tombol nonaktif `[Segera]` dengan atribut `aria-label="Segera tersedia"` dan sistem mencetak peringatan build `console.warn` tanpa menggagalkan build.
- Format tampilan nomor WhatsApp di footer: `+` diikuti string `whatsappNumber`.

---

## 5. Skrip klien (Vanilla JS)

Seluruh skrip klien menggunakan JavaScript murni ringan yang disematkan langsung di komponen terkait (`<script>` Astro).

### 5.1 Bagian lipat paket (`Packages.astro` & `PackageColumn.astro`)
- Menggunakan elemen standar `<details>` dan `<summary>`.
- Default: `<details>` tertutup secara default pada semua ukuran layar (`details.open = false`) untuk menjaga kekompakan tampilan.
- Label `<summary>` berganti secara otomatis antara `Lihat semua yang termasuk` (saat tertutup) dan `Sembunyikan` (saat terbuka) melalui event listener `toggle`.

### 5.2 Navbar transparan & saat scroll (`Navbar.astro`)
- Memulai render dengan latar transparan (`background-color: transparent`, `border-bottom-color: transparent`) pada posisi `top: 0` (`z-index: 100`).
- Sapuan pendaran aksen (*ambient sweep*) dari Hero mengalir bebas menembus navbar transparan berkat margin-top negatif pada Hero (`-64px` mobile, `-72px` desktop) dengan kompensasi padding atas.
- Memantau event `window.scroll` dengan opsi `{ passive: true }`.
- Menambahkan atribut `data-scrolled="true"` pada elemen `<header>` saat `window.scrollY > 8` untuk mengubah latar transparan menjadi solid `--canvas` (`#FFFFFF`) dengan garis bawah tipis `1px solid var(--line)` (transisi 150ms).

### 5.3 Menu mobile drawer (`Navbar.astro`)
- Mengontrol tombol toggle drawer dengan `aria-expanded` dan `aria-controls="nav-menu-panel"`.
- Saat drawer terbuka (`data-menu-open="true"`), navbar otomatis mengaktifkan latar solid `--canvas` (`#FFFFFF`) agar menu drawer kontras dan terbaca jelas.
- Panel menu mobile terbuka tepat di bawah navbar dan menutup otomatis saat:
  1. Tautan navigasi di dalam panel diklik.
  2. Tombol toggle menu diklik kembali.
  3. Tombol `Escape` ditekan pada keyboard (fokus kembali ke tombol menu).

### 5.4 Showcase Proyek Highlight & Minimize (`Projects.astro`)
- Menampilkan 6 proyek portofolio konsep: 1 proyek terpilih di panggung pameran (*stage* berasio 16:10), dan 5 proyek lainnya tersusun rapi sebagai kartu ringkas (*minimized cards*).
- Mengklik kartu minimized mana pun akan memanggil fungsi `highlightProject(targetId)` yang menukar tampilan kartu dan stage secara instan.
- Pada layar smartphone (< 840px), interaksi switcher dilengkapi auto-scroll halus kembali ke panggung pameran (`stage.scrollIntoView({ behavior: 'smooth', block: 'nearest' })`).

### 5.5 Akordeon Timeline Proses (`Process.astro`)
- Menghubungkan 5 langkah vertikal dengan rel dinamis (*step rail*).
- Langkah 1 aktif secara default, sedangkan langkah 2 sampai 5 diminimize.
- Mengklik baris langkah mana pun akan memperluas (*expand*) deskripsi langkah tersebut dengan rotasi ikon chevron 180° dan latar kartu `--surface`.

### 5.6 Progressive Scroll Reveal (`Base.astro`)
- Menggunakan native `IntersectionObserver` ringan di bagian bawah `Base.astro`.
- Memeriksa dukungan peramban, menambahkan kelas `html.js-reveal`, dan mengamati seluruh elemen berkelas `.reveal-on-scroll`.
- Pengaturan observer: `rootMargin: '0px 0px -28px 0px'`, `threshold: 0`.
- Saat elemen masuk viewport, kelas `.is-visible` ditambahkan dan pengamatan segera dihentikan (`revealObserver.unobserve(entry.target)`), menghasilkan nol beban CPU setelah animasi selesai.
- Animasi bertransisi pada properti `opacity` dan `transform: translateY(24px)` dengan akselerasi GPU (`will-change: opacity, transform`), sangat ramah daya untuk perangkat smartphone kelas menengah (*mid-range*).
- Secara otomatis dinonaktifkan ketika sistem mendeteksi `prefers-reduced-motion: reduce`.

---

## 6. Integrasi tautan WhatsApp & Tracking: `src/lib/whatsapp.ts`

```ts
import { site } from '../config/site';

export function waUrl(topic: string): string {
  const text = `Halo ENLESWEB, saya mau tanya tentang ${topic}.`;
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
```

Format tautan WhatsApp:
- Protokol: `https://wa.me/{nomor}?text={encodedText}`.
- Membuka aplikasi WhatsApp di smartphone atau WhatsApp Web/Desktop di peramban komputer.
- Seluruh tautan WhatsApp dilengkapi atribut pengaman: `target="_blank"`, `rel="noopener noreferrer"`.
- Seluruh elemen dilengkapi atribut data tracking: `data-wa-topic="{topic}"` dan `data-cta-location="{location}"`.

### Tabel 9 Titik Sentuh WhatsApp (LOCKED)

| Lokasi Tombol | `location` | Topik `{topic}` | Keterangan |
|---|---|---|---|
| Navbar (desktop) | `nav` | `pembuatan website` | Tombol CTA teks di header |
| Hero | `hero` | `pembuatan website` | Tombol utama hero |
| Paket Starter | `package_starter` | `paket Starter` | Tombol di kolom Starter |
| Paket Business | `package_business` | `paket Business` | Tombol di kolom Business |
| Paket Growth | `package_growth` | `paket Growth` | Tombol di kolom Growth |
| Custom | `package_custom` | `paket Custom` | Tombol di kartu Custom |
| CTA penutup | `final_cta` | `pembuatan website` | Tombol banner Final CTA |
| Footer | `footer` | `pembuatan website` | Tautan ikon WhatsApp di footer |
| Floating WhatsApp | `floating_wa` | `pembuatan website` | Tombol aksi melayang di kanan-bawah layar |

---

## 7. Meta Pixel & Tracking (`Base.astro`)

### 7.1 Pemuatan Asinkron
- Disematkan di `<head>` pada `Base.astro` hanya jika `site.metaPixelId` terisi (panjang > 0).
- Menggunakan kode dasar resmi Meta Pixel asinkron dengan tag `<noscript>`.
- Jika `site.metaPixelId` kosong, tidak ada skrip Pixel yang dimuat dan tidak ada error konsol yang dihasilkan.

### 7.2 Pelacakan Event Resmi (Standar Meta Patuh Kebijakan)

1. **Event `PageView` (Standar Meta)**: dikirim otomatis saat halaman pertama kali dimuat oleh skrip dasar Meta Pixel.
2. **Event `AddToCart` (Standar Meta)**: dikirim setiap kali terjadi klik pada tombol WhatsApp (`data-wa-topic`). Jika tombol memiliki `data-package-value`, parameter `value` dan `currency: 'IDR'` disertakan untuk optimasi bidding berbasis nilai di Meta Ads (karena event Lead/Contact/InitiateCheckout dibatasi oleh konfigurasi backend Meta pada akun ini).
3. **Event `ViewContent` (Standar Meta)**:
   - *Portfolio Demo*: dikirim saat tombol `[Lihat Website]` (`data-project-demo`) diklik dengan `content_ids`.
   - *Pricing Section*: dikirim satu kali saat section `#paket` masuk ke viewport (via IntersectionObserver).
   - *Rincian Paket*: dikirim saat accordion rincian paket dibuka (`content_name: 'Rincian Paket ...'`).
   - *Switcher Portofolio*: dikirim saat kartu portofolio dipilih (`content_name: 'Portofolio ...'`).
   - *Langkah Proses*: dikirim saat langkah proses dibuka (`content_name: 'Langkah X: ...'`).

Aturan:
- Tidak memanggil `preventDefault` (navigasi ke aplikasi WhatsApp dan link demo berjalan instan tanpa terhambat).
- Aman dari ad-blocker dan saat Pixel ID tidak aktif (`typeof window.fbq !== 'function'`).
- Menggunakan 100% event standar Meta resmi tanpa bypass agar akun Meta aman dari suspend.

---

## 8. CSS, Token, dan Font

- Seluruh token dari DESIGN.md bagian 2 diimplementasikan di `:root` pada `src/styles/global.css`:
  - Warna: `--accent: #E4FF30`, `--ink: #111111`, `--ink-muted: #55554F`, `--canvas: #FFFFFF`, `--surface: #F5F5F2`, `--line: #E5E5DF`, `--neutral-object: #D1D1CB`.
  - Radius: `--radius-sm: 6px`, `--radius-md: 10px`, `--radius-lg: 14px`.
  - Spasi: Skala 4px (`--space-4` hingga `--space-160`).
  - Tipografi: Skala fluid clamp (`--font-hero-headline`, `--font-section-title`, dll.).
- Font Poppins diimpor secara lokal via `@fontsource/poppins` (bobot 400, 500, 600, 700).
- Reset minimal: `box-sizing: border-box`, margin 0 pada heading/paragraf/daftar, `img, svg { max-width: 100%; display: block; }`.
- Sistem tombol: Seluruh tombol berstatus borderless (`border: none`) dengan affordance fisik 3D *Engineered Tactile Shelf* 3px `#A3C400`, inset specular highlight `rgba(255, 255, 255, 0.6)` di sisi atas, clean ink inversion pada hover, dan depression 2px saat aktif/ditekan.
- Dukungan Aksesibilitas Gerak (`prefers-reduced-motion: reduce`): Mematikan seluruh transisi dan animasi CSS jika pengguna mengaktifkan mode minim gerak pada sistem operasi mereka.

---

## 9. SEO & Meta Tags (`Base.astro`)

- `<html lang="id">`
- `<meta charset="utf-8">`, `<meta name="viewport" content="width=device-width, initial-scale=1">`
- `<meta name="color-scheme" content="light">`
- `<title>` dan `<meta name="description">` berasal dari `copy.meta`.
- `<link rel="icon" type="image/svg+xml" href="/favicon.svg">`
- `<meta name="geo.region" content="ID">`, `<meta name="geo.placename" content="Indonesia">`.
- Open Graph tags: `og:type` = `website`, `og:title`, `og:description`, `og:locale` = `id_ID`.
- `og:url` dan `<link rel="canonical">` hanya dicetak jika `site.siteUrl` tidak kosong.
- `og:image` dan `twitter:card = summary_large_image` hanya dicetak jika berkas fisik `public/og-image.png` terdeteksi di server/build.
- Structured Data (Schema.org JSON-LD): Tipe `ProfessionalService` dengan entitas bisnis EnlesWeb, area layanan `ID`, tautan media sosial, serta penawaran paket harga (`Offer`).
- Sitemap Otomatis: Dihasilkan oleh integrasi `@astrojs/sitemap` (`dist/sitemap-index.xml`).
- `public/robots.txt`: `User-agent: *`, `Allow: /`, dan referensi `Sitemap: https://enlesweb.com/sitemap-index.xml`.

---

## 10. Aksesibilitas dan Performa

Aksesibilitas (WCAG AA Standard):
- Kontras warna teks biasa terhadap latar belakang minimal 4.5:1; kontras teks besar dan elemen interaktif minimal 3:1.
- Seluruh elemen interaktif dapat dioperasikan penuh dengan keyboard (Tab, Enter, Space, Escape) dengan indikator fokus terlihat tegas (`outline: 2px solid var(--ink); outline-offset: 3px;`).
- Target area sentuh (tap targets) minimal 44x44px pada smartphone.
- Elemen dekoratif SVG ditandai dengan `aria-hidden="true"`.
- Tombol nonaktif dilengkapi `aria-label="Segera tersedia"`.
- Tepat satu `<h1>` pada hero, dan urutan heading semantik teratur tanpa lompatan.

Performa:
- Target skor Lighthouse Mobile >= 90 pada seluruh kategori (Performance, Accessibility, Best Practices, SEO).
- Nol framework JS di sisi klien (Astro SSG murni).
- LCP berbasis teks headline hero.
- Tidak ada pergeseran tata letak kumulatif (CLS = 0).

---

## 11. QA Checklist Teknis

Sebelum rilis atau deploy, verifikasi daftar berikut:

### Build & Tipe
- [ ] `npm run build` sukses tanpa error dan tanpa warning TypeScript (exit code 0).
- [ ] `npm run preview` menampilkan hasil rendering identik dengan mode dev.

### Konten & Sumber Tunggal
- [ ] Seluruh teks sama persis dengan `CONTENT.md` tanpa ada em dash (`—`) atau kata promosi klise.
- [ ] Seluruh teks diimpor dari `src/content/copy.ts`.
- [ ] Seluruh konfigurasi variabel bisnis berada di `src/config/site.ts`.

### Navigasi & Interaksi
- [ ] Tautan anchor `#hero`, `#paket`, `#proyek`, `#proses`, `#tentang` bekerja mulus tanpa tertutup sticky navbar (`scroll-margin-top: 88px`).
- [ ] Menu mobile drawer terbuka dan tertutup mulus (klik toggle, klik tautan, atau tombol Escape).
- [ ] Navbar berubah transparan ke solid `--canvas` setelah scroll 8px.
- [ ] `<details>` paket tertutup secara default pada semua resolusi layar, dan label toggle berganti dengan benar.
- [ ] Switcher proyek (Highlight & Minimize) menukar kartu dengan mulus dan mengembalikan scroll ke stage pada layar HP.
- [ ] Akordeon Proses memperluas langkah dengan mulus saat nomor/judul diklik.

### WhatsApp & Tracking
- [ ] Seluruh 9 tombol WhatsApp membuka URL `wa.me/{nomor}?text=...` dengan teks topik yang sesuai.
- [ ] Seluruh tombol WhatsApp memuat atribut `data-wa-topic` dan `data-cta-location` yang benar.
- [ ] Tidak ada error di konsol peramban saat Pixel ID kosong atau ad-blocker aktif.

### Utilitas & Legal
- [ ] Halaman statis `/kebijakan-privasi` aktif, dapat diakses dari footer, dan memuat 5 poin kepatuhan privasi data.
- [ ] Tautan kembali di header `/kebijakan-privasi` menggunakan ikon SVG bersih yang mengarahkan pengguna kembali ke `/`.

---

## 12. Panduan Deploy Cloudflare Pages / Workers

1. Hubungkan repository git ke Cloudflare Pages atau Cloudflare Workers.
2. Konfigurasi build setting:
   - Framework preset: `Astro`
   - Build command: `npm run build`
   - Build output directory: `dist`
3. Pipeline otomatis telah terpasang via `.github/workflows/deploy.yml` dan `wrangler.json`.
4. Staging aktif di subdomain Cloudflare Workers (`workers.dev`).
5. Sebelum memasang iklan berbayar: beli domain final `enlesweb.com` dan hubungkan nameserver ke Cloudflare.

---

## 13. Catatan OPEN Tersisa (3 Tugas Eksekusi Murni Minggu 0)

1. `domain enlesweb.com`: belum dibeli (pemilik bisnis membeli domain dan mengarahkan DNS ke Cloudflare Workers). Nilai kanonikal disiapkan `siteUrl: 'https://enlesweb.com'`.
2. `materi iklan Meta`: render iklan Carousel 4 slide berlabel tier & harga (`tuntas: Paket Business Rp750.000`, `Jerseay: Paket Growth Rp1.200.000`, `ripeir: Paket Starter Rp450.000`) + *problem-aware hook* via tooling internal `carousel-generator/` (Decision 016).
3. `draf template PDF Bukti Pemesanan`: menyiapkan 1 halaman template PDF Bukti Pemesanan ber-TTD digital yang mencantumkan Nama Lengkap Pendiri (sama persis dengan rekening bank penerima) sebagai Penanggung Jawab Resmi Studio ENLESWEB, kuota update konten ringan tahunan (2x/4x/6x), waktu pembelian domain pasca-DP + materi lengkap, dan aturan *On-Hold* 60 hari kalender (Decision 017).
*(Catatan: nomor WhatsApp 6285156801570, Meta Pixel ID 1645267283847928, public/og-image.png, pengujian fisik HP/Pixel, halaman kebijakan privasi, serta SOP operasional chat WhatsApp & aturan transaksi klien di `Delivery & Operations/sop.md` v1.2 telah RESOLVED / CLOSED).*
