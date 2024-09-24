// 个性化读取
/**
 * 字段筛选
 *  - 0 表示 不要的字段
 *  - 1 表示 需要的字段
 */
SongModel.find().select({ _id: 0, title: 1 }).exec(function (err, data) {
    if (err) throw err;
    console.log(data);
    mongoose.connection.close();
});

/**
 * 数据排序
 *  - 1 表示 升序
 *  - -1 表示 倒序
 */
SongModel.find().sort({ hot: 1 }).exec(function (err, data) {
    if (err) throw err;
    console.log(data);
    mongoose.connection.close();
});

/**
 * 数据截取
 * - skip 表示 跳过
 * - limit 表示 限定
 */
SongModel.find().skip(10).limit(10).exec(function (err, data) {
    if (err) throw err;
    console.log(data);
    mongoose.connection.close();
});