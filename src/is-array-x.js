import attempt from 'attempt-x';
import toStringTag from 'to-string-tag-x';

const nativeIsArray = [].isArray;
const isArrayNative = typeof nativeIsArray === 'function' && nativeIsArray;

const testRes =
  isArrayNative &&
  attempt(() => {
    return isArrayNative([]) === true && isArrayNative({length: 0}) === false;
  });

const isArrayFn = (function iife() {
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
})();

export default isArrayFn;
