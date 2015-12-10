var api = require('./api');
var auth = require('./auth');

var contactUs = React.createClass({

	getInitialState: function(){
		return {
			senderEmail: '',
			subjectLine: '',
			message: ''
		}
	},

	render: function(){
		return(
			<div>
				<div>
					<h> Use the following form to send your email and we will respond to you as soon as possible</h>
				</div>
				<div>
					<label>Your Email</label>
					<input 
		                value={this.state.senderEmail}
		                onChange={this.handleInputChange}
		                type="email" 
		                className="form-control" 
		                id="destinationEmail" 
		                placeholder="Email"/>
		        </div>
		        <div>
		            <label>Subject Line </label>
		            <input 
		                value={this.state.subjectLine}
		                onChange={this.handleInputChange}
		                type="email" 
		                className="form-control" 
		                id="subjLine" 
		                placeholder="Subject Line"/>
		        </div>
		        <div>
		            <label>Message</label>
		            <input 
		                value={this.state.message}
		                onChange={this.handleInputChange}
		                type="email" 
		                className="form-control" 
		                id="message" 
		                placeholder="Message"/>
				</div>
				<div>
					<button onClick={this.handleClick} className="btn btn-default active">Send Email </button>
				</div>
			</div>
			);
	},

	handleInputChange: function(event){
		if (event.target.id === "destinationEmail"){
			this.setState({senderEmail: event.target.value});
		} else if (event.target.id === "subjLine"){
			this.setState({subjectLine: event.target.value});
		} else if (event.target.id === "message"){
			this.setState({message: event.target.value});
		}
	},

	handleClick: function(){
		// Prevent browser default
		event.preventDefault();

		var username = auth.getUsername();
		var email = this.state.senderEmail;
		var subjectLine = this.state.subjectLine;
		var message = this.state.message;

		console.log("email is %s", email);
		console.log("subject line is %s", subjectLine);
		console.log("message is %s", message);

		if (!email || !subjectLine || !message){
			console.log("error, missing a value");
		}

		api.sendEmail(username, email, subjectLine, message, function(sentEmail){
			if (!sentEmail){
				console.log("contact us failed");
			} else {
				console.log("contact us worked");
				this.history.pushState(null, '/mainAppWin');
			}
		});
	}

});

module.exports = contactUs