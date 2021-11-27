$(function(){

  $('.menu__btn').on('click', function() {
    $('.header').toggleClass('active');
  })

  $('.reviews__inner').slick({
    dots: true,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 3500,
  });

  $(".menu a, .header__link").on("click", function(e){
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - 60
    }, 1000);
});

  var mixer = mixitup('.works__content');

});

window.onscroll = function showHeader() {
  const header = document.querySelector('.header__top')
  const menu = document.querySelector('.menu')


  if (window.scrollY > 100) {
    header.classList.add('header__fixed')
    menu.style.padding = '15px 0'
  } else {
    header.classList.remove('header__fixed')
  }
}

