export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  judul: string;
  tautan: FooterLink[];
}

export interface FooterData {
  brand: string;
  deskripsi: string;
  kolom: FooterColumn[];
  ctaBesar: {
    judul: string;
    subjudul: string;
    labelTombol: string;
    href: string;
  };
  legal: {
    hakCipta: string;
    tautan: FooterLink[];
  };
}

export const standarFooter: FooterData = {
  brand: "Nama Usaha",
  deskripsi: "Penyedia layanan terpercaya dengan komitmen mutu, ketepatan waktu, dan kepuasan pelanggan.",
  kolom: [
    {
      judul: "Layanan",
      tautan: [
        { label: "Layanan Utama", href: "#section-layanan" },
        { label: "Pilihan Paket", href: "#section-biaya" },
        { label: "Dokumentasi", href: "#section-galeri" }
      ]
    },
    {
      judul: "Tentang Kami",
      tautan: [
        { label: "Profil Usaha", href: "#section-profil" },
        { label: "Keunggulan", href: "#section-keunggulan" },
        { label: "Ulasan Pelanggan", href: "#section-ulasan" }
      ]
    },
    {
      judul: "Bantuan",
      tautan: [
        { label: "Tahapan Kerja", href: "#section-langkah" },
        { label: "Tanya Jawab", href: "#section-tanya-jawab" },
        { label: "Lokasi Kantor", href: "#section-lokasi" }
      ]
    },
    {
      judul: "Kontak",
      tautan: [
        { label: "Konsultasi Layanan", href: "#section-cta" },
        { label: "Alamat dan Jam", href: "#section-lokasi" },
        { label: "Kembali ke Atas", href: "#section-navbar" }
      ]
    }
  ],
  ctaBesar: {
    judul: "Siap Menggunakan Layanan Kami?",
    subjudul: "Hubungi tim kami untuk konsultasi dan jadwal pengerjaan sesuai kebutuhan Anda.",
    labelTombol: "Hubungi Kami",
    href: "#section-cta"
  },
  legal: {
    hakCipta: "© 2026 Nama Usaha. Hak Cipta Dilindungi.",
    tautan: [
      { label: "Ketentuan Layanan", href: "#section-navbar" },
      { label: "Kebijakan Privasi", href: "#section-navbar" }
    ]
  }
};

export const pendekFooter: FooterData = {
  brand: "LAB",
  deskripsi: "Evaluasi wireframe.",
  kolom: [
    {
      judul: "Menu",
      tautan: [
        { label: "Galeri", href: "/galeri" },
        { label: "Uji", href: "/uji" }
      ]
    },
    {
      judul: "Tautan",
      tautan: [
        { label: "Beranda", href: "/" }
      ]
    },
    {
      judul: "Info",
      tautan: [
        { label: "Awal", href: "/#section-navbar" }
      ]
    },
    {
      judul: "Kontak",
      tautan: [
        { label: "Legal", href: "/legal" }
      ]
    }
  ],
  ctaBesar: {
    judul: "Evaluasi Tata Letak",
    subjudul: "Mulai pengujian.",
    labelTombol: "Buka Galeri",
    href: "/galeri"
  },
  legal: {
    hakCipta: "© 2026 LAB.",
    tautan: [
      { label: "Ketentuan", href: "/legal#ketentuan" }
    ]
  }
};

export const panjangFooter: FooterData = {
  brand: "LABORATORIUM EKSPERIMEN TATA LETAK DAN PENGUJIAN ANTARMUKA STATIS INDONESIA",
  deskripsi: "Repositori laboratorium riset arsitektur antarmuka digital yang didedikasikan untuk memastikan keteraturan proporsi ruang, distribusi bobot visual, dan kepatuhan aksesibilitas secara konsisten pada setiap tingkatan perangkat lunak web.",
  kolom: [
    {
      judul: "Spesifikasi dan Arsitektur Inti",
      tautan: [
        { label: "Dokumentasi Lengkap Variabel CSS Root", href: "/#section-navbar" },
        { label: "Protokol Kontras Warna Monokrom Standar", href: "/#section-hero" },
        { label: "Panduan Implementasi Grid Fleksibel", href: "/galeri" }
      ]
    },
    {
      judul: "Indeks Komponen Section",
      tautan: [
        { label: "Varian Navigasi Atas Responsif", href: "/#section-navbar" },
        { label: "Varian Komposisi Hero dan Banner", href: "/#section-hero" },
        { label: "Varian Katalog Layanan Modular", href: "/#section-layanan" },
        { label: "Varian Kaki Halaman Struktural", href: "/#section-footer" }
      ]
    },
    {
      judul: "Kepatuhan dan Standar Kualitas",
      tautan: [
        { label: "Audit Keterbacaan dan Kontras Minimum", href: "/uji" },
        { label: "Verifikasi Dimensi Target Sentuh 44 Pixel", href: "/galeri" },
        { label: "Pemeriksaan Jebakan Tabulasi Keyboard", href: "/uji" }
      ]
    },
    {
      judul: "Tautan Lingkungan Pengujian",
      tautan: [
        { label: "Navigasi Langsung Galeri Perbandingan", href: "/galeri" },
        { label: "Laboratorium Pengujian Data Ekstrem", href: "/uji" },
        { label: "Indeks Direktori Proyek Utama", href: "/" }
      ]
    }
  ],
  ctaBesar: {
    judul: "Integrasikan Standar Tata Letak yang Telah Tervalidasi ke Dalam Alur Kerja Anda",
    subjudul: "Pastikan seluruh elemen antarmuka memiliki alasan fungsional yang kuat dan teruji pada skenario data riil sebelum melangkah ke tahap perancangan visual berdekorasi penuh.",
    labelTombol: "Buka Halaman Galeri Lengkap Sekarang",
    href: "/galeri"
  },
  legal: {
    hakCipta: "© 2026 Laboratorium Eksperimen Tata Letak dan Pengujian Antarmuka Statis. Hak cipta dilindungi undang-undang di seluruh yurisdiksi yang berlaku.",
    tautan: [
      { label: "Pernyataan Kepatuhan Aksesibilitas Digital", href: "/legal#aksesibilitas" },
      { label: "Ketentuan Penggunaan Repositori dan Lisensi", href: "/legal#ketentuan" },
      { label: "Pedoman Pemrosesan Data dan Privasi Pengguna", href: "/legal#privasi" }
    ]
  }
};

export const tanpaGambarFooter: FooterData = {
  ...standarFooter
};

export const kosongFooter: FooterData = {
  brand: "LAB KOSONG",
  deskripsi: "Contoh status footer tanpa daftar kolom.",
  kolom: [],
  ctaBesar: {
    judul: "Laboratorium Selesai",
    subjudul: "Kembali ke beranda untuk memilih varian lain.",
    labelTombol: "Kembali ke Beranda",
    href: "/"
  },
  legal: {
    hakCipta: "© 2026 LAB.",
    tautan: [
      { label: "Legal", href: "/legal" }
    ]
  }
};

