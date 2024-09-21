/**
 * 文件移动与重命名
 * 在 Node.js 中，我们可以使用 rename 或 renameSync 来移动或重命名 文件或文件夹
    - 语法：
        - fs.rename(oldPath, newPath, callback)
        - fs.renameSync(oldPath, newPath)
    - 参数说明：
        - oldPath 文件当前的路径
        - newPath 文件新的路径
        - callback 操作后的回调
 */
fs.rename('./观书有感.txt', './论语/观书有感.txt', (err) => {
    if (err) throw err;
    console.log('移动完成')
});
fs.renameSync('./座右铭.txt', './论语/我的座右铭.txt');