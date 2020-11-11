const Sequelize = require('sequelize')
const db = require('../db')

const Address = db.define('address', {
  street_line_1: {
    type: Sequelize.STRING,
    allowNull: false
  },
  street_line_2: {
    type: Sequelize.STRING
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  zipcode: {
    type: Sequelize.STRING,
    allowNull: false
  },
  state_or_province: {
    type: Sequelize.STRING,
    allowNull: false
  },
  country: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Address
