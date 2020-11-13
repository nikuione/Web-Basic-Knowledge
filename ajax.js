// 原生ajax实现，非常的简单
function ajax(options) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', 'http://localhost:8080/readNum', true); //最后一个参数指定是否是async
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                options.success(xhr.responseText);
            } else {
                options.error(xhr, xhr.status, xhr.statusText);
            }
        }
    };
}
