/**
 * 请求数据验证中间件
 * - 对用户传入的数据进行校验，防止非法数据
 * - 进行校验的时候会用到大量的库
 *  - 用于简便执行非法校验操作；
 */
const { body, validationResult } = require('express-validator');

// 对用户名和密码进行校验，则在users路由中使用即可;
const validateUser = [
  body('username').isLength({ min: 3 }).withMessage('Username must be at least 3 characters'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = validateUser;


