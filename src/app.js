const express = require('express')
const authUser = require('./routes/auth.routes')
const cookieParser = require('cookie-parser')
const app = express()
app.use(express.json())

app.use(cookieParser())
app.use('/auth',authUser)

module.exports=app

