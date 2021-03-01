$(function () {
  $(".modal_open_button").on("click",function () {
    //セレクタをクリックした時
    $(".modal_win").fadeIn();
    //セレクタをフェードアウト
  });
  $(".modal_close_button").on("click",function () {
    //セレクタをクリックした時
    $(".modal_win").fadeOut();
    //セレクタをフェードイン
  });
});