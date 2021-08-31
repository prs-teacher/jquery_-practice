$(function() {
  // class=".dropdwn"の子要素の"li"ホバー時
  $(".dropdwn li").hover(
    // "li"の上にマウスカーソルがあるとき
    function() {
      // ホバーしている要素内からclass="dropdwn_menu"を探し
      // スライドダウンのアニメーション付加。stopを付けることで素早くマウスがホバーした時でもアニメーションがバグらない
      $(this).find(".dropdwn_menu").stop().slideDown();
    },
    // "li"の上からマウスカーソルが離れたとき
    function() {
      // ホバーしている要素内からclass="dropdwn_menu"を探し
      // スライドアップのアニメーション付加。stopを付けることで素早くマウスがホバーした時でもアニメーションがバグらない
      $(this).find(".dropdwn_menu").stop().slideUp();
    }
  )
});