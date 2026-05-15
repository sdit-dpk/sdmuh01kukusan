# Changelog — Website SD Muhammadiyah 01 Kukusan

Semua perubahan signifikan pada proyek ini didokumentasikan di file ini.
Format mengacu pada [Keep a Changelog](https://keepachangelog.com/id/1.0.0/).

---

## [v1.1] — 2026-05-15 — Beranda + Setup GitHub

### Ditambahkan
- `index.html` — Halaman Beranda sebagai template murni (tanpa konten hard-coded)
- `js/data.js` — File tunggal sumber konten seluruh website
- `README.md` — Dokumentasi repo: struktur, cara update konten, cara jalankan lokal
- `CHANGELOG.md` — File ini
- `.gitignore` — Mengabaikan file sistem & editor
- Struktur folder lengkap: `js/`, `css/`, `pages/`, `assets/logo/`, `assets/foto/`, `assets/dokumen/`

### Fitur Beranda yang Selesai
- Topbar (kontak + tahun ajaran)
- Header sticky + navigasi utama + tombol PPDB
- Hero banner dengan foto background, badge akreditasi, tagline, 2 tombol CTA
- Stats bar (4 angka: siswa, guru, ekskul, prestasi)
- Sambutan Kepala Sekolah (foto, kutipan, paragraf)
- Berita terbaru (3 kartu dengan thumbnail)
- Panel Pengumuman (5 item terbaru + badge "Baru")
- Portal Pengguna (Siswa, Orang Tua, Guru — masing-masing 4 tautan)
- Agenda Kegiatan Mendatang (daftar + tag tipe)
- Kalender Mini interaktif (navigasi bulan, highlight hari ini & agenda)
- Footer 4 kolom (identitas, tautan cepat, portal, kontak)

### Infrastruktur
- Repo GitHub: `https://github.com/sdit-dpk/sdmuh01kukusan`
- Branch utama: `main`
- Semua konten dapat diupdate hanya dengan mengedit `js/data.js`

---

## [v1.0] — 2026-05-12 — Perencanaan Awal

### Ditambahkan
- Dokumen perencanaan awal (handover)
- Struktur navigasi utama (7 menu)
- Daftar 29 halaman lengkap dengan slug dan keterangan
- Daftar 8 aplikasi terintegrasi beserta cara integrasi
- Daftar konten yang harus dikumpulkan dari sekolah
- Urutan pengerjaan dalam 5 fase
- Stack teknologi: WordPress + Hostinger + Elementor
- Struktur domain: main + subdomain perpustakaan

---

## Format Entri Berikutnya

```
## [vX.Y] — YYYY-MM-DD — Judul Sesi

### Ditambahkan
- Hal baru yang ditambahkan

### Diubah
- Perubahan dari yang sudah ada

### Diperbaiki
- Bug atau kesalahan yang diperbaiki

### Dihapus
- Hal yang dihapus dari scope
```