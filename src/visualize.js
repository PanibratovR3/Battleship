import { handleHumanEmptyBoardCell, buttonHandler } from "./handlers.js";

const DOMBattleship = (() => {
  const primaryDraw = () => {
    const header = document.createElement("div");
    header.className = "header";
    header.textContent = "Battleship";
    document.body.appendChild(header);

    const control = document.createElement("div");
    control.className = "control";
    const label = document.createElement("div");
    label.className = "label";
    label.textContent = "Orientation:";
    control.appendChild(label);
    const orientationButton = document.createElement("button");
    orientationButton.className = "orientation-placement";
    orientationButton.innerHTML = "Horizontal &#8594;";
    orientationButton.addEventListener("click", buttonHandler);
    control.appendChild(orientationButton);
    document.body.appendChild(control);

    const mainContainer = document.createElement("div");
    mainContainer.className = "main-container";
    document.body.appendChild(mainContainer);

    const humanContainer = document.createElement("div");
    humanContainer.className = "human-container";
    mainContainer.appendChild(humanContainer);
    const humanHeader = document.createElement("div");
    humanHeader.className = "player-header";
    humanHeader.textContent = "You";
    humanContainer.appendChild(humanHeader);
    const humanBoardContainer = document.createElement("div");
    humanBoardContainer.className = "board-container";
    humanContainer.appendChild(humanBoardContainer);
    const humanBoard = document.createElement("div");
    humanBoard.className = "board";
    humanBoard.id = "human-board";
    humanBoardContainer.appendChild(humanBoard);

    const computerContainer = document.createElement("div");
    computerContainer.className = "computer-container";
    mainContainer.appendChild(computerContainer);
    const computerHeader = document.createElement("div");
    computerHeader.className = "player-header";
    computerHeader.textContent = "Computer";
    computerContainer.appendChild(computerHeader);
    const computerBoardContainer = document.createElement("div");
    computerBoardContainer.className = "board-container";
    computerContainer.appendChild(computerBoardContainer);
    const computerBoard = document.createElement("div");
    computerBoard.className = "board";
    computerBoard.id = "computer-board";
    computerBoardContainer.appendChild(computerBoard);
  };

  const drawBoard = (boardID, player, ships = null) => {
    const board = document.querySelector(boardID);
    const isHuman = player.isHuman;
    const playerBoard = player.board.board;
    if (board.hasChildNodes()) {
      while (board.firstChild) {
        const element = board.firstChild;
        board.removeChild(element);
      }
    }
    for (let i = 0; i < playerBoard.length; i++) {
      const boardRow = document.createElement("div");
      boardRow.className = "board-row";
      for (let j = 0; j < playerBoard[i].length; j++) {
        const boardCell = document.createElement("div");
        boardCell.className = "board-cell";
        boardCell.setAttribute("data-row", i);
        boardCell.setAttribute("data-column", j);
        if (playerBoard[i][j] !== "-") {
          if (playerBoard[j][j] !== "miss") {
            const cellData = playerBoard[i][j].split(",");
            boardCell.setAttribute("data-ship-id", cellData[0]);
            boardCell.classList.add("ship");
            boardCell.classList.add(`s-${cellData[1]}`);
            if (cellData[2]) {
              boardCell.textContent = "X";
            }
          } else {
            boardCell.innerHTML = "&#8226;";
          }
        } else {
          if (isHuman) {
            if (ships && ships.length > 1) {
              boardCell.addEventListener("click", (event) =>
                handleHumanEmptyBoardCell(event, player, ships)
              );
            } else {
              boardCell.removeEventListener("click", (event) =>
                handleHumanEmptyBoardCell(event, player, ships)
              );
            }
          }
        }
        boardRow.appendChild(boardCell);
      }
      board.appendChild(boardRow);
    }
  };
  return { primaryDraw, drawBoard };
})();

export { DOMBattleship };
