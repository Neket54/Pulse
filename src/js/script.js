$(document).ready(function(){

    //slider
    $('.carousel__inner').slick({
        autoplay: true,
        autoplaySpedd: 2000,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/fourth_screen/slider/chevron-left-solid.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/fourth_screen/slider/chevron-right-solid.png"></button>',
    });

    //tabs
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    $('.catalog-item__link').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
    })

    $('.catalog-item__back').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
    })

    //modal
    $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #consultation').fadeIn('slow');
    });

    $('.catalog-item__btn').on('click', function () {
        $('.overlay, #buing').fadeIn('slow');
    });

    $('.modal__close').on('click', function () {
        $('.overlay, #consultation, #buing, #thanks').fadeOut('slow');
    })

    $('.catalog-item__btn').each(function (i) {
        $(this).on('click', function () {
            $('#buing .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #buing').fadeIn('slow'); 
        })
    })
});