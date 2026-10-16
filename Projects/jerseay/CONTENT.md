# Jerseay Website Copy Specification (CONTENT.md)

**Versi Dokumen:** 3.0  
**Status:** Sinkron Penuh dengan Implementasi As-Is Website Terkini (Tingkat Growth ENLESWEB)  
**Tanggal:** Oktober 2026  
**Standar Bahasa:** Bahasa Indonesia Baku, Arsitektural, Lugas, Bebas Em Dash (U+2014) dan En Dash (U+2013)  

---

## 1. Meta Halaman (SEO & Open Graph)

| Halaman | Rute | Tag Judul (`<title>`) | Meta Deskripsi (`description`) |
| :--- | :--- | :--- | :--- |
| Beranda | `/` | `Jerseay - Studio Jersey Kustom` | `Studio jersey kustom untuk tim dan komunitas dari eksplorasi desain hingga file siap produksi.` |
| Arsip Proyek | `/proyek` | `Arsip Proyek : Jerseay Studio` | `Dokumentasi visual proyek jersey kustom yang dirancang untuk performa lapangan dan identitas tim.` |
| Detail: Futsal | `/proyek/futsal-liga-surabaya` | `Tim Futsal Liga Regional Surabaya : Jerseay Studio` | `Studi kasus desain jersey tim futsal kompetitif regional dengan pola monokrom dan nomor terbaca jelas.` |
| Detail: Sepeda | `/proyek/sepeda-bandung-barat`| `Komunitas Sepeda Bandung Barat : Jerseay Studio` | `Jersey balap sepeda jalan raya dengan visibilitas tinggi, saku fungsional, dan identitas rute tanjakan.` |
| Detail: Esports | `/proyek/esports-turnamen-nasional`| `Skuad Esports Turnamen Nasional : Jerseay Studio` | `Jersey tanding turnamen game dengan penataan logo sponsor terstruktur dan tipografi nama pemain.` |
| Detail: Basket | `/proyek/basket-jakarta-selatan` | `Klub Basket Komunitas Jakarta Selatan : Jerseay Studio` | `Jersey basket tanpa lengan dengan proporsi nomor dada dan punggung yang mengikuti regulasi turnamen.` |
| Layanan | `/layanan` | `Spesialisasi Cabang Olahraga : Jerseay Studio` | `Katalog spesialisasi perancangan jersey kustom: Futsal, Sepak Bola, Balap Sepeda, Esports, Basket, dan Komunitas Olahraga.` |
| Proses | `/proses` | `Alur Kerja Studio : Jerseay Studio` | `Alur kerja perancangan jersey: Brief, Arah Visual, Desain, dan File Produksi.` |
| Rancang Kit | `/rancang` | `Rancang Kit : Jerseay Studio` | `Susun warna, pola, nama, nomor, dan roster jersey tim Anda, lalu kirim ringkasannya ke studio.` |
| Mulai Brief | `/mulai-brief` | `Mulai Brief : Jerseay Studio` | `Kirim ringkasan kebutuhan jersey tim Anda untuk memulai proses konsultasi desain bersama Jerseay Studio.` |
| Tidak Ditemukan | `/404` | `Halaman Tidak Ditemukan : Jerseay Studio` | `Halaman yang Anda cari tidak dapat ditemukan di studio web Jerseay.` |

---

## 2. Navigasi Header & Mobile Drawer (`Navbar.astro`)

- Wordmark Brand: `JERSEAY`
- Aria Label Logo: `Jerseay Studio Beranda`
- Tautan Navigasi Desktop:
  1. `Studio` (menuju `/`)
  2. `Proyek` (menuju `/proyek`)
  3. `Layanan` (menuju `/layanan`)
  4. `Proses` (menuju `/proses`)
  5. `Rancang` (menuju `/rancang`)
- Tombol Aksi Kanan (Desktop & Drawer): `[Mulai Brief]` (menuju `/mulai-brief`)
- Tombol Buka Menu Mobile:
  - Teks: `Menu`
  - Aria Label: `Buka menu navigasi`
- Tombol Tutup Menu Mobile:
  - Aria Label: `Tutup menu navigasi`
- Judul Menu Drawer Mobile: `Menu Navigasi`

---

## 3. Beranda (`pages/index.astro`)

### 3.1 Hero Banner Sinematik (`HomeHero.astro`)
- Tagline H1: `Desain jersey kustom untuk tim olahraga.`
- Subtitle Pendukung: `Rancang siluet, palet warna, dan roster pemain langsung di studio web, atau ajukan brief kebutuhan tim.`
- Tombol Aksi Primer: `[Rancang Kit]` (menuju `/rancang`)
- Tautan Aksi Sekunder: `[Mulai Brief]` (menuju `/mulai-brief`)
- Alt Teks Gambar Hero: `Showcase jersey atletik kustom Jerseay Studio`

### 3.2 Showcase Proyek Pilihan (`FeaturedProject.astro`)
- Judul Section: `Proyek Pilihan`
- Sub-kategori: `Futsal & Sepak Bola`
- Judul Proyek: `Tim Futsal Liga Regional Surabaya`
- Teks Ringkasan: `Kit tanding monokrom dengan kontras visual tinggi untuk turnamen indoor.`
- Tombol Aksi: `[Lihat Proyek]` (menuju `/proyek/futsal-liga-surabaya`)
- Alt Foto Siluet Depan: `Jersey Futsal Surabaya - Siluet Tanding`
- Alt Foto Makro Detail: `Detail Jahitan Kerah Jersey Futsal Surabaya`

### 3.3 Proyek Lain (`ProjectPreview.astro`)
- Judul Section: `Proyek Lain`
- Tautan Header Kanan: `[Lihat Proyek]` (menuju `/proyek`)
- Kartu 1 (Balap Sepeda):
  - Kategori: `Balap Sepeda`
  - Judul: `Komunitas Sepeda Bandung Barat`
  - Tautan Aksi: `[Lihat Proyek]` (menuju `/proyek/sepeda-bandung-barat`)
- Kartu 2 (Esports):
  - Kategori: `Esports`
  - Judul: `Skuad Esports Turnamen Nasional`
  - Tautan Aksi: `[Lihat Proyek]` (menuju `/proyek/esports-turnamen-nasional`)
- Kartu 3 (Bola Basket):
  - Kategori: `Bola Basket`
  - Judul: `Klub Basket Komunitas Jakarta Selatan`
  - Tautan Aksi: `[Lihat Proyek]` (menuju `/proyek/basket-jakarta-selatan`)

### 3.4 Alur Kerja Ringkas (`ProcessPreview.astro`)
- Judul Section: `Alur Kerja`
- Tautan Header Kanan: `[Pelajari proses]` (menuju `/proses`)
- 4 Langkah Alur:
  1. `Brief`
  2. `Arah Visual`
  3. `Desain`
  4. `File Produksi`

### 3.5 CTA Penutup Beranda (`HomeFinalCTA.astro`)
- Judul H2: `Diskusikan proyek jersey tim Anda.`
- Teks Pengantar: `Kirim ringkasan kebutuhan tim untuk mendiskusikan arah visual dan spesifikasi produksi bersama studio.`
- Tombol Aksi Primer: `[Mulai Brief]` (menuju `/mulai-brief`)
- Tombol Aksi Sekunder: `[Rancang Kit]` (menuju `/rancang`)

---

## 4. Arsip Portofolio (`pages/proyek/index.astro`)

- Judul H1: `Arsip Proyek`
- Deskripsi: `Eksplorasi visual dan studi kasus perancangan jersey untuk tim kompetitif dan komunitas olahraga.`
- Konten Setiap Kartu:
  - Judul proyek
  - Ringkasan singkat (`shortBrief`)
  - Tautan teks: `[Lihat Proyek]` (disertai ikon panah kanan)

---

## 5. Detail Studi Kasus & Lookbook (`pages/proyek/[project].astro`)

### 5.1 Header Komersial
- Breadcrumb: `[Kembali ke Portofolio]`
- Kategori & Label Tahun: `{category} : Concept project ({year})`
- Judul H1: `{title}`
- Ringkasan Brief: `{brief}`
- Label Palet: `Palet Terpilih`
- Tombol Aksi Ganda:
  1. Tombol Sekunder Khusus: `[Rancang dengan palet ini]` (menuju `/rancang?proyek={slug}`)
  2. Tombol Primer: `[Mulai Brief]` (menuju `/mulai-brief?sport={category}`)

### 5.2 Lookbook Visual 3 Spread (`VisualGallery.astro`)
- **Spread 01 (Siluet Utama):**
  - Label: `Tampak Depan Siluet`
  - Keterangan: Foto tampak depan beresolusi tinggi.
- **Spread 02 (Detail Konstruksi & Roster Punggung):**
  - Panel Kiri: `Detail Kerah & Konstruksi` (spesifikasi rajut ganda, rib elastis, sirkulasi udara).
  - Panel Kanan: `Tampak Belakang & Tipografi Roster` (tata letak nomor punggung dan nama tim).
- **Spread 03 (Sistem Pola & Spesimen Tipografi):**
  - Panel Kiri: `Sistem Pola Panel` (deskripsi grafis geometris vektor).
  - Panel Kanan: `Spesimen Tipografi Lapangan` (karakteristik angka 0-9 dan huruf A-Z untuk keterbacaan jarak jauh).

### 5.3 Navigasi Sirkular Bawah
- Teks Header: `Proyek Berikutnya`
- Judul Proyek Target
- Tautan Aksi: `[Lihat Proyek]`

---

## 6. Spesialisasi Cabang Olahraga (`pages/layanan/index.astro`)

- Judul H1: `Spesialisasi Cabang Olahraga`
- Deskripsi: `Perancangan kit tanding dan seragam olahraga yang dikembangkan sesuai tuntutan teknis pergerakan tubuh serta regulasi pertandingan.`
- Quick Jump Bar:
  - `[Futsal & Sepak Bola]`
  - `[Balap Sepeda]`
  - `[Esports & Gaming]`
  - `[Bola Basket]`
  - `[Tim & Komunitas]`
- Header Tabel Mikro-Spesifikasi:
  - Kolom 1: `Siluet`
  - Kolom 2: `Standar` (atau `Fitur`)
  - Kolom 3: `Keluaran`
- Aksi Tiap Cabang:
  - Tombol Primer: `[Mulai Brief]` (menuju `/mulai-brief?sport={id}`)
  - Tombol Sekunder: `[Lihat Proyek]` (bila tersedia studi kasus)
- Kotak Inquiry Bawah:
  - Judul H2: `Punya Cabang Olahraga Lain?`
  - Teks: `Studio kami juga mengerjakan seragam untuk cabang olahraga dan kebutuhan spesifik lainnya. Konsultasikan konsep tim Anda secara langsung.`
  - Tombol Primer: `[Mulai Brief]`
  - Tombol Sekunder: `[Tanya Desainer via WhatsApp]`

---

## 7. Alur Kerja Studio (`pages/proses/index.astro`)

- Judul H1: `Alur Kerja`
- Sub-judul: `Dari penerimaan brief hingga penyerahan file pola siap produksi.`
- 4 Stasiun Kerja Kanonis:
  1. `01 / Brief Kebutuhan`
     - Detail: `Pengumpulan data: cabang olahraga, estimasi jumlah roster, batas waktu, dan referensi visual tim.`
  2. `02 / Arah Visual`
     - Detail: `Penentuan palet warna utama, sistem tipografi nama dan nomor, serta proporsi penempatan sponsor.`
  3. `03 / Desain`
     - Detail: `Eksplorasi artwork tampak depan dan belakang dengan detail konstruksi panel jersey serta konfirmasi roster tim.`
  4. `04 / File Produksi`
     - Detail: `Pemisahan panel pola cetak 1:1 dalam format vektor siap sublimasi untuk mitra vendor garmen pilihan Anda.`
- Section Penutup:
  - Judul H2: `Punya kebutuhan jersey untuk tim Anda?`
  - Sub-judul: `Konsultasikan ide desain awal bersama kami.`
  - Tombol Aksi: `[Mulai Brief]`

---

## 8. Modul Unggulan: Konfigurator Kit & Roster Builder (`pages/rancang/index.astro`)

### 8.1 Header & Notifikasi
- Judul H1: `Rancang Kit`
- Subtitle: `Susun warna, pola, nama, nomor, dan daftar pemain. Hasilnya menjadi ringkasan yang bisa dikirim ke studio, disalin, atau diunduh.`
- Catatan Penyimpanan: `Data rancangan tersimpan di perangkat ini saja dan tidak dikirim ke mana pun sampai Anda membuka WhatsApp.`
- Catatan Demo: `Ini contoh website. Gunakan data contoh, bukan data pemain sungguhan.`
- Banner Pemulihan Draf: `Draf sebelumnya tersedia.` dengan tombol `[Lanjutkan]` dan `[Mulai Baru]`.

### 8.2 Stepper 5 Langkah
- Langkah 1: `Dasar` (Langkah 1: Dasar)
- Langkah 2: `Warna & Pola` (Langkah 2: Warna dan Pola)
- Langkah 3: `Nama, Nomor, Logo` (Langkah 3: Nama, Nomor, dan Logo)
- Langkah 4: `Roster` (Langkah 4: Daftar Pemain)
- Langkah 5: `Ringkasan` (Langkah 5: Tinjau dan Keluaran)

### 8.3 Label & Opsi Formulir
- Nama Tim: `Nama Tim` (placeholder: "cth. Apex FC")
- Cabang Olahraga: `Cabang Olahraga`
- Siluet: `Siluet Jersey`
- Celana: `Termasuk Bawahan Celana`
- Sistem Varian Kit: `Sistem Varian Kit` (`Kandang (Utama)`, `Tandang`, `Kiper`)
- Warna: `Warna Utama`, `Warna Sekunder`, `Warna Aksen`, `Warna Nama & Nomor`
- Format Hex: `Kode warna (#RRGGBB)`
- Pilihan Palet Preset: `Pilihan Palet Proyek`
- Pola: `Motif Pola` (Polos, Kisi 45 Derajat, Garis Horizontal, Garis Sudut, Titik Bundar)
- Intensitas Pola: `Intensitas Pola` (`Halus`, `Sedang`, `Tegas`)
- Gaya Huruf: `Gaya Huruf` (`Tegas (Plus Jakarta Sans)`, `Teknis (Font Mono)`)
- Nomor Dada: `Tampilkan Nomor di Dada`
- Zona Logo: `Zona Penempatan Logo Sponsor` (Dada Kiri, Dada Tengah, Lengan Kiri, Lengan Kanan, Punggung Atas, Punggung Bawah)
- Roster: `Nama`, `Nomor`, `Ukuran`, `Kit`
- Target Tanggal: `Target Tanggal Pengerjaan`
- Catatan: `Catatan Khusus untuk Studio`
- Total Pemain: `Total Pemain`
- Ringkasan Ukuran: `Ringkasan Ukuran`

### 8.4 Teks Keterbacaan & Rasio Kontras WCAG
- Judul: `Keterbacaan nomor`
- Format Rasio: `{ratio}:1, {label}`
- Label Status:
  - `Sangat terbaca` (rasio >= 7:1)
  - `Terbaca` (rasio >= 4.5:1)
  - `Kurang terbaca dari jarak jauh` (rasio >= 3:1)
  - `Sulit terbaca` (rasio < 3:1)
- Tombol Rekomendasi Cepat: `[Gunakan putih]` / `[Gunakan hitam]`
- Catatan Warna Cetak: `Warna di layar bisa berbeda dari hasil cetak. Studio mengonfirmasi warna pada tahap desain.`

### 8.5 Modal Tempel Daftar Pemain (Batch Paste)
- Judul Modal: `Tempel Daftar Pemain`
- Deskripsi: `Tempel daftar nama, nomor, dan ukuran. Pisahkan kolom dengan koma, tab, titik koma, atau tanda pipa (|). Contoh: FARHAN, 10, L`
- Placeholder: `FARHAN, 10, L\nDIMAS, 7, M\nBAGAS, 1, XL`
- Judul Pratinjau: `Pratinjau Hasil Pembacaan`
- Tombol Aksi: `[Terapkan]` dan `[Batal]`

### 8.6 Tombol Aksi Konfigurator
- Navigasi: `[Lanjut]`, `[Kembali]`
- Pratinjau: `[Tampak Depan]`, `[Tampak Belakang]`, `[Sembunyikan Pratinjau]`, `[Tampilkan Pratinjau]`
- Roster: `[Tambah Pemain]`, `[Tempel Daftar]`, `[Urutkan Menurut Nomor]`, `[Hapus Semua]`
- Keluaran: `[Buka di WhatsApp]`, `[Salin Ringkasan]`, `[Unduh Roster CSV]`

### 8.7 Pesan Validasi & Peringatan
- `Harap isi nama tim.`
- `Pilih cabang olahraga.`
- `Kode warna harus berformat #RRGGBB.`
- `Nama maksimal 14 karakter.`
- `Nama hanya boleh berisi huruf, angka, spasi, titik, tanda hubung, dan apostrof.`
- `Nomor harus berupa angka 0 sampai 99.`
- `Nomor {n} dipakai lebih dari satu pemain pada kit yang sama.`
- `Pilih ukuran.`
- `Tambahkan minimal satu pemain.`
- `Roster maksimal 40 baris.`
- `Ringkasan disalin.`
- `Roster terlalu panjang untuk pesan WhatsApp. Unduh CSV atau salin ringkasan, lalu kirim lewat chat.`

---

## 9. Formulir Brief Adaptif (`pages/mulai-brief/index.astro`)

### 9.1 Header Halaman
- Judul H1: `Mulai Brief`
- Deskripsi: `Isi rincian kebutuhan seragam tim Anda di bawah ini. Studio kami akan mempelajari data awal untuk menyusun kerangka visual dan estimasi pengerjaan.`
- Penanda Demo: `Konsep website contoh. Data kebutuhan disiapkan untuk konsultasi studio.`

### 9.2 Kolom Input Dasar & Adaptif
1. `Nama / Tim (*)` (wajib, placeholder: "cth. Farhan / Apex Futsal Club")
2. `Jenis Olahraga (*)` (wajib: Futsal, Sepak Bola, Balap Sepeda, Esports, Bola Basket, Komunitas / Lainnya)
3. **Bidang Adaptif Dinamis:**
   - Futsal / Sepak Bola:
     - `Kit Kiper Terpisah?` (Ya / Tidak)
     - `Nomor Dada Diperlukan?` (Ya / Tidak)
   - Balap Sepeda:
     - `Strip Reflektif?` (Ya / Tidak)
     - `Panjang Lengan` (Pendek / Panjang)
   - Esports:
     - `Jumlah Slot Sponsor` (0, 1-2, 3-4, 5-6)
     - `Nickname Tercetak di Punggung?` (Ya / Tidak)
   - Bola Basket:
     - `Termasuk Celana Tanding?` (Ya / Tidak)
     - `Nomor Dada Diperlukan?` (Ya / Tidak)
   - Komunitas:
     - `Jenis Kegiatan` (cth. Fun Run, Gathering Kantor)
     - `Panjang Lengan` (Pendek, Panjang, Campuran)
4. `Jumlah Jersey (*)` (wajib, angka minimal 1, placeholder: "cth. 20")
5. `Target Tanggal (*)` (wajib, format tanggal)
6. `Sudah Punya Desain? (*)` (wajib: "Sudah ada referensi / mockup" atau "Belum (mulai dari nol)")
7. `Referensi Visual (Opsional)` (placeholder: tautan Google Drive, Instagram, warna)
8. `Kebutuhan / Catatan Tambahan (Opsional)` (placeholder: bahan khusus, regulasi)

### 9.3 Validasi & State Konfirmasi Sukses
- Banner Peringatan: `Silakan lengkapi seluruh kolom wajib yang ditandai bintang (*).`
- Judul Sukses: `Data Kebutuhan Telah Dirangkum`
- Deskripsi Sukses: `Ringkasan brief Anda telah disiapkan. Lanjutkan obrolan langsung bersama tim Jerseay Studio via WhatsApp.`
- Tombol Utama: `[Buka di WhatsApp]`
- Tombol Sekunder: `[Ubah Data Brief]`

---

## 10. Salinan Pesan WhatsApp Terstruktur (`whatsapp.ts`)

### 10.1 Pesan dalam Mode Demo (`siteConfig.demoMode = true`)
Semua tautan WhatsApp di mode demo mengarah ke nomor perwakilan ENLESWEB (`6285156801570`) dengan pesan:
```text
Halo ENLESWEB, saya sedang melihat contoh website Jerseay, halaman {Nama Halaman}. Saya mau tanya tentang pembuatan website.
```

### 10.2 Pesan Obrolan Umum Studio (Mode Non-Demo)

| Konteks (`location`) | Teks Pesan Pembuka WhatsApp |
| :--- | :--- |
| `home` / `hero` | `Halo Jerseay, saya ingin konsultasi custom jersey untuk tim saya.` |
| `proyek_index` / `portfolio` | `Halo Jerseay, saya melihat portfolio Jerseay dan ingin konsultasi desain jersey serupa.` |
| `proyek_detail` | `Halo Jerseay, saya tertarik dengan model jersey {detail}. Bisakah saya buat desain serupa untuk tim saya?` |
| `layanan` / `service` | `Halo Jerseay, saya ingin konsultasi custom jersey untuk kategori {detail}.` |
| `proses` | `Halo Jerseay, saya ingin bertanya tentang alur kerja perancangan jersey.` |
| `mulai_brief` | `Halo Jerseay, saya ingin bertanya sebelum mengisi brief jersey tim.` |
| `rancang` | `Halo Jerseay, saya ingin bertanya tentang rancangan kit dan roster tim saya.` |
| `not_found` | `Halo Jerseay, saya ingin konsultasi pembuatan custom jersey.` |
| `faq` | `Halo Jerseay, saya memiliki pertanyaan mengenai pemesanan jersey yang ingin didiskusikan langsung.` |
| `final` / `sticky` | `Halo Jerseay, saya siap memulai diskusi dan order custom jersey untuk tim kami.` |
| `general` | `Halo Jerseay, saya ingin konsultasi pembuatan custom jersey.` |

### 10.3 Format Pesan Brief Lengkap
```text
Halo Jerseay Studio, saya ingin mengirim ringkasan kebutuhan jersey tim:

RINGKASAN BRIEF JERSEAY STUDIO
- Nama / Tim: {Nama}
- Cabang Olahraga: {Sport}
- Estimasi Jumlah: {Jumlah} pcs
- Target Tanggal: {Target}
- Kit Kiper: {Opsi jika futsal}
- Nomor Dada: {Opsi jika futsal/basket}
- Strip Reflektif: {Opsi jika sepeda}
- Panjang Lengan: {Opsi jika sepeda/komunitas}
- Slot Logo Sponsor: {Opsi jika esports}
- Nickname Punggung: {Opsi jika esports}
- Celana Tanding: {Opsi jika basket}
- Jenis Kegiatan: {Opsi jika komunitas}
- Preferensi Desain: {Preferensi}
- Catatan Tambahan: {Catatan}

Warna di layar bisa berbeda dari hasil cetak. Studio mengonfirmasi warna pada tahap desain.

Mohon informasi ketersediaan jadwal konsultasi desain.
```

### 10.4 Format Pesan Konfigurator Kit & Roster
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

## 11. Floating WhatsApp Button (`FloatingWhatsApp.astro`)

- Aria Label Wadah: `Kontak WhatsApp Jerseay Studio`
- Aria Label Tombol: `Hubungi WhatsApp`
- Format Visual: Tombol aksi mengambang (Floating Action Button) berbentuk lingkaran penuh (`rounded-full`) diameter 56px (`w-14 h-14`), warna hijau WhatsApp `#25D366`, tanpa efek bayangan dekoratif.
- Posisi: Menetap di sudut kanan bawah layar (`fixed bottom-6 right-6 z-40`) pada desktop dan mobile.
- Konteks Lokasi: Membawa atribut `data-cta-location` yang dinamis mengikuti halaman aktif.

---

## 12. Footer Studio (`Footer.astro`)

### 12.1 Kolom 1 (Intro Studio)
- Wordmark: `JERSEAY`
- Aria Label: `Jerseay Studio Beranda`
- Deskripsi: `Studio jersey kustom untuk tim dan komunitas dari eksplorasi desain hingga file siap produksi.`
- Tombol Aksi 1: `[Mulai Brief]` (menuju `/mulai-brief`)
- Tombol Aksi 2: `[WhatsApp Studio]` (tautan WhatsApp)
- Aria Label Tombol WhatsApp: `Hubungi studio via WhatsApp`

### 12.2 Kolom 2 (Struktur Studio)
- Judul H3: `Struktur Studio`
- Tautan Menu:
  1. `Studio` (menuju `/`)
  2. `Proyek` (menuju `/proyek`)
  3. `Layanan` (menuju `/layanan`)
  4. `Proses` (menuju `/proses`)
  5. `Rancang` (menuju `/rancang`)
  6. `Mulai Brief` (menuju `/mulai-brief`)

### 12.3 Kolom 3 (Informasi Studio)
- Judul H3: `Informasi Studio`
- Jam Operasional: `Senin - Sabtu: 09:00 - 18:00 WIB`
- Cakupan Layanan: `Melayani pemesanan kit tim dan komunitas seluruh Indonesia.`
- Pernyataan Fokus: `Studio berfokus pada desain fungsional, tata letak nomor, dan kesiapan file produksi.`

### 12.4 Baris Hak Cipta & Penanda Konsep
- Teks Hak Cipta: `© {tahun} Jerseay Studio. Seluruh hak cipta dilindungi.`
- Penanda Konsep: `Konsep website buatan ENLESWEB. Contoh tingkat Growth. Jerseay bukan studio yang beroperasi.`

---

## 13. Halaman 404 (`pages/404.astro`)

- Judul H1: `404`
- Subtitle: `Halaman Tidak Ditemukan`
- Deskripsi: `Halaman yang Anda tuju tidak tersedia atau telah dipindahkan.`
- Tombol Aksi:
  1. `[Kembali ke Beranda]` (menuju `/`)
  2. `[Rancang Kit]` (menuju `/rancang`)

---

## 14. Prinsip Copywriting & Kepatuhan Antislop

1. **Nol Em Dash (U+2014) & Nol En Dash (U+2013):** Kedua karakter tersebut dilarang keras di seluruh halaman website dan dokumentasi. Gunakan tanda titik dua (`:`), tanda pisah tunggal (`-`), atau koma (`,`).
2. **Kredibilitas Berbasis Fakta:** Tidak menggunakan angka statistik fiktif ("10.000+ tim", "Kepuasan 99%"), ulasan buatan, atau lencana kepuasan tanpa data riil.
3. **Bebas Buzzwords Klise:** Menghindari kata-kata marketing generik AI seperti "revolusioner", "seamless", "solusi mutakhir", "terdepan di Indonesia".
4. **Kejelasan Tombol (Explicit Action):** Tombol aksi menggunakan frasa tindakan nyata (`[Rancang Kit]`, `[Mulai Brief]`, `[Lihat Proyek]`, `[Rancang dengan palet ini]`, `[Unduh Roster CSV]`, `[Buka di WhatsApp]`).
5. **Kejujuran Status Konsep:** Penanda bahwa website adalah contoh tingkat Growth dicantumkan di footer dan di pesan WhatsApp pada mode demo.
