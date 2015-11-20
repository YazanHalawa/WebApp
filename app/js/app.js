var Router = ReactRouter.Router;
var Link = ReactRouter.Link;
var Route = ReactRouter.Route;
var Profile = require('./Profile')
var Friends = require('./Friends')
var SignUp = require('./SignUp')

var App = React.createClass({

  render: function() {
    return (
      <div>
		<nav className="navbar navbar-default" role ="navigation">
 		 <div className="container">
    		<div className="navbar-header">
      			<button type="button" className="navbar-toggle" data-toggle="collapse">
        			<span className="sr-only">Toggle navigation</span>
        			<span className="icon-bar"></span>
        			<span className="icon-bar"></span>
        			<span className="icon-bar"></span>
      			</button>
      			<a className="navbar-brand" href="/">Genie Lamp</a>
    		</div>

    		<div className="collapse navbar-collapse">
      			<ul className="nav navbar-nav">
        			<li><Link to="profile">Profile</Link></li>
        			<li><Link to="WishListHist">WishList</Link></li>
        			<li role="presentation" className="dropdown">
          				<a className="dropdown-toggle" href ="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Friends<span className="caret"></span></a>
          				<ul className="dropdown-menu">
            				<li><Link to="Friends">View Friends</Link></li>
            				<li><a href="#">Add Friend</a></li>
            				<li><a href="#">Remove Friend</a></li>
          				</ul>
        			</li>
      			</ul>
      			<ul className="nav navbar-nav navbar-right">
        			<li><a href="/">Hello Yazan</a></li>
      			</ul>
    		</div>
  		  </div>
  		</nav>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
});



// Run the routes
var routes = (
      <Router>
        <Route name="SignUp" path="/" component={SignUp}/>
        <Route name="app" path="/main" component={App}>
          <Route name="Friends" path="/friends" component={Friends}/>
          <Route name="profile" path="/profile" component={Profile}/>
        </Route>
      </Router>
);


ReactDOM.render(routes, document.body);
