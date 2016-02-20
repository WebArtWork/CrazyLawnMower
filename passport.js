var User = require('./databases/User');

module.exports = function(app, passport) {

	passport.use('local-login', new LocalStrategy({
		usernameField : 'username',
		passwordField : 'password',
		passReqToCallback : true
	},
	function(req, username, password, done) {
		User.findOne(
		{ 'username' :  username.toLowerCase() },
		function(err, user) {
			if (err) return done(err);
			if (!user) return done(null, false);
			if (!user.validPassword(password)) return done(null, false);
			return done(null, user);
		});
	}));
	passport.use('local-signup', new LocalStrategy({
		usernameField : 'username',
		passwordField : 'password',
		passReqToCallback : true
	},
	function(req, username, password, done) {
		User.findOne({
			'username':username
		},function(err, user) {
			if (err) return done(err);
			if (user) return done(null, false);
					var newUser = new User();
				newUser.username= username;
				newUser.password= newUser.generateHash(password);
				newUser.profileUrl= 'id'+Date.now();
				newUser.save(function(err) {
					if (err) throw err;
					return done(null, newUser);
				});
			}
		});
	}));
};
