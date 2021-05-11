$(function () {
  $(".dropdwn li").hover(function () {
<<<<<<< HEAD
    $(".dropdwn_menu", this).slideDown();
  },function(){
    $(".dropdwn_menu", this).slideUp();
=======
    //dropdwn liホバーした時
    $(".dropdwn_menu:not(:animated)", this).slideDown();
    //アニメーションの実行中でない場合、ホバーしたものをスライドダウン
  },function(){
    $(".dropdwn_menu",this).slideUp();
    //ホバーが外れた時スライドアップ
>>>>>>> master
  });
});