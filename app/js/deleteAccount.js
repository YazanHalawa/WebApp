var api = require('./api');
var auth = require('./auth');
var History = ReactRouter.History;

var deleteAccount = React.createClass({
	
	mixins: [History],

	render: function(){
		return(
			<div>
			<div>
			<span>
			<label>
				<font size="25px" color="WHITE">Are you sure you want to leave Genie Lamp?!!</font>
			</label>
			</span>
			</div>
			<div>
				<button onClick={this.handleConfirm} className="btn btn-default active">Confirm</button>
				<button onClick={this.handleCancel} className="btn btn-default active">Cancel</button>
			</div>
			</div>	
		);
	},

	handleConfirm: function(event) {
		// prevent default browser submit
    	event.preventDefault();

    	var username = auth.getUsername();
    	api.deleteItem('/profile/delete/', username, null, function(status, deletedUser){

    		if (!status){
    			console.log("User Deletion failed");
    		} else {
    			console.log("account deleted");
    			auth.logout();
    			this.history.pushState(null, '/');
    		}
    	});
	},

	handleCancel: function(event){
		// prevent default browser submit
    	event.preventDefault();
    	this.history.pushState(null, '/mainAppWin');
	}
});

module.exports = deleteAccount