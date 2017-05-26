define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
import assertString from './util/assertString';

export default function isEmpty(str) {
  assertString(str);
  return str.length === 0;
}

return module.exports;});
