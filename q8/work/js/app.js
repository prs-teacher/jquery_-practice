// API
// const settings = {
//   "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
//   "method": "GET",
// }
// $.ajax(settings).done(function (response) {
//   const result = response['@graph'];
//   displayResult(result)
// }).fail(function (err) {
//   displayError(err)
// });

$(function () {
  let pageCount = 0;

  $(".search-btn").on("click",function (){
    //サーチボタンクリックしたら
    $(".message").remove();
    //★クラスメッセージ削除
    const searchWord =  $("#search-input").val();
    //★検索ワードの代入
    //console.log(searchWord);
    const settings = {
      "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
      //★リクエスト送信先
      "method": "GET",
      //★リクエストタイプ
    }

    //function backFirstPage(){
      $("#search-input").change(function(){
      　//★検索ワードが変わったとき
        //var val = $(this).val();
        //console.log(val);
        $(".lists").empty();
        ////★DOMの削除
        pageCount = 0;
        //★１ページめに戻る
        console.log(pageCount);
      });
    //}

    $.ajax(settings).done(function (response) {
      //★成功の場合の処理
      pageCount = pageCount+1;
      //★ページを増やす
      //backFirstPage();
      console.log(pageCount);
      successProcess(response);
      }).fail(function (jqXHR, textStatus, errorThrown) {
        //★エラーの場合の処理
        errorProcess(jqXHR, textStatus, errorThrown);
      });
  });

  function successProcess(response){
    //console.log(response)
    const result = response['@graph'];
    //★@graphの取り出し
    console.log(response);
    //console.log(result);
    //console.log(result[0]['@id']);
    const items = result[0]['items'];
    //console.log(items);
    const totalResults = result[0]['opensearch:totalResults'];
    //console.log(totalResults);
    if(totalResults > 0){
      //for(var i = 0; i < 20; i++){
      $.each(items,function(i){
        //★ループ処理
        //console.log(items[i]['title']);
        $listinner = $('<div class="list-inner"></div>');
        //＄★listinnerに代入
        $listinner.append('<p>タイトル：'+items[i].title+'</p>');
        $listinner.append('<p>作者：'+items[i]['dc:creator']+'</p>');
        $listinner.append('<p>出版社：'+items[i]['dc:publisher']+'</p>');
        $listinner.append('<a href="'+items[i]['@id']+'"target="_blank">書籍情報</a>');
        //console.log(items[i]['@id']);
        //★listinnerの子要素としてDOMの挿入
        const listsItem = $('<li class="lists-item" ></li>');
        //★$divに代入
        listsItem.append($listinner);
        //★＄divの子要素としてDOMの挿入
        listsItem.appendTo('.lists');
      })}else{
        //それ以外の時
      $(".inner").prepend('<div class="message">検索結果が見つかりませんでした。<br>別のキーワードで検索してください。</div>');
       //DOM追加
      }
  };
  function errorProcess(jqXHR){
    $(".lists").empty();
    //DOM削除
    if(jqXHR.status === 0){
      //タイムアウトエラー
      $(".inner").prepend('<div class="message">正常に通信できませんでした。<br>インターネットの接続の確認をしてください。</div>');
      //★DOMの挿入
    }
    if(jqXHR.status === 404){
      //ページないエラー
      $(".inner").prepend('<div class="message">正常に通信できませんでした。<br>インターネットの接続の確認をしてください。</div>');
      //★DOMの挿入
    }
        /*console.log("ajax通信に失敗しました");
        console.log("jqXHR          : " + jqXHR.status); // HTTPステータスが取得
        console.log("textStatus     : " + textStatus);    // タイムアウト、パースエラー
        console.log("errorThrown    : " + errorThrown.message); // 例外情報*/
  };

  $(".reset-btn").on("click",function(){
    //★リセットボタンイベント
    $(".message").remove();
    //★DOMの削除
    $("#search-input").val("");
    //★リセットボタンイベント空
    $(".lists").empty();
    //★DOMの削除
  });
});