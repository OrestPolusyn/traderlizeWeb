const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  loop: true,
  spaceBetween: 130,
  navigation: {
    nextEl: '.feedbacks__button-next',
    prevEl: '.feedbacks__button-prev',
  },
});
