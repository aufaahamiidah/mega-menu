const swiper1 = new Swiper('.slider1', {
    // direction: 'horizontal',
    // loop: true,
    slidesPerView: 1,
    cssMode: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

});

const swiper2 = new Swiper('.slider2', {
  direction: 'horizontal',
  loop: true,

  slidesPerView: 1,
  breakpoints: {
    576: {
      slidesPerView: 1, 
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    }
  },
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: ".slider1 .swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

const swiper3 = new Swiper('.slider3', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  grabCursor: true,
  allowTouchMove: true,
  pagination: {
    el: ".slider3 .swiper-pagination",
    clickable: true,
  },

});