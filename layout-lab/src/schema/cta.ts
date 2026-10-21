export interface ContactItem {
  label: string;
  value: string;
}

export interface CtaData {
  title: string;
  text?: string;
  ctaLabel?: string;
  ctaUrl?: string;
  contacts?: ContactItem[];
  status?: 'normal' | 'loading' | 'error' | 'empty';
  pesanStatus?: string;
}

export const standarCta: CtaData = {
  title: "Siap Memulai Kerja Sama atau Konsultasi",
  text: "Hubungi kami hari ini untuk mendiskusikan kebutuhan layanan Anda dan mendapatkan penawaran terbaik.",
  ctaLabel: "Hubungi Kami Sekarang",
  ctaUrl: "#section-lokasi",
  contacts: [
    { label: "Telepon / WhatsApp", value: "0812-3456-7890" },
    { label: "Surat Elektronik", value: "kontak@usaha-anda.com" },
    { label: "Alamat Kantor", value: "Jalan Raya Utama No. 88, Jakarta" }
  ]
};

export const pendekCta: CtaData = {
  title: "Uji Tata Letak",
  text: "Verifikasi struktur sekarang.",
  ctaLabel: "Mulai Uji",
  ctaUrl: "/uji",
  contacts: [
    { label: "Surel", value: "info@lab.id" }
  ]
};

export const panjangCta: CtaData = {
  title: "Inisiasi Program Pemeriksaan Menyeluruh Arsitektur Antarmuka dan Standardisasi Kerangka Kerja Digital",
  text: "Hubungi tim rekayasa tata letak kami untuk menjadwalkan sesi evaluasi mendalam terhadap kepatuhan aksesibilitas, ketahanan kontainer konten ekstrem, dan optimasi efisiensi antarmuka sistem multi-perangkat.",
  ctaLabel: "Jadwalkan Konsultasi Teknis Lengkap",
  ctaUrl: "/galeri",
  contacts: [
    { label: "Departemen Audit Tata Letak", value: "audit-antarmuka@rekayasadata.co.id" },
    { label: "Saluran Telepon Langsung", value: "+62 21 8899 0011 (Ekstensi 402)" },
    { label: "Pusat Dokumentasi Sistem", value: "docs.layout-lab.internal.id/evaluasi" },
    { label: "Pusat Koordinasi Regional", value: "Lantai 15 Menara Rekayasa Jakarta" }
  ]
};

export const tanpaKontakCta: CtaData = {
  title: standarCta.title,
  text: standarCta.text,
  ctaLabel: standarCta.ctaLabel,
  ctaUrl: standarCta.ctaUrl
};

export const tanpaTeksCta: CtaData = {
  title: standarCta.title,
  ctaLabel: standarCta.ctaLabel,
  ctaUrl: standarCta.ctaUrl
};

export const kosongCta: CtaData = {
  title: "Mulai Evaluasi Struktur Wireframe",
  ctaLabel: "",
  ctaUrl: "/uji",
  status: 'empty',
  pesanStatus: "Konfigurasi tindakan konversi belum aktif untuk dataset ini."
};

export const loadingCta: CtaData = {
  title: "Mulai Evaluasi Struktur Wireframe",
  ctaLabel: "Memuat...",
  ctaUrl: "/uji",
  status: 'loading',
  pesanStatus: "Sedang menyiapkan modul tindakan konversi..."
};

export const errorCta: CtaData = {
  title: "Mulai Evaluasi Struktur Wireframe",
  ctaLabel: "Muat Ulang",
  ctaUrl: "/uji?mode=status",
  status: 'error',
  pesanStatus: "Gagal menginisiasi modul tindakan. Silakan coba muat ulang."
};
