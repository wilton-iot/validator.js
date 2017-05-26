define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
export default function merge(obj = { }, defaults) {
  for (const key in defaults) {
    if (typeof obj[key] === 'undefined') {
      obj[key] = defaults[key];
    }
  }
  return obj;
}

return module.exports;});
