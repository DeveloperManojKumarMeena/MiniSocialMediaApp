const express = require('express')
const {postController} = require('../controller/user.controller')
const multer = require('multer')



const router= express.Router()
const upload = multer({storage:multer.memoryStorage()});





router.post('/post',upload.single("photo"),postController)

module.exports=router

