// 学生路由
// 用户路由
const express = require('express'); 
const router = express.Router(); 
const { getAllStudents, getStudentById } = require('../controllers/studentController'); 


// 获取所有学生数据
// router.get('/getStudents', (req, res) => {
//     db.query('SELECT * FROM student', (err, results) => {
//       if (err) {
//         res.status(500).json({ error: 'Database query failed' });
//         return;
//       }
//       res.json(results);
//     });
//   });

router.get('/getStudents', getAllStudents); 
router.get('/getStudentsById/:id', getStudentById); 
  
module.exports = router; 