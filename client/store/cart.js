import axios from 'axios';

// Actions
const RECEIVE_CART = 'RECEIVE_CART';

//do you think this is necessary?
const CREATE_CART = 'CREATE_CART';
const UPDATE_CART_ITEM = 'UPDATE_CART_ITEM';
//move to single/all product
const ADD_CART_ITEM = 'ADD_CART_ITEM';
const DELETE_CART_ITEM = 'DELETE_CART_ITEM';
const CLEAR_CART = 'CLEAR_CART';

// Action Creators
export const receiveCart = (cart) => ({
  type: RECEIVE_CART,
  cart,
});

//do you think this is necessary?
export const createCart = (cart) => ({
  type: CREATE_CART,
  cart,
});

export const updateCartItem = (item) => ({
  type: UPDATE_CART_ITEM,
  item,
});

//move to all products and single products
export const addCartItem = (item) => ({
  type: ADD_CART_ITEM,
  item,
});

export const deleteCartItem = (item) => ({
  type: DELETE_CART_ITEM,
  item,
});

export const clearCart = (cart) => ({
  type: CLEAR_CART,
  cart,
});

// Thunk Creators
export const fetchCart = (orderId) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get(`/api/cart/${orderId}`);
      dispatch(receiveCart(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const createCart = (cart) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.post(`/api/cart/`, cart);
      dispatch(createCart(data));
    } catch (err) {
      console.log(err);
    }
  };
};

//move to single + all product
export const addToCart = (orderId, productId, quantity, selected_size) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.post(`/api/cart/${orderId}/${productId}`, {
        quantity,
        selected_size,
      });
      dispatch(addCartItem(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteFromCart = (orderId, productId, selected_size) => {

  return async (dispatch) => {
    try {
      const {data} = await axios.delete(`/api/cart/${orderId}/${productId}`, {
        selected_size,
      });
      dispatch(deleteCartItem(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const updateCart = (orderId, productId, quantity) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.put(`/api/cart/${orderId}/${productId}`, {
        quantity,
      });
      dispatch(updateCartItem(data));
    } catch (err) {
      console.log(err);
    }
  };
};

//delete all from cart
export const clearCart = (orderId) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.delete(`/api/cart/${orderId}`);
      dispatch(clearCart(data));
    } catch (err) {
      console.log(err);
    }
  };
};

// Reducer
const initialState = {
  items: [],
  //I didn't put the cart totals in the reducer yet, wasn't sure if we needed it here or if we can put it in the component.
  // cartTotal: 0,
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_CART:
      return action.cart;
  //do you think this is necessary?
    case CREATE_CART:
      return action.cart; //or initialState?
    case UPDATE_CART_ITEM:
      return {
        ...state,
        items: [
          ...state.items.filter(
            (item) => item.product.id != action.item.product.id
          ),
          action.item,
        ],
      };
      //move to single + all product
    case ADD_CART_ITEM:
      return {
        ...state,
        items: [...state.items, action.item],
      };
    case DELETE_CART_ITEM:
      return {
        ...state,
        items: [
          ...state.items.filter(
            (item) => item.productId != action.item.productId
          ),
          action.item,
        ],
      };
    case CLEAR_CART:
      return initialState;
    default:
      return state;
  }
}
