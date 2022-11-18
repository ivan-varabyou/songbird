function loaderView() {
  setLoaderLogo('flex', '1');
}

function loaderHide() {
  setTimeout(() => {
    setLoaderLogo('none', '0');
  }, 800);
}

function setLoaderLogo(display, opacity) {
  const loaderLogo = document.querySelector('.loader');
  loaderLogo.style.opacity = opacity;
  loaderLogo.style.display = display;
}

export { loaderView, loaderHide, setLoaderLogo };
