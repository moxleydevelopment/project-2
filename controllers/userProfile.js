
const express = require('express')


const UserProfileApi = require('../models/userProfile.js')
const BartenderApi = require('../models/bartender.js')

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


UserProfileRouter.get('/:userName/edit', (req, res) =>{
  UserProfileApi.getUser(req.params.userName)
  .then((user) =>{
     res.render('user/editUserForm' , {user})
  })
 
})

UserProfileRouter.get('/:userName/bartender/:barUser', (req , res) =>{
  let user 
  UserProfileApi.getUser(req.params.userName)
  .then((u) =>{
    console.log(u)
    user = u
  })

  .then(BartenderApi.getBartender(req.params.barUser))
  .then(bartender => {
    console.log(bartender)
    res.render('user/selectBartender' , {user, bartender})
  })

})


UserProfileRouter.get('/:userName', (req, res) => {

    UserProfileApi.getUser(req.params.userName)
    .then((user)=> { 
      console.log(user)


       BartenderApi.getAllBartenders()
        .then(bartenders => {
          console.log(bartenders)
          console.log(user)
          const viewData = bartenders.map((bartender) => {

            return {
              userId: user._id,
              ...bartender._doc
            }
          })
          console.log(viewData)
          res.render('user/user' , {bartenders: viewData, user: data})
        }).catch(res.send)


    }).catch(res.send)
   
})



UserProfileRouter.post('/', (req, res) =>{
  UserProfileApi.addUser(req.body)
  .then(() =>{
    res.redirect('/login/')
  })
})


UserProfileRouter.put('/:userName', (req, res) =>{
  UserProfileApi.updateUser(req.params.userName , req.body)
  .then(UserProfileApi.getUser(req.params.userName))
  .then((user) => {
    res.render('user/user' , {user})
  })
})



UserProfileRouter.delete('/:userId', (req, res) =>{
  res.send(UserProfileApi.deleteUser(req.params.userId))
})

module.exports = {
  UserProfileRouter
}
