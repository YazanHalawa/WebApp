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
/***/ function(module, exports) {

	/** @jsx React.DOM */// var menuBar = require('./navBar');
	
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
	        		React.createElement("li", null, React.createElement(Link, {to: "profile"}, "Profile")), 
	        		React.createElement("li", null, React.createElement(Link, {to: "WishListHist"}, "WishList")), 
	        		React.createElement("li", {className: "dropdown"}, 
	          			React.createElement("a", {href: "/", className: "dropdown-toggle", "data-toggle": "dropdown", role: "button", "aria-haspopup": "true", "aria-expanded": "false"}, "Friends", React.createElement("span", {class: "caret"})), 
	         			React.createElement("ul", {className: "dropdown-menu"}, 
	            	React.createElement("li", null, React.createElement("a", {href: "/"}, "View Friends")), 
	            React.createElement("li", null, React.createElement("a", {href: "/"}, "Add Friend")), 
	            React.createElement("li", null, React.createElement("a", {href: "/"}, "Remove Friend")), 
	            React.createElement("li", {role: "separator", className: "divider"}), 
	            React.createElement("li", null, React.createElement("a", {href: "/"}, "Separated link")), 
	            React.createElement("li", {role: "separator", className: "divider"}), 
	            React.createElement("li", null, React.createElement("a", {href: "/"}, "One more separated link"))
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
	
	var Home = React.createClass({displayName: "Home",
	  render: function() {
	    return (
	      React.createElement("div", null, 
	        React.createElement("h1", null, "Home"), 
	        React.createElement("p", null, "Put your home page here")
	      )
	    );
	  }
	});
	
	var Page = React.createClass({displayName: "Page",
	  render: function() {
	    return (
	      React.createElement("div", null, 
	        React.createElement("h1", null, "Page"), 
	        React.createElement("p", null, "Demo another page here")
	      )
	    );
	  }
	});
	
	// Run the routes
	var routes = (
	      React.createElement(Router, null, 
	        React.createElement(Route, {name: "app", path: "/", component: App}, 
	          React.createElement(Route, {name: "page", path: "/page", component: Page}), 
	          React.createElement(Route, {path: "*", component: Home})
	        )
	      )
	);
	
	ReactDOM.render(routes, document.body);


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map