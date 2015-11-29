var express = require('express');
var passport = require('passport');
var router = express.Router();
var Person = require('../models/personSchema');


//route
router.get ('/', function(req,res){
	console.log("index.html");
	res.sendFile('index.html');
});

router.post ('/register', function(req,res){
	console.log('Register route');
	console.log(req.body.username);
	console.log(req.body.password);

	var user = Person ({ 
		username : req.body.username, 
		password: req.body.password,
		firstName: req.body.firstName,
		lastName: req.body.lastName
		});
	
	user.save(function(err){
		if (err) {
			return res.send("User already exist!");	
		}; 
	res.redirect("/login_Success.html");
	console.log('new resigtered user');
	});
});
	
router.post ('/login', function(req,res){
	console.log('Register new user');
	console.log(req.body.username);
	console.log(req.body.password);
	
});

module.exports = router;
