const mongoose = require('mongoose');
const validator = require('validator');

// name, email, photo, password, confirmPassowrd
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please tell us your name'],
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  photo: String,
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    trim: true,
    minlength: 8,
  },
  confirmPassword: {
    type: String,
    required: [true, 'Please confirm your password'],
    // validate: {
    //   validator: function (val) {
    //     return val !== this.password;
    //   },
    //   message: 'Password should match',
    // },
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
