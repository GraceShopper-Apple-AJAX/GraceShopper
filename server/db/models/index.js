const db = require('../db')
const User = require('./user')
const Address = require('./address')
// const Session = require('./session')
const {Order, Order_Item} = require('./order')
const Product = require('./product')
const {Cart, Cart_Item, CC_Transaction} = require('./cart')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

User.hasOne(Address)
Address.belongsTo(User)

// User.hasMany(Session)
// Session.belongsTo(User)

Order.hasMany(Order_Item)
Order_Item.belongsTo(Order)

User.hasMany(Order)
Order.belongsTo(User)

Cart.hasMany(Cart_Item)
Cart_Item.belongsTo(Cart)

Order.hasOne(CC_Transaction)
CC_Transaction.belongsTo(Order)

Order_Item.hasOne(Product)
Product.belongsTo(Order_Item)

Cart_Item.hasOne(Product)
Product.belongsTo(Cart_Item)

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

module.exports = {
  db,
  User,
  // Session,
  Address,
  Order,
  Order_Item,
  Product,
  Cart,
  Cart_Item,
  CC_Transaction
}
