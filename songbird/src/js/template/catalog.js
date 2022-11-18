function buildCard(statusCard, card) {
  return `
  <div class="card shadow-sm ${statusCard} ${statusCard}-${card.id}" data-card="${card.id}">
  <div class="card-wrapper">
      <div class="card__header">
        <img
          src="${card.img}"
          alt=""
          class="card__image card__image--min"
        />
      </div>
      <div class="card__body">
        <h5 class="card__title js-title-answer">${card.name}</h5>
        <h6 class="card__subtitle">«${card.name_latin}»</h6>
        <div class="player player-answer js-player-answer js-player-${card.id}" data-answer="${card.id}">
          <div class="js-player-block">
          <audio
            id="player"
            class="js-player-audio"
            src="${card.sound}"
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
      <div class="card__description ">

        <p class="js-description-answer">
          ${card.description}
        </p>
      </div>


  </div>
</div>
`;
}

const catalogPage = `
<main class="main-quiz" id="main">
  <section
    class="cover-quiz cover-active js-cover"
    style="background-image: url('./assets/img/scene/catalog.jpg')">
    <div class="cover-quiz__container">
      <div class="col-12 mx-auto container">
      <h1 class="player__title player__title--big js-header-title d-flex justify-content-center">
        Каталог птиц
      </h1>
      </div>
    </div>
  </section>

  <div class="container">
    <div class="catalog js-catalog">



    </div>
  </div>
</main>
`;

export { buildCard, catalogPage };
