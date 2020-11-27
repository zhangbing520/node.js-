var express = require('express')
var fs = require('fs')

var app = express()

// 开放静态资源
app.use('/node_modules/', express.static('./node_modules/'))
app.use('/public/', express.static('./public/'))

app.engine('html', require('express-art-template'))

app.get('/', (req, res) => {
  // readFile 的第二个参数是可选的，传入 utf8 就是告诉它把读取的文本直接按照 utf-8 来编码
  // 除了这样来转换之外，也可以通过data.toString()方法的方式
  fs.readFile('./db.json', 'utf8', (error, data) => {
    if (error) {
      return res.status(500).send('Server error')
    }
    // 从文件中读取的一定是字符串
    // 所以这里一定要手动转成对象
    var students = JSON.parse(data).students

    res.render('index.html', {
      fruits: ['苹果', '香蕉', '橘子'],
      students: students,
    })
  })
})

app.listen(3000, () => {
  console.log('running...')
})
