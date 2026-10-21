export interface ProfilMetric {
  value: string;
  description: string;
}

export interface ProfilData {
  title: string;
  intro?: string;
  body: string;
  metrics?: ProfilMetric[];
  partners?: string[];
  status?: 'normal' | 'loading' | 'error' | 'empty';
  pesanStatus?: string;
}

export const standarProfil: ProfilData = {
  title: "Tentang Usaha Kami",
  intro: "Profil ringkas, dedikasi kerja, dan komitmen mutu dalam melayani pelanggan.",
  body: "Kami hadir untuk memberikan solusi layanan profesional yang mengutamakan ketepatan waktu, kualitas kerja, dan keterbukaan komunikasi. Berdiri dengan pengalaman bertahun-tahun di bidangnya, kami terus menjaga kepercayaan ratusan pelanggan melalui standar kerja yang konsisten dan pelayanan yang ramah.",
  metrics: [
    { value: "500+", description: "Pekerjaan terselesaikan" },
    { value: "98%", description: "Tingkat kepuasan pelanggan" },
    { value: "8", description: "Tahun pengalaman kerja" },
    { value: "24/7", description: "Layanan bantuan pelanggan" }
  ],
  partners: [
    "Mitra Usaha Mandiri",
    "Jaringan Layanan Terpadu",
    "Koperasi Konsumen Sejahtera",
    "Asosiasi Teknisi Profesional",
    "Komunitas Pelaku Usaha"
  ]
};

export const pendekProfil: ProfilData = {
  title: "Profil Ringkas",
  intro: "Ringkasan institusi.",
  body: "Pusat verifikasi struktur antarmuka web monokrom.",
  metrics: [
    { value: "43", description: "Varian aktif" },
    { value: "100%", description: "Kepatuhan standar" }
  ],
  partners: [
    "Mitra Riset Satu",
    "Mitra Riset Dua",
    "Mitra Riset Tiga"
  ]
};

export const panjangProfil: ProfilData = {
  title: "Arsitektur Institusional dan Pernyataan Misi Komprehensif Laboratorium Standardisasi Antarmuka Web",
  intro: "Manifesto formal mengenai prinsip perancangan antarmuka berkelanjutan, dedikasi terhadap keterbacaan murni, serta metodologi eliminasi ornamen dekoratif visual pada seluruh spektrum produk digital modern.",
  body: "Laboratorium ini beroperasi sebagai pusat pengujian independen yang mendedikasikan seluruh kapasitas rekayasa untuk mengevaluasi ketahanan tata letak web modern. Kami meyakini bahwa antarmuka pengguna terbaik adalah yang tidak mengaburkan substansi informasi dengan dekorasi visual berlebihan. Melalui pendekatan ilmiah yang ketat, setiap komponen diuji pada berbagai skenario beban data ekstrem, dari teks sangat ringkas hingga paragraf teknis yang panjang, guna memastikan keterbacaan optimal pada seluruh ukuran layar tanpa adanya kebocoran tata letak horizontal.",
  metrics: [
    { value: "43", description: "Varian tata letak terverifikasi secara visual dan otomatis" },
    { value: "13", description: "Kategori modul antarmuka mandiri tanpa ketergantungan silang" },
    { value: "100%", description: "Kepatuhan penuh standar aksesibilitas kontras internasional" },
    { value: "0", description: "Insiden teks kecil pra-judul terdeteksi pada seluruh kode sumber" }
  ],
  partners: [
    "Laboratorium Arsitektur Sistem Informasi",
    "Konsorsium Standar Aksesibilitas Terbuka",
    "Pusat Riset Pengalaman Pengguna Modern",
    "Aliansi Perekayasa Antarmuka Mandiri",
    "Institut Validasi Perangkat Lunak Web",
    "Asosiasi Standarisasi Tipografi Sistem"
  ]
};

export const tanpaOpsionalProfil: ProfilData = {
  title: "Profil Tanpa Field Opsional",
  body: "Penjelasan profil inti tanpa metadata tambahan untuk memvalidasi bahwa kontainer tetap tertata rapi dan proporsional saat seluruh atribut opsional ditiadakan dari skema data."
};

export const kosongProfil: ProfilData = {
  title: "Profil Laboratorium Tata Letak",
  intro: "Simulasi status antarmuka ketika entri profil belum tersedia.",
  body: "Belum ada konten profil yang dikonfigurasikan saat ini.",
  status: 'empty',
  pesanStatus: "Belum ada data profil yang terdaftar."
};

export const loadingProfil: ProfilData = {
  title: "Profil Laboratorium Tata Letak",
  intro: "Simulasi status antarmuka saat sistem sedang memproses profil.",
  body: "Memuat...",
  status: 'loading',
  pesanStatus: "Sedang memuat data profil sistem..."
};

export const errorProfil: ProfilData = {
  title: "Profil Laboratorium Tata Letak",
  intro: "Simulasi status antarmuka ketika terjadi galat pengambilan profil.",
  body: "Galat.",
  status: 'error',
  pesanStatus: "Gagal memuat profil sistem. Silakan coba muat ulang halaman."
};
