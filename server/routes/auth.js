var express = require('express');
var router = express.Router();
var Person = require('../models/personSchema');
var wishListItem = require('../models/wishListSchema');


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
					user.firstName = req.body.firstName;
					user.lastName = req.body.lastName;
					user.bdMonth = req.body.bdMonth;
					user.bdDay = req.body.bdDay;
					user.bdYear = req.body.bdYear;
					user.gender = req.body.gender;
					user.save(function(err) {
					if (err) {
					console.log('DB Save error');
	  				res.sendStatus(403);
	  				return;
					}
    wishListItem.create({ownerUserName:req.body.username ,friendUserName:null, description:req.body.wish1}, function (err,item){
			
			if (err) {
					console.log('wish list 1 save error');
	  				res.sendStatus(403);
	  				return;
			}	
	});
	
	 wishListItem.create({ownerUserName:req.body.username ,friendUserName:null,description:req.body.wish2}, function (err,item){
			
			if (err) {
					console.log('wish list 2 save error');
	  				res.sendStatus(403);
	  				return;
			}	
	});
	
	
	 wishListItem.create({ownerUserName:req.body.username ,friendUserName:null,description:req.body.wish3}, function (err,item){
			
			if (err) {
					console.log('wish list 3 save error');
	  				res.sendStatus(403);
	  				return;
			}	
	});
	
	var token = Person.generateToken(user.username);
        res.json({name: user.firstName, token: token});
      });
    } 
	else {
	  console.log('User exist');
      res.sendStatus(403);
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
