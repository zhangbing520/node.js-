// 0. 安装
// 1. 引包
var express = require('express')

// 2. 创建你的服务器应用程序
// 也就是原来的 http.createServer()
var app = express()

// 在 express 中开放资源就是一个 API 的事
// 公开指示目录
// 只有这样做了，你就可以直接通过 /punlic/xx 的方式 访问 public 目录中的所有资源了
app.use('/public/', express.static('./public/'))
app.use('/static/', express.static('./static/'))

// 模板引擎在 express 中也是一个 API 的事
// 当服务器收到get 请求 / 的时候，执行回调处理函数
app.get('/', function (req, res) {
  res.end('hello repress')
})
// 当服务器收到get 请求 /about 的时候，执行回调处理函数
app.get('/about', function (req, res) {
  res.end('你好，我是express')
})

// 相当于 server.listen
app.listen(3000, function () {
  console.log('app is running at port 3000')
})
