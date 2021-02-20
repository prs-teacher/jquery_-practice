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
      $(".lists").prepend('<li class="list-item"><div class="list-inner"><p>タイトル：' + JSON.title + '</p></div></li>');
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