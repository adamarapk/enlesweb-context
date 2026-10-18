# SPEC.md - berflower
Versi 1.2 (Technical Architecture and Implementation Specification)

Dokumen ini membahas arsitektur teknis: stack, struktur file, pemetaan komponen, konfigurasi, skrip klien dan state management, integrasi WhatsApp, SEO, QA teknis, deploy Vercel, dan urutan pengerjaan yang saat ini digunakan dan diimplementasikan pada website berflower. Teks ada di CONTENT.md. Tampilan ada di DESIGN.md. Scope ada di PRD.md. Status: LOCKED, DEFAULT, OPEN.

#### 1. Stack
* Framework: Astro 7.3.5, output: 'static' (LOCKED: Astro)
* Language: TypeScript mode strict (devDependencies: typescript dan @astrojs/check)
* State Management: **Nano Stores** (`nanostores` ^1.5.5, `@nanostores/persistent` ^1.3.5) untuk manajemen state keranjang belanja reaktif client-side yang tersimpan persisten di `localStorage` ('berflower_cart_v1').
* Page Transitions: Astro View Transitions menggunakan `<ClientRouter />` dari `astro:transitions` di `src/layouts/Base.astro`.
* Styling: Vanilla CSS murni dengan custom properties (src/styles/global.css dan scoped styling komponen). Tanpa Tailwind dan tanpa UI framework luar.
* Runtime Engine: Node.js >= 22.12
* Image Processing: Sharp (^0.34.0) via `astro:assets` (format WebP responsif)
* Font: @fontsource-variable/fraunces (termasuk bobot variabel dan gaya miring) dan @fontsource/dm-sans (bobot 400, 500, 600), self-hosted, nol permintaan ke server font eksternal.
* Package manager: npm
* Hosting: Vercel (LOCKED, untuk project demo)

Perintah proyek:
* `npm install`
* `npm run dev` (host 0.0.0.0 port 4322)
* `npm run build` (wajib exit code 0, 0 error, 0 warning)
* `npm run preview`
* `npm run check` (pemeriksaan tipe Astro dan TypeScript)
* `npm run verify` (otomatisasi pengujian QA 9 kriteria)
* `npm run verify:release` (pengujian rilis termasuk ketiadaan placeholder)

#### 2. Struktur File
```
/
├── AGENTS.md
├── PRD.md
├── CONTENT.md
├── DESIGN.md
├── SPEC.md
├── BERFLOWER-DOCS-V1.md
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── vercel.json
├── scripts/
│   ├── make-placeholders.mjs
│   └── verify.mjs            (skrip verifikasi QA otomatis)
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── og-image.png          (CLOSED)
└── src/
    ├── config/
    │   └── site.ts           (konfigurasi bisnis dan studio terpusat)
    ├── content/
    │   └── copy.ts           (seluruh teks, salinan persis CONTENT.md)
    ├── data/
    │   ├── products.ts       (7 produk, selaras CONTENT.md)
    │   ├── gifts.ts          (3 paket dan tambahan, selaras CONTENT.md)
    │   ├── occasions.ts      (6 acara, selaras CONTENT.md)
    │   └── bouquet-builder.ts(opsi bunga, pelengkap, kertas, pita, helper harga)
    ├── stores/
    │   └── cart.ts           (Nano Stores atom persistent cart, kalkulasi subtotal)
    ├── lib/
    │   ├── whatsapp.ts       (generator URL WhatsApp, perakit pesan form & cart)
    │   └── format.ts         (format rupiah, format tanggal id-ID)
    ├── styles/
    │   └── global.css        (token, reset, font, radius organik, motion)
    ├── assets/
    │   └── photos/           (foto buket transparan, 11 foto produk + CREDITS.md)
    ├── layouts/
    │   └── Base.astro        (ClientRouter, dokumen HTML, meta, skip link, FloatingWA)
    ├── components/
    │   ├── Navbar.astro      (navbar desktop, dropdown info, drawer mobile)
    │   ├── CartIndicator.astro(ikon troli dan counter badge reaktif Nano Stores)
    │   ├── AddToCartButton.astro(tombol tambah belanjaan ke Nano Stores)
    │   ├── BouquetBuilder.astro(konfigurator buket interaktif & preview kartu)
    │   ├── DemoNote.astro    (catatan penanda konsep buatan ENLESWEB)
    │   ├── Footer.astro      (footer 5 menu, medsos, embed Google Maps Venice)
    │   ├── FloatingWhatsApp.astro (tombol mengambang FAB 58x58px hijau #25D366)
    │   ├── WhatsAppButton.astro   (tombol utama seragam)
    │   ├── TextLink.astro         (tautan sekunder teks)
    │   ├── Hero.astro             (headline, single CTA, buket transparan)
    │   ├── CategoryShowcase.astro (koleksi 3 kategori)
    │   ├── OccasionIndex.astro    (indeks acara 6 baris)
    │   ├── GiftTeaser.astro       (teaser hadiah)
    │   ├── OrderSteps.astro       (langkah pemesanan compact/full)
    │   ├── AboutBrief.astro       (tentang toko konsep)
    │   ├── FinalCta.astro         (CTA penutup Beranda)
    │   ├── FilterTabs.astro       (tab filter kategori & baris acara aktif)
    │   ├── ProductList.astro      (kontainer daftar produk)
    │   ├── ProductItem.astro      (kartu produk: WhatsApp link + AddToCart)
    │   ├── GiftRow.astro          (baris paket hadiah: WhatsApp link + AddToCart)
    │   ├── OrderForm.astro        (form pesanan langsung tanpa keranjang)
    │   ├── FaqList.astro          (komponen <details> FAQ native)
    │   ├── ContactInfo.astro      (blok kontak dan lokasi studio)
    │   └── PageHeader.astro       (h1 dan pengantar halaman)
    └── pages/
        ├── index.astro
        ├── koleksi.astro
        ├── hadiah.astro
        ├── rangkai-buket.astro
        ├── keranjang.astro
        ├── cara-pesan.astro
        ├── kontak.astro
        └── 404.astro
```

Aturan tata kelola file:
* Seluruh teks pelanggan diimpor dari `src/content/copy.ts`. Data produk, paket, acara, dan perangkai buket dari `src/data/*`.
* Seluruh nilai bisnis variabel dan informasi studio diimpor dari `src/config/site.ts`.
* State keranjang belanja dikelola terpusat di `src/stores/cart.ts`.
* Tidak ada CSS atau nilai di luar token `DESIGN.md` dan `src/styles/global.css`.

#### 3. Pemetaan Halaman ke Komponen
| Halaman | Komponen Utama |
| ------ | ------ |
| / | Hero, CategoryShowcase, OccasionIndex, GiftTeaser, OrderSteps (compact), AboutBrief, FinalCta |
| /koleksi | PageHeader, DemoNote, FilterTabs, ProductList, ProductItem x7 (TextLink, AddToCartButton) |
| /hadiah | PageHeader, DemoNote, GiftRow x3 (TextLink, AddToCartButton), daftar tambahan, WhatsAppButton |
| /rangkai-buket | BouquetBuilder (stepper bunga & pelengkap, swatch kertas & pita, live card preview, sticky submit) |
| /keranjang | Halaman keranjang (empty state, cart line items, accordion card editor, checkout form, WhatsApp checkout) |
| /cara-pesan | PageHeader, OrderSteps (full), OrderForm, FaqList |
| /kontak | PageHeader, ContactInfo (WhatsApp, jam, area, studio, embed Google Maps, blok ENLESWEB) |
| /404 | not-found section, TextLink |
| Semua Halaman | Base.astro membungkus ClientRouter, Navbar (dengan CartIndicator), `<main id="main-content">`, Footer, dan FloatingWhatsApp |

Semantik HTML:
* `<header>` membungkus navbar. `<nav aria-label="Navigasi utama">` di dalamnya.
* `<main id="main-content">` membungkus konten halaman. Skip link menuju `#main-content`.
* `<footer>` membungkus footer interaktif.
* Tepat satu `<h1>` per halaman. Judul section `<h2>`. Nama produk/item `<h3>`.
* Section memakai `<section>` dengan `aria-labelledby`.

#### 4. Konfigurasi Bisnis: `src/config/site.ts`
```ts
export interface SiteConfig {
  name: string;
  city: string;
  address: string;
  demoMode: boolean;
  enleswebWhatsappNumber: string;
  shopWhatsappNumber: string;
  siteUrl: string;
  enleswebUrl: string;
  instagramUrl: string;
  tiktokUrl: string;
  pinterestUrl: string;
  mapsUrl: string;
  mapsEmbedUrl: string;
  indexable: boolean;
  hours: string;
}

export const site: SiteConfig = {
  name: 'berflower',
  city: 'Venice',
  address: 'Calle Larga San Marco, 412, 30124 Venezia VE, Italia',
  demoMode: true,
  enleswebWhatsappNumber: '6281234567890',
  shopWhatsappNumber: '',
  siteUrl: '',
  enleswebUrl: '',
  instagramUrl: 'https://instagram.com/unknown',
  tiktokUrl: 'https://tiktok.com/@unknown',
  pinterestUrl: 'https://pinterest.com/unknown',
  mapsUrl: 'https://maps.google.com/?q=Calle+Larga+San+Marco,+412,+30124+Venezia+VE,+Italy',
  mapsEmbedUrl: 'https://maps.google.com/maps?q=Calle+Larga+San+Marco,+412,+30124+Venezia+VE,+Italy&t=&z=16&ie=UTF8&iwloc=&output=embed',
  indexable: false,
  hours: 'Setiap hari, 09.00 sampai 19.00 CET',
};
```

Logika Penanganan Nilai:
* `demoMode: true`: seluruh interaksi WhatsApp (tombol, form pesanan, dan checkout keranjang) diarahkan ke nomor WhatsApp ENLESWEB dengan pesan konteks portofolio.
* Jika `enleswebUrl` kosong: teks ENLESWEB di footer dan halaman Kontak dirender sebagai teks biasa tanpa hyperlink.
* Jika `siteUrl` kosong: tag `<link rel="canonical">` dan `og:url` tidak dicetak untuk mencegah URL salah.
* `indexable: false`: menyisipkan tag `<meta name="robots" content="noindex, nofollow" />`.

#### 5. Data Produk, Hadiah, dan Bouquet Builder
* `src/data/products.ts`: 7 produk bunga (Buket, Bunga Meja, Papan Bunga) lengkap dengan harga rupiah, deskripsi, slug acara, dan foto resolusi tinggi.
* `src/data/gifts.ts`: 3 paket hadiah (Buket dan Cokelat, Buket Wisuda, Hampers Bunga) dan daftar tambahan pelengkap.
* `src/data/occasions.ts`: 6 acara (ulang-tahun, wisuda, anniversary, ucapan-selamat, duka-cita, hari-ibu).
* `src/data/bouquet-builder.ts`:
  - 4 bunga utama (Mawar merah, Bunga matahari, Tulip, Peony)
  - 3 bunga pelengkap (Baby's breath, Eucalyptus, Statice)
  - 3 kertas pembungkus (Krem, Merah muda, Kertas kraft)
  - 3 pita (Krem, Merah muda, Hijau)
  - Helper kalkulasi harga `priceBouquet(composition)`
  - Helper deskripsi teks `describeBouquet(composition)`
* Format harga terpusat via `src/lib/format.ts`: `rupiah(n) => 'Rp' + n.toLocaleString('id-ID')`.

#### 6. Integrasi WhatsApp: `src/lib/whatsapp.ts`
Implementasi perutean Demo Mode:
```ts
import { site } from '../config/site';
import { copy } from '../content/copy';
import { describeBouquet } from '../data/bouquet-builder';
import { formatDate, rupiah } from './format';
import type { CartLine } from '../stores/cart';

export function waUrl(topic: string, page: string): string {
  const text = site.demoMode
    ? copy.wa.demoTemplate.replace('{halaman}', page)
    : copy.wa.shopTemplate.replace('{topik}', topic);
  return createWaLink(getActiveNumber(), text);
}

export function waEnlesweb(): string {
  return createWaLink(site.enleswebWhatsappNumber, copy.wa.enleswebTemplate);
}

export function waFromOrder(fields: OrderFormFields): string {
  const message = buildOrderMessage(fields, site.demoMode);
  return createWaLink(getActiveNumber(), message);
}

export function waFromCart(fields: CartCheckoutFields, lines: CartLine[]): string {
  return createWaLink(getActiveNumber(), buildCartMessage(fields, lines));
}
```

Format tautan & kepatuhan:
* Protokol resmi `https://wa.me/{nomor}?text={encodedText}`.
* Seluruh tautan WhatsApp dipasangi `target="_blank"` dan `rel="noopener noreferrer"`.
* Tombol [Hubungi ENLESWEB] di halaman Kontak memakai `waEnlesweb()` yang selalu mengarah ke nomor ENLESWEB.
* Atribut tracking `data-cta-location` dan `data-wa-topic` disematkan pada setiap elemen interaktif.

#### 7. State Management & Skrip Klien (Client Islands)
Semua skrip disematkan langsung di komponen Astro atau store Nano Stores tanpa framework runtime eksternal:

##### 7.1 Persistent Cart Store (`src/stores/cart.ts`)
* Menggunakan `@nanostores/persistent` dengan atom `'berflower_cart_v1'`.
* Sanitasi decoding JSON (`decodeCart`) memvalidasi integritas data (kuantitas bulat 1-99, nomor harga finite, opsi kartu ucapan, dan komposisi buket kustom).
* Fungsi mutasi:
  - `addCartLine(line)`: menambahkan item baru atau menambah kuantitas jika opsi sama persis.
  - `updateCartLine(id, updateFn)`: memperbarui data item (kuantitas atau kartu ucapan).
  - `removeCartLine(id)`: menghapus satu item berdasarkan ID.
  - `clearCart()`: mengosongkan seluruh keranjang.
* Fungsi derivatif:
  - `cartItemCount(lines)`: menghitung total kuantitas item di keranjang.
  - `cartTotal(lines)`: menghitung total harga subtotal belanjaan.

##### 7.2 Cart Indicator (`CartIndicator.astro`)
* Terpasang di navbar desktop dan mobile (`#cart-indicator`, `#cart-count`). Berlangganan reaktif pada atom `$cart` via `$cart.subscribe()`.
* Label desktop `<span class="cart-label">Keranjang</span>` (disembunyikan di mobile < 1024px).
* Badge counter tabular melingkar (diameter 22px, latar `--paper-deep`, teks `--ink`).
* Memperbarui teks counter badge dan atribut `aria-label` ramah pembaca layar secara seketika saat isi keranjang berubah (misal: "Keranjang, 0 item", "Keranjang, 1 item").

##### 7.3 Tombol Tambah ke Keranjang (`AddToCartButton.astro`)
* Membaca data item dari data-attribute, memanggil `addCartLine()`.
* Menampilkan feedback animasi teks tombol berubah menjadi [Ditambahkan] selama 1.4 detik.

##### 7.4 Konfigurator Rangkai Buket (`BouquetBuilder.astro`)
* Membaca input kuantitas bunga utama & pelengkap, radio kertas pembungkus & pita.
* Komposisi awal default: 1 Mawar merah, wrapping Krem, pita Krem (estimasi awal: Rp35.000).
* Menghitung estimasi harga real-time melalui `priceBouquet(readComposition())`.
* Live preview rendering kartu ucapan: menyinkronkan nama penerima (maks 80 char), pengirim (maks 80 char), teks pesan (maks 150 char), dan kelas font (`font-serif`, `font-serif-italic`, `font-sans`).
* Validasi submit memastikan setidaknya ada satu bunga utama yang dipilih (`hasMainBloom`), menampilkan pesan error jika kosong, lalu memanggil `addCartLine()` dengan tipe `kind: 'custom'`.

##### 7.5 Halaman Keranjang Reaktif (`keranjang.astro`)
* Berlangganan langsung ke `$cart`: merender ulang daftar item atau menampilkan empty state secara otomatis.
* Stepper kuantitas (+, -, input) dengan batas 1 sampai 99 (tombol disabled di batas ekstrem).
* Editor kartu ucapan in-place via accordion `<details>` yang memperbarui giftCard item secara persisten dengan mekanisme `skipLineRender = true` untuk mempertahankan posisi kursor dan fokus ketikan pengguna.
* Validasi formulir pengiriman (nama wajib, tanggal min hari ini, cara terima wajib) dan pemanggilan `waFromCart()` untuk membuka chat WhatsApp dengan ringkasan pesanan lengkap beserta tanggal berformat lokal Indonesia (`formatDate`).

##### 7.6 Navbar saat Scroll dan Menu Drawer (`Navbar.astro`)
* Memantau `window.scrollY > 8` untuk menyematkan `data-scrolled="true"` pada header.
* Drawer mobile dengan aksesibilitas keyboard: `aria-expanded`, penanganan tombol `Escape`, dan penguncian scroll saat drawer terbuka.
* Dropdown menu "Info" native `<details>` yang menutup otomatis saat link diklik atau klik di luar menu.
* Diinisialisasi ulang pada event `astro:page-load` (View Transitions).

##### 7.7 Filter Koleksi Interaktif (`FilterTabs.astro` dan `ProductList.astro`)
* Membaca dan memperbarui query string URL `?kategori=...` dan `?acara=...` via `history.replaceState`.
* Menyembunyikan produk non-cocok dengan atribut `hidden` dan memperbarui `aria-current` pada tab aktif.
* Pengumuman jumlah hasil yang tampil untuk teknologi asistif via elemen `aria-live="polite"`.
* Progressive Enhancement: Tanpa JavaScript, seluruh 7 produk tetap tampil lengkap.

##### 7.8 Form Pesanan Interaktif Langsung (`OrderForm.astro`)
* Opsi pesanan di-generate dinamis saat build dari `products.ts` dan `gifts.ts`.
* Validasi field wajib sisi klien (nama, pesanan, tanggal, cara terima) dan pembukaan WhatsApp via `waFromOrder()`.

##### 7.9 Accordion Pertanyaan (`FaqList.astro`)
* Menggunakan elemen HTML bawaan `<details>` dan `<summary>` dengan transisi ikon rotasi tanpa JS tambahan.

#### 8. CSS, Token, dan Font
* Diimplementasikan di `src/styles/global.css`:
  - Warna: `--paper`, `--paper-deep`, `--paper-light`, `--ink`, `--ink-muted`, `--line`, `--clay`, `--leaf`, `--leaf-text`.
  - Radius: `--radius-none: 0`, `--radius-sm: 3px`, serta serangkaian token radius organik (`--radius-organic-1` sampai `--radius-organic-4`, `--radius-organic-hero`, `--radius-card-sm`, `--radius-card-sm-alt`).
  - Tipografi: token fluid clamp (`--font-display`, `--font-page-title`, `--font-section-title`, `--font-index`, `--font-item-name`, `--font-lead`, `--font-body`, `--font-price`, `--font-small`, `--font-button`, `--font-nav`).
  - Spring motion: `--ease-spring: cubic-bezier(0.16, 1, 0.3, 1)`.
  - Keyframes: `@keyframes heroFadeUp`, `@keyframes heroFadeScale`, `@keyframes cardFadeUp`.
  - View Transitions: `@view-transition { navigation: auto; }`.
* Font di-bundle mandiri (self-hosted) dari `@fontsource-variable/fraunces` dan `@fontsource/dm-sans`. Preload berkas woff2 disematkan di `<head>` untuk Fraunces wght normal dan DM Sans 400.

#### 9. Gambar dan Performa
* Seluruh foto produk dan buket diproses menggunakan Astro Image API (`astro:assets`) menghasilkan berkas WebP modern via Sharp.
* Panggung hero memuat buket transparan (`hero-bouquet.png`) secara eager dengan `fetchpriority="high"`.
* Seluruh gambar katalog lainnya menggunakan `loading="lazy"` dan `decoding="async"`.
* Dimensi width dan height selalu didefinisikan (CLS = 0).

#### 10. SEO dan Meta Tags (`Base.astro`)
* Bahasa dokumen: `<html lang="id">`.
* Tema warna: `<meta name="theme-color" content="#F6F0E6">`.
* Judul dan deskripsi otomatis diambil dari `copy.meta` per halaman.
* Karena status demo (`site.indexable: false`), setiap halaman mencetak `<meta name="robots" content="noindex, nofollow" />` dan berkas `public/robots.txt` melarang perayapan mesin pencari.
* Meta Open Graph dan Twitter Card tercetak dinamis.

#### 11. Skrip Otomasi Verifikasi QA (`scripts/verify.mjs`)
Pengujian kualitas kode dijalankan secara otomatis dengan perintah `npm run verify`:
1. **Pemeriksaan Em Dash & En Dash**: Memastikan tidak ada karakter `—` (`\u2014`) atau `–` (`\u2013`) di seluruh berkas kode `src/`.
2. **Pemeriksaan Kata Terlarang**: Memindai kata klise terlarang (premium, presisi, elevate, seamless, crafted, powerful, modern, exceptional, next-level, terlaris, terbaik, termurah, terpercaya, same day).
3. **Kecocokan Data Produk & Harga**: Memvalidasi id, harga numerik, dan nama dari 7 produk bunga.
4. **Kecocokan Data Paket Hadiah**: Memvalidasi id, harga numerik, dan nama dari 3 paket hadiah.
5. **Verifikasi Foto & Lisensi**: Memastikan seluruh 11 foto produk dan catatan lisensi di `CREDITS.md` sinkron dan tersedia.
6. **Integritas Konfigurasi `site.ts`**: Memeriksa kelayakan konfigurasi studio.
7. **Kelengkapan Rute Halaman**: Memvalidasi keberadaan 8 rute wajib (`index.astro`, `koleksi.astro`, `hadiah.astro`, `rangkai-buket.astro`, `keranjang.astro`, `cara-pesan.astro`, `kontak.astro`, `404.astro`).
8. **Kelengkapan Atribut WhatsApp**: Memeriksa keberadaan atribut `data-cta-location` dan prop `location` di seluruh komponen tombol dan tautan.
9. **Integritas Tautan Internal**: Memastikan tidak ada hyperlink internal yang rusak (404 internal) menuju rute `/`, `/koleksi`, `/hadiah`, `/rangkai-buket`, `/keranjang`, `/cara-pesan`, `/kontak`.

#### 12. QA Checklist Teknis
* [x] `npm run build` sukses 0 error dan 0 warning (exit code 0).
* [x] `npm run check` lulus 0 error pada Astro dan TypeScript.
* [x] `npm run verify` lulus seluruh pengujian otomatis 9 kriteria.
* [x] Seluruh teks bersumber dari `src/content/copy.ts`.
* [x] Nama merek `berflower` selalu ditulis huruf kecil di semua tempat.
* [x] Floating WhatsApp Button (FAB 58px hijau #25D366) muncul dan dapat diakses di seluruh halaman.
* [x] Cart Indicator aktif di navbar dengan counter badge reaktif.
* [x] Konfigurator Rangkai Buket bekerja interaktif dan berhasil menambahkan racikan buket ke keranjang.
* [x] Keranjang belanja persisten menyimpan item di localStorage dan menyusun ringkasan checkout ke WhatsApp.
* [x] Hero Beranda menampilkan foto buket transparan dan tombol tunggal [Pesan via WhatsApp].
* [x] Footer menampilkan lokasi studio Venice lengkap dengan iframe embed Google Maps dan tautan 5 menu navigasi.
* [x] Bebas scroll horizontal pada pengujian responsive 360px hingga 1440px.

#### 13. Panduan Deploy Vercel
1. Hubungkan repository git ke platform Vercel.
2. Preset konfigurasi proyek:
   * Framework preset: Astro
   * Build command: `astro build`
   * Output directory: `dist`
   * Node.js Version: 22.x
3. Berkas `vercel.json`:
```json
{
  "cleanUrls": true,
  "trailingSlash": false,
  "headers": [
    {
      "source": "/_astro/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ]
}
```
4. Verifikasi URL publik: memastikan seluruh 8 halaman dapat diakses dan interaksi WhatsApp serta keranjang berfungsi sempurna di perangkat smartphone fisik.
