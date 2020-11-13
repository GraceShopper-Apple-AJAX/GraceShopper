import axios from 'axios';

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
