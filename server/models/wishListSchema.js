var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

	


var wishListSchema = new Schema({
	ownerUserName: String,
	friendUserName : String,
	description: String
});	



var wishListItem = mongoose.model('wishListItem', wishListSchema);

module.exports = wishListItem;

