// express 可以使用 body-parser 包处理请求体 
// 步骤如下
// 1. 安装；npm i body-parser
// 2. 导入 body-parser包
const bodyParser = require('body-parser');
// 3. 获取中间件函数
//处理 querystring 格式的请求体
let urlParser = bodyParser.urlencoded({ extended: false }));
//处理 JSON 格式的请求体
let jsonParser = bodyParser.json();
// 4. 设置路由中间件，然后使用request.body来获取请求体数据
app.post('/login', urlParser, (request, response) => {
    //获取请求体数据
    //console.log(request.body);
    //用户名
    console.log(request.body.username);
    //密码
    console.log(request.body.userpass);
    response.send('获取请求体数据');
});
/**
 * 获取到的请求体数据格式为
 *  - [Object: null prototype] { username: 'admin', userpass: '123456' }
 */