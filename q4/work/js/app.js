$(function () {
  $(".nav li").on("click",function () {
    //クリックしたら
    const index = $(this).index();
    //クリックしたとこのインデックス番号取得
    $(".description li").addClass("is-hidden");
    //クラス追加
    $(".description li").eq(index).removeClass("is-hidden");
    //クリックしたとこのクラス削除
  });
});