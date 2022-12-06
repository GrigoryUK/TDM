import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

function sliderHorizontal() {
  const swiperH = new Swiper('.slider--horizontal', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: true,

    navigation: {
      nextEl: '.sliderH__next',
      prevEl: '.sliderH__prev',
    },
  });

  const swiperV = new Swiper('.slider--vertical', {
    slidesPerView: 'auto',

    loop: true,

    navigation: {
      nextEl: '.sliderV__next',
      prevEl: '.sliderV__prev',
    },
  });
}

export {sliderHorizontal}

