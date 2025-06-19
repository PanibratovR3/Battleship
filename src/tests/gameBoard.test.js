import { GameBoard } from "../gameBoard.js";

test("Placing the horizontal ship correctly.", () => {
  const board = new GameBoard();
  expect(board.placeShip(9, 0, board.ships[0], "horizontal")).toBe(true);
});

test("Placing the horizontal ship incorrectly.", () => {
  const board = new GameBoard();
  expect(board.placeShip(9, 8, board.ships[0], "horizontal")).toBe(false);
});

test("Placing the vertical ship correctly.", () => {
  const board = new GameBoard();
  expect(board.placeShip(6, 9, board.ships[0], "vertical")).toBe(true);
});

test("Placing the vertical ship incorrectly.", () => {
  const board = new GameBoard();
  expect(board.placeShip(3, 9, board.ships[0], "vertical")).toBe(false);
});
