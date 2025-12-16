const usermodel = require("../models/user.model");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

async function registerController(req, res) {


    const { username, password, email, Mobile } = req.body;

    const isUserExi = await usermodel.findOne({ username })

    if (isUserExi) {
        return res.status(501).json({
            Message: "This UserName Already Exist try with another"
        })
    }

    const user = await usermodel.create({
        username, password: await bcrypt.hash(password, 10), email, Mobile
    })

    const token = jwt.sign({ id: user._id }, process.env.JWT_Secret)

    res.cookie("Auth_Token", token)
    res.status(201).json({
        message: "You register Succussfully",
        user
    })

}


async function LoginController(req, res) {
    const { username, password } = req.body;

    const user = await usermodel.findOne({
        username
    })
    if (!user) {
        return res.status(401).json({
            message: "User Not Fond Please Register First"
        })
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).json({
            message: "Password is not valid"
        })
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_Secret)
    res.cookie("auth_Token", token)
    res.status(201).json({
        message: "User Logedin succussfully...",
        user
    })
}


module.exports = { registerController, LoginController }