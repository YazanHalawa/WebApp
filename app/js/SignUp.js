var Box = React.createClass({

	getInitialState: function() {
    	return {value: 'Hello!'};
  	},

  	handleChange: function(event) {
    	this.setState({value: event.target.value});
  	},
	render: function(){
		return (
			<li>
				<input type="text" placeholder={this.props.name} />
			</li>
			);
	}
})

var SignUp = React.createClass({
	render: function(){
		return(
			<form class="form-horizontal">
			<link rel="stylesheet" type="text/css" href="../bootstrap/css/custom.css"/>
			  <div class="form-group">
			    <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
			    <div class="col-sm-10">
			      <input type="email" class="form-control" id="inputEmail3" placeholder="Email"/>
			    </div>
			  </div>
			  <div class="form-group">
			    <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
			    <div class="col-sm-10">
			      <input type="password" class="form-control" id="inputPassword3" placeholder="Password"/>
			    </div>
			  </div>
			  <div class="form-group">
			    <div class="col-sm-offset-2 col-sm-10">
			      <button type="submit" class="btn btn-default">Sign in</button>
			    </div>
			  </div>
			</form>
			);
	}
});

module.exports = SignUp