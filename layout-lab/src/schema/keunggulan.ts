export interface KeunggulanItem {
  title: string;
  description: string;
}

export interface KeunggulanData {
  title: string;
  intro?: string;
  items: KeunggulanItem[];
  status?: 'normal' | 'loading' | 'error' | 'empty';
  pesanStatus?: string;
}

export const standarKeunggulan: KeunggulanData = {
  title: "Alasan Memilih Layanan Kami",
  intro: "Komitmen kami dalam memberikan standar layanan terbaik kepada setiap pelanggan.",
  items: [
    {
      title: "Tenaga Kerja Berpengalaman",
      description: "Setiap staf memiliki keterampilan teruji dan pemahaman mendalam pada bidang pekerjaannya."
    },
    {
      title: "Peralatan dan Standar Lengkap",
      description: "Menggunakan peralatan kerja yang terawat untuk menjamin ketepatan waktu serta hasil pengerjaan."
    },
    {
      title: "Transparansi Biaya dan Jadwal",
      description: "Rincian biaya disampaikan terbuka sejak awal tanpa biaya tambahan yang tidak terduga."
    }
  ]
};

export const pendekKeunggulan: KeunggulanData = {
  title: "Karakteristik Inti",
  intro: "Tiga aspek utama sistem.",
  items: [
    {
      title: "Presisi Tata Letak",
      description: "Struktur garis dasar yang konsisten."
    },
    {
      title: "Ketahanan Konten",
      description: "Penanganan teks dinamis tanpa kebocoran."
    },
    {
      title: "Aksesibilitas Teruji",
      description: "Navigasi keyboard yang jelas."
    }
  ]
};

export const panjangKeunggulan: KeunggulanData = {
  title: "Fondasi Komprehensif Arsitektur Rekayasa Antarmuka Pengguna dan Keandalan Sistem Spasial",
  intro: "Penjelasan mendalam mengenai pilar-pilar keandalan struktural antarmuka yang diuji secara ketat untuk memastikan tidak adanya degradasi tata letak ketika menangani konten informasi tingkat lanjut.",
  items: [
    {
      title: "Kerapatan Informasi dan Keseimbangan Ruang Negatif",
      description: "Pengaturan ritme vertikal dan horizontal yang cermat guna memberikan keterbacaan optimal tanpa menciptakan ruang kosong tak bermakna pada viewport lebar."
    },
    {
      title: "Ketahanan Kontainer Modular terhadap Karakter Panjang",
      description: "Penerapan aturan pemenggalan kata dan batas fleksibel pada seluruh modul untuk mencegah elemen kartu melampaui lebar grid yang ditentukan."
    },
    {
      title: "Kepatuhan Standar Aksesibilitas Internasional",
      description: "Verifikasi kontras minimum 4.5 banding 1 untuk teks serta penegakan indikator fokus keyboard berstandar tinggi di semua lingkungan peramban."
    },
    {
      title: "Pemisahan Mutlak antara Struktur dan Estetika Grafis",
      description: "Menjamin bahwa hierarki informasi berdiri kokoh secara mandiri sebelum penambahan warna, animasi, atau ornamen visual penunjang."
    },
    {
      title: "Efisiensi Performa Rendah Jejak Komputasi",
      description: "Kode murni tanpa pustaka JavaScript berat menghasilkan kecepatan muat instan dan kestabilan render di seluruh tingkatan perangkat keras."
    },
    {
      title: "Konsistensi Perilaku Antar-Platform dan Resolusi",
      description: "Memastikan pengalaman struktural yang sepadan saat diakses dari peramban desktop modern maupun perangkat layar sentuh saku."
    }
  ]
};

export const tanpaIntroKeunggulan: KeunggulanData = {
  title: standarKeunggulan.title,
  items: standarKeunggulan.items
};

export const kosongKeunggulan: KeunggulanData = {
  title: "Karakteristik Struktural Sistem",
  intro: "Simulasi status antarmuka ketika data keunggulan struktural belum tersedia.",
  items: [],
  status: 'empty',
  pesanStatus: "Belum ada karakteristik keunggulan yang terdaftar saat ini."
};

export const loadingKeunggulan: KeunggulanData = {
  title: "Karakteristik Struktural Sistem",
  intro: "Simulasi status antarmuka saat sistem sedang memproses data karakteristik.",
  items: [],
  status: 'loading',
  pesanStatus: "Sedang memuat data karakteristik keunggulan sistem..."
};

export const errorKeunggulan: KeunggulanData = {
  title: "Karakteristik Struktural Sistem",
  intro: "Simulasi status antarmuka ketika terjadi galat pemanggilan karakteristik.",
  items: [],
  status: 'error',
  pesanStatus: "Gagal memuat karakteristik keunggulan. Silakan coba muat ulang."
};
