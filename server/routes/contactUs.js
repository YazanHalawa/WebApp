var express = require('express');
var routerContactUs = express.Router();
var Person = require('../models/personSchema');
var wishListItem = require('../models/wishListSchema');
var ContactUs = require('./emailAlert');

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

routerContactUs.post('/sendEmail/:username', function(req, res){
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
			var sendEmail = new ContactUs(req.body.senderEmail, req.body.subjectLine, req.body.message); 
            sendEmail.transporter;
            res.send(200);
		} else {
			console.log("could not verify token");
			res.send(403);
		}
	});
});

module.exports = routerContactUs