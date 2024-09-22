/**
 * 练习
 *  - 搭建HTTP服务
 *  请求类型        请求地址        响应体结果
 *    get           /login          登陆页面
 *    get           /reg            注册页面
 * 
 */
//1、引入http模块
const http = require("http");
//2、建立服务
const server = http.createServer((request, response) => {
    let { url, method } = request; //对象的解构赋值
    //设置响应头信息
    //解决中文乱码
    response.setHeader("Content-Type", "text/html;charset=utf-8")
    if (url == "/register" && method == "GET") {
        response.end("注册页面");
    } else if (url == "/login" && method == "GET") {
        response.end("登录页面");
    } else {
        response.end("<h1>404 Not Found</h1>")
    }
})
//3、监听端口
server.listen(8000, () => {
    console.log('服务启动中....');
})