require('http').createServer((request, response) => {
    //获取请求的方法已经路径
    let { url, method } = request;
    //判断请求方式以及请求路径
    if (method == "GET" && url == "/index.html") {
        //需要响应文件中的内容
        let data = require('fs').readFileSync(__dirname + '/index.html');
        response.end(data);
    } else if (method == "GET" && url == "/css/app.css") {
        //需要响应文件中的内容
        let data = require('fs').readFileSync(__dirname + '/public/css/app.css');
        response.end(data);
    } else if (method == "GET" && url == "/js/app.js") {
        //需要响应文件中的内容
        let data = require('fs').readFileSync(__dirname + '/public/js/app.js');
        response.end(data);
    }
    else {
        //404响应
        response.statusCode = 404;
        response.end("<h1>404 Not Found</h1>");
    }
}).listen(80, () => {
    console.log('80端口正在启动中....');
})

// 上述代码不够完美
// 上面的代码，当只要有一个请求路径就需要进行判断，显然这种方式不够完美，那么我们需要封装
require('http').createServer((request, response) => {
    //获取请求的方法已经路径
    let { url, method } = request;
    //文件夹路径
    let rootDir = __dirname + '/public';
    //拼接文件路径
    let filePath = rootDir + url;
    //读取文件内容
    fs.readFile(filePath, (err, data) => {
        //判断
        if (err) {
            //如果出现错误，响应404状态码
            response.statusCode = 404;
            response.end('<h1>404 Not Found</h1>');
        } else {
            //响应文件内容
            response.end(data);
        }
    })
}).listen(80, () => {
    console.log('80端口正在启动中....');
})