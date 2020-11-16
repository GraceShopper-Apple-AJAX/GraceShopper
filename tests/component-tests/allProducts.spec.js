/* eslint-disable no-unused-expressions */
import { expect } from "chai";
import { mount } from "enzyme";
import sinon from "sinon";
import React from "react";
import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";
import waitForExpect from "wait-for-expect";
import { Provider } from "react-redux";
import * as rrd from "react-router-dom";

const { MemoryRouter } = rrd

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

const initialState = {
    products: []
}

import mockAxios from "../mock-axios";

import { fetchProducts } from "../../client/store/allProducts"
import store from "../../client/store"

const app = require('../../server/index')
const agent = require('supertest')(app)

const { db, Product } = require('../../server/db')

const seed = require('../../script/seed')

import AllProducts, { AllProducts as UnconnectedAllProducts } from '../../client/components/AllProducts'

describe('The AllProducts Component', () => {
    const products = [
        {
            name: 'Pickle Rick',
            description: "Morty, this one's for you!",
            scoop_price: 3.99,
            pint_price: 6.99,
            tub_price: 9.99,
            discount_percentage: 0.25,
            status: 'in_stock',
            quantity: 100,
            imageUrl: 'https://bit.ly/3pyzdvQ',
        },
    
        {
            name: 'Raisin Bran Crunch',
            description: 'High in fibre - low in sugar! Extra crunch, extra poop!',
            scoop_price: 3.99,
            pint_price: 6.99,
            tub_price: 9.99,
            discount_percentage: 0.25,
            status: 'in_stock',
            quantity: 100,
            imageUrl: 'https://bit.ly/3pyzdvQ',
        },
    ];
    beforeEach(() => {
        mockAxios.onGet('/api/products').replyOnce(200, campuses)
    })
    it('renders the products passed in as props', () => {
        const wrapper = mount(
            <UnconnectedAllProducts
                products={products}
                fetchProducts={fetchProducts}
            />
        );
        expect(wrapper.text()).to.include('Raisin Bran Crunch')
        expect(wrapper.text()).to.include('Pickle Rick')
    })
})