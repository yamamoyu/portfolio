$(function () {

  // ハンバーガーメニューのクリックイベント


   function open(){
    $('.toggle_btn').addClass('open');
    $('#navi').addClass('open').removeClass('close');
    $('#navi ul').removeClass('close');
    $('.site-title').addClass('open');
    $('#mask').addClass('open');
   };

   function close(){
    $('.toggle_btn').removeClass('open');
    $('#navi').removeClass('open').addClass('close');
    $('#navi ul').addClass('close');
    $('.site-title').removeClass('open');
    $('#mask').removeClass('open');
   };

   let flag=false;

   $('.toggle_btn').on('click',function (){
    if (flag===false) {
      open();
      flag=true;
    } else{
      close();
      flag=false;
    }
   });

   $('#mask').on('click',function (){
    if (flag===true) {
      close ();
    }
   });

   $('.nav-menu li a').on('click',function (){
    if (flag===true) {
      close ();
    }
   });




  // ページ内リンクのイベント
  $(function(){
    $('a[href^="#"]').click(function(){
      var href=$(this).attr("href");
      var speed=400;
      var adjust=100;
      var target=$(href == "#"||href == "" ? 'html' : href);
      var position=target.offset().top - adjust;
      $('html,body').animate({scrollTop:position},speed,'swing');
      return false;
    });
  });

  // カルーセル表示と自動再生
  $(function(){
    $('.slick-area').slick({
      autoplay:true,
      autoplaySpeed:0,
      speed:5000,
      cssEase:"linear",
      swipe:false,
      arrows:false,
      pauseOnFocus:true,
      pauseOnHover:true,
      slidesToShow:3,
      centerMode:true,
      centerPadding:"7%",
      responsive:[
        {
          breakpoint:481,
          settings:{
            slidesToShow:1,
          },
        },
      ],
    });
  });

  // スクロール時の画像のフィードイン
  $(function(){
    $(window).scroll(function(){
      $('.item').css({
        'opacity':'0',
        'transform':'translateY(10px)',
      });
      const scroll =$(window).scrollTop();
      const windowHeight =$(window).height();
      $('.item').each(function(){
        const elePos=$(this).offset().top;
        if (scroll > elePos - windowHeight + 100){
          $(this).css({
            'opacity':'1',
            'transform':'translateY(0)',
          })
        }
      })
    });
  });

});
