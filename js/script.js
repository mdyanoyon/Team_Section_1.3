var swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  // init: false,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    640: {
      slidesPerView:1.2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView:1.3,
      spaceBetween: 25,
    },
    1024: {
      slidesPerView:1.3,
      spaceBetween: 30,
    },
  }
});
