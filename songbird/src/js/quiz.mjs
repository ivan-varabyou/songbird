import {
  Language,
  birdsData,
  menuData,
  messageData,
  categoryData,
} from './lib/language.js';

import { random, randListStart } from './lib/random.js';

const lang = new Language();

class Player {
  constructor($el) {
    this.playerBtn = $el.querySelector(' .js-player-button');
    this.prorgess = $el.querySelector('.js-prorgess');
    this.prorgessLine = $el.querySelector('.js-prorgess-line');
    this.infoCurrentTime = $el.querySelector('.js-current-time');
    this.infoEndTime = $el.querySelector('.js-end-time');
    this.audio = $el.querySelector('.js-player-audio');
    this.updateTime(0, this.audio.duration);
    this.event();
  }

  event() {
    this.playerBtn.addEventListener('click', () => this.updateButton());
    this.audio.addEventListener('timeupdate', (e) => this.setProrgessLine(e));
    this.prorgess.addEventListener('click', (e) => this.setCurrentTime(e));
  }

  updateButton() {
    try {
      if (this.playerBtn.classList.contains('player__button--pause')) {
        this.playerBtn.classList.add('player__button--play');
        this.playerBtn.classList.remove('player__button--pause');
        this.pause();
      } else {
        this.playerBtn.classList.add('player__button--pause');
        this.playerBtn.classList.remove('player__button--play');
        this.play();
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  setProrgessLine(e) {
    const { duration } = e.srcElement;
    const { currentTime } = e.srcElement;
    const prorgessProcent = (currentTime / duration) * 100;
    this.prorgessLine.style.width = `${prorgessProcent}%`;
    this.updateTime(currentTime, duration);
  }

  setCurrentTime(e) {
    this.audio.currentTime = (e.offsetX / this.prorgess.clientWidth) * this.audio.duration;
  }

  updateTime(currentTime, duration) {
    const currentMin = Math.abs(Math.round(currentTime / 60));
    const currentSec = Math.abs(Math.round(currentTime - currentMin * 60));
    const endMin = Math.abs(Math.round(duration / 60));
    const endSec = Math.abs(Math.round(duration - endMin * 60));
    this.infoCurrentTime.innerText = timeFormat(currentMin, currentSec);
    this.infoEndTime.innerText = timeFormat(endMin, endSec);
  }

  play() {
    console.log(this.audio);
    this.audio.play();
  }

  pause() {
    this.audio.pause();
  }
}

class Quiz {
  constructor() {
    this.score = 0;
    this.songId = null;
    this.level = 0;
    this.sound = {};
    this.nextLevelButton = document.querySelector('.js-next-level');
    this.cover = document.querySelector('.js-cover');
    this.questions = document.querySelector('.js-questions');
    this.categories = document.querySelectorAll('.js-category');
    this.updateLevel();
    this.event();
  }

  event() {
    this.nextLevelButton.addEventListener('click', () => this.nextLevel());
  }

  nextLevel() {
    this.level += 1;
    this.updateLevel();
  }

  updateLevel() {
    this.updateCategory();
    this.updateData();
  }

  updateData() {
    let data;
    if (this.level === 0) {
      const lengthData = birdsData[lang.get()][0].length;
      const lengthCategory = categoryData[lang.get()].length;
      const randList = randListStart(lengthData, lengthCategory);
      data = birdsData[lang.get()][0].filter((value) => randList.includes(Number(value.id)));
    } else {
      data = birdsData[lang.get()][0].filter(
        (e) => Number(e.category_id) === this.level,
      );
    }
    const dataId = [];
    data.forEach((value) => dataId.push(value.id));
    const randNum = random(0, dataId.length - 1);
    const randSong = data[randNum];
    this.songId = randSong.id;

    document.querySelector(
      '.js-player-block',
    ).innerHTML = `<audio class="js-player-audio" src="${randSong.sound}"></audio>`;
    // this.palyer = new Player(document.querySelector('.js-player'));
  }

  updateCategory() {
    const categoryImage = categoryData[lang.get()][this.level].category_image;
    this.cover.style.backgroundImage = `url(${categoryImage})`;
    this.categories.forEach((el) => {
      const id = Number(el.dataset.categoryid);
      if (id === this.level) {
        el.removeAttribute('disabled');
        el.classList.remove('btn-outline-dark');
        el.classList.add('btn-dark');
      } else {
        el.setAttribute('disabled', 'disabled');
        el.classList.remove('btn-dark');
        el.classList.add('btn-outline-dark');
      }
    });
  }
}

function timeFormat(min, sec) {
  if (min < 10) {
    min = `0${min}`;
  }
  if (sec < 10) {
    sec = `0${sec}`;
  }
  if (isNaN(min)) min = '00';
  if (isNaN(sec)) sec = '00';
  return `${min}:${sec}`;
}

if (location.pathname.includes('quiz.html')) {
  const quiz = new Quiz();
}
