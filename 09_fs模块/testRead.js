/**
 * 文件读取
 *  - 文件读取顾名思义，就是通过程序从文件中取出其中的数据，我们可以使用如下几种方式：
 *      - readFile         异步读取
        - readFileSync     同步读取
        - createReadStream 流式读取
 */
/**
 * 异步读取  readFile
 * 语法： fs.readFile(path[, options], callback)
 * 参数说明
 *     - path 文件路径
       - options 选项配置
       - callback 回调函数
 * 返回值 undefined
 */
//导入 fs 模块
const fs = require('fs');
fs.readFile('./座右铭.txt', (err, data) => {
    if (err) throw err;
    console.log(data); // 打印出来是一个个流式
});
fs.readFile('./座右铭.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data); // 打印出来是正常显示的内容
})

/**
 * 同步读取  readFileSync
 * 语法： fs.readFileSync(path[, options])
 * 参数说明
 *  - path 文件路径
 *  - options 选项配置
 * 返回值 
 *  - Buffer ｜ string 
 */
let data = fs.readFileSync('./座右铭.txt');
let data2 = fs.readFileSync('./座右铭.txt', 'utf-8');

/**
 * 流式读取  createReadStream
 * 语法： fs.createReadStream(path[, options])
 * 参数说明
 *  - path 文件路径
 *  - options 选项配置（可选）
 * 返回值 Object
 */
//创建读取流对象
let rs = fs.createReadStream('./观书有感.txt', 'utf-8');
//每次取出 64k 数据后执行一次 data 回调
rs.on('data', data => {
    console.log(data);
    console.log(data.length);
});
//读取完毕后, 执行 end 回调
rs.on('end', () => {
    console.log('读取完成')
})
/**
为什么 观书有感.txt 先打印出来？
    - 由于异步特性，文件的读取顺序并不是按照代码书写的顺序执行的。以下是具体的执行流程：
        - 当你运行代码时，Node.js 会开始执行 fs.readFile() 和 fs.createReadStream()，
        - 但由于它们都是异步的，它们会并发执行。
            - fs.createReadStream() 由于是流式读取，它一开始就会读取第一块数据，然后迅速触发 data 事件，打印出这部分数据。由于它是按块读取的，它的处理可以在 fs.readFile() 完成之前就开始，因此你看到 观书有感.txt 的内容先被打印出来。
            - fs.readFile() 是一次性读取整个文件并在完成后通过回调函数返回结果。
                - 如果文件较大，或者系统资源繁忙，它可能会稍微晚一点执行回调函数，导致内容稍后打印。
        - 总结：
            - 流式读取（createReadStream）：边读边处理，数据块可以更快地开始被处理和打印。
            - 异步读取（readFile）：一次性读取整个文件，读取完成后才会执行回调，可能会稍微晚一点。
        - 场景
            - 电脑开机
            - 程序运行
            - 编辑器打开文件
            - 查看图片
            - 播放视频
            - 播放音乐
            - Git 查看日志
            - 上传文件
            - 查看聊天记录
 */
