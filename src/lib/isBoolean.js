define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
import assertString from './util/assertString';

export default function isBoolean(str) {
  assertString(str);
  return (['true', 'false', '1', '0'].indexOf(str) >= 0);
}

return module.exports;});
