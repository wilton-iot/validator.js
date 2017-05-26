define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var assert = require('assert');
var validator = require('validator/validator');
var min = require('validator/validator.min');

describe('Minified version', function () {
  it('should export the same things as the server-side version', function () {
    for (var key in validator) {
      if ({}.hasOwnProperty.call(validator, key)) {
        assert.equal(typeof validator[key],
          typeof min[key], `Minified version did not export ${key}`);
      }
    }
  });

  it('should be up to date', function () {
    assert.equal(min.version, validator.version, 'Minified version mismatch. Run `make min`');
  });

  it('should validate strings', function () {
    assert.equal(min.isEmail('foo@bar.com'), true);
    assert.equal(min.isEmail('foo'), false);
  });

  it('should sanitize strings', function () {
    assert.equal(min.toBoolean('1'), true);
  });
});

return module.exports;});
