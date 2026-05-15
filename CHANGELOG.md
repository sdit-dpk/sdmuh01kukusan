# CHANGELOG
## Website SD Muhammadiyah 01 Kukusan

Semua perubahan penting pada proyek ini didokumentasikan di sini.
Format mengikuti [Keep a Changelog](https://keepachangelog.com/id/1.0.0/).

---

## [1.2.0] — 2026-05-15

### Ditambahkan
- `css/global.css` — stylesheet bersama seluruh halaman
  - Variabel CSS identik dengan `index.html` (`--blue-950` s.d. `--blue-50`, `--gold`, dll.)
  - Style untuk topbar, header sticky, navigasi desktop & mobile, footer
  - Komponen: tombol (`.btn-primary`, `.btn-outline`), badge, tag agenda, read-more link
  - Responsif: breakpoint 900 px (tablet/mobile) dan 640 px (handphone kecil)
  - Aksesibilitas: skip-to-content, tombol scroll-to-top
- `js/components.js` — render komponen bersama dari `DATA`
  - `renderTopbar()` — mengisi info kontak & tahun ajaran
  - `renderHeader()` — navigasi + deteksi menu aktif via `data-page` atau URL
  - `renderFooter()` — brand, tautan, kontak, copyright
  - `initHamburger()` — toggle menu mobile dengan klik-di-luar-untuk-tutup
  - `initScrollTop()` — tombol kembali ke atas otomatis
- `pages/_template.html` — template fondasi halaman baru
  - Sudah include semua ID wajib untuk `components.js`
  - Breadcrumb, page header, dan placeholder konten siap diisi
  - Komentar panduan di setiap bagian
- `ANTIREGRESI.md` — panduan aturan arsitektur

### Diperbarui
- `CHANGELOG.md` — entri ini

---

## [1.1.0] — 2026-05-15

### Ditambahkan
- `index.html` — halaman beranda sebagai template murni
- `js/data.js` — satu-satunya file untuk update seluruh konten website
- Struktur folder lengkap (`css/`, `js/`, `pages/`, `assets/logo/`, `assets/foto/`, `assets/dokumen/`)
- `README.md` — dokumentasi proyek
- `CHANGELOG.md` — file ini
- `.gitignore` — konfigurasi git

### Arsitektur
- Semua konten dikelola dari `js/data.js`
- `index.html` tidak perlu diedit untuk update konten

---

## [1.0.0] — 2026-05-12

### Ditambahkan
- Perencanaan awal proyek
- Struktur navigasi (7 menu utama)
- Daftar 29 halaman dengan slug
- Stack teknologi (GitHub → WordPress/Hostinger + Elementor)