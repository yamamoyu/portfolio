//ハンバーガーメニューのイベント
$(function () {

  function open() {
    $('.hamburger-box').addClass('open').removeClass('close');
    $('.hamburger-menu').addClass('open').removeClass('close');
    $('.mask').addClass('open');
  };

  function close() {
    $('.hamburger-box').removeClass('open').addClass('close');
    $('.hamburger-menu').removeClass('open').addClass('close');
    $('.mask').removeClass('open');
  };

  let flag=false;
  $('.hamburger-box').on('click',function (){
    if(flag===false) {
      open();
      flag=true;
    } else {
      close();
      flag=false;
    }
  });

  $('.mask,.hamburger-menu-list li').on('click',function (){
    if(flag===true) {
      close();
    }
  });
});


//画面スクロールイベント
$(function (){
  $(window).scroll(function(){
    const scroll=$(window).scrollTop();
    const windowHeight=$(window).height();

    $('.works-item').each(function(){
      const elePos = $(this).offset().top;
      if (scroll + windowHeight - 50 > elePos){
        $(this).css({
          'opacity':'1',
          'transform':'translateY(0)',
          'transition':'.5s ease-out',
        });
      }
    });
  });
});


//カーソルイベント
$(function (){
  $('.header-nav li,.hamburger-menu-list li,.pages-thumbnail p,.top-btn').mouseover(function(){
    $(this).addClass('mouse');
  });
  $('.header-nav li,.hamburger-menu-list li,.pages-thumbnail p,.top-btn').mouseout(function() {
    $(this).removeClass('mouse');
  });
});


//スムーススクロール
$(function (){
  $('a[href^="#"]').click(function(){
    let adjust = 50;
    let speed = 500;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top - adjust;

    $('body,html').animate({scrollTop:position},speed, 'swing');

  });
});


