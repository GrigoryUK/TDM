import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

function sliderHorizontal() {
  const swiper = new Swiper('.slider--horizontal', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: true,

    navigation: {
      nextEl: '.sliderH__next',
      prevEl: '.sliderH__prev',
    },
  });
}

export {sliderHorizontal}

