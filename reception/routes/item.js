var express = require('express');
var router = express.Router();
var fs = require('fs');
var mysql = require('mysql');
var connection = mysql.createPool({
	host     : 'localhost',
	user     : 'root',
	password : '123456',
	database : 'nav'
});
/* GET home page. */
router.post('/a', function(req, res, next) {
	res.header('Access-Control-Allow-Origin',"*");
	connection.query("SELECT id,nav FROM yiji",function(err,rows){
		res.send(rows);
	})
});
router.post('/a1', function(req, res, next) {
	res.header('Access-Control-Allow-Origin',"*");
	connection.query("SELECT id,name,xianqing,main FROM erji",function(err,rows){
		res.send(rows);
	})
});
router.post('/b1', function(req, res, next) {
	res.header('Access-Control-Allow-Origin',"*");
	var abc=req.body.abc;
	connection.query("SELECT * FROM erji WHERE id="+abc,function(err,rows){
		res.send(rows);
	})
});
module.exports = router;