$(function () {
  $(".nav li").on("click",function () {
    var index = $(this).index();
    $(".description li").addClass("is-hidden");
    $(".description li").eq(index).removeClass("is-hidden");
  });
});