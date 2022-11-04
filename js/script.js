$(document).ready(function(){
    $('.portfolio__slider').slick({
        speed: 300,
        prevArrow: '<button type="button" class="slick-next"><img src="img/icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-prev"><img src="img/icons/right.svg"></button>',
        appendArrows: $('.portfolio__arrows'),
        slidesToShow: 2,
        variableWidth: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });
    $('.team__list__mobile').slick({
        speed: 300,
        prevArrow: '<button type="button" class="slick-next"><img src="img/icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-prev"><img src="img/icons/right.svg"></button>',
        appendArrows: $('.team__arrows'),
        slidesToShow: 1,
        variableWidth: true,
    });
});
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    });
});