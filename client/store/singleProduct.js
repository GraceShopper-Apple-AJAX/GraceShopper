import axios from 'axios';
import {StepTitle} from 'semantic-ui-react';

//ACTION TYPES

const SET_SINGLE_PRODUCT = 'SET_SINGLE_PRODUCT';

//ACTION CONSTANTS

export const setSingleProduct = (product) => {
  return {
    type: SET_SINGLE_PRODUCT,
    product,
  };
};

//THUNK CREATORS

export const fetchSingleProduct = (productId) => {
  return async (dispatch) => {
    try {
      const {data: product} = await axios.get(`/api/products/${productId}`);
      dispatch(setSingleProduct(product));
    } catch (err) {
      console.error('There was a problem fetching this product!');
      console.error(err);
    }
  };
};

export const updateProductThunk = (product) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.put(`/api/products/${product.id}`, product);
      dispatch(setSingleProduct(data));
    } catch (error) {
      console.log('error updating product');
    }
  };
};

//INITIAL STATE

const initialState = {};

//REDUCER

const singleProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SINGLE_PRODUCT:
      return action.product;
    default:
      return state;
  }
};

export default singleProductReducer;
