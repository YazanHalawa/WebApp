var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	passportLocalDBemail = require('passport-local-mongoose')

var personSchema = new Schema({
	lastName : String,
	firstName : String,
	friendList : [{
		friendEmail : {type:String, unique:true}  	
	}] 
});	

personSchema.plugin (passportLocalDBemail);
module.exports = mongoose.model('Person', personSchema);

