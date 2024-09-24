// 更新
// 更新一条数据
// 对两对数据进行替换操作；
// 对它们不同的键值对进行处理；
// 更新一条数据或多条数据的时候  更多体现在更新函数的不同
SongModel.updateOne({ author: 'JJ Lin' }, { author: '林俊杰' }, function (err) {
    if (err) throw err;
    mongoose.connection.close();
});

// 批量更新数据
SongModel.updateMany({ author: 'Leehom Wang' }, { author: '王力宏' }, function (err) {
    if (err) throw err;
    mongoose.connection.close();
});