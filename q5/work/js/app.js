$(function () {
  $(".dropdwn li").hover(function () {
    $(".dropdwn_menu", this).slideDown();
  },function(){
    $(".dropdwn_menu", this).slideUp();
  });
});