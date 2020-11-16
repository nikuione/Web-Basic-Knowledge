

function retry(fn, count, timeout){
    rerun new Promise((resolve, reject) => {
        let tryTimes = 0;//
        let timer = setTimeout(() => {
           reject(new Error('over times'));
        }, timeout);
        let getData = () => {
            tryTimes++;
            fn.then((data) => {
                clearTimeout(timer);
                resolve(data);
            }).catch((error) => {
                if(tryTimes === count){
                    clearTimeout(timer);
                    reject(new Error('over times'));
                    return;
                }
                getData();
            });
        }
        getData();

    });
}







