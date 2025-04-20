<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>TESTAMENT</title>
    <link rel="icon" href="/resources/images/Testament_Logo.png" sizes="any">
    <link rel="stylesheet" href="/resources/css/homePage.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0">
    <script type="text/javascript" src="/resources/js/homePage.js" defer></script>
    <script type="text/javascript" src="/resources/js/sidebar.js" defer></script>

</head>
<body>

<?php include __DIR__ . '/../components/sidenav.php'; ?>

<main class="main">
    <h1 class="headLabels">Notifications</h1>
    <div class="notifCard">
        <img src="/resources/images/promotion.png" width="80" height="80" alt="">
        <div class="notifContent">
            <h4 class="notifHeader">Promotion</h4>
            <p class="notifText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in metus vitae dui sagittis sollicitudin sed non risus. dui sagittis sollicitudin sed non risus.</p>
        </div>
        <div class="notifTimestamp">
            <p>20:41</p>
        </div>
    </div>

    <div class="notifCard">
        <img src="/resources/images/warning.png" width="80" height=80" alt="">
        <div class="notifContent">
            <h4 class="notifHeader">Announcements</h4>
            <p class="notifText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in metus vitae dui sagittis sollicitudin sed non risus. dui sagittis sollicitudin sed non risus.</p>
        </div>
        <div class="notifTimestamp">
            <p>11:41</p>
        </div>
    </div>

    <div class="notifCard">
        <img src="/resources/images/approved.png" width="80" height=80" alt="">
        <div class="notifContent">
            <h4 class="notifHeader">Order approved</h4>
            <p class="notifText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in metus vitae dui sagittis sollicitudin sed non risus. dui sagittis sollicitudin sed non risus.</p>
        </div>
        <div class="notifTimestamp">
            <p>09:11</p>
        </div>

    </div>
    <div class="notifCard">
        <img src="/resources/images/delivery.png" width="80" height=80" alt="">
        <div class="notifContent">
            <h4 class="notifHeader">Order has been shipped</h4>
            <p class="notifText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in metus vitae dui sagittis sollicitudin sed non risus. dui sagittis sollicitudin sed non risus.</p>

        </div>
        <div class="notifTimestamp">
            <p>12:01</p>
        </div>
    </div>
    <div class="notifCard">
        <img src="/resources/images/approved.png" width="80" height=80" alt="">
        <div class="notifContent">
            <h4 class="notifHeader">Order completed</h4>
            <p class="notifText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in metus vitae dui sagittis sollicitudin sed non risus. dui sagittis sollicitudin sed non risus.</p>

        </div>
        <div class="notifTimestamp">
            <p>11:11</p>
        </div>
    </div>

</main>
<footer>
    <div class="menuButton">
        <button class="bDisplay"><span class="material-symbols-rounded">menu</span></button>
    </div>
</footer>
</body>
</html>