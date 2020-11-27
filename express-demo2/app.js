var express = require('express')

// 1. 创建app
var app = express()

app.get('/', (req, res) => {
  // res.write('hello');
  // res.write('world');
  // res.end()

  //   res.end('hello world')
  res.send('hello world aaa')
})

// 路由其实就是一张表，这个表里有具体的映射关系
// 链式写法：
// app.get('/', 函数).get('/1234', 函数).get('/a/b/c', 函数).get('/linlun', 函数).get('/1/2/34', 函数)

app.get('/login', (req, res) => {
  res.send('登录')
})

// 当以 /public 开头的时候，去 ./public/ 查找对应的资源
// 这三种方式更易辨识，推荐使用这种方式
// app.use('/public/', express.static('./public/'))
// 当省略第一个参数的时候，则可以通过省略 ./public 的方式来查找
// app.use(express.static('./public/'))

// 必须是 /a/public 目录中的资源具体路径（a 相当于 public 的别名）
app.use('/a/', express.static('./public/'))

app.listen(3000, () => {
  console.log('express app is running ...')
})
