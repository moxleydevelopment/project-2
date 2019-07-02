/* Step 1 import express
 *
 */
const express = require('express')


const CommentApi = require('../models/comments.js')
const UserProfileApi = require('../models/userProfile.js')
const BartenderApi = require('../models/bartender.js')


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
        .then((c) => {
          comments = c
          res.render('user/selectBartender', { user, bartender, comments })
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
  CommentApi.getCommentsById(req.params.barId)
    .then((comment) => {
      console.log(req.params)
      console.log(comment)
      res.send(comment)

    })
})


module.exports = {
  CommentRouter
}
