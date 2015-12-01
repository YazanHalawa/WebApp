var express = require('express');
var passport = require('passport');
var router = express.Router();
var Person = require('../models/personSchema');


//route
router.get ('/', function(req,res){
	console.log("index.html");
	res.send('index.html');
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
		if (err) { return res.send("User already exist!");	}; 
		
		//passport.authenticate('local')(req, res, function () {
		//res.redirect("/login_Success.html");});
		res.redirect("/login_Success.html");
		console.log('new resigtered user');
	});
});
	
router.post ('/login', function(req,res){
	console.log('Login route');
	console.log(req.body.username);
	console.log(req.body.password);
	
		Person.find({username: req.body.username, password: req.body.password},function (err,results) {
			if (err) {return console.error(err); };
			if(!results.length)
				res.send("not found");
			else{
				var token = User.generateToken(username);
				console.log("found");
				res.json({name: username, token: token});

			}
				//res.send("found");
		//res.redirect("/login_Success.html");
	});	
	
});

module.exports = router;
