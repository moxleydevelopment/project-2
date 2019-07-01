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
  return CommentCollection.find()
}




function addComment(userObject){
  return CommentCollection.create(userObject)
}


function updateComment(userName, userObject){
  return  CommentCollection.findOneAndUpdate(userName, userObject)
}

function deleteComment(userId){
  return CommentCollection.findByIdAndDelete(userId)
}
module.exports = {
  getComment,
  getComments,
  addComment,
  updateComment,
  deleteComment
}
