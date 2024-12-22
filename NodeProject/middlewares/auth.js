/**
 * 身份验证中间件（JWT）
 *  - 用于验证用户的JWT(JSON Web Token)， 确保用户身份合法
 */
const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  // req 来获取请求，res来回复响应；
  const token = req.header('Authorization')?.split(' ')[1]; // 获取请求头中的 Token
  if (!token) return res.status(401).json({ error: 'Access Denied: No Token Provided' });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET); // 验证 Token
    req.user = verified; // 将解析后的用户信息挂载到请求对象上
    next();
  } catch (err) {
    res.status(403).json({ error: 'Invalid Token' });
  }
};

module.exports = authenticateToken;

