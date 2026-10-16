# CONTENT.md - tuntas
Versi 3.0 (As-Is Website Copy Specification)
Tanggal: 14 Oktober 2026

Dokumen ini adalah satu-satunya sumber salinan teks, label tombol, data program, jadwal, biaya, dan pesan WhatsApp website tuntas sesuai kondisi as-is pada kode sumber (`src/content/copy.ts` dan `src/data/`).
Agent dan pengembang dilarang menulis ulang, memperhalus, atau menyingkat teks di sini. Seluruh teks pelanggan disalin persis, termasuk tanda baca dan huruf besar-kecil.

Teks di dalam kurung siku `[...]` adalah label tombol/tautan. Teks di dalam kurung kurawal `{...}` adalah variabel dinamis.
Tidak ada em dash (`—`) dan en dash (`–`) di seluruh teks pelanggan; rentang angka/waktu selalu menggunakan kata "sampai".
Seluruh isi bisnis berstatus konsep rekaan bimbel di Yogyakarta (data contoh).
Nama merek selalu ditulis huruf kecil: `tuntas`.

---

## 1. Aturan Keras Copywriting
- Bahasa Indonesia baku, sederhana, komunikatif, dan tidak teknis. Sapaan: "Anda".
- Kalimat lugas dan padat. Satu kalimat, satu gagasan.
- Prinsip utama: *Concrete > Clever*, *Information > Marketing*, *Description > Slogan*.
- Pernyataan mengenai metode kerja berupa proses konkret atau batasan operasional, bukan janji hasil.
- Tanpa eyebrow di atas heading. Tanpa tagline promosi tambahan.
- Menyajikan fakta konkret: jenjang, mata pelajaran, jumlah siswa, durasi sesi, hari, jam, dan biaya.
- Nominal biaya rupiah pada homepage tidak ditampilkan (harga hanya dilokalisasi di halaman `/jadwal-biaya` demi kemudahan pemeliharaan).

---

## 2. Meta Halaman (Title & Description)

Bahasa dokumen: `id`. Open Graph title identik dengan Title, Open Graph description identik dengan Meta description.

| Halaman | Title | Meta description |
| --- | --- | --- |
| Beranda | `tuntas \| Bimbel kelompok kecil dan les privat SD, SMP, SMA` | Bimbel kelompok kecil dan les privat untuk SD, SMP, dan SMA. Lihat program, jadwal, dan biaya, lalu tanyakan lewat WhatsApp. |
| Program | `Program \| tuntas` | Program belajar untuk SD kelas 4 sampai 6, SMP kelas 7 sampai 9, dan SMA kelas 10 sampai 12, format kelompok kecil atau privat. |
| Jadwal dan Biaya | `Jadwal dan Biaya \| tuntas` | Jadwal kelompok kecil dan biaya belajar per program. Seluruh jadwal dan biaya di contoh ini adalah data contoh. |
| Cara Belajar | `Cara Belajar \| tuntas` | Empat langkah belajar di tuntas, dari pemetaan awal sampai catatan perkembangan. |
| Tentang dan Lokasi | `Tentang dan Lokasi \| tuntas` | Tentang tuntas, jam operasional, dan lokasi. Contoh website bimbel buatan ENLESWEB. |
| Kontak | `Kontak \| tuntas` | Hubungi tuntas lewat WhatsApp atau isi form kontak. Form menyusun pesan WhatsApp yang tinggal dikirim. |
| 404 | `Halaman tidak ditemukan \| tuntas` | Halaman yang Anda buka tidak ada. |

---

## 3. Navbar dan Skip Link
- Merek: `tuntas` (tautan ke `/`)
- Tautan menu desktop (1024px ke atas):
  - Program (`/program`)
  - Jadwal dan Biaya (`/jadwal-biaya`)
  - Cara Belajar (`/cara-belajar`)
  - Tentang (`/tentang`)
  - Kontak (`/kontak`)
- Tombol WhatsApp desktop: `[Chat WhatsApp]` (Topik: `pendaftaran bimbel`, Lokasi: `nav`)
- Tautan menu mobile (drawer di bawah 1024px):
  - Beranda (`/`)
  - Program (`/program`)
  - Jadwal dan Biaya (`/jadwal-biaya`)
  - Cara Belajar (`/cara-belajar`)
  - Tentang (`/tentang`)
  - Kontak (`/kontak`)
- Aksesibilitas:
  - Skip link: `Lewati ke konten` (menuju `#konten`)
  - Label pembaca layar menu: `Buka menu` dan `Tutup menu`
  - Label aria navigasi: `Navigasi utama`

---

## 4. Beranda (`/`)

### 4.1 Hero (Signature SiDU & Master Ledger)
- Headline (h1): `Bimbel kelompok kecil dan les privat untuk SD, SMP, dan SMA.`
- Teks Pendukung (lead): `Belajar mengikuti pemetaan awal setiap siswa. Lihat program, jadwal, dan biayanya, lalu tanyakan lewat WhatsApp.`
- Tombol Utama (stempel 32px): `[Chat via WhatsApp]` (Topik: `pendaftaran bimbel`, Lokasi: `hero`)
- Master Schedule Ledger (Tabel Terintegrasi Langsung):
  - Judul Bar Caption: `Jadwal kelompok kecil per kelas`
  - Catatan Bar Caption: `Maksimal 6 siswa`
  - 3 Kolom Jenjang:
    - **SD:** `Kelas 4 sampai 6`
      - Slot 1: `Senin dan Kamis`, `15.30 sampai 17.00`
      - Slot 2: `Selasa dan Jumat`, `15.30 sampai 17.00`
      - Format: `Kelompok kecil dan privat`
    - **SMP:** `Kelas 7 sampai 9`
      - Slot 1: `Senin dan Kamis`, `17.30 sampai 19.00`
      - Slot 2: `Selasa dan Jumat`, `17.30 sampai 19.00`
      - Format: `Kelompok kecil dan privat`
    - **SMA:** `Kelas 10 sampai 12`
      - Slot 1: `Senin dan Kamis`, `19.00 sampai 20.30`
      - Slot 2: `Selasa dan Jumat`, `19.00 sampai 20.30`
      - Format: `Kelompok kecil dan privat`

### 4.2 Program Belajar
- Judul Section (h2): `Program belajar`
- Tautan Header: `[Lihat Semua Program]` (menuju `/program`)
- 3 Baris Ledger Horizontal:
  - **SD:** Kelas 4 sampai 6 | Matematika, Bahasa Indonesia, IPA (Tautan menuju `/program#sd`)
  - **SMP:** Kelas 7 sampai 9 | Matematika, IPA, Bahasa Inggris, Bahasa Indonesia (Tautan menuju `/program#smp`)
  - **SMA:** Kelas 10 sampai 12 | Matematika, Fisika, Kimia, Biologi, Bahasa Inggris (Tautan menuju `/program#sma`)

### 4.3 Dua Format Belajar
- Judul Section (h2): `Dua format belajar`
- Tabel Komparasi Format:
  - **Jumlah siswa:** Kelompok kecil: `Maksimal 6 siswa` | Privat: `1 siswa`
  - **Lama pertemuan:** Kelompok kecil: `90 menit` | Privat: `60 menit`
  - **Jadwal:** Kelompok kecil: `Tetap, dua kali per pekan` | Privat: `Disepakati bersama`
  - **Biaya:** Kelompok kecil: `Per bulan` | Privat: `Per pertemuan`
- Tautan Catatan Kaki: `[Lihat Jadwal dan Biaya]` (menuju `/jadwal-biaya`)

### 4.4 Cara Belajar Ringkas
- Judul Section (h2): `Cara belajar`
- Tautan Header: `[Baca Cara Belajar]` (menuju `/cara-belajar`)
- 4 Baris Horizontal:
  1. `Pemetaan awal` - Pengajar memeriksa kemampuan awal siswa.
  2. `Rencana belajar` - Materi dan format ditentukan dari hasil pemetaan.
  3. `Pertemuan rutin` - Siswa belajar sesuai jadwal.
  4. `Catatan perkembangan` - Orang tua menerima catatan setiap akhir bulan.

### 4.5 CTA Penutup
- Judul (h2): `Mau menanyakan program untuk anak Anda?`
- Teks Pendukung: `Ceritakan jenjang dan kebutuhan belajarnya. Kami bantu pilihkan format dan jadwal.`
- Tombol: `[Tanyakan via WhatsApp]` (Topik: `program belajar`, Lokasi: `final_cta`)

---

## 5. Halaman Program (`/program`)
- Judul Halaman (h1): `Program belajar`
- Paragraf Pengantar: `Tiga jenjang dengan dua format belajar. Jadwal dan biaya ada di halaman Jadwal dan Biaya.`
- Jump Links: `[SD]` (`#sd`), `[SMP]` (`#smp`), `[SMA]` (`#sma`)
- Konten Tiap Jenjang:
  - **SD (`#sd`):**
    - Kelas: `Kelas 4 sampai 6`
    - Mata pelajaran: `Matematika, Bahasa Indonesia, IPA`
    - Deskripsi: `Latihan soal rutin dan pendampingan mengerjakan tugas sekolah.`
    - Format: `Kelompok kecil dan privat`
    - Tombol: `[Tanya Program SD]` (Topik: `program SD`, Lokasi: `program_sd`)
  - **SMP (`#smp`):**
    - Kelas: `Kelas 7 sampai 9`
    - Mata pelajaran: `Matematika, IPA, Bahasa Inggris, Bahasa Indonesia`
    - Deskripsi: `Pendalaman materi kelas dan latihan soal sesuai kurikulum yang dipakai sekolah.`
    - Format: `Kelompok kecil dan privat`
    - Tombol: `[Tanya Program SMP]` (Topik: `program SMP`, Lokasi: `program_smp`)
  - **SMA (`#sma`):**
    - Kelas: `Kelas 10 sampai 12`
    - Mata pelajaran: `Matematika, Fisika, Kimia, Biologi, Bahasa Inggris`
    - Deskripsi: `Pendalaman materi per mata pelajaran dan latihan soal sesuai kebutuhan siswa.`
    - Format: `Kelompok kecil dan privat`
    - Tombol: `[Tanya Program SMA]` (Topik: `program SMA`, Lokasi: `program_sma`)
- Catatan Penutup: `Mata pelajaran lain? Tanyakan dulu lewat WhatsApp.`

---

## 6. Halaman Jadwal dan Biaya (`/jadwal-biaya`)
- Judul Halaman (h1): `Jadwal dan biaya`
- Paragraf Pengantar (Callout): `Semua jadwal dan biaya di halaman ini adalah data contoh untuk keperluan demo.`

### 6.1 Tabel Jadwal Kelompok Kecil
- Judul (h2): `Jadwal kelompok kecil`
- Caption: `Jadwal kelompok kecil per kelas`
- Kolom: `Kelas` | `Hari` | `Jam`
  - SD A: `Senin dan Kamis` | `15.30 sampai 17.00`
  - SD B: `Selasa dan Jumat` | `15.30 sampai 17.00`
  - SMP A: `Senin dan Kamis` | `17.30 sampai 19.00`
  - SMP B: `Selasa dan Jumat` | `17.30 sampai 19.00`
  - SMA A: `Senin dan Kamis` | `19.00 sampai 20.30`
  - SMA B: `Selasa dan Jumat` | `19.00 sampai 20.30`
- Catatan Jadwal: `Jadwal privat disepakati bersama pada jam operasional, Senin sampai Sabtu, 14.00 sampai 21.00.`

### 6.2 Tabel Biaya
- Judul (h2): `Biaya`
- Caption: `Biaya contoh per program`
- Kolom: `Program` | `Kelompok kecil (per bulan)` | `Privat (per pertemuan)`
  - SD (Kelas 4 sampai 6): `Rp300.000` | `Rp90.000`
  - SMP (Kelas 7 sampai 9): `Rp350.000` | `Rp100.000`
  - SMA (Kelas 10 sampai 12): `Rp400.000` | `Rp120.000`
- Catatan Ketentuan Biaya:
  - `Kelompok kecil: 8 pertemuan per bulan, 90 menit per pertemuan.`
  - `Privat: 60 menit per pertemuan.`
  - `Biaya pendaftaran Rp50.000 dibayar satu kali.`
  - `Cara pembayaran kami sampaikan saat pendaftaran.`
- Tombol: `[Tanya Jadwal via WhatsApp]` (Topik: `jadwal dan biaya`, Lokasi: `jadwal_biaya`)

---

## 7. Halaman Cara Belajar (`/cara-belajar`)
- Judul Halaman (h1): `Cara belajar di tuntas`
- Paragraf Pengantar: `Empat langkah dari pertemuan pertama sampai catatan perkembangan.`

### 7.1 Empat Langkah Alur Belajar
1. `Pemetaan awal`
   Pengajar menanyakan kebutuhan siswa dan memeriksa kemampuan awalnya lewat beberapa soal.
2. `Rencana belajar`
   Hasil pemetaan dipakai untuk menentukan materi yang dibahas lebih dulu dan format yang sesuai.
3. `Pertemuan rutin`
   Siswa belajar sesuai jadwal. Setiap pertemuan membahas materi dan latihan soal.
4. `Catatan perkembangan`
   Setiap akhir bulan, orang tua menerima catatan materi yang sudah dibahas dan yang masih perlu latihan lewat WhatsApp.

### 7.2 Ketentuan Tambahan
- Bagian `Yang perlu disiapkan`:
  - Buku pelajaran dan catatan dari sekolah.
  - Alat tulis.
  - Daftar materi atau tugas yang sedang dikerjakan di sekolah.
- Bagian `Jika siswa berhalangan hadir`:
  - `Kabari kami lewat WhatsApp sebelum jadwal dimulai. Penjadwalan pengganti kami bicarakan per kasus.`
- Tombol: `[Tanya Cara Belajar via WhatsApp]` (Topik: `cara belajar`, Lokasi: `cara_belajar`)

---

## 8. Halaman Tentang dan Lokasi (`/tentang`)
- Judul Halaman (h1): `Tentang tuntas`
- Paragraf Profil:
  - `tuntas adalah bimbel kelompok kecil dan les privat untuk siswa SD, SMP, dan SMA.`
  - `Setiap kelompok memiliki satu pengajar utama dan maksimal enam siswa.`
- Jam Operasional:
  - Judul (h2): `Jam operasional`
  - Keterangan: `Senin sampai Sabtu, 14.00 sampai 21.00.`
- Lokasi:
  - Judul (h2): `Lokasi`
  - Alamat: `Jl. Contoh No. 12, Yogyakarta`
  - Catatan: `Alamat ini adalah contoh. Peta hanya menunjukkan area kota.`
  - Embed Peta: Google Maps interaktif (Area Yogyakarta)
  - Tombol: `[Buka di Google Maps]` (menuju tautan Google Maps)
- Media Sosial:
  - Judul (h2): `Media sosial`
  - Tautan: `[Instagram]` (menuju profil Instagram ENLESWEB)
- Blok Transparansi Konsep:
  - Judul (h2): `Tentang website ini`
  - Paragraf: `Website ini adalah konsep buatan ENLESWEB, contoh tingkat Business. tuntas bukan bimbel yang beroperasi, jadi tidak ada siswa, hasil belajar, atau ulasan yang diklaim di sini. Alamat, jadwal, dan biaya adalah data contoh. Tautan media sosial mengarah ke akun ENLESWEB.`
  - Tombol: `[Kunjungi ENLESWEB]`

---

## 9. Halaman Kontak (`/kontak`)
- Judul Halaman (h1): `Hubungi tuntas`
- Paragraf Pengantar: `Tanyakan program lewat WhatsApp atau isi form di bawah. Form menyusun pesan WhatsApp yang tinggal Anda kirim.`
- Tombol Utama: `[Chat via WhatsApp]` (Topik: `pendaftaran bimbel`, Lokasi: `contact`)

### 9.1 Ringkasan Info Kontak
- Jam operasional: `Senin sampai Sabtu, 14.00 sampai 21.00.`
- Alamat: `Jl. Contoh No. 12, Yogyakarta (alamat contoh)`
- Tautan Peta: `[Buka di Google Maps]`
- Media Sosial: `[Instagram]`

### 9.2 Form Kontak Interaktif
- Judul (h2): `Form kontak`
- Bidang Isian (Fields):
  - Nama orang tua atau wali (wajib) | Pesan error: `Isi nama orang tua atau wali.`
  - Nama siswa (wajib, cukup nama panggilan) | Pesan error: `Isi nama siswa.`
  - Jenjang (wajib, dropdown pilihan: SD, SMP, SMA) | Pesan error: `Pilih jenjang.`
  - Format yang diminati (wajib, radio pilihan: Kelompok kecil, Privat, Belum tahu) | Pesan error: `Pilih format belajar.`
  - Mata pelajaran (opsional, placeholder: `Contoh: Matematika dan IPA`)
  - Pesan (opsional, placeholder: `Tulis kebutuhan belajar atau pertanyaan Anda.`)
- Tombol Kirim Form: `[Kirim via WhatsApp]` (Topik: `form kontak`, Lokasi: `form`)
- Catatan Form: `Form ini tidak menyimpan data. Pesan dikirim lewat WhatsApp.`
- Catatan Demo: `Di contoh ini, pesan dikirim ke ENLESWEB. Gunakan data contoh, bukan data siswa sungguhan.`
- Validasi & Sukses:
  - Error summary: `Terdapat data yang belum lengkap pada form:`
  - Success text: `Pesan WhatsApp telah disiapkan di tab baru.`
  - Fallback button: `Buka WhatsApp`

---

## 10. Footer dan Floating WhatsApp

### 10.1 Footer
- Merek: `tuntas`
- Tagline: `Bimbel kelompok kecil dan les privat.`
- Tombol Kontak: `[Chat WhatsApp]` (Topik: `pendaftaran bimbel`, Lokasi: `footer`)
- Navigasi (Judul: `Navigasi`): Program, Jadwal dan Biaya, Cara Belajar, Tentang, Kontak
- Jam Operasional (Judul: `Jam operasional`): `Senin sampai Sabtu, 14.00 sampai 21.00`
- Media Sosial: `[Instagram]`
- Catatan Konsep: `Website oleh ENLESWEB.`

### 10.2 Tombol WhatsApp Melayang (Floating WhatsApp)
- Aria-label: `Chat via WhatsApp (buka tab baru)`
- Aria-label pembungkus: `Kontak cepat WhatsApp`
- Lokasi: `floating_wa`
- Topik dinamis per halaman:
  - Beranda: `pendaftaran bimbel`
  - Program: `program belajar`
  - Jadwal dan Biaya: `jadwal dan biaya`
  - Cara Belajar: `cara belajar`
  - Tentang dan Lokasi: `pendaftaran bimbel`
  - Kontak: `pendaftaran bimbel`

---

## 11. Format Pesan WhatsApp

### 11.1 Mode Demo (`site.demoMode = true`)
Nomor tujuan resmi: `site.enleswebWhatsappNumber` (`6285156801570`).

- **Pesan Tombol Standar:**
  ```text
  Halo ENLESWEB, saya sedang melihat contoh website tuntas, halaman {halaman}. Saya mau tanya tentang pembuatan website.
  ```
  *(Variabel `{halaman}`: Beranda, Program, Jadwal dan Biaya, Cara Belajar, Tentang dan Lokasi, Kontak)*

- **Pesan Form Kontak:**
  ```text
  Halo ENLESWEB, saya mencoba form kontak di contoh website tuntas.

  Nama orang tua atau wali: {wali}
  Nama siswa: {siswa}
  Jenjang: {jenjang}
  Format: {format}
  Mata pelajaran: {mapel}
  Pesan: {pesan}

  Saya mau tanya tentang pembuatan website seperti ini.
  ```

### 11.2 Mode Studio Bimbel Asli (`site.demoMode = false`)
- **Pesan Tombol Standar:**
  ```text
  Halo tuntas, saya mau tanya tentang {topik}.
  ```
- **Pesan Form Kontak:**
  ```text
  Halo tuntas, saya ingin menanyakan program belajar.

  Nama orang tua atau wali: {wali}
  Nama siswa: {siswa}
  Jenjang: {jenjang}
  Format: {format}
  Mata pelajaran: {mapel}
  Pesan: {pesan}

  Mohon informasi jadwal dan biaya yang sesuai.
  ```

---

## 12. Tabel 12 Titik Sentuh WhatsApp (`data-cta-location`)

| No | Lokasi Elemen | Nilai `{topik}` | Nilai `data-cta-location` |
| --- | --- | --- | --- |
| 1 | Navbar (Desktop) | pendaftaran bimbel | `nav` |
| 2 | Tombol Melayang (Floating) | dinamis per halaman | `floating_wa` |
| 3 | Hero Beranda (Stempel 32px) | pendaftaran bimbel | `hero` |
| 4 | Program SD | program SD | `program_sd` |
| 5 | Program SMP | program SMP | `program_smp` |
| 6 | Program SMA | program SMA | `program_sma` |
| 7 | Jadwal dan Biaya | jadwal dan biaya | `jadwal_biaya` |
| 8 | Cara Belajar | cara belajar | `cara_belajar` |
| 9 | Kontak (Tombol Utama) | pendaftaran bimbel | `contact` |
| 10 | Kontak (Kirim Form) | form kontak | `form` |
| 11 | Final CTA Beranda | program belajar | `final_cta` |
| 12 | Footer | pendaftaran bimbel | `footer` |

---

## 13. Halaman 404
- Judul (h1): `Halaman tidak ditemukan`
- Paragraf: `Alamat yang Anda buka tidak ada di website ini.`
- Tombol: `[Kembali ke Beranda]` (menuju `/`)
