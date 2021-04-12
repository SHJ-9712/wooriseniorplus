// 상단 메뉴
const $gnb = $('.gnb');
const $mainMenu = $('.gnb .menu');
const $subMenu = $('.gnb .menu > li > .lnb');
$mainMenu.mouseenter(function(){
    $subMenu.stop().slideDown(300);
    $gnb.addClass('layout');
});
$mainMenu.mouseleave(function(){
    $subMenu.stop().slideUp(300);
    $gnb.removeClass('layout');
});

// partners
$('.partner-list').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    pauseOnFocus: false,
    vertical: false,
    draggable: true,
});

// footer 패밀리 사이트
const $familySite = $('footer .need-help .site-link button[type="button"]');
const $siteList = $('footer .need-help .site-link > ul');
$familySite.click(function(){
    $(this).toggleClass('show');
    $($siteList).slideToggle();
});