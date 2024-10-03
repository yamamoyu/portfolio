$(function(){
  var open = $('.works__slider-photo'),
  close = $('.modal-close'),
  container = $('.modal-container');
  mask = $('.modal-mask');

  open.on('click',function(){
    container.addClass('active');
    mask.addClass('active');
    return false;
  });

  close.on('click',function(){
    container.removeClass('active');
    mask.removeClass('active');
  });

});







// ----------------------------------------------------------
// Hamburger menu
// ----------------------------------------------------------
$(function(){
    $('.header__hamburger').on('click', function() {
      $(this).toggleClass('active');
      $(".header__nav").toggleClass('active');
      return false;
    });
});

// ----------------------------------------------------------
// page link
// ----------------------------------------------------------
$(function(){
  $('.header__list li a[href^="#"]').on('click', function(){
    var speed = 600;
    var href= $(this).attr("href");
    console.log(href)
    var target = $(href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

// ----------------------------------------------------------
// scroll event
// ----------------------------------------------------------
$(function(){
  $('section').waypoint(function(direction){
      var activePoint = $(this.element);
      if (direction === 'down') { //scroll down
          activePoint.addClass('active');
      }
  },{offset : '100%'});
});


// ----------------------------------------------------------
// Works Slider
// ----------------------------------------------------------
jQuery.prototype.mousedragscrollable = function () {
    let target;
    $(this).each(function (i, e) {
      $(e).mousedown(function (event) {
        event.preventDefault();
        target = $(e);
        $(e).data({
          down: true,
          move: false,
          x: event.clientX,
          y: event.clientY,
          scrollleft: $(e).scrollLeft(),
          scrolltop: $(e).scrollTop(),
        });
        return false;
      });
      $(e).click(function (event) {
        if ($(e).data("move")) {
          return false;
        }
      });
    });
    $(document)
      .mousemove(function (event) {
        if ($(target).data("down")) {
          event.preventDefault();
          let move_x = $(target).data("x") - event.clientX;
          let move_y = $(target).data("y") - event.clientY;
          if (move_x !== 0 || move_y !== 0) {
            $(target).data("move", true);
          } else {
            return;
          }
          $(target).scrollLeft($(target).data("scrollleft") + move_x);
          $(target).scrollTop($(target).data("scrolltop") + move_y);
          return false;
        }
      })
      .mouseup(function (event) {
        $(target).data("down", false);
        return false;
      });
};
$(".slider").mousedragscrollable();


// ----------------------------------------------------------
// Footer Module
// ----------------------------------------------------------
$(function(){
   
    // 「.modal_open」をクリックしたらモーダルと黒い背景を表示する
    $('.modal_open').click(function(){
   
      // 黒い背景をbody内に追加
      $('body').append('<div class="modal_bg"></div>');
      $('.modal_bg').fadeIn();
   
      // data-targetの内容をIDにしてmodalに代入
      var modal = '#' + $(this).attr('data-target');
   
      // モーダルをウィンドウの中央に配置する
      function modalResize(){
          var w = $(window).width();
          var h = $(window).height();
   
          var x = (w - $(modal).outerWidth(true)) / 2;
          var y = (h - $(modal).outerHeight(true)) / 2;
   
          $(modal).css({'left': x + 'px','top': y + 'px'});
      }
   
      // modalResizeを実行
      modalResize();
   
      // modalをフェードインで表示
      $(modal).fadeIn();
   
      // .modal_bgか.modal_closeをクリックしたらモーダルと背景をフェードアウトさせる
      $('.modal_bg, .modal_close').off().click(function(){
          $('.modal_box').fadeOut();
          $('.modal_bg').fadeOut('slow',function(){
              $('.modal_bg').remove();
          });
      });
   
      // ウィンドウがリサイズされたらモーダルの位置を再計算する
      $(window).on('resize', function(){
          modalResize();
      });
   
      // .modal_switchを押すとモーダルを切り替える
      $('.modal_switch').click(function(){
   
        // 押された.modal_switchの親要素の.modal_boxをフェードアウトさせる
        $(this).parents('.modal_box').fadeOut();
   
        // 押された.modal_switchのdata-targetの内容をIDにしてmodalに代入
        var modal = '#' + $(this).attr('data-target');
   
        // モーダルをウィンドウの中央に配置する
        function modalResize(){
            var w = $(window).width();
            var h = $(window).height();
   
            var x = (w - $(modal).outerWidth(true)) / 2;
            var y = (h - $(modal).outerHeight(true)) / 2;
   
            $(modal).css({'left': x + 'px','top': y + 'px'});
        }
   
        // modalResizeを実行
        modalResize();
   
        $(modal).fadeIn();
   
        // ウィンドウがリサイズされたらモーダルの位置を再計算する
        $(window).on('resize', function(){
            modalResize();
        });
      });
    });
});

// ----------------------------------------------------------
// Slider Module
// ----------------------------------------------------------
$(function(){
	function setSliderModal(target){

		//モーダルウィンドウのリサイズ
		function resizeModal(imgW, imgH){
			var ww = $(window).width();
			var wh = $(window).height();
			var dh = $(document).height();
			if( $.isNumeric(imgW) && $.isNumeric(imgH) ) $('#slider__modal__box').width( imgW * 1.5 ).height(wh * 0.8);
			var boxTop = Math.floor((wh-$('#slider__modal__box').innerHeight())/2)+$(window).scrollTop();
			var boxLeft = Math.floor((ww-$('#slider__modal__box').innerWidth())/2);
			$('#slider__modal__box').offset({ top: boxTop, left: boxLeft });
			$('#slider__modal__Content').width(ww).height(dh);
			$('#slider__modal__Overlay').width(ww).height(dh);
		};

		//モーダルウィンドウ内の画像を読み込み完了
		function loadedModal(src, w, h, text, info){
			$('#slider__modal__box-picture-title').text(text);
			$('#slider__modal__box-info').html(info);
			$('#slider__modal__box-picture-img').attr('src', src);
			$('#slider__modal__box-loading').fadeOut( function(){ $('#slider__modal__box-picture-img').fadeIn(); } );
			resizeModal(w, h);
		};

		//モーダルウィンドウ内の画像を読み込む
		function loadModal(src, text, info){
			var img = new Image();
			$(img).on('load', function(){ loadedModal(src, img.width, img.height, text, info); }).attr('src', src);
		};

		//モーダルウィンドウを表示する
		function openModal(src, text, info){
			$('#slider__modal__box-picture-img').hide();
			$('#slider__modal__box-closeBtn').fadeIn();
			$('#slider__modal__box-loading').fadeIn();
			$('#slider__modal__Content').fadeIn();
			resizeModal(80, 80);
			loadModal(src, text, info);
		};

		//モーダルウィンドウを非表示にする
		function closeModal(){
			$('#slider__modal__Content').fadeOut(function(){ $('#slider__modal__Content').hide(); });
		};

		//モーダルウィンドウを生成する
		function createModal(){
			$('<div>', {
				'id': 'slider__modal__Content',
				'html': `<div id="slider__modal__Overlay"></div>
                 <div id="slider__modal__box">
                    <figure id="slider__modal__box-picture"><figcaption id="slider__modal__box-picture-title"></figcaption><img id="slider__modal__box-picture-img"></<figure>
                    <div id="slider__modal__box-info"></div>
                    <div id="slider__modal__box-closeBtn"><button>Close Modal</button></div>
                    <p id="slider__modal__box-loading"></p>
                  </div>`
			}).appendTo('body');
			$('#slider__modal__Overlay').css({
				'background': '#000',
				'opacity': 0.8
			});
			$('#slider__modal__Content').hide();
		};

		//モーダルウィンドウ要素のイベントを設定する
		function setModalEvent(){
			target.find('.slider__slide .slider__slide-achor').each(function(index){
				$(this).on('click', function(){
          let title = $(this).find(".slider__slide-title").text()
          let info = $(this).find(".slider__slide-info").html()
          openModal( $(this).attr('href'), title, info );
					return false;

				});
			});
			$('#slider__modal__box-closeBtn').on('click', closeModal);
			$('#slider__modal__Overlay').on('click', closeModal);
			$(window).on('resize', resizeModal);
		};

		//初期設定
		function init(){
			createModal();
			setModalEvent();
		};

		init();

	};

	setSliderModal($('.slider'));

  
});


// ----------------------------------------------------------
// Blog Module
// ----------------------------------------------------------
function setModalPhotos(target){

  //モーダルウィンドウのリサイズ
  function resizeModal(imgW, imgH){
    var ww = $(window).width();
    var wh = $(window).height();
    var dh = $(document).height();
    if( $.isNumeric(imgW) && $.isNumeric(imgH) ) $('#blog__modal__box').width( imgW ).height( imgH * 1.2 );
    var boxTop = Math.floor((wh-$('#blog__modal__box').innerHeight())/2)+$(window).scrollTop();
    var boxLeft = Math.floor((ww-$('#blog__modal__box').innerWidth())/2);
    $('#blog__modal__box').offset({ top: boxTop, left: boxLeft });
    $('#blog__modal__content').width(ww).height(dh);
    $('#blog__modal__Overlay').width(ww).height(dh);
  };

  //モーダルウィンドウ内の画像を読み込み完了
  function loadedModal(src, w, h, title, date, text,category){
    $('#blog__modal__box-title').text(title);
    $('#blog__modal__box-date').text(date);
    $('#blog__modal__box-text').text(text);
    $('#blog__modal__box-category').html(category);
    $('#blog__modal__box-picture-img').attr('src', src);
    $('#blog__modal__box-loading').fadeOut( function(){ $('#blog__modal__box-picture-img').fadeIn(); } );
    resizeModal(w, h);
  };

  //モーダルウィンドウ内の画像を読み込む
  function loadModal(src, title,date,text, category){
    var img = new Image();
    $(img).on('load', function(){ loadedModal(src, img.width, img.height, title, date, text, category); }).attr('src', src);
  };

  //モーダルウィンドウを表示する
  function openModal(src, title, date, text, category){
    $('#blog__modal__box-picture-img').hide();
    $('#blog__modal__box-title').fadeIn();
    $('#blog__modal__box-closeBtn').fadeIn();
    $('#blog__modal__box-loading').fadeIn();
    $('#blog__modal__content').fadeIn();
    resizeModal(80, 80);
    loadModal(src, title, date, text, category);
  };

  //モーダルウィンドウを非表示にする
  function closeModal(){
    $('#blog__modal__content').fadeOut(function(){ $('#blog__modal__content').hide(); });
  };

  //モーダルウィンドウを生成する
  function createModal(){
    $('<div>', {
      'id': 'blog__modal__content',
      'html': `<div id="blog__modal__Overlay"></div>
               <div id="blog__modal__box">
                  <p id="blog__modal__box-title"></p>
                  <p id="blog__modal__box-date"></p>
                  <div id="blog__modal__box-picture">
                      <img id="blog__modal__box-picture-img">
                  </div>
                  <p id="blog__modal__box-text"></p>
                  <div id="blog__modal__box-category"></div>
                  <div id="blog__modal__box-closeBtn"><button>Close Modal</button></div>
                  <p id="blog__modal__box-loading"></p>
              </div>`
    }).appendTo('body');
    $('#blog__modal__Overlay').css({
      'background': '#000',
      'opacity': 0.8
    });
    $('#blog__modal__content').hide();
  };

  //モーダルウィンドウ要素のイベントを設定する
  function setModalEvent(){
    target.find(' .blog__list-item > .blog__list-item-anchor').each(function(index){
      $(this).on('click', function(){
        let title = $(this).find(".blog__list-item-contents-title").text()
        let date = $(this).find(".blog__list-item-contents-date").text()
        let text = $(this).find(".blog__list-item-contents-text").text()
        let category = $(this).find(".blog__list-item-contents-category").html()
        openModal( $(this).attr('href'),title, date,text, category );
        return false;
      });
    });
    $('#blog__modal__box-closeBtn').on('click', closeModal);
    $('#blog__modal__Overlay').on('click', closeModal);
    $(window).on('resize', resizeModal);
  };

  //初期設定
  function init(){
    createModal();
    setModalEvent();
  };

  init();

};

setModalPhotos($('.blog__list'));

