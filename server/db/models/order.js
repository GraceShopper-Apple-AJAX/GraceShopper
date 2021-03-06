const Sequelize = require('sequelize');
const db = require('../db');

const Order = db.define('order', {
  total_price: {
    type: Sequelize.FLOAT,
  },
  is_fulfilled: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

// Order.prototype.calculateTotal = async function() {
// const items = Order.getOrder_Items()
// const total = items *
// }

module.exports = Order;
