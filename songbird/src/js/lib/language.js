import {
  birdsData, menuData, messageData, categoryData,
} from './birdsData.js';

import { setStorage, getStorage } from './storage.js';

class Language {
  constructor(lang = 'rus') {
    this.lang = lang;
    this.addEvent();
    this.updateStartLanguage();
  }

  get() {
    return this.lang;
  }

  updateStartLanguage() {
    if (getStorage('lang')) {
      this.lang = getStorage('lang');
    } else {
      setStorage('lang', this.lang);
    }
    this.updateLanguage();
  }

  addEvent() {
    console.log('addEvent');
    this.languageButton = document.querySelector('.js-language');
    this.languageButton.addEventListener('click', () => this.toggleLanguage());
  }

  toggleLanguage() {
    this.lang === 'rus' ? (this.lang = 'eng') : (this.lang = 'rus');
    this.updateLanguage();
  }

  updateLanguage() {
    setStorage('lang', this.lang);
    this.languageButton.src = `./assets/img/lang/${this.lang}.png`;

    if (location.pathname.includes('quiz.html')) {
      updateLangMenu(this.lang);
      updateLangQuiz(this.lang);
    } else {
      updateLangMenu(this.lang);
      updateLangStartPage(this.lang);
    }
  }
}

function updateLangMenu(lang) {
  document.querySelector('.js-page-start').innerText = menuData[lang][0].index;
  document.querySelector('.js-page-quiz').innerText = menuData[lang][0].quiz;
  document.querySelector('.js-page-catalog').innerText = menuData[lang][0].catalog;
}

function updateLangStartPage(lang) {
  document.querySelector('.js-start-title').innerText = messageData[lang][0].start;
  document.querySelector('.js-start-text').innerText = messageData[lang][0]['start-text'];
  document.querySelector('.js-start-button').innerText = messageData[lang][0]['start-button'];
}

function updateLangQuiz(lang) {
  document.querySelector('.js-score-text').innerText = messageData[lang][0].score;
  document.querySelector('.js-next-level').innerText = messageData[lang][0]['next-level'];
  document.querySelector('.js-quiz-title-message').innerText = messageData[lang][0]['quiz-title-text'];
  const quizCategory = document.querySelectorAll('.js-category');
  quizCategory.forEach((element, index) => {
    element.innerText = categoryData[lang][index].category_name;
  });
}

export {
  Language, birdsData, menuData, messageData, categoryData,
};
