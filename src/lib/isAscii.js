define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
import assertString from './util/assertString';

/* eslint-disable no-control-regex */
const ascii = /^[\x00-\x7F]+$/;
/* eslint-enable no-control-regex */

export default function isAscii(str) {
  assertString(str);
  return ascii.test(str);
}

return module.exports;});
