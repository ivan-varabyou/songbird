function setStorage(name, data) {
  localStorage.setItem(name, JSON.stringify(data));
}
function getStorage(name) {
  const data = JSON.parse(localStorage.getItem(name));
  return data;
}

function resetSrorege(page = 'quiz') {
  setStorage('song-id', null);
  setStorage('answer-data', null);
  setStorage('song-data', null);
  setStorage('score', null);
  setStorage('level', null);
  setStorage('levelWin', null);
  setStorage('page', page);
}

export { setStorage, getStorage, resetSrorege };
