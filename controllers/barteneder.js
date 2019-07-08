
const express = require('express')


const BartenderApi = require('../models/bartender.js')
const CommentApi = require('../models/comments.js')
const EventApi = require('../models/event.js')


const BartenderRouter = express.Router()


BartenderRouter.get('/', (req, res) => {
  BartenderApi.getAllBartenders()
    .then((bartenders) => {
      res.send(bartenders)
    })
})

BartenderRouter.get('/new', (req, res) => {
  res.render('bartender/newBartender')
})

BartenderRouter.get('/login', (req, res) => {
  res.render('login/loginBar')
})


BartenderRouter.get('/:userName/edit', (req, res) => {
  BartenderApi.getBartender(req.params.userName)
    .then((bartender) => {
      res.render('bartender/editBartenderForm', { bartender })
    })
})


BartenderRouter.get('/:userName', (req, res) => {
  BartenderApi.getBartenderById(req.params.userName)
    .then((b) => {bartender = b})
  CommentApi.getCommentsById(req.params.userName)
    .then((c) => {comments = c})
  EventApi.getEventsById(req.params.userName)
    .then((ev) => {
      events = ev
      res.render('bartender/bartender', { bartender, comments, events })
    })
})


BartenderRouter.post('/', (req, res) => {
  BartenderApi.addNewBartender(req.body)
    .then(() => {
      res.redirect('/login/loginBar')
    })
})


BartenderRouter.put('/:bartenderId', (req, res) => {
  BartenderApi.updateBartender(req.params.bartenderId, req.body)
    .then(BartenderApi.getBartender(req.params.userName))
    .then((bartender) => {
      res.render('bartender/bartender', { bartender })
    })
})



BartenderRouter.delete('/:userId', (req, res) => {
  res.send(BartenderApi.deleteBartender(req.params.userId))
})



module.exports = {
  BartenderRouter
}
