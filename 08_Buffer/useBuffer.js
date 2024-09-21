//创建了一个长度为 10 字节的 Buffer，相当于申请了 10 字节的内存空间，每个字节的值为 0
let buf_1 = Buffer.alloc(10); // 结果为 <Buffer 00 00 00 00 00 00 00 00 00 00>
console.log(buf_1)

//创建了一个长度为 10 字节的 Buffer，buffer 中可能存在旧的数据, 可能会影响执行结果，所以叫unsafe
let buf_2 = Buffer.allocUnsafe(10);
console.log(buf_2)

// 通过字符串或者数组创建Buffer的情况下，都是
//通过字符串创建 Buffer
let buf_3 = Buffer.from('hello');
//通过数组创建 Buffer
let buf_4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);

// Buffer与字符串的转化
// 可以借助toString方法将buffer转化为字符串； toString默认是按照utf-8的编码方式进行转换的
let buf_5 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);
console.log(buf_5.toString())

// Buffer的读写
// Buffer可以直接通过[] 的方式对数据进行处理
//读取
console.log(buf_3[1]);
//修改
buf_3[1] = 97;
//查看字符串结果
console.log(buf_3.toString());

// 注意点
// 1. 如果修改的数值超过255，则超过8位数据会被舍弃
// 2. 一个utf-8的字符一般占3个字节

