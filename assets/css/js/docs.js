/* JNS Pro Field Guide — docs behaviour (iDocs-style, no dependencies) */
(function () {
  'use strict';

  /* ---------- Build nested sidebar nav from h1/h2 headings ---------- */
  var prose = document.getElementById('prose');
  var navList = document.getElementById('docs-nav-list');
  var links = [];   // { el: <a>, target: <heading> }

  if (prose && navList) {
    var headings = prose.querySelectorAll('h1[id], h2[id]');
    var currentSubList = null;

    headings.forEach(function (h) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = '#' + h.id;
      a.textContent = h.textContent;
      li.appendChild(a);

      if (h.tagName === 'H1') {
        li.className = 'nav-section';
        navList.appendChild(li);
        currentSubList = document.createElement('ul');
        li.appendChild(currentSubList);
      } else if (currentSubList) {
        li.className = 'nav-sub';
        currentSubList.appendChild(li);
      } else {
        navList.appendChild(li);
      }
      links.push({ el: a, target: h });
    });
  }

  /* ---------- Smooth scroll with header offset ---------- */
  var HEADER_OFFSET = 72;

  function scrollToHash(hash, push) {
    var target = hash && document.querySelector(hash);
    if (!target) return;
    var top = target.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
    window.scrollTo({ top: top, behavior: 'smooth' });
    if (push && history.pushState) history.pushState(null, '', hash);
  }

  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#"]');
    if (!a) return;
    var hash = a.getAttribute('href');
    if (hash.length < 2) return;
    e.preventDefault();
    scrollToHash(hash, true);
    closeSidebar();
  });

  /* ---------- Scrollspy ---------- */
  var activeLink = null;

  function setActive(link) {
    if (link === activeLink) return;
    if (activeLink) {
      activeLink.classList.remove('active');
      var oldSection = activeLink.closest('.nav-section');
      if (oldSection) oldSection.classList.remove('active-section');
    }
    activeLink = link;
    if (activeLink) {
      activeLink.classList.add('active');
      var section = activeLink.closest('.nav-section');
      if (section) section.classList.add('active-section');
      // keep the active item visible in the sidebar
      var sb = document.getElementById('docs-sidebar');
      if (sb && sb.scrollHeight > sb.clientHeight) {
        var r = activeLink.getBoundingClientRect();
        var sr = sb.getBoundingClientRect();
        if (r.top < sr.top + 40 || r.bottom > sr.bottom - 40) {
          activeLink.scrollIntoView({ block: 'center' });
        }
      }
    }
  }

  function onScroll() {
    if (!links.length) return;
    var probe = HEADER_OFFSET + 24;
    var current = links[0];
    for (var i = 0; i < links.length; i++) {
      if (links[i].target.getBoundingClientRect().top - probe <= 0) current = links[i];
      else break;
    }
    setActive(current.el);
  }

  var ticking = false;
  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(function () { onScroll(); ticking = false; });
      ticking = true;
    }
  }, { passive: true });

  /* ---------- Mobile sidebar ---------- */
  var sidebar = document.getElementById('docs-sidebar');
  var backdrop = document.getElementById('sidebar-backdrop');
  var toggle = document.getElementById('sidebar-toggle');

  function openSidebar() {
    sidebar.classList.add('open');
    backdrop.hidden = false;
    toggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('sidebar-open');
  }
  function closeSidebar() {
    if (!sidebar || !sidebar.classList.contains('open')) return;
    sidebar.classList.remove('open');
    backdrop.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('sidebar-open');
  }
  if (toggle) {
    toggle.addEventListener('click', function () {
      sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
    });
  }
  if (backdrop) backdrop.addEventListener('click', closeSidebar);

  /* ---------- Back to top ---------- */
  var backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', function () {
      backToTop.classList.toggle('visible', window.pageYOffset > 600);
    }, { passive: true });
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- Preloader ---------- */
  var preloader = document.getElementById('preloader');
  function hidePreloader() {
    if (!preloader) return;
    preloader.classList.add('done');
    setTimeout(function () { preloader.remove(); }, 400);
  }
  if (document.readyState === 'complete') hidePreloader();
  else window.addEventListener('load', hidePreloader);
  setTimeout(hidePreloader, 2500); // never trap the user behind it

  /* ---------- Initial state ---------- */
  onScroll();
  if (location.hash) {
    setTimeout(function () { scrollToHash(location.hash, false); }, 50);
  }
})();
