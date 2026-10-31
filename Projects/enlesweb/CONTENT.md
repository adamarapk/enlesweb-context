# CONTENT.md - ENLESWEB Homepage

Versi 1.2 (As-Is Website Copy Specification - 14 Oktober 2026)

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
- Open Graph image: OPEN (lihat SPEC.md bagian 9)

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
- URL Demo: `https://jerseay.enlesweb.com/`
- Tombol: `[Lihat Website]` (aktif dengan link demo, atau fallback `[Segera]` jika URL dikosongkan)

### 5.2 dipotongin
- Nama: `dipotongin`
- Tingkat paket: `Growth`
- Label konsep: `Konsep buatan kami sendiri. Contoh tingkat Growth.`
- Jenis bisnis: `Studio barbershop`
- Deskripsi: `Konsep website barbershop dengan daftar layanan, kartu member loyalitas, jam operasional, dan lokasi.`
- URL Demo: `https://dipotongin.enlesweb.com/`
- Tombol: `[Lihat Website]` (aktif dengan link demo, atau fallback `[Segera]` jika URL dikosongkan)

### 5.3 tuntas
- Nama: `tuntas`
- Tingkat paket: `Business`
- Label konsep: `Konsep buatan kami sendiri. Contoh tingkat Business.`
- Jenis bisnis: `Bimbel kelompok kecil dan privat`
- Deskripsi: `Konsep website bimbel kelompok kecil dan les privat untuk SD, SMP, dan SMA.`
- URL Demo: `https://tuntas.enlesweb.com/`
- Tombol: `[Lihat Website]` (aktif dengan link demo, atau fallback `[Segera]` jika URL dikosongkan)

### 5.4 Seruput Kopi
- Nama: `Seruput Kopi`
- Tingkat paket: `Starter`
- Label konsep: `Konsep buatan kami sendiri. Contoh tingkat Starter.`
- Jenis bisnis: `Kedai kopi dan sangrai dadakan`
- Deskripsi: `Konsep website kedai kopi lokal dengan menu seduh dadakan, biji kopi pilihan, dan lokasi.`
- URL Demo: `https://seruput.enlesweb.com/`
- Tombol: `[Lihat Website]` (aktif dengan link demo, atau fallback `[Segera]` jika URL dikosongkan)

### 5.5 ripeir
- Nama: `ripeir`
- Tingkat paket: `Starter`
- Label konsep: `Konsep buatan kami sendiri. Contoh tingkat Starter.`
- Jenis bisnis: `Workshop perbaikan barang`
- Deskripsi: `Konsep website servis laptop, komputer, handphone, dan tablet.`
- URL Demo: `https://ripeir.enlesweb.com/`
- Tombol: `[Lihat Website]` (aktif dengan link demo, atau fallback `[Segera]` jika URL dikosongkan)

### 5.6 berflower
- Nama: `berflower`
- Tingkat paket: `Growth`
- Label konsep: `Konsep buatan kami sendiri. Contoh tingkat Growth.`
- Jenis bisnis: `Toko bunga dan hadiah`
- Deskripsi: `Konsep website untuk toko bunga.`
- URL Demo: `https://berflower.enlesweb.com/`
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
- Jangan menulis "gratis" untuk domain atau hosting.
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

---

## 14. Berkas LLMs AI Agent (`/llms.txt`)

Berkas teks murni untuk discoverability AI agent yang mematuhi format standar Agentic Browsing dan menyalin persis teks dari dokumen ini tanpa penambahan klaim:

- H1: `# EnlesWeb`
- Blockquote deskripsi: `> Website untuk bisnis dengan domain dan hosting 1 tahun sudah termasuk. Mulai Rp450.000. Ceritakan bisnismu lewat WhatsApp.`
- Paragraf ringkasan: `Website untuk bisnismu, sudah termasuk domain dan hosting 1 tahun. Mulai Rp450.000. Ceritakan bisnismu lewat WhatsApp, kami yang mengurus desain dan penayangannya.`
- Daftar Paket (Salinan persis Bagian 4):
  * Starter (Rp450.000): 1 halaman, pilih dari desain yang tersedia, domain 1 tahun, hosting 1 tahun, 2 kali revisi.
  * Business (Rp750.000): Hingga 6 halaman, desain disesuaikan dengan bisnismu, domain 1 tahun, hosting 1 tahun, 2 kali revisi.
  * Growth (Rp1.200.000): Hingga 10 halaman, desain khusus untuk bisnismu, domain 1 tahun, hosting 1 tahun, 4 kali revisi.
  * Custom: Untuk kebutuhan di luar paket Growth.
- Tautan resmi: Beranda (`https://enlesweb.com/`) dan Kebijakan Privasi (`https://enlesweb.com/kebijakan-privasi`).

