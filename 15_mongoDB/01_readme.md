MongoDB
一、简介
- 1.1 Mongodb 是什么
    - MongoDB 是一个基于分布式文件存储的数据库，官方地址 https://www.mongodb.com/
1.2 数据库是什么
- 数据库（DataBase）是按照数据结构来组织、存储和管理数据的 应用程序
1.3 数据库的作用
- 数据库的主要作用就是 管理数据 ，对数据进行 增（c）、删（d）、改（u）、查（r）
- 为啥需要数据库
    - 虽然后端可以通过res.send向前端发送数据，但这些数据通常不是硬编码的，而是动态生成的；
    - 数据的持久化
        - 如果没有数据库，后端只能发送硬编码的数据，每次重启服务器或修改代码后，数据会被重置。
        - 数据库可以持久化存储数据，即使服务器重启，数据依然可以保留
        ```
        // 硬编码的登录信息（不使用数据库）
        app.post('/login', (req, res) => {
            res.send('登录成功');
        });
        ```
        - 上述方式发送的数据是固定的，所有用户都会收到相同的内容，无法处理动态数据
        - 使用数据库的形式
        ```
        // 连接数据库查询用户登录信息
        app.post('/login', (req, res) => {
            const { username, password } = req.body;
            // 模拟查询数据库
            db.findUser(username, password, (err, user) => {
                if (user) {
                    res.send('登录成功');
                } else {
                    res.send('用户名或密码错误');
                }
            });
        });
        ```
        - 上述这种方式，后端可以根据数据库中存储的用户信息来动态判断登录是否成功
    - 数据的动态性
        - 网站内容通常是动态的，需要根据用户的请求或操作来实时返回不同的数据。硬编码的数据不能满足这种需求。
        - 使用数据库，后端可以根据前端发送的参数动态生成不同的响应；
            - 通过查询数据库，后端可以根据商品的id返回商品的具体信息，满足不同用户的需求；
    - 大规模数据管理
        - 数据库能高效地管理、索引、查询大量数据，确保性能；
1.4 数据库管理数据的特点
- 相比于纯文件管理数据，数据库管理数据有如下特点：
    - 1. 速度更快
    - 2. 扩展性更强
    - 3. 安全性更强
1.5 为什么选择 Mongodb
- 操作语法与 JavaScript 类似，容易上手，学习成本低

二、核心概念
- Mongodb 中有三个重要概念需要掌握
    - 数据库（database） 数据库是一个数据仓库，数据库服务下可以创建很多数据库，数据库中可以存放很多集合
    - 集合（collection） 集合类似于 JS 中的数组，在集合中可以存放很多文档
    - 文档（document） 文档是数据库中的最小单位，类似于 JS 中的对象
- json文件示例
    - 见 demo 02_testMongodb.js
    - 可以通过 JSON 文件来理解 Mongodb 中的概念

三、下载安装与启动
- 下载地址： https://www.mongodb.com/try/download/community
    - 建议选择 zip 类型，通用性更强
- 配置步骤如下
    - 1> 将压缩包移动到 C:\Program Files 下，然后解压
    - 2> 创建 C:\data\db 目录，mongodb 会将数据默认保存在这个文件夹
    - 3> 以 mongodb 中 bin 目录作为工作目录，启动命令行
    - 4> 运行命令 mongod
        - 看到最后的 waiting for connections 则表明服务 已经启动成功
        - 然后可以使用 mongo 命令连接本机的 mongodb 服务
    - 注意
        - 为了方便后续方便使用 mongod 命令，可以将 bin 目录配置到环境变量 Path 中
        - 千万不要选中服务端窗口的内容 ，选中会停止服务，可以 敲回车 取消选中
四、命令行交互
- 命令行交互一般是学习数据库的第一步，不过这些命令在后续用的比较少（了解）
- 数据库命令
    - 显示所有的数据库
        - show dbs
    - 切换到指定的数据库，如果数据库不存在会自动创建数据库
        - use 数据库名
    - 显示当前所在的数据库
        - db
    - 删除当前数据库
        - use 库名
        - db.dropDatabase()
- 集合命令
    - 创建集合
        - db.createCollection('集合名称')
    - 显示当前数据库中的所有集合
        - show collections
    - 删除某个集合
        - db.集合名.drop()
    - 重命名集合
        - db.集合名.renameCollection('newName')
- 文档命令
    - 插入文档
        - db.集合名.insert(文档对象);
    - 查询文档
        - db.集合名.find(查询条件)
        - 注意：_id 是 mongodb 自动生成的唯一编号，用来唯一标识文档
    - 更新文档（update）
        - db.集合名.update(查询条件,新的文档)
        - db.集合名.update({name:'张三'},{$set:{age:19}})
    - 删除文档
        - db.集合名.remove(查询条件)
- 应用场景
    - 新增
        - 用户注册
        - 发布视频
        - 发布商品
        - 发朋友圈
        - 发评论
        - 发微博
        - 发弹幕
        - ...
    - 删除
        - 删除评论
        - 删除商品
        - 删除文章
        - 删除视频
        - 删除微博
        - ......
    - 更新
        - 更新个人信息
        - 修改商品价格
        - 修改文章内容
        - ...
    - 查询
        - 商品列表
        - 视频列表
        - 朋友圈列表
        - 微博列表
        - 搜索功能
        - ......
五、Mongoose
- 介绍
    - Mongoose 是一个对象文档模型库，官网 http://www.mongoosejs.net/
- 作用
    - 方便使用代码操作 mongodb 数据库
- 使用流程
    - 见demo 03
- 字段类型
    - 文档结构可选的常用字段类型列表
        类型            描述
        String         字符串
        Number          数字
        Boolean        布尔值
        Array       数组，也可以使用 [] 来标识
        Date            日期
        Buffer       Buffer 对象
        Mixed  任意类型，需要使用mongoose.Schema.Types.Mixed 指定
        ObjectId  对象ID，需mongoose.Schema.Types.ObjectId 指定
        Decimal128 高精度数字需mongoose.Schema.Types.Decimal128 指定   
- 字段值验证
    - Mongoose有一些内建验证器，可以对字段值进行验证
    - 必填项
    ```
    title: {
        type: String,
        required: true // 设置必填项
    },
    ```
    - 默认值
    ```
    author: {
        type: String,
        default: '匿名' //默认值
    }
    ```
    - 枚举值
    ```
    gender: {
        type: String,
        enum: ['男','女'] //设置的值必须是数组中的
    },
    ```
    - 唯一值
    ```
    username: {
        type: String,
        unique: true
    },
    ```
    - 注意
        - unique需要重建集合才能有效果
        - 永远不要相信用户的输入
- CRUD
    - 数据库的基本操作包括四个，增加（create），删除（delete），修改（update），查（read）
    - 见 04_testCRUD

- 条件控制
    - 运算符
        - 在 mongodb 不能 > < >= <= !== 等运算符，需使用替代符号
            - >   使用 $gt
            - <   使用 $lt
            - >=  使用 $gte
            - <=  使用 $lte
            - !== 使用 $ne
        - db.students.find({id:{$gt:3}}); id号比3大的所有的记录
    - 逻辑运算
        - $or 逻辑或的情况
            - db.students.find({$or:[{age:18},{age:24}]});
        - $and 逻辑与的情况
            - db.students.find({$and: [{age: {$lt:20}}, {age: {$gt: 15}}]});
    - 正则匹配
        - 条件中可以直接使用 JS 的正则语法，通过正则可以进行模糊查询
            - db.students.find({name:/imissyou/});
- 个性化读取
    - 见 demo 04

- 图形化管理工具
    - 我们可以使用图形化的管理工具来对 Mongodb 进行交互，这里演示两个图形化工具
        - Robo 3T 免费 https://github.com/Studio3T/robomongo/releases
        - Navicat 收费 https://www.navicat.com.cn/
            