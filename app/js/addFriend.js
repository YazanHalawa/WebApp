var auth = require('./auth');
var api = require('./api');

var addFriend = React.createClass({
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
      <div className="form-group">
            <label id="friendUsrName" htmlFor="inputEmail3" className="col-sm-2 control-label">Friend Username</label>
            <div className="col-sm-10">
              <input 
                value={this.state.friendUsername}
                onChange={this.handleInputChange}
                type="email" 
                className="form-control" 
                id="inputEmail3" 
                placeholder="Email"/>
                <button 
                id="AddBtn" 
                onClick={this.handleClick}
                className="btn btn-primary btn-lg active" >Add Friend</button>
            </div>
            <div id="message">
            </div>
      </div>
    );
  },

  handleInputChange: function(event){
    if (event.target.id === "inputEmail3"){
      this.setState({friendUsername: event.target.value});
    }
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
    console.log("username is %s", username);
    console.log("friend username is %s", friendUsername);
    // login via API
    api.addItem(username, friendUsername, function(addedFriend, friendUserName) {
        // login callback
        if (!addedFriend){
          $("#message").html("<font size=25px color=WHITE>Friend Not Found or already exists in your friend list!</font>");
            return this.setState({
                error: true
            });
          }
        else 
          $("#message").html("<font size=25px color=WHITE>Friend Added!</font>");
    }.bind(this));
  }
});

module.exports = addFriend