var fs = require('fs')
var express = require('express')
var router = express.Router()

router.get('/students', function (req, res) {
    fs.readFile('./db.json', 'utf8', function(err, data) {
        if( err ) {
            return res.status(500).send('Server error.')
        }

        var context = JSON.parse(data).students

        res.render('index.html', {
            fruits: [
                "apple",
                "banana",
                "orange"
            ],
            students: context
        })
    })
})

router.get('/students/new', function(req, res) {})
router.post('/students/new', function(req, res) {})
router.get('/students/edit', function(req, res) {})
router.post('/students/edit', function(req, res) {})
router.get('/students/delete', function(req, res) {})


module.exports = router