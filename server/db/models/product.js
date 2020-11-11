const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  regular_price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  discount_price: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  size: {
    type: Sequelize.ENUM('scoop', 'pint', 'tub')
  },
  status: {
    type: Sequelize.ENUM('out_of_stock', 'in_stock', 'running_low')
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  imageUrl: {
    type: Sequelize.TEXT,
    allowNull: false,
    defaultValue: 'https://bit.ly/2Iqftcz'
  }
})

module.exports = Product
