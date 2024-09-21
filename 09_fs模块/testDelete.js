/**
 * 文件删除
 * 在 Node.js 中，我们可以使用 unlink 或 unlinkSync 来删除文件
    - 语法：
        - fs.unlink(path, callback)
        - fs.unlinkSync(path)
    - 参数说明：
        - path 文件路径
        - callback 操作后的回调
 */
const fs = require('fs');
fs.unlink('./test1.js', err => {
    if (err) throw err;
    console.log('删除成功');
});
fs.unlinkSync('./test2.js');