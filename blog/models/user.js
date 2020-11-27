var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

var Schema = mongoose.Schema

var userSchema = new Schema({
email:{
    type:String,
    required:true
},
nickname:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true
},
create_time:{
    type:Date,
    // 注意这里不要写Date.now() 因为会立即执行
    // 这里直接给了一个方法
    // 当你去 new Model 的时候，如果没有传递 create_time，则 mongoose 就会调用 default 指定的 Date.now,试用其返回值作为默认值
    default:Date.now
},
last_modified_time:{
    type:Date,
    default:Date.now
},
avatar:{
    type:String,
    default:'/public/img/avatar-default.png'
},
bio:{
    type:String,
    default:''
},
gender:{
    type:Number,
    enum:[-1,0,1],
    default:-1
},
birthday:{
    type:Date
},
status:{
   type:Number,
   // 0 没有权限限制
   // 1 不可以评论
   // 2 不可以登录
   enum:[0,1,2],
   default:0 
}
})

module.exports = mongoose.model('User',userSchema)