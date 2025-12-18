const jwt = require('jsonwebtoken');
const usermodel = require('../models/user.model');
const captionCreation = require('../services/gemini.service')

async function postController(req, res) {

    const token = req.cookies.auth_Token;

  

    if (!token) return res.status(402).json({
        message: "user not have a valid token"
    })




    try {
        const decoded = jwt.verify(token, process.env.JWT_Secret)

        const user = await usermodel.findOne({
            _id: decoded.id
        })

       

    } catch (error) {
        return res.status(404).json({
            message: "invalid token id",
            error
        })
    }






}

module.exports = {
    postController
}