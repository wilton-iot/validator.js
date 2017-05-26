define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
import assertString from './util/assertString';

export default function isLowercase(str) {
  assertString(str);
  return str === str.toLowerCase();
}

return module.exports;});
