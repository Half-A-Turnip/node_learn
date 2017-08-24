#### deepEqual(actual,expected[,message])
* actual \<any\>
* expected \<any\>
* message \<any\>
<br/>
>1.测试actual参数和expected参数是否深度相等。原始值使用相等运算符(==)比较。
<br/>
>2.只测试可枚举的自身属性，不测试对象的原型、连接符、或不可枚举的属性(这些情况可以使用assret.deepStrictEqual())。
<br/>
>3.如果两个值不相等，则会抛出一个带有message属性的AssertionError，其中message属性的值等于传入的message参数的值。如果message参数为undefined，则默认赋予默认的错误信息
