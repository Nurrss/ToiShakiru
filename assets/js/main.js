/*=============== SWIPER JS GALLERY ===============*/
let swiperCards = new Swiper(".gallery-cards", {
  loop: true,
  loopedSlides: 7,
  cssMode: true,
  effect: 'fade',
});
  
let swiperThumbs = new Swiper(".gallery-thumbs", {
  loop: true,
  loopedSlides: 7,
  slidesPerView: 3,
  centeredSlides: true,
  slideToClickedSlide: true,

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

swiperThumbs.controller.control = swiperCards;