define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
import assertString from './util/assertString';
import { alpha } from './alpha';

export default function isAlpha(str, locale = 'en-US') {
  assertString(str);
  if (locale in alpha) {
    return alpha[locale].test(str);
  }
  throw new Error(`Invalid locale '${locale}'`);
}

return module.exports;});
