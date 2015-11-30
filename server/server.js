//setup express
var express = require('express'),
	app = express();
var routesIndex = require('./routes/index')	


//setup http parser structure and filesystem
var bodyParser = require('body-parser'),
	jsonParser = bodyParser.json();
	

//setup mongoose for mongoDB
var mongoose = require('mongoose'),
	dbURL = 'mongodb://test:test@ds059694.mongolab.com:59694/genni';
	mongoose.connect(dbURL);

var db = mongoose.connection;
db.on('error', function (err) {
console.log('MongoDB connection error', err);
});
db.once('open', function () {
console.log('MongoDB connected.');
});


// passport config
var passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy,
	cookieParser = require('cookie-parser'),
	Person = require('./models/personSchema');
	
passport.use(new LocalStrategy(Person.authenticate()));
passport.serializeUser(Person.serializeUser());
passport.deserializeUser(Person.deserializeUser());


app.use(express.static('./app')); // setup static directory
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', routesIndex);

app.use(cookieParser());
app.use(require('express-session')({
    secret: 'cs360',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());


// start the server
var server = app.listen(3000, function() {
console.log("Started on port 3000");
var host = server.address().address;
var port = server.address().port;

});





