function Promise(exector){
    let self = this;
    self.statu = 'pending';
    self.data = undefined;
    self.onResolveCallback = [];
    self.onRejectCallback = [];
    function resolve(data){
        setTimeout(function(){
            if(self.statu === 'pending'){
                self.statu = 'success';
                self.data = data;
                for(let item of self.onResolveCallback){
                    item && item(data);
                };
            }
        });
    }
    function reject(error){
        setTimeout(function(){
            if(self.statu === 'pending'){
                self.statu = 'failed';
                self.data = error;
                for(let item of self.onRejectCallback){
                    item && item(data);
                };
        }});
    }
    try{
        exector(resolve, reject);
    }catch(e){
        reject(e);
    }
};
Promise.prototype.then = function(resolve, reject){
    this.onResolveCallback.push(resolve);
    this.onRejectCallback.push(reject);
};
Promise.prototype.catch = function(reject){
    this.onRejectCallback.push(reject);
};
Promise.all = function(promises) {
        return new Promise(function(resolve, reject) {
            var resolvedCounter = 0
            var promiseNum = promises.length
            var resolvedValues = new Array(promiseNum)
            for (var i = 0; i < promiseNum; i++) {
                (function(i) {
                    Promise.resolve(promises[i]).then(function(value) {
                        resolvedCounter++
                        resolvedValues[i] = value
                        if (resolvedCounter == promiseNum) {
                            return resolve(resolvedValues)
                        }
                    }, function(reason) {
                        return reject(reason)
                    })
                })(i)
            }
        })
    }

Promise.race = function(){};
Promise.reject = function(){};
Promise.resolve = function(){};
