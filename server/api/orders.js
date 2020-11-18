const router = require('express').Router();
const {Order_Items, Order} = require('../db/models');

// function isAdmin(req, res, next) {
//   if (req.user && req.user.role === 'admin') {
//     next(); // allow the next route to run
//   } else {
//     res.status(403).send("You don't have permission to view this page.")}
// }

//GET all orders associated with a user, including historical prices
router.get('/', async (req, res, next) => {
  try {
    const orders = await Order.findAll({
      where: {
        userId: req.user.id,
        is_fulfilled: true,
      },
      include: {
        model: Order_Items,
      },
    });
    res.json(orders);
  } catch (err) {
    next(err);
  }
});

//GET a single order's details including historical price based on userId and orderId (so you can't get a rando's order)

router.get('/:orderId', async (req, res, next) => {
  try {
    const order = await Order.findOne({
      where: {
        userId: req.user.id,
        id: req.params.orderId,
        is_fulfilled: true,
      },
      include: {
        model: Order_Items,
      },
    });
    res.send(order);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
