class Player {
  constructor($el, songId = 0) {
    this.playerBtn = $el.querySelector(' .js-player-button');
    this.prorgess = $el.querySelector('.js-prorgess');
    this.prorgessLine = $el.querySelector('.js-prorgess-line');
    this.infoCurrentTime = $el.querySelector('.js-current-time');
    this.infoEndTime = $el.querySelector('.js-end-time');
    this.audio = $el.querySelector('#player');
    this.songId = songId;
    if (songId > 0) {
      this.volume = $el.querySelector('.js-player-volume');
      this.volumeOutput = $el.querySelector('.js-player-output');
    }
    this.addEvent();
    if (this.songId > 0) this.headerTitle = $el.querySelector('.js-header-title');
  }

  addEvent() {
    this.prorgessLine.style.width = '0%';
    this.audio.addEventListener('loadeddata', () => {
      this.updateTime(0, this.audio.duration);
      this.playerBtn.addEventListener('click', () => this.updateButton());
      this.audio.addEventListener('timeupdate', (e) => this.setProrgessLine(e));
      this.prorgess.addEventListener('click', (e) => this.setCurrentTime(e));
    });
    if (this.songId > 0) {
      this.volume.addEventListener('input', (e) => {
        const { max: maxValue, valueAsNumber: value } = e.target;
        const volumeAudio = value === 100 ? 1 : (value / maxValue).toFixed(2);
        this.volumeOutput.value = value;
        this.volume.style.backgroundSize = `${value}% ${maxValue}%`;
        this.audio.volume = volumeAudio;
      });
    }
  }

  updateButton() {
    if (this.playerBtn.classList.contains('player__button--pause')) {
      this.pause();
    } else {
      this.play();
    }
  }

  setProrgessLine(e) {
    const { duration } = e.srcElement;
    const { currentTime } = e.srcElement;
    const prorgessProcent = (currentTime / duration) * 100;
    this.prorgessLine.style.width = `${prorgessProcent}%`;
    this.updateTime(currentTime, duration);
    if (prorgessProcent === 100) {
      this.audio.currentTime = 0;
      this.updateButton();
    }
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

  stop() {
    this.pause();
    this.audio.currentTime = 0;
  }

  play() {
    this.playerBtn.classList.add('player__button--pause');
    this.playerBtn.classList.remove('player__button--play');
    this.audio.play();
  }

  pause() {
    this.playerBtn.classList.add('player__button--play');
    this.playerBtn.classList.remove('player__button--pause');
    this.audio.pause();
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

export { Player };
