import axios from 'axios';

// Actions
const SET_CART = 'SET_CART';
const SET_CART_ITEMS = 'SET_CART_ITEMS';

const UPDATE_CART = 'UPDATE_CART';
//add to cart in single product
const ADD_TO_CART = 'ADD_TO_CART';

//done in cart
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const CLEAR_CART = 'CLEAR_CART';
const ADD_QUANTITY = 'ADD_QUANTITY';
const SUBTRACT_QUANTITY = 'SUBTRACT_QUANTITY';

// Action Creators
export const setCart = (cart) => ({
  type: SET_CART,
  cart,
});

export const setCartItems = (cart) => ({
  type: SET_CART_ITEMS,
  cart,
});

export const updateCart = (cart) => ({
  type: UPDATE_CART,
  cart,
});

export const addToCart = (id) => ({
  type: ADD_TO_CART,
  id,
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  id,
});

// Thunk Creators
export const fetchCart = (cartId) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get(`/api/cart/${cartId}`);
      dispatch(fetchCart(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchCartItems = (cartId) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get(`/api/cart/{cartId}/items`);
      dispatch(fetchCartItems(data));
    } catch (err) {
      console.log(err);
    }
  };
};

// export const addToCart = () => {

// }

// export const removeFromCart = () => {

// }

// Reducer
const initialState = {
  items: [],
  addedItems: [],
  total: 0,
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CART:
      return action.cart;
    case UPDATE_CART:
      return {...state, cart: action.cart};
    default:
      return state;
  }
}
