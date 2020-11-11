const Sequelize = require('sequelize')
const db = require('../db')

const Session = db.define('session', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  data: {
    type: Sequelize.TEXT
  }
})

module.exports = Session
