define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
import assertString from './util/assertString';

const md5 = /^[a-f0-9]{32}$/;

export default function isMD5(str) {
  assertString(str);
  return md5.test(str);
}

return module.exports;});
