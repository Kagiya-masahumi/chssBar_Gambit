
$(function () {  
  //タイトルがクリックされたら
  
  $(".js-accordion-title").click(function () {
    console.log("accordion");
    //クリックしたjs-accordion-title以外の全てのopenを取る
    $(".js-accordion-title").not(this).removeClass("open");
    //クリックされたjs-accordion-title以外のcontentを閉じる
    $(".js-accordion-title").not(this).next().slideUp(300);
    //thisにopenクラスを付与
    $(this).toggleClass("open");
    //thisのcontentを展開、開いていれば閉じる
    $(this).next().slideToggle(300);
  });



    //.accordion_oneの中の.accordion_headerがクリックされたら
    $('.s_02 .accordion_one .accordion_header').click(function(){
      //クリックされた.accordion_oneの中の.accordion_headerに隣接する.accordion_innerが開いたり閉じたりする。
      $(this).next('.accordion_inner').slideToggle();
      $(this).toggleClass("open");
      //クリックされた.accordion_oneの中の.accordion_header以外の.accordion_oneの中の.accordion_headerに隣接する.accordion_oneの中の.accordion_innerを閉じる
      $('.s_02 .accordion_one .accordion_header').not($(this)).next('.accordion_one .accordion_inner').slideUp();
      $('.s_02 .accordion_one .accordion_header').not($(this)).removeClass("open");
    });
});