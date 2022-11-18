// <body class="d-flextext-center text-bg-dark body body-start-page"></body>
const startPage = (videoName) => `
          <main id="main" class="px-3 main d-flex justify-content-center flex-fill align-items-center">
            <div class="info text-center m-12 intro-text">
              <h1 class="info__title js-start-title"></h1>
              <p class="info__text h5 js-start-text"></p>
              <div class="info__text">
                <span data-href="quiz" class="info__link btn btn-lg btn btn-primary text-uppercase js-start-button"></span>
              </div>
            </div>
            <video muted  preload="auto" class="cover-video" id="coverVideo">
              <source type="video/mp4" src="./assets/video/${videoName}.mp4">
            </video>
            <audio src="./assets/sound/system/intro.mp3" id="soundIntro" autoplay ></audio>
          </main>
        `;

export { startPage };
