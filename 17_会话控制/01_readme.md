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
