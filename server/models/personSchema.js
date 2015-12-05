var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	findOrCreate = require("mongoose-findorcreate"),
	bcrypt = require("bcrypt"),
	jwt = require("jsonwebtoken");
	
	
var salt = bcrypt.genSaltSync(),
	secert = "cs360";
	
	

var personSchema = new Schema({
	username : {type:String, unique: true}, 
	passwordHash: String,
	lastName : String,
	firstName : String,
	bdMonth: String,
	bdDay: String,
	bdYear: String,
	gender: String,
	profilePic: String,
	friendList : [{
		friendEmail : String  	
	}] 
});	


personSchema.methods.set_password = function(password){
	
	this.passwordHash = bcrypt.hashSync(password,salt);
};

personSchema.methods.checkPassword = function(password){
	
	return bcrypt.compareSync(password, this.passwordHash);
};



personSchema.statics.generateToken = function(username) {
  return jwt.sign({ username: username }, secert);
};


personSchema.statics.verifyToken = function(token,cb) {
  if (!token) {
    cb(null);
    return;
  }


jwt.verify(token, secert, function(err, decoded) {
    if (!decoded) {
      cb(null);
      return;
    }
	
	
   Person.findOne({username: decoded.username},function(err,user) {
      if (err) {
	cb(null);
      } else {
	cb(user);
      }
    });
  });
};

// add findOrCreate
personSchema.plugin(findOrCreate);

var Person = mongoose.model('Person', personSchema);

module.exports = Person;

