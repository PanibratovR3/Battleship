import { DOMBattleship } from "./visualize.js";
import { random } from "./utils.js";
const Control = (() => {
  const playHumanRound = (event, computerPlayer) => {
    const computerRow = Number(event.target.getAttribute("data-row"));
    const computerColumn = Number(event.target.getAttribute("data-column"));
    const isTargetCellEmpty =
      computerPlayer.board.board[computerRow][computerColumn] === "-";
    const hitOutcome = computerPlayer.board.receiveAttack(
      computerRow,
      computerColumn
    );
    DOMBattleship.updateCell(
      "#computer-board .board-cell",
      computerRow,
      computerColumn,
      computerPlayer
    );
    if (computerPlayer.board.areAllShipsSunk()) {
      document.querySelector(".info").textContent = "You win!";
    }
    return { isTargetCellEmpty, hitOutcome };
  };

  const playComputerRound = (humanPlayer) => {
    let successFullTurn = false;
    let hitShipFlag;
    let humanRow, humanColumn;
    let firstAttackSuccessFlag;
    do {
      humanRow = random(0, humanPlayer.board.boardSize);
      humanColumn = random(0, humanPlayer.board.boardSize);
      hitShipFlag =
        humanPlayer.board.board[humanRow][humanColumn].split(",").length === 2;
      firstAttackSuccessFlag = humanPlayer.board.receiveAttack(
        humanRow,
        humanColumn
      );
      DOMBattleship.updateCell(
        "#human-board .board-cell",
        humanRow,
        humanColumn,
        humanPlayer
      );
      if (firstAttackSuccessFlag && hitShipFlag) {
        successFullTurn = true;
      }
    } while (!firstAttackSuccessFlag);
    while (successFullTurn) {
      humanRow = random(0, humanPlayer.board.boardSize);
      humanColumn = random(0, humanPlayer.board.boardSize);
      const missedHit = humanPlayer.board.board[humanRow][humanColumn] === "-";
      const hitOutcome = humanPlayer.board.receiveAttack(humanRow, humanColumn);
      if (missedHit && hitOutcome) {
        DOMBattleship.updateCell(
          "#human-board .board-cell",
          humanRow,
          humanColumn,
          humanPlayer
        );
        successFullTurn = false;
      }
    }
    if (humanPlayer.board.areAllShipsSunk()) {
      document.querySelector(".info").textContent = "Computer wins!";
    }
  };

  return { playHumanRound, playComputerRound };
})();

export { Control };
