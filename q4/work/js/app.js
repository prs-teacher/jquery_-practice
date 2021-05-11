$(function () {
  $(".nav li").on("click",function () {
<<<<<<< HEAD
    var index = $(this).index();
    $(".description li").addClass("is-hidden");
    $(".description li").eq(index).removeClass("is-hidden");
=======
    //発火イベント
    const index = $(this).index();
    //クリックしたインデックス番号を代入
    $(".description li").addClass("is-hidden");
    //クラス追加し.description liのもの非表示
    $(".description li").eq(index).removeClass("is-hidden");
    //クリックしたインデックス番号の.description liのクラスのみ削除し、表示させる
>>>>>>> master
  });
});