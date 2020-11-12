const router = require('express').Router()
const {Product} = require('../db/models')
module.exports = router

//GET all products
router.get('/products', async (req, res, next) => {
  try {
    const products = await Product.findAll()
    res.send(products)
  } catch (err) {
    next(err)
  }
})

//GET single product
router.get('/:productId', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.productId)
    res.send(product)
  } catch (err) {
    next(err)
  }
})
