#### doesNotThrow(block,error[,message])
* block \<Function>
* expected \<RegExp>|\<Function>
* message \<any>
<br/>
断言block函数不会抛出异常
<br/>
>1.当doesNotThrow被调用时，会立即调用block函数
<br/>
>2.若抛出错误，且错误类型与error参数指定相同，就抛出AssertionError
<br/>
>3.若抛出错误，且错误类型不相同，或error参数为undefined，就抛出错误