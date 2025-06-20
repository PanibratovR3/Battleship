const orientations = ["horizontal", "vertical"];
let orientation = "horizontal";

function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export { random, orientations, orientation };
