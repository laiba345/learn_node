/**
 * logger.js 日志中间件
 * - 记录请求的基本信息，比如请求方法、路径、时间
 */
const logger = (req, res, next) => {
    const now = new Date(); 
    // 在app.js使用了这个，每一次发送请求的时候都会调用这个
    console.log(`[${now.toISOString()}] ${req.method} ${req.url}`); 
    next(); // 通过传递给下一个中间件或路由
}

module.exports = logger; 