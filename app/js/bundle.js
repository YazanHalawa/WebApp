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
	var Route = ReactRouter.Route;
	var App = __webpack_require__(2);
	var Profile = __webpack_require__(3);
	var Friends = __webpack_require__(4);
	var mainAppWin = __webpack_require__(5);
	var IndexRoute = ReactRouter.IndexRoute;
	
	var indexLogger = React.createClass({displayName: "indexLogger",
		render: function(){
	    	return(
				React.createElement("div", {className: "detail"}, 
	          		this.props.children
	        	)
	        );
		}
	});
	
	// Run the routes
	var routes = (
	    React.createElement(Router, null, 
	      	React.createElement(Route, {name: "parent", path: "/", component: indexLogger}, 
	      		React.createElement(IndexRoute, {component: App}), 
		        React.createElement(Route, {name: "mainAppWin", path: "/mainAppWin", component: mainAppWin}, 
		            React.createElement(Route, {name: "Friends", path: "/friends", component: Friends}), 
		            React.createElement(Route, {name: "profile", path: "/profile", component: Profile})
		        )
	        )
	    )
	);
	
	
	
	ReactDOM.render(routes, document.body);
	
	module.exports = indexLogger;

/***/ },
/* 2 */
/***/ function(module, exports) {

	/** @jsx React.DOM */var Link = ReactRouter.Link;
	
	var App = React.createClass({displayName: "App",
	
	  render: function(){
	    return(
	      React.createElement("div", {className: "container-fluid", id: "Home"}, 
	        React.createElement("div", {id: "key_phrase"}, "Make your wishes come true"), 
	        React.createElement("div", {id: "firstSuppPhrase"}, "Genie Lamp allows you to make wishes"), 
	        React.createElement("div", {id: "firstSuppPhrase"}, "And have you friends GRANT them"), 
	        React.createElement("div", {id: "secondSuppPhrase"}, "Join NOW!"), 
	        React.createElement("form", {className: "form-horizontal"}, 
	        React.createElement("link", {rel: "stylesheet", type: "text/css", href: "../bootstrap/css/custom.css"}), 
	          React.createElement("div", {className: "form-group"}, 
	            React.createElement("label", {id: "emailLabel", htmlFor: "inputEmail3", className: "col-sm-2 control-label"}, "Email"), 
	            React.createElement("div", {className: "col-sm-10"}, 
	              React.createElement("input", {type: "email", className: "form-control", id: "inputEmail3", placeholder: "Email"})
	            )
	          ), 
	          React.createElement("div", {className: "form-group"}, 
	            React.createElement("label", {id: "passwordLabel", htmlFor: "inputPassword3", className: "col-sm-2 control-label"}, "Password"), 
	            React.createElement("div", {className: "col-sm-10"}, 
	              React.createElement("input", {type: "password", className: "form-control", id: "inputPassword3", placeholder: "Password"})
	            )
	          ), 
	          React.createElement("div", {className: "form-group"}, 
	            React.createElement("div", {className: "col-sm-10"}, 
	                React.createElement(Link, {to: "/mainAppWin"}, 
	                  React.createElement("button", {id: "LogInBtn", className: "btn btn-primary btn-lg active"}, "Log In")
	                ), 
	                React.createElement(Link, {to: "SignUp"}, 
	                  React.createElement("button", {id: "SignUpBtn", className: "btn btn-primary btn-lg active"}, "Sign Up")
	                )
	            )
	          )
	        )
	      )
	      );
	  }
	});
	
	module.exports = App;


/***/ },
/* 3 */
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
/* 4 */
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
/* 5 */
/***/ function(module, exports) {

	/** @jsx React.DOM */var Link = ReactRouter.Link;
	
	var mainAppWin = React.createClass({displayName: "mainAppWin",
	
	  render: function() {
	    return (
			React.createElement("nav", {className: "navbar navbar-default", role: "navigation", id: "mainPage"}, 
	 		 React.createElement("div", {className: "container"}, 
	    		React.createElement("div", {className: "navbar-header"}, 
	      			React.createElement("button", {type: "button", className: "navbar-toggle", "data-toggle": "collapse"}, 
	        			React.createElement("span", {className: "sr-only"}, "Toggle navigation"), 
	        			React.createElement("span", {className: "icon-bar"}), 
	        			React.createElement("span", {className: "icon-bar"}), 
	        			React.createElement("span", {className: "icon-bar"})
	      			), 
	      			React.createElement("a", {className: "navbar-brand", href: "/mainAppWin"}, "Genie Lamp")
	    		), 
	
	    		React.createElement("div", {className: "collapse navbar-collapse"}, 
	      			React.createElement("ul", {className: "nav navbar-nav"}, 
	        			React.createElement("li", null, React.createElement(Link, {to: "profile"}, "Profile")), 
	        			React.createElement("li", null, React.createElement(Link, {to: "WishListHist"}, "WishList")), 
	        			React.createElement("li", {role: "presentation", className: "dropdown"}, 
	          				React.createElement("a", {className: "dropdown-toggle", href: "mainAppWin", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false"}, "Friends", React.createElement("span", {className: "caret"})), 
	          				React.createElement("ul", {className: "dropdown-menu"}, 
	            				React.createElement("li", null, React.createElement(Link, {to: "Friends"}, "View Friends")), 
	            				React.createElement("li", null, React.createElement("a", {href: "#"}, "Add Friend")), 
	            				React.createElement("li", null, React.createElement("a", {href: "#"}, "Remove Friend"))
	          				)
	        			)
	      			), 
	      			React.createElement("ul", {className: "nav navbar-nav navbar-right"}, 
	        			React.createElement("li", null, React.createElement("a", {href: "mainAppWin"}, "Hello Yazan"))
	      			)
	    		)
	  		)
	  	)
	    );
	  }
	});
	
	module.exports = mainAppWin

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map