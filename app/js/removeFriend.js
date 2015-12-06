var auth = require('./auth');
var api = require('./api');

var removeFriend = React.createClass({
  // context so the component can access the router
  contextTypes: {
      router: React.PropTypes.func
  },

  getInitialState: function(){
    return {
      friendUsername: '',
      error: false
    }
  },

  render: function() {
    return (
      <div className="input-group">
        <input 
        value={this.state.friendUsername}
        onChange={this.handleInputChange}
        type="text" 
        className="form-control" />
        <span className="input-groupt-btn">
          <button 
          onClick={this.handleClick}
          id="removeFriendBtn" 
          className="btn btn-default" 
          type="button">
          Remove Friend
          </button>
        </span>
        <div id="message">
        </div>
      </div>
    );
  },

  handleInputChange: function(){
    this.setState({friendUsername: event.target.value});
  },

  handleClick: function(){
    // prevent default browser submit
    event.preventDefault();
    // get data from form
    var username = auth.getUsername();
    var friendUsername = this.state.friendUsername;

    if (!username || !friendUsername) {
        return;
    }
    
    // login via API
    api.deleteItem(username, friendUsername, function(removeFriend) {
        // login callback
        if (!removeFriend){
          console.log("failed on remove friend");
            return this.setState({
                error: true
            });
          }
        else 
          $("#message").html("<font size=25px color=WHITE>Friend Removed</font>");
    }.bind(this));
  }
});

module.exports = removeFriend