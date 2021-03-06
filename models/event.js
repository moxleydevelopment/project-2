const mongoose = require('./connection.js')


const EventSchema = new mongoose.Schema({
  userId: String,
  barUserId: String,
  hostName: String,
  eventName: String,
  date: String,
  time: String,
  location: String,
  description: String
})

const EventCollection = mongoose.model('Event', EventSchema)




function getEvents() {
  return EventCollection.find()
}

function getEventsById(id){
  return EventCollection.find(
    {"barUserId" : id}
  )
}

function getEventByBartender(id){
  return EventCollection.find(
    {"barUserId": id}
  )
}

function getEventByUserId(id){
return EventCollection.find(
  {"userId" : id}
)
}



function addEvent(userObject) {
  return EventCollection.create(userObject)
}


function updateEvent(userName, userObject) {
  return EventCollection.findOneAndUpdate(userName, userObject)
}

function deleteEvent(userId) {
  return EventeCollection.findByIdAndDelete(userId)
}


module.exports = {
  getEvents,
  addEvent,
  updateEvent,
  deleteEvent,
  getEventsById,
  getEventByBartender,
  getEventByUserId
}
