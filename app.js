var express = require('express');
var app = express();
var port = 5454;

var mongoose = require('mongoose');
var passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo/es5')(session);

mongoose.connect('mongodb://localhost/game');

var favicon = require('serve-favicon');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var methodOverride = require('method-override');

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(methodOverride('X-HTTP-Method-Override'));

app.use(session({
	secret: 'ihaveanamazingcountry',
	resave: false,
	saveUninitialized: true,
	cookie: { maxAge: (365 * 24 * 60 * 60 * 1000) },
	rolling: true,
	store: new MongoStore({url: "mongodb://localhost/game"})
}));
app.use(passport.initialize());
app.use(passport.session());
app.set('view cache', true);

app.use(favicon(__dirname + '/client/public/img/favicon.png'));

//require('./server/passport')(app, passport);
require('./client/routes.js')(app);

app.listen(port);
console.log('Server is running on port '+port);
