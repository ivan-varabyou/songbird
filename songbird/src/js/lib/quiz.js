import {
  Language,
  birdsData,
  categoryData,
  getStorage,
  setStorage,
  resetSrorege,
} from './language.js';
import { Player } from './player.js';
import { header } from '../template/header.js';
import { footer } from '../template/footer.js';
import { startPage } from '../template/start.js';
import { quizPage, buildMainSound } from '../template/quiz.js';
import { catalogPage, buildCard } from '../template/catalog.js';
import { random, randListStart } from './random.js';

class Quiz {
  constructor() {
    this.score = 0;
    this.levelScore = 5;
    this.level = 0;
    this.levelWin = 0;
    this.song = {};
    this.songId = null;
    this.songData = {};
    this.answerPalyer = {};
    this.palyer = {};
    this.palyerStatus = null;
    this.nextLevelButton = document.querySelector('.js-next-level');
    this.cover = document.querySelector('.js-cover');
    this.scoreInfo = document.querySelector('.js-score');
    this.answer = document.querySelector('.js-answer');
    this.categories = document.querySelectorAll('.js-category');
    this.questions = document.querySelectorAll('.js-questions-item');
    this.questionsList = document.querySelector('.js-questions-list');
    this.titleMessage = document.querySelector('.js-quiz-title-message');
    this.headerTitle = document.querySelector('.js-header-title');
    this.prorgessLine = document.querySelector('.js-player .js-prorgess-line');
    this.updateLevel();
    this.event();
  }

  updateScoreInfo() {
    this.scoreInfo.innerText = this.score;
  }

  getScore() {
    return this.score;
  }

  event() {
    this.nextLevelButton.addEventListener('click', () => this.nextLevel());
    this.questionsList.addEventListener('click', (e) => {
      const songId = e.target.dataset.id;
      const statusQuestion = e.target.dataset.status;
      this.titleMessage.style.display = 'none';
      if (songId === this.songId) {
        if (this.levelWin === 0 && statusQuestion === 'active') {
          this.headerTitle = document.querySelector('.js-header-title');
          this.headerTitle.innerText = this.song.name;
          this.headerTitle.classList.add('win');
          this.updateButton();
          e.target.classList.add('success');
          this.score += this.levelScore;
          setStorage('score', this.score);
          this.updateScoreInfo();
        }
        this.palyer.stop();
        replay(soundSuccess);
      } else if (songId > 0) {
        if (this.levelWin === 0 && statusQuestion === 'active') {
          e.target.classList.add('error');
          if (this.levelScore !== 0) {
            --this.levelScore;
          }
        }
        replay(soundError);
      }

      this.updateAnswer(e);

      // add pasive status question
      e.target.dataset.status = 'pasive';

      function replay(sound) {
        sound.pause();
        sound.currentTime = 0;
        sound.play();
      }
    });
  }

  updateButton() {
    this.levelWin = 1;
    setStorage('level-win', 1);
    this.nextLevelButton.removeAttribute('disabled');
    this.nextLevelButton.classList.add('btn-primary');
    this.nextLevelButton.classList.remove('btn-secondary');
    this.updateCover(this.song.img);
  }

  nextLevel() {
    this.levelPrev = this.level;
    this.level += 1;

    this.updateLevel();
    this.levelWin = 0;
    setStorage('level-win', 0);
    this.headerTitle.innerHTML = '<span class="player__stars">******</span>';
    this.prorgessLine.style.width = '0%';
  }

  updateLevel() {
    setStorage('level', this.level);
    if (this.level < 6) {
      this.updateCategory();
      this.updateInformation();
    }
  }

  async updateInformation() {
    const mainPlayer = document.querySelector('.js-player');
    const data = this.getActiveData();

    const dataId = [];
    this.songData = data;

    data[getStorage('lang')].forEach((value) => dataId.push(value.id));
    const randNum = random(0, dataId.length - 1);
    this.song = data[getStorage('lang')][randNum];
    this.songId = this.song.id;
    setStorage('song-id', +this.songId);

    mainPlayer.innerHTML = await buildMainSound(this.song.sound);

    this.palyer = new Player(mainPlayer, this.songId);

    this.updateQuestions(data[getStorage('lang')]);
    this.answer.innerHTML = '';
    this.titleMessage.style.display = 'block';

    this.levelScore = 5;
  }

  getActiveData() {
    const data = [];
    if (this.level === 0) {
      const lengthData = birdsData[getStorage('lang')][0].length;
      const lengthCategory = categoryData[getStorage('lang')].length;
      const randList = randListStart(lengthData, lengthCategory);
      data.eng = birdsData.eng[0].filter((value) => randList.includes(Number(value.id)));
      data.rus = birdsData.rus[0].filter((value) => randList.includes(Number(value.id)));
    } else {
      data.eng = birdsData.eng[0].filter(
        (e) => Number(e.category_id) === this.level,
      );
      data.rus = birdsData.rus[0].filter(
        (e) => Number(e.category_id) === this.level,
      );
    }

    return data;
  }

  updateQuestions(data) {
    data.forEach((item, index) => {
      this.questions[index].classList.remove('success');
      this.questions[index].classList.remove('error');
      this.questions[index].removeAttribute('disabled');
      this.questions[index].innerText = item.name;
      this.questions[index].dataset.id = item.id;
      this.questions[index].dataset.status = 'active';
    });
    this.nextLevelButton.setAttribute('disabled', 'disabled');
    this.nextLevelButton.classList.remove('btn-primary');
    this.nextLevelButton.classList.add('btn-secondary');
  }

  updateAnswer(e) {
    if (this.songData[getStorage('lang')].length > 0) {
      const answer = {};
      this.songData.eng.forEach((el) => {
        if (Number(el.id) === Number(e.target.dataset.id)) {
          answer.eng = el;
        }
      });
      this.songData.rus.forEach((el) => {
        if (Number(el.id) === Number(e.target.dataset.id)) {
          answer.rus = el;
        }
      });

      setStorage('answer-data', answer);

      if (answer[getStorage('lang')]) {
        const statusAnswer = answer[getStorage('lang')].id === this.songId
          ? 'card--success'
          : 'card--error';
        const card = buildCard(statusAnswer, answer[getStorage('lang')]);
        this.answer.innerHTML = card;

        this.answerPalyer = new Player(
          document.querySelector('.js-player-answer'),
        );
      }
    }
  }

  updateCover(image) {
    this.cover.style.backgroundImage = `url(${image})`;
  }

  updateCategory() {
    const categoryImage = categoryData[getStorage('lang')][this.level].category_image;
    this.updateCover(categoryImage);

    this.categories.forEach((el) => {
      const id = Number(el.dataset.categoryid);
      if (id === this.level) {
        el.classList.remove('btn-outline-dark');
        el.classList.add('btn-dark');
      } else {
        el.classList.remove('btn-dark');
        el.classList.add('btn-outline-dark');
      }
    });
  }
}

export {
  Quiz,
  Language,
  birdsData,
  categoryData,
  getStorage,
  setStorage,
  resetSrorege,
  Player,
  header,
  footer,
  startPage,
  quizPage,
  buildMainSound,
  catalogPage,
  buildCard,
  random,
  randListStart,
};
