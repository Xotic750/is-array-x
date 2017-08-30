/**
 * @file Determines whether the passed value is an Array.
 * @version 1.1.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module is-array-x
 */

'use strict';

var nativeIsArray = typeof Array.isArray === 'function' && Array.isArray;

var $isArray;
if (nativeIsArray) {
  try {
    if ($isArray([]) && $isArray({ length: 0 }) === false) {
      $isArray = nativeIsArray;
    }
  } catch (ignore) {}
}

if (Boolean($isArray) === false) {
  var toStringTag = require('to-string-tag-x');
  $isArray = function isArray(obj) {
    return toStringTag(obj) === '[object Array]';
  };
}

/**
 * The isArray() function determines whether the passed value is an Array.
 *
 * @param {*} obj - The object to be checked..
 * @returns {boolean} `true` if the object is an Array; otherwise, `false`.
 * @example
 * var isArray = require('is-array-x');
 *
 * isArray([]); // true
 * isArray({}); // false
 */
module.exports = $isArray;
