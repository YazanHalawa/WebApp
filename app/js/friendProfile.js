var Link = ReactRouter.Link;
var api = require('./api');
var auth = require('./auth');

var friendProfile = React.createClass({

	getInitialState: function(){
		    return{
		    	items : '',
		    	wishes: [],
		      	error: false
		    }
	},
  	
  	listSet: function(status, data){
  		if (status){
  			// set the state for the list of items
  			console.log("data %s" , data);
  			this.setState({
  				items: data[0],
  				wishes: data[1].wishes
  			});
  			console.log(this.state.items);
  		} else {
	        this.context.history.pushState(null, '/mainAppWin');
  		}
  	},

  	reload: function(){
  		var username = auth.getUsername();
  		var friendUsername = api.getFriendUsername();
  		api.getFriendItems(username, friendUsername, "/friend/viewFriendsProfile/", this.listSet);
  	},

  	componentWillMount: function(){
  		this.reload();
  	},



	render: function() {

	var list = this.state.wishes.map(function(item) {
	        return (
	            <Wish key={item._id} item={item} reload={this.reload}/>
	            );
	    }.bind(this));

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
							<td/>
							</tr>
							<tr>
							<td>Date of Birth:</td>
							<td id="dobField"> 
							{this.state.items.bdMonth + "/" + this.state.items.bdDay + "/" + this.state.items.bdYear}
							
							</td>
							<td/>
							</tr>
							<tr>
							<td>Gender:</td>
							<td id="genderField"> 
							{this.state.items.gender}
							</td>
							<td/>
							</tr>
							{list}
							</tbody>
							</table>
						</div>
						<div id='message'/>

					</div>
				</div>
				</div>
			</div>
		</div>
	</div>
    );
  },
});

var Wish = React.createClass({
	// context so the component can access the router
  	contextTypes: {
      history: React.PropTypes.object.isRequired
  	},

	render: function(){
		return(
			<tr>
				<td>Wish</td>
				<td id="wishField"> 
				{this.props.item.description}
				</td>
				<td>
					<button onClick={this.handleClick} className="btn btn-default">Reserve Wish</button>
				</td>
			</tr>
			);
	},

	handleClick: function(){
		// prevent default browser submit
    	event.preventDefault();

    	var wish = this.props.item;
    	if (!wish){
    		return;
    	}
    	api.reserveItem(this.props.item._id, auth.getUsername(), function(reservedWish){
    		if (!reservedWish){
    			console.log("failed to reserve Wish");
    		} else {
    			$('#message').html("<font size=15px color=red>Wish Item Reserved</font>");
    			this.context.history.pushState(null, '/mainAppWin');
    			$('#reserveWishBtn').prop('disabled', true);
 
    		}
    	});
	}
});


module.exports = friendProfile