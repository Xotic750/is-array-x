import attempt from 'attempt-x';
import toStringTag from 'to-string-tag-x';
var nia = [].isArray;
var nativeIsArray = typeof nia === 'function' && nia;
var testResult = attempt(function attemptee() {
  return nativeIsArray([]) === true && nativeIsArray({
    length: 0
  }) === false;
});
var isWorking = testResult.threw === false && testResult.value === true;
export var implementation = function isArray(value) {
  return toStringTag(value) === '[object Array]';
};
/**
 * Determines whether the passed value is an Array.
 *
 * @param {*} value - The value to test.
 * @returns {boolean} - True if an array; otherwise false.
 */

var isArray = isWorking ? nativeIsArray : implementation;
export default isArray;

//# sourceMappingURL=is-array-x.esm.js.map