const orientations = ["horizontal", "vertical"];

function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export { random, orientations };
