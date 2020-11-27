var express = require('express')
var router = require('./router')

var app = express()

// 开放静态资源
app.use('/node_modules/', express.static('./node_modules/'))
app.use('/public/', express.static('./public/'))

app.engine('html', require('express-art-template'))

router(app)

app.listen(3000, () => {
  console.log('running...')
})

module.exports = app
