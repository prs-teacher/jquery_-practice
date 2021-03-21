$(function () {
  $(".select-box").change(function () {
    var r = $("option:selected").val();
    var count = $(".food-list").children().length;
    console.log(count);
    for (var i=0; i<count; i++){
      var food =$(".food-list li").eq(i).data("categoryType");
      var kind =$(".food-list li").eq(i)
      if(food === r){
        kind.show();
      }else{
        if(r === "all"){
          $(".food-list li").show();
        }else{
          kind.hide();
        }
      }
    }
  });
});