// slick 메인 슬라이더
$('.main-slider').slick({
    slide: '.slide-box',
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: 'linear',
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    pauseOnFocus: false,
    vertical: false,
    draggable: true,
});

// slick 금융서비스 추천 금융상품
$('.product-list').slick({
    slide: '.product-box',
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'linear',
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    pauseOnFocus: false,
    vertical: false,
    draggable: true,
});

// 관심정보 탭메뉴
$('.section_2 .tab > li > .tab-list').hide();
$('.section_2 .tab > li > button.active + .tab-list').show();
$('.section_2 .tab > li > button').click(function(){
    $('.section_2 .tab > li > button').removeClass('active').siblings('.tab-list').hide();
    $(this).addClass('active').siblings('.tab-list').show();
})