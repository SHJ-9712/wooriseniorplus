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
    autoplay: false,
    autoplaySpeed: 1000,
    pauseOnHover: false,
    pauseOnFocus: false,
    vertical: false,
    draggable: true,
});