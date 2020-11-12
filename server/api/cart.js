const router = require('express').Router()
const { Order_Item } = require('../db/models')

// GET cart
router.get('/', async (req, res, next) => {
    try {
        const cart = await Order_Item.findAll()
        res.json(cart)
    } catch (err) {
        next(err)
    }
})

module.exports = router