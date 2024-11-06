<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
    <link href='./css/style.css' rel='stylesheet'>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css">
    <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
    <title>Document</title>
</head>
<body>
<div class="swiper sample-slider">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="img/slide_1.jpg"></div>
            <div class="swiper-slide"><img src="img/slide_2.jpg"></div>
            <div class="swiper-slide"><img src="img/slide_3.jpg"></div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
    

<?php include 'header.php'; ?>


   
    
    <div class="info">
        <p><b>今年も始まる<span>夏祭り</span></b></p>
    </div>

    <div class="schedule">
        <p id="schedules"><b>スケジュール</b></p>
        <div class="tab-container">
            <div class="schedule-header">
                <button id='one' class='day active'>９月１日</button>
                <button id='two' class='day'>９月２日</button>
                <button id='three' class='day'>９月３日</button>
            </div>
                <div class="textbox" id='detail'></div>

            </div>
        
    </div>

    <div class="access">
        <p id="accesses"><b>アクセス</b></p><br>
        <p>〒771-1154 徳島県徳島市応神町東貞方南川淵</p>
        <div class="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7857.097272925273!2d134.51671969763632!3d34.1078840619142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355373a0324d8717%3A0x396cd6edae5e4bac!2z5ZCJ6YeO5bed5YyX5bK46YGL5YuV5bqD5aC044K944OV44OI44Oc44O844Or5aC0Qumdog!5e0!3m2!1sja!2sjp!4v1730345958946!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
            >
        </iframe>

        </div>

    </div>
    <div>
    <form method="get" action="confirm.php">
    <div class="product">
        <label>
        <p class="member"><b id='reserve'>席予約</b></p>
        <p class='maintitle'>お名前<span class='subtitle'>*必須</span></p>
        <input type="text" name='name' id='name' class='txtbox' placeholder='例）田中 太郎' required>
        <p class='maintitle'>席の場所<span class='subtitle'>*必須</span></p>
        <select name='seat' id='seat' class='txtbox' required>
            <option value="">---</option>
            <option value="SS席">SS席</option>
            <option value="SS席">S席</option>
            <option value="A席">A席</option>
            <option value="B席">B席</option>
            <option value="C席">C席</option>
            </select>
        <p class='maintitle'>メールアドレス<span class='subtitle'>*必須</span></p>
        <input type="email" name='email' id='email' class='txtbox' placeholder='例）abcd123@examoale.com' required>
        <p class='maintitle'>電話番号<span class='subtitle1'>*任意</span></p>
        <input type="tel" name='tel' id='tel' class='txtbox' placeholder='例）09012345678'>
        </label>
        <button id="submitButton" type="submit">送信</button>


    </div>
</div>

<?php include 'footer.php'; ?>

    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="./js/index.js"></script>
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
</body>
</html>