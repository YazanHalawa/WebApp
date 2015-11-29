var Friends = React.createClass({
  // context so the component can access the router
  contextTypes: {
      router: React.PropTypes.func
  },

  render: function() {
    return (
      <div>
        <h1>Friends</h1>
        <ul>List Of Friends
        	<li>Friend 1</li>
        	<li>Friend 2</li>
        	<li>Friend 3</li>
        </ul>
      </div>
    );
  }
});

module.exports = Friends