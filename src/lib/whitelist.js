define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
import assertString from './util/assertString';

export default function whitelist(str, chars) {
  assertString(str);
  return str.replace(new RegExp(`[^${chars}]+`, 'g'), '');
}

return module.exports;});
