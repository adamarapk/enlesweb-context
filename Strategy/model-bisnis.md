# MODEL BISNIS ENLESWEB
**Versi:** 1.7  
**Terakhir diperbarui:** 29 Oktober 2026  
**Sumber:** `Start Here/summary.md` (sumber kebenaran v2.4), `Strategy/visi.md`, `Strategy/positioning.md`, `Strategy/rencana.md`, `Delivery & Operations/sop.md` (v1.4, Decision 022, Decision 023, & Addendum 29 Oktober 2026), `Business Memory/decision-log.md` (Decision 001 - 023 + Addendum).  
**Label:** [FAKTA] terverifikasi di dokumen/repo, [KEPUTUSAN] dikunci pemilik, [ESTIMASI] perkiraan terukur, [HIPOTESIS] asumsi belum terbukti, [BELUM DIKETAHUI] data belum tersedia (bukan nol).

---

## 1. Ringkasan Model Bisnis
[KEPUTUSAN] ENLESWEB beroperasi dengan model bisnis **jasa pembuatan website statis berpaket dengan alur serah terima tuntas, kuota update konten ringan tahunan terukur, dan biaya tahunan terkelola opsional**. Bisnis ini dirancang untuk bertransformasi secara bertahap menuju sistem produksi internal (Website Builder berbasis blueprint JSON) setelah validasi pasar 10 klien pertama selesai (`visi.md`).

Rincian harga paket, batas halaman, fitur, dan SLA waktu pengerjaan sepenuhnya mengacu pada `Start Here/summary.md` dan `Delivery & Operations/sop.md` (v1.4). Dokumen ini fokus memetakan **ekonomi bisnis**: struktur biaya, margin unit, ekonomi akuisisi, titik impas, proyeksi skenario arus kas 12 bulan, dan batas kapasitas solo founder.

---

## 2. Sumber Pendapatan (Revenue Streams)
[KEPUTUSAN] Bisnis mengandalkan 3 sumber pendapatan utama ditambah 1 pendapatan mikro pasca-tayang dengan batasan disiplin:

| Sumber Pendapatan | Skema | Harga | Deskripsi & Batasan |
|---|---|---|---|
| **1. Paket Inti Sekali Bayar** | Pembayaran bertahap: DP 50% di awal, 50% pelunasan sebelum tayang di domain asli | - **Starter:** Rp450.000 (harga peluncuran 10 klien pertama)<br>- **Business:** Rp750.000<br>- **Growth:** Rp1.200.000 | Termasuk pengerjaan website statis, hosting 1 tahun, domain 1 tahun (`.com` atau `.id`), garansi perbaikan bug 30 hari, serta jatah gratis putaran update konten ringan tahun pertama (**Starter 2x, Business 4x, Growth 6x**, Decision 015). Sumber pendapatan utama tahun pertama. |
| **2. Perpanjangan Terkelola Tahunan** | Pembayaran tahunan berulang di muka | - **Flat Rp400.000 / tahun** (`.com` / `.id`)<br>- **Flat Rp300.000 / tahun** (domain lain) | *All-in*: perpanjangan domain, hosting Cloudflare Workers/Pages, pemeliharaan script, dan **reset otomatis kuota gratis putaran update konten ringan tahunan (2x/4x/6x sesuai paket awal)** (Decision 002 & Decision 015). Jatuh tempo mulai bulan ke-12 s/d ke-15. Jika klien memilih mandiri, domain ditransfer (kode EPP) dan arsip build `.zip` diserahkan tanpa biaya perpanjangan. |
| **3. Paket Custom (Oportunistik)** | Kesepakatan per proyek | Mulai **Rp2.000.000** | [KEPUTUSAN] Bersifat oportunistik pasif. Tidak dipromosikan secara aktif di iklan atau homepage, dan tidak dimasukkan ke dalam target proyeksi keuangan 12 bulan. |
| **4. Tarif Kelebihan Kuota Update Konten Ringan (Mikro)** | Pembayaran per putaran update setelah kuota tahunan habis | **Flat Rp50.000 / putaran update** | [KEPUTUSAN] Berlaku jika klien telah menghabiskan kuota gratis tahunannya (2x/4x/6x). Satu putaran = maks 5–10 item teks/foto dalam 1 pesan WA, SLA 1–2 hari kerja (Decision 015). Tidak dimasukkan ke dalam target proyeksi dasar 12 bulan. |

### Sumber Pendapatan yang TIDAK Disediakan Saat Ini
- [KEPUTUSAN] **Tidak ada add-on fitur aplikasi berbayar** (toko online keranjang otomatis, CMS, booking dinamis) di paket Starter/Business demi mencegah kerumitan operasional.
- [KEPUTUSAN] **Tidak ada biaya pemeliharaan/retainer bulanan wajib** sebelum 10 klien selesai (kebutuhan update ringan sudah terwadahi lewat kuota tahunan 2x/4x/6x + tarif Rp50.000/putaran).

---

## 3. Struktur Biaya (Cost Structure)
Biaya operasional dibagi secara tegas menjadi biaya tunai tetap, biaya tunai variabel langsung, dan waktu kerja pendiri.

### A. Biaya Tunai Tetap Bulanan (Fixed Cash Costs)
- **AI Coding/Design Tools (Decision 014):**
  - [FAKTA/KEPUTUSAN] Saat ini dikunci tetap pada **Rp100.000 / bulan** (alat bantu pengembangan dasar).
  - [KEPUTUSAN] **Aturan Penundaan Kenaikan Biaya AI Tools:** Langganan AI tools baru boleh dinaikkan ke **Rp300.000 – Rp400.000 / bulan** setelah **minimal 5 klien selesai dan lunas (100%) ATAU saat menangani 2 proyek Growth/Custom secara simultan**. Aturan ini menghemat Rp300.000/bulan kas awal dan menurunkan beban tetap tahun pertama dari Rp3,6–4,8 juta menjadi sekitar **Rp2.700.000 – Rp4.200.000 per tahun** (tergantung kecepatan pencapaian 5 klien lunas).
- **Infrastruktur Hosting & Tooling Internal:**
  - [FAKTA] Hosting Cloudflare Workers/Pages (*.enlesweb.com): **Rp0** (memanfaatkan free tier Cloudflare Workers; hosting Vercel resmi dinonaktifkan per Decision 023).
  - [FAKTA] Repositori GitHub & CI/CD Actions: **Rp0**.
  - [KEPUTUSAN] Alat pembuatan Bukti Pemesanan PDF & TTD digital: **Rp0** (Google Docs/Canva + TTD gambar, Decision 007).
  - [KEPUTUSAN] Eksperimen Micro-Warm Outreach DM Instagram (2–3 pemilik usaha/hari): **Rp0** (manual tanpa tools scraping berbayar, Decision 013).
- **Domain Internal Bisnis:**
  - [FAKTA] `enlesweb.com`: **Rp152.070** (tahun pertama, pendaftaran registrar Domainesia - **TEREALISASI / SUDAH DIBELI**, Decision 018).

### B. Biaya Tunai Variabel Langsung per Klien (COGS / Direct Costs)
Biaya langsung yang timbul saat proyek klien mulai dikerjakan (setelah DP 50% diterima DAN materi dasar klien dinyatakan lengkap, Decision 017):
- **Pendaftaran Domain Klien Tahun Pertama (Registrar Domainesia):**
  - [FAKTA] Ekstensi `.com`: Rp137.000 + PPN 11% = **Rp152.070**.
  - [FAKTA] Ekstensi `.id`: Rp219.000 + PPN 11% = **Rp243.090**.
  - [FAKTA] Ekstensi lainnya: mayoritas < **Rp111.000**.
- **Biaya Iklan Meta (CAC Tunai):**
  - [KEPUTUSAN] Plafon anggaran iklan 90 hari: **Rp500.000 – Rp1.000.000** (Decision 009). Plafon tahap pertama Rp500.000 tersedia langsung (termasuk tes awal Rp100.000). Pembukaan sisa plafon hingga Rp1.000.000 mensyaratkan minimal 1 DP masuk dan [KEPUTUSAN] diperbolehkan didanai menggunakan tambahan modal pemilik.

### C. Alokasi Waktu Kerja Pendiri (Non-Cash Opportunity Cost)
[KEPUTUSAN] Waktu pendiri dihitung **Rp0 sebagai pengeluaran kas tunai**, tetapi wajib dicatat dalam hitungan jam aktual per klien di register pengerjaan (`Business Memory/weekly-review.md`).
- [ESTIMASI] Waktu kerja aktual penyelesaian 1 klien paket Starter dipatok berkisar antara **5 – 12 jam kerja nyata** (termasuk cadangan waktu melayani kuota update ringan tahunan).
- Metrik internal: **Rp per jam kerja pendiri** = `(Pendapatan Paket - Biaya Domain) / Total Jam Kerja Aktual`. Dengan estimasi 5–12 jam, penghasilan kotor per jam kerja paket Starter berada pada kisaran:
  - Domain `.com` (Sisa Rp297.930): **Rp24.800 – Rp59.500 / jam kerja**.
  - Domain `.id` (Sisa Rp206.910): **Rp17.200 – Rp41.300 / jam kerja**.
- Metrik ini digunakan setelah 3 klien pertama selesai untuk menilai apakah pengerjaan paket Starter secara operasional dan ekonomis layak dipertahankan atau harus segera dinaikkan harganya.

---

## 4. Unit Economics & Margin per Paket

### A. Kebijakan Ekstensi Domain, Default Framing `.com`, dan Subsidi Peluncuran
- [KEPUTUSAN] **Klien bebas memilih ekstensi `.com` atau `.id` tanpa biaya tambahan** di seluruh paket inti (Decision 010).
- [KEPUTUSAN] Pada paket Starter harga peluncuran (Rp450.000), pemilihan domain `.id` menghasilkan margin kotor tunai 46%. Kondisi ini diakui secara sadar sebagai **subsidi akuisisi 10 klien pertama** demi menghilangkan friksi konversi UMKM lokal Indonesia.
- [KEPUTUSAN] **Default Framing `.com` di SOP WhatsApp (Decision 012 & Decision 014):** Untuk mengamankan margin kotor kas (66,2% vs 46,0%) dan menjaga agar margin kotor gabungan (*blended*) tetap bertahan di atas ambang minimal **60%**, skrip chat SOP WhatsApp pada penutup **Template 5.2 (Rekomendasi Paket)** wajib mengajukan ekstensi `.com` sebagai rekomendasi kalimat standar (*"Untuk nama domainnya, apakah namabisnis.com sudah sesuai untuk kami daftarkan?"*) sebelum menyebut opsi ekstensi lain.
- [KEPUTUSAN] **Proteksi Kas Pembelian Domain (Decision 017):** Untuk seluruh paket, pembelian domain di registrar baru dieksekusi setelah **DP 50% masuk DAN materi dasar dinyatakan lengkap**, sehingga pendiri tidak pernah mengalami defisit kas tunai jika klien terlambat mengirim materi atau beralih ke status *On-Hold* 60 hari.

### B. Tabel Margin Kotor Tunai per Unit (Tahun Pertama)

| Paket | Harga Jual | Biaya Domain `.com` | Margin Kotor (`.com`) [Target Framing] | Biaya Domain `.id` | Margin Kotor (`.id`) [Konservatif] |
|---|---|---|---|---|---|
| **Starter** (Peluncuran) | Rp450.000 | Rp152.070 | **Rp297.930 (66,2%)** | Rp243.090 | **Rp206.910 (46,0%)** |
| **Business** | Rp750.000 | Rp152.070 | **Rp597.930 (79,7%)** | Rp243.090 | **Rp506.910 (67,6%)** |
| **Growth** | Rp1.200.000 | Rp152.070 | **Rp1.047.930 (87,3%)** | Rp243.090 | **Rp956.910 (79,7%)** |

*Catatan: Skenario dasar pemodelan menggunakan biaya domain `.id` (Rp243.090) sebagai baseline konservatif terberat; setiap klien yang menerima default framing `.com` menambah surplus kas bersih sebesar **+Rp91.020 per klien**.*

### C. Acuan Evaluasi Harga Starter Pasca-10 Klien
- [KEPUTUSAN] Harga Starter pasca-10 klien pertama statusnya tetap **[BELUM DIKETAHUI]** dan tidak dikunci di dokumen ini.
- [ESTIMASI/ACUAN] Agar paket Starter mencapai target ambang margin kotor minimal **60%** saat klien memilih domain `.id`, harga jual minimum adalah:
  $$\text{Harga Minimum} = \frac{\text{Biaya Domain .id}}{1 - 0{,}60} = \frac{\text{Rp243.090}}{0{,}40} \approx \mathbf{Rp607.725}\ (\text{dibulatkan}\ \mathbf{Rp610.000})$$
  Angka Rp610.000 menjadi patokan analitis saat melakukan evaluasi harga setelah 10 klien pertama selesai.

---

## 5. Ekonomi Akuisisi & Batas CAC (Customer Acquisition Cost)

### A. Rumus Corong Akuisisi (Acquisition Funnel)
Bisnis menggunakan alur konversi utama dari Meta Ads (serta jalur tambahan gratis Rp0 dari Micro-Warm Outreach DM IG manual, Decision 013):

$$\text{Impresi Iklan / DM IG} \xrightarrow{\text{Hook}} \text{Klik Homepage / Balasan DM} \xrightarrow{\text{Konversi}} \text{Chat Masuk WA} \xrightarrow{\text{Kualifikasi & PDF}} \text{Klien DP 50\%} \xrightarrow{\text{Materi & SLA}} \text{Pelunasan 100\%}$$

- Tingkat konversi tiap tahapan berstatus **[BELUM DIKETAHUI]** dan sengaja tidak dikarang.
- Data riil corong diisi dari hasil evaluasi uji coba Meta Ads minggu pertama (21–27 Oktober 2026) dan catatan terpisah Micro-Warm Outreach DM IG.

### B. Batas CAC Maksimum (Toleransi Biaya Iklan per Klien)
Agar bisnis tidak mengalami kerugian tunai operasional langsung pada transaksi pertama:
- **Starter (.id):** Batas CAC maksimum adalah **Rp206.910**. Biaya akuisisi di atas angka ini membuat pesanan Starter merugi secara tunai.
- **Starter (.com):** Batas CAC maksimum adalah **Rp297.930**.
- **Business (.id):** Batas CAC maksimum adalah **Rp506.910** (atau **Rp597.930** jika `.com`).
- **Growth (.id):** Batas CAC maksimum adalah **Rp956.910** (atau **Rp1.047.930** jika `.com`).

### C. Target CAC Implisit Rencana 90 Hari
- [KEPUTUSAN] Plafon anggaran iklan 90 hari ditetapkan Rp500.000 – Rp1.000.000 untuk mengejar target 10 klien pertama (DP masuk), dibantu oleh kanal Rp0 (Konten Organik IG & Micro-Warm Outreach DM IG 2–3 usaha/hari).
- [ESTIMASI] Target CAC implisit:
  $$\text{CAC Target} = \frac{\text{Anggaran Iklan 90 Hari}}{\text{10 Klien}} = \mathbf{Rp50.000\ \text{hingga}\ Rp100.000\ \text{per klien}}$$

---

## 6. Analisis Titik Impas (Break-Even) & Proyeksi 12 Bulan

### A. Reduksi Defisit Skenario Konservatif melalui Penundaan AI Tools (Decision 014)
[FAKTA & ANALISIS] Dengan dikuncinya langganan AI tools tetap pada **Rp100.000/bulan** hingga minimal 5 klien selesai dan lunas (atau saat menangani 2 proyek Growth/Custom simultan):
- Beban AI tools 12 bulan pada skenario konservatif (asumsi 6 bulan awal @ Rp100.000 + 6 bulan berikutnya @ Rp350.000) turun dari Rp4.000.000 menjadi **Rp2.700.000** (hemat Rp1.300.000).
- Biaya 10 domain klien: **Rp2.430.900** (jika konservatif 100% `.id`) atau **Rp1.520.700** (jika 100% `.com` berkat *default framing* `.com`).
- Plafon iklan Meta Ads: **Rp750.000** (nilai tengah plafon Rp500rb–Rp1jt).
- Total pengeluaran kas tahun pertama pada skenario konservatif terpangkas menjadi **Rp5.122.770 (jika `.com`) s/d Rp6.032.970 (jika `.id`)**.

[KEPUTUSAN] Angka **Rp4.500.000 tetap diposisikan sebagai batas bawah konservatif (*milestone validasi pasar*)**. Berkat Decision 013 (prioritas demo `tuntas` Rp750rb & `Jerseay` Rp1,2jt) dan Decision 014 (penghematan AI tools Rp300rb/bln + *default framing* `.com`), risiko defisit modal kerja awal terpangkas secara drastis.

### B. Titik Impas Operasional Bulanan
- **Fase Awal (AI Tools Rp100.000/bulan):** Hanya dibutuhkan **1 klien Starter (`.com` maupun `.id`)** setiap 2–3 bulan untuk menutup biaya tetap bulanan AI tools.
- **Fase Pasca-5 Klien Lunas (AI Tools Rp350.000/bulan):** Dibutuhkan **2 klien Starter (`.com`)** atau **1 klien Business** per bulan untuk menutup seluruh biaya tunai tetap bulanan.

### C. Tabel Sensitivitas Campuran Paket 10 Klien Pertama
Tabel sensitivitas berikut memetakan variasi kombinasi paket untuk 10 klien pertama (membandingkan baseline konservatif 100% `.id` vs target *default framing* 70% `.com` / 30% `.id`):

| Variasi Campuran (Starter / Business / Growth) | Total Omzet | Sisa Margin Kotor Kas (100% `.id`) | Rata-rata Margin (`.id`) | Sisa Margin Kotor Kas (70% `.com` / 30% `.id`) | Rata-rata Margin (70% `.com`) |
|---|---|---|---|---|---|
| **A. 100% Starter** (10 / 0 / 0) - *Batas Bawah* | Rp4.500.000 | Rp2.069.100 | 46,0% | Rp2.706.240 | **60,1%** |
| **B. Dominan Starter** (7 / 2 / 1) | Rp5.850.000 | Rp3.419.100 | 58,4% | Rp4.056.240 | **69,3%** |
| **C. Moderat Seimbang** (5 / 3 / 2) | Rp6.900.000 | Rp4.469.100 | 64,8% | Rp5.106.240 | **74,0%** |
| **D. Dominan Business** (3 / 5 / 2) | Rp7.500.000 | Rp5.069.100 | 67,6% | Rp5.706.240 | **76,1%** |
| **E. Upsell Kuat** (2 / 4 / 4) | Rp8.700.000 | Rp6.269.100 | 72,1% | Rp6.906.240 | **79,4%** |

### D. Tiga Skenario Keuangan 12 Bulan (Setelah Penundaan AI Tools - Decision 014)

| Elemen Keuangan | Skenario Konservatif (Batas Bawah) | Skenario Dasar (Campuran Moderat C) | Skenario Optimis (Pertumbuhan Pasca-10 Klien) |
|---|---|---|---|
| **Volume Klien 12 Bulan** | 10 klien (hanya target 90 hari) | 15 klien (10 awal + 5 pasca-evaluasi) | 25 klien (arus pesanan stabil 2-3/bln) |
| **Asumsi Paket** | 10 Starter | 7 Starter, 5 Business, 3 Growth | 8 Starter (Rp610k), 12 Business, 5 Growth |
| **Total Pendapatan** | **Rp4.500.000** | **Rp10.500.000** | **Rp19.880.000** |
| Biaya Domain Klien (konservatif `.id`) | (Rp2.430.900) | (Rp3.646.350) | (Rp6.077.250) |
| Biaya Iklan Meta Ads | (Rp750.000) | (Rp1.500.000) | (Rp2.500.000) |
| **Biaya AI Tools (Bertahap - Decision 014)** | **(Rp2.700.000)** *(6 bln Rp100k + 6 bln Rp350k)* | **(Rp3.200.000)** *(4 bln Rp100k + 8 bln Rp350k)* | **(Rp4.200.000)** *(2 bln Rp100k + 10 bln Rp400k)* |
| Domain `enlesweb.com` | (Rp152.070) | (Rp152.070) | (Rp152.070) |
| **Arus Kas Bersih (Konservatif 100% `.id`)** | **-Rp1.532.970 (Defisit terpangkas Rp1,3jt)** | **+Rp2.001.580 (Surplus sehat)** | **+Rp6.950.680 (Menguntungkan)** |
| **Arus Kas Bersih (Jika 70% `.com` / 30% `.id`)** | **-Rp895.830 (Hampir impas)** | **+Rp2.957.290 (Surplus kuat)** | **+Rp8.543.530 (Sangat menguntungkan)** |

---

## 7. Model Pendapatan Perpanjangan Tahun ke-2 (Renewal Economics)
- [KEPUTUSAN] Pendapatan perpanjangan **tidak dimasukkan ke dalam arus kas tahun pertama** karena siklus jatuh tempo pertama baru terjadi pada bulan ke-12 s/d ke-15 (Oktober 2027 s/d Januari 2028).
- [KEPUTUSAN] **Penguat Retensi Tahun ke-2 (Decision 015):** Setiap klien yang memilih **Perpanjangan Terkelola** bersama ENLESWEB mendapatkan **reset kuota gratis putaran update konten ringan tahunan (Starter 2x, Business 4x, Growth 6x)** di samping perpanjangan domain, hosting, dan pemeliharaan script.

### A. Margin Unit Perpanjangan Terkelola
- Tarif tagihan ke klien: **Flat Rp400.000 / tahun** (`.com` atau `.id`).
- Biaya perpanjangan di registrar tahun ke-2 (Domainesia):
  - Ekstensi `.com`: Rp209.000 + PPN 11% = **Rp231.990 / tahun** $\to$ Margin bersih: **Rp168.010 (42,0%)**.
  - Ekstensi `.id`: Rp249.000 + PPN 11% = **Rp276.390 / tahun** $\to$ Margin bersih: **Rp123.610 (30,9%)**.
- Hosting tetap Rp0 (Cloudflare Workers/Pages) dan otomatisasi script tanpa biaya tambahan.

### B. Tabel Sensitivitas Retensi Perpanjangan (Basis 10 Klien Pertama)

| Tingkat Retensi [HIPOTESIS] | Klien Memperpanjang | Omzet Renewal | Biaya Registrar (asumsi campuran 50% .com / 50% .id) | Laba Bersih Renewal Kas |
|---|---|---|---|---|
| **0% (Semua pindah/berhenti)** | 0 | Rp0 | Rp0 | Rp0 |
| **30% (Retensi rendah)** | 3 | Rp1.200.000 | Rp762.570 | Rp437.430 |
| **50% (Retensi moderat)** | 5 | Rp2.000.000 | Rp1.270.950 | Rp729.050 |
| **70% (Retensi tinggi)** | 7 | Rp2.800.000 | Rp1.779.330 | Rp1.020.670 |

---

## 8. Batas Kapasitas Pendapatan & Proteksi Slot On-Hold 60 Hari
Model bisnis dibatasi oleh batas kapasitas operasional *solo founder*:
- [KEPUTUSAN] Maksimal **3 proyek aktif secara bersamaan** (Decision 009).
- [KEPUTUSAN] **Pembebasan Slot melalui Status On-Hold 60 Hari (Decision 017):** Jika klien belum melengkapi materi dasar dalam **7 hari kalender** sejak DP diterima, proyek dialihkan ke status **Tunda Sementara (*On-Hold* / Antrean Pasif)** sehingga slot kapasitas 3 proyek aktif pendiri langsung bebas untuk melayani klien lain (klien *On-Hold* memiliki waktu hingga 60 hari kalender sejak tanggal DP untuk melengkapi materi dan masuk kembali ke antrean slot yang tersedia). Kebijakan ini mencegah kemacetan kapasitas produksi dan arus kas akibat klien yang lambat menyiapkan bahan.
- [KEPUTUSAN] SLA pengerjaan: Starter 3 hari kerja, Business 7 hari kerja, Growth 14 hari kerja sejak DP dan materi lengkap.
- [ESTIMASI] Kapasitas output maksimum solo founder diperkirakan **4 – 6 proyek selesai per bulan** (jika mayoritas Starter/Business) atau **2 – 3 proyek per bulan** (jika mayoritas Growth/Custom), dengan plafon pendapatan bulanan tanpa sistem builder berkisar antara **Rp2.500.000 s/d Rp5.000.000 per bulan**.

---

## 9. Ambang Kelayakan Model & Pemicu Evaluasi
Untuk memastikan bisnis tidak berjalan berdasarkan ilusi atau pembakaran modal tanpa arah, ditetapkan ambang kelayakan berbasis data:

### A. Titik Evaluasi Pertama (Setelah 3 Proyek Pertama Selesai)
1. **Pencatatan Jam Kerja Nyata:** Menghitung realisasi metrik `Rp per jam kerja pendiri`. Pengerjaan paket Starter dipatok pada estimasi 5–12 jam kerja nyata. Jika pengerjaan aktual melebihi ambang batas > 15 jam kerja manual per klien, pengerjaan tersebut tidak sehat bagi solo founder dan memerlukan evaluasi alur kerja atau penyesuaian harga.
2. **Evaluasi Blended Gross Margin:**
   - [KEPUTUSAN] Ambang margin kotor gabungan (*blended*) seluruh proyek selesai ditetapkan minimal **60%** (setelah dikurangi biaya domain).
   - Starter dengan domain `.id` (margin 46%) ditoleransi sebagai subsidi akuisisi awal, diimbangi oleh *default framing* `.com` (margin 66,2%) dan prioritas akuisisi paket Business (`tuntas`) serta Growth (`Jerseay`).
   - Jika blended gross margin < 60%, evaluasi pembatasan promosi domain `.id` atau kenaikan harga Starter dipercepat.
3. **Realisasi Biaya Iklan (CAC):**
   - Ambang batas: CAC aktual tidak boleh melebihi **25% dari nilai paket**. Jika CAC Starter > Rp112.500, strategi akuisisi iklan berbayar wajib dirombak.

### B. Evaluasi Kenaikan AI Tools (Setelah 5 Klien Selesai dan Lunas - Decision 014)
- Membuka izin kenaikan anggaran langganan AI tools dari Rp100.000/bulan ke Rp300.000–Rp400.000/bulan (atau lebih cepat jika sedang menangani 2 proyek Growth/Custom secara simultan).

### C. Evaluasi Total Pasca-10 Klien
- Meninjau ulang harga paket Starter menuju acuan margin sehat (Rp610.000).
- Membuka gerbang pembangunan *Internal Generator* (`visi.md` bagian 5).

---

## 10. Kondisi Modal Awal
- [KEPUTUSAN] **Modal kerja siap pakai dialokasikan sekitar Rp1.000.000 – Rp1.500.000**.
- Alokasi peruntukan modal:
  1. Pembelian domain bisnis `enlesweb.com`: Rp152.070 (terealisasi / sudah dibeli per 17 Okt 2026, Decision 018).
  2. Anggaran tes awal iklan Meta Ads (Minggu 1): Rp100.000.
  3. Cadangan kelanjutan iklan: Rp400.000 (bagian dari plafon dasar Rp500.000 yang tersedia langsung).
  4. Langganan AI tools fase awal (dikunci Rp100.000/bulan sampai 5 klien lunas, Decision 014): Rp100.000 – Rp200.000.
  5. Dana talangan pendaftaran domain klien pertama (dieksekusi hanya setelah DP 50% masuk dan materi lengkap, Decision 017).
- [KEPUTUSAN] Jika diperlukan pembukaan plafon iklan lanjutan di atas Rp500.000 hingga Rp1.000.000 (setelah ada minimal 1 DP masuk sebagai validasi pasar), pendanaannya diperbolehkan bersumber dari **tambahan modal pemilik**, tidak wajib menunggu kas berputar murni dari pendapatan DP klien.

---

## 11. Asumsi dan Risiko Ekonomi Bisnis
| Asumsi Ekonomi | Bukti saat ini | Cara Validasi & Mitigasi |
|---|---|---|
| Biaya akuisisi (CAC) via Meta Ads berada di bawah ambang Rp100.000 per klien, dibantu Micro-Warm DM IG Rp0 | Belum teruji. Pixel & WhatsApp siap, iklan belum tayang | Uji coba Meta Ads Minggu 1 (Rp100.000) & Micro-Warm DM IG (2-3/hari). Evaluasi biaya per chat & rasio konversi chat-ke-DP |
| Default framing `.com` di SOP Template 5.2 mendorong >= 70% klien memilih `.com` sehingga blended margin > 60% | Perhitungan matematis unit (Tabel 6.C) | Pantau rasio pemilihan ekstensi domain (`.com` vs `.id`) pada 3-10 klien pertama |
| Kuota gratis update konten ringan tahunan (2x/4x/6x, maks 5-10 item/putaran) tidak menggerus jam kerja pendiri secara berlebihan | Belum ada klien nyata | Batasi ketat definisi 1 putaran di SOP v1.2 (dikirim sekaligus dalam 1 pesan WA, tanpa ubah layout) dan kenakan Rp50.000/putaran setelah kuota habis |
| Penundaan kenaikan AI tools (tetap Rp100rb/bln sampai 5 klien lunas) tidak menghambat kecepatan pengerjaan Starter/Business | 6 demo live berhasil dibangun dengan setup saat ini | Pantau durasi jam kerja aktual pada 5 klien pertama |
| Hosting Cloudflare Workers/Pages (*.enlesweb.com) tetap berada di tier gratis (Rp0) | FAKTA kuota gratis Cloudflare sangat besar untuk web statis; hosting Vercel telah dinonaktifkan (Decision 023) | Monitor penggunaan requests dan bandwidth mingguan di dashboard Cloudflare |

---

## 12. Yang Bukan Bagian Model Bisnis Saat Ini
- Mengandalkan aliran pendapatan langganan bulanan (*monthly retainers*) sebelum 10 klien selesai.
- Menaikkan biaya langganan AI tools ke Rp300.000–Rp400.000/bulan sebelum 5 klien selesai dan lunas (atau 2 proyek Growth/Custom simultan).
- Membeli tools scraping/outbound berbayar (Apollo.io dkk.) sebelum 10 klien selesai.
- Mengalokasikan gaji tunai tetap untuk pendiri sebelum bisnis menghasilkan arus kas positif yang stabil.
- Memasukkan proyeksi pendapatan perpanjangan tahun kedua atau tarif kelebihan kuota update Rp50.000 ke dalam target arus kas dasar 12 bulan pertama.
- Membuka penjualan lisensi Website Builder atau SaaS ke publik (fase 3 dan 4 di `visi.md` bersifat opsional).

---

## 13. Pertanyaan Terbuka
- [BELUM DIKETAHUI] Berapa rasio konversi aktual dari chat WhatsApp masuk menuju pembayaran DP riil pada pengujian iklan minggu pertama dan Micro-Warm Outreach DM IG? (Data murni empiris lapangan, tidak mengarang angka).
- [BELUM DIKETAHUI] Berapa persentase calon klien di lapangan yang memilih domain `.com` dibanding `.id` setelah diterapkannya *default framing* `.com` di SOP Template 5.2?
- [BELUM DIKETAHUI] Berapa jam kerja aktual presisi yang tercatat di register pengerjaan untuk menyelesaikan 1 klien paket Starter serta rata-rata waktu pengerjaan 1 putaran update konten ringan?

---

## 14. Riwayat Perubahan
| Tanggal | Versi | Perubahan | Sumber |
|---|---|---|---|
| 14 Oktober 2026 | 1.0 | Draf awal model bisnis komprehensif: unit economics, struktur biaya tunai vs jam kerja pendiri, kebijakan domain .com/.id bebas pilih (Decision 010), batas CAC maksimum dan implisit, resolusi ketegangan target Rp4,5jt sebagai batas bawah konservatif, matriks sensitivitas campuran paket, model perpanjangan tahun ke-2 terpisah, ambang kelayakan model (margin blended 60%, CAC 25%), dan batas kapasitas solo founder. | Wawancara grill-me pemilik, sinkronisasi strategi. |
| 14 Oktober 2026 | 1.1 | Pembaruan keputusan & parameter model: (1) Konfirmasi pembukaan sisa plafon iklan Rp500k-Rp1jt boleh menggunakan tambahan modal pemilik pasca-1 DP, (2) Penetapan estimasi jam kerja Starter pada 5–12 jam kerja nyata serta kalkulasi rate Rp/jam kerja pendiri, (3) Penegasan arahan strategis kepemilikan portofolio domain klien yang ingin porsi .com lebih besar guna menjaga blended gross margin > 60%, dan (4) Mempertahankan rasio konversi chat-ke-DP dan pilihan domain riil sebagai data empiris terbuka [BELUM DIKETAHUI]. | Arahan pemilik |
| 16 Oktober 2026 | 1.2 | Sinkronisasi Decision 013 - 017: (1) penundaan kenaikan biaya AI tools (tetap Rp100rb/bln sampai 5 klien lunas atau 2 Growth/Custom simultan) dan pembaruan tabel proyeksi 12 bulan (Konservatif Rp2,7jt, Dasar Rp3,2jt, Optimis Rp4,2jt), (2) operasionalisasi default framing `.com` di SOP Template 5.2 dan perbandingan sensitivitas 70% `.com`, (3) penambahan kuota gratis putaran update konten ringan tahunan (2x/4x/6x), tarif kelebihan kuota Rp50.000/putaran, dan reset kuota saat Perpanjangan Terkelola, serta (4) proteksi kas pembelian domain setelah DP + materi lengkap dan pembebasan slot kapasitas lewat status On-Hold 60 hari. | Sesi `/grill-me` 16 Okt 2026 |
| 17 Oktober 2026 | 1.3 | Pencatatan realisasi pengeluaran kas pembelian domain bisnis kanonikal enlesweb.com sebesar Rp152.070 (Decision 018). | Konfirmasi pembelian domain 17 Okt 2026 (Decision 018) |
| 18 Oktober 2026 | 1.4 | Penutupan seluruh tugas persiapan Minggu 0 (100% CLOSED): Template PDF Bukti Pemesanan selesai dibuat oleh pendiri bisnis (Decision 020), materi kreatif iklan Meta di campaign-1/ siap tayang (Decision 016/020), dan penyelarasan ke dokumen master V4. | Decision 020 & summary.md v1.8 |
| 18 Oktober 2026 | 1.5 | Pembatalan format iklan Carousel 4 slide dan penetapan 1 Video (Iklan A 15s) serta 1 Gambar Statis (Iklan B v3 Whole ENLESWEB) dalam rasio 4:5 Feed dan 9:16 Stories/Reels di `campaign-1/` sebagai materi resmi Meta Ads Minggu 1 (Decision 021). | Arahan pemilik & penyelesaian aset campaign-1/ (Decision 021) |
| 28 Oktober 2026 | 1.6 | Penyelarasan unifikasi hosting seluruh ekosistem (*.enlesweb.com) ke Cloudflare Workers, penonaktifan hosting Vercel (Decision 023), dan pemutakhiran acuan ke SOP v1.3. | Arahan pemilik, rilis Workers, Decision 023 |
| 29 Oktober 2026 | 1.7 | Sinkronisasi rujukan operasional SOP v1.4, Addendum Decision 023, dan konfirmasi stabilitas unit economics dengan kesiapan instrumen pra-DP layout-lab. | SOP v1.4, Addendum Decision 023 |


