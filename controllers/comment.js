/* Step 1 import express
 *
 */
const express = require('express')


const CommentApi = require('../models/comments.js')


const CommentRouter = express.Router()


CommentRouter.post('/', (req, res) => {
   console.log(req.body)
})


module.exports = {
  CommentRouter
}
