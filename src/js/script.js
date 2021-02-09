//slick slider
$(document).ready(function(){
  $('.carousel__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<button type="button" class="slick-prev"><img src="../icons/prev.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../icons/next.png"></button>',
    responsive: [
      {
        breakpoint: 992,
          settings: {
            arrows: false,
          }
      }
    ]

  });
});