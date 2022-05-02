$('.teachers__slider').slick({
  arrows: false,
  slidesToShow: 5,
  infinite: true,
  rows: 0,
  centered: true,
  responsive: [{
      breakpoint: 1440,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 1180,
      settings: {
        slidesToShow: 3,
      }
    },
  ]
})
