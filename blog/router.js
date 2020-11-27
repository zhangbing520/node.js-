var express = require('express')
var User = require('./models/user')
var md5 = require('blueimp-md5')


var router = express.Router()

router.get('/',function(req,res){
    res.render('index.html')
})

router.get('/login',function(req,res){
    res.render('login.html')
})

router.post('/login',function(req,res){
    
})

router.get('/register',function(req,res){
    res.render('register.html')
})

router.post('/register',function(req,res){
    // 1. 获取表单提交的数据 req.body
    // 2. 操作数据库(判断用户是否存在，如果已存在不允许注册，如果不存在，注册新建用户)
    // 3. 发送响应

    // console.log(req.body)
/* [Object: null prototype] {
  email: '2281287648@qq.com',
  nickname: 'kisstherain',
  password: '1234567890'
} */

var body = req.body
User.findOne({
    $or:[
        {
            email:body.email
        },
        {
            nickname:body.nickname
        }
    ]
}, function(err,data){
    if(err){
        // return res.status(500).send('Server error')
        return res.status(500).json({
            success:false,
            message:'服务端错误'
        })
    }
    // console.log(data)
    // 如果邮箱已存在
    // 判断昵称
    if (data) {
        // 邮箱或者昵称已存在
        // return res.status(200).send('email or nickname already exits')
        return res.status(200).json({
           err_code:1,
           message:'email or nickname already exits.' 
        })
    }
    // 对密码进行 md5 重复加密
    body.password = md5(md5(body.password))
    new  User(body).save(function(err,data){
        if(err){
            return res.status(500).json({
                err_code:500,
                message:'Internal error.'
            })
        }
    /* res.status(200).send(JSON.stringify({
        success:true
    })) */
    // express 提供了一个响应方法： json
    // 该方法接受一个对象作为参数，它会自动帮你把对象转为字符串再发送给浏览器
    res.status(200).json({
        err_code:0,
        message:'ok'
    })

    })  
})
})

module.exports = router