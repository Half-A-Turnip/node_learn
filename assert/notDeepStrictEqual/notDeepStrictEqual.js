const assert = require('assert');

// AssertionError [ERR_ASSERTION]: { a: 1 } notDeepEqual { a: '1' }
// assert.notDeepEqual({ a: 1 }, { a: '1' });

// 测试通过
// assert.notDeepStrictEqual({ a: 1 }, { a: '1' });