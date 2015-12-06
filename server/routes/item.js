var express = require('express');
var routerItem = express.Router();
var Person = require('../models/personSchema');
var wishListItem = require('../models/wishListSchema');


//routItem update
routerItem.put ('/update/:username', function(req,res){
	console.log("item route");
        var notPerList = { 
            _id: false,
            __v: false,
            passwordHash :false,
            friendList :false,
            bdDay: false,
            bdMonth: false,
            bdYear: false,
            firstName: false,
            gender: false,
            lastName: false,
            profilePic: false
        };
        
       
       // var notWishList = { 
         //   __v: false,
           // friendUserName : false,    
        //};
        
    console.log("username was %s" ,req.params.username);
	user = Person.verifyToken(req.headers.authorization, function(user) {
        console.log(req.body);
        if (user) {
			
            Person.findOne({username:req.params.username},notPerList, function(err, result) {
            if (err) {
            	console.log("Err get person");
                res.sendStatus(403);
                return;
            }
            
       	 	if (result.username != user.username) {
       	 		console.log("Err comparing username");
                res.sendStatus(403);
	    		return;
            }

              wishListItem.findById(req.body.item._id,function(err, wishlist) {
                if (err) {
                	console.log("Err retrieve wishliet id");
                    res.sendStatus(403);
                    return;
                }
                    console.log("id is %s", req.body.item._id);
                    console.log("descr is %s" , req.body.item.description);
                    console.log("wish list is %s", wishlist);
                    wishlist.description = req.body.item.description;  
                    wishlist.save(function(err) {
                    if (err) {
                    res.sendStatus(403);
                    return;
                    }  
             
             });
             
           
            res.json(wishlist);
        
             
             });     
         });  
          
       }
        else {
        	console.log("Person verify user error");
            res.sendStatus(403);
        }
  
    });
});

module.exports = routerItem;
