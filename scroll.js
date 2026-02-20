// Navbar Toggle
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Scroll Reveal Animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".fade-up").forEach(el => {
  observer.observe(el);
});
