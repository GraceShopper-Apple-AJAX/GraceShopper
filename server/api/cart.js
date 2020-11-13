const router = require('express').Router();
const {Order_Items} = require('../db/models');

// GET cart
router.get('/', async (req, res, next) => {
  try {
    const cart = await Order_Items.findAll();
    res.json(cart);
  } catch (err) {
    next(err);
  }
});

// POST item to cart
router.post('/', async (req, res, next) => {
  try {
    const item = await Order_Items.create(req.body);
    res.json(item);
  } catch (err) {
    next(err);
  }
});

// PUT (change) item in cart
router.put('/:Order_ItemsId', async (req, res, next) => {
  try {
    const item = await Order_Items.findByPk(req.params.Order_ItemsId);
    await item.update(req.body);
    res.json(item);
  } catch (err) {
    next(err);
  }
});

// DELETE item from cart
router.delete('/:Order_ItemsId', async (req, res, next) => {
  try {
    const id = req.params.Order_ItemsId;
    await Order_Items.destroy({
      where: {id},
    });
    res.status(204).end();
  } catch (err) {
    next(err);
  }
});

module.exports = router;
