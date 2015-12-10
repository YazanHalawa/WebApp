var Link = ReactRouter.Link;
var api = require('./api');
var auth = require('./auth');
var History = ReactRouter.History;

var Profile = React.createClass({

	mixins: [History],

	getInitialState: function(){
		    return{
		    	items : '',
		      	error: false
		    }
	},
  	
  	listSet: function(status, data){
  		if (status){
  			// set the state for the list of items
  			console.log("data %s" , data);
  			this.setState({
  				items: data
  			});
  			console.log(this.state.items);
  			api.setwish1ID(this.state.items.wish1ID);
  			api.setwish2ID(this.state.items.wish2ID);
  			api.setwish3ID(this.state.items.wish3ID);
  		} else {
	        this.context.history.pushState(null, '/mainAppWin');
  		}
  	},

  	componentWillMount: function(){
  		var username = auth.getUsername();
  		api.getItems(username,"/profile/get/", this.listSet);
  	},



	render: function() {
    return (
	<div className="container">
		<div className="row">
			<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xs-offset-0 col-sm-offset-0 col-md-offset-3 col-lg-offset-3 toppad" >
				<div className="panel panel-info">
				<div className="panel-heading">
					<h3 className="panel-title" id="fullNameField">
					{this.state.items.firstName + " " + this.state.items.lastName} 
					</h3>
				</div>
				<div className="panel-body">
					<div className="row">
						<div className="col-md-3 col-lg-3 " align="center"> 
						<img alt="User Pic" value={this.state.items.profilePic} id="picLinkField" src={this.state.items.profilePic} className="img-circle img-responsive"/> 
						</div>
						<div className=" col-md-9 col-lg-9 "> 

							<table className="table table-user-information" id="profileInfo">
							<tbody>
							<tr>
							<td>Email:</td>
							<td id="emailField"> 
							{this.state.items.username}
							</td>
							</tr>
							<tr>
							<td>Date of Birth:</td>
							<td id="dobField"> 
							{this.state.items.bdMonth + "/" + this.state.items.bdDay + "/" + this.state.items.bdYear}
							
							</td>
							</tr>
							<tr>
							<tr>
							<td>Gender:</td>
							<td id="genderField"> 
							{this.state.items.gender}
							</td>
							</tr>
							<tr>
							<td>Wish 1:</td>
							<td id="wish1Field"> 
							{this.state.items.wish1}
							</td>
							</tr>
							<tr>
							<td>Wish 2:</td>
							<td id="wish2Field"> 
							{this.state.items.wish2}
							</td>
							</tr>
							<tr>
							<td>Wish 3:</td>
							<td id="wish3Field">
							{this.state.items.wish3}
							</td>
							</tr>
							</tr>
							</tbody>
							</table>
							<a 
							onClick={this.handleClick}
							className="btn btn-primary" 
							id="button1">Edit Wish List Items</a>
						</div>
					</div>
				</div>
				</div>
			</div>
		</div>
	</div>
    );
  },

  handleClick: function(event){
  		event.preventDefault();
  	    this.context.history.pushState(null, '/updateWishList');  

  }



});


module.exports = Profile