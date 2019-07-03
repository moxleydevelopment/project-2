
const express = require('express')


const EventApi = require('../models/event.js')


const EventRouter = express.Router()

 
EventRouter.get('/', (req, res) => {
  EventApi.getEvents()
  .then((e) =>{
    res.send(e)
  })
  
  
})


EventRouter.post('/' , (req , res) =>{
  EventApi.addEvent(req.body)
  .then((e) =>{
    res.send(e)
  })
})
module.exports = {
  EventRouter
}
