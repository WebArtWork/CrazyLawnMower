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
	/*router.get("/getUser",function(req,res){
		res.json(req.user);
	});*/
};
// } ensure user login{
	function isLoggedIn(req, res, next) {
		console.log(req.isAuthenticated());
		if (req.isAuthenticated()) return next();
		res.send(false);
	};
