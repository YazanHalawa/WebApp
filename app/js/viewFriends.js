var api = require('./api');
var auth = require('./auth');
var History = ReactRouter.History;

var viewFriends = React.createClass({

	mixins: [History],

	getInitialState: function(){
	    return{
	    	items : [],
	      	error: false
	    }
	},
  	
  	listSet: function(status, data){
  		console.log("getting to listSet");
  		if (status){
  			// set the state for the list of items
  			console.log("data %s" , data);
  			this.setState({
  				items: data
  			});
  			console.log("items are %s", this.state.items[0]);
  		} else {
	        this.context.history.pushState(null, '/mainAppWin');
  		}
  	},

  	reload: function(){
  		console.log("getting to reload");
  		var username = auth.getUsername();
  		console.log("username is %s", username)
  		api.getItems(username, "/friend/viewFriends/", this.listSet);
  	},

  	componentWillMount: function(){
  		this.reload();
  	},

	render: function(){
		if (this.state.items.length != 0){
			return(
				<ListItems items={this.state.items} reload={this.reload}/>
			);
		} else {
			return(
				<font> You have no friends. Invite some! </font>
			);
		}
	}
});



var ListItems = React.createClass({
	render: function(){
		// using the list of items, generate an Item element for each one

	    var list = this.props.items.map(function(item) {
	        return (
	            <Item key={item.username} item={item} reload={this.props.reload}/>
	            );
	    }.bind(this));

		return(
			<div>
			<div className="container">
			<div className="row">
			<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xs-offset-0 col-sm-offset-0 col-md-offset-3 col-lg-offset-3 toppad" >
		        <div className="panel panel-info">
		        	<div className="panel-heading">
			        	<h3 className="panel-title" id="fullNameField">
						Your Friends List
						</h3>
		        	</div>
		        		<div className="panel-body">
		        			<div className="row">
		        			<div className=" col-md-9 col-lg-9 ">
			        			<table className="table table-user-information" id="friendsList">
			        				<tbody>
			        					{list}
			        				</tbody>
			        			</table>
		        			</div>
		        			</div>
		        		</div>
		        	</div>
	        	</div>
	        </div>
	        </div>
	        </div>
        );
	}
});

var Item = React.createClass({
	// context so the component can access the router
  	contextTypes: {
      history: React.PropTypes.object.isRequired
  	},

	render: function(){
		console.log("username is %s", this.props.item.username);
		return(
				<tr onClick={this.handleClick}>
					<td width='120px'>
						<img height='90' alt="User Pic" id="picLinkField" src={this.props.item.profilePic} className="img-circle img-responsive"/> 
					</td>
					<td  id="friendName" width='120'>
						{this.props.item.firstName}  {this.props.item.lastName}
					</td>
				</tr>
        );
	},

	handleClick: function(event){
		api.setFriendUsername(this.props.item.username);
		this.context.history.pushState(null, '/friendProfile');
	}
});


module.exports = viewFriends
