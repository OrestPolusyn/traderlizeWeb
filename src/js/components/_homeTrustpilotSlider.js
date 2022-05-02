// const swiper = new Swiper('.swiper', {
//   slidesPerView: 3,
//   loop: true,
//   spaceBetween: 130,
//   navigation: {
//     nextEl: '.feedbacks__button-next',
//     prevEl: '.feedbacks__button-prev',
//   },
// });


$('.feedbacks__slider').slick({
  slidesToShow: 3,
  infinite: true,
  rows: 0,
  centered: true,
  responsive: [{
      breakpoint: 1440,
      settings: {
        // slidesToShow: 4,
      }
    },
    {
      breakpoint: 1180,
      settings: {
        // slidesToShow: 3,
      }
    },
  ]
})
