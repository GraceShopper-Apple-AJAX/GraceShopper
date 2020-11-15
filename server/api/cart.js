const router = require('express').Router()
const {Order_Items, Order} = require('../db/models')
const {magenta} = require('chalk')

// GET cart
router.get('/', async (req, res, next) => {
  try {
    const cart = await Order.findByPk(req.params.userId, {
      where: {
        is_fulfilled: false
      },
      include: Order_Items
    })
    res.json(cart)
  } catch (err) {
    next(err)
  }
});

// POST item to cart
router.post('/', async (req, res, next) => {
  try {
    let cart = await Order.findOne({
      where: {
        userId: this.userId,
        is_fulfilled: false
      }
    })
    if (cart) {
      const itemExists = await Order_Items.findByPk()
      if (itemExists) {
        const item = await Order_Items.findByPk(req.body.productId)
        await item.update({
          quantity: this.quantity++
        })
        res.json(item)
      }
    } else {
      const newCart = await Order.create({
        is_fulfilled: false,
        userId: this.userId
      })
      cart = newCart
    }
    const newItem = await Order_Items.create({
      quantity: req.body.quantity,
      selected_size: req.body.selected_size,
      historical_price: req.body.historical_price
    })
    res.json(newItem)
  } catch (err) {
    next(err)
  }
});

// DELETE item from cart
router.delete('/:Order_ItemsId', async (req, res, next) => {
  try {
    const id = req.params.Order_ItemsId
    await Order_Items.destroy({
      where: { id },
    })
    res.status(204).end();
  } catch (err) {
    next(err)
  }
})

module.exports = router