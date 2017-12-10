var express = require('express');
var router = express.Router();
const passport = require('passport');
const User = require('../model/user');
const Event = require('../model/event');
const ObjectId = require('mongodb').ObjectId;
const jwt = require('jsonwebtoken');

/* GET home page. */
router.get('/', (req, res, next) => {
  console.log('reach here');
  res.send("unlucky you, i haven't code this part");
});


// handle event searching with name
router.get('/:name', (req, res) => {
  // sanitize the query
  const name = req.params.name.replace('+', ' ');
  // find the event with related name
  Event.find({
    name: new RegExp(name, 'i')
  }, (err, result) => {
    if (err) return done(err);
    // return the result (an array). The array can be empty (as none was found)
    else res.json(result);
  })
})


// handle getting event by id
router.get('/byid/:id', (req, res) => {
  const id = req.params.id;

  // find the unique event in the database
  Event.findOne({
    _id: ObjectId(id)
  }, (err, result) => {
    if (err) return done(err);
    else res.status(200).json(result);
  })
})

// handle edit participants/join event
router.put('/edit/join', passport.authenticate('signin'), (req, res) => {
  const newParticipant = {
    id: req.user.id,
    user: req.user.username
  };

  const eventId = req.body.id;
  const action = req.body.action;

  // object indicates changes need to made to the event
  var editObject = { };
  if ( action==='push' ) editObject = { $push: {'participants': newParticipant} };
  else editObject = { $pull: { 'participants': {id: req.user.id} } }

  // update event in the database using the provided id
  Event.update({
    _id: ObjectId(eventId)
  }, editObject, (err) => {

    if (err) return done(err);
    else {
      updateUserEvents(req, res, action, eventId, "joined_events");
    }
  });

})


// handle edit participants/save event
router.put('/edit/save', passport.authenticate('signin'), (req, res) => {
  const eventId = req.body.id;
  const action = req.body.action

  // update user's list of saved events
  updateUserEvents(req, res, action, eventId, "saved_events");

})


// handle creating new event
router.post('/new', passport.authenticate('signin'), (req, res) => {
  //get the user_id from the token (through passport jwt authentication)
  //and add to the list of the participants (the host of the event)
  const host_username = req.user.username;
  // the post request must use form-urlencoded type
  const event = {
    name: req.body.eventName,
    description: req.body.description,
    host: host_username,
    participants: [{
      id: req.user.id,
      user: host_username
    }],
    start_time: req.body.startTime,
    end_time: req.body.endTime,
    category: req.body.category,
    hashtag: req.body.hashtag,
  };
  const newEvent = new Event(event);

  // update user info with new event added
  User.update({
    username: host_username
  }, {
    $push: {
      'hosted_events': {
        event_id: newEvent._id
      },
      'joined_events': {
        event_id: newEvent._id
      }
    }
  }, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {

      // save the Event object into the database
      newEvent.save((err) => {
        if (err) {
          res.send(err);
        }
        sendNewToken(req, res, newEvent._id);
      })
    }
  });

})


// function for resend a new token, take request and response and an optional data
function sendNewToken(req, res, optionalData) {
  User.findOne({_id: ObjectId(req.user.id)}, (err, user)=>{
    // prepare new token
    var payload = {
      id: user._id,
      username: user.username,
      friends: user.friends,
      saved_events: user.saved_events.map(event=>event.event_id),
      hosted_events: user.hosted_events.map(event=>event.event_id),
      joined_events: user.joined_events.map(event=>event.event_id)
    };

    // set token expired after 5h
    var token = jwt.sign(payload, 'secret', { expiresIn: '5h' });
    if (optionalData!==null) res.json({token: token, data: optionalData})
    else res.json(token);
  })
}

// function to handle generalization for edit use with join/quit and save/unsave
function updateUserEvents(req, res, action, eventId, whichArray) {
  if (action==='push') {
    User.update({
      _id: ObjectId(req.user.id)
    }, {
      $push: {
        [whichArray]: {
          event_id: eventId
        }
      }
    }, (err) => {

      if (err) return done(err)
      else {
        sendNewToken(req, res, null)
      }

    });
  }
  else {
    User.update({
      _id: ObjectId(req.user.id)
    }, {
      $pull: {
        [whichArray]: {
          event_id: eventId
        }
      }
    }, (err) => {

      if (err) return done(err)
      else {
        sendNewToken(req, res, null)
      }

    });
  }
}


// export the router for the app to use
module.exports = router;
