// 删除
// 删除一条数据
// 单独处理的话，对具体的id来标记处理
// 之前对唯一的id，唯一值进行处理
SongModel.deleteOne({ _id: '5dd65f32be6401035cb5b1ed' }, function (err) {
    // 通过回调函数来处理相应的逻辑
    if (err) throw err;
    console.log('删除成功');
    mongoose.connection.close();
});

// 批量处理；对某一类进行处理操作；
// 对属于作者的这一类进行处理
SongModel.deleteMany({ author: 'Jay' }, function (err) {
    if (err) throw err;
    console.log('删除成功');
    mongoose.connection.close();
});
