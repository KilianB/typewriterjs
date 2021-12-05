/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define("Typewriter", ["react"], factory);
	else if(typeof exports === 'object')
		exports["Typewriter"] = factory(require("react"));
	else
		root["Typewriter"] = factory(root["react"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/core/Typewriter.js":
/*!********************************!*\
  !*** ./src/core/Typewriter.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var raf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raf */ \"./node_modules/raf/index.js\");\n/* harmony import */ var raf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(raf__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils */ \"./src/utils/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ \"./src/core/constants.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nvar Typewriter = /*#__PURE__*/function () {\n  function Typewriter(container, options) {\n    var _this = this;\n\n    _classCallCheck(this, Typewriter);\n\n    _defineProperty(this, \"state\", {\n      cursorAnimation: null,\n      lastFrameTime: null,\n      pauseUntil: null,\n      eventQueue: [],\n      eventLoop: null,\n      eventLoopPaused: false,\n      reverseCalledEvents: [],\n      calledEvents: [],\n      visibleNodes: [],\n      initialOptions: null,\n      elements: {\n        container: null,\n        wrapper: document.createElement('span'),\n        cursor: document.createElement('span')\n      },\n      lastCharacterTyped: null\n    });\n\n    _defineProperty(this, \"options\", {\n      strings: null,\n      cursor: '|',\n      delay: 'natural',\n      pauseFor: 1500,\n      deleteSpeed: 'natural',\n      loop: false,\n      autoStart: false,\n      devMode: false,\n      skipAddStyles: false,\n      wrapperClassName: 'Typewriter__wrapper',\n      cursorClassName: 'Typewriter__cursor',\n      stringSplitter: null,\n      onCreateTextNode: null,\n      onRemoveNode: null\n    });\n\n    _defineProperty(this, \"setupWrapperElement\", function () {\n      if (!_this.state.elements.container) {\n        return;\n      }\n\n      _this.state.elements.wrapper.className = _this.options.wrapperClassName;\n      _this.state.elements.cursor.className = _this.options.cursorClassName;\n      _this.state.elements.cursor.innerHTML = _this.options.cursor;\n      _this.state.elements.container.innerHTML = '';\n\n      _this.state.elements.container.appendChild(_this.state.elements.wrapper);\n\n      _this.state.elements.wrapper.appendChild(_this.state.elements.cursor);\n\n      _this.state.visibleNodes.push(_this.state.elements.cursor);\n    });\n\n    _defineProperty(this, \"start\", function () {\n      _this.state.eventLoopPaused = false;\n\n      _this.runEventLoop();\n\n      return _this;\n    });\n\n    _defineProperty(this, \"pause\", function () {\n      _this.state.eventLoopPaused = true;\n      return _this;\n    });\n\n    _defineProperty(this, \"stop\", function () {\n      if (_this.state.eventLoop) {\n        (0,raf__WEBPACK_IMPORTED_MODULE_0__.cancel)(_this.state.eventLoop);\n        _this.state.eventLoop = null;\n      }\n\n      return _this;\n    });\n\n    _defineProperty(this, \"pauseFor\", function (ms) {\n      _this.addEventToQueue(_constants__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAMES.PAUSE_FOR, {\n        ms: ms\n      });\n\n      return _this;\n    });\n\n    _defineProperty(this, \"typeOutAllStrings\", function () {\n      if (typeof _this.options.strings === 'string') {\n        _this.typeString(_this.options.strings).pauseFor(_this.options.pauseFor);\n\n        return _this;\n      }\n\n      _this.options.strings.forEach(function (string) {\n        _this.typeString(string).pauseFor(_this.options.pauseFor).deleteAll(_this.options.deleteSpeed);\n      });\n\n      return _this;\n    });\n\n    _defineProperty(this, \"typeString\", function (string) {\n      var node = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n\n      if ((0,_utils__WEBPACK_IMPORTED_MODULE_1__.doesStringContainHTMLTag)(string)) {\n        return _this.typeOutHTMLString(string, node);\n      }\n\n      if (string) {\n        var _ref = _this.options || {},\n            stringSplitter = _ref.stringSplitter;\n\n        var characters = typeof stringSplitter === 'function' ? stringSplitter(string) : string.split('');\n\n        _this.typeCharacters(characters, node);\n      }\n\n      return _this;\n    });\n\n    _defineProperty(this, \"pasteString\", function (string) {\n      var node = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n\n      if (string) {\n        _this.addEventToQueue(_constants__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAMES.PASTE_STRING, {\n          character: string,\n          node: node\n        });\n      }\n\n      return _this;\n    });\n\n    _defineProperty(this, \"typeOutHTMLString\", function (string) {\n      var parentNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n      var childNodes = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getDOMElementFromString)(string);\n\n      if (childNodes.length > 0) {\n        for (var i = 0; i < childNodes.length; i++) {\n          var node = childNodes[i];\n          var nodeHTML = node.innerHTML;\n\n          if (node && node.nodeType !== 3) {\n            // Reset innerText of HTML element\n            node.innerHTML = ''; // Add event queue item to insert HTML tag before typing characters\n\n            _this.addEventToQueue(_constants__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAMES.ADD_HTML_TAG_ELEMENT, {\n              node: node,\n              parentNode: parentNode\n            });\n\n            _this.typeString(nodeHTML, node);\n          } else {\n            if (node.textContent) {\n              _this.typeString(node.textContent, parentNode);\n            }\n          }\n        }\n      }\n\n      return _this;\n    });\n\n    _defineProperty(this, \"htmlPasteToNodes\", function (string) {\n      var parentNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n      var childNodes = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getDOMElementFromString)(string);\n      var nodesToAdd = [];\n\n      if (childNodes.length > 0) {\n        for (var i = 0; i < childNodes.length; i++) {\n          var node = childNodes[i];\n          var nodeHTML = node.innerHTML;\n\n          if (node && node.nodeType !== 3) {\n            // Reset innerText of HTML element\n            node.innerHTML = ''; // Add event queue item to insert HTML tag before typing characters\n\n            nodesToAdd.push({\n              type: _constants__WEBPACK_IMPORTED_MODULE_2__.VISIBLE_NODE_TYPES.HTML_TAG,\n              node: node,\n              parentNode: parentNode\n            });\n            nodesToAdd.push.apply(nodesToAdd, _toConsumableArray(_this.htmlPasteToNodes(nodeHTML, node)));\n          } else {\n            if (node.textContent) {\n              //pasteEffect ? this.pasteString(node.textContent, parentNode) :  this.typeString(node.textContent, parentNode);\n              //Simply text content\n              nodesToAdd.push.apply(nodesToAdd, _toConsumableArray(node.textContent.split(\"\").map(function (val) {\n                return {\n                  type: _constants__WEBPACK_IMPORTED_MODULE_2__.VISIBLE_NODE_TYPES.TEXT_NODE,\n                  node: val,\n                  parentNode: parentNode\n                };\n              })));\n            }\n          }\n        }\n      }\n\n      return nodesToAdd;\n    });\n\n    _defineProperty(this, \"clear\", function () {\n      var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n      var callOnRemove = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n\n      _this.addEventToQueue(_constants__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAMES.CLEAR, {\n        amount: amount,\n        callOnRemove: callOnRemove\n      });\n\n      return _this;\n    });\n\n    _defineProperty(this, \"deleteAll\", function () {\n      var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'natural';\n\n      _this.addEventToQueue(_constants__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAMES.REMOVE_ALL, {\n        speed: speed\n      });\n\n      return _this;\n    });\n\n    _defineProperty(this, \"changeDeleteSpeed\", function (speed) {\n      if (!speed) {\n        throw new Error('Must provide new delete speed');\n      }\n\n      _this.addEventToQueue(_constants__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAMES.CHANGE_DELETE_SPEED, {\n        speed: speed\n      });\n\n      return _this;\n    });\n\n    _defineProperty(this, \"changeDelay\", function (delay) {\n      if (!delay) {\n        throw new Error('Must provide new delay');\n      }\n\n      _this.addEventToQueue(_constants__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAMES.CHANGE_DELAY, {\n        delay: delay\n      });\n\n      return _this;\n    });\n\n    _defineProperty(this, \"changeCursor\", function (cursor) {\n      if (!cursor) {\n        throw new Error('Must provide new cursor');\n      }\n\n      _this.addEventToQueue(_constants__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAMES.CHANGE_CURSOR, {\n        cursor: cursor\n      });\n\n      return _this;\n    });\n\n    _defineProperty(this, \"deleteChars\", function (amount) {\n      if (!amount) {\n        throw new Error('Must provide amount of characters to delete');\n      }\n\n      for (var i = 0; i < amount; i++) {\n        _this.addEventToQueue(_constants__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAMES.REMOVE_CHARACTER);\n      }\n\n      return _this;\n    });\n\n    _defineProperty(this, \"callFunction\", function (cb, thisArg) {\n      if (!cb || typeof cb !== 'function') {\n        throw new Error('Callback must be a function');\n      }\n\n      _this.addEventToQueue(_constants__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAMES.CALL_FUNCTION, {\n        cb: cb,\n        thisArg: thisArg\n      });\n\n      return _this;\n    });\n\n    _defineProperty(this, \"typeCharacters\", function (characters) {\n      var node = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n\n      if (!characters || !Array.isArray(characters)) {\n        throw new Error('Characters must be an array');\n      }\n\n      characters.forEach(function (character) {\n        _this.addEventToQueue(_constants__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAMES.TYPE_CHARACTER, {\n          character: character,\n          node: node\n        });\n      });\n      return _this;\n    });\n\n    _defineProperty(this, \"changeCursorPosition\", function (position) {\n      var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n\n      _this.addEventToQueue(_constants__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAMES.CHANGE_CURSOR_POSITION, {\n        position: position,\n        delay: delay\n      });\n\n      return _this;\n    });\n\n    _defineProperty(this, \"removeCharacters\", function (characters) {\n      if (!characters || !Array.isArray(characters)) {\n        throw new Error('Characters must be an array');\n      }\n\n      characters.forEach(function () {\n        _this.addEventToQueue(_constants__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAMES.REMOVE_CHARACTER);\n      });\n      return _this;\n    });\n\n    _defineProperty(this, \"addEventToQueue\", function (eventName, eventArgs) {\n      var prepend = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n      return _this.addEventToStateProperty(eventName, eventArgs, prepend, 'eventQueue');\n    });\n\n    _defineProperty(this, \"addReverseCalledEvent\", function (eventName, eventArgs) {\n      var prepend = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n      var loop = _this.options.loop;\n\n      if (!loop) {\n        return _this;\n      }\n\n      return _this.addEventToStateProperty(eventName, eventArgs, prepend, 'reverseCalledEvents');\n    });\n\n    _defineProperty(this, \"addEventToStateProperty\", function (eventName, eventArgs) {\n      var prepend = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n      var property = arguments.length > 3 ? arguments[3] : undefined;\n      var eventItem = {\n        eventName: eventName,\n        eventArgs: eventArgs || {}\n      };\n\n      if (prepend) {\n        _this.state[property] = [eventItem].concat(_toConsumableArray(_this.state[property]));\n      } else {\n        _this.state[property] = [].concat(_toConsumableArray(_this.state[property]), [eventItem]);\n      }\n\n      return _this;\n    });\n\n    _defineProperty(this, \"runEventLoop\", function () {\n      if (!_this.state.lastFrameTime) {\n        _this.state.lastFrameTime = Date.now();\n      } // Setup variables to calculate if this frame should run\n\n\n      var nowTime = Date.now();\n      var delta = nowTime - _this.state.lastFrameTime;\n\n      if (!_this.state.eventQueue.length) {\n        if (!_this.options.loop) {\n          return;\n        } // Reset event queue if we are looping\n\n\n        _this.state.eventQueue = _toConsumableArray(_this.state.calledEvents);\n        _this.state.calledEvents = [];\n        _this.options = _objectSpread({}, _this.state.initialOptions);\n      } // Request next frame\n\n\n      _this.state.eventLoop = raf__WEBPACK_IMPORTED_MODULE_0___default()(_this.runEventLoop); // Check if event loop is paused\n\n      if (_this.state.eventLoopPaused) {\n        return;\n      } // Check if state has pause until time\n\n\n      if (_this.state.pauseUntil) {\n        // Check if event loop should be paused\n        if (nowTime < _this.state.pauseUntil) {\n          return;\n        } // Reset pause time\n\n\n        _this.state.pauseUntil = null;\n      } // Make a clone of event queue\n\n\n      var eventQueue = _toConsumableArray(_this.state.eventQueue); // Get first event from queue\n\n\n      var currentEvent = eventQueue.shift(); // Setup delay variable\n\n      var delay = 0; // Check if frame should run or be\n      // skipped based on fps interval\n\n      if (currentEvent.eventName === _constants__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAMES.REMOVE_LAST_VISIBLE_NODE || currentEvent.eventName === _constants__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAMES.REMOVE_CHARACTER) {\n        delay = _this.options.deleteSpeed === 'natural' ? (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getRandomInteger)(40, 80) : _this.options.deleteSpeed;\n      } else if (currentEvent.eventName === _constants__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAMES.TYPE_CHARACTER) {\n        // const leftPinkySpeed = 120;\n        // const leftRingSpeed = 230;\n        // const leftMiddleSpeed = 160;\n        // const leftIndexSpeed = 200;\n        // const rightIndexSpeed = 135;\n        // const rightMiddleSpeed = 130;\n        // const rightRingSpeed = 190;\n        // const thumb = 100;\n        // //Only valid for german local, special characters might be shifted\n        // const obs = [];\n        // obs.push({\n        //   lookupSet: new Set([\"1\",\"q\",\"a\",\"z\",\"^\",\"@\"]),\n        //   speed: leftPinkySpeed\n        // },{\n        //   lookupSet: new Set([\"2\",\"w\",\"s\",\"x\"]),\n        //   speed: leftRingSpeed\n        // },{\n        //   lookupSet: new Set([\"3\",\"e\",\"d\",\"c\",\"r\"]),\n        //   speed: leftMiddleSpeed\n        // },{\n        //   lookupSet: new Set([\"4\",\"5\",\"t\",\"f\",\"g\",\"v\",\"b\",]),\n        //   speed: leftIndexSpeed\n        // },{\n        //   lookupSet: new Set([\" \"]),\n        //   speed: thumb\n        // },{\n        //   lookupSet: new Set([\"6\",\"7\",\"u\",\"j\",\"h\",\"n\",\"m\",\"z\"]),\n        //   speed: rightIndexSpeed\n        // },{\n        //   lookupSet: new Set([\"8\",\"i\",\"k\",\",\"]),\n        //   speed: thumb\n        // },{\n        //   lookupSet: new Set([\" \"]),\n        //   speed: thumb\n        // },{\n        //   lookupSet: new Set([\" \"]),\n        //   speed: thumb\n        // },{\n        //   lookupSet: new Set([\" \"]),\n        //   speed: thumb\n        // },\n        // {\n        //   lookupSet: new Set([\"@\",\"€\"]),\n        //   speed: leftPinkySpeed\n        // }\n        // )\n        // const resolveTypeSpeed= (character) =>{\n        //   if(true){\n        //   }\n        //   else{\n        //     //Special characters usually require an additional press with shift. This takes a bit longer\n        //   }\n        // }\n        if (_this.options.delay === 'natural') {\n          //White spaces usually have a slightly higher delay\n          if (currentEvent.eventArgs.character === \" \") {\n            delay = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getRandomInteger)(180, 190);\n          } else if (_this.state.lastCharacterTyped == currentEvent.eventArgs.character) {\n            delay = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getRandomInteger)(90, 100);\n          } else {\n            delay = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getRandomInteger)(120, 170);\n          }\n        } else {\n          delay = _this.options.delay;\n        }\n      }\n\n      if (delta <= delay) {\n        return;\n      } // Get current event args\n\n\n      var eventName = currentEvent.eventName,\n          eventArgs = currentEvent.eventArgs;\n\n      _this.logInDevMode({\n        currentEvent: currentEvent,\n        state: _this.state,\n        delay: delay\n      }); // Run item from event loop\n\n\n      switch (eventName) {\n        case _constants__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAMES.PASTE_STRING:\n          var character = eventArgs.character,\n              node = eventArgs.node;\n\n          var nodesToAdd = _this.htmlPasteToNodes(character);\n\n          var nodesAdded = []; //Get the last known element before the cursor.\n\n          nodesToAdd.forEach(function (node) {\n            var nodeToAdd = node.type === _constants__WEBPACK_IMPORTED_MODULE_2__.VISIBLE_NODE_TYPES.TEXT_NODE ? document.createTextNode(node.node) : node.node; //If a parent is specified means that is belongs to an html tag\n\n            if (node.parentNode) {\n              node.parentNode.appendChild(nodeToAdd);\n            } else {\n              //Add it to the html wrapper element instead... //But at the correct position\n              _this.state.elements.wrapper.insertBefore(nodeToAdd, _this.state.elements.cursor);\n            }\n\n            nodesAdded.push({\n              type: node.type,\n              node: nodeToAdd,\n              parentNode: node.parentNode ? node.parentNode : _this.state.elements.wrapper\n            });\n          });\n\n          var splitIndex = _this.state.visibleNodes.indexOf(_this.state.elements.cursor); //This should always be the case since the cursor would be the last element anyways\n\n\n          var numOfElements = _this.state.visibleNodes.length;\n\n          if (splitIndex > 0) {\n            _this.state.visibleNodes = [].concat(_toConsumableArray(_this.state.visibleNodes.slice(0, splitIndex)), nodesAdded, _toConsumableArray(_this.state.visibleNodes.slice(splitIndex, numOfElements)));\n          } else if (splitIndex == 0) {\n            _this.state.visibleNodes = [].concat(nodesAdded, _toConsumableArray(_this.state.visibleNodes));\n          }\n\n          break;\n\n        case _constants__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAMES.TYPE_CHARACTER:\n          {\n            var _character = eventArgs.character,\n                _node = eventArgs.node;\n            var textNode = document.createTextNode(_character);\n            var textNodeToUse = textNode;\n\n            if (_this.options.onCreateTextNode && typeof _this.options.onCreateTextNode === 'function') {\n              textNodeToUse = _this.options.onCreateTextNode(_character, textNode);\n            }\n\n            if (textNodeToUse) {\n              if (_node) {\n                _node.appendChild(textNodeToUse);\n              } else {\n                _this.state.elements.wrapper.insertBefore(textNodeToUse, _this.state.elements.cursor);\n              }\n            } //O(n).... we should count it ourselves instead.\n\n\n            var _splitIndex = _this.state.visibleNodes.indexOf(_this.state.elements.cursor);\n\n            _this.state.visibleNodes.splice(_splitIndex, 0, {\n              type: _constants__WEBPACK_IMPORTED_MODULE_2__.VISIBLE_NODE_TYPES.TEXT_NODE,\n              character: _character,\n              node: textNodeToUse,\n              parentNode: _node || _this.state.elements.wrapper\n            });\n\n            _this.state.lastCharacterTyped = _character;\n            break;\n          }\n\n        case _constants__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAMES.REMOVE_CHARACTER:\n          {\n            eventQueue.unshift({\n              eventName: _constants__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAMES.REMOVE_LAST_VISIBLE_NODE,\n              eventArgs: {\n                removingCharacterNode: true\n              }\n            });\n            break;\n          }\n\n        case _constants__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAMES.PAUSE_FOR:\n          {\n            var ms = currentEvent.eventArgs.ms;\n            _this.state.pauseUntil = Date.now() + parseInt(ms);\n            break;\n          }\n\n        case _constants__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAMES.CALL_FUNCTION:\n          {\n            var _currentEvent$eventAr = currentEvent.eventArgs,\n                cb = _currentEvent$eventAr.cb,\n                thisArg = _currentEvent$eventAr.thisArg;\n            cb.call(thisArg, {\n              elements: _this.state.elements\n            });\n            break;\n          }\n\n        case _constants__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAMES.ADD_HTML_TAG_ELEMENT:\n          {\n            var _currentEvent$eventAr2 = currentEvent.eventArgs,\n                _node2 = _currentEvent$eventAr2.node,\n                parentNode = _currentEvent$eventAr2.parentNode;\n\n            if (!parentNode) {\n              _this.state.elements.wrapper.insertBefore(_node2, _this.state.elements.cursor);\n            } else {\n              parentNode.appendChild(_node2);\n            }\n\n            var cursorPos = _this.state.visibleNodes.indexOf(_this.state.elements.cursor);\n\n            _this.state.visibleNodes.splice(cursorPos, 0, {\n              type: _constants__WEBPACK_IMPORTED_MODULE_2__.VISIBLE_NODE_TYPES.HTML_TAG,\n              node: _node2,\n              parentNode: parentNode || _this.state.elements.wrapper\n            }); //We need to add it here correctly as well\n            // this.state.visibleNodes = [\n            //   ...this.state.visibleNodes,\n            //   {\n            //     type: VISIBLE_NODE_TYPES.HTML_TAG,\n            //     node,\n            //     parentNode: parentNode || this.state.elements.wrapper,\n            //   },\n            // ];\n\n\n            break;\n          }\n\n        case _constants__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAMES.REMOVE_ALL:\n          {\n            var visibleNodes = _this.state.visibleNodes;\n            var speed = eventArgs.speed;\n            var removeAllEventItems = []; // Change speed before deleting\n\n            if (typeof speed === \"number\") {\n              if (speed <= 0) {\n                _this.logInDevMode(\"If you intend to delete the entire text without noticeable delay take a look at the clear() function\");\n              }\n\n              removeAllEventItems.push({\n                eventName: _constants__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAMES.CHANGE_DELETE_SPEED,\n                eventArgs: {\n                  speed: speed,\n                  temp: true\n                }\n              });\n            }\n\n            for (var i = 0, length = visibleNodes.length; i < length; i++) {\n              removeAllEventItems.push({\n                eventName: _constants__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAMES.REMOVE_LAST_VISIBLE_NODE,\n                eventArgs: {\n                  removingCharacterNode: false\n                }\n              });\n            } // Change speed back to normal after deleting\n\n\n            if (typeof speed === \"number\") {\n              removeAllEventItems.push({\n                eventName: _constants__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAMES.CHANGE_DELETE_SPEED,\n                eventArgs: {\n                  speed: _this.options.deleteSpeed,\n                  temp: true\n                }\n              });\n            }\n\n            eventQueue.unshift.apply(eventQueue, removeAllEventItems);\n            break;\n          }\n\n        case _constants__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAMES.REMOVE_LAST_VISIBLE_NODE:\n          {\n            var removingCharacterNode = currentEvent.eventArgs.removingCharacterNode;\n\n            if (_this.state.visibleNodes.length) {\n              //Actually do not remove the last added node but the node just before the cursor\n              var curIndex = _this.state.visibleNodes.indexOf(_this.state.elements.cursor) - 1; //Cursor at beginning of the row. There is nothing to delete\n\n              if (curIndex < 0) {\n                break;\n              }\n\n              var _this$state$visibleNo = _this.state.visibleNodes.splice(curIndex, 1)[0],\n                  type = _this$state$visibleNo.type,\n                  _node3 = _this$state$visibleNo.node,\n                  _character2 = _this$state$visibleNo.character,\n                  _parentNode = _this$state$visibleNo.parentNode; //this.state.visibleNodes.pop();\n\n\n              if (_this.options.onRemoveNode && typeof _this.options.onRemoveNode === 'function') {\n                _this.options.onRemoveNode({\n                  node: _node3,\n                  character: _character2\n                });\n              }\n\n              if (_node3) {\n                _node3.parentNode.removeChild(_node3);\n              } //This is a text node which belongs to an HTML node\n\n\n              if (_parentNode && _parentNode != _this.state.elements.wrapper && _parentNode.childNodes.length == 0) {\n                eventQueue.unshift({\n                  eventName: _constants__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAMES.REMOVE_LAST_VISIBLE_NODE,\n                  eventArgs: {}\n                });\n              }\n            }\n\n            break;\n          }\n\n        case _constants__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAMES.CLEAR:\n          {\n            //Clear all nodes without delay.\n            //Instead of creating a new event for each operation we perform it immediately as the event loop has it's own delay.\n            var _visibleNodes = _this.state.visibleNodes;\n\n            var copiedNodes = _toConsumableArray(_visibleNodes); //How many elements do we want to delete?\n\n\n            var amount = eventArgs.amount,\n                callOnRemove = eventArgs.callOnRemove;\n            console.log(_toConsumableArray(_visibleNodes));\n\n            if (copiedNodes.length > 0) {\n              //Check cursor offset first. (these are the max number of elements we could possibly delete)\n              var cursorOffset = _this.state.visibleNodes.indexOf(_this.state.elements.cursor); //Those will always be kept because they are behind the cursor\n\n\n              var tailNodes = copiedNodes.splice(cursorOffset, copiedNodes.length - cursorOffset); //Removal is counted against actual text nodes and not html tags, thus we need to count the actual number\n\n              var headTextNodes = copiedNodes.filter(function (node) {\n                return node.type === _constants__WEBPACK_IMPORTED_MODULE_2__.VISIBLE_NODE_TYPES.TEXT_NODE;\n              });\n              var numOfNodesToDelete = amount && amount > 0 && amount < headTextNodes.length ? amount : headTextNodes.length;\n              console.log(\"Cursor Offset \" + cursorOffset + \" Amount: \" + amount + \" Max possible to remove: \" + headTextNodes.length + \" Actual to remove: \" + numOfNodesToDelete);\n\n              var removeParentNodeIfNecessary = function removeParentNodeIfNecessary(parent) {\n                if (parent != _this.state.elements.wrapper && parent.childNodes.length == 0) {\n                  var nextParent = parent.parentNode;\n                  nextParent.removeChild(parent);\n                  removeParentNodeIfNecessary(nextParent);\n                }\n              }; //Iterate backwards as html nodes are added first\n\n\n              for (var _i = 0; _i < numOfNodesToDelete;) {\n                if (copiedNodes.length > 0) {\n                  var _copiedNodes$pop = copiedNodes.pop(),\n                      _type = _copiedNodes$pop.type,\n                      _node4 = _copiedNodes$pop.node,\n                      _character3 = _copiedNodes$pop.character; // if(callOnRemove && this.options.onRemoveNode && typeof this.options.onRemoveNode === 'function'){\n                  //   this.options.onRemoveNode(node, character);\n                  // }\n                  //Make a copy or else we loose the reference after removing\n\n\n                  var parent = _node4.parentNode;\n\n                  if (parent) {\n                    //May be undefined if removeParentNodeIfNecessary already caught it\n                    try {\n                      parent.removeChild(_node4);\n                    } catch (err) {\n                      console.error(err);\n                    } //Do not count html nodes\n\n\n                    if (_type === _constants__WEBPACK_IMPORTED_MODULE_2__.VISIBLE_NODE_TYPES.TEXT_NODE) {\n                      _i++;\n                      removeParentNodeIfNecessary(parent);\n                    }\n                  }\n                }\n              }\n\n              _this.state.visibleNodes = [].concat(_toConsumableArray(copiedNodes), _toConsumableArray(tailNodes));\n              console.log(_this.state.visibleNodes);\n            }\n\n            break;\n          }\n\n        case _constants__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAMES.CHANGE_CURSOR_POSITION:\n          {\n            var position = eventArgs.position;\n\n            if (typeof position === \"number\") {\n              var insertPos = 0; //Jump behind and skip html tags\n\n              for (var _i2 = 0; _i2 < _this.state.visibleNodes.length; _i2++) {\n                if (insertPos == position) {\n                  insertPos = _i2;\n                  break;\n                }\n\n                if (_this.state.visibleNodes[_i2].type == _constants__WEBPACK_IMPORTED_MODULE_2__.VISIBLE_NODE_TYPES.TEXT_NODE) {\n                  insertPos++;\n                }\n              }\n\n              _this.state.visibleNodes[insertPos].node.before(_this.state.elements.cursor); //Rearange the cursor in the visible nodes array\n              //Remove the cursor from it's current position\n\n\n              var actualCursorPosition = _this.state.visibleNodes.indexOf(_this.state.elements.cursor);\n\n              _this.state.visibleNodes.splice(actualCursorPosition, 1); //Insert it at the correct destination\n\n\n              _this.state.visibleNodes.splice(insertPos, 0, _this.state.elements.cursor);\n            }\n\n            break;\n          }\n\n        case _constants__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAMES.CHANGE_DELETE_SPEED:\n          {\n            _this.options.deleteSpeed = currentEvent.eventArgs.speed;\n            break;\n          }\n\n        case _constants__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAMES.CHANGE_DELAY:\n          {\n            _this.options.delay = currentEvent.eventArgs.delay;\n            break;\n          }\n\n        case _constants__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAMES.CHANGE_CURSOR:\n          {\n            _this.options.cursor = currentEvent.eventArgs.cursor;\n            _this.state.elements.cursor.innerHTML = currentEvent.eventArgs.cursor;\n            break;\n          }\n\n        default:\n          {\n            break;\n          }\n      } // Add que item to called queue if we are looping\n\n\n      if (_this.options.loop) {\n        if (currentEvent.eventName !== _constants__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAMES.REMOVE_LAST_VISIBLE_NODE && !(currentEvent.eventArgs && currentEvent.eventArgs.temp)) {\n          _this.state.calledEvents = [].concat(_toConsumableArray(_this.state.calledEvents), [currentEvent]);\n        }\n      } // Replace state event queue with cloned queue\n\n\n      _this.state.eventQueue = eventQueue; // Set last frame time so it can be used to calculate next frame\n\n      _this.state.lastFrameTime = nowTime;\n    });\n\n    if (container) {\n      if (typeof container === 'string') {\n        var containerElement = document.querySelector(container);\n\n        if (!containerElement) {\n          throw new Error('Could not find container element');\n        }\n\n        this.state.elements.container = containerElement;\n      } else {\n        this.state.elements.container = container;\n      }\n    }\n\n    if (options) {\n      this.options = _objectSpread(_objectSpread({}, this.options), options);\n    } // Make a copy of the options used to reset options when looping\n\n\n    this.state.initialOptions = _objectSpread({}, this.options);\n    this.init();\n  }\n\n  _createClass(Typewriter, [{\n    key: \"init\",\n    value: function init() {\n      this.setupWrapperElement();\n      this.addEventToQueue(_constants__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAMES.CHANGE_CURSOR, {\n        cursor: this.options.cursor\n      }, true); //this.addEventToQueue(EVENT_NAMES.REMOVE_ALL, null, true);\n\n      if (window && !window.___TYPEWRITER_JS_STYLES_ADDED___ && !this.options.skipAddStyles) {\n        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.addStyles)(_constants__WEBPACK_IMPORTED_MODULE_2__.STYLES);\n        window.___TYPEWRITER_JS_STYLES_ADDED___ = true;\n      }\n\n      if (this.options.autoStart === true && this.options.strings) {\n        this.typeOutAllStrings().start();\n      }\n    }\n    /**\r\n     * Replace all child nodes of provided element with\r\n     * state wrapper element used for typewriter effect\r\n     *\r\n     * @author Tameem Safi <tamem@safi.me.uk>\r\n     */\n\n  }, {\n    key: \"logInDevMode\",\n    value:\n    /**\r\n     * Log a message in development mode\r\n     *\r\n     * @param {Mixed} message Message or item to console.log\r\n     * @author Tameem Safi <tamem@safi.me.uk>\r\n     */\n    function logInDevMode(message) {\n      if (this.options.devMode) {\n        console.log(message);\n      }\n    }\n  }]);\n\n  return Typewriter;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Typewriter);\n\n//# sourceURL=webpack://Typewriter/./src/core/Typewriter.js?");

/***/ }),

/***/ "./src/core/constants.js":
/*!*******************************!*\
  !*** ./src/core/constants.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"EVENT_NAMES\": () => (/* binding */ EVENT_NAMES),\n/* harmony export */   \"VISIBLE_NODE_TYPES\": () => (/* binding */ VISIBLE_NODE_TYPES),\n/* harmony export */   \"STYLES\": () => (/* binding */ STYLES)\n/* harmony export */ });\nvar EVENT_NAMES = {\n  TYPE_CHARACTER: 'TYPE_CHARACTER',\n  REMOVE_CHARACTER: 'REMOVE_CHARACTER',\n  REMOVE_ALL: 'REMOVE_ALL',\n  REMOVE_LAST_VISIBLE_NODE: 'REMOVE_LAST_VISIBLE_NODE',\n  PAUSE_FOR: 'PAUSE_FOR',\n  CALL_FUNCTION: 'CALL_FUNCTION',\n  ADD_HTML_TAG_ELEMENT: 'ADD_HTML_TAG_ELEMENT',\n  REMOVE_HTML_TAG_ELEMENT: 'REMOVE_HTML_TAG_ELEMENT',\n  CHANGE_DELETE_SPEED: 'CHANGE_DELETE_SPEED',\n  CHANGE_DELAY: 'CHANGE_DELAY',\n  CHANGE_CURSOR: 'CHANGE_CURSOR',\n  PASTE_STRING: 'PASTE_STRING',\n  CLEAR: 'CLEAR',\n  CHANGE_CURSOR_POSITION: 'CHANGE_CURSOR_POSITION'\n};\nvar VISIBLE_NODE_TYPES = {\n  HTML_TAG: 'HTML_TAG',\n  TEXT_NODE: 'TEXT_NODE'\n};\nvar STYLES = \".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px;width: 0px;margin: 0px;display: inline-block;}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}\";\n\n//# sourceURL=webpack://Typewriter/./src/core/constants.js?");

/***/ }),

/***/ "./src/core/index.js":
/*!***************************!*\
  !*** ./src/core/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _Typewriter__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _Typewriter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Typewriter */ \"./src/core/Typewriter.js\");\n\n\n//# sourceURL=webpack://Typewriter/./src/core/index.js?");

/***/ }),

/***/ "./src/react/Typewriter.js":
/*!*********************************!*\
  !*** ./src/react/Typewriter.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../core */ \"./src/core/index.js\");\n/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/isEqual */ \"./node_modules/lodash/isEqual.js\");\n/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_3__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nvar Typewriter = /*#__PURE__*/function (_Component) {\n  _inherits(Typewriter, _Component);\n\n  var _super = _createSuper(Typewriter);\n\n  function Typewriter() {\n    var _this;\n\n    _classCallCheck(this, Typewriter);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    _defineProperty(_assertThisInitialized(_this), \"state\", {\n      instance: null\n    });\n\n    return _this;\n  }\n\n  _createClass(Typewriter, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      var instance = new _core__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.typewriter, this.props.options);\n      this.setState({\n        instance: instance\n      }, function () {\n        var onInit = _this2.props.onInit;\n\n        if (onInit) {\n          onInit(instance);\n        }\n      });\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate(prevProps) {\n      if (!lodash_isEqual__WEBPACK_IMPORTED_MODULE_3___default()(this.props.options, prevProps.options)) {\n        this.setState({\n          instance: new _core__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.typewriter, this.props.options)\n        });\n      }\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      if (this.state.instance) {\n        this.state.instance.stop();\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      var Component = this.props.component;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, {\n        ref: function ref(_ref) {\n          return _this3.typewriter = _ref;\n        },\n        className: \"Typewriter\",\n        \"data-testid\": \"typewriter-wrapper\"\n      });\n    }\n  }]);\n\n  return Typewriter;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n\nTypewriter.defaultProps = {\n  component: 'div'\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Typewriter);\n\n//# sourceURL=webpack://Typewriter/./src/react/Typewriter.js?");

/***/ }),

/***/ "./src/react/index.js":
/*!****************************!*\
  !*** ./src/react/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _Typewriter__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _Typewriter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Typewriter */ \"./src/react/Typewriter.js\");\n\n\n//# sourceURL=webpack://Typewriter/./src/react/index.js?");

/***/ }),

/***/ "./src/utils/add-styles.js":
/*!*********************************!*\
  !*** ./src/utils/add-styles.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n * Add styles to document head\r\n * \r\n * @param {String} styles CSS styles to add\r\n * @returns {void}\r\n */\nvar addStyles = function addStyles(styles) {\n  var styleBlock = document.createElement('style');\n  styleBlock.appendChild(document.createTextNode(styles));\n  document.head.appendChild(styleBlock);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addStyles);\n\n//# sourceURL=webpack://Typewriter/./src/utils/add-styles.js?");

/***/ }),

/***/ "./src/utils/does-string-contain-html-tag.js":
/*!***************************************************!*\
  !*** ./src/utils/does-string-contain-html-tag.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n * Check if a string contains a HTML tag or not\r\n * \r\n * @param {String} string String to check for HTML tag\r\n * @return {Boolean} True|False\r\n * \r\n */\nvar doesStringContainHTMLTag = function doesStringContainHTMLTag(string) {\n  var regexp = new RegExp(/<[a-z][\\s\\S]*>/i);\n  return regexp.test(string);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (doesStringContainHTMLTag);\n\n//# sourceURL=webpack://Typewriter/./src/utils/does-string-contain-html-tag.js?");

/***/ }),

/***/ "./src/utils/get-dom-element-from-string.js":
/*!**************************************************!*\
  !*** ./src/utils/get-dom-element-from-string.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n * Get the DOM element from a string\r\n * - Create temporary div element\r\n * - Change innerHTML of div element to the string\r\n * - Return the first child of the temporary div element\r\n * \r\n * @param {String} string String to convert into a DOM node\r\n * \r\n * @author Tameem Safi <tamem@safi.me.uk>\r\n */\nvar getDOMElementFromString = function getDOMElementFromString(string) {\n  var div = document.createElement('div');\n  div.innerHTML = string;\n  return div.childNodes;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDOMElementFromString);\n\n//# sourceURL=webpack://Typewriter/./src/utils/get-dom-element-from-string.js?");

/***/ }),

/***/ "./src/utils/get-random-integer.js":
/*!*****************************************!*\
  !*** ./src/utils/get-random-integer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n * Return a random integer between min/max values\r\n * \r\n * @param {Number} min Minimum number to generate\r\n * @param {Number} max Maximum number to generate\r\n * @author Tameem Safi <tamem@safi.me.uk>\r\n */\nvar getRandomInteger = function getRandomInteger(min, max) {\n  return Math.floor(Math.random() * (max - min + 1)) + min;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getRandomInteger);\n\n//# sourceURL=webpack://Typewriter/./src/utils/get-random-integer.js?");

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"doesStringContainHTMLTag\": () => (/* reexport safe */ _does_string_contain_html_tag__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"getDOMElementFromString\": () => (/* reexport safe */ _get_dom_element_from_string__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   \"getRandomInteger\": () => (/* reexport safe */ _get_random_integer__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   \"addStyles\": () => (/* reexport safe */ _add_styles__WEBPACK_IMPORTED_MODULE_3__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _does_string_contain_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./does-string-contain-html-tag */ \"./src/utils/does-string-contain-html-tag.js\");\n/* harmony import */ var _get_dom_element_from_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-dom-element-from-string */ \"./src/utils/get-dom-element-from-string.js\");\n/* harmony import */ var _get_random_integer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-random-integer */ \"./src/utils/get-random-integer.js\");\n/* harmony import */ var _add_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-styles */ \"./src/utils/add-styles.js\");\n\n\n\n\n\n//# sourceURL=webpack://Typewriter/./src/utils/index.js?");

/***/ }),

/***/ "./node_modules/lodash/_DataView.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_DataView.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getNative = __webpack_require__(/*! ./_getNative */ \"./node_modules/lodash/_getNative.js\"),\n    root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/* Built-in method references that are verified to be native. */\nvar DataView = getNative(root, 'DataView');\n\nmodule.exports = DataView;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_DataView.js?");

/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var hashClear = __webpack_require__(/*! ./_hashClear */ \"./node_modules/lodash/_hashClear.js\"),\n    hashDelete = __webpack_require__(/*! ./_hashDelete */ \"./node_modules/lodash/_hashDelete.js\"),\n    hashGet = __webpack_require__(/*! ./_hashGet */ \"./node_modules/lodash/_hashGet.js\"),\n    hashHas = __webpack_require__(/*! ./_hashHas */ \"./node_modules/lodash/_hashHas.js\"),\n    hashSet = __webpack_require__(/*! ./_hashSet */ \"./node_modules/lodash/_hashSet.js\");\n\n/**\n * Creates a hash object.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\nfunction Hash(entries) {\n  var index = -1,\n      length = entries == null ? 0 : entries.length;\n\n  this.clear();\n  while (++index < length) {\n    var entry = entries[index];\n    this.set(entry[0], entry[1]);\n  }\n}\n\n// Add methods to `Hash`.\nHash.prototype.clear = hashClear;\nHash.prototype['delete'] = hashDelete;\nHash.prototype.get = hashGet;\nHash.prototype.has = hashHas;\nHash.prototype.set = hashSet;\n\nmodule.exports = Hash;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_Hash.js?");

/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ \"./node_modules/lodash/_listCacheClear.js\"),\n    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ \"./node_modules/lodash/_listCacheDelete.js\"),\n    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ \"./node_modules/lodash/_listCacheGet.js\"),\n    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ \"./node_modules/lodash/_listCacheHas.js\"),\n    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ \"./node_modules/lodash/_listCacheSet.js\");\n\n/**\n * Creates an list cache object.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\nfunction ListCache(entries) {\n  var index = -1,\n      length = entries == null ? 0 : entries.length;\n\n  this.clear();\n  while (++index < length) {\n    var entry = entries[index];\n    this.set(entry[0], entry[1]);\n  }\n}\n\n// Add methods to `ListCache`.\nListCache.prototype.clear = listCacheClear;\nListCache.prototype['delete'] = listCacheDelete;\nListCache.prototype.get = listCacheGet;\nListCache.prototype.has = listCacheHas;\nListCache.prototype.set = listCacheSet;\n\nmodule.exports = ListCache;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_ListCache.js?");

/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getNative = __webpack_require__(/*! ./_getNative */ \"./node_modules/lodash/_getNative.js\"),\n    root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/* Built-in method references that are verified to be native. */\nvar Map = getNative(root, 'Map');\n\nmodule.exports = Map;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_Map.js?");

/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ \"./node_modules/lodash/_mapCacheClear.js\"),\n    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ \"./node_modules/lodash/_mapCacheDelete.js\"),\n    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ \"./node_modules/lodash/_mapCacheGet.js\"),\n    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ \"./node_modules/lodash/_mapCacheHas.js\"),\n    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ \"./node_modules/lodash/_mapCacheSet.js\");\n\n/**\n * Creates a map cache object to store key-value pairs.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\nfunction MapCache(entries) {\n  var index = -1,\n      length = entries == null ? 0 : entries.length;\n\n  this.clear();\n  while (++index < length) {\n    var entry = entries[index];\n    this.set(entry[0], entry[1]);\n  }\n}\n\n// Add methods to `MapCache`.\nMapCache.prototype.clear = mapCacheClear;\nMapCache.prototype['delete'] = mapCacheDelete;\nMapCache.prototype.get = mapCacheGet;\nMapCache.prototype.has = mapCacheHas;\nMapCache.prototype.set = mapCacheSet;\n\nmodule.exports = MapCache;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_MapCache.js?");

/***/ }),

/***/ "./node_modules/lodash/_Promise.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_Promise.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getNative = __webpack_require__(/*! ./_getNative */ \"./node_modules/lodash/_getNative.js\"),\n    root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/* Built-in method references that are verified to be native. */\nvar Promise = getNative(root, 'Promise');\n\nmodule.exports = Promise;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_Promise.js?");

/***/ }),

/***/ "./node_modules/lodash/_Set.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Set.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getNative = __webpack_require__(/*! ./_getNative */ \"./node_modules/lodash/_getNative.js\"),\n    root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/* Built-in method references that are verified to be native. */\nvar Set = getNative(root, 'Set');\n\nmodule.exports = Set;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_Set.js?");

/***/ }),

/***/ "./node_modules/lodash/_SetCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_SetCache.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var MapCache = __webpack_require__(/*! ./_MapCache */ \"./node_modules/lodash/_MapCache.js\"),\n    setCacheAdd = __webpack_require__(/*! ./_setCacheAdd */ \"./node_modules/lodash/_setCacheAdd.js\"),\n    setCacheHas = __webpack_require__(/*! ./_setCacheHas */ \"./node_modules/lodash/_setCacheHas.js\");\n\n/**\n *\n * Creates an array cache object to store unique values.\n *\n * @private\n * @constructor\n * @param {Array} [values] The values to cache.\n */\nfunction SetCache(values) {\n  var index = -1,\n      length = values == null ? 0 : values.length;\n\n  this.__data__ = new MapCache;\n  while (++index < length) {\n    this.add(values[index]);\n  }\n}\n\n// Add methods to `SetCache`.\nSetCache.prototype.add = SetCache.prototype.push = setCacheAdd;\nSetCache.prototype.has = setCacheHas;\n\nmodule.exports = SetCache;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_SetCache.js?");

/***/ }),

/***/ "./node_modules/lodash/_Stack.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_Stack.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var ListCache = __webpack_require__(/*! ./_ListCache */ \"./node_modules/lodash/_ListCache.js\"),\n    stackClear = __webpack_require__(/*! ./_stackClear */ \"./node_modules/lodash/_stackClear.js\"),\n    stackDelete = __webpack_require__(/*! ./_stackDelete */ \"./node_modules/lodash/_stackDelete.js\"),\n    stackGet = __webpack_require__(/*! ./_stackGet */ \"./node_modules/lodash/_stackGet.js\"),\n    stackHas = __webpack_require__(/*! ./_stackHas */ \"./node_modules/lodash/_stackHas.js\"),\n    stackSet = __webpack_require__(/*! ./_stackSet */ \"./node_modules/lodash/_stackSet.js\");\n\n/**\n * Creates a stack cache object to store key-value pairs.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\nfunction Stack(entries) {\n  var data = this.__data__ = new ListCache(entries);\n  this.size = data.size;\n}\n\n// Add methods to `Stack`.\nStack.prototype.clear = stackClear;\nStack.prototype['delete'] = stackDelete;\nStack.prototype.get = stackGet;\nStack.prototype.has = stackHas;\nStack.prototype.set = stackSet;\n\nmodule.exports = Stack;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_Stack.js?");

/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/** Built-in value references. */\nvar Symbol = root.Symbol;\n\nmodule.exports = Symbol;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_Symbol.js?");

/***/ }),

/***/ "./node_modules/lodash/_Uint8Array.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_Uint8Array.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/** Built-in value references. */\nvar Uint8Array = root.Uint8Array;\n\nmodule.exports = Uint8Array;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_Uint8Array.js?");

/***/ }),

/***/ "./node_modules/lodash/_WeakMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_WeakMap.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getNative = __webpack_require__(/*! ./_getNative */ \"./node_modules/lodash/_getNative.js\"),\n    root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/* Built-in method references that are verified to be native. */\nvar WeakMap = getNative(root, 'WeakMap');\n\nmodule.exports = WeakMap;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_WeakMap.js?");

/***/ }),

/***/ "./node_modules/lodash/_arrayFilter.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayFilter.js ***!
  \*********************************************/
/***/ ((module) => {

eval("/**\n * A specialized version of `_.filter` for arrays without support for\n * iteratee shorthands.\n *\n * @private\n * @param {Array} [array] The array to iterate over.\n * @param {Function} predicate The function invoked per iteration.\n * @returns {Array} Returns the new filtered array.\n */\nfunction arrayFilter(array, predicate) {\n  var index = -1,\n      length = array == null ? 0 : array.length,\n      resIndex = 0,\n      result = [];\n\n  while (++index < length) {\n    var value = array[index];\n    if (predicate(value, index, array)) {\n      result[resIndex++] = value;\n    }\n  }\n  return result;\n}\n\nmodule.exports = arrayFilter;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_arrayFilter.js?");

/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseTimes = __webpack_require__(/*! ./_baseTimes */ \"./node_modules/lodash/_baseTimes.js\"),\n    isArguments = __webpack_require__(/*! ./isArguments */ \"./node_modules/lodash/isArguments.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isBuffer = __webpack_require__(/*! ./isBuffer */ \"./node_modules/lodash/isBuffer.js\"),\n    isIndex = __webpack_require__(/*! ./_isIndex */ \"./node_modules/lodash/_isIndex.js\"),\n    isTypedArray = __webpack_require__(/*! ./isTypedArray */ \"./node_modules/lodash/isTypedArray.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Creates an array of the enumerable property names of the array-like `value`.\n *\n * @private\n * @param {*} value The value to query.\n * @param {boolean} inherited Specify returning inherited property names.\n * @returns {Array} Returns the array of property names.\n */\nfunction arrayLikeKeys(value, inherited) {\n  var isArr = isArray(value),\n      isArg = !isArr && isArguments(value),\n      isBuff = !isArr && !isArg && isBuffer(value),\n      isType = !isArr && !isArg && !isBuff && isTypedArray(value),\n      skipIndexes = isArr || isArg || isBuff || isType,\n      result = skipIndexes ? baseTimes(value.length, String) : [],\n      length = result.length;\n\n  for (var key in value) {\n    if ((inherited || hasOwnProperty.call(value, key)) &&\n        !(skipIndexes && (\n           // Safari 9 has enumerable `arguments.length` in strict mode.\n           key == 'length' ||\n           // Node.js 0.10 has enumerable non-index properties on buffers.\n           (isBuff && (key == 'offset' || key == 'parent')) ||\n           // PhantomJS 2 has enumerable non-index properties on typed arrays.\n           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||\n           // Skip index properties.\n           isIndex(key, length)\n        ))) {\n      result.push(key);\n    }\n  }\n  return result;\n}\n\nmodule.exports = arrayLikeKeys;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_arrayLikeKeys.js?");

/***/ }),

/***/ "./node_modules/lodash/_arrayPush.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayPush.js ***!
  \*******************************************/
/***/ ((module) => {

eval("/**\n * Appends the elements of `values` to `array`.\n *\n * @private\n * @param {Array} array The array to modify.\n * @param {Array} values The values to append.\n * @returns {Array} Returns `array`.\n */\nfunction arrayPush(array, values) {\n  var index = -1,\n      length = values.length,\n      offset = array.length;\n\n  while (++index < length) {\n    array[offset + index] = values[index];\n  }\n  return array;\n}\n\nmodule.exports = arrayPush;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_arrayPush.js?");

/***/ }),

/***/ "./node_modules/lodash/_arraySome.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arraySome.js ***!
  \*******************************************/
/***/ ((module) => {

eval("/**\n * A specialized version of `_.some` for arrays without support for iteratee\n * shorthands.\n *\n * @private\n * @param {Array} [array] The array to iterate over.\n * @param {Function} predicate The function invoked per iteration.\n * @returns {boolean} Returns `true` if any element passes the predicate check,\n *  else `false`.\n */\nfunction arraySome(array, predicate) {\n  var index = -1,\n      length = array == null ? 0 : array.length;\n\n  while (++index < length) {\n    if (predicate(array[index], index, array)) {\n      return true;\n    }\n  }\n  return false;\n}\n\nmodule.exports = arraySome;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_arraySome.js?");

/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var eq = __webpack_require__(/*! ./eq */ \"./node_modules/lodash/eq.js\");\n\n/**\n * Gets the index at which the `key` is found in `array` of key-value pairs.\n *\n * @private\n * @param {Array} array The array to inspect.\n * @param {*} key The key to search for.\n * @returns {number} Returns the index of the matched value, else `-1`.\n */\nfunction assocIndexOf(array, key) {\n  var length = array.length;\n  while (length--) {\n    if (eq(array[length][0], key)) {\n      return length;\n    }\n  }\n  return -1;\n}\n\nmodule.exports = assocIndexOf;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_assocIndexOf.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseGetAllKeys.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_baseGetAllKeys.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var arrayPush = __webpack_require__(/*! ./_arrayPush */ \"./node_modules/lodash/_arrayPush.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\");\n\n/**\n * The base implementation of `getAllKeys` and `getAllKeysIn` which uses\n * `keysFunc` and `symbolsFunc` to get the enumerable property names and\n * symbols of `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @param {Function} keysFunc The function to get the keys of `object`.\n * @param {Function} symbolsFunc The function to get the symbols of `object`.\n * @returns {Array} Returns the array of property names and symbols.\n */\nfunction baseGetAllKeys(object, keysFunc, symbolsFunc) {\n  var result = keysFunc(object);\n  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));\n}\n\nmodule.exports = baseGetAllKeys;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_baseGetAllKeys.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\"),\n    getRawTag = __webpack_require__(/*! ./_getRawTag */ \"./node_modules/lodash/_getRawTag.js\"),\n    objectToString = __webpack_require__(/*! ./_objectToString */ \"./node_modules/lodash/_objectToString.js\");\n\n/** `Object#toString` result references. */\nvar nullTag = '[object Null]',\n    undefinedTag = '[object Undefined]';\n\n/** Built-in value references. */\nvar symToStringTag = Symbol ? Symbol.toStringTag : undefined;\n\n/**\n * The base implementation of `getTag` without fallbacks for buggy environments.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the `toStringTag`.\n */\nfunction baseGetTag(value) {\n  if (value == null) {\n    return value === undefined ? undefinedTag : nullTag;\n  }\n  return (symToStringTag && symToStringTag in Object(value))\n    ? getRawTag(value)\n    : objectToString(value);\n}\n\nmodule.exports = baseGetTag;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_baseGetTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** `Object#toString` result references. */\nvar argsTag = '[object Arguments]';\n\n/**\n * The base implementation of `_.isArguments`.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an `arguments` object,\n */\nfunction baseIsArguments(value) {\n  return isObjectLike(value) && baseGetTag(value) == argsTag;\n}\n\nmodule.exports = baseIsArguments;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_baseIsArguments.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIsEqual.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsEqual.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseIsEqualDeep = __webpack_require__(/*! ./_baseIsEqualDeep */ \"./node_modules/lodash/_baseIsEqualDeep.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/**\n * The base implementation of `_.isEqual` which supports partial comparisons\n * and tracks traversed objects.\n *\n * @private\n * @param {*} value The value to compare.\n * @param {*} other The other value to compare.\n * @param {boolean} bitmask The bitmask flags.\n *  1 - Unordered comparison\n *  2 - Partial comparison\n * @param {Function} [customizer] The function to customize comparisons.\n * @param {Object} [stack] Tracks traversed `value` and `other` objects.\n * @returns {boolean} Returns `true` if the values are equivalent, else `false`.\n */\nfunction baseIsEqual(value, other, bitmask, customizer, stack) {\n  if (value === other) {\n    return true;\n  }\n  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {\n    return value !== value && other !== other;\n  }\n  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);\n}\n\nmodule.exports = baseIsEqual;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_baseIsEqual.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIsEqualDeep.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsEqualDeep.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var Stack = __webpack_require__(/*! ./_Stack */ \"./node_modules/lodash/_Stack.js\"),\n    equalArrays = __webpack_require__(/*! ./_equalArrays */ \"./node_modules/lodash/_equalArrays.js\"),\n    equalByTag = __webpack_require__(/*! ./_equalByTag */ \"./node_modules/lodash/_equalByTag.js\"),\n    equalObjects = __webpack_require__(/*! ./_equalObjects */ \"./node_modules/lodash/_equalObjects.js\"),\n    getTag = __webpack_require__(/*! ./_getTag */ \"./node_modules/lodash/_getTag.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isBuffer = __webpack_require__(/*! ./isBuffer */ \"./node_modules/lodash/isBuffer.js\"),\n    isTypedArray = __webpack_require__(/*! ./isTypedArray */ \"./node_modules/lodash/isTypedArray.js\");\n\n/** Used to compose bitmasks for value comparisons. */\nvar COMPARE_PARTIAL_FLAG = 1;\n\n/** `Object#toString` result references. */\nvar argsTag = '[object Arguments]',\n    arrayTag = '[object Array]',\n    objectTag = '[object Object]';\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * A specialized version of `baseIsEqual` for arrays and objects which performs\n * deep comparisons and tracks traversed objects enabling objects with circular\n * references to be compared.\n *\n * @private\n * @param {Object} object The object to compare.\n * @param {Object} other The other object to compare.\n * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.\n * @param {Function} customizer The function to customize comparisons.\n * @param {Function} equalFunc The function to determine equivalents of values.\n * @param {Object} [stack] Tracks traversed `object` and `other` objects.\n * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.\n */\nfunction baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {\n  var objIsArr = isArray(object),\n      othIsArr = isArray(other),\n      objTag = objIsArr ? arrayTag : getTag(object),\n      othTag = othIsArr ? arrayTag : getTag(other);\n\n  objTag = objTag == argsTag ? objectTag : objTag;\n  othTag = othTag == argsTag ? objectTag : othTag;\n\n  var objIsObj = objTag == objectTag,\n      othIsObj = othTag == objectTag,\n      isSameTag = objTag == othTag;\n\n  if (isSameTag && isBuffer(object)) {\n    if (!isBuffer(other)) {\n      return false;\n    }\n    objIsArr = true;\n    objIsObj = false;\n  }\n  if (isSameTag && !objIsObj) {\n    stack || (stack = new Stack);\n    return (objIsArr || isTypedArray(object))\n      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)\n      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);\n  }\n  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {\n    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),\n        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');\n\n    if (objIsWrapped || othIsWrapped) {\n      var objUnwrapped = objIsWrapped ? object.value() : object,\n          othUnwrapped = othIsWrapped ? other.value() : other;\n\n      stack || (stack = new Stack);\n      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);\n    }\n  }\n  if (!isSameTag) {\n    return false;\n  }\n  stack || (stack = new Stack);\n  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);\n}\n\nmodule.exports = baseIsEqualDeep;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_baseIsEqualDeep.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isFunction = __webpack_require__(/*! ./isFunction */ \"./node_modules/lodash/isFunction.js\"),\n    isMasked = __webpack_require__(/*! ./_isMasked */ \"./node_modules/lodash/_isMasked.js\"),\n    isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\"),\n    toSource = __webpack_require__(/*! ./_toSource */ \"./node_modules/lodash/_toSource.js\");\n\n/**\n * Used to match `RegExp`\n * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).\n */\nvar reRegExpChar = /[\\\\^$.*+?()[\\]{}|]/g;\n\n/** Used to detect host constructors (Safari). */\nvar reIsHostCtor = /^\\[object .+?Constructor\\]$/;\n\n/** Used for built-in method references. */\nvar funcProto = Function.prototype,\n    objectProto = Object.prototype;\n\n/** Used to resolve the decompiled source of functions. */\nvar funcToString = funcProto.toString;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/** Used to detect if a method is native. */\nvar reIsNative = RegExp('^' +\n  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\\\$&')\n  .replace(/hasOwnProperty|(function).*?(?=\\\\\\()| for .+?(?=\\\\\\])/g, '$1.*?') + '$'\n);\n\n/**\n * The base implementation of `_.isNative` without bad shim checks.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a native function,\n *  else `false`.\n */\nfunction baseIsNative(value) {\n  if (!isObject(value) || isMasked(value)) {\n    return false;\n  }\n  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;\n  return pattern.test(toSource(value));\n}\n\nmodule.exports = baseIsNative;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_baseIsNative.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isLength = __webpack_require__(/*! ./isLength */ \"./node_modules/lodash/isLength.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** `Object#toString` result references. */\nvar argsTag = '[object Arguments]',\n    arrayTag = '[object Array]',\n    boolTag = '[object Boolean]',\n    dateTag = '[object Date]',\n    errorTag = '[object Error]',\n    funcTag = '[object Function]',\n    mapTag = '[object Map]',\n    numberTag = '[object Number]',\n    objectTag = '[object Object]',\n    regexpTag = '[object RegExp]',\n    setTag = '[object Set]',\n    stringTag = '[object String]',\n    weakMapTag = '[object WeakMap]';\n\nvar arrayBufferTag = '[object ArrayBuffer]',\n    dataViewTag = '[object DataView]',\n    float32Tag = '[object Float32Array]',\n    float64Tag = '[object Float64Array]',\n    int8Tag = '[object Int8Array]',\n    int16Tag = '[object Int16Array]',\n    int32Tag = '[object Int32Array]',\n    uint8Tag = '[object Uint8Array]',\n    uint8ClampedTag = '[object Uint8ClampedArray]',\n    uint16Tag = '[object Uint16Array]',\n    uint32Tag = '[object Uint32Array]';\n\n/** Used to identify `toStringTag` values of typed arrays. */\nvar typedArrayTags = {};\ntypedArrayTags[float32Tag] = typedArrayTags[float64Tag] =\ntypedArrayTags[int8Tag] = typedArrayTags[int16Tag] =\ntypedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =\ntypedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =\ntypedArrayTags[uint32Tag] = true;\ntypedArrayTags[argsTag] = typedArrayTags[arrayTag] =\ntypedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =\ntypedArrayTags[dataViewTag] = typedArrayTags[dateTag] =\ntypedArrayTags[errorTag] = typedArrayTags[funcTag] =\ntypedArrayTags[mapTag] = typedArrayTags[numberTag] =\ntypedArrayTags[objectTag] = typedArrayTags[regexpTag] =\ntypedArrayTags[setTag] = typedArrayTags[stringTag] =\ntypedArrayTags[weakMapTag] = false;\n\n/**\n * The base implementation of `_.isTypedArray` without Node.js optimizations.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.\n */\nfunction baseIsTypedArray(value) {\n  return isObjectLike(value) &&\n    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];\n}\n\nmodule.exports = baseIsTypedArray;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_baseIsTypedArray.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseKeys.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isPrototype = __webpack_require__(/*! ./_isPrototype */ \"./node_modules/lodash/_isPrototype.js\"),\n    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ \"./node_modules/lodash/_nativeKeys.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names.\n */\nfunction baseKeys(object) {\n  if (!isPrototype(object)) {\n    return nativeKeys(object);\n  }\n  var result = [];\n  for (var key in Object(object)) {\n    if (hasOwnProperty.call(object, key) && key != 'constructor') {\n      result.push(key);\n    }\n  }\n  return result;\n}\n\nmodule.exports = baseKeys;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_baseKeys.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/***/ ((module) => {

eval("/**\n * The base implementation of `_.times` without support for iteratee shorthands\n * or max array length checks.\n *\n * @private\n * @param {number} n The number of times to invoke `iteratee`.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Array} Returns the array of results.\n */\nfunction baseTimes(n, iteratee) {\n  var index = -1,\n      result = Array(n);\n\n  while (++index < n) {\n    result[index] = iteratee(index);\n  }\n  return result;\n}\n\nmodule.exports = baseTimes;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_baseTimes.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/***/ ((module) => {

eval("/**\n * The base implementation of `_.unary` without support for storing metadata.\n *\n * @private\n * @param {Function} func The function to cap arguments for.\n * @returns {Function} Returns the new capped function.\n */\nfunction baseUnary(func) {\n  return function(value) {\n    return func(value);\n  };\n}\n\nmodule.exports = baseUnary;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_baseUnary.js?");

/***/ }),

/***/ "./node_modules/lodash/_cacheHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_cacheHas.js ***!
  \******************************************/
/***/ ((module) => {

eval("/**\n * Checks if a `cache` value for `key` exists.\n *\n * @private\n * @param {Object} cache The cache to query.\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction cacheHas(cache, key) {\n  return cache.has(key);\n}\n\nmodule.exports = cacheHas;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_cacheHas.js?");

/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/** Used to detect overreaching core-js shims. */\nvar coreJsData = root['__core-js_shared__'];\n\nmodule.exports = coreJsData;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_coreJsData.js?");

/***/ }),

/***/ "./node_modules/lodash/_equalArrays.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_equalArrays.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var SetCache = __webpack_require__(/*! ./_SetCache */ \"./node_modules/lodash/_SetCache.js\"),\n    arraySome = __webpack_require__(/*! ./_arraySome */ \"./node_modules/lodash/_arraySome.js\"),\n    cacheHas = __webpack_require__(/*! ./_cacheHas */ \"./node_modules/lodash/_cacheHas.js\");\n\n/** Used to compose bitmasks for value comparisons. */\nvar COMPARE_PARTIAL_FLAG = 1,\n    COMPARE_UNORDERED_FLAG = 2;\n\n/**\n * A specialized version of `baseIsEqualDeep` for arrays with support for\n * partial deep comparisons.\n *\n * @private\n * @param {Array} array The array to compare.\n * @param {Array} other The other array to compare.\n * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.\n * @param {Function} customizer The function to customize comparisons.\n * @param {Function} equalFunc The function to determine equivalents of values.\n * @param {Object} stack Tracks traversed `array` and `other` objects.\n * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.\n */\nfunction equalArrays(array, other, bitmask, customizer, equalFunc, stack) {\n  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,\n      arrLength = array.length,\n      othLength = other.length;\n\n  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {\n    return false;\n  }\n  // Check that cyclic values are equal.\n  var arrStacked = stack.get(array);\n  var othStacked = stack.get(other);\n  if (arrStacked && othStacked) {\n    return arrStacked == other && othStacked == array;\n  }\n  var index = -1,\n      result = true,\n      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;\n\n  stack.set(array, other);\n  stack.set(other, array);\n\n  // Ignore non-index properties.\n  while (++index < arrLength) {\n    var arrValue = array[index],\n        othValue = other[index];\n\n    if (customizer) {\n      var compared = isPartial\n        ? customizer(othValue, arrValue, index, other, array, stack)\n        : customizer(arrValue, othValue, index, array, other, stack);\n    }\n    if (compared !== undefined) {\n      if (compared) {\n        continue;\n      }\n      result = false;\n      break;\n    }\n    // Recursively compare arrays (susceptible to call stack limits).\n    if (seen) {\n      if (!arraySome(other, function(othValue, othIndex) {\n            if (!cacheHas(seen, othIndex) &&\n                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {\n              return seen.push(othIndex);\n            }\n          })) {\n        result = false;\n        break;\n      }\n    } else if (!(\n          arrValue === othValue ||\n            equalFunc(arrValue, othValue, bitmask, customizer, stack)\n        )) {\n      result = false;\n      break;\n    }\n  }\n  stack['delete'](array);\n  stack['delete'](other);\n  return result;\n}\n\nmodule.exports = equalArrays;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_equalArrays.js?");

/***/ }),

/***/ "./node_modules/lodash/_equalByTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_equalByTag.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\"),\n    Uint8Array = __webpack_require__(/*! ./_Uint8Array */ \"./node_modules/lodash/_Uint8Array.js\"),\n    eq = __webpack_require__(/*! ./eq */ \"./node_modules/lodash/eq.js\"),\n    equalArrays = __webpack_require__(/*! ./_equalArrays */ \"./node_modules/lodash/_equalArrays.js\"),\n    mapToArray = __webpack_require__(/*! ./_mapToArray */ \"./node_modules/lodash/_mapToArray.js\"),\n    setToArray = __webpack_require__(/*! ./_setToArray */ \"./node_modules/lodash/_setToArray.js\");\n\n/** Used to compose bitmasks for value comparisons. */\nvar COMPARE_PARTIAL_FLAG = 1,\n    COMPARE_UNORDERED_FLAG = 2;\n\n/** `Object#toString` result references. */\nvar boolTag = '[object Boolean]',\n    dateTag = '[object Date]',\n    errorTag = '[object Error]',\n    mapTag = '[object Map]',\n    numberTag = '[object Number]',\n    regexpTag = '[object RegExp]',\n    setTag = '[object Set]',\n    stringTag = '[object String]',\n    symbolTag = '[object Symbol]';\n\nvar arrayBufferTag = '[object ArrayBuffer]',\n    dataViewTag = '[object DataView]';\n\n/** Used to convert symbols to primitives and strings. */\nvar symbolProto = Symbol ? Symbol.prototype : undefined,\n    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;\n\n/**\n * A specialized version of `baseIsEqualDeep` for comparing objects of\n * the same `toStringTag`.\n *\n * **Note:** This function only supports comparing values with tags of\n * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.\n *\n * @private\n * @param {Object} object The object to compare.\n * @param {Object} other The other object to compare.\n * @param {string} tag The `toStringTag` of the objects to compare.\n * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.\n * @param {Function} customizer The function to customize comparisons.\n * @param {Function} equalFunc The function to determine equivalents of values.\n * @param {Object} stack Tracks traversed `object` and `other` objects.\n * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.\n */\nfunction equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {\n  switch (tag) {\n    case dataViewTag:\n      if ((object.byteLength != other.byteLength) ||\n          (object.byteOffset != other.byteOffset)) {\n        return false;\n      }\n      object = object.buffer;\n      other = other.buffer;\n\n    case arrayBufferTag:\n      if ((object.byteLength != other.byteLength) ||\n          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {\n        return false;\n      }\n      return true;\n\n    case boolTag:\n    case dateTag:\n    case numberTag:\n      // Coerce booleans to `1` or `0` and dates to milliseconds.\n      // Invalid dates are coerced to `NaN`.\n      return eq(+object, +other);\n\n    case errorTag:\n      return object.name == other.name && object.message == other.message;\n\n    case regexpTag:\n    case stringTag:\n      // Coerce regexes to strings and treat strings, primitives and objects,\n      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring\n      // for more details.\n      return object == (other + '');\n\n    case mapTag:\n      var convert = mapToArray;\n\n    case setTag:\n      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;\n      convert || (convert = setToArray);\n\n      if (object.size != other.size && !isPartial) {\n        return false;\n      }\n      // Assume cyclic values are equal.\n      var stacked = stack.get(object);\n      if (stacked) {\n        return stacked == other;\n      }\n      bitmask |= COMPARE_UNORDERED_FLAG;\n\n      // Recursively compare objects (susceptible to call stack limits).\n      stack.set(object, other);\n      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);\n      stack['delete'](object);\n      return result;\n\n    case symbolTag:\n      if (symbolValueOf) {\n        return symbolValueOf.call(object) == symbolValueOf.call(other);\n      }\n  }\n  return false;\n}\n\nmodule.exports = equalByTag;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_equalByTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_equalObjects.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_equalObjects.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getAllKeys = __webpack_require__(/*! ./_getAllKeys */ \"./node_modules/lodash/_getAllKeys.js\");\n\n/** Used to compose bitmasks for value comparisons. */\nvar COMPARE_PARTIAL_FLAG = 1;\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * A specialized version of `baseIsEqualDeep` for objects with support for\n * partial deep comparisons.\n *\n * @private\n * @param {Object} object The object to compare.\n * @param {Object} other The other object to compare.\n * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.\n * @param {Function} customizer The function to customize comparisons.\n * @param {Function} equalFunc The function to determine equivalents of values.\n * @param {Object} stack Tracks traversed `object` and `other` objects.\n * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.\n */\nfunction equalObjects(object, other, bitmask, customizer, equalFunc, stack) {\n  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,\n      objProps = getAllKeys(object),\n      objLength = objProps.length,\n      othProps = getAllKeys(other),\n      othLength = othProps.length;\n\n  if (objLength != othLength && !isPartial) {\n    return false;\n  }\n  var index = objLength;\n  while (index--) {\n    var key = objProps[index];\n    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {\n      return false;\n    }\n  }\n  // Check that cyclic values are equal.\n  var objStacked = stack.get(object);\n  var othStacked = stack.get(other);\n  if (objStacked && othStacked) {\n    return objStacked == other && othStacked == object;\n  }\n  var result = true;\n  stack.set(object, other);\n  stack.set(other, object);\n\n  var skipCtor = isPartial;\n  while (++index < objLength) {\n    key = objProps[index];\n    var objValue = object[key],\n        othValue = other[key];\n\n    if (customizer) {\n      var compared = isPartial\n        ? customizer(othValue, objValue, key, other, object, stack)\n        : customizer(objValue, othValue, key, object, other, stack);\n    }\n    // Recursively compare objects (susceptible to call stack limits).\n    if (!(compared === undefined\n          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))\n          : compared\n        )) {\n      result = false;\n      break;\n    }\n    skipCtor || (skipCtor = key == 'constructor');\n  }\n  if (result && !skipCtor) {\n    var objCtor = object.constructor,\n        othCtor = other.constructor;\n\n    // Non `Object` object instances with different constructors are not equal.\n    if (objCtor != othCtor &&\n        ('constructor' in object && 'constructor' in other) &&\n        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&\n          typeof othCtor == 'function' && othCtor instanceof othCtor)) {\n      result = false;\n    }\n  }\n  stack['delete'](object);\n  stack['delete'](other);\n  return result;\n}\n\nmodule.exports = equalObjects;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_equalObjects.js?");

/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/** Detect free variable `global` from Node.js. */\nvar freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;\n\nmodule.exports = freeGlobal;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_freeGlobal.js?");

/***/ }),

/***/ "./node_modules/lodash/_getAllKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getAllKeys.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ \"./node_modules/lodash/_baseGetAllKeys.js\"),\n    getSymbols = __webpack_require__(/*! ./_getSymbols */ \"./node_modules/lodash/_getSymbols.js\"),\n    keys = __webpack_require__(/*! ./keys */ \"./node_modules/lodash/keys.js\");\n\n/**\n * Creates an array of own enumerable property names and symbols of `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names and symbols.\n */\nfunction getAllKeys(object) {\n  return baseGetAllKeys(object, keys, getSymbols);\n}\n\nmodule.exports = getAllKeys;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_getAllKeys.js?");

/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isKeyable = __webpack_require__(/*! ./_isKeyable */ \"./node_modules/lodash/_isKeyable.js\");\n\n/**\n * Gets the data for `map`.\n *\n * @private\n * @param {Object} map The map to query.\n * @param {string} key The reference key.\n * @returns {*} Returns the map data.\n */\nfunction getMapData(map, key) {\n  var data = map.__data__;\n  return isKeyable(key)\n    ? data[typeof key == 'string' ? 'string' : 'hash']\n    : data.map;\n}\n\nmodule.exports = getMapData;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_getMapData.js?");

/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ \"./node_modules/lodash/_baseIsNative.js\"),\n    getValue = __webpack_require__(/*! ./_getValue */ \"./node_modules/lodash/_getValue.js\");\n\n/**\n * Gets the native function at `key` of `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @param {string} key The key of the method to get.\n * @returns {*} Returns the function if it's native, else `undefined`.\n */\nfunction getNative(object, key) {\n  var value = getValue(object, key);\n  return baseIsNative(value) ? value : undefined;\n}\n\nmodule.exports = getNative;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_getNative.js?");

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar nativeObjectToString = objectProto.toString;\n\n/** Built-in value references. */\nvar symToStringTag = Symbol ? Symbol.toStringTag : undefined;\n\n/**\n * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the raw `toStringTag`.\n */\nfunction getRawTag(value) {\n  var isOwn = hasOwnProperty.call(value, symToStringTag),\n      tag = value[symToStringTag];\n\n  try {\n    value[symToStringTag] = undefined;\n    var unmasked = true;\n  } catch (e) {}\n\n  var result = nativeObjectToString.call(value);\n  if (unmasked) {\n    if (isOwn) {\n      value[symToStringTag] = tag;\n    } else {\n      delete value[symToStringTag];\n    }\n  }\n  return result;\n}\n\nmodule.exports = getRawTag;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_getRawTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_getSymbols.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getSymbols.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ \"./node_modules/lodash/_arrayFilter.js\"),\n    stubArray = __webpack_require__(/*! ./stubArray */ \"./node_modules/lodash/stubArray.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Built-in value references. */\nvar propertyIsEnumerable = objectProto.propertyIsEnumerable;\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeGetSymbols = Object.getOwnPropertySymbols;\n\n/**\n * Creates an array of the own enumerable symbols of `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of symbols.\n */\nvar getSymbols = !nativeGetSymbols ? stubArray : function(object) {\n  if (object == null) {\n    return [];\n  }\n  object = Object(object);\n  return arrayFilter(nativeGetSymbols(object), function(symbol) {\n    return propertyIsEnumerable.call(object, symbol);\n  });\n};\n\nmodule.exports = getSymbols;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_getSymbols.js?");

/***/ }),

/***/ "./node_modules/lodash/_getTag.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_getTag.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var DataView = __webpack_require__(/*! ./_DataView */ \"./node_modules/lodash/_DataView.js\"),\n    Map = __webpack_require__(/*! ./_Map */ \"./node_modules/lodash/_Map.js\"),\n    Promise = __webpack_require__(/*! ./_Promise */ \"./node_modules/lodash/_Promise.js\"),\n    Set = __webpack_require__(/*! ./_Set */ \"./node_modules/lodash/_Set.js\"),\n    WeakMap = __webpack_require__(/*! ./_WeakMap */ \"./node_modules/lodash/_WeakMap.js\"),\n    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    toSource = __webpack_require__(/*! ./_toSource */ \"./node_modules/lodash/_toSource.js\");\n\n/** `Object#toString` result references. */\nvar mapTag = '[object Map]',\n    objectTag = '[object Object]',\n    promiseTag = '[object Promise]',\n    setTag = '[object Set]',\n    weakMapTag = '[object WeakMap]';\n\nvar dataViewTag = '[object DataView]';\n\n/** Used to detect maps, sets, and weakmaps. */\nvar dataViewCtorString = toSource(DataView),\n    mapCtorString = toSource(Map),\n    promiseCtorString = toSource(Promise),\n    setCtorString = toSource(Set),\n    weakMapCtorString = toSource(WeakMap);\n\n/**\n * Gets the `toStringTag` of `value`.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the `toStringTag`.\n */\nvar getTag = baseGetTag;\n\n// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.\nif ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||\n    (Map && getTag(new Map) != mapTag) ||\n    (Promise && getTag(Promise.resolve()) != promiseTag) ||\n    (Set && getTag(new Set) != setTag) ||\n    (WeakMap && getTag(new WeakMap) != weakMapTag)) {\n  getTag = function(value) {\n    var result = baseGetTag(value),\n        Ctor = result == objectTag ? value.constructor : undefined,\n        ctorString = Ctor ? toSource(Ctor) : '';\n\n    if (ctorString) {\n      switch (ctorString) {\n        case dataViewCtorString: return dataViewTag;\n        case mapCtorString: return mapTag;\n        case promiseCtorString: return promiseTag;\n        case setCtorString: return setTag;\n        case weakMapCtorString: return weakMapTag;\n      }\n    }\n    return result;\n  };\n}\n\nmodule.exports = getTag;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_getTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/***/ ((module) => {

eval("/**\n * Gets the value at `key` of `object`.\n *\n * @private\n * @param {Object} [object] The object to query.\n * @param {string} key The key of the property to get.\n * @returns {*} Returns the property value.\n */\nfunction getValue(object, key) {\n  return object == null ? undefined : object[key];\n}\n\nmodule.exports = getValue;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_getValue.js?");

/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ \"./node_modules/lodash/_nativeCreate.js\");\n\n/**\n * Removes all key-value entries from the hash.\n *\n * @private\n * @name clear\n * @memberOf Hash\n */\nfunction hashClear() {\n  this.__data__ = nativeCreate ? nativeCreate(null) : {};\n  this.size = 0;\n}\n\nmodule.exports = hashClear;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_hashClear.js?");

/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/***/ ((module) => {

eval("/**\n * Removes `key` and its value from the hash.\n *\n * @private\n * @name delete\n * @memberOf Hash\n * @param {Object} hash The hash to modify.\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction hashDelete(key) {\n  var result = this.has(key) && delete this.__data__[key];\n  this.size -= result ? 1 : 0;\n  return result;\n}\n\nmodule.exports = hashDelete;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_hashDelete.js?");

/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ \"./node_modules/lodash/_nativeCreate.js\");\n\n/** Used to stand-in for `undefined` hash values. */\nvar HASH_UNDEFINED = '__lodash_hash_undefined__';\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Gets the hash value for `key`.\n *\n * @private\n * @name get\n * @memberOf Hash\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\nfunction hashGet(key) {\n  var data = this.__data__;\n  if (nativeCreate) {\n    var result = data[key];\n    return result === HASH_UNDEFINED ? undefined : result;\n  }\n  return hasOwnProperty.call(data, key) ? data[key] : undefined;\n}\n\nmodule.exports = hashGet;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_hashGet.js?");

/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ \"./node_modules/lodash/_nativeCreate.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Checks if a hash value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf Hash\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction hashHas(key) {\n  var data = this.__data__;\n  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);\n}\n\nmodule.exports = hashHas;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_hashHas.js?");

/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ \"./node_modules/lodash/_nativeCreate.js\");\n\n/** Used to stand-in for `undefined` hash values. */\nvar HASH_UNDEFINED = '__lodash_hash_undefined__';\n\n/**\n * Sets the hash `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf Hash\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the hash instance.\n */\nfunction hashSet(key, value) {\n  var data = this.__data__;\n  this.size += this.has(key) ? 0 : 1;\n  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;\n  return this;\n}\n\nmodule.exports = hashSet;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_hashSet.js?");

/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/***/ ((module) => {

eval("/** Used as references for various `Number` constants. */\nvar MAX_SAFE_INTEGER = 9007199254740991;\n\n/** Used to detect unsigned integer values. */\nvar reIsUint = /^(?:0|[1-9]\\d*)$/;\n\n/**\n * Checks if `value` is a valid array-like index.\n *\n * @private\n * @param {*} value The value to check.\n * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.\n * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.\n */\nfunction isIndex(value, length) {\n  var type = typeof value;\n  length = length == null ? MAX_SAFE_INTEGER : length;\n\n  return !!length &&\n    (type == 'number' ||\n      (type != 'symbol' && reIsUint.test(value))) &&\n        (value > -1 && value % 1 == 0 && value < length);\n}\n\nmodule.exports = isIndex;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_isIndex.js?");

/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/***/ ((module) => {

eval("/**\n * Checks if `value` is suitable for use as unique object key.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is suitable, else `false`.\n */\nfunction isKeyable(value) {\n  var type = typeof value;\n  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')\n    ? (value !== '__proto__')\n    : (value === null);\n}\n\nmodule.exports = isKeyable;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_isKeyable.js?");

/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var coreJsData = __webpack_require__(/*! ./_coreJsData */ \"./node_modules/lodash/_coreJsData.js\");\n\n/** Used to detect methods masquerading as native. */\nvar maskSrcKey = (function() {\n  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');\n  return uid ? ('Symbol(src)_1.' + uid) : '';\n}());\n\n/**\n * Checks if `func` has its source masked.\n *\n * @private\n * @param {Function} func The function to check.\n * @returns {boolean} Returns `true` if `func` is masked, else `false`.\n */\nfunction isMasked(func) {\n  return !!maskSrcKey && (maskSrcKey in func);\n}\n\nmodule.exports = isMasked;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_isMasked.js?");

/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/***/ ((module) => {

eval("/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/**\n * Checks if `value` is likely a prototype object.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.\n */\nfunction isPrototype(value) {\n  var Ctor = value && value.constructor,\n      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;\n\n  return value === proto;\n}\n\nmodule.exports = isPrototype;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_isPrototype.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/***/ ((module) => {

eval("/**\n * Removes all key-value entries from the list cache.\n *\n * @private\n * @name clear\n * @memberOf ListCache\n */\nfunction listCacheClear() {\n  this.__data__ = [];\n  this.size = 0;\n}\n\nmodule.exports = listCacheClear;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_listCacheClear.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ \"./node_modules/lodash/_assocIndexOf.js\");\n\n/** Used for built-in method references. */\nvar arrayProto = Array.prototype;\n\n/** Built-in value references. */\nvar splice = arrayProto.splice;\n\n/**\n * Removes `key` and its value from the list cache.\n *\n * @private\n * @name delete\n * @memberOf ListCache\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction listCacheDelete(key) {\n  var data = this.__data__,\n      index = assocIndexOf(data, key);\n\n  if (index < 0) {\n    return false;\n  }\n  var lastIndex = data.length - 1;\n  if (index == lastIndex) {\n    data.pop();\n  } else {\n    splice.call(data, index, 1);\n  }\n  --this.size;\n  return true;\n}\n\nmodule.exports = listCacheDelete;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_listCacheDelete.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ \"./node_modules/lodash/_assocIndexOf.js\");\n\n/**\n * Gets the list cache value for `key`.\n *\n * @private\n * @name get\n * @memberOf ListCache\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\nfunction listCacheGet(key) {\n  var data = this.__data__,\n      index = assocIndexOf(data, key);\n\n  return index < 0 ? undefined : data[index][1];\n}\n\nmodule.exports = listCacheGet;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_listCacheGet.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ \"./node_modules/lodash/_assocIndexOf.js\");\n\n/**\n * Checks if a list cache value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf ListCache\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction listCacheHas(key) {\n  return assocIndexOf(this.__data__, key) > -1;\n}\n\nmodule.exports = listCacheHas;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_listCacheHas.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ \"./node_modules/lodash/_assocIndexOf.js\");\n\n/**\n * Sets the list cache `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf ListCache\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the list cache instance.\n */\nfunction listCacheSet(key, value) {\n  var data = this.__data__,\n      index = assocIndexOf(data, key);\n\n  if (index < 0) {\n    ++this.size;\n    data.push([key, value]);\n  } else {\n    data[index][1] = value;\n  }\n  return this;\n}\n\nmodule.exports = listCacheSet;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_listCacheSet.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var Hash = __webpack_require__(/*! ./_Hash */ \"./node_modules/lodash/_Hash.js\"),\n    ListCache = __webpack_require__(/*! ./_ListCache */ \"./node_modules/lodash/_ListCache.js\"),\n    Map = __webpack_require__(/*! ./_Map */ \"./node_modules/lodash/_Map.js\");\n\n/**\n * Removes all key-value entries from the map.\n *\n * @private\n * @name clear\n * @memberOf MapCache\n */\nfunction mapCacheClear() {\n  this.size = 0;\n  this.__data__ = {\n    'hash': new Hash,\n    'map': new (Map || ListCache),\n    'string': new Hash\n  };\n}\n\nmodule.exports = mapCacheClear;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_mapCacheClear.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getMapData = __webpack_require__(/*! ./_getMapData */ \"./node_modules/lodash/_getMapData.js\");\n\n/**\n * Removes `key` and its value from the map.\n *\n * @private\n * @name delete\n * @memberOf MapCache\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction mapCacheDelete(key) {\n  var result = getMapData(this, key)['delete'](key);\n  this.size -= result ? 1 : 0;\n  return result;\n}\n\nmodule.exports = mapCacheDelete;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_mapCacheDelete.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getMapData = __webpack_require__(/*! ./_getMapData */ \"./node_modules/lodash/_getMapData.js\");\n\n/**\n * Gets the map value for `key`.\n *\n * @private\n * @name get\n * @memberOf MapCache\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\nfunction mapCacheGet(key) {\n  return getMapData(this, key).get(key);\n}\n\nmodule.exports = mapCacheGet;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_mapCacheGet.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getMapData = __webpack_require__(/*! ./_getMapData */ \"./node_modules/lodash/_getMapData.js\");\n\n/**\n * Checks if a map value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf MapCache\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction mapCacheHas(key) {\n  return getMapData(this, key).has(key);\n}\n\nmodule.exports = mapCacheHas;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_mapCacheHas.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getMapData = __webpack_require__(/*! ./_getMapData */ \"./node_modules/lodash/_getMapData.js\");\n\n/**\n * Sets the map `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf MapCache\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the map cache instance.\n */\nfunction mapCacheSet(key, value) {\n  var data = getMapData(this, key),\n      size = data.size;\n\n  data.set(key, value);\n  this.size += data.size == size ? 0 : 1;\n  return this;\n}\n\nmodule.exports = mapCacheSet;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_mapCacheSet.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_mapToArray.js ***!
  \********************************************/
/***/ ((module) => {

eval("/**\n * Converts `map` to its key-value pairs.\n *\n * @private\n * @param {Object} map The map to convert.\n * @returns {Array} Returns the key-value pairs.\n */\nfunction mapToArray(map) {\n  var index = -1,\n      result = Array(map.size);\n\n  map.forEach(function(value, key) {\n    result[++index] = [key, value];\n  });\n  return result;\n}\n\nmodule.exports = mapToArray;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_mapToArray.js?");

/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getNative = __webpack_require__(/*! ./_getNative */ \"./node_modules/lodash/_getNative.js\");\n\n/* Built-in method references that are verified to be native. */\nvar nativeCreate = getNative(Object, 'create');\n\nmodule.exports = nativeCreate;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_nativeCreate.js?");

/***/ }),

/***/ "./node_modules/lodash/_nativeKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var overArg = __webpack_require__(/*! ./_overArg */ \"./node_modules/lodash/_overArg.js\");\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeKeys = overArg(Object.keys, Object);\n\nmodule.exports = nativeKeys;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_nativeKeys.js?");

/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nvar freeGlobal = __webpack_require__(/*! ./_freeGlobal */ \"./node_modules/lodash/_freeGlobal.js\");\n\n/** Detect free variable `exports`. */\nvar freeExports =  true && exports && !exports.nodeType && exports;\n\n/** Detect free variable `module`. */\nvar freeModule = freeExports && \"object\" == 'object' && module && !module.nodeType && module;\n\n/** Detect the popular CommonJS extension `module.exports`. */\nvar moduleExports = freeModule && freeModule.exports === freeExports;\n\n/** Detect free variable `process` from Node.js. */\nvar freeProcess = moduleExports && freeGlobal.process;\n\n/** Used to access faster Node.js helpers. */\nvar nodeUtil = (function() {\n  try {\n    // Use `util.types` for Node.js 10+.\n    var types = freeModule && freeModule.require && freeModule.require('util').types;\n\n    if (types) {\n      return types;\n    }\n\n    // Legacy `process.binding('util')` for Node.js < 10.\n    return freeProcess && freeProcess.binding && freeProcess.binding('util');\n  } catch (e) {}\n}());\n\nmodule.exports = nodeUtil;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_nodeUtil.js?");

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/***/ ((module) => {

eval("/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar nativeObjectToString = objectProto.toString;\n\n/**\n * Converts `value` to a string using `Object.prototype.toString`.\n *\n * @private\n * @param {*} value The value to convert.\n * @returns {string} Returns the converted string.\n */\nfunction objectToString(value) {\n  return nativeObjectToString.call(value);\n}\n\nmodule.exports = objectToString;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_objectToString.js?");

/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/***/ ((module) => {

eval("/**\n * Creates a unary function that invokes `func` with its argument transformed.\n *\n * @private\n * @param {Function} func The function to wrap.\n * @param {Function} transform The argument transform.\n * @returns {Function} Returns the new function.\n */\nfunction overArg(func, transform) {\n  return function(arg) {\n    return func(transform(arg));\n  };\n}\n\nmodule.exports = overArg;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_overArg.js?");

/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ \"./node_modules/lodash/_freeGlobal.js\");\n\n/** Detect free variable `self`. */\nvar freeSelf = typeof self == 'object' && self && self.Object === Object && self;\n\n/** Used as a reference to the global object. */\nvar root = freeGlobal || freeSelf || Function('return this')();\n\nmodule.exports = root;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_root.js?");

/***/ }),

/***/ "./node_modules/lodash/_setCacheAdd.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheAdd.js ***!
  \*********************************************/
/***/ ((module) => {

eval("/** Used to stand-in for `undefined` hash values. */\nvar HASH_UNDEFINED = '__lodash_hash_undefined__';\n\n/**\n * Adds `value` to the array cache.\n *\n * @private\n * @name add\n * @memberOf SetCache\n * @alias push\n * @param {*} value The value to cache.\n * @returns {Object} Returns the cache instance.\n */\nfunction setCacheAdd(value) {\n  this.__data__.set(value, HASH_UNDEFINED);\n  return this;\n}\n\nmodule.exports = setCacheAdd;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_setCacheAdd.js?");

/***/ }),

/***/ "./node_modules/lodash/_setCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheHas.js ***!
  \*********************************************/
/***/ ((module) => {

eval("/**\n * Checks if `value` is in the array cache.\n *\n * @private\n * @name has\n * @memberOf SetCache\n * @param {*} value The value to search for.\n * @returns {number} Returns `true` if `value` is found, else `false`.\n */\nfunction setCacheHas(value) {\n  return this.__data__.has(value);\n}\n\nmodule.exports = setCacheHas;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_setCacheHas.js?");

/***/ }),

/***/ "./node_modules/lodash/_setToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_setToArray.js ***!
  \********************************************/
/***/ ((module) => {

eval("/**\n * Converts `set` to an array of its values.\n *\n * @private\n * @param {Object} set The set to convert.\n * @returns {Array} Returns the values.\n */\nfunction setToArray(set) {\n  var index = -1,\n      result = Array(set.size);\n\n  set.forEach(function(value) {\n    result[++index] = value;\n  });\n  return result;\n}\n\nmodule.exports = setToArray;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_setToArray.js?");

/***/ }),

/***/ "./node_modules/lodash/_stackClear.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stackClear.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var ListCache = __webpack_require__(/*! ./_ListCache */ \"./node_modules/lodash/_ListCache.js\");\n\n/**\n * Removes all key-value entries from the stack.\n *\n * @private\n * @name clear\n * @memberOf Stack\n */\nfunction stackClear() {\n  this.__data__ = new ListCache;\n  this.size = 0;\n}\n\nmodule.exports = stackClear;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_stackClear.js?");

/***/ }),

/***/ "./node_modules/lodash/_stackDelete.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_stackDelete.js ***!
  \*********************************************/
/***/ ((module) => {

eval("/**\n * Removes `key` and its value from the stack.\n *\n * @private\n * @name delete\n * @memberOf Stack\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction stackDelete(key) {\n  var data = this.__data__,\n      result = data['delete'](key);\n\n  this.size = data.size;\n  return result;\n}\n\nmodule.exports = stackDelete;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_stackDelete.js?");

/***/ }),

/***/ "./node_modules/lodash/_stackGet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackGet.js ***!
  \******************************************/
/***/ ((module) => {

eval("/**\n * Gets the stack value for `key`.\n *\n * @private\n * @name get\n * @memberOf Stack\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\nfunction stackGet(key) {\n  return this.__data__.get(key);\n}\n\nmodule.exports = stackGet;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_stackGet.js?");

/***/ }),

/***/ "./node_modules/lodash/_stackHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackHas.js ***!
  \******************************************/
/***/ ((module) => {

eval("/**\n * Checks if a stack value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf Stack\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction stackHas(key) {\n  return this.__data__.has(key);\n}\n\nmodule.exports = stackHas;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_stackHas.js?");

/***/ }),

/***/ "./node_modules/lodash/_stackSet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackSet.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var ListCache = __webpack_require__(/*! ./_ListCache */ \"./node_modules/lodash/_ListCache.js\"),\n    Map = __webpack_require__(/*! ./_Map */ \"./node_modules/lodash/_Map.js\"),\n    MapCache = __webpack_require__(/*! ./_MapCache */ \"./node_modules/lodash/_MapCache.js\");\n\n/** Used as the size to enable large array optimizations. */\nvar LARGE_ARRAY_SIZE = 200;\n\n/**\n * Sets the stack `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf Stack\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the stack cache instance.\n */\nfunction stackSet(key, value) {\n  var data = this.__data__;\n  if (data instanceof ListCache) {\n    var pairs = data.__data__;\n    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {\n      pairs.push([key, value]);\n      this.size = ++data.size;\n      return this;\n    }\n    data = this.__data__ = new MapCache(pairs);\n  }\n  data.set(key, value);\n  this.size = data.size;\n  return this;\n}\n\nmodule.exports = stackSet;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_stackSet.js?");

/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/***/ ((module) => {

eval("/** Used for built-in method references. */\nvar funcProto = Function.prototype;\n\n/** Used to resolve the decompiled source of functions. */\nvar funcToString = funcProto.toString;\n\n/**\n * Converts `func` to its source code.\n *\n * @private\n * @param {Function} func The function to convert.\n * @returns {string} Returns the source code.\n */\nfunction toSource(func) {\n  if (func != null) {\n    try {\n      return funcToString.call(func);\n    } catch (e) {}\n    try {\n      return (func + '');\n    } catch (e) {}\n  }\n  return '';\n}\n\nmodule.exports = toSource;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/_toSource.js?");

/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/***/ ((module) => {

eval("/**\n * Performs a\n * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)\n * comparison between two values to determine if they are equivalent.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to compare.\n * @param {*} other The other value to compare.\n * @returns {boolean} Returns `true` if the values are equivalent, else `false`.\n * @example\n *\n * var object = { 'a': 1 };\n * var other = { 'a': 1 };\n *\n * _.eq(object, object);\n * // => true\n *\n * _.eq(object, other);\n * // => false\n *\n * _.eq('a', 'a');\n * // => true\n *\n * _.eq('a', Object('a'));\n * // => false\n *\n * _.eq(NaN, NaN);\n * // => true\n */\nfunction eq(value, other) {\n  return value === other || (value !== value && other !== other);\n}\n\nmodule.exports = eq;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/eq.js?");

/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ \"./node_modules/lodash/_baseIsArguments.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/** Built-in value references. */\nvar propertyIsEnumerable = objectProto.propertyIsEnumerable;\n\n/**\n * Checks if `value` is likely an `arguments` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an `arguments` object,\n *  else `false`.\n * @example\n *\n * _.isArguments(function() { return arguments; }());\n * // => true\n *\n * _.isArguments([1, 2, 3]);\n * // => false\n */\nvar isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {\n  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&\n    !propertyIsEnumerable.call(value, 'callee');\n};\n\nmodule.exports = isArguments;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/isArguments.js?");

/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/***/ ((module) => {

eval("/**\n * Checks if `value` is classified as an `Array` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an array, else `false`.\n * @example\n *\n * _.isArray([1, 2, 3]);\n * // => true\n *\n * _.isArray(document.body.children);\n * // => false\n *\n * _.isArray('abc');\n * // => false\n *\n * _.isArray(_.noop);\n * // => false\n */\nvar isArray = Array.isArray;\n\nmodule.exports = isArray;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/isArray.js?");

/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isFunction = __webpack_require__(/*! ./isFunction */ \"./node_modules/lodash/isFunction.js\"),\n    isLength = __webpack_require__(/*! ./isLength */ \"./node_modules/lodash/isLength.js\");\n\n/**\n * Checks if `value` is array-like. A value is considered array-like if it's\n * not a function and has a `value.length` that's an integer greater than or\n * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is array-like, else `false`.\n * @example\n *\n * _.isArrayLike([1, 2, 3]);\n * // => true\n *\n * _.isArrayLike(document.body.children);\n * // => true\n *\n * _.isArrayLike('abc');\n * // => true\n *\n * _.isArrayLike(_.noop);\n * // => false\n */\nfunction isArrayLike(value) {\n  return value != null && isLength(value.length) && !isFunction(value);\n}\n\nmodule.exports = isArrayLike;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/isArrayLike.js?");

/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nvar root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\"),\n    stubFalse = __webpack_require__(/*! ./stubFalse */ \"./node_modules/lodash/stubFalse.js\");\n\n/** Detect free variable `exports`. */\nvar freeExports =  true && exports && !exports.nodeType && exports;\n\n/** Detect free variable `module`. */\nvar freeModule = freeExports && \"object\" == 'object' && module && !module.nodeType && module;\n\n/** Detect the popular CommonJS extension `module.exports`. */\nvar moduleExports = freeModule && freeModule.exports === freeExports;\n\n/** Built-in value references. */\nvar Buffer = moduleExports ? root.Buffer : undefined;\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;\n\n/**\n * Checks if `value` is a buffer.\n *\n * @static\n * @memberOf _\n * @since 4.3.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.\n * @example\n *\n * _.isBuffer(new Buffer(2));\n * // => true\n *\n * _.isBuffer(new Uint8Array(2));\n * // => false\n */\nvar isBuffer = nativeIsBuffer || stubFalse;\n\nmodule.exports = isBuffer;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/isBuffer.js?");

/***/ }),

/***/ "./node_modules/lodash/isEqual.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isEqual.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ \"./node_modules/lodash/_baseIsEqual.js\");\n\n/**\n * Performs a deep comparison between two values to determine if they are\n * equivalent.\n *\n * **Note:** This method supports comparing arrays, array buffers, booleans,\n * date objects, error objects, maps, numbers, `Object` objects, regexes,\n * sets, strings, symbols, and typed arrays. `Object` objects are compared\n * by their own, not inherited, enumerable properties. Functions and DOM\n * nodes are compared by strict equality, i.e. `===`.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to compare.\n * @param {*} other The other value to compare.\n * @returns {boolean} Returns `true` if the values are equivalent, else `false`.\n * @example\n *\n * var object = { 'a': 1 };\n * var other = { 'a': 1 };\n *\n * _.isEqual(object, other);\n * // => true\n *\n * object === other;\n * // => false\n */\nfunction isEqual(value, other) {\n  return baseIsEqual(value, other);\n}\n\nmodule.exports = isEqual;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/isEqual.js?");

/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\");\n\n/** `Object#toString` result references. */\nvar asyncTag = '[object AsyncFunction]',\n    funcTag = '[object Function]',\n    genTag = '[object GeneratorFunction]',\n    proxyTag = '[object Proxy]';\n\n/**\n * Checks if `value` is classified as a `Function` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a function, else `false`.\n * @example\n *\n * _.isFunction(_);\n * // => true\n *\n * _.isFunction(/abc/);\n * // => false\n */\nfunction isFunction(value) {\n  if (!isObject(value)) {\n    return false;\n  }\n  // The use of `Object#toString` avoids issues with the `typeof` operator\n  // in Safari 9 which returns 'object' for typed arrays and other constructors.\n  var tag = baseGetTag(value);\n  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;\n}\n\nmodule.exports = isFunction;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/isFunction.js?");

/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/***/ ((module) => {

eval("/** Used as references for various `Number` constants. */\nvar MAX_SAFE_INTEGER = 9007199254740991;\n\n/**\n * Checks if `value` is a valid array-like length.\n *\n * **Note:** This method is loosely based on\n * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.\n * @example\n *\n * _.isLength(3);\n * // => true\n *\n * _.isLength(Number.MIN_VALUE);\n * // => false\n *\n * _.isLength(Infinity);\n * // => false\n *\n * _.isLength('3');\n * // => false\n */\nfunction isLength(value) {\n  return typeof value == 'number' &&\n    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;\n}\n\nmodule.exports = isLength;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/isLength.js?");

/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/***/ ((module) => {

eval("/**\n * Checks if `value` is the\n * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)\n * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an object, else `false`.\n * @example\n *\n * _.isObject({});\n * // => true\n *\n * _.isObject([1, 2, 3]);\n * // => true\n *\n * _.isObject(_.noop);\n * // => true\n *\n * _.isObject(null);\n * // => false\n */\nfunction isObject(value) {\n  var type = typeof value;\n  return value != null && (type == 'object' || type == 'function');\n}\n\nmodule.exports = isObject;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/isObject.js?");

/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/***/ ((module) => {

eval("/**\n * Checks if `value` is object-like. A value is object-like if it's not `null`\n * and has a `typeof` result of \"object\".\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is object-like, else `false`.\n * @example\n *\n * _.isObjectLike({});\n * // => true\n *\n * _.isObjectLike([1, 2, 3]);\n * // => true\n *\n * _.isObjectLike(_.noop);\n * // => false\n *\n * _.isObjectLike(null);\n * // => false\n */\nfunction isObjectLike(value) {\n  return value != null && typeof value == 'object';\n}\n\nmodule.exports = isObjectLike;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/isObjectLike.js?");

/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ \"./node_modules/lodash/_baseIsTypedArray.js\"),\n    baseUnary = __webpack_require__(/*! ./_baseUnary */ \"./node_modules/lodash/_baseUnary.js\"),\n    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ \"./node_modules/lodash/_nodeUtil.js\");\n\n/* Node.js helper references. */\nvar nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;\n\n/**\n * Checks if `value` is classified as a typed array.\n *\n * @static\n * @memberOf _\n * @since 3.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.\n * @example\n *\n * _.isTypedArray(new Uint8Array);\n * // => true\n *\n * _.isTypedArray([]);\n * // => false\n */\nvar isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;\n\nmodule.exports = isTypedArray;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/isTypedArray.js?");

/***/ }),

/***/ "./node_modules/lodash/keys.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ \"./node_modules/lodash/_arrayLikeKeys.js\"),\n    baseKeys = __webpack_require__(/*! ./_baseKeys */ \"./node_modules/lodash/_baseKeys.js\"),\n    isArrayLike = __webpack_require__(/*! ./isArrayLike */ \"./node_modules/lodash/isArrayLike.js\");\n\n/**\n * Creates an array of the own enumerable property names of `object`.\n *\n * **Note:** Non-object values are coerced to objects. See the\n * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)\n * for more details.\n *\n * @static\n * @since 0.1.0\n * @memberOf _\n * @category Object\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names.\n * @example\n *\n * function Foo() {\n *   this.a = 1;\n *   this.b = 2;\n * }\n *\n * Foo.prototype.c = 3;\n *\n * _.keys(new Foo);\n * // => ['a', 'b'] (iteration order is not guaranteed)\n *\n * _.keys('hi');\n * // => ['0', '1']\n */\nfunction keys(object) {\n  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);\n}\n\nmodule.exports = keys;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/keys.js?");

/***/ }),

/***/ "./node_modules/lodash/stubArray.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubArray.js ***!
  \******************************************/
/***/ ((module) => {

eval("/**\n * This method returns a new empty array.\n *\n * @static\n * @memberOf _\n * @since 4.13.0\n * @category Util\n * @returns {Array} Returns the new empty array.\n * @example\n *\n * var arrays = _.times(2, _.stubArray);\n *\n * console.log(arrays);\n * // => [[], []]\n *\n * console.log(arrays[0] === arrays[1]);\n * // => false\n */\nfunction stubArray() {\n  return [];\n}\n\nmodule.exports = stubArray;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/stubArray.js?");

/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/***/ ((module) => {

eval("/**\n * This method returns `false`.\n *\n * @static\n * @memberOf _\n * @since 4.13.0\n * @category Util\n * @returns {boolean} Returns `false`.\n * @example\n *\n * _.times(2, _.stubFalse);\n * // => [false, false]\n */\nfunction stubFalse() {\n  return false;\n}\n\nmodule.exports = stubFalse;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/lodash/stubFalse.js?");

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
eval("/*\nobject-assign\n(c) Sindre Sorhus\n@license MIT\n*/\n\n\n/* eslint-disable no-unused-vars */\nvar getOwnPropertySymbols = Object.getOwnPropertySymbols;\nvar hasOwnProperty = Object.prototype.hasOwnProperty;\nvar propIsEnumerable = Object.prototype.propertyIsEnumerable;\n\nfunction toObject(val) {\n\tif (val === null || val === undefined) {\n\t\tthrow new TypeError('Object.assign cannot be called with null or undefined');\n\t}\n\n\treturn Object(val);\n}\n\nfunction shouldUseNative() {\n\ttry {\n\t\tif (!Object.assign) {\n\t\t\treturn false;\n\t\t}\n\n\t\t// Detect buggy property enumeration order in older V8 versions.\n\n\t\t// https://bugs.chromium.org/p/v8/issues/detail?id=4118\n\t\tvar test1 = new String('abc');  // eslint-disable-line no-new-wrappers\n\t\ttest1[5] = 'de';\n\t\tif (Object.getOwnPropertyNames(test1)[0] === '5') {\n\t\t\treturn false;\n\t\t}\n\n\t\t// https://bugs.chromium.org/p/v8/issues/detail?id=3056\n\t\tvar test2 = {};\n\t\tfor (var i = 0; i < 10; i++) {\n\t\t\ttest2['_' + String.fromCharCode(i)] = i;\n\t\t}\n\t\tvar order2 = Object.getOwnPropertyNames(test2).map(function (n) {\n\t\t\treturn test2[n];\n\t\t});\n\t\tif (order2.join('') !== '0123456789') {\n\t\t\treturn false;\n\t\t}\n\n\t\t// https://bugs.chromium.org/p/v8/issues/detail?id=3056\n\t\tvar test3 = {};\n\t\t'abcdefghijklmnopqrst'.split('').forEach(function (letter) {\n\t\t\ttest3[letter] = letter;\n\t\t});\n\t\tif (Object.keys(Object.assign({}, test3)).join('') !==\n\t\t\t\t'abcdefghijklmnopqrst') {\n\t\t\treturn false;\n\t\t}\n\n\t\treturn true;\n\t} catch (err) {\n\t\t// We don't expect any of the above to throw, but better to be safe.\n\t\treturn false;\n\t}\n}\n\nmodule.exports = shouldUseNative() ? Object.assign : function (target, source) {\n\tvar from;\n\tvar to = toObject(target);\n\tvar symbols;\n\n\tfor (var s = 1; s < arguments.length; s++) {\n\t\tfrom = Object(arguments[s]);\n\n\t\tfor (var key in from) {\n\t\t\tif (hasOwnProperty.call(from, key)) {\n\t\t\t\tto[key] = from[key];\n\t\t\t}\n\t\t}\n\n\t\tif (getOwnPropertySymbols) {\n\t\t\tsymbols = getOwnPropertySymbols(from);\n\t\t\tfor (var i = 0; i < symbols.length; i++) {\n\t\t\t\tif (propIsEnumerable.call(from, symbols[i])) {\n\t\t\t\t\tto[symbols[i]] = from[symbols[i]];\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\treturn to;\n};\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/object-assign/index.js?");

/***/ }),

/***/ "./node_modules/performance-now/lib/performance-now.js":
/*!*************************************************************!*\
  !*** ./node_modules/performance-now/lib/performance-now.js ***!
  \*************************************************************/
/***/ (function(module) {

eval("// Generated by CoffeeScript 1.12.2\n(function() {\n  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;\n\n  if ((typeof performance !== \"undefined\" && performance !== null) && performance.now) {\n    module.exports = function() {\n      return performance.now();\n    };\n  } else if ((typeof process !== \"undefined\" && process !== null) && process.hrtime) {\n    module.exports = function() {\n      return (getNanoSeconds() - nodeLoadTime) / 1e6;\n    };\n    hrtime = process.hrtime;\n    getNanoSeconds = function() {\n      var hr;\n      hr = hrtime();\n      return hr[0] * 1e9 + hr[1];\n    };\n    moduleLoadTime = getNanoSeconds();\n    upTime = process.uptime() * 1e9;\n    nodeLoadTime = moduleLoadTime - upTime;\n  } else if (Date.now) {\n    module.exports = function() {\n      return Date.now() - loadTime;\n    };\n    loadTime = Date.now();\n  } else {\n    module.exports = function() {\n      return new Date().getTime() - loadTime;\n    };\n    loadTime = new Date().getTime();\n  }\n\n}).call(this);\n\n//# sourceMappingURL=performance-now.js.map\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/performance-now/lib/performance-now.js?");

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\nvar printWarning = function() {};\n\nif (true) {\n  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ \"./node_modules/prop-types/lib/ReactPropTypesSecret.js\");\n  var loggedTypeFailures = {};\n  var has = Function.call.bind(Object.prototype.hasOwnProperty);\n\n  printWarning = function(text) {\n    var message = 'Warning: ' + text;\n    if (typeof console !== 'undefined') {\n      console.error(message);\n    }\n    try {\n      // --- Welcome to debugging React ---\n      // This error was thrown as a convenience so that you can use this stack\n      // to find the callsite that caused this warning to fire.\n      throw new Error(message);\n    } catch (x) {}\n  };\n}\n\n/**\n * Assert that the values match with the type specs.\n * Error messages are memorized and will only be shown once.\n *\n * @param {object} typeSpecs Map of name to a ReactPropType\n * @param {object} values Runtime values that need to be type-checked\n * @param {string} location e.g. \"prop\", \"context\", \"child context\"\n * @param {string} componentName Name of the component for error messages.\n * @param {?Function} getStack Returns the component stack.\n * @private\n */\nfunction checkPropTypes(typeSpecs, values, location, componentName, getStack) {\n  if (true) {\n    for (var typeSpecName in typeSpecs) {\n      if (has(typeSpecs, typeSpecName)) {\n        var error;\n        // Prop type validation may throw. In case they do, we don't want to\n        // fail the render phase where it didn't fail before. So we log it.\n        // After these have been cleaned up, we'll let them throw.\n        try {\n          // This is intentionally an invariant that gets caught. It's the same\n          // behavior as without this statement except with a better message.\n          if (typeof typeSpecs[typeSpecName] !== 'function') {\n            var err = Error(\n              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +\n              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'\n            );\n            err.name = 'Invariant Violation';\n            throw err;\n          }\n          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);\n        } catch (ex) {\n          error = ex;\n        }\n        if (error && !(error instanceof Error)) {\n          printWarning(\n            (componentName || 'React class') + ': type specification of ' +\n            location + ' `' + typeSpecName + '` is invalid; the type checker ' +\n            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +\n            'You may have forgotten to pass an argument to the type checker ' +\n            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +\n            'shape all require an argument).'\n          );\n        }\n        if (error instanceof Error && !(error.message in loggedTypeFailures)) {\n          // Only monitor this failure once because there tends to be a lot of the\n          // same error.\n          loggedTypeFailures[error.message] = true;\n\n          var stack = getStack ? getStack() : '';\n\n          printWarning(\n            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')\n          );\n        }\n      }\n    }\n  }\n}\n\n/**\n * Resets warning cache when testing.\n *\n * @private\n */\ncheckPropTypes.resetWarningCache = function() {\n  if (true) {\n    loggedTypeFailures = {};\n  }\n}\n\nmodule.exports = checkPropTypes;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/prop-types/checkPropTypes.js?");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\nvar ReactIs = __webpack_require__(/*! react-is */ \"./node_modules/prop-types/node_modules/react-is/index.js\");\nvar assign = __webpack_require__(/*! object-assign */ \"./node_modules/object-assign/index.js\");\n\nvar ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ \"./node_modules/prop-types/lib/ReactPropTypesSecret.js\");\nvar checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ \"./node_modules/prop-types/checkPropTypes.js\");\n\nvar has = Function.call.bind(Object.prototype.hasOwnProperty);\nvar printWarning = function() {};\n\nif (true) {\n  printWarning = function(text) {\n    var message = 'Warning: ' + text;\n    if (typeof console !== 'undefined') {\n      console.error(message);\n    }\n    try {\n      // --- Welcome to debugging React ---\n      // This error was thrown as a convenience so that you can use this stack\n      // to find the callsite that caused this warning to fire.\n      throw new Error(message);\n    } catch (x) {}\n  };\n}\n\nfunction emptyFunctionThatReturnsNull() {\n  return null;\n}\n\nmodule.exports = function(isValidElement, throwOnDirectAccess) {\n  /* global Symbol */\n  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;\n  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.\n\n  /**\n   * Returns the iterator method function contained on the iterable object.\n   *\n   * Be sure to invoke the function with the iterable as context:\n   *\n   *     var iteratorFn = getIteratorFn(myIterable);\n   *     if (iteratorFn) {\n   *       var iterator = iteratorFn.call(myIterable);\n   *       ...\n   *     }\n   *\n   * @param {?object} maybeIterable\n   * @return {?function}\n   */\n  function getIteratorFn(maybeIterable) {\n    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);\n    if (typeof iteratorFn === 'function') {\n      return iteratorFn;\n    }\n  }\n\n  /**\n   * Collection of methods that allow declaration and validation of props that are\n   * supplied to React components. Example usage:\n   *\n   *   var Props = require('ReactPropTypes');\n   *   var MyArticle = React.createClass({\n   *     propTypes: {\n   *       // An optional string prop named \"description\".\n   *       description: Props.string,\n   *\n   *       // A required enum prop named \"category\".\n   *       category: Props.oneOf(['News','Photos']).isRequired,\n   *\n   *       // A prop named \"dialog\" that requires an instance of Dialog.\n   *       dialog: Props.instanceOf(Dialog).isRequired\n   *     },\n   *     render: function() { ... }\n   *   });\n   *\n   * A more formal specification of how these methods are used:\n   *\n   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)\n   *   decl := ReactPropTypes.{type}(.isRequired)?\n   *\n   * Each and every declaration produces a function with the same signature. This\n   * allows the creation of custom validation functions. For example:\n   *\n   *  var MyLink = React.createClass({\n   *    propTypes: {\n   *      // An optional string or URI prop named \"href\".\n   *      href: function(props, propName, componentName) {\n   *        var propValue = props[propName];\n   *        if (propValue != null && typeof propValue !== 'string' &&\n   *            !(propValue instanceof URI)) {\n   *          return new Error(\n   *            'Expected a string or an URI for ' + propName + ' in ' +\n   *            componentName\n   *          );\n   *        }\n   *      }\n   *    },\n   *    render: function() {...}\n   *  });\n   *\n   * @internal\n   */\n\n  var ANONYMOUS = '<<anonymous>>';\n\n  // Important!\n  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.\n  var ReactPropTypes = {\n    array: createPrimitiveTypeChecker('array'),\n    bool: createPrimitiveTypeChecker('boolean'),\n    func: createPrimitiveTypeChecker('function'),\n    number: createPrimitiveTypeChecker('number'),\n    object: createPrimitiveTypeChecker('object'),\n    string: createPrimitiveTypeChecker('string'),\n    symbol: createPrimitiveTypeChecker('symbol'),\n\n    any: createAnyTypeChecker(),\n    arrayOf: createArrayOfTypeChecker,\n    element: createElementTypeChecker(),\n    elementType: createElementTypeTypeChecker(),\n    instanceOf: createInstanceTypeChecker,\n    node: createNodeChecker(),\n    objectOf: createObjectOfTypeChecker,\n    oneOf: createEnumTypeChecker,\n    oneOfType: createUnionTypeChecker,\n    shape: createShapeTypeChecker,\n    exact: createStrictShapeTypeChecker,\n  };\n\n  /**\n   * inlined Object.is polyfill to avoid requiring consumers ship their own\n   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is\n   */\n  /*eslint-disable no-self-compare*/\n  function is(x, y) {\n    // SameValue algorithm\n    if (x === y) {\n      // Steps 1-5, 7-10\n      // Steps 6.b-6.e: +0 != -0\n      return x !== 0 || 1 / x === 1 / y;\n    } else {\n      // Step 6.a: NaN == NaN\n      return x !== x && y !== y;\n    }\n  }\n  /*eslint-enable no-self-compare*/\n\n  /**\n   * We use an Error-like object for backward compatibility as people may call\n   * PropTypes directly and inspect their output. However, we don't use real\n   * Errors anymore. We don't inspect their stack anyway, and creating them\n   * is prohibitively expensive if they are created too often, such as what\n   * happens in oneOfType() for any type before the one that matched.\n   */\n  function PropTypeError(message) {\n    this.message = message;\n    this.stack = '';\n  }\n  // Make `instanceof Error` still work for returned errors.\n  PropTypeError.prototype = Error.prototype;\n\n  function createChainableTypeChecker(validate) {\n    if (true) {\n      var manualPropTypeCallCache = {};\n      var manualPropTypeWarningCount = 0;\n    }\n    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {\n      componentName = componentName || ANONYMOUS;\n      propFullName = propFullName || propName;\n\n      if (secret !== ReactPropTypesSecret) {\n        if (throwOnDirectAccess) {\n          // New behavior only for users of `prop-types` package\n          var err = new Error(\n            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +\n            'Use `PropTypes.checkPropTypes()` to call them. ' +\n            'Read more at http://fb.me/use-check-prop-types'\n          );\n          err.name = 'Invariant Violation';\n          throw err;\n        } else if ( true && typeof console !== 'undefined') {\n          // Old behavior for people using React.PropTypes\n          var cacheKey = componentName + ':' + propName;\n          if (\n            !manualPropTypeCallCache[cacheKey] &&\n            // Avoid spamming the console because they are often not actionable except for lib authors\n            manualPropTypeWarningCount < 3\n          ) {\n            printWarning(\n              'You are manually calling a React.PropTypes validation ' +\n              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +\n              'and will throw in the standalone `prop-types` package. ' +\n              'You may be seeing this warning due to a third-party PropTypes ' +\n              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'\n            );\n            manualPropTypeCallCache[cacheKey] = true;\n            manualPropTypeWarningCount++;\n          }\n        }\n      }\n      if (props[propName] == null) {\n        if (isRequired) {\n          if (props[propName] === null) {\n            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));\n          }\n          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));\n        }\n        return null;\n      } else {\n        return validate(props, propName, componentName, location, propFullName);\n      }\n    }\n\n    var chainedCheckType = checkType.bind(null, false);\n    chainedCheckType.isRequired = checkType.bind(null, true);\n\n    return chainedCheckType;\n  }\n\n  function createPrimitiveTypeChecker(expectedType) {\n    function validate(props, propName, componentName, location, propFullName, secret) {\n      var propValue = props[propName];\n      var propType = getPropType(propValue);\n      if (propType !== expectedType) {\n        // `propValue` being instance of, say, date/regexp, pass the 'object'\n        // check, but we can offer a more precise error message here rather than\n        // 'of type `object`'.\n        var preciseType = getPreciseType(propValue);\n\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));\n      }\n      return null;\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createAnyTypeChecker() {\n    return createChainableTypeChecker(emptyFunctionThatReturnsNull);\n  }\n\n  function createArrayOfTypeChecker(typeChecker) {\n    function validate(props, propName, componentName, location, propFullName) {\n      if (typeof typeChecker !== 'function') {\n        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');\n      }\n      var propValue = props[propName];\n      if (!Array.isArray(propValue)) {\n        var propType = getPropType(propValue);\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));\n      }\n      for (var i = 0; i < propValue.length; i++) {\n        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);\n        if (error instanceof Error) {\n          return error;\n        }\n      }\n      return null;\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createElementTypeChecker() {\n    function validate(props, propName, componentName, location, propFullName) {\n      var propValue = props[propName];\n      if (!isValidElement(propValue)) {\n        var propType = getPropType(propValue);\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));\n      }\n      return null;\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createElementTypeTypeChecker() {\n    function validate(props, propName, componentName, location, propFullName) {\n      var propValue = props[propName];\n      if (!ReactIs.isValidElementType(propValue)) {\n        var propType = getPropType(propValue);\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));\n      }\n      return null;\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createInstanceTypeChecker(expectedClass) {\n    function validate(props, propName, componentName, location, propFullName) {\n      if (!(props[propName] instanceof expectedClass)) {\n        var expectedClassName = expectedClass.name || ANONYMOUS;\n        var actualClassName = getClassName(props[propName]);\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));\n      }\n      return null;\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createEnumTypeChecker(expectedValues) {\n    if (!Array.isArray(expectedValues)) {\n      if (true) {\n        if (arguments.length > 1) {\n          printWarning(\n            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +\n            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'\n          );\n        } else {\n          printWarning('Invalid argument supplied to oneOf, expected an array.');\n        }\n      }\n      return emptyFunctionThatReturnsNull;\n    }\n\n    function validate(props, propName, componentName, location, propFullName) {\n      var propValue = props[propName];\n      for (var i = 0; i < expectedValues.length; i++) {\n        if (is(propValue, expectedValues[i])) {\n          return null;\n        }\n      }\n\n      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {\n        var type = getPreciseType(value);\n        if (type === 'symbol') {\n          return String(value);\n        }\n        return value;\n      });\n      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createObjectOfTypeChecker(typeChecker) {\n    function validate(props, propName, componentName, location, propFullName) {\n      if (typeof typeChecker !== 'function') {\n        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');\n      }\n      var propValue = props[propName];\n      var propType = getPropType(propValue);\n      if (propType !== 'object') {\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));\n      }\n      for (var key in propValue) {\n        if (has(propValue, key)) {\n          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);\n          if (error instanceof Error) {\n            return error;\n          }\n        }\n      }\n      return null;\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createUnionTypeChecker(arrayOfTypeCheckers) {\n    if (!Array.isArray(arrayOfTypeCheckers)) {\n       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;\n      return emptyFunctionThatReturnsNull;\n    }\n\n    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {\n      var checker = arrayOfTypeCheckers[i];\n      if (typeof checker !== 'function') {\n        printWarning(\n          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +\n          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'\n        );\n        return emptyFunctionThatReturnsNull;\n      }\n    }\n\n    function validate(props, propName, componentName, location, propFullName) {\n      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {\n        var checker = arrayOfTypeCheckers[i];\n        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {\n          return null;\n        }\n      }\n\n      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createNodeChecker() {\n    function validate(props, propName, componentName, location, propFullName) {\n      if (!isNode(props[propName])) {\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));\n      }\n      return null;\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createShapeTypeChecker(shapeTypes) {\n    function validate(props, propName, componentName, location, propFullName) {\n      var propValue = props[propName];\n      var propType = getPropType(propValue);\n      if (propType !== 'object') {\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));\n      }\n      for (var key in shapeTypes) {\n        var checker = shapeTypes[key];\n        if (!checker) {\n          continue;\n        }\n        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);\n        if (error) {\n          return error;\n        }\n      }\n      return null;\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createStrictShapeTypeChecker(shapeTypes) {\n    function validate(props, propName, componentName, location, propFullName) {\n      var propValue = props[propName];\n      var propType = getPropType(propValue);\n      if (propType !== 'object') {\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));\n      }\n      // We need to check all keys in case some are required but missing from\n      // props.\n      var allKeys = assign({}, props[propName], shapeTypes);\n      for (var key in allKeys) {\n        var checker = shapeTypes[key];\n        if (!checker) {\n          return new PropTypeError(\n            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +\n            '\\nBad object: ' + JSON.stringify(props[propName], null, '  ') +\n            '\\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')\n          );\n        }\n        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);\n        if (error) {\n          return error;\n        }\n      }\n      return null;\n    }\n\n    return createChainableTypeChecker(validate);\n  }\n\n  function isNode(propValue) {\n    switch (typeof propValue) {\n      case 'number':\n      case 'string':\n      case 'undefined':\n        return true;\n      case 'boolean':\n        return !propValue;\n      case 'object':\n        if (Array.isArray(propValue)) {\n          return propValue.every(isNode);\n        }\n        if (propValue === null || isValidElement(propValue)) {\n          return true;\n        }\n\n        var iteratorFn = getIteratorFn(propValue);\n        if (iteratorFn) {\n          var iterator = iteratorFn.call(propValue);\n          var step;\n          if (iteratorFn !== propValue.entries) {\n            while (!(step = iterator.next()).done) {\n              if (!isNode(step.value)) {\n                return false;\n              }\n            }\n          } else {\n            // Iterator will provide entry [k,v] tuples rather than values.\n            while (!(step = iterator.next()).done) {\n              var entry = step.value;\n              if (entry) {\n                if (!isNode(entry[1])) {\n                  return false;\n                }\n              }\n            }\n          }\n        } else {\n          return false;\n        }\n\n        return true;\n      default:\n        return false;\n    }\n  }\n\n  function isSymbol(propType, propValue) {\n    // Native Symbol.\n    if (propType === 'symbol') {\n      return true;\n    }\n\n    // falsy value can't be a Symbol\n    if (!propValue) {\n      return false;\n    }\n\n    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'\n    if (propValue['@@toStringTag'] === 'Symbol') {\n      return true;\n    }\n\n    // Fallback for non-spec compliant Symbols which are polyfilled.\n    if (typeof Symbol === 'function' && propValue instanceof Symbol) {\n      return true;\n    }\n\n    return false;\n  }\n\n  // Equivalent of `typeof` but with special handling for array and regexp.\n  function getPropType(propValue) {\n    var propType = typeof propValue;\n    if (Array.isArray(propValue)) {\n      return 'array';\n    }\n    if (propValue instanceof RegExp) {\n      // Old webkits (at least until Android 4.0) return 'function' rather than\n      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/\n      // passes PropTypes.object.\n      return 'object';\n    }\n    if (isSymbol(propType, propValue)) {\n      return 'symbol';\n    }\n    return propType;\n  }\n\n  // This handles more types than `getPropType`. Only used for error messages.\n  // See `createPrimitiveTypeChecker`.\n  function getPreciseType(propValue) {\n    if (typeof propValue === 'undefined' || propValue === null) {\n      return '' + propValue;\n    }\n    var propType = getPropType(propValue);\n    if (propType === 'object') {\n      if (propValue instanceof Date) {\n        return 'date';\n      } else if (propValue instanceof RegExp) {\n        return 'regexp';\n      }\n    }\n    return propType;\n  }\n\n  // Returns a string that is postfixed to a warning about an invalid type.\n  // For example, \"undefined\" or \"of type array\"\n  function getPostfixForTypeWarning(value) {\n    var type = getPreciseType(value);\n    switch (type) {\n      case 'array':\n      case 'object':\n        return 'an ' + type;\n      case 'boolean':\n      case 'date':\n      case 'regexp':\n        return 'a ' + type;\n      default:\n        return type;\n    }\n  }\n\n  // Returns class name of the object, if any.\n  function getClassName(propValue) {\n    if (!propValue.constructor || !propValue.constructor.name) {\n      return ANONYMOUS;\n    }\n    return propValue.constructor.name;\n  }\n\n  ReactPropTypes.checkPropTypes = checkPropTypes;\n  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;\n  ReactPropTypes.PropTypes = ReactPropTypes;\n\n  return ReactPropTypes;\n};\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/prop-types/factoryWithTypeCheckers.js?");

/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nif (true) {\n  var ReactIs = __webpack_require__(/*! react-is */ \"./node_modules/prop-types/node_modules/react-is/index.js\");\n\n  // By explicitly using `prop-types` you are opting into new development behavior.\n  // http://fb.me/prop-types-in-prod\n  var throwOnDirectAccess = true;\n  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ \"./node_modules/prop-types/factoryWithTypeCheckers.js\")(ReactIs.isElement, throwOnDirectAccess);\n} else {}\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/prop-types/index.js?");

/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
eval("/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\nvar ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';\n\nmodule.exports = ReactPropTypesSecret;\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/prop-types/lib/ReactPropTypesSecret.js?");

/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("/** @license React v16.13.1\n * react-is.development.js\n *\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\n\n\nif (true) {\n  (function() {\n'use strict';\n\n// The Symbol used to tag the ReactElement-like types. If there is no native Symbol\n// nor polyfill, then a plain number is used for performance.\nvar hasSymbol = typeof Symbol === 'function' && Symbol.for;\nvar REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;\nvar REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;\nvar REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;\nvar REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;\nvar REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;\nvar REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;\nvar REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary\n// (unstable) APIs that have been removed. Can we remove the symbols?\n\nvar REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;\nvar REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;\nvar REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;\nvar REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;\nvar REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;\nvar REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;\nvar REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;\nvar REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;\nvar REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;\nvar REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;\nvar REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;\n\nfunction isValidElementType(type) {\n  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.\n  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);\n}\n\nfunction typeOf(object) {\n  if (typeof object === 'object' && object !== null) {\n    var $$typeof = object.$$typeof;\n\n    switch ($$typeof) {\n      case REACT_ELEMENT_TYPE:\n        var type = object.type;\n\n        switch (type) {\n          case REACT_ASYNC_MODE_TYPE:\n          case REACT_CONCURRENT_MODE_TYPE:\n          case REACT_FRAGMENT_TYPE:\n          case REACT_PROFILER_TYPE:\n          case REACT_STRICT_MODE_TYPE:\n          case REACT_SUSPENSE_TYPE:\n            return type;\n\n          default:\n            var $$typeofType = type && type.$$typeof;\n\n            switch ($$typeofType) {\n              case REACT_CONTEXT_TYPE:\n              case REACT_FORWARD_REF_TYPE:\n              case REACT_LAZY_TYPE:\n              case REACT_MEMO_TYPE:\n              case REACT_PROVIDER_TYPE:\n                return $$typeofType;\n\n              default:\n                return $$typeof;\n            }\n\n        }\n\n      case REACT_PORTAL_TYPE:\n        return $$typeof;\n    }\n  }\n\n  return undefined;\n} // AsyncMode is deprecated along with isAsyncMode\n\nvar AsyncMode = REACT_ASYNC_MODE_TYPE;\nvar ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;\nvar ContextConsumer = REACT_CONTEXT_TYPE;\nvar ContextProvider = REACT_PROVIDER_TYPE;\nvar Element = REACT_ELEMENT_TYPE;\nvar ForwardRef = REACT_FORWARD_REF_TYPE;\nvar Fragment = REACT_FRAGMENT_TYPE;\nvar Lazy = REACT_LAZY_TYPE;\nvar Memo = REACT_MEMO_TYPE;\nvar Portal = REACT_PORTAL_TYPE;\nvar Profiler = REACT_PROFILER_TYPE;\nvar StrictMode = REACT_STRICT_MODE_TYPE;\nvar Suspense = REACT_SUSPENSE_TYPE;\nvar hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated\n\nfunction isAsyncMode(object) {\n  {\n    if (!hasWarnedAboutDeprecatedIsAsyncMode) {\n      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint\n\n      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');\n    }\n  }\n\n  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;\n}\nfunction isConcurrentMode(object) {\n  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;\n}\nfunction isContextConsumer(object) {\n  return typeOf(object) === REACT_CONTEXT_TYPE;\n}\nfunction isContextProvider(object) {\n  return typeOf(object) === REACT_PROVIDER_TYPE;\n}\nfunction isElement(object) {\n  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;\n}\nfunction isForwardRef(object) {\n  return typeOf(object) === REACT_FORWARD_REF_TYPE;\n}\nfunction isFragment(object) {\n  return typeOf(object) === REACT_FRAGMENT_TYPE;\n}\nfunction isLazy(object) {\n  return typeOf(object) === REACT_LAZY_TYPE;\n}\nfunction isMemo(object) {\n  return typeOf(object) === REACT_MEMO_TYPE;\n}\nfunction isPortal(object) {\n  return typeOf(object) === REACT_PORTAL_TYPE;\n}\nfunction isProfiler(object) {\n  return typeOf(object) === REACT_PROFILER_TYPE;\n}\nfunction isStrictMode(object) {\n  return typeOf(object) === REACT_STRICT_MODE_TYPE;\n}\nfunction isSuspense(object) {\n  return typeOf(object) === REACT_SUSPENSE_TYPE;\n}\n\nexports.AsyncMode = AsyncMode;\nexports.ConcurrentMode = ConcurrentMode;\nexports.ContextConsumer = ContextConsumer;\nexports.ContextProvider = ContextProvider;\nexports.Element = Element;\nexports.ForwardRef = ForwardRef;\nexports.Fragment = Fragment;\nexports.Lazy = Lazy;\nexports.Memo = Memo;\nexports.Portal = Portal;\nexports.Profiler = Profiler;\nexports.StrictMode = StrictMode;\nexports.Suspense = Suspense;\nexports.isAsyncMode = isAsyncMode;\nexports.isConcurrentMode = isConcurrentMode;\nexports.isContextConsumer = isContextConsumer;\nexports.isContextProvider = isContextProvider;\nexports.isElement = isElement;\nexports.isForwardRef = isForwardRef;\nexports.isFragment = isFragment;\nexports.isLazy = isLazy;\nexports.isMemo = isMemo;\nexports.isPortal = isPortal;\nexports.isProfiler = isProfiler;\nexports.isStrictMode = isStrictMode;\nexports.isSuspense = isSuspense;\nexports.isValidElementType = isValidElementType;\nexports.typeOf = typeOf;\n  })();\n}\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js?");

/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/index.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nif (false) {} else {\n  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ \"./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js\");\n}\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/prop-types/node_modules/react-is/index.js?");

/***/ }),

/***/ "./node_modules/raf/index.js":
/*!***********************************!*\
  !*** ./node_modules/raf/index.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var now = __webpack_require__(/*! performance-now */ \"./node_modules/performance-now/lib/performance-now.js\")\n  , root = typeof window === 'undefined' ? __webpack_require__.g : window\n  , vendors = ['moz', 'webkit']\n  , suffix = 'AnimationFrame'\n  , raf = root['request' + suffix]\n  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]\n\nfor(var i = 0; !raf && i < vendors.length; i++) {\n  raf = root[vendors[i] + 'Request' + suffix]\n  caf = root[vendors[i] + 'Cancel' + suffix]\n      || root[vendors[i] + 'CancelRequest' + suffix]\n}\n\n// Some versions of FF have rAF but not cAF\nif(!raf || !caf) {\n  var last = 0\n    , id = 0\n    , queue = []\n    , frameDuration = 1000 / 60\n\n  raf = function(callback) {\n    if(queue.length === 0) {\n      var _now = now()\n        , next = Math.max(0, frameDuration - (_now - last))\n      last = next + _now\n      setTimeout(function() {\n        var cp = queue.slice(0)\n        // Clear queue here to prevent\n        // callbacks from appending listeners\n        // to the current frame's queue\n        queue.length = 0\n        for(var i = 0; i < cp.length; i++) {\n          if(!cp[i].cancelled) {\n            try{\n              cp[i].callback(last)\n            } catch(e) {\n              setTimeout(function() { throw e }, 0)\n            }\n          }\n        }\n      }, Math.round(next))\n    }\n    queue.push({\n      handle: ++id,\n      callback: callback,\n      cancelled: false\n    })\n    return id\n  }\n\n  caf = function(handle) {\n    for(var i = 0; i < queue.length; i++) {\n      if(queue[i].handle === handle) {\n        queue[i].cancelled = true\n      }\n    }\n  }\n}\n\nmodule.exports = function(fn) {\n  // Wrap in a new function to prevent\n  // `cancel` potentially being assigned\n  // to the native rAF function\n  return raf.call(root, fn)\n}\nmodule.exports.cancel = function() {\n  caf.apply(root, arguments)\n}\nmodule.exports.polyfill = function(object) {\n  if (!object) {\n    object = root;\n  }\n  object.requestAnimationFrame = raf\n  object.cancelAnimationFrame = caf\n}\n\n\n//# sourceURL=webpack://Typewriter/./node_modules/raf/index.js?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

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
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/react/index.js");
/******/ 	__webpack_exports__ = __webpack_exports__["default"];
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});