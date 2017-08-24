const assert = require('assert');
// 测试通过
// assert.equal(1, 1);
// assert.equal(1, '1');

// AssertionError [ERR_ASSERTION]: 1 == 2
// assert.equal(1, 2);

//AssertionError [ERR_ASSERTION]: { a: { b: 1 } } == { a: { b: 1 } }
assert.equal({ a: { b: 1 } }, { a: { b: 1 } });