// 用户路由
const express = require('express'); 
const router = express.Router(); 
const db = require('../db');  // 引入数据库配置信息
const { getAllUsers, addUser } = require('../controllers/userController')
const validateUser = require('../middlewares/validateUser'); 

// 获取工具类
const { hashPassword, verifyPassword } = require('../utils/password'); 

// 注册用户
router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await hashPassword(password);
    // 存入数据库
    db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword], (err) => {
      if (err) return res.status(500).json({ error: 'Failed to register user' });
      res.json({ message: 'User registered successfully' });
    });
  });

// 登录校验
// 登录校验
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    db.query('SELECT * FROM users WHERE username = ?', [username], async (err, results) => {
      if (err || results.length === 0) return res.status(404).json({ error: 'User not found' });
      const user = results[0];
      const isValid = await verifyPassword(password, user.password);
      if (!isValid) return res.status(401).json({ error: 'Invalid credentials' });
      res.json({ message: 'Login successful' });
    });
  });

// 获取所有用户数据
// 其实就是将后面的那个函数提取到了控制器当中
// router.get('/users', (req, res) => {
//     db.query('SELECT * FROM users', (err, results) => {
//       if (err) {
//         res.status(500).json({ error: 'Database query failed' });
//         return;
//       }
//       res.json(results);
//     });
//   });

router.get('/users', getAllUsers); 

// 添加用户信息
// router.post('/addUser', (req, res) => {
//     const { id, username, password } = req.body;
//     db.query('INSERT INTO users (id, username, password) VALUES (?, ?, ?)', [id, username, password], (err, result) => {
//       if (err) {
//         res.status(500).json({ error: 'Failed to insert user' });
//         return;
//       }
//       res.json({ message: 'User created successfully', userId: result.insertId });
//     });
//   })

router.post('/addUser', addUser); 

const authenticateToken = require('../middlewares/auth'); // 获取身份验证中间件
router.get('protected', authenticateToken, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
})

router.post('/users', validateUser, (req, res) => {
    const { username, password } = req.body;
    res.json({ message: 'User created successfully', username });
  });
  
module.exports = router; 