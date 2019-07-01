
const express = require('express')


const UserProfileApi = require('../models/userProfile.js')


const UserProfileRouter = express.Router()




UserProfileRouter.get('/' ,(req, res) => {
  UserProfileApi.getAllUsers()
  .then( (users) => {
    res.send(users)
  })
})

UserProfileRouter.get('/new', (req,res)=>{
  res.render('user/newUser')
})

UserProfileRouter.get('/:userName', (req, res) => {
   UserProfileApi.getUser(req.params.userName)
   
   .then((user) =>{
     console.log(req.params)
     res.render('user/user' , {user})
   })
})



UserProfileRouter.post('/', (req, res) =>{
  UserProfileApi.addUser(req.body)
  .then(() =>{
    res.redirect('/login/')
  })
})

UserProfileRouter.put('/:userId/edit', (req, res) =>{
  res.send(UserProfileApi.updateUser(req.params.userId))
})

UserProfileRouter.delete('/:userId', (req, res) =>{
  res.send(UserProfileApi.deleteUser(req.params.userId))
})

module.exports = {
  UserProfileRouter
}
