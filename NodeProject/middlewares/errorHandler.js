/**
 * 错误处理中间件
 * - 统一捕获错误，返回标准化的响应
 */
const errorHandler = (err, req, res, next) => {
    console.log(err.stack); 
    res.status(500).json({ error: 'Internal Server Error', message: err.message })
}

module.exports = errorHandler; 
