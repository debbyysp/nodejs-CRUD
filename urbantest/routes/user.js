var express = require('express');
var router = express.Router();
var path = require('path');
var querystring = require('querystring');
var http = require('http');
var users = require('../models/users');

router.get('/user', function(req, res){
	users.list(req,function(status,data){
		var params = {
			title : 'pasien',
			data : data,
		}
		res.render('index',params);
	});
});

router.get('/user/add', function(req, res){
	res.render('save');
});

router.post('/user/add', function(req, res){
	users.insert(req, function(status,data){
		res.type('json');
		if(!status)
			res.redirect('/user');
		res.redirect('/user');
	});
});

router.get('/user/update/:uid',function(req, res){
	users.getpasien(req, function(status,data){
		var params = {
			title : 'pasien',
			data : data,
		}
		console.log(params);
		res.render('update',params);
	});
});

router.post('/user/update/:uid', function(req, res){
	users.update(req, function(status, data){
		res.type('json');
		if(!status)
			res.redirect('/user');
		res.redirect('/user');
	});
});

router.get('/user/del/:uid', function(req, res){
	users.delete(req, function(status,data){
		res.type('json');
		if(!status)
			res.redirect('/user');
		res.redirect('/user');
	});
});

module.exports = router;
