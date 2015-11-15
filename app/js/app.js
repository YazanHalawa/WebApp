var Router = ReactRouter.Router;
var Link = ReactRouter.Link;
var Route = ReactRouter.Route;

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

    		<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      			<ul className="nav navbar-nav">
        			<li><Link to="profile">Profile</Link></li>
        			<li><Link to="WishListHist">WishList</Link></li>
        			<div class="dropdown">
  						<button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
    					Friends
    					<span class="caret"></span>
  						</button>
  						<ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
    						<li><a href="/AddFriend">Add Friend</a></li>
    						<li><a href="/RemoveFriend">Remove Friend</a></li>
    						<li><a href="/ViewFriends">View Friends else here</a></li>
  						</ul>
					</div>
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

var Profile = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Home</h1>
        <p>Put your home page here</p>
      </div>
    );
  }
});

var Friends = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Page</h1>
        <p>Demo another page here</p>
      </div>
    );
  }
});

// Run the routes
var routes = (
      <Router>
        <Route name="app" path="/" component={App}>
          <Route name="Friends" path="/friends" component={Friends}/>
          <Route path="profile" path="/profile" component={Profile}/>
        </Route>
      </Router>
);

ReactDOM.render(routes, document.body);
