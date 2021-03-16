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