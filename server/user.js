var User = require('./databases/User');
var api = '/api/user';

module.exports = function(app, passport, express) {
	app.get('/logout', function (req, res) {
		req.logout();
		res.redirect('/');
	});
	app.post('/login', passport.authenticate('local-login', {
		successRedirect: '/',
		failureRedirect: '/'
	}));
	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect: '/',
		failureRedirect: '/'
	}));
};
// } ensure user login{
	function isLoggedIn(req, res, next) {
		if (req.isAuthenticated()) return next();
		res.send(false);
	};
