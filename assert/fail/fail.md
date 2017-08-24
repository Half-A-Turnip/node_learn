#### fail(message);fail(actual,expected[,message[,operator[,stackStartFunction]]])
* actual \<any>
* expected \<ang>
* message \<any>
* operator \<string> 默认 '!='
* stackStartFunction \<function> 默认为assert.fail
<br/>
>1.抛出AssertionError。
<br/>
>2.如果message参数为空，则错误信息为actual参数+operator参数+expected参数。
<br>
>3.如果只提供actual参数与expected参数，则operator参数默认为'!='。
<br>
>4.如果提供message参数,则他会作为错误信息，其他参数会保存在错误对象的属性中。(actual,expected,operator参数不影响错误消息)
<br>
>5.如果提供了stackStartFunction参数，则该函数上的栈帧都会从栈信息中移除(Error.captureStackTrace)