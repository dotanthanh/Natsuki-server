var express = require('express');
var router = express.Router();
const passport = require('passport');
const User = require('../model/user');
const jwt = require('jsonwebtoken');

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
  User.findOne({username: req.headers.username}, (err, user)=>{
    // error handle
    if (err){
      return done(err);
    }
    // if the username exists in the database, then you compare password
    if (user) {
      // check if the password is correct
      if (user.validPassword(req.headers.password)){
        // return token here
        var payload = {
          username: user.username,
          friends: user.friends
        };
        // set token expired after 3h
        var token = jwt.sign(payload, 'secret', { expiresIn: '3h' });
        res.send(token);
      }
      // when usenrmae found but password not match
      else {
        req.res.status(400);
        req.res.send('Password is not correct');
      }
    }
    // when username not found
    else {
      req.res.status(400);
      req.res.send('Username is not correct');
    }
  })
});

router.get('/dashboard', passport.authenticate('signin'), (req, res)=>{
  // dummy display to verify the code reached here
  res.send(req.user.username);
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