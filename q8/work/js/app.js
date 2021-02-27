$(function(){
  const pageCount = 1;
  const text = "";
  $(".search-btn").on("click",function(){
    const searchWord = $("#search-input").val();

    //この下の行を加えるとエラーが出てしまいます。　ページカウントを増やす記述がうまくいっていないのでしょうか。
    searchWord == text ? pageCount++ : ($(".lists").empty(), text = searchWord )
    const settings = {
      "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
      "method": "GET",
    };
    $.ajax(settings).done(function (response) {
      const result = response['@graph'];
      console.log(result[0]['items'])
      displayResult(result);
    }).fail(function (err) {
      displayError(err)
    });
  })


  function displayResult(CiNii) {
    $(".message").remove();
    $.each(CiNii[0]['items'],function(i){
      $(".lists").prepend('<li class="lists-item"><div class="list-inner"><p>タイトル：' + CiNii[0]['items'][i]['title'] + '</p><p>作者：' + CiNii[0]['items'][i]['dc:creator'] + '</p><p>出版社：' + CiNii[0]['items'][i]['dc:publisher'] + '</p><a href = "' + CiNii[0]['items'][i]['@id'] + '"target="_blank">書籍情報</a></div></li>');
    });
  };
  function displayError(){
    $(".lists").empty();
    $(".message").remove();
    $(".lists").before('<div class="message">正常に通信できませんでした。<br>インターネットの接続を確認してください</div>');
  };


  //'<div class="Message">検索結果が見つかりませんでした。<br>別のキーワードで検索してください。</div>'




//.reset-btnをクリックした時
  $(".reset-btn").on("click", function() {
//ページカウントを1にする
    pageCount = 1;
    text = "";
    $(".lists").empty();
    $(".message").remove();
    $("#search-input").val("");
  });

});