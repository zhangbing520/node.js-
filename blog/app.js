var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var router = require('./router')

var app = express()

app.use('/public/',express.static(path.join(__dirname,'./public/')))
app.use('/node_modules/',express.static(path.join(__dirname,'./node_modules/')))

// 在node中，有很多第三方模板引擎可以使用，不是只有art-template
app.engine('html',require('express-art-template'))
// 默认就是 ./views 目录 
app.set('views',path.join(__dirname,'./views/'))

// 配置解析表单 POST 请求插件一定要在 app.use(router) 之前
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// 把路由挂在到 app 中
app.use(router)

app.listen(5000,function(){
    console.log('runing...')
})