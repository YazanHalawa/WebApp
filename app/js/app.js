var Link = ReactRouter.Link;
var Router = ReactRouter;
var History = ReactRouter.History;
var auth = require ('./auth');

var App = React.createClass({

  mixins: [History],
  
  getInitialState: function(){
    return{
      emailText: '',
      passwordText: '',
      error: false
    }
  },

  render: function(){
    return(
      <div className="container-fluid" id="Home">
        <div id="mainText">
          <div id="key_phrase">Make your wishes come true</div>
          <div id="firstSuppPhrase">Genie Lamp allows you to make wishes</div>
          <div id="firstSuppPhrase">And have you friends GRANT them</div>
          <div id="secondSuppPhrase">Join NOW!</div>
        </div>
        <form id="mainForm" className="form-horizontal">
        <link rel="stylesheet" type="text/css" href="../bootstrap/css/custom.css"/>
          <div className="form-group">
            <label id="emailLabel" htmlFor="inputEmail3" className="col-sm-2 control-label">Email</label>
            <div className="col-sm-10">
              <input 
                value={this.state.emailText}
                onChange={this.handleInputChange}
                type="email" 
                className="form-control" 
                id="inputEmail3" 
                placeholder="Email"/>
            </div>
          </div>
          <div className="form-group">
            <label id="passwordLabel" htmlFor="inputPassword3" className="col-sm-2 control-label">Password</label>
            <div className="col-sm-10">
              <input 
                value={this.state.passwordText}
                onChange={this.handleInputChange}
                type="password" 
                className="form-control" 
                id="inputPassword3" 
                placeholder="Password"/>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-10">
                  <button
                    onClick={this.handleClick} 
                    id="LogInBtn" 
                    className="btn btn-primary btn-lg active" >
                    Log In
                  </button>
                <Link to="/SignUp">
                  <button id="SignUpBtn" className="btn btn-primary btn-lg active" >Sign Up</button>
                </Link>
            </div>
          </div>
          <div id="logInError">
          </div>
        </form>
      </div>
      );
  },

  // event handlers
  handleInputChange: function(event) {
    if (event.target.id === "inputPassword3"){
      this.setState({passwordText:event.target.value});
    }
    else if (event.target.id === "inputEmail3"){
      this.setState({emailText:event.target.value});
    }
  },

  handleClick: function(event){
    //----- Send value of text input to Mongo------//

    // prevent default browser submit
    event.preventDefault();
    // get data from form
    var username = this.state.emailText;
    var password = this.state.passwordText;
    if (!username || !password) {
        return;
    }
    
    // login via API
    auth.login(username, password, function(loggedIn) {
        // login callback
        if (!loggedIn){
          console.log("failed");
            $("#logInError").html("<font size=15px color=red>User Does not exist!</font>");
            return this.setState({
                error: true
            });
          }
        else {
          console.log("succeeded");
          this.history.pushState(null,'/mainAppWin');
          //this.context.history.pushState(null, '/mainAppWin');
        }
    }.bind(this));
  }
});





module.exports = App;
