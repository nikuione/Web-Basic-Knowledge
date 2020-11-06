
都是知识点

1. dom树节点和渲染树节点一一对应吗，有什么是dom树会有，渲染树不会有的节点 
  不是，渲染树不包含head和隐藏的元素
2. CSS会阻塞dom解析吗？ 
  不会，CSS解析可以与DOM解析同进行
3. requestIdleCallback是干什么用的 
  在浏览器的空闲时段内调用的函数排队。这使开发者能够在主事件循环上执行后台和低优先级工作，而不会影响延迟关键事件，如动画和输入响应。
4. 浏览器的渲染原理、渲染过程
* 字节 → 字符 → 令牌 → 节点 → 对象模型。
* HTML 标记转换成文档对象模型 (DOM)；CSS 标记转换成 CSS 对象模型 (CSSOM)。
* DOM 和 CSSOM 是独立的数据结构。
* DOM和CSSOM都构建好之后，浏览器才能建成渲染树，然后开始渲染
* js会影响DOM和CSSOM，async 不会
5.关键渲染路径详述
  关键渲染路径是浏览器从收到 HTML、CSS 和 JavaScript 字节到对其进行必需的处理，从而将它们转变成渲染的像素这一过程中的一些中间步骤。
6.避免回流的方式
  合并多次dom操作；避免重复获取元素宽高等属性；不要一条条地改变样式，而要通过改变class；使用transform来做形变和位移
7.跨域的方式
  。。。
8.前端的网络安全如何防御（xss，csrf）
  xss： 将 & < > " ' / 转义为实体字符；html 属性也需要转义；将参数值进行 encodeURIComponent 编码
  csrf：跨站请求伪造： 验证 HTTP Referer 字段；在请求地址中添加 token 并验证；在 HTTP 头中自定义属性并验证。
9.cookies的保护方式
  http-only: 只允许http或https请求读取cookie、JS代码是无法读取cookie的(document.cookie会显示http-only的cookie项被自动过滤掉)。发送请求时自动发送cookie.
  secure: 仅在https、ssl等安全协议下使
  SameSite: 用来限制第三方cookie的属性，避免风险，主要包括三个值strict（最为严格，完全禁止第三方cookie，跨站点时，任何情况下都不会发送cookie。换言之，只有当前网页的URL与请求目标一致，才会带上cookie）、Lax（稍稍放宽，大多数情况也是不发送第三方cookie）、none（显式关闭SameSite属性，必须同时设置Secure属性（cookie只能通过HTTPS协议发送），否则无效），目前Chrome 80已经将该属性默认设置为Lax规则
10.浏览器的缓存机制
  强缓存，协商缓存
11.react的虚拟dom和diff描述
  虚拟dom：描述真实dom的js对象
  diff：状态改变时将新的虚拟dom树和改变前的dom树做比较，找出真正改变的内容进行页面渲染
12.react渲染优化（class，hook）
  class: shouldComponentUpdate/PureComponent
  针对函数式组件发布的Memo
  hook: useCallback和useMemo
  hook好处： 将多个生命周期合并，避免代码重复；useEffect可以将消除副作用方法写到第二个参数里，不需要拆分多个生命周期
13.react的context的使用场景
  需要多个组件工作的属性。Context 提供了一种在组件之间共享此类值的方式，而不必显式地通过组件树的逐层传递 props。
14.node有什么情况会导致内存溢出
  使用内存进行缓存
  队列消费不及时；监控队列长度；为异步请求增加超时机制
  作用域未释放
15.node的内存分配
  Node中通过JavaScript使用内存时只能使用部分内存（64位系统：1.4 GB，32位系统：0.7 GB），
16.event loop（浏览器和node）
node：
Timers（计时器阶段）：从图可见，初次进入事件循环，会从计时器阶段开始。此阶段会判断是否存在过期的计时器回调（包含 setTimeout 和 setInterval），如果存在则会执行所有过期的计时器回调，执行完毕后，如果回调中触发了相应的微任务，会接着执行所有微任务，执行完微任务后再进入 Pending callbacks 阶段。
Pending callbacks：执行推迟到下一个循环迭代的I / O回调（系统调用相关的回调）。
Idle/Prepare：仅供内部使用。（详略）
Poll（轮询阶段）：
当回调队列不为空时：
会执行回调，若回调中触发了相应的微任务，这里的微任务执行时机和其他地方有所不同，不会等到所有回调执行完毕后才执行，而是针对每一个回调执行完毕后，就执行相应微任务。执行完所有的回到后，变为下面的情况。
当回调队列为空时（没有回调或所有回调执行完毕）：
但如果存在有计时器（setTimeout、setInterval和setImmediate）没有执行，会结束轮询阶段，进入 Check 阶段。否则会阻塞并等待任何正在执行的I/O操作完成，并马上执行相应的回调，直到所有回调执行完毕。
Check（查询阶段）：会检查是否存在 setImmediate 相关的回调，如果存在则执行所有回调，执行完毕后，如果回调中触发了相应的微任务，会接着执行所有微任务，执行完微任务后再进入 Close callbacks 阶段。
Close callbacks：执行一些关闭回调，比如 socket.on('close', ...)等。
17.首屏优化方案
按需加载；gzip；uglify；node stream（不用等到所有 HTML 都渲染出来了才给浏览器端返回结果，可以部分渲染）；Service Worker缓存文件处理；设置http缓存；preload加载关键数据
18.在App中如何实现前端资源离线缓存（方案）


浏览器的输入url后的过程
js异步方式
promise.resolve是干嘛的
promise.then如何实现链式调用
promise.then不返还一个promise还能用then吗
promise.finally的作用，如何自己实现finally
promise原理
webpack的异步加载如何实现
webpack的分包策略
跨域方式有什么
jsonp的原理
csrf防御手段
cookie的samesite属性作用
js对象循环引用会导致什么问题
react如何阻止原生默认事件
react的fiber节点树是什么数据结构，为什么要用这样的数据结构
react 异步渲染原理，优先级如何划分
react hook有自己做一些自定义的hook吗
react key的原理
react如何实现函数式调用组件，toast.show()
react新增了什么生命周和删除了什么生命周期，为什么要删除


node对于option请求如何处理
node如何处理cors跨域
ES modules和commonjs的区别
node的event loop和浏览器的区别
dns查询过程，dns用什么协议发起dns查询的
tcp和udp区别
tcp的三次握手和四次挥手
协商缓存和强缓存的区别
https协议握手大概过程
对称加密和非对称加密的区别
非对称加密，私钥和公钥的区别
https证书的作用
其他

如何埋点，为什么用1*1像素的gif图片做上报
如何定义首屏

绑定事件有多少种方式
事件触发的流程，捕获和冒泡
捕获阶段能终止吗
终止冒泡阶段有哪些
如果实现one绑定事件
事件委托的原理
event.target和event.currtager的区别
浏览器显示一个图片有什么方式
如何获取url中的?后的参数
浏览器的内存回收机制 标记清除还是引用计数？
如何解决跨域
什么是简单请求什么复杂请求
const和let有什么区别
ES6常用的api有哪些
数组断引用的方式有什么
Base64图片有什么问题
node后端知识

Http强缓存和协商缓存用的是什么字段，整体流程是怎样
Https原理
Https第一次请求会携带什么
请求携带了浏览器支持的加密算法和哈希算法。
Ca证书的内容是什么
Https2.0的特性
Csrf攻击原理和防御方式
二进制分帧的具体是什么
Keep alive和多路复用的区别
Option请求的作用
Node gc方式
新生代和老生代的区别
新生代内存地址移动到老生代内存地址的过程
开放问题

长列表优化方案
首屏优化方案
Node如何保证第三方接口的稳定性


浏览器从写入url到加载完毕的流程
浏览器白屏原因
页面打开后cpu和内存快速增长，如何定位问题，可能有什么问题
长列表优化，以及长列表中，如果带搜索功能如何实现

最满意的项目列举2个
为什么使用RN
有100匹马，场地只有4条跑道，得出最快的4只马需要多少轮 Lam：100匹马，4个赛道，找出跑最快的4匹马。
已知函数fn1会随机返回1-5的整数，要求基于fn1编写fn2，要随机生成1-7，fn2内不能使用系统的随机api，只能调用fn1获取随机数


Serverless的优缺点，前端的应用范围
