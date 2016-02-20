var User = require('./databases/User');
var api = '/api/user';

module.exports = function(app, passport, express) {
	var router = express.Router();

	router.get('/logout', function (req, res) {
		req.logout();
		res.redirect('/');
	});
	router.post('/login', passport.authenticate('local-login', {
		successRedirect: '/',
		failureRedirect: '/'
	}));
	router.post('/signup', passport.authenticate('local-signup', {
		successRedirect: '/',
		failureRedirect: '/'
	}));

	app.use(api, router);
};
// } ensure user login{
	function isLoggedIn(req, res, next) {
		if (req.isAuthenticated()) return next();
		res.send(false);
	};
