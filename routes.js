module.exports = function(app) {
	// Sass CSS
	var sassMiddleware = require('node-sass-middleware');
	app.use(sassMiddleware({
		src: __dirname+'/scss',
		dest: __dirname,
		debug: true,
		outputStyle: 'compressed',
		force: true
	}));

	// Game
	app.get('/node_modules/*',ensureUser, function(req, res) {
		res.sendFile(__dirname+'/node_modules/' + req.params[0]);
	});
	// Public
	app.get('/public/*', function(req, res) {
		res.sendFile(__dirname+'/client/public/' + req.params[0]);
	});
	app.get('/Auth', function(req, res) {
		res.sendFile(__dirname+'/client/public/html/index.html');
	});
	// Game
	app.get('/game/*',ensureUser, function(req, res) {
		res.sendFile(__dirname+'/client/game/' + req.params[0]);
	});
	app.get('/Animals',ensureUser, function(req, res) {
		res.sendFile(__dirname+'/client/game/html/index.html');
	});
	app.get('/',ensureUser, function(req, res) {
		res.sendFile(__dirname+'/client/game/html/index.html');
	});
	app.get('*',ensureUser, function(req, res) {
		res.redirect('/');
	});
};

function ensureUser(req, res, next) {
	if (req.isAuthenticated()) return next();
	else res.redirect('/Auth');
}
