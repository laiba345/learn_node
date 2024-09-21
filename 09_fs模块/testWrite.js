/**
 * 1. 异步写入
    语法： fs.writeFile(file, data[, options], callback)
    参数说明：
        - file 文件名
        - data 待写入的数据
        - options 选项设置 （可选）
        - callback 写入回调
    返回值： undefined
 */
// require 是 Node.js 环境中的'全局'变量，用来导入模块
const fs = require('fs');
//将 『三人行，必有我师焉。』 写入到当前文件夹下的『座右铭.txt』文件中
//如果没有这个文件会自己创造；
fs.writeFile('./座右铭.txt', '三人行，必有我师焉。', err => {
    //如果写入失败，则回调函数调用时，会传入错误对象，如写入成功，会传入 null
    if (err) {
        console.log(err);
        return;
    }
    console.log('写入成功');
})
/**
 * 2. 同步写入
 * 语法: fs.writeFileSync(file, data[, options]) 文件名没有会自动创建
 * 参数与 fs.writeFile 大体一致，只是没有 callback 参数
 * 返回值 undefined
 *  注意：try...catch..这种代码是可以直接书写的； 
 */

try {
    fs.writeFileSync('./座右铭2.txt', '三人行，必有我师焉。');
} catch (e) {
    console.log(e);
}

/**
 * Node.js 中的磁盘操作是由其他 线程 完成的，结果的处理有两种模式：
 *  - 同步处理 JavaScript 主线程 会等待 其他线程的执行结果，然后再继续执行主线程的代码，
效率较低
    - 异步处理；JavaScript 主线程 不会等待 其他线程的执行结果，直接执行后续的主线程代码，
效率较好
 */

/**
 * 3. appendFile / appendFileSync 追加写入
 * appendFile 作用是在文件尾部追加内容，appendFile 语法与 writeFile 语法完全相同
 * 语法:
 *  - fs.appendFile(file, data[, options], callback)
 *  - fs.appendFileSync(file, data[, options])
 * 返回值：二者都是undefined
 */
fs.appendFile('./座右铭.txt', '择其善者而从之，其不善者而改之。', err => {
    if (err) throw err;
    console.log('追加成功')
});
fs.appendFileSync('./座右铭.txt', '\r\n温故而知新, 可以为师矣');

/**
 * 流式写入 createWriteStream 流式写入
 * 语法：fs.createWriteStream(path[, options])
 * 参数说明
 *  - path 文件路径
 *  - options 选项配置（ 可选 ）
 * 返回值 Object
 */
let ws = fs.createWriteStream('./观书有感.txt');
ws.write('半亩方塘一鉴开\r\n');
ws.write('天光云影共徘徊\r\n');
ws.write('问渠那得清如许\r\n');
ws.write('为有源头活水来\r\n');
ws.end();
/**
 * 注意
 * 总结：
    - 流式写入是按数据块的方式写入文件，而不是逐字写入。
    - 流式写入的优点是处理大文件时更高效，减少内存占用。
    - 每次调用 write() 方法时，传入的字符串会作为数据块写入，而不是每个字符单独写入。

    好处
    - 程序打开一个文件是需要消耗资源的 ，流式写入可以减少打开关闭文件的次数。
    - 流式写入方式适用于 大文件写入或者频繁写入 的场景, writeFile 适合于 写入频率较低的场景

    场景
    - 文件写入 在计算机中是一个非常常见的操作，下面的场景都用到了文件写入
        - 下载文件
        - 安装软件
        - 保存程序日志，如Git
        - 编辑器保存文件
        - 视频录制
        ！！！当需要持久化保存数据的时候，应该想到 文件写入
 */

        

