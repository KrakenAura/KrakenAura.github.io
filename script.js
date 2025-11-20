function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const companies = document.querySelectorAll(".company");
const contents = document.querySelectorAll(".exp-content");

companies.forEach((company) => {
  company.addEventListener("click", () => {
    // Hapus aktif di kiri
    companies.forEach((c) => c.classList.remove("active"));
    company.classList.add("active");

    // Tampilkan konten sesuai target
    const target = company.getAttribute("data-target");
    contents.forEach((c) => {
      if (c.id === target) {
        c.classList.add("active");
      } else {
        c.classList.remove("active");
      }
    });
  });
});

/* --- Kode JavaScript yang Diperbaiki (Gunakan ini) --- */

const carousel = document.getElementById("carousel");

const dotsContainer = document.getElementById("carouselDots");
const cards = document.querySelectorAll(".card");

const cardWidth = 520; 
let index = 0;

// Create dots
cards.forEach((_, i) => {
  const dot = document.createElement("button");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => {
    index = i;
    updateCarousel();
  });
  dotsContainer.appendChild(dot);
});

const dots = dotsContainer.querySelectorAll("button");

function updateCarousel() {
  carousel.scrollTo({
    left: index * cardWidth,
    behavior: "smooth",
  });

  dots.forEach((d) => d.classList.remove("active"));
  dots[index].classList.add("active");
}

setInterval(() => {
  index = (index + 1) % cards.length;
  updateCarousel();
}, 4000);
