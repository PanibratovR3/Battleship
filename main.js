/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n.header {\n    text-align: center;\n    font-weight: bold;\n    font-size: 5rem;\n    padding: 10vh 0;\n}\n\nbody {\n    background-color: darkcyan;\n}\n\n.main-container {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n}\n\n.player-header {\n    text-align: center;\n    font-weight: bold;\n    font-style: italic;\n    font-size: 3.5rem;\n}\n\n.board-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 50px;\n}\n\n.board-row {\n    display: flex;\n}\n\n.board-cell {\n    background-color: lightgray;\n    border: 2px solid black;\n    width: 4vw;\n    height: 4vw;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 2.5rem;\n}\n\n.s-5 {\n    background-color: mediumpurple;\n}\n\n.s-4 {\n    background-color: tan;\n}\n\n.s-3 {\n    background-color: mediumseagreen;\n}\n\n.s-2 {\n    background-color: tomato;\n}\n\n.s-1 {\n    background-color: khaki;\n}\n.control {\n    display: flex;\n    justify-content: center;\n    gap: 16px;\n}\n\n.label {\n    font-size: 2.5rem;\n    font-style: oblique;\n}\n\n.orientation-placement {\n    padding: 15px;\n    background-color: lightskyblue;\n    border-radius: 5px;\n    font-size: 1.3rem;\n}\n\n.error {\n    text-align: center;\n    color: darkred;\n    font-size: 1.9rem;\n    padding: 15px 0;\n}\n\n.info {\n    text-align: center;\n    color: #ff8731;\n    font-size: 1.9rem;\n    padding: 15px 0;\n}\n\n.options {\n    display: flex;\n    justify-content: center;\n    gap: 8px;\n    padding: 10px 0;\n}\n\n.random {\n    background-color: firebrick;\n    color: white;\n    padding: 20px 5px;\n    border-radius: 10px;\n    font-weight: bold;\n    font-size: 1.1rem;\n}\n\n.restart {\n    background-color: cyan;\n    padding: 20px 5px;\n    border-radius: 10px;\n    font-weight: bold;\n    font-size: 1.3rem;\n}\n\n.active:hover {\n    opacity: 0.3;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/control.js":
/*!************************!*\
  !*** ./src/control.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Control: () => (/* binding */ Control)\n/* harmony export */ });\n/* harmony import */ var _visualize_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visualize.js */ \"./src/visualize.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\n\nconst Control = (() => {\n  const playHumanRound = (event, computerPlayer) => {\n    const computerRow = Number(event.target.getAttribute(\"data-row\"));\n    const computerColumn = Number(event.target.getAttribute(\"data-column\"));\n    const isTargetCellEmpty =\n      computerPlayer.board.board[computerRow][computerColumn] === \"-\";\n    const hitOutcome = computerPlayer.board.receiveAttack(\n      computerRow,\n      computerColumn\n    );\n    _visualize_js__WEBPACK_IMPORTED_MODULE_0__.DOMBattleship.updateCell(\n      \"#computer-board .board-cell\",\n      computerRow,\n      computerColumn,\n      computerPlayer\n    );\n    if (computerPlayer.board.areAllShipsSunk()) {\n      document.querySelector(\".info\").textContent = \"You win!\";\n    }\n    return { isTargetCellEmpty, hitOutcome };\n  };\n\n  const playComputerRound = (humanPlayer) => {\n    let successFullTurn = false;\n    let hitShipFlag;\n    let humanRow, humanColumn;\n    let firstAttackSuccessFlag;\n    do {\n      humanRow = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.random)(0, humanPlayer.board.boardSize);\n      humanColumn = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.random)(0, humanPlayer.board.boardSize);\n      hitShipFlag =\n        humanPlayer.board.board[humanRow][humanColumn].split(\",\").length === 2;\n      firstAttackSuccessFlag = humanPlayer.board.receiveAttack(\n        humanRow,\n        humanColumn\n      );\n      if (firstAttackSuccessFlag && hitShipFlag) {\n        successFullTurn = true;\n      }\n      _visualize_js__WEBPACK_IMPORTED_MODULE_0__.DOMBattleship.updateCell(\n        \"#human-board .board-cell\",\n        humanRow,\n        humanColumn,\n        humanPlayer\n      );\n    } while (!firstAttackSuccessFlag);\n    while (successFullTurn) {\n      humanRow = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.random)(0, humanPlayer.board.boardSize);\n      humanColumn = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.random)(0, humanPlayer.board.boardSize);\n      const missedHit = humanPlayer.board.board[humanRow][humanColumn] === \"-\";\n      const hitOutcome = humanPlayer.board.receiveAttack(humanRow, humanColumn);\n      if (missedHit && hitOutcome) {\n        _visualize_js__WEBPACK_IMPORTED_MODULE_0__.DOMBattleship.updateCell(\n          \"#human-board .board-cell\",\n          humanRow,\n          humanColumn,\n          humanPlayer\n        );\n        successFullTurn = false;\n      }\n    }\n    if (humanPlayer.board.areAllShipsSunk()) {\n      document.querySelector(\".info\").textContent = \"Computer wins!\";\n    }\n  };\n\n  return { playHumanRound, playComputerRound };\n})();\n\n\n\n\n//# sourceURL=webpack://battleship/./src/control.js?");

/***/ }),

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameBoard: () => (/* binding */ GameBoard)\n/* harmony export */ });\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n\n\nclass GameBoard {\n  constructor() {\n    this.boardSize = 10;\n    this.board = [];\n    for (let i = 0; i < this.boardSize; i++) {\n      this.board.push([]);\n      for (let j = 0; j < this.boardSize; j++) {\n        this.board[i].push(\"-\");\n      }\n    }\n    this.ships = [\n      new _ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(5),\n      new _ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(4),\n      new _ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(4),\n      new _ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(3),\n      new _ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(3),\n      new _ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(2),\n      new _ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(2),\n      new _ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(1),\n      new _ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(1),\n    ];\n  }\n\n  placeShip(i, j, ship, direction) {\n    let length = ship.length;\n    const cellsToPlace = [];\n    if (direction === \"horizontal\") {\n      for (let jStep = j; jStep < j + length; jStep++) {\n        if (jStep >= 0 && jStep < this.boardSize) {\n          cellsToPlace.push(this.board[i][jStep]);\n        }\n      }\n      const areCellsAvailable =\n        cellsToPlace.every((item) => item === \"-\") &&\n        cellsToPlace.length === length;\n      if (areCellsAvailable) {\n        for (let jStep = j; jStep < j + length; jStep++) {\n          this.board[i][jStep] = `${ship.id},${length}`;\n        }\n        return true;\n      }\n      return false;\n    } else if (direction === \"vertical\") {\n      for (let iStep = i; iStep > i - length; iStep--) {\n        if (iStep >= 0 && iStep < this.boardSize) {\n          cellsToPlace.push(this.board[iStep][j]);\n        }\n      }\n      const areCellsAvailable =\n        cellsToPlace.every((item) => item === \"-\") &&\n        cellsToPlace.length === length;\n      if (areCellsAvailable) {\n        for (let iStep = i; iStep > i - length; iStep--) {\n          this.board[iStep][j] = `${ship.id},${length}`;\n        }\n        return true;\n      }\n      return false;\n    }\n  }\n\n  receiveAttack(i, j) {\n    let gameBoardCell = this.board[i][j];\n    if (gameBoardCell === \"-\") {\n      this.board[i][j] = \"miss\";\n      return true;\n    } else {\n      const shipInfo = gameBoardCell.split(\",\");\n      if (shipInfo.length === 2) {\n        const shipID = shipInfo[0];\n        const shipIndex = this.ships.findIndex((ship) => ship.id === shipID);\n        this.ships[shipIndex].hit();\n        this.ships = this.ships.filter((ship) => !ship.isSunk());\n        this.board[i][j] += \",hit\";\n        return true;\n      }\n      return false;\n    }\n  }\n\n  areAllShipsSunk() {\n    return this.ships.length === 0;\n  }\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/gameBoard.js?");

/***/ }),

/***/ "./src/handlers.js":
/*!*************************!*\
  !*** ./src/handlers.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleHumanEmptyBoardCell: () => (/* binding */ handleHumanEmptyBoardCell)\n/* harmony export */ });\n/* harmony import */ var _visualize_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visualize.js */ \"./src/visualize.js\");\n\n\nfunction handleHumanEmptyBoardCell(event, player, ships, direction) {\n  let i = Number(event.target.getAttribute(\"data-row\"));\n  let j = Number(event.target.getAttribute(\"data-column\"));\n  const ship = ships[ships.length - 1];\n  const placementStatus = player.board.placeShip(i, j, ship, direction);\n  if (placementStatus) {\n    document.querySelector(\".error\").textContent = \"\";\n    _visualize_js__WEBPACK_IMPORTED_MODULE_0__.DOMBattleship.drawBoard(\"#human-board\", player, ships);\n    ships.length = ships.length - 1;\n  } else {\n    document.querySelector(\".error\").textContent =\n      \"Error! Cannot place this ship here.\";\n  }\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/handlers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _visualize_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visualize.js */ \"./src/visualize.js\");\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n/* harmony import */ var _control_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./control.js */ \"./src/control.js\");\n\n\n\n\n\nlet humanPlayer = new _player_js__WEBPACK_IMPORTED_MODULE_1__.Player(true);\nlet computerPlayer = new _player_js__WEBPACK_IMPORTED_MODULE_1__.Player(false);\nlet humanShipsToPlace = humanPlayer.board.ships.slice();\nlet computerShipsToPlace = computerPlayer.board.ships.slice();\n\n_visualize_js__WEBPACK_IMPORTED_MODULE_0__.DOMBattleship.primaryDraw();\n_visualize_js__WEBPACK_IMPORTED_MODULE_0__.DOMBattleship.drawBoard(\"#human-board\", humanPlayer, humanShipsToPlace);\n_visualize_js__WEBPACK_IMPORTED_MODULE_0__.DOMBattleship.drawBoard(\"#computer-board\", computerPlayer);\n\nlet computerShipIndex = computerShipsToPlace.length - 1;\n\ndo {\n  const ship = computerShipsToPlace[computerShipIndex];\n  let i = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.random)(0, computerPlayer.board.boardSize);\n  let j = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.random)(0, computerPlayer.board.boardSize);\n  let orientation = _utils_js__WEBPACK_IMPORTED_MODULE_2__.orientations[(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.random)(0, _utils_js__WEBPACK_IMPORTED_MODULE_2__.orientations.length)];\n  const placementStatus = computerPlayer.board.placeShip(\n    i,\n    j,\n    ship,\n    orientation\n  );\n  if (placementStatus) {\n    computerShipIndex--;\n  }\n} while (computerShipIndex >= 0);\n\nconst randomButton = document.querySelector(\".random\");\nrandomButton.addEventListener(\"click\", (event) => {\n  if (humanShipsToPlace.length > 0) {\n    do {\n      const ship = humanShipsToPlace[humanShipsToPlace.length - 1];\n      let i = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.random)(0, humanPlayer.board.boardSize);\n      let j = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.random)(0, humanPlayer.board.boardSize);\n      let orientation = _utils_js__WEBPACK_IMPORTED_MODULE_2__.orientations[(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.random)(0, _utils_js__WEBPACK_IMPORTED_MODULE_2__.orientations.length)];\n      const placementStatus = humanPlayer.board.placeShip(\n        i,\n        j,\n        ship,\n        orientation\n      );\n      if (placementStatus) {\n        humanShipsToPlace.length = humanShipsToPlace.length - 1;\n      }\n    } while (humanShipsToPlace.length > 0);\n    _visualize_js__WEBPACK_IMPORTED_MODULE_0__.DOMBattleship.drawBoardRandom(\"#human-board\", humanPlayer.board.board);\n    document.querySelector(\".info\").textContent = \"Start game.\";\n  }\n});\n\nconst restartButton = document.querySelector(\".restart\");\nrestartButton.addEventListener(\"click\", () => {\n  humanPlayer = new _player_js__WEBPACK_IMPORTED_MODULE_1__.Player(true);\n  computerPlayer = new _player_js__WEBPACK_IMPORTED_MODULE_1__.Player(false);\n  humanShipsToPlace = humanPlayer.board.ships.slice();\n  computerShipsToPlace = computerPlayer.board.ships.slice();\n  _visualize_js__WEBPACK_IMPORTED_MODULE_0__.DOMBattleship.drawBoard(\"#human-board\", humanPlayer, humanShipsToPlace);\n  _visualize_js__WEBPACK_IMPORTED_MODULE_0__.DOMBattleship.drawBoard(\"#computer-board\", computerPlayer);\n  let computerShipIndex = computerShipsToPlace.length - 1;\n  do {\n    const ship = computerShipsToPlace[computerShipIndex];\n    let i = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.random)(0, computerPlayer.board.boardSize);\n    let j = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.random)(0, computerPlayer.board.boardSize);\n    let orientation = _utils_js__WEBPACK_IMPORTED_MODULE_2__.orientations[(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.random)(0, _utils_js__WEBPACK_IMPORTED_MODULE_2__.orientations.length)];\n    const placementStatus = computerPlayer.board.placeShip(\n      i,\n      j,\n      ship,\n      orientation\n    );\n    if (placementStatus) {\n      computerShipIndex--;\n    }\n  } while (computerShipIndex >= 0);\n  const computerCells = document.querySelectorAll(\n    \"#computer-board .board-cell\"\n  );\n\n  computerCells.forEach((cell) => {\n    cell.addEventListener(\"click\", (event) => {\n      if (\n        event.target.textContent == \"\" &&\n        humanShipsToPlace.length === 0 &&\n        !humanPlayer.board.areAllShipsSunk() &&\n        !computerPlayer.board.areAllShipsSunk()\n      ) {\n        document.querySelector(\".error\").textContent = \"\";\n        document.querySelector(\".info\").textContent = \"\";\n        const { isTargetCellEmpty } = _control_js__WEBPACK_IMPORTED_MODULE_3__.Control.playHumanRound(\n          event,\n          computerPlayer\n        );\n\n        if (isTargetCellEmpty) {\n          _control_js__WEBPACK_IMPORTED_MODULE_3__.Control.playComputerRound(humanPlayer);\n        }\n      } else if (humanShipsToPlace.length > 0) {\n        document.querySelector(\".error\").textContent =\n          \"You must place all your ships\";\n      } else if (event.target.textContent !== \"\") {\n        document.querySelector(\".error\").textContent =\n          \"This field was already attacked.\";\n      }\n    });\n  });\n});\n\nconst computerCells = document.querySelectorAll(\"#computer-board .board-cell\");\n\ncomputerCells.forEach((cell) => {\n  cell.addEventListener(\"click\", (event) => {\n    if (\n      event.target.textContent == \"\" &&\n      humanShipsToPlace.length === 0 &&\n      !humanPlayer.board.areAllShipsSunk() &&\n      !computerPlayer.board.areAllShipsSunk()\n    ) {\n      document.querySelector(\".error\").textContent = \"\";\n      document.querySelector(\".info\").textContent = \"\";\n      const { isTargetCellEmpty } = _control_js__WEBPACK_IMPORTED_MODULE_3__.Control.playHumanRound(\n        event,\n        computerPlayer\n      );\n\n      if (isTargetCellEmpty) {\n        _control_js__WEBPACK_IMPORTED_MODULE_3__.Control.playComputerRound(humanPlayer);\n      }\n    } else if (humanShipsToPlace.length > 0) {\n      document.querySelector(\".error\").textContent =\n        \"You must place all your ships\";\n    } else if (event.target.textContent !== \"\") {\n      document.querySelector(\".error\").textContent =\n        \"This field was already attacked.\";\n    }\n  });\n});\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Player: () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _gameBoard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard.js */ \"./src/gameBoard.js\");\n\n\nclass Player {\n  constructor(isHuman) {\n    this.isHuman = isHuman;\n    this.board = new _gameBoard_js__WEBPACK_IMPORTED_MODULE_0__.GameBoard();\n  }\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Ship: () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\n  constructor(length) {\n    this.id = crypto.randomUUID();\n    this.length = length;\n    this.hits = 0;\n    this.sunkFlag = false;\n  }\n\n  hit() {\n    this.hits++;\n  }\n\n  isSunk() {\n    if (this.hits === this.length) {\n      return (this.sunkFlag = true);\n    }\n    return this.sunkFlag;\n  }\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   orientations: () => (/* binding */ orientations),\n/* harmony export */   random: () => (/* binding */ random)\n/* harmony export */ });\nconst orientations = [\"horizontal\", \"vertical\"];\n\nfunction random(min, max) {\n  return Math.floor(Math.random() * (max - min)) + min;\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/utils.js?");

/***/ }),

/***/ "./src/visualize.js":
/*!**************************!*\
  !*** ./src/visualize.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DOMBattleship: () => (/* binding */ DOMBattleship)\n/* harmony export */ });\n/* harmony import */ var _handlers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers.js */ \"./src/handlers.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\nconst DOMBattleship = (() => {\n  let humanOrientation;\n  const primaryDraw = () => {\n    const header = document.createElement(\"div\");\n    header.className = \"header\";\n    header.textContent = \"Battleship\";\n    document.body.appendChild(header);\n\n    const errorField = document.createElement(\"div\");\n    errorField.className = \"error\";\n    document.body.appendChild(errorField);\n    const infoField = document.createElement(\"div\");\n    infoField.className = \"info\";\n    document.body.appendChild(infoField);\n    const optionsContainer = document.createElement(\"div\");\n    optionsContainer.className = \"options\";\n    const randomPlacementButton = document.createElement(\"button\");\n    randomPlacementButton.textContent = \"Place ships randomly\";\n    randomPlacementButton.className = \"random\";\n    optionsContainer.appendChild(randomPlacementButton);\n    const restartButton = document.createElement(\"button\");\n    restartButton.innerHTML = \"Restart &#8634;\";\n    restartButton.className = \"restart\";\n    optionsContainer.appendChild(restartButton);\n    document.body.appendChild(optionsContainer);\n    const control = document.createElement(\"div\");\n    control.className = \"control\";\n    const label = document.createElement(\"div\");\n    label.className = \"label\";\n    label.textContent = \"Orientation:\";\n    control.appendChild(label);\n    const orientationButton = document.createElement(\"button\");\n    orientationButton.className = \"orientation-placement\";\n    orientationButton.innerHTML = \"Horizontal &#8594;\";\n    humanOrientation = \"horizontal\";\n    orientationButton.addEventListener(\"click\", (event) => {\n      let currentOrientation = event.target.textContent\n        .split(\" \")[0]\n        .toLowerCase();\n      currentOrientation =\n        currentOrientation === \"horizontal\" ? \"vertical\" : \"horizontal\";\n      humanOrientation = currentOrientation;\n      const arrow = currentOrientation === \"vertical\" ? \"&#8593;\" : \"&#8594;\";\n      event.target.innerHTML = `${\n        currentOrientation.charAt(0).toUpperCase() + currentOrientation.slice(1)\n      } ${arrow}`;\n    });\n    control.appendChild(orientationButton);\n    document.body.appendChild(control);\n\n    const mainContainer = document.createElement(\"div\");\n    mainContainer.className = \"main-container\";\n    document.body.appendChild(mainContainer);\n\n    const humanContainer = document.createElement(\"div\");\n    humanContainer.className = \"human-container\";\n    mainContainer.appendChild(humanContainer);\n    const humanHeader = document.createElement(\"div\");\n    humanHeader.className = \"player-header\";\n    humanHeader.textContent = \"You\";\n    humanContainer.appendChild(humanHeader);\n    const humanBoardContainer = document.createElement(\"div\");\n    humanBoardContainer.className = \"board-container\";\n    humanContainer.appendChild(humanBoardContainer);\n    const humanBoard = document.createElement(\"div\");\n    humanBoard.className = \"board\";\n    humanBoard.id = \"human-board\";\n    humanBoardContainer.appendChild(humanBoard);\n\n    const computerContainer = document.createElement(\"div\");\n    computerContainer.className = \"computer-container\";\n    mainContainer.appendChild(computerContainer);\n    const computerHeader = document.createElement(\"div\");\n    computerHeader.className = \"player-header\";\n    computerHeader.textContent = \"Computer\";\n    computerContainer.appendChild(computerHeader);\n    const computerBoardContainer = document.createElement(\"div\");\n    computerBoardContainer.className = \"board-container\";\n    computerContainer.appendChild(computerBoardContainer);\n    const computerBoard = document.createElement(\"div\");\n    computerBoard.className = \"board\";\n    computerBoard.id = \"computer-board\";\n    computerBoardContainer.appendChild(computerBoard);\n  };\n\n  const drawBoard = (boardID, player, ships = null) => {\n    const board = document.querySelector(boardID);\n    const isHuman = player.isHuman;\n    const playerBoard = player.board.board;\n    if (board.hasChildNodes()) {\n      while (board.firstChild) {\n        const element = board.firstChild;\n        board.removeChild(element);\n      }\n    }\n    for (let i = 0; i < playerBoard.length; i++) {\n      const boardRow = document.createElement(\"div\");\n      boardRow.className = \"board-row\";\n      for (let j = 0; j < playerBoard[i].length; j++) {\n        const boardCell = document.createElement(\"div\");\n        boardCell.className = \"board-cell\";\n        boardCell.setAttribute(\"data-row\", i);\n        boardCell.setAttribute(\"data-column\", j);\n        if (playerBoard[i][j] !== \"-\") {\n          const cellData = playerBoard[i][j].split(\",\");\n          boardCell.classList.add(`s-${cellData[1]}`);\n        } else {\n          if (isHuman) {\n            if (ships && ships.length > 1) {\n              document.querySelector(\".info\").textContent = `Placing the Ship-${\n                ships[ships.length - 2].length\n              }.`;\n              boardCell.classList.add(\"active\");\n              boardCell.addEventListener(\"click\", (event) => {\n                (0,_handlers_js__WEBPACK_IMPORTED_MODULE_0__.handleHumanEmptyBoardCell)(\n                  event,\n                  player,\n                  ships,\n                  humanOrientation\n                );\n              });\n            } else {\n              document.querySelector(\".info\").textContent = \"Start!\";\n              boardCell.classList.remove(\"active\");\n              boardCell.removeEventListener(\"click\", (event) =>\n                (0,_handlers_js__WEBPACK_IMPORTED_MODULE_0__.handleHumanEmptyBoardCell)(\n                  event,\n                  player,\n                  ships,\n                  humanOrientation\n                )\n              );\n            }\n          }\n        }\n        boardRow.appendChild(boardCell);\n      }\n      board.appendChild(boardRow);\n    }\n  };\n\n  const updateCell = (boardSelector, row, column, player) => {\n    const cell = document.querySelector(\n      `${boardSelector}[data-row='${row}'][data-column='${column}']`\n    );\n    const cellData = player.board.board[row][column];\n    if (cellData === \"miss\") {\n      cell.innerHTML = \"&#8226;\";\n    } else {\n      cell.textContent = \"X\";\n      if (!player.isHuman) {\n        const cellDataArray = cellData.split(\",\");\n        cell.classList.add(`s-${cellDataArray[1]}`);\n      }\n    }\n  };\n\n  const drawBoardRandom = (boardID, board) => {\n    const boardField = document.querySelector(boardID);\n    if (boardField.hasChildNodes()) {\n      while (boardField.firstChild) {\n        const element = boardField.firstChild;\n        boardField.removeChild(element);\n      }\n    }\n    for (let i = 0; i < board.length; i++) {\n      const boardRow = document.createElement(\"div\");\n      boardRow.className = \"board-row\";\n      for (let j = 0; j < board.length; j++) {\n        const boardCell = document.createElement(\"div\");\n        boardCell.className = \"board-cell\";\n        boardCell.setAttribute(\"data-row\", i);\n        boardCell.setAttribute(\"data-column\", j);\n        if (board[i][j] !== \"-\") {\n          const cellData = board[i][j].split(\",\");\n          boardCell.classList.add(`s-${cellData[1]}`);\n        }\n        boardRow.appendChild(boardCell);\n      }\n      boardField.appendChild(boardRow);\n    }\n  };\n  return { primaryDraw, drawBoard, updateCell, drawBoardRandom };\n})();\n\n\n\n\n//# sourceURL=webpack://battleship/./src/visualize.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;