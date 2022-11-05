$(function(){

    // 全ページ共通の動き



        // スムーススクロール
    
    $(".to_top").click(function(){
        $('body, html').animate({
            scrollTop: 0
        },1500);

        return false;
    });



    // ヘッダーを上部に固定
    const fh = document.getElementById('fixed_header');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
        fh.classList.add('is-show');
        } else {
        fh.classList.remove('is-show');
        }
    });



    // to_topボタン
    var top_btn = $('.to_top');

    $(window).scroll(function() {
        if ($(this).scrollTop() > 400) {
            top_btn.stop().animate({
            'right': '110px'
            }, 200, 'linear');
        } else {
            top_btn.stop().animate({
            'right': '-110px'
            }, 200, 'linear');
        }
        });
    



        //フッターの手前でボタンを止める
    $(window).on('load scroll', function(){
        var height = $(document).height(), //ドキュメントの高さ 
            position = window.innerHeight + $(window).scrollTop(), //ページトップから現在地までの高さ
            footer = $('footer').height(); //フッターの高さ
        if ( height - position  < footer ){ 
        top_btn.addClass('absolute');
        } else { 
        top_btn.removeClass('absolute');
        }
    });



    // test
    window.onload = function() {
        var rellax = new Rellax('.js-rellax', {
            center: true,
        });
    }




    // drawer Menu

    $(".open_btn").click(function () {//ボタンがクリックされたら
        
        $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
        $(".g_nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
    });
    
        
    
    $(function(){
        $('.open_btn').click(function(){
            $('nav').toggleClass('open');}
        );
    })
        

    if(window.matchMedia("(max-width: 480px) ").matches){
        // ウィンドウサイズが 480px以上768px以下の場合のコードをここに
        var top_btn = $('.to_top');

        $(window).scroll(function() {
            if ($(this).scrollTop() > 200) {
                top_btn.stop().animate({
                'right': '40px'
                }, 200, 'linear');
            } else {
                top_btn.stop().animate({
                'right': '-40px'
                }, 200, 'linear');
            }
            });
    }



    
});