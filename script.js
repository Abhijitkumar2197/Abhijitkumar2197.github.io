// ===== Rotating word in the hero =====
const words = ["reliable", "scalable", "secure", "intelligent"];
const rotateEl = document.getElementById("rotateWord");
let wordIdx = 0;
setInterval(() => {
  wordIdx = (wordIdx + 1) % words.length;
  rotateEl.classList.remove("swap");
  // force reflow so the animation restarts
  void rotateEl.offsetWidth;
  rotateEl.textContent = words[wordIdx];
  rotateEl.classList.add("swap");
}, 2600);

// ===== Scroll reveal =====
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

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
const sections = document.querySelectorAll("section[id]");
const linkMap = {};
navLinks.querySelectorAll("a[href^='#']").forEach((a) => {
  linkMap[a.getAttribute("href").slice(1)] = a;
});
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const link = linkMap[entry.target.id];
      if (!link) return;
      if (entry.isIntersecting) {
        navLinks.querySelectorAll("a").forEach((a) => a.classList.remove("active"));
        link.classList.add("active");
      }
    });
  },
  { rootMargin: "-35% 0px -60% 0px" }
);
sections.forEach((s) => sectionObserver.observe(s));

// ===== GitHub link (unhide once a real profile URL is set) =====
const gh = document.getElementById("githubLink");
const GITHUB_URL = ""; // e.g. "https://github.com/your-username"
if (GITHUB_URL) {
  gh.href = GITHUB_URL;
  gh.hidden = false;
  gh.target = "_blank";
  gh.rel = "noopener";
}

// ===== Footer year =====
document.getElementById("year").textContent = new Date().getFullYear();
