var User = require('./databases/User');


module.exports = function(app, passport, express) {
	//var router = express.Router();
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
	app.get("/api/user/getMe", ensureUser, function(req,res){
		console.log(req.user);
		res.json(req.user);
	});
};
function ensureUser(req, res, next) {
	if (req.isAuthenticated()) return next();
	else res.json(false);
}
