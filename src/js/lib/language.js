import {
  birdsData, menuData, messageData, categoryData,
} from './birdsData.js';

import { setStorage, getStorage, resetSrorege } from './storage.js';

class Language {
  constructor(lang = 'rus') {
    this.lang = lang;
    this.song = null;
    this.addEvent();
    this.updateStartLanguage();
  }

  reset() {
    this.song = null;
  }

  get() {
    return this.lang;
  }

  updateStartLanguage() {
    if (getStorage('lang')) {
      this.lang = getStorage('lang');
    }
    this.updateLanguage();
  }

  addEvent() {
    this.languageButton = document.querySelector('.js-language');
    this.languageButton.addEventListener('click', () => this.toggleLanguage());
  }

  toggleLanguage() {
    this.lang === 'rus' ? (this.lang = 'eng') : (this.lang = 'rus');
    this.updateLanguage();
  }

  updateLanguage() {
    const page = getStorage('page');
    setStorage('lang', this.lang);
    this.languageButton.src = this.lang === 'rus'
      ? './assets/img/lang/eng.png'
      : './assets/img/lang/rus.png';

    if (page === 'quiz') {
      updateLangMenu(this.lang);
      updateLangQuiz(this.lang);

      if (Number(getStorage('song-id')) > 0) {
        updateLangQuestions(this.lang);
      }

      if (getStorage('answer-data')) {
        this.updeteLangAnswer(getStorage('answer-data'));
      }
    } else if (page === 'home' || page === 'start' || page === 'result') {
      updateLangMenu(this.lang);
      updateLangStartPage(this.lang);
    } else if (page === 'catalog') {
      updateLangMenu(this.lang);
      updateLangCatalogPage(this.lang);
    }
  }

  updeteLangAnswer(data) {
    const titleAnswer = document.querySelector('.js-title-answer');
    if (titleAnswer) {
      const descriptionAnswer = document.querySelector('.js-description-answer');
      titleAnswer.innerText = data[this.lang].name;
      descriptionAnswer.innerText = data[this.lang].description;
    }
  }
}

function updateLangQuestions(lang) {
  const songId = getStorage('song-id');
  const levelWin = getStorage('level-win');
  const songTitle = document.querySelector('.js-header-title');
  birdsData[lang][0].forEach((bird) => {
    const birdId = Number(bird.id);
    const birdName = bird.name;

    if (songId === birdId && levelWin === 1) {
      songTitle.innerText = birdName;
    }

    const birdElement = document.querySelector(
      `.js-questions-item[data-id="${birdId}"]`,
    );
    if (birdElement) {
      birdElement.innerText = birdName;
    }
  });
}

function updateLangMenu(lang) {
  const pageStart = document.querySelector('.js-page-start');
  const pageQuiz = document.querySelector('.js-page-quiz');
  const pageCatalog = document.querySelector('.js-page-catalog');
  pageStart.innerText = menuData[lang][0].index;
  pageQuiz.innerText = menuData[lang][0].quiz;
  pageCatalog.innerText = menuData[lang][0].catalog;
}

function updateLangStartPage(lang) {
  const score = Number(getStorage('score'));
  const level = Number(getStorage('level'));
  const startTitle = document.querySelector('.js-start-title');
  const startText = document.querySelector('.js-start-text');
  const startButton = document.querySelector('.js-start-button');
  if (score && level === 6) {
    if (score === 30) {
      startTitle.innerText = messageData[lang][0]['win-max'];
      startText.innerText = messageData[lang][0]['score-win-max'].replace(
        '${score}',
        score,
      );
    } else {
      startTitle.innerText = messageData[lang][0].win;
      startText.innerText = messageData[lang][0]['score-win'].replace(
        '${score}',
        score,
      );
    }
    startButton.innerText = messageData[lang][0].reply;
  } else {
    startTitle.innerText = messageData[lang][0].start;
    startText.innerText = messageData[lang][0]['start-text'];
    startButton.innerText = messageData[lang][0]['start-button'];
  }
}

function updateLangQuiz(lang) {
  const scoreText = document.querySelector('.js-score-text');
  const nextLevel = document.querySelector('.js-next-level');
  const quizTitleMessage = document.querySelector('.js-quiz-title-message');
  const quizCategies = document.querySelectorAll('.js-category');

  quizTitleMessage.innerText = messageData[lang][0]['quiz-title-text'];
  scoreText.innerText = messageData[lang][0].score;
  nextLevel.innerText = messageData[lang][0]['next-level'];

  quizCategies.forEach((category, index) => {
    category.innerText = categoryData[lang][index].category_name;
  });
}

function updateLangCatalogPage(lang) {
  const headerTile = document.querySelector('.js-header-title');
  headerTile.innerText = messageData[lang][0].catalog;
  birdsData[lang][0].forEach((item) => {
    const cardTile = document.querySelector(`.card-${item.id} .js-title-answer`);
    const cardDesc = document.querySelector(
      `.card-${item.id} .js-description-answer`,
    );
    cardTile.innerText = item.name;
    cardDesc.innerText = item.description;
  });
}

export {
  Language,
  birdsData,
  categoryData,
  getStorage,
  setStorage,
  resetSrorege,
};
