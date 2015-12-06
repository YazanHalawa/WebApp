var express = require('express');
var routerFriend = express.Router();
var Person = require('../models/personSchema');


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
			Person.findOne({'username':req.body.item.friendUsername}, notPerList, function(err, person) {
				if (person) {
					var found = 0;
					Person.findOne({'username':req.params.username}, notPerList, function(err, person) {
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
							return res.json({username:result.username});				
							});
						}
						else{
							console.log("your friend is your list dummy	");
							res.sendStatus(403);
						}
					});
				}
				else{
					console.log("Friend not found. Invite friend to join!");
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

routerFriend.post('/remove', function(req,res) {
	console.log('in remove friend');
	Person.findOne({'username':req.body.myUsername}, function(err, person) {
		var i;
		var position = -1;
		console.log(person.friendList);
		for (i = 0; i < person.friendList.length; i++) {
			if (req.body.friendUsername === person.friendList[i]){
				position = i;
			}
		}
		console.log(position);
		if (position != -1) {
			console.log(person.friendList);
			console.log("about to splice");
			//var myFriendList = person.myFriendList;
			//myFriendList.splice(position,1);
			person.friendList.splice(position,1);
			console.log("after splicing");
			console.log(person.friendList);
			
			Person.update({username: req.body.myUsername}, 
				{$set: {friendList: person.friendList}},
				function(err, result) {
				if(err) {
					console.log(err);
					return res.send(err);
				}
				res.json(result.username);
			});
		}
		else {
			console.log("That friend is not in your list");
			res.sendStatus(403);
		}
	});
});

routerFriend.get('/viewFriends', function(req, res) {
	console.log('in view friends');
});



module.exports = routerFriend;