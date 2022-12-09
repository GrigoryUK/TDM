import Swiper, { Navigation, Pagination, EffectFlip } from "swiper";
Swiper.use([Navigation, Pagination, EffectFlip]);

function sliderHorizontal() {
  const swiperH = new Swiper(".slider--horizontal", {
    slidesPerView: "auto",
    spaceBetween: 8,

    loop: true,

    navigation: {
      nextEl: ".sliderH__next",
      prevEl: ".sliderH__prev",
    },

    breakpoints: {
      // when window width is >= 320px
      576: {
        spaceBetween: 20,
      },

    },
  });




}

function sliderVertical() {
  const swiperV = new Swiper(".slider--vertical", {
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".sliderV__next",
      prevEl: ".sliderV__prev",
    },



  });
}

export { sliderHorizontal, sliderVertical };


// breakpoints: {
//   // when window width is >= 320px
//   320: {
//     slidesPerView: 2,
//     spaceBetween: 20
//   },
//   // when window width is >= 480px
//   480: {
//     slidesPerView: 3,
//     spaceBetween: 30
//   },
//   // when window width is >= 640px
//   640: {
//     slidesPerView: 4,
//     spaceBetween: 40
//   }
