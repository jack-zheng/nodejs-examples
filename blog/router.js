var express = require('express')
var User = require('./models/user')
var md5 = require('blueimp-md5')

var router = express.Router()

router.get('/', function(req, res) {
    // console.log(req.session.user)
    res.render('index.html', {
        user: req.session.user
    })
})

router.get('/login', function(req, res) {res.render('login.html')})

router.post('/login', function(req, res) {
    // 1. 获取表单数据
    // 2. 查询数据库用户名密码是否正确
    // 3. 发送响应数据
    console.log(req.body)

    var body = req.body

    User.findOne({
       email: body.email,
       password: md5(md5(body.password)) 
    }, function(err, user) {
        if (err) {
            return res.status(500).json({
                err_code: 500,
                message: err.message
            })
        }

        if (!user) {
            return res.status(200).json({
                err_code: 1,
                message: 'Email or password is invalid.'
            })
        }

        // 用户存在，登陆成功，通过 session 记录登陆状态
        req.session.user = user
        res.status(200).json({
            err_code: 0,
            message: 'OK'
        })
    })
})

router.get('/logout', function(req, res) {
    // 清状态 + 重定向到登陆
    req.session.user = null
    res.redirect('/login')
})


router.get('/register', function(req, res) {res.render('register.html')})

router.post('/register', function(req, res) {
    // 获取表单数据
    // 操作数据库
    // 发送响应
    var body = req.body
    User.findOne({
        $or: [
            {
                email: body.email
            },
            {
                nickname: body.nickname
            }
        ]
    }, function(err, data) {
        if (err) {
            return res.status(500).json({
                err_code: 500,
                message: 'server err'
            })
        }
        
        if (data) {
            // 邮箱或昵称重复
            return res.status(200).json({
                err_code: 1,
                message: 'duplicated'
            })
        }

        body.password = md5(md5(body.password))

        new User(body).save(function(err, user) {
            if (err) {
                return res.status(500).json({
                    err_code: 500,
                    message: 'server err'
                })
            }

            // 注册成功，使用 session 记录用户登陆状态
            req.session.user = user

            return res.status(200).json({
                err_code: 0,
                message: 'ok'
            })
        })
    })
})

module.exports = router