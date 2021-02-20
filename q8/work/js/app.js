/*値を取得するときに指定する引数、変数がわからずうまく値を表示できません。
現状は、タイトルのみ記述していますが、タイトル：undefinedと表示されてしまいます。
どこを確認すると引数、変数がわかりますでしょうか。
レスポンス仕様かと思ったのですが、うまく表示できませんでした*/

$(function(){

  $(".search-btn").on("click",function(){
    const searchWord = $("#search-input").val();
    const pageCount = 1;
    //searchWord !== x ? (pageCount = 1, $(".lists").empty(),x = searchWord) : pageCount++;
    const settings = {
      "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
        "method": "GET",
    };
    const displayResult = function(){
      $(".message").remove();
//質問の該当箇所 →　　　　　　　→　　　　　　　→　　　　　　→　　　　　　→　　　　　　→　　　　　　→　  　↓
      $(".lists").prepend('<li class="list-item"><div class="list-inner"><p>タイトル：' + settings.title + '</p></div></li>');
    };
    const displayError = function(){
    $(".lists").empty();
    $(".message").remove();
    $(".lists").before('<div class="message">正常に通信できませんでした。<br>インターネットの接続を確認してください</div>');
    };
    $.ajax(settings).done(function (response) {
      const result = response['@graph']
      displayResult(result)
    }).fail(function (err) {
      displayError(err)
    });
  })


  //'<div class="Message">検索結果が見つかりませんでした。<br>別のキーワードで検索してください。</div>'




//.reset-btnをクリックした時
  $(".reset-btn").on("click", function() {
//ページカウントを1にする
    pageCount = 1;
    x = "";
    $(".lists").empty();
    $(".message").remove();
    $("#search-input").val("");
  });

});