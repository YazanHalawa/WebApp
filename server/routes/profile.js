var express = require('express');
var routerProfile = express.Router();
var Person = require('../models/personSchema');
var wishListItem = require('../models/wishListSchema');
var Email = require('./emailAlert');

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
             wish1ID: wishlist[0]._id,
             wish2ID: wishlist[1]._id,
             wish3ID: wishlist[2]._id,
             wish1 : wishlist[0].description,
             wish2 : wishlist[1].description,
             wish3  : wishlist[2].description
             
             });
             
             console.log(Profile[0]);
            res.json(Profile[0]);
        
             
             });     
         });  
          
       }
        else {
            console.log("Fourth if");
            res.sendStatus(403);
        }
    });
});


//route
routerProfile.delete ('/delete/:username', function(req,res){
    console.log("delete profile route");
    
       var notPerList = { 
            _id: false,
            __v: false,
            passwordHash :false,
            bdDay: false,
            bdMonth: false,
            bdYear: false,
            gender: false,
            profilePic: false
        };

    // Verify Token    
    user = Person.verifyToken(req.headers.authorization, function(user) {
        
        if (user) {
            // Find User
            Person.findOne({username:req.params.username}, notPerList, function(err, result) {
                if (err) {
                    console.log("First if");
                    res.sendStatus(403);
                    return;
                }
                
                
                if (result.username != user.username) {
                    //console.log(result.username);
                    console.log("Second if");
                    res.sendStatus(403);
                    return;
                }
                console.log(result);
                // Find friends and remove me from their friendlist   
                var i;
                for (i = 0; i < result.friendList.length; i++){
                    Person.findOne({username: result.friendList[i]}, notPerList, function(err, friend){
                        var j;
                        var mePosition = -1;
                        for (j = 0; j < friend.friendList.length; j++){
                            if (req.params.username === friend.friendList[j]){
                                console.log(j);
                                mePosition = j;
                            }
                        }
                        if (mePosition != -1){
                            console.log("friend username is %s", friend.username);
                            friend.friendList.splice(mePosition, 1);
                            Person.update({username: friend.username}, 
                                {$set: {friendList: friend.friendList}},
                                function(err, result) {
                                if(err) {
                                    console.log("could not update friend list");
                                    return res.sendStatus(403);
                                }
                            });
                            console.log("correctly removed");
                        } else {
                            console.log("could not find me in his friendList");
                            res.sendStatus(403);
                        }
                    
                    });
                }


                // Remove wishes i have reserved
                wishListItem.find({friendUserName :req.params.username},function(err, wishlist) {
                   // console.log(wishlist);
                    if (err) {
                        console.log("Err find friend username from wish");
                        res.sendStatus(403);
                        return;
                    }
                    if (wishlist === undefined){
                        console.log("no wishes found when removing friend");
                        return;
                    } else {
                        for (var i = 0; i < wishlist.length; i++){

                            wishListItem.findById(wishlist[i]._id,function(err, wl) {

                                if (err) {
                                    console.log("Err retrieve wishliet id");
                                    res.sendStatus(403);
                                    return;
                                }
                              //  console.log(wl);
                                                                
                                wl.friendUserName = null; 
                                wl.save(function(err) {
                                    if (err) {
                                    res.sendStatus(403);
                                    return;
                                    }  
                        
                                });

                            });
                        }
                    }
                    
                // Remove wishes i own
                wishListItem.find({ownerUserName:req.params.username},function(err, wishlistOwn) {
                    console.log("Inside get " + wishlistOwn);
                    if (err) {
                        console.log("Err find friend username from wish");
                        res.sendStatus(403);
                        return;
                    }
                    if (wishlistOwn === undefined){
                        console.log("no wishes found when removing friend");
                        return;
                    } else {
                        for (var i = 0; i < wishlistOwn.length; i++){
                            console.log("wishlist of i " + wishlistOwn[i]._id);
                            
                            wishListItem.findById(wishlistOwn[i]._id,function(err, wlOwn) {
                                console.log("inside wlOwn "+wlOwn);
                               
                                if (err) {
                                    console.log("Err retrieve wishliet id");
                                    res.sendStatus(403);
                                    return;
                                }

                                if(wlOwn.friendUserName != null){
                                    var sendEmail = new  Email(wlOwn.friendUserName, wlOwn.description,result.firstName,result.lastName); 
                                        sendEmail.transporter;   
                              }                              
                             
                              wlOwn.remove({_id:wlOwn._id},function(err, removed){
                                  if (err) {
                                        console.log("Remove owneruernamename wishlist error");
                                        res.sendStatus(403);
                                        return;
                                    }
                                    console.log("removed my wishlist");
                                 });
                                 
                               }); 
                           }
                        }
 
                    //Finally Delete me as a user
                    Person.remove({username:req.params.username}, function(err, result) {
                        if (err) {
                            console.log("Remove user error");
                            res.sendStatus(403);
                            return;
                        }  
                    });
                    console.log("removed me");
                    res.sendStatus(200);
                    
                   });  
                }); 
            }); 
          
        }
        else {
            console.log("Verify token failure");
            res.sendStatus(403);
        }
   
    }); 
});



//routItem update
routerProfile.put ('/updateColor/:username', function(req,res){
	console.log(" update color");
    
        var notPerList = { 
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
        
       
    console.log("username was %s" ,req.params.username);
    console.log("colorScheme was %s" ,req.body.colorScheme);
    
	user = Person.verifyToken(req.headers.authorization, function(user) {
        console.log(req.body);
        if (user) {
			
            Person.findOne({username:req.params.username}, notPerList, function(err, result) {
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

   
                    result.colorScheme = req.body.colorScheme;  
                  
                    result.save(function(err) {
                        if (err) {
                        console.log(err);
                        res.sendStatus(403);
                        return;
                        }               
                    });
                res.sendStatus(200);
     
            });  
          
       }
        else {
        	console.log("Person verify user error");
            res.sendStatus(403);
        }
  
    });
});


module.exports = routerProfile


