const assert = require('assert');

//Map和Set包含的子项也会被测试，子对象中可枚举的自身属性也会被测试
const obj1 = {
    a: {
        b: 1
    }
};
const obj2 = {
    a: {
        b: 2
    }
};
const obj3 = {
    a: {
        b: 1
    }
};
const obj4 = Object.create(obj1);

// 测试通过，对象与自身相等
// assert.deepEqual(obj1, obj1);

// 测试不通过，b的值不同
// 抛出AssertionError [ERR_ASSERTION]: { a: { b: 1 } } deepEqual { a: { b: 2 } }
// assert.deepEqual(obj1, obj2);

// 测试通过，两个对象相等
// assert.deepEqual(obj1, obj3);

// 测试不通过，不测试原型
// AssertionError [ERR_ASSERTION]: { a: { b: 1 } } deepEqual {}
// assert.deepEqual(obj1, obj4);