var express = require('express');
var passport = require('passport');
var router = express.Router();
var Person = require('../models/personSchema');


//route
router.get ('/', function(req,res){
	console.log("index.html");
	res.render('index');
});

router.post ('/register', function(req,res){
	console.log('Register new user');
	console.log(req.body.username);
	console.log(req.body.password);
	
	var db = req.db;
	var user = Person ({ 
		username : req.body.username, 
		password: req.body.password
		});
	
	user.save(function(err){
		if (err) throw err;
		console.log('new resigter user');
	});
});
	
router.post ('/login', function(req,res){
	console.log('Register new user');
	console.log(req.body.username);
	console.log(req.body.password);
	
});

module.exports = router;
