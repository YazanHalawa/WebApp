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
	var SignUp = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./SignUp\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var App = __webpack_require__(3);
	var Profile = __webpack_require__(5);
	var Friends = __webpack_require__(6);
	var mainAppWin = __webpack_require__(7);
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
		          React.createElement(Route, {name: "Profile", path: "/profile", component: Profile})
		        ), 
	      		React.createElement(Route, {name: "SignUp", path: "/SignUp", component: SignUp}, 
	  			    React.createElement(Route, {name: "mainAppWin", path: "/mainAppWin", component: mainAppWin}, 
	            		React.createElement(Route, {name: "Friends", path: "/friends", component: Friends}), 
	            		React.createElement(Route, {name: "profile", path: "/profile", component: Profile})
	            	)
		        )
	        )
	    )
	);
	
	
	
	ReactDOM.render(routes, document.body);
	
	module.exports = indexLogger;

/***/ },
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */var Link = ReactRouter.Link;
	var Router = ReactRouter;
	var auth = __webpack_require__ (4);
	
	var App = React.createClass({displayName: "App",
	
	  // context so the component can access the router
	  contextTypes: {
	      history: React.PropTypes.object.isRequired
	  },
	
	  getInitialState: function(){
	    return{
	      emailText: '',
	      passwordText: '',
	      error: false
	    }
	  },
	
	  render: function(){
	    return(
	      React.createElement("div", {className: "container-fluid", id: "Home"}, 
	        React.createElement("div", {id: "mainText"}, 
	          React.createElement("div", {id: "key_phrase"}, "Make your wishes come true"), 
	          React.createElement("div", {id: "firstSuppPhrase"}, "Genie Lamp allows you to make wishes"), 
	          React.createElement("div", {id: "firstSuppPhrase"}, "And have you friends GRANT them"), 
	          React.createElement("div", {id: "secondSuppPhrase"}, "Join NOW!")
	        ), 
	        React.createElement("form", {id: "mainForm", className: "form-horizontal"}, 
	        React.createElement("link", {rel: "stylesheet", type: "text/css", href: "../bootstrap/css/custom.css"}), 
	          React.createElement("div", {className: "form-group"}, 
	            React.createElement("label", {id: "emailLabel", htmlFor: "inputEmail3", className: "col-sm-2 control-label"}, "Email"), 
	            React.createElement("div", {className: "col-sm-10"}, 
	              React.createElement("input", {
	                value: this.state.emailText, 
	                onChange: this.handleInputChange, 
	                type: "email", 
	                className: "form-control", 
	                id: "inputEmail3", 
	                placeholder: "Email"})
	            )
	          ), 
	          React.createElement("div", {className: "form-group"}, 
	            React.createElement("label", {id: "passwordLabel", htmlFor: "inputPassword3", className: "col-sm-2 control-label"}, "Password"), 
	            React.createElement("div", {className: "col-sm-10"}, 
	              React.createElement("input", {
	                value: this.state.passwordText, 
	                onChange: this.handleInputChange, 
	                type: "password", 
	                className: "form-control", 
	                id: "inputPassword3", 
	                placeholder: "Password"})
	            )
	          ), 
	          React.createElement("div", {className: "form-group"}, 
	            React.createElement("div", {className: "col-sm-10"}, 
	                  React.createElement("button", {
	                    onClick: this.handleClick, 
	                    id: "LogInBtn", 
	                    className: "btn btn-primary btn-lg active"}, 
	                    "Log In"
	                  ), 
	                React.createElement(Link, {to: "/SignUp"}, 
	                  React.createElement("button", {id: "SignUpBtn", className: "btn btn-primary btn-lg active"}, "Sign Up")
	                )
	            )
	          )
	        )
	      )
	      );
	  },
	
	  // event handlers
	  handleInputChange: function(event) {
	    if (event.target.id === "inputPassword3"){
	      this.setState({passwordText:event.target.value});
	    }
	    else if (event.target.id === "inputEmail3"){
	      this.setState({emailText:event.target.value});
	    }
	  },
	
	  handleClick: function(){
	    //----- Send value of text input to Mongo------//
	
	    // prevent default browser submit
	    event.preventDefault();
	    // get data from form
	    var username = this.state.emailText;
	    var password = this.state.passwordText;
	    if (!username || !password) {
	        return;
	    }
	    
	    // login via API
	    auth.login(username, password, function(loggedIn) {
	        // login callback
	        if (!loggedIn){
	          console.log("failed");
	            return this.setState({
	                error: true
	            });
	          }
	        else 
	          this.context.history.pushState(null, '/mainAppWin');
	    }.bind(this));
	  }
	});
	
	
	
	
	
	module.exports = App;


/***/ },
/* 4 */
/***/ function(module, exports) {

	/** @jsx React.DOM */// authentication object
	var auth = {
	    register: function(firstName, lastName, username, password, wish1, wish2, wish3, bdMonth, bdDay, bdYear, gender, profilePic, cb) {
	        // submit request to server, call the callback when complete
	        var url = "/register";
	        $.ajax({
	            url: url,
	            dataType: 'json',
	            type: 'POST',
	            data: {
	                firstName: firstName,
	                lastName: lastName,
	                username: username,
	                password: password,
	                wish1: wish1,
	                wish2: wish2,
	                wish3: wish3,
	                bdMonth: bdMonth,
	                bdDay: bdDay,
	                bdYear: bdYear,
	                gender: gender,
	                profilePic: profilePic
	            },
	            // on success, store a login token
	            success: function(res) {
	                console.log("found");
	                localStorage.token = res.token;
	                localStorage.name = res.name;
	                if (cb)
	                    cb(true);
	                this.onChange(true);
	            }.bind(this),
	            error: function(status, err) {
	                console.log("not found");
	                // if there is an error, remove any login token
	                delete localStorage.token;
	                if (cb)
	                    cb(false);
	                this.onChange(false);
	            }.bind(this)
	        });
	    },
	    // login the user
	    login: function(username, password, cb) {
	        // submit login request to server, call callback when complete
	        cb = arguments[arguments.length - 1];
	        // check if token in local storage
	        if (localStorage.token) {
	            if (cb)
	                cb(true);
	            this.onChange(true);
	            return;
	        }
	
	        // submit request to server
	        var url = "/login";
	        $.ajax({
	            url: url,
	            dataType: 'json',
	            type: 'POST',
	            data: {
	                username: username,
	                password: password
	            },
	            success: function(res) {
	                console.log("it worked");
	                // on success, store a login token
	                localStorage.token = res.token;
	                localStorage.name = res.name;
	                console.log("name is %s", localStorage.name)
	                if (cb)
	                    cb(true);
	                this.onChange(true);
	            }.bind(this),
	            error: function(xhr, status, err) {
	                console.log("did not work");
	                // if there is an error, remove any login token
	                delete localStorage.token;
	                if (cb)
	                    cb(false);
	                this.onChange(false);
	            }.bind(this)
	        });
	    },
	    // get the token from local storage
	    getToken: function() {
	        return localStorage.token;
	    },
	    // get the name from local storage
	    getName: function() {
	        return localStorage.name;
	    },
	    // logout the user, call the callback when complete
	    logout: function(cb) {
	        delete localStorage.token;
	        if (cb) cb();
	        this.onChange(false);
	    },
	    // check if user is logged in
	    loggedIn: function() {
	        return !!localStorage.token;
	    },
	    // default onChange function
	    onChange: function() {}
	};
	
	module.exports = auth

/***/ },
/* 5 */
/***/ function(module, exports) {

	/** @jsx React.DOM */var Profile = React.createClass({displayName: "Profile",
	
		// context so the component can access the router
	  	contextTypes: {
	      router: React.PropTypes.func
	  	},
	
		render: function() {
		    return (
			React.createElement("div", {className: "container"}, 
				React.createElement("div", {className: "row"}, 
					React.createElement("div", {className: "col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xs-offset-0 col-sm-offset-0 col-md-offset-3 col-lg-offset-3 toppad"}, 
						React.createElement("div", {className: "panel panel-info"}, 
						React.createElement("div", {className: "panel-heading"}, 
							React.createElement("h3", {className: "panel-title"}, "Yazan Halawa")
						), 
						React.createElement("div", {className: "panel-body"}, 
							React.createElement("div", {className: "row"}, 
								React.createElement("div", {className: "col-md-3 col-lg-3 ", align: "center"}, " ", React.createElement("img", {alt: "User Pic", src: "https://scontent-lax3-1.xx.fbcdn.net/hphotos-xpf1/t31.0-8/11875221_10153657071968128_8094074270772212166_o.jpg", className: "img-circle img-responsive"})
								), 
								React.createElement("div", {className: " col-md-9 col-lg-9 "}, 
	
									React.createElement("table", {className: "table table-user-information", id: "profileInfo"}, 
									React.createElement("tbody", null, 
									React.createElement("tr", null, 
									React.createElement("td", null, "Email:"), 
									React.createElement("td", null, "monica.keyclub@gmail.com")
									), 
									React.createElement("tr", null, 
									React.createElement("td", null, "Date of Birth:"), 
									React.createElement("td", null, "08/01/1992")
									), 
									React.createElement("tr", null, 
									React.createElement("tr", null, 
									React.createElement("td", null, "Gender:"), 
									React.createElement("td", null, "Female")
									), 
									React.createElement("tr", null, 
									React.createElement("td", null, "Wish 1:"), 
									React.createElement("td", null, "MacBook Air")
									), 
									React.createElement("tr", null, 
									React.createElement("td", null, "Wish 2:"), 
									React.createElement("td", null, "Amazon Echo")
									), 
									React.createElement("tr", null, 
									React.createElement("td", null, "Wish 3:"), 
									React.createElement("td", null, "Karaoke set")
									)
									)
									)
									), 
									React.createElement("a", {href: "#", className: "btn btn-primary", id: "button1"}, "Edit Wish List Items")
								)
							)
						)
					)
				)
			)
		)
		    );
		  }
	});
	
	module.exports = Profile

/***/ },
/* 6 */
/***/ function(module, exports) {

	/** @jsx React.DOM */var Friends = React.createClass({displayName: "Friends",
	  // context so the component can access the router
	  contextTypes: {
	      router: React.PropTypes.func
	  },
	
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
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */var Link = ReactRouter.Link;
	var auth = __webpack_require__ (4);
	
	var mainAppWin = React.createClass({displayName: "mainAppWin",
	
	  // context so the component can access the router
	  contextTypes: {
	      history: React.PropTypes.object.isRequired
	  },
	
	  render: function() {
	    return (
	      React.createElement("div", null, 
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
	        			React.createElement("li", null, React.createElement(Link, {to: "Profile"}, "Profile")), 
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
	        			React.createElement("li", null, React.createElement("a", {href: "/mainAppWin"}, "Hello ", auth.getName())), 
	              React.createElement("li", null, React.createElement("a", {
	                    href: "#", 
	                    onClick: this.handleClick, 
	                    id: "LogOutBtn"}, 
	                    "Log Out"
	                  ))
	      			)
	    		)
	  		)
	
	  	), 
	          React.createElement("div", {className: "detail"}, 
	          this.props.children
	      )
	      )
	    );
	  },
	
	  handleClick: function(){
	    auth.logout();
	    this.context.history.pushState(null, '/');  
	  }
	});
	
	module.exports = mainAppWin

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map