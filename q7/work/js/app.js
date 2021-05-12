$(function () {
  $(".btn__submit").on("click", function () {
  //ボタンクリックしたら発動
  console.log($(".label__text").eq(0).text());
  //指定したindex番号のテキスト表示
  const familyName = $("#family__name").val();
  //family__nameの値代入
  console.log(familyName);
  //family__nameの値表示
  //var labelText = $(".label__text").eq(1).text();
  console.log($(".label__text").eq(1).text());
  const givenName = $("#given__name").val();
  console.log(givenName);
  console.log($(".label__text").eq(2).text());
  const year = $(".year option:selected").val();
  const month = $(".month option:selected").val();
  const day = $(".day option:selected").val();
  console.log(year+"年"+month+"月"+day+"日");
  console.log($(".label__text").eq(3).text());
  const gender = $('[name="gender"]:checked').val();
  console.log(gender);
  console.log($(".label__text").eq(4).text());
  const occupation = $(".occupation option:selected").val();
  console.log(occupation);
  console.log($(".label__text").eq(5).text());
  const accountName = $("#account__name").val();
  console.log(accountName);
  console.log($(".label__text").eq(6).text());
  const email = $("#email").val();
  console.log(email);
  console.log($(".label__text").eq(7).text());
  const password = $("#password").val();
  console.log(password);
  console.log($(".label__text").eq(8).text());
  const duplicationPassword = $("#duplication__password").val();
  console.log(duplicationPassword);
  console.log($(".label__text").eq(9).text());
  const address = $("#address").val();
  console.log(address);
  console.log($(".label__text").eq(10).text());
  const tel = $("#tel").val();
  console.log(tel);
  const contentTitle = $(".content__title").eq(3).text();
  console.log(contentTitle);
  const subscription = $("input[name=subscription]:checked").map(function(){
    //チェックされている値を配列に格納
    return $(this).val();
    //値を返す
  }).get().join();
  //オブジェクトを配列→文字列に変換
  console.log(subscription);
  //チェックされている値を文字列で表示
});
  });