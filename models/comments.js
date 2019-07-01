const mongoose = require('./connection.js')



const CommentSchema = new mongoose.Schema({
  author: String,
  rating: Number,
  description: String
})

const CommentsCollection = mongoose.model('Comments', CommentSchema)




function getComment(){
  return CommentsCollection.findOne(
    {"userName": user}
  ) 
}

function getComments(){
  return UserCollection.find()
}




function addComment(userObject){
  return UserCollection.create(userObject)
}


function updateComment(userName, userObject){
  return  UserCollection.findOneAndUpdate(userName, userObject)
}

function deleteComment(userId){
  return UserCollection.findByIdAndDelete(userId)
}
module.exports = {
  getComment,
  getComments,
  addComment,
  updateComment,
  deleteComment
}
