var User = require('./databases/User');


module.exports = function(app, passport) {
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
	app.get("/api/user/getMyLevel", ensureUser, function(req,res){
		res.json({
			level: req.user.level
		});
	});
	app.post("/api/user/updateLevel", ensureUser, function(req,res){
		// need to add protection delay on add level
		for(var key in req.body) {
			if(key-req.user.level>20){
				res.json(false);
			}else{
				req.user.updateLevel(key, function(){
					res.json(true);
				});
			}
			break;
		}
	});
};
function ensureUser(req, res, next) {
	if (req.isAuthenticated()) return next();
	else res.json(false);
}
