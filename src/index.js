import { DOMBattleship } from "./visualize.js";
import { Player } from "./player.js";
import { random, orientations } from "./utils.js";

const humanPlayer = new Player(true);
const computerPlayer = new Player(false);
let humanShipsToPlace = humanPlayer.board.ships.slice();
let computerShipsToPlace = humanPlayer.board.ships.slice();

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

console.log(computerPlayer.board.board);

// function handleHumanEmptyBoardCell(event) {
//   if (
//     event.target.textContent === "" &&
//     !event.target.classList.contains("ship")
//   ) {
//     console.log("Can place");
//     let i = Number(event.target.getAttribute("data-row"));
//     let j = Number(event.target.getAttribute("data-column"));
//     const ship = humanShipsToPlace[humanShipsToPlace.length - 1];
//     const placementStatus = humanPlayer.board.placeShip(
//       i,
//       j,
//       ship,
//       "horizontal"
//     );
//     if (placementStatus) {
//       console.log("Success!");
//       DOMBattleship.drawBoard("#human-board", humanPlayer);
//       humanShipsToPlace.pop();
//       console.log(humanShipsToPlace);
//     } else {
//       console.log("Error!");
//     }
//   } else {
//     console.log("Can't.");
//   }
// }

// placeShips(humanShipsToPlace);

//(event) => {
//     if (
//       event.target.textContent === "" &&
//       !event.target.classList.contains("ship")
//     ) {
//       console.log("Can place");
//       let i = Number(event.target.getAttribute("data-row"));
//       let j = Number(event.target.getAttribute("data-column"));
//       const ship = humanShipsToPlace[humanShipsToPlace.length - 1];
//       const placementStatus = humanPlayer.board.placeShip(
//         i,
//         j,
//         ship,
//         "horizontal"
//       );
//       if (placementStatus) {
//         console.log("Success!");
//         DOMBattleship.drawBoard("#human-board", humanPlayer);
//         humanShipsToPlace.pop();
//         console.log(humanShipsToPlace);
//       } else {
//         console.log("Error!");
//       }
//     }
//   });
// });
