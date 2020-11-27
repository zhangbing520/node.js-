var express = require('express')

var app = express()

// 中间件：处理请求的，本质就是个函数

// 在Express 中，对中间件有几种分类

// 1. 不关心请求路径和请求方法的中间件
//    也就是说任何请求都会进入这个中间件

// 中间件本身是一个方法，该方法接收 3个参数
//        Request 请求对象
//        Response 响应对象
//        next 下一个中间件
// app.use(function(req,res,next){
//     console.log('1')
//     // 当一个请求进入一个中间件以后，如果不调用next（）方法，则会停留在当前中间件
//     // 所以next（）方法可以用来调用下一个中间键
//     next()
// })

// app.use(function(req,res,next){
//     console.log('2')
//     next()
// })

// app.use(function(req,res,next){
//     console.log('3')
//     res.send('333 end.')
// })


// 2. 关心请求路径的中间件
// 以‘/xxx’ 开头的路径中间件
app.use('/ad',function(req,res,next){
    console.log(req.url)
})

app.use('/a',function(req,res,next){
    console.log(req.url)
})

// 除了以上中间件之外，还有一种最常用的
// 严格匹配请求方法和请求路径的中间件
// app.get
// app.post

app.get('/',function(req,res,next){
    console.log('/')
})

app.get('/a',function(req,res,next){
    console.log('/a')
})

app.listen(3000,function(){
    console.log('app is running at port 3000.')
})

