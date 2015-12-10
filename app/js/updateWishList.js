var api = require('./api');
var auth = require('./auth');

var updateWishList = React.createClass({

	// context so the component can access the router
  	contextTypes: {
      history: React.PropTypes.object.isRequired
  	},

	getInitialState: function(){
		return{
				wish1: '',
				wish2: '',
				wish3: '',
				error: false
			}
	},

	render: function(){
		return (
			<div>
			<div className="uwl">
				<div className="_5dbb" id="u_0_j">
					<div className="uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput">
						<div className="placeholder" aria-hidden="true">First Wish</div>
						<input
						required 
						value={this.state.wish1}
						onChange={this.handleInputChange}
						type="text" 
						className="inputtext _58mg _5dba _2ph-" 
						data-type="text" 
						name="reg_first_wish__" 
						aria-required="1" 
						placeholder="" 
						id="wish1Field" aria-label="First Wish"/>
					</div>
					<i className="_5dbc img sp_7XMX65Pq0E7 sx_ee768b"></i><i className="_5dbd img sp_7XMX65Pq0E7 sx_067138"></i>
				</div>
			</div>
			<div className="mbm">
				<div className="_5dbb" id="u_0_j">
					<div className="uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput">
						<div className="placeholder" aria-hidden="true">Second Wish</div>
						<input
						required 
						value={this.state.wish2}
						onChange={this.handleInputChange}
						type="text" 
						className="inputtext _58mg _5dba _2ph-" 
						data-type="text" 
						name="reg_second_wish__" 
						aria-required="1" 
						placeholder="" 
						id="wish2Field" 
						aria-label="second wish"/>
					</div>
					<i className="_5dbc img sp_7XMX65Pq0E7 sx_ee768b"></i><i className="_5dbd img sp_7XMX65Pq0E7 sx_067138"></i>
				</div>
			</div>
			<div className="mbm">
				<div className="_5dbb" id="u_0_j">
					<div className="uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput">
						<div className="placeholder" aria-hidden="true">Third Wish</div>
						<input 
						required
						value={this.state.wish3}
						onChange={this.handleInputChange}
						type="text" 
						className="inputtext _58mg _5dba _2ph-" 
						data-type="text" 
						name="reg_third_wish__" 
						aria-required="1" 
						placeholder="" 
						id="wish3Field" 
						aria-label="third wish"/>
					</div>
					<i className="_5dbc img sp_7XMX65Pq0E7 sx_ee768b"></i><i className="_5dbd img sp_7XMX65Pq0E7 sx_067138"></i>
				</div>
			</div>
			<button 
                  onClick={this.handleClick}
                  id="UpdateWishListBtn" 
                  className="btn btn-primary btn-lg active" >Update Wish List</button>
        	</div>
		);
	},

	// event handlers
  	handleInputChange: function(event) {
    	if (event.target.id === "wish1Field"){
      		this.setState({wish1:event.target.value});
    	}
    	else if (event.target.id === "wish2Field"){
      		this.setState({wish2:event.target.value});
      	}
      	else if (event.target.id === "wish3Field"){
      		this.setState({wish3:event.target.value});
      	}
    },

    handleClick: function(){
    	// prevent default browser submit
	    event.preventDefault();
	    // get data from form
	    var wish1 = this.state.wish1;
	    var wish2 = this.state.wish2;
	    var wish3 = this.state.wish3;
	    if (!wish1 || !wish2 || !wish3) {
	        return;
	    }
	    console.log("username is %s", auth.getUsername());
	    var username = auth.getUsername();
		// update the wishes
	    api.updateItem(username, api.getwish1ID(), this.state.wish1, function(updatedWish) {
	        // login callback
	        if (!updatedWish){
	          console.log("failed on wish 1");
	            return this.setState({
	                error: true
	            });
	          }
	        else 
	        	console.log("finished first wish");
	    }.bind(this));

	    api.updateItem(username, api.getwish2ID(), this.state.wish2, function(updatedWish) {
	        // login callback
	        if (!updatedWish){
	          console.log("failed on wish 2");
	            return this.setState({
	                error: true
	            });
	          }
	        else 
	        	console.log("finished second wish");
	    }.bind(this));

	    api.updateItem(username, api.getwish3ID(), this.state.wish3, function(updatedWish) {
	        // login callback
	        if (!updatedWish){
	          console.log("failed on wish 3");
	            return this.setState({
	                error: true
	            });
	          }
	        else {
	        	console.log("finished third wish");
	        	this.context.history.pushState(null, '/profile');
	        }
	    }.bind(this));

    }


    
});

module.exports = updateWishList;

