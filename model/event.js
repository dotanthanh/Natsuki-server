const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

// schema for an event in the database
const eventSchema = new mongoose.Schema({
  name: String,
  description: String,
  host: String,
  participants: [
    {
      id: String,
      user: String
    }
  ],
  start_time: Date,
  end_time: Date,
  category: String,
  hashtag: [String],
})

// export the event model
module.exports = mongoose.model('Event', eventSchema);
