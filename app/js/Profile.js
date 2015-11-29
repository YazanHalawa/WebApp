var Profile = React.createClass({

	// context so the component can access the router
  	contextTypes: {
      router: React.PropTypes.func
  	},

	render: function() {
	    return (
	      <div>
	        <h1>Home</h1>
	        <p>Put your home page here</p>
	      </div>
	    );
	  }
});

module.exports = Profile