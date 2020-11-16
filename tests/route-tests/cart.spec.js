/* global describe beforeEach it */

const { expect } = require('chai')
const request = require('supertest')
const db = require('../../server/db')
const app = require('../../server/index')
const User = db.model('user')
const Order = db.model('order')
const Order_Items = db.model('Order_Items')
const Product = db.model('product')

xdescribe('Cart Routes', () => {
    beforeEach(() => {
        return db.sync({force: true})
    })

    describe('/api/cart/:id', () => {
        beforeEach(() => {
            return Order.create({
                is_fulfilled: false
            })
        })

        describe('GET /api/cart/:id', () => {
            it('responds with an empty array at first', async () => {
                const res = await request(app)
                    .get('/api/cart')
                    .expect(200)
                    .expect(res.body).to.eql([])
            })
            
            it('responds with Order after items have been added to cart', () => {

            })
        })

        describe('POST /api/cart/:id', () => {
            it('adds an item to your cart and responds with the item', () => {

            })
        })

        describe('DELETE /api/cart/:id', () => {
            it('clears your entire cart', () => {

            })
        })
    })
    
    describe('/api/cart/:id/:productId', () => {
        it('DELETE deletes an item from the cart', () => {

        })

        it('PUT updates the product inside your cart', () => {

        })
    })
})