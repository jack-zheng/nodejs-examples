/**
 * 入口，只负责配置，挂在路由等
 */

var express = require('express')
var router = require('./router')
var app = express()


app.use('/node_modules/', express.static('./node_modules'))
app.use('/public/', express.static('./public'))

app.engine('html', require('express-art-template'))

app.use(router)

app.listen(3000, function() {
    console.log('running 3000...')
})