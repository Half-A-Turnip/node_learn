const assert = require('assert');

// 构造函数
// assert.throws(
//     () => {
//         throw new Error('错误信息');
//     },
//     Error
// )

// 正则表达式
// assert.throws(
//     () => {
//         throw new Error('错误信息');
//     },
//     /错误/
// )

// 自定义函数
// assert.throws(
//     () => {
//         throw new Error('错误消息');
//     },
//     function(err) {
//         if ((err instanceof Error) && /错误/.test(err)) {
//             return true
//         }
//     },
//     '不是期望的错误'
// )

// 这是错误的！不要这么做！
// assert.throws(myFunction, '错误信息', '没有抛出期望的信息');

// 应该这么做。
// assert.throws(myFunction, /错误信息/, '没有抛出期望的信息');