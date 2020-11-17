import axios from 'axios';

// Actions
const RECEIVE_CART = 'RECEIVE_CART';

// Action Creators
export const receiveCart = (cart) => ({
  type: RECEIVE_CART,
  cart,
});

// Thunk Creators
export const fetchCart = () => {
  return async (dispatch) => {
    try {
      const {data: cartItems} = await axios.get('/api/cart/');
      dispatch(receiveCart(cartItems));
    } catch (err) {
      console.log(err);
    }
  };
};

//same thunk used to add an item OR update existing item's quantity; returns updated cart
export const updateCart = (quantity, selected_size, productId) => {
  return async (dispatch) => {
    try {
      const {data: updatedCart} = await axios.post('/api/cart/', {
        quantity,
        selected_size,
        productId,
      });
      dispatch(receiveCart(updatedCart));
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteFromCart = (productId) => {
  return async (dispatch) => {
    try {
      const {data: updatedCart} = await axios.delete(`/api/cart/${productId}`);
      dispatch(receiveCart(updatedCart));
    } catch (err) {
      console.log(err);
    }
  };
};

//delete all from cart - can just fetch empty array using receiveCart
export const deleteCart = () => {
  return async (dispatch) => {
    try {
      await axios.delete('/api/cart/');
      dispatch(receiveCart({}));
    } catch (err) {
      console.log(err);
    }
  };
};

// Reducer
const initialState = {};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_CART:
      return action.cart;
    default:
      return state;
  }
}
