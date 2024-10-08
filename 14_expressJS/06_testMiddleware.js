//引入express框架
const express = require('express');
//创建服务对象
const app = express();
//静态资源中间件的设置，将当前文件夹下的public目录作为网站的根目录
app.use(express.static('./public')); //当然这个目录中都是一些静态资源
//如果访问的内容经常变化，还是需要设置路由
//但是，在这里有一个问题，如果public目录下有index.html文件，单独也有index.html的路由，
//则谁书写在前，优先执行谁
app.get('/index.html', (request, response) => {
    respsonse.send('首页');
});
//监听端口
app.listen(3000, () => {
    console.log('3000 端口启动....');
});

/**
 * 注意事项
 * 1. index.html 文件为默认打开的资源
 * 2. 如果静态资源与路由规则同时匹配，谁先匹配谁就响应
 * 3. 路由响应动态资源，静态资源中间件响应静态资源
 */