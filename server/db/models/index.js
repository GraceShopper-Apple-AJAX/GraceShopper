const User = require('./user')
const Address = require('./address')
const Session = require('./session')
const {Order, Order_Items} = require('./order')
const Product = require('./product')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

User.hasOne(Address)
Address.belongsTo(User)

User.hasMany(Session)
Session.belongsTo(User)

Order.hasMany(Order_Items)
Order_Items.belongsTo(Order)

User.hasMany(Order)
Order.belongsTo(User)

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Session,
  Address,
  Order,
  Order_Items,
  Product
}
