#### equal(actual,error[,message])
* actual \<any>
* expected \<any>
* message \<any>
<br/>
使用相等运算符(==)测试actual参数与expected参数是否相等
。如果两个值不相等，则抛出一个带有message属性的AssertionError，其中 message 属性的值等于传入的 message 参数的值。 如果 message 参数为 undefined，则赋予默认的错误信息。