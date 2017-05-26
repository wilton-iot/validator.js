define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
import assertString from './util/assertString';
import toString from './util/toString';

export default function contains(str, elem) {
  assertString(str);
  return str.indexOf(toString(elem)) >= 0;
}

return module.exports;});
