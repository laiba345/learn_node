/* 
    Node.js有多个内置事件
    我们可以通过events模块，并通过实例化EventEmitter类来绑定和监听事件
*/
// 引入events模块
let events = require('events')

// 创建eventEmitter对象
let eventEmitter = new events.eventEmitter()

/* 
    绑定事件处理程序
*/
eventEmitter.on('eventName', eventHandler)

// 通过程序来触发事件
eventEmitter.emit('eventName')