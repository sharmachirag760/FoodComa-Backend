const express = require('express')
const { getCartById } = require('../controllers/cartController')

const cartRouter = express.Router()


cartRouter('/:id',getCartById)
module.exports = cartRouter