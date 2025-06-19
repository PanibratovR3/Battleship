import { GameBoard } from "./gameBoard.js";

class Player {
  constructor(isHuman) {
    this.isHuman = isHuman;
    this.board = new GameBoard();
  }
}

export { Player };
