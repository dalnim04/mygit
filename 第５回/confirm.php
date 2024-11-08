<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="./js/index.js"></script>
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
    <link href='./css/style.css' rel='stylesheet'>
    <style>
        body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    text-align: center;
}

.confilm-name{
    padding-top: 150px;
}

.field {
    margin: 48px 0;
    display: flex;
    padding: 10px;
    width: 50%;
    margin-left: 30%;
    align-items: center;
    flex-wrap: nowrap;
}



.field strong {
    width: 70%; /* 左側のラベル幅 */
    text-align: left;
    
    display: inline-block;
}

.field span {
    width: 60%; /* 右側の内容幅 */
    text-align: left;
    
    word-wrap: break-word;
    
}
.confilm-seet{
    font-size: 1rem;
    color: black;
    white-space: normal;

}

.button-container{
    display: flex;
    justify-content: center;
    
    margin-top: 48px;
    padding-bottom: 100px;
}
.confilm-btn {
    background-color: #BEA574;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 8px; /* ボタンの丸み */
    cursor: pointer;
    font-size: 1rem;
    width: 10%;
    height: 40px;
}

#back-btn{
    background-color: rgb(201, 201, 201);
    margin-right: 300px;

}




/* タブレットサイズのスタイル */
@media (max-width: 768px) {
    .field {
        width: 100%; /* フィールド幅をタブレットサイズに調整 */
        margin-left: 10%; /* 左側のマージンを調整 */
    }

    .field strong {
        width: 45%; /* ラベル幅を調整 */
        text-align: left;
        flex-shrink: 0; 
        
    }

    .confilm-seet {
        width: 65%; /* 値の幅を調整 */
       
        
    }

    .confilm-btn {
    background-color: #BEA574;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 12px; /* ボタンの丸み */
    cursor: pointer;
    font-size: 1rem;
    width: 20%;
    height: 40px;
}

#back-btn{
    background-color: rgb(201, 201, 201);
    margin-right: 100px;

}

    
}

@media (max-width: 480px) {
    .field {
        flex-wrap: nowrap; /* 横並びのまま */
        display: flex;
        margin-left: 5%;
        width: 100%;
    }

    .field strong {
    width: 60%;
    text-align: left;
    flex-shrink: 0; 
    }

    .field span {
    
    text-align: left;
    margin-left: -20%;
    word-wrap: break-word;
    
}

    

    .confilm-seet {
        width: 40%; /* 値の幅をスマホサイズに調整 */
        white-space: normal;
    }

    .button-container {
        flex-direction: column; /* 縦並びに変更 */
        align-items: center;
        display: block;
        
    }

    .confilm-btn {
        width: 25%; /* 幅を広くして調整 */
       
        
    }
    #back-btn{
    background-color: rgb(201, 201, 201);
    margin-right: 10px;

}

   }

    </style>
    <script>
    $(document).ready(function() {
        // ローカルストレージからデータを取得
        $('#name').text(localStorage.getItem('name') || '');
        $('#seat').text(localStorage.getItem('seat') || '');
        $('#email').text(localStorage.getItem('email') || '');
        $('#tel').text(localStorage.getItem('tel') || '');

        // 戻るボタンの処理
        $('#back-btn').on('click', function() {
            window.history.back(); // 1つ前のページに戻る
        });

        // 送信ボタンの処理
        $('#submit-btn').on('click', function() {
            window.location.href = "thank.php"; // 実際にはサーバーにデータを送信する処理を追加
            // ここでサーバーにデータを送信する処理を追加する
        });
    });
    </script>
</head>
<body>
<?php include 'header.php'; ?>
    <h1 class="confilm-name">お問い合わせ内容確認</h1>
    <div class="field">
        <strong>お名前</strong> <span id="name" class="confilm-seet"></span>
    </div>
    <div class="field">
        <strong>席の場所</strong> <span id="seat" class="confilm-seet"></span>
    </div>
    <div class="field">
        <strong>メールアドレス</strong> <span id="email" class="confilm-seet"></span>
    </div>
    <div class="field">
        <strong>電話番号</strong> <span id="tel" class="confilm-seet"></span>
    </div>
    <div class="button-container">
        <button class="confilm-btn" id="back-btn" >戻る</button>
        <button class="confilm-btn" id="submit-btn" >送信</button>
    </div>

    <?php include 'footer.php'; ?>
</body>
</html>