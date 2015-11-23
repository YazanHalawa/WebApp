var Router = ReactRouter.Router;
var Link = ReactRouter.Link;
var Route = ReactRouter.Route;
var Profile = require('./Profile')
var Friends = require('./Friends')
var mainAppWin = require('./mainAppWin')

var App = React.createClass({

  render: function(){
    return(
      <div class="container-fluid" id="Home">
        <div id="key_phrase">Make your wishes come true</div>
        <div id="firstSuppPhrase">Genie Lamp allows you to make wishes</div>
        <div id="firstSuppPhrase">And have you friends GRANT them</div>
        <div id="secondSuppPhrase">Join NOW!</div>
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
              <button id="LogInBtn" class="btn btn-primary btn-lg active" role="button">
                <Link to="mainAppWin">Log In</Link>
              </button>
              <button id="SignUpBtn" class="btn btn-primary btn-lg active" role="button">
                <Link to="SignUp">Sign Up</Link>
              </button>
            </div>
          </div>
        </form>
      </div>
      );
  }
});



// Run the routes
var routes = (
      <Router>
        <Route name="app" path="/" component={App}>
          <Route name="mainAppWin" path="/mainAppWin" component={mainAppWin}>
            <Route name="Friends" path="/friends" component={Friends}/>
            <Route name="profile" path="/profile" component={Profile}/>
          </Route>
        </Route>
      </Router>
);


ReactDOM.render(routes, document.body);
