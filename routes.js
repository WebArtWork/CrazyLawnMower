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
	app.get('/node_modules/*', function(req, res) {
		res.sendFile(__dirname+'/node_modules/' + req.params[0]);
	});
	// Game
	app.get('/game/:folder/:file', function(req, res) {
		res.sendFile(__dirname+'/client/game/' + req.params.folder + '/' + req.params.file.replace('.map',''));
	});
	app.get('/', function(req, res) {
		res.sendFile(__dirname+'/client/game/html/index.html');
	});


}