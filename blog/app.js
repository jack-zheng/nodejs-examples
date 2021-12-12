var express = require('express')
var path = require('path')
var router = require('./router')
var bodyParser = require('body-parser')
var session = require('express-session')

var app = express()

app.use('/public/', express.static(path.join(__dirname, './public/')))
app.use('/node_modules/', express.static(path.join(__dirname, './node_modules/')))

app.engine('html', require('express-art-template'))
app.set('views', path.join(__dirname, './views/')) // 可以不设置， 默认就是 view

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// expresson 默认不支持 session/cookie, 需要第三方插件
// 配置在 route 之前
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true, //不管用不用，都给你一个 session 值
    // cookie: { secure: true }
  }))

// 路由挂在到 app 中
app.use(router)

app.listen(4000, ()=>{ console.log('running...') })