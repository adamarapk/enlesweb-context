export interface OpeningHourItem {
  days: string;
  hours: string;
}

export interface LokasiData {
  title: string;
  address: string;
  city: string;
  openingHours: OpeningHourItem[];
  mapsUrl: string;
  landmarkNote?: string;
  status?: 'normal' | 'loading' | 'error' | 'empty';
  pesanStatus?: string;
}

export const standarLokasi: LokasiData = {
  title: "Lokasi dan Jam Operasional",
  address: "Jalan Raya Utama No. 88, Ruko Permai Blok C",
  city: "Kecamatan Sukamaju, Kota Jakarta",
  openingHours: [
    { days: "Senin sampai Jumat", hours: "08.00 sampai 17.00 WIB" },
    { days: "Sabtu", hours: "08.00 sampai 14.00 WIB" },
    { days: "Minggu dan Hari Libur", hours: "Tutup (Hanya Layanan Darurat)" }
  ],
  mapsUrl: "#section-lokasi",
  landmarkNote: "Berada di seberang SPBU utama, deretan ruko sebelah timur."
};

export const pendekLokasi: LokasiData = {
  title: "Lokasi",
  address: "Jalan Studio No. 5",
  city: "Bandung",
  openingHours: [
    { days: "Setiap Hari", hours: "09.00 - 17.00 WIB" }
  ],
  mapsUrl: "https://maps.google.com/?q=Studio+Lab",
  landmarkNote: "Lantai 2 sayap barat."
};

export const panjangLokasi: LokasiData = {
  title: "Fasilitas Laboratorium Pengujian Tata Letak Wilayah Khusus Ibukota dan Pusat Pengendalian Sistem Terintegrasi",
  address: "Kawasan Pusat Riset Rekayasa Perangkat Lunak Gedung Graha Informatika Menara Tiga Lantai Dua Belas, Koridor Selatan Sayap Kanan, Jalan Jenderal Gatot Subroto Kavling Sembilan Puluh Delapan",
  city: "Daerah Khusus Ibukota Jakarta Kode Pos 12930, Republik Indonesia",
  openingHours: [
    { days: "Senin", hours: "08.00 - 20.00 WIB" },
    { days: "Selasa", hours: "08.00 - 20.00 WIB" },
    { days: "Rabu", hours: "08.00 - 20.00 WIB" },
    { days: "Kamis", hours: "08.00 - 20.00 WIB" },
    { days: "Jumat", hours: "08.00 - 20.00 WIB" },
    { days: "Sabtu", hours: "09.00 - 17.00 WIB" },
    { days: "Minggu dan Libur Nasional", hours: "09.00 - 14.00 WIB (Hanya Penjadwalan Khusus)" }
  ],
  mapsUrl: "https://maps.google.com/?q=Kawasan+Pusat+Riset+Rekayasa",
  landmarkNote: "Akses lift transit langsung dari lobi selatan dengan penanda kartu pengenal teknis arsitektur di meja resepsionis lantai dasar."
};

export const tanpaLandmarkLokasi: LokasiData = {
  title: standarLokasi.title,
  address: standarLokasi.address,
  city: standarLokasi.city,
  openingHours: standarLokasi.openingHours,
  mapsUrl: standarLokasi.mapsUrl
};

export const kosongLokasi: LokasiData = {
  title: "Pusat Operasional dan Jadwal",
  address: "",
  city: "",
  openingHours: [],
  mapsUrl: "https://maps.google.com/?q=Pusat+Operasional+Lab",
  status: 'empty',
  pesanStatus: "Informasi alamat dan jadwal operasional belum dikonfigurasi."
};

export const loadingLokasi: LokasiData = {
  title: "Pusat Operasional dan Jadwal",
  address: "",
  city: "",
  openingHours: [],
  mapsUrl: "https://maps.google.com/?q=Pusat+Operasional+Lab",
  status: 'loading',
  pesanStatus: "Sedang memuat data lokasi dan jadwal operasional..."
};

export const errorLokasi: LokasiData = {
  title: "Pusat Operasional dan Jadwal",
  address: "",
  city: "",
  openingHours: [],
  mapsUrl: "https://maps.google.com/?q=Pusat+Operasional+Lab",
  status: 'error',
  pesanStatus: "Gagal memuat data lokasi dan jadwal. Silakan coba muat ulang."
};
