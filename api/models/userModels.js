const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const SALT_ROUNDS = 11;

const UserSchema = Schema({
  username: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true, minlength: 10 },
});

UserSchema.pre('save', function(next) {
  bcrypt
    .hash(this.password, SALT_ROUNDS)
    .then(hash => {
      this.password = hash;
      next();
    })
    .catch(err => next(err));
});

UserSchema.methods.checkPassword = function(plainTextPW, callBack) {
  bcrypt.compare(plainTextPW, this.password, function(err, isValid) {
    if (err) return callBack(err);

    callBack(null, isValid);
  });
};

module.exports = mongoose.model('User', UserSchema);
