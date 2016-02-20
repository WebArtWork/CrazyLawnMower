var express = require('express');
var app = express();
var port = 5454;

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

app.set('view cache', true);
app.use(favicon(__dirname + '/client/public/img/favicon.png'));


require(__dirname+'/routes.js')(app);
app.listen(port);
console.log('Server is running on port '+port);