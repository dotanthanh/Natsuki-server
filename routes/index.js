var express = require('express');
var router = express.Router();
const passport = require('passport');
const Event = require('../model/event');
const User = require('../model/user');
const jwt = require('jsonwebtoken');
const ObjectId = require('mongodb').ObjectId;
const utility = require('../utils/utils');

/* GET home page. */
router.get('/', function(req, res, next) {

  console.log('reach here');
  res.send("unlucky you, i haven't code this part");

});


// route for signup, handled by passport's pre-configured signup strategy
router.post('/signup', passport.authenticate('signup', {
  // successRedirect: '/dashboard',
  // failureRedirect: '/signup'
}));


router.post('/signin', (req, res)=>{

  // find the sent username in the database
  console.log(req.body.username)

  User.findOne( {username: req.body.username}, (err, user)=>{

    let responseMessage = {
      message: ''
    }

    // error handle
    if (err){
      return done(err);
    }

    // if the username exists in the database, then you compare password
    if (user) {

      // check if the password is correct
      if (user.validPassword(req.body.password)){

        // return token here
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
        res.json(token);
      }
      // when username found but password not match
      else {
        req.res.status(400);
        responseMessage.message = 'Password is not correct';
        req.res.json(responseMessage);
      }
    }
    // when username not found
    else {
      req.res.status(400);
      responseMessage.message = 'Username is not correct';
      req.res.json(responseMessage);
    }

  })

});

// get user's info to display on dashboard
router.get('/dashboard', passport.authenticate('signin'), (req, res)=>{
  const name = req.user.username;

  User.findOne( {username: name}, (err, user) => {

    if (err) {
      return done(err);
    }
    else {
      if (user) {

        var responseObject = {
          username: user.username,
        };

        utility.getUserDetail(user).then(
          (result) => {
            responseObject.hosted_events = result.hosted_events;
            responseObject.joined_events = result.joined_events;
            responseObject.saved_events = result.saved_events
            responseObject.friends = result.friends;
            res.json( responseObject );
          }
        );

      }
      else {
        res.json({
          error: "no valid user"
        })
      }
    }

  } )
})


// function to check if the route is authenticated
function isSignedIn(req, res, next){
  if (req.isAuthenticated()){
    return next();
  }
  else {
    res.status(401);
    res.send('need authorization to access this path');
  }
}

module.exports = router;
