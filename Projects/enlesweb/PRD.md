# PRD.md - ENLESWEB Homepage

Versi 1.2 (As-Is V3 Website Specification) - 14 Oktober 2026

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
  - Keenam proyek (`jerseay`, `dipotongin`, `tuntas`, `seruput`, `ripeir`, `berflower`) berstatus `live` dengan URL demo aktif (`[Lihat Website]`). Jika salah satu URL dikosongkan di `site.ts`, komponen otomatis menampilkan tombol nonaktif `[Segera]` dengan atribut `aria-label="Segera tersedia"` dan mencetak peringatan build `console.warn` (mencegah broken link).

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
| Jerseay | Growth | Live, demo aktif | "Lihat Website" | `https://jerseay.enlesweb.com/` |
| dipotongin | Growth | Live, demo aktif | "Lihat Website" | `https://dipotongin.enlesweb.com/` |
| tuntas | Business | Live, demo aktif | "Lihat Website" | `https://tuntas.enlesweb.com/` |
| Seruput Kopi | Starter | Live, demo aktif | "Lihat Website" | `https://seruput.enlesweb.com/` |
| ripeir | Starter | Live, demo aktif | "Lihat Website" | `https://ripeir.enlesweb.com/` |
| berflower | Growth | Live, demo aktif | "Lihat Website" | `https://berflower.enlesweb.com/` |

Catatan: Keenam proyek contoh berstatus `live` dengan demo aktif dan aset visual screenshot lokal di `src/assets/projects/` (didukung fallback SVG jika URL dikosongkan).

## 8. Batasan bisnis (LOCKED)

- Harga, nama paket, dan isi paket hanya boleh berasal dari CONTENT.md. Jangan ubah harga.
- Jangan menulis domain atau hosting "gratis", dan jangan menyiratkan domain gratis selamanya.
- Jangan menyebut ekstensi domain spesifik secara kaku (seperti `.com`, `.store`, atau `.shop`). Calon klien bebas memilih domain yang sesuai (.com, .id, dll.).
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
- Setiap klik WhatsApp dicatat ke Meta Pixel sebagai event `Contact` (LOCKED). Detail teknis ada di SPEC.md bagian 7.
- Nomor WhatsApp dummy terpusat di `src/config/site.ts`.

## 10. Kriteria selesai (Definition of Done)

Homepage siap direview jika semua benar:

- Semua teks sama persis dengan CONTENT.md tanpa penambahan kata terlarang atau em dash.
- Hero menampilkan penawaran, harga, teks jaminan pengerjaan, dan tombol WhatsApp di layar HP 360x740 dan 390x844 tanpa scroll berlebih.
- Rp450.000 dan "domain dan hosting 1 tahun" terlihat jelas di hero.
- Tiga paket inti dapat dibandingkan secara sejajar di desktop, dan Custom terpisah di bawahnya.
- Tidak ada badge "Most Popular", "Best Value", atau badge buatan.
- Enam proyek tampil dengan label konsep (sistem Highlight & Minimize); keenam proyek aktif dengan demo URL live (`[Lihat Website]`), didukung mekanisme fallback nonaktif aman `[Segera]` dengan warning build jika URL dikosongkan.
- Proses memakai satu sumbu vertikal dengan interaksi accordion langkah yang mulus.
- Pernyataan manfaat bisnis dan Tentang menyatu dalam layout editorial asimetris `#tentang`.
- Semua tombol WhatsApp berfungsi dan membawa pesan otomatis yang benar.
- Event kontak Meta Pixel terkirim saat tombol WhatsApp diklik (setelah Pixel ID diisi).
- Seluruh tombol utama memiliki affordance fisik 3D *Engineered Tactile* (shelf 3px aksen `#A3C400`, inset specular highlight, clean ink inversion, zero diffuse blur).
- Animasi bertahap (*progressive scroll reveal*) ultra-ringan berbasis GPU berjalan mulus di smartphone kelas menengah dan menghormati `prefers-reduced-motion: reduce`.
- Tidak ada testimoni, statistik, klien, atau badge buatan.
- Tampilan di mobile tidak terasa seperti desktop yang diperkecil dan bebas dari scroll horizontal (0px overflow).
- Halaman Kebijakan Privasi (`/kebijakan-privasi`) aktif dan dapat diakses dari footer.
- Skor PageSpeed Insights memenuhi standar keunggulan terverifikasi: Performance 100/100 Desktop (TBT 0ms, FCP 0.3s, LCP 0.6s, CLS 0.007, Speed Index 0.9s) dan 95/100 Mobile remote via web.dev (FCP 1.0s, LCP 1.1s, CLS 0, Speed Index 3.8s, TBT ~220ms dipengaruhi skrip deteksi bot Cloudflare pada bot runner headless), Accessibility 100, Best Practices 100, SEO 100, dan Agentic Browsing 3/3 (100%) dengan berkas `public/llms.txt`, inlined CSS, preload 4 bobot font Poppins, pemuatan Pixel murni berbasis interaksi, penjadwalan idle observer, dan isolasi layer GPU.
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
4. **Enam proyek demo live (TERSELESAIKAN).** Seluruh 6 proyek demo telah live di domain enlesweb.com dan didukung aset screenshot lokal di `src/assets/projects/`.
5. **Aturan perpanjangan tahun kedua & SOP operasional revisi/update konten (TERSELESAIKAN).** Telah dikunci (Decision 002 & Decision 013–017) di `Delivery & Operations/sop.md` v1.2.
6. **Performa PageSpeed & Agentic Browsing (TERSELESAIKAN).** Teroptimasi penuh untuk mobile dan desktop: CSS inlined, 4 bobot font Poppins preloaded, Meta Pixel deferred murni berbasis interaksi (tanpa timeout), eliminasi forced reflow dan style invalidation (skrip head js-reveal & penjadwalan requestIdleCallback), isolasi GPU layer SVG blur, berkas `llms.txt`, dan Cloudflare caching headers aktif (mencapai Desktop 100/100 dan Mobile remote 95/100).

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
| Animasi bertahap progressive scroll reveal one-shot berbasis GPU (elemen viewport awal langsung tampil) | LOCKED |
| Meta Pixel dengan event kontak pada 9 lokasi CTA (Pemuatan Opsi A murni ditunda hingga interaksi pengguna) | LOCKED |
| Label "10 klien pertama" dikontrol via `site.showLaunchNote` | LOCKED |
| Pesan WhatsApp seragam | LOCKED |
| Nomor WhatsApp resmi (`+6285156801570`) | LOCKED |
| Pixel ID (`1099411523003859`) | LOCKED |
| Label proyek konsep disesuaikan per tingkat paket (Starter, Business, Growth) | LOCKED |
| OG image aktif di `public/og-image.png` | LOCKED |
| Halaman Kebijakan Privasi di `/kebijakan-privasi` dan tautan footer | LOCKED |
| Domain produksi final `enlesweb.com` | CLOSED (Sudah dibeli & dihubungkan ke Cloudflare Workers, Decision 018) |
| Optimasi PageSpeed Insights (Desktop 100/100, Mobile 95/100) & Agentic Browsing 3/3 (100%) (`llms.txt`, `_headers`, inlined CSS, 4 font preload, requestIdleCallback, isolasi GPU) | LOCKED (CLOSED, Decision 019) |
