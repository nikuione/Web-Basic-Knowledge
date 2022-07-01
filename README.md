

都是知识点

1. dom树节点和渲染树节点一一对应吗，有什么是dom树会有，渲染树不会有的节点  
  不是，渲染树不包含head和隐藏的元素
2. CSS会阻塞dom解析吗？ 
  不会，CSS解析可以与DOM解析同进行
3. requestIdleCallback是干什么用的 
  在浏览器的空闲时段内调用的函数队列。这使开发者能够在主事件循环上执行后台和低优先级工作，而不会影响延迟关键事件，如动画和输入响应。
4. 浏览器的渲染原理、渲染过程
    * HTML解码、预解析、符号化、构建dom树
    * CSS 标记转换成 CSS 对象模型 (CSSOM) 生成css规则表，然后是规则匹配
    * DOM 和 CSSOM 是独立的数据结构。
    * DOM和CSSOM都构建好之后，浏览器才能建成渲染树： 
        通过计算让任何尺寸值都减少到三个可能之一：auto、百分比、px，比如把rem转化为px。
         级联：浏览器需要一种方法来确定哪些样式才真正需要应用到对应元素，所以它使用一个叫做specificity的公式，这个公式会通过，然后得出一个权重值，取最高的那个。
              标签名、class、id、是否内联样式、!important
          布局与绘制
          合并渲染层
          回流和重绘
    * js会影响DOM和CSSOM，async 不会
5.  关键渲染路径详述  
  关键渲染路径是浏览器从收到 HTML、CSS 和 JavaScript 字节到对其进行必需的处理，从而将它们转变成渲染的像素这一过程中的一些中间步骤.  
  
6.  避免回流的方式  
  合并多次dom操作；
  避免重复获取元素宽高等属性；
  不要一条条地改变样式，而要通过改变class；
  使用transform来做形变和位移；
  display:none 会触发回流，而 visibility:hidden 只会触发重绘。
    
7.  跨域的方式  
    document.domain + iframe（只能解决子域名不同问题）
    hash ＋ iframe
    window.name(2M) + iframe
    jsonp
    webSocket
    postMessage
    cors（前端设置是否带cookie xhr.withCredentials = true;）
    nginx代理（读取cookie： proxy_cookie_domain）
    node中间件代理（读取cookie： cookieDomainRewrite）
    
8.  前端的网络安全如何防御（xss，csrf）   
  xss： 将 & < > " ' / 转义为实体字符；html 属性也需要转义；将参数值进行 decodeURIComponent 编码   
  csrf：跨站请求伪造： 验证 HTTP Referer 字段；在请求地址中添加 token 并验证；在 HTTP 头中自定义属性并验证。   
9.  cookies的保护方式   
  http-only: 只允许http或https请求读取cookie、JS代码是无法读取cookie的(document.cookie会显示http-only的cookie项被自动过滤掉)。发送请求时自动发送cookie.  
  secure: 仅在https、ssl等安全协议下使用  
  SameSite: 用来限制第三方cookie的属性，避免风险，主要包括三个值strict（最为严格，完全禁止第三方cookie，跨站点时，任何情况下都不会发送cookie。换言之，只有当前网页的URL与请求目标一致，才会带上cookie）、Lax（稍稍放宽，大多数情况也是不发送第三方cookie）、none（显式关闭SameSite属性，必须同时设置Secure属性（cookie只能通过HTTPS协议发送），否则无效），目前Chrome 80已经将该属性默认设置为Lax规则  
10. 浏览器的缓存机制  
  强缓存，协商缓存  
  控制强制缓存的字段分别是Expires和Cache-Control，其中Cache-Control优先级比Expires高。
            public：所有内容都将被缓存（客户端和代理服务器都可缓存）
        
        
            private：所有内容只有客户端可以缓存，Cache-Control的默认取值
        
        
            no-cache：客户端缓存内容，但是是否使用缓存则需要经过协商缓存来验证决定
        
        
            no-store：所有内容都不会被缓存，即不使用强制缓存，也不使用协商缓存
        
        
            max-age=xxx (xxx is numeric)：缓存内容将在xxx秒后失效
            
            内存缓存(from memory cache)：内存缓存具有两个特点，分别是快速读取和时效性：
        
        
            快速读取：内存缓存会将编译解析后的文件，直接存入该进程的内存中，占据该进程一定的内存资源，以方便下次运行使用时的快速读取。
        
        
            时效性：一旦该进程关闭，则该进程的内存则会清空。
        
        
            硬盘缓存(from disk cache)：硬盘缓存则是直接将缓存写入硬盘文件中，读取缓存需要对该缓存存放的硬盘文件进行I/O操作，然后重新解析该缓存内容，读取复杂，速度比内存缓存慢。

控制协商缓存的字段分别有：Last-Modified / If-Modified-Since和Etag / If-None-Match，其中Etag / If-None-Match的优先级比Last-Modified / If-Modified-Since高。状态码304.

11. react的虚拟dom和diff描述  
  虚拟dom：描述真实dom的js对象    
  diff：状态改变时将新的虚拟dom树和改变前的dom树做比较，找出真正改变的内容进行页面渲染  
12. react渲染优化（class，hook）  
  class: shouldComponentUpdate/PureComponent  
  针对函数式组件发布的Memo  
  hook: useCallback和useMemo  
  hook好处： 将多个生命周期合并，避免代码重复；useEffect可以将消除副作用方法写到第二个参数里，不需要拆分多个生命周期  
13. react的context的使用场景  
  多个组件都需要的属性。Context 提供了一种在组件之间共享此类值的方式，而不必显式地通过组件树的逐层传递 props。  
14. node有什么情况会导致内存溢出  
  使用内存进行缓存  
  队列消费不及时；（解决方案：监控队列长度；为异步请求增加超时机制）  
  作用域未释放  
15. node的内存分配  
  当然可以通过 node --max-old-space-size=1700 (单位是MB） 或 node --max-new-space-size=1024(单位是KB)来进行设置。  
  V8的内存分代分为两代，一种是新生代，主要存放对象为存活时间较短的对象，另一种是老生代，主要存放较长时或常驻内存的对象。     
  老生代 64位下 1.4GB 32位下 700MB  
  新生代 64位下 32MB 32位下 16MB  
16. event loop（浏览器和node）  
    * Timers（计时器阶段）：从图可见，初次进入事件循环，会从计时器阶段开始。此阶段会判断是否存在过期的计时器回调（包含 setTimeout 和 setInterval），如果存在则会执行所有过期的计时器回调，执行完毕后，如果回调中触发了相应的微任务，会接着执行所有微任务，执行完微任务后再进入 Pending callbacks 阶段。  

    * Pending callbacks：执行推迟到下一个循环迭代的I / O回调（系统调用相关的回调）。  
    * Idle/Prepare：仅供内部使用。（详略）  
    * Poll（轮询阶段）：  
    当回调队列不为空时：  
会执行回调，若回调中触发了相应的微任务，这里的微任务执行时机和其他地方有所不同，不会等到所有回调执行完毕后才执行，而是针对每一个回调执行完毕后，就执行相应微任务。执行完所有的回到后，变为下面的情况。      
    当回调队列为空时（没有回调或所有回调执行完毕）：  
但如果存在有计时器（setTimeout、setInterval和setImmediate）没有执行，会结束轮询阶段，进入 Check 阶段。否则会阻塞并等待任何正在执行的I/O操作完成，并马上执行相应的回调，直到所有回调执行完毕。   
    * Check（查询阶段）：会检查是否存在 setImmediate 相关的回调，如果存在则执行所有回调，执行完毕后，如果回调中触发了相应的微任务，会接着执行所有微任务，执行完微任务后再进入 Close callbacks 阶段。  
    * Close callbacks：执行一些关闭回调，比如 socket.on('close', ...)等。  
17. 首屏优化方案  
按需加载；gzip；uglify；node stream（不用等到所有 HTML 都渲染出来了才给浏览器端返回结果，可以部分渲染）；Service Worker缓存文件处理；设置http缓存；preload加载关键数据  
18. 在App中如何实现前端资源离线缓存（方案）  
serviceWorker  
19. 浏览器的输入url后的过程  
https://www.cnblogs.com/jin-zhe/p/11586327.html   
    * HSTS  
    * 检查浏览器本地缓存  
    * 网络请求阶段 DNS解析 http 请求 及https请求  
    * 是否重定向  
    * 是否有协商缓存  
    * gzip 解压  
    * html 渲染过程  
20. js异步方式
    callback  
    事件监听：事件驱动型，运行流程会变得很不清晰
    发布订阅
    promise
    generator
    await
    

21. promise.resolve是干嘛的  
    Promise.resolve(value);//返回value
    Promise.resolve(promise);//返回promise的副本
    Promise.resolve(theanable);//将一个类promise对象转换为promise
22. promise.then如何实现链式调用？promise.then不返回一个promise，还能用then吗  
    promise.then返回一个新的promise；不能
23. promise.finally的作用，如何自己实现finally  
    无论是resolve还是reject，都会走finally方法。
    MyPromise.prototype.finally = function(fn) {
        return this.then(value => {
           fn();
           return value;
        }, reason => {
            fn();
            throw reason;
        });
    };
24. promise原理  
...
25  .webpack的异步加载如何实现  
require.ensure 引用时webpack会创建script标签进行加载  
import() 返回promise  
26. webpack的分包策略  
    externals 配置外部库，并全局挂载引用变量
    cacheGroups 配置分包规则 将满足条件的依赖提取到一个chunk
27. jsonp的原理  
    首先是利用script标签的src属性来实现跨域。  
    通过将前端方法作为参数传递到服务器端，然后由服务器端注入参数之后再返回，实现服务器端向客户端通信。  
    由于使用script标签的src属性，因此只支持get方法  
28. js对象循环引用会导致什么问题  
  垃圾无法回收，内存泄漏  
29. react如何阻止原生默认事件  
  阻止合成事件间的冒泡，用e.stopPropagation();  
  阻止原生事件与最外层document上的事件间的冒泡 e.nativeEvent.stopImmediatePropagation();  
  
30. react的fiber节点树是什么数据结构，为什么要用这样的数据结构  
    链表结构；如果 React 要同步遍历整个组件树并为每个组件执行任务，它可能会运行超过 16 毫秒。这将导致帧丢失，导致不顺畅的视觉效果。使用堆栈结构的递归遍历不能暂停和拆分工作单元。使用链接结构可以暂停可以阻止堆栈不断增加。。   
    
31. react 异步渲染原理，优先级如何划分  
  同步任务，优先级最高  
  当前调度正执行的任务  
  动画  
  高优先级  
  低优先级  
  当前屏幕外的更新，优先级最低  
    
32. react hook有自己做一些自定义的hook吗  
    可以，自定义use开始的方法  
33. react key的原理  
    提高在数组前插入元素的渲染效率  
34. react如何实现函数式调用组件，toast.show()  
35. react新增了什么生命周和删除了什么生命周期，为什么要删除     
    由于 reconciliation 的阶段会被打断，可能会导致 commit 前的这些生命周期函数多次执行。react 官方目前已经把 componentWillMount、componentWillReceiveProps 和 componetWillUpdate 标记为 unsafe，并使用新的生命周期函数 getDerivedStateFromProps 和 getSnapshotBeforeUpdate 进行替换。  

36. redux的好处：
  保证数据的唯一性，数据变化可追溯  
  代码风格要求严格，提高可维护性
  服务器端创建的store会转发到客户端  
  拆分小函数，便于测试
 
  主要有三个核心方法，action，store，reducer
  
37. 什么是简单请求？node对于option请求如何处理？
  Mozilla对于简单请求的要求是： 以下三项必须都成立：
  只能是Get、Head、Post方法
  除了浏览器自己在Http头上加的信息（如Connection、User-Agent），开发者只能加这几个：Accept、Accept-Language、Content-Type、。。。。
  Content-Type只能取这几个值： application/x-www-form-urlencoded multipart/form-data text/plain
  在设置跨域头时简单请求不需要发送OPTIONS嗅探请求，但只能按发送简单的GET、HEAD或POST请求，且不能自定义HTTP Headers。Preflighted 请求和认证请求，XHR会首先发送一个OPTIONS嗅探请求，然后XHR会根据OPTIONS请求返回的Access-Control-*等头信息判断是否有对指定站点的访问权限，并最终决定是否发送实际请求信息。
38. node如何处理cors跨域
node作为接口服务器时：在返回头中设置跨域的域名 access-controll-allow-origin
node做前端服务器时：http＋proxy
  app.use('/', proxy({
      // 代理跨域目标接口
      target: 'http://www.domain2.com:8080',
      changeOrigin: true,

      // 修改响应头信息，实现跨域并允许带cookie
      onProxyRes: function(proxyRes, req, res) {
          res.header('Access-Control-Allow-Origin', 'http://www.domain1.com');
          res.header('Access-Control-Allow-Credentials', 'true');
      },

      // 修改响应信息中的cookie域名
      cookieDomainRewrite: 'www.domain1.com'  // 可以为false，表示不修改
}));
40. ES modules和commonjs的区别
  commonJs是被加载的时候运行，esModule是编译的时候运行  
  commonJs输出的是值的浅拷贝，esModule输出值的引用  
  commentJs具有缓存。在第一次被加载时，会完整运行整个文件并输出一个对象，拷贝（浅拷贝）在内存中。下次加载文件时，直接从内存中取值  
  ES6 模块加载 CommonJS 模块：module.exports 等同于 export default 可以用 import 引入  
  CommonJS 模块加载 ES6 模块：CommonJS 模块加载 ES6 模块，不能使用require命令，而要使用import()函数。  
  
41. tcp和udp区别
    1)  TCP提供面向连接的传输，通信前要先建立连接（三次握手机制）； UDP提供无连接的传输，通信前不需要建立连接。
    2） TCP提供可靠的传输（有序，无差错，不丢失，不重复）； UDP提供不可靠的传输。
    3） TCP面向字节流的传输，因此它能将信息分割成组，并在接收端将其重组； UDP是面向数据报的传输，没有分组开销。
    4） TCP提供拥塞控制和流量控制机制； UDP不提供拥塞控制和流量控制机制。
42. tcp的三次握手和四次挥手

43. https协议握手大概过程
44. 对称加密和非对称加密的区别
45. 非对称加密，私钥和公钥的区别
46. https证书的作用  

47. 如何埋点，为什么用1*1像素的gif图片做上报
    1）能够完成整个 HTTP 请求+响应（尽管不需要响应内容）
    2）触发 GET 请求之后不需要获取和处理数据、服务器也不需要发送数据
    3）跨域友好
    4）执行过程无阻塞
    5）相比 XMLHttpRequest 对象发送 GET 请求，性能上更好
    6）GIF的最低合法体积最小（最小的BMP文件需要74个字节，PNG需要67个字节，而合法的GIF，只需要43个字节

48. 如何定义首屏

49. 绑定事件有多少种方式  
  * < button onclick="func()">Click</button>   //函数上下文是window
  * <script type="text/javascript">
  var func = () => {
    alert('hello world')
  };
</script>  
  * var oBox = document.getElementById("container");oBox.onclick = function() {} //兼容性较好  
  * oBox.addEventListener("click",fn(),false);  
  * IE： oBox.attachEvent("click",fn());  
50. 事件触发的流程，捕获和冒泡
51. 捕获阶段能终止吗  
  能，option为true ＋ e.stopPropagation()
52. 终止冒泡阶段有哪些  
  e.stopPropagation()
  IE: e.cancelBubble = true

53. 如果实现one绑定事件
54. 事件委托的原理
55. event.target和event.currtager的区别  
  event.target指向引起触发事件的元素，而event.currentTarget则是事件绑定的元素
56. 浏览器显示一个图片有什么方式
57. 如何获取url中的?后的参数
58. 浏览器的内存回收机制 标记清除还是引用计数？  
  标记清除；引用计数;因为存在循环引用的情况会导致内存无法释放，需要手动值为 null，因此大多数的浏览器已经放弃这种回收方式。

61. 数组断引用的方式有什么
62. Base64图片有什么问题

63. Https第一次请求会携带什么  
请求携带了浏览器支持的加密算法和哈希算法。
64. https与http的区别
  * http明文传输；https密文传输
  * 端口不一样，http 80，https 443
  * http需要证书，https不需要

65. http1.1新特性：   
    缓存处理，HTTP1.1引入了更多的缓存控制策略例如Entity tag，If-Unmodified-Since, If-Match, If-None-Match等更多可供选择的缓存头来控制缓存策略。  
    HTTP1.1则在请求头引入了range头域，它允许只请求资源的某个部分，即返回码是206，支持断点续传。  
    错误通知的管理，在HTTP1.1中新增了24个错误状态响应码，如409（Conflict）表示请求的资源与资源的当前状态发生冲突；410（Gone）表示服务器上的某个资源被永久性的删除。   
    HTTP1.1的请求消息和响应消息都应支持Host头域，且请求消息中如果没有Host头域会报告一个错误（400 Bad Request）。  
    HTTP 1.1支持长连接（PersistentConnection）和请求的流水线（Pipelining）处理，在一个TCP连接上可以传送多个HTTP请求和响应，减少了建立和关闭连接的消耗和延迟，在HTTP1.1中默认开启Connection： keep-alive    
    
66. Https2.0的特性
    新的二进制格式  
    多路复用  
    server push  
    head压缩  
    
67. 二进制分帧的具体是什么

68. Keep alive和多路复用的区别
    串行和并行   
    
69. Node gc方式  
    新生代和老生代的区别
      1）存储大小不同
      2）垃圾回收算法不同；切尼算法；标记回收和标记整理
      3）存储对象存活的生命周期长度不同
70. 新生代内存地址移动到老生代内存地址的过程

71. 长列表优化，以及长列表中，如果带搜索功能如何实现

72. Node如何保证第三方接口的稳定性


73. 页面打开后cpu和内存快速增长，如何定位问题，可能有什么问题

74. 最满意的项目列举2个



75. Serverless的优缺点，前端的应用范围
76. jest react渲染：  
enzyme有3种渲染方式：render、mount、shallow。  
render采用的是第三方库Cheerio的渲染，渲染结果是普通的html结构，对于snapshot使用render比较合适。  
shallow和mount对组件的渲染结果不是html的dom树，而是react树，  
这些只是渲染结果上的差别，更大的差别是shallow和mount的结果是个被封装的ReactWrapper，可以进行多种操作，譬如find()、parents()、children()等选择器进行元素查找；state()、props()进行数据查找，setState()、setprops()操作数据；simulate()模拟事件触发。  
shallow只渲染当前组件，只能能对当前组件做断言；mount会渲染当前组件以及所有子组件，对所有子组件也可以做上述操作。一般交互测试都会关心到子组件，我使用的都是mount。但是mount耗时更长，内存啥的也都占用的更多，如果没必要操作和断言子组件，可以使用shallow。  
77. 发布订阅模式实现，见dispatch.js
78. 双向数据绑定：  
   *  观察者模式
   *  脏检测
   *  数据劫持  
      
79.白屏时间的定义及优化：
  白屏时间： performance.timing.domInteractive - performance.timing.responseStart  
  优化：dns预热；node 流下发；使用gzip格式下发html；拆分首屏css；js放到body最后请求，并使用async属性；简化dom结构；图片懒加载；使用prefetch加载关键样式



