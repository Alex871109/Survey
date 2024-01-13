const mongoose = require('mongoose');
const { Shema } = mongoose;

const userSchema = new Schema({
  googleId: String,
});

mongoose.model('users', UserSchema);
