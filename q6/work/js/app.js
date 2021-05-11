$(function () {
  $(".select-box").change(function () {
    //セレクトボックス変更した時
    var r = $("option:selected").val();
    //選択した値を代入
    var count = $(".food-list").children().length;
    //フードリストの要素数を取得
<<<<<<< HEAD
    for (var i=0; i<count; i++){
      //フードリストの要素数分、forで繰り返す
      var kind =$(".food-list li").eq(i)
      var food =$(".food-list li").eq(i).data("categoryType");
      //フードリストのデータ取得
      if(food === r){
        //選択したvalueと同じdataだった場合
        kind.show();
      }else{
        //選択したvalueと違うdataだった場合
        if(r === "all"){
          //選択したvalueがallだった場合
          $(".food-list li").show();
        }else{
=======
    if(r === "all"){
      //選択したvalueがallだった場合
      $(".food-list li").show();
    }else{
      for (var i=0; i<count; i++){
      //フードリストの要素数分、forで繰り返す
        var kind =$(".food-list li").eq(i)
        var food =$(".food-list li").eq(i).data("categoryType");
      //フードリストのデータ取得
        if(food === r){
        //選択したvalueと同じdataだった場合
          kind.show();
        }else{
        //選択したvalueと違うdataだった場合
>>>>>>> master
          kind.hide();
        }
      }
    }
  });
});