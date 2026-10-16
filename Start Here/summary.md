# BUSINESS CONTEXT
**Versi:** 1.6  
**Terakhir diperbarui:** 16 Oktober 2026  
**Sumber:** `enlesweb-context-master.md`, `ENLESWEB-DOCS-V3.md`, `ENLESWEB-CONTEXT-PROGRESS-HISTORY.md`, `Delivery & Operations/sop.md` (v1.2 CLOSED), `Strategy/positioning.md`, `Strategy/rencana.md`, `Strategy/model-bisnis.md`, `Business Memory/decision-log.md` (Decision 001 - 017), dan sesi `/grill-me` 16 Oktober 2026.  
**Ringkasan Pembaruan:** Sinkronisasi menyeluruh 6 keputusan strategis & operasional baru (Decision 013 s/d 017): (1) pembukaan Micro-Warm Outreach manual Rp0 via DM IG `@enlesweb` (2-3 usaha/hari) & urutan prioritas 3 demo (`tuntas`, `Jerseay`, `ripeir`), (2) penundaan kenaikan biaya AI tools (tetap Rp100rb/bln sampai 5 klien lunas atau 2 Growth/Custom simultan) & default framing `.com` di SOP WhatsApp, (3) jatah gratis putaran update konten ringan tahunan (Starter 2x, Business 4x, Growth 6x, kelebihan kuota Rp50rb/putaran, di-reset saat renewal terkelola), (4) label tier & harga di iklan Carousel 4 slide + jembatan ekspektasi demo di SOP, (5) transparansi Nama Lengkap Pendiri di PDF Bukti Pemesanan, pembelian domain setelah DP + materi lengkap, dan aturan On-Hold 60 hari, serta (6) aturan Problem-Aware Hook di iklan/DM & penutupan status SOP WhatsApp (`sop.md` v1.2 CLOSED).  
**Label:** [FAKTA] terverifikasi di dokumen/repo, [KEPUTUSAN] sudah dikunci pemilik, [ESTIMASI] perkiraan, [HIPOTESIS] belum terbukti, [BELUM DIKETAHUI] data belum tersedia (bukan nol).

## 1. Ringkasan Bisnis
- Nama bisnis: ENLESWEB (`enlesweb.com`, domain belum dibeli)
- Tahap bisnis: Awal / mencari product-market fit
- Jenis bisnis: Jasa pembuatan website
- Lokasi dan pasar target: [KEPUTUSAN] Seluruh Indonesia secara remote, tanpa batasan kota. Konversi lewat Meta Ads (dan Micro-Warm Outreach DM IG manual) ke homepage/WhatsApp.
- Status saat ini:
  - [FAKTA] Launch-ready, belum go-live komersial. Homepage selesai (0 error, 0 warning) dan berjalan di staging Cloudflare `workers.dev`.
  - [FAKTA] 6 website konsep live di Vercel: Seruput Kopi, ripeir (Starter), tuntas (Business), Jerseay, dipotongin, berflower (Growth).
  - [FAKTA] WhatsApp `6285156801570`, Meta Pixel `1645267283847928`, Instagram `@enlesweb`, halaman `/kebijakan-privasi`, OG image, sitemap, CI/CD, dan SOP operasional WhatsApp (`sop.md` v1.2) sudah terpasang dan berstatus **CLOSED**.
  - [FAKTA] Belum ada klien, prospek, atau pendapatan.
- Pendiri dan sumber daya yang tersedia: [FAKTA] Solo founder, dibantu AI coding/design assistant (Antigravity). [KEPUTUSAN] Komunikasi publik menggunakan kata "kami" dan "tim" (Decision 001). Aset reusable: 6 template konsep, tooling internal `carousel-generator/`, SOP chat WhatsApp (v1.2 CLOSED).

## 2. Visi dan Tujuan
- Visi jangka panjang: [KEPUTUSAN] "Build the website system once, then configure and compose it repeatedly." Dari jasa website menuju sistem produksi internal (Website Builder berbasis blueprint JSON). Roadmap: Internal Generator, Internal Production System, Productized System (fokus jangka panjang utama), dan SaaS mandiri (ditunda/opsional pasca-Productized System).
- Target 12 bulan: [KEPUTUSAN] Target pendapatan Rp4.500.000 (konservatif berbasis 10 klien Starter pertama @ Rp450.000). Dari 10 klien pertama menuju pipeline yang stabil, evaluasi harga setelah 10 klien, mulai merancang blueprint JSON dan membangun Website Builder internal (fase 1 sampai 2) persis setelah klien ke-10 go live (selesai, tayang, dan lunas), dan menjajaki kanal outbound leads berbayar (tools seperti Apollo.io dkk. ~Rp400-500rb/bln).
- Target 90 hari: [KEPUTUSAN] 10 klien pertama berbayar (DP masuk) dalam 90 hari setelah iklan Meta Ads tayang.
- Tujuan utama bulan ini (Sisa 3 Tugas Eksekusi Murni Minggu 0 + Peluncuran Minggu 1): [KEPUTUSAN] (1) beli domain `enlesweb.com` dan hubungkan ke Cloudflare Workers, (2) siapkan materi iklan Meta Carousel 4 slide (dengan *problem-aware hook* dan label tier/harga eksplisit: #1 `tuntas` Business Rp750rb, #2 `Jerseay` Growth Rp1,2jt, #3 `ripeir` Starter Rp450rb, #4 Ringkasan & CTA WA), (3) kunci draf template Bukti Pemesanan formal PDF + TTD digital (dengan Nama Lengkap Pendiri sesuai rekening bank), lalu (4) tayangkan tes Meta Ads minggu pertama (target 21 Okt 2026) berdampingan dengan eksperimen Micro-Warm Outreach DM IG manual (tercatat terpisah).
- Definisi keberhasilan & Ambang Sinyal: [KEPUTUSAN] Tes minggu pertama (Rp100.000) sukses jika menghasilkan minimal 1 klien berbayar. Ambang sinyal antara (*intermediate signal*): minimal **2–3 chat masuk ke WhatsApp dari iklan** yang menanyakan rincian paket atau kebutuhan website (terpisah dari chat hasil Micro-Warm Outreach DM IG). [KEPUTUSAN EVALUASI] Setelah 1 minggu berjalan, kampanye dijeda untuk evaluasi menyeluruh sebelum menentukan kelanjutan kampanye.

## 3. Target Pelanggan
- Segmen pelanggan yang ingin dilayani: [KEPUTUSAN] Pebisnis kecil-menengah, UMKM, bisnis lokal, dan jasa profesional di Indonesia.
- Pembeli Utama (Positioning): [KEPUTUSAN] Pemilik usaha lokal kecil yang sudah aktif berjualan lewat Instagram/WhatsApp tetapi belum punya website.
- Industri & Prioritas Demo Akuisisi (Decision 013): [FAKTA] 6 konsep tersedia (Kedai kopi/F&B, bengkel reparasi, bimbel/les privat, studio jersey kustom, barbershop, florist/toko hadiah). [KEPUTUSAN] Urutan prioritas demo untuk diuji pada Micro-Warm Outreach dan susunan slide Iklan Carousel dikunci berdasarkan nilai transaksi pelanggan:
  1. **Prioritas #1:** `tuntas` (Bimbel & Les Privat, Paket Business Rp750.000) sebagai pembuka Carousel Meta Ads dan target utama DM manual.
  2. **Prioritas #2:** `Jerseay` (Studio Jersey Custom, Paket Growth Rp1.200.000) sebagai target utama kedua DM manual dan slide kedua iklan.
  3. **Prioritas #3:** `ripeir` (Servis Laptop/HP, Paket Starter Rp450.000) sebagai perwakilan pintu masuk harga Rp450.000 di slide ketiga iklan.
- Siapa pengambil keputusan: [HIPOTESIS] Pemilik usaha langsung, memutuskan sendiri lewat chat WhatsApp.
- Masalah utama yang dialami pelanggan: [HIPOTESIS] Kerepotan menjawab pertanyaan berulang di WhatsApp/DM (jadwal, harga, rekap pesanan/ukuran), ingin punya website resmi tanpa proses teknis yang rumit, dengan harga terjangkau, tanpa biaya langganan platform bulanan (seperti Wix/Shopify), dan dengan jalur pesan langsung ke WhatsApp.
- Segmen Non-Target (Ditolak Sopan demi Fokus 10 Klien Pertama): [KEPUTUSAN]
  1. Toko online kompleks dengan keranjang belanja, payment gateway, dan inventaris stok.
  2. Klien tanpa bahan mentah (foto/teks dasar) yang minta dibuatkan semuanya dari nol.
  3. Permintaan fitur aplikasi dinamis (login member, sistem booking, database CMS) di Starter/Business.
  4. Perusahaan korporat besar dengan tender dan kontrak berbelit.
  5. Klien yang menuntut garansi peringkat #1 SEO atau jaminan penjualan.
  6. Calon klien luar negeri.

## 4. Penawaran dan Layanan
- Jenis website yang ditawarkan: [FAKTA] Website statis (Astro) yang dihosting di Cloudflare/Vercel. Klien mendapat aset website penuh setelah pelunasan.
- Paket atau layanan: [KEPUTUSAN, harga dikunci]
  | Paket | Harga | Halaman | Desain | Revisi Buat | Update Konten Ringan Thn 1 | Waktu |
  |---|---|---|---|---|---|---|
  | Starter | Rp450.000 (harga peluncuran 10 klien pertama) | 1 | Pilih dari layout tersedia | 2x | Gratis 2x putaran | 3 hari kerja |
  | Business | Rp750.000 | Hingga 6 | Disesuaikan | 2x | Gratis 4x putaran | 7 hari kerja |
  | Growth | Rp1.200.000 | Hingga 10 | Desain khusus + interaktif | 4x | Gratis 6x putaran | 14 hari kerja |
  | Custom | Mulai Rp2.000.000 | Di luar Growth | Dibahas | Dibahas | Dibahas | Dibahas |
- Ruang lingkup pengerjaan & Default Framing `.com`: [KEPUTUSAN] Domain dan hosting 1 tahun termasuk di ketiga paket inti. Klien bebas memilih ekstensi `.com` atau `.id` tanpa biaya tambahan (Decision 010), namun skrip chat SOP WhatsApp (Template 5.2) wajib mengajukan ekstensi **`.com` sebagai rekomendasi kalimat standar** (*"Untuk nama domainnya, apakah namabisnis.com sudah sesuai untuk kami daftarkan?"*) sebelum menyebut opsi ekstensi lain (Decision 014). Klien menyediakan bahan mentah. ENLESWEB membantu merapikan teks hanya untuk Business dan Growth. Starter dan Business tidak boleh ditambah halaman atau fitur, arahkan ke paket di atasnya atau Custom.
- Waktu pengerjaan & Pembelian domain: [KEPUTUSAN] Starter 3, Business 7, Growth 14 hari kerja, dihitung sejak DP masuk dan materi lengkap. Untuk semua paket, pembelian domain di registrar baru dieksekusi **setelah DP masuk DAN materi dasar dinyatakan lengkap** (Decision 017).
- Harga saat ini: Lihat tabel di atas. [FAKTA] Pembanding: kompetitor Landing Rp370k, Business Rp750k, Professional Rp1,5jt; pasar umum low-cost Rp1 sampai 3jt, profesional Rp2 sampai 5jt.
- Biaya langsung dan estimasi margin:
  - [FAKTA] Biaya langsung domain (registrar):
    - `.com`: Rp137.000 + PPN 11% = **Rp152.070** (tahun ke-1); perpanjangan setelahnya Rp209.000 + PPN 11% = **Rp231.990/tahun**.
    - `.id`: Rp219.000 + PPN 11% = **Rp243.090** (tahun ke-1); perpanjangan setelahnya Rp249.000 + PPN 11% = **Rp276.390/tahun**.
    - Ekstensi lainnya: mayoritas di bawah Rp100.000 + PPN 11% (< **Rp111.000/tahun** pertama), kecuali TLD khusus.
    - Hosting: Rp0 (memanfaatkan tier gratis Cloudflare Pages/Workers & Vercel).
    - AI Tools langganan (Decision 014): [FAKTA/KEPUTUSAN] Saat ini dikunci tetap pada **Rp100.000 / bulan**, dan baru boleh dinaikkan ke **Rp300.000 - Rp400.000 / bulan** setelah **minimal 5 klien selesai dan lunas (100%) ATAU saat menangani 2 proyek Growth/Custom secara simultan**. Kebijakan ini menghemat Rp300.000/bulan kas awal dan memangkas tajam defisit pada skenario konservatif 12 bulan.
  - [ESTIMASI] Margin kotor tahun pertama per unit (dikurangi biaya domain):
    - **Starter (Rp450.000):** Sisa kotor **Rp297.930** (~66%) jika `.com`, atau **Rp206.910** (~46%) jika `.id`. Rendahnya margin Starter `.id` diakui sebagai bentuk subsidi sadar akuisisi 10 klien pertama (Decision 010). Melalui *default framing* `.com` di SOP WhatsApp (Decision 014), porsi `.com` diarahkan lebih besar daripada `.id` guna menjaga ambang margin kotor bisnis minimal **60% secara gabungan (*blended*)** lintas seluruh proyek selesai (`Strategy/model-bisnis.md`).
    - **Business (Rp750.000):** Sisa kotor **Rp597.930** (~80%) jika `.com`, atau **Rp506.910** (~68%) jika `.id`.
    - **Growth (Rp1.200.000):** Sisa kotor **Rp1.047.930** (~87%) jika `.com`, atau **Rp956.910** (~80%) jika `.id`.
- Layanan Pasca-Tayang, Perpanjangan, & Kepemilikan Domain:
  - [KEPUTUSAN] **Kuota Putaran Update Konten Ringan Tahunan (Decision 015):** Selama 1 tahun pertama, klien mendapat jatah gratis putaran update konten ringan (perubahan teks, daftar harga, jam buka, atau foto pada bagian yang sudah ada tanpa mengubah struktur layout/komponen; 1 putaran = maks 5–10 item teks/foto dalam 1 pesan WA, SLA 1–2 hari kerja): **Starter 2x**, **Business 4x**, **Growth 6x**. Jika kuota tahunan habis, dikenakan tarif tetap **Rp50.000 per putaran update**. (Cakupan dikunci di `sop.md`, PDF Bukti Pemesanan, dan dokumen strategi; teks homepage `CONTENT.md` & `copy.ts` tetap utuh).
  - [KEPUTUSAN] **Perbaikan bug teknis:** Gratis selama **30 hari** setelah tayang (SLA 1–2 hari kerja).
  - [KEPUTUSAN] **Tahun pertama:** Akun registrar dan *registrant* domain didaftarkan atas nama ENLESWEB untuk mempermudah pendaftaran cepat dan tanpa kendala administrasi identitas (Decision 002).
  - [KEPUTUSAN] **Tahun kedua:** Perpanjangan bersifat opsional:
    1. **Perpanjangan terkelola bersama ENLESWEB:** Flat **Rp400.000/tahun** (`.com`/`.id`) atau **Rp300.000/tahun** (domain lain), mencakup perpanjangan domain, hosting, pemeliharaan script, dan **reset otomatis kuota gratis putaran update konten ringan tahunan (2x/4x/6x)** sesuai paket awal (Decision 002 & Decision 015).
    2. **Opsi mandiri:** Jika tidak ingin perpanjang, ENLESWEB memberikan opsi transfer domain (kode EPP/Auth Code) dan penyerahan file arsip *build* statis website (`.zip` dari `dist/`) agar klien dapat mengelola hosting mandiri. Master source code Astro dan generator internal ENLESWEB tidak diserahkan.
  - [KEPUTUSAN] **Reaktivasi:** Jika website sempat dinonaktifkan karena melewati masa tenggang 14 hari, tidak ada biaya tambahan/penalti reaktivasi (tetap tarif flat perpanjangan normal tahunan) selama domain belum kedaluwarsa permanen di registrar (Decision 005).
  - Basic SEO termasuk di Business dan Growth (struktur dan metadata dasar saja, tanpa janji peringkat).

## 5. Akuisisi dan Penjualan
- Kanal untuk mendapatkan prospek: [KEPUTUSAN]
  1. **Meta Ads (Instagram/Facebook)** ke homepage lalu WhatsApp sebagai kanal berbayar utama. Anggaran tes minggu pertama Rp100.000. Materi iklan pertama: **Carousel 4 slide** dengan kalimat pembuka *problem-aware hook* ("mengapa IG/WA saja tidak cukup") dan label tier/harga eksplisit di setiap kartu: Slide 1 `tuntas: Paket Business Rp750.000`, Slide 2 `Jerseay: Paket Growth Rp1.200.000`, Slide 3 `ripeir: Paket Starter Rp450.000`, Slide 4 Ringkasan Paket & CTA WhatsApp (Decision 013 & Decision 016).
  2. **Konten organik IG `@enlesweb`** terbatas sebagai kanal kedua gratis (Decision 008).
  3. **Eksperimen Micro-Warm Outreach Manual (Rp0 - Decision 013):** Menyapa maksimal **2 sampai 3 pemilik usaha per hari** secara manual dengan *problem-aware hook* sesuai urutan prioritas demo (#1 Bimbel/`tuntas`, #2 Studio Jersey/`Jerseay`, #3 Servis Laptop-HP/`ripeir`). **Guardrail wajib:** Sapaan awal dilakukan **hanya lewat DM Instagram `@enlesweb`** (dengan interaksi pemanasan *like/reply story* terlebih dahulu, baru pindah ke WA jika direspons) untuk melindungi nomor WA utama dari blokir; dicatat terpisah dari metrik tes Meta Ads Minggu 1; dan dijeda otomatis jika slot 3 proyek aktif penuh.
- Larangan tools outbound berbayar: [KEPUTUSAN] Penggunaan tools scraping/outbound berbayar (seperti Apollo.io ~Rp400-500rb/bln) tetap dilarang mutlak sebelum 10 klien pertama selesai (Decision 013).
- Anggaran iklan 90 hari: Rp500.000 sampai Rp1.000.000, di luar AI tools dan domain (Decision 009). Plafon tahap pertama Rp500.000 tersedia langsung; pembukaan sisa plafon hingga Rp1.000.000 mensyaratkan minimal 1 DP masuk dan diperbolehkan didanai dari tambahan modal pemilik.
- Proses penjualan: [KEPUTUSAN, SOP v1.2 CLOSED] Chat pertama (3 pertanyaan kualifikasi & pencatatan sumber lead), rekomendasi satu paket (disertai jembatan ekspektasi demo sesuai tier & kalimat penutup *default framing* `.com`), ringkasan kesepakatan chat, **penerbitan Bukti Pemesanan formal PDF + tanda tangan digital (mencantumkan Nama Lengkap Pendiri sesuai rekening bank sebagai Penanggung Jawab Resmi Studio ENLESWEB)**, pembayaran DP 50%, pengumpulan brief dan materi lengkap (batas aktif 7 hari sebelum dialihkan ke *On-Hold* 60 hari), pendaftaran domain segera saat materi lengkap, pengerjaan & preview, revisi pembuatan, persetujuan final & pelunasan 50%, tayang & serah terima (garansi bug 30 hari + kuota update ringan tahunan 2x/4x/6x), perpanjangan tahun kedua.
- Jumlah prospek: 0 [FAKTA]
- Hambatan utama penjualan: [HIPOTESIS] Belum ada bukti sosial; kepercayaan terhadap penyedia baru dan rekening pembayaran pribadi; kekhawatiran website statis tidak bisa diedit. Diminimalisasi lewat transparansi harga, 6 demo konsep live berlabel tier, jatah gratis update konten ringan tahunan (2x/4x/6x), serta Bukti Pemesanan formal PDF bertanda tangan digital yang mencantumkan Nama Lengkap Pendiri secara transparan.

## 6. Delivery dan Operasional
- Proses dari onboarding sampai website diluncurkan: Mengikuti alur 10 langkah di `Delivery & Operations/sop.md` (v1.2 CLOSED). Rekening pembayaran DP 50% dan pelunasan 50% menggunakan rekening bank pribadi pendiri [KEPUTUSAN].
- Dokumen Transaksi & Transparansi Penanggung Jawab: [KEPUTUSAN] Klien wajib diberikan dokumen Bukti Pemesanan formal format PDF dengan tanda tangan digital (Decision 003) yang mencantumkan **Nama Lengkap Pendiri** (sama persis dengan nama di rekening bank pribadi) sebagai **Penanggung Jawab Resmi Studio ENLESWEB** pada informasi pembayaran dan blok tanda tangan (Decision 017).
- Tools dan teknologi: [FAKTA] Astro (static), TypeScript, CSS custom properties, Cloudflare Workers/Pages, Vercel (demo), GitHub Actions, Meta Pixel, `carousel-generator/`.
- Kapasitas pengerjaan & Jam Operasional: [KEPUTUSAN] Jam operasional aktif membalas chat dan pengerjaan: **09.00 - 21.00 WIB (12 jam)**. Kapasitas simultan solo founder untuk 10 klien pertama: **2 - 3 klien paralel**. Waktu pengerjaan 3/7/14 hari kerja per paket sudah dikunci (dihitung sejak DP masuk dan materi dasar lengkap). [ESTIMASI] Jam kerja aktual pengerjaan 1 klien paket Starter dipatok berkisar antara **5 – 12 jam kerja nyata**, yang akan dicatat di register pengerjaan untuk mengukur metrik `Rp per jam kerja pendiri`.
- Risiko keterlambatan materi & Status On-Hold 60 Hari (Decision 017): [KEPUTUSAN]
  - Pembelian domain di registrar baru dilakukan **setelah DP masuk DAN materi dasar dinyatakan lengkap**.
  - Jika klien belum melengkapi materi dasar dalam **7 hari kalender** sejak DP diterima, proyek tidak langsung ditutup/dihanguskan, melainkan dialihkan ke status **Tunda Sementara (*On-Hold* / Antrean Pasif)** agar slot kapasitas 3 proyek aktif pendiri langsung bebas untuk melayani klien lain.
  - Klien diberi batas waktu maksimal **60 hari kalender sejak tanggal DP** untuk mengirimkan materi lengkap dan mengaktifkan kembali pengerjaan (mengikuti antrean slot yang tersedia saat materi masuk).
  - DP hanya hangus apabila melewati **60 hari kalender** tanpa kelengkapan materi (dan jika atas permintaan khusus domain sudah dibeli lebih dulu, biaya domain yang telah dikeluarkan tidak dapat dikembalikan).
- Kebijakan revisi pembuatan, update konten pasca-tayang, & pembatalan:
  - Kuota revisi pembuatan (sebelum tayang): 2x Starter dan Business, 4x Growth.
  - Kuota putaran update konten ringan tahunan (setelah tayang, Decision 015): Gratis **2x Starter**, **4x Business**, **6x Growth** di tahun pertama (maks 5–10 item teks/foto per putaran dalam 1 pesan WA, SLA 1–2 hari kerja; lewat kuota Rp50.000/putaran; di-reset tiap tahun saat Perpanjangan Terkelola).
  - Pembatalan saat tahap pengumpulan materi/naskah (sebelum domain dibeli dan sebelum draf visual dikirim): DP dikembalikan 50%. Jika domain sudah dibeli, draf visual dikirim, atau lewat 60 hari On-Hold tanpa materi: DP tidak dapat dikembalikan (hangus).
- Dukungan teknis setelah website diluncurkan: Perbaikan bug teknis 30 hari bebas biaya (SLA 1–2 hari kerja).

## 7. Kondisi Keuangan
- Modal yang tersedia: [KEPUTUSAN/FAKTA] Modal kerja siap pakai dialokasikan sekitar **Rp1.000.000 – Rp1.500.000** (mencakup domain `enlesweb.com` ~Rp152rb, iklan tes awal Minggu 1 Rp100rb, cadangan iklan lanjutan Rp400rb, biaya AI tools Rp100rb/bln, dan dana talangan domain klien). Plafon iklan 90 hari total Rp500.000 sampai Rp1.000.000 di luar AI tools dan domain (Decision 009). Plafon tahap pertama Rp500.000 tersedia langsung, dan pembukaan sisa plafon hingga Rp1.000.000 dibuka setelah minimal 1 DP masuk dengan opsi didanai tambahan modal pemilik.
- Biaya operasional bulanan:
  - [FAKTA/KEPUTUSAN] Biaya AI tools saat ini dikunci pada **Rp100.000 / bulan**, dan baru boleh dinaikkan ke **Rp300.000 - Rp400.000 / bulan** setelah **minimal 5 klien selesai dan lunas (100%) ATAU saat menangani 2 proyek Growth/Custom secara simultan** (Decision 014).
  - [FAKTA] Biaya langsung domain per klien: Rp152.070/thn (`.com`) atau Rp243.090/thn (`.id`).
  - [KEPUTUSAN] Anggaran iklan Meta Ads: Rp100.000 untuk minggu pertama.
- Target pendapatan 12 bulan: [KEPUTUSAN] **Rp4.500.000** sebagai batas bawah konservatif (*milestone validasi pasar* berbasis 10 klien Starter pertama @ Rp450.000). Rincian skenario keuangan (dengan penghematan AI tools Decision 014) dipetakan di `Strategy/model-bisnis.md`.
- Target margin kotor: 46% - 66% (Starter), 68% - 80% (Business), 80% - 87% (Growth). Target blended margin seluruh proyek selesai minimal 60%.
- Runway operasional awal: [KEPUTUSAN] **1 bulan (30 hari)** konsisten aktif. Dibaca sebagai jendela uji pertama sampai hard stop hari ke-30: jika 0 DP, seluruh iklan berhenti total dan bisnis masuk mode jeda mutlak (Decision 009, `rencana.md`) tanpa pembakaran modal tambahan hingga ada evaluasi strategi baru.

## 8. Asumsi dan Risiko
| Asumsi | Bukti saat ini | Cara validasi |
|---|---|---|
| Pemilik UMKM mau membeli website lewat iklan Meta / Micro-Warm DM dan chat WhatsApp tanpa bukti klien nyata | Tidak ada. Pixel dan WhatsApp sudah dites di HP fisik, tapi belum ada lead | Tes Meta Ads minggu 1 & Micro-Warm DM IG; pantau minimal 2-3 chat iklan masuk dan 1 klien berbayar |
| Problem-aware hook di iklan & DM mampu menyadarkan pemilik usaha mengapa IG/WA saja tidak cukup | Belum teruji | Evaluasi CTR iklan Carousel dan rasio balasan Micro-Warm DM IG |
| Rp100.000 selama 1 minggu cukup untuk menghasilkan minimal 2-3 chat iklan dan 1 klien berbayar | Belum teruji | Pantau selama 7 hari penayangan; evaluasi menyeluruh setelah minggu 1 |
| Default framing `.com` di Template 5.2 mendorong mayoritas klien memilih `.com` sehingga blended margin > 60% | Belum teruji | Catat rasio pilihan `.com` vs `.id` pada 3-10 klien pertama |
| Kuota gratis update konten ringan tahunan (2x/4x/6x) menghilangkan keberatan ketiadaan CMS dan mendorong retensi tahun ke-2 | Asumsi produk & operasional | Catat respons calon klien di chat dan tingkat pemakaian kuota tahun pertama |
| Format Bukti Pemesanan PDF ber-TTD digital dengan Nama Lengkap Pendiri sesuai rekening bank memperkuat kepercayaan transaksi | Asumsi tata kelola | Catat respons calon klien terhadap dokumen; [HIPOTESIS] target konversi dari pengiriman PDF ke DP dipatok 80% |
| Satu pendiri dengan bantuan AI (paket Rp100rb/bln di awal) sanggup menyelesaikan 5 klien pertama sesuai SLA | Tidak ada klien nyata; 6 demo dibangun sendiri | Catat waktu aktual pengerjaan klien pertama di register (patokan estimasi: 5-12 jam kerja nyata untuk Starter) |

## 9. Keputusan Aktif
- Keputusan yang sudah final:
  - Harga paket, isi paket, domain dan hosting 1 tahun, dan skema perpanjangan tahun ke-2 (LOCKED).
  - Kepemilikan akun & registrant domain tahun pertama atas nama ENLESWEB; opsi transfer EPP code dan file arsip build statis zip jika tidak perpanjang di tahun kedua (Decision 002).
  - Reaktivasi website nonaktif: Bebas biaya tambahan/penalti reaktivasi (Decision 005).
  - Penolakan klien non-target (toko online payment gateway, tanpa materi mentah, fitur app kompleks, korporat tender, janji garansi SEO/omzet, klien luar negeri) (Decision 004).
  - Persona komunikasi publik menggunakan kata "kami" dan "tim" (Decision 001).
  - Format transaksi: Chat WhatsApp + Bukti Pemesanan formal PDF bertanda tangan digital yang mencantumkan Nama Lengkap Pendiri sesuai rekening bank pribadi sebagai Penanggung Jawab Resmi Studio ENLESWEB (Decision 003 & Decision 017).
  - Pembagian peran pesan: Headline homepage (*solution-aware*) dipertahankan tanpa perubahan; kalimat pertama caption iklan Meta Ads, judul slide pembuka Carousel, dan pesan pembuka Micro-Warm DM wajib menggunakan *problem-aware hook* ("mengapa IG/WA saja tidak cukup") (Decision 016).
  - Ambang sinyal minimal tes Meta Ads: 2–3 chat masuk ke WhatsApp dari iklan, dicatat terpisah dari chat hasil Micro-Warm Outreach DM IG (Decision 006 & Decision 013).
  - Jalur konversi tunggal via WhatsApp; Meta Pixel memakai event `AddToCart` dan `ViewContent`.
  - Satu homepage, tanpa testimoni/rating/urgensi palsu, anti-slop copy dan visual.
  - Homepage di Cloudflare Workers, demo di Vercel.
  - Aturan operasional terkunci di `sop.md` v1.2 (**CLOSED**): DP 50%/pelunasan 50%, waktu 3/7/14 hari kerja, kuota revisi pembuatan 2x/2x/4x, garansi bug 30 hari, serta kuota gratis putaran update konten ringan tahunan 2x Starter / 4x Business / 6x Growth (maks 5–10 item/putaran, SLA 1–2 hari kerja, kelebihan kuota Rp50.000/putaran, di-reset tiap tahun saat Perpanjangan Terkelola) (Decision 015 & Decision 017).
  - Waktu pembelian domain & Pembatalan: Domain untuk semua paket baru dibeli setelah DP 50% masuk DAN materi dasar lengkap; refund 50% DP jika batal sebelum domain dibeli dan sebelum draf dikirim; DP hangus (0%) jika domain sudah dibeli, draf dikirim, atau lewat 60 hari On-Hold (Decision 017).
  - Aturan keterlambatan materi (On-Hold 60 Hari): Lewat 7 hari kalender sejak DP tanpa materi lengkap dialihkan ke status Tunda Sementara (*On-Hold* / Antrean Pasif) sehingga slot 3 proyek aktif pendiri bebas; klien punya waktu maksimal 60 hari kalender sejak tanggal DP untuk melengkapi materi sebelum DP hangus (Decision 017).
  - Perhitungan "10 klien pertama": Target 90 hari dihitung dari **DP masuk**; Gerbang mulai merancang blueprint JSON dan membangun Website Builder dihitung **setelah klien ke-10 go live** (proyek selesai, tayang, dan lunas) (Decision 011).
  - Ambisi sistem jangka panjang: Difokuskan ke **Productized System** terlebih dahulu; SaaS mandiri ditunda dan bersifat opsional pasca-Productized System stabil (Decision 011).
  - Estimasi jam kerja pengerjaan paket Starter: Dipatok **5 – 12 jam kerja aktual per klien** (Decision 012).
  - Hipotesis konversi Bukti Pemesanan PDF: Target konversi pengiriman PDF Bukti Pemesanan + TTD digital ke transfer DP nyata dipatok sebesar **80%** (Decision 012).
  - Penundaan kenaikan biaya AI tools: Dikunci tetap **Rp100.000/bulan** dan baru boleh naik ke Rp300.000–Rp400.000/bulan setelah minimal **5 klien selesai dan lunas (100%) ATAU saat menangani 2 proyek Growth/Custom secara simultan** (Decision 014).
  - Default framing `.com` di SOP WhatsApp: Klien bebas pilih `.com` atau `.id` tanpa biaya tambahan (Decision 010), namun Template 5.2 wajib merekomendasikan `.com` sebagai kalimat standar sebelum menyebut ekstensi lain demi menjaga *blended margin* > 60% (Decision 012 & Decision 014).
  - Materi iklan Meta Carousel (4 slide) & Urutan prioritas demo: Setiap kartu wajib mencantumkan label tier dan harga secara eksplisit (#1 `tuntas: Paket Business Rp750.000`, #2 `Jerseay: Paket Growth Rp1.200.000`, #3 `ripeir: Paket Starter Rp450.000`, #4 Ringkasan Paket & CTA WA), didukung skrip jembatan ekspektasi di Template 5.2 SOP WhatsApp (Decision 013 & Decision 016).
  - Eksperimen Micro-Warm Outreach manual (Rp0): Maksimal 2–3 pemilik usaha/hari, sapaan awal **hanya via DM Instagram `@enlesweb`** (dengan pemanasan *like/reply story*), dicatat terpisah dari metrik iklan, dan dijeda otomatis saat 3 slot proyek aktif penuh (Decision 013).
  - Anggaran tes Meta Ads minggu pertama: **Rp100.000** untuk 1 minggu, lalu dijeda untuk evaluasi menyeluruh dengan aturan jalur A/B/C (`rencana.md`, Decision 009).
  - Anggaran iklan 90 hari: **Rp500.000 sampai Rp1.000.000**, di luar AI tools dan domain (Decision 009). Plafon Rp500.000 pertama tersedia langsung; pembukaan sisa plafon hingga Rp1.000.000 dibuka setelah minimal 1 DP masuk dan diperbolehkan didanai dari tambahan modal pemilik.
  - Hard stop hari ke-30 sejak iklan tayang: jika 0 DP, seluruh iklan berhenti total dan bisnis masuk mode jeda mutlak (Decision 009).
  - Batas 3 proyek aktif; calon klien ke-4 dan seterusnya ditolak sopan atau diminta menunggu tanpa DP; iklan dijeda jika menunggu lebih dari 2 orang (Decision 009).
  - Alat PDF dan TTD digital: gratis (Google Docs/Canva + tanda tangan gambar atau fitur gratis Acrobat/Google), dikunci 18 Okt 2026 (Decision 007).
  - Konten organik IG `@enlesweb` sebagai kanal kedua dengan guardrail waktu dan prioritas (Decision 008).
- Hal yang tidak akan dilakukan untuk saat ini (Fokus penuh pada 10 klien pertama):
  - Memakai testimoni, rating bintang, jumlah klien, atau urgensi palsu.
  - Menambah kompleksitas atau fitur pada paket Starter dan Business.
  - Membangun Website Builder atau merancang SaaS sebelum klien ke-10 go live (selesai, tayang, dan lunas).
  - Menggunakan tools scraping/outbound berbayar (Apollo.io dkk.) atau melakukan *cold spam* ke nomor WhatsApp sebelum 10 klien pertama selesai.
  - Menaikkan langganan AI tools di atas Rp100.000/bulan sebelum 5 klien selesai dan lunas (atau 2 Growth/Custom simultan).
  - Mempromosikan paket Custom secara aktif di iklan.

## 10. Prioritas Saat Ini (Sisa 3 Tugas Eksekusi Minggu 0 + Peluncuran Minggu 1)
Detail jadwal ada di `Strategy/rencana.md` (SOP operasional WhatsApp telah **CLOSED** di `sop.md` v1.2).
1. **Beli domain `enlesweb.com`** dan hubungkan ke Cloudflare Workers menggantikan staging `workers.dev`.
2. **Buat materi iklan Carousel (4 slide)** memakai `carousel-generator/` dengan *problem-aware hook* di pembuka dan label tier/harga eksplisit (`tuntas` Business Rp750rb, `Jerseay` Growth Rp1,2jt, `ripeir` Starter Rp450rb).
3. **Kunci draf template PDF Bukti Pemesanan** ber-TTD digital yang mencantumkan Nama Lengkap Pendiri (sesuai rekening bank pribadi) sebagai Penanggung Jawab Resmi Studio ENLESWEB.
4. **Tayangkan tes Meta Ads minggu pertama** (target 21 Okt 2026, Rp100.000) dan jalankan eksperimen **Micro-Warm Outreach DM IG manual** (2–3 usaha/hari, tercatat terpisah), lalu evaluasi hasil di akhir Minggu 1 sesuai aturan jalur A/B/C.

## 11. Pertanyaan Terbuka
- [BELUM DIKETAHUI] Berapa rasio konversi aktual dari chat WhatsApp masuk menuju pembayaran DP nyata pada uji coba minggu pertama (baik dari Meta Ads maupun Micro-Warm Outreach DM IG)? (Data empiris lapangan).
- [BELUM DIKETAHUI] Berapa persentase riil calon klien yang memilih domain `.com` vs `.id` setelah diterapkannya *default framing* `.com` di SOP WhatsApp Template 5.2?
- [BELUM DIKETAHUI] Niche mana dari 3 prioritas utama (`tuntas` Bimbel, `Jerseay` Jersey Custom, `ripeir` Servis Perangkat) yang paling cepat menghasilkan chat dan DP pertama?

## 12. Riwayat Perubahan
| Tanggal | Versi | Perubahan | Sumber |
|---|---|---|---|
| 14 Oktober 2026 | 1.0 | Draf awal Context Summary ENLESWEB: fondasi bisnis, 3 tier paket komersial, portofolio 6 konsep demo live di Vercel, arsitektur Astro di Cloudflare Workers. | Dokumen master & PRD |
| 14 Oktober 2026 | 1.1 | Penyelarasan operasional: jam pengerjaan 09.00-21.00 WIB, kapasitas simultan 2-3 klien, penegasan format transaksi chat WA + Bukti Pemesanan formal PDF bertanda tangan digital (Decision 001 - 006). | SOP v1.1, arahan pemilik |
| 14 Oktober 2026 | 1.2 | Sinkronisasi permodalan siap pakai (Rp1-1,5jt), runway uji 30 hari, alat PDF/TTD Rp0 (Decision 007), konten IG organik terbatas (Decision 008), dan parameter rencana 90 hari (Decision 009). | Grill-me pemilik |
| 14 Oktober 2026 | 1.3 | Sinkronisasi kebijakan domain klien bebas pilih `.com` atau `.id` tanpa biaya tambahan dan subsidi akuisisi sadar pada paket Starter (Decision 010). | Arahan pemilik |
| 14 Oktober 2026 | 1.4 | Pembaruan keputusan strategis & resolusi pertanyaan terbuka: mekanisme plafon iklan 2 tahap, aturan hard stop 30 hari 0 DP, arahan porsi dominan `.com`, patokan jam kerja Starter 5–12 jam, hipotesis konversi PDF 80%, gerbang blueprint JSON pasca-klien ke-10 go live, fokus jangka panjang Productized System (Decision 011 - 012). | Sesi arahan pemilik 14 Okt 2026 |
| 15 Oktober 2026 | 1.5 | Sinkronisasi menyeluruh header metadata dokumen master, dokumen V3, dan histori progress konteks ke status rilis 15 Oktober 2026 yang sepenuhnya selaras dengan Decision 002. | Sesi sinkronisasi dokumen 15 Okt 2026 |
| 16 Oktober 2026 | 1.6 | Sinkronisasi 6 perubahan strategis & operasional (Decision 013 - 017): (1) pembukaan Micro-Warm Outreach manual Rp0 via DM IG (2-3/hari) & penguncian urutan prioritas 3 demo (`tuntas`, `Jerseay`, `ripeir`), (2) penundaan kenaikan biaya AI tools hingga 5 klien lunas atau 2 Growth/Custom simultan & skrip default framing `.com` di SOP WA, (3) penambahan kuota gratis putaran update konten ringan tahunan (2x/4x/6x, lewat kuota Rp50rb/putaran, reset saat renewal terkelola), (4) label tier & harga di iklan Carousel 4 slide + jembatan ekspektasi di Template 5.2 SOP, (5) transparansi Nama Lengkap Pendiri di PDF, pembelian domain setelah DP + materi lengkap, & status On-Hold 60 hari, serta (6) aturan Problem-Aware Hook di iklan/DM & penutupan status SOP (`sop.md` v1.2 CLOSED). | Sesi `/grill-me` 16 Okt 2026 |

**Aturan:** Bedakan fakta, estimasi, hipotesis, dan keputusan. Jangan menganggap data yang belum tersedia sebagai nol. Jika informasi berubah, catat tanggal dan sumber perubahannya.