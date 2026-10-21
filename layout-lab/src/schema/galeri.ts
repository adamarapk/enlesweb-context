export interface GaleriItem {
  title: string;
  caption?: string;
  comparisonTitle?: string;
}

export interface GaleriData {
  title: string;
  intro?: string;
  items: GaleriItem[];
  status?: 'normal' | 'loading' | 'error' | 'empty';
  pesanStatus?: string;
}

export const standarGaleri: GaleriData = {
  title: "Dokumentasi Hasil Pekerjaan",
  intro: "Contoh dokumentasi pengerjaan proyek dan aktivitas layanan yang telah selesai kami laksanakan.",
  items: [
    {
      title: "Pengerjaan Ruang Operasional",
      caption: "Penataan dan instalasi pada lokasi pelanggan dengan hasil rapi.",
      comparisonTitle: "Kondisi Sebelum dan Sesudah"
    },
    {
      title: "Pemeriksaan Peralatan Berkala",
      caption: "Pengujian fungsi peralatan untuk memastikan kinerja berjalan normal.",
      comparisonTitle: "Detail Hasil Pemeriksaan"
    },
    {
      title: "Penyelesaian Proyek Komersial",
      caption: "Serah terima pekerjaan tepat waktu sesuai jadwal yang telah disepakati.",
      comparisonTitle: "Tampak Keseluruhan"
    },
    {
      title: "Perawatan Fasilitas Pelanggan",
      caption: "Layanan pembersihan dan perawatan teratur untuk menjaga kenyamanan.",
      comparisonTitle: "Proses Pengerjaan"
    }
  ]
};

export const pendekGaleri: GaleriData = {
  title: "Galeri Ringkas",
  intro: "Tiga dokumentasi inti sistem.",
  items: [
    {
      title: "Kerangka Modul",
      caption: "Struktur awal kontainer."
    },
    {
      title: "Verifikasi Grid",
      caption: "Penyelarasan batas kolom."
    },
    {
      title: "Evaluasi Responsif",
      caption: "Pengujian breakpoint saku."
    }
  ]
};

export const panjangGaleri: GaleriData = {
  title: "Arsip Dokumentasi Komprehensif Eksplorasi Arsitektur Antarmuka dan Studi Tata Letak Berkelanjutan",
  intro: "Koleksi visual menyeluruh yang mendokumentasikan setiap iterasi pengujian distribusi ruang horizontal, verifikasi ketahanan pembungkusan teks pada kontainer kartu, serta validasi rasio kontras visual monokrom pada seluruh skenario viewport.",
  items: [
    {
      title: "Analisis Mendalam Struktur Kisi CSS dan Kontainer Fleksibel",
      caption: "Pengujian menyeluruh terhadap distribusi beban horizontal dan batas ekspansi kartu pada berbagai resolusi kanvas pengujian.",
      comparisonTitle: "Studi Komparasi Kisi Asimetris"
    },
    {
      title: "Implementasi Sistem Tipografi Monokrom Tanpa Ornamen Tambahan",
      caption: "Verifikasi keterbacaan teks sistem pada kontras tinggi tanpa dekorasi visual tambahan yang dapat mengalihkan fokus pembaca.",
      comparisonTitle: "Studi Komparasi Skala Modular"
    },
    {
      title: "Validasi Perataan Vertikal pada Kontainer Informasi Dinamis",
      caption: "Pemeriksaan keselarasan garis batas kartu ketika panjang deskripsi tidak seragam antar-elemen di dalam satu baris kisi.",
      comparisonTitle: "Studi Komparasi Perataan Fleksibel"
    },
    {
      title: "Pencegahan Kerusakan Ruang pada Ketiadaan Metadata Konten",
      caption: "Pengujian kestabilan tampilan struktural saat komponen tidak memiliki teks keterangan tambahan atau judul pembanding.",
      comparisonTitle: "Studi Komparasi Fallback Struktural"
    },
    {
      title: "Simulasi Perilaku Pembungkusan Kata pada Perangkat Layar Saku",
      caption: "Evaluasi limpahan kata teknis yang tidak dapat dipenggal pada kontainer sempit selebar 390 piksel tanpa memicu pengguliran horizontal.",
      comparisonTitle: "Studi Komparasi Ruang Sentuh"
    },
    {
      title: "Dokumentasi Verifikasi Aksesibilitas dan Urutan Fokus Tabulasi",
      caption: "Pemeriksaan konsistensi navigasi papan ketik pada seluruh blok kartu visual untuk memastikan ketiadaan jebakan fokus antarmuka.",
      comparisonTitle: "Studi Komparasi Navigasi Tabulasi"
    }
  ]
};

export const tanpaOpsionalGaleri: GaleriData = {
  title: "Galeri Tanpa Field Opsional",
  items: [
    { title: "Modul Struktur Kontainer" },
    { title: "Modul Distribusi Kisi" },
    { title: "Modul Verifikasi Responsif" }
  ]
};

export const kosongGaleri: GaleriData = {
  title: "Galeri Dokumentasi Arsitektur",
  intro: "Simulasi status antarmuka ketika basis data belum memiliki item galeri.",
  items: [],
  status: 'empty',
  pesanStatus: "Belum ada item dokumentasi yang terdaftar saat ini."
};

export const loadingGaleri: GaleriData = {
  title: "Galeri Dokumentasi Arsitektur",
  intro: "Simulasi status antarmuka saat sistem sedang memproses dan mengambil data galeri.",
  items: [],
  status: 'loading',
  pesanStatus: "Sedang memuat data dokumentasi arsitektur..."
};

export const errorGaleri: GaleriData = {
  title: "Galeri Dokumentasi Arsitektur",
  intro: "Simulasi status antarmuka ketika terjadi kegagalan pengambilan data galeri.",
  items: [],
  status: 'error',
  pesanStatus: "Gagal memuat dokumentasi visual. Silakan coba muat ulang halaman."
};
