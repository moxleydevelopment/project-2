
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

  BartenderRouter.get('/:userName/edit' , (req, res) =>{
    BartenderApi.getBartender(req.params.userName) 
    .then((bartender) =>{
      res.render('bartender/editBartenderForm' ,{bartender})
    })
  })


  BartenderRouter.get('/:userName', (req , res) =>{
    BartenderApi.getBartender(req.params.userName)
    .then((bartender)=>{
      console.log(bartender)
      res.render('bartender/bartender', {bartender})
    })
  })


 BartenderRouter.post('/' , (req , res) =>{
   BartenderApi.addNewBartender(req.body)
   .then(() =>{
     res.redirect('/login/')
   })
 })


 BartenderRouter.put('/:bartenderId', (req, res) =>{
  BartenderApi.updateBartender(req.params.bartenderId , req.body)
  .then(BartenderApi.getBartender(req.params.userName))
  .then((bartender) => {
    res.render('bartender/bartender' , {bartender})
  })
})



BartenderRouter.delete('/:userId', (req, res) =>{
  res.send(BartenderApi.deleteBartender(req.params.userId))
})



module.exports = {
  BartenderRouter
}
