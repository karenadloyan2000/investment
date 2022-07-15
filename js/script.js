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

var diagram = $('.diagram').position().top;

$(window).scroll(function (x) {
  var bodyTop = $(document).scrollTop();
  console.log(bodyTop);

  if (bodyTop > 100) {
    $('header').css({
      background: 'white',
      transition: '0.3s',
      boxShadow: '0 2px 28px 0 rgb(0 0 0 / 6%)',
      padding: '15px 0 0 0',
    });

    $('.dasketop-menu>li>').css({
      color: '#3B566E',
    });

    $('.logo-white').show(500);
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
      $('.mobile-menu').css({
        top: '95px',
        transition: '0.3s',
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

  if (bodyTop > diagram) {
    var a = 0;

    $('.counter-value').each(function () {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text(),
      }).animate(
        {
          countNum: countTo,
        },
        {
          duration: 2000,
          easing: 'swing',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
            //alert('finished');
          },
        }
      );
    });
    a = 1;
  }
});
