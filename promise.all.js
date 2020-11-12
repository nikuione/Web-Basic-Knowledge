promiseAll = function(promises){
    let iterator = Symbol.iterator;
    if(!promises[iterator]) return;//非可遍历对象，不处理
    let results = new Array(promises.length);
    let successDataCount = 0;//已经成功的请求数
    return new Promise((resolve, reject) => {
        for(let i = 0;i < promises.length;i ++){
            if(!promises[i] instanceof Promist){
                successDataCount++;
                results[i] = null;
            } 
            promises[i].then((data) => {
                successDataCount++;
                results[i] = data;
                successDataCount === promises.length && resolve(results);
            }).catch((error) => {reject(error)});
        }

    });
}
