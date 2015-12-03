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
	var SignUp = __webpack_require__(2);
	var App = __webpack_require__(3);
	var Profile = __webpack_require__(4);
	var Friends = __webpack_require__(5);
	var mainAppWin = __webpack_require__(6);
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
/* 2 */
/***/ function(module, exports) {

	/** @jsx React.DOM */var Link = ReactRouter.Link;
	
	var SignUp = React.createClass({displayName: "SignUp",
	
		// context so the component can access the router
	  	contextTypes: {
	      router: React.PropTypes.func
	  	},
	  	
		render: function(){
			return(
				React.createElement("form", {method: "post", id: "reg", name: "reg", action: "https://m.facebook.com/r.php", onsubmit: "return function(event){return false;}.call(this,event)!==false && window.Event && Event.__inlineSubmit && Event.__inlineSubmit(this,event)"}, 
					React.createElement("input", {type: "hidden", name: "lsd", value: "AVrbhDJG", autoComplete: "off"}), 
					React.createElement("div", {id: "reg_form_box", className: "large_form"}, 
						React.createElement("div", {className: "clearfix _58mh"}, 
							React.createElement("div", {className: "mbm _3-90 lfloat _ohe"}, 
								React.createElement("div", {className: "_5dbb", id: "u_0_a"}, 
									React.createElement("div", {className: "uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput"}, 
										React.createElement("div", {className: "placeholder", "aria-hidden": "true"}, "First name"), 
										React.createElement("input", {type: "text", className: "inputtext _58mg _5dba _2ph-", "data-type": "text", name: "firstname", "aria-required": "1", placeholder: "", id: "u_0_b", "aria-label": "First name", "aria-owns": "js_0", "aria-haspopup": "true", "aria-describedby": "js_5", "aria-invalid": "true"})
									), 
									React.createElement("i", {className: "_5dbc img sp_7XMX65Pq0E7 sx_ee768b"}), React.createElement("i", {className: "_5dbd img sp_7XMX65Pq0E7 sx_067138"})
								)
							), 
							React.createElement("div", {className: "mbm rfloat _ohf"}, 
								React.createElement("div", {className: "_5dbb", id: "u_0_c"}, 
									React.createElement("div", {className: "uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput"}, 
										React.createElement("div", {className: "placeholder", "aria-hidden": "true"}, "Last name"), 
										React.createElement("input", {type: "text", className: "inputtext _58mg _5dba _2ph-", "data-type": "text", name: "lastname", "aria-required": "1", placeholder: "", id: "u_0_d", "aria-label": "Last name"})
									), 
									React.createElement("i", {className: "_5dbc img sp_7XMX65Pq0E7 sx_ee768b"}), React.createElement("i", {className: "_5dbd img sp_7XMX65Pq0E7 sx_067138"})
								)
							)
						), 
						React.createElement("div", {className: "mbm"}, 
							React.createElement("div", {className: "_5dbb", id: "u_0_e"}, 
								React.createElement("div", {className: "uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput"}, 
									React.createElement("div", {className: "placeholder", "aria-hidden": "true"}, "Email"), 
									React.createElement("input", {type: "text", className: "inputtext _58mg _5dba _2ph-", "data-type": "text", name: "reg_email__", "aria-required": "1", placeholder: "", id: "u_0_f", "aria-label": "Email"})
								), 
								React.createElement("i", {className: "_5dbc img sp_7XMX65Pq0E7 sx_ee768b"}), React.createElement("i", {className: "_5dbd img sp_7XMX65Pq0E7 sx_067138"})
							)
						), 
						React.createElement("div", {className: "mbm", id: "u_0_g"}, 
							React.createElement("div", {className: "_5dbb", id: "u_0_h"}, 
								React.createElement("div", {className: "uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput"}, 
									React.createElement("div", {className: "placeholder", "aria-hidden": "true"}, "Re-enter email"), 
									React.createElement("input", {type: "text", className: "inputtext _58mg _5dba _2ph-", "data-type": "text", name: "reg_email_confirmation__", "aria-required": "1", placeholder: "", id: "u_0_i", "aria-label": "Re-enter email"})
								), 
								React.createElement("i", {className: "_5dbc img sp_7XMX65Pq0E7 sx_ee768b"}), React.createElement("i", {className: "_5dbd img sp_7XMX65Pq0E7 sx_067138"})
							)
						), 
						React.createElement("div", {className: "mbm"}, 
							React.createElement("div", {className: "_5dbb", id: "u_0_j"}, 
								React.createElement("div", {className: "uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput"}, 
									React.createElement("div", {className: "placeholder", "aria-hidden": "true"}, "New password"), 
									React.createElement("input", {type: "password", className: "inputtext _58mg _5dba _2ph-", "data-type": "text", name: "reg_passwd__", "aria-required": "1", placeholder: "", id: "u_0_k", "aria-label": "New password"})
								), 
								React.createElement("i", {className: "_5dbc img sp_7XMX65Pq0E7 sx_ee768b"}), React.createElement("i", {className: "_5dbd img sp_7XMX65Pq0E7 sx_067138"})
							)
						), 
						React.createElement("div", {className: "mbm"}, 
							React.createElement("div", {className: "_5dbb", id: "u_0_j"}, 
								React.createElement("div", {className: "uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput"}, 
									React.createElement("div", {className: "placeholder", "aria-hidden": "true"}, "First Wish"), 
									React.createElement("input", {type: "text", className: "inputtext _58mg _5dba _2ph-", "data-type": "text", name: "reg_first_wish__", "aria-required": "1", placeholder: "", id: "u_0_k", "aria-label": "First Wish"})
								), 
								React.createElement("i", {className: "_5dbc img sp_7XMX65Pq0E7 sx_ee768b"}), React.createElement("i", {className: "_5dbd img sp_7XMX65Pq0E7 sx_067138"})
							)
						), 
						React.createElement("div", {className: "mbm"}, 
							React.createElement("div", {className: "_5dbb", id: "u_0_j"}, 
								React.createElement("div", {className: "uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput"}, 
									React.createElement("div", {className: "placeholder", "aria-hidden": "true"}, "Second Wish"), 
									React.createElement("input", {type: "text", className: "inputtext _58mg _5dba _2ph-", "data-type": "text", name: "reg_second_wish__", "aria-required": "1", placeholder: "", id: "u_0_k", "aria-label": "second wish"})
								), 
								React.createElement("i", {className: "_5dbc img sp_7XMX65Pq0E7 sx_ee768b"}), React.createElement("i", {className: "_5dbd img sp_7XMX65Pq0E7 sx_067138"})
							)
						), 
						React.createElement("div", {className: "mbm"}, 
							React.createElement("div", {className: "_5dbb", id: "u_0_j"}, 
								React.createElement("div", {className: "uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput"}, 
									React.createElement("div", {className: "placeholder", "aria-hidden": "true"}, "Third Wish"), 
									React.createElement("input", {type: "text", className: "inputtext _58mg _5dba _2ph-", "data-type": "text", name: "reg_third_wish__", "aria-required": "1", placeholder: "", id: "u_0_k", "aria-label": "third wish"})
								), 
								React.createElement("i", {className: "_5dbc img sp_7XMX65Pq0E7 sx_ee768b"}), React.createElement("i", {className: "_5dbd img sp_7XMX65Pq0E7 sx_067138"})
							)
						), 
						React.createElement("div", {className: "_58mq _5dbb", id: "u_0_l"}, 
							React.createElement("div", {className: "mtm mbs _58mr"}, "Birthday"), 
							React.createElement("div", {className: "_5k_5"}, 
								React.createElement("span", {className: "_5k_4", "data-type": "selectors", "data-name": "birthday_wrapper", id: "u_0_m"}, 
									React.createElement("span", null, 
										React.createElement("select", {"aria-label": "Month", name: "birthday_month", id: "month", title: "Month", className: "_5dba"}, 
											React.createElement("option", {value: "0", selected: "1"}, "Month"), 
											React.createElement("option", {value: "1"}, "Jan"), 
											React.createElement("option", {value: "2"}, "Feb"), 
											React.createElement("option", {value: "3"}, "Mar"), 
											React.createElement("option", {value: "4"}, "Apr"), 
											React.createElement("option", {value: "5"}, "May"), 
											React.createElement("option", {value: "6"}, "Jun"), 
											React.createElement("option", {value: "7"}, "Jul"), 
											React.createElement("option", {value: "8"}, "Aug"), 
											React.createElement("option", {value: "9"}, "Sep"), 
											React.createElement("option", {value: "10"}, "Oct"), 
											React.createElement("option", {value: "11"}, "Nov"), 
											React.createElement("option", {value: "12"}, "Dec")
										), 
										React.createElement("select", {"aria-label": "Day", name: "birthday_day", id: "day", title: "Day", className: "_5dba"}, 
											React.createElement("option", {value: "0", selected: "1"}, "Day"), 
											React.createElement("option", {value: "1"}, "1"), 
											React.createElement("option", {value: "2"}, "2"), 
											React.createElement("option", {value: "3"}, "3"), 
											React.createElement("option", {value: "4"}, "4"), 
											React.createElement("option", {value: "5"}, "5"), 
											React.createElement("option", {value: "6"}, "6"), 
											React.createElement("option", {value: "7"}, "7"), 
											React.createElement("option", {value: "8"}, "8"), 
											React.createElement("option", {value: "9"}, "9"), 
											React.createElement("option", {value: "10"}, "10"), 
											React.createElement("option", {value: "11"}, "11"), 
											React.createElement("option", {value: "12"}, "12"), 
											React.createElement("option", {value: "13"}, "13"), 
											React.createElement("option", {value: "14"}, "14"), 
											React.createElement("option", {value: "15"}, "15"), 
											React.createElement("option", {value: "16"}, "16"), 
											React.createElement("option", {value: "17"}, "17"), 
											React.createElement("option", {value: "18"}, "18"), 
											React.createElement("option", {value: "19"}, "19"), 
											React.createElement("option", {value: "20"}, "20"), 
											React.createElement("option", {value: "21"}, "21"), 
											React.createElement("option", {value: "22"}, "22"), 
											React.createElement("option", {value: "23"}, "23"), 
											React.createElement("option", {value: "24"}, "24"), 
											React.createElement("option", {value: "25"}, "25"), 
											React.createElement("option", {value: "26"}, "26"), 
											React.createElement("option", {value: "27"}, "27"), 
											React.createElement("option", {value: "28"}, "28"), 
											React.createElement("option", {value: "29"}, "29"), 
											React.createElement("option", {value: "30"}, "30"), 
											React.createElement("option", {value: "31"}, "31")
										), 
										React.createElement("select", {"aria-label": "Year", name: "birthday_year", id: "year", title: "Year", className: "_5dba"}, 
											React.createElement("option", {value: "0", selected: "1"}, "Year"), 
											React.createElement("option", {value: "2015"}, "2015"), 
											React.createElement("option", {value: "2014"}, "2014"), 
											React.createElement("option", {value: "2013"}, "2013"), 
											React.createElement("option", {value: "2012"}, "2012"), 
											React.createElement("option", {value: "2011"}, "2011"), 
											React.createElement("option", {value: "2010"}, "2010"), 
											React.createElement("option", {value: "2009"}, "2009"), 
											React.createElement("option", {value: "2008"}, "2008"), 
											React.createElement("option", {value: "2007"}, "2007"), 
											React.createElement("option", {value: "2006"}, "2006"), 
											React.createElement("option", {value: "2005"}, "2005"), 
											React.createElement("option", {value: "2004"}, "2004"), 
											React.createElement("option", {value: "2003"}, "2003"), 
											React.createElement("option", {value: "2002"}, "2002"), 
											React.createElement("option", {value: "2001"}, "2001"), 
											React.createElement("option", {value: "2000"}, "2000"), 
											React.createElement("option", {value: "1999"}, "1999"), 
											React.createElement("option", {value: "1998"}, "1998"), 
											React.createElement("option", {value: "1997"}, "1997"), 
											React.createElement("option", {value: "1996"}, "1996"), 
											React.createElement("option", {value: "1995"}, "1995"), 
											React.createElement("option", {value: "1994"}, "1994"), 
											React.createElement("option", {value: "1993"}, "1993"), 
											React.createElement("option", {value: "1992"}, "1992"), 
											React.createElement("option", {value: "1991"}, "1991"), 
											React.createElement("option", {value: "1990"}, "1990"), 
											React.createElement("option", {value: "1989"}, "1989"), 
											React.createElement("option", {value: "1988"}, "1988"), 
											React.createElement("option", {value: "1987"}, "1987"), 
											React.createElement("option", {value: "1986"}, "1986"), 
											React.createElement("option", {value: "1985"}, "1985"), 
											React.createElement("option", {value: "1984"}, "1984"), 
											React.createElement("option", {value: "1983"}, "1983"), 
											React.createElement("option", {value: "1982"}, "1982"), 
											React.createElement("option", {value: "1981"}, "1981"), 
											React.createElement("option", {value: "1980"}, "1980"), 
											React.createElement("option", {value: "1979"}, "1979"), 
											React.createElement("option", {value: "1978"}, "1978"), 
											React.createElement("option", {value: "1977"}, "1977"), 
											React.createElement("option", {value: "1976"}, "1976"), 
											React.createElement("option", {value: "1975"}, "1975"), 
											React.createElement("option", {value: "1974"}, "1974"), 
											React.createElement("option", {value: "1973"}, "1973"), 
											React.createElement("option", {value: "1972"}, "1972"), 
											React.createElement("option", {value: "1971"}, "1971"), 
											React.createElement("option", {value: "1970"}, "1970"), 
											React.createElement("option", {value: "1969"}, "1969"), 
											React.createElement("option", {value: "1968"}, "1968"), 
											React.createElement("option", {value: "1967"}, "1967"), 
											React.createElement("option", {value: "1966"}, "1966"), 
											React.createElement("option", {value: "1965"}, "1965"), 
											React.createElement("option", {value: "1964"}, "1964"), 
											React.createElement("option", {value: "1963"}, "1963"), 
											React.createElement("option", {value: "1962"}, "1962"), 
											React.createElement("option", {value: "1961"}, "1961"), 
											React.createElement("option", {value: "1960"}, "1960"), 
											React.createElement("option", {value: "1959"}, "1959"), 
											React.createElement("option", {value: "1958"}, "1958"), 
											React.createElement("option", {value: "1957"}, "1957"), 
											React.createElement("option", {value: "1956"}, "1956"), 
											React.createElement("option", {value: "1955"}, "1955"), 
											React.createElement("option", {value: "1954"}, "1954"), 
											React.createElement("option", {value: "1953"}, "1953"), 
											React.createElement("option", {value: "1952"}, "1952"), 
											React.createElement("option", {value: "1951"}, "1951"), 
											React.createElement("option", {value: "1950"}, "1950"), 
											React.createElement("option", {value: "1949"}, "1949"), 
											React.createElement("option", {value: "1948"}, "1948"), 
											React.createElement("option", {value: "1947"}, "1947"), 
											React.createElement("option", {value: "1946"}, "1946"), 
											React.createElement("option", {value: "1945"}, "1945"), 
											React.createElement("option", {value: "1944"}, "1944"), 
											React.createElement("option", {value: "1943"}, "1943"), 
											React.createElement("option", {value: "1942"}, "1942"), 
											React.createElement("option", {value: "1941"}, "1941"), 
											React.createElement("option", {value: "1940"}, "1940"), 
											React.createElement("option", {value: "1939"}, "1939"), 
											React.createElement("option", {value: "1938"}, "1938"), 
											React.createElement("option", {value: "1937"}, "1937"), 
											React.createElement("option", {value: "1936"}, "1936"), 
											React.createElement("option", {value: "1935"}, "1935"), 
											React.createElement("option", {value: "1934"}, "1934"), 
											React.createElement("option", {value: "1933"}, "1933"), 
											React.createElement("option", {value: "1932"}, "1932"), 
											React.createElement("option", {value: "1931"}, "1931"), 
											React.createElement("option", {value: "1930"}, "1930"), 
											React.createElement("option", {value: "1929"}, "1929"), 
											React.createElement("option", {value: "1928"}, "1928"), 
											React.createElement("option", {value: "1927"}, "1927"), 
											React.createElement("option", {value: "1926"}, "1926"), 
											React.createElement("option", {value: "1925"}, "1925"), 
											React.createElement("option", {value: "1924"}, "1924"), 
											React.createElement("option", {value: "1923"}, "1923"), 
											React.createElement("option", {value: "1922"}, "1922"), 
											React.createElement("option", {value: "1921"}, "1921"), 
											React.createElement("option", {value: "1920"}, "1920"), 
											React.createElement("option", {value: "1919"}, "1919"), 
											React.createElement("option", {value: "1918"}, "1918"), 
											React.createElement("option", {value: "1917"}, "1917"), 
											React.createElement("option", {value: "1916"}, "1916"), 
											React.createElement("option", {value: "1915"}, "1915"), 
											React.createElement("option", {value: "1914"}, "1914"), 
											React.createElement("option", {value: "1913"}, "1913"), 
											React.createElement("option", {value: "1912"}, "1912"), 
											React.createElement("option", {value: "1911"}, "1911"), 
											React.createElement("option", {value: "1910"}, "1910"), 
											React.createElement("option", {value: "1909"}, "1909"), 
											React.createElement("option", {value: "1908"}, "1908"), 
											React.createElement("option", {value: "1907"}, "1907"), 
											React.createElement("option", {value: "1906"}, "1906"), 
											React.createElement("option", {value: "1905"}, "1905")
										)
									)
								)
							)
						), 
						React.createElement("div", {className: "mtm _5wa2 _5dbb", id: "u_0_p"}, React.createElement("span", {className: "_5k_3", "data-type": "radio", "data-name": "gender_wrapper", id: "u_0_q"}, React.createElement("span", {className: "_5k_2 _5dba"}, React.createElement("input", {type: "radio", name: "sex", value: "1", id: "u_0_n"}), React.createElement("label", {className: "_58mt", htmlFor: "u_0_n"}, "Female")), React.createElement("span", {className: "_5k_2 _5dba"}, React.createElement("input", {type: "radio", name: "sex", value: "2", id: "u_0_o"}), React.createElement("label", {className: "_58mt", htmlFor: "u_0_o"}, "Male"))), React.createElement("i", {className: "_5dbc _5k_6 img sp_7XMX65Pq0E7 sx_ee768b"}), React.createElement("i", {className: "_5dbd _5k_7 img sp_7XMX65Pq0E7 sx_067138"})), 
						React.createElement("div", {className: "clearfix"}, React.createElement(Link, {to: "/mainAppWin"}, 
	                  React.createElement("button", {id: "LogInBtn", className: "btn btn-primary btn-lg active"}, "Sign Up")
	                ))
					), 
					React.createElement("input", {type: "hidden", autoComplete: "off", id: "referrer", name: "referrer", value: ""}), React.createElement("input", {type: "hidden", autoComplete: "off", id: "asked_to_login", name: "asked_to_login"}), React.createElement("input", {type: "hidden", autoComplete: "off", id: "terms", name: "terms", value: "on"}), React.createElement("input", {type: "hidden", autoComplete: "off", id: "ab_test_data", name: "ab_test_data", value: ""}), React.createElement("input", {type: "hidden", autoComplete: "off", id: "reg_instance", name: "reg_instance", value: "f5ZTVicvklCwNUJcUZfUDS8L"}), React.createElement("input", {type: "hidden", autoComplete: "off", id: "contactpoint_label", name: "contactpoint_label", value: "email_or_phone"}), React.createElement("input", {type: "hidden", autoComplete: "off", id: "locale", name: "locale", value: "en_US"}), 
					React.createElement("div", {id: "reg_captcha", className: "_58mw hidden_elem"}
					)
				)
				);
		}
	});
	
	module.exports = SignUp

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */var Link = ReactRouter.Link;
	var Router = ReactRouter;
	var auth = __webpack_require__ (7);
	
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

	/** @jsx React.DOM */var Profile = React.createClass({displayName: "Profile",
	
		// context so the component can access the router
	  	contextTypes: {
	      router: React.PropTypes.func
	  	},
	
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
/* 5 */
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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */var Link = ReactRouter.Link;
	var auth = __webpack_require__ (7);
	
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
	        			React.createElement("li", null, React.createElement("a", {href: "/mainAppWin"}, "Hello Yazan")), 
	              React.createElement("li", null, React.createElement("a", {
	                    onClick: this.handleClick, 
	                    id: "LogOutBtn", 
	                    className: "btn btn-primary btn-lg active"}, 
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

/***/ },
/* 7 */
/***/ function(module, exports) {

	/** @jsx React.DOM */// authentication object
	var auth = {
	    register: function(name, username, password, cb) {
	        // submit request to server, call the callback when complete
	        var url = "/api/users/register";
	        $.ajax({
	            url: url,
	            dataType: 'json',
	            type: 'POST',
	            data: {
	                name: name,
	                username: username,
	                password: password
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
	            error: function(xhr, status, err) {
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
	    onChange: function() {},
	};
	
	module.exports = auth

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map