const Mock = require('mockjs')
const Random = Mock.Random
const domain = 'http://mockjs.com/api'
const code = 200 // 返回的状态码

// 随机生成文章数据
const postData = req => {

    console.log(req) // 请求体，用于获取参数

    let data = [] // 用于存放文章数据的数组

    for (let i = 0; i < 10; i++) {
        let msg = {
            title: Random.csentence(10, 25), // 随机生成长度为10-25的标题
            icon: Random.dataImage('250x250', '文章icon'), // 随机生成大小为250x250的图片链接
            author: Random.cname(), // 随机生成名字
            date: Random.date() + ' ' /*+ Random.time() // 随机生成年月日 + 时间*/,
            fans: Math.floor(Math.random() * 10000)
        }

        data.push(msg)
    }

    // 返回状态码和文章数据posts
    return {
        code,
        data
    }
}

// 定义请求链接，类型，还有返回数据
Mock.mock(`${domain}/get/shishen`, 'get', postData)
// Mock.mock((`${domain}/get/shishen`, 'get', postData))
