/**
 * ════════════════════════════════════════════════════════════════
 *  COMPONENTS.JS — SD Muhammadiyah 01 Kukusan
 *  Versi: 1.0  |  2026-05-15
 *
 *  Fungsi: merender Topbar, Header, dan Footer secara dinamis
 *  dari objek DATA yang didefinisikan di js/data.js.
 *
 *  CARA PAKAI DI SETIAP HALAMAN (pages/*.html):
 *  ─────────────────────────────────────────────
 *  1. Pastikan elemen placeholder ada di HTML:
 *
 *     <!-- Topbar -->
 *     <div class="topbar">
 *       <div class="topbar-inner">
 *         <div class="topbar-left" id="topbar-kontak"></div>
 *         <div class="topbar-right" id="topbar-ta"></div>
 *       </div>
 *     </div>
 *
 *     <!-- Header -->
 *     <header class="header">
 *       <div class="header-inner">
 *         <a href="../" class="logo-area" id="logo-link">
 *           <div class="logo-mark">
 *             <svg viewBox="0 0 40 40">
 *               <text x="20" y="28" text-anchor="middle"
 *                 font-family="Georgia,serif" font-size="18"
 *                 font-weight="bold" fill="white">SD</text>
 *             </svg>
 *           </div>
 *           <div class="logo-text">
 *             <strong id="header-nama"></strong>
 *             <small  id="header-tagline"></small>
 *           </div>
 *         </a>
 *         <nav id="nav-menu"></nav>
 *         <button class="hamburger" id="hamburger" aria-label="Menu">☰</button>
 *       </div>
 *     </header>
 *
 *     <!-- Footer -->
 *     <footer class="footer">
 *       <div class="container">
 *         <div class="footer-grid">
 *           <div class="footer-brand">
 *             <div class="logo-area">
 *               <div class="logo-mark"> ... </div>
 *               <div class="logo-text">
 *                 <strong id="footer-nama"></strong>
 *                 <small  id="footer-akreditasi"></small>
 *               </div>
 *             </div>
 *             <p id="footer-deskripsi"></p>
 *           </div>
 *           <div class="footer-col">
 *             <h5>Tautan Cepat</h5>
 *             <ul id="footer-links-utama"></ul>
 *           </div>
 *           <div class="footer-col">
 *             <h5>Portal</h5>
 *             <ul id="footer-links-portal"></ul>
 *           </div>
 *           <div class="footer-col">
 *             <h5>Kontak Kami</h5>
 *             <div class="footer-contact" id="footer-kontak"></div>
 *           </div>
 *         </div>
 *         <div class="footer-bottom">
 *           <p id="footer-copy"></p>
 *           <p>
 *             <a href="../pages/kebijakan-privasi.html">Kebijakan Privasi</a>
 *             &nbsp;&middot;&nbsp;
 *             <a href="../sitemap.xml">Sitemap</a>
 *           </p>
 *         </div>
 *       </div>
 *     </footer>
 *
 *  2. Muat script dalam urutan ini (sebelum </body>):
 *
 *     <script src="../js/data.js"></script>
 *     <script src="../js/components.js"></script>
 *     <script>
 *       // kode render spesifik halaman ini
 *     </script>
 *
 *  PENANDA HALAMAN AKTIF
 *  ─────────────────────
 *  Di setiap halaman, set variabel ini SEBELUM memuat components.js,
 *  atau gunakan atribut data-page di <body>:
 *
 *     <body data-page="profil">
 *
 *  Nilai data-page harus cocok dengan salah satu nav href
 *  (tanpa slash), misal: "profil", "akademik", "berita".
 *  Beranda (index.html) tidak perlu data-page.
 * ════════════════════════════════════════════════════════════════
 */

(function () {
  'use strict';

  /* ────────────────────────────────────────────────────────────
   *  Helper: shortcut getElementById
   * ──────────────────────────────────────────────────────────── */
  const $ = id => document.getElementById(id);

  /* ────────────────────────────────────────────────────────────
   *  resolveHref(href)
   *  Mengkonversi href root-relative (mis. "/profil") ke path
   *  relatif yang benar berdasarkan kedalaman halaman saat ini.
   *
   *  - Di root (index.html)   : "/profil" → "pages/profil.html"
   *  - Di pages/*.html        : "/profil" → "profil.html"
   * ──────────────────────────────────────────────────────────── */
  const hrefMap = {
    '/':               { root: './',                    pages: '../'                   },
    '/profil':         { root: 'pages/profil.html',     pages: 'profil.html'           },
    '/akademik':       { root: 'pages/akademik.html',   pages: 'akademik.html'         },
    '/kesiswaan':      { root: 'pages/kesiswaan.html',  pages: 'kesiswaan.html'        },
    '/berita':         { root: 'pages/berita.html',     pages: 'berita.html'           },
    '/pengumuman':     { root: 'pages/pengumuman.html', pages: 'pengumuman.html'       },
    '/kontak':         { root: 'pages/kontak.html',     pages: 'kontak.html'           },
    '/unduhan':        { root: 'pages/unduhan.html',    pages: 'unduhan.html'          },
    '/kesiswaan/ppdb': { root: 'pages/ppdb.html',       pages: 'ppdb.html'             },
    '/galeri/foto':    { root: 'pages/galeri-foto.html',pages: 'galeri-foto.html'      },
    '/agenda':         { root: 'pages/agenda.html',     pages: 'agenda.html'           },
    '/portal/siswa':       { root: 'pages/portal-siswa.html', pages: 'portal-siswa.html' },
    '/portal/guru':        { root: 'pages/portal-guru.html',  pages: 'portal-guru.html'  },
    '/portal/orang-tua':   { root: 'pages/portal-ortu.html',  pages: 'portal-ortu.html'  },
    '/login':          { root: 'pages/login.html',      pages: 'login.html'            },
  };

  function isInPagesDir() {
    return window.location.pathname.includes('/pages/');
  }

  function resolveHref(href) {
    const entry = hrefMap[href];
    if (!entry) return href;
    return isInPagesDir() ? entry.pages : entry.root;
  }

  /* ────────────────────────────────────────────────────────────
   *  Deteksi halaman aktif dari URL atau atribut data-page
   *
   *  Mengembalikan href (mis. "/profil") dari DATA.navigasi
   *  yang sesuai dengan halaman yang sedang dibuka.
   * ──────────────────────────────────────────────────────────── */
  function getActivePage() {
    // Prioritas 1: atribut data-page di <body>
    const tag = document.body.getAttribute('data-page');
    if (tag) return '/' + tag;

    // Prioritas 2: cocokkan path URL dengan href navigasi
    const path = window.location.pathname;
    if (path === '/' || path.endsWith('index.html')) return '/';

    let best = '';
    DATA.navigasi.forEach(item => {
      if (item.href === '/') return;
      // Cocokkan nama file atau segmen path
      const slug = item.href.replace(/^\//, ''); // "profil"
      if (path.includes(slug) && item.href.length > best.length) {
        best = item.href;
      }
    });
    return best;
  }

  /* ────────────────────────────────────────────────────────────
   *  renderTopbar()
   *  Mengisi #topbar-kontak dan #topbar-ta dari DATA.sekolah
   * ──────────────────────────────────────────────────────────── */
  function renderTopbar() {
    const el = $('topbar-kontak');
    const ta = $('topbar-ta');
    if (!el && !ta) return;

    const S = DATA.sekolah;

    if (el) {
      el.innerHTML = `
        <span>📞 ${S.telepon}</span>
        <span>✉ ${S.email}</span>
        <span>📍 ${S.alamatPendek}</span>`;
    }
    if (ta) {
      ta.textContent = `Tahun Ajaran ${S.tahunAjaran}`;
    }
  }

  /* ────────────────────────────────────────────────────────────
   *  renderHeader()
   *  Mengisi #header-nama, #header-tagline, dan #nav-menu
   *  dari DATA.sekolah + DATA.navigasi + DATA.navPPDB
   * ──────────────────────────────────────────────────────────── */
  function renderHeader() {
    const nama    = $('header-nama');
    const tagline = $('header-tagline');
    const nav     = $('nav-menu');
    if (!nav) return;

    const S      = DATA.sekolah;
    const active = getActivePage();

    if (nama)    nama.textContent    = S.nama;
    if (tagline) tagline.textContent = S.tagline;

    // Bangun link navigasi
    const fragment = document.createDocumentFragment();

    DATA.navigasi.forEach(item => {
      const a = document.createElement('a');
      a.href      = resolveHref(item.href);
      a.textContent = item.label;
      if (item.href === active) a.className = 'active';
      fragment.appendChild(a);
    });

    // Tombol PPDB
    const ppdb = document.createElement('a');
    ppdb.href      = resolveHref(DATA.navPPDB.href);
    ppdb.textContent = DATA.navPPDB.label;
    ppdb.className = 'btn-ppdb';
    fragment.appendChild(ppdb);

    nav.appendChild(fragment);
  }

  /* ────────────────────────────────────────────────────────────
   *  renderFooter()
   *  Mengisi semua elemen footer dari DATA.sekolah + DATA.footerLinks
   * ──────────────────────────────────────────────────────────── */
  function renderFooter() {
    const S    = DATA.sekolah;
    const FL   = DATA.footerLinks;
    const year = new Date().getFullYear();

    // Brand
    const nama    = $('footer-nama');
    const akred   = $('footer-akreditasi');
    const desc    = $('footer-deskripsi');
    if (nama)  nama.textContent    = S.nama;
    if (akred) akred.textContent   = S.akreditasi;
    if (desc)  desc.textContent    = S.deskripsiFooter;

    // Tautan Cepat
    const ulUtama = $('footer-links-utama');
    if (ulUtama && FL.utama) {
      ulUtama.innerHTML = FL.utama
        .map(l => `<li><a href="${resolveHref(l.href)}">${l.label}</a></li>`)
        .join('');
    }

    // Portal
    const ulPortal = $('footer-links-portal');
    if (ulPortal && FL.portal) {
      ulPortal.innerHTML = FL.portal
        .map(l => `<li><a href="${resolveHref(l.href)}">${l.label}</a></li>`)
        .join('');
    }

    // Kontak
    const kontak = $('footer-kontak');
    if (kontak) {
      kontak.innerHTML = `
        <div class="fc-row"><span class="icon">📍</span><span>${S.alamat}</span></div>
        <div class="fc-row"><span class="icon">📞</span><span>${S.telepon}</span></div>
        <div class="fc-row"><span class="icon">✉</span><span>${S.email}</span></div>
        <div class="fc-row"><span class="icon">🕐</span><span>${S.jamOperasional}</span></div>`;
    }

    // Copyright
    const copy = $('footer-copy');
    if (copy) {
      copy.innerHTML =
        `&copy; ${year} ${S.nama}. Hak cipta dilindungi.`;
    }
  }

  /* ────────────────────────────────────────────────────────────
   *  initHamburger()
   *  Toggle menu mobile — tambahkan class .is-open ke #nav-menu
   * ──────────────────────────────────────────────────────────── */
  function initHamburger() {
    const btn = $('hamburger');
    const nav = $('nav-menu');
    if (!btn || !nav) return;

    btn.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      btn.textContent        = open ? '✕' : '☰';
      btn.setAttribute('aria-expanded', open);
    });

    // Tutup menu jika klik di luar
    document.addEventListener('click', e => {
      if (nav.classList.contains('is-open') &&
          !nav.contains(e.target) &&
          e.target !== btn) {
        nav.classList.remove('is-open');
        btn.textContent = '☰';
        btn.setAttribute('aria-expanded', false);
      }
    });
  }

  /* ────────────────────────────────────────────────────────────
   *  initScrollTop()
   *  Tombol "kembali ke atas" — muncul setelah scroll 300 px
   * ──────────────────────────────────────────────────────────── */
  function initScrollTop() {
    // Buat tombol jika belum ada di HTML
    let btn = $('scroll-top');
    if (!btn) {
      btn = document.createElement('button');
      btn.id          = 'scroll-top';
      btn.title       = 'Kembali ke atas';
      btn.textContent = '↑';
      document.body.appendChild(btn);
    }

    window.addEventListener('scroll', () => {
      btn.classList.toggle('visible', window.scrollY > 300);
    }, { passive: true });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ────────────────────────────────────────────────────────────
   *  initComponents()
   *  Entry point — panggil semua fungsi init di atas.
   *  Dipanggil otomatis saat DOM siap.
   * ──────────────────────────────────────────────────────────── */
  function initComponents() {
    if (typeof DATA === 'undefined') {
      console.error('[components.js] DATA tidak ditemukan. ' +
        'Pastikan js/data.js dimuat SEBELUM js/components.js.');
      return;
    }
    renderTopbar();
    renderHeader();
    renderFooter();
    initHamburger();
    initScrollTop();
  }

  /* Jalankan setelah DOM siap */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initComponents);
  } else {
    initComponents(); // DOM sudah siap (script di akhir body)
  }

})();