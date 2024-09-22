/**
 * 练习
 *  - 设置HTTP报文
 *      - 作用                      语法
 *      设置响应状态码          response.statusCode
        设置响应状态描述        response.statusMessage （ 用的非常少 ）
        设置响应头信息          response.setHeader('头名', '头值')
        设置响应体              response.write('xx')
                              response.end('xxx')
 */
// write 和 end的两种使用情况
//1. write 和 end 的结合使用 响应体相对分散
// response.write('xx');
// response.write('xx');
// response.write('xx');
// response.end(); //每一个请求，在处理的时候必须要执行 end 方法的
//2. 单独使用 end 方法 响应体相对集中
// response.end('xxx');

/**
 * 练习
 * - 搭建 HTTP 服务，响应一个 4 行 3 列的表格，并且要求表格有 隔行换色效果 ，且 点击 单元格能 高亮显示
 *  - 注意：甚至response.end(``)可以返回一个网页；
 */
//导入 http 模块
const http = require('http');
//创建服务对象
const server = http.createServer((request, response) => {
    response.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
    td{
    padding: 20px 40px;
    }
    table tr:nth-child(odd){
    background: #aef;
    }
    table tr:nth-child(even){
    background: #fcb;
    }
    table, td{
    border-collapse: collapse;
    }
    </style>
    </head>
    <body>
    <table border="1">
    <tr><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td></tr>
    </table>
    <script>
    //获取所有的 td
    let tds = document.querySelectorAll('td');
    //遍历
    tds.forEach(item => {
    item.onclick = function(){
    this.style.background = '#222';
    }
    })
    </script>
    </body>
    </html>
    `); //设置响应体
});
//监听端口, 启动服务
server.listen(9000, () => {
    console.log('服务已经启动....')
});