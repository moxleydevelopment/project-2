
const express = require('express')


const UserProfileApi = require('../models/userProfile.js')



const LoginRouter = express.Router()



LoginRouter.get('/', (req, res) => {
  res.render('login/loginUser')
})

LoginRouter.post('/', (req , res) =>{
  console.log(req.body)
  let user = req.body.userName
  let pw = req.body.passWord
  UserProfileApi.getUser(user)
  .then((u) => {
    userObject = u
    if(!(pw == userObject.passWord)){
      res.send("this is not you")
    }else{
     
       res.redirect('../user/' + user)
    }
    
  })
  
})

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  LoginRouter
}
