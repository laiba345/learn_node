# 会话控制
一、介绍
- 所谓会话控制就是 **对会话进行控制**
- HTTP 是一种**无状态的协议**，它没有办法区分多次的请求是否来自于同一个客户端， 无法区分用户而产品中又大量存在的这样的需求，所以我们需要通过 **会话控制** 来解决该问题
- 常见的会话控制技术有三种：
    - cookie
    - session
    - token

二、cookie
- cookie是什么
    - 是 HTTP 服务器发送到用户浏览器并保存在本地的一小块数据
        - cookie 是保存在浏览器端的一小块数据
        - cookie 是按照域名划分保存的
    - 简单示例
            域名                cookie
        www.baidu.com         a=100; b=200
        www.bilibili.com  xid=1020abce121; hm=112411213
        jd.com x=100          ocw=12414cce
    - cookie的特点
        - 浏览器向服务器发送请求时，会自动将 **当前域名下** 可用的 cookie 设置在请求头中，然后传递给服务器
        - 这个请求头的名字也叫 cookie ，所以将 cookie 理解为一个 HTTP 的请求头也是可以的
    - cookie的运行流程
        - 填写账号和密码校验身份，校验通过后下发 cookie
        - 有了cookie之后，后续向服务器发送请求时，就会自动携带cookie
- 浏览器操作 cookie 
    - 浏览器操作 cookie 的操作，使用相对较少，了解即可
        - 禁用所有 cookie
        - 删除 cookie
        - 查看 cookie
- cookie的代码操作
    - 见demo 02

三、session
- session 是什么
    - session 是保存在 服务器端的一块儿数据 ，保存当前访问用户的相关信息
- session 的作用
    - 实现会话控制，可以识别用户的身份，快速获取当前用户的相关信息
- session 运行流程
    - 填写账号和密码校验身份，校验通过后创建 session 信息 ，然后将 session_id 的值通过响应头返回给浏览器
    - 有了 cookie，下次发送请求时会自动携带 cookie，服务器通过 cookie 中的 session_id 的值确定用户的身份
- session 的代码操作
    - express中可以使用express-session 对session进行操作；
    - 见demo 03

四、session和cookie的区别
- cookie 和 session 的区别主要有如下几点：
- 存在的位置
    - cookie：浏览器端
    - session：服务端
- 安全性
    - cookie 是以明文的方式存放在客户端的，安全性相对较低
    - session 存放于服务器中，所以安全性 相对 较好
- 网络传输量
    - cookie 设置内容过多会增大报文体积， 会影响传输效率
    - session 数据存储在服务器，只是通过 cookie 传递 id，所以不影响传输效率
- 存储限制
    - 浏览器限制单个 cookie 保存的数据不能超过 4K ，且单个域名下的存储数量也有限制
    - session 数据存储在服务器中，所以没有这些限制

五、token
- token 是什么  
    - token 是服务端生成并返回给 HTTP 客户端的一串加密字符串， token 中保存着 用户信息
- token 的作用  
    - 实现会话控制，可以识别用户的身份，主要用于移动端 APP
- token 的工作流程
    - 填写账号和密码校验身份，校验通过后响应 token，token 一般是在响应体中返回给客户端的
    - 后续发送请求时，需要手动将token添加在请求报文中，一般是放在请求头中；
- token的特点
    - 服务端压力更小
        - 数据存储在客户端
    - 相对更安全
        - 数据加密
        - 可以避免 CSRF（跨站请求伪造）
    - 扩展性更强
        - 服务间可以共享
        - 增加服务节点更简单
- **JWT**
    - JWT（JSON Web Token ）是目前最流行的跨域认证解决方案，可用于基于  token  的身份验证
    - JWT 使得token的生成与校验更规范
    - 我们可以使用 jsonwebtoken 包来操作token
    ```
    //导入 jsonwebtokan
    const jwt = require('jsonwebtoken');
    //创建 token
    // jwt.sign(数据, 加密字符串, 配置对象) 
    let token = jwt.sign({
        username: 'zhangsan'
    }, 'atguigu', {
        expiresIn: 60 //单位是 秒
    })
    //解析 token
    jwt.verify(token, 'atguigu', (err, data) => {
        if(err){
            console.log('校验失败~~');
            return
        }
        console.log(data);
    })
    ```
    - 扩展阅读
        - （阮一峰）https://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html

- 附录
    - 本地域名  
        - 所谓本地域名就是 只能在本机使用的域名 ，一般在开发阶段使用·
    - 操作流程
        - 编辑文件 C:\Windows\System32\drivers\etc\hosts
        - 127.0.0.1    www.baidu.com
        - 如果修改失败， 可以修改该文件的权限