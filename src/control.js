import { DOMBattleship } from "./visualize.js";

const Control = (() => {
  const playHumanRound = (event, computerPlayer) => {
    const computerRow = Number(event.target.getAttribute("data-row"));
    const computerColumn = Number(event.target.getAttribute("data-column"));
    console.log("Row: ", computerRow);
    console.log("Column: ", computerColumn);
    console.log(computerPlayer.board.board);
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
    return { isTargetCellEmpty, hitOutcome };
  };

  return { playHumanRound };
})();

export { Control };
