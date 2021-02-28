$(function () {
  //q1
  //〇〇をした時に〇〇
  $("#q1").css("color", "green");
  //セレクタのCSS変更
  //q1-2
  $("#q2").on("click", function () {
  //セレクタをクリックした時に
    $(this).css("background", "pink");
  //クリックしたセレクタのcss変更
  });
  //q1-3
  $("#q3").on("click", function () {
    //セレクタをクリックした時に
    $(this).fadeOut(3000);
    //クリックしたセレクタを３秒でフェードアウト
  });
  //q1-4
  $("#q4").on("click", function () {
    //セレクタをクリックした時に
    $(this).addClass("large");
    //クリックしたセレクタにクラス追加
  });
  $("#q5").on("click",function () {
    //セレクタをクリックした時に
    $(this).prepend("DOMの中の前");
    //クリックしたセレクタの先頭に要素追加
    $(this).append("DOMの中の後");
    //クリックしたセレクタの末尾に要素追加
    $(this).before("DOMの前");
    //クリックしたセレクタの先頭に要素追加
    $(this).after("DOMの後");
    //クリックしたセレクタの末尾に要素追加
  });
  $("#q6").on("click",function () {
    //セレクタをクリックした時に
    $(this).animate({"margin-top":"100","margin-left":"100"},2000);
    //クリックしたセレクタを動かす
  });
  $("#q7").on("click",function () {
    //セレクタをクリックした時に
    console.log(this);
    //クリックしたセレクタのノードをコンソールに表示
  });
  $("#q8").hover(
    //セレクタをホバーした時に
    function () {
      $(this).addClass("large");
      //マウスのせた時にセレクタに指定したクラス追加
    },
    function () {
      $(this).removeClass("large");
      //マウス外した時にセレクタに指定したクラス削除
  });
  $("#q9 li").on("click",function () {
    //セレクタをクリックした時に
    var index = $(this).index();
    //セレクタのindex番号取得
    alert(index);
    //アラート表示
  });
  $("#q10 li").on("click",function () {
    //セレクタをクリックした時に
    var index = $(this).index();
    //セレクタのindex番号取得、代入
    $("#q11 li").eq(index).addClass("large-text");
    //指定されたセレクタで、クリックされたセレクタのインデックス番号と同じインデックス番号の要素を呼び出しクラス追加
  });
});


