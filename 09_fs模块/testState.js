/**
 * 查看资源状态
 *  - 在 Node.js 中，我们可以使用 stat 或 statSync 来查看资源的详细信息
 * 语法
 *  - fs.stat(path[, options], callback)
 *  - fs.statSync(path[, options])
 * 参数说明
 *  - path 文件夹路径
    - options 选项配置（ 可选 ）
    - callback 操作后的回调
 */
const fs = require('fs')
//异步获取状态
fs.stat('./座右铭.txt', (err, data) => {
    if (err) throw err;
    console.log(data);
});
//同步获取状态
let data = fs.statSync('./座右铭2.txt');
console.log(data);

/**
 *  结果值对象结构
 *      - size 文件体积
        - birthtime 创建时间
        - mtime 最后修改时间
        - isFile 检测是否为文件
        - isDirectory 检测是否为文件夹
        - ....
 */

/**
 * 相对路径问题
 * fs 模块对资源进行操作时，路径的写法有两种：
    相对路径
        - ./座右铭.txt 当前目录下的座右铭.txt
        - 座右铭.txt 等效于上面的写法
        - ../座右铭.txt 当前目录的上一级目录中的座右铭.txt
    绝对路径
        - D:/Program Files windows 系统下的绝对路径
        - /usr/bin Linux 系统下的绝对路径
    
    注意：
    相对路径中所谓的 当前目录 ，指的是 命令行的工作目录 ，而并非是文件的所在目录
    所以当命令行的工作目录与文件所在目录不一致时，会出现一些 BUG
 */

/**
 * __dirname
 *  - __dirname 与 require 类似，都是 Node.js 环境中的'全局'变量
 *  - __dirname 保存着 当前文件所在目录的绝对路径 ，可以使用 __dirname 与文件名拼接成绝对路径
 * 
 * 注意
 *  - 使用 fs 模块的时候，尽量使用 __dirname 将路径转化为绝对路径，这样可以避免相对路径产生的
Bug
 */

let data2 = fs.readFileSync(__dirname + '/座右铭.txt', 'utf-8');
console.log(data2);