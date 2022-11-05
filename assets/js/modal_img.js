$(function(){
    $("#pieces img,.garally ul li img").click(function() {
      $("#graydisplay").html($(this).prop('outerHTML'));
      $("#graydisplay").fadeIn(200);
    });
    $("#graydisplay, #graydisplay img").click(function() {
      $("#graydisplay").fadeOut(200);
    });
  });