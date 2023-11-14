function randListStart(items, limit) {
  const randItemStart = new Set();
  let randNum;
  while (limit > randItemStart.size) {
    randNum = random(1, items - 1);
    randItemStart.add(randNum);
  }
  return [...randItemStart];
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export { randListStart, random };
