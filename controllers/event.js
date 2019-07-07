
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
  console.log(req.body)
  EventApi.addEvent(req.body)
    .then(() => {
      userId = req.body.userId
      barId = req.body.barUserId
      res.redirect('../user/'+ userId +'/bartender/' + barId)
        
    })
})
module.exports = {
  EventRouter
}
