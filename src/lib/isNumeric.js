define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
import assertString from './util/assertString';

const numeric = /^[-+]?[0-9]+$/;

export default function isNumeric(str) {
  assertString(str);
  return numeric.test(str);
}

return module.exports;});
