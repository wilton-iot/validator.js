define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
import rtrim from './rtrim';
import ltrim from './ltrim';

export default function trim(str, chars) {
  return rtrim(ltrim(str, chars), chars);
}

return module.exports;});
