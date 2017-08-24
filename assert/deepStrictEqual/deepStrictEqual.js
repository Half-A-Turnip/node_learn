const assert = require('assert');
// 测试通过，因为1=='1'
// assert.deepEqual({ a: 1 }, { a: '1' });

// AssertionError [ERR_ASSERTION]: { a: 1 } deepStrictEqual { a: '1' }
// 1!=='1'
// assert.deepStrictEqual({ a: 1 }, { a: '1' });

const date = new Date();
const object = {};
const fakeDate = {};

Object.setPrototypeOf(fakeDate, Date.prototype);

// 测试通过，不测原型
// assert.deepEqual(object, fakeDate);

// AssertionError [ERR_ASSERTION]: {} deepStrictEqual Date {}
// 测试原型
// assert.deepStrictEqual(object, fakeDate);

// 测试通过，不测试类型标签
// assert.deepEqual(date, fakeDate);

// AssertionError [ERR_ASSERTION]: 2017-08-24T03:09:44.223Z deepStrictEqual Date {}
// 测试类型标签不同
assert.deepStrictEqual(date, fakeDate);