var express = require('express');
var router = express.Router();
var mysql = require('../server/db.js')

/* GET home page. */
router.get('/', function(req, res, next) {
    var result = mysql.query('select * from runoob', function (result) {
        res.jsonp(result)
    })
});

module.exports = router;
