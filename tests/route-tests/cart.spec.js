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
    beforeEach(async () => {
        await db.sync({ force: true })
        const user = await User.Create([
            {
                id: 3000,
                firstName: "Shamus",
                lastName: "Sawter",
                email: "ssawter0@163.com",
                password: "A3LOO0G",
                mobile: "4253097641",
                address_line1: "038 Algoma Plaza",
                city: "Seattle",
                state_or_province: "Washington",
                zip: 98115
              }
        ])

        const order = await Order.Create([
            {
                id: 9000,
                is_fullfilled: false,
                userId: 3000
            }
        ])

        const order_items = await Order_Items.bulkCreate([
            {
                quantity: 4,
                selected_size: 'pint',
                historical_price: 2.99,
                productId: 1,
                orderId: 9000
            },
            {
                quantity: 7,
                selected_size: 'tub',
                historical_price: 2.99,
                productId: 3,
                orderId: 9000
            },
            {
                quantity: 8,
                selected_size: 'scoop',
                historical_price: 2.99,
                productId: 5,
                orderId: 3
            }

        ])
    })

    describe('/api/cart/:id', () => {

        describe('GET /api/cart/:id', () => {
            it('responds with Order and its items', async () => {
                const response = await app.get('/api/cart/:id')
                expect(response.status).to.equal(200)
                expect(response.body).to.be.an('array')
                // map through order_items, keep productId's, then convert id's to names
                // expect(products).to.include('ice cream name')
                // expect(products).to.include('ice cream name')
            })
        })

        describe('POST /api/cart/:id', () => {
            it('responds with 201 and the newly added item', async () => {
                const response = await app.post('/api/cart/:id').send({
                    quantity: 3,
                    selected_size: 'pint',
                    historical_price: 2.99,
                    productId: 9,
                    orderId: 9000
                })
                expect(response.status).to.equal(201)
                expect(response.body).to.be.an('object')
                expect(response.body.productId).to.equal(9)
                const itemsBeforePost = Object.keys(Order_Items)
                //unfinished
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