require('dotenv').config()
const express = require('express')
const authRoutes = require('./routes/auth.route') // ⬅️ 1. Import Fix
const cookeparser = require('cookie-parser')



const app = express()


app.use(express.json()) 
app.use(cookeparser())  



app.use('/api/auth', authRoutes);


module.exports=app