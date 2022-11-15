import {
  Quiz,
  Language,
  birdsData,
  getStorage,
  setStorage,
  resetSrorege,
  Player,
  header,
  footer,
  startPage,
  quizPage,
  catalogPage,
  buildCard,
} from './lib/quiz.js';

(() => {
  let lang;
  let quiz;
  function menuStart() {
    const menu = document.querySelector('.js-menu');
    const nav = document.querySelector('.nav');
    const headerBlock = document.querySelector('.header');
    menu.addEventListener('click', (e) => toggleMenu(e));
    nav.addEventListener('click', (e) => {
      if (e.target.dataset && e.target.dataset.href) {
        updatePage(e.target.dataset.href);
      }
      closeMenu(e);
    });

    function toggleMenu() {
      headerBlock.classList.toggle('active');
    }

    function closeMenu() {
      headerBlock.classList.remove('active');
    }
  }

  function updatePage(data) {
    document.body.className = `body ${data}-page`;
    setStorage('page', data);
    renderPage();
  }

  function renderPage() {
    const { body } = document;
    const main = document.getElementById('main');
    const page = getStorage('page');
    if (page === 'home') {
      body.insertAdjacentHTML('beforeend', footer);
      body.insertAdjacentHTML('afterbegin', startPage);
      body.insertAdjacentHTML('afterbegin', header);
      lang = new Language();
      menuStart();
    }

    loaderView();

    if (page === 'start' || page === 'result') {
      body.classList.add('cover-container');
      main.outerHTML = startPage;
      lang.updateLanguage();
    }

    if (page === 'quiz') {
      resetSrorege();
      main.outerHTML = quizPage;
      quiz = new Quiz(1);
      quiz.updateScoreInfo();
      lang.updateLanguage();

      const nextLevelButton = document.querySelector('.js-next-level');
      nextLevelButton.addEventListener('click', () => {
        const level = getStorage('level');
        if (level === 6) {
          updatePage('result');
        }
      });
    }

    if (page === 'catalog') {
      main.outerHTML = catalogPage;
      updatePageCatalog();
    }

    if (page === 'quiz' || page === 'catalog') {
      body.classList.remove('cover-container');
    }

    loaderHide();

    if (page === 'start' || page === 'home' || page === 'result') {
      const coverVideo = document.getElementById('coverVideo');
      coverVideo.play();
      buttonStart();
    }

    function loaderView() {
      setLoaderLogo('flex', '1');
    }

    function loaderHide() {
      setTimeout(() => {
        setLoaderLogo('none', '0');
      }, 800);
    }
    function updatePageCatalog() {
      const catalog = document.querySelector('.js-catalog');
      const catalogPlayer = [];
      catalog.innerHTML = '';
      birdsData[getStorage('lang')][0].forEach((card, index) => {
        catalog.insertAdjacentHTML('beforeend', buildCard('card', card));
        catalogPlayer[index] = new Player(
          document.querySelector(`.js-player-${card.id}`),
        );
      });
    }
    function buttonStart() {
      const btnStart = document.querySelector('.js-start-button');
      btnStart.addEventListener('click', (e) => {
        resetSrorege();
        updatePage(e.target.dataset.href);
      });
    }
    function setLoaderLogo(display, opacity) {
      const loaderLogo = document.querySelector('.loader');
      loaderLogo.style.opacity = opacity;
      loaderLogo.style.display = display;
    }
  }

  resetSrorege('home');
  updatePage('home');

  console.log(
    'Добрый день. Не скрываейте, Ваш ник в Cross-Check Review ([v] Make my name visible in feedback)',
  );
  console.log('Score 270 / 270');
})();
