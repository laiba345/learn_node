//声明函数
function tiemo() {
    console.log('贴膜....');
}
//暴露数据
// module.exports = tiemo; CommonJS的导出方式
// export default tiemo 报错

/**
 * 在ES Modules 中使用的是 export default function timeo() {} 来实现
 * 然后在另一个地方通过 import 来导入；
 */