
var navBarSettings = React.createClass({

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

	changeToBlack: function(){
		// prevent default browser submit
    	event.preventDefault();

    	api.changeColor()
	},

	changeToWhite: function(){
		// prevent default browser submit
    	event.preventDefault();
	},

	changeToRed: function(){
		// prevent default browser submit
    	event.preventDefault();
	},

	changeToBlue: function(){
		// prevent default browser submit
    	event.preventDefault();
	},

	changeToYellow: function(){
		// prevent default browser submit
    	event.preventDefault();
	},

	changeToOrange: function(){
		// prevent default browser submit
    	event.preventDefault();
	},

	changeToPurple: function(){
		// prevent default browser submit
    	event.preventDefault();
	}

});

module.exports = navBarSettings