export interface HeroData {
  judul: string;
  subjudul: string;
  ctaUtama: {
    label: string;
    href: string;
  };
  ctaSekunder?: {
    label: string;
    href: string;
  };
  visual?: {
    label: string;
    rasio?: string;
  };
  kartuInfo: {
    label: string;
    nilai: string;
  }[];
}

export const standarHero: HeroData = {
  judul: "Judul Utama Penawaran Usaha Anda",
  subjudul: "Penjelasan singkat mengenai layanan atau produk utama yang membantu menyelesaikan kebutuhan pelanggan secara jelas dan terukur.",
  ctaUtama: {
    label: "Lihat Layanan",
    href: "#section-layanan"
  },
  ctaSekunder: {
    label: "Hubungi Kami",
    href: "#section-cta"
  },
  visual: {
    label: "Visual 640x360",
    rasio: "16/9"
  },
  kartuInfo: [
    { label: "Jam Operasional", nilai: "08.00 sampai 17.00" },
    { label: "Area Layanan", nilai: "Wilayah Kota dan Sekitarnya" },
    { label: "Waktu Respons", nilai: "Kurang dari Tiga Puluh Menit" }
  ]
};

export const pendekHero: HeroData = {
  judul: "Lab Tata Letak",
  subjudul: "Pengujian wireframe monokrom.",
  ctaUtama: {
    label: "Galeri",
    href: "/galeri"
  },
  visual: {
    label: "Visual",
    rasio: "16/9"
  },
  kartuInfo: [
    { label: "Status", nilai: "Aktif" }
  ]
};

export const panjangHero: HeroData = {
  judul: "Laboratorium Evaluasi Komposisi Spasial dan Kerapatan Tipografi Antarmuka Web",
  subjudul: "Teks deskripsi ini sengaja dibuat sangat panjang untuk memverifikasi bahwa kontainer fleksibel dan kisi css tidak mengalami kebocoran horizontal atau pemotongan kata yang tidak wajar pada viewport sempit maupun lebar.",
  ctaUtama: {
    label: "Buka Halaman Galeri Lengkap",
    href: "/galeri"
  },
  ctaSekunder: {
    label: "Beralih Menuju Halaman Uji Ketahanan",
    href: "/uji"
  },
  visual: {
    label: "Visual Arsitektur Struktural 1920x1080",
    rasio: "16/9"
  },
  kartuInfo: [
    { label: "Parameter Breakpoint Utama", nilai: "768px dan 1024px dengan pengujian pada 390px dan 1280px" },
    { label: "Kepatuhan Aksesibilitas", nilai: "Kontras WCAG AA di atas 4.5 banding 1 dan fokus keyboard aktif" },
    { label: "Skema Pengujian", nilai: "Dataset pendek, panjang, dan tanpa gambar diuji simultan" }
  ]
};

export const tanpaGambarHero: HeroData = {
  ...standarHero,
  visual: undefined
};

export const kosongHero: HeroData = {
  judul: "Laboratorium Arsitektur",
  subjudul: "Kondisi tanpa kartu info spesifikasi.",
  ctaUtama: {
    label: "Buka Galeri",
    href: "/galeri"
  },
  kartuInfo: []
};

