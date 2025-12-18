const express = require('express')
const {postController} = require('../controller/user.controller')

const router= express.Router()


router.post('/post',postController)

module.exports=router

