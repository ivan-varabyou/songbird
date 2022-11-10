function setStorage(name, data) {
  localStorage.setItem(name, JSON.stringify(data));
}
function getStorage(name) {
  const data = JSON.parse(localStorage.getItem(name));
  return data;
}

export {setStorage, getStorage}