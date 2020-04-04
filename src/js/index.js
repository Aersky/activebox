import slick from 'slick-carousel';

$(function () {

    /*$('.burger__menu').on('click', function () {
        $('.burger__menu,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
*/
    let $slider = $('[data-slider]');
    $slider.slick({
        infinite: true,
        // fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // centerMode: true,
        arrows: false,
        dots: true,
        // anim: true,
        // interval: 5000
    
    });


    // let introHeight = $('.intro').height();//без раддинга

    let scrollPos = $(window).scrollTop();
    let introHeight = $('.intro').innerHeight();


    // добавляем сразу 2 события скролл и загрузка страницы
    $(window).on('scroll load resize', function () {

        introHeight = $('.intro').innerHeight();
        scrollPos = $(this).scrollTop();

        if (introHeight < scrollPos) {
            $('.header').addClass('fixed');
        }

        if (scrollPos < 150) {
            $('.header').removeClass('fixed');
        }
    });


    $('.burger').on('click', function () {
        $('.burger,.header-nav').toggleClass('active');
        $('body').toggleClass('lock');
    });

    //при клике по пунктам меню убираем классы
    $('li').on('click', function () {
        $('.burger,.header-nav').removeClass('active');
        $('body').removeClass('lock');
    });

    //Плавное перемещение к секциям по клику пунктов меню
    $('a[href*="#"]').on('click', function (e) {
        $('html,body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 500);
        e.preventDefault();
    });

    $('.intro-logo').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 500);
    });

});
