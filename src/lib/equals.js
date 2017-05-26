define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
import assertString from './util/assertString';

export default function equals(str, comparison) {
  assertString(str);
  return str === comparison;
}

return module.exports;});
