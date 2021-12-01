/**
 * 数据操作模块，单纯操作，不关心业务
 * 
 * 封装异步 API， node 的精华所在，通过回调函数实现
 */

var fs = require('fs')
var dbPath = './db.json'
/**
 * get
 * 
 * return[]
 */

exports.find = function (callback) {
    fs.readFile(dbPath, 'utf-8', function(err, data) {
        if (err) {
            return callback(err)
        }
        callback(null, JSON.parse(data).students)
    })
}

exports.findById = function (id, callback) {
    fs.readFile(dbPath, 'utf-8', function(err, data) {
        if (err) {
            return callback(err)
        }

        var students = JSON.parse(data).students
        var ret = students.find(function(item) {
            return item.id === parseInt(id)
        })
        callback(null, ret)
    })
}

exports.save = function (student, callback) {
    fs.readFile(dbPath, 'utf-8', function(err, data) {
        if (err) {
            return callback(err)
        }
        var students = JSON.parse(data).students

        student.id = students[students.length - 1].id + 1

        students.push(student)
        var fileData = JSON.stringify({
            students: students
        })
        fs.writeFile(dbPath, fileData, function(err) {
            if (err) {
                return callback(err)
            }
            callback(null)
        })
    })
}

exports.updateById = function (student, callback) {
    fs.readFile(dbPath, 'utf8', function(err, data) {
        if (err) {
            return callback(err)
        }
        var students = JSON.parse(data).students

        student.id = parseInt(student.id)

        var stu = students.find(function(item) {
            return item.id === student.id
        })

        for (var key in student) {
            stu[key] = student[key]
        }

        var fileData = JSON.stringify({ students: students })
        fs.writeFile(dbPath, fileData, function(err) {
            if (err) {
                return callback(err)
            }
            callback(null)
        })
    })
}

exports.deleteById = function (id, callback) {
    fs.readFile(dbPath, 'utf-8', function(err, data) {
        if (err) {
            return callback(err)
        }
        var students = JSON.parse(data).students

        var deletedStu = students.findIndex(function(item) {
            return item.id = id
        })

        students.splice(deletedStu, 1)

        var fileData = JSON.stringify({ students: students })
        fs.writeFile(dbPath, fileData, function(err) {
            if (err) {
                return callback(err)
            }
            callback(null)
        })
    })
}