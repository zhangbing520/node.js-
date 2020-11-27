const { query } = require('express')
var express = require('express')
var bodyParser = require('body-parser')

var app = express()

var comments = [
  {
    name: '张三',
    message: '今天天气不错！',
    dateTime: '2015-10-16',
  },
  {
    name: '张三2',
    message: '今天天气不错！',
    dateTime: '2015-10-16',
  },
  {
    name: '张三3',
    message: '今天天气不错！',
    dateTime: '2015-10-16',
  },
  {
    name: '张三4',
    message: '今天天气不错！',
    dateTime: '2015-10-16',
  },
  {
    name: '张三5',
    message: '今天天气不错！',
    dateTime: '2015-10-16',
  },
]

// 开放静态资源
app.use('/public/', express.static('./public/'))

// 配置使用 art-template 模板引擎
// 第一个参数表示当渲染 以 .art 结尾的文件时，使用 art-template 模板引擎
// express-art-template 是专门用来在 Express 中把 art-template 整合到 Express 的
// 虽热外面这里不需要加载 art-template ，但是也必须安装
// 原因在于 express-art-template 依赖了 art-template
app.engine('html', require('express-art-template'))

// Express 为 Response 响应对象提供了一个方法：render
// render 方法默认是不可以使用的，但是如果配置了模板引擎就可以使用了
// res.render('html模板名称', { 模板数据 })
// 第一个参数不能写路径，默认会去项目中的 views 目录中查找模板文件
// 也就是说 Express 有一个约定，开发人员把所有的视图文件都放到了 views 目录中

// 如果想要修改默认的 views 目录，则可以
// app.set('views',render 函数的默认路径)

// 配置 body-parser 中间件（插件，专门用来解析表单 post 请求体）
// parse appication/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.render('index.html', {
    comments: comments,
  })
})

// app.get('/admin', (req, res) => {
//   res.render('admin/admin.art', {
//     title: '管理系统',
//   })
// })

app.get('/post', (req, res) => {
  res.render('post.html')
})

// app.get('/pinglun', (req, res) => {
//   var comment = req.query
//   comment.dateTime = '2020-10-7 16:57:55'
//   comments.unshift(comment)
//   // 重定向至首页
//   //   res.statusCode = 302
//   //   res.setHeader('Location', '/')
//   res.redirect('/')
// })

app.post('/post', (req, res) => {
  // 1. 获取表单 POST 请求数据
  // 2. 处理
  // 3. 发送请求
  // req.query 只能拿 get请求参数
  // console.log(req.query)
  // post
  // console.log(req.body)

  var comment = req.body
  comment.dateTime = '2020-10-7 16:57:55'
  comments.unshift(comment)
  // 重定向至首页
  // res.send
  // res.redirect
  // 这些方法 Express 会自动结束响应
  res.redirect('/')
})

app.listen(3000, () => {
  console.log('running...')
})
