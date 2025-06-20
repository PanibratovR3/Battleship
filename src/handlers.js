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

function buttonHandler(event, orientation) {
  let currentOrientation = event.target.textContent.split(" ")[0].toLowerCase();
  console.log(currentOrientation);
  orientation = currentOrientation === "horizontal" ? "vertical" : "horizontal";
  const arrow = orientation === "vertical" ? "&#8593;" : "&#8594;";
  event.target.innerHTML = `${
    orientation.charAt(0).toUpperCase() + orientation.slice(1)
  } ${arrow}`;
  console.log(orientation);
}

export { handleHumanEmptyBoardCell, buttonHandler };
