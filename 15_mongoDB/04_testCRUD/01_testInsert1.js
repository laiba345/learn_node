// 插入一条
SongModel.create({
    title: '给我一首歌的时间',
    author: 'Jay'
}, function (err, data) {
    //错误
    console.log(err);
    //插入后的数据对象
    console.log(data);
});

// 批量插入
//1.引入mongoose
const mongoose = require('mongoose');
//2.链接mongodb数据库 connect 连接
mongoose.connect('mongodb://127.0.0.1:27017/project');
//3.设置连接的回调
mongoose.connection.on('open', () => {
    //4.声明文档结构
    const PhoneSchema = new mongoose.Schema({
        brand: String,
        color: String,
        price: Number,
        tags: Array
    })
    //6.创建模型对象
    const PhoneModel = mongoose.model('phone', PhoneSchema);
    PhoneModel.insertMany([
        {
            brand: '华为',
            color: '灰色',
            price: 2399,
            tags: ['电量大', '屏幕大', '信号好']
        },
        {
            brand: '小米',
            color: '白色',
            price: 2099,
            tags: ['电量大', '屏幕大', '信号好']
        }
    ], (err, data) => {
        if (err) throw err;
        console.log('写入成功');
        mongoose.connection.close();
    })

})

