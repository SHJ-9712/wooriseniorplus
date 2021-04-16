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

// 퀵메뉴
var quickList = $('.quick-menu > ul > li');
var contents = $('.main .quick-stc');
var header_h = $('header').outerHeight();
quickList.click(function(e){
    e.preventDefault();
    var target = $(this);
    var idx = target.index();
    var section = contents.eq(idx);
    var sec_pos = parseInt(section.offset().top);
    if(idx == 0) {
        $('html, body').stop().animate({scrollTop: 0});
    } else {
        $('html, body').stop().animate({scrollTop: sec_pos - header_h});
    }
});
$(window).scroll(function(){
    var st = $(window).scrollTop();
    contents.each(function(){
        var target = $(this);
        var idx = target.index();
        var pos = parseInt(target.offset().top) - header_h;
        if(pos <= st) {
            quickList.removeClass('on');
            quickList.eq(idx).addClass('on');
        } else if(idx == 0) {
            quickList.removeClass('on');
            quickList.eq(0).addClass('on');
        }
    });
});

// happycall 약관보기 모달
$('.happycall .check > .btn-policy').click(function(){
    $('.policy').show();
});
$('.policy .overlay .modal .close').click(function(){
    $('.policy').hide();
});