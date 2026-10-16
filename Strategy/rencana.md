# RENCANA EKSEKUSI 90 HARI ENLESWEB
**Versi:** 1.3  
**Terakhir diperbarui:** 16 Oktober 2026  
**Sumber:** `Start Here/summary.md` (sumber kebenaran v1.6), `Strategy/visi.md`, `Strategy/positioning.md`, `Strategy/model-bisnis.md`, `Delivery & Operations/sop.md` (v1.2 CLOSED), `Business Memory/decision-log.md` (Decision 001 - 017), dan sesi `/grill-me` 16 Oktober 2026.  
**Label:** [FAKTA] terverifikasi, [KEPUTUSAN] dikunci pemilik, [ESTIMASI] perkiraan, [HIPOTESIS] belum terbukti, [BELUM DIKETAHUI] data belum tersedia (bukan nol).

## 1. Tujuan dan Cakupan
- [KEPUTUSAN] Dokumen ini adalah **rencana eksekusi 90 hari** menuju 10 klien pertama (DP masuk). Horizon 12 bulan dan gerbang fase builder hanya dirujuk ke `visi.md`, tidak diulang di sini.
- [KEPUTUSAN] Jam 90 hari dihitung sejak **iklan Meta Ads tayang** (target tayang: **21 Oktober 2026**). Tanggal di bawah adalah patokan, bukan janji.
- Aturan penulisan: angka harga, paket, dan SLA dirujuk dari `summary.md`. Dokumen ini hanya memuat urutan kerja, aturan keputusan, dan batas.

## 2. Ringkasan Garis Waktu
| Tahap | Patokan tanggal | Hasil yang harus ada |
|---|---|---|
| Minggu 0: Persiapan (Sisa 3 Tugas Murni) | 14 - 20 Okt 2026 | (1) Domain `enlesweb.com` aktif, (2) Materi iklan Carousel 4 slide siap, (3) Draf template PDF Bukti Pemesanan terkunci *(SOP WhatsApp telah CLOSED di `sop.md` v1.2)* |
| Minggu 1: Tes Meta Ads Rp100.000 + Micro-Warm DM IG | 21 - 27 Okt 2026 | Data iklan 7 hari (terpisah dari data Micro-Warm DM IG), lalu kampanye iklan dijeda untuk evaluasi |
| Keputusan akhir minggu 1 | 28 Okt 2026 | Jalur A, B, atau C (bagian 5) |
| Checkpoint hari ke-30 | sekitar 19 Nov 2026 | Hard stop jika 0 DP (bagian 6) |
| Checkpoint hari ke-60 | sekitar 19 Des 2026 | Review asumsi inti jika DP kurang dari 3 |
| Evaluasi hari ke-90 | sekitar 18 Jan 2027 | Hitung DP final vs target 10 |

## 3. Minggu 0: Persiapan (14 - 20 Oktober 2026)
[KEPUTUSAN] Karena SOP operasional WhatsApp telah resmi **CLOSED** (`Delivery & Operations/sop.md` v1.2, Decision 017), Minggu 0 menyisakan **3 tugas eksekusi murni** (domain, materi iklan Carousel, dan draf PDF Bukti Pemesanan) ditambah pengiriman kampanye ke review Meta:

| Hari | Pekerjaan | Selesai jika |
|---|---|---|
| 1-2 (14-16 Okt) | **Tugas 1:** Beli `enlesweb.com`, hubungkan ke Cloudflare Workers menggantikan `workers.dev`. Uji ulang WhatsApp link, Meta Pixel (`ViewContent`, `AddToCart`), OG image, sitemap di domain baru. | Homepage terbuka di `enlesweb.com`, event Pixel terbaca |
| 2-4 (16-17 Okt) | **Tugas 2:** Buat materi iklan memakai `carousel-generator/`. **Carousel 4 slide** dengan *problem-aware hook* ("mengapa IG/WA saja tidak cukup") di pembuka dan label tier/harga eksplisit: Slide 1 `tuntas: Paket Business Rp750.000`, Slide 2 `Jerseay: Paket Growth Rp1.200.000`, Slide 3 `ripeir: Paket Starter Rp450.000`, Slide 4 Ringkasan Paket & CTA WA (Decision 013 & 016). | Carousel 4 slide final, berlabel tier & harga, bebas em dash, tanpa testimoni/klaim hasil/urgensi palsu |
| 5 (18 Okt) | **Tugas 3:** Kunci alat PDF dan TTD digital (bagian 4). Susun draf template Bukti Pemesanan yang mencantumkan **Nama Lengkap Pendiri** (sesuai rekening bank pribadi) sebagai **Penanggung Jawab Resmi Studio ENLESWEB**, kuota update ringan tahunan (2x/4x/6x), dan aturan *On-Hold* 60 hari (Decision 015 & 017). | Template PDF terisi contoh lengkap dengan Nama Lengkap Pendiri dan terbaca rapi |
| 6 (19 Okt) | *(SOP chat WhatsApp telah CLOSED di `sop.md` v1.2).* Siapkan kampanye di Meta Ads Manager (caption diawali *problem-aware hook*) dan kirim ke review. | Iklan berstatus menunggu/disetujui |
| 7 (20 Okt) | Pemeriksaan akhir: link, pixel, jam balas chat, draf PDF siap dikirim, dan daftar akun target awal Micro-Warm DM IG siap. | Daftar periksa tanpa temuan terbuka |

- [KEPUTUSAN] PDF Bukti Pemesanan **tidak harus** selesai sebelum iklan tayang, tetapi **wajib siap sebelum DP pertama diminta**.
- [HIPOTESIS] Review iklan Meta bisa memakan waktu hingga 1 hari atau lebih. Hari 6 sengaja memberi jeda sebelum tayang.

## 4. Dokumen Transaksi: Alat PDF, TTD Digital, & Transparansi Penanggung Jawab
- [KEPUTUSAN] Template Bukti Pemesanan dibuat sekali (Google Docs atau Canva), diisi per klien, diekspor ke PDF.
- [KEPUTUSAN] **Transparansi Identitas Rekening Pribadi (Decision 017):** Dokumen PDF Bukti Pemesanan wajib mencantumkan **Nama Lengkap Pendiri** (sama persis dengan nama yang tertera di rekening bank pribadi penerima) sebagai **Penanggung Jawab Resmi Studio ENLESWEB** di bagian informasi pembayaran dan blok tanda tangan.
- [KEPUTUSAN] TTD digital memakai tanda tangan gambar/stempel pendiri atau fitur gratis (misalnya Adobe Acrobat online atau e-signature Google Docs). **Tanpa layanan berbayar** (Rp0, Decision 007).
- Target operasional: [ESTIMASI] kurang dari 10 menit per klien.
- [HIPOTESIS] Dokumen Bukti Pemesanan formal PDF bertanda tangan digital dengan Nama Lengkap Pendiri meningkatkan kepercayaan transaksi rekening pribadi, dengan target konversi pengiriman PDF menuju pembayaran DP nyata dipatok sebesar **80%** (`Strategy/positioning.md`). Catat respons calon klien dan pembayaran DP di register mingguan.

## 5. Minggu 1: Tes Meta Ads, Micro-Warm Outreach, dan Aturan Keputusan
- [KEPUTUSAN] Anggaran tes iklan: **Rp100.000 selama 7 hari**, satu kampanye Carousel 4 slide (urutan: #1 `tuntas` Business Rp750rb, #2 `Jerseay` Growth Rp1,2jt, #3 `ripeir` Starter Rp450rb, #4 Ringkasan & CTA WA) dengan kalimat pembuka *problem-aware hook*. Setelah 7 hari kampanye **dijeda**.
- [KEPUTUSAN] Ambang sinyal iklan: minimal **2-3 chat WA dari iklan** yang menanyakan paket atau kebutuhan website (Decision 006). Target akhir: minimal **1 klien berbayar (DP masuk)**.
- [KEPUTUSAN] Prospek dari **Micro-Warm Outreach DM IG manual** (2-3 usaha/hari, Decision 013) dicatat secara terpisah agar evaluasi performa iklan Rp100.000 pada tabel di bawah tetap murni dan tidak bias.
- [KEPUTUSAN] Niche atau demo yang paling banyak diklik dan ditanyakan menjadi sinyal fokus iklan berikutnya.

**Aturan keputusan pada hari ke-7 (28 Okt 2026):**
| Jalur | Kondisi (Metrik Iklan Meta Ads) | Tindakan |
|---|---|---|
| A | Minimal 2-3 chat **dan** minimal 1 DP | Iklan lanjut. Budget naik bertahap dalam plafon (bagian 7). |
| B | Minimal 2-3 chat tetapi 0 DP | Iklan dijeda. Bedah percakapan (alasan ragu: harga, kepercayaan, perlu-tidaknya website). Perbaiki SOP/penawaran sebelum iklan lagi. |
| C | Kurang dari 2 chat | Iklan dijeda. Ganti **satu** variabel (kreatif, niche, atau audiens), ulangi tes Rp100.000 satu kali. |

- [KEPUTUSAN] Besaran budget lanjutan pada jalur A diputuskan pemilik saat evaluasi, tidak dikunci sekarang.
- Jalur B dan C tetap tunduk pada hard stop hari ke-30.

## 6. Checkpoint 30, 60, 90 Hari
Dihitung sejak iklan tayang.

| Titik | Aturan |
|---|---|
| Hari ke-30 | [KEPUTUSAN] **Hard stop:** jika **0 DP**, seluruh iklan berhenti total dan bisnis masuk **mode jeda mutlak**. Tidak ada pengeluaran iklan tambahan tanpa validasi pasar. Homepage dan 6 demo tetap aktif tanpa biaya (tier gratis). Checkpoint hari ke-60 dan ke-90 tidak berlaku. |
| Hari ke-60 | [KEPUTUSAN] Jika DP **kurang dari 3**, review asumsi inti (apakah model Meta Ads + WhatsApp cocok) sebelum membelanjakan sisa plafon. |
| Hari ke-90 | [KEPUTUSAN] Hitung DP final vs target 10. Hasil menentukan apakah harga dievaluasi dan apakah gerbang `visi.md` bagian 5 mendekat. |

- [KEPUTUSAN] "Runway 30 hari" di `summary.md` dibaca sebagai jendela uji pertama sampai hard stop, bukan batas hidup bisnis.
- [KEPUTUSAN] **Aturan Mode Jeda (Hard Stop Hari ke-30):** Jika hari ke-30 tercapai dengan 0 DP, penegasan aturan adalah *hard stop total*: seluruh anggaran iklan dihentikan seketika untuk mencegah pembakaran modal (*no cash burn*). Mode jeda berlangsung hingga pemilik mengevaluasi ulang secara mendasar pesan penawaran, format iklan, atau merancang strategi permodalan baru. Selama mode jeda, aset digital (homepage `enlesweb.com` dan 6 situs demo) dibiarkan tetap *live* di Cloudflare & Vercel karena berbiaya operasional Rp0.

## 7. Anggaran Iklan & Penundaan Biaya AI Tools
- [KEPUTUSAN] Anggaran iklan 90 hari: **Rp500.000 sampai Rp1.000.000**, **di luar** AI tools dan biaya domain (ditanggung terpisah).
- [KEPUTUSAN] Rp100.000 pertama adalah tes minggu 1 (termasuk dalam plafon dasar).
- [KEPUTUSAN] **Mekanisme Pembukaan Plafon Iklan:**
  - Tahap 1: **Rp500.000 dialokasikan dan tersedia langsung** dari modal kerja awal (Rp100.000 tes minggu pertama + Rp400.000 cadangan kelanjutan).
  - Tahap 2: Pengeluaran sisa plafon di atas **Rp500.000 hingga Rp1.000.000 baru dibuka setelah minimal 1 DP masuk** (bukti validasi transaksi pasar).
  - [KEPUTUSAN] Pendanaan pembukaan tahap 2 **diperbolehkan menggunakan tambahan modal pemilik**, tidak wajib menunggu kas berputar murni dari pendapatan DP klien (`Strategy/model-bisnis.md`).
- [KEPUTUSAN] **Penundaan Kenaikan Biaya AI Tools (Decision 014):** Langganan AI tools dikunci tetap **Rp100.000/bulan** dan baru boleh dinaikkan ke Rp300.000–Rp400.000/bulan setelah **minimal 5 klien selesai dan lunas (100%) ATAU saat menangani 2 proyek Growth/Custom secara simultan**.

## 8. Kapasitas, Antrean, dan Status On-Hold 60 Hari
- [KEPUTUSAN] Batas **3 proyek aktif** (DP masuk, materi sedang/sudah dikerjakan, belum lunas).
- [KEPUTUSAN] **Aturan On-Hold 60 Hari Pembebas Slot Kapasitas (Decision 017):** Jika klien yang sudah membayar DP belum melengkapi materi dasar dalam **7 hari kalender**, proyek dialihkan ke status **Tunda Sementara (*On-Hold* / Antrean Pasif)** sehingga slot kapasitas 3 proyek aktif pendiri langsung bebas untuk menerima klien baru. Klien *On-Hold* memiliki waktu maksimal **60 hari kalender sejak tanggal DP** untuk mengirimkan materi lengkap dan mengaktifkan kembali pengerjaan (mengikuti antrean slot yang tersedia saat materi masuk).
- [KEPUTUSAN] Calon klien ke-4 dan seterusnya (saat 3 proyek benar-benar aktif berjalan): **ditolak sopan atau diminta menunggu tanpa DP** sampai slot kosong. Tidak ada DP untuk antrean.
- [KEPUTUSAN] Iklan dijeda jika calon klien yang menunggu lebih dari 2 orang.
- Konsekuensi: [ESTIMASI] urutan DP, status aktif vs *On-Hold*, dan penyelesaian harus dicatat di register klien.

## 9. Kanal Akuisisi: Meta Ads, Organik IG, & Micro-Warm Outreach Manual
- [KEPUTUSAN] Tiga kanal akuisisi yang diizinkan selama fase 10 klien pertama (Decision 008 & Decision 013):
  1. **Meta Ads (Kanal Utama Berbayar):** Carousel 4 slide berlabel tier & harga dengan *problem-aware hook*.
  2. **Konten Organik Instagram `@enlesweb` (Kanal Kedua Gratis - Decision 008):**
     - Hanya memakai ulang aset yang ada (carousel demo dari `carousel-generator/`).
     - Maksimal 2-3 post per minggu, dibatch sekali seminggu, maksimal sekitar 2 jam.
     - Prioritas: chat WA, lalu pengerjaan klien, lalu konten.
     - Jika proyek aktif sudah 3, konten organik dijeda otomatis.
  3. **Eksperimen Micro-Warm Outreach Manual (Kanal Ketiga Gratis Rp0 - Decision 013):**
     - Menyapa maksimal **2 sampai 3 pemilik usaha per hari** secara manual dengan *problem-aware hook* sesuai urutan prioritas demo: #1 Bimbel (`tuntas`, Business Rp750rb), #2 Studio Jersey (`Jerseay`, Growth Rp1,2jt), #3 Servis Laptop/HP (`ripeir`, Starter Rp450rb).
     - **Guardrail Keamanan & Kapasitas:** Sapaan awal wajib dilakukan **hanya lewat DM Instagram `@enlesweb`** (dengan pemanasan *like/reply story* terlebih dahulu, baru pindah ke WA jika direspons) agar nomor WA utama bebas risiko blokir; dicatat terpisah dari metrik Meta Ads Minggu 1; dan dijeda otomatis jika slot 3 proyek aktif penuh.
- [KEPUTUSAN] **Larangan Tools Outbound Berbayar:** Penggunaan tools scraping/outbound berbayar (seperti Apollo.io dkk.) tetap dilarang mutlak sebelum 10 klien pertama selesai.

## 10. Pencatatan dan Ritme Mingguan
[KEPUTUSAN] Setiap Minggu malam, catat:
1. Pengeluaran iklan, klik link, chat WA masuk dari iklan vs dari Micro-Warm DM IG, biaya per chat iklan.
2. Chat yang menanyakan paket/DP, DP masuk, pilihan domain (`.com` vs `.id`), serta niche dan demo yang disebut.
3. Alasan ragu atau tolak yang tertulis di chat.
4. Waktu aktual pengerjaan per klien (jam dan hari) serta pemakaian kuota revisi/update di register.

- Lokasi: `Business Memory/weekly-review.md` (isi mingguan) dan `Business Memory/kpi.md` (angka kumulatif). `rencana.md` hanya merujuk, tidak menyalin angka.
- Data poin 4 menjadi bukti gerbang `visi.md` bagian 5.

## 11. Asumsi dan Risiko
| Asumsi / Risiko | Bukti saat ini | Cara validasi |
|---|---|---|
| Rp100.000 selama 7 hari cukup menghasilkan 2-3 chat iklan | Belum teruji | Data minggu 1 (terpisah dari DM manual) |
| Micro-Warm Outreach DM IG 2-3 usaha/hari menghasilkan respons dan tambahan chat tanpa biaya | Belum teruji | Catat jumlah DM dikirim, balasan IG, dan konversi ke WA setiap minggu |
| Hard stop hari ke-30 cukup waktu untuk 1 DP | Belum teruji | Pantau jalur A/B/C dan hari ke-30 |
| Carousel 4 slide (`tuntas`, `Jerseay`, `ripeir`) dengan problem-aware hook menarik klik relevan | Belum teruji | Niche/demo yang disebut di chat |
| Alat TTD gratis dan format Bukti Pemesanan PDF dengan Nama Lengkap Pendiri meyakinkan klien (target konversi ke DP: 80%) | Asumsi tata kelola; [HIPOTESIS] target konversi 80% | Respons klien terhadap PDF dan catatan transfer DP nyata di register mingguan |
| Review iklan atau akun iklan baru bisa menunda tayang | [BELUM DIKETAHUI] | Cek status di hari ke-6 Minggu 0 |

## 12. Yang Bukan Bagian Rencana Ini
- Membangun Website Builder atau SaaS, dan menyusun spesifikasi blueprint JSON.
- Membeli tools scraping/outbound berbayar (Apollo.io dkk.) atau melakukan *cold spam* ke nomor WhatsApp.
- Menaikkan langganan AI tools di atas Rp100.000/bulan sebelum 5 klien selesai dan lunas (atau 2 Growth/Custom simultan).
- Mempromosikan paket Custom secara aktif.
- Menambah fitur di paket Starter dan Business.
- Menaikkan harga sebelum data 10 klien.
- Menetapkan angka budget lanjutan sebelum evaluasi minggu 1.

## 13. Pertanyaan Terbuka
- [BELUM DIKETAHUI] Berapa rasio konversi aktual dari chat WhatsApp masuk menuju pembayaran DP riil pada tes iklan minggu pertama dan Micro-Warm Outreach DM IG? (Data empiris lapangan).
- [BELUM DIKETAHUI] Berapa proporsi riil pilihan domain (`.com` vs `.id`) yang terealisasi setelah penerapan kalimat rekomendasi standar `.com` di SOP Template 5.2?
- [BELUM DIKETAHUI] Akun iklan dan materi iklan baru Meta Ads apakah lolos review tanpa penundaan di hari ke-6?

## 14. Riwayat Perubahan
| Tanggal | Perubahan | Sumber |
|---|---|---|
| 14 Oktober 2026 | Draf v1.0 dibuat: rencana 90 hari, aturan keputusan minggu 1, hard stop hari ke-30, plafon iklan, batas 3 proyek aktif, alat TTD gratis, IG organik terbatas. | Wawancara grill-me |
| 14 Oktober 2026 | Versi 1.1: Sinkronisasi modal siap pakai terkonfirmasi (Rp1-1,5jt) dan integrasi dengan `Strategy/model-bisnis.md` serta Decision 010. | Arahan pemilik |
| 14 Oktober 2026 | Versi 1.2: Konfirmasi keputusan mekanisme plafon iklan, penegasan aturan mode jeda hard stop mutlak 30 hari 0 DP, arahan preferensi domain lebih besar `.com`, dan sinkronisasi hipotesis target konversi Bukti Pemesanan PDF ke DP sebesar 80%. | Arahan pemilik |
| 16 Oktober 2026 | Versi 1.3: Sinkronisasi Decision 013 - 017: (1) pembukaan Micro-Warm Outreach manual Rp0 via DM IG (2-3/hari, tercatat terpisah dari metrik iklan, jeda saat 3 slot penuh) & urutan prioritas 3 demo (`tuntas`, `Jerseay`, `ripeir`), (2) penundaan kenaikan biaya AI tools hingga 5 klien lunas atau 2 Growth/Custom simultan, (3) aturan On-Hold 60 hari setelah 7 hari tanpa materi agar slot kapasitas 3 proyek aktif bebas, (4) pencantuman Nama Lengkap Pendiri di PDF Bukti Pemesanan, serta (5) penguncian status SOP WhatsApp menjadi CLOSED (`sop.md` v1.2) sehingga menyisakan 3 tugas eksekusi murni di Minggu 0. | Sesi `/grill-me` 16 Okt 2026 |

