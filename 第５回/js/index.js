$(document).ready(function (){ 

  $("#submitButton").click(function () {
    $(".error").remove();
    
    let tel = $("#tel").val();
    const jptel = /^(0([1‑9]{1}‑?[1‑9]\d{3}|[1‑9]{2}‑?\d{3}|[1‑9]{2}\d{1}‑?\d{2}|[1‑9]{2}\d{2}‑?\d{1})‑?\d{4}|0[789]0‑?\d{4}‑?\d{4}|050‑?\d{4}‑?\d{4})$/;
    if(tel!='')
    {
      if (!jptel.test(tel)) 
      { 
          $("#tel").after("<div class='error'>電話番号の形式を確認してください.</div>");
          return false;
      } 
    }
   
   
  });


  $(".hamberger-wrap").click(function () {
    $(".hamberger-wrap").toggleClass("active");
    $(".menu").slideToggle(); // メニュー全体をスライド表示/非表示
  });

  // アコーディオンメニューの開閉動作（コンテンツなし）
  $(".accordion-toggle").click(function (e) {
    $(this).parent().toggleClass("active"); // クリックされたメニュー項目だけを開閉
  });
  $(".menu a").click(function () {
    $(".menu").hide(); // メニューを閉じる
    $(".hamberger-wrap").removeClass("active"); // ハンバーガーメニューアイコンのアニメーションをリセット
  });

    $("#one").click(function () {
      $("#detail").show();
      $("#one").addClass("active");
      $("#two").removeClass("active");
      $("#three").removeClass("active");
      $("#detail").html(
        "９月１日の詳細９月１日の詳細９月１日の詳細９月１日の詳細９月１日の詳細９月１日の詳細９月１日の詳細９月１日の詳細９月１日の詳細９月１日の詳細９月１日の詳細９月１日の詳細９月１日の詳細９月１日の詳細９月１日の詳細９月１日の詳細９月１日の詳細９月１日の詳細９月１日の詳細９月１日の詳細９月１日の詳細"
      );
    });
  
    $("#two").click(function () {
      $("#two").addClass("active");
      $("#one").removeClass("active");
      $("#three").removeClass("active");
      $("#detail").show();
      $("#detail").html("９月２日の詳細");
    });
  
    $("#three").click(function () {
      $("#three").addClass("active");
      $("#one").removeClass("active");
      $("#two").removeClass("active");
      $("#detail").show();
      $("#detail").html("９月３日の詳細");
    });
  
    $("#one").trigger("click");

  });

 


  const swiper = new Swiper('.sample-slider', {
    loop: true, 
    slidesPerView: 1.5, 
    centeredSlides : true,   
    spaceBetween: 30,                    
    autoplay: {                         //自動再生
        delay: 2000,  
        disableOnInteraction: false, // ユーザー操作後も自動再生を続ける
    },   
    pagination: {                       //ページネーション（ドット）
        el: '.swiper-pagination',
        clickable: true, // クリック可能にする
    },
    navigation: {                       //ナビゲーション（矢印）
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    
})

$(document).ready(function() {
  const $inputs = $('.txtbox[required]');
  const $sendButton = $('#submitButton');

  // 入力内容を確認する関数
  function checkInputs() {
      let allFilled = true;

      $inputs.each(function() {
          if (!$(this).val()) {
              allFilled = false;
          }
      });

      if (allFilled) {
          $sendButton.removeClass('disabled');
          $sendButton.prop('disabled', false); // ボタンを有効化
      } else {
          $sendButton.addClass('disabled');
          $sendButton.prop('disabled', true); // ボタンを非活性化
      }
  }

  // 入力内容が変更されたときに確認する
  $inputs.on('input', checkInputs);

  // ページロード時に初期チェック
  checkInputs();

  
});

$(document).ready(function() {
  // フォーム送信時の処理
  $('form').on('submit', function(event) {
      event.preventDefault(); // フォームのデフォルトの送信を防ぐ

      // 入力内容をローカルストレージに保存
      localStorage.setItem('name', $('#name').val());
      localStorage.setItem('seat', $('#seat').val());
      localStorage.setItem('email', $('#email').val());
      localStorage.setItem('tel', $('#tel').val());

      // 確認画面に遷移
      window.location.href = 'confirm.php';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  function adjustSliderMargin() {
      const header = document.querySelector('header');
      const slider = document.querySelector('.sample-slider');
      const headerHeight = header.offsetHeight;
      slider.style.marginTop = headerHeight + 'px';
  }

  // ページ読み込み時に一度実行
  adjustSliderMargin();

  // ウィンドウリサイズ時にも再調整
  window.addEventListener('resize', adjustSliderMargin);
});
   

  