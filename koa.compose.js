compose() {
        return async ctx => {
            function createNext(middleware, oldNext) {
                return async () =&gt; {
                    await middleware(ctx, oldNext);
                }
            }
            let len = this.middlewares.length;
            //设置最后一个中间件的next；
            let next = async () =&gt; {
                return Promise.resolve();
            };
            //从最后一个中间件开始遍历
            for (let i = len - 1; i &gt;= 0; i--) {
                let currentMiddleware = this.middlewares[i];
                next = createNext(currentMiddleware, next);
            }
            //这个next就是第一个中间件，先执行第一个中间件，遇到next，就开始调用第二个中间件；所有的middleware都执行完后，函数入栈到最后一个中间件，然后开始出栈，执行next后面的代码。
            await next();
        };
    }
