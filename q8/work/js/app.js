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
const searchWord = $("#search-input").val();
const pageCount = 0;

$(function () {
  $(".search-btn").on("click",function (){
    const searchWord =  $("#search-input").val();
    console.log(searchWord);
    const pageCount = 0;

    const settings = {
      "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
      //リクエスト送信先
      "method": "GET",
      //リクエストタイプ
    }

    $.ajax(settings).done(function (response,textStatus, jqXHR) {
      //成功の場合の処理
      const result = response['@graph'];
      //@graphの取り出し
      console.log(response);
      console.log(result);
      console.log(result[0]['@id']);
      const items = result[0]['items'];
      console.log(items);
      for(var i = 0; i < 20; i++){
        //ループ処理
        console.log(items[i]['title']);
        $listinner = $('<div class="list-inner"></div>');
        //＄listinnerに代入
        $listinner.append('<p>タイトル：'+items[i]['title']+'</p>');
        $listinner.append('<p>作者：'+items[i]['dc:creator']+'</p>');
        $listinner.append('<p>出版社：'+items[i]['dc:publisher']+'</p>');
        $listinner.append('<a href="'+items[i]['@id']+'"target="_blank">書籍情報</a>');
        console.log(items[i]['@id']);
        //listinnerの子要素としてDOMの挿入
        const $div = $('<li class="lists-item" ></li>');
        //$divに代入
        $div.append($listinner);
        //＄divの子要素としてDOMの挿入
        $div.appendTo('.lists');
        //.listsの子要素にDOM挿入
      }
      }).fail(function (jqXHR, textStatus, errorThrown) {
        //エラーの場合の処理
        $(".inner").prepend('<div class="message">正常に通信できませんでした。<br>インターネットの接続の確認をしてください。</div>');
        //DOMの挿入
        console.log("ajax通信に失敗しました");
        console.log("jqXHR          : " + jqXHR.status); // HTTPステータスが取得
        console.log("textStatus     : " + textStatus);    // タイムアウト、パースエラー
        console.log("errorThrown    : " + errorThrown.message); // 例外情報
        console.log("URL            : " + url);
      });
  });
  $(".reset-btn").on("click",function(){
    //リセットボタンイベント
    $("#search-input").val("");
    //リセットボタンイベント空
    $(".lists").empty();
    //DOMの削除
  });
});