const assert = require('assert');

//不会抛出AssertionError(Error对象不可枚举)
assert.deepEqual(Error('a'), Error('b'));

//AssertionError [ERR_ASSERTION]: 'b' deepEqual Error: b
assert.deepEqual('b', Error('b'));