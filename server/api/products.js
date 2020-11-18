const router = require('express').Router();
const {Product} = require('../db/models');

//GET all products
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.send(products);
  } catch (err) {
    next(err);
  }
});

//GET single product
router.get('/:productId', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.productId);
    res.send(product);
  } catch (err) {
    next(err);
  }
});

//POST single product
router.post('/', async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.json(product);
  } catch (err) {
    next(err);
  }
});

//PUT single product
router.put('/:productId', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.productId);
    product.update(req.body);
    res.json(product);
  } catch (err) {
    next(err);
  }
});

//DELETE single product
router.delete('/:productId', async (req, res, next) => {
  try {
    Product.destroy({
      where: {
        id: req.params.productId,
      },
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
