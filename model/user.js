const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  friends: [
    {
      friend_id: String
    }
  ],
  hosted_events: [
    {
      event_id: String
    }
  ],
  joined_events: [
    {
      event_id: String
    }
  ],
  saved_events: [
    {
      event_id: String
    }
  ]
})

userSchema.methods.generateHash = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

// use function(anonymous function) instead of arrow function to access keyword this
userSchema.methods.validPassword = function(password){
  return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model('User', userSchema)
