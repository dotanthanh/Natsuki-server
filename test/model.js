const chai = require('chai');
const Event = require('../model/event');

// create an object to pass to the Event model
var eventObject = {
  name: 'testing update status utility function for the model',
  description: 'the test should damn work',
  participants: [
    {
      user_id: 'dummy id here'
    }
  ],
  start_time: new Date(Date.now()+20000),
  end_time: new Date(Date.now()+40000),
  category: 'testing',
  hashtag: ['#muchtest', '#suchwow'],
  status: 'upcoming'
}

// create the Event model with the eventObject
var event = new Event(eventObject);

describe('Test status upcoming of the event, when start_time > now', ()=>{
  it('should be opening', ()=>{
    // the date for the event in now in the future, (after update)
    // the event should have 'upcoming' status
    event.updateStatus();
    chai.expect(event.status).to.equal('upcoming');
  })
})

describe('Test status opening of the event, when start_time < now', ()=>{
  it('should be opening', ()=>{
    // modify the eventObject to make event started at the present and create a new Event with that
    // the date for the event in now in the future, after update
    // the event should have 'opening' status
    event.start_time = new Date(Date.now()-20000);
    event.updateStatus();
    chai.expect(event.status).to.equal('opening');
  })
})

describe('Testing status closed of the event, when end_time < now', ()=>{
  it('should be closed', ()=>{
    // modify the eventObject to make event closed at the present and create a new Event with that
    // the date for the event in now in the future, after update
    // the event should have 'closed' status
    event.end_time = new Date(Date.now()-20000);
    event.updateStatus();
    chai.expect(event.status).to.equal('closed');
  })
})
