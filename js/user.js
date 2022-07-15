$('.open-nav-language').click(function () {
  $('.languages-navbar').slideToggle();
});
$('.drow-profile').click(function () {
  $('.profile-drow').slideToggle();
});
$('.open-menu').click(function () {
  $('.nav-bar').animate(
    {
      left: 0,
    },
    500
  );
});
$('.close-menu').click(function () {
  $('.nav-bar').animate(
    {
      left: '-338px',
    },
    500
  );
});

$('.open-setting-menu').click(function () {
  $('.profile-seting-drow').slideToggle();
});

$('.copy-link').click(function () {
  var link = $('.link-referance').select();
  document.execCommand('copy');
  $('.text-copy').empty();
  $('.text-copy').html('copied');
  setTimeout(function () {
    $('.text-copy').html('Copy');
  }, 2000);
});

$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function () {
  $(this).toggleClass('open');
  $('.mobile-menu').slideToggle();
});

$(document).ready(function () {
  $('html, body').animate(
    {
      scrollTop: 0,
    },
    1
  );
});

$(window).scroll(function (x) {
  var bodyTop = $(document).scrollTop();
  //   console.log(bodyTop);

  if (bodyTop > 100) {
    $('header').css({
      background: 'white',
      transition: '0.3s',
      boxShadow: '0 2px 28px 0 rgb(0 0 0 / 6%)',
      padding: '15px 0 0 0',
    });
    $('.drow-profile').css({
      color: '#3B566E',
    });
    $('.dasketop-menu>li>').css({
      color: '#3B566E',
    });

    $('.logo-white').hide(500);
    $('.logo-black').show(500);

    $('.login-btn').css({
      border: '1px solid #4886FF',
      color: '#4886FF',
      transition: '0.3s',
    });
    if (window.matchMedia('(max-width: 900px)').matches) {
      $('.mobile-menu').css({
        top: '70px',
        transition: '0.3s',
      });
    }
  } else {
    $('.logo-white').show(500);
    $('.logo-black').hide(500);

    $('.drow-profile').css({
      color: 'white',
    });

    if (window.matchMedia('(max-width: 900px)').matches) {
      $('header').css({
        background: 'white',
        transition: '0.3s',
        boxShadow: 'none',
        padding: '40px 0 0 0',
      });
      $('.mobile-menu').css({
        top: '95px',
        transition: '0.3s',
      });
    } else {
      $('header').css({
        background: 'none',
        transition: '0.3s',
        boxShadow: 'none',
        padding: '40px 0 0 0',
      });
    }

    $('.dasketop-menu>li>').css({
      color: 'white',
      transition0: '0.3s',
    });

    $('.login-btn').css({
      border: '1px solid white',
      color: 'white',
      transition: '0.3s',
    });
  }

  /*number animatio */
});
$('.tab-block:first').show();
$('.button-tab').click(function () {
  index = $(this).index();
  $('.tab-block').hide();
  $('.tab-block').hide().eq(index).show();
});
$('.button-tab').click(function () {
  $('.button-tab-chek').removeClass('button-tab-chek');
  $(this).addClass('button-tab-chek');
});
