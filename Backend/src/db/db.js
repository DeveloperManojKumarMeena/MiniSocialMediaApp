const mongoose = require('mongoose')

const ConnectDB = ()=>{
    mongoose.connect(process.env.MongoDB_URL)
    .then(()=>{
        console.log("MongoDB Connected Succussfully...")
    })
}

module.exports= ConnectDB