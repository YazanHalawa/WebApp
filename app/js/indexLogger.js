var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var SignUp = require('./SignUp');
var App = require('./App');
var Profile = require('./Profile');
var addFriend = require('./addFriend');
var removeFriend = require('./removeFriend');
var mainAppWin = require('./mainAppWin');
var updateWishList = require('./updateWishList');
var viewFriends = require('./viewFriends');
var friendProfile = require('./friendProfile');
var deleteAccount = require('./deleteAccount');
var navBarSettings = require('./navBarSettings');
var contactUs = require('./contactUs');
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
      		<Route name="SignUp" path="/SignUp" component={SignUp}/>
  			  <Route name="mainAppWin" path="/mainAppWin" component={mainAppWin}>
      		  <Route name="addFriend" path="/addFriend" component={addFriend}/>
            <Route name="removeFriend" path="/removeFriend" component={removeFriend}/>
            <Route name="viewFriends" path="/viewFriends" component={viewFriends}/>
            <Route name="friendProfile" path="/friendProfile" component={friendProfile}/>
      		  <Route name="profile" path="/profile" component={Profile}/>
            <Route name="updateWishList" path="/updateWishList" component={updateWishList}/>
            <Route name="deleteAccount" path="/deleteAccount" component={deleteAccount}/>
            <Route name="navBarSettings" path="/navBarSettings" component={navBarSettings}/>
            <Route name="contactUs" path="/contactUs" component={contactUs}/>
          </Route>
        </Route>
    </Router>
);



ReactDOM.render(routes, document.body);

module.exports = indexLogger;