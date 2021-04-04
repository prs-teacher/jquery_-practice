$(function () {
  $(".btn__submit").on("click", function () {
  //ボタンクリックしたら発動
  var label__text = $(".label__text").eq(0).text();
  //指定したindex番号のテキスト代入
  console.log(label__text);
  //指定したindex番号のテキスト表示
  var family__name = $("#family__name").val();
  //family__nameの値代入
  console.log(family__name);
  //family__nameの値表示
  var label__text = $(".label__text").eq(1).text();
  console.log(label__text);
  var given__name = $("#given__name").val();
  console.log(given__name);
  var label__text = $(".label__text").eq(2).text();
  console.log(label__text);
  var year = $(".year option:selected").val();
  var month = $(".month option:selected").val();
  var day = $(".day option:selected").val();
  console.log(year+"年"+month+"月"+day+"日");
  var label__text = $(".label__text").eq(3).text();
  console.log(label__text);
  var gender = $('[name="gender"]:checked').val();
  console.log(gender);
  var label__text = $(".label__text").eq(4).text();
  console.log(label__text);
  var occupation = $(".occupation option:selected").val();
  console.log(occupation);
  var label__text = $(".label__text").eq(5).text();
  console.log(label__text);
  var account__name = $("#account__name").val();
  console.log(account__name);
  var label__text = $(".label__text").eq(6).text();
  console.log(label__text);
  var email = $("#email").val();
  console.log(email);
  var label__text = $(".label__text").eq(7).text();
  console.log(label__text);
  var password = $("#password").val();
  console.log(password);
  var label__text = $(".label__text").eq(8).text();
  console.log(label__text);
  var duplication__password = $("#duplication__password").val();
  console.log(duplication__password);
  var label__text = $(".label__text").eq(9).text();
  console.log(label__text);
  var address = $("#address").val();
  console.log(address);
  var label__text = $(".label__text").eq(10).text();
  console.log(label__text);
  var tel = $("#tel").val();
  console.log(tel);
  var content__title = $(".content__title").eq(3).text();
  console.log(content__title);
  var subscription = $("input[name=subscription]:checked").map(function(){
    //チェックされている値を配列に格納
    return $(this).val();
    //値を返す
  }).get().join();
  //オブジェクトを配列→文字列に変換
  console.log(subscription);
  //チェックされている値を文字列で表示
});
  });