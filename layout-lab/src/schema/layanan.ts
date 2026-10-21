export interface LayananItem {
  nama: string;
  deskripsi: string;
  harga: string;
  utama?: boolean;
  visual?: {
    label: string;
  };
}

export interface LayananData {
  judul: string;
  subjudul: string;
  daftar: LayananItem[];
  status?: 'normal' | 'loading' | 'error';
  pesanStatus?: string;
}

export const standarLayanan: LayananData = {
  judul: "Daftar Layanan Utama",
  subjudul: "Ragam solusi profesional yang disesuaikan dengan kebutuhan pelanggan secara terencana.",
  daftar: [
    {
      nama: "Layanan Pertama",
      deskripsi: "Pemeriksaan dan konsultasi awal untuk menentukan ruang lingkup pekerjaan yang diperlukan secara tepat.",
      harga: "Mulai Rp 250.000",
      visual: { label: "Visual Layanan Pertama" }
    },
    {
      nama: "Layanan Kedua",
      deskripsi: "Pengerjaan menyeluruh dengan peralatan standar dan tenaga terlatih untuk hasil kerja optimal.",
      harga: "Mulai Rp 750.000",
      utama: true,
      visual: { label: "Visual Layanan Kedua" }
    },
    {
      nama: "Layanan Ketiga",
      deskripsi: "Paket perawatan berkala untuk menjaga keandalan dan kenyamanan jangka panjang bagi usaha Anda.",
      harga: "Mulai Rp 1.500.000",
      visual: { label: "Visual Layanan Ketiga" }
    }
  ]
};

export const pendekLayanan: LayananData = {
  judul: "Layanan",
  subjudul: "Format data ringkas.",
  daftar: [
    {
      nama: "Audit Ruang",
      deskripsi: "Pemeriksaan proporsi.",
      harga: "Rp 500.000",
      visual: { label: "Visual" }
    }
  ]
};

export const panjangLayanan: LayananData = {
  judul: "Katalog Komprehensif Modul Rekayasa Tata Letak dan Pengujian Antarmuka Pengguna Berkelanjutan",
  subjudul: "Deskripsi bagian layanan ini sengaja diperluas dengan variasi teks teknis yang panjang guna menguji ketahanan pembungkusan kata, batas ketinggian kartu, dan keselarasan baris data tabel pada semua resolusi layar pengujian.",
  daftar: [
    {
      nama: "Analisis Mendalam Struktur Kisi CSS dan Fleksibilitas Kontainer Responsif",
      deskripsi: "Pemeriksaan komprehensif terhadap seluruh aturan pembagian kolom, penanganan konten dinamis meluap, serta verifikasi konsistensi jarak antar-elemen di berbagai perangkat.",
      harga: "Rp 4.750.000 per evaluasi modul sistem",
      visual: { label: "Visual Mod-Ext-01 Spesifikasi Teknis" }
    },
    {
      nama: "Implementasi Arsitektur Wireframe Monokrom Skala Besar",
      deskripsi: "Konstruksi menyeluruh sistem antarmuka tanpa dekorasi visual tambahan untuk memastikan hierarki informasi telah terverifikasi secara objektif sebelum perancangan visual tahap akhir.",
      harga: "Rp 8.500.000 per implementasi paket penuh",
      utama: true,
      visual: { label: "Visual Mod-Ext-02 Struktur Inti" }
    },
    {
      nama: "Verifikasi Aksesibilitas Keyboard dan Kepatuhan Standar Kontras Internasional",
      deskripsi: "Validasi menyeluruh terhadap urutan fokus tabulasi, keterbacaan teks menurut pedoman WCAG AA, dan eliminasi seluruh jebakan fokus pada elemen navigasi bertingkat.",
      harga: "Rp 3.900.000 per audit kepatuhan",
      visual: { label: "Visual Mod-Ext-03 Laporan Audit" }
    }
  ]
};

export const tanpaGambarLayanan: LayananData = {
  judul: standarLayanan.judul,
  subjudul: standarLayanan.subjudul,
  daftar: standarLayanan.daftar.map((item) => ({
    ...item,
    visual: undefined
  }))
};

export const kosongLayanan: LayananData = {
  judul: "Struktur Layanan dan Modul",
  subjudul: "Simulasi status antarmuka ketika basis data belum memiliki entri modul layanan.",
  daftar: [],
  status: 'normal',
  pesanStatus: "Belum ada modul layanan yang terdaftar saat ini."
};

export const loadingLayanan: LayananData = {
  judul: "Struktur Layanan dan Modul",
  subjudul: "Simulasi status antarmuka saat sistem sedang memproses dan mengambil data.",
  daftar: [],
  status: 'loading',
  pesanStatus: "Sedang memuat data modul layanan dari repositori..."
};

export const errorLayanan: LayananData = {
  judul: "Struktur Layanan dan Modul",
  subjudul: "Simulasi status antarmuka ketika terjadi kegagalan pemanggilan data.",
  daftar: [],
  status: 'error',
  pesanStatus: "Gagal mengambil data modul layanan. Silakan coba muat ulang halaman."
};

