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

	handleConfirm: function() {
		// prevent default browser submit
    	event.preventDefault();

    	var username = auth.getUsername();
    	api.deleteItem('/profile/delete/', username, null, function(status, deletedUser){

    		if (!status){
    			console.log("User Deletion failed");
    		} else {
    			auth.logout();
    			this.history.pushState(null, '/');
    		}
    	});
	},

	handleCancel: function(){
		// prevent default browser submit
    	event.preventDefault();
    	this.history.pushState(null, '/mainAppWin');
	}
});

module.exports = deleteAccount