const mongoose = require('./connection.js')



const BartenderSchema = new mongoose.Schema({
      
     userName :{
       type: String,
       required: true
     },

     passWord: {
       type: String,
       required: true
     },

     firstName :{
       type: String,
       required: true
     },

     lastName : {
       type: String ,
       required: true
     },

     rating : {
       type: Number,
       min : 1,
       max : 5,
       default: 5
     }
})

const BartenderCollection = mongoose.model('Bartender', BartenderSchema)


function getBartender(userName){
  return BartenderCollection.findOne({"userName": userName})
}

function getAllBartenders(){
  return BartenderCollection.find()
}

function addNewBartender(bartenderObject){
  return BartenderCollection.create(bartenderObject)
}

function updateBartender(bartenderId, bartenderObject){
  return BartenderCollection.findByIdAndUpdate(bartenderId, bartenderObject)
}


function deleteBartender(userName){
  return BartenderCollection.findOneAndDelete(userName)
}





module.exports = {
  getAllBartenders,
  getBartender,
  addNewBartender,
  updateBartender,
  deleteBartender
}
