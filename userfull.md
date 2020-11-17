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
用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。   
7.promise封装setstate   
8.redux基本组成和设计单向数据流   
9.https协议的过程  
10.https获取加密密钥的过程   
11.http的方法有哪几种,每种方法的有用途  
12.类式继承的方案   
        
13.prototype继承的实现   
14.数字千分位处理，正则和非正则都要实现  
15.借用构造继承，几种组合继承方式   
16.看编程代码说出运行结果： Process.nextTick，setImmediate 和promise.then 的优先级 Process.nextTick，pronise, setImmediate的优先级   
17.实现一个bind函数  
18.千位加逗号  
        (num+ '').replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,'$1,');   
        toLocalString  
        循环  
19.三个继承方式的优缺点 优化列出代码  
        B.prototype = new A; //B子类 => A父类，让子类B的原型指向父类A的实例: B之前的原型B.prototype上的方法b已经查找不到，b的constructor应该是B，但现在是A;b.__proto__或b.__proto__.__proto__肆意修改父类上的属性和方法，而父类上不管私有还是公有的属性和方法都会成为子类公有的  
        function B (){ A.call(this)} //把父类当做普通函数执行，让其执行的时候，方法中的this变为子类:父类原型上的公有属性方法无法被继承过来 
        function B() { A.call(this);}  
        B.prototype = Object.create(A.prototype);//=>Object.create(OBJ) 创建一个空对象，让其__proto__指向OBJ（把OBJ作为空对象的原型）  
        class extend 其实extends继承和寄生组合继承基本类似，而且必须加上super()函数，它相当于A.call(this)。  
        
20.nodejs的事件循环  
21.bfc  块级格式化上下文  
        Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠。  
        BFC的区域不会与float box重叠。  
22.css实现正方形div水平垂直居中  
        vertical-align:middle  + 行内元素  
        父元素display:flex;而子元素align-self:center;  
        子元素设置position属性，通过transform:translateY(-50%);top:50%。 
        设置子元素的line-height值等于父元素的height，这种方法适用于子元素为单行文本的情况。  
23.koa1的原理,继承  
        application koa实列；listen，use方法等封装  
        context：代理，__defineSetter__ 和 __defineGetter__ 来做获取request、response数据  
        request、response： 基于 http.req  和http.res 封装一些方法  
        
24.最后是一个写代码 处理有依赖的异步任务 加重试    
25. diff的原理   
        同级⽐比较，Web UI 中 DOM 节点跨层级的移动操作特别少，可以忽略略不不计。  
        拥有不不同类型的两个组件将会⽣生成不不同的树形结构。  
        开发者可以通过 key prop 来暗示哪些⼦子元素在不不同的渲染下能保持稳定;  
26. es6箭头函数   
27. import和requre的区别   
28. symbol   
29. 函数实现正面模板   
30. 正方形实现，三角形实现   
        border. 
31. CSS考了 伪类   
32. 实现布局header,content,footer，上中下布局；当content 超出窗口可视区，不显示footer；当content 没超出可视区时，固定footer 在最下面. 
33. 算法:背包问题、闭包问题、函数柯里化. 
34. 宽是高的一半的垂直居中，里面有字体也要垂直居中类数组   
35. promise async set time out先后次序. 
36. event类 on once灯方法  
37. ==的隐式转化. 
38.什么是闭包， 39.最长子序列 40.二叉树中序遍历 41.http握手原理 42.react 新版本的特性 43. 多空格字符串格式化为数组 44、bind函数运行结果 45、点击table的td显示td内容 46、数字千分位处理 47、固定日期与当前时间格式化处理 48、上中下三栏布局 49、实现一个子类实例可以继承父类的所有方法 50. Jsonp跨域，js原型继承 & 原型链，promise，二叉树搜寻算法，算法：前端做并发请求控制 
 
 
 1.主要是围绕你的项目经历和技术，有一定的深度，主要还是要对项目全面熟悉；还有一个就是函数柯理化的编码实现 2. 函数柯里化、Web安全、react性能优化、react算法原理 3.上来直接让写一个autocomplete 组件，可能是想考察业务思考点； 4. 后续的问题主要会接着业务场景问 扣实际场景 不问知识理论； 5. http网络协议 ； 6. tcp为什么是可靠的； 7. js设计模式； 8. solid原则； 9. 柯里化；

 1.自己做得最有成就的项目 2.自己主动承担并是核心的项目 3.项目深度:比如现场实现vue的数据代理等 4.技术广度:什么是微前端等 5.职业发展


链表 二分算法 promise 缓存 虚拟dom bfc
