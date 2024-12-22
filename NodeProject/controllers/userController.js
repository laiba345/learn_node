const db = require('../db');

// 获取所有用户
const getAllUsers = (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Database query failed' });
      return;
    }
    res.json(results);
  });
};

// 添加新用户
const addUser = (req, res) => {
  const { id, username, password } = req.body;

  // 简单数据验证
  if (!id || !username || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  db.query(
    'INSERT INTO users (id, username, password) VALUES (?, ?, ?)',
    [id, username, password],
    (err, result) => {
      if (err) {
        res.status(500).json({ error: 'Failed to insert user' });
        return;
      }
      res.json({ message: 'User created successfully', userId: result.insertId });
    }
  );
};

module.exports = { getAllUsers, addUser };
