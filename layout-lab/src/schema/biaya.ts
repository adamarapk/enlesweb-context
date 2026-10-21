export interface BiayaItem {
  title: string;
  price: string;
  unit?: string;
  description?: string;
  features: string[];
  ctaText: string;
  ctaHref?: string;
}

export interface BiayaData {
  title: string;
  intro?: string;
  items: BiayaItem[];
  status?: 'normal' | 'loading' | 'error' | 'empty';
  pesanStatus?: string;
}

export const standarBiaya: BiayaData = {
  title: "Pilihan Paket dan Estimasi Biaya",
  intro: "Pilihan paket transparan yang disesuaikan dengan skala kebutuhan dan anggaran Anda.",
  items: [
    {
      title: "Paket Dasar",
      price: "Rp 350.000",
      unit: "/ kedatangan",
      description: "Pilihan tepat untuk pemeriksaan cepat dan perbaikan ringan satu titik masalah.",
      features: [
        "Pemeriksaan satu unit masalah",
        "Estimasi waktu pengerjaan satu jam",
        "Laporan kondisi sederhana",
        "Garansi layanan tujuh hari"
      ],
      ctaText: "Pilih Paket Dasar",
      ctaHref: "#section-cta"
    },
    {
      title: "Paket Standar",
      price: "Rp 750.000",
      unit: "/ kedatangan",
      description: "Paket terlengkap untuk pengerjaan menyeluruh dengan komponen cadangan standar.",
      features: [
        "Pemeriksaan hingga tiga titik masalah",
        "Pembersihan dan kalibrasi peralatan",
        "Penggantian komponen aus standar",
        "Garansi layanan tiga puluh hari"
      ],
      ctaText: "Pilih Paket Standar",
      ctaHref: "#section-cta"
    },
    {
      title: "Paket Lengkap",
      price: "Rp 1.500.000",
      unit: "/ paket berkala",
      description: "Layanan komprehensif mencakup kunjungan berkala dan prioritas penanganan darurat.",
      features: [
        "Kunjungan terencana tiga kali per bulan",
        "Waktu tanggap prioritas di bawah satu jam",
        "Pemeriksaan menyeluruh seluruh sistem",
        "Garansi penuh selama masa kontrak"
      ],
      ctaText: "Pilih Paket Lengkap",
      ctaHref: "#section-cta"
    }
  ]
};

export const pendekBiaya: BiayaData = {
  title: "Biaya Ringkas",
  intro: "Dua pilihan utama investasi sistem.",
  items: [
    {
      title: "Paket Ringkas A",
      price: "Rp 1.000.000",
      unit: "/ modul",
      description: "Audit cepat tata letak dasar.",
      features: [
        "Audit modul inti",
        "Laporan ringkas"
      ],
      ctaText: "Pilih Paket A"
    },
    {
      title: "Paket Ringkas B",
      price: "Rp 2.000.000",
      unit: "/ modul",
      description: "Implementasi modul siap pakai.",
      features: [
        "Implementasi modul",
        "Laporan lengkap"
      ],
      ctaText: "Pilih Paket B"
    }
  ]
};

export const panjangBiaya: BiayaData = {
  title: "Struktur Anggaran Komprehensif dan Alokasi Investasi Rekayasa Tata Letak Antarmuka Pengguna",
  intro: "Rincian menyeluruh skema pendanaan untuk seluruh rangkaian pengujian arsitektur antarmuka, verifikasi resiliensi kontainer pada beban data ekstrem, serta sertifikasi kepatuhan visual bebas ornamen dekoratif.",
  items: [
    {
      title: "Paket Fondasi Arsitektur Antarmuka Sistem",
      price: "Rp 3.500.000",
      unit: "/ modul perancangan",
      description: "Pondasi awal untuk memastikan perataan elemen dan hierarki informasi dibangun dengan benar.",
      features: [
        "Pemetaan struktur kontainer awal",
        "Verifikasi perataan horizontal 1280px",
        "Pengujian alur baca mobile 390px",
        "Eliminasi total teks kecil pra-judul",
        "Standarisasi token variabel CSS di root",
        "Dokumentasi spesifikasi teknis dasar"
      ],
      ctaText: "Mulai Fondasi Sistem"
    },
    {
      title: "Paket Konstruksi Komponen dan Modul Dinamis",
      price: "Rp 7.000.000",
      unit: "/ paket pengembangan",
      description: "Pembangunan seluruh komponen struktural dengan kepatuhan skema data tunggal per section.",
      features: [
        "Implementasi 13 kategori section lengkap",
        "Penyelarasan 43 varian tata letak unik",
        "Validasi fallback data tanpa field opsional",
        "Pengujian ketahanan teks deskripsi panjang",
        "Verifikasi target sentuh minimal 44 piksel",
        "Pemeriksaan nol limpahan konten horizontal"
      ],
      ctaText: "Mulai Konstruksi Modul"
    },
    {
      title: "Paket Audit Kepatuhan Aksesibilitas dan Otomasi",
      price: "Rp 12.000.000",
      unit: "/ siklus sertifikasi",
      description: "Pengujian otomatis mendalam menggunakan penjelajah visual tanpa kepala dan skrip pemeriksa statis.",
      features: [
        "Otomasi visual Playwright pada dua viewport",
        "Pemeriksaan nol ornamen terlarang pada kode",
        "Verifikasi rasio kontras teks standar WCAG",
        "Pengujian navigasi papan ketik bebas jebakan",
        "Perekaman arsip tangkapan layar otomatis",
        "Penerbitan sertifikat kepatuhan tata letak"
      ],
      ctaText: "Mulai Audit Otomatis"
    },
    {
      title: "Paket Pendampingan Arsitektur Skala Perusahaan",
      price: "Rp 18.500.000",
      unit: "/ tahun kemitraan",
      description: "Layanan konsultasi berkelanjutan untuk menjamin konsistensi antarmuka pada skala multi-repositori.",
      features: [
        "Audit berkala rilis varian antarmuka baru",
        "Konsultasi perancangan skema data TypeScript",
        "Penyempurnaan performa muat dokumen statis",
        "Pengujian ketahanan terhadap skenario ekstrem",
        "Akses prioritas konsultasi arsitektur",
        "Pembaruan berkala pustaka wireframe lab"
      ],
      ctaText: "Mulai Kemitraan Penuh"
    }
  ]
};

export const tanpaOpsionalBiaya: BiayaData = {
  title: "Biaya Tanpa Field Opsional",
  items: [
    {
      title: "Paket Esensial",
      price: "Rp 1.500.000",
      features: ["Fitur Utama Sistem", "Verifikasi Standar"],
      ctaText: "Pilih Paket"
    },
    {
      title: "Paket Lanjutan",
      price: "Rp 3.000.000",
      features: ["Fitur Utama Sistem", "Verifikasi Lengkap"],
      ctaText: "Pilih Paket"
    }
  ]
};

export const kosongBiaya: BiayaData = {
  title: "Pilihan Skema Biaya",
  intro: "Simulasi status antarmuka ketika paket biaya belum tersedia.",
  items: [],
  status: 'empty',
  pesanStatus: "Belum ada paket biaya yang dikonfigurasikan saat ini."
};

export const loadingBiaya: BiayaData = {
  title: "Pilihan Skema Biaya",
  intro: "Simulasi status antarmuka saat sistem sedang memproses paket biaya.",
  items: [],
  status: 'loading',
  pesanStatus: "Sedang memuat data paket biaya..."
};

export const errorBiaya: BiayaData = {
  title: "Pilihan Skema Biaya",
  intro: "Simulasi status antarmuka ketika terjadi galat pengambilan data biaya.",
  items: [],
  status: 'error',
  pesanStatus: "Gagal memuat paket biaya. Silakan coba muat ulang halaman."
};
