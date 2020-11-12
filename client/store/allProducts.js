import axios from 'axios'

//ACTION TYPES

const SET_PRODUCTS = 'SET_PRODUCTS'

//ACTION CONSTANTS

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    products,
  }
}

//THUNK CREATORS

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const {data: products} = await axios.get('/api/products')
      dispatch(setProducts(products))
    } catch (err) {
      console.error('There was a problem fetching the products!')
      console.error(err)
    }
  }
}

//INITIAL STATE

const initialState = []

//REDUCER

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.products
    default:
      return state
  }
}

export default productsReducer
