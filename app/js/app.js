var Link = ReactRouter.Link;

var App = React.createClass({

  render: function(){
    return(
      <div className="container-fluid" id="Home">
        <div id="key_phrase">Make your wishes come true</div>
        <div id="firstSuppPhrase">Genie Lamp allows you to make wishes</div>
        <div id="firstSuppPhrase">And have you friends GRANT them</div>
        <div id="secondSuppPhrase">Join NOW!</div>
        <form className="form-horizontal">
        <link rel="stylesheet" type="text/css" href="../bootstrap/css/custom.css"/>
          <div className="form-group">
            <label id="emailLabel" htmlFor="inputEmail3" className="col-sm-2 control-label">Email</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="inputEmail3" placeholder="Email"/>
            </div>
          </div>
          <div className="form-group">
            <label id="passwordLabel" htmlFor="inputPassword3" className="col-sm-2 control-label">Password</label>
            <div className="col-sm-10">
              <input type="password" className="form-control" id="inputPassword3" placeholder="Password"/>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-10">
                <Link to="/mainAppWin">
                  <button id="LogInBtn" className="btn btn-primary btn-lg active" >Log In</button>
                </Link>
                <Link to="SignUp">
                  <button id="SignUpBtn" className="btn btn-primary btn-lg active" >Sign Up</button>
                </Link>
            </div>
          </div>
        </form>
      </div>
      );
  }
});

module.exports = App;
