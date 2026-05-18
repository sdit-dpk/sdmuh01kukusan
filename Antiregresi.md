# ANTIREGRESI.md
## Panduan Arsitektur — Website SD Muhammadiyah 01 Kukusan
### Baca sebelum menyentuh kode apapun

Dokumen ini mencatat aturan-aturan yang TIDAK BOLEH dilanggar.
Setiap aturan ada karena pernah menyebabkan bug nyata.

---

## 1. SATU-SATUNYA FILE DATA: `js/data.js`

```
❌ JANGAN menulis konten langsung di dalam file HTML manapun.
❌ JANGAN membuat file data baru (data2.js, konten.js, dsb.).
✅ Semua konten — teks, angka, URL foto — ada di js/data.js.
✅ HTML hanya membaca dari DATA.* dan merender ke DOM.
```

Ada duplikat `data.js` di root repo yang sekarang KOSONG dan tidak dipakai.
File itu hanya artifact dari versi lama — jangan isi, jangan hapus (bisa break git).

---

## 2. ROUTING HALAMAN: SELALU pakai `resolveHref()`

**Bug yang pernah terjadi:** link navigasi mengarah ke `/profil` (root-relative)
yang bekerja di server tapi gagal total di GitHub Pages / Live Server lokal.

**Aturannya:**
```
❌ JANGAN pakai href root-relative: "/profil", "/berita", "/kontak"
❌ JANGAN hardcode: "pages/profil.html" (dari root) atau "profil.html" (dari pages/)
✅ Selalu daftarkan path baru di hrefMap dalam js/components.js
✅ Gunakan resolveHref(href) saat merender link dari DATA
```

**Cara menambah halaman baru ke hrefMap** (di `js/components.js`):
```javascript
const hrefMap = {
  // ... entry yang sudah ada ...
  '/halaman-baru': {
    root:  'pages/halaman-baru.html',  // dari index.html
    pages: 'halaman-baru.html',        // dari pages/*.html
  },
};
```

Fungsi `isInPagesDir()` mendeteksi posisi halaman secara otomatis.

---

## 3. STRUKTUR DATA BERITA

Struktur lama (v1.x) sudah tidak berlaku. Jangan gunakan properti lama:

```javascript
// ❌ LAMA — sudah dihapus, jangan dipakai lagi:
{ kategori: "🏆 Prestasi", href: "/berita/slug", detail: "..." }

// ✅ BARU — wajib ada semua field ini:
{
  id:       "slug-unik",       // ← WAJIB, untuk URL ?id= dan link antar halaman
  kategori: "Prestasi",        // ← tanpa emoji
  judul:    "...",
  ringkasan:"...",
  konten:   ["paragraf 1..."], // ← array paragraf untuk berita-detail.html
  tanggal:  "10 Mei 2026",     // ← format teks lengkap, bukan angka terpisah
  penulis:  "Tim Redaksi",
  dibaca:   "234",             // ← string angka
  foto:     "assets/...",
  fotoAlt:  "...",
  tags:     ["tag1", "tag2"],
  unggulan: true,              // ← tampil di beranda jika true
}
```

---

## 4. STRUKTUR DATA PENGUMUMAN

Struktur lama (v1.x) sudah tidak berlaku:

```javascript
// ❌ LAMA — sudah dihapus:
{ tanggal: "14", bulan: "Mei", detail: "..." }

// ✅ BARU:
{
  id:            "slug-unik",
  kategori:      "Akademik",   // Akademik|Keuangan|Kegiatan|PPDB|Umum
  judul:         "...",
  ringkasan:     "...",
  konten:        ["paragraf..."],
  tanggal:       "14 Mei 2026", // ← format lengkap dalam SATU field string
  berlakuHingga: "30 Mei 2026", // atau "" jika tidak ada
  sasaran:       "Semua Orang Tua",
  lampiran:      "",            // URL PDF atau ""
  baru:          true,
  penting:       false,
}
```

`index.html` memisahkan tanggal dengan `.split(' ')` — jangan ubah format ini.

---

## 5. URUTAN SCRIPT DI SETIAP HALAMAN

```html
<!-- Di akhir <body> — URUTAN INI WAJIB DIPERTAHANKAN -->
<script src="../js/data.js"></script>      <!-- 1. Data dulu -->
<script src="../js/components.js"></script> <!-- 2. Komponen bersama -->
<script>
  /* 3. Kode render spesifik halaman (opsional) */
</script>
```

**Pengecualian:** `index.html` dan `404.html` ada di root, path-nya berbeda:
```html
<script src="js/data.js"></script>
<script src="js/components.js"></script>
```

---

## 6. ID WAJIB DI SETIAP HALAMAN

`components.js` mencari ID berikut — jika tidak ada, bagian itu tidak dirender
(tidak error, hanya kosong). Pastikan semua ada di setiap halaman baru:

| ID | Komponen |
|---|---|
| `topbar-kontak` | Info telepon/email/lokasi di topbar |
| `topbar-ta` | Tahun ajaran di topbar |
| `header-nama` | Nama sekolah di header |
| `header-tagline` | Tagline/akreditasi di header |
| `nav-menu` | Container navigasi |
| `hamburger` | Tombol menu mobile |
| `footer-nama` | Nama sekolah di footer |
| `footer-akreditasi` | Akreditasi di footer |
| `footer-deskripsi` | Deskripsi di footer |
| `footer-links-utama` | Kolom tautan cepat footer |
| `footer-links-portal` | Kolom portal footer |
| `footer-kontak` | Info kontak footer |
| `footer-copy` | Copyright footer |

Semua sudah ada di `pages/_template.html` — selalu duplikat template ini
untuk halaman baru, jangan buat dari nol.

---

## 7. ATRIBUT `data-page` DI `<body>`

`components.js` menggunakan `data-page` untuk menandai menu aktif di navigasi.
Nilai harus sama persis dengan `item.href` di `DATA.navigasi` (tanpa slash awal):

```html
<!-- index.html  → data-page="/" -->
<body data-page="/">

<!-- profil.html → data-page="profil" atau lebih spesifik sesuai nav -->
<body data-page="profil">
```

Halaman yang tidak ada di navigasi utama (portal, ppdb, bk, dll.) boleh
menggunakan nilai parent-nya:
```html
<body data-page="kesiswaan">  <!-- untuk ppdb.html, bk.html, tata-tertib.html -->
<body data-page="profil">     <!-- untuk guru-staff.html, fasilitas.html, dll. -->
```

---

## 8. FOTO & ASET

```
assets/logo/     ← logo.png (min 500×500px, latar transparan)
assets/foto/     ← foto-foto sekolah
assets/dokumen/  ← file PDF yang bisa diunduh
```

**Untuk foto guru/staff** di `DATA.guruStaff.guru[].foto`:
- Simpan ke `assets/foto/guru/nama-guru.jpg`
- Format: JPG, 200×200px minimum, aspect ratio 1:1
- Ganti URL `https://picsum.photos/...` dengan path lokal

**Untuk foto galeri** di `pages/galeri-foto.html`:
- Data galeri saat ini hardcoded di script halaman (bukan di data.js)
- Simpan ke `assets/foto/galeri/nama-foto.jpg`
- Ganti URL picsum.photos dengan path lokal

---

## 9. HALAMAN YANG BELUM ADA LINK MENUJU KE SANA

`resolveHref()` di `components.js` belum mendaftarkan semua halaman.
Jika menambah halaman baru yang perlu diakses dari nav atau footer,
**daftarkan dulu di `hrefMap`** sebelum menambahkan ke `DATA.navigasi`
atau `DATA.footerLinks`.

---

## 10. DATA KRITIS YANG MASIH PLACEHOLDER

Field berikut di `js/data.js` masih menggunakan nilai placeholder
dan **WAJIB diperbarui** sebelum deploy ke WordPress/produksi:

| Field | Nilai saat ini | Yang dibutuhkan |
|---|---|---|
| `DATA.sekolah.telepon` | `(021) 7891234` | Nomor telepon resmi |
| `DATA.kontak.whatsapp` | `6281234567890` | Nomor WA resmi TU |
| `DATA.kontak.mapsEmbed` | Koordinat perkiraan | Embed URL Google Maps yang tepat |
| `DATA.kontak.mapsArah` | Koordinat perkiraan | Link Google Maps yang tepat |
| `DATA.kontak.layanan[].wa` | `6281234567890` | Nomor WA per bagian |
| `DATA.ppdb.kontakPanitia.wa` | `6281234567890` | Nomor WA panitia PPDB |
| Semua `foto` guru/staff | picsum.photos URL | Foto asli dari sekolah |
| Semua foto berita | picsum.photos URL | Foto asli kegiatan |

---

## 11. FILE YANG TIDAK BOLEH DIEDIT LANGSUNG

| File | Alasan |
|---|---|
| `index.html` (bagian HTML) | Template murni, konten dari data.js |
| `pages/_template.html` | Fondasi — duplikat, jangan edit |
| `data.js` di root | File kosong, artifact lama — biarkan saja |

---

*Dokumen ini wajib diperbarui setiap kali ada keputusan arsitektur baru.*
*Versi: 2.0.0 — 2026-05-18*