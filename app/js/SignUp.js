var Link = ReactRouter.Link;
var auth = require('./auth');
var History = ReactRouter.History;

var SignUp = React.createClass({

  	mixins: [History],
  	
  	getInitialState: function(){
	    return{
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
	    }

  	},

	render: function(){
		return(
			<div>
			<div><span id="errorDiv" className="errorDiv"></span></div>
			<form id="reg" name="reg">
				<div id="reg_form_box" className="large_form">
						<div className="mbm _3-90 lfloat _ohe">
							<div className="_5dbb" id="u_0_a">
								<div className="uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput">
									<div className="placeholder" aria-hidden="true">First name</div>
									<input
									required 
									value={this.state.firstNameText}
									onChange={this.handleInputChange}
									type="text" 
									className="inputtext _58mg _5dba _2ph-" 
									data-type="text" 
									name="firstname" 
									aria-required="1" 
									placeholder="" 
									id="firstNameField" 
									aria-label="First name" 
									aria-owns="js_0" 
									aria-haspopup="true" 
									aria-describedby="js_5" 
									aria-invalid="true"/>
								</div>
								<i className="_5dbc img sp_7XMX65Pq0E7 sx_ee768b"></i><i className="_5dbd img sp_7XMX65Pq0E7 sx_067138"></i>
							</div>
						</div>
						<div className="mbm rfloat _ohf">
							<div className="_5dbb" id="u_0_c">
								<div className="uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput">
									<div className="placeholder" aria-hidden="true">Last name</div>
									<input
									required 
									value={this.state.lastNameText}
									onChange={this.handleInputChange}
									type="text" 
									className="inputtext _58mg _5dba _2ph-" 
									data-type="text" 
									name="lastname" 
									aria-required="1" 
									placeholder="" 
									id="lastNameField" 
									aria-label="Last name"/>
								</div>
								<i className="_5dbc img sp_7XMX65Pq0E7 sx_ee768b"></i><i className="_5dbd img sp_7XMX65Pq0E7 sx_067138"></i>
							</div>
						</div>
					</div>
					<div className="mbm">
						<div className="_5dbb" id="u_0_e">
							<div className="uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput">
								<div className="placeholder" aria-hidden="true">Email</div>
								<input
								required 
								value={this.state.emailText}
								onChange={this.handleInputChange}
								type="email" 
								className="inputtext _58mg _5dba _2ph-" 
								data-type="text" 
								name="reg_email__" 
								aria-required="1" 
								placeholder="" 
								id="emailField" 
								aria-label="Email"/>
							</div>
							<i className="_5dbc img sp_7XMX65Pq0E7 sx_ee768b"></i><i className="_5dbd img sp_7XMX65Pq0E7 sx_067138"></i>
						</div>
					</div>
					<div className="mbm">
						<div className="_5dbb" id="u_0_j">
							<div className="uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput">
								<div className="placeholder" aria-hidden="true">New password</div>
								<input 
								required
								value={this.state.passwordText}
								onChange={this.handleInputChange}
								type="password" 
								className="inputtext _58mg _5dba _2ph-" 
								data-type="text" 
								name="reg_passwd__" 
								aria-required="1" 
								placeholder="" 
								id="passwordField" 
								aria-label="New password"/>
							</div>
							<i className="_5dbc img sp_7XMX65Pq0E7 sx_ee768b"></i><i className="_5dbd img sp_7XMX65Pq0E7 sx_067138"></i>
						</div>
					</div>
					<div className="mbm">
						<div className="_5dbb" id="u_0_j">
							<div className="uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput">
								<div className="placeholder" aria-hidden="true">Profile picture</div>
								<input 
								required
								value={this.state.profilePic}
								onChange={this.handleInputChange}
								type="text" 
								className="inputtext _58mg _5dba _2ph-" 
								data-type="text" 
								name="reg_first_wish__" 
								aria-required="1" 
								placeholder="" 
								id="profilePicField" aria-label="First Wish"/>
							</div>
							<i className="_5dbc img sp_7XMX65Pq0E7 sx_ee768b"></i><i className="_5dbd img sp_7XMX65Pq0E7 sx_067138"></i>
						</div>
					</div>
					<div className="mbm">
						<div className="_5dbb" id="u_0_j">
							<div className="uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput">
								<div className="placeholder" aria-hidden="true">First Wish</div>
								<input
								required 
								value={this.state.wish1}
								onChange={this.handleInputChange}
								type="text" 
								className="inputtext _58mg _5dba _2ph-" 
								data-type="text" 
								name="reg_first_wish__" 
								aria-required="1" 
								placeholder="" 
								id="wish1Field" aria-label="First Wish"/>
							</div>
							<i className="_5dbc img sp_7XMX65Pq0E7 sx_ee768b"></i><i className="_5dbd img sp_7XMX65Pq0E7 sx_067138"></i>
						</div>
					</div>
					<div className="mbm">
						<div className="_5dbb" id="u_0_j">
							<div className="uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput">
								<div className="placeholder" aria-hidden="true">Second Wish</div>
								<input
								required 
								value={this.state.wish2}
								onChange={this.handleInputChange}
								type="text" 
								className="inputtext _58mg _5dba _2ph-" 
								data-type="text" 
								name="reg_second_wish__" 
								aria-required="1" 
								placeholder="" 
								id="wish2Field" 
								aria-label="second wish"/>
							</div>
							<i className="_5dbc img sp_7XMX65Pq0E7 sx_ee768b"></i><i className="_5dbd img sp_7XMX65Pq0E7 sx_067138"></i>
						</div>
					</div>
					<div className="mbm">
						<div className="_5dbb" id="u_0_j">
							<div className="uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput">
								<div className="placeholder" aria-hidden="true">Third Wish</div>
								<input 
								required
								value={this.state.wish3}
								onChange={this.handleInputChange}
								type="text" 
								className="inputtext _58mg _5dba _2ph-" 
								data-type="text" 
								name="reg_third_wish__" 
								aria-required="1" 
								placeholder="" 
								id="wish3Field" 
								aria-label="third wish"/>
							</div>
							<i className="_5dbc img sp_7XMX65Pq0E7 sx_ee768b"></i><i className="_5dbd img sp_7XMX65Pq0E7 sx_067138"></i>
						</div>
					</div>
					<div className="_58mq _5dbb" id="u_0_l">
						<div className="mtm mbs _58mr">Birthday</div>
						<div className="_5k_5">
							<span className="_5k_4" data-type="selectors" data-name="birthday_wrapper" id="u_0_m">
								<span>
									<select 
									required
									value={this.state.birthMonthText}
									onChange={this.handleInputChange}
									aria-label="Month" 
									name="birthday_month" 
									id="month" 
									title="Month" 
									className="_5dba">
										<option value="0" selected="1">Month</option>
										<option value="1">Jan</option>
										<option value="2">Feb</option>
										<option value="3">Mar</option>
										<option value="4">Apr</option>
										<option value="5">May</option>
										<option value="6">Jun</option>
										<option value="7">Jul</option>
										<option value="8">Aug</option>
										<option value="9">Sep</option>
										<option value="10">Oct</option>
										<option value="11">Nov</option>
										<option value="12">Dec</option>
									</select>
									<select 
									value={this.state.birthDayText}
									onChange={this.handleInputChange}
									aria-label="Day" 
									name="birthday_day" 
									id="day" 
									title="Day" 
									className="_5dba">
										<option value="0" selected="1">Day</option>
										<option value="1">1</option>
										<option value="2">2</option>
										<option value="3">3</option>
										<option value="4">4</option>
										<option value="5">5</option>
										<option value="6">6</option>
										<option value="7">7</option>
										<option value="8">8</option>
										<option value="9">9</option>
										<option value="10">10</option>
										<option value="11">11</option>
										<option value="12">12</option>
										<option value="13">13</option>
										<option value="14">14</option>
										<option value="15">15</option>
										<option value="16">16</option>
										<option value="17">17</option>
										<option value="18">18</option>
										<option value="19">19</option>
										<option value="20">20</option>
										<option value="21">21</option>
										<option value="22">22</option>
										<option value="23">23</option>
										<option value="24">24</option>
										<option value="25">25</option>
										<option value="26">26</option>
										<option value="27">27</option>
										<option value="28">28</option>
										<option value="29">29</option>
										<option value="30">30</option>
										<option value="31">31</option>
									</select>
									<select 
									value={this.state.birthYearText}
									onChange={this.handleInputChange}
									aria-label="Year" 
									name="birthday_year" 
									id="year" 
									title="Year" 
									className="_5dba">
										<option value="0" selected="1">Year</option>
										<option value="2015">2015</option>
										<option value="2014">2014</option>
										<option value="2013">2013</option>
										<option value="2012">2012</option>
										<option value="2011">2011</option>
										<option value="2010">2010</option>
										<option value="2009">2009</option>
										<option value="2008">2008</option>
										<option value="2007">2007</option>
										<option value="2006">2006</option>
										<option value="2005">2005</option>
										<option value="2004">2004</option>
										<option value="2003">2003</option>
										<option value="2002">2002</option>
										<option value="2001">2001</option>
										<option value="2000">2000</option>
										<option value="1999">1999</option>
										<option value="1998">1998</option>
										<option value="1997">1997</option>
										<option value="1996">1996</option>
										<option value="1995">1995</option>
										<option value="1994">1994</option>
										<option value="1993">1993</option>
										<option value="1992">1992</option>
										<option value="1991">1991</option>
										<option value="1990">1990</option>
										<option value="1989">1989</option>
										<option value="1988">1988</option>
										<option value="1987">1987</option>
										<option value="1986">1986</option>
										<option value="1985">1985</option>
										<option value="1984">1984</option>
										<option value="1983">1983</option>
										<option value="1982">1982</option>
										<option value="1981">1981</option>
										<option value="1980">1980</option>
										<option value="1979">1979</option>
										<option value="1978">1978</option>
										<option value="1977">1977</option>
										<option value="1976">1976</option>
										<option value="1975">1975</option>
										<option value="1974">1974</option>
										<option value="1973">1973</option>
										<option value="1972">1972</option>
										<option value="1971">1971</option>
										<option value="1970">1970</option>
										<option value="1969">1969</option>
										<option value="1968">1968</option>
										<option value="1967">1967</option>
										<option value="1966">1966</option>
										<option value="1965">1965</option>
										<option value="1964">1964</option>
										<option value="1963">1963</option>
										<option value="1962">1962</option>
										<option value="1961">1961</option>
										<option value="1960">1960</option>
										<option value="1959">1959</option>
										<option value="1958">1958</option>
										<option value="1957">1957</option>
										<option value="1956">1956</option>
										<option value="1955">1955</option>
										<option value="1954">1954</option>
										<option value="1953">1953</option>
										<option value="1952">1952</option>
										<option value="1951">1951</option>
										<option value="1950">1950</option>
										<option value="1949">1949</option>
										<option value="1948">1948</option>
										<option value="1947">1947</option>
										<option value="1946">1946</option>
										<option value="1945">1945</option>
										<option value="1944">1944</option>
										<option value="1943">1943</option>
										<option value="1942">1942</option>
										<option value="1941">1941</option>
										<option value="1940">1940</option>
										<option value="1939">1939</option>
										<option value="1938">1938</option>
										<option value="1937">1937</option>
										<option value="1936">1936</option>
										<option value="1935">1935</option>
										<option value="1934">1934</option>
										<option value="1933">1933</option>
										<option value="1932">1932</option>
										<option value="1931">1931</option>
										<option value="1930">1930</option>
										<option value="1929">1929</option>
										<option value="1928">1928</option>
										<option value="1927">1927</option>
										<option value="1926">1926</option>
										<option value="1925">1925</option>
										<option value="1924">1924</option>
										<option value="1923">1923</option>
										<option value="1922">1922</option>
										<option value="1921">1921</option>
										<option value="1920">1920</option>
										<option value="1919">1919</option>
										<option value="1918">1918</option>
										<option value="1917">1917</option>
										<option value="1916">1916</option>
										<option value="1915">1915</option>
										<option value="1914">1914</option>
										<option value="1913">1913</option>
										<option value="1912">1912</option>
										<option value="1911">1911</option>
										<option value="1910">1910</option>
										<option value="1909">1909</option>
										<option value="1908">1908</option>
										<option value="1907">1907</option>
										<option value="1906">1906</option>
										<option value="1905">1905</option>
									</select>
								</span>
							</span>
						</div>
					</div>
					<div className="mtm _5wa2 _5dbb" id="u_0_p"><span className="_5k_3" data-type="radio" data-name="gender_wrapper" id="u_0_q"><span className="_5k_2 _5dba"><input 
					required
					onClick={this.handleInputChange}
					type="radio" 
					name="sex" 
					value="1" 
					id="pickedFemale"/><label className="_58mt" htmlFor="u_0_n">Female</label></span><span className="_5k_2 _5dba"><input 
					required
					onClick={this.handleInputChange}
					type="radio" 
					name="sex" 
					value="2" 
					id="pickedMale"/><label className="_58mt" htmlFor="u_0_o">Male</label></span></span><i className="_5dbc _5k_6 img sp_7XMX65Pq0E7 sx_ee768b"></i><i className="_5dbd _5k_7 img sp_7XMX65Pq0E7 sx_067138"></i></div>
					<div>
                  <button 
                  onClick={this.handleClick}
                  id="LogInBtn" 
                  className="btn btn-primary btn-lg active" >Sign Up</button>
                </div>
			</form>
			</div>
			);
	},

	// event handlers
  	handleInputChange: function(event) {
    	if (event.target.id === "firstNameField"){
      		this.setState({firstNameText:event.target.value});
    	}
    	else if (event.target.id === "lastNameField"){
      		this.setState({lastNameText:event.target.value});
    	}
    	else if (event.target.id === "emailField"){
    		this.setState({emailText:event.target.value});
    	}
    	else if (event.target.id === "passwordField"){
    		this.setState({passwordText:event.target.value});
    	}
    	else if (event.target.id === "wish1Field"){
    		this.setState({wish1:event.target.value});
    	}
    	else if (event.target.id === "wish2Field"){
    		this.setState({wish2:event.target.value});
    	}
    	else if (event.target.id === "wish3Field"){
    		this.setState({wish3:event.target.value});
    	}
    	else if (event.target.id === "month"){
    		this.setState({birthMonthText:event.target.value});
    	}
    	else if (event.target.id === "day"){
    		this.setState({birthDayText:event.target.value});
    	}
    	else if (event.target.id === "year"){
    		this.setState({birthYearText:event.target.value});
    	}
    	else if (event.target.id === "pickedFemale"){
    		this.setState({genderText:"Female"});
    	}
    	else if (event.target.id === "pickedMale"){
    		this.setState({genderText:"Male"});
    	}
    	else if (event.target.id === "profilePicField"){
    		this.setState({profilePic: event.target.value});
    	}
  	},

  	handleClick: function(event){
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

	    console.log("username %s" , username);
	    console.log("password %s" , password);
	    console.log("FN %s" , firstName);
	    console.log("LN %s" , lastName);
	    console.log("wish1 %s" , wish1);
	    console.log("wish2 %s" , wish2);
	    console.log("wish3 %s" , wish3);
	    console.log("BDM %s" , bdMonth);
	    console.log("BDD %s", bdDay);
	    console.log("BDDY %s", bdYear);
	    console.log("gender %s", gender);
	    console.log("profilePic %s" , profilePic);

	    if (!username || !password || !firstName || !lastName || !wish1 ||
	     !wish2 || !wish3 || !bdMonth || !bdDay || !bdYear || !gender || !profilePic) {
	        // $("#errorDiv").html("<font size=15px color=red>Please Fill out all items!</font>");
	    	alert("Please Fill out all items!");
	        return;
	    }
	    
	    // login via API
	    auth.register(firstName, lastName, username, password,
	    			 wish1, wish2, wish3, bdMonth, bdDay, bdYear,
	    			  gender, profilePic, function(loggedIn) {
	        // login callback
	        if (!loggedIn){
	        	this.setState({error: true});
	          	console.log("failed");
	            $("#errorDiv").html("<font size=15px color=red>User already exists!</font>");
	          }
	        else {
	        	console.log("worked");
	          this.context.history.pushState(null, '/mainAppWin');
	        }
	    }.bind(this));
  	}
});

module.exports = SignUp