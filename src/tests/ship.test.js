import { Ship } from "../ship.js";

test("Case with increasing number of hits.", () => {
  const ship = new Ship(1);
  ship.hit();
  expect(ship.hits).toBe(1);
});

test("Case with sunk ship.", () => {
  const ship = new Ship(1);
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});
