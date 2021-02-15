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

    function toggleSlide(item) {
      $(item).each(function(i) {
      $(this).on('click', function(e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      })
    });
    }
    
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__list');


    // Modal
    $('[data-modal=consultation]').on('click', function() {
      $('.overlay, #consultation').fadeIn('fast');
    });

    $('.modal__close').on('click', function() {
      $('.overlay, #consultation, #thanks, #order').fadeOut('fast');
    });

    $('.button_mini').each(function(i) {
      $(this).on('click', function() {
      $('.overlay, #order').fadeIn('fast');
      $('#order .modal__descr').text(
        $('.catalog-item__subtitle').eq(i).text()
      );
      });
    });


    // Validation

   function validateForms(form) {
    $(form) .validate({
        rules: {
          name: "required",
          phone: "required",
          email: {
            required: true,
            email: true
          }
        },
        messages: {
          name: "Пожалуйста введите Ваше имя",
          phone: "Пожалуйста введите Ваш номер телефона",
          email: {
            required: "Нужен email адресс чтобы связаться с вами",
            email: "Ваш email адресс должен быть в формате name@domain.com"
          }
        }
      });
   }

   validateForms('#consultation-form');
   validateForms('#consultation form');
   validateForms('#order form');

});

