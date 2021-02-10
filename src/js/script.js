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

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

});

