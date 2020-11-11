const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  status: {
    type: Sequelize.STRING
  }
})

const Order_Item = db.define('order_items', {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  },
  selectedSize: {
    type: Sequelize.ENUM('scoop', 'pint', 'tub')
  }
})

module.exports = {
  Order,
  Order_Item
}
