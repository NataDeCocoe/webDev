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
    <h1 class="headLabels">Categories</h1>

    <div class="cateCard">
        <div>
            <div class="cateMenu">
                <img src="/resources/images/allB.svg" width="50rem" height="60rem" alt="all">
            </div>
            <span>All</span>
        </div>

        <div>
            <div class="cateMenu">
                <img src="/resources/images/eBook.svg" width="50rem" height="60rem" alt="eBooks">
            </div>
            <span>eBooks</span>
        </div>

        <div>
            <div class="cateMenu">
                <img src="/resources/images/educationB.svg" width="50rem" height="60rem" alt="Educational">
            </div>
            <span>Educational</span>
        </div>

        <div>
            <div class="cateMenu">
                <img src="/resources/images/romanceB.svg" width="50rem" height="60rem" alt="Romance">
            </div>
            <span>Romance</span>
        </div>

        <div>
            <div class="cateMenu">
                <img src="/resources/images/cookB.svg" width="50rem" height="60rem" alt="Cooking Book">
            </div>
            <span>Cookbook</span>
        </div>

        <div>
            <div class="cateMenu">
                <img src="/resources/images/languageB.svg" width="50rem" height="60rem" alt="Language">
            </div>
            <span>Language</span>
        </div>

        <div>
            <div class="cateMenu">
                <img src="/resources/images/hororB.svg" width="50rem" height="60rem" alt="Horror">
            </div>
            <span>Horror</span>
        </div>

        <div>
            <div class="cateMenu">
                <img src="/resources/images/musicB.svg" width="50rem" height="60rem" alt="Music">
            </div>
            <span>Music</span>
        </div>

        <div>
            <div class="cateMenu">
                <img src="/resources/images/scienceB.svg" width="50rem" height="60rem" alt="Science">
            </div>
            <span>Science</span>
        </div>

    </div>

    <?php require __DIR__ . '/../components/productCards.php'; ?>

</main>
<footer>
    <div class="menuButton">
        <button class="bDisplay"><span class="material-symbols-rounded">menu</span></button>
    </div>
</footer>
</body>
</html>