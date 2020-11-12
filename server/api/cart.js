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

// POST item to cart
router.post('/', async (req, res, next) => {
    try {
        const item = await Order_Item.create(req.body)
        res.json(item)
    } catch (err) {
        next(err)
    }
})

// PUT (change) item in cart
router.put('/:Order_ItemId', async (req, res, next) => {
    try {
        const item = await Order_Item.findByPk(req.params.Order_ItemId)
        await item.update(req.body)
        res.json(item)
    } catch (err) {
        next(err)
    }
})

// DELETE item from cart
router.delete('/:Order_ItemId', async (req, res, next) => {
    try {
        const id = req.params.Order_ItemId
        await Order_Item.destroy({
            where: { id }
        })
        res.status(204).end()
    } catch (err) {
        next(err)
    }
})

module.exports = router