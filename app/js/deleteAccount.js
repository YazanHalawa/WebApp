var api = require('./api');
var auth = require('./auth');

var deleteAccount = React.createClass({
	
	// context so the component can access the router
  	contextTypes: {
      history: React.PropTypes.object.isRequired
  	},

	render: function(){
		return(
			<div>
				<font size="15px" color="red">Are you sure you want to leave Genie Lamp?!!</font>
				<button onClick={this.handleConfirm} className="btn btn-default active">Confirm</button>
				<button onClick={this.handleCancel} className="btn btn-default active">Cancel</button>
			</div>	
		);
	},

	handleConfirm: function() {
		// prevent default browser submit
    	event.preventDefault();

    	var username = auth.getUsername();
    	api.deleteItem('/profile/delete/', username, function(deletedUser){

    		if (!deletedUser){
    			console.log("User Deletion failed");
    		} else {
    			auth.logout();
    			this.context.history.pushState(null, '/');
    		}
    	});
	},

	handleCancel: function(){
		// prevent default browser submit
    	event.preventDefault();
    	this.context.history.pushState(null, '/mainAppWin');
	}
});

module.exports = deleteAccount