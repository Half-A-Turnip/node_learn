const assert = require('assert');

// AssertionError [ERR_ASSERTION]: 1 > 2 (1,2)
// assert.fail(1, 2, undefined, '>');

// AssertionError [ERR_ASSERTION]: 错误信息 (1,4)
// assert.fail(1, 2, '错误信息');
// assert.fail(1, 2, '错误信息', '>');

// AssertionError [ERR_ASSERTION]: undefined undefined undefined
// assert.fail();

// AssertionError [ERR_ASSERTION]: 错误消息
// assert.fail("错误消息");

// AssertionError [ERR_ASSERTION]: 'a' != 'b' (1,3)
// assert.fail('a', 'b');

// AssertionError [ERR_ASSERTION]: 'a' !== 'b'
// function suppressFrame() {
//     assert.fail('a', 'b', undefined, '!==', suppressFrame);
// }
// suppressFrame();//拦截