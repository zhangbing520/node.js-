const mongoose = require('mongoose')

// 1. 连接数据库
// 指定连接的数据库不需要存在 没有的话会被自动创建出来
mongoose.connect('mongodb://localhost/itcast')

// 2. 设计文档结构（表结构）
// 字段名称就是表结构中的属性名称
// 值
// 约束的目的是为了数据的完整性 不要有脏数据
var blogSchema = new Schema({
title:String,
author:String,
body:String,
comments:[{body:String, date:Date}],
date:{tyoe:Date,default:Date.now},
hidden:Boolean,
meta:{
    votes:Number,
    favs:Number
}
});


var userSchema = new Schema ({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String
    }
})

// 3. 将文档结构发布为模型
// mongoose.model 方法就是将一个架构发布为 model
// 第一个参数：传入一个大写单数字符串用来表示你的数据库名称
//           mongoose 会自动将大写名词的字符串生成 小写复数 的集合名称
//           例如这里的 User 最终会变为 users 集合名称
// 第二个参数：架构 Schema
// 返回值：模型架构函数
var User = mongoose.model('User',username)


// 4. 当我们有了型架构之后，就可以使用这个构造函数对 users 集合中 的数据为所欲为了

// 添加数据
var admin = new User({
    username:'admin',
    password:'123456',
    email:'admin@admin.com'
})

admin.save(function(err,ret){
    if (err) {
        console.log('保存失败')
    } else {
        console.log('保存成功')
        console.log(ret)
    }
})