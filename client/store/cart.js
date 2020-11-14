import axios from 'axios'

// Actions
const SET_CART = 'SET_CART'
const ADD_TO_CART = 'ADD_TO_CART'

// Action Creators
export const setCart = (cart) => ({
  type: SET_CART,
  cart,
})
export const addToCart = (item) => ({
  type: ADD_TO_CART,
  item
})

// Thunk Creators
export const fetchCart = () => async (dispatch) => {
  try {
    const {data} = await axios.get('/api/cart')
    dispatch(setCart(data))
  } catch (err) {
    console.log(err)
  }
}

export const addItemToCart = (productId) => async (dispatch) => {
  try {
    // const response = await axios.post(`/api/users/${studentId}`, {
    //   mentorId: teacherId,
    // });
  } catch (err) {
    console.log(err)
  }
}

// Reducer
const initialState = {};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CART:
      return action.cart
    case ADD_TO_CART:
      return '';
    default:
      return state;
  }
}
