/* Step 1 import express
 *
 */
const express = require('express')


const CommentApi = require('../models/comments.js')


const CommentRouter = express.Router()


CommentRouter.post('/', (req, res) => {
   CommentApi.addComment(req.body)
   .then(() => {
     console.log(req.body)
     //res.render('user/selectBartender')
   })
   
})

CommentRouter.get('/', (req, res) => {
  CommentApi.getComments()
  .then((comment) => {
    console.log(comment)
    res.send(comment)})
})

CommentRouter.get('/:barId' , (req, res) =>{
  CommentApi.getCommentsById(req.params.barId)
  .then((comment) =>{
    console.log(req.params)
    console.log(comment)
    res.send(comment)

  })
})


module.exports = {
  CommentRouter
}
