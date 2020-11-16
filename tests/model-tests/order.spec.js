const {expect} = require('chai');
const db = require('../../server/db/');
const Order = db.model('order');
const Order_Items = db.model('Order_Items');

xdescribe('Order model', () => {
  it('price cannot be null', async () => {
    await expect(Order.create({})).to.be.rejected;
  });
});

xdescribe('Order_Items', () => {
  it('historical_price cannot be null', async () => {
    await expect(Order_Items.create({})).to.be.rejected;
  });
});
