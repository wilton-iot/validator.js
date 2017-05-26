define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
import assertString from './util/assertString';

export default function toFloat(str) {
  assertString(str);
  return parseFloat(str);
}

return module.exports;});
