var Link = ReactRouter.Link;
var auth = require ('./auth');

var mainAppWin = React.createClass({

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

  render: function() {
    return (
      <div>
		<nav className="navbar navbar-default" role ="navigation" id="mainPage">
 		 <div className="container">
    		<div className="navbar-header">
      			<button type="button" className="navbar-toggle" data-toggle="collapse">
        			<span className="sr-only">Toggle navigation</span>
        			<span className="icon-bar"></span>
        			<span className="icon-bar"></span>
        			<span className="icon-bar"></span>
      			</button>
      			<a className="navbar-brand" href="/#/mainAppWin">Genie Lamp</a>
    		</div>

    		<div className="collapse navbar-collapse">
      			<ul className="nav navbar-nav">
        			<li><Link to="Profile">Profile</Link></li>
        			<li role="presentation" className="dropdown">
          				<a className="dropdown-toggle" href ="mainAppWin" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Friends<span className="caret"></span></a>
          				<ul className="dropdown-menu">
            				<li><Link to="addFriend">Add Friend</Link></li>
            				<li><Link to="removeFriend">Remove Friend</Link></li>
            				<li><Link to="viewFriends">View Friends</Link></li>
          				</ul>
        			</li>
      			</ul>
      			<ul className="nav navbar-nav navbar-right">
        			<li><a href="/#/mainAppWin">Hello {auth.getName()}</a></li>
              <li><a
                    href = "#"
                    onClick={this.handleClick} 
                    id="LogOutBtn">
                    Log Out
                  </a></li>
      			</ul>
    		</div>
  		</div>

  	</nav>
          <div className="detail">
          {this.props.children}
      </div>
      </div>
    );
  },

  handleClick: function(){
    auth.logout();
    this.context.history.pushState(null, '/');  
  },

});

module.exports = mainAppWin