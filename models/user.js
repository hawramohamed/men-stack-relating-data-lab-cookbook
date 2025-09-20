const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
  },
  quantity:{
    type: Number,
    required: true,
    default: 1,
  },
  unit:{
    type: String,
    enum: ['kg', 'g', 'lbs', 'oz'],
    default: 'kg',
  },
  expiration:{
    type: Date,
    required: true,
  },
  notes:{
    type: String,
  },
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  pantry: [foodSchema],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
