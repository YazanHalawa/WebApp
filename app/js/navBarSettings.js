var auth = require('./auth');
var api = require('./api');
var History = ReactRouter.History;


var navBarSettings = React.createClass({

    mixins: [History],
    
	render: function(){
		return(
				<div>
					<div>
						<h>Choose Color!</h>
					</div>
					<div>
						<button onClick={this.changeToBlack} id="blackNavBar" className="btn btn-default active">black</button>
						<button onClick={this.changeToWhite} id="whiteNavBar" className="btn btn-default active">white</button>
						<button onClick={this.changeToRed} id="redNavBar" className="btn btn-default active">red</button>
						<button onClick={this.changeToBlue} id="blueNavBar" className="btn btn-default active">blue</button>
						<button onClick={this.changeToYellow} id="yellowNavBar" className="btn btn-default active">yellow</button>
						<button onClick={this.changeToOrange} id="orangeNavBar" className="btn btn-default active">orange</button>
						<button onClick={this.changeToPurple} id="purpleNavBar" className="btn btn-default active">purple</button>
					</div>
					<div>
						<h> For these changes to take affect you would need to log out and log back in </h>
					</div>
				</div>
			);
	},

	changeToBlack: function(event){
		// prevent default browser submit
    	event.preventDefault();
    	var username = auth.getUsername();
    	api.changeColor(username, "BLACK", function(changedColor){
    		if (!changedColor){
    			console.log("failed to change Color");
    		} else {
    			console.log("color changed");
    		}
    	});
	},

	changeToWhite: function(event){
		// prevent default browser submit
    	event.preventDefault();
    	var username = auth.getUsername();
    	api.changeColor(username, "WHITE", function(changedColor){
    		if (!changedColor){
    			console.log("failed to change Color");
    		} else {
    			console.log("color changed");
    		}
    	});
	},

	changeToRed: function(event){
		// prevent default browser submit
    	event.preventDefault();
    	var username = auth.getUsername();
    	api.changeColor(username, "RED", function(changedColor){
    		if (!changedColor){
    			console.log("failed to change Color");
    		} else {
    			console.log("color changed");
    		}
    	});
	},

	changeToBlue: function(event){
		// prevent default browser submit
    	event.preventDefault();
    	var username = auth.getUsername();
    	api.changeColor(username, "BLUE", function(changedColor){
    		if (!changedColor){
    			console.log("failed to change Color");
    		} else {
    			console.log("color changed");
    		}
    	});
	},

	changeToYellow: function(event){
		// prevent default browser submit
    	event.preventDefault();
    	var username = auth.getUsername();
    	api.changeColor(username, "YELLOW", function(changedColor){
    		if (!changedColor){
    			console.log("failed to change Color");
    		} else {
    			console.log("color changed");
    		}
    	});
	},

	changeToOrange: function(event){
		// prevent default browser submit
    	event.preventDefault();
    	var username = auth.getUsername();
    	api.changeColor(username, "ORANGE", function(changedColor){
    		if (!changedColor){
    			console.log("failed to change Color");
    		} else {
    			console.log("color changed");
    		}
    	});
	},

	changeToPurple: function(event){
		// prevent default browser submit
    	event.preventDefault();
    	var username = auth.getUsername();
    	api.changeColor(username, "PURPLE", function(changedColor){
    		if (!changedColor){
    			console.log("failed to change Color");
    		} else {
    			console.log("color changed");
    		}
    	});
	}

});

module.exports = navBarSettings