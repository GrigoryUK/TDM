import Swiper, { Navigation, Pagination, EffectFlip } from "swiper";
Swiper.use([Navigation, Pagination, EffectFlip]);

function sliderHorizontal() {
  const swiperH = new Swiper(".slider--horizontal", {
    slidesPerView: "auto",
    spaceBetween: 20,

    loop: true,

    navigation: {
      nextEl: ".sliderH__next",
      prevEl: ".sliderH__prev",
    },
  });

  const swiperV = new Swiper(".slider--vertical", {
    slidesPerView: "auto",
    spaceBetween: 30,
   
    loop: true,

    // effect: "flip",
    // flipEffect: {
    //   slideShadows: false,
    //   limitRotation: false,
    // },

    navigation: {
      nextEl: ".sliderV__next",
      prevEl: ".sliderV__prev",
    },
  });
}

export { sliderHorizontal };
