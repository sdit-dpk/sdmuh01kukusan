/**
 * ════════════════════════════════════════════════════════════════
 *  DATA WEBSITE — SD Muhammadiyah 01 Kukusan
 *  Versi: 1.3  |  Diperbarui: 2026-05-16
 * ════════════════════════════════════════════════════════════════
 *
 *  PANDUAN EDIT
 *  ─────────────────────────────────────────────────────────────
 *  Teks   → ganti isi di antara tanda kutip "..."
 *  Angka  → langsung ganti nilainya
 *  true / false → ya / tidak (tanpa tanda kutip)
 *  Daftar [...]  → tambah atau hapus item, pisahkan dengan koma.
 *                  Item terakhir boleh tanpa koma.
 *
 *  JANGAN ubah nama-nama properti (sebelum tanda titik dua :)
 *  karena template HTML bergantung padanya.
 *
 *  CATATAN PERBAIKAN v1.2
 *  File ini dipindahkan ke js/data.js (sebelumnya ada duplikat
 *  di root). Ini adalah satu-satunya file data yang berlaku.
 * ════════════════════════════════════════════════════════════════
 */

const DATA = {

  // ──────────────────────────────────────────────────────────────
  //  IDENTITAS SEKOLAH
  //  Dipakai di: header, topbar, footer, tab browser
  // ──────────────────────────────────────────────────────────────
  sekolah: {
    nama:            "SD Muhammadiyah 01 Kukusan",
    tagline:         "Terakreditasi A · Depok, Jawa Barat",
    akreditasi:      "Terakreditasi A",
    telepon:         "(021) 7891234",
    email:           "info@sdmuh01kukusan.sch.id",
    alamat:          "Jl. KH Ahmad Dahlan No. 11 RT 006/005, Kel. Kukusan, Kec. Beji, Kota Depok 16425",
    alamatPendek:    "Kukusan, Beji, Depok",
    jamOperasional:  "Senin–Jumat, 07.00–15.00 WIB",
    tahunAjaran:     "2025/2026",
    urlPustaka:      "https://pustaka.sdmuh01kukusan.sch.id",
    deskripsiFooter: "Sekolah dasar Islam berkualitas di Kukusan, Beji, Depok. Membentuk generasi unggul yang beriman, berilmu, dan berakhlak mulia berlandaskan Al-Islam dan Kemuhammadiyahan.",
  },

  // ──────────────────────────────────────────────────────────────
  //  NAVIGASI
  //  aktif: true → menu ini di-highlight (gunakan hanya satu)
  // ──────────────────────────────────────────────────────────────
  navigasi: [
    { label: "Beranda",   href: "/",          aktif: true  },
    { label: "Profil",    href: "/profil",     aktif: false },
    { label: "Akademik",  href: "/akademik",   aktif: false },
    { label: "Kesiswaan", href: "/kesiswaan",  aktif: false },
    { label: "Berita",    href: "/berita",     aktif: false },
    { label: "Unduhan",   href: "/unduhan",    aktif: false },
  ],
  navPPDB: { label: "PPDB 2025/2026", href: "/kesiswaan/ppdb" },

  // ──────────────────────────────────────────────────────────────
  //  HERO (BANNER UTAMA)
  // ──────────────────────────────────────────────────────────────
  hero: {
    badge:     "Terakreditasi A · Kurikulum Merdeka",
    judul:     "Unggul dalam Ilmu,<br>Berkarakter Islami",
    deskripsi: "Membentuk generasi cerdas, berakhlak mulia, dan berwawasan kebangsaan berlandaskan nilai-nilai Al-Islam dan Kemuhammadiyahan.",
    btnUtama:  { label: "Daftar PPDB Sekarang", href: "/kesiswaan/ppdb" },
    btnKedua:  { label: "Profil Sekolah",       href: "/profil" },
    // Ganti dengan path foto lokal setelah mendapat foto dari sekolah
    // Contoh: "assets/foto/hero-gedung.jpg"
    fotoBg:    "https://picsum.photos/seed/sdmuhkkk/1400/540",
  },

  // ──────────────────────────────────────────────────────────────
  //  STATISTIK (4 angka di bawah hero)
  // ──────────────────────────────────────────────────────────────
  statistik: [
    { angka: "487",  label: "Siswa Aktif"           },
    { angka: "32",   label: "Tenaga Pendidik"        },
    { angka: "12",   label: "Ekstrakulikuler"        },
    { angka: "48+",  label: "Prestasi & Penghargaan" },
  ],

  // ──────────────────────────────────────────────────────────────
  //  SAMBUTAN KEPALA SEKOLAH
  // ──────────────────────────────────────────────────────────────
  kepsek: {
    nama:    "Mudzakkir Walad, S.Pd",
    jabatan: "Kepala Sekolah",
    nip:     "NBM. 1167327",
    // Ganti setelah dapat foto: "assets/foto/kepala-sekolah.jpg"
    foto:    "https://picsum.photos/seed/principal9/280/373",
    kutipan: "Pendidikan yang sejati bukan hanya mencerdaskan pikiran, tetapi juga membentuk hati yang mulia dan akhlak yang terpuji.",
    sambutan: [
      "Bismillahirrahmanirrahim. Puji syukur kehadirat Allah SWT atas nikmat dan karunia-Nya sehingga SD Muhammadiyah 01 Kukusan dapat terus berkembang dan memberikan pelayanan pendidikan terbaik bagi putra-putri kita.",
      "Kami berkomitmen untuk menghadirkan lingkungan belajar yang kondusif, menyenangkan, dan berbasis nilai-nilai keislaman. Melalui Kurikulum Merdeka yang kami terapkan, setiap siswa dibimbing untuk menemukan potensi terbaiknya sesuai minat dan bakatnya.",
      "Kami mengundang seluruh orang tua dan wali murid untuk bersama-sama mendukung proses pendidikan anak-anak kita demi masa depan yang lebih cerah.",
    ],
  },

  // ══════════════════════════════════════════════════════════════
  //  PENGUMUMAN
  //  Dipakai di: beranda (5 teratas), pages/pengumuman.html (semua)
  //
  //  ── CARA MENAMBAH PENGUMUMAN BARU ────────────────────────
  //  Salin template di bawah, tempel di PALING ATAS array,
  //  lalu isi setiap field.
  //
  //  TEMPLATE:
  //  {
  //    id:        "slug-unik",               ← wajib, unik
  //    kategori:  "Akademik",                ← pilih salah satu:
  //                                             Akademik | Keuangan |
  //                                             Kegiatan | PPDB | Umum
  //    judul:     "Judul Pengumuman",
  //    ringkasan: "Satu kalimat ringkas.",
  //    konten: [                             ← detail isi (satu string per paragraf)
  //      "Paragraf pertama...",
  //      "Paragraf kedua...",
  //    ],
  //    tanggal:   "1 Januari 2026",          ← tanggal terbit
  //    berlakuHingga: "31 Januari 2026",     ← opsional, isi "" jika tidak ada
  //    sasaran:   "Semua Warga Sekolah",     ← mis: "Orang Tua Siswa Kelas 6"
  //    lampiran:  "",                        ← URL file PDF, atau "" jika tidak ada
  //    baru:      true,                      ← true = tampil badge BARU di beranda
  //    penting:   false,                     ← true = tampil badge PENTING (merah)
  //  },
  //
  //  ── CATATAN ───────────────────────────────────────────────
  //  · id tidak boleh sama dengan pengumuman lain
  //  · urutan: terbaru selalu di paling atas array
  //  · beranda: hanya 5 teratas yang ditampilkan
  // ══════════════════════════════════════════════════════════════
  pengumuman: [
    {
      id:            "uas-genap-2025-2026",
      kategori:      "Akademik",
      judul:         "Jadwal Penilaian Akhir Tahun (PAT) Semester Genap 2025/2026",
      ringkasan:     "PAT dilaksanakan 2–13 Juni 2026 untuk seluruh kelas 1–5, dan ujian kelas 6 mulai 28 Mei 2026.",
      konten: [
        "Diberitahukan kepada seluruh orang tua dan wali murid bahwa Penilaian Akhir Tahun (PAT) Semester Genap Tahun Pelajaran 2025/2026 akan dilaksanakan dengan jadwal sebagai berikut:",
        "Kelas 6: Ujian Akhir Kelas 6 dilaksanakan pada 28 Mei – 3 Juni 2026. Pengumuman hasil akan disampaikan pada 20 Juni 2026.",
        "Kelas 1–5: PAT dilaksanakan pada 2–13 Juni 2026. Siswa diwajibkan hadir tepat waktu pukul 07.00 WIB, membawa alat tulis lengkap, dan mengenakan seragam putih-merah.",
        "Selama periode ujian, tidak ada kegiatan ekstrakurikuler. Siswa yang berhalangan hadir karena sakit wajib menyertakan surat keterangan dokter. Untuk informasi lebih lanjut, silakan hubungi wali kelas masing-masing.",
      ],
      tanggal:       "14 Mei 2026",
      berlakuHingga: "13 Juni 2026",
      sasaran:       "Semua Orang Tua & Wali Murid",
      lampiran:      "",
      baru:          true,
      penting:       true,
    },
    {
      id:            "spp-mei-2026",
      kategori:      "Keuangan",
      judul:         "Batas Akhir Pembayaran SPP Bulan Mei 2026",
      ringkasan:     "Pembayaran SPP bulan Mei 2026 paling lambat tanggal 20 Mei 2026 via transfer bank atau QRIS.",
      konten: [
        "Diberitahukan kepada seluruh orang tua dan wali murid bahwa batas akhir pembayaran SPP bulan Mei 2026 adalah tanggal 20 Mei 2026.",
        "Pembayaran dapat dilakukan melalui: (1) Transfer Bank ke rekening sekolah — konfirmasi via WhatsApp ke nomor TU sekolah, atau (2) Scan QRIS yang tersedia di loket Tata Usaha.",
        "Bagi siswa yang belum melunasi SPP setelah tanggal 20 Mei 2026, wali kelas akan menghubungi orang tua secara langsung. Mohon kerja sama dan tepat waktu dalam pembayaran demi kelancaran operasional sekolah.",
        "Untuk informasi rekening dan QRIS, silakan menghubungi bagian Tata Usaha sekolah pada jam kerja (Senin–Jumat, 07.30–14.00 WIB).",
      ],
      tanggal:       "10 Mei 2026",
      berlakuHingga: "20 Mei 2026",
      sasaran:       "Semua Orang Tua & Wali Murid",
      lampiran:      "",
      baru:          false,
      penting:       false,
    },
    {
      id:            "ekskul-daftar-ta-baru",
      kategori:      "Kegiatan",
      judul:         "Pendaftaran Ekstrakurikuler Tahun Ajaran 2026/2027 Dibuka",
      ringkasan:     "Pendaftaran ekstrakurikuler pilihan untuk TA 2026/2027 dibuka 1–31 Mei 2026 melalui portal siswa atau formulir di TU.",
      konten: [
        "Dalam rangka pengembangan minat dan bakat peserta didik, SD Muhammadiyah 01 Kukusan membuka pendaftaran ekstrakurikuler pilihan untuk Tahun Ajaran 2026/2027.",
        "Ekstrakurikuler yang tersedia: Study Club, Bola Voli, Tapak Suci, Bahasa Inggris, Futsal, Seni Tari, dan Angklung. Ekstrakurikuler wajib Hizbul Wathan (HW) tidak perlu didaftarkan terpisah.",
        "Pendaftaran dibuka pada 1–31 Mei 2026 melalui dua jalur: (1) Online via Portal Siswa di menu Ekstrakurikuler, atau (2) Mengisi formulir fisik di ruang Tata Usaha pada jam kerja.",
        "Setiap siswa dapat memilih maksimal 2 ekstrakurikuler pilihan. Kuota terbatas. Pendaftar yang melebihi kuota akan diseleksi berdasarkan urutan pendaftaran. Jadwal dan pembina akan diumumkan pada awal Juli 2026.",
      ],
      tanggal:       "2 Mei 2026",
      berlakuHingga: "31 Mei 2026",
      sasaran:       "Siswa Kelas 1–6",
      lampiran:      "",
      baru:          false,
      penting:       false,
    },
    {
      id:            "ppdb-2026-2027",
      kategori:      "PPDB",
      judul:         "PPDB Tahun Ajaran 2026/2027 Resmi Dibuka",
      ringkasan:     "Penerimaan Peserta Didik Baru kelas 1 TA 2026/2027 dibuka mulai 20 April 2026. Pendaftaran online dan offline tersedia.",
      konten: [
        "SD Muhammadiyah 01 Kukusan dengan bangga mengumumkan pembukaan Penerimaan Peserta Didik Baru (PPDB) Kelas 1 untuk Tahun Ajaran 2026/2027.",
        "Persyaratan: Anak yang lahir pada atau sebelum 1 Juli 2020 (usia minimal 6 tahun). Dokumen: fotokopi Akta Kelahiran, Kartu Keluarga, pas foto 3×4 (2 lembar), Surat Keterangan Sehat. Biaya pendaftaran: Gratis.",
        "Pendaftaran dibuka mulai 20 April 2026 dan akan ditutup ketika kuota terpenuhi (2 rombongan belajar, maksimal 56 siswa). Daftar melalui halaman PPDB di website ini atau langsung ke TU sekolah.",
        "Informasi lebih lanjut: hubungi sekolah via WhatsApp atau kunjungi langsung pada hari kerja pukul 07.30–14.00 WIB.",
      ],
      tanggal:       "20 Apr 2026",
      berlakuHingga: "",
      sasaran:       "Calon Peserta Didik Baru & Orang Tua",
      lampiran:      "",
      baru:          false,
      penting:       true,
    },
    {
      id:            "rapat-komite-genap",
      kategori:      "Umum",
      judul:         "Undangan Rapat Komite Sekolah Semester Genap 2025/2026",
      ringkasan:     "Rapat komite sekolah dilaksanakan Sabtu, 20 April 2026 pukul 09.00 WIB di aula sekolah. Kehadiran orang tua sangat diharapkan.",
      konten: [
        "Dengan hormat, Kepala SD Muhammadiyah 01 Kukusan mengundang seluruh orang tua dan wali murid untuk menghadiri Rapat Komite Sekolah Semester Genap Tahun Pelajaran 2025/2026.",
        "Waktu dan Tempat: Sabtu, 20 April 2026 · Pukul 09.00–11.30 WIB · Aula SD Muhammadiyah 01 Kukusan.",
        "Agenda rapat: (1) Laporan perkembangan program sekolah semester genap, (2) Pembahasan persiapan PAT dan Ujian Kelas 6, (3) Rencana kegiatan akhir tahun ajaran 2025/2026, (4) Tanya jawab dan masukan dari orang tua.",
        "Mengingat pentingnya agenda tersebut, kami sangat mengharapkan kehadiran Bapak/Ibu orang tua dan wali murid tepat waktu. Konfirmasi kehadiran dapat disampaikan kepada wali kelas masing-masing.",
      ],
      tanggal:       "15 Apr 2026",
      berlakuHingga: "20 Apr 2026",
      sasaran:       "Semua Orang Tua & Wali Murid",
      lampiran:      "",
      baru:          false,
      penting:       false,
    },
    {
      id:            "libur-idul-adha-2026",
      kategori:      "Akademik",
      judul:         "Libur Idul Adha 1447 H dan Penyesuaian Jadwal KBM",
      ringkasan:     "Sekolah libur pada 16–17 Juni 2026 dalam rangka Hari Raya Idul Adha 1447 H. KBM kembali normal pada 18 Juni 2026.",
      konten: [
        "Diberitahukan kepada seluruh warga SD Muhammadiyah 01 Kukusan bahwa dalam rangka Hari Raya Idul Adha 1447 H, sekolah akan libur pada:",
        "Senin, 16 Juni 2026 (Hari Raya Idul Adha) dan Selasa, 17 Juni 2026 (cuti bersama). Kegiatan Belajar Mengajar kembali normal pada Rabu, 18 Juni 2026.",
        "Pada Hari Raya Idul Adha, sekolah menyelenggarakan Sholat Idul Adha bersama dan penyembelihan hewan qurban. Siswa yang ingin berpartisipasi dalam kegiatan qurban sekolah dapat menghubungi panitia melalui wali kelas.",
        "Semoga hari raya Idul Adha 1447 H membawa keberkahan bagi kita semua. Taqabbalallahu minna wa minkum.",
      ],
      tanggal:       "5 Jun 2026",
      berlakuHingga: "17 Jun 2026",
      sasaran:       "Semua Warga Sekolah",
      lampiran:      "",
      baru:          false,
      penting:       false,
    },
  ],

  // ══════════════════════════════════════════════════════════════
  //  BERITA
  //  Dipakai di: beranda (3 teratas yg unggulan:true),
  //              pages/berita.html (semua), pages/berita-detail.html (satu)
  //
  //  ── CARA MENAMBAH BERITA BARU ─────────────────────────────
  //  Salin blok template di bawah ini, tempel di PALING ATAS
  //  array (sebelum artikel pertama), lalu isi setiap field.
  //
  //  TEMPLATE:
  //  {
  //    id:       "slug-unik-tanpa-spasi",      ← wajib, unik
  //    kategori: "Prestasi",                   ← pilih salah satu:
  //                                               Prestasi | Kegiatan |
  //                                               Program  | Pengumuman
  //    judul:    "Judul Berita Di Sini",
  //    ringkasan:"Satu–dua kalimat pembuka.",
  //    konten: [                               ← isi artikel penuh
  //      "Paragraf pertama...",
  //      "Paragraf kedua...",
  //    ],
  //    tanggal:  "1 Januari 2026",
  //    penulis:  "Tim Redaksi",
  //    dibaca:   "0",
  //    foto:     "assets/foto/nama-foto.jpg",  ← atau URL
  //    fotoAlt:  "Keterangan foto",
  //    tags:     ["kata-kunci", "lainnya"],
  //    unggulan: false,                        ← true = tampil di beranda
  //  },
  //
  //  ── CATATAN ───────────────────────────────────────────────
  //  · id tidak boleh sama dengan artikel lain
  //  · unggulan:true → tampil di beranda (maks. 3 yang paling atas)
  //  · foto: gunakan path relatif dari root repo, atau URL lengkap
  // ══════════════════════════════════════════════════════════════
  berita: [
    {
      id:       "robotik-juara-2",
      kategori: "Prestasi",
      judul:    "Tim Robotik SD Muhammadiyah 01 Raih Juara 2 Tingkat Kota Depok",
      ringkasan:"Enam siswa kelas 5 berhasil membawa pulang medali perak dalam Kompetisi Robotik Tingkat Kota Depok yang diselenggarakan oleh Dinas Pendidikan Kota Depok.",
      konten: [
        "Alhamdulillah, tim robotik SD Muhammadiyah 01 Kukusan kembali mengharumkan nama sekolah. Enam siswa kelas 5 berhasil meraih Juara 2 dalam Kompetisi Robotik Tingkat Kota Depok yang diselenggarakan oleh Dinas Pendidikan Kota Depok pada 8 Mei 2026 di Gedung Balai Kota Depok.",
        "Tim yang terdiri dari Farhan, Nadia, Zaky, Alya, Raka, dan Siti ini telah berlatih selama tiga bulan di bawah bimbingan guru pembina ekstrakurikuler robotik. Mereka merancang robot yang mampu menyelesaikan tantangan jalur rintangan secara otomatis menggunakan sensor ultrasonik.",
        "\"Kami sangat bangga dengan pencapaian anak-anak kami. Ini adalah buah dari kerja keras, ketekunan, dan doa orang tua. Semoga prestasi ini menjadi penyemangat bagi seluruh siswa kami untuk terus berinovasi,\" ujar Mudzakkir Walad, S.Pd., selaku Kepala Sekolah.",
        "Keberhasilan ini tidak terlepas dari dukungan program Koding dan Kecerdasan Artifisial (KKA) yang mulai terintegrasi dalam pembelajaran sejak semester ganjil 2025/2026. Program ini mendorong siswa untuk berpikir komputasional dan kreatif sejak dini.",
        "Tim akan mewakili Kota Depok dalam Kompetisi Robotik Tingkat Provinsi Jawa Barat yang akan diselenggarakan pada bulan Juli 2026. Dukungan dan doa dari seluruh warga sekolah sangat diharapkan.",
      ],
      tanggal:  "10 Mei 2026",
      penulis:  "Tim Redaksi",
      dibaca:   "234",
      foto:     "https://picsum.photos/seed/berita1/900/500",
      fotoAlt:  "Tim Robotik SD Muhammadiyah 01 Kukusan",
      tags:     ["robotik", "prestasi", "kota-depok", "kka"],
      unggulan: true,
    },
    {
      id:       "p5-suara-demokrasi",
      kategori: "Kegiatan",
      judul:    "Projek P5 Tema \"Suara Demokrasi\" Wujudkan Pemimpin Muda Berkarakter",
      ringkasan:"Siswa kelas 4 dan 5 antusias mengikuti Projek Penguatan Profil Pelajar Pancasila dengan tema Suara Demokrasi — simulasi pemilihan ketua kelas secara demokratis dan islami.",
      konten: [
        "Selama dua pekan penuh, halaman dan kelas-kelas SD Muhammadiyah 01 Kukusan dipenuhi semangat demokrasi. Siswa kelas 4 dan 5 melaksanakan Projek Penguatan Profil Pelajar Pancasila (P5) dengan tema \"Suara Demokrasi\" yang berlangsung dari 27 April hingga 8 Mei 2026.",
        "Projek ini dirancang untuk menumbuhkan pemahaman praktis tentang proses demokrasi yang sehat kepada siswa. Mereka menjalani seluruh tahapan pemilu sesungguhnya: sosialisasi, pendaftaran calon, kampanye, debat kandidat, pemungutan suara, hingga penghitungan hasil.",
        "Yang istimewa, seluruh proses ini diintegrasikan dengan nilai-nilai Islam. Setiap kandidat diwajibkan menyampaikan visi misi yang mengandung nilai amanah, adil, dan musyawarah — tiga pilar kepemimpinan dalam Islam yang menjadi landasan pembahasan selama projek berlangsung.",
        "\"Anak-anak belajar bahwa pemimpin yang baik bukan hanya yang populer, tetapi yang jujur dan bertanggung jawab. Nilai inilah yang kami tanamkan melalui projek ini,\" ujar Ibu Sari, guru fasilitator P5.",
        "Projek ini menghasilkan berbagai karya nyata: poster kampanye, video manifesto, dan laporan refleksi tertulis. Seluruh karya dipamerkan dalam Pameran Karya P5 yang terbuka untuk orang tua pada 9 Mei 2026 dan disambut antusias.",
      ],
      tanggal:  "5 Mei 2026",
      penulis:  "Tim Redaksi",
      dibaca:   "189",
      foto:     "https://picsum.photos/seed/berita2/900/500",
      fotoAlt:  "Kegiatan P5 Suara Demokrasi",
      tags:     ["p5", "profil-pelajar-pancasila", "demokrasi", "kegiatan"],
      unggulan: true,
    },
    {
      id:       "tahfidz-semester-genap",
      kategori: "Program",
      judul:    "Program Tahfidz Joyful Learning Resmi Berjalan di Semua Kelas",
      ringkasan:"Mulai semester genap 2025/2026, program Tahfidz Joyful Learning berjalan terjadwal setiap Selasa–Kamis pukul 07.00 untuk seluruh siswa kelas 1–6.",
      konten: [
        "Bismillahirrahmanirrahim. Sebagai wujud komitmen sekolah dalam mencetak generasi penghafal Al-Qur'an, SD Muhammadiyah 01 Kukusan resmi menjalankan program Tahfidz Joyful Learning secara terjadwal mulai semester genap tahun pelajaran 2025/2026.",
        "Program ini dilaksanakan setiap Selasa, Rabu, dan Kamis pukul 07.00–07.30 sebelum kegiatan belajar mengajar dimulai. Seluruh siswa dari kelas 1 hingga kelas 6 mengikuti program ini secara serentak di kelasnya masing-masing, dibimbing oleh guru wali kelas yang telah mendapat pelatihan khusus tahsin.",
        "Target hafalan dirancang bertahap sesuai jenjang: siswa kelas 1–2 mempelajari surat-surat pendek dari An-Nas hingga Ad-Dhuha, kelas 3–4 melanjutkan hafalan Juz 30 dan menambah surat-surat pilihan, sementara kelas 5–6 ditargetkan menyelesaikan Juz 30 secara penuh dan mulai menghafal Juz 29.",
        "Metode yang digunakan mengombinasikan Metode Umi (talaqqi langsung dari guru), Metode Jama'i (hafalan bersama), dan pendekatan Joyful Learning yang menyisipkan permainan dan nyanyian untuk siswa kelas rendah agar proses menghafal terasa menyenangkan.",
        "\"Al-Qur'an adalah cahaya. Kami ingin setiap anak membawa cahaya itu pulang ke rumah, setiap hari,\" tutur Mudzakkir Walad, S.Pd. Perkembangan hafalan setiap siswa dipantau melalui buku mutaba'ah yang ditandatangani orang tua setiap minggu.",
      ],
      tanggal:  "28 Apr 2026",
      penulis:  "Tim Redaksi",
      dibaca:   "312",
      foto:     "https://picsum.photos/seed/berita3/900/500",
      fotoAlt:  "Program Tahfidz Joyful Learning",
      tags:     ["tahfidz", "al-quran", "program-unggulan", "ismuba"],
      unggulan: true,
    },
    {
      id:       "ppdb-2026-2027-dibuka",
      kategori: "Pengumuman",
      judul:    "PPDB Tahun Ajaran 2026/2027 Resmi Dibuka — Kuota Terbatas",
      ringkasan:"Penerimaan Peserta Didik Baru (PPDB) SD Muhammadiyah 01 Kukusan untuk tahun ajaran 2026/2027 dibuka mulai 20 April 2026. Pendaftaran dapat dilakukan secara online maupun langsung ke sekolah.",
      konten: [
        "SD Muhammadiyah 01 Kukusan dengan bangga mengumumkan pembukaan Penerimaan Peserta Didik Baru (PPDB) untuk Tahun Ajaran 2026/2027. Pendaftaran dibuka mulai 20 April 2026 dan akan ditutup ketika kuota terpenuhi.",
        "Calon peserta didik baru yang akan diterima adalah anak-anak yang lahir pada atau sebelum 1 Juli 2020 (usia minimal 6 tahun saat masuk). Sekolah menyediakan kuota sebanyak 2 rombongan belajar (maksimal 56 siswa) untuk kelas 1.",
        "Pendaftaran dapat dilakukan melalui dua jalur: (1) Jalur Online melalui tautan yang tersedia di halaman PPDB website ini, atau (2) Jalur Langsung ke kantor Tata Usaha sekolah pada hari dan jam kerja (Senin–Jumat pukul 07.30–14.00 WIB).",
        "Dokumen yang diperlukan antara lain: fotokopi Akta Kelahiran, fotokopi Kartu Keluarga, pas foto 3×4 sebanyak 2 lembar, dan Surat Keterangan Sehat dari dokter. Biaya pendaftaran: gratis.",
        "Untuk informasi lebih lanjut, orang tua dapat menghubungi sekolah melalui WhatsApp atau datang langsung. SD Muhammadiyah 01 Kukusan siap menjadi rumah kedua terbaik bagi putra-putri Anda. Mari bergabung bersama kami!",
      ],
      tanggal:  "20 Apr 2026",
      penulis:  "Panitia PPDB",
      dibaca:   "528",
      foto:     "https://picsum.photos/seed/berita4/900/500",
      fotoAlt:  "PPDB SD Muhammadiyah 01 Kukusan 2026/2027",
      tags:     ["ppdb", "penerimaan-siswa", "pengumuman"],
      unggulan: false,
    },
    {
      id:       "senam-sehat-hut-ri",
      kategori: "Kegiatan",
      judul:    "Semarak HUT RI ke-81: Senam Massal, Lomba, dan Pentas Seni Warnai Sekolah",
      ringkasan:"Ratusan siswa, guru, dan orang tua memenuhi halaman sekolah dalam peringatan HUT Kemerdekaan RI ke-81 yang meriah dan penuh semangat kebangsaan.",
      konten: [
        "Dalam rangka memperingati Hari Ulang Tahun Kemerdekaan Republik Indonesia yang ke-81, SD Muhammadiyah 01 Kukusan menyelenggarakan serangkaian kegiatan bertema \"Nusantara Bersatu\" pada 15–17 Agustus 2025.",
        "Puncak peringatan pada 17 Agustus dimulai dengan upacara bendera khidmat yang diikuti seluruh warga sekolah. Setelah upacara, kegembiraan meledak dalam senam massal bersama orang tua dan wali murid yang memenuhi lapangan sekolah.",
        "Berbagai perlombaan tradisional digelar selama dua hari: balap karung, makan kerupuk, tarik tambang, memasukkan pensil ke dalam botol, dan lomba menggambar bertema kemerdekaan. Semua cabang lomba dijuarai oleh siswa dari kelas yang berbeda, menunjukkan pemerataan bakat di setiap jenjang.",
        "Peringatan ditutup dengan Pentas Seni pada malam 17 Agustus yang menampilkan tari Saman, angklung medley lagu-lagu perjuangan, dan puisi kemerdekaan yang dibawakan siswa kelas 6. Penampilan angklung mendapat aplaus meriah dari ratusan penonton yang hadir.",
        "\"Cinta tanah air adalah bagian dari iman. Melalui perayaan ini, kami ingin anak-anak merasakan bahwa menjadi Indonesia itu adalah anugerah,\" pungkas Kepala Sekolah Mudzakkir Walad, S.Pd.",
      ],
      tanggal:  "17 Agu 2025",
      penulis:  "Tim Redaksi",
      dibaca:   "401",
      foto:     "https://picsum.photos/seed/berita5/900/500",
      fotoAlt:  "Peringatan HUT RI di SD Muhammadiyah 01 Kukusan",
      tags:     ["hut-ri", "kemerdekaan", "kegiatan", "pentas-seni"],
      unggulan: false,
    },
    {
      id:       "akreditasi-a-dipertahankan",
      kategori: "Prestasi",
      judul:    "SD Muhammadiyah 01 Kukusan Pertahankan Akreditasi A dari BAN-S/M",
      ringkasan:"Setelah melalui proses visitasi dan penilaian komprehensif oleh tim BAN-S/M, SD Muhammadiyah 01 Kukusan kembali meraih dan mempertahankan Akreditasi A hingga tahun 2027.",
      konten: [
        "Alhamdulillah, SD Muhammadiyah 01 Kukusan resmi mempertahankan predikat Akreditasi A dari Badan Akreditasi Nasional Sekolah/Madrasah (BAN-S/M). Penilaian dilakukan melalui visitasi lapangan oleh tim asesor BAN-S/M pada tahun 2022 dan berlaku hingga 2027.",
        "Predikat Akreditasi A merupakan pengakuan tertinggi atas standar mutu pendidikan yang mencakup delapan komponen: standar isi, proses, kompetensi lulusan, pendidik dan tenaga kependidikan, sarana prasarana, pengelolaan, pembiayaan, dan penilaian pendidikan.",
        "Keberhasilan ini merupakan buah dari kerja keras seluruh komponen sekolah — kepala sekolah, guru, tenaga kependidikan, komite sekolah, dan dukungan orang tua — dalam menjaga dan meningkatkan kualitas pendidikan secara konsisten.",
        "\"Akreditasi A bukan tujuan akhir. Ini adalah amanah untuk terus meningkatkan kualitas layanan pendidikan kami. Terima kasih kepada seluruh warga sekolah yang telah berjuang bersama,\" ujar Mudzakkir Walad, S.Pd.",
        "Ke depan, sekolah berkomitmen untuk terus berinovasi dalam implementasi Kurikulum Merdeka dan penguatan nilai-nilai Al-Islam dan Kemuhammadiyahan, demi mencetak generasi yang cerdas, berakhlak mulia, dan siap menghadapi tantangan global.",
      ],
      tanggal:  "5 Mar 2025",
      penulis:  "Tim Redaksi",
      dibaca:   "876",
      foto:     "https://picsum.photos/seed/berita6/900/500",
      fotoAlt:  "Sertifikat Akreditasi A SD Muhammadiyah 01 Kukusan",
      tags:     ["akreditasi", "prestasi", "ban-sm", "mutu"],
      unggulan: false,
    },
  ],

  // ──────────────────────────────────────────────────────────────
  //  PORTAL PENGGUNA
  //  tautan: daftar link di setiap kartu portal
  // ──────────────────────────────────────────────────────────────
  portal: [
    {
      ikon:     "🎒",
      kelas:    "ic-siswa",
      judul:    "Portal Siswa",
      deskripsi:"Akses e-Rapor, absensi, Google Classroom, dan perpustakaan digital.",
      tautan: [
        { label: "📊 e-Rapor Siswa",        href: "https://eraporsd.kemdikbud.go.id"      },
        { label: "📚 Google Classroom",     href: "https://classroom.google.com"           },
        { label: "📖 Perpustakaan Digital", href: "https://pustaka.sdmuh01kukusan.sch.id" },
        { label: "✅ Absensi Online",       href: "/portal/siswa"                          },
      ],
    },
    {
      ikon:     "👨‍👩‍👧",
      kelas:    "ic-ortu",
      judul:    "Portal Orang Tua",
      deskripsi:"Pantau perkembangan belajar, info SPP, dan hubungi wali kelas.",
      tautan: [
        { label: "📈 Pantau Nilai Anak",    href: "/portal/orang-tua" },
        { label: "💳 Info Pembayaran SPP",  href: "/portal/orang-tua" },
        { label: "💬 Hubungi Wali Kelas",   href: "/portal/orang-tua" },
        { label: "📋 Absensi Anak",         href: "/portal/orang-tua" },
      ],
    },
    {
      ikon:     "🏫",
      kelas:    "ic-guru",
      judul:    "Portal Guru",
      deskripsi:"Kelola e-Rapor, jadwal mengajar, Google Classroom, dan absensi kelas.",
      tautan: [
        { label: "📝 e-Rapor Guru",        href: "https://eraporsd.kemdikbud.go.id" },
        { label: "📚 Google Classroom",    href: "https://classroom.google.com"     },
        { label: "📅 Jadwal Mengajar",     href: "/portal/guru"                     },
        { label: "✅ Absensi Kelas",       href: "/portal/guru"                     },
      ],
    },
  ],

  // ──────────────────────────────────────────────────────────────
  //  AGENDA / KEGIATAN MENDATANG
  //  tipe: "acara" | "ujian" | "libur"
  //  Kalender mini akan otomatis menandai tanggal yang ada agendanya.
  //  Format tanggal: angka hari saja (tanpa nol di depan), misal "2" bukan "02"
  //  bulanNum: nomor bulan (1=Jan, 2=Feb, ... 12=Des) untuk logika kalender
  // ──────────────────────────────────────────────────────────────
  agenda: [
    { tanggal: "20", bulanNum: 5,  bulan: "Mei", judul: "Peringatan Hari Kebangkitan Nasional",     detail: "Upacara bendera bersama seluruh warga sekolah pukul 07.30 WIB", tipe: "acara" },
    { tanggal: "25", bulanNum: 5,  bulan: "Mei", judul: "Penilaian Akhir Tahun (PAT) Kelas 1–5",   detail: "Pelaksanaan PAT Semester Genap 2025/2026",                      tipe: "ujian" },
    { tanggal: "2",  bulanNum: 6,  bulan: "Jun", judul: "Ujian Akhir Kelas 6 — Gelombang 1",        detail: "Ujian kelulusan gelombang pertama untuk siswa kelas 6",          tipe: "ujian" },
    { tanggal: "16", bulanNum: 6,  bulan: "Jun", judul: "Libur Idul Adha 1446 H",                   detail: "Sekolah libur resmi",                                            tipe: "libur" },
    { tanggal: "28", bulanNum: 6,  bulan: "Jun", judul: "Wisuda & Perpisahan Kelas 6 TA 2025/2026", detail: "Acara puncak kelulusan siswa kelas 6",                           tipe: "acara" },
  ],

  // ──────────────────────────────────────────────────────────────
  //  TAUTAN FOOTER
  // ──────────────────────────────────────────────────────────────
  footerLinks: {
    utama: [
      { label: "Beranda",        href: "/"              },
      { label: "Profil Sekolah", href: "/profil"        },
      { label: "Akademik",       href: "/akademik"      },
      { label: "Kesiswaan",      href: "/kesiswaan"     },
      { label: "Galeri",         href: "/galeri/foto"   },
      { label: "Kontak",         href: "/kontak"        },
    ],
    portal: [
      { label: "Portal Siswa",     href: "/portal/siswa"     },
      { label: "Portal Guru",      href: "/portal/guru"      },
      { label: "Portal Orang Tua", href: "/portal/orang-tua" },
      { label: "PPDB Online",      href: "/kesiswaan/ppdb"   },
      { label: "Unduhan",          href: "/unduhan"          },
      { label: "Agenda Sekolah",   href: "/agenda"           },
    ],
  },

  // ══════════════════════════════════════════════════════════════
  //  ██████╗ ██████╗  ██████╗ ███████╗██╗██╗
  //  ██╔══██╗██╔══██╗██╔═══██╗██╔════╝██║██║
  //  ██████╔╝██████╔╝██║   ██║█████╗  ██║██║
  //  ██╔═══╝ ██╔══██╗██║   ██║██╔══╝  ██║██║
  //  ██║     ██║  ██║╚██████╔╝██║     ██║███████╗
  //  ╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝
  //  DATA HALAMAN-HALAMAN SPESIFIK
  //  Dipakai oleh halaman di pages/*.html saja,
  //  tidak memengaruhi beranda (index.html).
  // ══════════════════════════════════════════════════════════════

  // ──────────────────────────────────────────────────────────────
  //  PROFIL SEKOLAH (pages/profil.html)
  //  ⚠ PRIORITAS UPDATE: Ganti semua teks placeholder di bawah
  //    dengan data resmi dari sekolah setelah diterima.
  // ──────────────────────────────────────────────────────────────
  profil: {

    // Sejarah singkat — isi dengan narasi resmi dari sekolah (200–300 kata)
    // Setiap string dalam array = satu paragraf
    // ⚠ Placeholder — ganti dengan narasi resmi dari sekolah
    sejarah: [
      "SD Muhammadiyah 01 Kukusan berdiri sejak tahun 1942 sebagai bagian dari gerakan pendidikan Muhammadiyah di wilayah Kukusan, Kecamatan Beji, Kota Depok. Sebagai sekolah dasar Muhammadiyah pertama di Kota Depok, sekolah ini didirikan atas prakarsa tokoh-tokoh Muhammadiyah setempat yang bercita-cita menghadirkan pendidikan Islam yang berkualitas dan terjangkau bagi masyarakat.",
      "Selama lebih dari delapan dekade, sekolah ini telah meluluskan ribuan alumni yang tersebar di berbagai bidang profesi. Dengan komitmen pada nilai-nilai Al-Islam dan Kemuhammadiyahan, sekolah terus bertumbuh dan beradaptasi mengikuti perkembangan kurikulum nasional, termasuk ditetapkannya sebagai Sekolah Penggerak pada tahun 2022.",
      "Saat ini, SD Muhammadiyah 01 Kukusan menerapkan Kurikulum Merdeka dengan pendekatan Pembelajaran Mendalam yang berpusat pada peserta didik, mengintegrasikan penguatan karakter Islam ke dalam seluruh mata pelajaran dan kegiatan sekolah. Dengan raihan Akreditasi A, sekolah berkomitmen untuk terus memberikan pendidikan terbaik bagi generasi penerus.",
    ],

    // Tahun berdiri — tampil sebagai fakta di samping sejarah
    tahunBerdiri: "1942",

    // Visi resmi — KSP 2025-2026 hal. 20
    visi: "Terwujudnya Peserta didik yang Berkualitas Sebagai Kader Muhammadiyah yang Cerdas, Berakhlak Mulia, Berbudaya, Unggul Berkemajuan dalam Masyarakat Global.",

    // Misi resmi — KSP 2025-2026 hal. 23-25 (misi baru yang telah direvisi)
    misi: [
      "Membangun peserta didik yang berakhlak mulia dan rajin beribadah melalui pembelajaran yang berkesadaran dan reflektif, sesuai nilai-nilai Islam dan Muhammadiyah.",
      "Menyelenggarakan pembelajaran yang berpusat pada peserta didik, bermakna, dan menggembirakan untuk mengembangkan potensi sesuai bakat dan minat.",
      "Mengembangkan pembelajaran yang mendorong kemandirian, penalaran kritis, dan kreativitas melalui pengalaman belajar yang aplikatif dan inovatif.",
      "Mewujudkan lingkungan belajar yang holistik untuk perkembangan intelektual, sosial, emosional, dan keterampilan dalam kebhinekaan global.",
      "Menyelenggarakan program kokurikuler yang menumbuhkan kebanggaan nasional dan cinta tanah air melalui kegiatan kontekstual.",
      "Membangun komunitas belajar yang kolaboratif antara sekolah, keluarga, dan masyarakat untuk mendukung pembelajaran.",
    ],

    // Tujuan strategis resmi — KSP 2025-2026 hal. 27-30
    tujuan: [
      "Membangun budaya sekolah berakhlak mulia melalui pembiasaan ibadah dan pembiasaan sosial islami sehari-hari.",
      "Mewujudkan pembelajaran berpusat pada peserta didik dengan model inkuiri, PBL, PJBL, dan design thinking.",
      "Mewujudkan profil lulusan 8 dimensi secara holistik melalui proyek lintas ilmu dan asesmen autentik.",
      "Meningkatkan kompetensi literasi (target 100% Mahir & Cakap) dan numerasi (target 90% Mahir & Cakap).",
      "Mewujudkan lingkungan belajar holistik yang mendukung perkembangan intelektual, seni, olahraga, dan budaya.",
      "Menumbuhkan sikap bangga dan cinta tanah air melalui program kokurikuler kontekstual.",
      "Membudayakan pembiasaan ibadah dan kegiatan Kemuhammadiyahan sebagai identitas sekolah.",
      "Membangun komunitas belajar kolaboratif bersama keluarga dan masyarakat.",
      "Meningkatkan kualitas pendidikan melalui evaluasi dan pengembangan profesional yang berkelanjutan.",
    ],

    // Informasi akreditasi — NPSN dikoreksi dari KSP 2025-2026 hal. 2
    akreditasi: {
      nilai:         "A",
      tahun:         "2022",
      lembaga:       "BAN-S/M",
      berlakuHingga: "2027",
      npsn:          "20228835",
    },

    // Program unggulan — dari KSP 2025-2026 Bab III
    programUnggulan: [
      { ikon: "📖", judul: "Tahsin & Tahfidz Qur'an",  deskripsi: "Program hafalan Al-Qur'an terintegrasi sejak kelas 1 dengan target Juz 30 penuh, dibimbing dengan metode Umi, Sima'i, dan Jama'i." },
      { ikon: "🕌", judul: "Al-Islam & Kemuhammadiyahan", deskripsi: "Mata pelajaran Kemuhammadiyahan dan Bahasa Arab sebagai muatan kekhasan yang mengokohkan identitas sekolah Muhammadiyah." },
      { ikon: "💻", judul: "Koding & Kecerdasan Artifisial", deskripsi: "Pembelajaran koding dan KA terintegrasi lintas mata pelajaran sejak dini, sesuai Kepdirjend GTK No. 5/2025." },
      { ikon: "🥋", judul: "Hizbul Wathan & Tapak Suci",  deskripsi: "Ekstrakurikuler wajib HW dan Tapak Suci (bela diri Muhammadiyah) untuk membentuk karakter, kedisiplinan, dan jiwa kepemimpinan." },
      { ikon: "🎨", judul: "Seni & Budaya Lokal",         deskripsi: "Seni Tari dan Angklung sebagai apresiasi warisan budaya Jawa Barat, terintegrasi dengan nilai-nilai islami." },
      { ikon: "🌱", judul: "7 Kebiasaan Anak Indonesia Hebat", deskripsi: "Program G7KAIH nasional yang diintegrasikan dengan nilai Al-Islam dan Kemuhammadiyahan dalam pembiasaan harian." },
    ],

  },

  // ══════════════════════════════════════════════════════════════
  //  KONTAK
  //  Dipakai di: pages/kontak.html
  //  ⚠ Update nomor WhatsApp dan telepon setelah konfirmasi resmi
  // ══════════════════════════════════════════════════════════════
  kontak: {

    // Nomor WhatsApp — tanpa tanda + dan spasi, format internasional
    // Contoh: "6281234567890" untuk nomor 081234567890
    whatsapp: "6281234567890",
    // ⚠ Ganti dengan nomor WhatsApp resmi sekolah

    // Koordinat Google Maps (Jl. KH Ahmad Dahlan No.11, Kukusan, Beji, Depok)
    // Untuk mendapat koordinat: buka maps.google.com → klik kanan lokasi → salin koordinat
    mapLat:  -6.3612,
    mapLng:  106.8227,
    // ⚠ Verifikasi/koreksi koordinat agar pin tepat di lokasi sekolah

    // Tautan Google Maps embed & arah
    mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.1!2d106.8227!3d-6.3612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjEnNDAuMyJTIDEwNsKwNDknMjEuNyJF!5e0!3m2!1sid!2sid!4v1",
    mapsArah:  "https://www.google.com/maps/dir/?api=1&destination=-6.3612,106.8227",

    // Layanan per bagian — info, WhatsApp, jam
    layanan: [
      {
        ikon:  "🏫",
        nama:  "Tata Usaha & Informasi Umum",
        info:  "Informasi sekolah, surat menyurat, administrasi siswa, dan legalisir dokumen.",
        wa:    "6281234567890",
        jam:   "Senin–Jumat · 07.00–14.00 WIB",
      },
      {
        ikon:  "📚",
        nama:  "Kesiswaan & Akademik",
        info:  "Jadwal pelajaran, absensi, nilai, ekstrakulikuler, dan bimbingan konseling.",
        wa:    "6281234567890",
        jam:   "Senin–Jumat · 07.30–13.00 WIB",
      },
      {
        ikon:  "💳",
        nama:  "Keuangan & SPP",
        info:  "Pembayaran SPP, konfirmasi transfer, tagihan, dan laporan keuangan.",
        wa:    "6281234567890",
        jam:   "Senin–Jumat · 08.00–12.00 WIB",
      },
      {
        ikon:  "🏫",
        nama:  "PPDB",
        info:  "Pendaftaran peserta didik baru, informasi syarat dan jadwal seleksi.",
        wa:    "6281234567890",
        jam:   "Senin–Jumat · 08.00–13.00 WIB (saat PPDB berlangsung)",
      },
    ],

    // Rute / petunjuk arah dari beberapa titik umum
    rute: [
      {
        dari:  "Stasiun Depok Baru (KRL)",
        cara:  "Naik angkot D.07 jurusan Depok–Kukusan, turun di pertigaan Jl. KH Ahmad Dahlan. Sekolah ±100 m dari pemberhentian. Estimasi 15–20 menit.",
      },
      {
        dari:  "Terminal Depok",
        cara:  "Naik angkot D.04 jurusan Depok–Beji, turun di Kukusan. Lanjut jalan kaki ±5 menit ke Jl. KH Ahmad Dahlan No. 11. Estimasi 25–30 menit.",
      },
      {
        dari:  "Tol Cijago (Exit Kukusan)",
        cara:  "Keluar tol, belok kiri ke Jl. Kukusan Raya, lurus ±500 m, belok kiri ke Jl. KH Ahmad Dahlan. Sekolah berada di sisi kanan jalan. Estimasi 5 menit.",
      },
    ],

  },

  // ══════════════════════════════════════════════════════════════
  //  PPDB (Penerimaan Peserta Didik Baru)
  //  Dipakai di: pages/ppdb.html
  //  ⚠ Update setiap tahun ajaran baru
  // ══════════════════════════════════════════════════════════════
  ppdb: {

    // Status pendaftaran — ubah ke false jika PPDB sudah tutup
    buka: true,

    tahunAjaran:   "2026/2027",
    kuota:         56,           // total kursi yang tersedia
    kuotaPerKelas: 28,           // siswa per rombel
    jumlahRombel:  2,

    // Jadwal tahapan PPDB
    // ⚠ Sesuaikan tanggal dengan kalender resmi sekolah
    jadwal: [
      { fase: "Pengumuman & Sosialisasi", mulai: "20 Apr 2026", selesai: "30 Apr 2026", selesai2: "", status: "selesai" },
      { fase: "Pendaftaran Online & Offline", mulai: "1 Mei 2026", selesai: "30 Jun 2026", status: "berjalan" },
      { fase: "Seleksi & Verifikasi Berkas", mulai: "1 Jul 2026",  selesai: "10 Jul 2026", status: "menunggu" },
      { fase: "Pengumuman Hasil Seleksi",   mulai: "14 Jul 2026", selesai: "",            status: "menunggu" },
      { fase: "Daftar Ulang",               mulai: "15 Jul 2026", selesai: "19 Jul 2026", status: "menunggu" },
      { fase: "Hari Pertama Masuk Sekolah", mulai: "14 Jul 2026", selesai: "",            status: "menunggu" },
    ],

    // Jalur pendaftaran
    jalur: [
      {
        nama:     "Jalur Zonasi",
        kuota:    "70%",
        deskripsi:"Diprioritaskan untuk calon peserta didik yang berdomisili dalam radius ≤1 km dari sekolah, dibuktikan dengan Kartu Keluarga.",
        prioritas: true,
      },
      {
        nama:     "Jalur Prestasi",
        kuota:    "20%",
        deskripsi:"Untuk calon peserta didik yang memiliki prestasi akademik atau non-akademik (sertifikat/piagam penghargaan tingkat kecamatan ke atas).",
        prioritas: false,
      },
      {
        nama:     "Jalur Afirmasi",
        kuota:    "10%",
        deskripsi:"Untuk calon peserta didik dari keluarga tidak mampu, dibuktikan dengan Kartu KIP, PKH, atau surat keterangan tidak mampu dari kelurahan.",
        prioritas: false,
      },
    ],

    // Persyaratan dokumen
    persyaratan: [
      { dok: "Akta Kelahiran",            ket: "Fotokopi + asli untuk verifikasi",     wajib: true  },
      { dok: "Kartu Keluarga (KK)",       ket: "Fotokopi + asli untuk verifikasi",     wajib: true  },
      { dok: "Pas Foto 3×4",              ket: "2 lembar, latar biru",                 wajib: true  },
      { dok: "Surat Keterangan Sehat",    ket: "Dari puskesmas atau dokter",           wajib: true  },
      { dok: "Rapor TK/RA",               ket: "Fotokopi, jika ada",                   wajib: false },
      { dok: "Sertifikat/Piagam Prestasi",ket: "Untuk jalur prestasi",                 wajib: false },
      { dok: "KIP / Kartu PKH",           ket: "Untuk jalur afirmasi, jika ada",       wajib: false },
    ],

    // FAQ — pertanyaan yang sering ditanyakan
    faq: [
      {
        q: "Berapa biaya pendaftaran PPDB?",
        a: "Pendaftaran PPDB SD Muhammadiyah 01 Kukusan tidak dipungut biaya (gratis).",
      },
      {
        q: "Apakah harus bisa baca tulis untuk masuk kelas 1?",
        a: "Tidak wajib. Yang terpenting calon siswa memenuhi syarat usia (minimal 6 tahun per 1 Juli 2026). Kemampuan literasi dasar akan dikembangkan melalui program sekolah.",
      },
      {
        q: "Bagaimana jika kuota sudah penuh?",
        a: "Pendaftaran akan ditutup otomatis ketika kuota terpenuhi. Kami menyarankan untuk mendaftar lebih awal.",
      },
      {
        q: "Apakah ada tes masuk?",
        a: "Tidak ada tes akademik. Seleksi dilakukan berdasarkan jalur (zonasi, prestasi, atau afirmasi) dan urutan pendaftaran jika kuota terbatas.",
      },
      {
        q: "Apakah anak dari non-Muslim bisa mendaftar?",
        a: "SD Muhammadiyah 01 Kukusan adalah sekolah Islam Muhammadiyah. Seluruh kegiatan sekolah, termasuk mata pelajaran keagamaan, berlandaskan nilai-nilai Al-Islam dan Kemuhammadiyahan.",
      },
      {
        q: "Bagaimana cara cek status pendaftaran?",
        a: "Status pendaftaran dapat dicek melalui bagian Tata Usaha sekolah, atau dengan menghubungi panitia PPDB via WhatsApp pada jam kerja.",
      },
    ],

    // Kontak panitia PPDB
    kontakPanitia: {
      wa:  "6281234567890",   // ⚠ Ganti dengan nomor WA panitia PPDB
      jam: "Senin–Jumat · 08.00–13.00 WIB (selama masa PPDB)",
    },

  },

  // ══════════════════════════════════════════════════════════════
  //  UNDUHAN
  //  Dipakai di: pages/unduhan.html
  //
  //  ── CARA MENAMBAH FILE BARU ───────────────────────────────
  //  Salin satu blok item, tempel di paling atas kategori yang
  //  sesuai, lalu isi fieldnya.
  //
  //  TEMPLATE:
  //  { nama: "Nama File", ukuran: "120 KB", format: "PDF",
  //    url: "assets/dokumen/nama-file.pdf", tahun: "2026" },
  //
  //  format: "PDF" | "DOCX" | "XLSX" | "JPG" | "ZIP"
  //  url   : path relatif dari root repo, atau URL lengkap
  // ══════════════════════════════════════════════════════════════
  unduhan: [
    {
      kategori: "Akademik",
      ikon: "📚",
      deskripsi: "Kalender akademik, jadwal pelajaran, dan dokumen kurikulum.",
      files: [
        { nama: "Kalender Akademik TA 2025/2026",         ukuran: "340 KB", format: "PDF",  url: "assets/dokumen/kalender-akademik-2025-2026.pdf", tahun: "2026" },
        { nama: "Jadwal Pelajaran Semester Genap 2025/2026", ukuran: "210 KB", format: "PDF",  url: "assets/dokumen/jadwal-genap-2025-2026.pdf",      tahun: "2026" },
        { nama: "Alokasi Waktu Kurikulum Merdeka",         ukuran: "180 KB", format: "PDF",  url: "assets/dokumen/alokasi-waktu-kurmer.pdf",         tahun: "2026" },
        { nama: "Buku Panduan Belajar di Rumah",           ukuran: "520 KB", format: "PDF",  url: "assets/dokumen/panduan-belajar-rumah.pdf",        tahun: "2025" },
      ],
    },
    {
      kategori: "Kesiswaan",
      ikon: "🎒",
      deskripsi: "Tata tertib, formulir, dan dokumen kebutuhan siswa.",
      files: [
        { nama: "Tata Tertib Siswa TA 2025/2026",       ukuran: "290 KB", format: "PDF",  url: "assets/dokumen/tata-tertib-siswa.pdf",        tahun: "2026" },
        { nama: "Formulir Pendaftaran Ekstrakurikuler", ukuran: "95 KB",  format: "PDF",  url: "assets/dokumen/form-ekskul.pdf",              tahun: "2026" },
        { nama: "Buku Mutaba'ah Harian Siswa",          ukuran: "1.2 MB", format: "PDF",  url: "assets/dokumen/buku-mutabaah.pdf",            tahun: "2026" },
        { nama: "Surat Izin Tidak Masuk Sekolah",       ukuran: "48 KB",  format: "DOCX", url: "assets/dokumen/surat-izin.docx",             tahun: "2025" },
      ],
    },
    {
      kategori: "PPDB",
      ikon: "🏫",
      deskripsi: "Formulir dan informasi Penerimaan Peserta Didik Baru.",
      files: [
        { nama: "Brosur PPDB 2026/2027",                 ukuran: "1.8 MB", format: "PDF",  url: "assets/dokumen/brosur-ppdb-2026-2027.pdf",    tahun: "2026" },
        { nama: "Formulir Pendaftaran PPDB (cetak)",     ukuran: "120 KB", format: "PDF",  url: "assets/dokumen/form-ppdb-2026-2027.pdf",      tahun: "2026" },
        { nama: "Persyaratan PPDB Lengkap",              ukuran: "85 KB",  format: "PDF",  url: "assets/dokumen/syarat-ppdb-2026-2027.pdf",    tahun: "2026" },
      ],
    },
    {
      kategori: "Orang Tua & Komite",
      ikon: "👨‍👩‍👧",
      deskripsi: "Laporan, notulen rapat komite, dan informasi untuk orang tua.",
      files: [
        { nama: "Laporan Program Semester Ganjil 2025/2026", ukuran: "2.1 MB", format: "PDF",  url: "assets/dokumen/laporan-ganjil-2025.pdf",   tahun: "2026" },
        { nama: "Notulen Rapat Komite Apr 2026",             ukuran: "310 KB", format: "PDF",  url: "assets/dokumen/notulen-komite-apr-2026.pdf", tahun: "2026" },
        { nama: "Panduan Pembayaran SPP via QRIS",           ukuran: "150 KB", format: "PDF",  url: "assets/dokumen/panduan-spp-qris.pdf",      tahun: "2025" },
      ],
    },
    {
      kategori: "Sertifikat & Penghargaan",
      ikon: "🏅",
      deskripsi: "Sertifikat akreditasi dan penghargaan resmi sekolah.",
      files: [
        { nama: "Sertifikat Akreditasi A — BAN-S/M 2022", ukuran: "890 KB", format: "PDF", url: "assets/dokumen/sertifikat-akreditasi-a.pdf", tahun: "2022" },
        { nama: "SK Sekolah Penggerak 2022",               ukuran: "420 KB", format: "PDF", url: "assets/dokumen/sk-sekolah-penggerak.pdf",    tahun: "2022" },
      ],
    },
  ],

  // ══════════════════════════════════════════════════════════════
  //  STRUKTUR ORGANISASI  (pages/struktur-organisasi.html)
  //  ⚠ Ganti nama & jabatan dengan data resmi sekolah
  // ══════════════════════════════════════════════════════════════
  strukturOrganisasi: {
    komite: [
      { jabatan: "Ketua Komite",  nama: "H. Bambang Sutrisno, S.E." },
      { jabatan: "Sekretaris",    nama: "Ibu Dewi Rahayu, S.Pd."   },
      { jabatan: "Bendahara",     nama: "Bapak Hendra Wijaya"       },
    ],
    manajemen: [
      { level:1, jabatan:"Kepala Sekolah",                        nama:"Mudzakkir Walad, S.Pd",         nbm:"NBM. 1167327", foto:"https://picsum.photos/seed/ks01/120/120" },
      { level:2, jabatan:"Wakasek Bidang Kurikulum",              nama:"Ibu Sari Dewi, S.Pd.",           nbm:"NBM. 1089241", foto:"https://picsum.photos/seed/wks01/120/120" },
      { level:2, jabatan:"Wakasek Bidang Kesiswaan",              nama:"Bapak Fahmi Ridwan, S.Pd.",      nbm:"NBM. 1102384", foto:"https://picsum.photos/seed/wks02/120/120" },
      { level:2, jabatan:"Wakasek Bidang Humas",                  nama:"Ibu Nurul Hidayah, S.Pd.I.",    nbm:"NBM. 1134567", foto:"https://picsum.photos/seed/wks03/120/120" },
      { level:2, jabatan:"Wakasek Bidang Sarana & Prasarana",     nama:"Bapak Agus Salim, S.T.",         nbm:"NBM. 1145678", foto:"https://picsum.photos/seed/wks04/120/120" },
    ],
    unit: [
      { nama:"Tata Usaha & Administrasi", ketua:"Ibu Rina Marlina",          anggota:2 },
      { nama:"Bendahara Sekolah",          ketua:"Bapak Dedi Kurniawan",      anggota:1 },
      { nama:"Perpustakaan",               ketua:"Ibu Lilis Suryani",         anggota:1 },
      { nama:"UKS",                        ketua:"Ibu Yuni Astuti, S.Kep.",   anggota:1 },
      { nama:"Bimbingan Konseling",        ketua:"Ibu Reni Kusuma, S.Psi.",   anggota:1 },
      { nama:"Keamanan & Kebersihan",      ketua:"Bapak Eko Prasetyo",        anggota:3 },
    ],
  },

  // ══════════════════════════════════════════════════════════════
  //  GURU & STAFF  (pages/guru-staff.html)
  //  ⚠ Ganti dengan data lengkap dari sekolah
  //  status: "GTY" = Guru Tetap Yayasan | "GTT" = Guru Tidak Tetap
  // ══════════════════════════════════════════════════════════════
  guruStaff: {
    guru: [
      { nama:"Mudzakkir Walad, S.Pd",          jabatan:"Kepala Sekolah",          mapel:"—",                    pendidikan:"S1 PGSD",              status:"GTY", foto:"https://picsum.photos/seed/g01/200/200" },
      { nama:"Ibu Sari Dewi, S.Pd.",            jabatan:"Wakasek Kurikulum",       mapel:"Matematika",           pendidikan:"S1 Pend. Matematika",  status:"GTY", foto:"https://picsum.photos/seed/g02/200/200" },
      { nama:"Bapak Fahmi Ridwan, S.Pd.",       jabatan:"Wakasek Kesiswaan",       mapel:"PJOK",                 pendidikan:"S1 Pend. Olahraga",    status:"GTY", foto:"https://picsum.photos/seed/g03/200/200" },
      { nama:"Ibu Nurul Hidayah, S.Pd.I.",      jabatan:"Wakasek Humas",           mapel:"PAI & Budi Pekerti",   pendidikan:"S1 PAI",               status:"GTY", foto:"https://picsum.photos/seed/g04/200/200" },
      { nama:"Bapak Agus Salim, S.T.",           jabatan:"Wakasek Sarana",          mapel:"IPAS",                 pendidikan:"S1 Teknik Sipil",      status:"GTY", foto:"https://picsum.photos/seed/g05/200/200" },
      { nama:"Ibu Fatimah Zahra, S.Pd.",         jabatan:"Wali Kelas 1A",           mapel:"Guru Kelas 1",         pendidikan:"S1 PGSD",              status:"GTY", foto:"https://picsum.photos/seed/g06/200/200" },
      { nama:"Bapak Rizky Ananda, S.Pd.",        jabatan:"Wali Kelas 1B",           mapel:"Guru Kelas 1",         pendidikan:"S1 PGSD",              status:"GTY", foto:"https://picsum.photos/seed/g07/200/200" },
      { nama:"Ibu Hana Pertiwi, S.Pd.",          jabatan:"Wali Kelas 2A",           mapel:"Guru Kelas 2",         pendidikan:"S1 PGSD",              status:"GTY", foto:"https://picsum.photos/seed/g08/200/200" },
      { nama:"Ibu Mira Lestari, S.Pd.",          jabatan:"Wali Kelas 2B",           mapel:"Guru Kelas 2",         pendidikan:"S1 PGSD",              status:"GTY", foto:"https://picsum.photos/seed/g09/200/200" },
      { nama:"Bapak Yusuf Hakim, S.Pd.",         jabatan:"Wali Kelas 3A",           mapel:"Guru Kelas 3",         pendidikan:"S1 PGSD",              status:"GTY", foto:"https://picsum.photos/seed/g10/200/200" },
      { nama:"Ibu Dian Pratiwi, S.Pd.",          jabatan:"Wali Kelas 3B",           mapel:"Guru Kelas 3",         pendidikan:"S1 PGSD",              status:"GTY", foto:"https://picsum.photos/seed/g11/200/200" },
      { nama:"Ibu Rini Sulistyowati, S.Pd.",     jabatan:"Wali Kelas 4A",           mapel:"Guru Kelas 4",         pendidikan:"S1 PGSD",              status:"GTY", foto:"https://picsum.photos/seed/g12/200/200" },
      { nama:"Bapak Andri Saputra, S.Pd.",       jabatan:"Wali Kelas 4B",           mapel:"Guru Kelas 4",         pendidikan:"S1 PGSD",              status:"GTY", foto:"https://picsum.photos/seed/g13/200/200" },
      { nama:"Ibu Laila Nuraini, S.Pd.",         jabatan:"Wali Kelas 5A",           mapel:"Guru Kelas 5",         pendidikan:"S1 PGSD",              status:"GTY", foto:"https://picsum.photos/seed/g14/200/200" },
      { nama:"Bapak Hafidz Rahman, S.Pd.",       jabatan:"Wali Kelas 5B",           mapel:"Guru Kelas 5",         pendidikan:"S1 PGSD",              status:"GTY", foto:"https://picsum.photos/seed/g15/200/200" },
      { nama:"Ibu Siti Aisyah, S.Pd.",           jabatan:"Wali Kelas 6A",           mapel:"Guru Kelas 6",         pendidikan:"S1 PGSD",              status:"GTY", foto:"https://picsum.photos/seed/g16/200/200" },
      { nama:"Bapak Wahyu Santoso, S.Pd.",       jabatan:"Wali Kelas 6B",           mapel:"Guru Kelas 6",         pendidikan:"S1 PGSD",              status:"GTY", foto:"https://picsum.photos/seed/g17/200/200" },
      { nama:"Ustadz Ahmad Firdaus, Lc.",        jabatan:"Guru Tahfidz",            mapel:"Tahsin & Tahfidz",     pendidikan:"S1 Syariah",           status:"GTY", foto:"https://picsum.photos/seed/g18/200/200" },
      { nama:"Ustadzah Khadijah, S.Pd.I.",       jabatan:"Guru Tahfidz",            mapel:"Tahsin & Tahfidz",     pendidikan:"S1 PAI",               status:"GTY", foto:"https://picsum.photos/seed/g19/200/200" },
      { nama:"Bapak Faisal Akbar, S.Pd.",        jabatan:"Guru PJOK",               mapel:"PJOK",                 pendidikan:"S1 Pend. Olahraga",    status:"GTT", foto:"https://picsum.photos/seed/g20/200/200" },
      { nama:"Ibu Nadia Rahma, S.S.",            jabatan:"Guru Bahasa Inggris",     mapel:"Bahasa Inggris",       pendidikan:"S1 Sastra Inggris",    status:"GTT", foto:"https://picsum.photos/seed/g21/200/200" },
      { nama:"Ibu Wulan Dari, S.Pd.",            jabatan:"Guru Seni Tari",          mapel:"Seni Tari",            pendidikan:"S1 Seni Pertunjukan",  status:"GTT", foto:"https://picsum.photos/seed/g22/200/200" },
      { nama:"Bapak Oman Suparman, S.Pd.",       jabatan:"Guru Bahasa Sunda",       mapel:"Bahasa Sunda",         pendidikan:"S1 Pend. B. Sunda",    status:"GTT", foto:"https://picsum.photos/seed/g23/200/200" },
      { nama:"Ustadz Irfan Maulana, S.Pd.I.",    jabatan:"Guru Kemuhammadiyahan",   mapel:"Kemuhammadiyahan",     pendidikan:"S1 PAI",               status:"GTY", foto:"https://picsum.photos/seed/g24/200/200" },
      { nama:"Ustadzah Zulfa Hanani, S.Pd.",     jabatan:"Guru Bahasa Arab",        mapel:"Bahasa Arab",          pendidikan:"S1 Pend. B. Arab",     status:"GTY", foto:"https://picsum.photos/seed/g25/200/200" },
      { nama:"Ibu Reni Kusuma, S.Psi.",          jabatan:"Guru BK",                 mapel:"Bimbingan Konseling",  pendidikan:"S1 Psikologi",         status:"GTT", foto:"https://picsum.photos/seed/g26/200/200" },
    ],
    tendik: [
      { nama:"Ibu Rina Marlina",     jabatan:"Kepala Tata Usaha",  foto:"https://picsum.photos/seed/tk01/200/200" },
      { nama:"Bapak Dedi Kurniawan", jabatan:"Bendahara Sekolah",  foto:"https://picsum.photos/seed/tk02/200/200" },
      { nama:"Ibu Lilis Suryani",    jabatan:"Pustakawan",         foto:"https://picsum.photos/seed/tk03/200/200" },
      { nama:"Ibu Yuni Astuti",      jabatan:"Petugas UKS",        foto:"https://picsum.photos/seed/tk04/200/200" },
      { nama:"Bapak Eko Prasetyo",   jabatan:"Satpam",             foto:"https://picsum.photos/seed/tk05/200/200" },
      { nama:"Bapak Joko Susilo",    jabatan:"Petugas Kebersihan", foto:"https://picsum.photos/seed/tk06/200/200" },
    ],
  },

  // ══════════════════════════════════════════════════════════════
  //  FASILITAS  (pages/fasilitas.html)
  // ══════════════════════════════════════════════════════════════
  fasilitas: [
    {
      kategori:"Ruang Belajar", ikon:"🏫",
      deskripsi:"Ruang kelas nyaman dan kondusif untuk kegiatan belajar mengajar.",
      items:[
        { nama:"Ruang Kelas",           jumlah:"12 ruang", kondisi:"Baik", detail:"Papan tulis whiteboard, kipas angin, meja kursi ergonomis." },
        { nama:"Ruang Perpustakaan",    jumlah:"1 ruang",  kondisi:"Baik", detail:"±3.000 judul buku, area baca nyaman, pojok digital." },
        { nama:"Laboratorium Komputer", jumlah:"1 ruang",  kondisi:"Baik", detail:"30 unit komputer berkoneksi internet untuk informatika & koding." },
        { nama:"Ruang Multimedia",      jumlah:"1 ruang",  kondisi:"Baik", detail:"Proyektor, layar, speaker untuk pembelajaran interaktif." },
      ],
    },
    {
      kategori:"Ruang Pendukung", ikon:"🏢",
      deskripsi:"Ruang administrasi, penunjang, dan pelayanan warga sekolah.",
      items:[
        { nama:"Ruang Kepala Sekolah", jumlah:"1 ruang", kondisi:"Baik", detail:"Representatif untuk tamu dan rapat terbatas." },
        { nama:"Ruang Guru",           jumlah:"1 ruang", kondisi:"Baik", detail:"Meja kerja individu, lemari arsip, akses internet." },
        { nama:"Ruang Tata Usaha",     jumlah:"1 ruang", kondisi:"Baik", detail:"Administrasi, pelayanan surat menyurat dan legalisir." },
        { nama:"Ruang BK",             jumlah:"1 ruang", kondisi:"Baik", detail:"Ruang konsultasi privat yang nyaman." },
        { nama:"Ruang UKS",            jumlah:"1 ruang", kondisi:"Baik", detail:"Tempat tidur, P3K, timbangan, alat ukur tinggi badan." },
        { nama:"Ruang Komite",         jumlah:"1 ruang", kondisi:"Baik", detail:"Untuk rapat dan koordinasi dengan orang tua/wali murid." },
      ],
    },
    {
      kategori:"Ibadah & Keagamaan", ikon:"🕌",
      deskripsi:"Sarana ibadah dan pembinaan karakter islami warga sekolah.",
      items:[
        { nama:"Mushola Al-Hikmah",    jumlah:"1 unit",   kondisi:"Baik", detail:"Kapasitas ±120 jamaah, digunakan sholat Dhuha & Dzuhur berjamaah setiap hari." },
        { nama:"Tempat Wudhu",         jumlah:"16 kran",  kondisi:"Baik", detail:"Terpisah putra dan putri, air bersih mengalir setiap hari." },
        { nama:"Sudut Baca Al-Qur'an", jumlah:"6 sudut",  kondisi:"Baik", detail:"Di setiap kelas, berisi Al-Qur'an dan Iqra' untuk program Tahfidz." },
      ],
    },
    {
      kategori:"Olahraga & Seni", ikon:"⚽",
      deskripsi:"Sarana pengembangan fisik, olahraga, dan bakat seni siswa.",
      items:[
        { nama:"Lapangan Olahraga Multifungsi", jumlah:"1 lapangan", kondisi:"Baik", detail:"Upacara, senam, futsal, voli. Ukuran 20×30 m, lantai paving block." },
        { nama:"Ruang Seni & Musik",            jumlah:"1 ruang",    kondisi:"Baik", detail:"Peralatan angklung, kostum tari, perlengkapan seni budaya." },
        { nama:"Ruang Tapak Suci",              jumlah:"1 ruang",    kondisi:"Baik", detail:"Matras latihan, cermin dinding, peralatan Tapak Suci." },
      ],
    },
    {
      kategori:"Fasilitas Umum", ikon:"🌿",
      deskripsi:"Sarana penunjang kenyamanan, kebersihan, dan keselamatan.",
      items:[
        { nama:"Kantin Sehat",          jumlah:"1 unit",    kondisi:"Baik", detail:"Makanan halal dan bergizi, diawasi tim kesehatan sekolah." },
        { nama:"Kamar Mandi & WC",      jumlah:"12 unit",   kondisi:"Baik", detail:"Terpisah putra, putri, dan guru. Dibersihkan setiap hari." },
        { nama:"Area Parkir",           jumlah:"1 area",    kondisi:"Baik", detail:"Parkir guru & tamu, area penjemputan siswa yang tertata." },
        { nama:"Taman & Area Hijau",    jumlah:"3 taman",   kondisi:"Baik", detail:"Suasana sekolah yang asri dan nyaman untuk belajar." },
        { nama:"CCTV",                  jumlah:"12 titik",  kondisi:"Baik", detail:"Pengawasan area sekolah 24 jam untuk keamanan." },
        { nama:"Akses Internet / WiFi", jumlah:"1 jaringan",kondisi:"Baik", detail:"WiFi di seluruh area untuk mendukung pembelajaran digital." },
      ],
    },
  ],

  // ══════════════════════════════════════════════════════════════
  //  KESISWAAN  (pages/kesiswaan.html, tata-tertib.html, bk.html)
  // ══════════════════════════════════════════════════════════════
  kesiswaan: {

    // Statistik ringkas siswa aktif
    statistik: [
      { angka:"487", label:"Siswa Aktif" },
      { angka:"12",  label:"Rombongan Belajar" },
      { angka:"3",   label:"Organisasi Siswa" },
      { angka:"8",   label:"Ekstrakulikuler Pilihan" },
    ],

    // Organisasi siswa di sekolah
    organisasi: [
      {
        nama:     "Ikatan Pelajar Muhammadiyah (IPM)",
        deskripsi:"Organisasi pelajar di bawah naungan Muhammadiyah. Membina karakter, keimanan, dan kepemimpinan siswa melalui kegiatan dakwah, sosial, dan pengembangan diri.",
        kegiatan: ["Kajian rutin keislaman", "Bakti sosial", "Pelatihan kepemimpinan pelajar", "Lomba dan kompetisi antar sekolah"],
        pembina:  "Ustadz Irfan Maulana, S.Pd.I.",
        ikon:     "🌙",
      },
      {
        nama:     "Dewan Keamanan Kelas (DKK)",
        deskripsi:"Perwakilan siswa per kelas yang bertugas menjaga ketertiban, membantu guru, dan menjadi penghubung aspirasi siswa kepada sekolah.",
        kegiatan: ["Piket harian kelas", "Sidang kelas bulanan", "Penyampaian aspirasi siswa"],
        pembina:  "Bapak Fahmi Ridwan, S.Pd.",
        ikon:     "🏛️",
      },
      {
        nama:     "UKS — Unit Kesehatan Sekolah",
        deskripsi:"Mendukung kesehatan seluruh warga sekolah melalui pemeriksaan rutin, P3K, penyuluhan, dan pembiasaan hidup bersih dan sehat.",
        kegiatan: ["Pemeriksaan kesehatan berkala", "Penyuluhan PHBS", "P3K dan penanganan siswa sakit", "Kelas dokter kecil"],
        pembina:  "Ibu Yuni Astuti, S.Kep.",
        ikon:     "🏥",
      },
    ],

    // Tata Tertib Siswa
    tataTertib: {
      terakhirDiperbarui: "Juli 2025",
      bab: [
        {
          judul: "Ketentuan Umum",
          pasal: [
            {
              nomor: 1,
              judul: "Kehadiran dan Ketepatan Waktu",
              poin: [
                "Siswa wajib hadir di sekolah setiap hari efektif pukul 06.30 WIB.",
                "Siswa yang terlambat lebih dari 15 menit wajib melapor ke guru piket sebelum masuk kelas.",
                "Ketidakhadiran karena sakit wajib disertai surat keterangan dokter atau surat izin orang tua.",
                "Ketidakhadiran tanpa keterangan lebih dari 3 hari berturut-turut akan ditindaklanjuti oleh wali kelas.",
                "Siswa tidak diperkenankan meninggalkan sekolah sebelum jam pelajaran selesai tanpa izin tertulis.",
              ],
            },
            {
              nomor: 2,
              judul: "Pakaian dan Penampilan",
              poin: [
                "Senin–Selasa: Seragam putih-merah lengkap dengan atribut sekolah.",
                "Rabu–Kamis: Seragam batik khas SD Muhammadiyah 01 Kukusan.",
                "Jumat: Pakaian muslim/muslimah (busana taqwa) berwarna putih.",
                "Olahraga: Seragam PJOK sesuai jadwal pelajaran.",
                "Siswa putra wajib berambut pendek, rapi, tidak disemir, dan tidak bergaya tidak Islami.",
                "Siswa putri wajib berjilbab rapi menutup aurat di lingkungan sekolah.",
                "Kuku harus pendek dan bersih. Tidak diperkenankan memakai aksesori berlebihan.",
              ],
            },
          ],
        },
        {
          judul: "Kewajiban Siswa",
          pasal: [
            {
              nomor: 3,
              judul: "Ibadah dan Akhlak",
              poin: [
                "Siswa wajib mengikuti sholat Dhuha dan Dzuhur berjamaah di sekolah.",
                "Siswa wajib mengikuti Tadarus Al-Qur'an dan program Tahfidz sesuai jadwal.",
                "Siswa wajib bersikap sopan santun kepada semua warga sekolah.",
                "Siswa wajib mengucapkan salam ketika bertemu guru dan sesama siswa.",
                "Siswa wajib menjaga kebersihan diri, kelas, dan lingkungan sekolah.",
              ],
            },
            {
              nomor: 4,
              judul: "Proses Pembelajaran",
              poin: [
                "Siswa wajib mengikuti seluruh mata pelajaran sesuai jadwal yang ditetapkan.",
                "Siswa wajib menyelesaikan tugas dan pekerjaan rumah tepat waktu.",
                "Siswa wajib membawa buku dan perlengkapan belajar yang diperlukan.",
                "Siswa dilarang menggunakan telepon genggam selama KBM tanpa izin guru.",
                "Siswa wajib mengikuti kegiatan kokurikuler dan ekstrakurikuler wajib (HW).",
              ],
            },
          ],
        },
        {
          judul: "Larangan",
          pasal: [
            {
              nomor: 5,
              judul: "Perilaku yang Dilarang",
              poin: [
                "Membawa dan mengonsumsi makanan atau minuman tidak halal di lingkungan sekolah.",
                "Membawa benda berbahaya, senjata tajam, atau bahan yang dapat membahayakan.",
                "Melakukan perundungan (bullying) dalam bentuk apapun kepada sesama siswa.",
                "Berkata kasar, kotor, atau tidak sopan kepada siapapun.",
                "Merusak atau mencuri milik sekolah atau warga sekolah lainnya.",
                "Membawa atau menyebarkan konten yang bertentangan dengan nilai Islam.",
                "Berkelahi atau melakukan tindakan kekerasan fisik.",
              ],
            },
          ],
        },
        {
          judul: "Sanksi",
          pasal: [
            {
              nomor: 6,
              judul: "Tingkatan Sanksi",
              poin: [
                "Peringatan lisan: diberikan oleh guru/wali kelas untuk pelanggaran pertama.",
                "Peringatan tertulis: surat pernyataan bermaterai yang ditandatangani siswa dan orang tua.",
                "Pemanggilan orang tua: untuk pelanggaran berulang atau berat.",
                "Skorsing: tidak diperkenankan mengikuti KBM sementara, maksimal 3 hari.",
                "Dikeluarkan dari sekolah: untuk pelanggaran sangat berat setelah melalui sidang dewan guru.",
              ],
            },
          ],
        },
      ],
    },

    // Bimbingan Konseling
    bk: {
      visi: "Terwujudnya peserta didik yang mandiri, bertanggung jawab, beriman, dan memiliki kematangan pribadi dalam menghadapi tantangan kehidupan.",
      misi: [
        "Membantu peserta didik mengenali potensi diri dan mengembangkannya secara optimal.",
        "Memberikan layanan konseling yang empatik, profesional, dan berlandaskan nilai Islam.",
        "Memfasilitasi perkembangan akademik, sosial, emosional, dan karir peserta didik.",
        "Membangun komunikasi yang harmonis antara siswa, orang tua, dan sekolah.",
      ],
      guru: {
        nama:      "Ibu Reni Kusuma, S.Psi.",
        jabatan:   "Guru Bimbingan Konseling",
        pendidikan:"S1 Psikologi",
        foto:      "https://picsum.photos/seed/g26/200/200",
        jam:       "Senin–Jumat · 08.00–14.00 WIB",
        ruangan:   "Ruang BK (sebelah Ruang UKS)",
      },
      layanan: [
        { ikon:"🧭", nama:"Layanan Orientasi",      deskripsi:"Membantu siswa baru mengenal lingkungan sekolah, kurikulum, dan aturan yang berlaku agar cepat beradaptasi." },
        { ikon:"📋", nama:"Layanan Informasi",       deskripsi:"Memberikan informasi tentang studi lanjut, potensi karir, dan berbagai hal yang berguna untuk perkembangan siswa." },
        { ikon:"💬", nama:"Konseling Individual",    deskripsi:"Sesi tatap muka privat antara guru BK dan siswa untuk menangani masalah pribadi, akademik, atau sosial secara rahasia." },
        { ikon:"👥", nama:"Konseling Kelompok",      deskripsi:"Bimbingan untuk sekelompok siswa yang menghadapi permasalahan serupa, melalui diskusi dan sharing pengalaman terbimbing." },
        { ikon:"🏠", nama:"Konsultasi Orang Tua",    deskripsi:"Sesi khusus dengan orang tua/wali untuk mendiskusikan perkembangan, kendala, dan strategi mendukung belajar anak di rumah." },
        { ikon:"🚨", nama:"Penanganan Kasus Khusus", deskripsi:"Penanganan segera untuk kasus perundungan, konflik antar siswa, atau masalah yang memerlukan intervensi cepat." },
      ],
      prosedur: [
        "Siswa datang langsung ke Ruang BK atau minta diantar wali kelas.",
        "Guru BK melakukan asesmen awal untuk memahami permasalahan.",
        "Layanan konseling diberikan sesuai kebutuhan siswa.",
        "Tindak lanjut dilakukan bersama orang tua dan wali kelas jika diperlukan.",
        "Kerahasiaan informasi dijaga sepenuhnya oleh guru BK.",
      ],
    },
  },
};