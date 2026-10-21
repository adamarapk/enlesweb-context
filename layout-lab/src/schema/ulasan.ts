export interface UlasanItem {
  quote: string;
  author: string;
  context?: string;
}

export interface UlasanData {
  title: string;
  intro?: string;
  summaryNote?: string;
  items: UlasanItem[];
  status?: 'normal' | 'loading' | 'error' | 'empty';
  pesanStatus?: string;
}

export const standarUlasan: UlasanData = {
  title: "Ulasan Pelanggan",
  intro: "Pengalaman langsung dari pelanggan yang telah menggunakan jasa dan layanan kami.",
  summaryNote: "Berdasarkan evaluasi kepuasan pelanggan terverifikasi.",
  items: [
    {
      quote: "Pengerjaan tepat waktu dan komunikasinya sangat jelas sejak awal konsultasi hingga serah terima.",
      author: "Budi Santoso",
      context: "Pelanggan Rumah Tangga"
    },
    {
      quote: "Staf bekerja dengan rapi dan teliti. Hasil pekerjaan sesuai dengan kebutuhan operasional kami.",
      author: "Siti Rahma",
      context: "Pengelola Usaha Kuliner"
    },
    {
      quote: "Biaya transparan tanpa ada tagihan tersembunyi. Sangat puas dengan kecepatan tanggap tim.",
      author: "Ahmad Fauzi",
      context: "Pemilik Kantor Ruko"
    },
    {
      quote: "Jadwal fleksibel dan pengerjaan selesai lebih cepat dari perkiraan semula. Sangat direkomendasikan.",
      author: "Dewi Lestari",
      context: "Pelanggan Layanan Berkala"
    }
  ]
};

export const pendekUlasan: UlasanData = {
  title: "Ulasan Ringkas",
  intro: "Tiga evaluasi terpilih.",
  summaryNote: "Ringkasan audit.",
  items: [
    {
      quote: "Tata letak sangat terstruktur dan mudah diuji.",
      author: "Rian Hidayat",
      context: "Pengembang"
    },
    {
      quote: "Kepatuhan kontras terpenuhi dengan sempurna.",
      author: "Maya Indah",
      context: "Auditor"
    },
    {
      quote: "Alur baca mengalir alami tanpa distraksi visual.",
      author: "Doni Prasetya",
      context: "Perancang"
    }
  ]
};

export const panjangUlasan: UlasanData = {
  title: "Kompilasi Ulasan dan Catatan Evaluasi Komprehensif Terhadap Kepatuhan Standar Wireframe Monokrom",
  intro: "Koleksi testimoni teknis mendalam dari para praktisi arsitektur web mengenai efektivitas penerapan sistem tanpa ornamen visual, konsistensi token CSS di seluruh komponen, serta ketahanan responsif kontainer pada resolusi ekstrem.",
  summaryNote: "Evaluasi formal berbasis pengujian kepatuhan WCAG AA dan verifikasi nol limpahan horizontal pada 43 varian tata letak.",
  items: [
    {
      quote: "Pendekatan tanpa teks kecil pra-judul memaksa setiap judul utama membawa bobot semantik yang jelas dan tegas, sehingga pengguna dapat memindai isi halaman secara cepat dan akurat.",
      author: "Dr. Hendra Gunawan",
      context: "Kepala Laboratorium Interaksi Manusia dan Komputer"
    },
    {
      quote: "Ketegasan dalam membatasi warna hanya pada hitam, putih, dan abu-abu memungkinkan evaluasi hierarki ruang dilakukan secara objektif tanpa terdistraksi preferensi visual subjektif.",
      author: "Ratna Kusuma Wardani",
      context: "Arsitek Sistem Informasi Perusahaan"
    },
    {
      quote: "Implementasi token variabel CSS yang disiplin pada seluruh kontainer menjamin kemudahan audit kepatuhan kontras serta penyetelan tema secara instan tanpa regresi visual.",
      author: "Fajar Nugroho",
      context: "Koordinator Tim Rekayasa Antarmuka"
    },
    {
      quote: "Penataan urutan elemen yang selalu mendahulukan isi kutipan sebelum nama penulis memastikan informasi esensial tersampaikan lebih dahulu kepada pembaca.",
      author: "Anisa Putri Wulandari",
      context: "Spesialis Riset Pengalaman Pengguna"
    },
    {
      quote: "Perilaku grid yang bertransisi rapi dari satu kolom di perangkat saku 390px menuju multi-kolom di desktop 1280px membuktikan kekuatan arsitektur mobile-first.",
      author: "Bambang Tri Atmojo",
      context: "Perekayasa Perangkat Lunak Utama"
    },
    {
      quote: "Laboratorium pengujian dengan variasi data ekstrem ini menetapkan standar baru dalam verifikasi ketahanan komponen antarmuka web modern.",
      author: "Clara Salsabila",
      context: "Konsultan Kualitas dan Aksesibilitas Web"
    }
  ]
};

export const tanpaOpsionalUlasan: UlasanData = {
  title: "Ulasan Tanpa Field Opsional",
  items: [
    {
      quote: "Struktur tata letak sangat solid dan terukur dalam setiap kondisi.",
      author: "Pengulas Satu"
    },
    {
      quote: "Perataan elemen terjaga dengan rapi tanpa adanya ketimpangan ruang.",
      author: "Pengulas Dua"
    },
    {
      quote: "Hierarki informasi jelas dan mudah dipahami tanpa gangguan dekorasi.",
      author: "Pengulas Tiga"
    }
  ]
};

export const kosongUlasan: UlasanData = {
  title: "Ulasan dan Catatan Evaluasi",
  intro: "Simulasi status antarmuka ketika basis data belum memiliki entri ulasan.",
  items: [],
  status: 'empty',
  pesanStatus: "Belum ada entri ulasan yang terdaftar saat ini."
};

export const loadingUlasan: UlasanData = {
  title: "Ulasan dan Catatan Evaluasi",
  intro: "Simulasi status antarmuka saat sistem sedang memproses dan mengambil data ulasan.",
  items: [],
  status: 'loading',
  pesanStatus: "Sedang memuat data ulasan pengguna..."
};

export const errorUlasan: UlasanData = {
  title: "Ulasan dan Catatan Evaluasi",
  intro: "Simulasi status antarmuka ketika terjadi kegagalan pemanggilan data ulasan.",
  items: [],
  status: 'error',
  pesanStatus: "Gagal mengambil data ulasan. Silakan coba muat ulang halaman."
};
