<a
  href="https://travis-ci.org/Xotic750/is-array-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/is-array-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/is-array-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/is-array-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/is-array-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/is-array-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/is-array-x"
  title="npm version">
<img src="https://badge.fury.io/js/is-array-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/is-array-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/is-array-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/is-array-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/is-array-x?branch=master"
  alt="bettercodehub score" height="18">
</a>
<a
  href="https://coveralls.io/github/Xotic750/is-array-x?branch=master"
  title="Coverage Status">
<img src="https://coveralls.io/repos/github/Xotic750/is-array-x/badge.svg?branch=master"
  alt="Coverage Status" height="18">
</a>

<a name="module_is-array-x"></a>

## is-array-x

Determines whether the passed value is an Array.

<a name="exp_module_is-array-x--module.exports"></a>

### `module.exports` ⇒ <code>boolean</code> ⏏

The isArray() function determines whether the passed value is an Array.

**Kind**: Exported member  
**Returns**: <code>boolean</code> - `true` if the object is an Array; otherwise, `false`.

| Param | Type            | Description                |
| ----- | --------------- | -------------------------- |
| obj   | <code>\*</code> | The object to be checked.. |

**Example**

```js
import isArray from 'is-array-x';

console.log(isArray([])); // true
console.log(isArray({})); // false
```
