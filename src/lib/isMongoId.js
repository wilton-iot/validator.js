define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
import assertString from './util/assertString';

import isHexadecimal from './isHexadecimal';

export default function isMongoId(str) {
  assertString(str);
  return isHexadecimal(str) && str.length === 24;
}

return module.exports;});
