/* Step 1 import express
 *
 */
const express = require('express')


const CommentApi = require('../models/comments.js')


const CommentRouter = express.Router()


CommentRouter.post('/:userId/', (req, res) => {
 CommentApi.addComment()
})


module.exports = {
  CommentRouter
}
