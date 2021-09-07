$(function() {
  // class="select-box" のメニューを変更したとき
  $(".select-box").on("change", function() {
    // optionValue に、選択された option の value を代入
    let optionValue = $(this).val();
    // listLength に、class="food-list" の子要素の li の数を取得し代入
    let listLength = $(".food-list li").length;

    // for文で listLength回 ループ処理
    for (let i = 0; i < listLength; i++) {
      // listItem に、class="food-list" の子要素の li のインデックス番号のi番目を代入
      let listItem = $(".food-list li").eq(i);
      // listItemCategory に、listItem の data-category-type を代入
      let listItemCategory = listItem.data("category-type");

      // optionValue と listItemCategory が一致していれば
      if(optionValue === listItemCategory) {
        // listItemのcssに display:block を追加
        listItem.css("display", "block");
      // それ以外であれば
      } else {
        // listItemのcssに display:none を追加
        listItem.css("display", "none");
      };
    };
  });
});