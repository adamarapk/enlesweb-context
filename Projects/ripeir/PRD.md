# PRD.md - ripeir (Product Requirements Document)
Versi 2.0 (Starter Single-Page As-Is Synchronization)

---

## Changelog Versi 1.1 (As-Is Synchronization)
- **Visual Hero:** Disinkronkan ke implementasi aktual menggunakan latar workbench cutting mat realistis (`hero-deskmat-full.jpg`) dengan ambient overlay dan laptop terurai.
- **Floating WhatsApp Button:** Disinkronkan dari fixed bottom bar mobile menjadi tombol melayang (floating circular button) di sudut kanan bawah pada desktop (60px) dan mobile (54px) dengan warna resmi WhatsApp (`#25D366`), ikon SVG putih, dan tooltip desktop.
- **Elemen Footer:** Disinkronkan mencakup 4 tautan media sosial (Instagram, X, YouTube, GitHub), blok workshop berisi alamat nyata demo Venezia, jam buka, embed iframe peta interaktif Google Maps, serta tombol tautan Google Maps.
- **Animasi & Interaktivitas:** Disinkronkan penambahan transisi scroll reveal halus (`.animate-section` dengan `IntersectionObserver`) yang mendukung `prefers-reduced-motion: reduce`.
- **Palet Warna Desain:** Token warna disinkronkan ke implementasi CSS aktual (`#08100e`, `#101c18`, `#050a08`, `#1c2b26`, `#2c4038`, `#12221d`).
- **Status Data Konfigurasi:** Data demo workshop Venezia di `site.ts` didokumentasikan sebagai status aktif saat ini.

## Changelog Versi 1.2 (Panduan Pesan WhatsApp)
- Menambahkan panduan susun pesan WhatsApp di halaman Kontak sebagai pengecualian form yang disetujui.
- Menambah satu titik CTA menjadi 13. Pesan builder dirakit sementara di browser tanpa penyimpanan atau tracking.

## Changelog Versi 2.0 (Starter Single-Page As-Is Synchronization)
- **Perombakan Arsitektur Halaman:** Menurunkan website dari paket Growth multi-halaman menjadi paket Starter murni satu halaman scroll (`index.astro` dan fallback `404.astro`).
- **Pembersihan Halaman Lama:** Menghapus total rute multi-halaman `/layanan`, `/cara-kerja`, `/sebelum-servis`, `/tentang`, dan `/kontak`.
- **Pembersihan Seksi Sebelum Servis:** Menghapus total panduan persiapan sebelum servis dan catatan penanganan darurat cairan.
- **Penyederhanaan Layanan:** Mengganti seksi panjang per perangkat dan form builder pesan interaktif dengan grid 4 kartu perangkat (`ServicesGrid.astro` format 2x2 di desktop / 1 kolom di mobile) dengan daftar masalah umum dan tombol WhatsApp langsung per perangkat.
- **Pemadatan Cara Kerja:** Menyederhanakan alur kerja menjadi 4 langkah esensial (01. Cerita di WhatsApp, 02. Bawa atau kirim, 03. Cek dan estimasi biaya, 04. Pengerjaan dan selesai) tanpa tautan eksternal.
- **Footer Serba Ada & Target Anchor Kontak:** Menggabungkan informasi workshop, jam buka, alamat, embed Google Maps, navigasi internal, media sosial, dan kredit ringkas `"Website oleh ENLESWEB."` ke dalam Footer dengan atribut `id="kontak"`.
- **Navigasi Internal Anchor:** Navbar desktop dan mobile drawer dialihkan ke tautan anchor `#layanan`, `#cara-kerja`, dan `#kontak` dengan scroll halus dan penutupan drawer otomatis saat tautan diklik.
- **Titik Sentuh CTA WhatsApp:** Menyelaraskan jumlah titik sentuh CTA aktif dari 13 menjadi 10 lokasi aktual yang lolos uji verifikasi.

---

## 1.1 Konteks
ripeir adalah konsep website untuk bisnis servis laptop dan perangkat elektronik. ripeir dibuat oleh ENLESWEB sebagai proyek demo tingkat Starter. ripeir bukan klien nyata, bukan bisnis yang beroperasi, dan tidak boleh dipakai sebagai bukti sosial (live demo bukan client proof).

Fungsi ripeir bagi ENLESWEB: menunjukkan kemampuan menyusun dan membangun website landing page satu halaman (Starter) yang ringkas, berbobot, dan berkarakter kuat untuk bisnis jasa, tanpa kerumitan alur multi-halaman. ripeir tidak membuktikan hasil bisnis, jumlah klien, atau pengalaman komersial.

Prinsip penulisan: Concrete > Clever, Information > Marketing, Description > Slogan.

---

## 1.2 Tujuan Situs
Dua lapis tujuan:
1. **Sebagai demo:** calon customer ENLESWEB melihat landing page servis satu halaman yang padat, elegan, dan layak ditiru untuk bisnis paket Starter mereka.
2. **Di dalam dunia konsep:** pengunjung yang perangkatnya bermasalah memahami jenis servis yang ditangani, alur pengerjaan, dan lokasi workshop dalam satu scroll cepat, lalu menghubungi via WhatsApp.

**Urutan prioritas (LOCKED, diwarisi dari ENLESWEB):**
1. **Clarity:** pengunjung paham perangkat apa yang diservis dan bagaimana prosesnya secara langsung tanpa perlu berpindah halaman.
2. **Honesty:** tidak ada klaim yang tidak bisa dibuktikan. Situs tidak berpura-pura menjadi bisnis nyata.
3. **Trust:** rasa percaya dibangun lewat alur kerja yang transparan, prinsip kerja apa adanya, dan kejelasan data workshop nyata.
4. **Action:** jalur menghubungi lewat WhatsApp selalu terjangkau di setiap titik seksi dan melalui floating action bar.

---

## 1.3 Audiens
- **Pengunjung demo:** calon customer ENLESWEB, pemilik bisnis jasa atau UMKM. Menilai efektivitas paket Starter: kemudahan navigasi 1 halaman, estetika teknis yang matang, dan keringkasan konten.
- **Persona konsep:** pemilik laptop, komputer, handphone, atau tablet yang bermasalah. Usia beragam (20 sampai 50+), mayoritas non-teknis, mencari solusi cepat melalui smartphone.
- Bahasa sederhana, tidak menggurui, dan tidak teknis. Sapaan: `"kamu/-mu"` (LOCKED). Istilah teknis terbatas pada komponen populer (layar, baterai, keyboard, penyimpanan).

---

## 1.4 Ringkasan Bisnis Konsep
- **Nama:** `ripeir`, ditulis huruf kecil di semua tempat (LOCKED).
- **Jenis bisnis:** servis laptop dan perangkat elektronik (LOCKED).
- **Empat jenis perangkat:** laptop, komputer, handphone, tablet (LOCKED).
- **Alur layanan ringkas:** cerita di WhatsApp -> bawa/kirim -> cek dan estimasi biaya -> pengerjaan dan selesai.
- **Hal yang tidak ditampilkan di situs karena belum diputuskan (OPEN):** daftar harga spesifik, garansi tertulis, durasi menit/jam pasti, penjualan spare part.

---

## 1.5 Scope (IN)
Website statis murni satu halaman scroll (Starter) dengan rute sistem 404:

| No | Halaman | Path | Tujuan halaman |
|---|---|---|---|
| 1 | Beranda (Single Page) | `/` | Seluruh informasi servis, alur kerja, prinsip, kontak, dan peta dalam satu alur scroll |
| - | 404 Not Found | `/404` | Halaman sistem navigasi fallback jika URL tidak ditemukan |

### Alur Seksi Beranda (Atas ke Bawah):
1. **Navbar Sticky:** Identitas brand ripeir, tautan anchor (`#layanan`, `#cara-kerja`, `#kontak`), tombol CTA WhatsApp nav, dan drawer menu responsif di mobile.
2. **Hero:** Headline (h1), deskripsi singkat, tombol utama WhatsApp hero, tombol sekunder ghost menuju `#layanan`, dan visual workbench deskmat cutting mat realistis dengan laptop terurai.
3. **Layanan (`#layanan`):** Judul dan intro seksi, diikuti grid 4 kartu perangkat (Laptop, Komputer, Handphone, Tablet). Tiap kartu memuat nama perangkat, rangkuman, daftar kerusakan umum, dan tombol WhatsApp spesifik perangkat. Ditutup dengan catatan konsultasi perangkat lain.
4. **Cara Kerja (`#cara-kerja`):** Judul seksi dan alur pengerjaan padat 4 langkah (01–04) dengan nomor monospace beraksen oranye, judul langkah, dan deskripsi penjelasan ringkas. Dilengkapi tombol CTA WhatsApp alur kerja.
5. **Prinsip Kerja:** Tiga komitmen dasar servis (Dicek dulu, Kamu yang memutuskan, Apa adanya).
6. **Final CTA:** Banner ajakan bertindak sebelum footer dengan tombol WhatsApp penutup.
7. **Footer Serba Ada (`#kontak`):** Menggabungkan 3 kolom (Brand + kontak WA + medsos; Workshop + Jam operasional; Embed peta Google Maps interaktif + tombol Maps), navigasi cepat anchor, dan catatan kredit `"Website oleh ENLESWEB."`.
8. **Floating WhatsApp Button (`ActionBar`):** Tombol melayang circular hijau resmi WhatsApp di sudut kanan bawah dengan tooltip desktop dan target WhatsApp.

---

## 1.6 Di Luar Scope (OUT)
- Rute halaman terpisah (`/layanan`, `/cara-kerja`, `/sebelum-servis`, `/tentang`, `/kontak`).
- Panduan persiapan sebelum servis dan panduan penanganan cairan darurat.
- Formulir dinamis penyusun pesan WhatsApp (message builder).
- Fitur booking jadwal, booking kedatangan, atau sistem antrean.
- Formulir kontak input teks atau sistem upload foto kerusakan.
- Keranjang belanja, pembayaran online, atau e-commerce suku cadang.
- Fitur pelacakan status servis online.
- Blog, artikel tutorial, tips trik, atau halaman ulasan / testimoni buatan.
- Pelacakan analitik pihak ketiga atau pixel iklan.

---

## 1.7 Launch Cut (Perilaku Saat Data OPEN Kosong & Status Aktual)
Perilaku situs saat variabel konfigurasi di `src/config/site.ts` bernilai kosong atau nilai placeholder demo:

| Elemen | Status Default / Kosong | Perilaku Aktual Demo (As-Is) |
|---|---|---|
| Nomor WhatsApp | `whatsappNumber: '6200000000000'` | Tautan WhatsApp tetap berfungsi mengarah ke nomor placeholder internasional yang valid |
| Tautan ENLESWEB | `enleswebUrl: ''` | Kredit footer tampil sebagai teks biasa (bukan link tag `<a>`) |
| Alamat Workshop | `address: ''` | Jika kosong, seluruh blok alamat dan iframe peta disembunyikan secara bersih. Saat ini aktif terisi alamat demo Venezia |
| Embed Peta | Mengikuti ketersediaan `address` | Iframe Google Maps dirender dengan query alamat aman ter-encode |
| Tautan Google Maps | `mapsUrl: ''` | Tombol `[Buka di Google Maps]` disembunyikan jika kosong. Saat ini aktif terisi |
| Jam Buka | `openingHours: []` | Disembunyikan bila array kosong. Saat ini aktif terisi Senin-Jumat & Sabtu |
| Indexing Mesin Pencari | `indexable: false` | Meta robots dirender: `<meta name="robots" content="noindex, nofollow" />` |
| URL Kanonikal & OG Image | `siteUrl: ''`, file og kosong | Tag canonical, `og:url`, `og:image`, dan `twitter:card` dihilangkan sepenuhnya dari HTML |

---

## 1.8 Batasan Bisnis dan Konten (LOCKED)
1. **Larangan Testimoni:** Tidak ada testimoni, rating bintang, ulasan pelanggan, atau kutipan pengguna.
2. **Larangan Angka Fabrikasi:** Tidak ada angka statistik tanpa bukti seperti "1000+ perangkat diservis" atau "99% puas".
3. **Larangan Klaim Absolut & Buzzwords:** Bebas dari kata terlarang (anti-slop): *terbaik, profesional, berkualitas tinggi, terpercaya, cepat dan terpercaya, gratis, premium, presisi, elevate, seamless, crafted, powerful, modern, pasti bisa, data aman 100%, semua kerusakan teratasi, suku cadang original, teknisi bersertifikat, semua merek*.
4. **Larangan Em Dash:** Tidak boleh menggunakan karakter em dash (`—` atau `&mdash;` atau `\u2014`). Gunakan tanda hubung strip biasa `-` atau koma `,`.
5. **Penulisan Merek:** `ripeir` ditulis huruf kecil di semua tempat, tidak boleh berhuruf kapital (`Ripeir` atau `RIPEIR`).
6. **Format H1:** Tepat satu elemen `<h1>` per halaman HTML.
   - Halaman `/`: `Servis laptop, komputer, handphone, dan tablet.`
   - Halaman `/404`: `Halaman tidak ditemukan`

---

## 1.9 Perilaku Konversi & 10 Titik Sentuh WhatsApp
Setiap tombol CTA WhatsApp menggunakan skema `https://wa.me/{whatsappNumber}?text={encodeURIComponent(pesan)}`.

| No | Titik Sentuh (`data-cta-location`) | Topik Pesan | Format Pesan Default |
|---|---|---|---|
| 1 | `nav` | servis perangkat | `Halo ripeir, saya mau tanya tentang servis perangkat.` |
| 2 | `action_bar` | servis perangkat | `Halo ripeir, saya mau tanya tentang servis perangkat.` |
| 3 | `hero` | servis perangkat | `Halo ripeir, saya mau tanya tentang servis perangkat.` |
| 4 | `layanan_laptop` | servis laptop | `Halo ripeir, saya mau tanya tentang servis laptop.` |
| 5 | `layanan_komputer` | servis komputer | `Halo ripeir, saya mau tanya tentang servis komputer.` |
| 6 | `layanan_handphone` | servis handphone | `Halo ripeir, saya mau tanya tentang servis handphone.` |
| 7 | `layanan_tablet` | servis tablet | `Halo ripeir, saya mau tanya tentang servis tablet.` |
| 8 | `cara_kerja` | proses servis | `Halo ripeir, saya mau tanya tentang proses servis.` |
| 9 | `final_cta` | servis perangkat | `Halo ripeir, saya mau tanya tentang servis perangkat.` |
| 10 | `footer` | servis perangkat | `Halo ripeir, saya mau tanya tentang servis perangkat.` |

---

## 1.10 Kriteria Selesai (Definition of Done)
1. Seluruh konten servis disajikan tuntas dalam 1 halaman scroll di `/`.
2. Seluruh 10 titik CTA WhatsApp berfungsi dengan URL encoding yang valid.
3. Halaman responsif sempurna dari mobile (320px) hingga desktop besar (1440px+).
4. Tap target tombol dan interaksi minimal 44x44px.
5. Kontras teks memenuhi standar aksesibilitas antislop-human (> 7:1 untuk teks normal, > 4.5:1 untuk teks pendukung).
6. Script verifikasi otomatis `npm test` lulus 100% tanpa error (0 error).
7. `astro check` menghasilkan 0 error, 0 warning, 0 hint.
8. `astro build` menghasilkan 2 file halaman statis (`index.html` dan `404.html`).
