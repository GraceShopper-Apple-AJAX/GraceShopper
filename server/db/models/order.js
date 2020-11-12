const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  status: {
    type: Sequelize.STRING,
  },
  total_price: {
    type: Sequelize.FLOAT,
  },
  is_fulfilled: {
    type: Sequelize.BOOLEAN,
  },
})

module.exports = Order
