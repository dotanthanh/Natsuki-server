const customStrategy = require('passport-custom').Strategy;
const passportJwt = require('passport-jwt');
const jwtStrategy = passportJwt.Strategy;
const extractJwt = passportJwt.ExtractJwt;
const User = require('../model/user');

// option for control how the token is verified or extracted
const options = {
  jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'secret'
}

// customization for signing in
const signinStrategy = new jwtStrategy(options, (jwt_payload, next) => {
  // authenticate here
  next(null, jwt_payload)
})

// customization for signing up
const signupStrategy = new customStrategy((req, done)=>{
  // find if username existed
  User.findOne({$or:
    [ {username: req.body.username}, {email: req.body.email} ]
    }, (err, user)=>{
      // prepare response body, this object will get updated depend on whether
      // the info is valid or ngOnInitlet responseBody = {
      let responseBody = {
        message: ''
      }
      // report error if there is one
      if (err){
        return done(err);
      }
      // reject if the username is already existed
      if (user){
        req.res.status(400);
        if (user.email===req.body.email){
          responseBody.message = 'Email already used';
          req.res.json(responseBody);
        }
        else {
          responseBody.message = 'Username already used';
          req.res.json(responseBody);
        }
      }
      else {
        // create new User
        let newUser = new User();
        newUser.username = req.body.username;
        newUser.email = req.body.email;
        // hash the password (sort of encryption) for security purpose
        newUser.password = newUser.generateHash(req.body.password);
        newUser.friends = [];
        newUser.hosted_events = [];
        newUser.saved_events = [];
        newUser.joined_events = [];
        // save to the database
        newUser.save((err)=>{
          // report errors while saving
          if(err){
            throw err;
          }
          req.res.status(200)
          responseBody.message = 'Signup successful';
          req.res.json(responseBody);
        })
      }
  })
})

// export the module for configuraing passport session in the app
module.exports = (passport)=>{

  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(user, done) {
    User.findOne({username: user.username}, (err, user)=>{
      done(err, user)
    })
  });


  //apply signup strategy (which we defined above)
  passport.use('signup',signupStrategy);

  //apply signin strategy (which we defined above)
  passport.use('signin', signinStrategy, (req, res, done)=>{
    done();
  });
}
