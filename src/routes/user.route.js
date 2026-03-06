const express= require('express')
const userController = require('../controllers/user.controller')

const route = express()

route.post('/register',userController.register)
route.post('/login',userController.login)
route.post('/logout',userController.logout)

module.exports = route