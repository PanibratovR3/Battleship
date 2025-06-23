import { DOMBattleship } from "./visualize.js";
import { Player } from "./player.js";
import { random, orientations } from "./utils.js";
import { Control } from "./control.js";

const humanPlayer = new Player(true);
const computerPlayer = new Player(false);
let humanShipsToPlace = humanPlayer.board.ships.slice();
let computerShipsToPlace = computerPlayer.board.ships.slice();

DOMBattleship.primaryDraw();
DOMBattleship.drawBoard("#human-board", humanPlayer, humanShipsToPlace);
DOMBattleship.drawBoard("#computer-board", computerPlayer);

let computerShipIndex = computerShipsToPlace.length - 1;

do {
  const ship = computerShipsToPlace[computerShipIndex];
  let i = random(0, computerPlayer.board.boardSize);
  let j = random(0, computerPlayer.board.boardSize);
  let orientation = orientations[random(0, orientations.length)];
  const placementStatus = computerPlayer.board.placeShip(
    i,
    j,
    ship,
    orientation
  );
  if (placementStatus) {
    computerShipIndex--;
  }
} while (computerShipIndex >= 0);

const computerCells = document.querySelectorAll("#computer-board .board-cell");

computerCells.forEach((cell) => {
  cell.addEventListener("click", (event) => {
    if (
      event.target.textContent == "" &&
      humanShipsToPlace.length === 0 &&
      !humanPlayer.board.areAllShipsSunk() &&
      !computerPlayer.board.areAllShipsSunk()
    ) {
      const { isTargetCellEmpty } = Control.playHumanRound(
        event,
        computerPlayer
      );
      console.log(isTargetCellEmpty);
    } else if (humanShipsToPlace.length > 0) {
      document.querySelector(".error").textContent =
        "You must place all your ships";
    } else {
      console.log("Not yet.");
    }
  });
});
