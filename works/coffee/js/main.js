// ハンバーガーメニューのイベント
$(function () {

  function open() {
    $('.toggle-btn').addClass('open').removeClass('close');
    $('.hamburger-menu').addClass('open').removeClass('close');
    $('.mask').addClass('open');
  };

  function close(){
    $('.toggle-btn').removeClass('open').addClass('close');
    $('.hamburger-menu').removeClass('open').addClass('close');
    $('.mask').removeClass('open');
  }

  let flag=false;
  $('.toggle-btn').on('click',function (){
    if (flag===false) {
      open();
      flag=true;
    } else {
      close();
      flag=false;
    }
  });

  $('.mask').on('click',function (){
    if (flag===true) {
      close();
    }
  })

});




// 商品ページのスクロール時のフェードイン


$(function(){


  $(window).scroll(function(){
    $('.product-item,.main-category-item,.main-category-item-gift,.news-list li').css({
      'opacity':'0',
      'transform':'translateY(10px)',
    });

    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();

    $('.product-item,.main-category-item,.main-category-item-gift,.news-list li').each(function(){
      const elePos = $(this).offset().top;
      if (scroll + windowHeight - 100 > elePos){  //画面底の座標から縦に-100した位置より小さい座標の時に実行される
        $(this).css({
          'opacity':'1',
          'transform':'translateY(0px)',
          'transition':'.7s ease-out',
        });
      }
    });
  });
});



  //メインページのスクロールアニメーション

  $(function (){

    $(window).scroll(function(){

          const scroll = $(window).scrollTop();
          const windowHeight = $(window).height();
  
          $('.main-about-img1,.concept-top-img,.concept-bottom-img').each(function(){
               const elePos =$(this).offset().top;
               if(scroll + windowHeight - 250 > elePos){
                  $(this).css({
                     'opacity':'1',
                     'transform':'translateX(0%)',
                     'transition':'.7s ease-out',
                   });
                }
          });


          $('.main-about-text-box,.concept-text-box').each(function(){
               const elePos =$(this).offset().top;
               if(scroll + windowHeight - 250 > elePos){
                  $(this).css({
                     'opacity':'1',
                     'transform':'translateX(0%)',
                     'transition':'.7s ease-out',
                   });
                }
           });
    });

  });






//ABOUTページのストーリー、PRODUCTページのカテゴリーのアニメーション
$(function (){
  $(window).scroll(function(){
    $('.story-box').css({
      'opacity':'0',
      'transform':'translateY(-10px)',
    });
   

    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();

    $('.story-box,.product-category-item').each(function(){
      const elePos =$(this).offset().top;
      if (scroll + windowHeight - 200 > elePos){
        $(this).css({
          'opacity':'1',
          'transform':'translateY(0px)',
        });
        $('.first-story-box').css({
          'transition':'.5s ease-in-out',
        });

        $('.second-story-box').css({
          'transition':'.8s ease-in-out',
        });
        $('.third-story-box').css({
          'transition':'1.1s ease-in-out',
        });


        $('.all-category').css({
          'transition':'.3s ease-in-out',
        });
        $('.coffee-category').css({
          'transition':'.4s ease-in-out',
        });
        $('.sweets-category').css({
          'transition':'.5s ease-in-out',
        })
        $('.instant-category').css({
          'transition':'.6s ease-in-out',
        });
        $('.goods-category').css({
          'transition':'.7s ease-in-out',
        });
        $('.gift-category').css({
          'transition':'.8s ease-in-out',
        });
      }
    });
  });
});


//マウスイベント
$(function (){
  $('.product-category-item p,.main-category-item p,.main-category-item-gift p,.about-btn,.product-btn').mouseover(function (){
    $(this).addClass('mouse');
  });
  $('.product-category-item p,.main-category-item p,.main-category-item-gift p,.about-btn,.product-btn').mouseout(function (){
    $(this).removeClass('mouse');
  });
});






//メインビジュアル画像切り替え
$(function () {


  function fadein() {
    $('.mv-img').addClass('mv-1');
    $('.mv-img').removeClass('mv-5');

    $('.mv-img').fadeIn(2000,'swing',function(){ 
      setTimeout(fadeout, 3000); 
    });
  };

  function fadeout() {
    $('.mv-img').fadeOut(500, 'swing',function(){setTimeout(fadein2,0);
    });
  };
 
  

  function fadein2(){
    $('.mv-img').addClass('mv-2');
    $('.mv-img').removeClass('mv-1');
    $('.mv-img').fadeIn(2000,'swing',function(){ 
      setTimeout(fadeout2, 5000); 
    });
  };

  function fadeout2() {
    $('.mv-img').fadeOut(500,'swing',function(){ setTimeout(fadein3, 0);
    });
  };


  function fadein3() {
    $('.mv-img').addClass('mv-3');
    $('.mv-img').removeClass('mv-2');
    $('.mv-img').fadeIn(2000,'swing',function(){ 
      setTimeout(fadeout3, 5000); 
    });
  };

  function fadeout3() {
    $('.mv-img').fadeOut(500,'swing',function(){ setTimeout(fadein4, 0);
    });
  };

  function fadein4() {
    $('.mv-img').addClass('mv-4');
    $('.mv-img').removeClass('mv-3');
    $('.mv-img').fadeIn(2000,'swing',function(){ 
      setTimeout(fadeout4, 5000);
    });
  };

  function fadeout4() {
    $('.mv-img').fadeOut(500,'swing',function(){ setTimeout(fadein5, 0);
    });
  };

  function fadein5() {
    $('.mv-img').addClass('mv-5');
    $('.mv-img').removeClass('mv-4');
    $('.mv-img').fadeIn(2000,'swing',function(){
      setTimeout(fadeout5,5000);
    });
  };

  function fadeout5() {
    $('.mv-img').fadeOut(500,'swing',function(){ setTimeout(fadein, 0);
    });
  };


  fadein();
});


