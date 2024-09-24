一、express介绍
- express 是一个基于 Node.js 平台的极简、灵活的 WEB 应用开发框架，官方网址：https://www.expressjs.com.cn/
- 简单来说，express 是一个**封装好的工具包，封装了很多功能**，便于我们开发 WEB 应用（HTTP 服务）

二、express的使用
- express 本身是一个 npm 包，所以可以通过 npm 安装
    - npm init
    - npm i express
- express初体验
    - 见02 demo
    - 代码书写完整以后，使用node xxx.js 执行
    - 在浏览器中 http://127.0.0.1:3000/home 访问即可

三、express路由
- 什么是路由？
    - 官方定义： 路由**确定了应用程序如何响应客户端对特定端点的请求**
- 路由的使用
    - 路由的组成
        - 请求方法
        - 路径
        - 回调函数
    - express 中提供了一系列方法，可以很方便的使用路由，使用格式如下：
        - app.<method>(path, callback)
            - get、post等；
        - 具体见 03 demo
- 获取请求参数
    - express 框架封装了一些 API 来方便获取请求报文中的数据，并且兼容原生 HTTP 模块的获取方式
    - 见demo 04
- 获取路由参数
    - 路由参数是指的是 **URL路径中的参数（数据）**
```
app.get('/:id.html', (req, res) => {
res.send('商品详情, 商品 id 为' + req.params.id);
});
```

四、express响应设置
- express 框架封装了一些 API 来方便给客户端响应数据，并且兼容原生 HTTP 模块的获取方式
- 具体见详细demo 05

五、express中间件
- 什么是中间件
    - 中间件（Middleware）本质是一个回调函数
    - 中间件函数 可以像路由回调一样访问 请求对象（request） ， 响应对象（response）
- 中间件的作用
    - 中间件的作用 就是 **使用函数封装公共操作，简化代码**
- 中间件的类型
    - 全局中间件
    - 路由中间件
- 定义全局中间件
    - 每一个请求 到达服务端之后 都会执行全局中间件函数
    - 声明中间件函数
```
let recordMiddleware = function(request,response,next){
    //实现功能代码
    //.....
    //执行next函数(当如果希望执行完中间件函数之后，仍然继续执行路由中的回调函数，
    //必须调用next)
    next();
}
``` 
    - 应用中间件
        - app.use(recordMiddleware);
    - 声明时可以直接将匿名函数传递给use
```
app.use(function (request, response, next) {
    console.log('定义第一个中间件');
    next();
})
```
    - 多个全局中间件
        - express 允许使用 app.use() 定义多个全局中间件
        ```
        app.use(function (request, response, next) {
            console.log('定义第一个中间件');
            next();
        })
        app.use(function (request, response, next) {
            console.log('定义第二个中间件');
            next();
        })
        ```
    - 定义路由中间件
        - 如果 只需要对某一些路由进行功能封装 则就需要路由中间件
        - 调用格式如下：
        ```
        app.get('/路径',`中间件函数`,(request,response)=>{
        });
        app.get('/路径',`中间件函数1`,`中间件函数2`,(request,response)=>{
        });
        ```
- 静态资源中间件
    - express 内置处理静态资源的中间件
    - 见 demo 06

- 获取请求体数据 body-parser
    - express 可以使用 body-parser 包处理请求体
    - 具体见 demo 07

六、Router
- 什么是Router
    - express 中的 Router 是一个完整的中间件和路由系统，可以看做是一个小型的 app 对象。
- Router作用
    - 对路由进行模块化，更好的管理路由
- Router的使用
    - 见 08_testRouter

七、EJS模块引擎
- 什么是模块引擎
    - 模板引擎是分离 **用户界面和业务数据** 的一种技术
- 什么是EJS、
    - EJS 是一个高效的 Javascript 的模板引擎
    - 官网: https://ejs.co/
    - 中文站：https://ejs.bootcss.com/
- EJS初体验
    - 下载安装EJS
        - npm i ejs --save
    - 代码示例 demo 09
- EJS常用语法
    - 执行JS代码
        - <% code %>
    - 输出转义的数据到模板上
        - <%= code %>
    - 输出非转义的数据到模板上
        - <%- code %>
