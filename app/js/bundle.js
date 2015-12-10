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

	var Router = ReactRouter.Router;
	var Route = ReactRouter.Route;
	var SignUp = __webpack_require__(2);
	var App = __webpack_require__(4);
	var Profile = __webpack_require__(5);
	var addFriend = __webpack_require__(7);
	var removeFriend = __webpack_require__(8);
	var mainAppWin = __webpack_require__(9);
	var updateWishList = __webpack_require__(10);
	var viewFriends = __webpack_require__(11);
	var friendProfile = __webpack_require__(12);
	var deleteAccount = __webpack_require__(13);
	var navBarSettings = __webpack_require__(14);
	var contactUs = __webpack_require__(15);
	var IndexRoute = ReactRouter.IndexRoute;
	
	var indexLogger = React.createClass({
	    displayName: 'indexLogger',
	
	    render: function () {
	        return React.createElement(
	            'div',
	            { className: 'detail' },
	            this.props.children
	        );
	    }
	});
	
	// Run the routes
	var routes = React.createElement(
	    Router,
	    null,
	    React.createElement(
	        Route,
	        { name: 'parent', path: '/', component: indexLogger },
	        React.createElement(IndexRoute, { component: App }),
	        React.createElement(Route, { name: 'SignUp', path: '/SignUp', component: SignUp }),
	        React.createElement(
	            Route,
	            { name: 'mainAppWin', path: '/mainAppWin', component: mainAppWin },
	            React.createElement(Route, { name: 'addFriend', path: '/addFriend', component: addFriend }),
	            React.createElement(Route, { name: 'removeFriend', path: '/removeFriend', component: removeFriend }),
	            React.createElement(Route, { name: 'viewFriends', path: '/viewFriends', component: viewFriends }),
	            React.createElement(Route, { name: 'friendProfile', path: '/friendProfile', component: friendProfile }),
	            React.createElement(Route, { name: 'profile', path: '/profile', component: Profile }),
	            React.createElement(Route, { name: 'updateWishList', path: '/updateWishList', component: updateWishList }),
	            React.createElement(Route, { name: 'deleteAccount', path: '/deleteAccount', component: deleteAccount }),
	            React.createElement(Route, { name: 'navBarSettings', path: '/navBarSettings', component: navBarSettings }),
	            React.createElement(Route, { name: 'contactUs', path: '/contactUs', component: contactUs })
	        )
	    )
	);
	
	ReactDOM.render(routes, document.body);
	
	module.exports = indexLogger;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var Link = ReactRouter.Link;
	var auth = __webpack_require__(3);
	var SignUp = React.createClass({
		displayName: 'SignUp',
	
		// context so the component can access the router
		contextTypes: {
			history: React.PropTypes.object.isRequired
		},
	
		getInitialState: function () {
			return {
				firstNameText: '',
				lastNameText: '',
				emailText: '',
				passwordText: '',
				genderText: '',
				birthMonthText: '',
				birthDayText: '',
				birthYearText: '',
				profilePic: '',
				wish1: '',
				wish2: '',
				wish3: '',
				error: false
			};
		},
	
		render: function () {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'div',
					null,
					React.createElement('span', { id: 'errorDiv', className: 'errorDiv' })
				),
				React.createElement(
					'form',
					{ id: 'reg', name: 'reg' },
					React.createElement(
						'div',
						{ id: 'reg_form_box', className: 'large_form' },
						React.createElement(
							'div',
							{ className: 'mbm _3-90 lfloat _ohe' },
							React.createElement(
								'div',
								{ className: '_5dbb', id: 'u_0_a' },
								React.createElement(
									'div',
									{ className: 'uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput' },
									React.createElement(
										'div',
										{ className: 'placeholder', 'aria-hidden': 'true' },
										'First name'
									),
									React.createElement('input', {
										required: true,
										value: this.state.firstNameText,
										onChange: this.handleInputChange,
										type: 'text',
										className: 'inputtext _58mg _5dba _2ph-',
										'data-type': 'text',
										name: 'firstname',
										'aria-required': '1',
										placeholder: '',
										id: 'firstNameField',
										'aria-label': 'First name',
										'aria-owns': 'js_0',
										'aria-haspopup': 'true',
										'aria-describedby': 'js_5',
										'aria-invalid': 'true' })
								),
								React.createElement('i', { className: '_5dbc img sp_7XMX65Pq0E7 sx_ee768b' }),
								React.createElement('i', { className: '_5dbd img sp_7XMX65Pq0E7 sx_067138' })
							)
						),
						React.createElement(
							'div',
							{ className: 'mbm rfloat _ohf' },
							React.createElement(
								'div',
								{ className: '_5dbb', id: 'u_0_c' },
								React.createElement(
									'div',
									{ className: 'uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput' },
									React.createElement(
										'div',
										{ className: 'placeholder', 'aria-hidden': 'true' },
										'Last name'
									),
									React.createElement('input', {
										required: true,
										value: this.state.lastNameText,
										onChange: this.handleInputChange,
										type: 'text',
										className: 'inputtext _58mg _5dba _2ph-',
										'data-type': 'text',
										name: 'lastname',
										'aria-required': '1',
										placeholder: '',
										id: 'lastNameField',
										'aria-label': 'Last name' })
								),
								React.createElement('i', { className: '_5dbc img sp_7XMX65Pq0E7 sx_ee768b' }),
								React.createElement('i', { className: '_5dbd img sp_7XMX65Pq0E7 sx_067138' })
							)
						)
					),
					React.createElement(
						'div',
						{ className: 'mbm' },
						React.createElement(
							'div',
							{ className: '_5dbb', id: 'u_0_e' },
							React.createElement(
								'div',
								{ className: 'uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput' },
								React.createElement(
									'div',
									{ className: 'placeholder', 'aria-hidden': 'true' },
									'Email'
								),
								React.createElement('input', {
									required: true,
									value: this.state.emailText,
									onChange: this.handleInputChange,
									type: 'email',
									className: 'inputtext _58mg _5dba _2ph-',
									'data-type': 'text',
									name: 'reg_email__',
									'aria-required': '1',
									placeholder: '',
									id: 'emailField',
									'aria-label': 'Email' })
							),
							React.createElement('i', { className: '_5dbc img sp_7XMX65Pq0E7 sx_ee768b' }),
							React.createElement('i', { className: '_5dbd img sp_7XMX65Pq0E7 sx_067138' })
						)
					),
					React.createElement(
						'div',
						{ className: 'mbm' },
						React.createElement(
							'div',
							{ className: '_5dbb', id: 'u_0_j' },
							React.createElement(
								'div',
								{ className: 'uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput' },
								React.createElement(
									'div',
									{ className: 'placeholder', 'aria-hidden': 'true' },
									'New password'
								),
								React.createElement('input', {
									required: true,
									value: this.state.passwordText,
									onChange: this.handleInputChange,
									type: 'password',
									className: 'inputtext _58mg _5dba _2ph-',
									'data-type': 'text',
									name: 'reg_passwd__',
									'aria-required': '1',
									placeholder: '',
									id: 'passwordField',
									'aria-label': 'New password' })
							),
							React.createElement('i', { className: '_5dbc img sp_7XMX65Pq0E7 sx_ee768b' }),
							React.createElement('i', { className: '_5dbd img sp_7XMX65Pq0E7 sx_067138' })
						)
					),
					React.createElement(
						'div',
						{ className: 'mbm' },
						React.createElement(
							'div',
							{ className: '_5dbb', id: 'u_0_j' },
							React.createElement(
								'div',
								{ className: 'uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput' },
								React.createElement(
									'div',
									{ className: 'placeholder', 'aria-hidden': 'true' },
									'Profile picture'
								),
								React.createElement('input', {
									required: true,
									value: this.state.profilePic,
									onChange: this.handleInputChange,
									type: 'text',
									className: 'inputtext _58mg _5dba _2ph-',
									'data-type': 'text',
									name: 'reg_first_wish__',
									'aria-required': '1',
									placeholder: '',
									id: 'profilePicField', 'aria-label': 'First Wish' })
							),
							React.createElement('i', { className: '_5dbc img sp_7XMX65Pq0E7 sx_ee768b' }),
							React.createElement('i', { className: '_5dbd img sp_7XMX65Pq0E7 sx_067138' })
						)
					),
					React.createElement(
						'div',
						{ className: 'mbm' },
						React.createElement(
							'div',
							{ className: '_5dbb', id: 'u_0_j' },
							React.createElement(
								'div',
								{ className: 'uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput' },
								React.createElement(
									'div',
									{ className: 'placeholder', 'aria-hidden': 'true' },
									'First Wish'
								),
								React.createElement('input', {
									required: true,
									value: this.state.wish1,
									onChange: this.handleInputChange,
									type: 'text',
									className: 'inputtext _58mg _5dba _2ph-',
									'data-type': 'text',
									name: 'reg_first_wish__',
									'aria-required': '1',
									placeholder: '',
									id: 'wish1Field', 'aria-label': 'First Wish' })
							),
							React.createElement('i', { className: '_5dbc img sp_7XMX65Pq0E7 sx_ee768b' }),
							React.createElement('i', { className: '_5dbd img sp_7XMX65Pq0E7 sx_067138' })
						)
					),
					React.createElement(
						'div',
						{ className: 'mbm' },
						React.createElement(
							'div',
							{ className: '_5dbb', id: 'u_0_j' },
							React.createElement(
								'div',
								{ className: 'uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput' },
								React.createElement(
									'div',
									{ className: 'placeholder', 'aria-hidden': 'true' },
									'Second Wish'
								),
								React.createElement('input', {
									required: true,
									value: this.state.wish2,
									onChange: this.handleInputChange,
									type: 'text',
									className: 'inputtext _58mg _5dba _2ph-',
									'data-type': 'text',
									name: 'reg_second_wish__',
									'aria-required': '1',
									placeholder: '',
									id: 'wish2Field',
									'aria-label': 'second wish' })
							),
							React.createElement('i', { className: '_5dbc img sp_7XMX65Pq0E7 sx_ee768b' }),
							React.createElement('i', { className: '_5dbd img sp_7XMX65Pq0E7 sx_067138' })
						)
					),
					React.createElement(
						'div',
						{ className: 'mbm' },
						React.createElement(
							'div',
							{ className: '_5dbb', id: 'u_0_j' },
							React.createElement(
								'div',
								{ className: 'uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput' },
								React.createElement(
									'div',
									{ className: 'placeholder', 'aria-hidden': 'true' },
									'Third Wish'
								),
								React.createElement('input', {
									required: true,
									value: this.state.wish3,
									onChange: this.handleInputChange,
									type: 'text',
									className: 'inputtext _58mg _5dba _2ph-',
									'data-type': 'text',
									name: 'reg_third_wish__',
									'aria-required': '1',
									placeholder: '',
									id: 'wish3Field',
									'aria-label': 'third wish' })
							),
							React.createElement('i', { className: '_5dbc img sp_7XMX65Pq0E7 sx_ee768b' }),
							React.createElement('i', { className: '_5dbd img sp_7XMX65Pq0E7 sx_067138' })
						)
					),
					React.createElement(
						'div',
						{ className: '_58mq _5dbb', id: 'u_0_l' },
						React.createElement(
							'div',
							{ className: 'mtm mbs _58mr' },
							'Birthday'
						),
						React.createElement(
							'div',
							{ className: '_5k_5' },
							React.createElement(
								'span',
								{ className: '_5k_4', 'data-type': 'selectors', 'data-name': 'birthday_wrapper', id: 'u_0_m' },
								React.createElement(
									'span',
									null,
									React.createElement(
										'select',
										{
											required: true,
											value: this.state.birthMonthText,
											onChange: this.handleInputChange,
											'aria-label': 'Month',
											name: 'birthday_month',
											id: 'month',
											title: 'Month',
											className: '_5dba' },
										React.createElement(
											'option',
											{ value: '0', selected: '1' },
											'Month'
										),
										React.createElement(
											'option',
											{ value: '1' },
											'Jan'
										),
										React.createElement(
											'option',
											{ value: '2' },
											'Feb'
										),
										React.createElement(
											'option',
											{ value: '3' },
											'Mar'
										),
										React.createElement(
											'option',
											{ value: '4' },
											'Apr'
										),
										React.createElement(
											'option',
											{ value: '5' },
											'May'
										),
										React.createElement(
											'option',
											{ value: '6' },
											'Jun'
										),
										React.createElement(
											'option',
											{ value: '7' },
											'Jul'
										),
										React.createElement(
											'option',
											{ value: '8' },
											'Aug'
										),
										React.createElement(
											'option',
											{ value: '9' },
											'Sep'
										),
										React.createElement(
											'option',
											{ value: '10' },
											'Oct'
										),
										React.createElement(
											'option',
											{ value: '11' },
											'Nov'
										),
										React.createElement(
											'option',
											{ value: '12' },
											'Dec'
										)
									),
									React.createElement(
										'select',
										{
											value: this.state.birthDayText,
											onChange: this.handleInputChange,
											'aria-label': 'Day',
											name: 'birthday_day',
											id: 'day',
											title: 'Day',
											className: '_5dba' },
										React.createElement(
											'option',
											{ value: '0', selected: '1' },
											'Day'
										),
										React.createElement(
											'option',
											{ value: '1' },
											'1'
										),
										React.createElement(
											'option',
											{ value: '2' },
											'2'
										),
										React.createElement(
											'option',
											{ value: '3' },
											'3'
										),
										React.createElement(
											'option',
											{ value: '4' },
											'4'
										),
										React.createElement(
											'option',
											{ value: '5' },
											'5'
										),
										React.createElement(
											'option',
											{ value: '6' },
											'6'
										),
										React.createElement(
											'option',
											{ value: '7' },
											'7'
										),
										React.createElement(
											'option',
											{ value: '8' },
											'8'
										),
										React.createElement(
											'option',
											{ value: '9' },
											'9'
										),
										React.createElement(
											'option',
											{ value: '10' },
											'10'
										),
										React.createElement(
											'option',
											{ value: '11' },
											'11'
										),
										React.createElement(
											'option',
											{ value: '12' },
											'12'
										),
										React.createElement(
											'option',
											{ value: '13' },
											'13'
										),
										React.createElement(
											'option',
											{ value: '14' },
											'14'
										),
										React.createElement(
											'option',
											{ value: '15' },
											'15'
										),
										React.createElement(
											'option',
											{ value: '16' },
											'16'
										),
										React.createElement(
											'option',
											{ value: '17' },
											'17'
										),
										React.createElement(
											'option',
											{ value: '18' },
											'18'
										),
										React.createElement(
											'option',
											{ value: '19' },
											'19'
										),
										React.createElement(
											'option',
											{ value: '20' },
											'20'
										),
										React.createElement(
											'option',
											{ value: '21' },
											'21'
										),
										React.createElement(
											'option',
											{ value: '22' },
											'22'
										),
										React.createElement(
											'option',
											{ value: '23' },
											'23'
										),
										React.createElement(
											'option',
											{ value: '24' },
											'24'
										),
										React.createElement(
											'option',
											{ value: '25' },
											'25'
										),
										React.createElement(
											'option',
											{ value: '26' },
											'26'
										),
										React.createElement(
											'option',
											{ value: '27' },
											'27'
										),
										React.createElement(
											'option',
											{ value: '28' },
											'28'
										),
										React.createElement(
											'option',
											{ value: '29' },
											'29'
										),
										React.createElement(
											'option',
											{ value: '30' },
											'30'
										),
										React.createElement(
											'option',
											{ value: '31' },
											'31'
										)
									),
									React.createElement(
										'select',
										{
											value: this.state.birthYearText,
											onChange: this.handleInputChange,
											'aria-label': 'Year',
											name: 'birthday_year',
											id: 'year',
											title: 'Year',
											className: '_5dba' },
										React.createElement(
											'option',
											{ value: '0', selected: '1' },
											'Year'
										),
										React.createElement(
											'option',
											{ value: '2015' },
											'2015'
										),
										React.createElement(
											'option',
											{ value: '2014' },
											'2014'
										),
										React.createElement(
											'option',
											{ value: '2013' },
											'2013'
										),
										React.createElement(
											'option',
											{ value: '2012' },
											'2012'
										),
										React.createElement(
											'option',
											{ value: '2011' },
											'2011'
										),
										React.createElement(
											'option',
											{ value: '2010' },
											'2010'
										),
										React.createElement(
											'option',
											{ value: '2009' },
											'2009'
										),
										React.createElement(
											'option',
											{ value: '2008' },
											'2008'
										),
										React.createElement(
											'option',
											{ value: '2007' },
											'2007'
										),
										React.createElement(
											'option',
											{ value: '2006' },
											'2006'
										),
										React.createElement(
											'option',
											{ value: '2005' },
											'2005'
										),
										React.createElement(
											'option',
											{ value: '2004' },
											'2004'
										),
										React.createElement(
											'option',
											{ value: '2003' },
											'2003'
										),
										React.createElement(
											'option',
											{ value: '2002' },
											'2002'
										),
										React.createElement(
											'option',
											{ value: '2001' },
											'2001'
										),
										React.createElement(
											'option',
											{ value: '2000' },
											'2000'
										),
										React.createElement(
											'option',
											{ value: '1999' },
											'1999'
										),
										React.createElement(
											'option',
											{ value: '1998' },
											'1998'
										),
										React.createElement(
											'option',
											{ value: '1997' },
											'1997'
										),
										React.createElement(
											'option',
											{ value: '1996' },
											'1996'
										),
										React.createElement(
											'option',
											{ value: '1995' },
											'1995'
										),
										React.createElement(
											'option',
											{ value: '1994' },
											'1994'
										),
										React.createElement(
											'option',
											{ value: '1993' },
											'1993'
										),
										React.createElement(
											'option',
											{ value: '1992' },
											'1992'
										),
										React.createElement(
											'option',
											{ value: '1991' },
											'1991'
										),
										React.createElement(
											'option',
											{ value: '1990' },
											'1990'
										),
										React.createElement(
											'option',
											{ value: '1989' },
											'1989'
										),
										React.createElement(
											'option',
											{ value: '1988' },
											'1988'
										),
										React.createElement(
											'option',
											{ value: '1987' },
											'1987'
										),
										React.createElement(
											'option',
											{ value: '1986' },
											'1986'
										),
										React.createElement(
											'option',
											{ value: '1985' },
											'1985'
										),
										React.createElement(
											'option',
											{ value: '1984' },
											'1984'
										),
										React.createElement(
											'option',
											{ value: '1983' },
											'1983'
										),
										React.createElement(
											'option',
											{ value: '1982' },
											'1982'
										),
										React.createElement(
											'option',
											{ value: '1981' },
											'1981'
										),
										React.createElement(
											'option',
											{ value: '1980' },
											'1980'
										),
										React.createElement(
											'option',
											{ value: '1979' },
											'1979'
										),
										React.createElement(
											'option',
											{ value: '1978' },
											'1978'
										),
										React.createElement(
											'option',
											{ value: '1977' },
											'1977'
										),
										React.createElement(
											'option',
											{ value: '1976' },
											'1976'
										),
										React.createElement(
											'option',
											{ value: '1975' },
											'1975'
										),
										React.createElement(
											'option',
											{ value: '1974' },
											'1974'
										),
										React.createElement(
											'option',
											{ value: '1973' },
											'1973'
										),
										React.createElement(
											'option',
											{ value: '1972' },
											'1972'
										),
										React.createElement(
											'option',
											{ value: '1971' },
											'1971'
										),
										React.createElement(
											'option',
											{ value: '1970' },
											'1970'
										),
										React.createElement(
											'option',
											{ value: '1969' },
											'1969'
										),
										React.createElement(
											'option',
											{ value: '1968' },
											'1968'
										),
										React.createElement(
											'option',
											{ value: '1967' },
											'1967'
										),
										React.createElement(
											'option',
											{ value: '1966' },
											'1966'
										),
										React.createElement(
											'option',
											{ value: '1965' },
											'1965'
										),
										React.createElement(
											'option',
											{ value: '1964' },
											'1964'
										),
										React.createElement(
											'option',
											{ value: '1963' },
											'1963'
										),
										React.createElement(
											'option',
											{ value: '1962' },
											'1962'
										),
										React.createElement(
											'option',
											{ value: '1961' },
											'1961'
										),
										React.createElement(
											'option',
											{ value: '1960' },
											'1960'
										),
										React.createElement(
											'option',
											{ value: '1959' },
											'1959'
										),
										React.createElement(
											'option',
											{ value: '1958' },
											'1958'
										),
										React.createElement(
											'option',
											{ value: '1957' },
											'1957'
										),
										React.createElement(
											'option',
											{ value: '1956' },
											'1956'
										),
										React.createElement(
											'option',
											{ value: '1955' },
											'1955'
										),
										React.createElement(
											'option',
											{ value: '1954' },
											'1954'
										),
										React.createElement(
											'option',
											{ value: '1953' },
											'1953'
										),
										React.createElement(
											'option',
											{ value: '1952' },
											'1952'
										),
										React.createElement(
											'option',
											{ value: '1951' },
											'1951'
										),
										React.createElement(
											'option',
											{ value: '1950' },
											'1950'
										),
										React.createElement(
											'option',
											{ value: '1949' },
											'1949'
										),
										React.createElement(
											'option',
											{ value: '1948' },
											'1948'
										),
										React.createElement(
											'option',
											{ value: '1947' },
											'1947'
										),
										React.createElement(
											'option',
											{ value: '1946' },
											'1946'
										),
										React.createElement(
											'option',
											{ value: '1945' },
											'1945'
										),
										React.createElement(
											'option',
											{ value: '1944' },
											'1944'
										),
										React.createElement(
											'option',
											{ value: '1943' },
											'1943'
										),
										React.createElement(
											'option',
											{ value: '1942' },
											'1942'
										),
										React.createElement(
											'option',
											{ value: '1941' },
											'1941'
										),
										React.createElement(
											'option',
											{ value: '1940' },
											'1940'
										),
										React.createElement(
											'option',
											{ value: '1939' },
											'1939'
										),
										React.createElement(
											'option',
											{ value: '1938' },
											'1938'
										),
										React.createElement(
											'option',
											{ value: '1937' },
											'1937'
										),
										React.createElement(
											'option',
											{ value: '1936' },
											'1936'
										),
										React.createElement(
											'option',
											{ value: '1935' },
											'1935'
										),
										React.createElement(
											'option',
											{ value: '1934' },
											'1934'
										),
										React.createElement(
											'option',
											{ value: '1933' },
											'1933'
										),
										React.createElement(
											'option',
											{ value: '1932' },
											'1932'
										),
										React.createElement(
											'option',
											{ value: '1931' },
											'1931'
										),
										React.createElement(
											'option',
											{ value: '1930' },
											'1930'
										),
										React.createElement(
											'option',
											{ value: '1929' },
											'1929'
										),
										React.createElement(
											'option',
											{ value: '1928' },
											'1928'
										),
										React.createElement(
											'option',
											{ value: '1927' },
											'1927'
										),
										React.createElement(
											'option',
											{ value: '1926' },
											'1926'
										),
										React.createElement(
											'option',
											{ value: '1925' },
											'1925'
										),
										React.createElement(
											'option',
											{ value: '1924' },
											'1924'
										),
										React.createElement(
											'option',
											{ value: '1923' },
											'1923'
										),
										React.createElement(
											'option',
											{ value: '1922' },
											'1922'
										),
										React.createElement(
											'option',
											{ value: '1921' },
											'1921'
										),
										React.createElement(
											'option',
											{ value: '1920' },
											'1920'
										),
										React.createElement(
											'option',
											{ value: '1919' },
											'1919'
										),
										React.createElement(
											'option',
											{ value: '1918' },
											'1918'
										),
										React.createElement(
											'option',
											{ value: '1917' },
											'1917'
										),
										React.createElement(
											'option',
											{ value: '1916' },
											'1916'
										),
										React.createElement(
											'option',
											{ value: '1915' },
											'1915'
										),
										React.createElement(
											'option',
											{ value: '1914' },
											'1914'
										),
										React.createElement(
											'option',
											{ value: '1913' },
											'1913'
										),
										React.createElement(
											'option',
											{ value: '1912' },
											'1912'
										),
										React.createElement(
											'option',
											{ value: '1911' },
											'1911'
										),
										React.createElement(
											'option',
											{ value: '1910' },
											'1910'
										),
										React.createElement(
											'option',
											{ value: '1909' },
											'1909'
										),
										React.createElement(
											'option',
											{ value: '1908' },
											'1908'
										),
										React.createElement(
											'option',
											{ value: '1907' },
											'1907'
										),
										React.createElement(
											'option',
											{ value: '1906' },
											'1906'
										),
										React.createElement(
											'option',
											{ value: '1905' },
											'1905'
										)
									)
								)
							)
						)
					),
					React.createElement(
						'div',
						{ className: 'mtm _5wa2 _5dbb', id: 'u_0_p' },
						React.createElement(
							'span',
							{ className: '_5k_3', 'data-type': 'radio', 'data-name': 'gender_wrapper', id: 'u_0_q' },
							React.createElement(
								'span',
								{ className: '_5k_2 _5dba' },
								React.createElement('input', {
									required: true,
									onClick: this.handleInputChange,
									type: 'radio',
									name: 'sex',
									value: '1',
									id: 'pickedFemale' }),
								React.createElement(
									'label',
									{ className: '_58mt', htmlFor: 'u_0_n' },
									'Female'
								)
							),
							React.createElement(
								'span',
								{ className: '_5k_2 _5dba' },
								React.createElement('input', {
									required: true,
									onClick: this.handleInputChange,
									type: 'radio',
									name: 'sex',
									value: '2',
									id: 'pickedMale' }),
								React.createElement(
									'label',
									{ className: '_58mt', htmlFor: 'u_0_o' },
									'Male'
								)
							)
						),
						React.createElement('i', { className: '_5dbc _5k_6 img sp_7XMX65Pq0E7 sx_ee768b' }),
						React.createElement('i', { className: '_5dbd _5k_7 img sp_7XMX65Pq0E7 sx_067138' })
					),
					React.createElement(
						'div',
						null,
						React.createElement(
							'button',
							{
								onClick: this.handleClick,
								id: 'LogInBtn',
								className: 'btn btn-primary btn-lg active' },
							'Sign Up'
						)
					)
				)
			);
		},
	
		// event handlers
		handleInputChange: function (event) {
			if (event.target.id === "firstNameField") {
				this.setState({ firstNameText: event.target.value });
			} else if (event.target.id === "lastNameField") {
				this.setState({ lastNameText: event.target.value });
			} else if (event.target.id === "emailField") {
				this.setState({ emailText: event.target.value });
			} else if (event.target.id === "passwordField") {
				this.setState({ passwordText: event.target.value });
			} else if (event.target.id === "wish1Field") {
				this.setState({ wish1: event.target.value });
			} else if (event.target.id === "wish2Field") {
				this.setState({ wish2: event.target.value });
			} else if (event.target.id === "wish3Field") {
				this.setState({ wish3: event.target.value });
			} else if (event.target.id === "month") {
				this.setState({ birthMonthText: event.target.value });
			} else if (event.target.id === "day") {
				this.setState({ birthDayText: event.target.value });
			} else if (event.target.id === "year") {
				this.setState({ birthYearText: event.target.value });
			} else if (event.target.id === "pickedFemale") {
				this.setState({ genderText: "Female" });
			} else if (event.target.id === "pickedMale") {
				this.setState({ genderText: "Male" });
			} else if (event.target.id === "profilePicField") {
				this.setState({ profilePic: event.target.value });
			}
		},
	
		handleClick: function () {
			//----- Send value of text input to Mongo------//
	
			// prevent default browser submit
			event.preventDefault();
			// get data from form
			var username = this.state.emailText;
			var password = this.state.passwordText;
			var firstName = this.state.firstNameText;
			var lastName = this.state.lastNameText;
			var wish1 = this.state.wish1;
			var wish2 = this.state.wish2;
			var wish3 = this.state.wish3;
			var bdMonth = this.state.birthMonthText;
			var bdDay = this.state.birthDayText;
			var bdYear = this.state.birthYearText;
			var gender = this.state.genderText;
			var profilePic = this.state.profilePic;
	
			console.log("username %s", username);
			console.log("password %s", password);
			console.log("FN %s", firstName);
			console.log("LN %s", lastName);
			console.log("wish1 %s", wish1);
			console.log("wish2 %s", wish2);
			console.log("wish3 %s", wish3);
			console.log("BDM %s", bdMonth);
			console.log("BDD %s", bdDay);
			console.log("BDDY %s", bdYear);
			console.log("gender %s", gender);
			console.log("profilePic %s", profilePic);
	
			if (!username || !password || !firstName || !lastName || !wish1 || !wish2 || !wish3 || !bdMonth || !bdDay || !bdYear || !gender || !profilePic) {
				// $("#errorDiv").html("<font size=15px color=red>Please Fill out all items!</font>");
				alert("Please Fill out all items!");
				return;
			}
	
			// login via API
			auth.register(firstName, lastName, username, password, wish1, wish2, wish3, bdMonth, bdDay, bdYear, gender, profilePic, (function (loggedIn) {
				// login callback
				if (!loggedIn) {
					this.setState({ error: true });
					console.log("failed");
					$("#errorDiv").html("<font size=15px color=red>User already exists!</font>");
				} else {
					console.log("worked");
					this.context.history.pushState(null, '/mainAppWin');
				}
			}).bind(this));
		}
	});
	
	module.exports = SignUp;

/***/ },
/* 3 */
/***/ function(module, exports) {

	// authentication object
	var auth = {
	    register: function (firstName, lastName, username, password, wish1, wish2, wish3, bdMonth, bdDay, bdYear, gender, profilePic, cb) {
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
	            success: (function (res) {
	                console.log("found");
	                localStorage.token = res.token;
	                localStorage.username = username;
	                localStorage.name = res.name;
	                localStorage.colorScheme = "WHITE";
	                if (cb) cb(true);
	                this.onChange(true);
	            }).bind(this),
	            error: (function (status, err) {
	                console.log("not found");
	                // if there is an error, remove any login token
	                delete localStorage.token;
	                if (cb) cb(false);
	                this.onChange(false);
	            }).bind(this)
	        });
	    },
	    // login the user
	    login: function (username, password, cb) {
	        // submit login request to server, call callback when complete
	        cb = arguments[arguments.length - 1];
	        // check if token in local storage
	        if (localStorage.token) {
	            console.log("in token");
	            if (cb) {
	                console.log("in cb");
	                cb(true);
	            }
	            console.log("before on change");
	            this.onChange(true);
	            return;
	        }
	        console.log("Sending request to server");
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
	            success: (function (res) {
	                console.log("it worked");
	                // on success, store a login token
	                localStorage.token = res.token;
	                console.log("saving %s", username);
	                localStorage.username = username;
	                localStorage.name = res.name;
	                console.log("saving color scheme %s", res.colorScheme);
	                localStorage.colorScheme = res.colorScheme;
	                console.log("name is %s", localStorage.name);
	                if (cb) cb(true);
	                this.onChange(true);
	            }).bind(this),
	            error: (function (xhr, status, err) {
	                console.log("did not work");
	                // if there is an error, remove any login token
	                delete localStorage.token;
	                if (cb) cb(false);
	                this.onChange(false);
	            }).bind(this)
	        });
	    },
	    // get the token from local storage
	    getToken: function () {
	        return localStorage.token;
	    },
	    // get the name from local storage
	    getName: function () {
	        return localStorage.name;
	    },
	    // get the username from local storage
	    getUsername: function () {
	        return localStorage.username;
	    },
	    // logout the user, call the callback when complete
	    logout: function (cb) {
	        delete localStorage.token;
	        if (cb) cb();
	        this.onChange(false);
	    },
	    // check if user is logged in
	    loggedIn: function () {
	        return !!localStorage.token;
	    },
	    getColorScheme: function () {
	        return localStorage.colorScheme;
	    },
	    setColorScheme: function (newVal) {
	        localStorage.colorScheme = newVal;
	    },
	    // default onChange function
	    onChange: function () {}
	};
	
	module.exports = auth;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var Link = ReactRouter.Link;
	var Router = ReactRouter;
	var History = ReactRouter.History;
	var auth = __webpack_require__(3);
	
	var App = React.createClass({
	  displayName: 'App',
	
	  mixins: [History],
	  // context so the component can access the router
	  //contextTypes: {
	  //    history: React.PropTypes.object.isRequired
	  //},
	
	  getInitialState: function () {
	    return {
	      emailText: '',
	      passwordText: '',
	      error: false
	    };
	  },
	
	  render: function () {
	    return React.createElement(
	      'div',
	      { className: 'container-fluid', id: 'Home' },
	      React.createElement(
	        'div',
	        { id: 'mainText' },
	        React.createElement(
	          'div',
	          { id: 'key_phrase' },
	          'Make your wishes come true'
	        ),
	        React.createElement(
	          'div',
	          { id: 'firstSuppPhrase' },
	          'Genie Lamp allows you to make wishes'
	        ),
	        React.createElement(
	          'div',
	          { id: 'firstSuppPhrase' },
	          'And have you friends GRANT them'
	        ),
	        React.createElement(
	          'div',
	          { id: 'secondSuppPhrase' },
	          'Join NOW!'
	        )
	      ),
	      React.createElement(
	        'form',
	        { id: 'mainForm', className: 'form-horizontal' },
	        React.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '../bootstrap/css/custom.css' }),
	        React.createElement(
	          'div',
	          { className: 'form-group' },
	          React.createElement(
	            'label',
	            { id: 'emailLabel', htmlFor: 'inputEmail3', className: 'col-sm-2 control-label' },
	            'Email'
	          ),
	          React.createElement(
	            'div',
	            { className: 'col-sm-10' },
	            React.createElement('input', {
	              value: this.state.emailText,
	              onChange: this.handleInputChange,
	              type: 'email',
	              className: 'form-control',
	              id: 'inputEmail3',
	              placeholder: 'Email' })
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'form-group' },
	          React.createElement(
	            'label',
	            { id: 'passwordLabel', htmlFor: 'inputPassword3', className: 'col-sm-2 control-label' },
	            'Password'
	          ),
	          React.createElement(
	            'div',
	            { className: 'col-sm-10' },
	            React.createElement('input', {
	              value: this.state.passwordText,
	              onChange: this.handleInputChange,
	              type: 'password',
	              className: 'form-control',
	              id: 'inputPassword3',
	              placeholder: 'Password' })
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'form-group' },
	          React.createElement(
	            'div',
	            { className: 'col-sm-10' },
	            React.createElement(
	              'button',
	              {
	                onClick: this.handleClick,
	                id: 'LogInBtn',
	                className: 'btn btn-primary btn-lg active' },
	              'Log In'
	            ),
	            React.createElement(
	              Link,
	              { to: '/SignUp' },
	              React.createElement(
	                'button',
	                { id: 'SignUpBtn', className: 'btn btn-primary btn-lg active' },
	                'Sign Up'
	              )
	            )
	          )
	        )
	      )
	    );
	  },
	
	  // event handlers
	  handleInputChange: function (event) {
	    if (event.target.id === "inputPassword3") {
	      this.setState({ passwordText: event.target.value });
	    } else if (event.target.id === "inputEmail3") {
	      this.setState({ emailText: event.target.value });
	    }
	  },
	
	  handleClick: function () {
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
	    auth.login(username, password, (function (loggedIn) {
	      // login callback
	      if (!loggedIn) {
	        console.log("failed");
	        return this.setState({
	          error: true
	        });
	      } else {
	        console.log("succeeded");
	        this.history.pushState(null, '/mainAppWin');
	        //this.context.history.pushState(null, '/mainAppWin');
	      }
	    }).bind(this));
	  }
	});
	
	module.exports = App;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var Link = ReactRouter.Link;
	var api = __webpack_require__(6);
	var auth = __webpack_require__(3);
	
	var Profile = React.createClass({
		displayName: 'Profile',
	
		// context so the component can access the router
		contextTypes: {
			history: React.PropTypes.object.isRequired
		},
	
		getInitialState: function () {
			return {
				items: '',
				error: false
			};
		},
	
		listSet: function (status, data) {
			if (status) {
				// set the state for the list of items
				console.log("data %s", data);
				this.setState({
					items: data
				});
				console.log(this.state.items);
				api.setwish1ID(this.state.items.wish1ID);
				api.setwish2ID(this.state.items.wish2ID);
				api.setwish3ID(this.state.items.wish3ID);
			} else {
				this.context.history.pushState(null, '/mainAppWin');
			}
		},
	
		componentWillMount: function () {
			var username = auth.getUsername();
			api.getItems(username, "/profile/get/", this.listSet);
		},
	
		render: function () {
			return React.createElement(
				'div',
				{ className: 'container' },
				React.createElement(
					'div',
					{ className: 'row' },
					React.createElement(
						'div',
						{ className: 'col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xs-offset-0 col-sm-offset-0 col-md-offset-3 col-lg-offset-3 toppad' },
						React.createElement(
							'div',
							{ className: 'panel panel-info' },
							React.createElement(
								'div',
								{ className: 'panel-heading' },
								React.createElement(
									'h3',
									{ className: 'panel-title', id: 'fullNameField' },
									this.state.items.firstName + " " + this.state.items.lastName
								)
							),
							React.createElement(
								'div',
								{ className: 'panel-body' },
								React.createElement(
									'div',
									{ className: 'row' },
									React.createElement(
										'div',
										{ className: 'col-md-3 col-lg-3 ', align: 'center' },
										React.createElement('img', { alt: 'User Pic', value: this.state.items.profilePic, id: 'picLinkField', src: this.state.items.profilePic, className: 'img-circle img-responsive' })
									),
									React.createElement(
										'div',
										{ className: ' col-md-9 col-lg-9 ' },
										React.createElement(
											'table',
											{ className: 'table table-user-information', id: 'profileInfo' },
											React.createElement(
												'tbody',
												null,
												React.createElement(
													'tr',
													null,
													React.createElement(
														'td',
														null,
														'Email:'
													),
													React.createElement(
														'td',
														{ id: 'emailField' },
														this.state.items.username
													)
												),
												React.createElement(
													'tr',
													null,
													React.createElement(
														'td',
														null,
														'Date of Birth:'
													),
													React.createElement(
														'td',
														{ id: 'dobField' },
														this.state.items.bdMonth + "/" + this.state.items.bdDay + "/" + this.state.items.bdYear
													)
												),
												React.createElement(
													'tr',
													null,
													React.createElement(
														'tr',
														null,
														React.createElement(
															'td',
															null,
															'Gender:'
														),
														React.createElement(
															'td',
															{ id: 'genderField' },
															this.state.items.gender
														)
													),
													React.createElement(
														'tr',
														null,
														React.createElement(
															'td',
															null,
															'Wish 1:'
														),
														React.createElement(
															'td',
															{ id: 'wish1Field' },
															this.state.items.wish1
														)
													),
													React.createElement(
														'tr',
														null,
														React.createElement(
															'td',
															null,
															'Wish 2:'
														),
														React.createElement(
															'td',
															{ id: 'wish2Field' },
															this.state.items.wish2
														)
													),
													React.createElement(
														'tr',
														null,
														React.createElement(
															'td',
															null,
															'Wish 3:'
														),
														React.createElement(
															'td',
															{ id: 'wish3Field' },
															this.state.items.wish3
														)
													)
												)
											)
										),
										React.createElement(
											'a',
											{
												onClick: this.handleClick,
												className: 'btn btn-primary',
												id: 'button1' },
											'Edit Wish List Items'
										)
									)
								)
							)
						)
					)
				)
			);
		},
	
		handleClick: function () {
			this.context.history.pushState(null, '/updateWishList');
		}
	
	});
	
	module.exports = Profile;

/***/ },
/* 6 */
/***/ function(module, exports) {

	// API object
	var api = {
	    // get the list of items, call the callback when complete
	    getItems: function (username, path, cb) {
	        var url = path + username;
	        $.ajax({
	            url: url,
	            dataType: 'json',
	            type: 'GET',
	            headers: { 'Authorization': localStorage.token },
	            success: function (res) {
	                if (cb) cb(true, res);
	            },
	            error: function (xhr, status, err) {
	                // if there is an error, remove the login token
	                //delete localStorage.token;
	                if (cb) cb(false, status);
	            }
	        });
	    },
	    // get the list of items, call the callback when complete
	    getFriendItems: function (username, friendUsername, path, cb) {
	        console.log("i am %s and she is %s", username, friendUsername);
	        var url = path + username;
	        $.ajax({
	            url: url,
	            dataType: 'json',
	            type: 'POST',
	            data: {
	                friendUsername: friendUsername
	            },
	            headers: { 'Authorization': localStorage.token },
	            success: function (res) {
	                if (cb) cb(true, res);
	            },
	            error: function (xhr, status, err) {
	                // if there is an error, remove the login token
	                //delete localStorage.token;
	                if (cb) cb(false, status);
	            }
	        });
	    },
	    // add an item, call the callback when complete
	    addItem: function (username, friendUsername, cb) {
	        var url = "/friend/add/" + username;
	        console.log(localStorage.token);
	        $.ajax({
	            url: url,
	            contentType: 'application/json',
	            data: JSON.stringify({
	                item: {
	                    friendUsername: friendUsername
	                }
	            }),
	            type: 'POST',
	            headers: { 'Authorization': localStorage.token },
	            success: function (res) {
	                if (cb) cb(true, res);
	            },
	            error: function (xhr, status, err) {
	                // if there is an error, remove the login token
	                //delete localStorage.token;
	                if (cb) cb(false, status);
	            }
	        });
	    },
	    // update an item, call the callback when complete
	    updateItem: function (username, itemID, itemDescr, cb) {
	        console.log("in function update username is %s", username);
	        var url = "/item/update/" + username;
	        $.ajax({
	            url: url,
	            contentType: 'application/json',
	            data: JSON.stringify({
	                item: {
	                    _id: itemID,
	                    description: itemDescr
	                }
	            }),
	            type: 'PUT',
	            headers: { 'Authorization': localStorage.token },
	            success: function (res) {
	                if (cb) cb(true, res);
	            },
	            error: function (xhr, status, err) {
	                // if there is any error, remove any login token
	                // delete localStorage.token;
	                if (cb) cb(false, status);
	            }
	        });
	    },
	    // reserve an item by a user, call the callback when complete
	    reserveItem: function (itemID, username, cb) {
	        console.log("in reserve item id is %s and username is %s", itemID, username);
	        console.log(localStorage.token);
	        var url = "/item/reserve/" + username;
	        $.ajax({
	            url: url,
	            dataType: 'json',
	            data: {
	                itemID: itemID
	            },
	            type: 'PUT',
	            headers: { 'Authorization': localStorage.token },
	            success: function (res) {
	                if (cb) cb(true, res);
	            },
	            error: function (xhr, status, err) {
	                // if there is any error, remove any login token
	                // delete localStorage.token;
	                if (cb) cb(false, status);
	            }
	        });
	    },
	
	    // delete an item, call the callback when complete
	    deleteItem: function (route, username, friendUsername, cb) {
	        var url = route + username;
	        $.ajax({
	            url: url,
	            type: 'DELETE',
	            data: {
	                friendUsername: friendUsername
	            },
	            headers: { 'Authorization': localStorage.token },
	            success: function (res) {
	                if (cb) cb(true, res);
	            },
	            error: function (xhr, status, err) {
	                if (cb) cb(false, status);
	            }
	        });
	    },
	
	    // changes the color scheme of the navbar
	    changeColor: function (username, color, cb) {
	        var url = '/profile/updateColor/' + username;
	        $.ajax({
	            url: url,
	            type: 'PUT',
	            data: {
	                colorScheme: color
	            },
	            headers: { 'Authorization': localStorage.token },
	            success: function (res) {
	                if (cb) cb(true);
	            },
	            error: function (xhr, status, err) {
	                if (cb) cb(false);
	            }
	        });
	    },
	
	    // handles sending email in the contact us form
	    sendEmail: function (username, senderEmail, subjectLine, message, cb) {
	        var url = '/contactUs/sendEmail/' + username;
	        $.ajax({
	            url: url,
	            type: 'POST',
	            data: {
	                senderEmail: senderEmail,
	                subjectLine: subjectLine,
	                message: message
	            },
	            headers: { 'Authorization': localStorage.token },
	            success: function (res) {
	                if (cb) cb(true);
	            },
	            error: function (xhr, status, err) {
	                if (cb) cb(false);
	            }
	        });
	    },
	
	    getwish1ID: function () {
	        return localStorage.wish1ID;
	    },
	
	    setwish1ID: function (newID) {
	        localStorage.wish1ID = newID;
	    },
	
	    getwish2ID: function () {
	        return localStorage.wish2ID;
	    },
	
	    setwish2ID: function (newID) {
	        localStorage.wish2ID = newID;
	    },
	
	    getwish3ID: function () {
	        return localStorage.wish3ID;
	    },
	
	    setwish3ID: function (newID) {
	        localStorage.wish3ID = newID;
	    },
	
	    setFriendUsername: function (newUserName) {
	        localStorage.friendUsername = newUserName;
	    },
	
	    getFriendUsername: function () {
	        return localStorage.friendUsername;
	    }
	
	};
	
	module.exports = api;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var auth = __webpack_require__(3);
	var api = __webpack_require__(6);
	
	var addFriend = React.createClass({
	  displayName: 'addFriend',
	
	  // context so the component can access the router
	  contextTypes: {
	    router: React.PropTypes.func
	  },
	
	  getInitialState: function () {
	    return {
	      friendUsername: '',
	      error: false
	    };
	  },
	
	  render: function () {
	    return React.createElement(
	      'div',
	      { className: 'form-group' },
	      React.createElement(
	        'label',
	        { id: 'friendUsrName', htmlFor: 'inputEmail3', className: 'col-sm-2 control-label' },
	        'Friend Username'
	      ),
	      React.createElement(
	        'div',
	        { className: 'col-sm-10' },
	        React.createElement('input', {
	          value: this.state.friendUsername,
	          onChange: this.handleInputChange,
	          type: 'email',
	          className: 'form-control',
	          id: 'inputEmail3',
	          placeholder: 'Email' }),
	        React.createElement(
	          'button',
	          {
	            id: 'AddBtn',
	            onClick: this.handleClick,
	            className: 'btn btn-primary btn-lg active' },
	          'Add Friend'
	        )
	      ),
	      React.createElement('div', { id: 'message' })
	    );
	  },
	
	  handleInputChange: function (event) {
	    if (event.target.id === "inputEmail3") {
	      this.setState({ friendUsername: event.target.value });
	    }
	  },
	
	  handleClick: function () {
	    // prevent default browser submit
	    event.preventDefault();
	    // get data from form
	    var username = auth.getUsername();
	    var friendUsername = this.state.friendUsername;
	
	    if (!username || !friendUsername) {
	      return;
	    }
	    console.log("username is %s", username);
	    console.log("friend username is %s", friendUsername);
	    // login via API
	    api.addItem(username, friendUsername, (function (addedFriend, friendUserName) {
	      // login callback
	      if (!addedFriend) {
	        $("#message").html("<font size=25px color=WHITE>Friend Not Found or already exists in your friend list!</font>");
	        return this.setState({
	          error: true
	        });
	      } else $("#message").html("<font size=25px color=WHITE>Friend Added!</font>");
	    }).bind(this));
	  }
	});
	
	module.exports = addFriend;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var auth = __webpack_require__(3);
	var api = __webpack_require__(6);
	
	var removeFriend = React.createClass({
	  displayName: 'removeFriend',
	
	  // context so the component can access the router
	  contextTypes: {
	    router: React.PropTypes.func
	  },
	
	  getInitialState: function () {
	    return {
	      friendUsername: '',
	      error: false
	    };
	  },
	
	  render: function () {
	    return React.createElement(
	      'div',
	      { className: 'input-group' },
	      React.createElement('input', {
	        value: this.state.friendUsername,
	        onChange: this.handleInputChange,
	        type: 'text',
	        className: 'form-control' }),
	      React.createElement(
	        'span',
	        { className: 'input-groupt-btn' },
	        React.createElement(
	          'button',
	          {
	            onClick: this.handleClick,
	            id: 'removeFriendBtn',
	            className: 'btn btn-default',
	            type: 'button' },
	          'Remove Friend'
	        )
	      ),
	      React.createElement('div', { id: 'message' })
	    );
	  },
	
	  handleInputChange: function (event) {
	    this.setState({ friendUsername: event.target.value });
	  },
	
	  handleClick: function () {
	    // prevent default browser submit
	    event.preventDefault();
	    // get data from form
	    var username = auth.getUsername();
	    var friendUsername = this.state.friendUsername;
	
	    if (!username || !friendUsername) {
	      return;
	    }
	    console.log("username is %s", username);
	    console.log("friend is %s", friendUsername);
	    // login via API
	    api.deleteItem("/friend/remove/", username, friendUsername, (function (removeFriend) {
	      // login callback
	      if (!removeFriend) {
	        $("#message").html("<font size=25px color=WHITE>Friend Does not exist or is not your friend</font>");
	        console.log("failed on remove friend");
	        return this.setState({
	          error: true
	        });
	      } else $("#message").html("<font size=25px color=WHITE>Friend Removed</font>");
	    }).bind(this));
	  }
	});
	
	module.exports = removeFriend;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var Link = ReactRouter.Link;
	var History = ReactRouter.History;
	var auth = __webpack_require__(3);
	
	var mainAppWin = React.createClass({
	  displayName: 'mainAppWin',
	
	  mixins: [History],
	  // context so the component can access the router
	  //contextTypes: {
	  //    history: React.PropTypes.object.isRequired
	  //},
	
	  getInitialState: function () {
	    return {
	      emailText: '',
	      passwordText: '',
	      error: false
	    };
	  },
	
	  render: function () {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'nav',
	        { className: 'navbar navbar-default', role: 'navigation', id: 'mainPage', style: { "background-color": auth.getColorScheme() } },
	        React.createElement(
	          'div',
	          { className: 'container' },
	          React.createElement(
	            'div',
	            { className: 'navbar-header' },
	            React.createElement(
	              'button',
	              { type: 'button', className: 'navbar-toggle', 'data-toggle': 'collapse' },
	              React.createElement(
	                'span',
	                { className: 'sr-only' },
	                'Toggle navigation'
	              ),
	              React.createElement('span', { className: 'icon-bar' }),
	              React.createElement('span', { className: 'icon-bar' }),
	              React.createElement('span', { className: 'icon-bar' })
	            ),
	            React.createElement(
	              'a',
	              { className: 'navbar-brand', href: '/#/mainAppWin' },
	              'Genie Lamp'
	            )
	          ),
	          React.createElement(
	            'div',
	            { className: 'collapse navbar-collapse' },
	            React.createElement(
	              'ul',
	              { className: 'nav navbar-nav' },
	              React.createElement(
	                'li',
	                null,
	                React.createElement(
	                  Link,
	                  { to: 'Profile' },
	                  'Profile'
	                )
	              ),
	              React.createElement(
	                'li',
	                { role: 'presentation', className: 'dropdown' },
	                React.createElement(
	                  'a',
	                  { className: 'dropdown-toggle', href: 'mainAppWin', 'data-toggle': 'dropdown', 'aria-haspopup': 'true', 'aria-expanded': 'false' },
	                  'Friends',
	                  React.createElement('span', { className: 'caret' })
	                ),
	                React.createElement(
	                  'ul',
	                  { className: 'dropdown-menu' },
	                  React.createElement(
	                    'li',
	                    null,
	                    React.createElement(
	                      Link,
	                      { to: 'addFriend' },
	                      'Add Friend'
	                    )
	                  ),
	                  React.createElement(
	                    'li',
	                    null,
	                    React.createElement(
	                      Link,
	                      { to: 'removeFriend' },
	                      'Remove Friend'
	                    )
	                  ),
	                  React.createElement(
	                    'li',
	                    null,
	                    React.createElement(
	                      Link,
	                      { to: 'viewFriends' },
	                      'View Friends'
	                    )
	                  )
	                )
	              )
	            ),
	            React.createElement(
	              'ul',
	              { className: 'nav navbar-nav navbar-right' },
	              React.createElement(
	                'li',
	                null,
	                React.createElement(
	                  'a',
	                  { href: '/#/mainAppWin' },
	                  'Hello ',
	                  auth.getName()
	                )
	              ),
	              React.createElement(
	                'li',
	                null,
	                React.createElement(
	                  'a',
	                  {
	                    href: '#',
	                    onClick: this.handleClick,
	                    id: 'LogOutBtn' },
	                  'Log Out'
	                )
	              ),
	              React.createElement(
	                'li',
	                null,
	                React.createElement(
	                  Link,
	                  { to: 'contactUs' },
	                  'Contact Us'
	                )
	              ),
	              React.createElement(
	                'li',
	                null,
	                React.createElement(
	                  Link,
	                  { to: 'deleteAccount' },
	                  'Delete Account'
	                )
	              ),
	              React.createElement(
	                'li',
	                null,
	                React.createElement(
	                  Link,
	                  { to: 'navBarSettings' },
	                  'Settings'
	                )
	              )
	            )
	          )
	        )
	      ),
	      React.createElement(
	        'div',
	        { className: 'detail' },
	        this.props.children
	      )
	    );
	  },
	
	  handleClick: function () {
	    auth.logout();
	    this.history.pushState(null, '/');
	  }
	
	});
	
	module.exports = mainAppWin;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var api = __webpack_require__(6);
	var auth = __webpack_require__(3);
	
	var updateWishList = React.createClass({
		displayName: 'updateWishList',
	
		// context so the component can access the router
		contextTypes: {
			history: React.PropTypes.object.isRequired
		},
	
		getInitialState: function () {
			return {
				wish1: '',
				wish2: '',
				wish3: '',
				error: false
			};
		},
	
		render: function () {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'div',
					{ className: 'uwl' },
					React.createElement(
						'div',
						{ className: '_5dbb', id: 'u_0_j' },
						React.createElement(
							'div',
							{ className: 'uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput' },
							React.createElement(
								'div',
								{ className: 'placeholder', 'aria-hidden': 'true' },
								'First Wish'
							),
							React.createElement('input', {
								required: true,
								value: this.state.wish1,
								onChange: this.handleInputChange,
								type: 'text',
								className: 'inputtext _58mg _5dba _2ph-',
								'data-type': 'text',
								name: 'reg_first_wish__',
								'aria-required': '1',
								placeholder: '',
								id: 'wish1Field', 'aria-label': 'First Wish' })
						),
						React.createElement('i', { className: '_5dbc img sp_7XMX65Pq0E7 sx_ee768b' }),
						React.createElement('i', { className: '_5dbd img sp_7XMX65Pq0E7 sx_067138' })
					)
				),
				React.createElement(
					'div',
					{ className: 'mbm' },
					React.createElement(
						'div',
						{ className: '_5dbb', id: 'u_0_j' },
						React.createElement(
							'div',
							{ className: 'uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput' },
							React.createElement(
								'div',
								{ className: 'placeholder', 'aria-hidden': 'true' },
								'Second Wish'
							),
							React.createElement('input', {
								required: true,
								value: this.state.wish2,
								onChange: this.handleInputChange,
								type: 'text',
								className: 'inputtext _58mg _5dba _2ph-',
								'data-type': 'text',
								name: 'reg_second_wish__',
								'aria-required': '1',
								placeholder: '',
								id: 'wish2Field',
								'aria-label': 'second wish' })
						),
						React.createElement('i', { className: '_5dbc img sp_7XMX65Pq0E7 sx_ee768b' }),
						React.createElement('i', { className: '_5dbd img sp_7XMX65Pq0E7 sx_067138' })
					)
				),
				React.createElement(
					'div',
					{ className: 'mbm' },
					React.createElement(
						'div',
						{ className: '_5dbb', id: 'u_0_j' },
						React.createElement(
							'div',
							{ className: 'uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput' },
							React.createElement(
								'div',
								{ className: 'placeholder', 'aria-hidden': 'true' },
								'Third Wish'
							),
							React.createElement('input', {
								required: true,
								value: this.state.wish3,
								onChange: this.handleInputChange,
								type: 'text',
								className: 'inputtext _58mg _5dba _2ph-',
								'data-type': 'text',
								name: 'reg_third_wish__',
								'aria-required': '1',
								placeholder: '',
								id: 'wish3Field',
								'aria-label': 'third wish' })
						),
						React.createElement('i', { className: '_5dbc img sp_7XMX65Pq0E7 sx_ee768b' }),
						React.createElement('i', { className: '_5dbd img sp_7XMX65Pq0E7 sx_067138' })
					)
				),
				React.createElement(
					'button',
					{
						onClick: this.handleClick,
						id: 'UpdateWishListBtn',
						className: 'btn btn-primary btn-lg active' },
					'Update Wish List'
				)
			);
		},
	
		// event handlers
		handleInputChange: function (event) {
			if (event.target.id === "wish1Field") {
				this.setState({ wish1: event.target.value });
			} else if (event.target.id === "wish2Field") {
				this.setState({ wish2: event.target.value });
			} else if (event.target.id === "wish3Field") {
				this.setState({ wish3: event.target.value });
			}
		},
	
		handleClick: function () {
			// prevent default browser submit
			event.preventDefault();
			// get data from form
			var wish1 = this.state.wish1;
			var wish2 = this.state.wish2;
			var wish3 = this.state.wish3;
			if (!wish1 || !wish2 || !wish3) {
				return;
			}
			console.log("username is %s", auth.getUsername());
			var username = auth.getUsername();
			// update the wishes
			api.updateItem(username, api.getwish1ID(), this.state.wish1, (function (updatedWish) {
				// login callback
				if (!updatedWish) {
					console.log("failed on wish 1");
					return this.setState({
						error: true
					});
				} else console.log("finished first wish");
			}).bind(this));
	
			api.updateItem(username, api.getwish2ID(), this.state.wish2, (function (updatedWish) {
				// login callback
				if (!updatedWish) {
					console.log("failed on wish 2");
					return this.setState({
						error: true
					});
				} else console.log("finished second wish");
			}).bind(this));
	
			api.updateItem(username, api.getwish3ID(), this.state.wish3, (function (updatedWish) {
				// login callback
				if (!updatedWish) {
					console.log("failed on wish 3");
					return this.setState({
						error: true
					});
				} else {
					console.log("finished third wish");
					this.context.history.pushState(null, '/profile');
				}
			}).bind(this));
		}
	
	});
	
	module.exports = updateWishList;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var api = __webpack_require__(6);
	var auth = __webpack_require__(3);
	
	var viewFriends = React.createClass({
		displayName: 'viewFriends',
	
		getInitialState: function () {
			return {
				items: [],
				error: false
			};
		},
	
		listSet: function (status, data) {
			console.log("getting to listSet");
			if (status) {
				// set the state for the list of items
				console.log("data %s", data);
				this.setState({
					items: data
				});
				console.log("items are %s", this.state.items[0]);
			} else {
				this.context.history.pushState(null, '/mainAppWin');
			}
		},
	
		reload: function () {
			console.log("getting to reload");
			var username = auth.getUsername();
			console.log("username is %s", username);
			api.getItems(username, "/friend/viewFriends/", this.listSet);
		},
	
		componentWillMount: function () {
			this.reload();
		},
	
		render: function () {
			if (this.state.items.length != 0) {
				return React.createElement(ListItems, { items: this.state.items, reload: this.reload });
			} else {
				return React.createElement(
					'font',
					null,
					' You have no friends. Invite some! '
				);
			}
		}
	});
	
	var ListItems = React.createClass({
		displayName: 'ListItems',
	
		render: function () {
			// using the list of items, generate an Item element for each one
	
			var list = this.props.items.map((function (item) {
				return React.createElement(Item, { key: item.username, item: item, reload: this.props.reload });
			}).bind(this));
	
			return React.createElement(
				'div',
				null,
				React.createElement(
					'div',
					{ className: 'container' },
					React.createElement(
						'div',
						{ className: 'row' },
						React.createElement(
							'div',
							{ className: 'col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xs-offset-0 col-sm-offset-0 col-md-offset-3 col-lg-offset-3 toppad' },
							React.createElement(
								'div',
								{ className: 'panel panel-info' },
								React.createElement(
									'div',
									{ className: 'panel-heading' },
									React.createElement(
										'h3',
										{ className: 'panel-title', id: 'fullNameField' },
										'Your Friends List'
									)
								),
								React.createElement(
									'div',
									{ className: 'panel-body' },
									React.createElement(
										'div',
										{ className: 'row' },
										React.createElement(
											'div',
											{ className: ' col-md-9 col-lg-9 ' },
											React.createElement(
												'table',
												{ className: 'table table-user-information', id: 'friendsList' },
												React.createElement(
													'tbody',
													null,
													list
												)
											)
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
	
	var Item = React.createClass({
		displayName: 'Item',
	
		// context so the component can access the router
		contextTypes: {
			history: React.PropTypes.object.isRequired
		},
	
		render: function () {
			console.log("username is %s", this.props.item.username);
			return React.createElement(
				'tr',
				{ onClick: this.handleClick },
				React.createElement(
					'td',
					{ width: '120px' },
					React.createElement('img', { height: '90', alt: 'User Pic', id: 'picLinkField', src: this.props.item.profilePic, className: 'img-circle img-responsive' })
				),
				React.createElement(
					'td',
					{ id: 'friendName', width: '120' },
					this.props.item.firstName,
					'  ',
					this.props.item.lastName
				)
			);
		},
	
		handleClick: function () {
			api.setFriendUsername(this.props.item.username);
			this.context.history.pushState(null, '/friendProfile');
		}
	});
	
	module.exports = viewFriends;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var Link = ReactRouter.Link;
	var api = __webpack_require__(6);
	var auth = __webpack_require__(3);
	
	var friendProfile = React.createClass({
		displayName: 'friendProfile',
	
		getInitialState: function () {
			return {
				items: '',
				wishes: [],
				error: false
			};
		},
	
		listSet: function (status, data) {
			if (status) {
				// set the state for the list of items
				console.log("data %s", data);
				this.setState({
					items: data[0],
					wishes: data[1].wishes
				});
				console.log(this.state.items);
			} else {
				this.context.history.pushState(null, '/mainAppWin');
			}
		},
	
		reload: function () {
			var username = auth.getUsername();
			var friendUsername = api.getFriendUsername();
			api.getFriendItems(username, friendUsername, "/friend/viewFriendsProfile/", this.listSet);
		},
	
		componentWillMount: function () {
			this.reload();
		},
	
		render: function () {
	
			var list = this.state.wishes.map((function (item) {
				return React.createElement(Wish, { key: item._id, item: item, reload: this.reload });
			}).bind(this));
	
			return React.createElement(
				'div',
				{ className: 'container' },
				React.createElement(
					'div',
					{ className: 'row' },
					React.createElement(
						'div',
						{ className: 'col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xs-offset-0 col-sm-offset-0 col-md-offset-3 col-lg-offset-3 toppad' },
						React.createElement(
							'div',
							{ className: 'panel panel-info' },
							React.createElement(
								'div',
								{ className: 'panel-heading' },
								React.createElement(
									'h3',
									{ className: 'panel-title', id: 'fullNameField' },
									this.state.items.firstName + " " + this.state.items.lastName
								)
							),
							React.createElement(
								'div',
								{ className: 'panel-body' },
								React.createElement(
									'div',
									{ className: 'row' },
									React.createElement(
										'div',
										{ className: 'col-md-3 col-lg-3 ', align: 'center' },
										React.createElement('img', { alt: 'User Pic', value: this.state.items.profilePic, id: 'picLinkField', src: this.state.items.profilePic, className: 'img-circle img-responsive' })
									),
									React.createElement(
										'div',
										{ className: ' col-md-9 col-lg-9 ' },
										React.createElement(
											'table',
											{ className: 'table table-user-information', id: 'profileInfo' },
											React.createElement(
												'tbody',
												null,
												React.createElement(
													'tr',
													null,
													React.createElement(
														'td',
														null,
														'Email:'
													),
													React.createElement(
														'td',
														{ id: 'emailField' },
														this.state.items.username
													),
													React.createElement('td', null)
												),
												React.createElement(
													'tr',
													null,
													React.createElement(
														'td',
														null,
														'Date of Birth:'
													),
													React.createElement(
														'td',
														{ id: 'dobField' },
														this.state.items.bdMonth + "/" + this.state.items.bdDay + "/" + this.state.items.bdYear
													),
													React.createElement('td', null)
												),
												React.createElement(
													'tr',
													null,
													React.createElement(
														'td',
														null,
														'Gender:'
													),
													React.createElement(
														'td',
														{ id: 'genderField' },
														this.state.items.gender
													),
													React.createElement('td', null)
												),
												list
											)
										)
									),
									React.createElement('div', { id: 'message' })
								)
							)
						)
					)
				)
			);
		}
	});
	
	var Wish = React.createClass({
		displayName: 'Wish',
	
		// context so the component can access the router
		contextTypes: {
			history: React.PropTypes.object.isRequired
		},
	
		render: function () {
			return React.createElement(
				'tr',
				null,
				React.createElement(
					'td',
					null,
					'Wish'
				),
				React.createElement(
					'td',
					{ id: 'wishField' },
					this.props.item.description
				),
				React.createElement(
					'td',
					null,
					React.createElement(
						'button',
						{ onClick: this.handleClick, className: 'btn btn-default' },
						'Reserve Wish'
					)
				)
			);
		},
	
		handleClick: function () {
			// prevent default browser submit
			event.preventDefault();
	
			var wish = this.props.item;
			if (!wish) {
				return;
			}
			api.reserveItem(this.props.item._id, auth.getUsername(), function (reservedWish) {
				if (!reservedWish) {
					console.log("failed to reserve Wish");
				} else {
					$('#message').html("<font size=15px color=red>Wish Item Reserved</font>");
					this.context.history.pushState(null, '/mainAppWin');
					$('#reserveWishBtn').prop('disabled', true);
				}
			});
		}
	});
	
	module.exports = friendProfile;
	module.exports;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var api = __webpack_require__(6);
	var auth = __webpack_require__(3);
	
	var deleteAccount = React.createClass({
		displayName: 'deleteAccount',
	
		// context so the component can access the router
		contextTypes: {
			history: React.PropTypes.object.isRequired
		},
	
		render: function () {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'div',
					null,
					React.createElement(
						'span',
						null,
						React.createElement(
							'label',
							null,
							React.createElement(
								'font',
								{ size: '25px', color: 'WHITE' },
								'Are you sure you want to leave Genie Lamp?!!'
							)
						)
					)
				),
				React.createElement(
					'div',
					null,
					React.createElement(
						'button',
						{ onClick: this.handleConfirm, className: 'btn btn-default active' },
						'Confirm'
					),
					React.createElement(
						'button',
						{ onClick: this.handleCancel, className: 'btn btn-default active' },
						'Cancel'
					)
				)
			);
		},
	
		handleConfirm: function () {
			// prevent default browser submit
			event.preventDefault();
	
			var username = auth.getUsername();
			api.deleteItem('/profile/delete/', username, null, function (status, deletedUser) {
	
				if (!status) {
					console.log("User Deletion failed");
				} else {
					auth.logout();
					this.history.pushState(null, '/');
				}
			});
		},
	
		handleCancel: function () {
			// prevent default browser submit
			event.preventDefault();
			this.history.pushState(null, '/mainAppWin');
		}
	});
	
	module.exports = deleteAccount;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var auth = __webpack_require__(3);
	var api = __webpack_require__(6);
	
	var navBarSettings = React.createClass({
	  displayName: 'navBarSettings',
	
	  render: function () {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'div',
	        null,
	        React.createElement(
	          'h',
	          null,
	          'Choose Color!'
	        )
	      ),
	      React.createElement(
	        'div',
	        null,
	        React.createElement(
	          'button',
	          { onClick: this.changeToBlack, id: 'blackNavBar', className: 'btn btn-default active' },
	          'black'
	        ),
	        React.createElement(
	          'button',
	          { onClick: this.changeToWhite, id: 'whiteNavBar', className: 'btn btn-default active' },
	          'white'
	        ),
	        React.createElement(
	          'button',
	          { onClick: this.changeToRed, id: 'redNavBar', className: 'btn btn-default active' },
	          'red'
	        ),
	        React.createElement(
	          'button',
	          { onClick: this.changeToBlue, id: 'blueNavBar', className: 'btn btn-default active' },
	          'blue'
	        ),
	        React.createElement(
	          'button',
	          { onClick: this.changeToYellow, id: 'yellowNavBar', className: 'btn btn-default active' },
	          'yellow'
	        ),
	        React.createElement(
	          'button',
	          { onClick: this.changeToOrange, id: 'orangeNavBar', className: 'btn btn-default active' },
	          'orange'
	        ),
	        React.createElement(
	          'button',
	          { onClick: this.changeToPurple, id: 'purpleNavBar', className: 'btn btn-default active' },
	          'purple'
	        )
	      ),
	      React.createElement(
	        'div',
	        null,
	        React.createElement(
	          'h',
	          null,
	          ' For these changes to take affect you would need to log out and log back in '
	        )
	      )
	    );
	  },
	
	  changeToBlack: function () {
	    // prevent default browser submit
	    event.preventDefault();
	    var username = auth.getUsername();
	    api.changeColor(username, "BLACK", function (changedColor) {
	      if (!changedColor) {
	        console.log("failed to change Color");
	      } else {
	        console.log("color changed");
	      }
	    });
	  },
	
	  changeToWhite: function () {
	    // prevent default browser submit
	    event.preventDefault();
	    var username = auth.getUsername();
	    api.changeColor(username, "WHITE", function (changedColor) {
	      if (!changedColor) {
	        console.log("failed to change Color");
	      } else {
	        console.log("color changed");
	      }
	    });
	  },
	
	  changeToRed: function () {
	    // prevent default browser submit
	    event.preventDefault();
	    var username = auth.getUsername();
	    api.changeColor(username, "RED", function (changedColor) {
	      if (!changedColor) {
	        console.log("failed to change Color");
	      } else {
	        console.log("color changed");
	      }
	    });
	  },
	
	  changeToBlue: function () {
	    // prevent default browser submit
	    event.preventDefault();
	    var username = auth.getUsername();
	    api.changeColor(username, "BLUE", function (changedColor) {
	      if (!changedColor) {
	        console.log("failed to change Color");
	      } else {
	        console.log("color changed");
	      }
	    });
	  },
	
	  changeToYellow: function () {
	    // prevent default browser submit
	    event.preventDefault();
	    var username = auth.getUsername();
	    api.changeColor(username, "YELLOW", function (changedColor) {
	      if (!changedColor) {
	        console.log("failed to change Color");
	      } else {
	        console.log("color changed");
	      }
	    });
	  },
	
	  changeToOrange: function () {
	    // prevent default browser submit
	    event.preventDefault();
	    var username = auth.getUsername();
	    api.changeColor(username, "ORANGE", function (changedColor) {
	      if (!changedColor) {
	        console.log("failed to change Color");
	      } else {
	        console.log("color changed");
	      }
	    });
	  },
	
	  changeToPurple: function () {
	    // prevent default browser submit
	    event.preventDefault();
	    var username = auth.getUsername();
	    api.changeColor(username, "PURPLE", function (changedColor) {
	      if (!changedColor) {
	        console.log("failed to change Color");
	      } else {
	        console.log("color changed");
	      }
	    });
	  }
	
	});
	
	module.exports = navBarSettings;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var api = __webpack_require__(6);
	var auth = __webpack_require__(3);
	
	var contactUs = React.createClass({
		displayName: 'contactUs',
	
		getInitialState: function () {
			return {
				senderEmail: '',
				subjectLine: '',
				message: ''
			};
		},
	
		render: function () {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'div',
					null,
					React.createElement(
						'h',
						null,
						' Use the following form to send your email and we will respond to you as soon as possible'
					)
				),
				React.createElement(
					'div',
					null,
					React.createElement(
						'label',
						null,
						'Your Email'
					),
					React.createElement('input', {
						value: this.state.senderEmail,
						onChange: this.handleInputChange,
						type: 'email',
						className: 'form-control',
						id: 'destinationEmail',
						placeholder: 'Email' })
				),
				React.createElement(
					'div',
					null,
					React.createElement(
						'label',
						null,
						'Subject Line '
					),
					React.createElement('input', {
						value: this.state.subjectLine,
						onChange: this.handleInputChange,
						type: 'email',
						className: 'form-control',
						id: 'subjLine',
						placeholder: 'Subject Line' })
				),
				React.createElement(
					'div',
					null,
					React.createElement(
						'label',
						null,
						'Message'
					),
					React.createElement('input', {
						value: this.state.message,
						onChange: this.handleInputChange,
						type: 'email',
						className: 'form-control',
						id: 'message',
						placeholder: 'Message' })
				),
				React.createElement(
					'div',
					null,
					React.createElement(
						'button',
						{ onClick: this.handleClick, className: 'btn btn-default active' },
						'Send Email '
					)
				)
			);
		},
	
		handleInputChange: function (event) {
			if (event.target.id === "destinationEmail") {
				this.setState({ senderEmail: event.target.value });
			} else if (event.target.id === "subjLine") {
				this.setState({ subjectLine: event.target.value });
			} else if (event.target.id === "message") {
				this.setState({ message: event.target.value });
			}
		},
	
		handleClick: function () {
			// Prevent browser default
			event.preventDefault();
	
			var username = auth.getUsername();
			var email = this.state.senderEmail;
			var subjectLine = this.state.subjectLine;
			var message = this.state.message;
	
			console.log("email is %s", email);
			console.log("subject line is %s", subjectLine);
			console.log("message is %s", message);
	
			if (!email || !subjectLine || !message) {
				console.log("error, missing a value");
			}
	
			api.sendEmail(username, email, subjectLine, message, function (sentEmail) {
				if (!sentEmail) {
					console.log("contact us failed");
				} else {
					console.log("contact us worked");
					this.history.pushState(null, '/mainAppWin');
				}
			});
		}
	
	});
	
	module.exports = contactUs;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map