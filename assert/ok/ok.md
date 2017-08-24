#### ok(value[,message])
* value \<any>
* message \<any>
<br/>
>1.测试value是否为真值。相当于assert.equal(!!value,true,message)
<br>
>2.如果value不为真值，则抛出一个带有message属性的AssertionError，其中message属性的值等于传入的message参数的值。如果message的参数为undefined,则赋予默认的错误信息