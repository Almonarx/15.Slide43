webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var tag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div';
  var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'box';
  return (0, _jquery2.default)('<' + tag + '>' + content + '</' + tag + '>').addClass(className);
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _header = __webpack_require__(3);

var _header2 = _interopRequireDefault(_header);

var _footer = __webpack_require__(5);

var _footer2 = _interopRequireDefault(_footer);

var _main = __webpack_require__(7);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)('body').append((0, _header2.default)(), (0, _main2.default)(), (0, _footer2.default)());

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _elementBuilder = __webpack_require__(1);

var _elementBuilder2 = _interopRequireDefault(_elementBuilder);

__webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    var content = '<a href="/">Logo</a><p>WOW</p>';

    return (0, _elementBuilder2.default)('header', content, 'header');
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _elementBuilder = __webpack_require__(1);

var _elementBuilder2 = _interopRequireDefault(_elementBuilder);

__webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    var content = '<p>Easycode 2017 (c)<a href="/">Home</a></p>';

    return (0, _elementBuilder2.default)('footer', content, 'footer');
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _elementBuilder = __webpack_require__(1);

var _elementBuilder2 = _interopRequireDefault(_elementBuilder);

__webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    var date = new Date();

    var li = '';
    for (var i = 1; i <= 20; i++) {
        li += '<li>' + i + '</li>';
    }

    var content = '<h2>Current date:</h2><p><strong>' + date.toLocaleString() + '</strong></p><ul>' + li + '</ul>';

    return (0, _elementBuilder2.default)('main', content, 'main');
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[2]);