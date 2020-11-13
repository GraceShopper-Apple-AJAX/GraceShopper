const db = require('../db')
const User = require('./user')
const Order = require('./order')
const Product = require('./product')
const Sequelize = require('sequelize')

//through table: order_item
const Order_Item = db.define('Order_Item', {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
  },

  selected_size: {
    type: Sequelize.ENUM('scoop', 'pint', 'tub'),
  },

  historical_price: {
    type: Sequelize.FLOAT,
  },
})

//Associations
Order.belongsToMany(Product, {through: 'Order_Item'})
Product.belongsToMany(Order, {through: 'Order_Item'})

Order.hasMany(Order_Item)
Order_Item.belongsTo(Order)

User.hasMany(Order)
Order.belongsTo(User)

//export modules
module.exports = {
  db,
  User,
  Order,
  Product,
  Order_Item
}
