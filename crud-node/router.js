var fs = require('fs')
var Student = require('./student')
var express = require('express')
var router = express.Router()

router.get('/students', function (req, res) {
    Student.find(function(err, students) {
        if( err ) {
            return res.status(500).send('Server error.')
        }
        res.render('index.html', {
            fruits: [
                "apple",
                "banana",
                "orange"
            ],
            students: students
        })
    })
})

router.get('/students/new', function(req, res) {
    res.render('new.html')
})
router.post('/students/new', function(req, res) {
    new Student(req.body,).save(req.body, function(err) {
        if (err) {
            return res.status(500).send('Server error.')
        }
        res.redirect('/students')
    })
})
router.get('/students/edit', function(req, res) {
    // 1. index 列表加入 edit 链接
    // 2. 获取学生 id
    // 3. 渲染编辑页面
    Student.findById(req.query.id, function(err, student) {
        if (err) {
            return res.status(500).send('Server error.')
        }
        res.render('edit.html', {
            student: student
        })
    })
})
router.post('/students/edit', function(req, res) {
    // 获取表单数据
    // 更新
    // 发送响应
    Student.findByIdAndUpdate(req.body.id, req.body, function(err) {
        if (err) {
            return res.status(500).send('Server error.')
        }

        res.redirect('/students')
    })
})
router.get('/students/delete', function(req, res) {
    // 获取 id
    // 根据 id 删除
    // 相应
    Student.findByIdAndRemove(req.query.id, function(err) {
        if (err) {
            return res.status(500).send('Server error.')
        }

        res.redirect('/students')
    })
})


module.exports = router
