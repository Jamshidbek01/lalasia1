$('.slider').slick({
    prevArrow: '<img src="img/right.svg" class="left">',
    nextArrow: '<img src="img/left.svg" class="right">',
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    appendDots: '.dots',
    autoplay: true,
    autoplaySpeed: 3000
});
$('.product-slider').slick({
    prevArrow: '<div><img src="img/Vector2.svg" class="left"></div>',
    nextArrow: '<div><img src="img/Vector1.svg" class="right"></div>',
    appendArrows: '.arrow',
    autoplay: true,
    autoplaySpeed: 3000
});


$(function () {
    $(".burger").click(function () {
        $(this).toggleClass("open");
        $('.mobil-menu').toggleClass("activee");
    });
});
