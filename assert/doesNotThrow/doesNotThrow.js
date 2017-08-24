const assert = require('assert');

// throw actual; TypeError: 错误信息
// 断言中没有匹配的错误类型，抛出TypeError
// assert.doesNotThrow(
//     () => {
//         throw new TypeError('错误信息');
//     },
//     SyntaxError
// );

// AssertionError [ERR_ASSERTION]: Got unwanted exception (TypeError).
// assert.doesNotThrow(
//     () => {
//         throw new TypeError('错误信息')
//     },
//     TypeError
// )

// AssertionError [ERR_ASSERTION]: Got unwanted exception (TypeError): 抛出错误
assert.doesNotThrow(
    () => {
        throw new TypeError('错误信息')
    },
    TypeError,
    '抛出错误'
)