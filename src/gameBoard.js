import { Ship } from "./ship.js";

class GameBoard {
  constructor() {
    this.boardSize = 10;
    this.board = [];
    for (let i = 0; i < this.boardSize; i++) {
      this.board.push([]);
      for (let j = 0; j < this.boardSize; j++) {
        this.board[i].push("-");
      }
    }
    this.ships = [
      new Ship(5),
      new Ship(4),
      new Ship(4),
      new Ship(3),
      new Ship(3),
    ];
  }
  placeShip(i, j, ship, direction) {
    let length = ship.length;
    const cellsToPlace = [];
    if (direction === "horizontal") {
      for (let jStep = j; jStep < j + length; jStep++) {
        if (jStep >= 0 && jStep < this.boardSize) {
          cellsToPlace.push(this.board[i][jStep]);
        }
      }
      const areCellsAvailable =
        cellsToPlace.every((item) => item === "-") &&
        cellsToPlace.length === length;
      if (areCellsAvailable) {
        for (let jStep = j; jStep < j + length; jStep++) {
          this.board[i][jStep] = `${ship.id},${length}`;
        }
        return true;
      }
      return false;
    } else if (direction === "vertical") {
      for (let iStep = i; iStep > i - length; iStep--) {
        if (iStep >= 0 && iStep < this.boardSize) {
          cellsToPlace.push(this.board[iStep][j]);
        }
      }
      const areCellsAvailable =
        cellsToPlace.every((item) => item === "-") &&
        cellsToPlace.length === length;
      if (areCellsAvailable) {
        for (let iStep = i; iStep > i - length; iStep--) {
          this.board[iStep][j] = `${ship.id},${length}`;
        }
        return true;
      }
      return false;
    }
  }

  receiveAttack(i, j) {
    let gameBoardCell = this.board[i][j];
    if (gameBoardCell === "-") {
      this.board[i][j] = "miss";
      return true;
    } else {
      const shipInfo = gameBoardCell.split(",");
      if (shipInfo.length === 2) {
        const shipID = shipInfo[0];
        const shipIndex = this.ships.findIndex((ship) => ship.id === shipID);
        this.ships[shipIndex].hit();
        const isShipSunken = this.ships[shipIndex].isSunk();
        if (isShipSunken) {
          this.ships.splice(shipIndex, 1);
        }
        this.board[i][j] += ",hit";
        return true;
      }
      return false;
    }
  }
}

export { GameBoard };
