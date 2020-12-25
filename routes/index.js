var express = require('express');

var router = express.Router();

var mysql = require('mysql');


var con = mysql.createConnection({
    host: "remotemysql.com",
    user: "5K12HlNiOH",
    password: "pnvgLC04Yb",
    database: "5K12HlNiOH"
});

router.get('/allblog', function(req, res, next) {
    var data = {};
    var sql = "SELECT * FROM baiviet WHERE 1";
    con.query(sql, function(err, result) {
        if (err) throw err;
        data['data'] = result;
        res.json(data);
    });
});
router.get('/dmbaiviet/idmon=:idmon', function(req, res, next) {
    var data = {};
    var sql = "SELECT * FROM baiviet WHERE idmonan =" + req.params.idmon;
    con.query(sql, function(err, result) {
        if (err) throw err;
        data['data'] = result;
        res.json(data);
    });
});


router.get('/', function(req, res, next) {
    res.render('index');
});
module.exports = router;