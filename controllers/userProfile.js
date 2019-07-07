
const express = require('express')


const UserProfileApi = require('../models/userProfile.js')
const BartenderApi = require('../models/bartender.js')
const CommentApi = require('../models/comments.js')
const EventApi = require('../models/event.js')
const UserProfileRouter = express.Router()




UserProfileRouter.get('/', (req, res) => {
  res.render('login/loginUser')
})

UserProfileRouter.get('/new', (req, res) => {
  res.render('user/newUser')
})


UserProfileRouter.get('/:userId/edit', (req, res) => {
  
  UserProfileApi.getUserById(req.params.userId)
    .then((user) => {
      
      res.render('user/editUserForm', { user })
    })

})

UserProfileRouter.get('/:userId/bartender/:barUserId', (req, res) => {
  let userId = req.params.userId
  let barId = req.params.barUserId

  UserProfileApi.getUserById(userId)
    .then((u) => { user = u })
  BartenderApi.getBartenderById(barId)
    .then((b) => {
      bartender = b
    })
  CommentApi.getCommentsById(barId)
    .then((c) => {
      comments = c
    })
  EventApi.getEventsById(barId)
    .then((ev) => {
      events = ev
      console.log(comments)
      console.log(user)
      console.log(bartender)
      console.log(events)
      res.render('user/selectBartender', { user, bartender, comments , events })
    })
})


UserProfileRouter.get('/:userName', (req, res) => {

  UserProfileApi.getUser(req.params.userName)
    .then((userObject) => {
      console.log(userObject)


      BartenderApi.getAllBartenders()
        .then(bartenders => {

          const viewData = bartenders.map((bartender) => {

            return {
              userId: userObject._id,
              ...bartender._doc
            }
          })
          console.log(viewData)
          res.render('user/user', { bartenders: viewData, userObject })
        })
        .catch((err) => {
          console.log('ran into error rendering bartenders')
          console.log(err)
          res.send(err)
        });


    }).catch(res.send)

})



UserProfileRouter.post('/', (req, res) => {
  UserProfileApi.addUser(req.body)
    .then(() => {
      res.redirect('/login/')
    })
})





UserProfileRouter.put('/:userId', (req, res) => {
  UserProfileApi.updateUser(req.params.userId, req.body)
    .then(UserProfileApi.getUserById(req.params.userId))
    .then((userObject) => {
      console.log(userObject)
      
      BartenderApi.getAllBartenders()
        .then(bartenders => {

          const viewData = bartenders.map((bartender) => {

            return {
              userId: userObject._id,
              ...bartender._doc
            }
          })
          console.log(viewData)
          res.render('user/user', { bartenders: viewData, userObject })
        })
    })
})



UserProfileRouter.delete('/:userId', (req, res) => {
  UserProfileApi.deleteUser(req.params.userId)
  .then(res.render('/login/'))
})

module.exports = {
  UserProfileRouter
}
