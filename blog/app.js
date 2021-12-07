var express = require('express')
var path = require('path')
var router = require('./router')

var app = express()

app.use('/public/', express.static(path.join(__dirname, './public/')))
app.use('/node_modules/', express.static(path.join(__dirname, './node_modules/')))

app.engine('html', require('express-art-template'))
app.set('views', path.join(__dirname, './views/')) // 可以不设置， 默认就是 view

// 路由挂在到 app 中
app.use(router)

app.listen(4000, ()=>{ console.log('running...') })