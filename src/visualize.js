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

  return { primaryDraw };
})();

export { DOMBattleship };
