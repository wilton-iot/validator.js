define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
import assertString from './util/assertString';

export default function isUppercase(str) {
  assertString(str);
  return str === str.toUpperCase();
}

return module.exports;});
