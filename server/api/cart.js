const router = require('express').Router();
const {Order_Items, Order, Product} = require('../db/models');

// GET cart - /api/cart/
//get the Order_Items table based on the matching userId where order !is_fulfilled

router.get('/', async (req, res, next) => {
  try {
    const cart = await Order.findOne({
      //find the cart, including order items of current user, with a status of not fulfilled
      where: {
        userId: req.user.id,
        is_fulfilled: false,
      },
      include: {
        model: Product,
      },
    });
    res.json(cart);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// POST add item to cart - /api/cart/
router.post('/', async (req, res, next) => {
  try {
    //search for or create new "cart" aka order for user if they don't have it already
    const [cart] = await Order.findOrCreate({
      where: {
        userId: req.user.id,
        is_fulfilled: false,
      },
    });
    const {quantity, selected_size, productId} = req.body;
    let orderItem = await Order_Items.findOne({
      where: {productId, orderId: cart.id},
    });
    if (orderItem !== null) {
      orderItem.quantity = quantity;
      await orderItem.save();
    } else {
      orderItem = await Order_Items.create({
        orderId: cart.id,
        quantity,
        selected_size,
        productId: productId,
      });
    }
    const updatedCart = await Order.findOne({
      where: {
        userId: req.user.id,
        is_fulfilled: false,
      },
      include: {
        model: Order_Items,
      },
    });
    res.json(updatedCart);
  } catch (err) {
    next(err);
  }
});

//DELETE item from cart - /api/cart/:productId(in Order_Items)
router.delete('/:productId', async (req, res, next) => {
  try {
    const cart = await Order.findOne({
      where: {
        userId: req.user.id,
        is_fulfilled: false,
      },
    });
    await Order_Items.destroy({
      where: {
        productId: req.params.productId,
        orderId: cart.id,
      },
    });
    const updatedCart = await Order.findOne({
      where: {
        userId: req.user.id,
        is_fulfilled: false,
      },
      include: {
        model: Order_Items,
      },
    });
    res.json(updatedCart);
  } catch (err) {
    next(err);
  }
});

//CLEAR cart - /api/cart/
router.delete('/', async (req, res, next) => {
  try {
    await Order.destroy({
      where: {
        userId: req.user.id,
      },
    });
    res.status(204).end();
  } catch (err) {
    next(err);
  }
});

module.exports = router;
