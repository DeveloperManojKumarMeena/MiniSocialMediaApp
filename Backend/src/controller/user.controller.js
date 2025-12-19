const jwt = require('jsonwebtoken');
const usermodel = require('../models/user.model');
const UnderstandingImage = require('../services/gemini.service')
const {uploadFile} =require('../services/imageKit.service')
const postModel = require('../models/post.model')




async function postController(req, res) {

    const token = req.cookies.auth_Token;
    const File= req.file;
  
    const base64Image = new Buffer.from(File.buffer).toString('base64') 

    if (!token) return res.status(402).json({
        message: "user not have a valid token"
    })




   try {
    const decoded = jwt.verify(token, process.env.JWT_Secret)

    const user = await usermodel.findById(decoded.id)

    if (!user) {
        return res.status(402).json({ message: "User not found" })
    }

    req.user = user   // ✅ IMPORTANT LINE

}catch (error) {
        return res.status(402).json({
            message: "invalid token id",
            error
        })
    }


        const result= await UnderstandingImage(base64Image)
         const ImageURL = await uploadFile(File.buffer)

      const postCreate = await postModel.create({
        photo:ImageURL.url,
        capstion:result,
        user:req.user._id
      })
       
       res.status(201).json({
        message:"post created succfully",
        postCreate
       })



}

module.exports = {
    postController
}