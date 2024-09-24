// express 中可以使用 cookie-parser 进行处理
const express = require('express');
//1. 安装 cookie-parser npm i cookie-parser
//2. 引入 cookieParser 包
const cookieParser = require('cookie-parser');
const app = express();
//3. 设置 cookieParser 中间件
app.use(cookieParser());
//4-1 设置 cookie
app.get('/set-cookie', (request, response) => {
    // 不带时效性
    response.cookie('username', 'wangwu');
    // 带时效性
    response.cookie('email', '23123456@qq.com', { maxAge: 5 * 60 * 1000 });
    //响应
    response.send('Cookie的设置');
});
//4-2 读取 cookie
app.get('/get-cookie', (request, response) => {
    //读取 cookie
    console.log(request.cookies);
    //响应体
    response.send('Cookie的读取');
});

//4-3 删除cookie
app.get('/delete-cookie', (request, response) => {
    //删除
    response.clearCookie('username');
    //响应
    response.send('cookie 的清除');
});
//4. 启动服务
app.listen(3000, () => {
    console.log('服务已经启动....');
});

// 不同浏览器中的cookie是相互独立的，不共享