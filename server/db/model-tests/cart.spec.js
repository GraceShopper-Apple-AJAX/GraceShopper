/* global describe beforeEach it */

const { expect } = require('chai')
const db = require('../index')
const Cart = db.model('cart')

describe('Cart model', () => {
	it('first_name cannot be an empty string', async () => {
		await expect(
            Cart.create({ first_name: '' })
        ).to.be.rejected	
	})
	it('first_name cannot be null', async () => {
		await expect(
            Cart.create({})
        ).to.be.rejected	
	})

	it('last_name cannot be an empty string', async () => {
		await expect(
            Cart.create({ last_name: '' })
        ).to.be.rejected	
	})
	it('last_name cannot be null', async () => {
		await expect(
            Cart.create({})
        ).to.be.rejected
	})

	it('email cannot be an empty string', async () => {
		await expect(
            Cart.create({ email: '' })
        ).to.be.rejected	
	})
	it('email cannot be null', async () => {
		await expect(
            Cart.create({})
        ).to.be.rejected
	})

	it('street_line1 cannot be an empty string', async () => {
		await expect(
            Cart.create({ first_name: '' })
        ).to.be.rejected	
	})
	it('street_line1 cannot be null', async () => {
		await expect(
            Cart.create({})
        ).to.be.rejected	
	})

	it('city cannot be an empty string', async () => {
		await expect(
            Cart.create({ city: '' })
        ).to.be.rejected	
	})
	it('city cannot be null', async () => {
		await expect(
            Cart.create({})
        ).to.be.rejected
	})

	it('zip cannot be an empty string', async() => {
        Cart.create({ zip: '' })
		await expect().to.be.rejected	
	})
	it('zip cannot be null', async () => {
		await expect(
            Cart.create({})
        ).to.be.rejected
	})

	it('state_or_province cannot be an empty string', async () => {
        Cart.create({ state_or_province: '' })
		await expect().to.be.rejected	
	})
	it('state_or_province cannot be null', async () => {
		await expect(
            Cart.create({})
        ).to.be.rejected
	})

	it('country cannot be an empty string', async () => {
        Cart.create({ country: '' })
		await expect().to.be.rejected	
	})
	it('country cannot be null', async () => {
		await expect(
            Cart.create({})
        ).to.be.rejected
	})

	it('phone is a number', async () => {
		await expect(
            Cart.create({ phone: '917-xxx-xxxx' })
        ).to.be.rejected
	})

	it('email is a valid email', async () => {
		await expect(
            Cart.create({ email: 'google.com' })
        ).to.be.rejected
	})
})

describe('Cart_Item', () => {
	it('price cannot be null', async () => {
		await expect(
            Cart_Item.create({})
        ).to.be.rejected	
	})
})

describe('CC_Transaction', () => {
	it('cc_num is a valid credit card number', async () => {
		await expect(
            CC_Transaction.create({cc_num: 12345})
        ).to.be.rejected	
	})

	it('amount and cc_type cannot be null', async () => {
        await expect(
            CC_Transaction.create({})
        ).to.be.rejected
        await expect(
            CC_Transaction.create({})
        ).to.be.rejected
    })
    
    it('amount and cc_type cannot be empty', async () => {
        await expect(
            CC_Transaction.create({amount: ''})
        ).to.be.rejected
        await expect(
            CC_Transaction.create({cc_num: ''})
        ).to.be.rejected
	})
})