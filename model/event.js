const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

// schema for an event in the database
const eventSchema = new mongoose.Schema({
  name: String,
  description: String,
  participants: [
    {
      user_id: String
    }
  ],
  start_time: Date,
  end_time: Date,
  category: String,
  hashtag: [String],
  // the status of the event should be closed or opening or upcoming (yet to happen)
  status: {
    type: String,
    required: ()=>{
      return 'closed' || 'opening' || 'upcoming';
    }
  }
})

// update the status of the event based on the relationship between
// start_time, end_time and the present
eventSchema.methods.updateStatus = () =>{
  // when end_time < presence
  if (new Date(this.end_time).getTime() <= Date.now()) {
    this.status = 'closed';
  }
  // when start_time < presence
  else if (new Date(this.start_time) <= Date.now()) {
    this.status = 'opening';
  }
}

// export the event model
module.exports = mongoose.model('Event', eventSchema);
