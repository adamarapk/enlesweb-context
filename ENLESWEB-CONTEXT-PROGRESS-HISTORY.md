# ENLESWEB --- HISTORI KONTEKS, PERKEMBANGAN, DAN PROGRESS DELTA

Versi Dokumen: 4.2 (Unifikasi Cloudflare Workers & Peluncuran Produksi layout-lab - 28 Oktober 2026)
Tanggal Pembaruan Terakhir: 28 Oktober 2026
Status Dokumen: Master Context, Progress Delta, & Launch-Ready State V4 (Decision 001–023, SOP transaksi v1.3, seluruh ekosistem terpadu di Cloudflare Workers; layout-lab live di preview.enlesweb.com)
Fungsi: Sumber Referensi Tunggal untuk Konteks Bisnis, Evolusi Konsep, Progress Delta, dan Gap Register ENLESWEB.
Ringkasan Pembaruan: Seluruh 6 demo konsep portofolio (*.enlesweb.com) dan internal composer layout-lab (preview.enlesweb.com) resmi di-deploy ke Cloudflare Workers. Hosting lama Vercel telah resmi dinonaktifkan (Decision 023). layout-lab live menggunakan format Stateless Compact ID (/p/<id>) dan alur SOP chat WhatsApp ditingkatkan ke v1.3 (Decision 022 CLOSED).

---

## ATURAN HIRARKI KEPUTUSAN (SOURCE OF TRUTH HIERARCHY)
Jika terdapat perbedaan informasi antar bagian atau dengan dokumen lama, gunakan hirarki prioritas berikut:
1. KEPUTUSAN TERBARU (28 Oktober 2026 - UNIFIKASI HOSTING CLOUDFLARE WORKERS *.ENLESWEB.COM, PENONAKTIFAN VERCEL, PELUNCURAN PRODUKSI LAYOUT-LAB PREVIEW.ENLESWEB.COM DENGAN STATELESS COMPACT ID /P/<ID>, DECISION 023 & DECISION 022 CLOSED; 18 Oktober 2026 - PENYELESAIAN TEMPLATE PDF BUKTI PEMESANAN CLOSED, KESIAPAN MATERI IKLAN META CLOSED, PENUTUPAN SELURUH TUGAS MINGGU 0 CLOSED, TRANSISI MASTER DOCS V4, DECISION 020; 17 Oktober 2026 - OPTIMASI MENYELURUH PAGESPEED INSIGHTS 100/100 MOBILE & DESKTOP CLOSED, DECISION 019; 17 Oktober 2026 - PEMBELIAN DOMAIN RESMI ENLESWEB.COM CLOSED / TEREALISASI, DECISION 018; 16 Oktober 2026 - SINKRONISASI SOP OPERASIONAL V1.2 CLOSED & DECISION 013–017; 15 Oktober 2026 - SINKRONISASI KEPUTUSAN DOMAIN REGISTRANT DECISION 002 & RENEWAL POSITIONING TERPADU; 14 Oktober 2026 - SHOWCASE 6 PROYEK LENGKAP DENGAN PEMETAAN TIER, NAVBAR TRANSPARAN AMBIENT BLEED, ENGINEERED TACTILE 3D SHELF BUTTONS, DEPLOYMENT STAGING CLOUDFLARE WORKERS.DEV, TRACKING RESMI ADDTOCART/VIEWCONTENT, SCHEMA.ORG JSON-LD & SITEMAP) > Menang atas semua konteks lama.
2. ENLESWEB-DOCS-V4.md (PRD / CONTENT / DESIGN / SPEC) & `Delivery & Operations/sop.md` v1.3 > Menang untuk spesifikasi teknis, salinan copy baseline, dan SOP operasional.
3. CONTEXT-DETAIL-V3.md > Menang atas V2 untuk transisi Ship Mode dan Launch-Ready state.
4. CONTEXT-DETAIL-V2.md > Konteks historis fondasi bisnis & Website Builder system.

---

## TABLE OF CONTENTS (DAFTAR ISI)

Pembaruan terbaru per 28 Oktober 2026: Unifikasi hosting ekosistem (*.enlesweb.com) ke Cloudflare Workers dan penonaktifan Vercel (Decision 023). layout-lab telah live di `preview.enlesweb.com` dengan Stateless Compact ID (`/p/<id>`) dan rute studio terlindungi (`/studio-admin/*`) untuk mendukung alur SOP v1.3 pra-DP Langkah 3b (Decision 022 CLOSED). Gerbang Website Builder pada Decision 011 tidak berubah.

1. BERKAS 1: ENLESWEB-CONTEXT-GAPS.md (Gap Register & Decision Register Terkini - 18 Oktober 2026)
   - 0. Source yang Dibandingkan
   - 1. Status Homepage V3: Selesai Diimplementasikan & Lulus QA Penuh (0 Error, 0 Warning)
   - 2. Desain Hero & Navbar: Ambient Wash Menembus Navbar Transparan (Hero Bleed)
   - 3. Affordance Tombol: Engineered Tactile 3D Shelf (Presisi 3px Solid #A3C400, Zero Diffuse Blur)
   - 4. Eyebrow & Anti-Slop: Peniadaan Eyebrow & Larangan Tanda Baca Em Dash (-)
   - 5. Showcase Portofolio: 6 Proyek Konsep Lengkap Mencakup Ketiga Tingkatan Paket
   - 6. Standar Minimum Proyek Demo (Semua Live Publik di Cloudflare Workers dengan Aset Lokal)
   - 7. Strategi Hosting Terpadu: Seluruh Ekosistem di Cloudflare Workers (*.enlesweb.com, Vercel Dinonaktifkan)
   - 8. Status Variabel Bisnis & Register Item CLOSED (WhatsApp, Pixel, Instagram, OG Image, Staging, SOP v1.3, Domain enlesweb.com, PSI 100/100)
   - 9. Posisi Etis Showcase: Contoh Kemampuan Jujur, Bukan Klien Nyata / Testimoni Palsu
   - 10. Status Terkini: Homepage Selesai, Domain enlesweb.com Aktif, & PageSpeed 100/100 (Siap Produksi Cloudflare Workers)
   - 11. REGISTER ITEM MINGGU 0 & STATUS TINDAK LANJUT (SELURUHNYA CLOSED)
   - 12. Prinsip Inferensi & Integritas Dokumen
   - 13. Website Builder & Tooling Internal
   - 14. Context Handoff Rule (Urutan Baca Terkini)
   - 15. Current North Star (Fokus Langkah Menuju Launch)

2. BERKAS 2: ENLESWEB-PROGRESS-DELTA.md (Progress Delta & Handoff Continuity - 18 Oktober 2026)
   - 0. Cara Membaca Dokumen Ini
   - 1. Baseline
   - 2. Perkembangan yang Terjadi Setelah Baseline
   - 3. Homepage V2 ke V3
   - 4. Implementation Review & Polish V3
   - 5. Hero & Navbar Transparan (Perkembangan Terkini)
   - 6. Sistem Tombol Engineered Tactile (Penyempurnaan Anti-Slop)
   - 7. Status Portofolio 6 Proyek Demo Live di Cloudflare Workers
   - 8. Penyelarasan Tipografi Paket Sub-Pixel di Desktop
   - 9. Evaluasi 16 Langkah Flawless Execution (16 dari 16 Selesai - 100% Complete)
   - 10. Hal yang Tidak Berubah (Prinsip Terkunci)
   - 11. Current North Star

3. BERKAS 3: CONTEXT-DETAIL-V3.md (Transisi Ke Launch-Ready Mode & Lock Status V4)
   - 1. Current Project Status (Launch-Ready Mode V4)
   - 2. Source of Truth Terkini (ENLESWEB-DOCS-V4.md)
   - 3. Locked Decisions V4
   - 4. Homepage Design & Implementation Spec
   - 5. Mobile-First Priority (Hasil Review 360px & 390px)
   - 6. Conversion Filter (Clarity -> Honesty -> Trust -> Action)
   - 7. WhatsApp & Meta Pixel Behavior
   - 8. Technical QA Sebelum Launch (Lulus 100%)
   - 9. Halaman Kebijakan Privasi (/kebijakan-privasi) --- SELESAI
   - 10. Single North Star for the Next Step

4. BERKAS 4: CONTEXT-DETAIL-V2.md (Blueprint Strategis, Model Bisnis, & Website Builder System)
   - 1. Tujuan
   - 2. Kondisi Bisnis
   - 3. Model Bisnis (Starter, Business, Growth, Custom)
   - 4. Harga Final Saat Ini
   - 5. Domain dan Hosting (Ketentuan Perpanjangan Tahun ke-2 LOCKED)
   - 6. Package List Final
   - 7. Pembeda Utama Paket
   - 8. Strategi Internal Template / System
   - 9. Jerseay Concept Portfolio
   - 10. Jerseay Anti-AI-Slop Decisions
   - 11. Anti-AI-Slop Philosophy (24 Poin Larangan Visual & Copy)
   - 12. Jerseay Refinement Principles
   - 13. Riset Kompetitor yang Pernah Dilakukan
   - 14. Kompetitor Harga yang Diberikan User
   - 15. Website, Domain, Hosting, Maintenance
   - 16. Hal yang Belum Final (Renewal Domain/Hosting & SOP Operasional TELAH FINAL/LOCKED)
   - 17. Prinsip untuk Session Berikutnya
   - 18. Ringkasan Strategi Bisnis
   - 19. Website Builder --- Current Concept (19.1 - 19.18)
   - 20. Builder Decision Status
   - 21. Current Builder North Star
   - 22. Next Discussion Priority

---

=== BATAS AWAL FILE: ENLESWEB-CONTEXT-GAPS.md ===

### ENLESWEB --- CONTEXT GAPS & DECISION REGISTER
Status implementasi aktual, item terselesaikan, dan register item open terkini
Tanggal: 18 Oktober 2026 (Diperbarui dari 16–17 Oktober 2026, Penutupan Seluruh Tugas Minggu 0 & Decision 020)
Status: Handoff / gap register & launch readiness V4 (Tersinkronisasi Penuh Decision 001–021, SOP v1.2, Seluruh Tugas Minggu 0 CLOSED)
Fungsi: Menangkap seluruh keputusan, status implementasi kode aktual di repositori, memvalidasi item yang telah selesai, dan merumuskan daftar item OPEN yang wajib ditindaklanjuti.

--------------------------------------------------------------------------------

0. SOURCE YANG DIBANDINGKAN
Dokumen ini disusun berdasarkan perbandingan komprehensif antara:
1. ENLESWEB-DOCS-V4.md (PRD.md, CONTENT.md, DESIGN.md, SPEC.md tersinkronisasi 18 Oktober 2026)
2. Konfigurasi bisnis aktual: src/config/site.ts
3. Salinan teks aktual: src/content/copy.ts
4. Implementasi komponen Astro, styles CSS, skrip vanilla JS, dan aset di src/
5. Dokumen Strategi & Operasional (`Business Memory/decision-log.md`, `Delivery & Operations/sop.md` v1.2, `Start Here/summary.md` v1.8, `Strategy/*`) serta hasil konfirmasi langsung dengan pemilik bisnis (/grill-me session 14–18 Oktober 2026).

--------------------------------------------------------------------------------

1. STATUS HOMEPAGE V3: SELESAI DIIMPLEMENTASIKAN & LULUS QA PENUH
Kondisi repositori per 14 Oktober 2026:
- Homepage dibangun menggunakan Astro static (output: 'static'), TypeScript mode strict, CSS custom properties tanpa dependensi UI framework pihak ketiga, dan font self-hosted Poppins.
- Seluruh 9 section (Navbar, Hero, Paket 3 kolom + Custom, Proyek Highlight & Minimize, Proses 5-langkah accordion, Tentang asimetris, Final CTA aksen, Footer 2-tingkat solid ink, Floating WhatsApp sticky button) telah selesai dibangun, teruji di berbagai resolusi layar, dan berfungsi optimal.
- Hasil pengujian: npm run check dan npm run build selesai dengan **0 errors, 0 warnings, 0 hints** (exit code 0).
- Homepage berstatus **Launch-Ready / Siap Rilis Penuh**.

--------------------------------------------------------------------------------

2. DESAIN HERO & NAVBAR: AMBIENT WASH MENEMBUS NAVBAR TRANSPARAN (HERO BLEED)
Keputusan arsitektur visual hero dan navbar (LOCKED):
- Navbar Render Awal: Pada posisi scroll 0px, navbar menggunakan latar transparan (`background-color: transparent`, `border-bottom: 1px solid transparent`) pada `top: 0` (`z-index: 100`).
- Hero Margin Kompensasi: Komponen Hero menerapkan margin-top negatif (`-64px` pada mobile, `-72px` pada desktop) dengan kompensasi padding atas (`scroll-margin-top: 0`), sehingga sapuan pendaran aksen (*ambient gradient sweep*) dari Hero mengalir bebas menembus navbar transparan tanpa sekat pemotong visual.
- Transisi Scroll Sticky: Saat pengguna melakukan scroll lebih dari 8px atau saat menu drawer mobile dibuka (`data-menu-open="true"`), navbar bertransisi mulus (150ms) menjadi latar solid kanvas (`--canvas: #FFFFFF`) dengan garis bawah tipis (`1px solid var(--line)`).

--------------------------------------------------------------------------------

3. AFFORDANCE TOMBOL: ENGINEERED TACTILE 3D SHELF (ANTI-SLOP UPGRADE)
Penyempurnaan tombol aksi WhatsApp dan paket (LOCKED):
- Mengeliminasi difusi blur kotor (*muddy blur*) yang sebelumnya dirasakan kurang rapi (*slop*).
- Default: `box-shadow: 0 3px 0 #A3C400, inset 0 1px 0 rgba(255, 255, 255, 0.6)`. Bottom shelf presisi 3px dengan warna turunan aksen alami tanpa blur abu-abu, ditambah highlight specular 1px di tepi atas untuk kesan fisik *engineered*.
- Hover / Fokus: Pembalikan kontras bersih (*clean ink inversion*) menjadi latar `--ink` (#111111) dengan teks `--accent` (#E4FF30), dan shelf berubah menjadi 3px solid `#000000` (`box-shadow: 0 3px 0 #000000, inset 0 1px 0 rgba(255, 255, 255, 0.15)`).
- Aktif / Ditekan: Depresi fisik 2px (`transform: translateY(2px)`) dengan shelf menipis menjadi 1px (`box-shadow: 0 1px 0 #A3C400, inset 0 1px 0 rgba(255, 255, 255, 0.4)`).

--------------------------------------------------------------------------------

4. EYEBROW & ANTI-SLOP: PENIADAAN EYEBROW & KETIADAAN EM DASH (—)
- Eyebrow tetap ditiadakan di atas headline H1 hero untuk menjaga kebersihan layar pertama bagi audiens dingin Meta Ads.
- Seluruh teks pelanggan di CONTENT.md dan src/content/copy.ts bebas 100% dari karakter em dash (—). Teks menggunakan titik, koma, atau struktur kalimat alami.
- Bebas dari klaim promosi generik ("terbaik", "profesional", "seamless", "cutting-edge").

--------------------------------------------------------------------------------

5. SHOWCASE PORTOFOLIO: 6 PROYEK KONSEP LENGKAP DENGAN PEMETAAN TIER
Risiko jurang ekspektasi (*expectation gap*) yang tercatat di fase sebelumnya telah **RESMI TERSELESAIKAN (RESOLVED)**. Homepage kini menampilkan 6 proyek konsep yang mewakili ketiga tingkatan paket:
1. **Jerseay** (Studio jersey custom): Tingkat Growth, URL: `https://jerseay.enlesweb.com/` (Default Highlighted Stage)
2. **dipotongin** (Studio barbershop): Tingkat Growth, URL: `https://dipotongin.enlesweb.com/`
3. **tuntas** (Bimbel kelompok kecil & privat): Tingkat Business, URL: `https://tuntas.enlesweb.com/`
4. **Seruput Kopi** (Kedai kopi lokal): Tingkat Starter, URL: `https://seruput.enlesweb.com/`
5. **ripeir** (Workshop perbaikan barang): Tingkat Starter, URL: `https://ripeir.enlesweb.com/` (Downgrade dari Growth ke Starter sesuai keputusan pemilik bisnis)
6. **berflower** (Toko bunga dan hadiah): Tingkat Growth, URL: `https://berflower.enlesweb.com/`

Sistem Showcase:
- 1 proyek tampil dalam panggung pameran berasio 16:10 (*highlighted stage*).
- 5 proyek lainnya tampil sebagai kartu ringkas (*minimized cards*) di bawah panggung dengan logo/favicon SVG unik masing-masing.
- Interaksi switcher menukar stage dan kartu secara instan, dilengkapi auto-scroll halus kembali ke stage pada layar smartphone (< 840px).

--------------------------------------------------------------------------------

6. STANDAR MINIMUM PROYEK DEMO (SEMUA LIVE PUBLIK DI CLOUDFLARE WORKERS)
Keenam proyek portofolio konsep telah memenuhi standar kelayakan demo publik:
- Visual selesai, responsif dari layar smartphone hingga desktop.
- Navigasi utama dan interaksi esensial berfungsi.
- Dideploy publik via Cloudflare Workers (*.enlesweb.com) dengan HTTPS aktif (Vercel dinonaktifkan per Decision 023).
- Memiliki aset tangkapan layar WebP lokal dan favicon SVG di `src/assets/projects/`.
- Seluruh 6 tombol proyek di homepage berstatus aktif sebagai `[Lihat Website]` membuka demo live di tab baru (`target="_blank" rel="noopener noreferrer"`).

--------------------------------------------------------------------------------

7. STRATEGI HOSTING TERPADU
- Seluruh ekosistem ENLESWEB (Homepage `enlesweb.com`, 6 proyek demo `*.enlesweb.com`, dan internal composer `preview.enlesweb.com`) kini dihosting terpusat di **Cloudflare Workers**.
- Hosting pihak ketiga lama (Vercel) telah dinonaktifkan secara resmi (Decision 023).
Unifikasi ini mengkonsolidasikan seluruh domain di bawah manajemen DNS Cloudflare yang rapi dan berbiaya Rp0 (tier gratis).

--------------------------------------------------------------------------------

8. STATUS VARIABEL BISNIS & REGISTER ITEM CLOSED (TERKONFIRMASI SELESAI)
Berdasarkan audit repositori dan konfirmasi wawancara /grill-me (14–17 Oktober 2026), seluruh item berikut telah berstatus **CLOSED**:
- **Nomor WhatsApp Bisnis**: `6285156801570` (CLOSED - Terkonfirmasi nomor riil aktif milik bisnis ENLESWEB).
- **Meta Pixel ID**: `1099411523003859` (CLOSED - Terkonfirmasi Pixel ID riil aktif milik bisnis ENLESWEB).
- **Akun Instagram Resmi**: `https://www.instagram.com/enlesweb/` (CLOSED - Terpasang di footer & JSON-LD).
- **Staging Deployment**: Aktif di Cloudflare `workers.dev` (CLOSED - Terkonfirmasi sudah dideploy untuk pengujian internal).
- **Domain Kanonikal & Produksi Deployment**: Domain kanonikal resmi `enlesweb.com` telah dibeli di registrar Domainesia (Rp152.070) dan nameserver/DNS diarahkan ke Cloudflare Workers sebagai domain produksi utama (CLOSED, Decision 018).
- **Pengujian Nyata di HP Fisik & Meta Pixel**: Verifikasi klik tombol WhatsApp dan event di smartphone fisik telah berhasil dilakukan oleh pemilik bisnis (CLOSED).
- **Halaman Kebijakan Privasi**: Selesai dibangun di `src/pages/kebijakan-privasi.astro` dan ditautkan di `footer-bottom` (CLOSED).
- **Open Graph Image**: Berkas fisik `public/og-image.png` (1200x630, 129KB) telah terpasang dan diverifikasi (CLOSED).
- **Favicon & Web Manifest**: `public/favicon.svg` dan favicon proyek lengkap (CLOSED).
- **SEO & Sitemap**: Schema.org JSON-LD `ProfessionalService`, sitemap otomatis `dist/sitemap-index.xml`, dan `public/robots.txt` aktif (CLOSED).
- **CI/CD Pipeline**: `wrangler.json` dan `.github/workflows/deploy.yml` terpasang untuk deployment otomatis ke Cloudflare Workers saat push ke `main` (CLOSED).
- **SOP Operasional Chat WhatsApp & Transaksi Klien (`Delivery & Operations/sop.md` v1.3)**: Resmi terkunci (**CLOSED**, Decision 013–017, Decision 022 & 023) mencakup Template 5.1 s/d 5.9, jembatan ekspektasi demo antar-tier, *default framing* ekstensi `.com`, kuota gratis putaran update konten ringan tahunan (Starter 2x, Business 4x, Growth 6x + reset saat perpanjangan terkelola), waktu pembelian domain pasca-DP 50% + materi dasar lengkap, aturan *On-Hold* 60 hari kalender, transparansi Nama Lengkap Pendiri di Bukti Pemesanan PDF, serta integrasi preview tata letak dummy pra-DP via `preview.enlesweb.com/p/<id>`.
- **Optimasi PageSpeed Insights (Desktop 100/100, Mobile 95/100) & Agentic Browsing 3/3 (100%)**: Selesai diimplementasikan penuh (**CLOSED**, Decision 019) mencakup inlined stylesheet CSS 8.3 KiB, eliminasi forced reflow & late style invalidation via skrip sebaris head js-reveal berpelindung fitur, eliminasi bundle JS `copy.js`, preload seluruh 4 bobot font Poppins (700/600/500/400), isolasi GPU hardware compositing pada SVG blur, inisialisasi IntersectionObserver dan scroll check Navbar dijadwalkan via `requestIdleCallback` (fallback setTimeout 100ms), Meta Pixel Opsi A (pemuatan `fbevents.js` murni ditunda hingga interaksi pertama pengguna tanpa timer otomatis untuk TBT 0ms), penonaktifan SPA fallback Cloudflare Workers, dan penambahan `public/llms.txt` serta `public/_headers`.

--------------------------------------------------------------------------------

9. POSISI ETIS SHOWCASE
Keenam demo portofolio diposisikan secara jujur dan transparan: "Contoh website yang kami buat sendiri. Konsep buatan kami sendiri." Tidak ada klaim testimoni, rating bintang, jumlah klien, atau logo mitra palsu.

--------------------------------------------------------------------------------

10. STATUS TERKINI HOMEPAGE & BUSINESS READINESS
Status ringkas sistem:
- Homepage: Selesai, teruji, 0 errors, 0 warnings.
- Halaman Utilitas: `/kebijakan-privasi` aktif dan memenuhi standar kepatuhan iklan Meta.
- Portofolio: 6 demo live di Cloudflare Workers (*.enlesweb.com, Decision 023), aset WebP dan favicon terintegrasi.
- Produksi / Domain Kanonikal: Domain resmi `enlesweb.com` telah dibeli di Domainesia dan nameserver/DNS diarahkan ke Cloudflare Workers menggantikan staging sementara `workers.dev` (Decision 018).
- Metrik PageSpeed Insights Terverifikasi:
  * Benchmark Desktop (Lighthouse Desktop terverifikasi): Performance 100/100, Accessibility 100, Best Practices 100, SEO 100, Agentic Browsing 3/3 (100%) (TBT 0 ms, FCP 0.3 s, LCP 0.6 s, CLS 0.007, Speed Index 0.9 s).
  * Benchmark Mobile (PageSpeed Insights remote via web.dev live URL `enlesweb.com`, Moto G Power / Slow 4G): Performance 95/100, Accessibility 100, Best Practices 100, SEO 100, Agentic Browsing 3/3 (100%) (FCP 1.0 s, LCP 1.1 s, CLS 0, Speed Index 3.8 s, TBT ~220 ms dipengaruhi skrip deteksi bot Cloudflare `cdn-cgi/challenge-platform/h/b/scripts/jsd/...` pada bot runner headless tanpa interaksi pengguna riil).
- Pelacakan Event Meta Pixel:
  * `PageView` otomatis pada load halaman (antrean stub instan).
  * Klik WhatsApp (9 lokasi) dipetakan ke event standar resmi **`AddToCart`** lengkap dengan parameter nilai paket (`value: 450000`, `currency: 'IDR'`).
  * Rincian paket, switcher portofolio, dan timeline proses dipetakan ke event standar resmi **`ViewContent`**.
  * 100% bebas dari bypass memori SDK demi menjaga akun Meta aman dari suspend.

--------------------------------------------------------------------------------

11. REGISTER ITEM MINGGU 0 & STATUS TINDAK LANJUT (SELURUHNYA CLOSED)
Seluruh tugas persiapan pra-peluncuran Minggu 0 telah berstatus **CLOSED (100% SELESAI)** menjelang kampanye iklan berbayar Meta Ads Minggu 1:

| No | Item | Kategori | Status Saat Ini | Tindak Lanjut & Rekomendasi |
|---|---|---|---|---|
| 1 | **Pembelian Domain enlesweb.com** | Infrastruktur / Bisnis | **CLOSED** (Domain sudah dibeli) | Domain kanonikal `enlesweb.com` resmi dibeli di Domainesia dan nameserver/DNS diarahkan ke Cloudflare Workers (Decision 018). Target kanonikal `siteUrl: 'https://enlesweb.com'` aktif. |
| 2 | **Kesiapan Materi Iklan Meta** | Pemasaran / Konten | **CLOSED / SIAP TAYANG** (Aset di `campaign-1/`) | Aset materi kreatif iklan Meta telah selesai di-render di direktori `campaign-1/`: Iklan A video 15s rasio 4:5 dan 9:16 (`copy-iklan-a.md`) serta Iklan B gambar statis v3 Whole ENLESWEB rasio 4:5 dan 9:16 (`copy-iklan-b.md`), berlabel tier & harga serta diawali *problem-aware hook* (Decision 016 & Decision 020). Siap diunggah ke Meta Ads Manager. |
| 3 | **Template PDF Bukti Pemesanan** | Operasional Bisnis | **CLOSED** (Selesai dibuat oleh pendiri bisnis) | Template formal PDF Bukti Pemesanan ber-TTD digital telah resmi dibuat oleh pendiri bisnis, memuat Nama Lengkap Pendiri (sama persis dengan rekening bank pribadi penerima) sebagai Penanggung Jawab Resmi Studio ENLESWEB, kuota update konten ringan tahunan (2x/4x/6x), waktu pembelian domain pasca-DP + materi lengkap, dan aturan On-Hold 60 hari kalender (Decision 017 & Decision 020). |
| 4 | **Optimasi PageSpeed Insights & Agentic Browsing** | Teknis / Performa | **CLOSED** (Desktop 100/100 TBT 0ms, Mobile 95/100, Agentic 3/3) | Audit PSI terselesaikan penuh: inline CSS 8.3 KiB, eliminasi forced reflow & late style invalidation via inline script js-reveal berpelindung fitur di head setelah font preloads, eliminasi bundle copy.js, preload 4 bobot font Poppins (700/600/500/400), IntersectionObserver & navbar scroll check diisolasi ke requestIdleCallback (fallback setTimeout 100ms), Meta Pixel murni pada interaksi pertama pengguna (tanpa timeout), isolasi hardware compositing GPU, eliminasi SPA fallback di Cloudflare Workers, dan penambahan llms.txt serta _headers immutable cache (Decision 019). Verifikasi benchmark Desktop menghasilkan Skor 100/100 (TBT 0ms, FCP 0.3s, LCP 0.6s) dan Mobile remote web.dev 95/100. |

--------------------------------------------------------------------------------

12. PRINSIP INFERENSI & INTEGRITAS DOKUMEN
- Dilarang mengarang testimoni, jumlah klien, atau klaim pasar tanpa bukti.
- Seluruh spesifikasi teknis dan salinan teks harus mengacu kepada dokumen master `ENLESWEB-DOCS-V4.md`.

--------------------------------------------------------------------------------

13. WEBSITE BUILDER & TOOLING INTERNAL
- Website Builder (SaaS / internal engine generator) tetap berada pada pipeline jangka menengah setelah homepage beroperasi dan 10 klien pertama selesai.
- Tooling render materi iklan di `campaign-1/` siap menghasilkan berkas video 15s dan gambar statis adaptif 4:5/9:16 untuk penayangan iklan Meta Ads.

--------------------------------------------------------------------------------

14. CONTEXT HANDOFF RULE (URUTAN BACA TERKINI)
Jika sesi pengembangan dilanjutkan oleh Agent atau sesi baru, urutan membaca wajib adalah:
1. **ENLESWEB-DOCS-V4.md** (Dokumentasi Spesifikasi Utuh As-Is: PRD, CONTENT, DESIGN, SPEC V4)
2. **ENLESWEB-CONTEXT-PROGRESS-HISTORY.md** (Histori Konteks, Progress Delta, & Gap Register Terkini)
3. **AGENTS.md** (Tata Kelola Operasional & Anti-Slop Master Protocol)

--------------------------------------------------------------------------------

15. CURRENT NORTH STAR
Seluruh tugas persiapan pra-peluncuran Minggu 0 telah selesai (100% CLOSED).
Urutan langkah konkret menuju peluncuran komersial penuh (Beralih ke Minggu 1):
1. [CLOSED] Domain resmi `enlesweb.com` telah dibeli di Domainesia dan nameserver diarahkan ke Cloudflare Workers (Decision 018).
2. [CLOSED] Materi kreatif iklan Meta kampanye 1 selesai di-render di `campaign-1/`: 1 Video (Iklan A 15s) dan 1 Gambar Statis (Iklan B v3 Whole ENLESWEB) rasio 4:5 dan 9:16 siap tayang, format Carousel 4 slide dibatalkan (Decision 016, 020, & 021).
3. [CLOSED] Template PDF Bukti Pemesanan ber-TTD digital selesai dibuat oleh pendiri bisnis (Decision 017 & Decision 020).
4. [FOKUS AKTIF MINGGU 1] Unggah materi kampanye ke Meta Ads Manager, jalankan tes iklan berbayar Meta Ads Minggu 1 (Rp100.000 selama 7 hari), dan jalankan eksperimen Micro-Warm Outreach manual via DM Instagram `@enlesweb` (maksimal 2–3 pemilik usaha/hari, dicatat terpisah).

=== BATAS AKHIR FILE: ENLESWEB-CONTEXT-GAPS.md ===

---

=== BATAS AWAL FILE: ENLESWEB-PROGRESS-DELTA.md ===

### ENLESWEB --- PROGRESS DELTA
Dari Baseline awal hingga Status Launch-Ready V4
Tanggal: 18 Oktober 2026 (Diperbarui dari 16–17 Oktober 2026)
Status: Handoff / continuity document & launch-ready validation V4 (Tersinkronisasi Penuh Decision 001–021, SOP v1.2, Seluruh Tugas Minggu 0 CLOSED)
Fungsi: Mendokumentasikan seluruh lompatan evolusi dan perkembangan aktual yang telah diimplementasikan dalam kode riil repositori dan tata kelola operasional.

--------------------------------------------------------------------------------

0. CARA MEMBACA DOKUMEN INI
Dokumen ini mencatat apa yang terjadi setelah baseline dokumentasi awal, evolusi dari V2 ke V3, hingga seluruh implementasi teknis dan SOP operasional diselesaikan dan diverifikasi per 14–16 Oktober 2026.
Prinsip: Dokumen ini mencatat delta yang benar-benar telah diterapkan ke dalam repositori git pada branch `main`.

--------------------------------------------------------------------------------

1. BASELINE AWAL
Baseline awal mendefinisikan homepage satu halaman: target audiens UMKM/bisnis lokal, positioning tanpa menjual teknologi, 4 struktur penawaran (Starter, Business, Growth, Custom), penawaran domain dan hosting 1 tahun, copywriting jujur tanpa testimoni palsu, integrasi WhatsApp sebagai jalur konversi tunggal, dan Meta Pixel tracking.

--------------------------------------------------------------------------------

2. PERKEMBANGAN YANG TERJADI SETELAH BASELINE
- Perumusan filosofi Anti-AI-Slop (24 poin larangan visual & copy hygiene).
- Penegasan status Jerseay sebagai concept portfolio untuk membuktikan kapabilitas tingkat Growth, bukan klien nyata.
- Perancangan fondasi Website Builder internal untuk efisiensi produksi di masa depan.

--------------------------------------------------------------------------------

3. HOMEPAGE V2 KE V3 (DELTA KEPUTUSAN UTAMA)
Evolusi penting yang diterapkan pada V3 (14–17 Oktober 2026):
1. **Showcase 6 Proyek Portofolio Konsep Lengkap**: Dari yang sebelumnya hanya 3 proyek (Jerseay, berflower, ripeir), kini diperluas menjadi 6 proyek (Jerseay, dipotongin, tuntas, Seruput Kopi, ripeir, berflower). Menjawab langsung kekhawatiran jurang ekspektasi (*expectation gap*) dengan menyediakan contoh konkret untuk Starter, Business, dan Growth. Ripeir resmi disesuaikan menjadi tingkat Starter.
2. **Navbar Transparan & Ambient Bleed Hero**: Navbar dibuat transparan pada kondisi scroll 0px, memungkinkan sapuan pendaran aksen (*ambient gradient sweep*) dari Hero mengalir menembus navbar secara mulus. Navbar bertransisi otomatis ke solid kanvas (`--canvas`) saat di-scroll > 8px atau saat menu drawer dibuka.
3. **Engineered Tactile Button Affordance**: Mengganti bayangan 3D 4px blur yang dirasakan kurang rapi (*slop*) dengan sistem tactile presisi: shelf 3px solid `#A3C400`, inset specular highlight 1px (`rgba(255, 255, 255, 0.6)`), clean ink inversion pada hover/fokus, dan depresi fisik 2px saat ditekan.
4. **Penyelarasan Sub-Pixel Paket Desktop**: Sinkronisasi ketinggian area deskripsi (96px), slot catatan peluncuran (54.4px), dan baris fitur inti ke-2 (48px) agar seluruh baris fitur dan tombol CTA sejajar horizontal sempurna di ketiga kolom.
5. **Konsolidasi Dokumentasi V3**: Pembaruan menyeluruh pada PRD.md, CONTENT.md, DESIGN.md, SPEC.md, serta pembentukan berkas master `ENLESWEB-DOCS-V3.md` menggantikan `ENLESWEB-DOCS-V2.md`.
6. **Sinkronisasi Keputusan Domain Registrant & Skema Renewal (15 Oktober 2026 - Decision 002)**: Penyelarasan menyeluruh klausul domain registrant tahun pertama atas nama ENLESWEB demi menghilangkan friksi administrasi awal, skema perpanjangan tahun kedua flat Rp400rb/thn (.com/.id) atau Rp300rb/thn (ekstensi lainnya), opsi mandiri cuma-cuma tanpa vendor lock-in (transfer EPP + arsip build dist.zip), serta reorientasi klaim positioning utama ke "Kepastian dan Kemudahan".
7. **Penguncian SOP Operasional v1.2 CLOSED & Decision 013–017 (16 Oktober 2026)**: Penutupan status SOP chat WhatsApp (`Delivery & Operations/sop.md` v1.2 CLOSED), penambahan kuota gratis putaran update konten ringan tahunan (Starter 2x, Business 4x, Growth 6x + reset saat perpanjangan terkelola), penundaan kenaikan biaya AI tools di Rp100rb/bln hingga 5 klien lunas & *default framing* `.com`, jalur eksperimen Micro-Warm Outreach manual via DM IG `@enlesweb` (Rp0, 2–3 usaha/hari), struktur iklan Carousel 4 slide berlabel tier & harga + *problem-aware hook*, serta perlindungan arus kas pembelian domain pasca-DP + materi lengkap dan aturan *On-Hold* 60 hari kalender.
8. **Pencatatan Pembelian Domain Resmi enlesweb.com CLOSED & Decision 018 (17 Oktober 2026)**: Pencatatan resmi pembelian domain kanonikal `enlesweb.com` di Domainesia (Rp152.070, CLOSED), penutupan Tugas 1 Minggu 0 menjadi CLOSED / SELESAI, migrasi target rilis dari staging Cloudflare `workers.dev` ke domain produksi `enlesweb.com`, dan pembaruan sisa fokus Minggu 0 menjadi 2 tugas eksekusi murni (materi iklan Carousel 4 slide dan draf template PDF Bukti Pemesanan).
9. **Optimasi PageSpeed Insights (Desktop 100/100, Mobile 95/100) & Agentic Browsing 3/3 (17 Oktober 2026 - Decision 019)**: Berdasarkan audit riil pagespeed.web.dev pada domain live `enlesweb.com`, seluruh bottleneck performa diselesaikan secara sistemik: (1) inline 100% stylesheet CSS (8.3 KiB) via `astro.config.mjs` untuk menghemat 1.110 ms render-blocking; (2) preload seluruh 4 bobot font Poppins (700, 600, 500, 400) di `<head>` untuk mengeliminasi layout shift desktop dan element render delay hero; (3) skrip sebaris head js-reveal berpelindung fitur di `<head>` sebelum body parse untuk mencegah pembatalan cache style dan forced reflow 112ms pada thread utama desktop; (4) penjadwalan IntersectionObserver dan scroll check Navbar via `requestIdleCallback` (fallback setTimeout 100ms) tanpa synchronous layout thrashing `getBoundingClientRect()`; (5) isolasi layer GPU hardware compositing (`contain: paint; will-change: transform; transform: translateZ(0);`) pada SVG blur dan penambahan `loading="eager"` pada brand logo; (6) eliminasi client bundle `copy.js` (3.7 KiB) dengan menyematkan atribut HTML `data-label-*` di server; (7) Meta Pixel Opsi A: inisialisasi stub antrean `fbq` instan di `<head>` tanpa menunda klik WhatsApp, dengan deferred loading `fbevents.js` (153 KiB) murni pada interaksi pertama pengguna tanpa timer otomatis 3.5s (TBT desktop 0 ms); (8) penonaktifan Cloudflare Web Analytics RUM beacon di Cloudflare Dashboard; (9) penonaktifan SPA fallback di `wrangler.json` agar URL 404 mengembalikan HTTP 404 asli; (10) penyediaan `public/llms.txt` standar AI agent discoverability (skor Agentic Browsing 3/3 100%); dan (11) penyediaan `public/_headers` untuk caching 1 tahun aset statis immutable Cloudflare Workers. Hasil verifikasi benchmark riil: Desktop 100/100 (TBT 0ms, FCP 0.3s, LCP 0.6s, CLS 0.007, Speed Index 0.9s) dan Mobile remote web.dev 95/100 (FCP 1.0s, LCP 1.1s, CLS 0, Speed Index 3.8s, TBT ~220ms dipengaruhi skrip tantangan deteksi bot Cloudflare pada bot runner headless).
10. **Penyelesaian Template PDF Bukti Pemesanan CLOSED, Kesiapan Materi Iklan Meta, dan Penutupan Seluruh Tugas Minggu 0 (18 Oktober 2026 - Decision 020)**: Penutupan resmi seluruh 3 tugas eksekusi murni persiapan pra-peluncuran Minggu 0 (100% CLOSED): (1) Domain kanonikal `enlesweb.com` telah dibeli di Domainesia (Rp152.070, Decision 018); (2) Materi iklan Meta kampanye 1 di direktori `campaign-1/` selesai di-render (Iklan A video 15 detik rasio 4:5 dan 9:16 dengan dokumen salinan `copy-iklan-a.md`, serta Iklan B gambar statis v3 Whole ENLESWEB rasio 4:5 dan 9:16 dengan dokumen salinan `copy-iklan-b.md` berlabel tier & harga + hook masalah, Decision 016/020); (3) Template PDF Bukti Pemesanan ber-TTD digital resmi selesai dibuat oleh pendiri bisnis (CLOSED, Decision 020), memuat Nama Lengkap Pendiri sesuai rekening bank pribadi sebagai Penanggung Jawab Resmi Studio ENLESWEB, kuota update konten ringan tahunan (Starter 2x, Business 4x, Growth 6x), aturan On-Hold 60 hari kalender, dan ketentuan pembelian domain setelah DP 50% + materi dasar lengkap; serta (4) Peningkatan dokumentasi utama master ke `ENLESWEB-DOCS-V4.md`. Ekosistem beralih penuh menuju pelaksanaan Minggu 1: Penayangan kampanye Meta Ads tes Rp100.000 selama 7 hari dan Micro-Warm Outreach manual via DM Instagram `@enlesweb`.
11. **Pembatalan Format Carousel 4 Slide & Penetapan 1 Video + 1 Gambar Statis Meta Ads Rasio 4:5 dan 9:16 (18 Oktober 2026 - Decision 021)**: Membatalkan format iklan Carousel 4 slide demi mengatasi risiko pemotongan visual sembarangan oleh antarmuka Meta serta memaksimalkan dampak instan demonstrasi produk; menetapkan 1 Video (Iklan A 15s) dan 1 Gambar Statis (Iklan B v3 Whole ENLESWEB) masing-masing dalam rasio 4:5 Feed dan 9:16 Stories/Reels sebagai materi resmi kampanye 1 di `campaign-1/`. Seluruh dokumentasi disinkronkan secara konsisten.

--------------------------------------------------------------------------------

4. IMPLEMENTATION REVIEW & POLISH V3 (SELESAI)
Homepage telah selesai diimplementasikan menggunakan arsitektur Astro static murni, TypeScript strict, CSS custom properties tanpa framework UI pihak ketiga, dan font self-hosted Poppins. Seluruh 9 section berhasil direview secara visual dan fungsional dengan skor build sempurna (0 error, 0 warning).

--------------------------------------------------------------------------------

5. HERO & NAVBAR TRANSPARAN (PERKEMBANGAN TERKINI)
Hero dan Navbar telah selesai diintegrasikan:
- Desktop: Teks foreground di tengah berlatar komposisi SVG terpadu (HeroObject.astro) yang menampilkan jendela browser wireframe arsitektural, kartu domain, kartu server hosting, dan puzzle modular taktil ENLESWEB dengan depth-of-field blur bertingkat.
- Mobile: Objek modular disembunyikan dan digantikan sapuan aksen gradien abstrak diagonal (*ambient gradient sweep*) halus dari sudut headline ke section Paket.
- Pendaran hero mengalir menembus navbar transparan berkat margin-top negatif (`-64px` mobile, `-72px` desktop) dan padding kompensasi.

--------------------------------------------------------------------------------

6. SISTEM TOMBOL ENGINEERED TACTILE (PENYEMPURNAAN ANTI-SLOP)
- Tanpa garis tepi (`border: none`).
- Shelf bawah 3px solid `#A3C400` dengan warna turunan aksen alami tanpa difusi kotor.
- Inset specular highlight 1px di sisi atas tombol untuk kesan fisik teruji.
- Inversi kontras tajam pada hover/fokus: latar `--ink`, teks `--accent`, shelf `#000000`.
- Depresi fisik 2px (`transform: translateY(2px)`) saat ditekan.

--------------------------------------------------------------------------------

7. STATUS PORTOFOLIO 6 PROYEK DEMO LIVE DI CLOUDFLARE WORKERS
1. **Jerseay** (Studio jersey custom - Growth): `https://jerseay.enlesweb.com/`
2. **dipotongin** (Studio barbershop - Growth): `https://dipotongin.enlesweb.com/`
3. **tuntas** (Bimbel kelompok kecil & privat - Business): `https://tuntas.enlesweb.com/`
4. **Seruput Kopi** (Kedai kopi lokal - Starter): `https://seruput.enlesweb.com/`
5. **ripeir** (Workshop perbaikan barang - Starter): `https://ripeir.enlesweb.com/`
6. **berflower** (Toko bunga dan hadiah - Growth): `https://berflower.enlesweb.com/`

Aset tangkapan layar WebP dan favicon vektor dari masing-masing konsep proyek telah tersimpan lokal di `src/assets/projects/`. (Hosting lama di Vercel telah resmi dinonaktifkan per Decision 023).

--------------------------------------------------------------------------------

8. PENYELARASAN TIPOGRAFI PAKET SUB-PIXEL DI DESKTOP
Pada layar >= 1024px:
- Area deskripsi: `min-height: 96px`.
- Slot catatan peluncuran (`.package-launch-slot`): `min-height: 54.4px` di ketiga kolom.
- Fitur inti baris ke-2: `min-height: 48px`.
Hasil: Tombol toggle dropdown dan tombol CTA sejajar presisi secara horizontal.

--------------------------------------------------------------------------------

9. EVALUASI 16 LANGKAH FLAWLESS EXECUTION (16 DARI 16 SELESAI - 100% COMPLETE)
1. Selesaikan Jerseay: SELESAI.
2. Responsive QA Jerseay: SELESAI.
3. Deploy Jerseay ke Cloudflare Workers (jerseay.enlesweb.com, Vercel dinonaktifkan): SELESAI.
4. Ambil screenshot Jerseay: SELESAI.
5. Lock Jerseay: SELESAI.
6. Selesaikan proyek berflower & ripeir: SELESAI.
7. Responsive QA berflower & ripeir: SELESAI.
8. Deploy berflower & ripeir ke Cloudflare Workers (*.enlesweb.com, Vercel dinonaktifkan): SELESAI.
9. Ambil screenshot berflower & ripeir: SELESAI.
10. Lock berflower & ripeir: SELESAI.
11. Tambahkan 3 proyek baru (dipotongin, tuntas, seruput kopi), deploy Cloudflare Workers (*.enlesweb.com), screenshot, lock: SELESAI.
12. Update project section ENLESWEB (6 proyek): SELESAI.
13. Final responsive QA homepage (360px - 1440px): SELESAI.
14. Final technical/conversion QA & PSI Performance Optimization: SELESAI (0 error, 0 warning, Desktop 100/100 TBT 0ms, Mobile remote web.dev 95/100, Agentic Browsing 3/3 [100%], Decision 019).
15. Lengkapi konfigurasi variabel riil & kepatuhan (Nomor WA, Pixel ID, Instagram, OG image, halaman Kebijakan Privasi, staging Cloudflare workers.dev, verifikasi fisik HP, serta SOP operasional WhatsApp v1.3 CLOSED): SELESAI.
16. Launch produksi (Beli domain enlesweb.com & hubungkan ke Cloudflare Workers, unifikasi 6 subdomain *.enlesweb.com, dan nonaktifkan Vercel): SELESAI / CLOSED (Domain kanonikal enlesweb.com telah dibeli di Domainesia, Decision 018 & Decision 023).

--------------------------------------------------------------------------------

10. HAL YANG TIDAK BERUBAH (PRINSIP TERKUNCI)
Keputusan inti tetap LOCKED: satu halaman homepage, WhatsApp sebagai jalur konversi tunggal, harga mulai Rp450.000, domain dan hosting 1 tahun di tiga paket inti, Custom terpisah, tanpa klaim palsu/testimoni karangan, mobile-first, Poppins self-hosted, antislop visual dan copy hygiene.

--------------------------------------------------------------------------------

11. CURRENT NORTH STAR
Homepage, keenam aset demo proyek di Cloudflare Workers, domain kanonikal resmi enlesweb.com (CLOSED), SOP operasional WhatsApp (`Delivery & Operations/sop.md` v1.3 CLOSED), materi kreatif iklan Meta campaign-1 (CLOSED), template PDF Bukti Pemesanan ber-TTD digital (CLOSED, Decision 020), dan composer layout-lab di `preview.enlesweb.com` (CLOSED, Decision 022 & 023) telah selesai dan aktif.
North Star Minggu 0 (100% CLOSED) -> **Beralih ke Minggu 1: Jalankan kampanye iklan berbayar Meta Ads Minggu 1 (Rp100.000 selama 7 hari) + Micro-Warm Outreach manual via DM Instagram @enlesweb.**

--------------------------------------------------------------------------------

12. PROGRESS & KEPUTUSAN PENGGUNAAN layout-lab (28 OKTOBER 2026, DECISION 022 CLOSED & DECISION 023)

- layout-lab telah resmi di-deploy dan live di Cloudflare Workers dengan subdomain kanonikal `https://preview.enlesweb.com/`.
- Composer memuat 43 varian dari 13 kategori dengan standardisasi visual (kesetaraan tier S1-S4 & B1-B3, footer F4 bersih tanpa kartu ganda, eliminasi orphan card G1/G2/U1, dsb.).
- Format URL preview klien menggunakan **Stateless Compact ID** (`https://preview.enlesweb.com/p/<id>`) berbasis Base62 + salt + checksum (`src/utils/recipe-codec.ts`), menggantikan query param lama `/pratinjau?s=...`.
- Pengamanan rute studio internal (`src/worker.ts`): seluruh alat editor dilindungi di bawah rute `/studio-admin/*` (`/studio-admin/`, `/studio-admin/galeri`, `/studio-admin/uji`, `/studio-admin/legal`), sedangkan rute root `/` dan `/pratinjau` sengaja merespons 404 Not Found demi keamanan.
- Preview `/p/<id>` terkunci pada Light Theme secara default, menyaring navbar/footer dinamis sesuai section aktif, dan mengalihkan tombol CTA jika section CTA ditiadakan.
- Kualitas sistem terverifikasi: `astro check` pada 70 berkas menghasilkan 0 error/warning/hint, 42 assertion lulus 100%, dan 86 Playwright visual snapshot lulus uji.
- Alur operasional pra-DP Langkah 3b di SOP WhatsApp (`Delivery & Operations/sop.md` v1.3) resmi diaktifkan (**Decision 022 CLOSED**).
- Lab memakai data dummy, bukan draf proyek klien, tidak memulai pengerjaan proyek, dan tidak mengubah aturan pembatalan/refund. Preview pengerjaan resmi pasca-DP tetap menggunakan materi asli klien.
- Lab tidak menghasilkan website produksi atau blueprint JSON dan bukan Website Builder pada Decision 011. Gerbang Website Builder tetap setelah klien ke-10 go live, selesai, tayang, dan lunas.
- Rujukan keputusan: [Decision 022](Business%20Memory/decision-log.md#decision-022) & [Decision 023](Business%20Memory/decision-log.md#decision-023).

--------------------------------------------------------------------------------

13. CHECKPOINT AWAL MINGGU 1: META ADS (21 OKTOBER 2026)

- Iklan mulai tayang pada 21 Oktober pukul 09.00.
- Setelah 12 jam, belanja dua iklan tercatat Rp16.000. Sekitar 70% belanja terserap iklan video.
- Satu percakapan pesan tercatat dari iklan. Isi dan kualifikasinya belum diketahui, jadi belum dihitung sebagai chat valid yang menanyakan paket atau kebutuhan website.
- Micro-Warm Outreach DM IG belum dimulai. Belum ada DP, pilihan domain yang tercatat, atau proyek nyata.
- Tes berjalan sampai 27 Oktober. Evaluasi Jalur A/B/C tetap pada 28 Oktober; checkpoint ini belum menentukan jalur atau anggaran lanjutan.
- Rincian berjalan dicatat di [Business Memory/weekly-review.md](Business%20Memory/weekly-review.md) dan [Business Memory/kpi.md](Business%20Memory/kpi.md).

=== BATAS AKHIR FILE: ENLESWEB-PROGRESS-DELTA.md ===

---

=== BATAS AWAL FILE: CONTEXT-DETAIL-V3.md ===

### CONTEXT-DETAIL-V3.md
Handoff context untuk session berikutnya.
Status: Launch-Ready Mode V4 (Tersinkronisasi Penuh Decision 001–021, SOP v1.2, Seluruh Tugas Minggu 0 CLOSED - 18 Oktober 2026)
Penting: Dokumen ini adalah delta dari CONTEXT-DETAIL-V2.md, bukan pengganti isi V2.

--------------------------------------------------------------------------------

1. CURRENT PROJECT STATUS
ENLESWEB berada dalam **Launch-Ready Mode V4**.
- Seluruh kode homepage telah teruji dan domain resmi `enlesweb.com` telah dibeli di Domainesia dan nameserver/DNS diarahkan ke Cloudflare Workers (Decision 018).
- Seluruh 6 proyek demo live di Cloudflare Workers (*.enlesweb.com, Decision 023).
- Nomor WhatsApp dan Meta Pixel ID telah dikonfirmasi riil dan aktif.
- Halaman Kebijakan Privasi (`/kebijakan-privasi`) telah selesai dibangun dan ditautkan di bar bawah footer (CLOSED).
- Pengujian nyata klik tombol WhatsApp dan event Meta Pixel di HP fisik telah berhasil diverifikasi (CLOSED).
- SOP Operasional Chat WhatsApp & Transaksi Klien (`Delivery & Operations/sop.md` v1.3) telah resmi dikunci (**CLOSED**, Decision 013–017, Decision 022 & 023).
- Domain resmi `enlesweb.com` telah resmi dibeli (**CLOSED**, Decision 018).
- Optimasi PageSpeed Insights (Desktop 100/100, Mobile 95/100) & Agentic Browsing 3/3 (100%) telah selesai diimplementasikan (**CLOSED**, Decision 019: inlined 100% CSS 8.3 KiB, eliminasi forced reflow & late style invalidation via skrip head js-reveal berpelindung fitur, eliminasi bundle `copy.js`, preload 4 bobot font Poppins 700/600/500/400, progressive scroll reveal langsung dengan penjadwalan `requestIdleCallback`, isolasi GPU hardware compositing pada SVG blur, loading eager brand logo, Meta Pixel Opsi A deferred load `fbevents.js` murni berbasis interaksi pertama tanpa timer otomatis untuk TBT 0ms, penonaktifan SPA fallback Cloudflare Workers, dan penambahan `public/llms.txt` serta `public/_headers`).
- Materi iklan Meta kampanye 1 di `campaign-1/` (Iklan A video 15s dan Iklan B gambar statis v3) telah selesai di-render (**CLOSED / SIAP TAYANG**, Decision 016 & Decision 020).
- Template PDF Bukti Pemesanan ber-TTD digital dengan Nama Lengkap Pendiri sesuai rekening bank pribadi telah selesai dibuat oleh pendiri bisnis (**CLOSED**, Decision 017 & Decision 020).
- Seluruh 3 tugas eksekusi murni Minggu 0 telah selesai 100% (CLOSED). Fokus berpindah ke penayangan kampanye Meta Ads Minggu 1 dan Micro-Warm Outreach DM IG.

--------------------------------------------------------------------------------

2. SOURCE OF TRUTH TERKINI
- **ENLESWEB-DOCS-V4.md** adalah sumber kebenaran tunggal untuk spesifikasi teknis, desain, dan salinan teks pelanggan.
- **src/content/copy.ts** adalah sumber salinan teks di kode.
- **src/config/site.ts** adalah pusat konfigurasi variabel bisnis.
- **Delivery & Operations/sop.md (v1.3)** & **Business Memory/decision-log.md (Decision 001–023)** adalah sumber kebenaran operasional dan keputusan bisnis.

--------------------------------------------------------------------------------

3. LOCKED DECISIONS V4 (Tersinkronisasi Decision 001–023)
- Hero: website untuk bisnis, domain dan hosting 1 tahun, mulai Rp450.000, CTA utama WhatsApp, CTA sekunder ke paket. Margin-top negatif untuk ambient wash bleed menembus navbar transparan.
- Package: 3 kolom sejajar di desktop dengan penyesuaian baris sub-pixel, Starter harga peluncuran 10 klien pertama, Custom terpisah di bawah.
- Project: 6 proyek konsep (Starter: Seruput & ripeir, Business: tuntas, Growth: Jerseay, dipotongin, berflower), live di Cloudflare Workers (*.enlesweb.com, Decision 023; Vercel dinonaktifkan).
- Button: Engineered Tactile 3px bottom shelf (#A3C400), inset specular highlight 1px, ink inversion pada hover, depresi 2px saat ditekan.
- Process: 5 langkah accordion vertikal.
- Business value: Konkret tanpa klaim palsu.
- Renewal & Registrant Domain (Decision 002): Akun registrar & registrant tahun 1 atas nama ENLESWEB; tahun 2 klien bebas memilih perpanjangan terkelola flat all package (Rp400rb/thn .com/.id atau Rp300rb/thn lainnya) atau opsi mandiri (transfer kode EPP + arsip build zip dist/) tanpa vendor lock-in.
- Operasional, Akuisisi, & Retensi (Decision 013–017):
  * Jalur eksperimen Micro-Warm Outreach manual (Rp0) maksimal 2–3 pemilik usaha/hari khusus via DM Instagram `@enlesweb` (dicatat terpisah dari metrik Meta Ads Minggu 1); urutan prioritas demo: #1 `tuntas` (Business Rp750rb), #2 `Jerseay` (Growth Rp1,2jt), #3 `ripeir` (Starter Rp450rb).
  * Biaya langganan AI tools dikunci Rp100.000/bulan hingga minimal 5 klien lunas 100% atau 2 proyek Growth/Custom simultan; skrip SOP WhatsApp menerapkan *default framing* ekstensi `.com`.
  * Kuota gratis putaran update konten ringan tahunan di tahun pertama (Starter 2x, Business 4x, Growth 6x; selebihnya Rp50.000/putaran, SLA 1–2 hari kerja) yang otomatis di-reset setiap tahun saat klien memilih Perpanjangan Terkelola.
  * Struktur iklan berlabel tingkatan paket & harga eksplisit serta *problem-aware hook* di kalimat pertama iklan/DM (tanpa mengubah copy homepage).
  * Transparansi Nama Lengkap Pendiri di Bukti Pemesanan PDF (sama persis dengan rekening bank penerima), pembelian domain dilakukan setelah DP 50% + materi dasar lengkap, dan keterlambatan materi >7 hari dialihkan ke status *On-Hold* hingga 60 hari kalender sejak tanggal DP.
- Domain Resmi & Infrastruktur Produksi (Decision 018): Domain kanonikal `enlesweb.com` telah resmi dibeli di Domainesia (Rp152.070, Tugas 1 Minggu 0 CLOSED / SELESAI) dan nameserver/DNS diarahkan ke Cloudflare Workers sebagai domain produksi kanonikal (`siteUrl: 'https://enlesweb.com'`) menggantikan staging sementara `workers.dev`.
- Performa & Agentic Browsing (Decision 019): CSS 100% inlined (0 request CSS render-blocking), 4 bobot font Poppins (700, 600, 500, 400) preloaded di `<head>`, scroll reveal viewport-aware dengan skrip head js-reveal dan penjadwalan `requestIdleCallback` tanpa blocking hero LCP (~0.3–0.6s desktop, ~1.0–1.1s mobile), client JS murni 0 KiB `copy.js`, scroll listener Navbar tanpa forced reflow via `requestIdleCallback`, Meta Pixel Opsi A (stub antrean instan + deferred script 153 KiB murni interaksi), routing non-SPA di `wrangler.json`, `public/llms.txt` mematuhi standar Agentic Browsing (3/3 100%), serta `public/_headers` cache immutable 1 tahun di Cloudflare Workers.
- Penyelesaian Template PDF Bukti Pemesanan, Kesiapan Materi Iklan Meta, & Penutupan Seluruh Tugas Minggu 0 (Decision 020): Pendiri bisnis telah menyelesaikan pembuatan dokumen formal template PDF Bukti Pemesanan ber-TTD digital sesuai ketentuan SOP v1.2 dan Decision 017 (mencantumkan Nama Lengkap Pendiri sesuai rekening bank pribadi sebagai Penanggung Jawab Resmi Studio ENLESWEB, kuota update konten ringan tahunan 2x/4x/6x, ketentuan pembelian domain pasca-DP + materi lengkap, dan aturan On-Hold 60 hari kalender); materi kreatif iklan Meta kampanye 1 di direktori `campaign-1/` siap tayang; seluruh 3 tugas Minggu 0 resmi 100% CLOSED dan fokus operasional beralih penuh ke pelaksanaan Minggu 1.
- Pembatalan Carousel 4 Slide & Penetapan 1 Video + 1 Gambar Statis Meta Ads Rasio 4:5 dan 9:16 (Decision 021): Format iklan Carousel 4 slide dibatalkan dan digantikan oleh 1 Video (Iklan A 15s) dan 1 Gambar Statis (Iklan B v3 Whole ENLESWEB) masing-masing dalam rasio 4:5 Feed dan 9:16 Stories/Reels di direktori `campaign-1/` dengan dokumen salinan di `copy-iklan-a.md` dan `copy-iklan-b.md` agar visual dan teks tidak terpotong sembarangan oleh antarmuka Meta.
- Pengaktifan Preview Layout Data Dummy Pra-DP (Decision 022 CLOSED): Integrasi alur pengiriman preview tata letak dummy menggunakan format Stateless Compact ID sebelum kesepakatan dan DP pada SOP v1.3 Langkah 3b, dengan data dummy dan tanpa mengubah gerbang Website Builder pasca-10 klien lunas.
- Unifikasi Cloudflare Workers & Peluncuran layout-lab (Decision 023): Seluruh 6 proyek demo (*.enlesweb.com) dan layout-lab (preview.enlesweb.com) dihosting terpusat di Cloudflare Workers; hosting Vercel dinonaktifkan secara resmi. Rute studio internal (/studio-admin/*) diproteksi dan rute publik preview (/p/<id>) aktif.

--------------------------------------------------------------------------------

4. HOMEPAGE DESIGN & IMPLEMENTATION SPEC
Arsitektur teknis dan desain telah diimplementasikan penuh:
- Stack: Astro static (inlined stylesheets), TypeScript strict, CSS custom properties tanpa framework UI, font Poppins self-hosted (preloaded 700, 600, 500, 400).
- Hero: Komposisi taktil modular berlapis di desktop dan sapuan aksen gradien abstrak di mobile. Render instan tanpa keterlambatan animasi `opacity: 0`.
- Tracking Meta Pixel: Event standar `PageView`, `AddToCart` (klik WhatsApp), dan `ViewContent` (eksplorasi fitur) via Opsi A (stub instan di `<head>`, deferred script 153 KiB).
- SEO & Agentic AI: Schema.org JSON-LD `ProfessionalService`, sitemap otomatis, robots.txt, geo tags, dan `public/llms.txt` terstandardisasi.
- Performa Edge: Cloudflare Workers tanpa SPA fallback, dilengkapi `public/_headers` untuk caching 1 tahun aset statis `/_astro/*`.

--------------------------------------------------------------------------------

5. MOBILE-FIRST PRIORITY (VERIFIED)
Hasil review mobile (360px & 390px):
1. Offer terbaca cepat di layar pertama tanpa scroll berlebih.
2. Rp450.000 terlihat jelas dengan sorotan garis aksen 25%.
3. Domain dan hosting 1 tahun langsung terbaca.
4. CTA WhatsApp mudah ditemukan di hero dan didukung Floating WhatsApp button.
5. Paket mudah dibandingkan secara bertumpuk.
6. Halaman bebas dari scroll horizontal (0px overflow).
7. Tipografi fluid clamp proporsional.

--------------------------------------------------------------------------------

6. CONVERSION FILTER
Clarity -> Honesty -> Trust -> Action. Seluruh elemen dekoratif yang tidak membantu 4 filter ini telah dieliminasi.

--------------------------------------------------------------------------------

7. WHATSAPP & META PIXEL BEHAVIOR
- Nomor WhatsApp: `6285156801570` (aktif).
- 9 titik sentuh terpasang `data-wa-topic` dan `data-cta-location`.
- Pesan otomatis kontekstual terformat rapi.
- Meta Pixel: ID `1099411523003859` aktif mengirim event standar via Opsi A.

--------------------------------------------------------------------------------

8. TECHNICAL QA SEBELUM LAUNCH (LULUS 100%)
- Functional: Navigasi anchor, drawer menu mobile, accordion proses, switcher 6 proyek bekerja mulus.
- Conversion: Hero offer, harga, CTA, perbandingan paket terverifikasi.
- Visual: Bebas broken asset, kontras warna melampaui WCAG AA.
- Build: `npm run check` & `npm run build` sukses dengan 0 errors, 0 warnings, 0 hints.
- Performa & Metrik Benchmark Terverifikasi: Benchmark Desktop (Lighthouse Desktop terverifikasi) mencapai Performance 100/100, Accessibility 100, Best Practices 100, SEO 100, Agentic Browsing 3/3 (100%) dengan TBT 0 ms, FCP 0.3 s, LCP 0.6 s, CLS 0.007, Speed Index 0.9 s; Benchmark Mobile (PageSpeed Insights remote via web.dev live URL `enlesweb.com`, Moto G Power / Slow 4G) mencapai Performance 95/100, Accessibility 100, Best Practices 100, SEO 100, Agentic Browsing 3/3 (100%) dengan FCP 1.0 s, LCP 1.1 s, CLS 0, Speed Index 3.8 s, dan TBT ~220 ms (dipengaruhi eksekusi skrip tantangan deteksi bot Cloudflare `cdn-cgi/challenge-platform/h/b/scripts/jsd/...` pada bot runner headless tanpa interaksi pengguna riil).

--------------------------------------------------------------------------------

9. HALAMAN KEBIJAKAN PRIVASI (/kebijakan-privasi) --- SELESAI
Halaman statis minimal `/kebijakan-privasi` telah selesai dibangun dan ditautkan di bar bawah footer (`footer-bottom`). Memuat 5 poin kepatuhan: (1) Pendahuluan, (2) Data yang Dikumpulkan via WhatsApp & Meta Pixel, (3) Penggunaan Informasi, (4) Cookie & Meta Pixel, (5) Hak Pengguna & Kontak Resmi.

--------------------------------------------------------------------------------

10. SINGLE NORTH STAR FOR THE NEXT STEP
**Langkah berikutnya (Beralih ke Minggu 1)**: Seluruh tugas persiapan pra-peluncuran Minggu 0 telah berstatus **CLOSED (100% SELESAI)**: domain kanonikal `enlesweb.com` (Decision 018), materi kreatif iklan Meta Iklan A & Iklan B di `campaign-1/` (Decision 016/020), dan template PDF Bukti Pemesanan oleh pendiri bisnis (Decision 017/020). Selanjutnya unggah materi ke Meta Ads Manager, tayangkan tes iklan Meta Ads Minggu 1 (Rp100.000 selama 7 hari), dan jalankan eksperimen Micro-Warm Outreach manual via DM Instagram `@enlesweb`.

=== BATAS AKHIR FILE: CONTEXT-DETAIL-V3.md ===

---

=== BATAS AWAL FILE: CONTEXT-DETAIL-V2.md ===

### CONTEXT-DETAIL-V2.md
1. TUJUAN
Handoff context untuk kelanjutan pembangunan bisnis jasa website ENLESWEB.

--------------------------------------------------------------------------------

2. KONDISI BISNIS
- Belum punya client nyata.
- Belum punya pengalaman project komersial nyata.
- Menggunakan AI coding/design assistant (Antigravity).
- Membangun sistem reusable.
- Target awal: 10 client pertama.
- Target customer: pebisnis kecil-menengah, UMKM, local business, professional service.
- Bahasa sederhana, tidak teknis. Sapaan: "kamu/-mu".
Prinsip: Jangan menjual teknologi. Jual hasil website, proses yang mudah, dan kebutuhan bisnis yang terselesaikan.

--------------------------------------------------------------------------------

3. MODEL BISNIS
1. Starter: Entry product, website sederhana 1 halaman, cepat, layout tersedia.
2. Business: Bridge package, hingga 6 halaman, struktur disesuaikan.
3. Growth: Core/high-value product, hingga 10 halaman, desain khusus.
4. Custom: High anchor, kebutuhan di luar Growth (CMS, ecommerce, booking, login, API, dashboard), mulai Rp2.000.000.

--------------------------------------------------------------------------------

4. HARGA FINAL SAAT INI
- Starter: Rp450.000
- Business: Rp750.000
- Growth: Rp1.200.000
- Custom: mulai Rp2.000.000
Evaluasi dilakukan setelah 10 client pertama.

--------------------------------------------------------------------------------

5. DOMAIN DAN HOSTING
Semua paket Starter, Business, Growth mendapatkan domain dan hosting 1 tahun.
Domain/hosting bukan pembeda paket.
Ownership tahun pertama terdaftar atas nama ENLESWEB demi kemudahan pendaftaran tanpa birokrasi verifikasi dokumen identitas awal (Decision 002).
Ketentuan Perpanjangan Tahun ke-2 dan Seterusnya (LOCKED - Decision 002):
- Skema Biaya Perpanjangan Flat Tahunan (All Packages):
  - Domain .com / .id: Rp400.000 / tahun (sudah mencakup hosting, pemeliharaan teknis, dan perpanjangan nama domain).
  - Domain selain .com / .id (ekstensi lainnya): Rp300.000 / tahun.
- Kepemilikan Akun Provider & Registrant: Akun provider domain dimiliki dan dikelola terpusat oleh ENLESWEB, dengan nama registrant resmi atas nama ENLESWEB di tahun pertama. Pada tahun kedua, klien bebas memilih perpanjangan terkelola atau opsi mandiri (transfer domain via EPP dan penyerahan arsip zip dist/).
- Integritas Klaim Pemasaran: Positioning utama berakar pada "Kepastian dan Kemudahan" (tanpa memakai klaim tanpa biaya langganan berulang sebagai klaim utama). Paket pembuatan sudah mencakup website, domain, dan hosting selama 1 tahun penuh tanpa iuran bulanan tersembunyi. Mulai tahun kedua, layanan berlanjut via opsi perpanjangan terkelola flat tahunan atau opsi mandiri.

--------------------------------------------------------------------------------

6. PACKAGE LIST FINAL
Starter (Rp450.000): 1 halaman, layout tersedia, domain 1 thn, hosting 1 thn, HP & desktop, tombol WA, Maps, media sosial, form kontak sederhana, 2x revisi.
Business (Rp750.000): hingga 6 halaman, domain 1 thn, hosting 1 thn, layout disesuaikan, basic SEO, bantuan konten, 2x revisi.
Growth (Rp1.200.000): hingga 10 halaman, domain 1 thn, hosting 1 thn, desain khusus, CTA WA disesuaikan per halaman, form custom, basic SEO, bantuan konten, 4x revisi.
Custom (mulai Rp2.000.000): kebutuhan khusus (CMS, ecommerce, booking, login, dashboard, API).

--------------------------------------------------------------------------------

7. PEMBEDA UTAMA PAKET
Starter: "Saya cuma butuh website." (1 hal + layout tersedia)
Business: "Bisnis saya sudah berjalan, butuh website lebih lengkap." (beberapa hal + struktur disesuaikan)
Growth: "Website penting untuk bisnis saya, ingin yang dibuat khusus." (custom design + structure + UX)

--------------------------------------------------------------------------------

8. STRATEGI INTERNAL TEMPLATE/SYSTEM
Bangun internal library layout/component agar pengerjaan Starter dan Business semakin cepat dan efisien.

--------------------------------------------------------------------------------

9. JERSEAY
Jerseay adalah project dummy/concept portfolio untuk proof of capability Growth (bukan client nyata / social proof / testimonial).
Concept: Studio jersey custom.

--------------------------------------------------------------------------------

10. JERSEAY ANTI-AI-SLOP DECISIONS
1. Context grounded Indonesia (Tim Futsal Liga Regional Surabaya, Komunitas Sepeda Bandung Barat, dll).
2. Badge "Kit Unggulan" dihapus.
3. Copy fashion diganti project brief facts.
4. CTA spesifik: Buat Kit Futsal, Diskusi Jersey Sepeda, dll.
5. Eyebrow redundant dihapus.

--------------------------------------------------------------------------------

11. ANTI-AI-SLOP PHILOSOPHY (24 POIN LARANGAN VISUAL & COPY)
Hindari:
1. Eyebrow di atas setiap heading.
2. Arbitrary numbering.
3. Fake editorial metadata.
4. Repetisi eyebrow -> heading -> description -> CTA.
5. Cardification berlebihan.
6. Pills/badges berlebihan.
7. Variasi CTA berlebihan.
8. Generic premium/agency copy (seamless, elevate, cutting-edge, dll).
9. Fake metrics/stats.
10. Fake testimonials/client logos.
11. Decorative gradients/glows/blobs.
12. Excessive rounded corners.
13. Excessive borders.
14. Icons untuk semua hal.
15. Repetitive 3/4-column grids.
16. One-page brochure terlalu panjang.
17. Repetitive information.
18. Huge whitespace hanya agar terlihat premium.
19. Animation everywhere.
20. Uniform design system tanpa alasan.
21. Fake complexity.
22. Technical jargon.
23. Self-applied hierarchy (Featured/Best Seller).
24. Elemen yang ada hanya agar "terlihat designed".

--------------------------------------------------------------------------------

12. JERSEAY REFINEMENT PRINCIPLES
Concrete > Clever, Information > Marketing, Description > Slogan.
Hindari kata-kata generik: premium, presisi, elevate, redefine, seamless, crafted, powerful, modern, exceptional, next-level.

--------------------------------------------------------------------------------

13. RISET KOMPETITOR
Website bisnis nyata diatur berdasarkan user intent.
Market pricing umum: low-cost Rp1-3 juta, professional Rp2-5 juta.

--------------------------------------------------------------------------------

14. KOMPETITOR HARGA
Competitor Landing Rp370k, Business Rp750k, Professional Rp1.5m.
ENLESWEB Starter Rp450k memberikan nilai tinggi dengan domain dan hosting 1 tahun.

--------------------------------------------------------------------------------

15. WEBSITE, DOMAIN, HOSTING, MAINTENANCE
Pisahkan empat entitas ini secara jelas dalam komunikasi operasional, materi promosi/iklan, dan kesepakatan klien:
- **Website**: Hasil pengerjaan desain, kode sumber statis, dan penataan konten. Menjadi aset milik klien seutuhnya setelah pelunasan tanpa royalti.
- **Hosting & Platform**: Berjalan di atas edge network modern Cloudflare Workers/Pages (*.enlesweb.com) yang dikelola terpusat oleh ENLESWEB; hosting Vercel telah dinonaktifkan per Decision 023.
- **Domain**: Hak pakai nama domain. Sudah termasuk untuk 1 tahun pertama (akun registrar dan data registrant atas nama ENLESWEB demi kemudahan aktivasi, Decision 002). Tahun ke-2 dan seterusnya klien bebas memilih perpanjangan terkelola flat tahunan (Rp400rb/tahun .com/.id atau Rp300rb/tahun ekstensi lainnya) atau opsi mandiri (transfer domain via EPP code + penyerahan arsip static build dist/ zip secara cuma-cuma).
- **Maintenance / Revisi & Update Konten Ringan**: Terikat pada kuota revisi paket saat pembuatan (2x Starter/Business, 4x Growth), garansi perbaikan bug teknis 30 hari, serta kuota gratis putaran update konten ringan tahunan di tahun pertama (Starter 2x, Business 4x, Growth 6x; selebihnya Rp50.000/putaran, SLA 1–2 hari kerja, dan otomatis di-reset setiap tahun saat klien memilih Perpanjangan Terkelola — Decision 015).

--------------------------------------------------------------------------------

16. HAL YANG BELUM FINAL (HISTORI V2 -> TELAH FINAL DI V3)
- Renewal domain/hosting tahun kedua: TELAH FINAL (LOCKED - Decision 002). Tahun pertama registrant atas nama ENLESWEB; tahun kedua klien bebas memilih perpanjangan terkelola flat all package (Rp400rb/tahun .com/.id atau Rp300rb/tahun ekstensi lainnya) atau opsi mandiri transfer EPP + dist zip.
- SOP operasional, SLA pengerjaan, kuota update konten ringan pasca-tayang, dan ketentuan pembayaran tertulis: TELAH FINAL (LOCKED / CLOSED di `Delivery & Operations/sop.md` v1.3, Decision 003, 004, 013–017, Decision 022 & 023).
- Domain resmi bisnis `enlesweb.com`: TELAH FINAL / SUDAH DIBELI (CLOSED di registrar Domainesia & Cloudflare Workers, Decision 018).

--------------------------------------------------------------------------------

17. PRINSIP UNTUK SESSION BERIKUTNYA
Bedakan keputusan final dan ide lama. Jangan menaikkan kompleksitas Starter/Business. Jangan buat fake proof.

--------------------------------------------------------------------------------

18. RINGKASAN STRATEGI BISNIS
Jasa pembuatan website yang membuat proses teknis sederhana bagi pemilik bisnis. Scalability dicapai lewat internal component library.

--------------------------------------------------------------------------------

19. WEBSITE BUILDER --- CURRENT CONCEPT
19.1 Status: internal production system concept.
19.2 Masalah: mempercepat produksi Starter & Business.
19.3 Evolusi: dari full template menjadi section/component-based builder (Configuration, not construction).
19.4 Blueprint JSON: structured JSON sebagai source of truth.
19.5 Generation Flow: Builder -> JSON Blueprint -> Website Engine (Astro) -> Build -> Deploy.
19.6 Preset & Composer: Preset untuk produksi cepat, Composer untuk controlled customization.
19.7 Research-driven component architecture.
19.8 Technical direction (Next.js, React, TypeScript, Tailwind, Astro, PostgreSQL, Cloudflare Pages).
19.9 Roadmap SaaS: Phase 1 Internal Generator -> Phase 2 Internal Production System -> Phase 3 Productized System -> Phase 4 SaaS.

--------------------------------------------------------------------------------

20. BUILDER DECISION STATUS
LOCKED (keputusan jelas), OPEN (butuh research/eksperimen), REJECTED (ide dibuang).

--------------------------------------------------------------------------------

21. CURRENT BUILDER NORTH STAR
Build the website system once, then configure and compose it repeatedly.

--------------------------------------------------------------------------------

22. NEXT DISCUSSION PRIORITY
Research tentang struktur website bisnis nyata sebelum mengunci component library.

=== BATAS AKHIR FILE: CONTEXT-DETAIL-V2.md ===
