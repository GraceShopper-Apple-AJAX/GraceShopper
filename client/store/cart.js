
import axios from 'axios'

// Actions
const SET_CART = 'SET_CART';
const UPDATE_CART = 'UPDATE_CART';

// Action Creators
export const setCart = (cart) => ({
  type: SET_CART,
  cart,
});
export const updateCart = (cart) => ({
  type: UPDATE_CART,
  cart,
});

// Thunk Creators
export const fetchCart = () => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get('/api/cart');
      dispatch(setCart(data));
    } catch (err) {
      console.log(err);
    }
  };
};

// Reducer
const initialState = {};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CART:
      return action.cart;
    case UPDATE_CART:
      return action.cart;
    default:
      return state;
  }
}
