/*!
{
  "copywrite": "Copyright (c) 2017-present",
  "date": "2019-07-10T19:16:13.318Z",
  "describe": "",
  "description": "Determines whether the passed value is an Array.",
  "file": "is-array-x.js",
  "hash": "b00f11553891f10108b8",
  "license": "MIT",
  "version": "2.0.0"
}
*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["isArrayX"] = factory();
	else
		root["isArrayX"] = factory();
})((function () {
  'use strict';

  if (typeof self !== 'undefined') {
    return self;
  }

  if (typeof window !== 'undefined') {
    return window;
  }

  if (typeof global !== 'undefined') {
    return global;
  }

  return Function('return this')();
}()), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _attemptX = _interopRequireDefault(__webpack_require__(1));

var _toStringTagX = _interopRequireDefault(__webpack_require__(2));

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

var nativeIsArray = typeof Array.isArray === 'function' && Array.isArray;
var testRes = nativeIsArray && (0, _attemptX.default)(function () {
  _newArrowCheck(this, _this);

  return nativeIsArray([]) === true && nativeIsArray({
    length: 0
  }) === false;
}.bind(void 0));

var isArrayFn = function iife() {
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
    return (0, _toStringTagX.default)(obj) === '[object Array]';
  };
}();

var _default = isArrayFn;
exports.default = _default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Invokes function, returning an object of the results.
 * @version 1.1.3
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module attempt-x
 */



var getArgs = function _getArgs(args) {
  var length = args.length >>> 0;
  var array = [];
  var argLength = length - 1;
  if (argLength < 1) {
    return array;
  }

  array.length = argLength;
  for (var index = 1; index < length; index += 1) {
    array[index - 1] = args[index];
  }

  return array;
};

/**
 * This method attempts to invoke the function, returning either the result or
 * the caught error object. Any additional arguments are provided to the
 * function when it's invoked.
 *
 * @param {Function} fn - The function to attempt.
 * @param {...*} [args] - The arguments to invoke the function with.
 * @returns {Object} Returns an object of the result.
 * @example
 * var attempt = require('attempt-x');
 *
 * function thrower() {
 *   throw new Error('Threw');
 * }
 *
 * attempt(thrower, 1, 2);
 * // {
 * //   threw: true,
 * //   value: // Error('Threw') object
 * // }
 *
 * function sumArgs(a, b) {
 *   return a + b;
 * }
 *
 * attempt(sumArgs, 1, 2);
 * // {
 * //   threw: false,
 * //   value: 3
 * // }
 *
 * var thisArg = [];
 * function pusher(a, b) {
 *   return this.push(a, b);
 * }
 *
 * attempt.call(thisArg, pusher, 1, 2);
 * // {
 * //   threw: false,
 * //   value: 2
 * // }
 * // thisArg => [1, 2];
 */
module.exports = function attempt(fn) {
  try {
    return {
      threw: false,
      value: fn.apply(this, getArgs(arguments))
    };
  } catch (e) {
    return {
      threw: true,
      value: e
    };
  }
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Get an object's ES6 @@toStringTag.
 * @see {@link http://www.ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring|19.1.3.6 Object.prototype.toString ( )}
 * @version 1.4.3
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module to-string-tag-x
 */



var isNull = __webpack_require__(3);
var isUndefined = __webpack_require__(4);
var toStr = {}.toString;

/**
 * The `toStringTag` method returns "[object type]", where type is the
 * object type.
 *
 * @param {*} value - The object of which to get the object type string.
 * @returns {string} The object type string.
 * @example
 * var toStringTag = require('to-string-tag-x');
 *
 * var o = new Object();
 * toStringTag(o); // returns '[object Object]'
 */
module.exports = function toStringTag(value) {
  if (isNull(value)) {
    return '[object Null]';
  }

  if (isUndefined(value)) {
    return '[object Undefined]';
  }

  return toStr.call(value);
};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/**
 * lodash 3.0.0 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/**
 * Checks if `value` is `null`.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
 * @example
 *
 * _.isNull(null);
 * // => true
 *
 * _.isNull(void 0);
 * // => false
 */
function isNull(value) {
  return value === null;
}

module.exports = isNull;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
*
*	VALIDATE: undefined
*
*
*	DESCRIPTION:
*		- Validates if a value is undefined.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/



/**
* FUNCTION: isUndefined( value )
*	Validates if a value is undefined.
*
* @param {*} value - value to be validated
* @returns {Boolean} boolean indicating whether value is undefined
*/
function isUndefined( value ) {
	return value === void 0;
} // end FUNCTION isUndefined()


// EXPORTS //

module.exports = isUndefined;


/***/ })
/******/ ]);
});
//# sourceMappingURL=is-array-x.js.map