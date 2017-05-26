define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
import assertString from './util/assertString';
import { alphanumeric } from './alpha';

export default function isAlphanumeric(str, locale = 'en-US') {
  assertString(str);
  if (locale in alphanumeric) {
    return alphanumeric[locale].test(str);
  }
  throw new Error(`Invalid locale '${locale}'`);
}

return module.exports;});
