const mongoose = require('./connection.js')



const CommentSchema = new mongoose.Schema({
  author: String,
  authorId: String,
  bartenderId: String,
  rating: Number,

  description: String
})

const CommentsCollection = mongoose.model('Comments', CommentSchema)




function getCommentsById(barId) {
  return CommentsCollection.find(
    { "bartenderId": barId }
  )
}

function getCommentById(id){
  return CommentsCollection.findById(id)
}

function getComments() {
  return CommentsCollection.find()
}

function getCommentsByUserId(id){
return CommentsCollection.find(
  {"authorId" : id}
)
}




function addComment(userObject) {
  return CommentsCollection.create(userObject)
}


function updateComment(userName, userObject) {
  return CommentsCollection.findOneAndUpdate(userName, userObject)
}

function deleteComment(userId) {
  return CommentsCollection.findByIdAndDelete(userId)
}
module.exports = {
  getCommentsById,
  getComments,
  addComment,
  updateComment,
  deleteComment,
  getCommentsByUserId,
  getCommentById
}
