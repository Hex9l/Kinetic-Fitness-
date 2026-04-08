/* ══════════════════════════════════════════════
   KINETIC X JOHN — VANILLA JS CORE
   ══════════════════════════════════════════════ */

"use strict";

/* ── GSAP Plugin Registration ── */
gsap.registerPlugin(ScrollTrigger);

/* ────────────────────────────
   1. LENIS SMOOTH SCROLLING
──────────────────────────── */
const lenis = new Lenis();
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
lenis.on("scroll", ScrollTrigger.update);

/* ────────────────────────────
   2. LUCIDE ICONS
──────────────────────────── */
lucide.createIcons();

/* ────────────────────────────
   3. PRELOADER
──────────────────────────── */
(function initPreloader() {
  const preloader = document.getElementById("preloader");
  const fill = document.querySelector(".preloader-fill");
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 15;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      fill.style.width = "100%";
      setTimeout(() => {
        gsap.to(preloader, {
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          onComplete: () => { preloader.style.display = "none"; initPage(); }
        });
      }, 300);
    }
    fill.style.width = progress + "%";
  }, 60);
})();

/* ────────────────────────────
   4. MAIN PAGE INIT (runs after preloader)
──────────────────────────── */
function initPage() {
  initNavbar();
  initCursor();
  initScrollProgress();
  initHero();
  initMarquee();
  initCountUps();
  initScrollAnimations();
  initFAQ();
  initMobileMenu();
  initScrollTop();
  initBookingForm();
}

/* ────────────────────────────
   5. NAVBAR
──────────────────────────── */
function initNavbar() {
  const nav = document.getElementById("navbar");

  // Entrance
  gsap.to(nav, {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power4.out",
    delay: 0.2
  });

  // Scroll state
  window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  }, { passive: true });
}

/* ────────────────────────────
   6. CUSTOM CURSOR
──────────────────────────── */
function initCursor() {
  const dot  = document.getElementById("cursor-dot");
  const ring = document.getElementById("cursor-ring");
  let mx = -100, my = -100;

  window.addEventListener("mousemove", (e) => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.left  = mx + "px";
    dot.style.top   = my + "px";
  });

  // Delayed ring follow
  let rx = -100, ry = -100;
  function animateRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + "px";
    ring.style.top  = ry + "px";
    requestAnimationFrame(animateRing);
  }
  animateRing();

  document.querySelectorAll("a, button, .faq-trigger, .result-card, .pricing-card").forEach(el => {
    el.addEventListener("mouseenter", () => {
      ring.style.width = "56px";
      ring.style.height = "56px";
      dot.style.transform = "translate(-50%,-50%) scale(0)";
    });
    el.addEventListener("mouseleave", () => {
      ring.style.width = "36px";
      ring.style.height = "36px";
      dot.style.transform = "translate(-50%,-50%) scale(1)";
    });
  });
}

/* ────────────────────────────
   7. SCROLL PROGRESS BAR
──────────────────────────── */
function initScrollProgress() {
  const bar = document.getElementById("scroll-progress");
  window.addEventListener("scroll", () => {
    const total  = document.body.scrollHeight - window.innerHeight;
    const pct    = (window.scrollY / total) * 100;
    bar.style.width = pct + "%";
  }, { passive: true });
}

/* ────────────────────────────
   8. HERO ANIMATIONS
──────────────────────────── */
function initHero() {
  // Reveal text lines
  gsap.to(".hero-headline", {
    opacity: 1, y: 0, duration: 1.2, ease: "expo.out", delay: 0.3
  });
  gsap.to(".hero-sub", {
    opacity: 1, y: 0, duration: 1, ease: "expo.out", delay: 0.6
  });
  gsap.from(".hero-btns", {
    y: 30, opacity: 0, duration: 1, ease: "expo.out", delay: 0.9
  });

  // Hero window entrance + mouse tilt
  gsap.from(".hero-window", {
    scale: 0.95, opacity: 0, duration: 1.5, ease: "expo.out", delay: 0.2
  });

  const win = document.getElementById("heroWindow");
  if (win) {
    win.addEventListener("mousemove", (e) => {
      const { left, top, width, height } = win.getBoundingClientRect();
      const x = (e.clientX - (left + width / 2)) / 25;
      const y = (e.clientY - (top + height / 2)) / 25;
      gsap.to(win, {
        rotateY: x, rotateX: -y,
        duration: 0.8, ease: "power3.out",
        transformPerspective: 1000, overwrite: "auto"
      });
    });
    win.addEventListener("mouseleave", () => {
      gsap.to(win, {
        rotateY: 0, rotateX: 0,
        duration: 1.2, ease: "power3.out", overwrite: "auto"
      });
    });
  }
}

/* ────────────────────────────
   9. MARQUEE TICKER
──────────────────────────── */
function initMarquee() {
  const track = document.getElementById("marqueeTrack");
  if (!track) return;
  const totalWidth = track.scrollWidth / 2;
  gsap.to(track, {
    x: -totalWidth,
    duration: 30,
    ease: "none",
    repeat: -1
  });
}

/* ────────────────────────────
   10. COUNT-UP NUMBERS
──────────────────────────── */
function initCountUps() {
  document.querySelectorAll(".countup").forEach(el => {
    const target = parseFloat(el.dataset.target);
    const suffix = el.dataset.suffix || "";
    const obj = { val: 0 };

    ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: "expo.out",
          onUpdate: () => {
            el.textContent = Math.floor(obj.val) + suffix;
          }
        });
      }
    });
  });
}

/* ────────────────────────────
   11. SCROLL-TRIGGERED REVEAL ANIMATIONS
──────────────────────────── */
function initScrollAnimations() {
  // Stat cards
  gsap.to(".stat-card", {
    opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "expo.out",
    scrollTrigger: { trigger: ".stat-card", start: "top 80%", once: true }
  });

  // About cards
  gsap.to(".about-main-card", {
    opacity: 1, y: 0, duration: 1, ease: "expo.out",
    scrollTrigger: { trigger: ".about-main-card", start: "top 75%", once: true }
  });
  gsap.to(".about-card", {
    opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: "expo.out",
    scrollTrigger: { trigger: ".about-features", start: "top 75%", once: true }
  });

  // Result cards
  gsap.to(".result-card", {
    opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "expo.out",
    scrollTrigger: { trigger: "#results", start: "top 70%", once: true }
  });

  // Pricing cards
  gsap.to(".pricing-card", {
    opacity: 1, y: 0, duration: 0.9, stagger: 0.1, ease: "expo.out",
    scrollTrigger: { trigger: "#pricing", start: "top 70%", once: true }
  });

  // Testimonials
  gsap.to(".testimonial-card", {
    opacity: 1, scale: 1, duration: 1, stagger: 0.1, ease: "expo.out",
    scrollTrigger: { trigger: "#testimonials", start: "top 75%", once: true }
  });

  // Lead magnet
  gsap.to(".lead-card", {
    opacity: 1, scale: 1, duration: 1.2, ease: "expo.out",
    scrollTrigger: { trigger: ".lead-card", start: "top 70%", once: true }
  });

  // FAQ
  gsap.to(".faq-item", {
    opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "expo.out",
    scrollTrigger: { trigger: ".faq-list", start: "top 75%", once: true }
  });

  // Section headings generic
  gsap.utils.toArray("h2").forEach(el => {
    gsap.from(el, {
      y: 30, opacity: 0, duration: 1, ease: "expo.out",
      scrollTrigger: { trigger: el, start: "top 85%", once: true }
    });
  });
}

/* ────────────────────────────
   12. FAQ ACCORDION
──────────────────────────── */
function initFAQ() {
  const items = document.querySelectorAll(".faq-item");

  items.forEach(item => {
    const trigger = item.querySelector(".faq-trigger");
    const answer  = item.querySelector(".faq-answer");
    const toggleEl = item.querySelector(".faq-toggle");

    trigger.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");

      // Close all
      items.forEach(i => {
        i.classList.remove("active");
        const a = i.querySelector(".faq-answer");
        const t = i.querySelector(".faq-toggle");
        gsap.to(a, { height: 0, opacity: 0, duration: 0.4, ease: "power2.out", onComplete: () => { a.style.display = "none"; } });
        t.innerHTML = '<i data-lucide="plus"></i>';
      });

      // Open clicked if it was closed
      if (!isOpen) {
        item.classList.add("active");
        answer.style.display = "block";
        gsap.from(answer, { height: 0, opacity: 0, duration: 0.5, ease: "power3.out" });
        gsap.to(answer, { height: "auto", opacity: 1, duration: 0.5, ease: "power3.out" });
        toggleEl.innerHTML = '<i data-lucide="minus"></i>';
      }

      // Re-render lucide icons for dynamically injected ones
      lucide.createIcons();
    });
  });
}

/* ────────────────────────────
   13. MOBILE MENU
──────────────────────────── */
function initMobileMenu() {
  const overlay  = document.getElementById("mobile-overlay");
  const drawer   = document.getElementById("mobile-drawer");
  const openBtn  = document.getElementById("mobile-menu-btn");
  const closeBtn = document.getElementById("mobile-close-btn");
  const links    = document.querySelectorAll(".drawer-link, .drawer-cta");

  function open() {
    overlay.classList.add("open");
    drawer.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function close() {
    overlay.classList.remove("open");
    drawer.classList.remove("open");
    document.body.style.overflow = "";
  }

  openBtn.addEventListener("click", open);
  closeBtn.addEventListener("click", close);
  overlay.addEventListener("click", close);
  links.forEach(link => link.addEventListener("click", close));
}

/* ────────────────────────────
   14. SCROLL TO TOP
──────────────────────────── */
function initScrollTop() {
  document.getElementById("scrollTopBtn").addEventListener("click", () => {
    lenis.scrollTo(0, { duration: 1.5 });
  });
}

/* ────────────────────────────
   15. BOOKING FORM
──────────────────────────── */
function initBookingForm() {
  const form = document.getElementById("bookingForm");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = form.querySelector(".btn--submit");
    const original = btn.innerHTML;
    btn.innerHTML = 'APPLICATION SENT <i data-lucide="check"></i>';
    btn.style.background = "#22c55e";
    lucide.createIcons();
    setTimeout(() => {
      btn.innerHTML = original;
      btn.style.background = "";
      lucide.createIcons();
      form.reset();
    }, 3000);
  });
}
