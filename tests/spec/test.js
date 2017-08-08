'use strict';

var isArray;
if (typeof module === 'object' && module.exports) {
  require('es5-shim');
  require('es5-shim/es5-sham');
  if (typeof JSON === 'undefined') {
    JSON = {};
  }
  require('json3').runInContext(null, JSON);
  require('es6-shim');
  var es7 = require('es7-shim');
  Object.keys(es7).forEach(function (key) {
    var obj = es7[key];
    if (typeof obj.shim === 'function') {
      obj.shim();
    }
  });
  isArray = require('../../index.js');
} else {
  isArray = returnExports;
}

var itDocument = typeof document === 'undefined' ? xit : it;

describe('isArray', function () {
  it('is a function', function () {
    expect(typeof isArray).toBe('function');
  });

  it('should be true for Array', function () {
    expect(isArray([])).toBe(true);
  });

  it('should be false for primitives', function () {
    var primitives = [
      'foo',
      true,
      false,
      42,
      0,
      -0,
      NaN,
      Infinity,
      -Infinity
    ];
    primitives.forEach(function (v) {
      expect(isArray(v)).toBe(false);
    });
  });

  it('should fail for other objects', function () {
    var objects = [
      {},
      /foo/,
      arguments
    ];
    if (Object.create) {
      objects.push(Object.create(null));
    }

    objects.forEach(function (v) {
      expect(isArray(v)).toBe(false);
    });
  });

  itDocument('should be false for an HTML element', function () {
    var el = document.getElementsByTagName('div');
    expect(isArray(el)).toBe(false);
  });
});
