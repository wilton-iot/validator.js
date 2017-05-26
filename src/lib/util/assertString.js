define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
export default function assertString(input) {
  if (typeof input !== 'string') {
    throw new TypeError('This library (validator.js) validates strings only');
  }
}

return module.exports;});
