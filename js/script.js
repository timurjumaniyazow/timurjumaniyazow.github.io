$(document).ready(function(){
    $('.portfolio__slider').slick({
        speed: 300,
        slidesToShow: 2,
        prevArrow: '<button type="button" class="slick-next"><img src="img/icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-prev"><img src="img/icons/right.svg"></button>',
        appendArrows: $('.arrows'),
        centerMode: true
    });
  });