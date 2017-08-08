/**
 * @file Determines whether the passed value is an Array.
 * @version 1.0.1
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module is-array-x
 */

'use strict';

var $isArray;
try {
  if (Array.isArray([]) === false || Array.isArray({ length: 0 })) {
    throw new Error('failed');
  }

  $isArray = Array.isArray;
} catch (ignore) {
  var toStringTag = require('to-string-tag-x');
  $isArray = function isArray(obj) {
    return toStringTag(obj) === '[object Array]';
  };
}

/**
 * The isArray() function determines whether the passed value is an Array.
 *
 * @param {*} obj The object to be checked..
 * @return {boolean} `true` if the object is an Array; otherwise, `false`.
 * @example
 * var isArray = require('is-array-x');
 *
 * isArray([]); // true
 * isArray({}); // false
 */
module.exports = $isArray;
