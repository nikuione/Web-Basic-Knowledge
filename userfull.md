1.  dom react原理   
2.  css布局  
3.  js原型链继承   每个实例对象（ object ）都有一个私有属性（称之为 __proto__ ）指向它的构造函数的原型对象（prototype ）
4.  fetch取消   AbortController   
        const controller = new AbortController();
        let signal = controller.signal;
        controller.abort();
        fetch(url, {signal}).then(function(response) {...}
   axios:   
   Make XMLHttpRequests from the browser  
   Make http requests from node.js  
   Supports the Promise API  
   Intercept request and response  
   Transform request and response data  
   Cancel requests  
   Automatic transforms for JSON data  
   Client side support for protecting against XSRF   
   
5.eventloop  
6.instanceof  
7.promise封装setstate 8.redux基本组成和设计单向数据流 9.https协议的过程 10.https获取加密密钥的过程 11.http的方法有哪几种,每种方法的有用途 12.类式继承的方案 13.prototype继承的实现 14.数字千分位处理，正则和非正则都要实现 15.借用构造继承，几种组合继承方式 16.看编程代码说出运行结果： Process.nextTick，setImmediate 和promise.then 的优先级 Process.nextTick，pronise, setImmediate的优先级 17.实现一个bind函数 18.千位加逗号 19.三个继承方式的优缺点 优化列出代码 20.nodejs的事件循环 21.bfc 22.css实现正方形div水平垂直居中 23.koa1的原理,继承 24.最后是一个写代码 处理有依赖的异步任务 加重试 25. diff的原理 26. es6箭头函数 27. import和requre的区别 28. symbol 29. 函数实现正面模板 30. 正方形实现，三角形实现 31. CSS考了 伪类 32. 实现布局header,content,footer，上中下布局；当content 超出窗口可视区，不显示footer；当content 没超出可视区时，固定footer 在最下面 33. 算法:背包问题、闭包问题、函数柯里化 34. 宽是高的一半的垂直居中，里面有字体也要垂直居中类数组 35. promise async set time out先后次序 36. event类 on once灯方法 37.. ==的隐式转化 38.什么是闭包， 39.最长子序列 40.二叉树中序遍历 41.http握手原理 42.react 新版本的特性 43. 多空格字符串格式化为数组 44、bind函数运行结果 45、点击table的td显示td内容 46、数字千分位处理 47、固定日期与当前时间格式化处理 48、上中下三栏布局 49、实现一个子类实例可以继承父类的所有方法 50. Jsonp跨域，js原型继承 & 原型链，promise，二叉树搜寻算法，算法：前端做并发请求控制 
 
 
 1.主要是围绕你的项目经历和技术，有一定的深度，主要还是要对项目全面熟悉；还有一个就是函数柯理化的编码实现 2. 函数柯里化、Web安全、react性能优化、react算法原理 3.上来直接让写一个autocomplete 组件，可能是想考察业务思考点； 4. 后续的问题主要会接着业务场景问 扣实际场景 不问知识理论； 5. http网络协议 ； 6. tcp为什么是可靠的； 7. js设计模式； 8. solid原则； 9. 柯里化；

 1.自己做得最有成就的项目 2.自己主动承担并是核心的项目 3.项目深度:比如现场实现vue的数据代理等 4.技术广度:什么是微前端等 5.职业发展


链表 二分算法 promise 缓存 虚拟dom bfc
