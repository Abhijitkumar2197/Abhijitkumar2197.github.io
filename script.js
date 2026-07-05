// ===== Config =====
const EMAIL = "kumarabhijit2197@gmail.com";
const GITHUB_URL = "https://github.com/Abhijitkumar2197"; // unhides all GitHub links

// ===== Rotating word in the hero =====
const words = ["reliable", "scalable", "secure", "intelligent"];
const rotateEl = document.getElementById("rotateWord");
let wordIdx = 0;
setInterval(() => {
  wordIdx = (wordIdx + 1) % words.length;
  rotateEl.classList.remove("swap");
  void rotateEl.offsetWidth; // restart animation
  rotateEl.textContent = words[wordIdx];
  rotateEl.classList.add("swap");
}, 2600);

// ===== Scroll reveal with automatic stagger =====
// Siblings that enter together get an incremental delay, so grids cascade.
const revealEls = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    const entering = entries.filter((e) => e.isIntersecting);
    entering.forEach((entry, i) => {
      entry.target.style.setProperty("--stagger", `${Math.min(i * 0.09, 0.45)}s`);
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
);
revealEls.forEach((el) => revealObserver.observe(el));

// ===== Count-up stats =====
function animateCount(el) {
  const target = parseFloat(el.dataset.count);
  const decimals = (el.dataset.count.split(".")[1] || "").length;
  const dur = 1400;
  const t0 = performance.now();
  function tick(now) {
    const p = Math.min((now - t0) / dur, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = (target * eased).toFixed(decimals);
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
const statObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        animateCount(e.target);
        statObserver.unobserve(e.target);
      }
    });
  },
  { threshold: 0.6 }
);
document.querySelectorAll(".stat-num").forEach((el) => statObserver.observe(el));

// ===== Photo tilt (subtle, follows cursor) =====
const tilt = document.getElementById("photoTilt");
if (tilt && matchMedia("(hover: hover)").matches) {
  tilt.addEventListener("mousemove", (e) => {
    const r = tilt.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    tilt.style.transform = `perspective(700px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
  });
  tilt.addEventListener("mouseleave", () => {
    tilt.style.transform = "perspective(700px) rotateY(0deg) rotateX(0deg)";
  });
}

// ===== Cursor spotlight on cards =====
document.querySelectorAll(".spotlight").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - r.left}px`);
    card.style.setProperty("--my", `${e.clientY - r.top}px`);
  });
});

// ===== Copy email + toast =====
const toast = document.getElementById("toast");
let toastTimer;
function showToast() {
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}
function fallbackCopy() {
  const ta = document.createElement("textarea");
  ta.value = EMAIL;
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand("copy"); } catch (e) { /* last resort below */ }
  ta.remove();
  showToast();
}
function copyEmail() {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(EMAIL).then(showToast).catch(fallbackCopy);
  } else {
    fallbackCopy();
  }
}
["copyEmail", "copyEmail2"].forEach((id) => {
  const btn = document.getElementById(id);
  if (btn) btn.addEventListener("click", copyEmail);
});

// ===== Scroll progress + back-to-top =====
const progressBar = document.getElementById("progressBar");
const toTop = document.getElementById("toTop");
function onScroll() {
  const max = document.documentElement.scrollHeight - innerHeight;
  progressBar.style.width = `${(scrollY / max) * 100}%`;
  toTop.classList.toggle("show", scrollY > 600);
}
addEventListener("scroll", onScroll, { passive: true });
onScroll();
toTop.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));

// ===== Mobile menu =====
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  navLinks.classList.toggle("open");
});
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    menuBtn.classList.remove("open");
    navLinks.classList.remove("open");
  })
);

// ===== Active nav link on scroll =====
const sections = document.querySelectorAll("main section");
const linkMap = {};
navLinks.querySelectorAll("a[href^='#']").forEach((a) => {
  linkMap[a.getAttribute("href").slice(1)] = a;
});
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.querySelectorAll("a").forEach((a) => a.classList.remove("active"));
      const link = linkMap[entry.target.id];
      if (link) link.classList.add("active");
    });
  },
  { rootMargin: "-35% 0px -60% 0px" }
);
sections.forEach((s) => sectionObserver.observe(s));

// ===== GitHub links (unhide once GITHUB_URL is set) =====
if (GITHUB_URL) {
  document.querySelectorAll(".gh-link").forEach((a) => {
    a.href = GITHUB_URL;
    a.hidden = false;
    a.target = "_blank";
    a.rel = "noopener";
  });
}

// ===== Footer year =====
document.getElementById("year").textContent = new Date().getFullYear();
