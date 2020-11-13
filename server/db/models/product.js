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
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  scoop_price: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  pint_price: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  tub_price: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  discount_percentage: {
    type: Sequelize.FLOAT,
    allowNull: true
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
