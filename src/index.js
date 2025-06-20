import { DOMBattleship } from "./visualize.js";
import { Player } from "./player.js";

const humanPlayer = new Player(true);
const computerPlayer = new Player(false);

DOMBattleship.primaryDraw();
DOMBattleship.drawBoard("#human-board", humanPlayer);
DOMBattleship.drawBoard("#computer-board", computerPlayer);
