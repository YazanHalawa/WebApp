var express = require('express');
var routerFriend = express.Router();
var Person = require('../models/personSchema');
var wishListItem = require('../models/wishListSchema');


routerFriend.post('/add/:username', function(req, res) {

	var notPerList = { 
            _id: false,
            __v: false,
            passwordHash :false,
            bdDay: false,
            bdMonth: false,
            bdYear: false,
            firstName: false,
            gender: false,
            lastName: false,
            profilePic: false
        };
        

	user = Person.verifyToken(req.headers.authorization, function(user) {
		if (user){
			Person.findOne({'username':req.body.item.friendUsername}, notPerList, function(err, friend) {
				var found = 0;
				Person.findOne({'username':req.params.username}, notPerList, function(err, person) {
					if (err) {
		            	console.log("Err get person");
		                res.sendStatus(403);
		                return;
		            }
		            
		       	 	if (person.username != user.username) {
		       	 		console.log("Err comparing username");
		                res.sendStatus(403);
			    		return;
		           	}
		           	console.log("me %s", person.username);
		           	console.log("him %s", friend.username);
		           	if (person.username === friend.username){
		           		console.log("adding yourself? You fool!");
		           		res.sendStatus(403);
		           		return;
		           	}
					var i;
					console.log(person.friendList);
					for (i = 0; i < person.friendList.length; i++) {
						if (req.body.item.friendUsername === person.friendList[i]){
							found = 1;
						}
					}
					if (!found) {
                        
						Person.update(
						{'username' : req.params.username },
						{$push:{'friendList': req.body.item.friendUsername}},
					 	function(err,result) {
							if(err){
								console.log(err);
								return res.send(err);
							}
						console.log("friend added!");
                        
                        
                        Person.update(
						{'username' : friend.username },
						{$push:{'friendList':  person.username}},
					 	function(err,result) {
							if(err){
								console.log(err);
								return res.send(err);
							}
                        console.log(friend.username);
                        console.log( person.username);
						console.log("User addeded on friend's friendlist!");

                        return res.json({username:result.username});				
                        });
                      });
					}
					else{
						console.log("your friend is your list dummy	");
						res.sendStatus(403);
					}
				});
			});
		} 
		else {
			console.log("verify error");
			res.sendStatus(403);
		}

	});
});

routerFriend.delete('/remove/:username', function(req,res) {
	console.log('in remove friend');


	user = Person.verifyToken(req.headers.authorization, function(user) {
		if (user){
			Person.findOne({'username':req.params.username}, function(err, person) {
				if (err) {
	            	console.log("Err get person");
	                res.sendStatus(403);
	                return;
	            }
	            
	       	 	if (person.username != user.username) {
	       	 		console.log("Err comparing username");
	                res.sendStatus(403);
		    		return;
	           	}
                // finding friend in my list
				var i;
				var friendPosition = -1;
				console.log(person.friendList);
				for (i = 0; i < person.friendList.length; i++) {
					if (req.body.friendUsername === person.friendList[i]){
						friendPosition = i;
					}
				}
                // finding me in friend's friendlist
				console.log(friendPosition);
				if (friendPosition != -1) {
                    var mePosition = -1;
                    Person.findOne({'username': person.friendList[friendPosition]}, function(err, friend){
                        var i;
                        var mePosition = -1;
                        console.log(friend.friendList);
                        for (i = 0; i < friend.friendList.length; i++){
                            if (req.params.username === friend.friendList[i]){
                                mePosition = i;
                            }
                        }
                        if (mePosition === -1){
                            res.sendStatus(403);
                            return;
                        }

                        friend.friendList.splice(mePosition, 1);
                        Person.update({username: friend.username},
                            {$set: {friendList: friend.friendList}}, function(err, result){
                                if (err){
                                    console.log("could not remove me from his friendList");
                                    return res.send(403);
                                }
                        });
                    });
					console.log(person.friendList);
					console.log("about to splice");
					//var myFriendList = person.myFriendList;
					//myFriendList.splice(position,1);
					person.friendList.splice(friendPosition,1);
					console.log("after splicing");
					console.log(person.friendList);
					
					Person.update({username: req.params.username}, 
						{$set: {friendList: person.friendList}},
						function(err, result) {
						if(err) {
							console.log(err);
							return res.send(err);
						}
                        
                        
                         wishListItem.find({ownerUserName:person.username, friendUserName :req.body.friendUsername},function(err, wishlist) {
                            if (err) {
                                console.log("Err find friend username from wish");
                                res.sendStatus(403);
                                return;
                            }
                        	if (wishlist === undefined){
                        		console.log("no wishes found when removing friend");
                        		res.sendStatus(403);
                        		return;
                        	}
                        
                                    for (var i = 0; i < wishlist.length; i++){
     
                                     wishListItem.findById(wishlist[i]._id,function(err, wl) {
              
                                        if (err) {
                                            console.log("Err retrieve wishliet id");
                                            res.sendStatus(403);
                                            return;
                                        }
                                             console.log(wl);
                                            
                                            wl.friendUserName = null; 
                                            wl.save(function(err) {
                                            if (err) {
                                            res.sendStatus(403);
                                            return;
                                            }  
                                    
                                    });                                                      
                                  });
                                } 
                            });
                                                    
						      res.sendStatus(200);
				    })
				}
				else {
					console.log("That friend is not in your list");
					res.sendStatus(403);
				}
			});
		} 
		else {
			console.log("verify error");
			res.sendStatus(403);
		}

	});
});

routerFriend.get('/viewFriends/:username', function(req, res) {
	console.log("view Friends route");
    console.log("username was %s" ,req.params.username);
    
    var notPerList = { 
        _id: false,
        __v: false,
        passwordHash :false,
        bdDay: false,
        bdMonth: false,
        bdYear: false,
        firstName: false,
        gender: false,
        lastName: false,
        profilePic: false
    };

    var notFriendList = {
        _id: false,
        __v: false,
        passwordHash :false,
        bdDay: false,
        bdMonth: false,
        bdYear: false,
        gender: false,
        friendList :false
    };
        
    var profile = [];  
   
    user = Person.verifyToken(req.headers.authorization, function(user) {
        if (user) {
            
            Person.findOne({username:req.params.username}, notPerList ,function(err, result) {
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
			
			
           // console.log("length should be %d", result.friendList.length)
        	for (var i = 0; i < result.friendList.length; i++){
        		
        		console.log("before function %s",result.friendList[i]);
        		var friendUsername = result.friendList[i];
	    		Person.findOne({username:friendUsername}, notFriendList ,function(err, friendResult){
	    			
	    			//console.log("result is %s", friendResult);
	    			//console.log("query in query %d", friendResult.length);
		    		profile.push(friendResult);
		    		
		    		//console.log(profile);
		    		if (profile.length === result.friendList.length){
		    			res.json(profile);
		    		}

	    		});
			}
	
			 
         });  
          
       }
        else {
            console.log("token not found");
            res.sendStatus(403);
       }
  
   });
});


//route
routerFriend.post ('/viewFriendsProfile/:username', function(req,res){
	console.log("Friend Profile route");
    
        
          var notPerList = { 
            _id: false,
            __v: false,
            passwordHash :false,
            bdDay: false,
            bdMonth: false,
            bdYear: false,
            firstName: false,
            gender: false,
            lastName: false,
            profilePic: false
        };
        
        var notFriendList = { 
            _id: false,
            __v: false,
            passwordHash :false,
            friendList :false
        };
        
        
        var notWishList = { 
            __v: false,      
        };
        
      
	user = Person.verifyToken(req.headers.authorization, function(user) {
        
        if (user) {
		  var profile = [];
            Person.findOne({username:req.params.username},notPerList, function(err, result) {
            if (err) {
            	console.log("Can't find user");
                res.sendStatus(403);
                return;
            }
            
            
       	 	if (result.username != user.username) {
       	 		//console.log(result.username);
       	 		console.log("User not same in session");
                res.sendStatus(403);
	    		return;
            }
            console.log("friend is %s", JSON.stringify(req.body));
             Person.findOne({username:req.body.friendUsername},notFriendList, function(err, result) {
			  	if (err) {
	            	console.log("Can't find friend");
	                res.sendStatus(403);
	                return;
			    }
                wishListItem.find({ownerUserName:result.username, friendUserName:null},notWishList, function(err, wishlist) {
                    if (err) {
                        console.log("Error in obtain wishlist");
                        res.sendStatus(403);
                        return;
                    }
            
                //console.log(wishlist);
                profile. push ({
                username :result.username,
                firstName : result.firstName,
                lastName : result.lastName,
                bdMonth : result.bdMonth,
                bdDay : result.bdDay,
                bdYear : result.bdYear,
                gender : result.gender,
                profilePic : result.profilePic,
                });
            
                
                
                profile. push ({wishes:wishlist});
                console.log(profile);
                
            
                
                // console.log(Profile[0]);
                res.json(profile);
        
              });
            });   
         });  
          
       }
        else {
        	console.log("Fourth if");
            res.sendStatus(403);
        }
  
  
    });
});





module.exports = routerFriend;