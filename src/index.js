import { DOMBattleship } from "./visualize.js";
import { Player } from "./player.js";
import { random, orientations } from "./utils.js";
import { Control } from "./control.js";

let humanPlayer = new Player(true);
let computerPlayer = new Player(false);
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

const randomButton = document.querySelector(".random");
randomButton.addEventListener("click", (event) => {
  if (humanShipsToPlace.length > 0) {
    do {
      const ship = humanShipsToPlace[humanShipsToPlace.length - 1];
      let i = random(0, humanPlayer.board.boardSize);
      let j = random(0, humanPlayer.board.boardSize);
      let orientation = orientations[random(0, orientations.length)];
      const placementStatus = humanPlayer.board.placeShip(
        i,
        j,
        ship,
        orientation
      );
      if (placementStatus) {
        humanShipsToPlace.length = humanShipsToPlace.length - 1;
      }
    } while (humanShipsToPlace.length > 0);
    DOMBattleship.drawBoardRandom("#human-board", humanPlayer.board.board);
    document.querySelector(".info").textContent = "Start game.";
  }
});

const restartButton = document.querySelector(".restart");
restartButton.addEventListener("click", () => {
  humanPlayer = new Player(true);
  computerPlayer = new Player(false);
  humanShipsToPlace = humanPlayer.board.ships.slice();
  computerShipsToPlace = computerPlayer.board.ships.slice();
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
  const computerCells = document.querySelectorAll(
    "#computer-board .board-cell"
  );

  computerCells.forEach((cell) => {
    cell.addEventListener("click", (event) => {
      if (
        event.target.textContent == "" &&
        humanShipsToPlace.length === 0 &&
        !humanPlayer.board.areAllShipsSunk() &&
        !computerPlayer.board.areAllShipsSunk()
      ) {
        document.querySelector(".error").textContent = "";
        document.querySelector(".info").textContent = "";
        const { isTargetCellEmpty } = Control.playHumanRound(
          event,
          computerPlayer
        );

        if (isTargetCellEmpty) {
          Control.playComputerRound(humanPlayer);
        }
      } else if (humanShipsToPlace.length > 0) {
        document.querySelector(".error").textContent =
          "You must place all your ships";
      } else if (event.target.textContent !== "") {
        document.querySelector(".error").textContent =
          "This field was already attacked.";
      }
    });
  });
});

const computerCells = document.querySelectorAll("#computer-board .board-cell");

computerCells.forEach((cell) => {
  cell.addEventListener("click", (event) => {
    if (
      event.target.textContent == "" &&
      humanShipsToPlace.length === 0 &&
      !humanPlayer.board.areAllShipsSunk() &&
      !computerPlayer.board.areAllShipsSunk()
    ) {
      document.querySelector(".error").textContent = "";
      document.querySelector(".info").textContent = "";
      const { isTargetCellEmpty } = Control.playHumanRound(
        event,
        computerPlayer
      );

      if (isTargetCellEmpty) {
        Control.playComputerRound(humanPlayer);
      }
    } else if (humanShipsToPlace.length > 0) {
      document.querySelector(".error").textContent =
        "You must place all your ships";
    } else if (event.target.textContent !== "") {
      document.querySelector(".error").textContent =
        "This field was already attacked.";
    }
  });
});
