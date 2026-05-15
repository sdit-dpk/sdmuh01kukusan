# Website SD Muhammadiyah 01 Kukusan

Repositori ini berisi kode sumber prototipe website SD Muhammadiyah 01 Kukusan,
dibangun sebagai static HTML sebelum dipindahkan ke WordPress + Elementor (Hostinger).

---

## Struktur Proyek

```
sdmuh01kukusan/
│
├── index.html              ← Halaman Beranda (template, jangan edit isi kontennya)
│
├── js/
│   └── data.js             ← ⭐ SATU-SATUNYA FILE UNTUK UPDATE KONTEN
│
├── css/                    ← (akan diisi: style.css per halaman)
│
├── pages/                  ← (akan diisi: profil.html, berita.html, dst.)
│
├── assets/
│   ├── logo/               ← Logo sekolah (PNG transparan, favicon)
│   ├── foto/               ← Foto kegiatan, gedung, guru
│   └── dokumen/            ← File PDF yang bisa diunduh
│
├── .gitignore
└── README.md
```

---

## Cara Update Konten

Semua konten website dikelola dari **satu file**: `js/data.js`

Buka file tersebut dan edit bagian yang sesuai:

| Bagian           | Properti di data.js     |
|------------------|-------------------------|
| Info sekolah     | `DATA.sekolah`          |
| Menu navigasi    | `DATA.navigasi`         |
| Banner utama     | `DATA.hero`             |
| Statistik        | `DATA.statistik`        |
| Sambutan kepsek  | `DATA.kepsek`           |
| Pengumuman       | `DATA.pengumuman`       |
| Berita terbaru   | `DATA.berita`           |
| Portal pengguna  | `DATA.portal`           |
| Agenda/Kalender  | `DATA.agenda`           |
| Link footer      | `DATA.footerLinks`      |

---

## Cara Menjalankan Secara Lokal

Karena `index.html` memuat file `js/data.js`, file tidak bisa dibuka
langsung dengan klik ganda. Gunakan salah satu cara berikut:

**Opsi A — VS Code + Live Server (direkomendasikan):**
1. Install ekstensi **Live Server** di VS Code
2. Klik kanan `index.html` → **Open with Live Server**

**Opsi B — Python (jika sudah terinstall):**
```bash
cd sdmuh01kukusan
python -m http.server 8000
# Buka browser: http://localhost:8000
```

**Opsi C — Node.js:**
```bash
npx serve .
```

---

## Status Halaman

| Halaman         | File            | Status           |
|-----------------|-----------------|------------------|
| Beranda         | `index.html`    | ✅ Selesai        |
| Profil Sekolah  | `pages/profil.html`  | 🔲 Belum dimulai |
| Akademik        | `pages/akademik.html`| 🔲 Belum dimulai |
| Berita          | `pages/berita.html`  | 🔲 Belum dimulai |
| Kontak          | `pages/kontak.html`  | 🔲 Belum dimulai |

---

## Rencana Migrasi ke WordPress

Setelah semua halaman prototipe selesai dan disetujui:
1. Setup WordPress di Hostinger
2. Install Elementor + plugin wajib
3. Terjemahkan desain HTML ke Elementor widget per widget
4. Pindahkan konten dari `data.js` ke WordPress

---

## Teknologi

- HTML5 + CSS3 (tanpa framework eksternal)
- JavaScript vanilla (tanpa jQuery/React)
- Font: [Crimson Pro](https://fonts.google.com/specimen/Crimson+Pro) + [DM Sans](https://fonts.google.com/specimen/DM+Sans) via Google Fonts
- Target: WordPress + Elementor (Hostinger) setelah prototipe selesai
