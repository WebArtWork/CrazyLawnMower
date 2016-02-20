var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
	username: {type:String,uniqe:true},
	password: String,
	level: {type: Number, default: 0}
});

userSchema.methods.generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
userSchema.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.password);
};

//
userSchema.plugin(require('mongoose-paginate'));
module.exports = mongoose.model('User', userSchema);
