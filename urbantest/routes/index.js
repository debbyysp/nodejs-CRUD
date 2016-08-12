var express = require('express');
var router = express.Router();
var path = require('path');
var users = require('../models/users');

router.get('/', function(req, res){
	res.render('login');
});

router.post('/',function(req, res){

	users.login(req,function(status,data){
		res.type('json');
		if(data.length)
			res.redirect('/user');
		else{
			res.redirect('/');
		}
	});
});
module.exports = router;
