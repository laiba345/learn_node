// 查询一条数据
SongModel.findOne({ author: '王力宏' }, function (err, data) {
    if (err) throw err;
    console.log(data);
    mongoose.connection.close();
});
//根据 id 查询数据
SongModel.findById('5dd662b5381fc316b44ce167', function (err, data) {
    if (err) throw err;
    console.log(data);
    mongoose.connection.close();
});

// 批量查询数据
// 不加条件查询
// 更多的体现确实是在函数的不同上面；
SongModel.find(function (err, data) {
    if (err) throw err;
    console.log(data);
    mongoose.connection.close();
});
// 加条件查询
SongModel.find({ author: '王力宏' }, function (err, data) {
    if (err) throw err;
    console.log(data);
    mongoose.connection.close();
});