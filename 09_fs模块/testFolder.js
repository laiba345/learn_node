/**
 * 文件夹操作
 *  - 借助 Node.js 的能力，我们可以对文件夹进行 创建 、 读取 、 删除 等操作
 *      - 创建文件夹
 *          - mkdir / mkdirSync
 *      - 读取文件夹
 *          - readdir / readdirSync
 *      - 删除文件夹
 *          - rmdir / rmdirSync
 */

/**
 *  mkdir 创建文件夹
 *  在 Node.js 中，我们可以使用 mkdir 或 mkdirSync 来创建文件夹
 *  语法
 *      - fs.mkdir(path[, options], callback)
        - fs.mkdirSync(path[, options])   
    参数说明
        - path 文件夹路径
        - options 选项配置（ 可选 ）
        - callback 操作后的回调
 */
const fs = require('fs')
// 异步创建文件夹
fs.mkdir('./page', err => {
    if (err) throw err;
    console.log('创建成功');
});
//递归异步创建
fs.mkdir('./1/2/3', { recursive: true }, err => {
    if (err) throw err;
    console.log('递归创建成功');
});
//递归同步创建文件夹
fs.mkdirSync('./x/y/z', { recursive: true });

/**
 * 读取文件夹 readdir
 * - 在 Node.js 中，我们可以使用 readdir 或 readdirSync 来读取文件夹
 * - 语法
 *      - fs.readdir(path[, options], callback)
 *      - fs.readdirSync(path[, options])
 * - 参数说明
 *  - path 文件夹路径
    - options 选项配置（ 可选 ）
    - callback 操作后的回调
 */
//异步读取
fs.readdir('./论语', (err, data) => {
    if (err) throw err;
    console.log(data);
});
//同步读取
let data = fs.readdirSync('./论语');
console.log(data);

/**
 * 删除文件夹 rmdir 
 * - 在 Node.js 中，我们可以使用 rmdir 或 rmdirSync 来删除文件夹
 * 
 * - 语法
 *  - fs.rmdir(path[, options], callback)
 *  - fs.rmdirSync(path[, options])
 * - 参数说明
 *  - path 文件夹路径
 *  - options 选项配置
 *  - callback 操作后的回调
 */
//异步删除文件夹
fs.rmdir('./page', err => {
    if (err) throw err;
    console.log('删除成功');
});
//异步递归删除文件夹
fs.rmdir('./1', { recursive: true }, err => {
    if (err) {
        console.log(err);
    }
    console.log('递归删除')
});
//同步递归删除文件夹
fs.rmdirSync('./x', { recursive: true })