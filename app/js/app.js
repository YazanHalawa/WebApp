var Link = ReactRouter.Link;
var auth = require ('./auth');

var App = React.createClass({

  // context so the component can access the router
  contextTypes: {
      router: React.PropTypes.func
  },

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
                <Link to="/mainAppWin">
                  <button
                    onClick={this.handleClick} 
                    id="LogInBtn" 
                    className="btn btn-primary btn-lg active" >
                    Log In
                  </button>
                </Link>
                <Link to="/SignUp">
                  <button id="SignUpBtn" className="btn btn-primary btn-lg active" >Sign Up</button>
                </Link>
            </div>
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

  handleClick: function(){
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
        if (!loggedIn)
            return this.setState({
                error: true
            });
        this.context.router.transitionTo('/mainAppWin');
    }.bind(this));

    //------ Empty the values ---------//
    this.setState({
      emailText:'',
      passwordText: ''
    });
  }
});





module.exports = App;
