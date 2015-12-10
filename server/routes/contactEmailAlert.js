module.exports = function ContactUs (senderEmail, subject, message) {

		var nodemailer = require('nodemailer');
		
		console.log(senderEmail);
		console.log(message);
		console.log(subject);
		
		var transporter = nodemailer.createTransport( {
			service: 'Gmail',
			auth: {
				user: 'genielampbyu@gmail.com',
				pass: 'cs360BYU'
			}
		});

		var mailOptions = {
			from: senderEmail,
			to: 'genielampbyu@gmail.com',
			subject: subject,
			text: senderEmail + ' sent you the following message: \n' + message
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
		