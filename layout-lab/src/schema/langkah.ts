export interface LangkahItem {
  title: string;
  description: string;
}

export interface LangkahData {
  title: string;
  intro?: string;
  items: LangkahItem[];
  status?: 'normal' | 'loading' | 'error' | 'empty';
  pesanStatus?: string;
}

export const standarLangkah: LangkahData = {
  title: "Tahapan Pemesanan dan Pengerjaan",
  intro: "Alur kerja terstruktur dari inisiasi komunikasi hingga serah terima pekerjaan selesai.",
  items: [
    {
      title: "Konsultasi Kebutuhan",
      description: "Sampaikan kebutuhan atau kendala Anda melalui telepon atau pesan untuk mendapatkan rekomendasi."
    },
    {
      title: "Penjadwalan Layanan",
      description: "Pilih waktu pengerjaan yang sesuai dengan agenda operasional atau kenyamanan Anda."
    },
    {
      title: "Proses Pengerjaan",
      description: "Tenaga terampil melaksanakan tugas sesuai standar prosedur kerja yang telah disepakati."
    },
    {
      title: "Serah Terima dan Garansi",
      description: "Pengecekan hasil kerja bersama pelanggan disertai jaminan garansi kepuasan layanan."
    }
  ]
};

export const pendekLangkah: LangkahData = {
  title: "Tahapan Ringkas",
  intro: "Proses cepat tiga langkah inti.",
  items: [
    {
      title: "Inisiasi Struktur",
      description: "Menentukan batas kontainer dasar."
    },
    {
      title: "Pengujian Tata Letak",
      description: "Memastikan perataan kolom konsisten."
    },
    {
      title: "Penyelesaian Modul",
      description: "Pemeriksaan akhir dokumen wireframe."
    }
  ]
};

export const panjangLangkah: LangkahData = {
  title: "Metodologi Komprehensif Rekayasa Arsitektur Tata Letak dan Validasi Komponen Sistem",
  intro: "Penjelasan tahapan operasional menyeluruh yang dirancang secara sistematis guna menguji ketahanan pembungkusan kata panjang, keselarasan vertikal antar-kartu, dan distribusi baris pada resolusi layar yang berbeda.",
  items: [
    {
      title: "Analisis Kebutuhan Struktur Informasi Berkelanjutan",
      description: "Pemeriksaan mendalam terhadap seluruh variabel arsitektural antarmuka pengguna untuk memastikan hierarki konten logis dan mudah dipahami."
    },
    {
      title: "Konstruksi Skema Data dan Penentuan Tipe Kontrak",
      description: "Penyusunan definisi tipe data TypeScript yang ketat tanpa field redundan guna menjamin konsistensi representasi pada semua varian."
    },
    {
      title: "Pengujian Kontainer Fleksibel pada Kanvas Multi-Viewport",
      description: "Simulasi alur distribusi elemen pada breakpoint kritis 390px perangkat saku hingga 1280px kanvas desktop beresolusi penuh."
    },
    {
      title: "Verifikasi Eliminasi Komponen Ornamen dan Pola Berulang",
      description: "Pembersihan total terhadap seluruh teks kecil pra-judul, label berlebih, dan indikator dekoratif yang melanggar prinsip wireframe murni."
    },
    {
      title: "Pemeriksaan Integritas Interaksi Keyboard dan Fokus",
      description: "Validasi bahwa seluruh elemen fokus memiliki indikator visual tegas dan urutan tabulasi logis tanpa jebakan navigasi."
    },
    {
      title: "Dokumentasi Metrik dan Arsip Tangkapan Layar Otomatis",
      description: "Perekaman visual setiap konfigurasi tata letak dalam dokumentasi teknis laboratorium untuk evaluasi berkelanjutan."
    }
  ]
};

export const tanpaIntroLangkah: LangkahData = {
  title: standarLangkah.title,
  items: standarLangkah.items
};

export const kosongLangkah: LangkahData = {
  title: "Tahapan Alur Kerja Sistem",
  intro: "Simulasi status antarmuka ketika konfigurasi tahapan kerja belum ditentukan.",
  items: [],
  status: 'empty',
  pesanStatus: "Belum ada tahapan alur kerja yang terdaftar saat ini."
};

export const loadingLangkah: LangkahData = {
  title: "Tahapan Alur Kerja Sistem",
  intro: "Simulasi status antarmuka saat sistem sedang memproses alur tahapan kerja.",
  items: [],
  status: 'loading',
  pesanStatus: "Sedang memuat data alur tahapan kerja..."
};

export const errorLangkah: LangkahData = {
  title: "Tahapan Alur Kerja Sistem",
  intro: "Simulasi status antarmuka ketika terjadi galat pengambilan tahapan kerja.",
  items: [],
  status: 'error',
  pesanStatus: "Gagal memuat tahapan alur kerja. Silakan coba muat ulang."
};
