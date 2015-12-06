var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var SignUp = require('./SignUp');
var App = require('./App');
var Profile = require('./Profile');
var addFriend = require('./addFriend');
var removeFriend = require('./removeFriend');
var mainAppWin = require('./mainAppWin');
var updateWishList = require('./updateWishList');
var IndexRoute = ReactRouter.IndexRoute;

var indexLogger = React.createClass({
	render: function(){
    	return(
			<div className="detail">
          		{this.props.children}
        	</div>
        );
	}
});

// Run the routes
var routes = (
    <Router>
      	<Route name="parent" path="/" component={indexLogger}>
      		<IndexRoute component={App}/>
      		<Route name="mainAppWin" path="/mainAppWin" component={mainAppWin}>
      			<Route name="addFriend" path="/addFriend" component={addFriend}/>
            <Route name="removeFriend" path="/removeFriend" component={removeFriend}/>
	          <Route name="profile" path="/profile" component={Profile}/>
            <Route name="updateWishList" path="/updateWishList" component={updateWishList}/>
	        </Route>
      		<Route name="SignUp" path="/SignUp" component={SignUp}>
  			    <Route name="mainAppWin" path="/mainAppWin" component={mainAppWin}>
            		<Route name="addFriend" path="/addFriend" component={addFriend}/>
                <Route name="removeFriend" path="/removeFriend" component={removeFriend}/>
            		<Route name="profile" path="/profile" component={Profile}/>
                <Route name="updateWishList" path="/updateWishList" component={updateWishList}/>
            </Route>
	        </Route>
        </Route>
    </Router>
);



ReactDOM.render(routes, document.body);

module.exports = indexLogger;