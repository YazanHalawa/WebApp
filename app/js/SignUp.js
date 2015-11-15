var Box = React.createClass({

	getInitialState: function() {
    	return {value: 'Hello!'};
  	},

  	handleChange: function(event) {
    	this.setState({value: event.target.value});
  	},
	render: function(){
		return (
			<form>
				<input type="text" placeholder={this.props.name} />
			</form>
			);
	}
})

var SignUp = React.createClass({
	render: function(){
		return(
			<div>
				<Box name="First Name"/>
				<Box name="Last Name"/>
				<Box name="Email"/>
				<Box name="Birth"/>
			</div>
			);
	}
});

module.exports = SignUp