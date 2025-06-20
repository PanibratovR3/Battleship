import { DOMBattleship } from "./visualize.js";

function handleHumanEmptyBoardCell(event, player, ships) {
  let i = Number(event.target.getAttribute("data-row"));
  let j = Number(event.target.getAttribute("data-column"));
  const ship = ships[ships.length - 1];
  const placementStatus = player.board.placeShip(i, j, ship, "horizontal");
  if (placementStatus) {
    DOMBattleship.drawBoard("#human-board", player, ships);
    ships.length = ships.length - 1;
  } else {
    console.log("Error!");
  }
}

export { handleHumanEmptyBoardCell };
