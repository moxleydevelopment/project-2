
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
  BartenderApi.getBartenderById(req.params.userName)
    .then((bartender) => {
      res.render('bartender/editBartenderForm', { bartender })
    })
})


BartenderRouter.get('/:userName', (req, res) => {
  BartenderApi.getBartenderById(req.params.userName)
    .then((b) => { bartender = b })
  CommentApi.getCommentsById(req.params.userName)
    .then((c) => { comments = c })
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
  barId = req.params.bartenderId
  BartenderApi.updateBartender(req.params.bartenderId, req.body)
    .then(BartenderApi.getBartenderById(barId))
    .then((b) => {
      bartender = b
      CommentApi.getCommentsById(barId)
        .then((c) => {
          comments = c
          EventApi.getEventByBartender(barId)
            .then((evt) => {
              events = evt
              res.render('bartender/bartender', { bartender, comments, events })
            })
        })

    })
})



BartenderRouter.delete('/:userId', (req, res) => {
  BartenderApi.deleteBartender(req.params.userId)
  .then(() =>{
    res.redirect('/bartender/login')
  })
})



module.exports = {
  BartenderRouter
}
