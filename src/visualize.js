import { handleHumanEmptyBoardCell } from "./handlers.js";

const DOMBattleship = (() => {
  let humanOrientation;
  const primaryDraw = () => {
    const header = document.createElement("div");
    header.className = "header";
    header.textContent = "Battleship";
    document.body.appendChild(header);

    const errorField = document.createElement("div");
    errorField.className = "error";
    document.body.appendChild(errorField);
    const infoField = document.createElement("div");
    infoField.className = "info";
    document.body.appendChild(infoField);
    const optionsContainer = document.createElement("div");
    optionsContainer.className = "options";
    const randomPlacementButton = document.createElement("button");
    randomPlacementButton.textContent = "Place ships randomly";
    randomPlacementButton.className = "random";
    optionsContainer.appendChild(randomPlacementButton);
    const restartButton = document.createElement("button");
    restartButton.innerHTML = "Restart &#8634;";
    restartButton.className = "restart";
    optionsContainer.appendChild(restartButton);
    document.body.appendChild(optionsContainer);
    const control = document.createElement("div");
    control.className = "control";
    const label = document.createElement("div");
    label.className = "label";
    label.textContent = "Orientation:";
    control.appendChild(label);
    const orientationButton = document.createElement("button");
    orientationButton.className = "orientation-placement";
    orientationButton.innerHTML = "Horizontal &#8594;";
    humanOrientation = "horizontal";
    orientationButton.addEventListener("click", (event) => {
      let currentOrientation = event.target.textContent
        .split(" ")[0]
        .toLowerCase();
      currentOrientation =
        currentOrientation === "horizontal" ? "vertical" : "horizontal";
      humanOrientation = currentOrientation;
      const arrow = currentOrientation === "vertical" ? "&#8593;" : "&#8594;";
      event.target.innerHTML = `${
        currentOrientation.charAt(0).toUpperCase() + currentOrientation.slice(1)
      } ${arrow}`;
    });
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
          const cellData = playerBoard[i][j].split(",");
          boardCell.classList.add(`s-${cellData[1]}`);
        } else {
          if (isHuman) {
            if (ships && ships.length > 1) {
              document.querySelector(".info").textContent = `Placing the Ship-${
                ships[ships.length - 2].length
              }.`;
              boardCell.classList.add("active");
              boardCell.addEventListener("click", (event) => {
                handleHumanEmptyBoardCell(
                  event,
                  player,
                  ships,
                  humanOrientation
                );
              });
            } else {
              document.querySelector(".info").textContent = "Start!";
              boardCell.classList.remove("active");
              boardCell.removeEventListener("click", (event) =>
                handleHumanEmptyBoardCell(
                  event,
                  player,
                  ships,
                  humanOrientation
                )
              );
            }
          }
        }
        boardRow.appendChild(boardCell);
      }
      board.appendChild(boardRow);
    }
  };

  const updateCell = (boardSelector, row, column, player) => {
    const cell = document.querySelector(
      `${boardSelector}[data-row='${row}'][data-column='${column}']`
    );
    const cellData = player.board.board[row][column];
    if (cellData === "miss") {
      cell.innerHTML = "&#8226;";
    } else {
      cell.textContent = "X";
      if (!player.isHuman) {
        const cellDataArray = cellData.split(",");
        cell.classList.add(`s-${cellDataArray[1]}`);
      }
    }
  };

  const drawBoardRandom = (boardID, board) => {
    const boardField = document.querySelector(boardID);
    if (boardField.hasChildNodes()) {
      while (boardField.firstChild) {
        const element = boardField.firstChild;
        boardField.removeChild(element);
      }
    }
    for (let i = 0; i < board.length; i++) {
      const boardRow = document.createElement("div");
      boardRow.className = "board-row";
      for (let j = 0; j < board.length; j++) {
        const boardCell = document.createElement("div");
        boardCell.className = "board-cell";
        boardCell.setAttribute("data-row", i);
        boardCell.setAttribute("data-column", j);
        if (board[i][j] !== "-") {
          const cellData = board[i][j].split(",");
          boardCell.classList.add(`s-${cellData[1]}`);
        }
        boardRow.appendChild(boardCell);
      }
      boardField.appendChild(boardRow);
    }
  };
  return { primaryDraw, drawBoard, updateCell, drawBoardRandom };
})();

export { DOMBattleship };
