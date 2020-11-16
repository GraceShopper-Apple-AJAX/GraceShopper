const {expect} = require('chai')
const db = require('../../server/db')
const Product = db.model('product')

xdescribe('Product Model', () => {
  it('quantity cannot be null', async () => {
    await expect(Product.create({})).to.be.rejected
  })
})
