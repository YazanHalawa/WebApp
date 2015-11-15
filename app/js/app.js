// var menuBar = require('./navBar');

// var MainPage = React.createClass({
//   render: function() {
//     return (
//     	<div>
//     	<menuBar/>
//     	Hello {this.props.name}
//     	</div>
//     	);
//   }
// });



// ReactDOM.render(<MainPage name="Yazan" />, document.querySelector('.app-container'));



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
        		<li className="dropdown">
          			<a href="/" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Friends<span class="caret"></span></a>
         			<ul className="dropdown-menu">
            	<li><a href="/">View Friends</a></li>
            <li><a href="/">Add Friend</a></li>
            <li><a href="/">Remove Friend</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="/">Separated link</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="/">One more separated link</a></li>
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

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Home</h1>
        <p>Put your home page here</p>
      </div>
    );
  }
});

var Page = React.createClass({
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
          <Route name="page" path="/page" component={Page} />
          <Route path="*" component={Home}/>
        </Route>
      </Router>
);

ReactDOM.render(routes, document.body);
