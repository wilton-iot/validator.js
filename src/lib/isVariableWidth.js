define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
import assertString from './util/assertString';

import { fullWidth } from './isFullWidth';
import { halfWidth } from './isHalfWidth';

export default function isVariableWidth(str) {
  assertString(str);
  return fullWidth.test(str) && halfWidth.test(str);
}

return module.exports;});
