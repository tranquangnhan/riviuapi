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
    var sql = "SELECT * FROM baiviet WHERE 1";
    con.query(sql, function(err, result) {
        if (err) throw err;
        res.json(result);
    });
});
router.get('/dmbaiviet/idmon=:idmon', function(req, res, next) {
    var sql = "SELECT * FROM baiviet WHERE idmonan =" + req.params.idmon;
    con.query(sql, function(err, result) {
        if (err) throw err;
        res.json(result);
    });
});


module.exports = router;