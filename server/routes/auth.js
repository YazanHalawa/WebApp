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
	
	Person.findOrCreate({username: req.body.username}, function(err, user, created) {
    if (created) {
				console.log('create new user');
					user.set_password(req.body.password);
					user.firstname = req.body.firstname
					user.save(function(err) {
					
					if (err) {
					console.log('DB Save error');
	  				res.sendStatus("403");
	  				return;
					}
       
	var token = Person.generateToken(user.username);
        res.json({name: user.name, token: token});
      });
    } 
	
	else {
	  console.log('User exist');
      res.sendStatus("403");
    }
  });		
});
	
router.post ('/login', function(req,res){
	console.log('Login route');
	console.log(req.body.username);
	console.log(req.body.password);
	
		Person.findOne({username: req.body.username},function (err,user) {
			if (err) { 
				res.sendStatus(403);
	    		return; 
			};
			
			if(user && user.checkPassword(req.body.password)){
				console.log("found");
				var token = Person.generateToken(user.username);
				res.json({name: user.firstName, token:token});
				}
			
			else{
				console.log("not found");
				res.sendStatus(403);
			}
	});	
	
});

module.exports = router;
