// db.js 数据库连接设置

const mysql = require('mysql2');

// 创建数据库连接;
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'my_db_01'
});

// 连接数据库
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to MySQL database.');
});

module.exports = db; // 导出数据库连接实例
