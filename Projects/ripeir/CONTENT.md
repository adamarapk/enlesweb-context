# CONTENT.md - ripeir (Website Copy Specification)
Versi 2.0 (Starter Single-Page As-Is Synchronization)

> **Aturan Utama:** Salin persis teks di dokumen ini, termasuk tanda baca dan huruf besar-kecil. Teks di dalam kurung siku `[...]` adalah label tombol. Teks di dalam kurung kurawal `{...}` adalah variabel. Tidak ada em dash (—) di teks pelanggan. Nama `ripeir` selalu ditulis huruf kecil di semua tempat.

---

## Changelog Versi 1.1 (As-Is Synchronization)
- **Visual Hero Beranda:** Disinkronkan dengan visual workbench cutting mat realistis.
- **Floating WhatsApp Button (Aksi Cepat):** Disinkronkan dari mobile action bar menjadi tombol melayang dengan tooltip desktop dan aria-label aksesibel.
- **Elemen Salinan Teks Footer:** Disinkronkan dengan mencantumkan tautan media sosial, judul blok navigasi, blok peta interaktif workshop, dan tombol Google Maps.
- **Verifikasi Larangan Kata & Tanda Baca:** Memastikan 0 em dash (`—`) dan 0 kata promosi terlarang di seluruh spesifikasi.

## Changelog Versi 1.2 (Panduan Pesan WhatsApp)
- Menambahkan teks label, petunjuk, pilihan masalah lain, kesalahan validasi, dan CTA builder di Kontak.

## Changelog Versi 2.0 (Starter Single-Page As-Is Synchronization)
- **Struktur Halaman Murni Single Page:** Menghapus salinan teks halaman terpisah (`/layanan`, `/cara-kerja`, `/sebelum-servis`, `/tentang`, `/kontak`).
- **Pembersihan Teks Sebelum Servis:** Menghapus seluruh panduan persiapan sebelum servis dan peringatan cairan darurat.
- **Katalog Layanan Terpadu:** Menetapkan salinan teks grid 4 perangkat (Laptop, Komputer, Handphone, Tablet) lengkap dengan ringkasan kendala dan tombol konsultasi spesifik perangkat.
- **Cara Kerja 4 Langkah:** Memadatkan alur kerja menjadi 4 langkah ringkas tanpa tautan eksternal.
- **Footer Workshop Terpadu:** Menggabungkan salinan jam operasional, alamat, catatan kedatangan, dan kredit minimalis `"Website oleh ENLESWEB."`.
- **Penyelarasan Titik Sentuh WhatsApp:** Memperbarui daftar titik sentuh menjadi 10 lokasi aktif.

---

## 2.1 Aturan Keras Copywriting
- Bahasa: Indonesia sederhana, tidak teknis. Sapaan: `kamu/-mu`.
- Kalimat pendek. Satu kalimat, satu gagasan.
- Deskripsi, bukan slogan. Konkret, bukan cerdik.
- Setiap pernyataan tentang cara kerja harus berupa proses atau batasan, bukan klaim hasil.
- Dilarang keras menggunakan kata promosi kosong (anti-slop) dan tanda em dash (`—`).

---

## 2.2 Meta Halaman
- Bahasa dokumen: `id`
- Format title:

| Halaman | Title | Meta Description |
|---|---|---|
| Beranda | `ripeir \| Servis laptop, komputer, handphone, dan tablet` | `Servis laptop, komputer, handphone, dan tablet. Ceritakan masalahnya lewat WhatsApp. Kami cek dulu dan kabari hasilnya sebelum perbaikan dimulai.` |
| 404 | `Halaman tidak ditemukan \| ripeir` | `Halaman yang kamu buka tidak ada.` |

---

## 2.3 Navbar, Drawer, dan Skip Link
- Merek: `ripeir` (tautan ke `/`)
- Tautan desktop & drawer:
  1. `Layanan` (href: `#layanan`)
  2. `Cara Kerja` (href: `#cara-kerja`)
  3. `Kontak` (href: `#kontak`)
- Tombol desktop: `[Chat WhatsApp]` (data-cta-location: `nav`, topik: `servis perangkat`)
- Label pembaca layar:
  - Tombol buka menu: `Buka menu`
  - Tombol tutup menu: `Tutup menu`
  - Navigasi utama: `Navigasi utama`
  - Skip link: `Lewati ke konten` (href: `#konten`)

---

## 2.4 Beranda (Single Page)

### 2.4.1 Hero
- **Headline (h1):** `Servis laptop, komputer, handphone, dan tablet.`
- **Teks Pendukung:** `Ceritakan masalahnya lewat WhatsApp. Kami cek dulu, kabari hasilnya, dan baru memperbaiki setelah kamu setuju.`
- **Tombol Utama:** `[Chat via WhatsApp]` (data-cta-location: `hero`, topik: `servis perangkat`)
- **Tombol Sekunder:** `[Lihat Layanan]` (href: `#layanan`)
- **Aria Label Objek Hero:** `Ilustrasi laptop terurai menjadi layar, mainboard, baterai, dan casing bawah.`
- **Callout Komponen Objek:** `Layar`, `Mainboard`, `Baterai`, `Casing bawah`

### 2.4.2 Seksi Layanan (`#layanan`)
- **Headline (h2):** `Layanan servis`
- **Intro:** `Pilih jenis perangkatmu. Ringkasan kendala umum yang dapat dikonsultasikan langsung lewat WhatsApp.`
- **Kartu 1: Laptop**
  - Nama: `Laptop`
  - Ringkasan: `Servis laptop untuk kebutuhan kerja, sekolah, dan sehari-hari.`
  - Kendala Umum:
    - `Tidak mau menyala`
    - `Layar pecah, bergaris, atau gelap`
    - `Baterai cepat habis atau tidak mengisi`
    - `Keyboard atau touchpad tidak berfungsi`
    - `Berjalan lambat atau sering macet`
    - `Panas berlebih dan kipas berisik`
    - `Penyimpanan penuh atau perlu diganti`
    - `Terkena cairan`
  - Tombol: `[Tanya Servis Laptop]` (data-cta-location: `layanan_laptop`, topik: `servis laptop`)
- **Kartu 2: Komputer**
  - Nama: `Komputer`
  - Ringkasan: `Servis komputer desktop, termasuk menambah atau mengganti komponen.`
  - Kendala Umum:
    - `Tidak mau menyala`
    - `Menyala tetapi tidak ada tampilan`
    - `Mati sendiri atau restart terus`
    - `Kipas berisik atau suhu tinggi`
    - `Berjalan lambat`
    - `Perlu menambah atau mengganti komponen`
    - `Pemasangan ulang sistem`
  - Tombol: `[Tanya Servis Komputer]` (data-cta-location: `layanan_komputer`, topik: `servis komputer`)
- **Kartu 3: Handphone**
  - Nama: `Handphone`
  - Ringkasan: `Servis handphone untuk masalah layar, baterai, daya, dan suara.`
  - Kendala Umum:
    - `Layar retak atau tidak merespons sentuhan`
    - `Baterai cepat habis`
    - `Tidak mau mengisi daya`
    - `Tidak mau menyala`
    - `Speaker atau mikrofon bermasalah`
    - `Kamera bermasalah`
    - `Berjalan lambat atau sering macet`
    - `Terkena cairan`
  - Tombol: `[Tanya Servis Handphone]` (data-cta-location: `layanan_handphone`, topik: `servis handphone`)
- **Kartu 4: Tablet**
  - Nama: `Tablet`
  - Ringkasan: `Servis tablet untuk masalah layar, baterai, dan pengisian daya.`
  - Kendala Umum:
    - `Layar retak atau tidak merespons sentuhan`
    - `Baterai cepat habis`
    - `Tidak mau mengisi daya`
    - `Tidak mau menyala`
    - `Speaker atau mikrofon bermasalah`
    - `Berjalan lambat atau sering macet`
  - Tombol: `[Tanya Servis Tablet]` (data-cta-location: `layanan_tablet`, topik: `servis tablet`)
- **Catatan Perangkat Lain:** `Perangkat selain empat jenis ini? Tanyakan dulu lewat WhatsApp sebelum membawanya.`

### 2.4.3 Seksi Cara Kerja (`#cara-kerja`)
- **Headline (h2):** `Empat langkah servis`
- **Intro:** `Alur servis ringkas dari ceritamu di WhatsApp sampai perangkat kembali siap digunakan.`
- **Langkah-langkah:**
  - `01` **Cerita di WhatsApp:** `Hubungi kami dan jelaskan kendala perangkatmu. Kami diskusikan perkiraan masalahnya sejak awal.`
  - `02` **Bawa atau kirim:** `Bawa perangkat ke workshop atau kirim lewat kurir yang aman. Kabari kami sebelum mengirim.`
  - `03` **Cek dan estimasi biaya:** `Kami memeriksa perangkatmu dan memberikan estimasi biaya perbaikan. Pekerjaan baru dimulai setelah kamu setuju.`
  - `04` **Pengerjaan dan selesai:** `Perbaikan dikerjakan sesuai kesepakatan. Perangkat diuji kembali sebelum kamu ambil.`
- **Tombol Seksi:** `[Chat via WhatsApp]` (data-cta-location: `cara_kerja`, topik: `proses servis`)

### 2.4.4 Seksi Prinsip Kerja
- **Headline (h2):** `Cara kami bekerja.`
- **Poin-poin:**
  - **Dicek dulu:** `Kami periksa perangkatmu lebih dulu dan menjelaskan masalahnya dengan bahasa yang mudah dipahami.`
  - **Kamu yang memutuskan:** `Biaya dan pilihan perbaikan kami kabarkan sebelum pekerjaan dimulai. Kamu setuju dulu, baru kami kerjakan.`
  - **Apa adanya:** `Tidak semua kerusakan bisa diperbaiki. Kalau memang tidak bisa, kami sampaikan sebagaimana adanya.`

### 2.4.5 Seksi Final CTA
- **Headline (h2):** `Perangkatmu bermasalah?`
- **Teks Pendukung:** `Ceritakan masalahnya. Kami cek dulu dan kabari hasilnya.`
- **Tombol:** `[Ceritakan Masalahnya via WhatsApp]` (data-cta-location: `final_cta`, topik: `servis perangkat`)

---

## 2.5 Footer Serba Ada (`#kontak`)
- **Merek:** `ripeir`
- **Tagline:** `Servis laptop, komputer, handphone, dan tablet.`
- **Kontak WA:** `WhatsApp +{site.whatsappNumber}` (data-cta-location: `footer`, topik: `servis perangkat`)
- **Tautan Medsos:** Instagram, X, YouTube, GitHub
- **Judul Bagian Workshop:** `Workshop & Kontak`
- **Alamat Workshop:** `{site.address}`
- **Catatan Workshop:** `Kabari lewat WhatsApp sebelum datang.`
- **Judul Jam Operasional:** `Jam Operasional`
- **Label Tombol Peta:** `[Buka di Google Maps]` (href: `{site.mapsUrl}`)
- **Kredit ENLESWEB:** `Website oleh ENLESWEB.` (tautan ke `{site.enleswebUrl}` jika terisi, teks biasa jika kosong)
- **Tautan Cepat Navigasi Footer:**
  - `Layanan` (`#layanan`)
  - `Cara Kerja` (`#cara-kerja`)
  - `Kontak` (`#kontak`)

---

## 2.6 Floating WhatsApp Action Button
- **Label:** `Chat via WhatsApp` (data-cta-location: `action_bar`, topik: `servis perangkat`)
- **Aria-label:** `Chat via WhatsApp tentang servis perangkat`
- **Tooltip Desktop:** `Chat via WhatsApp`

---

## 2.7 Halaman 404
- **Headline (h1):** `Halaman tidak ditemukan`
- **Teks:** `Alamat yang kamu buka tidak ada di website ini.`
- **Tombol Aksi:** `[Kembali ke Beranda]` (href: `/`)

---

## 2.8 Rincian 10 Titik Sentuh Pesan WhatsApp
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

## 2.9 Larangan Teks Spesifik (Anti-Slop)
Daftar kata dan frasa yang dilarang muncul pada teks website:
`terbaik`, `profesional`, `berkualitas tinggi`, `terpercaya`, `cepat dan terpercaya`, `gratis`, `premium`, `presisi`, `elevate`, `seamless`, `crafted`, `powerful`, `modern`, `pasti bisa`, `data aman 100%`, `semua kerusakan teratasi`, `suku cadang original`, `teknisi bersertifikat`, `semua merek`.
Tanda em dash (`—` atau `&mdash;` atau `\u2014`) dilarang di semua tempat.
Nama merek wajib ditulis `ripeir` (huruf kecil).
