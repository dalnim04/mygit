$(document).ready(function () {

  $("#website").click(function () {
    $("#web").show();
    $("#website").addClass("active");
    $("#seo").removeClass("active");
    $("#app").removeClass("active");
    $("#web").html(
      "web制作についてweb制作についてweb制作についてweb制作についてweb制作についてweb制作についてweb制作についてweb制作についてweb制作についてweb制作についてweb制作についてweb制作についてweb制作についてweb制作についてweb制作についてweb制作についてweb制作についてweb制作についてweb制作についてweb制作についてweb制作についてweb制作についてweb制作についてweb制作についてweb制作についてweb制作についてweb制作についてweb制作についてweb制作についてweb制作についてweb制作についてweb制作についてweb制作についてweb制作についてweb制作についてweb制作についてweb制作についてweb制作についてweb制作についてweb制作についてweb制作についてweb制作についてweb制作についてweb制作についてweb制作についてweb制作についてweb制作についてweb制作についてweb制作についてweb制作についてweb制作についてweb制作についてweb制作についてweb制作についてweb制作についてweb制作についてweb制作について"
    );
  });

  $("#seo").click(function () {
    $("#seo").addClass("active");
    $("#website").removeClass("active");
    $("#app").removeClass("active");
    $("#web").show();
    $("#web").html("SEOコンサルについて");
  });

  $("#app").click(function () {
    $("#app").addClass("active");
    $("#seo").removeClass("active");
    $("#website").removeClass("active");
    $("#web").show();
    $("#web").html("スマホアプリ制作について");
  });

  $("#website").trigger("click");

  let hokkaido = [
    "---",
    "札幌市",
    "函館市",
    "小樽市",
    "旭川市",
    "室蘭市",
    "釧路市",
    "帯広市",
    "北見市",
    "夕張市",
    "岩見沢市",
    "網走市",
    "留萌市",
    "苫小牧市",
    "稚内市",
    "美唄市",
    "芦別市",
    "江別市",
    "赤平市",
    "紋別市",
    "士別市",
    "名寄市",
    "三笠市",
    "根室市",
    "千歳市",
    "滝川市",
    "砂川市",
    "歌志内市",
    "深川市",
    "富良野市",
    "登別市",
    "恵庭市",
    "伊達市",
    "北広島市",
    "石狩市",
    "北斗市",
  ];
  let aomori = [
    "---",
    "青森市",
    "弘前市",
    "八戸市",
    "黒石市",
    "五所川原市",
    "十和田市",
    "三沢市",
    "むつ市",
    "つがる市",
    "平川市",
  ];
  let iwate = [
    "---",
    "盛岡市",
    "宮古市",
    "大船渡市",
    "花巻市",
    "北上市",
    "久慈市",
    "遠野市",
    "一関市",
    "陸前高田市",
    "釜石市",
    "二戸市",
    "八幡平市",
    "奥州市",
    "滝沢市",
  ];

  function retOption(mapArr, select) {
    let html = "";
    let keys = Object.keys(mapArr);
    for (let i in keys) {
      html +=
        "<option value=" + "'" + keys[i] + "'>" + mapArr[keys[i]] + "</option>";
    }

    $("select[id='" + select + "']").html(html);
  }
  $("select[id='prefecture']").on("change", function () {
    var option = $("#prefecture option:selected").val();
    var subSelName = "";
    if (option == "青森県") {
      subSelName = "aomori";
    } else if (option == "岩手県") {
      subSelName = "iwate";
    } else if (option == "北海道") {
      subSelName = "hokkaido";
    }
    retOption(eval(subSelName), "city");
  });

  // ハンバーガーメニューをクリックしたときの動作

  $(".hamberger-wrap").click(function () {
    $(".hamberger-wrap").toggleClass("active");
    $(".menu2").slideToggle(); // メニュー全体をスライド表示/非表示
  });

  // アコーディオンメニューの開閉動作（コンテンツなし）
  $(".accordion-toggle").click(function (e) {
    $(this).parent().toggleClass("active"); // クリックされたメニュー項目だけを開閉
  });
  $(".menu2 a").click(function () {
    $(".menu2").hide(); // メニューを閉じる
    $(".hamberger-wrap").removeClass("active"); // ハンバーガーメニューアイコンのアニメーションをリセット
  });

  $(".send").click(function () {
    var option = $("#prefecture option:selected").val();
    var option1 = $("#city option:selected").val();
    if (option == "---") {
      $("#prefecture option:selected").val("");
    }
    if (option1 == "0") {
      $("#city option:selected").val("");
    }
  });
});
