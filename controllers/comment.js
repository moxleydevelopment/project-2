/* Step 1 import express
 *
 */
const express = require('express')


const CommentApi = require('../models/comments.js')
const UserProfileApi = require('../models/userProfile.js')
const BartenderApi = require('../models/bartender.js')
const EventApi = require('../models/event.js')



const CommentRouter = express.Router()


CommentRouter.post('/', (req, res) => {
  CommentApi.addComment(req.body)
    .then(() => {
      userId = req.body.authorId
      barId = req.body.bartenderId
      UserProfileApi.getUserById(userId)
        .then((u) => { user = u })
      BartenderApi.getBartenderById(barId)
        .then((b) => { bartender = b })
      CommentApi.getCommentsById(barId)
        .then((c) => { comments = c })
      EventApi.getEventByBartender(barId)
        .then((evt) => {
          events = evt
          res.render('user/selectBartender', { user, bartender, comments, events })
        })

    })

})

CommentRouter.get('/', (req, res) => {
  CommentApi.getComments()
    .then((comment) => {
      console.log(comment)
      res.send(comment)
    })
})

CommentRouter.get('/:barId', (req, res) => {
  CommentApi.getCommentById(req.params.barId)
    .then((comment) => {
      console.log('this is here' + comment)
      res.render('comments/edit' , {comment})

    })
})

CommentRouter.put('/:id', (req, res) =>{
  CommentApi.updateComment(req.params.id, req.body)
  .then((comment) =>{
    console.log(" this is the comment"+ comment)
    id = comment.authorId
    barId = comment.bartenderId
    console.log(id)
    
    res.redirect('../user/'+ id)
  })
  
})

CommentRouter.delete('/:id', (req , res) =>{
  CommentApi.getCommentById(req.params.id)
  .then((c) =>{
    comment = c
    userId = comment.authorId
  })
  CommentApi.deleteComment(req.params.id)
  .then(()=>{
    res.redirect('../user/' + userId)
  })

})

module.exports = {
  CommentRouter
}
