// 使用express 搭建web服务器
// 1) 加载 express 模块
// const express = require('express');

// // 2) 创建 express 服务器
// const app = express();

// // 3) 开启服务器
// app.listen(3000, () => console.log('express服务器开始工作了'));

// // 4) 监听浏览器请求并进行处理

// app.get('GET请求的地址', 处理函数);

// app.post('POST请求的地址', 处理函数);

/**
 * Express之所以能够实现web服务器的搭建，
 * 是因为其内部对核心模块http进行了封装
 *  - app.get() 和 app.post() 就是express封装的新方法。
 *  - res.send() 方法
 *      - 该方法可以代替原生http模块中的 res.end 方法，而且比 res.end 方法更好用
 *      - res.send() 用于做出响应
        - 响应的内容同样不能为数字
        - 如果响应的是JS对象，那么方法内部会自动将对象转成JSON格式。
        - 而且会自动加Content-Type响应头
        - 如果已经做出响应了，就不要再次做出响应了。
 */
const express = require('express');
const app = express();
app.listen(3000, () => console.log('启动了'));

// 写接口
app.get('/api/test', (req, res) => {
  // res.end('hello world，哈哈哈'); // 响应中文会乱码，必须自己加响应头
  // res.end(JSON.stringify({ status: 0 , message: '注册成功' })); // 只能响应字符串或者buffer类型

  // express提供的send方法，可以解决上面的两个问题
  // 也可以直接返回信息
  res.send({ status: 0, message: '注册成功' }); // send方法会自动设置响应头；并且会自动把对象转成JSON字符串
  // res.send('项目启动了')
});


