const mongoose = require('./connection.js')


const EventSchema = new mongoose.Schema({
  hostName: String,
  eventName: String,
  date: String,
  time: String,
  location: String,
  description: String
})

const EventCollection = mongoose.model('Event', EventSchema)


function getEvent(){
  return EventCollection.findOne(
    {"userName": user}
  ) 
}

function getEvents(){
  return EventCollection.find()
}




function addEvent(userObject){
  return EventCollection.create(userObject)
}


function updateEvent(userName, userObject){
  return  EventCollection.findOneAndUpdate(userName, userObject)
}

function deleteEvent(userId){
  return EventCollection.findByIdAndDelete(userId)
}


module.exports = {
  getEvent,
  getEvents,
  addEvent,
  updateEvent,
  deleteEvent
}
