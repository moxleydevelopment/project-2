
const express = require('express')


const EventApi = require('../models/event.js')
const CommentApi = require('../models/comments.js')
const UserProfileApi = require('../models/userProfile.js')
const BartenderApi = require('../models/bartender.js')


const EventRouter = express.Router()


EventRouter.get('/', (req, res) => {
  EventApi.getEvents()
    .then((e) => {
      res.send(e)
    })


})


EventRouter.post('/', (req, res) => {
  EventApi.addEvent(req.body)
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
module.exports = {
  EventRouter
}
