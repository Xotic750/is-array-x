import attempt from 'attempt-x';
import toStringTag from 'to-string-tag-x';

const nativeIsArray = typeof Array.isArray === 'function' && Array.isArray;

const testRes =
  nativeIsArray &&
  attempt(() => {
    return nativeIsArray([]) === true && nativeIsArray({length: 0}) === false;
  });

const isArrayFn = (function iife() {
  if (testRes && testRes.threw === false && testRes.value === true) {
    return nativeIsArray;
  }

  /**
   * The isArray() function determines whether the passed value is an Array.
   *
   * @function isArray
   * @param {*} obj - The object to be checked..
   * @returns {boolean} `true` if the object is an Array; otherwise, `false`.
   */
  return function isArray(obj) {
    return toStringTag(obj) === '[object Array]';
  };
})();

export default isArrayFn;
