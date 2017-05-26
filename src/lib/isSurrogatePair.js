define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
import assertString from './util/assertString';

const surrogatePair = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;

export default function isSurrogatePair(str) {
  assertString(str);
  return surrogatePair.test(str);
}

return module.exports;});
