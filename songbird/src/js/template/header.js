const header = `
<header class="header">
  <div class="container">
    <div class="header__body">
      <span class="header__logo-block"
        data-href="start">
        <img class="header__logo" height="34px" src="./assets/logo.png" alt="" />
        Songbird
      </span>
      <span class="btn btn-dark nav__munu js-menu" id="menu">
        <img class="nav__munu-img" src="./assets/img/system/menu.svg" alt="">
      </span>
      <ul class="nav nav-quiz">
        <li class="header__language nav__li">
          <img class="js-language" src="./assets/img/lang/rus.png" alt="" />
        </li>
        <li class="nav__li">
          <span data-href="start" class="btn btn-light js-page-start">
          </span>
        </li>
        <li class="nav__li">
          <span data-href="quiz" class="btn btn-light js-page-quiz"> </span>
        </li>
        <li class="nav__li">
          <span data-href="catalog"
            class="btn btn-light js-page-catalog">
          </span>
        </li>
        <li class="btn btn-dark nav__score nav__li">
          <span class="js-score-text"></span>:
          <span class="js-score">0</span>
        </li>
      </ul>
    </div>
  </div>
</header>`;

export { header };
