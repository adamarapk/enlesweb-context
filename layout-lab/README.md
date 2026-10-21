# layout-lab

Status per 21 Oktober 2026

layout-lab adalah composer internal untuk mencoba susunan section website sebelum DP. Pengguna dapat memilih varian section, mengatur urutannya, lalu membuka tautan preview dengan resep layout tersebut. Konten yang tampil memakai contoh bisnis umum dan data dummy.

## Status penggunaan

- Composer sudah dibuat dan audit build lokalnya dicatat di [catatan teknis](NOTES.md).
- Per 21 Oktober 2026, lab masih berjalan lokal dan belum di-deploy ke URL publik.
- Penggunaan oleh klien juga belum terkonfirmasi.
- Decision 022 menetapkan preview layout-lab sebagai langkah penjualan sebelum ringkasan kesepakatan dan DP untuk prospek yang mempertimbangkan pemesanan. Langkah ini baru dapat dijalankan setelah deployment publik aktif dan URL preview diverifikasi.
- Preview hanya menunjukkan arah susunan layout dan memakai contoh bisnis umum serta data dummy. Jelaskan bahwa preview bukan hasil kerja klien atau draf pengerjaan prospek, dan tidak mengubah aturan pembatalan/refund.
- Preview pengerjaan resmi setelah DP tetap dibuat dari materi klien dan mengikuti paket yang disepakati. Lab tidak menggantikan preview tersebut.
- Lab tidak menghasilkan website produksi atau blueprint JSON dan bukan Website Builder pada Decision 011. Gerbang perancangan Website Builder tetap setelah klien ke-10 go live, selesai, tayang, dan lunas.

## Isi composer

Lab menyediakan 43 varian dalam 13 kategori: navbar, hero, profil, keunggulan, layanan, langkah, galeri, ulasan, biaya, tanya jawab, lokasi, CTA, dan footer. Composer menyediakan preset, pilihan varian per kategori, pengaturan urutan section, simulasi lebar desktop atau mobile, serta tautan preview yang dapat disalin.

Tautan preview menggunakan rute `/pratinjau?s=` diikuti kode varian berurutan. Contoh: `/pratinjau?s=N1%2CH1%2CR1%2CF1`. Konten nama bisnis, ulasan, harga, alamat, dan kontak di dalam varian hanyalah data dummy. Ulasan tersebut bukan testimoni nyata.

## Menjalankan secara lokal

Jalankan dari folder layout-lab:

1. Pasang dependensi dengan `npm ci`.
2. Jalankan server lokal dengan `npm run dev`.
3. Buka `http://localhost:4321/`.

Rute yang tersedia:

- `/`: composer
- `/galeri`: galeri varian
- `/pratinjau?s=...`: hasil susunan untuk dilihat
- `/uji`: halaman pemeriksaan
- `/legal`: keterangan penggunaan dan privasi lab

Composer membuat URL berdasarkan origin yang sedang dibuka. Setelah deployment, `PUBLIC_PREVIEW_BASE_URL` dapat diarahkan ke origin publik preview. Nilai dan deployment tersebut belum dikonfirmasi.

## Dokumentasi dan screenshot

- [Catatan teknis dan hasil audit](NOTES.md)
- [Indeks screenshot hasil build audit 21 Oktober 2026](docs/screens-as-is-2026-10-21/README.md)
- [Dokumentasi utama ENLESWEB](../ENLESWEB-DOCS-V4.md)
- [Ringkasan konteks bisnis](../Start%20Here/summary.md)
- [Visi ENLESWEB](../Strategy/visi.md)
- [Positioning ENLESWEB](../Strategy/positioning.md)
- [SOP chat WhatsApp dan transaksi](../Delivery%20%26%20Operations/sop.md)
- [Decision log, Decision 022](../Business%20Memory/decision-log.md#decision-022)
