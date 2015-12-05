var express = require('express');
var routerProfile = express.Router();
var concat = require('Underscore');
var Person = require('../models/personSchema');
var wishListItem = require('../models/wishListSchema');


var mongoose = require('mongoose'),
	Schema = mongoose.Schema;


//route
routerProfile.get ('/get/:username', function(req,res){
	console.log("profile route");
    
    
        var notPerList = { 
            _id: false,
            __v: false,
            passwordHash :false,
            friendList :false
        };
        
        
        var notWishList = { 
            _id: false,
            __v: false,
            friendUserName : false,
        
        };
        
      
	user = Person.verifyToken(req.headers.authorization, function(user) {
        
        if (user) {
			
            Person.find({username:req.params.username},notPerList, function(err, result) {
            if (err) {
            	console.log("First if");
                res.sendStatus(403);
                return;
            }
            
            
       	 	if (result[0].username != user.username) {
       	 		//console.log(result.username);
       	 		console.log("Second if");
                res.sendStatus(403);
	    		return;
            }


            
              wishListItem.find({ownerUserName:req.params.username},notWishList, function(err, wishlist) {
                if (err) {
                	console.log("Third if");
                    res.sendStatus(403);
                    return;
                }
          
            
            var Profile = [];
             console.log(result[0].firstName);
             
             Profile. push ({
             username :result[0].username,
             firstName : result[0].firstName,
             lastName : result[0].lastName,
             bdMonth : result[0].bdMonth,
             bdDay : result[0].bdDay,
             bdYear : result[0].bdYear,
             gender : result[0].gender,
             profilePic : result[0].profilePic,
             wish1 : wishlist[0].description,
             wish2 : wishlist[1].description,
             wish3  : wishlist[2].description
             
             });
             
             console.log(Profile[0]);
            res.json(Profile[0]);
        
            //  concat.extend(target,profile,wishlist); 
             
             });     
         });  
          
       }
        else {
        	console.log("Fourth if");
            res.sendStatus(403);
        }
  
  
    });
});

module.exports = routerProfile;
