// app.js 作为入口文件；

const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/users'); // 引入用户路由
const studentsRoutes = require('./routes/students'); // 引入学生路由

// 在app.js中引入中间件
const logger = require('./middlewares/logger'); 
const errorHandler = require('./middlewares/errorHandler'); 
const app = express(); 
const PORT = 3000; 

// 中间件配置
app.use(logger); 
app.use(errorHandler); 
app.use(cors()); // 允许跨域
app.use(express.json()); // 处理JSON格式
app.use(express.urlencoded({ extended: true })); // 处理URL编码

// 基础路由
app.get('/', (req, res) => {
  res.send('Hello, World! Welcome to the Node.js backend!');
});

// 使用路由模块
app.use('/api', userRoutes); // 将用户相关路由挂载到/api中；
app.use('/api', studentsRoutes); // 将学生相关路由进行挂载


// 启动服务
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
