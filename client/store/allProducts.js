import axios from 'axios';

//ACTION TYPES

const SET_PRODUCTS = 'SET_PRODUCTS';
const ADD_PRODUCT = 'ADD_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';

//ACTION CONSTANTS

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    products,
  };
};

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    product,
  };
};

export const deleteProduct = (id) => {
  return {
    type: DELETE_PRODUCT,
    id,
  };
};

//THUNK CREATORS

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const {data: products} = await axios.get('/api/products');
      dispatch(setProducts(products));
    } catch (err) {
      console.error('There was a problem fetching the products!');
      console.error(err);
    }
  };
};

export const addProductThunk = (product) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.post(`/api/products`, product);
      dispatch(addProduct(data));
    } catch (error) {
      console.log('error POSTING product', product);
    }
  };
};

export const deleteProductThunk = (id) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.delete(`/api/products/{id}`);
      dispatch(deleteProduct(data));
    } catch (error) {
      console.log(`error deleting product with id ${id}`, error);
    }
  };
};

//INITIAL STATE

const initialState = [];

//REDUCER

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.products;
    case ADD_PRODUCT:
      return [...state, action.product];
    case DELETE_PRODUCT:
      return [...state];
    default:
      return state;
  }
};

export default productsReducer;
