define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fullWidth = undefined;
exports.default = isFullWidth;

var _assertString = require('validator/lib/util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fullWidth = exports.fullWidth = /[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;

function isFullWidth(str) {
  (0, _assertString2.default)(str);
  return fullWidth.test(str);
}

require = requireOrig;});
