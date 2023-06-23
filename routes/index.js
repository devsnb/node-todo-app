const express = require('express')
const todoRouter = require('./todo')
const { homeScreen } = require('../controllers/home_controller')

const router = express.Router()

router.get('/', homeScreen)
router.use('/todo', todoRouter)

module.exports = router
