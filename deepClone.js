function deepCopy(Obj){
    if(typeof obj === "object"){
        let newObj;
        newObj = Array.isArray(obj) ? []: {};
        for(let key of obj.keys()){
            newObj[key] = copy(obj[key]);

        }
        //获取原型链： newObj[key].__proto__ = Object.create(obj[key].__proto__);
        return newObj;
    }else{
        return Obj;
    }
}
