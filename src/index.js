import { DOMBattleship } from "./visualize.js";
import { Player } from "./player.js";

const humanPlayer = new Player(true);
const computerPlayer = new Player(false);
let humanShipsToPlace = humanPlayer.board.ships.slice();
let computerShipsToPlace = humanPlayer.board.ships.slice();

DOMBattleship.primaryDraw();
DOMBattleship.drawBoard("#human-board", humanPlayer, humanShipsToPlace);
DOMBattleship.drawBoard("#computer-board", computerPlayer);

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

console.log(humanShipsToPlace);
