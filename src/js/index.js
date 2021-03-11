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