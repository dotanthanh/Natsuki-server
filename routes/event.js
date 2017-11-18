var express = require('express');
var router = express.Router();
const passport = require('passport');
const User = require('../model/user');
const Event = require('../model/event');

/* GET home page. */
router.get('/', (req, res, next)=>{
  console.log('reach here');
  res.send("unlucky you, i haven't code this part");
});

// handle event searching with name
router.get('/:name', (req, res)=>{
  // sanitize the query
  const name = req.params.name.replace('+', ' ');
  // find the event with related name
  Event.find({name: new RegExp(name, 'i')}, (err, result)=>{
    if (err){
      return done(err);
    }
    // return the result (an array). The array can be empty (as none was found)
    else {
      res.json(update(result));
    }
  })
})

// handle creating new event
router.post('/new', passport.authenticate('signin'), (req, res)=>{
  //get the user_id from the token (through passport jwt authentication)
  //and add to the list of the participants (the host of the event)
  const host_id = req.user._id;
  // the post request must use form-urlencoded type
  const event = {
    name: req.body.name,
    description: req.body.description,
    participants: [{
      user_id: host_id
    }],
    start_time: req.body.start_time,
    end_time: req.body.end_time,
    category: req.body.category,
    hashtag: req.body.hashtag,
    // the status of the event should be closed or opening
    status: 'upcoming'
  };
  const newEvent = new Event(event);
  // save the Event object into the database
  newEvent.save((err)=>{
    if (err) {
      res.send(err);
    }
    res.json(newEvent);
  })
})

// function update a list of events with invalid status
// return the array of events with updated status
function update(events){
  return events.forEach(event=>{
    event.updateStatus();
  })
}

// export the router for the app to use
module.exports = router;
