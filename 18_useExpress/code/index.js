/**
 * 创建index.js 
 *  - 作用是 编写后端代码 启动服务
 *  - 使用的模块为 express
 *  - 引入 fs-then
 */
// 用于启动服务，并且写接口
import express from "express";
const app = express()
import fs from "fs-then";

/**
 * 
 * 增 POST
 * 删 Delete
 * 改 Put 或 patch
 * 查 Get
 */

// 写接口
// app.请求方式('接口地址', '带有req、res参数的处理函数');
// app.get('/api/student', (req, res) => {
//     console.log('index') // 打印的话，是在下方进行打印操作
//     res.send('测试')
// });
// app.post();
// app.delete();
// app.put();

// 1. 获取图书信息
app.get('/api/getbooks', async (req, res) => {
    // 如果要使用async来实现同步的话，要记住await后面要promise对象才可以，用第三方模块fs-then，是把已经封装好的promise直接调用，用fs内置模块得自己封装promise
    const data = await fs.readFile('./info.json', 'utf-8')
    // send出去的数据还是放在一个对象中，不过每个对象中可以包含别的对象；
    // 其中，每个对象的主要关键数据还是data
    res.send({ status: 0, message: '获取图书成功', data: JSON.parse(data) })
})

// 2. 根据id来获取数据接口
app.get('/api/onebook', async (req, res) => {
    // 先获取数据
    let data = await fs.readFile('./info.json', 'utf-8')
    // 然后把数据转换成数组
    data = JSON.parse(data)
    // console.log(data)
    // 获取到传进来的id参数, 通过请求参数req来实现；
    const id = req.query.id
    // 通过数组的find方法查询对应数据
    // const book = data.find(function (item) {
    //     return item.id == id
    // })

    const book = data.find(item => {
        return item.id == id
    })
    if (book) {
        res.send({ status: 0, message: '获取图书成功', data: book })
    } else {
        res.send({ status: 0, message: '获取图书失败' })
    }
})

// 3. 添加图书接口；Post  增加
// 配置，接收请求体
/**
 * POST请求一般用于向服务器提交数据
 *  - 例如：创建新资源、提交表单、上传文件等；
 */
app.use(express.urlencoded({ extended: true })) // 接收查询字符串格式请求体

app.post('/api/addbook', async (req, res) => {
    // 先获取数据
    let data = await fs.readFile('./info.json', 'utf-8')
    // 转换成数组形式
    data = JSON.parse(data)
    /**
     * 注意
     * 1. 已经设置app.use(express.urlencoded())，可以直接用req.query来获取前端传进来的参数
     * 2. 获取到的参数是有多个数据的数组，所以需要用展开运算符...展开，不然无法识别会报错
     * 3. Date.now()是从1970年1月1日到现在的时间戳
     */
    data.push({ ...req.body, id: Date.now() })
    // writeFile是创建文件，如果没有这个文件名会增加新的，已经有这个文件会直接覆盖，目的就是为了把增加新数据后的文件覆盖掉之前的
    await fs.writeFile('./info.json', JSON.stringify(data))
    res.send({ status: 0, message: '添加图书成功' })
})


// 4、修改图书接口； 修改使用put来操作；
app.put('/api/updatebook', async (req, res) => {
    // 先获取数据
    let data = await fs.readFile('./info.json', 'utf-8')
    data = JSON.parse(data)
    // 一样通过id来获取，首先要获取到id
    const index = data.findIndex(function (item) {
        return req.body.id == item.id
    })
    // 判断
    if (index == -1) {
        res.send({ status: 1, message: 'id不存在' })
    } else {
        // id还是那个id，但是其中的是id对应的数据，全部被修改掉；
        data[index] = req.body
        await fs.writeFile('./info.json', JSON.stringify(data))
        res.send({ status: 0, message: '修改图书成功' })
    }
})

// 5、删除图书接口 Delete
app.delete('/api/delbook', async (req, res) => {
    // 先获取数据
    let data = await fs.readFile('./info.json', 'utf-8')
    // 然后把数据转换成数组
    data = JSON.parse(data)
    // 删除一样是根据id来删除，所以要先获取id
    const index = data.findIndex(function (item) {
        // 判断请求参数中的id和数据中的id相同的数据是第几个
        return req.query.id == item.id
    })
    // 用splice删除对应数据
    data.splice(index, 1)

    // 把新数据覆盖之前的数据
    await fs.writeFile('./info.json', JSON.stringify(data))

    // 响应
    res.send({ status: 0, message: '删除图书成功' })
})

app.listen(3000, () => console.log('启动了'));

