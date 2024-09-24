/**
 * 可以通过 JSON 文件来理解 Mongodb 中的概念
 *  - 一个JSON文件好比是一个 数据库 ，一个 Mongodb 服务下可以有 N 个数据库
 *  - JSON文件中的 一级属性的数组值 好比是 集合
 *  - 数组中的对象好比是文档
 *  - 对象中的属性有时也称之为字段
 * 一般情况下
 *  - 一个项目使用一个数据库
 *  - 一个集合会存储同一种类型的数据
 */
const info =
{
    "accounts": [
        {
            "id": "3-YLju5f3",
            "title": "买电脑",
            "time": "2023-02-08",
            "type": "-1",
            "account": "5500",
            "remarks": "为了上网课"
        },
        {
            "id": "3-YLju5f4",
            "title": "请女朋友吃饭",
            "time": "2023-02-08",
            "type": "-1",
            "account": "214",
            "remarks": "情人节聚餐"
        },
        {
            "id": "mRQiD4s3K",
            "title": "发工资",
            "time": "2023-02-19",
            "type": "1",
            "account": "4396",
            "remarks": "终于发工资啦!~~"
        }
    ],
    "users": [
        {
            "id": 1,
            "name": "zhangsan",
            "age": 18
        },
        {
            "id": 2,
            "name": "lisi",
            "age": 20
        },
        {
            "id": 3,
            "name": "wangwu",
            "age": 22
        }
    ]
}
