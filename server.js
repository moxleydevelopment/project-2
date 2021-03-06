


const express = require('express')
const app = express()
const methodOverride = require('method-override')

const {LoginRouter} = require('./controllers/login.js')
const { UserProfileRouter } = require('./controllers/userProfile.js')
const { BartenderRouter} = require('./controllers/barteneder')
const {CommentRouter} = require('./controllers/comment.js')
const {EventRouter} = require('./controllers/event.js')




app.use(express.urlencoded({extended: true}))



app.use(express.json())



app.use(methodOverride('_method'))



app.use(express.static(__dirname+"/public"))



app.set('view engine', 'hbs')



app.use('/login', LoginRouter)
app.use('/user', UserProfileRouter)
app.use('/bartender', BartenderRouter)
app.use('/comment' , CommentRouter)
app.use('/event', EventRouter)



const PORT = process.env.PORT || 3000 



app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})
