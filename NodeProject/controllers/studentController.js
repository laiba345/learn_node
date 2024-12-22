const db = require('../db');

// 获取所有学生
const getAllStudents = (req, res) => {
  db.query('SELECT * FROM student', (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Database query failed' });
      return;
    }
    res.json(results);
  });
};

// 查询单个学生（通过 ID）
const getStudentById = (req, res) => {
  console.log('req.params', req.params); 
  const { id } = req.params;
  console.log('我已经获取到了id是', id)
  // 观察是哪两个值进行对比，比如数据库表中学生id字段为student_id 
  db.query('SELECT * FROM student WHERE student_id = ?', [id], (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Database query failed' });
      return;
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.json(results[0]);
  });
};

module.exports = { getAllStudents, getStudentById };
