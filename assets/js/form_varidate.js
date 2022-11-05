$(function(){
    console.log("varidationFire")
    $('#form .alert').hide();

    var sendFlag = true;

    $('#submit').click(function(){

        
        
        // セレクトボックス
        if(!$('.selectdiv').val()){
            $('.selectdiv .alert').show();
            sendFlag = false;
        }else{
            $('.selectdiv .alert').hide();
        }





        // 日時欄
        if(!$('.date_time').val()){
            $('.date_time .alert').show();
            sendFlag = false;
        }else{
            $('.date_time .alert').hide();
        }



        // 名前欄
        if(!$('#name').val()){
            $('.name .alert').show();
            sendFlag = false;
        }else{
            $('.name .alert').hide();
        }

        // メールアドレス欄
        if(!$('#email').val()){
            $('.email .alert').show();
            sendFlag = false;
        }else{
            $('.email .alert').hide();
        }


        // 電話番号欄
        if(!$('#tel').val()){
            $('.tel .alert').show();
            sendFlag = false;
        }else{
            $('.tel .alert').hide();
        }


        // お問い合わせ欄
        if(!$('#message').val()){
            $('.message .alert').show();
            sendFlag = false;
        }else{
            $('.message .alert').hide();
        }


        // チェックボックス
        var checkSubmit = $('input[name="protocol"]:checked').length;
        if(checkSubmit == 0){
            $('.protocol .alert').show();
            sendFlag = false;
        }else{
            $('.protocol .alert').hide();
        }

        if(sendFlag == false){

        }return false;

        


    })

    

});