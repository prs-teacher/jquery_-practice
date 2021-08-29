$(function() {
  // class="drawer_button"をクリックしたとき
  $(".drawer_button").on("click", function() {
    // class="active"がなければ追加、なければ削除
    $(this).toggleClass("active");

    // class="active"があれば
    if($(this).hasClass("active")) {
      // class="drawer_bg"をフェイドイン
      $(".drawer_bg").fadeIn(200);
      // class="drawer_nav_wrapper"にclass="open"を追加
      $(".drawer_nav_wrapper").addClass("open");

    // class="active"がなければ
    } else {
      // class="drawer_bg"をフェイドアウト
      $(".drawer_bg").fadeOut(200);
      // class="drawer_nav_wrapper"のclass="open"を削除
      $(".drawer_nav_wrapper").removeClass("open");
    }
  })
});

