
const express = require('express')


const BartenderApi = require('../models/bartender.js')
const CommentApi = require('../models/comments.js')


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
    .then((b)=>{
      bartender = b;
      console.log(bartender)
      CommentApi.getCommentsById(bartender._id)
    .then((c) =>{
      comments = c
      
      console.log(comments)
      res.render('bartender/bartender', {bartender, comments})
    })
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
