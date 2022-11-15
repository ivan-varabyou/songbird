const quizPage = `
<header class="mb-auto header-qiuz container">
  <div class="d-flex justify-content-between header-qiuz__content">
    <a
      class="float-md-start mb-0 h3 header-qiuz__logo-text"
      href="/index.html"
    >
      <img class="header-qiuz__logo" src="./assets/logo.png" alt="" />
      Songbird
    </a>

    <ul class="nav nav-quiz">
      <li class="header__language">
        <img class="js-language" src="./assets/img/lang/rus.png" alt="" />
      </li>
      <li class="nav__li">
        <a href="/index.html" class="btn btn-light js-page-start">
        </a>
      </li>
      <li class="nav__li">
        <a href="/quiz.html" class="btn btn-light js-page-quiz"> </a>
      </li>
      <li class="nav__li">
        <a
          href="/catalog.html"
          class="btn btn-light js-page-catalog"
        >
        </a>
      </li>
      <li class="btn btn-dark header-qiuz__score">
        <span class="js-score-text"></span>:
        <span class="js-score">0</span>
      </li>
    </ul>
  </div>
</header>
<section
  class="cover-quiz cover-active js-cover"
  style="background-image: url('./assets/img/scene/default.jpg')"
>
  <div class="cover-quiz__container">
    <div class="col-10 mx-auto container">
      <div class="player js-player">
        <div class="js-player-block">
        <audio
          id="player"
          class="js-player-audio"
          src="./assets/sound/system/intro.mp3"
        ></audio>
        </div>

        <div class="player__wrapper">
          <div class="player__left">
            <div class="player__button js-player-button player__button--play">
              <svg class="pause" viewBox="0 0 365 365" style="enable-background: new 0 0 365 365" xml:space="preserve"><g><rect x="74.5" width="73" height="365" /><rect x="217.5" width="73" height="365" /></g>
              </svg>
              <svg class="play" x="0px" y="0px" viewBox="0 0 460.114 460.114" style="enable-background:new 0 0 460.114 460.114;" xml:space="preserve"><g><g><path d="M393.538,203.629L102.557,5.543c-9.793-6.666-22.468-7.372-32.94-1.832c-10.472,5.538-17.022,16.413-17.022,28.26v396.173 c0,11.846,6.55,22.721,17.022,28.26c10.471,5.539,23.147,4.834,32.94-1.832l290.981-198.087 c8.746-5.954,13.98-15.848,13.98-26.428C407.519,219.477,402.285,209.582,393.538,203.629z"/></svg>
            </div>
          </div>
          <div class="player__right">
            <h1 class="player__title player__title--big js-header-title">
              ???
            </h1>
            <div class="player__prorgess js-prorgess">
              <div
                class="player__progress-line js-prorgess-line"
                style="width:0%"
              ></div>
            </div>
            <div class="player__info">
              <div class="player__info-start js-current-time">00:00</div>
              <div class="player__info-end js-end-time">00:00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<div
  class="container d-flex w-100 h-100 p-3 mx-auto flex-column container-qiuz"
>
  <main class="main-quiz">
    <div class="quiz js-quiz">
      <div class="container">
        <div
          class="btn-group quiz-category py-4 w-100 js-quiz-category"
          role="group"
          aria-label="Basic example"
        >
          <button
            type="button"
            class="btn btn-dark js-category"
            data-categoryid="0"
            disabled
          ></button>
          <button
            type="button"
            class="btn btn-outline-dark js-category"
            data-categoryid="1"
            disabled
          ></button>
          <button
            type="button"
            class="btn btn-outline-dark js-category"
            data-categoryid="2"
            disabled
          ></button>
          <button
            type="button"
            class="btn btn-outline-dark js-category"
            data-categoryid="3"
            disabled
          ></button>
          <button
            type="button"
            class="btn btn-outline-dark js-category"
            data-categoryid="4"
            disabled
          ></button>
          <button
            type="button"
            class="btn btn-outline-dark js-category"
            data-categoryid="5"
            disabled
          ></button>
        </div>
        <div class="quiz__wrapper">
          <div class="questions">
            <div class="js-questions-list btn-group-vertical questions__list">
              <button
                class="btn btn-outline-dark questions__item js-questions-item"
                data-id="1"
              >
                <span class="questions__point"></span>
              </button>
              <button
                class="btn btn-outline-dark questions__item js-questions-item"
                data-id="1"
              >
                <span class="questions__point"></span>
              </button>
              <button
                class="btn btn-outline-dark questions__item js-questions-item"
                data-id="1"
              >
                <i class="questions__point"></i>
              </button>
              <button
                class="btn btn-outline-dark questions__item js-questions-item"
                data-id="1"
              >
                <span class="questions__point"></span>
              </button>
              <button
                class="btn btn-outline-dark questions__item js-questions-item"
                data-id="1"
              >
                <span class="questions__point"></span>
              </button>
              <button
                class="btn btn-outline-dark questions__item js-questions-item"
                data-id="1"
              >
                <span class="questions__point"></span>
              </button>
            </div>
          </div>
          <div class="answer">
              <h5 class="js-quiz-title-message"></h5>
            <div class="col js-answer">

            </div>
          </div>
        </div>

      </div>
      <div class="bottom container my-4">
        <button
          type="button"
          class="btn btn-primary btn-lg btn-block w-100 js-next-level"
        ></button>

      </div>
    </div>
  </main>
  <footer class="footer footer mt-auto text-black row-cols-auto container">
    <p
      class="footer__rs d-flex justify-content-between gap-3 align-items-center"
    >
      © 2022
      <a href="https://getbootstrap.com/" class="text-black">
        <img
          src="https://rs.school/images/rs_school_js.svg"
          alt="RS SCHOOL"
          class="footer__rs-logo"
        />
      </a>
      <a
        href="https://github.com/ivan-varabyou/"
        class="footer__github btn btn-dark"
        >@ivan-varabyou</a
      >
    </p>
  </footer>

</div>
<audio src="./assets/sound/system/error.mp3" id="sound-error"></audio>
<audio src="./assets/sound/system/success.mp3" id="sound-success"></audio>
<audio src="./assets/sound/system/win.wav" id="sound-win"></audio>
`;

export { quizPage };
