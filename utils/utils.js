const User = require('../model/user');
const Event = require('../model/event');
const ObjectId = require('mongodb').ObjectId;

module.exports = {
  // function for getting all user specific details (friends, events detail ...);
  getUserDetail: async function (user) {

    var friends, hosted_events, joined_events, saved_events;

    // get detail about user's hosted events
    await Event.find({
      _id: {
        $in: user.hosted_events.map(event => ObjectId(event.event_id))
      }
    }, (err, result) => {
      hosted_events = result;
    });

    // get detail about user's joined events
    await Event.find({
      _id: {
        $in: user.joined_events.map(event => ObjectId(event.event_id))
      }
    }, (err, result) => {
      joined_events = result;
    });

    // get detail about user's saved events
    await Event.find({
      _id: {
        $in: user.saved_events.map(event => ObjectId(event.event_id))
      }
    }, (err, result) => {
      saved_events = result;
    });

    // get user's friends' details
    await User.find({
      _id: {
        $in: user.friends.map(friend => ObjectId(friend.friend_id))
      }
    }, (err, result) => {
      friends = result.map(person=>person.username);
    });

    // return all the detail after async-await
    return {
      hosted_events: hosted_events,
      saved_events: saved_events,
      joined_events: joined_events,
      friends: friends
    }
  }
  
}
