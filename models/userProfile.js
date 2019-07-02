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

function getUserById(id){
  return UserCollection.findById(id)
}

function getAllUsers(){
  return UserCollection.find()
}




function addUser(userObject){
  return UserCollection.create(userObject)
}


function updateUser(userName, userObject){
  return  UserCollection.findOneAndUpdate(userName, userObject)
}

function deleteUser(userId){
  return UserCollection.findByIdAndDelete(userId)
}


module.exports = {
 getUser,
 addUser,
 updateUser,
 deleteUser,
 getAllUsers,
 getUserById
}
