const assert = require('assert');

// 测试通过
// assert.ok(true);
// assert.ok(1);

// AssertionError [ERR_ASSERTION]: false == true
// assert.ok(false);

// AssertionError [ERR_ASSERTION]: 0 == true
// assert.ok(0);

// AssertionError [ERR_ASSERTION]: 不是真值
// assert.ok(false, '不是真值');