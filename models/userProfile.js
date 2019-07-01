const mongoose = require('./connection.js')




const UserSchema = new mongoose.Schema({
      userName : {
        type: String,
        required: true
      },

      passWord: {
        type: String, 
        required: true
      },

      firstName : {
        type: String,
        required: true
      },

      lastName : {
        type: String,
        required: true
      },

      dateOfBirth: {
        type: String,
        
      }


})

const UserCollection = mongoose.model('User', UserSchema)

function getUser(user){
  return UserCollection.findOne(
    {"userName": user}
  ) 
}

function getAllUsers(){
  return UserCollection.find()
}




function addUser(userObject){
  return UserCollection.create(userObject)
}


function updateUser(userId){
  return  `the user ${userId} was updated` /*UserCollection.findByIdAndUpdate(userId)*/
}

function deleteUser(userId){
  return `user ${userId} was deleted` /* UserCollection.findByIdAndDelete(userId)*/
}


module.exports = {
 getUser,
 addUser,
 updateUser,
 deleteUser,
 getAllUsers
}
