/**
 * 入口，只负责配置，挂在路由等
 */

var express = require('express')
var router = require('./router')
var app = express()
var bodyParser = require('body-parser')


app.use('/node_modules/', express.static('./node_modules'))
app.use('/public/', express.static('./public'))

app.engine('html', require('express-art-template'))

// 必须在挂在 router 之前调用
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(router)

app.listen(3000, function() {
    console.log('running 3000...')
})