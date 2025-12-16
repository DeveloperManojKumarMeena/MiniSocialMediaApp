const express = require('express')
const{registerController,LoginController} = require('../controller/auth.controller')




const router = express.Router()

router.post('/register',registerController)

router.post('/login',LoginController)


module.exports=router