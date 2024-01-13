const mongoose = require('mongoose');
const { Shema } = mongoose;

const UserSchema = new Schema({
  googleId: String,
});

mongoose.model('users')