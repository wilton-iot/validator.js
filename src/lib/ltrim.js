define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
import assertString from './util/assertString';

export default function ltrim(str, chars) {
  assertString(str);
  const pattern = chars ? new RegExp(`^[${chars}]+`, 'g') : /^\s+/g;
  return str.replace(pattern, '');
}

return module.exports;});
