/**
 * express 框架封装了一些 API 来方便获取请求报文中的数据
 * 并且兼容原生 HTTP 模块的获取方式
 */
//导入 express
const express = require('express');
//创建应用对象
const app = express();
//获取请求的路由规则
app.get('/request', (req, res) => {
    //1. 获取报文的方式与原生 HTTP 获取方式是兼容的
    console.log(req.method);
    console.log(req.url);
    console.log(req.httpVersion);
    console.log(req.headers);
    //2. express 独有的获取报文的方式
    //获取查询字符串
    console.log(req.query); // 『相对重要』
    // 获取指定的请求头
    console.log(req.get('host'));
    res.send('请求报文的获取');
});

app.get('/:id.html', (req, res) => {
    // 首先来获取路由参数的话，肯定是通过req.params.id来获取
    res.send('商品详情, 商品 id 为' + req.params.id);
});
//启动服务
app.listen(3000, () => {
    console.log('启动成功....')
})