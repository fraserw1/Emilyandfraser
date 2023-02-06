var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// RSVP

const pleaseOpen = document.getElementById("menuButton");
const close = document.getElementById("menuClose");

pleaseOpen.addEventListener ("click", openMenu);
close.addEventListener ("click", closeMenu);

function openMenu () {
  setTimeout(function () {
    document.querySelector (".menu").classList.add("menu-open");
    document.querySelector (".menu2").classList.add("hide");  
  }, 300);
};

function closeMenu () {
  setTimeout(function () {
    document.querySelector (".menu").classList.remove("menu-open");
    document.querySelector (".menu2").classList.remove("hide");
  }, 300);
};
