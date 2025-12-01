const mongoose = require('mongoose')

const user = new mongoose.Schema({
    username:String,
    password:String,
    email:String,
    Mobile:Number

})

const usermodel = mongoose.model("Users",user)

module.exports=usermodel