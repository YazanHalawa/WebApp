var express = require('express');
var routerFriend = express.Router();
var Person = require('../models/personSchema');

routerFriend.post('/add', function(req, res) {
	console.log(req.body.username);
	console.log(req.body.yourUsername);
	
	Person.findOne({'username':req.body.username}, function(err, person) {
		if (person) {
			console.log("Found friend");
			console.log(person);
			console.log(req.body.yourUsername);
			Person.update(
				{'username' : req.body.yourUsername },
				{$push:{'friendList' : req.body.username}},
				 function(err,result) {
				if(err){
					console.log(err);
					return res.send(err);
				}
				console.log("friend added!");
				return res.json(result.username);
						
			})
		}
		else
			console.log("Friend not found. Invite friend to join!");
	});
	
});

routerFriend.post('/remove', function(req,res) {
	console.log('in remove friend');
	var myPerson = Person.findOne({'username':req.body.yourUsername}, function(err, person) {
	var myFriendList = myPerson['friendList'];	
	var i;
	var position = -1
	for(i = 0; i <myFriendList.length; i++) {
		if (myFriendList[i]['friendList'] == req.body.username)
			position = i;
	}
	if (position != -1) {
		myFriendList.splice(i,1);
		Person.update({username: req.body.yourUsername}, 
			{$set: {friendList: myFriendList}},
		function(err, result) {
			if(err) {
				console.log(err);
				return res.send(err);
			}
			res.json(result.username);
		});
	}
	else
		console.log("That friend is not in your list");

	});

});

routerFriend.get('/viewFriends', function(req, res) {
	console.log('in view friends');
});



module.exports = routerFriend;