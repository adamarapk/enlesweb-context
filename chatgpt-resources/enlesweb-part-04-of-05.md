# ENLESWEB KNOWLEDGE BASE - PART 04 OF 05 (BERSAMBUNG)
> **Berkas Bersambung:** Bagian 4 dari 5
> **Konteks:** Dokumen ini merupakan Bagian 4 dari 5 berkas bersambung master context ENLESWEB untuk ChatGPT Knowledge Base / Custom GPT / Proyek AI.
> 
> **Daftar 5 Berkas Bersambung:**
> 1. enlesweb-part-01-of-05.md: Start Here (summary.md) & Visi Strategis (visi.md)
> 2. enlesweb-part-02-of-05.md: Model Bisnis (model-bisnis.md), Rencana Strategis (rencana.md), Matriks KPI (kpi.md), & Register Mingguan (weekly-review.md)
> 3. enlesweb-part-03-of-05.md: Positioning Pasar (positioning.md), Standar Operasional Prosedur (sop.md), & Register Leads (leads.md)
> 4. enlesweb-part-04-of-05.md: Decision Log (decision-log.md) & Context Master (enlesweb-context-master.md)
> 5. enlesweb-part-05-of-05.md: Riset Kompetitor (riset_kompetitor_enlesweb.md) & Dokumentasi Teknis Web V4 (ENLESWEB-DOCS-V4.md)

---

<!-- ===================================================================== -->
<!-- DOKUMEN 1 DARI 2 DI PART 4: Business Memory/decision-log.md -->
<!-- ===================================================================== -->

# DECISION LOG

Log keputusan strategis dan operasional bisnis ENLESWEB. Setiap keputusan penting dicatat secara terstruktur untuk menjaga akuntabilitas, transparansi, dan evaluasi berkala.

---

## Decision 001
- **Tanggal:** 14 Oktober 2026
- **Topik:** Penggunaan Persona "Kami" dan "Tim" dalam Komunikasi Publik
- **Status:** Diputuskan

### 1. Masalah yang ingin diselesaikan
ENLESWEB saat ini beroperasi dengan model *solo founder* yang dibantu AI assistant. Perlu diputuskan apakah komunikasi ke calon klien (homepage, iklan, WhatsApp) menggunakan kata ganti tunggal ("saya/aku") atau jamak ("kami/tim").

### 2. Keputusan
Menggunakan kata **"kami"** dan **"tim"** secara konsisten seperti studio/agensi website profesional.

### 3. Alasan
Membangun persepsi profesionalitas dan rasa aman bagi calon klien UMKM. Kata "kami" lazim digunakan oleh badan usaha/studio skala kecil.

### 4. Alternatif yang dipertimbangkan
- Opsi A: Menggunakan kata "saya/aku" dan menonjolkan profil personal pendiri (*solo builder*).
- Opsi B: Menggunakan "kami" namun secara ketat menghindari penyebutan kata "tim".
- Opsi C: Menggunakan "kami" dan "tim" secara wajar (Dipilih).

### 5. Bukti dan asumsi
- Fakta: Bisnis dijalankan solo oleh pendiri dibantu AI.
- Asumsi: Klien UMKM lebih percaya bertransaksi dengan entitas "studio/tim" dibanding perorangan.
- Risiko: Potensi persepsi salah jika klien menuntut rapat dengan banyak staf. Mitigasi: Jika ditanya langsung mengenai proses kerja internal atau penggunaan AI, pendiri menjawab dengan jujur dan transparan.

### 6. Eksperimen atau tindakan
- Terapkan di materi promosi dan template chat SOP WhatsApp.

---

## Decision 002
- **Tanggal:** 14 Oktober 2026
- **Topik:** Kepemilikan Akun Registrar dan Registrant Domain Tahun Pertama
- **Status:** Diputuskan

### 1. Masalah yang ingin diselesaikan
Sebelumnya direncanakan *registrant* domain didaftarkan langsung atas nama klien sejak awal di dalam 1 akun Domainesia. Hal ini menimbulkan ketergantungan verifikasi dokumen (seperti KTP untuk domain `.id`), birokrasi awal yang rumit, dan keraguan teknis registrasi multi-registrant di satu akun.

### 2. Keputusan
- **Tahun Pertama:** Seluruh akun registrar dan data *registrant* domain didaftarkan atas nama **ENLESWEB**.
- **Tahun Kedua (Renewal):** Klien diberikan pilihan bebas:
  1. Melanjutkan perpanjangan terkelola bersama ENLESWEB (flat Rp400.000/tahun untuk `.com`/`.id` atau Rp300.000/tahun untuk domain lain) yang sudah mencakup domain, hosting, dan pemeliharaan script.
  2. Beralih mandiri: ENLESWEB memberikan opsi transfer kepemilikan domain (kode transfer EPP / Auth Code) dan penyerahan arsip file website hasil *build* statis (`.zip` dari `dist/`) agar klien dapat mengelola hosting mandiri.

### 3. Alasan
Menghilangkan friksi pendaftaran di awal, mempercepat proses *launching* website dalam hitungan hari (3-14 hari kerja), dan tetap memberikan kebebasan penuh tanpa *vendor lock-in* saat masa perpanjangan tiba.

---

## Decision 003
- **Tanggal:** 14 Oktober 2026
- **Topik:** Penerbitan Bukti Pemesanan Formal Format PDF dan TTD Digital
- **Status:** Diputuskan

### 1. Masalah yang ingin diselesaikan
Transaksi pembayaran DP 50% dan pelunasan 50% dilakukan melalui rekening bank pribadi pendiri. Perlu penguat legitimasi formal untuk meminimalisasi keraguan calon klien tanpa perlu membuat kontrak hukum notaris yang rumit.

### 2. Keputusan
Wajib menerbitkan dan mengirimkan dokumen **Bukti Pemesanan Formal berformat PDF dengan tanda tangan digital (TTD digital)** kepada klien setelah kesepakatan dan sebelum/saat DP dibayarkan.

### 3. Alasan
Memberikan kepastian hukum dan rasa aman yang nyata bagi klien UMKM, merinci secara formal ruang lingkup pekerjaan, SLA waktu, kuota revisi, dan rincian biaya.

---

## Decision 004
- **Tanggal:** 14 Oktober 2026
- **Topik:** Penolakan Segmen Klien Non-Target (Anti-Target)
- **Status:** Diputuskan

### 1. Masalah yang ingin diselesaikan
Kapasitas produksi solo founder terbatas. Melayani permintaan di luar spesialisasi inti website statis akan menghabiskan waktu dan merusak SLA pengerjaan.

### 2. Keputusan
Mengunci penolakan secara sopan (atau menolak di awal) terhadap:
1. Toko online kompleks dengan keranjang belanja, integrasi payment gateway, dan stok produk.
2. Klien tanpa bahan mentah (foto/teks dasar) yang meminta seluruh materi dikarang dari nol.
3. Permintaan fitur aplikasi dinamis (login member, sistem booking kompleks, database CMS).
4. Korporat besar dengan jalur birokrasi tender dan kontrak berbelit.
5. Klien yang menuntut jaminan peringkat #1 Google atau jaminan omzet/penjualan.
6. Calon klien luar negeri.

### 3. Alasan
Fokus 100% pada pencapaian 10 klien pertama yang paling realistis dengan siklus konversi cepat dan kepuasan terjamin.

---

## Decision 005
- **Tanggal:** 14 Oktober 2026
- **Topik:** Kebijakan Bebas Biaya Reaktivasi Website Nonaktif
- **Status:** Diputuskan

### 1. Masalah yang ingin diselesaikan
Menentukan kebijakan biaya jika website klien sempat dinonaktifkan karena melewati masa tenggang 14 hari di tahun kedua, kemudian klien ingin mengaktifkannya kembali.

### 2. Keputusan
**Tidak ada biaya tambahan reaktivasi (Rp0 denda/biaya reaktivasi).** Klien hanya perlu membayar biaya perpanjangan flat tahunan normal (Rp300rb atau Rp400rb), dengan catatan domain tersebut belum kedaluwarsa permanen atau dirilis ke publik oleh pihak registrar.

### 3. Alasan
Membangun hubungan jangka panjang yang ramah klien dan tidak memberatkan UMKM yang mungkin mengalami keterlambatan arus kas sementara.

---

## Decision 006
- **Tanggal:** 14 Oktober 2026
- **Topik:** Ambang Sinyal Minimal Tes Meta Ads Minggu Pertama
- **Status:** Diputuskan

### 1. Masalah yang ingin diselesaikan
Dengan anggaran pengujian Rp100.000 selama 1 minggu, diperlukan metrik antara (*intermediate indicator*) yang realistis untuk menilai ketertarikan pasar sebelum kampanye dijeda untuk evaluasi.

### 2. Keputusan
Menetapkan ambang sinyal valid pengujian: **Minimal 2–3 chat masuk ke WhatsApp** yang menanyakan rincian paket, konsultasi kebutuhan, atau kecocokan demo website. Target konversi akhir tetap minimal 1 klien berbayar.


---

## Decision 007
- **Tanggal:** 14 Oktober 2026
- **Topik:** Alat PDF dan TTD Digital untuk Bukti Pemesanan
- **Status:** Diputuskan

### 1. Masalah yang ingin diselesaikan
Decision 003 mewajibkan Bukti Pemesanan PDF bertanda tangan digital, tetapi alat pembuatnya belum dipilih (pertanyaan terbuka di `summary.md`).

### 2. Keputusan
Template dibuat sekali (Google Docs atau Canva), diisi per klien, diekspor ke PDF. TTD digital memakai tanda tangan gambar/stempel pendiri atau fitur gratis (Adobe Acrobat online atau e-signature Google Docs). Tanpa layanan e-sign berbayar. Alat final dikunci pada hari ke-5 Minggu 0 (18 Oktober 2026).

### 3. Alasan
Biaya Rp0, dapat dikerjakan kurang dari 10 menit per klien, dan tidak menggerus margin Starter.

### 4. Bukti dan asumsi
- Asumsi: TTD gratis cukup meyakinkan klien UMKM.
- Risiko: kekuatan hukum lebih rendah dari penyedia e-sign tersertifikasi. Mitigasi: dokumen merinci ruang lingkup, SLA, revisi, dan biaya. Tinjau ulang jika ada sengketa atau permintaan klien.

---

## Decision 008
- **Tanggal:** 14 Oktober 2026
- **Topik:** Konten Organik Instagram sebagai Kanal Kedua

### 1. Masalah yang ingin diselesaikan
Anggaran iklan kecil. `summary.md` menyebut Meta Ads sebagai satu-satunya kanal, sementara IG `@enlesweb` sudah ada.

### 2. Keputusan
Konten organik IG aktif sebagai kanal kedua gratis, dengan guardrail: hanya memakai ulang aset `carousel-generator/`, maksimal 2-3 post/minggu, dibatch sekali seminggu (maksimal sekitar 2 jam), prioritas chat WA lalu pengerjaan klien lalu konten, dijeda otomatis jika proyek aktif sudah 3. Larangan testimoni/rating/jumlah klien/urgensi palsu tetap berlaku. Bukan outreach, sehingga tidak melanggar prinsip inbound dulu.

### 3. Alasan
Menambah paparan tanpa biaya iklan, dengan beban kerja dibatasi demi kapasitas solo founder.

### 4. Bukti dan asumsi
- Asumsi: konten organik tidak menggerus waktu pengerjaan. Validasi: catat jam konten tiap minggu di `weekly-review.md`.

---

## Decision 009
- **Tanggal:** 14 Oktober 2026
- **Topik:** Batas Anggaran, Titik Berhenti, dan Kapasitas Rencana 90 Hari

### 1. Masalah yang ingin diselesaikan
Rencana 90 hari membutuhkan batas pengeluaran iklan, kondisi berhenti, dan aturan saat kapasitas penuh (lihat `Strategy/rencana.md`).

### 2. Keputusan
1. Anggaran iklan 90 hari: Rp500.000 sampai Rp1.000.000, di luar AI tools dan biaya domain. Rp100.000 tes minggu 1 termasuk di dalamnya.
2. Hard stop hari ke-30 sejak iklan tayang: jika 0 DP, seluruh iklan berhenti dan bisnis masuk mode jeda sampai ada modal atau strategi baru.
3. Batas 3 proyek aktif. Calon klien ke-4 dan seterusnya ditolak sopan atau diminta menunggu tanpa DP. Iklan dijeda jika calon klien menunggu lebih dari 2 orang.
4. Aturan keputusan hari ke-7: jalur A (chat dan DP tercapai, iklan lanjut), jalur B (chat tercapai tanpa DP, bedah percakapan), jalur C (chat kurang dari 2, ganti satu variabel dan ulang tes sekali).

### 3. Alasan
Melindungi modal terbatas dan kapasitas solo founder, serta memaksa keputusan berbasis data.

### 4. Bukti dan asumsi
- Asumsi: 30 hari cukup untuk mendapat minimal 1 DP.
- Interpretasi telah dikonfirmasi [KEPUTUSAN]: Plafon iklan tahap pertama Rp500.000 tersedia langsung; pembukaan sisa plafon hingga Rp1.000.000 mensyaratkan minimal 1 DP masuk dan diperbolehkan didanai menggunakan tambahan modal pemilik.
- Aturan pemulihan dikonfirmasi [KEPUTUSAN]: Hard stop mutlak hari ke-30 jika 0 DP (seluruh iklan berhenti total seketika tanpa pembakaran modal, aset digital tetap live di tier gratis Cloudflare/Vercel hingga evaluasi strategi baru).

---

## Decision 010
- **Tanggal:** 14 Oktober 2026
- **Topik:** Kebijakan Ekstensi Domain Klien Bebas Pilih (.com dan .id) dan Subsidi Peluncuran Starter
- **Status:** Diputuskan

### 1. Masalah yang ingin diselesaikan
Biaya pendaftaran registrar untuk domain `.id` (Rp243.090) jauh lebih tinggi dibanding `.com` (Rp152.070). Pada paket Starter harga peluncuran (Rp450.000), domain `.id` menekan margin kotor tunai menjadi 46,0% (dibandingkan 66,2% jika klien memilih `.com`). Perlu diputuskan apakah klien dibebaskan memilih atau dikenakan biaya selisih.

### 2. Keputusan
1. Klien bebas memilih ekstensi domain `.com` atau `.id` tanpa biaya tambahan di seluruh paket inti (Starter, Business, Growth).
2. Rendahnya margin kotor Starter jika klien memilih `.id` (46,0%) diakui secara sadar sebagai bentuk **subsidi akuisisi 10 klien pertama** untuk menghilangkan friksi konversi UMKM lokal.
3. Evaluasi harga paket Starter setelah 10 klien pertama selesai akan mengacu pada target ambang margin kotor minimal 60% dengan domain `.id` (acuan analitis: Rp610.000). Ambang batas margin kotor bisnis selama 10 klien pertama ditetapkan minimal 60% secara gabungan (*blended*), bukan per paket tunggal.

### 3. Alasan
Menjaga konsistensi janji positioning ENLESWEB yang "pasti, mudah, dan transparan tanpa biaya tersembunyi" bagi pemilik usaha lokal di Indonesia.

### 4. Bukti dan asumsi
- Fakta: Biaya registrar Domainesia tahun pertama `.com` Rp152.070 dan `.id` Rp243.090 (termasuk PPN 11%).
- Asumsi: Sebagian klien akan tetap memilih `.com`, sehingga blended margin tetap berada di atas ambang 60%.
- Mitigasi: Jika seluruh 3 klien pertama memilih `.id` dan blended margin jatuh di bawah 60%, evaluasi kenaikan harga Starter atau pembatasan kuota `.id` dipercepat.

---

## Decision 011
- **Tanggal:** 14 Oktober 2026
- **Topik:** Ambisi Sistem Jangka Panjang (Productized System Dulu) dan Gerbang Perancangan Blueprint JSON
- **Status:** Diputuskan

### 1. Masalah yang ingin diselesaikan
Menentukan batasan ambisi sistem jangka panjang ENLESWEB (apakah harus menjadi SaaS mandiri atau cukup sampai Productized System) dan menentukan kapan gerbang perancangan cetak biru (blueprint JSON) Website Builder internal dibuka.

### 2. Keputusan
1. Ambisi sistem jangka panjang dikunci untuk mencapai **Productized System terlebih dahulu**. Transformasi menuju SaaS mandiri dideferensiasi dan ditunda hingga Productized System terbukti matang, stabil, dan memiliki kebutuhan komersial nyata.
2. Perancangan dokumen spesifikasi teknis blueprint JSON dan pembangunan Website Builder internal (fase 1 dan 2) dikunci untuk dimulai persis **setelah klien ke-10 go live** (proyek selesai, website tayang di domain asli, serah terima tuntas, pelunasan 100% diterima, dan jam kerja tercatat di register).

### 3. Alasan
Mencegah jebakan *premature engineering* dan *feature bloat* sebelum adanya validasi pasar nyata dan pola komponen berulang yang terbukti dari 10 proyek komersial riil.

---

## Decision 012
- **Tanggal:** 14 Oktober 2026
- **Topik:** Arahan Portofolio Domain Dominan .com, Patokan Jam Kerja Starter, dan Hipotesis Konversi PDF Transaksi
- **Status:** Diputuskan

### 1. Masalah yang ingin diselesaikan
Memastikan kesehatan ekonomi bisnis pada pelaksanaan akuisisi dan operasional awal dengan menetapkan arah portofolio domain, patokan waktu pengerjaan Starter, dan target konversi dokumen transaksi.

### 2. Keputusan
1. **Arahan Portofolio Domain:** Pemilik secara strategis mengarahkan portofolio akuisisi klien menghendaki porsi domain `.com` lebih besar dibanding `.id` guna mengamankan margin kotor kas (66,2% vs 46,0%) dan menjaga agar margin kotor gabungan (*blended*) seluruh proyek selesai tetap bertahan di atas ambang minimal 60%.
2. **Patokan Jam Kerja Starter:** Jam kerja aktual pengerjaan 1 klien paket Starter dipatok pada estimasi **5 – 12 jam kerja nyata**, dengan ambang batas maksimal 15 jam sebelum evaluasi harga/proses dipicu.
3. **Hipotesis Konversi Dokumen Bukti Pemesanan:** Target tingkat konversi dari pengiriman dokumen Bukti Pemesanan formal PDF bertanda tangan digital menuju pembayaran DP nyata dipatok sebesar **80%**. Data realisasi aktual dicatat di register pengerjaan mingguan sebagai data empiris.

### 3. Alasan
Memberikan batasan operasional dan target konversi yang terukur bagi solo founder dalam mengeksekusi rencana 90 hari dan pengujian Meta Ads minggu pertama.

---

## Decision 013
- **Tanggal:** 16 Oktober 2026
- **Topik:** Pembukaan Jalur Micro-Warm Outreach Manual (Rp0) & Hierarki Prioritas 3 Demo Akuisisi
- **Status:** Diputuskan

### 1. Masalah yang ingin diselesaikan
Sebelumnya seluruh bentuk *outreach* dilarang mutlak sebelum 10 klien pertama selesai dan akuisisi hanya mengandalkan *cold* Meta Ads serta konten organik IG `@enlesweb`. Diperlukan jalur validasi jemput bola tanpa biaya yang tidak membebani kapasitas pendiri dan tidak membahayakan nomor WhatsApp utama dari risiko blokir spam.

### 2. Keputusan
1. **Larangan Tools Outbound Berbayar Tetap Berlaku:** Penggunaan *tools scraping/outbound* berbayar (seperti Apollo.io dkk.) tetap dilarang mutlak sebelum 10 klien pertama selesai.
2. **Pembukaan Micro-Warm Outreach Manual (Biaya Rp0):** Diizinkan menyapa maksimal **2 sampai 3 pemilik usaha per hari** secara manual dengan aturan pengaman (*guardrail*):
   - Sapaan awal wajib dilakukan **hanya melalui DM Instagram `@enlesweb`** (diawali interaksi hangat seperti *like* atau *reply story* terlebih dahulu), dan baru diarahkan ke WhatsApp apabila prospek merespons positif (melindungi nomor WA utama `6285156801570` dari risiko *report/ban*).
   - Prospek dan chat dari jalur *Micro-Warm Outreach* wajib **dicatat terpisah** dari metrik uji coba iklan Meta Ads Minggu 1 agar evaluasi sinyal 2–3 chat (Decision 006) tidak mengalami bias atribusi.
   - Aktivitas *Micro-Warm Outreach* **dijeda otomatis** apabila slot kapasitas 3 proyek aktif sedang penuh.
3. **Urutan Prioritas 3 Demo Akuisisi (DM Manual & Iklan Carousel 4 Slide):** Dikunci berdasarkan nilai transaksi pelanggan:
   - **Prioritas #1:** `tuntas` (Bimbel & Les Privat, Paket Business Rp750.000) sebagai pembuka Carousel Meta Ads (Slide 1) dan target utama DM manual.
   - **Prioritas #2:** `Jerseay` (Studio Jersey Custom, Paket Growth Rp1.200.000) sebagai target utama kedua DM manual dan Slide 2 iklan.
   - **Prioritas #3:** `ripeir` (Servis Laptop/HP, Paket Starter Rp450.000) sebagai perwakilan pintu masuk harga Rp450.000 pada Slide 3 iklan (diikuti Slide 4 berisi Ringkasan Paket & CTA WhatsApp).

### 3. Alasan
Mempercepat pembelajaran pasar dan peluang mendapatkan klien pertama dengan biaya Rp0 tanpa mengorbankan keamanan akun WhatsApp bisnis maupun kemurnian data pengujian Meta Ads.

---

## Decision 014
- **Tanggal:** 16 Oktober 2026
- **Topik:** Penundaan Kenaikan Biaya AI Tools & Default Framing Domain .com di SOP WhatsApp
- **Status:** Diputuskan

### 1. Masalah yang ingin diselesaikan
Rencana menaikkan langganan AI tools dari Rp100.000/bulan menjadi Rp300.000–Rp400.000/bulan segera setelah DP klien pertama masuk membebani arus kas tahun pertama secara prematur (menyebabkan defisit besar pada skenario konservatif). Selain itu, arahan strategis porsi domain `.com` lebih besar daripada `.id` (Decision 012) belum memiliki kalimat operasional baku di SOP WhatsApp.

### 2. Keputusan
1. **Penundaan Kenaikan Biaya AI Tools:** Langganan AI tools dikunci tetap pada **Rp100.000/bulan** dan baru boleh dinaikkan ke **Rp300.000 sampai Rp400.000/bulan** setelah **minimal 5 klien selesai dan lunas (100%) ATAU saat menangani 2 proyek Growth/Custom secara simultan**.
2. **Pembaruan Pemodelan 12 Bulan (`Strategy/model-bisnis.md`):** Menggunakan asumsi bertahap realistis (Skenario Konservatif: 6 bln Rp100rb + 6 bln Rp350rb = Rp2.700.000; Skenario Dasar: 4 bln Rp100rb + 8 bln Rp350rb = Rp3.200.000; Skenario Optimis: 2 bln Rp100rb + 10 bln Rp400rb = Rp4.200.000), yang menghemat Rp300.000/bulan kas awal dan memangkas tajam defisit skenario konservatif.
3. **Default Framing `.com` di SOP WhatsApp:** Klien tetap bebas memilih `.com` atau `.id` tanpa biaya tambahan (Decision 010), namun skrip chat pada penutup **Template 5.2 (Rekomendasi Paket)** di `Delivery & Operations/sop.md` wajib mengajukan ekstensi `.com` sebagai rekomendasi kalimat standar (*"Untuk nama domainnya, apakah namabisnis.com sudah sesuai untuk kami daftarkan?"*) sebelum menyebut opsi ekstensi lain.

### 3. Alasan
Mengamankan ketahanan modal kerja awal dan menerjemahkan target *blended gross margin* > 60% ke dalam perilaku percakapan penjualan yang konkret.

---

## Decision 015
- **Tanggal:** 16 Oktober 2026
- **Topik:** Kuota Putaran Update Konten Ringan Tahunan Pasca-Tayang & Tarif Kelebihan Kuota
- **Status:** Diputuskan

### 1. Masalah yang ingin diselesaikan
Seluruh website ENLESWEB bersifat statis murni tanpa CMS. Kebijakan lama yang menyatakan tidak ada revisi/pembaruan konten gratis sama sekali setelah website tayang (dan perubahan teks/harga dihitung pekerjaan baru tanpa tarif standar) berpotensi memicu keberatan calon klien UMKM yang khawatir kesulitan saat harga menu atau jadwal usaha mereka berubah.

### 2. Keputusan
1. **Jatah Gratis Putaran Update Konten Ringan Tahunan (Berjenjang):** Ditambahkan kuota gratis perubahan teks, daftar harga, jam buka, atau foto pada bagian yang sudah ada (tanpa mengubah struktur layout/komponen) selama 1 tahun pertama:
   - **Paket Starter (Rp450.000):** Gratis **2 kali** putaran update ringan di tahun pertama.
   - **Paket Business (Rp750.000):** Gratis **4 kali** putaran update ringan di tahun pertama.
   - **Paket Growth (Rp1.200.000):** Gratis **6 kali** putaran update ringan di tahun pertama.
2. **Definisi, SLA, & Tarif Kelebihan Kuota:** Satu putaran update berarti satu daftar perubahan ringan (maksimal 5 sampai 10 item teks/foto) yang dikirim sekaligus dalam satu pesan WhatsApp, dengan SLA pengerjaan **1–2 hari kerja**. Jika kuota tahunan habis, dikenakan biaya tetap **Rp50.000 per putaran update**. Garansi perbaikan bug teknis tetap gratis selama 30 hari setelah tayang.
3. **Reset Kuota pada Perpanjangan Terkelola Tahun Kedua:** Apabila klien memilih **Perpanjangan Terkelola** di tahun kedua dan seterusnya (flat Rp400.000/tahun untuk `.com`/`.id` atau Rp300.000/tahun untuk domain lain), jatah gratis putaran update ringan tahunan (2x/4x/6x sesuai paket awal) **otomatis di-reset kembali setiap tahun**.
4. **Cakupan Dokumentasi:** Dikunci di `Delivery & Operations/sop.md` (v1.2), dokumen PDF Bukti Pemesanan, dan dokumen strategi bisnis. Teks homepage (`CONTENT.md` dan `src/content/copy.ts`) dibiarkan tetap utuh dan tidak diubah.

### 3. Alasan
Menghilangkan friksi ketiadaan CMS bagi UMKM, menjaga beban operasional tetap terukur melalui sistem *batching* per putaran, menciptakan sumber pendapatan mikro yang jelas (Rp50.000/putaran), dan memperkuat daya tarik retensi Perpanjangan Terkelola di tahun kedua.

---

## Decision 016
- **Tanggal:** 16 Oktober 2026
- **Topik:** Jembatan Ekspektasi Demo antar-Tier, Label Harga Carousel, & Pembagian Peran Problem-Aware Hook
- **Status:** Diputuskan

### 1. Masalah yang ingin diselesaikan
Mencegah jurang ekspektasi (*expectation gap*) di mana prospek beranggaran Starter (Rp450.000) mengira akan mendapatkan fitur interaktif atau jumlah halaman sekelas demo Growth (`Jerseay`), sekaligus menjembatani kesenjangan antara pesan *solution-aware* di homepage dengan lawan utama di kepala pembeli (*"merasa cukup pakai IG/WA saja"*).

### 2. Keputusan
1. **Label Tier & Harga di Materi Iklan Carousel (4 Slide):** Setiap kartu contoh website pada iklan Carousel wajib mencantumkan label tingkatan paket dan harganya secara eksplisit (tanpa karakter em dash `—`, misalnya: `tuntas: Paket Business Rp750.000`; `Jerseay: Paket Growth Rp1.200.000`; `ripeir: Paket Starter Rp450.000`; diikuti Slide 4 Ringkasan Paket & CTA WA).
2. **Penyesuaian Skrip Rekomendasi SOP WhatsApp (Template 5.2):** Saat prospek menanyakan paket Starter (Rp450.000) atau mengacu pada demo tingkat atas dengan budget Starter, admin wajib mengirimkan tautan demo tingkat Starter (`Seruput Kopi` atau `ripeir`) sebagai acuan utama website 1 halaman, sembari menyandingkannya secara transparan dengan contoh Business (`tuntas`, hingga 6 halaman) atau Growth (`Jerseay`, hingga 10 halaman + fitur interaktif).
3. **Pembagian Peran Pesan Iklan/DM (*Problem-Aware Hook*) vs Homepage (*Solution-Aware*):** Headline homepage tetap dipertahankan tanpa perubahan. Tugas mengedukasi masalah *"mengapa IG/WA saja tidak cukup"* diwajibkan hadir pada kalimat pertama *caption* iklan Meta Ads, judul slide pembuka Carousel, dan pesan pembuka *Micro-Warm DM* di Instagram (contoh: kerepotan membalas pertanyaan jadwal/biaya bimbel berulang di WA atau rumitnya merekap ukuran jersey tim lewat chat).

### 3. Alasan
Menyelaraskan ekspektasi fitur dan anggaran sejak kontak pertama serta memastikan iklan mampu menghentikan *scroll* pemilik usaha yang belum sadar bahwa mereka membutuhkan website.

---

## Decision 017
- **Tanggal:** 16 Oktober 2026
- **Topik:** Transparansi Identitas Penanggung Jawab di PDF, Aturan On-Hold 60 Hari, Waktu Pembelian Domain, & Penutupan Status SOP v1.2
- **Status:** Diputuskan

### 1. Masalah yang ingin diselesaikan
Pembayaran ditransfer ke rekening bank pribadi pendiri sehingga memerlukan transparansi identitas formal di PDF Bukti Pemesanan. Selain itu, aturan lama yang menghanguskan DP jika klien terlambat mengirim materi lewat dari 7 hari kalender terlalu keras bagi ritme UMKM, dan pembelian domain sebelum materi lengkap berisiko merugikan kas pendiri jika klien *ghosting*.

### 2. Keputusan
1. **Transparansi Penanggung Jawab di PDF Bukti Pemesanan:** Dokumen PDF Bukti Pemesanan wajib mencantumkan **Nama Lengkap Pendiri** (sama persis dengan nama yang tertera di rekening bank pribadi penerima) sebagai **Penanggung Jawab Resmi Studio ENLESWEB** di bagian informasi pembayaran dan blok tanda tangan.
2. **Waktu Pembelian Domain (Setelah DP & Materi Dasar Lengkap):** Untuk seluruh paket, pembelian domain di registrar baru dieksekusi **setelah DP 50% diterima DAN materi dasar dinyatakan lengkap** (selama masa pengumpulan materi 1–7 hari, domain belum dibeli sehingga arus kas pendiri aman 100% dan klausul *refund* 50% DP sebelum domain dibeli berlaku konsisten; kecuali klien secara khusus meminta domain langsung didaftarkan saat DP masuk).
3. **Revisi Aturan Ghosting 7 Hari Menjadi Status On-Hold 60 Hari:**
   - Jika klien belum melengkapi materi dasar dalam **7 hari kalender** sejak DP diterima, proyek tidak langsung ditutup/dihanguskan, melainkan dialihkan ke status **Tunda Sementara (*On-Hold* / Antrean Pasif)** agar slot kapasitas 3 proyek aktif pendiri langsung bebas untuk melayani klien lain.
   - Klien diberi batas waktu maksimal **60 hari kalender sejak tanggal DP** untuk mengirimkan materi lengkap dan mengaktifkan kembali pengerjaan (mengikuti antrean slot yang tersedia saat materi masuk).
   - DP hanya hangus apabila melewati **60 hari kalender** tanpa kelengkapan materi (dan jika atas permintaan khusus domain sudah dibeli lebih dulu, biaya domain yang telah dikeluarkan tidak dapat dikembalikan).
4. **Sinkronisasi Status SOP Menjadi CLOSED (`sop.md` v1.2):** Status SOP operasional WhatsApp pada seluruh dokumen teknis dan konteks (`ENLESWEB-DOCS-V3.md` SPEC.md Bagian 13 dan `ENLESWEB-CONTEXT-PROGRESS-HISTORY.md`) resmi dinyatakan **CLOSED (Terkunci di `sop.md` v1.2)**, menyisakan 3 tugas eksekusi murni Minggu 0: pembelian domain `enlesweb.com`, pembuatan materi iklan Carousel, dan penguncian draf template PDF Bukti Pemesanan.

### 3. Alasan
Menghilangkan keraguan transfer ke rekening pribadi, melindungi slot kapasitas produksi solo founder sekaligus tetap adil bagi UMKM, serta melindungi modal kerja dari risiko pengeluaran domain prematur.

---

## Decision 018
- **Tanggal:** 17 Oktober 2026
- **Topik:** Pembelian Domain Resmi enlesweb.com, Penutupan Tugas 1 Minggu 0, dan Migrasi Status Produksi
- **Status:** Diputuskan & Terealisasi

### 1. Masalah yang ingin diselesaikan
Menuntaskan prasyarat infrastruktur kanonikal studio ENLESWEB sebelum penayangan kampanye iklan Meta Ads berbayar dan peluncuran komersial, serta mengalihkan target publik dari staging sementara (`workers.dev`) ke domain resmi `enlesweb.com`.

### 2. Keputusan
1. **Pembelian Domain Bisnis Resmi:** Domain kanonikal `enlesweb.com` telah resmi dibeli (pendaftaran registrar Domainesia tahun pertama terealisasi sebesar Rp152.070).
2. **Penutupan Tugas 1 Minggu 0:** Item 1 pada register tugas eksekusi murni Minggu 0 resmi dinyatakan **CLOSED (SELESAI)**.
3. **Penyisaan 2 Tugas Eksekusi Murni:** Menyisakan 2 tugas eksekusi murni pra-peluncuran di Minggu 0 sebelum iklan Meta Ads tayang: (1) pembuatan materi kreatif iklan Meta Carousel 4 slide berlabel tier & harga + *problem-aware hook* via `carousel-generator/`, dan (2) penguncian draf template PDF Bukti Pemesanan formal ber-TTD digital dengan Nama Lengkap Pendiri.
4. **Migrasi Status Produksi:** Mengarahkan DNS/nameserver Cloudflare ke domain `enlesweb.com` sebagai target kanonikal produksi utama (`siteUrl: 'https://enlesweb.com'`), mengakhiri ketergantungan pada subdomain staging `workers.dev`.

### 3. Alasan
Memberikan kepastian identitas resmi dan meningkatkan kredibilitas studio bagi calon klien UMKM, serta memvalidasi kesiapan teknis pelacakan Meta Pixel (`ViewContent`, `AddToCart`), link WhatsApp, OG image, dan sitemap pada domain produksi kanonikal sebelum modal iklan dialirkan.

---

## Decision 019
- **Tanggal:** 17 Oktober 2026
- **Topik:** Optimasi Menyeluruh PageSpeed Insights (Desktop 100/100 TBT 0ms, Mobile 95/100) dan Kepatuhan Agentic Browsing (3/3 100%)
- **Status:** Diputuskan & Terverifikasi (CLOSED)

### 1. Masalah yang ingin diselesaikan
Memaksimalkan kecepatan render dan menghilangkan friksi loading bagi calon klien UMKM di ponsel lambat (Slow 4G), menurunkan Total Blocking Time (TBT) ke 0 ms, serta memenuhi standar audit Lighthouse Agentic Browsing.

### 2. Keputusan
1. **Inlined 100% Stylesheet CSS (8.3 KiB):** Mengaktifkan `build: { inlineStylesheets: 'always' }` di `astro.config.mjs` untuk mengeliminasi seluruh permintaan CSS render-blocking.
2. **Preload 4 Bobot Font Poppins:** Menyematkan `<link rel="preload">` di `<head>` untuk bobot 700, 600, 500, dan 400.
3. **Skrip Sebaris Head `js-reveal` Berpelindung Fitur:** Menyematkan pemeriksaan `IntersectionObserver` di `<head>` tepat setelah preload font untuk mencegah pembatalan cache style (*style invalidation*) dan forced reflow.
4. **Penjadwalan Idle Navbar & Observer:** Mengisolasi scroll listener navbar dan inisialisasi observer ke `requestIdleCallback` (fallback `setTimeout 100ms`), membebaskan thread utama desktop sehingga TBT mencapai 0 ms.
5. **Pemuatan Meta Pixel Opsi A Murni Interaksi:** Antrean `fbq` instan di detik ke-0, unduhan `fbevents.js` (153 KiB) murni ditunda hingga interaksi pertama pengguna (`scroll`, `pointerdown`, `touchstart`, `keydown`, `click`) tanpa timer otomatis.
6. **Isolasi Hardware Compositing GPU:** Menambahkan `contain: paint; will-change: transform; transform: translateZ(0);` pada elemen SVG blur.
7. **Kepatuhan Agentic AI & Edge Caching:** Menghapus fallback SPA di `wrangler.json`, menyediakan berkas `public/llms.txt` standar, dan mengatur cache statis 1 tahun `public/_headers`.
8. **Hasil Benchmark Terverifikasi:** Desktop 100/100 (TBT 0ms, FCP 0.3s, LCP 0.6s, CLS 0.007) dan Mobile 95/100 (FCP 1.0s, LCP 1.1s, CLS 0).

### 3. Alasan
Memberikan kecepatan akses instan, menjaga anggaran iklan efektif tanpa bounce rate tinggi akibat loading lambat, dan memastikan kepatuhan teknis web modern.

---

## Decision 020
- **Tanggal:** 18 Oktober 2026
- **Topik:** Penyelesaian Template PDF Bukti Pemesanan oleh Pendiri Bisnis (CLOSED), Kesiapan Materi Iklan Meta, dan Penutupan Seluruh Tugas Minggu 0 Menuju Transisi V4
- **Status:** Diputuskan & Terealisasi (CLOSED)

### 1. Masalah yang ingin diselesaikan
Menuntaskan seluruh sisa tugas persiapan pra-peluncuran Minggu 0 agar siap beralih ke penayangan kampanye iklan Meta Ads Minggu 1 dan melayani transaksi klien secara formal tanpa keraguan rekening pribadi.

### 2. Keputusan
1. **Template PDF Bukti Pemesanan Telah Selesai Dibuat (CLOSED):** Pendiri bisnis telah resmi membuat dokumen template Bukti Pemesanan formal PDF ber-TTD digital sesuai amanat Decision 003, Decision 017, dan SOP operasional WhatsApp v1.2 (Template 5.3). Dokumen memuat Nama Lengkap Pendiri sesuai rekening bank pribadi sebagai Penanggung Jawab Resmi Studio ENLESWEB, rincian rekening transfer DP 50%, kuota gratis update konten ringan tahunan (Starter 2x, Business 4x, Growth 6x), klausul pembelian domain setelah DP + materi lengkap, dan aturan masa tenggang On-Hold 60 hari kalender.
2. **Kesiapan Materi Iklan Meta (CLOSED / SIAP TAYANG):** Tooling internal `campaign-1/` telah menghasilkan aset kreatif final: Iklan A (Video 15 detik rasio 4:5 dan 9:16) dan Iklan B (Gambar Statis v3 Whole ENLESWEB rasio 4:5 dan 9:16) berlabel tier & harga + hook masalah, siap diunggah ke Meta Ads Manager.
3. **Penutupan Seluruh Tugas Minggu 0 (100% CLOSED):** Ketiga item tugas eksekusi persiapan pra-peluncuran (Domain resmi `enlesweb.com`, Materi Iklan Meta, Template PDF Bukti Pemesanan) telah berstatus CLOSED / SELESAI. Fokus berpindah ke Minggu 1 (penayangan kampanye Meta Ads tes Rp100.000 selama 7 hari dan Micro-Warm Outreach DM IG manual).
4. **Transisi Dokumentasi Utama ke V4:** Peningkatan dokumen master ke `ENLESWEB-DOCS-V4.md`.

### 3. Alasan
Menghilangkan friksi transaksi, memberikan kepastian hukum dan rasa aman bagi klien UMKM, serta menuntaskan seluruh prasyarat pra-peluncuran secara disiplin tanpa halusinasi.

---

## Decision 021
- **Tanggal:** 18 Oktober 2026
- **Topik:** Pembatalan Format Iklan Carousel 4 Slide & Penetapan Format 1 Video (Iklan A 15s) dan 1 Gambar Statis (Iklan B v3 Whole ENLESWEB) Rasio 4:5 dan 9:16
- **Status:** Diputuskan & Terealisasi (CLOSED)

### 1. Masalah yang ingin diselesaikan
Format Carousel 4 slide memiliki keterbatasan interaktivitas swipe, risiko cropping tidak teratur di berbagai penempatan antarmuka Meta (Feed vs Stories/Reels), serta kurang optimal dalam mendemonstrasikan kelancaran interaksi website konsep dan proposisi nilai menyeluruh studio ENLESWEB secara instan kepada pengguna yang sedang scrolling cepat.

### 2. Keputusan
1. **Pembatalan Format Carousel 4 Slide:** Format iklan Carousel 4 slide resmi dibatalkan dan tidak digunakan untuk kampanye iklan berbayar perdana Meta Ads.
2. **Penetapan Format 1 Video (Iklan A) dan 1 Gambar Statis (Iklan B):** Kampanye 1 dialihkan sepenuhnya ke dua materi iklan mandiri yang masing-masing diproduksi dalam dua rasio resmi Meta agar tidak terpotong sembarangan oleh UI sistem:
   - **Iklan A (Video 15 Detik):** Menggunakan *problem-aware hook* (*"Mengapa IG & WA saja tidak cukup?"*), mendemonstrasikan showcase bergerak 3 website konsep (`tuntas`, `ripeir`, `Seruput Kopi`), penawaran harga mulai Rp450.000, domain + hosting 1 tahun, garansi update, dan ajakan chat WhatsApp langsung tanpa tombol buatan (`campaign-1/enlesweb-ads-15s-a-4x5.mp4` untuk Feed 1080x1350 dan `campaign-1/enlesweb-ads-15s-a-9x16.mp4` untuk Stories/Reels 1080x1920, salinan teks di `campaign-1/copy-iklan-a.md`).
   - **Iklan B (Gambar Statis v3 Hook Hasil - Whole ENLESWEB):** Mengusung konsep Editorial Ad OG-Image / Trio Layar HP bertingkat (`tuntas`, `ripeir`, `Seruput Kopi`), identitas resmi EnlesWeb, harga jangkar *"Mulai Rp450.000"* dengan sorotan aksen kuning, 4 baris spesifikasi fasilitas, dan catatan kejujuran konsep tanpa tombol buatan (`campaign-1/enlesweb-ads-b-4x5.png` untuk Feed 1080x1350 dan `campaign-1/enlesweb-ads-b-9x16.png` untuk Stories/Reels 1080x1920, salinan teks di `campaign-1/copy-iklan-b.md`).
3. **Penyelarasan Dokumentasi Menyeluruh:** Seluruh dokumen strategi, rencana kerja, rangkuman, dan konteks dimutakhirkan untuk menghapus dependensi pada format Carousel 4 slide dan menetapkan 1 video + 1 gambar statis sebagai materi kreatif resmi siap tayang Minggu 1.

### 3. Alasan
Format video 15 detik dan gambar statis adaptif 4:5/9:16 memberikan kepastian visual penuh (lolos verifikasi Safe Zone Meta), menyampaikan pesan dan visual secara langsung tanpa bergantung pada aksi geser pengguna, serta mewakili seluruh ekosistem studio ENLESWEB secara komprehensif.

---

## Decision 022
- **Tanggal:** 21 Oktober 2026 (Diperbarui & Terealisasi: 28 Oktober 2026)
- **Topik:** Preview Layout pra-DP dengan layout-lab untuk Mendukung Keputusan Prospek
- **Status:** Diputuskan & Terealisasi (CLOSED - Aktif di https://preview.enlesweb.com per 28 Oktober 2026)

### 1. Masalah yang ingin diselesaikan
Calon klien dapat memahami paket dan melihat website konsep, tetapi belum tentu bisa membayangkan susunan layout untuk kebutuhan usahanya sebelum membayar DP. layout-lab dapat memberi gambaran visual awal sebelum prospek membuat keputusan.

### 2. Keputusan
1. **Preview Layout sebelum DP:** Setelah prospek menerima rekomendasi paket dan demo sesuai tier, ENLESWEB memberikan satu tautan preview layout dari layout-lab sebelum mengirim ringkasan kesepakatan dan meminta DP. Pilih susunan yang relevan dengan kebutuhan prospek untuk membantu mereka menilai arah tampilan.
2. **Batas Preview:** Preview menggunakan contoh bisnis umum dan data dummy. Jelaskan bahwa tautan tersebut menunjukkan susunan layout, bukan draf proyek prospek, bukan hasil kerja klien, dan bukan janji bahwa hasil akhir akan sama persis. Preview ini tidak memulai pengerjaan proyek dan tidak dihitung sebagai draf visual dalam aturan pembatalan/refund.
3. **Prasyarat Berbagi (Terealisasi per 28 Oktober 2026):** Penggunaan kepada prospek resmi dimulai setelah deployment publik aktif di Cloudflare Workers pada subdomain `https://preview.enlesweb.com` dengan format Stateless Compact ID `https://preview.enlesweb.com/p/<id>`. Studio internal diakses via `https://preview.enlesweb.com/studio-admin/` untuk menghasilkan tautan klien yang aman.
4. **Pemisahan dari Preview Pengerjaan:** Preview resmi setelah DP tetap dibuat dari materi klien dan mengikuti paket serta proses revisi yang disepakati. layout-lab tidak menggantikannya.
5. **Batas Website Builder:** Keputusan ini tidak mengubah Decision 011. layout-lab tidak membuat website produksi atau blueprint JSON; gerbang perancangan Website Builder tetap setelah klien ke-10 go live, selesai, tayang, dan lunas.

### 3. Alasan
Memberi prospek gambaran susunan layout sebelum DP agar mereka lebih yakin terhadap arah tampilan, sambil menjaga perbedaan yang jelas antara contoh dummy pra-DP dan draf pengerjaan resmi setelah DP.

---

## Decision 023
- **Tanggal:** 28 Oktober 2026
- **Topik:** Unifikasi Infrastruktur Penuh ke Cloudflare Workers (*.enlesweb.com & preview.enlesweb.com), Penonaktifan Vercel, dan Peluncuran Produksi layout-lab
- **Status:** Diputuskan & Terealisasi (CLOSED)

### 1. Masalah yang ingin diselesaikan
Sebelumnya, showcase portofolio konsep berada di hosting Vercel (`*.vercel.app`) yang terpisah dari website utama ENLESWEB di Cloudflare Workers (`enlesweb.com`), menciptakan fragmentasi domain, ketergantungan multi-platform, dan tautan demo yang belum memakai domain kanonikal studio. Selain itu, alat composer internal `layout-lab` masih berjalan lokal tanpa domain publik, sehingga addendum alur penjualan pra-DP pada Decision 022 belum dapat dijalankan secara nyata kepada calon klien.

### 2. Keputusan
1. **Unifikasi Hosting ke Cloudflare Workers pada Subdomain *.enlesweb.com:**
   Seluruh 6 website portofolio konsep resmi dimigrasikan dan dideploy ke Cloudflare Workers menggunakan subdomain resmi di bawah `enlesweb.com`:
   - `Jerseay` (Tingkat Growth): `https://jerseay.enlesweb.com/` (sebelumnya `https://jerseay.vercel.app/`)
   - `berflower` (Tingkat Growth): `https://berflower.enlesweb.com/` (sebelumnya `https://berflower-lilac.vercel.app/`)
   - `tuntas` (Tingkat Business): `https://tuntas.enlesweb.com/` (sebelumnya `https://tuntas-steel.vercel.app/`)
   - `dipotongin` (Tingkat Growth): `https://dipotongin.enlesweb.com/` (sebelumnya `https://dipotongin.vercel.app/`)
   - `ripeir` (Tingkat Starter): `https://ripeir.enlesweb.com/` (sebelumnya `https://ripeir.vercel.app/`)
   - `Seruput Kopi` (Tingkat Starter): `https://seruput.enlesweb.com/` (sebelumnya `https://seruput-kopi.vercel.app/`)
2. **Pembaruan Tautan di Platform Induk & Penonaktifan Vercel:**
   Seluruh tombol dan tautan proyek pada website utama `enlesweb.com` (`src/config/site.ts`) telah diarahkan ke masing-masing subdomain `*.enlesweb.com`. Seluruh deployment dan proyek terkait di Vercel resmi dinonaktifkan, menjadikan ekosistem hosting ENLESWEB 100% terkonsolidasi di Cloudflare Workers.
3. **Peluncuran Produksi layout-lab di preview.enlesweb.com:**
   `layout-lab` resmi dideploy di Cloudflare Workers (`name = "layout-lab-enlesweb"`) pada subdomain `https://preview.enlesweb.com`:
   - Pratinjau susunan klien menggunakan rute Stateless Compact ID `https://preview.enlesweb.com/p/<id>` berbasis Base62 dengan salt 16-bit dan checksum 12-bit (`src/utils/recipe-codec.ts`), menggantikan query URL lama `/pratinjau?s=...`. Pratinjau terkunci ke Tema Terang secara default dan otomatis menyembunyikan tautan navbar/footer ke seksi yang tidak aktif pada resep.
   - Studio perakit internal dilindungi di bawah path `/studio-admin/` (`/studio-admin/`, `/studio-admin/galeri`, `/studio-admin/uji`, `/studio-admin/legal`).
   - Allowlist Cloudflare Worker (`src/worker.ts`) menolak request root `/` dan `/pratinjau` dengan 404 Not Found untuk mencegah akses publik langsung ke antarmuka internal studio.
   - Komposisi 43 varian dari 13 kategori section dimurnikan: kesetaraan equal tier pada Layanan (`S1`-`S4`) dan Biaya (`B1`-`B3`), footer murni tanpa kartu CTA (`F4` asimetris), eliminasi orphan card (`G1`, `G2`, `U1`), eliminasi dead space (`K2` baris 2 kolom penuh kanvas), penghapusan border kiri dekoratif pada FAQ (`Q1`, `Q2`), serta pembersihan kartu mitra pada Profil (`R1`-`R3`).
4. **Pengaktifan Penuh Alur Pra-DP (Decision 022 CLOSED):**
   Dengan terverifikasinya URL `https://preview.enlesweb.com`, admin resmi diwajibkan menggunakan generator ID studio untuk mengirimkan tautan preview layout kepada prospek sebelum meminta DP sesuai SOP WhatsApp.

### 3. Alasan
Menyatukan seluruh aset digital studio di bawah satu domain kanonikal resmi (`enlesweb.com`), memperkuat reputasi profesional di mata prospek, mengeliminasi biaya dan kompleksitas multi-vendor hosting, serta mengaktifkan instrumen penjualan pra-DP yang aman, cepat, dan teruji tanpa risiko kebocoran data klien.

---

<a id="decision-023-addendum"></a>
<a id="addendum-29-oktober-2026-penyempurnaan-arsitektur-dan-audit-komposisi-13-kategori"></a>
### Addendum (29 Oktober 2026): Penyempurnaan Arsitektur layout-lab, 5 Preset Skenario Klien, & Hasil Audit Komposisi 13 Kategori

Menindaklanjuti peluncuran produksi pada Decision 023, dilakukan standarisasi menyeluruh pada arsitektur antarmuka dan operasional `layout-lab`:
1. **Dual-Layer Token Architecture:**
   - Standarisasi pemisahan token: Studio Shell (`--ew-*`) mengadopsi identitas ENLESWEB dengan tipografi Poppins, latar surface netral, aksen tactile `#E4FF30`, dan transisi interaksi halus 150ms pada elemen shell saat `prefers-reduced-motion: no-preference`.
   - Wireframe Canvas (`--wf-*`) mengadopsi monokrom murni (`#FFFFFF`, `#E5E5E5`, `#595959`, `#111111`) dengan tipografi IBM Plex Sans serta `transition: none !important` dan `animation: none !important` (`ENERGY 1 / RHYTHM 2 / MOTION 1`) untuk menjamin evaluasi murni hierarki dan proporsi tanpa bias visual estetika.
2. **Scaled Virtual Artboard (1280px Desktop) & Chassis Fisik iPhone 15 (390px Mobile):**
   - Mode desktop mengadopsi kanvas virtual 1280px kanonikal yang diskalakan secara matematis dengan CSS `transform: scale()` (`scale = Math.min(1.0, Math.max(0.2, availableWidth / 1280))`) dengan toggle Auto-Fit dan 100% Zoom (panning horizontal) untuk mencegah reflow sempit pada layar laptop kecil atau panel workbench terbelah.
   - Mode mobile diisolasi di dalam sandboxed live iframe (`/p/<id>?clean=1`) berukuran 390x796px dalam bingkai chassis fisik iPhone 15 berukuran 414x844px (Dynamic Island, status bar 9:41, tombol samping fisik, dan Home Indicator). Pada pratinjau mandiri klien (`/p/<id>`), kanvas dirender pada viewport penuh 390x844px. Isolasi iframe menjamin media query CSS mobile berjalan 100% akurat tanpa terpengaruh lebar jendela browser host.
   - Komunikasi runtime antar-frame menggunakan `window.postMessage` (`SYNC_RECIPE`, `SCROLL_TO`, `SET_THEME`, `RECIPE_SYNCED`, `FRAME_RESIZED`) serta auto-focus deck scroll dengan highlight flash halus (`.ew-highlight-flash` 1200ms) dan shortcut keyboard `[` untuk melipat deck.
3. **Penyediaan 5 Preset Skenario Klien di Studio Admin:**
   Studio Admin (`https://preview.enlesweb.com/studio-admin/`) menyediakan 5 preset siap pakai yang dapat dipilih admin secara bebas:
   - *Lengkap · 13 Section*: Seluruh 13 kategori section aktif berurutan untuk demonstrasi kapasitas studio penuh.
   - *Starter · Ringkas*: Format esensial 4 section (Navbar, Hero, Layanan, Footer) untuk UMKM pemula.
   - *Business · Jasa*: Format komprehensif 7 section untuk bisnis layanan profesional.
   - *Business · Korporat*: Format kredibel 8 section untuk institusi atau profil korporasi.
   - *Growth · Katalog*: Format dinamis 9 section berfokus pada katalog visual dan portofolio produk.
   Admin memiliki kebebasan penuh memilih preset mana pun atau mengacak susunan resep secara manual sesuai karakter kebutuhan calon klien.
4. **Peningkatan Rangkaian Pengujian Otomatis & Mutu Kode:**
   - 46 assertion otomatis fungsional pada `scripts/test-perakit-pratinjau.mjs` (mencakup integritas codec Base62, F4 pure footer assertion, fallback CTA, uji toggle zoom, auto-focus deck scroll, dan keamanan rute).
   - 86 skenario visual snapshot Playwright pada viewport 1280px dan 390px di `/studio-admin/galeri/`.
   - 70 berkas terverifikasi melalui `astro check` dengan 0 error, 0 warning, dan 0 hint.
5. **Hasil Audit Komposisi 13 Kategori (43 Varian):**
   - Hasil evaluasi UX Arsitektural mencapai skor **9.4/10** (solid, bebas overflow, responsif, aksesibel) berbanding skor estetika pameran Dribbble **4.0/10** (karena ketiadaan elemen kosmetik/warna dekoratif yang memang sengaja dihindari).
   - Perbaikan komposisi spesifik: `R1` (center-aligned visual 16:10), `K2` (daftar 2 kolom 4fr|8fr rentang penuh bebas dead space), `K3` (headline kolom sticky), `F4` (split asimetris murni tanpa kartu CTA), `S4` (baris berselang-seling zig-zag), serta pencegahan orphan cards pada `G1`, `G2`, dan `U1`.
   - Refaktor netralisasi salinan commit `87548e1` dengan visitor-facing voice tanpa buzzwords pemasaran.

---

<a id="decision-023-addendum-31-oktober-2026"></a>
<a id="addendum-31-oktober-2026-arsitektur-multi-agent-custodians-dan-upgrade-astro-7-4-4"></a>
### Addendum (31 Oktober 2026): Arsitektur Multi-Agent Document Custodians, Zero File Kembar Lintas-Folder (Single Home), Audit Anti-Halusinasi, & Upgrade Astro 7.4.4 di `layout-lab`

Menindaklanjuti hasil evaluasi tata kelola dokumentasi ekosistem ENLESWEB, disepakati dan dikunci pembaruan sistemik:
1. **Unifikasi Tunggal Workspace (`D:\myself\web\enlesweb-workspace`):**
   - Menata ulang seluruh repositori ke dalam satu workspace root terpadu `D:\myself\web\enlesweb-workspace` (menggantikan folder lama `7project` dan mengonsolidasikan 9 repositori git mandiri dari `experiments`).
   - Menyediakan `enlesweb.code-workspace` untuk pembukaan multi-root mulus di IDE.
2. **Arsitektur Multi-Agent Document Custodians (8 Agent Custodian + 1 Auditor Agent):**
   - Setiap dokumen utama (di luar pecahan `PRD`, `DESIGN`, `SPEC`, `CONTENT`) memiliki satu agen/manusia penanggung jawab (*Custodian*):
     - `@agent-layout-lab`: `layout-lab/README.md`, `NOTES.md`, `docs/audit-...`
     - `@agent-enlesweb-tech`: `enlesweb/ENLESWEB-DOCS-V4.md`
     - `@agent-templates-tech`: `<template>/<NAMA>-DOCS-V*.md` di 6 repo template & `_audit/*`
     - `@agent-decision-log`: `enlesweb-context-master/Business Memory/decision-log.md`
     - `@agent-context-master`: `enlesweb-context-master/enlesweb-context-master.md` & `ENLESWEB-CONTEXT-PROGRESS-HISTORY.md`
     - `@agent-summary`: `enlesweb-context-master/Start Here/summary.md`
     - `@agent-sop-ops`: `enlesweb-context-master/Delivery & Operations/sop.md`
     - `@agent-strategy`: `enlesweb-context-master/Strategy/{visi.md, positioning.md, model-bisnis.md, rencana.md}`
     - `@agent-auditor`: Gerbang Audit Anti-Halusinasi Ekosistem.
3. **Zero File Kembar Lintas-Folder (1 Dokumen = 1 Rumah Asli):**
   - Menghapus seluruh duplikasi file lintas-folder (`enlesweb-context-master/Projects/`, `enlesweb-context-master/ENLESWEB-DOCS-V4.md`, `enlesweb-context-master/copy.ts`, `enlesweb/ENLESWEB-CONTEXT-PROGRESS-HISTORY.md`, `layout-lab/enlesweb-docs/`). Setiap dokumen bertempat tinggal tunggal di domain tanggung jawab aslinya tanpa ketergantungan hardlink atau duplikasi berkas. Pecahan `PRD.md`, `DESIGN.md`, `SPEC.md`, `CONTENT.md` tetap dipertahankan di `enlesweb/` dan 6 template.
4. **Komunikasi Selektif Antar-Agent & Log Transparan (`agent-comms-log.md`):**
   - Saat suatu sub-folder selesai commit & push, agent pengirim menyiarkan perubahan ke agen-agen yang topiknya relevan.
   - Dokumen yang terdampak langsung memperbarui isinya (`[UPDATED]`).
   - Dokumen yang tidak terdampak membalas `[SKIP - Tidak terdampak langsung]` dan versinya tidak di-bump paksa. Seluruh riwayat obrolan dicatat di `Business Memory/agent-comms-log.md`.
5. **Gerbang Audit Anti-Halusinasi 5 Lapis oleh `@agent-auditor` (`node scripts/sync-ecosystem.mjs --audit`):**
   - Lapis 1 (Zero-Twin & Single Home Check): Memastikan 0 file kembar lintas-folder dan keutuhan berkas tunggal tiap agen.
   - Lapis 2 (Ground-Truth package.json vs Catatan Agent): Mencocokkan angka versi dependensi aktual.
   - Lapis 3 (Validitas Commit Hash di git log): Memastikan seluruh hash commit nyata di git log asli.
   - Lapis 4 (Validitas Tautan Lintas-Folder & Konsistensi Dokumen): Memastikan 0 link rusak dan konsistensi header versi.
   - Lapis 5 (Metrik Kode Aktual & Anti-Slop 0 Em-Dash): 65 berkas kode `layout-lab/src`, >= 46 assertion `test-perakit-pratinjau.mjs`, dan 0 karakter em-dash pada teks prosa.
6. **Penyerapan Pemeliharaan Teknis `layout-lab` Hari Ini (31 Oktober 2026):**
   - Upgrade Astro ke versi `^7.4.4` di atas runtime Node `22.23.4`, TypeScript `^6.0.3`, `@astrojs/check ^0.9.12`, `playwright-core ^1.64.1`, `puppeteer-core ^25.16.0`, dan override `vite ^8.3.5` untuk memitigasi seluruh CVE keamanan (commit `9a1de77` dan `19671bf`).
   - Hasil audit terverifikasi: `npm run build` lulus (65 berkas no-eyebrow lint, 70 berkas `astro check` dengan 0 error/0 warning/0 hint, 5 rute HTML statis terbangun), `npm test` lulus 100% (46 assertion otomatis composer & fuzzing + 86 skenario visual Playwright).

---

## Decision 024
- **Tanggal:** 1 November 2026
- **Topik:** Penambahan Berkas Riset Lapangan & Analisis 15 Kompetitor (`riset_kompetitor_enlesweb.md`), Inisialisasi Studio `content-machine`, dan Registrasi `@agent-content-machine`
- **Status:** Diputuskan & Terealisasi (CLOSED)

### 1. Masalah yang ingin diselesaikan
Sebelumnya, analisis kompetitor dan daftar pertanyaan nyata pemilik usaha UMKM belum terdokumentasikan dalam format terstruktur yang siap dipakai sebagai bahan konten edukasi dan materi pemasaran studio. Selain itu, ekosistem membutuhkan repositori mandiri untuk memproduksi konten visual dan motion graphics tanpa mengotori repositori website utama.

### 2. Keputusan
1. **Penyerapan Berkas Riset Lapangan & 15 Kompetitor (`riset_kompetitor_enlesweb.md`):**
   Mengesahkan berkas `riset_kompetitor_enlesweb.md` di root master docs sebagai rujukan utama 4 pilar:
   - Sheet 1: 30 Pertanyaan Nyata Pemilik Bisnis/UMKM tentang Website & Solusi Sesuai SOP v1.4 ENLESWEB.
   - Sheet 2: Analisis Topik, Hook, & Gap Konten Jasa Website UMKM (Evaluasi 8 Topik Populer Kompetitor).
   - Sheet 3: Profil Mendalam 15 Kompetitor Jasa Pembuatan Website di Indonesia (Rentang Harga & Celah Pasar).
   - Sheet 4: 30 Rencana Konten Edukasi Strategis untuk Media Sosial & Pemasaran ENLESWEB.
   Berkas `Market Research/kompetitor.md` resmi ditautkan ke dokumen utama ini.
2. **Inisialisasi Repositori `content-machine` & Registrasi `@agent-content-machine`:**
   Membentuk repositori `content-machine` (remote `https://github.com/adamarapk/enlesweb-content-machine.git`), mendaftarkannya pada entri 10 di `enlesweb.code-workspace`, memasang hook otomasi `.git/hooks/pre-push`, serta mendaftarkan `@agent-content-machine` ke dalam `scripts/sync-ecosystem.mjs` dan `AGENTS.md`.

### 3. Alasan
Menyediakan bank data nyata kebutuhan pasar dan argumen penolak keberatan klien (*objection handling*) bagi tim pemasaran, serta menyediakan studio koding terisolasi untuk pembuatan aset dan generator konten media sosial ENLESWEB.

---

## Decision 025
- **Tanggal:** 2 November 2026
- **Topik:** Penyelesaian Fase 1 Asset Factory `content-machine` (Fondasi Desain, 35 Vektor SVG, 5 Render 3D Tactile, 19 Slot Layout, 3 Pilot Post, Linter Otomatis, & Eksepsi Tipografi/Platform)
- **Status:** Diputuskan & Terealisasi (CLOSED)

### 1. Masalah yang ingin diselesaikan
Produksi materi iklan berbayar (Meta Ads) dan konten organik Instagram selama ini terkendala ketiadaan standarisasi visual, dependensi pada perakitan manual yang lambat, serta risiko inkonsistensi tipografi dan copy. Ekosistem membutuhkan pabrik aset (*asset factory*) otomatis dengan guardrail ketat agar produksi konten dapat di-batch cepat tanpa melanggar prinsip anti-slop ENLESWEB.

### 2. Keputusan
1. **Penyelesaian Fondasi Fase 1 `content-machine`:**
   Mengesahkan selesainya milestone Fase 1 pada repositori `content-machine` (commit `0a81887`), mencakup:
   - Fondasi Brand: `DESIGN.md`, `src/brand/tokens.css`, `src/brand/motion.css`, dan tipografi lokal Poppins + Kalam OFL.
   - Pustaka Aset: 35 berkas vektor SVG murni (`src/brand/svg/`) dan 5 render 3D tactile Three.js 2048px berlatar transparan (`puzzle.png`, `phone-slab.png`, `browser-slab.png`, `domain-card.png`, `document-sheet.png`).
   - 19 Template Layout: 12 Carousel rasio 4:5 (`c01` sampai `c12`) dan 7 Reels rasio 9:16 (`r01` sampai `r07`) berbasis arsitektur `data-slot`.
   - 3 Pilot Posts: Pilot 1 (Ide 1 Carousel 4-slide), Pilot 2 (Ide 5 Tabel Perbandingan 4:5), Pilot 3 (Ide 7 Reels 15s keyframes).
   - Tooling & Otomasi: `scripts/audit-svgs.mjs` (35/35 lolos uji XML), `scripts/lint-content.mjs` (linter computed font size, color token whitelist, forbidden words, dan safe-zones), serta `scripts/serve-gallery.mjs` (server pratinjau galeri lokal port 3456).
2. **Arsitektur Pemisahan Layout & Payload (`data-slot`):**
   Seluruh template layout tidak meng-hardcode salinan teks kampanye, melainkan menggunakan atribut `data-slot="..."` agar pada Fase 2 siap diinjeksi secara terotomasi oleh mesin JSON compiler (`drafts/*.json`).
3. **Eksepsi Tipografi E1 & E2 (Terkunci):**
   - *Exception E1 (Font Tulisan Tangan Kalam):* Diizinkan secara ketat HANYA untuk elemen catatan tempel (*sticky note*), stiker anotasi, atau panah coret tangan, menggunakan lisensi OFL lokal di `src/brand/fonts/kalam/`.
   - *Exception E2 (Simulasi Chat WhatsApp iOS):* Diizinkan menggunakan font fallback Inter/system-ui dengan warna gelembung khas iOS (`#E9E9EB` incoming, `#DCF7C5` outgoing) untuk menciptakan konteks obrolan yang familiar dan relatable bagi audiens UMKM Indonesia.
4. **Standarisasi Safe Zone Instagram:**
   - Carousel 4:5: Mematuhi safe-zone Instagram Profile Grid 3:4 (memotong ~34px di sisi kiri dan kanan saat dilihat di kisi profil 3:4).
   - Reels 9:16: Mematuhi area aman simetris (margin atas 216px, bawah 280px, kiri-kanan 48px) agar tidak tertutup antarmuka pemutar Instagram/TikTok.

### 3. Alasan
Membangun fondasi infrastruktur pemasaran yang skalabel dan anti-slop, mengamankan efisiensi waktu kerja pendiri bisnis (maksimal 2 jam per minggu untuk konten organik sesuai `Strategy/rencana.md`), serta memastikan integritas visual dan klaim harga/paket 100% sinkron dengan fakta `enlesweb-context-master.md`.

---

## Decision 026
- **Tanggal:** 3 November 2026
- **Topik:** Penyelesaian Fase 2 & Fase 3 `content-machine` (v1.4 Spec, Modernisasi Komponen Astro + React 19 TSX, Transformasi Full Light Studio Workspace, Dynamic Auto-Fit Canvas, Safe Zone Overlays, Registri Klaim, dan Pipeline Ekspor ZIP Mandiri)
- **Status:** Diputuskan & Terealisasi (CLOSED)

### 1. Masalah yang ingin diselesaikan
Template statis HTML warisan (`src/layouts/*.html`) pada `content-machine` membatasi komposisi layout interaktif, menyulitkan pengetikan tipe data, dan memisahkan proses pratinjau editorial dari mesin kompilasi. Selain itu, rasio aspek vertikal 9:16 dan 4:5 rentan terpotong vertikal (*vertical clipping*) di layar monitor laptop standar tanpa mekanisme auto-fit kanvas responsif, serta tidak adanya overlay panduan area aman (*safe zones*) antarmuka Instagram.

### 2. Keputusan
1. **Penyelesaian Fase 2 & Penutupan Resmi Fase 3 `content-machine`:**
   Mengesahkan penutupan milestone Fase 2 dan Fase 3 pada repositori `content-machine` (commit `d6189f1` s.d. `2a21a3c`), memvalidasi dokumen spesifikasi teknis `CONTENT-MACHINE-DOCS-V1.md` versi 1.4.
2. **Modernisasi Stack ke Komponen Astro + React 19 (`.tsx`):**
   - Mengganti seluruh template statis HTML mentah dengan arsitektur modular Astro 7.4.5 + React 19.3.1 dan TypeScript 6.0.3 yang lolos verifikasi `astro check` (0 error, 0 warning).
   - Menetapkan 4 Layer Arsitektur:
     - *Layer 1 (Primitives):* `SlideCanvas`, `WaChat`, `PhoneMockup`, `ConceptCard`, `PriceTable`, `PointList`, `CtaBar`, `Badges`.
     - *Layer 2 (19 Archetype Layouts):* Carousel C01 s.d. C12 dan Reels R01 s.d. R07 terdaftar di `src/components/archetypes/index.ts`.
     - *Layer 3 (Post & Claims Registry):* Registri ketat `claims.ts` (14 klaim resmi dan harga paket Rupiah sinkron dengan master context) serta postingan produksi K1 (`k1-link-wa-vs-website.tsx`) dan contoh P1, P2, P3.
     - *Layer 4 (Studio Workspace & Catalog):* Studio interaktif `/` dan Catalog Explorer `/katalog`.
3. **Standarisasi Antarmuka Studio Workspace (Full Light Theme):**
   - Menetapkan tema kerja *Full Light*: dot-grid abu-abu dingin (`#EFF2F7` dengan radial dots `#D5DAE2`), panel putih bersih (`#FFFFFF`), border hairline (`#E5E5DF`), dan aksen taktil signature ENLESWEB (`#E4FF30` / `#A3C400`).
   - Implementasi *Dynamic Responsive Auto-Fit Canvas* berbasis `ResizeObserver` yang menjamin kanvas 4:5 dan 9:16 tampil 100% utuh tanpa scrollbar atau pemotongan vertikal di semua resolusi.
   - Fitur interaktif *Instagram Safe Zone Guides Overlay* (shortcut `G`) yang menampilkan garis batas crop Feed 1:1, margin teks, dan area tertutup antarmuka Reels.
   - Kontrol pemutar video Reels deterministik dengan tombol `Play Live (Space)`, range scrubber 0-450 frame, dan HTTP 206 range streaming.
4. **Pipeline Ekspor Mandiri Bebas Dependensi Eksternal:**
   - Kompilasi pos menghasilkan bundel arsip `.zip` di `exports/posts/<id>.zip` yang dirakit murni dengan Node.js Buffer (Store Method 0 + tabel CRC32 lookup) berisi slide PNG resolusi tinggi, video Reels MP4 (jika tersedia), frame cover, caption tervalidasi guardrail, dan `manifest.json`.
5. **Jembatan Menuju Fase 4 (Art Direction & Material Editorial Taktil):**
   - Menyepakati arahan `docs/art-direction-fase4.md` untuk meninggalkan rounded card umum SaaS dan mengadopsi metafora fisik nyata (garis buku SiDU untuk tuntas, roster tenun untuk Jerseay, faktur stempel fisik paket Starter).

### 3. Alasan
Memberikan studio produksi konten mandiri yang tangguh, modular, dan terverifikasi secara visual, sehingga pendiri dapat memproduksi materi Instagram berkualitas tinggi secara konsisten dalam batas waktu 2 jam per minggu tanpa risiko ketidaksesuaian klaim harga atau pelanggaran pedoman desain.

---

## Decision 027
- **Tanggal:** 3 November 2026
- **Topik:** Evaluasi Hasil Uji Coba Meta Ads Minggu 1, Penetapan Status Jalur C (Jeda Iklan), Pengamanan Sisa Saldo Rp87.952, dan Penyiapan Materi Re-launch via `content-machine`
- **Status:** Diputuskan & Terealisasi (CLOSED)

### 1. Masalah yang ingin diselesaikan
Kampanye Meta Ads perdana (Minggu 1) yang diluncurkan pada 21 Oktober 2026 mengalami kendala teknis penyerapan delivery pada 23 Oktober 2026 (saldo tidak terpotong dan metrik dashboard berhenti bertambah). Untuk menghindari ketidakpastian pengiriman impresi, iklan telah dinonaktifkan manual oleh pemilik pada 24 Oktober 2026. Data aktual performa iklan dan status 1 prospek chat WhatsApp yang masuk perlu dievaluasi secara formal untuk menentukan kelanjutan anggaran serta arah strategis akuisisi studio.

### 2. Keputusan
1. **Pengesahan Metrik Finansial & Kinerja Kampanye Minggu 1:**
   Mengesahkan data ground-truth dari dashboard Meta Ads (periode 21 - 22 Oktober 2026):
   - Modal deposit awal: **Rp130.000**.
   - Realisasi belanja: **Rp42.048** (terserap pada Video Ad Rp36.167 dan Image Ad Rp5.881).
   - Sisa saldo kas tersimpan di akun Meta Ads: **Rp87.952** (aman dan utuh).
   - Metrik jangkauan: 567 impresi, 471 reach, 2 klik tautan (Video CPC Rp36.167, Image CPC Rp5.881), 85x 3-second video plays, 12x 15-second ThruPlays, dan 1 percakapan pesan masuk.
2. **Kualifikasi Prospek & Status Pipeline:**
   - 1 pesan masuk tercatat di hari pertama (21 Oktober) via Video Ad beberapa jam setelah tayang.
   - Isi percakapan hanya menanyakan info atau harga umum / template pembuka pesan iklan. Setelah dibalas, prospek tidak merespons kembali (ghosting/batal).
   - Tidak terjadi kesepakatan (tidak deal), tidak ada transaksi DP 50%, dan diputuskan tidak dilakukan follow-up lanjutan.
   - Kanal Micro-Warm Outreach DM IG belum dijalankan (0 akun disapa, 0 DM).
3. **Penetapan Status Resmi Jalur C (Sesuai `Strategy/rencana.md` Bagian 5):**
   - Berdasarkan aturan keputusan rencana 90 hari, hasil < 2 chat valid dan 0 DP secara resmi menetapkan kampanye masuk **Jalur C** (iklan dijeda untuk evaluasi variabel kreatif).
   - Status iklan tetap **nonaktif (inactive)** sejak 24 Oktober hingga saat ini (3 November 2026).
4. **Pengamanan Saldo Kas & Rencana Re-launch:**
   - Sisa saldo deposit sebesar **Rp87.952** tidak ditarik atau dibakar secara sia-sia, melainkan ditahan di dalam akun Meta Ads.
   - Re-launch kampanye iklan berikutnya akan memanfaatkan materi kreatif baru hasil produksi studio `content-machine` (Fase 1 sampai 3) setelah varian layout dan aset baru siap tayang.

### 3. Alasan
Menjaga disiplin kas pendiri agar tidak terjadi pembakaran modal (*no cash burn*) di tengah delivery iklan yang tidak stabil, serta memastikan pengeluaran sisa saldo berikutnya didukung oleh materi iklan yang lebih matang dari pipeline terstandarisasi `content-machine`.

---

<!-- ===================================================================== -->
<!-- DOKUMEN 2 DARI 2 DI PART 4: enlesweb-context-master.md -->
<!-- ===================================================================== -->

# ENLESWEB CONTEXT MASTER: DOKUMENTASI TERPADU PLATFORM & 6 TEMPLATE KONSEP

**Versi:** 4.0 (Arsitektur Multi-Agent Document Custodians, Zero File Kembar Lintas-Folder, Audit Anti-Halusinasi, & Upgrade Astro 7.4.4 di layout-lab - Decision 023 Addendum & Decision 022 CLOSED)  
**Tanggal Rilis:** 31 Oktober 2026  
**Status Sistem:** Production & Launch-Ready As-Is Website Ecosystem (Tersinkronisasi Penuh Decision 001–023 Addendum 31 Okt, SOP v1.4, workspace tunggal D:\myself\web\enlesweb-workspace, layout-lab Astro 7.4.4 di preview.enlesweb.com)  
**Target Pengguna Dokumen:** Dokumentasi Teknis Standar, Panduan Arsitektur Sistem, dan Wiki Pengembang  
**Ringkasan Pembaruan:** Penerapan arsitektur Multi-Agent Document Custodians & Zero File Kembar Lintas-Folder (1 Dokumen = 1 Rumah Asli), ruang obrolan resmi agent-comms-log.md, selektivitas pembaruan dokumen ([UPDATED] vs [SKIP]), otomatisasi pasca-push dengan Gerbang Audit Anti-Halusinasi 5 lapis (@agent-auditor), serta penyerapan pemeliharaan teknis layout-lab hari ini: upgrade ke Astro 7.4.4 di atas Node 22.23.4, TypeScript 6.0.3, Vite 8.3.5 overrides, dan mitigasi seluruh CVE keamanan (commit 9a1de77 & 19671bf).  

---

## RINGKASAN EKSEKUTIF EKOSISTEM

Ekosistem **ENLESWEB** adalah platform agensi perancangan dan pengembangan website independen berkinerja tinggi yang berfokus pada kepastian dan kemudahan bagi pemilik usaha lokal (transparansi harga paket, domain dan hosting 1 tahun sudah termasuk), efisiensi operasional, dan kecepatan konversi bisnis via WhatsApp. 

ENLESWEB menyajikan penawaran komersial yang terbagi menjadi 3 tingkatan paket inti dan 1 jalur kustom terpisah:
1. **Paket Starter (Rp450.000)**: Website 1 halaman (*single-page*), pilih dari desain yang tersedia, sudah termasuk domain & hosting 1 tahun, 2 kali revisi saat pengerjaan, serta gratis 2 kali putaran update konten ringan di tahun pertama (diatur di SOP & Bukti Pemesanan PDF). Memuat catatan khusus harga peluncuran untuk 10 klien pertama (`site.showLaunchNote = true`).
2. **Paket Business (Rp750.000)**: Website hingga 6 halaman (*multi-page*), desain disesuaikan dengan bisnis klien, sudah termasuk domain & hosting 1 tahun, 2 kali revisi saat pengerjaan, serta gratis 4 kali putaran update konten ringan di tahun pertama.
3. **Paket Growth (Rp1.200.000)**: Website hingga 10 halaman dengan desain khusus, pengalaman pengunjung/frontend interaktif khusus (*custom client islands*), sudah termasuk domain & hosting 1 tahun, 4 kali revisi saat pengerjaan, serta gratis 6 kali putaran update konten ringan di tahun pertama.
4. **Paket Custom (Mulai Rp2.000.000)**: Jalur terpisah di luar paket Growth untuk kebutuhan lebih dari 10 halaman atau integrasi sistem khusus (tombol aksi: `[Diskusikan Kebutuhan Custom]`, topik: `paket Custom`).

Seluruh paket dibuktikan secara nyata melalui **6 Proyek Portofolio Konsep** aktif (live di Cloudflare Workers dengan subdomain kanonikal *.enlesweb.com, Vercel dinonaktifkan per Decision 023), yang mendemonstrasikan bahwa setiap website memiliki identitas visual unik (*signature physical metaphor*), kepatuhan ketat terhadap protokol anti-slop, dan rasio kontras visual WCAG AA. Ekosistem juga dilengkapi internal composer `layout-lab` (live di `preview.enlesweb.com` dengan Dual-Layer Token, chassis iPhone 15, scaled 1280px artboard, dan 5 preset skenario klien) untuk menyusun preview tata letak dummy pra-DP (SOP v1.4 Langkah 3b), serta pabrik aset pemasaran dan studio editorial `content-machine` (Fase 1 s.d. Fase 3 CLOSED: v1.4 Astro + React 19, Full Light Studio Workspace di port 3456, Dynamic Auto-Fit Canvas, Safe Zone Overlays, & ZIP Export Pipeline) untuk memproduksi materi visual dan video reels/carousel secara terstandarisasi.

Sebagai landasan operasional dan penajaman materi pemasaran, ekosistem memiliki berkas referensi riset lapangan komprehensif pada [`riset_kompetitor_enlesweb.md`](riset_kompetitor_enlesweb.md) yang mengompilasi 30 pertanyaan nyata pemilik UMKM, analisis perbandingan 15 kompetitor web lokal, dan 30 pilar rencana konten edukasi strategis.

---

## DAFTAR ISI (TABLE OF CONTENTS)

- [1. Standar Fondasi Platform & Prinsip Ekosistem](#1-standar-fondasi-platform--prinsip-ekosistem)
  - [1.1 Visi Komersial & Nilai Inti](#11-visi-komersial--nilai-inti)
  - [1.2 Struktur Tiga Tier Paket Komersial & Jalur Custom](#12-struktur-tiga-tier-paket-komersial--jalur-custom)
  - [1.3 Protokol Anti-Slop & Editorial Voice Terpadu](#13-protokol-anti-slop--editorial-voice-terpadu)
  - [1.4 Standar Rekayasa Web Universal](#14-standar-rekayasa-web-universal)
  - [1.5 Arsitektur Konversi WhatsApp & Tracking Terpadu](#15-arsitektur-konversi-whatsapp--tracking-terpadu)
  - [1.6 Infrastruktur & Pipeline Deployment](#16-infrastruktur--pipeline-deployment)
- [2. Matriks Komparasi 6 Template Portofolio Konsep](#2-matriks-komparasi-6-template-portofolio-konsep)
- [3. Spesifikasi Platform Induk (ENLESWEB Main Website)](#3-spesifikasi-platform-induk-enlesweb-main-website)
  - [3.1 Product Requirements (PRD)](#31-product-requirements-prd)
  - [3.2 Desain & Token Visual (DESIGN)](#32-desain--token-visual-design)
  - [3.3 Salinan Konten & Titik Sentuh WhatsApp (CONTENT)](#33-salinan-konten--titik-sentuh-whatsapp-content)
  - [3.4 Arsitektur Teknis & Skrip Klien (SPEC)](#34-arsitektur-teknis--skrip-klien-spec)
- [4. Spesifikasi Template Paket Starter](#4-spesifikasi-template-paket-starter)
  - [4.1 Seruput Kopi (Kedai Kopi & F&B)](#41-seruput-kopi-kedai-kopi--fb)
    - [4.1.1 PRD & Batasan Starter](#411-prd--batasan-starter)
    - [4.1.2 Desain: Signature Rol Struk Kasir & Token](#412-desain-signature-rol-struk-kasir--token)
    - [4.1.3 Salinan Konten & Alur WhatsApp](#413-salinan-konten--alur-whatsapp)
    - [4.1.4 Arsitektur Komponen & Data](#414-arsitektur-komponen--data)
  - [4.2 ripeir (Workshop Perbaikan & Reparasi)](#42-ripeir-workshop-perbaikan--reparasi)
    - [4.2.1 PRD & Alur Pelanggan](#421-prd--alur-pelanggan)
    - [4.2.2 Desain: Industrial Workshop Dark Theme & Token](#422-desain-industrial-workshop-dark-theme--token)
    - [4.2.3 Salinan Konten & 10 Titik Sentuh WhatsApp](#423-salinan-konten--10-titik-sentuh-whatsapp)
    - [4.2.4 Arsitektur Komponen & Verifikasi](#424-arsitektur-komponen--verifikasi)
- [5. Spesifikasi Template Paket Business](#5-spesifikasi-template-paket-business)
  - [5.1 tuntas (Bimbel Kelompok Kecil & Les Privat)](#51-tuntas-bimbel-kelompok-kecil--les-privat)
    - [5.1.1 PRD & Rute Multi-Halaman](#511-prd--rute-multi-halaman)
    - [5.1.2 Desain: Signature Lembar SiDU & Token](#512-desain-signature-lembar-sidu--token)
    - [5.1.3 Salinan Konten & 12 Titik Sentuh WhatsApp](#513-salinan-konten--12-titik-sentuh-whatsapp)
    - [5.1.4 Arsitektur Komponen, Jadwal & Biaya](#514-arsitektur-komponen-jadwal--biaya)
- [6. Spesifikasi Template Paket Growth](#6-spesifikasi-template-paket-growth)
  - [6.1 Jerseay (Studio Jersey & Apparel Olahraga Kustom)](#61-jerseay-studio-jersey--apparel-olahraga-kustom)
    - [6.1.1 PRD & Corong Konversi](#611-prd--corong-konversi)
    - [6.1.2 Desain: Monochrome Atelier & Monospace Teknis](#612-desain-monochrome-atelier--monospace-teknis)
    - [6.1.3 Modul Kustom: Kit Configurator & Roster Builder](#613-modul-kustom-kit-configurator--roster-builder)
    - [6.1.4 Salinan Konten, Brief Adaptif & Format Pesan](#614-salinan-konten-brief-adaptif--format-pesan)
    - [6.1.5 Arsitektur Teknis](#615-arsitektur-teknis)
  - [6.2 dipotongin (Barbershop Pria & Grooming)](#62-dipotongin-barbershop-pria--grooming)
    - [6.2.1 PRD & Layout B Editorial Dua Kolom](#621-prd--layout-b-editorial-dua-kolom)
    - [6.2.2 Desain: Karakter Kriya Cetak Letterpress & Kartu Member Arang](#622-desain-karakter-kriya-cetak-letterpress--kartu-member-arang)
    - [6.2.3 Modul Kustom: Kuis Konsultasi Gaya Rambut 1 Menit & Tiket Pangkas](#623-modul-kustom-kuis-konsultasi-gaya-rambut-1-menit--tiket-pangkas)
    - [6.2.4 Salinan Konten, 8 Paket Tarif & Routing WA](#624-salinan-konten-8-paket-tarif--routing-wa)
    - [6.2.5 Arsitektur Teknis](#625-arsitektur-teknis)
  - [6.3 berflower (Florist & Toko Hadiah Konsep Venice)](#63-berflower-florist--toko-hadiah-konsep-venice)
    - [6.3.1 PRD & 7 Halaman Terpadu](#631-prd--7-halaman-terpadu)
    - [6.3.2 Desain: Botani Puitis, Kertas Sutra & Token](#632-desain-botani-puitis-kertas-sutra--token)
    - [6.3.3 Modul Kustom: Rangkai Buket Interaktif & Keranjang Terintegrasi](#633-modul-kustom-rangkai-buket-interaktif--keranjang-terintegrasi)
    - [6.3.4 Salinan Konten, Katalog Produk & Payload WhatsApp](#634-salinan-konten-katalog-produk--payload-whatsapp)
    - [6.3.5 Arsitektur Teknis & State Nanostores](#635-arsitektur-teknis--state-nanostores)
- [7. QA Terpadu & Panduan Deployment](#7-qa-terpadu--panduan-deployment)
  - [7.1 Checklist Verifikasi Kualitas Lintas Proyek](#71-checklist-verifikasi-kualitas-lintas-proyek)
  - [7.2 Prosedur Rilis Cloudflare Workers (Ekosistem Terpadu)](#72-prosedur-rilis-cloudflare-workers-ekosistem-terpadu)

---

# 1. Standar Fondasi Platform & Prinsip Ekosistem

### 1.1 Visi Komersial & Nilai Inti
ENLESWEB didirikan untuk menyelesaikan masalah umum pelaku usaha lokal dan UMKM saat memesan website:
- **Kepastian dan Kemudahan (Tanpa Biaya Platform Tersembunyi):** Berbeda dengan SaaS pembuat website (seperti Wix/Shopify) yang membebankan sewa platform bulanan terus-menerus atau jasa agensi yang membingungkan, ENLESWEB mengedepankan kepastian harga paket di muka, proses pemesanan praktis via WhatsApp, serta penayangan website statis berkinerja tinggi di infrastruktur modern (Cloudflare Workers/Pages).
- **Transparansi Harga & Sudah Termasuk Domain + Hosting 1 Tahun:** Biaya pembuatan transparan (Mulai Rp450.000) sudah mencakup nama domain pilihan klien (.com, .id, dll. dengan rekomendasi standar `.com` di SOP chat) dan hosting selama 1 tahun penuh tanpa biaya platform bulanan tersembunyi.
- **Kebijakan Perpanjangan Tahun ke-2+, Update Konten Ringan Tahunan, & Perlindungan Transaksi (LOCKED - Decision 002, 015, 017):**
  - **Kepemilikan Akun Provider, Registrant Tahun Pertama, & Waktu Pembelian Domain:** Seluruh akun registrar dan data *registrant* domain pada tahun pertama didaftarkan atas nama **ENLESWEB** demi menghilangkan birokrasi verifikasi dokumen identitas awal (seperti KTP untuk `.id`). Pembelian domain dieksekusi setelah DP 50% diterima dan materi dasar klien lengkap (melindungi arus kas studio).
  - **Kuota Gratis Putaran Update Konten Ringan Tahunan (Decision 015):** Selama tahun pertama pasca-tayang, klien mendapat kuota gratis update konten ringan (perubahan teks, harga, jam buka, atau foto pada bagian yang sudah ada tanpa mengubah struktur layout, maksimal 5–10 item per kiriman pesan WhatsApp, SLA 1–2 hari kerja): **Starter 2x**, **Business 4x**, dan **Growth 6x** per tahun (selebihnya Rp50.000/putaran). Garansi perbaikan bug teknis tetap gratis 30 hari.
  - **Dua Opsi Fleksibel Tahun Kedua (Renewal):** Saat masa perpanjangan tiba, klien diberikan pilihan bebas tanpa *vendor lock-in*:
    1. **Perpanjangan Terkelola (bersama ENLESWEB):** Flat all-in **Rp400.000 / tahun** (untuk domain `.com` atau `.id`) atau **Rp300.000 / tahun** (domain lainnya). Biaya ini mencakup perpanjangan domain, hosting, pemeliharaan teknis, serta **reset otomatis kuota gratis putaran update konten ringan tahunan sesuai paket awal (2x/4x/6x per tahun)**.
    2. **Opsi Mandiri (Transfer Domain & File):** Jika klien ingin mengelola website secara mandiri, ENLESWEB memberikan opsi transfer kepemilikan domain (kode transfer EPP / *Auth Code*) dan penyerahan file arsip *build* statis website (`.zip` dari `dist/`) secara cuma-cuma tanpa biaya perpanjangan.
  - **Reaktivasi Website Bebas Biaya Tambahan (Decision 005) & Aturan On-Hold 60 Hari (Decision 017):** Jika website sempat dinonaktifkan karena melewati masa tenggang 14 hari, tidak ada denda atau biaya reaktivasi tambahan selama domain belum dilepas registrar. Saat pengerjaan awal, jika klien belum melengkapi materi dasar lewat dari 7 hari kalender sejak DP, proyek masuk ke status *On-Hold* (antrean pasif) hingga maksimal 60 hari kalender sejak tanggal DP.
  - **Integritas Klaim Pemasaran:** ENLESWEB tidak memakai "tanpa biaya langganan berulang" sebagai klaim pemasaran utama. Janji inti yang dipegang adalah **Kepastian dan Kemudahan**: harga paket jelas di awal, domain dan hosting 1 tahun sudah termasuk, alur komunikasi via WhatsApp (`Delivery & Operations/sop.md` v1.3 CLOSED), bukti pemesanan formal PDF ber-TTD digital dengan Nama Lengkap Pendiri yang sama persis dengan rekening bank penerima, serta ketentuan perpanjangan tahun kedua yang terbuka dan transparan sejak awal.
- **Konversi Langsung ke WhatsApp:** Bagi konsumen di Indonesia, WhatsApp adalah jalur penutupan transaksi paling efektif. Seluruh arsitektur situs diarahkan untuk memicu pesan WhatsApp yang telah terisi konteks spesifik (*pre-filled*).
- **Kecepatan Akses Instan:** Menggunakan static-site generation (SSG), halaman dirender instan di jaringan CDN tepi (*edge network*) dengan skor performa mendekati 100 di perangkat bergerak.

---

### 1.2 Struktur Tiga Tier Paket Komersial & Jalur Custom

| Parameter | Paket Starter | Paket Business | Paket Growth | Paket Custom |
|---|---|---|---|---|
| **Harga (LOCKED)** | **Rp450.000** | **Rp750.000** | **Rp1.200.000** | **Mulai Rp2.000.000** |
| **Domain 1 Tahun** | **Sudah Termasuk** | **Sudah Termasuk** | **Sudah Termasuk** | Sesuai kebutuhan |
| **Hosting 1 Tahun** | **Sudah Termasuk** | **Sudah Termasuk** | **Sudah Termasuk** | Sesuai kebutuhan |
| **Perpanjangan Thn 2+ (LOCKED)** | **Flat Rp400rb/thn (.com/.id) atau Rp300rb/thn (lainnya) + Reset Kuota Update / Opsi Mandiri (EPP + dist zip)** | **Flat Rp400rb/thn (.com/.id) atau Rp300rb/thn (lainnya) + Reset Kuota Update / Opsi Mandiri (EPP + dist zip)** | **Flat Rp400rb/thn (.com/.id) atau Rp300rb/thn (lainnya) + Reset Kuota Update / Opsi Mandiri (EPP + dist zip)** | Sesuai kebutuhan |
| **Jumlah Halaman** | 1 halaman (*single-page*) | Hingga 6 halaman | Hingga 10 halaman | Lebih dari 10 halaman |
| **Pilihan Desain** | Pilih dari desain yang tersedia | Desain disesuaikan dengan bisnis | Desain khusus untuk bisnis | Desain & sistem kustom penuh |
| **Revisi Pengerjaan & Update Pasca-Tayang** | 2x revisi pengerjaan + **Gratis 2x update ringan/thn** (di SOP/PDF) | 2x revisi pengerjaan + **Gratis 4x update ringan/thn** (di SOP/PDF) | 4x revisi pengerjaan + **Gratis 6x update ringan/thn** (di SOP/PDF) | Sesuai kesepakatan |
| **Catatan Khusus** | Harga peluncuran untuk 10 klien pertama | Untuk bisnis berkembang | Fitur frontend interaktif (*client islands*) | Kebutuhan integrasi backend/khusus |
| **Target Bisnis** | Kedai kopi, bengkel reparasi, warung makan, barbershop esensial | Bimbel/les privat, klinik, konsultan, studio foto | Studio jersey kustom, barbershop premium, florist konsep | Portal multi-cabang, e-commerce kustom |
| **Perwakilan Konsep** | `Seruput Kopi`, `ripeir` | `tuntas` | `Jerseay`, `dipotongin`, `berflower` | - |

---

### 1.3 Protokol Anti-Slop & Editorial Voice Terpadu

Semua materi teks di ENLESWEB dan ke-6 template wajib mematuhi standar penulisan berikut:

1. **Bebas Tanda Hubung Em Dash pada Copy Pelanggan:**
   - Dilarang keras menggunakan karakter em dash pada seluruh teks antarmuka publik. Gunakan titik dua (`:`), tanda kurung, koma, atau titik.
2. **Larangan Superlatif & Kata Promosi Terlarang:**
   - Dilarang memakai kata promosi klise: *"terbaik"*, *"nomor 1"*, *"terpercaya"*, *"revolusioner"*, *"canggih"*, *"murah meriah"*, *"ajaib"*, *"premium"*, *"presisi"*, *"elevate"*, *"seamless"*, *"crafted"*, *"powerful"*, *"modern"*, atau sejenisnya di teks pelanggan.
   - Dilarang memakai kata *"gratis"* untuk layanan servis atau pengerjaan dasar (seperti pada alur bengkel).
   - Ganti dengan fakta konkret: cantumkan angka, bahan fisik, nama jalan, daftar harga, dan spesifikasi nyata.
3. **Larangan Rekayasa Bukti Sosial Palsu:**
   - Dilarang membuat rating bintang fiktif (misal: "⭐⭐⭐⭐⭐ 4.9/5 dari 1000 ulasan").
   - Dilarang memuat testimoni palsu dengan avatar hasil generator AI. Bukti sosial harus berupa catatan riil, foto produk nyata, atau kutipan jujur.
4. **Larangan Tekanan Psikologis Artifisial (Fake Urgency):**
   - Dilarang memasang penghitung waktu mundur (*fake countdown timer*), pop-up manipulatif ("*5 orang sedang melihat ini*"), atau klaim kelangkaan palsu ("*Sisa 1 slot lagi!*").
5. **Kejujuran Status Konsep (Demo Transparency):**
   - Seluruh website showcase secara transparan mencantumkan catatan bahwa proyek merupakan konsep desain dan teknologi untuk portofolio ENLESWEB. Jika mode demo aktif, pesan WhatsApp menyertakan label penanda demo.

---

### 1.4 Standar Rekayasa Web Universal

1. **Framework & Runtime:**
   - Framework utama: **Astro** (versi 4.x atau 5.x) dengan strategi Zero-JS secara default (*pure HTML/CSS output*).
   - Platform ENLESWEB induk dibangun menggunakan **CSS Murni** dengan scoped styling Astro (tanpa Tailwind CSS).
   - Template konsep tertentu menggunakan Tailwind CSS murni (seperti Jerseay) atau Pure CSS dengan CSS Custom Properties terstruktur.
2. **Aksesibilitas Visual & Kontras (WCAG 2.1 AA):**
   - Rasio kontras teks biasa minimal **4.5:1** terhadap latar belakangnya.
   - Rasio kontras teks besar (bold >= 18px atau regular >= 24px) minimal **3.0:1**.
   - Rasio kontras teks gelap di atas aksen (seperti `--ink` di atas `--accent`) mencapai **>10:1**.
   - Seluruh elemen yang dapat diklik (*tap targets*) memiliki area interaksi minimum **44px × 44px**.
   - Setiap link dan tombol memiliki status visual jelas saat `:focus-visible` (ring outline kontras tanpa menghilangkan garis bantu keyboard).
3. **Aksesibilitas Gerak (Motion Accessibility):**
   - Semua animasi dan transisi CSS wajib dibungkus dalam query `@media (prefers-reduced-motion: reduce)`. Jika pengguna mengaktifkan pengurangan gerak, transisi diubah menjadi instan (`transition: none; animation: none;`).
4. **Optimasi Aset & Performa:**
   - Gambar disajikan dalam format modern (WebP/AVIF) dengan atribut `loading="lazy"`, `decoding="async"`, serta dimensi eksplisit `width` dan `height` untuk mencegah *Cumulative Layout Shift* (CLS).
   - Penggunaan font lokal atau self-hosted (format WOFF2) dengan `font-display: swap`.

---

### 1.5 Arsitektur Konversi WhatsApp & Tracking Terpadu

Setiap titik kontak konversi dihubungkan ke WhatsApp dengan standar implementasi terpusat:

1. **Skema URL:**
   ```
   https://wa.me/{nomor}?text={encodedText}
   ```
2. **Atribut Pelacakan DOM:**
   Setiap tombol atau tautan WhatsApp wajib menyertakan atribut data:
   - `data-cta-location`: mengidentifikasi lokasi spesifik tombol menggunakan format snake_case baku (contoh: `nav`, `hero`, `package_starter`, `floating_wa`).
   - `data-wa-topic`: topik pesan yang dikirimkan.
3. **Integrasi Meta Pixel Terkunci:**
   - Menggunakan event **`AddToCart`** (disertai parameter `value` dan `currency: 'IDR'`) saat tombol WhatsApp diklik, **bukan `Lead` atau `Contact`**, karena pembatasan konfigurasi akun backend Meta Platforms, Inc.
   - Jika Pixel ID kosong atau pengguna menggunakan ekstensi ad-blocker, skrip proteksi memastikan tautan WhatsApp tetap terbuka normal tanpa menimbulkan error pada konsol browser.

---

### 1.6 Infrastruktur & Pipeline Deployment

- **Hosting Produksi Platform Induk:** Cloudflare Workers (dengan adapter static `@astrojs/cloudflare` dan domain kanonikal `https://enlesweb.com`).
- **Hosting Showcase Portofolio & Internal Composer:** Seluruh 6 template konsep (`*.enlesweb.com`) dan composer internal `layout-lab` (`preview.enlesweb.com`) dihosting terpusat di Cloudflare Workers; hosting lama Vercel telah resmi dinonaktifkan (Decision 023).
  - `layout-lab` (`https://preview.enlesweb.com/`): format Stateless Compact ID `/p/<id>`, rute internal `/studio-admin/*` terproteksi, Cloudflare Worker allowlist (`/` & `/pratinjau` sengaja merespons 404), Dual-Layer Token System (`--ew-*` vs `--wf-*`), Scaled 1280px Virtual Artboard, sandboxed live iframe dalam chassis fisik iPhone 15 (390x796px kanvas dalam, 414x844px chassis luar), 5 Preset Skenario Klien, 46 assertion otomatis di `scripts/test-perakit-pratinjau.mjs`, dan 86 skenario visual snapshot Playwright.
- **Asset Factory & Studio Editorial Konten (`content-machine`):** Repositori mandiri pembuat aset visual, Instagram Carousel (rasio 4:5), dan video Reels (rasio 9:16) berbasis Astro 7.4.5 + React 19.3.1 TSX (Fase 1 s.d. 3 CLOSED, v1.4, Decision 025 & Decision 026). Dilengkapi 8 Layer 1 UI Primitives, 19 arketipe layout berpengetikan ketat, 35 pustaka vektor SVG, 5 render 3D tactile Three.js 2048px, registri klaim resmi (14 klaim & harga paket), Content Studio Workspace split-screen bertema Full Light dengan Dynamic Auto-Fit Canvas (ResizeObserver bebas vertical clipping) dan Instagram Safe Zone Guides overlay, Thematic Shelves Catalog (`/katalog`), automated content linter, serta pipeline ekspor arsip ZIP mandiri.
- **Continuous Integration (CI/CD):**
  - Linting & tipe data: `npm run lint` / `astro check` (70 berkas terverifikasi 0 error/warning/hint).
  - Automated testing: Vitest atau unit test internal, serta 46 assertion fungsional `layout-lab`.
  - Build pipeline: `npm run build` menghasilkan direktori statis `dist/`.

---

# 2. Matriks Komparasi 6 Template Portofolio Konsep

| Parameter | Seruput Kopi | ripeir | tuntas | Jerseay | dipotongin | berflower |
|---|---|---|---|---|---|---|
| **Paket ENLESWEB** | Starter (Rp450rb) | Starter (Rp450rb) | Business (Rp750rb) | Growth (Rp1.2jt) | Growth (Rp1.2jt) | Growth (Rp1.2jt) |
| **Niche Industri** | Kedai Kopi & F&B | Workshop Servis & Reparasi | Bimbel & Les Privat | Studio Jersey Kustom | Barbershop Pria | Florist & Hadiah Konsep |
| **Arsitektur Halaman** | Single-page | Single-page | Multi-page (6 rute + 404) | Multi-page (10 halaman utama + 404) | Multi-page (2 rute + 404) | Multi-page (7 rute + 404) |
| **Live Demo URL** | [seruput.enlesweb.com](https://seruput.enlesweb.com/) | [ripeir.enlesweb.com](https://ripeir.enlesweb.com/) | [tuntas.enlesweb.com](https://tuntas.enlesweb.com/) | [jerseay.enlesweb.com](https://jerseay.enlesweb.com/) | [dipotongin.enlesweb.com](https://dipotongin.enlesweb.com/) | [berflower.enlesweb.com](https://berflower.enlesweb.com/) |
| **Signature Metaphor** | Rol Struk Kasir Panjang (Potongan Lurus Bersih) | Papan Kerja Bengkel & Nota Servis | Lembar Buku Tulis SiDU (Margin Merah Vertikal) | Kain Dry-fit & Label Kerah Tenun | Kartu Member Kraft (8 Stempel) & Tiket Pangkas | Kertas Sutra Pembungkus & Segel Lilin |
| **Tema Warna** | Merah tomat hero, putih tulang & hitam arang | Deep dark spruce black & oranye sinyal | Kertas putih SiDU & biru tinta pulpen | Monokrom Atelier (Putih terang, hitam, aksen WA) | Putih linen terang & substrat kartu arang | Kertas paper gading, terracotta clay & hijau daun |
| **Token Warna Utama** | `#CE3216`, `#FBF9F5`, `#141414` | `#08100e`, `#E8EBED`, `#FF6B1A` | `#FFFFFF`, `#0F224A`, `#163275`, `#C5221F` | `#FFFFFF`, `#111111`, `#0A0A0A`, `#25D366` | `#F6F5F0`, `#C29F75`, `#121312`, `#1A1A18` | `#F6F0E6`, `#2B2420`, `#9E3F3A`, `#2F4235` |
| **Pasangan Tipografi** | Bricolage Grotesque + Space Mono | IBM Plex Sans Condensed + IBM Plex Sans + Mono | Space Grotesk + Atkinson Hyperlegible | Plus Jakarta Sans + Monospace Teknis (`font-mono`) | Besley + Albert Sans | Fraunces Variable + DM Sans |
| **Fitur Interaktif Khas** | Nota Menu-as-Hero & Etalase Biji (Tanya WA) | 10 Titik Routing Diagnosa Servis 4 Perangkat | Tabel Jadwal/Biaya As-Is & Form Konsultasi | 5-Step Roster Configurator (WCAG & Batch Paste) | Kuis Konsultasi Gaya 1 Menit & Tiket Pangkas | Bouquet Builder Rangkai Sendiri & Persistent Cart |

---

# 3. Spesifikasi Platform Induk (ENLESWEB Main Website)

### 3.1 Product Requirements (PRD)

- **Identitas Platform:** ENLESWEB (`enlesweb.com`): Agensi perancangan website independen berbasis di Indonesia.
- **Tujuan Halaman:** Mengubah pengunjung cold-traffic (khususnya dari Meta Ads) menjadi prospek chat WhatsApp berkualitas tinggi dalam 3 menit pertama.
- **Struktur Halaman Utama (9 Section):**
  1. `Navbar`: Header sticky transparan yang bertransisi ke solid latar saat scroll, navigasi menu, dan tombol CTA utama di desktop. Di layar mobile (< 768px), tombol CTA dihilangkan dari header demi ruang bernapas dan didelegasikan ke Floating WhatsApp.
  2. `#hero`: Pernyataan nilai pembuka (*"Website untuk bisnismu, sudah termasuk domain dan hosting 1 tahun. Mulai Rp450.000"*), penawaran harga transparan, bukti 6 konsep demo, dan CTA primer WhatsApp.
  3. `#paket`: Tiga kolom komparasi paket (Starter Rp450rb, Business Rp750rb, Growth Rp1.200rb) dengan tinggi baris tersinkronisasi sub-pixel, akordeon rincian `<details>` (tertutup default), dan jalur penawaran Custom (Mulai Rp2.000.000).
  4. `#proyek`: Panggung pameran proyek portofolio 16:10 dengan switcher interaktif untuk meninjau 6 konsep website nyata.
  5. `#proses`: Timeline horizontal/akordeon 5 langkah kerja (Pilih Paket, Diskusi Konten, Desain & Coding, Review & Revisi, Peluncuran).
  6. `#tentang`: Filosofi agensi, prinsip kemudahan dan kepastian tanpa kerumitan teknis bagi pemilik usaha, serta kejelasan kepemilikan aset.
  7. `#cta`: Banner penutup sebelum footer yang mengajak konsultasi langsung.
  8. `Footer`: 4 kolom tautan internal, tautan utilitas kebijakan privasi, informasi legal, dan hak cipta.
  9. `Floating WhatsApp`: Tombol aksi mengambang dengan status aktif di sudut kanan bawah.
- **Halaman Utilitas Mandiri:**
  - `/kebijakan-privasi`: Halaman kepatuhan 5 klausul legal ringkas untuk verifikasi kampanye Meta Ads.

---

### 3.2 Desain & Token Visual (DESIGN)

#### 3.2.1 Filosofi Visual
Desain ENLESWEB mengusung gaya **Engineered Utility**. Bersih, kontras tinggi, fungsional tanpa ornamen dekoratif yang memperlambat render halaman.

#### 3.2.2 Token Desain (CSS Custom Properties Terkunci)
```css
:root {
  /* Kanvas & Tinta Resmi ENLESWEB */
  --accent: #E4FF30;           /* LOCKED: Satu-satunya warna aksen (kuning-hijau terang) */
  --ink: #111111;              /* DEFAULT: Teks utama, garis tegas */
  --ink-muted: #55554F;        /* DEFAULT: Teks sekunder, label pembantu */
  --canvas: #FFFFFF;           /* LOCKED: Latar halaman putih bersih */
  --surface: #F5F5F2;          /* DEFAULT: Latar placeholder visual proyek, kartu proses */
  --line: #E5E5DF;             /* DEFAULT: Garis pemisah tipis */
  --neutral-object: #D1D1CB;   /* DEFAULT: Potongan netral komposisi objek hero */

  /* Tipografi Resmi */
  --font-sans: 'Poppins', system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;

  /* Radius Resmi */
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 14px;
}
```

#### 3.2.3 Engineered Tactile Button Affordance (Borderless 3D Shelf)
Tombol aksi ENLESWEB menghindari efek blur drop-shadow standar. Tombol menggunakan konstruksi shelf fisik tanpa border:
- **Default State:** Latar `--accent` (`#E4FF30`), teks `--ink` (`#111111`), tanpa border (`border: none`), box-shadow `0 3px 0 #A3C400, inset 0 1px 0 rgba(255, 255, 255, 0.6)`.
- **Hover/Focus State:** Inversi kontras menjadi latar `--ink` (`#111111`) dengan teks `--accent` (`#E4FF30`), shelf bawah 3px `#000000` (`box-shadow: 0 3px 0 #000000`).
- **Active State:** Depresi fisik 2px (`transform: translateY(2px)`), shelf bawah menipis menjadi `0 1px 0 #A3C400`.

#### 3.2.4 Navbar Transparan & Ambient Bleed
- Posisi `fixed` di `top: 0`, `z-index: 100`, tinggi 64px (mobile) / 72px (desktop).
- Memulai render transparan (`background: transparent`, `border-color: transparent`). Area Hero menerapkan margin negatif (`-64px` / `-72px`) sehingga gradasi aksen mengalir di balik navbar.
- Skrip mendeteksi scroll window > 8px atau saat menu mobile drawer dibuka: kelas CSS `.is-scrolled` diterapkan untuk mengubah latar menjadi solid `--canvas` dengan garis batas `1px solid var(--line)`.

---

### 3.3 Salinan Konten & Titik Sentuh WhatsApp (CONTENT)

#### 3.3.1 Matriks 9 Titik Sentuh Pesan WhatsApp Otomatis (Format Seragam)
Seluruh tombol WhatsApp pada website induk memanggil generator tautan terpusat dengan nomor default `6285156801570`. Format pesan seragam: `Halo ENLESWEB, saya mau tanya tentang {topik}.`

| ID Titik Sentuh (`data-cta-location`) | Topik Pesan (`data-wa-topic`) | Teks Pesan Otomatis Terisi |
|---|---|---|
| `nav` | `pembuatan website` | `Halo ENLESWEB, saya mau tanya tentang pembuatan website.` |
| `hero` | `pembuatan website` | `Halo ENLESWEB, saya mau tanya tentang pembuatan website.` |
| `package_starter` | `paket Starter` | `Halo ENLESWEB, saya mau tanya tentang paket Starter.` |
| `package_business` | `paket Business` | `Halo ENLESWEB, saya mau tanya tentang paket Business.` |
| `package_growth` | `paket Growth` | `Halo ENLESWEB, saya mau tanya tentang paket Growth.` |
| `package_custom` | `paket Custom` | `Halo ENLESWEB, saya mau tanya tentang paket Custom.` |
| `final_cta` | `pembuatan website` | `Halo ENLESWEB, saya mau tanya tentang pembuatan website.` |
| `footer` | `pembuatan website` | `Halo ENLESWEB, saya mau tanya tentang pembuatan website.` |
| `floating_wa` | `pembuatan website` | `Halo ENLESWEB, saya mau tanya tentang pembuatan website.` |

*(Catatan: Tombol sekunder di Hero `[Lihat Paket]` berupa anchor scroll langsung ke `#paket`).*

#### 3.3.2 Klausul Resmi Halaman Kebijakan Privasi (`/kebijakan-privasi`)
1. **Pendahuluan:** ENLESWEB menghormati privasi pengunjung. Dokumen ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda saat mengunjungi situs ini.
2. **Data yang Kami Kumpulkan:**
   - *Data yang Anda berikan:* Nama, nomor telepon, atau pesan saat menghubungi kami via WhatsApp atau tautan kontak.
   - *Data teknis otomatis:* Alamat IP, jenis peramban, resolusi layar, dan interaksi dasar dengan halaman via cookie atau Meta Pixel.
3. **Penggunaan Informasi:** Memproses permintaan konsultasi pembuatan website, menyusun penawaran paket, dan mengoptimalkan efektivitas kampanye promosi (tanpa memperjualbelikan data ke pihak ketiga).
4. **Cookie dan Meta Pixel:** Kami menggunakan Meta Pixel untuk mengukur konversi kampanye iklan. Anda dapat mengelola preferensi cookie melalui pengaturan peramban Anda.
5. **Hak Pengguna dan Kontak Resmi:** Anda berhak menanyakan data atau meminta penghapusan riwayat percakapan dan kontak kapan saja via WhatsApp `+6285156801570` atau Instagram `@enlesweb`.

---

### 3.4 Arsitektur Teknis & Skrip Klien (SPEC)

#### 3.4.1 Struktur Direktori Proyek Aktual (Pure CSS, Tanpa Tailwind)
```
enlesweb-master/
├── public/
│   ├── favicon.svg
│   ├── og-image.png
│   └── robots.txt
├── src/
│   ├── config/
│   │   └── site.ts           # Konfigurasi bisnis terpusat (nomor WA, URL demo, Pixel)
│   ├── content/
│   │   └── copy.ts           # Seluruh salinan teks landing page terpusat
│   ├── lib/
│   │   └── whatsapp.ts       # Generator URL wa.me dan sanitasi parameter
│   ├── styles/
│   │   └── global.css        # CSS murni dengan custom properties & scoped styling
│   ├── layouts/
│   │   └── Base.astro        # Layout induk HTML5, meta SEO, script Meta Pixel
│   ├── components/
│   │   ├── Navbar.astro      # Sticky translucent navbar + mobile drawer (3 anchor link)
│   │   ├── Hero.astro        # Hero section + value proposition badges
│   │   ├── HeroObject.astro  # Komposisi visual modular SVG hero desktop
│   │   ├── Packages.astro    # Section pembungkus paket komersial
│   │   ├── PackageColumn.astro # Kolom komparasi paket dengan sync sub-pixel
│   │   ├── CustomPackage.astro  # Jalur penawaran khusus di luar Growth
│   │   ├── Projects.astro    # Stage switcher 16:10 untuk 6 proyek portofolio
│   │   ├── ProjectItem.astro # Kartu proyek portofolio ringkas
│   │   ├── Process.astro     # Akordeon timeline 5 langkah kerja
│   │   ├── About.astro       # Penjelasan filosofi zero-bloat
│   │   ├── FinalCta.astro    # Closing call to action
│   │   ├── Footer.astro      # 4 kolom tautan + legal footer
│   │   ├── WhatsAppButton.astro # Komponen tombol taktil WhatsApp
│   │   └── FloatingWhatsApp.astro # Tombol mengambang sudut kanan bawah
│   └── pages/
│       ├── index.astro       # Landing page utama
│       └── kebijakan-privasi.astro # Halaman privasi statis
├── astro.config.mjs
└── package.json
```

---

# 4. Spesifikasi Template Paket Starter

---

## 4.1 Seruput Kopi (Kedai Kopi & F&B)

### 4.1.1 PRD & Batasan Starter
- **Konsep:** Kedai kopi lokal artisan dengan fasilitas sangrai biji kopi dadakan dan suasana ruang singgah yang nyaman.
- **Tujuan Halaman:** Menghadirkan rasa kehangatan kedai fisik, menampilkan racikan menu seduhan secara transparan, memamerkan varietas biji kopi sangrai, dan memfasilitasi pesanan pesan-antar via WhatsApp.
- **Batasan Starter & Anti-Slop (LOCKED):** **Website TIDAK menampilkan angka harga nominal eksplisit**. Seluruh harga dan stok harian diarahkan untuk ditanyakan langsung via WhatsApp (`"Harga & stok harian: Tanya via WhatsApp"`). Tidak menyediakan sistem reservasi meja otomatis.

### 4.1.2 Desain: Signature Rol Struk Kasir & Token
- **Signature Physical Metaphor:** Rol Struk Kasir Kertas Thermal Putih Bersih (*Menu-as-Hero*). Pada area Hero, menu disajikan dalam kontainer rol struk thermal dengan **potongan atas-bawah lurus rapi (*straight-cut thermal receipt roll*), tanpa efek zigzag/gerigi kartun**.
- **Token Desain Resmi (Palet P1 Terkunci):**
  ```css
  --canvas-hero: #CE3216;       /* Merah tomat jenuh tegas untuk hero */
  --canvas: #FBF9F5;            /* Putih tulang hangat untuk kanvas utama */
  --surface-receipt: #FFFFFF;   /* Kertas thermal struk kasir */
  --ink: #141414;               /* Hitam arang tegas */
  --ink-muted: #555555;
  --line: #E2DDD5;
  --line-receipt: #D0CBC2;      /* Garis pemisah struk */
  --accent: #CE3216;            /* Merah tomat jenuh untuk stempel */
  --accent-hover: #AF250D;
  --wa: #25D366;
  ```
- **Tipografi:** Display & Body: `'Bricolage Grotesque'`; Monospace Struk: `'Space Mono'`.

### 4.1.3 Salinan Konten & Alur WhatsApp
- **11 Racikan Menu Resmi Terkunci (Tanpa Nominal Rupiah):**
  1. *Kopi Espresso & Susu:* `Es Kopi Susu Seruput`, `Espresso Solo / Doppio`, `Americano Dingin / Panas`, `Flat White / Latte`.
  2. *Seduhan Filter Manual:* `Manual Brew V60`, `Japanese Ice Drip`.
  3. *Minuman Non-Kopi:* `Cokelat Klasik Panas / Dingin`, `Matcha Latte`, `Teh Melati Dingin`.
  4. *Kudapan Hangat:* `Roti Panggang Mentega`, `Pisang Goreng Madu`.
- **3 Varietas Profil Biji Kopi Sangrai Resmi (Kemasan 200 gram):**
  1. *Aceh Gayo Pantan Musara:* Aceh Tengah, 1.500-1.650 mdpl, Anaerobic Natural, Sangrai Ringan, Tasting notes: Melati, Blackcurrant, Madu Hutan.
  2. *Bali Kintamani Ulian:* Kintamani Bali, 1.200-1.350 mdpl, Full Washed, Sangrai Sedang, Tasting notes: Jeruk Manis, Gula Palem, Teh Hitam.
  3. *Toraja Sapan Misliana:* Toraja Utara, 1.600-1.800 mdpl, Semi Washed, Sangrai Sedang, Tasting notes: Cokelat Hitam, Rempah Hangat, Kayu Manis.
- **Template Pesan WhatsApp Resmi:**
  - Demo: `Halo ENLESWEB, saya ingin bertanya tentang contoh website kedai kopi Seruput Kopi.`
  - Mode Toko: `Halo Seruput Kopi, saya ingin bertanya tentang menu dan harga hari ini.` / `Halo Seruput Kopi, saya ingin bertanya tentang stok biji kopi sangrai {nama_biji}.`

---

## 4.2 ripeir (Workshop Perbaikan & Reparasi)

### 4.2.1 PRD & Alur Pelanggan
- **Konsep:** Workshop teknisi profesional untuk reparasi perangkat elektronik harian.
- **Empat Kategori Perangkat Terkunci (LOCKED):** `laptop`, `komputer`, `handphone`, `tablet`. (Tidak melayani perangkat audio/headphone).
- **Status OPEN:** Situs sengaja tidak mencantumkan daftar harga kaku, klaim garansi tertulis, atau durasi pengerjaan pasti karena memerlukan diagnosa fisik terlebih dahulu.
- **Larangan Anti-Slop:** Dilarang keras menggunakan kata *"gratis"* (misalnya "diagnosa gratis"). Empat langkah alur servis resmi:
  1. `01 Cerita di WhatsApp`
  2. `02 Bawa atau kirim`
  3. `03 Cek dan estimasi biaya`
  4. `04 Pengerjaan dan selesai`

### 4.2.2 Desain: Industrial Workshop Dark Theme & Token
- **Signature Physical Metaphor:** Papan Kerja Bengkel (*Toolbox Pegboard*) & Tag Servis Fisik.
- **Token Desain Resmi (Tema Gelap Tunggal):**
  ```css
  --bg: #08100e;            /* Deep dark spruce black */
  --bg-raised: #101c18;     /* Latar kartu layanan, final CTA */
  --bg-sunken: #050a08;     /* Latar footer */
  --line: #1c2b26;          /* Garis pemisah standar 1px */
  --line-strong: #2c4038;
  --grid: #12221d;
  --text: #E8EBED;          /* Teks terang kontras tinggi */
  --text-muted: #98A2AB;
  --accent: #FF6B1A;        /* Oranye sinyal teknis */
  --accent-hover: #FF8540;
  --accent-active: #E85A0E;
  ```
- **Tipografi Superfamily IBM Plex:**
  - Judul (H1, H2, H3): `IBM Plex Sans Condensed` (600, 700)
  - Teks Isi & Tombol: `IBM Plex Sans` (400, 500, 600)
  - Nomor Urut (`01`-`04`), WA & Label: `IBM Plex Mono` (500)

### 4.2.3 Salinan Konten & 10 Titik Sentuh WhatsApp Resmi
1. `nav`: `Halo ripeir, saya mau tanya tentang servis perangkat.`
2. `action_bar`: `Halo ripeir, saya mau tanya tentang servis perangkat.`
3. `hero`: `Halo ripeir, saya mau tanya tentang servis perangkat.`
4. `layanan_laptop`: `Halo ripeir, saya mau tanya tentang servis laptop.`
5. `layanan_komputer`: `Halo ripeir, saya mau tanya tentang servis komputer.`
6. `layanan_handphone`: `Halo ripeir, saya mau tanya tentang servis handphone.`
7. `layanan_tablet`: `Halo ripeir, saya mau tanya tentang servis tablet.`
8. `cara_kerja`: `Halo ripeir, saya mau tanya tentang proses servis.`
9. `final_cta`: `Halo ripeir, saya mau tanya tentang servis perangkat.`
10. `footer`: `Halo ripeir, saya mau tanya tentang servis perangkat.`

---

# 5. Spesifikasi Template Paket Business

---

## 5.1 tuntas (Bimbel Kelompok Kecil & Les Privat)

### 5.1.1 PRD & Rute Multi-Halaman
- **Konsep:** Lembaga bimbingan belajar kurikulum nasional (SD, SMP, SMA) berformat kelompok kecil (maksimal 5 siswa) dan les privat 1-on-1.
- **Arsitektur Rute (6 Halaman Utama + 404):**
  1. `/`: Beranda utama dengan jadwal dan komparasi format belajar.
  2. `/program`: Rincian kurikulum tingkat SD, SMP, SMA, dan persiapan asesmen.
  3. `/jadwal-biaya`: Tabel jadwal harian kelompok kecil dan matriks biaya transparan per jenjang.
  4. `/cara-belajar`: Penjelasan metode 4 langkah (Pemetaan Awal, Bedah Konsep Dasar, Latihan Bertingkat, Evaluasi Bulanan).
  5. `/tentang`: Profil pengajar, filosofi belajar mandiri, dan transparansi ruang kelas.
  6. `/kontak`: Alamat studio belajar, embed peta, formulir kontak pra-registrasi.
  7. `/404`: Halaman 404 bertema lembar buku tulis kosong.

### 5.1.2 Desain: Signature Lembar SiDU & Token
- **Signature Physical Metaphor:** Lembar Buku Tulis Bergaris Klasik SiDU (*Sinar Dunia*). Garis margin merah vertikal khas di sisi kiri kontainer konten utama (`--correction-subtle`), kisi garis tipis berulang 32px (`--line-ruled`), dan tombol cap stempel tinta (`--accent`).
- **Token Desain Resmi:**
  ```css
  --canvas: #FFFFFF;                  /* Kertas putih bersih SiDU */
  --surface: #FFFFFF;
  --ink: #0F224A;                     /* Biru tinta pulpen gelap */
  --ink-muted: #3E4D68;
  --line: #D0DBEC;
  --line-ruled: rgba(20, 45, 120, 0.08); /* Kisi garis buku SiDU berulang 32px */
  --line-ruled-solid: #ECEEF4;
  --tint: #F2F6FC;
  --accent: #163275;                  /* Tombol stempel utama */
  --accent-hover: #0D1F4D;
  --correction: #C5221F;              /* Merah koreksi guru */
  --correction-subtle: #FCA5A5;       /* Garis margin merah vertikal kiri */
  --wa: #25D366;
  ```
- **Tipografi:** Display / Headings: `'Space Grotesk'` (700 Bold); Body & Tabel: `'Atkinson Hyperlegible'` (400, 700).

### 5.1.3 Salinan Konten, Biaya & Jadwal As-Is
- **Matriks Biaya Resmi:**
  - *SD (Kelas 4-6):* Kelompok kecil **Rp300.000**/bulan | Privat **Rp90.000**/pertemuan.
  - *SMP (Kelas 7-9):* Kelompok kecil **Rp350.000**/bulan | Privat **Rp100.000**/pertemuan.
  - *SMA (Kelas 10-12):* Kelompok kecil **Rp400.000**/bulan | Privat **Rp120.000**/pertemuan.
  - *Ketentuan:* Kelompok kecil 8 sesi/bulan (90 mnt/sesi). Les privat 60 mnt/sesi. Biaya pendaftaran **Rp50.000** dibayar satu kali (`REGISTRATION_FEE = 50000`).
- **Jadwal Kelompok Kecil Terkunci:**
  - SD A: Senin & Kamis (15.30 - 17.00) | SD B: Selasa & Jumat (15.30 - 17.00)
  - SMP A: Senin & Kamis (17.30 - 19.00) | SMP B: Selasa & Jumat (17.30 - 19.00)
  - SMA A: Senin & Kamis (19.00 - 20.30) | SMA B: Selasa & Jumat (19.00 - 20.30)
  - Les Privat: Fleksibel Senin sampai Sabtu (14.00 - 21.00).
- **12 Titik WhatsApp Resmi (`data-cta-location`):**
  1. `nav`: `pendaftaran bimbel`
  2. `floating_wa`: dinamis per halaman
  3. `hero`: `pendaftaran bimbel`
  4. `program_sd`: `program SD`
  5. `program_smp`: `program SMP`
  6. `program_sma`: `program SMA`
  7. `jadwal_biaya`: `jadwal dan biaya`
  8. `cara_belajar`: `cara belajar`
  9. `contact`: `pendaftaran bimbel`
  10. `form`: `form kontak`
  11. `final_cta`: `program belajar`
  12. `footer`: `pendaftaran bimbel`

---

# 6. Spesifikasi Template Paket Growth

---

## 6.1 Jerseay (Studio Jersey & Apparel Olahraga Kustom)

### 6.1.1 PRD & Corong Konversi
- **Konsep:** Studio perancangan dan manufaktur jersey olahraga kustom (futsal, sepak bola, basket, lari, esports).
- **Total Rute (10 Halaman Utama + 404):**
  - *6 Halaman Statis:* `/` (Beranda), `/proyek` (Arsip Portofolio), `/layanan` (Spesialisasi 5 Cabang), `/proses` (Alur Kerja Studio), `/rancang` (Konfigurator & Roster), `/mulai-brief` (Formulir Brief Adaptif).
  - *4 Halaman Proyek Dinamis (`/proyek/[project]`):* `futsal-liga-surabaya`, `sepeda-bandung-barat`, `esports-turnamen-nasional`, `basket-jakarta-selatan`.
  - *1 Halaman Utilitas:* `/404`.

### 6.1.2 Desain: Monochrome Atelier & Monospace Teknis
- **Signature Physical Metaphor:** Kain Dry-fit Berpori, Label Kerah Tenun (*Woven Neck Label*), dan Papan Taktik Tim.
- **Sistem Warna Resmi (Monochrome Atelier Berbasis Tailwind CSS):**
  - Latar Kanvas Utama: `white` (`#FFFFFF`) (Halaman berlatar putih bersih, bukan gelap).
  - Latar Banner Sinematik: `black-950` (`#0A0A0A`).
  - Judul & Tombol Utama: `black-900` (`#111111`), hover `black-800` (`#1A1A1A`).
  - Teks Body: `gray-700` (`#404040`), `gray-600` (`#595959`).
  - Garis Pembatas: `gray-200` (`#E5E5E5`), `gray-300` (`#D4D4D4`).
  - Aksen Fungsional: `whatsapp-green` (`#25D366`), `status-pass` (`#15803d`), `status-warn` (`#b45309`), `status-fail` (`#b91c1c`).
  *(Catatan: Volt lime `#D4FF00` hanyalah warna preset proyek tim esport `VTX-PRO`, bukan warna aksen tema global studio).*
- **Tipografi:** Heading & Body: `Plus Jakarta Sans`; Nomor, Kode & Data Teknis: Monospace Teknis (`font-mono`).

### 6.1.3 Modul Kustom: Kit Configurator & Roster Builder (`/rancang`)
- **Alur 5 Langkah Konfigurator Asli (Tanpa Hitungan Rupiah):**
  1. *Langkah 1: Dasar:* Nama Tim, Cabang Olahraga, Siluet Kerah/Potongan, Celana Tanding, Varian Kit (Kandang/Tandang/Kiper).
  2. *Langkah 2: Warna & Pola:* ColorPicker dengan kalkulator kontras WCAG otomatis, PatternPicker 5 pola geometris & intensitas.
  3. *Langkah 3: Nama, Nomor & Logo:* Gaya huruf (Tegas/Teknis), nomor dada, LogoZones 6 titik penempatan sponsor.
  4. *Langkah 4: Roster Pemain:* RosterTable (maksimal 40 pemain, validasi duplikat nomor punggung). Fitur Batch Paste mendukung pemisah koma, tab, titik koma, atau pipa (`name, number, size`).
  5. *Langkah 5: Ringkasan & Keluaran:* SummaryPanel, ekspor CSV UTF-8 BOM, dan generator pesan WhatsApp URL-safe.
- **Format Pesan WhatsApp Hasil Konfigurator:**
  ```text
  Halo Jerseay Studio, saya ingin mengirim hasil rancangan kit tim:

  RANCANGAN KIT: {Nama Tim}
  - Cabang Olahraga: {Sport}
  - Siluet: {Siluet}
  - Warna Utama: {Hex}
  - Warna Sekunder: {Hex}
  - Aksen: {Hex}
  - Warna Nomor: {Hex} ({Status Kontras})
  - Pola: {Pola} ({Intensitas})
  - Nomor Dada: {Ya/Tidak}
  - Bawahan Celana: {Ya/Tidak}
  - Zona Logo: {Daftar Zona}
  - Target Tanggal: {Target}
  - Total Pemain: {N} orang
  - Distribusi Ukuran: {S: a, M: b, L: c, XL: d, XXL: e}

  DAFTAR PEMAIN:
  1. {Nama} #{Nomor} ({Ukuran}) [{Kit}]
  ...
  Warna di layar bisa berbeda dari hasil cetak. Studio mengonfirmasi warna pada tahap desain.
  Mohon informasi ketersediaan jadwal konsultasi desain.
  ```

---

## 6.2 dipotongin (Barbershop Pria & Grooming)

### 6.2.1 PRD & Layout B Editorial Dua Kolom
- **Konsep:** Studio pangkas rambut pria kontemporer bergaya kriya cetak letterpress.
- **Format Layout B:** Beranda menampilkan kartu member loyalitas di sisi kiri dan papan tarif resmi di sisi kanan, serta halaman mandiri `/konsultasi`.

### 6.2.2 Desain: Karakter Kriya Cetak Letterpress & Kartu Member Arang
- **Signature Physical Metaphor:** Kartu Member Loyalitas Fisik (8 Stempel Pangkas) dan Tiket Pangkas Fisik Resmi.
- **Token Desain Resmi:**
  ```css
  --canvas: #F6F5F0;          /* Putih Kapur / Linen Terang (Kanvas Utama Halaman) */
  --canvas-accent: #C29F75;   /* Cokelat Kraft Plakat */
  --surface: #FFFFFF;
  --ink: #121312;             /* Teks hitam pekat */
  --muted: #5A5C58;
  --line: #D6D4CC;
  --card-bg: #1A1A18;         /* Substrat fisik kartu member loyalitas arang gelap */
  --card-border: #C29F75;     /* Emas antik bingkai kartu member */
  --card-stamp-bg: #282824;
  --card-reward: #C29F75;
  --card-kraft: #C29F75;
  --card-ink: #141412;
  --focus: #C29F75;
  ```
  *(Catatan: Halaman web berlatar putih linen terang `#F6F5F0`. Hanya substrat kartu member yang berlatar gelap `#1A1A18`).*
- **Tipografi:** Headings & Wordmark: `'Besley', Georgia, serif`; Body & Label: `'Albert Sans', sans-serif`.

### 6.2.3 Modul Kustom: Kuis Konsultasi Gaya Rambut 1 Menit & Tiket Pangkas
- Halaman `/konsultasi` menyediakan modul 3 langkah (Bentuk Wajah, Jenis Rambut, Rutinitas Styling Harian).
- Menghasilkan rekomendasi gaya deterministik dan Tiket Pangkas Digital dengan tombol kirim ke WhatsApp:
  `Halo studio dipotongin, saya telah menyelesaikan Kuis Konsultasi Gaya Rambut di website dengan rekomendasi: *[Nama Model]* (Paket: *[Paket Resmi]*). Saya ingin menanyakan ketersediaan bangku pangkas.`

### 6.2.4 Salinan Konten: 8 Paket Tarif Layanan Terkunci
1. *Potong Rambut Reguler:* **Rp40.000** (45 menit)
2. *Potong Rambut Anak:* **Rp35.000** (30 menit)
3. *Taper dan Fade Bersih:* **Rp50.000** (40 menit)
4. *Rapikan Jenggot dan Kumis:* **Rp25.000** (25 menit)
5. *Cukur Habis Kepala:* **Rp35.000** (35 menit)
6. *Rapikan Samping dan Tengkuk:* **Rp20.000** (20 menit)
7. *Pangkas Komplit Handuk Hangat:* **Rp75.000** (60 menit, Lencana: `Paket Lengkap`)
8. *Cuci dan Segarkan Kepala:* **Rp30.000** (25 menit)
*(Tidak ada layanan pewarnaan, bleaching, atau hair spa).*

---

## 6.3 berflower (Florist & Toko Hadiah Konsep Venice)

### 6.3.1 PRD & 7 Halaman Terpadu
- **Konsep:** Butik bunga artistik dan bingkisan kurasi konsep berbasis di Venice, Italia.
- **Arsitektur Rute (7 Halaman Utama + 404):** `/` (Beranda), `/koleksi`, `/hadiah`, `/rangkai-buket`, `/keranjang`, `/cara-pesan`, `/kontak`, `/404`.

### 6.3.2 Desain: Botani Puitis, Kertas Sutra & Token
- **Signature Physical Metaphor:** Kertas Pembungkus Bunga Sutra Bertekstur dan Kartu Ucapan Segel Lilin Timbal.
- **Token Desain Resmi (`src/styles/global.css`):**
  ```css
  --paper: #F6F0E6;          /* Latar halaman utama */
  --paper-deep: #EDE3D2;     /* Blok warna CTA, summary checkout, badge */
  --paper-light: #FCF9F4;    /* Input form & pratinjau kartu */
  --ink: #2B2420;            /* Teks utama arang */
  --ink-muted: #6B5E55;
  --line: #D9CDB9;           /* Garis tipis 1px */
  --clay: #9E3F3A;           /* Aksen tombol utama, tab aktif, error form */
  --leaf: #2F4235;           /* Latar khusus footer */
  --leaf-text: #CFC6B3;      /* Teks di atas footer */
  ```
- **Tipografi:** Judul, Angka Besar & Nama Produk: **Fraunces Variable**; Teks Isi, Tombol & Form: **DM Sans**.

### 6.3.3 Modul Kustom: Rangkai Buket Interaktif (`/rangkai-buket`)
- **Komponen Bahan Baku & Harga Terkunci:**
  1. *Bunga Utama:* Mawar merah (Rp20.000/tangkai), Bunga matahari (Rp25.000/tangkai), Tulip (Rp35.000/tangkai), Peony (Rp50.000/tangkai).
  2. *Bunga Pelengkap:* Baby's breath (Rp15.000/ikat), Eucalyptus (Rp12.000/ikat), Statice (Rp10.000/ikat).
  3. *Kertas Pembungkus:* Krem `#F6F0E6` (Rp10.000), Merah muda `#E8C6C4` (Rp15.000), Kertas kraft `#C9A878` (Rp12.000).
  4. *Pita:* Krem (Rp5.000), Merah muda (Rp5.000), Hijau (Rp5.000).
  5. *Komposisi Default:* 1 Mawar merah, kertas Krem, pita Krem (Estimasi: Rp35.000).
  6. *Editor Kartu Ucapan:* Untuk (80 char), Dari (80 char), Pesan (150 char), Gaya tulisan (Serif, Serif miring, Sans).

### 6.3.4 Salinan Konten, Katalog Produk & Payload WhatsApp
- **7 Produk Katalog Resmi (`/koleksi`):**
  1. Buket Mawar Merah Muda (Rp185.000)
  2. Buket Gerbera Kuning (Rp150.000)
  3. Buket Lily Putih (Rp240.000)
  4. Bunga Meja Krisan (Rp175.000)
  5. Bunga Meja Campur (Rp225.000)
  6. Papan Bunga Ucapan Selamat (Rp650.000)
  7. Papan Bunga Duka Cita (Rp600.000)
- **3 Paket Hadiah Resmi (`/hadiah`):**
  1. Buket dan Cokelat (Rp275.000)
  2. Buket Wisuda (Rp225.000)
  3. Hampers Bunga (Rp320.000)
  - *Tambahan Add-on:* Boneka wisuda kecil (Rp50.000), Cokelat batang (Rp30.000).
- **Persistent Cart Store:** Menggunakan `@nanostores/persistent` dengan key atom `'berflower_cart_v1'`.
- **Payload Pesan WhatsApp Checkout Keranjang (Demo Mode):**
  ```text
  Halo ENLESWEB, saya mencoba form pesanan di contoh website berflower.

  Nama: {nama}
  Acara: {acara}
  Tanggal dibutuhkan: {tanggal format id-ID}
  Cara terima: {terima}

  Detail pesanan:
  1. {nama item} x{kuantitas} - {subtotal}
     - {rincian buket: Bunga utama, Pelengkap, Kertas, Pita}
     Kartu ucapan:
     Untuk: {to}
     Dari: {from}
     Pesan: "{message}"

  Subtotal estimasi: {subtotal}

  Saya mau tanya tentang pembuatan website seperti ini.
  ```

---

# 7. QA Terpadu & Panduan Deployment

### 7.1 Checklist Verifikasi Kualitas Lintas Proyek

#### 1. Validasi Kode & Tipe Data
- [ ] Eksekusi `npm run build` berhasil tanpa pesan kesalahan (*zero errors, zero unhandled rejections*).
- [ ] Pemeriksaan tipe data TypeScript (`astro check` atau `tsc --noEmit`) bersih 100%.
- [ ] Tidak ada berkas impor atau aset gambar yang menghasilkan kode status 404 pada konsol developer peramban.

#### 2. Kepatuhan Aksesibilitas & Tipografi (Anti-Slop)
- [ ] Seluruh teks antarmuka publik bebas 100% dari karakter em dash (`—`).
- [ ] Rasio kontras teks memenuhi standar WCAG AA (minimal 4.5:1 untuk teks normal, minimal 3.0:1 untuk teks besar).
- [ ] Seluruh tombol, field input, dan tautan memiliki target sentuh fisik minimum 44px × 44px.
- [ ] Seluruh animasi CSS dinonaktifkan ketika preferensi pengguna `prefers-reduced-motion: reduce` aktif.
- [ ] Tautan navigasi loncat (*Skip to content link*) tersedia di awal elemen `<body>` dan dapat difokuskan via tab keyboard.

#### 3. Alur Konversi & Sanitasi Parameter WhatsApp
- [ ] Semua tombol CTA WhatsApp menggunakan protokol `https://wa.me/{nomor}?text={encodedText}`.
- [ ] Nomor WhatsApp telah terkonfigurasi dengan format internasional yang valid tanpa tanda plus, tanda hubung, atau spasi (contoh: `6285156801570`).
- [ ] Parameter teks WhatsApp telah melalui proses `encodeURIComponent()` dengan benar tanpa karakter aneh atau terpotong.
- [ ] Setiap tombol konversi memuat atribut analitik `data-cta-location` dan `data-wa-topic`.
- [ ] Mode Demo (`site.demoMode`): Jika bernilai `true`, pesan WhatsApp menyertakan label penanda demo; jika `false`, pesan beralih ke format transaksi studio komersial.

#### 4. Kepatuhan SEO & Metadata
- [ ] Setiap halaman memiliki elemen `<title>` unik dengan panjang 40-60 karakter dan `<meta name="description">` informatif sepanjang 120-160 karakter.
- [ ] Tag Open Graph (`og:title`, `og:description`, `og:image`, `og:url`) dan Twitter Card terkonfigurasi lengkap.
- [ ] Berkas `public/robots.txt` dan sitemap XML otomatis (`sitemap-index.xml`) aktif dan merujuk domain kanonikal yang valid.

---

### 7.2 Prosedur Rilis Cloudflare Workers (Ekosistem Terpadu)

Seluruh ekosistem ENLESWEB (website induk `enlesweb.com`, 6 subdomain showcase portofolio konsep `*.enlesweb.com`, dan internal composer `preview.enlesweb.com`) berjalan terpusat di atas infrastruktur Cloudflare Workers. Platform pihak ketiga Vercel telah resmi dinonaktifkan (Decision 023).

#### Pipeline Cloudflare Workers (Website Induk & Seluruh Subdomain):
1. Hubungkan repositori GitHub ke Cloudflare Workers.
2. Tetapkan konfigurasi kompilasi:
   - **Framework Preset:** `Astro`
   - **Build Command:** `npm run build`
   - **Build Output Directory:** `dist`
   - **Node.js Version:** `>= 18.17.0`
3. Seluruh variabel bisnis produksi (nomor WhatsApp resmi `6285156801570` dan Meta Pixel ID `1099411523003859`) telah terkunci langsung di berkas TypeScript `src/config/site.ts` (tidak memerlukan environment variable terpisah).
4. Hubungkan domain kanonikal utama (`enlesweb.com`) dan seluruh DNS subdomain terkait (`jerseay`, `dipotongin`, `tuntas`, `seruput`, `ripeir`, `berflower`, dan `preview`) melalui panel DNS Cloudflare dengan status *Proxied*.
5. Verifikasi pengamanan rute pada `preview.enlesweb.com`: rute publik hanya mengizinkan `/p/<id>` dan aset statis `/_astro/*`, rute editor internal terlindungi di bawah `/studio-admin/*` (dengan redirect 301 otomatis dari `/studio-admin` ke `/studio-admin/`), serta rute `/` dan `/pratinjau` sengaja merespons `404 Not Found` (non-GET/HEAD ditolak). Rangkaian 46 automated assertions memvalidasi integritas rute dan codec Base62 salt 16-bit.
6. Uji coba seluruh tautan demo dari switcher panggung ENLESWEB (`https://enlesweb.com/#proyek`) ke masing-masing subdomain kanonikal Cloudflare Workers yang telah diverifikasi aktif.

---
<!-- AKHIR DARI PART 04 (BERSAMBUNG KE PART 05: enlesweb-part-05-of-05.md) -->
