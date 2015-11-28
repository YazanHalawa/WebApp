var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	passportLocalDBemail = require('passport-local-mongoose')

var personSchema = new Schema({
	username : {type:String, unique:true}, 
	password: String,
	lastName : String,
	firstName : String,
	friendList : [{
		friendEmail : {type:String, unique:true}  	
	}] 
});	

personSchema.plugin (passportLocalDBemail);
module.exports = mongoose.model('Person', personSchema);

