#### deepStrictEqual(actual,expected[,message])
* actual \<any\>
* expected \<any\>
* message \<any\>
<br/>
与deepEqual大致相同，有三点区别
<br/>
>1.原始值使用全等运算符(===)比较。Set的值与Map的键使用SameValueZero比较
<br/>
>2.对象的原型也使用全等运算符比较
<br/>
>3.对象的类型标签要求相同