var mysql = require('mysql')

var db = {};

db.query = function sqlcallback(sqllan,fn) {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'test',
        port: 3306
    });

    connection.connect(function (err) {
        if (err) {
            console.log(err);
            return
        }
    });
    var sql = sqllan

    if (!sql) return

    connection.query(sql,function (err, rows, fields) {
        if (err) {
            console.log(err);
            return
        }
        console.log(fields);
        fn(rows);
    });

    connection.end(function (err) {
        if (err) {
            console.log(err)
            return
        } else {
            console.log('连接关闭');
        }
    });
}

module.exports = db;


