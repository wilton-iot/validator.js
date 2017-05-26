define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
import assertString from './util/assertString';
import toFloat from './toFloat';

export default function isDivisibleBy(str, num) {
  assertString(str);
  return toFloat(str) % parseInt(num, 10) === 0;
}

return module.exports;});
