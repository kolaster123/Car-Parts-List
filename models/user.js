const mongoose = require('mongoose');

const CarpartSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  price: {
    type: String,
  },
  status: {
    type: String,
    enum: ['got it!', 'dont got it!','saving up'],
  },
});

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  applications: [CarpartSchema],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
