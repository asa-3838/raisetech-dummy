const rellax = new Rellax('.rellax');

$(function() {
  $(".p-header__menu li").hover(
    function() {
      $(".sub-menu:not(:animated)", this).slideDown(120);
      $("a:hover:after").css('display', 'none');
    },
    function() {
      $(".sub-menu", this).slideUp(120);
    }
  );
});

document.addEventListener('DOMContentLoaded',function(){
  document.getElementById('active').addEventListener("click", function() {
    this.classList.toggle('open');
    $('#nav').slideToggle();
  })
});

$(window).on('resize', function(){
  var windowSize = $(window).width();
  if (windowSize > 1200) {
    $('#nav').css('display', 'block');
  } else {
      $('.nav__btn').removeClass('open');
      $('#nav').slideUp();
  }
});

$('.menu-item-has-children').hover(
  function(){
    $(this).removeClass('close');
  },
  function(){
    $(this).addClass('close');
  }
)