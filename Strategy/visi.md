# VISI ENLESWEB
**Versi:** 2.2
**Terakhir diperbarui:** 29 Oktober 2026
**Sumber:** `Start Here/summary.md` (sumber kebenaran v2.4), `Strategy/positioning.md`, `Strategy/model-bisnis.md`, `Delivery & Operations/sop.md` (aturan transaksi v1.4, Decision 022, Decision 023, & Addendum 29 Oktober 2026), `Business Memory/decision-log.md` (Decision 001 - 023 + Addendum).
**Label:** [FAKTA] terverifikasi, [KEPUTUSAN] dikunci pemilik, [ESTIMASI] perkiraan, [HIPOTESIS] belum terbukti, [BELUM DIKETAHUI] data belum tersedia (bukan nol).

## 1. Pernyataan Visi
[KEPUTUSAN] **"Build the website system once, then configure and compose it repeatedly."**

ENLESWEB berangkat dari jasa pembuatan website untuk UMKM dan bisnis kecil-menengah di seluruh Indonesia, lalu bergerak menuju sistem produksi internal berbasis blueprint JSON. Tujuannya agar tiap website baru dikonfigurasi dan dirakit dari sistem yang sudah dibangun, bukan dikerjakan dari nol.

## 2. Titik Awal (Kondisi per 29 Oktober 2026)
- [FAKTA] Solo founder dibantu AI assistant (langganan dikunci Rp100.000/bulan sampai 5 klien lunas atau 2 proyek Growth/Custom simultan, Decision 014). Belum ada tim internal.
- [KEPUTUSAN] Komunikasi promosi dan publik menggunakan persona "kami" dan "tim" layaknya studio/agensi (Decision 001), dipadukan dengan transparansi Nama Lengkap Pendiri sebagai Penanggung Jawab Resmi Studio ENLESWEB di dokumen PDF Bukti Pemesanan (Decision 017).
- [FAKTA] Launch-ready, siap go-live komersial. Domain kanonikal resmi `enlesweb.com` telah dibeli (Decision 018) dan dihubungkan ke Cloudflare Workers.
- [FAKTA] 6 website konsep live di Cloudflare Workers dengan subdomain kanonikal masing-masing: `jerseay.enlesweb.com`, `berflower.enlesweb.com`, `tuntas.enlesweb.com`, `dipotongin.enlesweb.com`, `ripeir.enlesweb.com`, `seruput.enlesweb.com`. Hosting Vercel dinonaktifkan per Decision 023.
- [FAKTA] Aset reusable: 6 template konsep, tooling render materi iklan `campaign-1/` (Iklan A video 15s dan Iklan B gambar statis v3 adaptif 4:5 dan 9:16), SOP chat WhatsApp (`sop.md` v1.4), template PDF Bukti Pemesanan ber-TTD digital (**CLOSED**, Decision 020), dan composer internal `layout-lab`.
- [FAKTA] layout-lab telah beroperasi di Cloudflare Workers pada subdomain kanonikal `preview.enlesweb.com`, memuat 43 varian dalam 13 kategori dengan Stateless Compact ID (`/p/<id>`), sistem token ganda (`--ew-*` studio Poppins vs `--wf-*` monokrom IBM Plex Sans), Scaled 1280px Virtual Artboard, chassis fisik iPhone 15 pada live iframe, 5 preset skenario klien, 46 assertion otomatis, dan rute studio internal terlindungi (`/studio-admin/*`) (Decision 023 & Addendum).
- [KEPUTUSAN 022, 023, & Addendum] ENLESWEB mengirimkan preview tata letak dari layout-lab (`preview.enlesweb.com/p/<id>`) kepada calon klien sebelum kesepakatan dan DP (SOP v1.4 Langkah 3b). Preview memakai data dummy dan hanya menggambarkan susunan layout.
- [FAKTA per 21 Oktober 2026] Belum ada DP atau proyek nyata. Satu percakapan pesan tercatat dari iklan setelah 12 jam tayang; isi dan status prospek belum diketahui. Belum ada pendapatan dari proyek.
- [FAKTA per 21 Oktober 2026] Meta Ads mulai tayang pukul 09.00. Belanja awal Rp16.000; sekitar 70% terserap iklan video. Micro-Warm Outreach belum dimulai.
- [KEPUTUSAN] Runway operasional awal: 30 hari (1 bulan) konsisten aktif menguji kampanye.
- [KEPUTUSAN] Kapasitas proyek paralel solo founder tanpa builder: 2 - 3 klien simultan (dengan mekanisme *On-Hold* 60 hari untuk membebaskan slot jika klien terlambat mengirim materi lewat dari 7 hari kalender, Decision 017).
- [KEPUTUSAN/FAKTA] Modal kerja siap pakai yang dialokasikan: sekitar Rp1.000.000 – Rp1.500.000 (mencakup domain bisnis `enlesweb.com` Rp152.070 yang telah terealisasi dibeli, iklan, AI tools, dan dana talangan).

## 3. Komitmen Visi
- [KEPUTUSAN] **Yang dikomitmenkan: Internal Production System**, yaitu sistem untuk mempercepat dan menstandarkan produksi website ENLESWEB sendiri.
- [KEPUTUSAN] **Productized System adalah fokus horizon jangka panjang utama bisnis.** Ambisi jangka panjang difokuskan untuk mencapai tahap *Productized System* terlebih dahulu.
- [KEPUTUSAN] **SaaS mandiri dideferensiasi dan ditunda.** SaaS bukan fokus aktif saat ini dan baru akan ditinjau jauh setelah Productized System berhasil dioperasikan secara matang dan stabil.

## 4. Roadmap Fase
Definisi di bawah diturunkan dari nama dan logika roadmap. Rincian teknis blueprint JSON ditunda ke dokumen builder terpisah.

| Fase | Sifat | Definisi singkat [HIPOTESIS] | Status |
|---|---|---|---|
| 1. Internal Generator | Komitmen Utama | Alat internal yang menghasilkan website dari konfigurasi (blueprint JSON) untuk mengurangi kerja manual per klien. | Belum dimulai (mulai dirancang setelah klien ke-10 go live) |
| 2. Internal Production System | Komitmen Utama | Alur produksi end-to-end ENLESWEB (brief, konfigurasi, preview, revisi, serah terima) yang berjalan di atas generator. | Belum dimulai |
| 3. Productized System | Fokus Horizon Jangka Panjang [KEPUTUSAN] | Jasa website berbasis sistem dengan paket dan proses terstandarisasi penuh, bukan agensi pengerjaan manual kustom. | Target arah jangka panjang |
| 4. SaaS Mandiri | Dideferensiasi / Ditunda [KEPUTUSAN] | Sistem dibuka sebagai produk mandiri yang dipakai pihak lain secara swalayan (*self-service*). | Ditunda (baru ditinjau pasca-Productized System stabil) |

## 5. Gerbang Perpindahan Fase
[KEPUTUSAN] Gerbang berbasis **bukti operasional**, bukan kalender atau angka omzet.

**Definisi "10 klien pertama" (dua definisi berbeda):**
- **Target 90 hari:** 10 klien yang **DP-nya sudah masuk**, dihitung dalam 90 hari setelah iklan Meta Ads tayang.
- **Gerbang perancangan blueprint JSON dan pembangunan Website Builder:** Persis **setelah klien ke-10 go live** (yaitu website tayang, serah terima tuntas, pelunasan 100% diterima, dan jam kerja tercatat di register).

| Gerbang | Syarat | Status |
|---|---|---|
| Sebelum fase 1 | Klien ke-10 go live (selesai, tayang, lunas), seluruh waktu pengerjaan aktual tercatat di register, dan pola komponen/alur kerja yang berulang terbukti nyata dari data 10 klien tersebut. | Belum terpenuhi |
| Fase 1 ke fase 2 | Generator internal terbukti memangkas waktu produksi minimal 50% pada proyek uji coba internal. | [BELUM DIKETAHUI] |
| Fase 2 ke fase 3 | Alur produksi internal stabil melayani pesanan rutin tanpa hambatan operasional (*Productized System* operasional). | [BELUM DIKETAHUI] |
| Fase 3 ke fase 4 | Ditinjau hanya jika *Productized System* sudah berjalan mapan dan ada kebutuhan komersial membuka platform ke pihak eksternal (SaaS mandiri). | Ditunda |

[HIPOTESIS] Pola pekerjaan klien akan cukup berulang untuk dijadikan blueprint. Belum ada klien yang bisa membuktikannya.

## 6. Gambaran Sukses 12 Bulan
[KEPUTUSAN] Target pendapatan 12 bulan ditetapkan sebesar **Rp4.500.000** (target konservatif berbasis 10 klien Starter pertama @ Rp450.000) dengan gambaran struktural:

1. 10 klien pertama tercapai (target 90 hari pertama), dari kombinasi tes Meta Ads, konten organik IG, dan eksperimen Micro-Warm Outreach manual via DM IG `@enlesweb` (2–3 usaha/hari, Rp0, Decision 013).
2. Waktu pengerjaan aktual terukur dan sesuai SLA 3/7/14 hari kerja (Starter/Business/Growth) dengan kapasitas 2 - 3 klien simultan.
3. Harga dievaluasi berdasarkan data riil 10 klien, bukan asumsi.
4. Website Builder internal fase 1 dan 2 mulai dirancang dan dibangun persis setelah klien ke-10 go live (selesai, tayang, dan lunas), setelah gerbang pada bagian 5 terpenuhi.
5. Kanal outbound berbayar (misalnya Apollo.io, ~Rp400-500rb/bln) baru dijajaki setelah 10 klien selesai, termasuk kajian UU PDP.

## 7. Prinsip yang Tidak Boleh Dilanggar
Batas tetap selama bisnis bertumbuh. Perubahan hanya lewat keputusan baru yang dicatat dengan tanggal dan alasannya.

1. **Tanpa bukti palsu:** tidak memakai testimoni, rating bintang, jumlah klien, atau urgensi palsu.
2. **Klaim hanya yang terbukti:** diferensiasi hanya dari artefak nyata (demo live berlabel tier paket), bukan janji.
3. **Harga transparan & purnajual jelas:** domain dan hosting 1 tahun serta kuota gratis update konten ringan tahunan (2x/4x/6x) termasuk di paket inti.
4. **Tanpa vendor lock-in:** di tahun pertama akun registrar dan nama domain dikelola atas nama ENLESWEB demi kemudahan proses; saat perpanjangan tahun kedua tiba, domain bisa ditransfer lewat EPP code dan arsip build statis bisa diminta klien jika tidak ingin renewal terkelola. Master source code dan generator ENLESWEB tetap tidak diserahkan.
5. **Kualitas teknis:** aksesibilitas WCAG AA dan situs statis yang cepat.
6. **Akuisisi berdisiplin (Tanpa Tools Scraping Berbayar & Tanpa Cold WA Spam):** tidak ada penggunaan tools scraping/outbound berbayar (seperti Apollo.io) sebelum 10 klien pertama selesai; eksperimen Micro-Warm Outreach dibatasi maksimal 2–3 pemilik usaha/hari secara manual dengan sapaan awal hanya via DM Instagram `@enlesweb` (Decision 013).
7. **Builder menunggu bukti:** tidak membangun Website Builder atau SaaS sebelum klien ke-10 go live.

Composer layout-lab (live di `preview.enlesweb.com`) dipakai untuk membantu prospek membayangkan susunan visual sebelum DP melalui tautan Stateless Compact ID (`preview.enlesweb.com/p/<id>`) pada SOP v1.4 Langkah 3b. Menerapkan prinsip wireframe monokrom murni (`ENERGY 1 / RHYTHM 2 / MOTION 1`) dengan tipografi IBM Plex Sans agar evaluasi murni fokus pada proporsi spasial, hierarki informasi, dan alur baca tanpa bias estetika warna atau dekorasi. Preview memakai data dummy dan bukan draf pengerjaan. Preview resmi setelah DP tetap memakai materi klien. Lab tidak menghasilkan website produksi atau blueprint JSON dan tidak memulai fase Website Builder. Gerbang Decision 011 tetap setelah klien ke-10 go live, selesai, tayang, dan lunas.

## 8. Asumsi dan Risiko Visi
| Asumsi | Bukti saat ini | Cara validasi |
|---|---|---|
| Ada permintaan nyata dari UMKM untuk website berpaket lewat iklan Meta / Micro-Warm DM IG dan WhatsApp | Tidak ada. Belum ada lead | Tes Meta Ads minggu pertama & Micro-Warm DM IG (prioritas #1 `tuntas`, #2 `Jerseay`, #3 `ripeir`), pantau minimal 2-3 chat WA iklan dan 1 klien berbayar |
| Pekerjaan antar klien cukup berulang untuk dijadikan blueprint | Tidak ada. 6 demo dibangun sendiri | Catat waktu dan jenis pekerjaan tiap klien di register |
| Solo founder dengan AI (Rp100rb/bln di awal) sanggup mengerjakan 10 klien sesuai SLA (kapasitas 2-3 paralel) | Tidak ada klien komersial; 6 demo dibangun sendiri | Catat waktu aktual klien pertama di register (patokan estimasi 5-12 jam untuk Starter) |
| Produk atau jasa berbasis sistem bisa melampaui model jasa (fase 3) | Tidak ada | [BELUM DIKETAHUI], ditentukan setelah fase 2 |

## 9. Yang Bukan Bagian Visi Saat Ini
- Membangun Website Builder atau menyusun spesifikasi teknis blueprint JSON sebelum klien ke-10 go live.
- Merancang atau mengembangkan produk SaaS mandiri pada tahap saat ini (fokus jangka panjang dikunci pada *Productized System* terlebih dahulu).
- Menggunakan tools scraping/outbound berbayar (Apollo.io dkk.) sebelum 10 klien selesai.
- Menaikkan langganan AI tools di atas Rp100.000/bulan sebelum 5 klien selesai dan lunas (atau 2 proyek Growth/Custom simultan).
- Mempromosikan paket Custom secara aktif.
- Menambah fitur di paket Starter dan Business.
- Melayani segmen non-target (korporat tender, garansi ranking SEO/omzet, klien luar negeri).
- Menetapkan rincian teknis pembukaan SaaS sebelum Productized System terbukti dan stabil.

## 10. Pertanyaan Terbuka
- [BELUM DIKETAHUI] Pola komponen website dan konfigurasi tata letak apa yang paling sering berulang dari realisasi 10 klien pertama untuk dijadikan skema blueprint JSON pertama? (Menunggu data register 10 klien selesai).
- [BELUM DIKETAHUI] Berapa penghematan jam kerja riil yang dihasilkan oleh Website Builder internal fase 1 dibanding durasi awal 5–12 jam pengerjaan manual per Starter? (Divalidasi saat Fase 1 rampung).

## 11. Riwayat Perubahan
| Tanggal | Perubahan | Sumber |
|---|---|---|
| 14 Oktober 2026 | Draf v1.0 dibuat | `summary.md` dan wawancara grill-me |
| 14 Oktober 2026 | Versi 1.1: Sinkronisasi target pendapatan 12 bulan (Rp4,5jt), runway 30 hari, kapasitas 2-3 klien simultan, persona "kami/tim" (Decision 001), dan implementasi prinsip tanpa vendor lock-in dengan registrasi domain tahun pertama atas nama EnlesWeb + transfer EPP saat renewal (Decision 002). | Arahan pemilik |
| 14 Oktober 2026 | Versi 1.2: Modal kerja siap pakai dikonfirmasi (Rp1-1,5jt) dan sinkronisasi dengan `model-bisnis.md`. | Wawancara grill-me |
| 14 Oktober 2026 | Versi 1.3: (1) Penegasan jadwal perancangan spesifikasi blueprint JSON internal dimulai persis setelah klien ke-10 go live (selesai, tayang, lunas), (2) Penguncian ambisi sistem jangka panjang pada Productized System terlebih dahulu, dan menunda/mendiferensiasi SaaS mandiri hingga Productized System terbukti matang. | Arahan pemilik |
| 16 Oktober 2026 | Versi 1.4: Sinkronisasi Decision 013 - 017: pembukaan Micro-Warm Outreach manual Rp0 via DM IG (2-3/hari) dengan tetap melarang tools scraping berbayar sebelum 10 klien selesai, penundaan kenaikan biaya AI tools hingga 5 klien lunas, kuota gratis update konten ringan tahunan (2x/4x/6x), aturan On-Hold 60 hari, dan status SOP WhatsApp `sop.md` v1.2 CLOSED. | Sesi `/grill-me` 16 Okt 2026 |
| 17 Oktober 2026 | Versi 1.5: Sinkronisasi pembelian domain kanonikal resmi `enlesweb.com` (Decision 018) dan pembaruan kesiapan peluncuran produksi pada Cloudflare Workers. | Konfirmasi pembelian domain 17 Okt 2026 (Decision 018) |
| 18 Oktober 2026 | Versi 1.6: Sinkronisasi penyelesaian template PDF Bukti Pemesanan oleh pendiri bisnis (Decision 020), kesiapan materi iklan Meta di campaign-1/, penutupan seluruh tugas Minggu 0, dan transisi ke dokumen master V4. | Konfirmasi pembuatan PDF oleh pemilik 18 Okt 2026 (Decision 020) |
| 18 Oktober 2026 | Versi 1.7: Pembatalan format iklan Carousel 4 slide dan penetapan 1 Video (Iklan A 15s) serta 1 Gambar Statis (Iklan B v3 Whole ENLESWEB) dalam rasio 4:5 Feed dan 9:16 Stories/Reels di `campaign-1/` sebagai materi resmi Meta Ads Minggu 1 (Decision 021). | Arahan pemilik & penyelesaian aset campaign-1/ (Decision 021) |
| 21 Oktober 2026 | Versi 1.8: Pencatatan layout-lab sebagai composer internal berbasis data dummy, pembedaan dari Website Builder berbasis blueprint JSON, dan penegasan gerbang Decision 011. Deployment publik dan penggunaan klien belum terkonfirmasi. | `layout-lab/README.md` dan `layout-lab/NOTES.md` |
| 21 Oktober 2026 | Versi 1.9: Decision 022 menetapkan pengiriman preview layout data dummy sebelum kesepakatan dan DP setelah deployment publik serta URL terverifikasi. | `Business Memory/decision-log.md` Decision 022 dan `Delivery & Operations/sop.md` |
| 21 Oktober 2026 | Versi 2.0: Pencatatan checkpoint 12 jam pertama Meta Ads, tanpa mengubah gerbang Website Builder atau keputusan jangka panjang. | Laporan pemilik, `Business Memory/weekly-review.md` |
| 28 Oktober 2026 | Versi 2.1: Unifikasi hosting 6 demo portofolio (*.enlesweb.com) dan layout-lab (preview.enlesweb.com) ke Cloudflare Workers, penonaktifan Vercel (Decision 023), serta pengaktifan penuh SOP v1.3 pra-DP berbasis Stateless Compact ID (/p/<id>) (Decision 022 CLOSED). | Arahan pemilik, rilis Workers, Decision 023 |
| 29 Oktober 2026 | Versi 2.2: Penegasan prinsip wireframe monokrom ENERGY 1 / RHYTHM 2 / MOTION 1 bebas bias estetika, pemutakhiran kapabilitas layout-lab (5 preset klien, chassis iPhone 15 pada live iframe, virtual artboard 1280px), dan SOP v1.4. | Addendum Decision 023, SOP v1.4, DESIGN.md |


