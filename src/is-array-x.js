import attempt from 'attempt-x';
import toStringTag from 'to-string-tag-x';

const nia = [].isArray;
const nativeIsArray = typeof nia === 'function' && nia;

const testResult = attempt(function attemptee() {
  return nativeIsArray([]) === true && nativeIsArray({length: 0}) === false;
});

const isWorking = testResult.threw === false && testResult.value === true;

export const implementation = function isArray(value) {
  return toStringTag(value) === '[object Array]';
};

/**
 * Determines whether the passed value is an Array.
 *
 * @param {*} value - The value to test.
 * @returns {boolean} - True if an array; otherwise false.
 */
const isArray = isWorking ? nativeIsArray : implementation;

export default isArray;
