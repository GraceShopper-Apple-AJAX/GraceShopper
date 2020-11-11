const {expect} = require('chai')
const db = require('../index')
const Product = db.model('product')

describe('Product model', () => {
  it('quantity cannot be null', async () => {
    await expect(Product.create({})).to.be.rejected
  })
})
