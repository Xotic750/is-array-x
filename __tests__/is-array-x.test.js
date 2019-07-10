import noop from 'lodash/noop';
import isArray from 'src/is-array-x';

/* eslint-disable-next-line compat/compat */
const hasSymbol = typeof Symbol === 'function' && typeof Symbol('') === 'symbol';
const ifSymbolIt = hasSymbol ? it : xit;

const itDocument = typeof document === 'undefined' ? xit : it;

describe('isArray', function() {
  it('is a function', function() {
    expect.assertions(1);
    expect(typeof isArray).toBe('function');
  });

  it('should be true for Array', function() {
    expect.assertions(1);
    expect(isArray([])).toBe(true);
  });

  it('should be false for primitives', function() {
    expect.assertions(1);
    const primitives = ['foo', true, false, 42, 0, -0, NaN, Infinity, -Infinity, null, undefined];

    const expected = primitives.map(function() {
      return false;
    });

    const actual = primitives.map(function(primitive) {
      return isArray(primitive);
    });

    expect(actual).toStrictEqual(expected);
  });

  it('should fail for other objects', function() {
    expect.assertions(1);
    /* eslint-disable-next-line prefer-rest-params */
    const objects = [{}, /foo/, arguments, Object.create(null), new Date(), noop, {length: 0}];

    const expected = objects.map(function() {
      return false;
    });

    const actual = objects.map(function(object) {
      return isArray(object);
    });

    expect(actual).toStrictEqual(expected);
  });

  itDocument('should be false for an HTML element', function() {
    expect.assertions(1);
    expect(isArray(document.getElementsByTagName('div'))).toBe(false);
  });

  ifSymbolIt('should be false for Symbol', function() {
    expect.assertions(2);
    /* eslint-disable-next-line compat/compat */
    const sym = Symbol('foo');
    expect(isArray(sym)).toBe(false);
    expect(isArray(Object(sym))).toBe(false);
  });
});
