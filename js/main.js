document.documentElement.classList.add("js");

/* Build cards from data.js */
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

function cardHTML(item) {
  const tags = (item.tags || []).map(t => `<span>${esc(t)}</span>`).join("");
  const links = [
    item.demo && `<a href="${esc(item.demo)}" target="_blank" rel="noopener">Open project</a>`,
    item.code && `<a href="${esc(item.code)}" target="_blank" rel="noopener">View code</a>`
  ].filter(Boolean).join("");
  return `<article class="card reveal">
    ${item.date ? `<p class="meta">${esc(item.date)}</p>` : ""}
    <h3>${esc(item.title)}</h3>
    <p>${esc(item.description)}</p>
    ${tags ? `<div class="tags">${tags}</div>` : ""}
    ${links ? `<div class="card-links">${links}</div>` : ""}
  </article>`;
}

function render(id, list, emptyText) {
  const el = document.getElementById(id);
  el.innerHTML = list.length ? list.map(cardHTML).join("") : `<p class="empty">${emptyText}</p>`;
}
render("projects-grid", projects, "Projects will appear here soon.");
render("assignments-grid", assignments, "Assignments will appear here soon.");

/* Scroll reveal */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

/* Navbar: background on scroll, mobile menu, active link */
const nav = document.getElementById("nav");
const burger = document.getElementById("burger");
const links = document.getElementById("links");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 20);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

burger.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  burger.setAttribute("aria-expanded", open);
});
links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  links.classList.remove("open");
  burger.setAttribute("aria-expanded", "false");
}));

const navLinks = [...links.querySelectorAll("a:not(.btn)")];
const spy = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
  });
}, { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("main section[id]").forEach(s => spy.observe(s));

/* Hero spotlight follows the pointer */
const hero = document.getElementById("home");
hero.addEventListener("pointermove", e => {
  const r = hero.getBoundingClientRect();
  hero.style.setProperty("--mx", (e.clientX - r.left) + "px");
  hero.style.setProperty("--my", (e.clientY - r.top) + "px");
});

document.getElementById("year").textContent = new Date().getFullYear();
