const {expect} = require('chai')
const db = require('../index')
const Order = db.model('order')
const Order_Item = db.model('order_item')

describe('Order model', () => {
  it('price cannot be null', async () => {
    await expect(Order.create({})).to.be.rejected
  })
})

describe('Order_Item', () => {
  it('historical_price cannot be null', async () => {
    await expect(Order_Item.create({})).to.be.rejected
  })
})
