import { DOMBattleship } from "./visualize.js";

function handleHumanEmptyBoardCell(event, player, ships, direction) {
  let i = Number(event.target.getAttribute("data-row"));
  let j = Number(event.target.getAttribute("data-column"));
  const ship = ships[ships.length - 1];
  const placementStatus = player.board.placeShip(i, j, ship, direction);
  if (placementStatus) {
    document.querySelector(".error").textContent = "";
    DOMBattleship.drawBoard("#human-board", player, ships);
    ships.length = ships.length - 1;
  } else {
    document.querySelector(".error").textContent =
      "Error! Cannot place this ship here.";
  }
}

export { handleHumanEmptyBoardCell };
