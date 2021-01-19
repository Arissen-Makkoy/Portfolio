if ($(window).width() < 992) {
  var swiper1 = new Swiper('.swiper1', {
    slidesPerView: 'auto',
    centeredSlides: true,
    freeMode: true,
      pagination: {
        el: '.swiper-pagination',
      },
  });
}

if ($(window).width() < 992) {
  var swiper2 = new Swiper('.swiper2', {
    loop: true,
    slidesPerView: 'auto',
    freeMode: true,
      pagination: {
        el: '.swiper-pagination',
      },
  });
}

var swiper3 = new Swiper('.swiper3', {
  loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
});



function burgerMenu(selector) {
  let menu = $(selector);
  let button = menu.find('.burger-menu_button', '.burger-menu_lines');
  let links = menu.find('.burger-menu_link');
  var overlay = menu.find('.burger-menu_overlay');

  button.on('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });

  links.on('click', () => toggleMenu());
  overlay.on('click', () => toggleMenu());

  function toggleMenu() {
    menu.toggleClass('burger-menu_active');

    if (menu.hasClass('burger-menu_active')) {
      $('body').css('overflow', 'hidden');
    } else {
      $('body').css('overflow', 'visible');
    }
  }
}

burgerMenu('.burger-menu');
