export interface NavItem {
  label: string;
  href: string;
}

export interface NavbarData {
  brand: {
    nama: string;
    subjudul?: string;
    href?: string;
  };
  menu: NavItem[];
  cta: {
    label: string;
    href: string;
  };
  kontakJam?: {
    kontak: string;
    jam: string;
  };
}

export const standarNavbar: NavbarData = {
  brand: {
    nama: "Nama Usaha",
    subjudul: "Slogan atau bidang layanan utama",
    href: "#section-navbar"
  },
  menu: [
    { label: "Layanan", href: "#section-layanan" },
    { label: "Keunggulan", href: "#section-keunggulan" },
    { label: "Tahapan", href: "#section-langkah" },
    { label: "Ulasan", href: "#section-ulasan" },
    { label: "Lokasi", href: "#section-lokasi" }
  ],
  cta: {
    label: "Hubungi Kami",
    href: "#section-cta"
  },
  kontakJam: {
    kontak: "Telepon: 0812-3456-7890",
    jam: "Senin sampai Jumat: 08.00 sampai 17.00"
  }
};

export const pendekNavbar: NavbarData = {
  brand: {
    nama: "LAB"
  },
  menu: [
    { label: "Awal", href: "/#section-navbar" },
    { label: "Akhir", href: "/#section-footer" }
  ],
  cta: {
    label: "Uji",
    href: "/uji"
  },
  kontakJam: {
    kontak: "0812-0000",
    jam: "09.00-17.00"
  }
};

export const panjangNavbar: NavbarData = {
  brand: {
    nama: "LABORATORIUM EKSPERIMEN TATA LETAK SECTION TINGKAT LANJUT",
    subjudul: "PENGUJIAN KETAHANAN DATA PADA BERBAGAI RESOLUSI LAYAR SECARA SISTEMATIS"
  },
  menu: [
    { label: "Spesifikasi Navbar Utama", href: "/#section-navbar" },
    { label: "Komposisi Hero Latar Penuh", href: "/#section-hero" },
    { label: "Katalog Struktur Layanan", href: "/#section-layanan" },
    { label: "Penutup Halaman Empat Kolom", href: "/#section-footer" }
  ],
  cta: {
    label: "Jalankan Pengujian Menyeluruh",
    href: "/uji"
  },
  kontakJam: {
    kontak: "layanan-bantuan@lab-tata-letak.internal.id",
    jam: "operasional penuh: senin hingga jumat pukul 08.00 sampai 17.00 wib"
  }
};

export const tanpaGambarNavbar: NavbarData = {
  ...standarNavbar
};

export const kosongNavbar: NavbarData = {
  brand: {
    nama: "LAB KOSONG"
  },
  menu: [],
  cta: {
    label: "Beranda",
    href: "/"
  }
};

