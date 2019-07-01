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
  return CommentsCollection.findOne(
    {"userName": user}
  ) 
}

function getEvents(){
  return UserCollection.find()
}




function addEvent(userObject){
  return UserCollection.create(userObject)
}


function updateEvent(userName, userObject){
  return  UserCollection.findOneAndUpdate(userName, userObject)
}

function deleteEvent(userId){
  return UserCollection.findByIdAndDelete(userId)
}


module.exports = {
  getEvent,
  getEvents,
  addEvent,
  updateEvent,
  deleteEvent
}
