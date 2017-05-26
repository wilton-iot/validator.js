define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isVariableWidth;

var _assertString = require('validator/lib/util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

var _isFullWidth = require('validator/lib/isFullWidth');

var _isHalfWidth = require('validator/lib/isHalfWidth');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isVariableWidth(str) {
  (0, _assertString2.default)(str);
  return _isFullWidth.fullWidth.test(str) && _isHalfWidth.halfWidth.test(str);
}
module.exports = exports['default'];

return module.exports;});
