var http = require('http');

http.createServer(function (request, response) {

    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // 发送响应数据 "Hello World"
    response.end('Hello World\n');
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');

/* 
    分析Node.js的HTTP服务器
    - 第一行请求(require)Node.js自带的http模块，并且把它赋值给http变量
    - 接着我们调用http模块提供的函数:createServer；这个函数会返回一个对象
    这个对象有一个叫做listen的方法，这个方法有个数值参数，用于指定这个HTTP
    服务器监听的端口号

    注意点
    1. 如果没有指定具体的地址，默认为回环地址；
*/