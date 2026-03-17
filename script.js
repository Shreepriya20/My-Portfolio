/* =============================================
   SCROLL REVEAL — fires on load + scroll
============================================= */
function revealElements() {
  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 80)
      el.classList.add("active");
  });
}
window.addEventListener("scroll", revealElements, { passive: true });
revealElements();

/* =============================================
   NAVBAR SCROLL STATE
============================================= */
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 40);
}, { passive: true });

/* =============================================
   HAMBURGER MOBILE MENU
============================================= */
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
hamburger.addEventListener("click", () => mobileMenu.classList.toggle("open"));
function closeMenu() { mobileMenu.classList.remove("open"); }

/* =============================================
   SPOTLIGHT (original hero behaviour)
============================================= */
const hero  = document.getElementById("hero");
const light = document.querySelector(".spotlight");
hero.addEventListener("mousemove", e => {
  const rect = hero.getBoundingClientRect();
  light.style.left = (e.clientX - rect.left - 160) + "px";
  light.style.top  = (e.clientY - rect.top  - 160) + "px";
});

/* =============================================
   PARTICLES (original)
============================================= */
const particlesContainer = document.getElementById("particles");
for (let p = 0; p < 55; p++) {
  const particle = document.createElement("div");
  particle.classList.add("particle");
  particle.style.left              = Math.random() * 100 + "vw";
  particle.style.top               = Math.random() * 100 + "vh";
  particle.style.animationDuration = (3 + Math.random() * 6) + "s";
  particle.style.animationDelay    = (Math.random() * 5) + "s";
  particlesContainer.appendChild(particle);
}

/* =============================================
   TYPING ANIMATION
   — cursor blinks while typing, disappears after done
============================================= */
const nameText     = "Shreepriya Karane";
const typedEl      = document.getElementById("typed-name");
const typingCursor = document.getElementById("typingCursor");
let tIdx = 0;

function typeChar() {
  if (tIdx < nameText.length) {
    typedEl.textContent += nameText[tIdx++];
    setTimeout(typeChar, 90 + Math.random() * 55);
  } else {
    // typing done — hide cursor permanently
    typingCursor.style.display = "none";
  }
}
setTimeout(typeChar, 600);

/* =============================================
   ROLE CAROUSEL — smooth slide transition
============================================= */
const roleItems = document.querySelectorAll(".role-item");
let rIdx = 0;

function rotateRole() {
  const current = roleItems[rIdx];
  current.classList.remove("active");
  current.classList.add("exit");
  setTimeout(() => current.classList.remove("exit"), 500);
  rIdx = (rIdx + 1) % roleItems.length;
  roleItems[rIdx].classList.add("active");
}
setTimeout(() => setInterval(rotateRole, 2400), 2800);

/* =============================================
   RESUME PREVIEW (defaultUrl + viewer)
============================================= */
const defaultUrl = {
  value: "Shreepriya_Karane_AI_Developer.pdf",
  kind: "viewer"
};

const previewBtn = document.getElementById("previewResumeBtn");
const previewSection = document.getElementById("resumePreview");
const previewFrame = document.getElementById("previewFrame");

if (previewBtn && previewSection && previewFrame) {
  previewBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const pdfUrl = defaultUrl.value || "Shreepriya_Karane_AI_Developer.pdf";
    previewFrame.src = pdfUrl;
    previewSection.style.display = "block";
    previewSection.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}
