const express = require('express')
const userRoutes= require('./routes/user.route')
const musicRoutes= require('./routes/music.route')
const cookieParser = require('cookie-parser')

const app = express();
app.use(cookieParser());

app.use(express.json())
app.use('/api/auth', userRoutes)
app.use('/api/music', musicRoutes)

module.exports = app