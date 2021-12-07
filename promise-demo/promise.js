// ES6 新增的语法

var fs = require('fs')

// console.log(1)

// new Promise(function() {
//     console.log(2)
//     fs.readFile('./data/a.txt', 'utf8', function(err, data) {
//         console.log(3)
//         console.log(data)
//     })
// })

// console.log(4)

// 1
// 2
// 4
// 3
// aaa
// aaa

var p1 = new Promise(function(resolve, reject) {
    fs.readFile('./data/a.txt', 'utf8', function(err, data) {
        if (err) {
            reject(err)
        } else {
            resolve(data)
        }
    })
})

// then 接收的内容即 resolve 的 data 结果
p1.then(function(data){
    console.log(data)
}, function(err) {
    console.log(err)
})