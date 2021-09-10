$(function() {
  $('button[type="button"]').on("click", function() {
    // id="family__name"のvalueを代入し、コンソールで表示
    let familyName = $("#family__name").val();
    console.log("名字");
    console.log(familyName);

    // id="given__name"のvalueを代入し、コンソールで表示
    let givenName = $("#given__name").val();
    console.log("名前");
    console.log(givenName);

    // class="year"のvalueを代入
    let year = $(".year").val();
    // class="month"のvalueを代入
    let month = $(".month").val();
    // class="day"のvalueを代入
    let day = $(".day").val();
    // コンソールで表示(+で文字や変数同士を結合)
    console.log("生年月日");
    console.log(year + "年" + month + "月" + day + "日");

    // class="gender__content"のchecked(選択されているもの)のvalueを代入しコンソールで表示
    let gender = $(".gender__content:checked").val();
    console.log("性別");
    console.log(gender);

    // class="occupation"のvalueを代入しコンソールで表示
    let work = $(".occupation").val();
    console.log("職業");
    console.log(work);

    // id="account__name"のvalueを代入しコンソールで表示
    let acountName = $("#account__name").val();
    console.log("アカウント名");
    console.log(acountName);

    // id="email"のvalueを代入しコンソールで表示
    let email = $("#email").val();
    console.log("メールアドレス");
    console.log(email);

    // id="password"のvalueを代入しコンソールで表示
    let password = $("#password").val();
    console.log("パスワード");
    console.log(password);

    // id="duplication__password"のvalueを代入しコンソールで表示
    let duplicationPassword = $("#duplication__password").val();
    console.log("確認用パスワード");
    console.log(duplicationPassword);

    // id="address"のvalueを代入しコンソールで表示
    let address = $("#address").val();
    console.log("住所");
    console.log(address);

    // id="tel"のvalueを代入しコンソールで表示
    let tel = $("#tel").val();
    console.log("電話番号");
    console.log(tel);

    // each文（複数要素が取得されたセレクタの一つ一つに対し処理をする。functionの引数部分にはインデックス番号と要素を取得）で
    // checked（選択されているもの）のvalueをコンソールで表示
    console.log("購読情報");
    $('[name="subscription"]:checked').each(function(index, element) {
      console.log($(element).val());
    });
  })
});