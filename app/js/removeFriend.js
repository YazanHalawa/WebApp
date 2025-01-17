var auth = require('./auth');
var api = require('./api');
var History = ReactRouter.History;

var removeFriend = React.createClass({
  mixins: [History],

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

  handleInputChange: function(event){
    this.setState({friendUsername: event.target.value});
  },

  handleClick: function(event){
    // prevent default browser submit
    event.preventDefault();
    // get data from form
    var username = auth.getUsername();
    var friendUsername = this.state.friendUsername;

    if (!username || !friendUsername) {
        return;
    }
    console.log("username is %s", username);
    console.log("friend is %s", friendUsername);
    // login via API
    api.deleteItem("/friend/remove/", username, friendUsername, function(removeFriend) {
        // login callback
        if (!removeFriend){
          $("#message").html("<font size=25px color=WHITE>Friend Does not exist or is not your friend</font>");
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