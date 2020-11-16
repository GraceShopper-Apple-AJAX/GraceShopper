const router = require('express').Router();
const {Order_Items, Product, Order} = require('../db/models');

// GET cart - /api/cart/:order.id --> id = order.id
//get the Order_Items table of the matching order id

router.get('/:id', async (req, res, next) => {
  try {
    const cart = await Order.findAll({
      //find the cart = order items of the orderId, with a status of not-fulfilled
      where: {
        id: req.params.id,
        is_fulfilled: false,
      },
      include: {
        model: Product,
      },
    });
    res.json(cart);
  } catch (err) {
    next(err);
  }
});

// POST add item to cart - /api/cart/:id --> id = order.id
router.post('/:id', async (req, res, next) => {
  try {
    //search for or create new "cart" aka Order_Items for user if they don't have already
    let newCart = await Order.findOrCreate({
      where: {id: req.params.id, is_fulfilled: false},
    });
    const {quantity, selected_size} = req.body;
    //Look for product
    const product = await Product.findAll({
      where: {
        id: req.params.id,
      },
    });
    //store instances of the cart and product data
    const order_id = newCart[0].dataValues.id;
    const product_id = product[0].dataValues.id;
    //create product instance in Order_Items.
    const productInfo = await Order_Items.create({
      orderId: order_id,
      quantity,
      selected_size: selected_size,
      productId: product_id,
    });
    res.json(productInfo);
  } catch (err) {
    next(err);
  }
});

// PUT -  edit item in cart - /api/cart/:order.id/productId (in Order_Items)

router.put('/:id', async (req, res, next) => {
  try {
    const findOrder = await Order.findAll({
      where: {
        id: req.params.id
      }
    });
    const findProduct = await Product.findAll({
      where: {
        id: req.params.id,
      }
    })
    const order_id = findOrder[0].dataValues.id;
    const product_id = findProduct[0].dataValues.id;

    const item = await Order_Items.findAll({
      //find Order_Item that matches
      where: {
        orderId: order_id,
        productId: product_id,
      },
    });
    await item[0].update(req.body)

    const updatedItem = await Order.findAll({
      where: {
        id: req.params.id,
        is_fulfilled: false
      },
      include: [
        {
        model: Product,
        where: {
          id: req.params.id
        },
        required: true
      }
      ]
    })
    res.json(updatedItem)
  } catch (err) {
    next(err);
  }
});

//DELETE item from cart - /api/cart/:order.id/:productId(in Order_Items)
router.delete('/:id/:productId', async (req, res, next) => {
  try {
    const findOrder = await Order.findAll({
      where: {
        id: req.params.id,
      },
    });
    const order_id = findOrder[0].dataValues.id;

    const item = await Order_Items.findAll({
      //find Order_Items that matches
      where: {
        orderId: order_id,
        productId: req.params.productId,
        selected_size: selected_size,
      },
    });
    await item[0].destroy();
    console.log('item removed from cart', item);
  } catch (err) {
    next(err);
  }
});

//CLEAR cart - /api/cart/:order.id
router.delete('/:id', async (req, res, next) => {
  try {
    await Order.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(204).end();
  } catch (err) {
    next(err);
  }
});

module.exports = router;
