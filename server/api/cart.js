const router = require('express').Router()
const {Order_Items, Order} = require('../db/models')

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
    const cart = await Order.findOne({
      where: {
        is_fulfilled: false
      }
    })
    if (cart) {
      const itemExists = await Order_Items.getProduct()
      if (itemExists) {
        const item = await Order_Items.findByPk(req.params.Order_ItemsId)
        await item.update(req.body)
        res.json(item)
      } else {
        const cart = await Order.create({
          is_fulfilled: false
        })
      }
    }
    const newItem = await Order_Items.create(req.body)
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