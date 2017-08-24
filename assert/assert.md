#### assert
<br/>
对于SamevalueZero比较，建议使用ES2015的Object.is()
<br/>

```javascript
const assert = require('assert');
const a = 0;
const b = -a;
assert.notStrictEqual(a,b);
// 抛出AssertionError: 0 !== -0
// 全等运算符不区分 -0 与 +0
assert(!Object.is(a,b));
// Object.is()可以区分

const str1 = 'foo';
const str2 = 'foo';
assert.strictEqual(str1 / 1, str2 / 1);
// 抛出 AssertionError: NaN === NaN
// 因为全等运算符不能用于测试 NaN。
assert(Object.is(str1 / 1, str2 / 1));
// 但 Object.is() 可以测试