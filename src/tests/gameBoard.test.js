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

test("Able to hit the empty cell.", () => {
  const board = new GameBoard();
  expect(board.receiveAttack(0, 0)).toBe(true);
});

test("Unable to hit non-empty cell (not ship).", () => {
  const board = new GameBoard();
  let flag;
  flag = board.receiveAttack(0, 0);
  expect(board.receiveAttack(0, 0)).toBe(false);
});

test("Able to hit ship cell.", () => {
  const board = new GameBoard();
  let flag = board.placeShip(0, 0, board.ships[0], "horizontal");
  expect(board.receiveAttack(0, 0)).toBe(true);
});

test("Unable to hit damaged-ship cell.", () => {
  const board = new GameBoard();
  let flag = board.placeShip(0, 0, board.ships[0], "horizontal");
  flag = board.receiveAttack(0, 0);
  expect(board.receiveAttack(0, 0)).toBe(false);
});

test("Sink ship.", () => {
  const board = new GameBoard();
  let flag = board.placeShip(0, 0, board.ships[0], "horizontal");
  flag = board.receiveAttack(0, 0);
  flag = board.receiveAttack(0, 1);
  flag = board.receiveAttack(0, 2);
  flag = board.receiveAttack(0, 3);
  flag = board.receiveAttack(0, 4);
  expect(board.ships.length).toBe(4);
});
