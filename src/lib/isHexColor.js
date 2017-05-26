define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
import assertString from './util/assertString';

const hexcolor = /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i;

export default function isHexColor(str) {
  assertString(str);
  return hexcolor.test(str);
}

return module.exports;});
