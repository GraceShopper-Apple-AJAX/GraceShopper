const {expect} = require('chai');
const db = require('../index');
const Order = db.model('order');
const Order_Items = db.model('Order_Items');

describe('Order model', () => {
  it('price cannot be null', async () => {
    await expect(Order.create({})).to.be.rejected;
  });
});

describe('Order_Items', () => {
  it('historical_price cannot be null', async () => {
    await expect(Order_Items.create({})).to.be.rejected;
  });
});
