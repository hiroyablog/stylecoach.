/*　ハンバーガー */
$(function(){
    $('.btn-gnavi').on('click',function(){
      var rightVal = 0;
      if($(this).hasClass('hb-open')){
        rightVal = -300;
        $(this).removeClass('hb-open');
      }else{
        $(this).addClass('hb-open');
      }
  
      $('#global-navi').stop().animate({
        right: rightVal
      }, 200);
    });
  });

  /*Q$A*/ 
  $(".qa-list dd").hide();
  $(".qa-list dl").on("click", function(e){
      $('dd',this).slideToggle('fast');
      if($(this).hasClass('open')){
          $(this).removeClass('open');
      }else{
          $(this).addClass('open');
      }
  });

  $(function(){
    $(window).on('load scroll',function (){
      $('.box').each(function(){
        //ターゲットの位置を取得
        var target = $(this).offset().top;
        //スクロール量を取得
        var scroll = $(window).scrollTop();
        //ウィンドウの高さを取得
        var height = $(window).height();
        //ターゲットまでスクロールするとフェードインする
        if (scroll > target - height + 200){
          //クラスを付与
          $(this).addClass('active');
        }
      });
    });
  });
