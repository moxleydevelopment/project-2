
const express = require('express')


const BartenderApi = require('../models/bartender.js')


const BartenderRouter = express.Router()


BartenderRouter.get('/', (req, res) => {
  BartenderApi.getAllBartenders()
  .then((bartenders) =>{
    res.send(bartenders)
  })
  })

  BartenderRouter.get('/new', (req , res) =>{
    res.render()
  })



module.exports = {
  BartenderRouter
}
