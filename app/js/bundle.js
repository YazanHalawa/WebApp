/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */var Router = ReactRouter.Router;
	var Link = ReactRouter.Link;
	var Route = ReactRouter.Route;
	var Profile = __webpack_require__(2)
	var Friends = __webpack_require__(3)
	var SignUp = __webpack_require__(4)
	
	var App = React.createClass({displayName: "App",
	  render: function() {
	    return (
	      React.createElement("div", null, 
			React.createElement("nav", {className: "navbar navbar-default", role: "navigation"}, 
	 		 React.createElement("div", {className: "container"}, 
	    		React.createElement("div", {className: "navbar-header"}, 
	      			React.createElement("button", {type: "button", className: "navbar-toggle", "data-toggle": "collapse"}, 
	        			React.createElement("span", {className: "sr-only"}, "Toggle navigation"), 
	        			React.createElement("span", {className: "icon-bar"}), 
	        			React.createElement("span", {className: "icon-bar"}), 
	        			React.createElement("span", {className: "icon-bar"})
	      			), 
	      			React.createElement("a", {className: "navbar-brand", href: "/"}, "Genie Lamp")
	    		), 
	
	    		React.createElement("div", {className: "collapse navbar-collapse", id: "bs-example-navbar-collapse-1"}, 
	      			React.createElement("ul", {className: "nav navbar-nav"}, 
	      				React.createElement("li", null, React.createElement(Link, {to: "SignUp"}, "SignUp")), 
	        			React.createElement("li", null, React.createElement(Link, {to: "profile"}, "Profile")), 
	        			React.createElement("li", null, React.createElement(Link, {to: "WishListHist"}, "WishList")), 
	        			React.createElement("div", {class: "dropdown"}, 
	  						React.createElement("button", {class: "btn btn-default dropdown-toggle", type: "button", id: "dropdownMenu1", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "true"}, 
	    					"Friends", 
	    					React.createElement("span", {class: "caret"})
	  						), 
	  						React.createElement("ul", {class: "dropdown-menu", "aria-labelledby": "dropdownMenu1"}, 
	    						React.createElement("li", null, React.createElement("a", {href: "/AddFriend"}, "Add Friend")), 
	    						React.createElement("li", null, React.createElement("a", {href: "/RemoveFriend"}, "Remove Friend")), 
	    						React.createElement("li", null, React.createElement("a", {href: "/ViewFriends"}, "View Friends else here"))
	  						)
						)
	      			), 
	      			React.createElement("ul", {className: "nav navbar-nav navbar-right"}, 
	        			React.createElement("li", null, React.createElement("a", {href: "/"}, "Hello Yazan"))
	      			)
	    		)
	  		  )
	  		), 
	        React.createElement("div", {className: "container"}, 
	          this.props.children
	        )
	      )
	    );
	  }
	});
	
	
	// Run the routes
	var routes = (
	      React.createElement(Router, null, 
	        React.createElement(Route, {name: "app", path: "/", component: App}, 
	          React.createElement(Route, {name: "SignUp", path: "/signUp", component: SignUp}), 
	          React.createElement(Route, {name: "Friends", path: "/friends", component: Friends}), 
	          React.createElement(Route, {path: "profile", path: "/profile", component: Profile})
	        )
	      )
	);
	
	ReactDOM.render(routes, document.body);


/***/ },
/* 2 */
/***/ function(module, exports) {

	/** @jsx React.DOM */var Profile = React.createClass({displayName: "Profile",
	  render: function() {
	    return (
	      React.createElement("div", null, 
	        React.createElement("h1", null, "Home"), 
	        React.createElement("p", null, "Put your home page here")
	      )
	    );
	  }
	});
	
	module.exports = Profile

/***/ },
/* 3 */
/***/ function(module, exports) {

	/** @jsx React.DOM */var Friends = React.createClass({displayName: "Friends",
	  render: function() {
	    return (
	      React.createElement("div", null, 
	        React.createElement("h1", null, "Friends"), 
	        React.createElement("ul", null, "List Of Friends", 
	        	React.createElement("li", null, "Friend 1"), 
	        	React.createElement("li", null, "Friend 2"), 
	        	React.createElement("li", null, "Friend 3")
	        )
	      )
	    );
	  }
	});
	
	module.exports = Friends

/***/ },
/* 4 */
/***/ function(module, exports) {

	/** @jsx React.DOM */var Box = React.createClass({displayName: "Box",
		render: function(){
			return (
				React.createElement("form", null, 
					React.createElement("input", {type: "text", placeholder: this.props.name})
				)
				);
		}
	})
	
	var SignUp = React.createClass({displayName: "SignUp",
		render: function(){
			return(
				React.createElement("div", null, 
					React.createElement(Box, {name: "First Name"}), 
					React.createElement(Box, {name: "Last Name"}), 
					React.createElement(Box, {name: "Email"}), 
					React.createElement(Box, {name: "Birth"})
				)
				);
		}
	});
	
	module.exports = SignUp

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map