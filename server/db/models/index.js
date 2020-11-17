const db = require('../db');
const User = require('./user');
const Order = require('./order');
const Product = require('./product');
const Sequelize = require('sequelize');

//through table: Order_Items
const Order_Items = db.define('Order_Items', {
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
});

//Associations
Order.belongsToMany(Product, {through: 'Order_Items'});
Product.belongsToMany(Order, {through: 'Order_Items'});

Order.hasMany(Order_Items);
Order_Items.belongsTo(Order);

User.hasMany(Order);
Order.belongsTo(User);

//export modules
module.exports = {
  db,
  User,
  Order,
  Product,
  Order_Items,
};
