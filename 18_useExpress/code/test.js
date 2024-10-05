/**
 * 整个模拟操作
 *  - 前端发送Ajax请求，请求接口，会有跨域问题
 *  - 可以使用CORS方案解决跨域问题
 * 
 * 代码当中的话，在所有接口之前，加载cors，并注册为中间件
 *  import cors from 'cors'
 *  app.use(cors())
 */
// 引入express模块 --> 用来快速开发接口
import express from "express";
const app = express()
// 引入cors模块 --> 用来解决跨域的
import cors from "cors";
// 引入封装好promise的fs-then模块
import fs from "fs-then";
// 引入修改编码格式的body-parser模块 --> 要先下载  body-parser模块名字
/**
 * 注意
 *  - bodyParser是一个中间件，用于解析请求体中的数据，使其在req.body中可用；
 *  - 支持各种数据格式，最常用的是JSON和URL编码格式
 *      - bodyParser.json(); 解析JSON格式的请求体
 *      - bodyParser.urlencoded(); 用于解析URL编码格式的请求体
 *          - application/x-www-form-urlencoded
 */
import bodyParser from "body-parser";

// 设置express 支持post请求参数格式支持json   支持application/json
app.use(bodyParser.json());

// 设置 express 支持 post请求参数 默认是application/x-www-form-urlencoded编码格式  app.use(express.urlencoded());
app.use(express.urlencoded())

// 解决跨域问题
app.use(cors())



// 获取图书接口(get) --> 路径+函数
app.get('/api/getbooks', async (req, res) => {
    const data = await fs.readFile('./info.json', 'utf-8')
    res.send({ status: 0, message: '获取图书成功', data: JSON.parse(data) })
})


// 根据id来获取info接口
app.get('/api/onebook', async (req, res) => {
    // 先获取info
    let data = await fs.readFile('./info.json', 'utf-8')
    // 然后把info转换成数组
    data = JSON.parse(data)
    // 获取到传进来的id参数
    const id = req.query.id
    // 通过数组的find方法查询对应info
    const book = data.find(function (item) {
        return item.id == id
    })
    if (book) {
        res.send({ status: 0, message: '获取图书成功', data: book })
    } else {
        res.send({ status: 0, message: '获取图书失败' })
    }
})


// 新增接口(post)
app.post('/api/addbook', async (req, res) => {
    // 先获取info
    let data = await fs.readFile('./info.json', 'utf-8')
    // 然后把info转换成数组
    data = JSON.parse(data)
    // 已经设置app.use(express.urlencoded())，可以直接用req.query来获取前端传进来的参数
    // 获取到的参数是有多个info的数组，所以需要用展开运算符...展开，不然无法识别会报错
    // Date.now()是从1970年1月1日到现在的时间戳
    data.push({ ...req.body, id: Date.now() })

    // writeFile是创建文件，如果没有这个文件名会增加新的，已经有这个文件会直接覆盖，目的就是为了把增加新info后的文件覆盖掉之前的
    await fs.writeFile('./info.json', JSON.stringify(data))
    res.send({ status: 0, message: '添加图书成功' })
})


// 删除接口
app.delete('/api/delbook', async (req, res) => {
    // 先获取info
    let data = await fs.readFile('./info.json', 'utf-8')
    // 然后把info转换成数组
    data = JSON.parse(data)
    // 删除一样是根据id来删除，所以要先获取id
    const index = data.findIndex(function (item) {
        // 判断请求参数中的id和info中的id相同的info是第几个
        return req.query.id == item.id
    })
    // 用splice删除对应info
    data.splice(index, 1)

    // 把新info覆盖之前的info
    await fs.writeFile('./info.json', JSON.stringify(data))

    // 响应
    res.send({ status: 0, message: '删除图书成功' })
})


// 修改接口
app.put('/api/updatebook', async (req, res) => {
    // 先获取info
    let data = await fs.readFile('./info.json', 'utf-8')
    // 然后把info转换成数组
    data = JSON.parse(data)
    // 修改一样是根据id来修改，所以要先获取id
    const index = data.findIndex(function (item) {
        // 判断请求参数中的id和info中的id相同的info是第几个  
        return req.body.id == item.id
    })
    // 如果上面的索引找不到，会返回-1，需要进行个判断
    if (index == -1) {
        res.send({ status: 1, message: 'id不存在' })
    } else {
        // 把对应索引的info改成传进来的参数
        data[index] = req.body
        // 把新info覆盖之前的info
        await fs.writeFile('./info.json', JSON.stringify(data))
        res.send({ status: 0, message: '修改图书成功' })
    }
})


// 开启服务器 --> 端口+处理函数
app.listen(3000, () => {
    console.log('3000 服务器开启成功');
})

