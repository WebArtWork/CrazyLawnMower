var User = require('./databases/User');


module.exports = function(app, passport, express) {
	app.get('/logout', function (req, res) {
		req.logout();
		res.redirect('/');
	});
	app.post('/api/user/login', passport.authenticate('local-login', {
		successRedirect: '/',
		failureRedirect: '/'
	}));
	app.post('/api/user/signup', passport.authenticate('local-signup', {
		successRedirect: '/',
		failureRedirect: '/'
	}));
};
// } ensure user login{
	function isLoggedIn(req, res, next) {
		if (req.isAuthenticated()) return next();
		res.send(false);
	};