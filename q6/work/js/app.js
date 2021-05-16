$(function () {
  $(".select-box").change(function () {
    //セレクトボックス変更した時
    const r = $("option:selected").val();
    //選択した値を代入
    const count = $(".food-list").children().length;
    //フードリストの要素数を取得
    if(r === "all"){
      //選択したvalueがallだった場合
      $(".food-list li").show();
    }else{
      for (var i=0; i<count; i++){
      //フードリストの要素数分、forで繰り返す
      const kind =$(".food-list li").eq(i);
      const food =$(".food-list li").eq(i).data("categoryType");
      //フードリストのデータ取得
      food === r ? kind.show(): kind.hide();
        /*if(food === r){
        //選択したvalueと同じdataだった場合
          kind.show();
        }else{
        //選択したvalueと違うdataだった場合
          kind.hide();
        }*/
      }
    }
  });
});