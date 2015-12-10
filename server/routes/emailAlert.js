
module.exports = function Email(desEmail, description, firstname,lastname) {

		var nodemailer = require('nodemailer');
		
		console.log(desEmail);
		console.log(description);
		console.log(firstname);
		
		var transporter = nodemailer.createTransport( {
			service: 'Gmail',
			auth: {
				user: 'genielampbyu@gmail.com',
				pass: 'cs360BYU'
			}
		});

		var mailOptions = {
			from: 'genielampbyu@gmail.com',
			to: desEmail,
			subject: 'Reserved Item Cancelled',
			text: "Item: "+description+" had been remove by your friend " +firstname+' '+lastname + "."
		}
		
		transporter.sendMail(mailOptions, function(err) {
			if(err) {
				console.log('error sending the email');
				return;
			}
			console.log('message sent!');
			return;
		});
	}
	
		