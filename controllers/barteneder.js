
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
    res.render('bartender/newBartender')
  })


  BartenderRouter.get('/:userName', (req , res) =>{
    BartenderApi.getBartender(req.params.userName)
    .then((bartender)=>{
      
    })
  })


 BartenderRouter.post('/' , (req , res) =>{
   BartenderApi.addNewBartender(req.body)
   .then(() =>{
     res.redirect('/login/')
   })
 })



module.exports = {
  BartenderRouter
}
