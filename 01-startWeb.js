const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

// 当服务器准备就绪时，将调用回调函数，
// 每次收到新请求时，就会调用request事件，提供两个对象：请求和响应
// 请求：提供请求详细信息，如：请求标头和请求数据
// 响应:用于将数据返回给调用者;
const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World'); // 关闭响应,将内容作为参数添加到end()
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
