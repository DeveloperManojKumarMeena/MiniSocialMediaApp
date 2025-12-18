const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    photo : String,
    capstion:String,
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
})

const postModel = mongoose.model("post" , postSchema);

module.exports=postModel;