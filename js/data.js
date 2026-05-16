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
    telepon:         "(021) 7862947",
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

  // ──────────────────────────────────────────────────────────────
  //  PENGUMUMAN
  //  Urutan: terbaru di atas. Hanya 5 teratas yang ditampilkan.
  //  baru: true  → tampil badge "Baru" (gunakan hanya untuk yang benar-benar baru)
  // ──────────────────────────────────────────────────────────────
  pengumuman: [
    {
      tanggal: "14", bulan: "Mei",
      judul:   "Jadwal Ujian Akhir Semester Genap 2025/2026",
      detail:  "Ujian dilaksanakan 2–13 Juni 2026",
      baru:    true,
    },
    {
      tanggal: "10", bulan: "Mei",
      judul:   "Batas Pembayaran SPP Bulan Mei 2026",
      detail:  "Via transfer / QRIS, batas 20 Mei 2026",
      baru:    false,
    },
    {
      tanggal: "2", bulan: "Mei",
      judul:   "Pendaftaran Ekstrakulikuler Tahun Ajaran Baru",
      detail:  "Dibuka 1–31 Mei 2026 via portal siswa",
      baru:    false,
    },
    {
      tanggal: "20", bulan: "Apr",
      judul:   "PPDB Tahun Ajaran 2026/2027 Resmi Dibuka",
      detail:  "Pendaftaran online dan offline tersedia",
      baru:    false,
    },
    {
      tanggal: "15", bulan: "Apr",
      judul:   "Rapat Komite Sekolah Semester Genap",
      detail:  "Sabtu, 20 Apr 2026 pukul 09.00 WIB",
      baru:    false,
    },
  ],

  // ──────────────────────────────────────────────────────────────
  //  BERITA TERBARU
  //  Hanya 3 teratas yang ditampilkan di beranda.
  //  foto: path lokal atau URL. href: link ke halaman berita penuh.
  // ──────────────────────────────────────────────────────────────
  berita: [
    {
      kategori: "🏆 Prestasi",
      judul:    "Tim Robotik SD Muhammadiyah 01 Raih Juara 2 Tingkat Kota Depok",
      ringkasan:"Enam siswa kelas 5 berhasil membawa pulang medali perak dalam Kompetisi Robotik Tingkat Kota Depok yang diselenggarakan oleh Dinas Pendidikan...",
      tanggal:  "10 Mei 2026",
      dibaca:   "234",
      foto:     "https://picsum.photos/seed/berita1/310/235",
      href:     "/berita/robotik-juara-2",
    },
    {
      kategori: "🎨 Kegiatan",
      judul:    "Pelaksanaan Projek P5 Tema \"Suara Demokrasi\" Kelas 4 dan 5",
      ringkasan:"Siswa kelas 4 dan 5 antusias mengikuti kegiatan Projek Penguatan Profil Pelajar Pancasila dengan tema Suara Demokrasi...",
      tanggal:  "5 Mei 2026",
      dibaca:   "189",
      foto:     "https://picsum.photos/seed/berita2/310/235",
      href:     "/berita/p5-suara-demokrasi",
    },
    {
      kategori: "📖 Program",
      judul:    "Program Tahfidz Quran Kelas 1–3 Mulai Diterapkan Semester Genap",
      ringkasan:"Mulai semester genap 2025/2026, sekolah menerapkan program hafalan Al-Quran sebagai bagian dari kurikulum unggulan...",
      tanggal:  "28 Apr 2026",
      dibaca:   "312",
      foto:     "https://picsum.photos/seed/berita3/310/235",
      href:     "/berita/tahfidz-semester-genap",
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

};