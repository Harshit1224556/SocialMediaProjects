const express = require('express')
const authUser = require('./routes/auth.routes')
const cookieParser = require('cookie-parser')
const app = express()

const postRoutes = require('./routes/post.routes')
app.use(express.json())

app.use(cookieParser())
app.use('/auth',authUser)
app.use('/post',postRoutes)
module.exports=app

