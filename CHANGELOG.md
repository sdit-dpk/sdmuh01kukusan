# CHANGELOG
## Website SD Muhammadiyah 01 Kukusan

Semua perubahan penting pada proyek ini didokumentasikan di sini.
Format mengikuti [Keep a Changelog](https://keepachangelog.com/id/1.0.0/).

---

## [2.0.0] — 2026-05-18 — Phase 1 Selesai: Semua Halaman Dibangun

### Ditambahkan — Halaman Baru (29 halaman total)

**Profil Sekolah**
- `pages/profil.html` — sejarah, visi/misi/tujuan, statistik, program unggulan, sambutan kepsek
- `pages/struktur-organisasi.html` — bagan org visual (KS + 4 Wakasek), komite, unit pendukung
- `pages/guru-staff.html` — grid foto 26 guru dengan filter (Pimpinan/Wali Kelas/Mapel Khusus/GTY/GTT) + search, grid tendik
- `pages/fasilitas.html` — 5 kategori, 23 item fasilitas, sidebar navigasi kategori sticky

**Akademik**
- `pages/akademik.html` — intrakurikuler (13 mapel + tabel alokasi JP), kokurikuler (G7KAIH + Jumat Berkah), ekstrakurikuler (HW wajib + 8 pilihan)

**Kesiswaan**
- `pages/kesiswaan.html` — halaman induk, statistik, 4 layanan, 3 organisasi siswa
- `pages/ppdb.html` — timeline 6 fase, 3 jalur, persyaratan, FAQ, form pendaftaran via WA, bar kuota visual
- `pages/tata-tertib.html` — 4 bab, 6 pasal, daftar isi sticky, dirender dari `DATA.kesiswaan.tataTertib`
- `pages/bk.html` — visi/misi BK, 6 layanan, prosedur 5 langkah, profil guru BK, tombol WA langsung

**Berita & Informasi**
- `pages/berita.html` — featured article, filter 4 kategori, search real-time, grid arsip
- `pages/berita-detail.html` — membaca `?id=` dari URL, sidebar terkait + populer + kategori, prev/next, share WA
- `pages/pengumuman.html` — accordion expand/collapse, filter + search, buka via `?id=`, share WA per item
- `pages/agenda.html` — kartu per tipe (acara/ujian/libur), kalender mini interaktif, filter chip
- `pages/unduhan.html` — 5 kategori, 17 dokumen, filter + search, badge format berwarna

**Galeri**
- `pages/galeri-foto.html` — grid masonry 4 kolom, filter 6 kategori, lightbox dengan keyboard nav (←/→/Esc)

**Kontak & PPDB**
- `pages/kontak.html` — Google Maps embed, strip info, 4 kartu layanan WA, 3 rute, form pesan via WA, jam operasional
- `pages/ppdb.html` — (lihat Kesiswaan di atas)

**Portal Pengguna**
- `pages/portal-siswa.html` — 8 app cards, pengumuman, jadwal harian, agenda, mutaba'ah harian islami
- `pages/portal-ortu.html` — 6 layanan, panduan SPP 4 langkah, list wali kelas + tombol WA per kelas, pengumuman penting
- `pages/portal-guru.html` — 6 app cards (e-Rapor, Classroom, Drive, Meet, dll.), jadwal rutin mingguan, 6 dokumen quick-link

**Halaman Pendukung**
- `404.html` — di root repo, countdown redirect 15 detik, ayat Al-Insyirah, tautan cepat 7 halaman
- `pages/kebijakan-privasi.html` — 10 pasal, daftar isi sticky, konten kontak dari `DATA.sekolah`

### Ditambahkan — Data (`js/data.js`)
- `DATA.profil` — sejarah, visi/misi/tujuan resmi KSP 2025-2026, NPSN, tahun berdiri, program unggulan
- `DATA.berita` — struktur baru dengan `id`, `konten[]`, `unggulan`, `tags`, `penulis`
- `DATA.pengumuman` — struktur baru dengan `id`, `konten[]`, `berlakuHingga`, `sasaran`, `lampiran`, `penting`
- `DATA.kontak` — WhatsApp, koordinat peta, layanan per bagian, rute
- `DATA.ppdb` — jadwal, jalur, persyaratan, FAQ, kontak panitia
- `DATA.unduhan` — 5 kategori, 17 file dokumen
- `DATA.strukturOrganisasi` — komite, manajemen (level 1-2), unit pendukung
- `DATA.guruStaff` — 26 guru + 6 tendik dengan foto, mapel, pendidikan, status GTY/GTT
- `DATA.fasilitas` — 5 kategori, 23 item dengan kondisi dan detail
- `DATA.kesiswaan` — statistik, organisasi, tataTertib (4 bab, 6 pasal), bk (visi/misi/layanan/prosedur)

### Diperbaiki
- `index.html` — 4 bug routing: berita href mati, kategori berita pakai emoji lama, pengumuman struktur lama (`tanggal`/`bulan`/`detail`)
- `js/components.js` — tambah `resolveHref()` + `hrefMap` yang mengkonversi path root-relative (`/profil`) ke path relatif yang benar dari posisi manapun (root atau `pages/`)
- `js/data.js` — pindahkan dari duplikat di root ke `js/data.js` yang benar; koreksi data kritis:
  - Kepala Sekolah: Mudzakkir Walad, S.Pd (NBM. 1167327)
  - NPSN: 20228835
  - Alamat: Jl. KH Ahmad Dahlan No. 11 RT 006/005, Kel. Kukusan, Kec. Beji
  - Tahun berdiri: 1942 (bukan 1962 seperti di KSP, bukan 1970 seperti placeholder)

---

## [1.2.0] — 2026-05-15

### Ditambahkan
- `css/global.css` — stylesheet bersama seluruh halaman
- `js/components.js` — render topbar/header/footer otomatis dari `DATA`
- `pages/_template.html` — template fondasi halaman baru
- `ANTIREGRESI.md` — panduan aturan arsitektur

---

## [1.1.0] — 2026-05-15

### Ditambahkan
- `index.html` — halaman beranda
- `js/data.js` — file tunggal sumber konten
- Struktur folder lengkap
- `README.md`, `CHANGELOG.md`, `.gitignore`

---

## [1.0.0] — 2026-05-12

### Ditambahkan
- Perencanaan awal, struktur navigasi, daftar 29 halaman, stack teknologi