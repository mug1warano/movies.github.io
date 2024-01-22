let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

var swiper = new Swiper(".home", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/// swiper
var swiper = new Swiper(".coming-container", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 2, // Perbaikan: Menggunakan slidesPerView
    },
    568: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    968: {
      slidesPerView: 5,
    },
  },
});

//toggle class active hamburger menu
const navbar = document.querySelector(".navbar");

//ketika tombol menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbar.classList.toggle("active");
};

//ketika klik diluar elemen
const hm = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove("active");
  }
});
