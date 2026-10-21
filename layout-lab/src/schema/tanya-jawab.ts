export interface TanyaJawabItem {
  question: string;
  answer: string;
}

export interface TanyaJawabData {
  title: string;
  intro?: string;
  helperText?: string;
  items: TanyaJawabItem[];
  status?: 'normal' | 'loading' | 'error' | 'empty';
  pesanStatus?: string;
}

export const standarTanyaJawab: TanyaJawabData = {
  title: "Pertanyaan yang Sering Diajukan",
  intro: "Jawaban atas pertanyaan umum seputar pemesanan, pengerjaan, dan ketentuan layanan kami.",
  helperText: "Masih memiliki pertanyaan lain? Hubungi tim kami langsung melalui kontak yang tersedia.",
  items: [
    {
      question: "Bagaimana cara memesan layanan ini?",
      answer: "Anda dapat menghubungi kami melalui formulir kontak atau WhatsApp dengan menyampaikan jenis layanan dan waktu yang diinginkan."
    },
    {
      question: "Berapa lama waktu pengerjaan yang dibutuhkan?",
      answer: "Durasi pengerjaan berkisar antara satu hingga tiga jam tergantung pada tingkat kerumitan dan kondisi di lapangan."
    },
    {
      question: "Apakah ada garansi setelah pengerjaan selesai?",
      answer: "Ya, seluruh pekerjaan dilengkapi garansi perbaikan mulai dari tujuh hingga tiga puluh hari sesuai jenis paket yang dipilih."
    },
    {
      question: "Metode pembayaran apa saja yang diterima?",
      answer: "Kami menerima pembayaran melalui transfer bank serta pembayaran tunai setelah serah terima pekerjaan selesai."
    }
  ]
};

export const pendekTanyaJawab: TanyaJawabData = {
  title: "Tanya Jawab Ringkas",
  intro: "Tiga pertanyaan pokok seputar sistem.",
  helperText: "Bantuan cepat antarmuka.",
  items: [
    {
      question: "Apa definisi utama wireframe?",
      answer: "Kerangka dasar antarmuka tanpa dekorasi visual yang berfokus pada hierarki informasi dan alur baca."
    },
    {
      question: "Mengapa animasi ditiadakan?",
      answer: "Untuk menjaga kesederhanaan dokumen serta mematuhi preferensi pengguna terhadap pengurangan gerakan."
    },
    {
      question: "Bagaimana uji responsif dijalankan?",
      answer: "Dengan melakukan verifikasi keterbacaan pada lebar kanvas 390 piksel, 768 piksel, dan 1280 piksel."
    }
  ]
};

export const panjangTanyaJawab: TanyaJawabData = {
  title: "Indeks Pertanyaan Teknis Terkait Metodologi Rekayasa Arsitektur Tata Letak dan Validasi Kepatuhan Sistem",
  intro: "Kompilasi penjelasan mendalam mengenai landasan filosofis, batasan teknis antarmuka, serta prosedur pengujian kualitas yang diterapkan di seluruh repositori laboratorium tata letak untuk menjamin integritas antarmuka.",
  helperText: "Apabila pertanyaan spesifik mengenai integrasi arsitektur sistem belum tercakup dalam dokumentasi ini, hubungi tim laboratorium tata letak melalui saluran komunikasi resmi.",
  items: [
    {
      question: "Bagaimana mekanisme penjaminan ketiadaan teks kecil pra-judul dijalankan secara otomatis?",
      answer: "Sistem memanfaatkan kombinasi skrip linter statis pada kode sumber untuk mendeteksi token terlarang serta pengujian visual dinamis menggunakan penjelajah tanpa kepala yang menghitung jarak vertikal dan irisan horizontal terhadap setiap elemen judul."
    },
    {
      question: "Mengapa setiap varian dalam satu jenis section harus berbagi skema data yang identik?",
      answer: "Pendekatan skema tunggal membuktikan bahwa variasi tata letak murni merupakan hasil rekayasa susunan CSS dan kontainer HTML, bukan akibat manipulasi data yang disesuaikan secara khusus untuk varian tertentu."
    },
    {
      question: "Bagaimana kontainer menangani teks deskripsi yang sangat panjang tanpa merusak estetika?",
      answer: "Seluruh kontainer teks dilengkapi aturan pembungkusan kata yang ketat serta perataan tinggi baris yang terukur, sehingga teks panjang akan memperluas tinggi kartu secara proporsional tanpa menyebabkan kebocoran horizontal."
    },
    {
      question: "Mengapa elemen interaktif wajib memiliki area sentuh minimal 44 kali 44 piksel?",
      answer: "Standar ukuran sentuh 44 piksel mengacu pada pedoman aksesibilitas internasional untuk memastikan tombol dan tautan dapat dioperasikan secara nyaman pada layar sentuh perangkat saku tanpa salah tekan."
    },
    {
      question: "Apa implikasi ketiadaan field opsional terhadap tata letak dan estetika ruang?",
      answer: "Setiap komponen dirancang dengan fallback kondisional yang bersih sehingga ketiadaan elemen opsional tidak meninggalkan area kosong, batas garis menggantung, atau perataan yang timpang."
    },
    {
      question: "Bagaimana cara kerja verifikasi kontras otomatis dalam skema mode terang dan gelap?",
      answer: "Seluruh variabel warna diatur melalui token terpusat pada root dokumen dengan rasio kontras yang telah diverifikasi melampaui ambang batas kepatuhan WCAG AA untuk teks normal maupun tebal."
    }
  ]
};

export const tanpaOpsionalTanyaJawab: TanyaJawabData = {
  title: "Tanya Jawab Tanpa Field Opsional",
  items: [
    {
      question: "Pertanyaan pertama tanpa pengantar?",
      answer: "Jawaban langsung untuk pertanyaan pertama tanpa pengantar atau teks bantuan."
    },
    {
      question: "Pertanyaan kedua tanpa pengantar?",
      answer: "Jawaban langsung untuk pertanyaan kedua tanpa pengantar atau teks bantuan."
    },
    {
      question: "Pertanyaan ketiga tanpa pengantar?",
      answer: "Jawaban langsung untuk pertanyaan ketiga tanpa pengantar atau teks bantuan."
    }
  ]
};

export const kosongTanyaJawab: TanyaJawabData = {
  title: "Pertanyaan yang Sering Diajukan",
  intro: "Simulasi status antarmuka ketika entri tanya jawab belum tersedia.",
  items: [],
  status: 'empty',
  pesanStatus: "Belum ada pertanyaan terdaftar dalam indeks saat ini."
};

export const loadingTanyaJawab: TanyaJawabData = {
  title: "Pertanyaan yang Sering Diajukan",
  intro: "Simulasi status antarmuka saat sistem sedang memproses indeks tanya jawab.",
  items: [],
  status: 'loading',
  pesanStatus: "Sedang memuat data tanya jawab..."
};

export const errorTanyaJawab: TanyaJawabData = {
  title: "Pertanyaan yang Sering Diajukan",
  intro: "Simulasi status antarmuka ketika terjadi galat pemanggilan data tanya jawab.",
  items: [],
  status: 'error',
  pesanStatus: "Gagal memuat indeks tanya jawab. Silakan coba muat ulang halaman."
};
