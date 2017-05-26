define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
import assertString from './util/assertString';

export default function toInt(str, radix) {
  assertString(str);
  return parseInt(str, radix || 10);
}

return module.exports;});
