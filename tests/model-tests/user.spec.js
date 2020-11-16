/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../../server/db')
const User = db.model('user')

xdescribe('User model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('instanceMethods', () => {
    describe('correctPassword', () => {
      let cody

      beforeEach(async () => {
        cody = await User.create({
          email: 'cody@puppybook.com',
          password: 'bones'
        })
      })

      it('returns true if the password is correct', () => {
        expect(cody.correctPassword('bones')).to.be.equal(true)
      })

      it('returns false if the password is incorrect', () => {
        expect(cody.correctPassword('bonez')).to.be.equal(false)
      })
    }) // end describe('correctPassword')
  })
  // end describe('User model')
  
  it('first_name cannot be an empty string', async () => {
    await expect(User.create({first_name: ''})).to.be.rejected
  })
  it('first_name cannot be null', async () => {
    await expect(User.create({})).to.be.rejected
  })
  
  it('last_name cannot be an empty string', async () => {
  await expect(User.create({last_name: ''})).to.be.rejected
  })
  it('last_name cannot be null', async () => {
    await expect(User.create({})).to.be.rejected
  })

  it('email cannot be an empty string', async () => {
    await expect(User.create({email: ''})).to.be.rejected
  })
  it('email cannot be null', async () => {
    await expect(User.create({})).to.be.rejected
  })

  it('street_line1 cannot be an empty string', async () => {
    await expect(User.create({first_name: ''})).to.be.rejected
  })
  it('street_line1 cannot be null', async () => {
    await expect(User.create({})).to.be.rejected
  })

  it('city cannot be an empty string', async () => {
    await expect(User.create({city: ''})).to.be.rejected
  })
  it('city cannot be null', async () => {
    await expect(User.create({})).to.be.rejected
  })

  it('zip cannot be an empty string', async () => {
    User.create({zip: ''})
    await expect().to.be.rejected
  })
  it('zip cannot be null', async () => {
    await expect(User.create({})).to.be.rejected
  })

  it('state_or_province cannot be an empty string', async () => {
    User.create({state_or_province: ''})
    await expect().to.be.rejected
  })
  it('state_or_province cannot be null', async () => {
    await expect(User.create({})).to.be.rejected
  })

  it('country cannot be an empty string', async () => {
    User.create({country: ''})
    await expect().to.be.rejected
  })
  it('country cannot be null', async () => {
    await expect(User.create({})).to.be.rejected
  })

  it('phone is a number', async () => {
    await expect(User.create({phone: '917-xxx-xxxx'})).to.be.rejected
  })

  it('email is a valid email', async () => {
    await expect(User.create({email: 'google.com'})).to.be.rejected
  })

}) // end describe('instanceMethods')