var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

import attempt from 'attempt-x';
import toStringTag from 'to-string-tag-x';
var nativeIsArray = [].isArray;
var isArrayNative = typeof nativeIsArray === 'function' && nativeIsArray;
var testRes = isArrayNative && attempt(function () {
  _newArrowCheck(this, _this);

  return isArrayNative([]) === true && isArrayNative({
    length: 0
  }) === false;
}.bind(this));

var isArrayFn = function iife() {
  if (testRes && testRes.threw === false && testRes.value === true) {
    return isArrayNative;
  }
  /**
   * The isArray() function determines whether the passed value is an Array.
   *
   * @function isArray
   * @param {*} [value] - The object to be checked..
   * @returns {boolean} `true` if the object is an Array; otherwise, `false`.
   */


  return function isArray(value) {
    return toStringTag(value) === '[object Array]';
  };
}();

export default isArrayFn;

//# sourceMappingURL=is-array-x.esm.js.map