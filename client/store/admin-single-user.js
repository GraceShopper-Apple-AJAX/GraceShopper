import axios from 'axios';

//ACTION CREATOR

const SET_SINGLE_USER = 'SET_SINGLE_USER';

//ACTION CONSTANT

export const setSingleUser = (user) => {
  return {
    type: SET_SINGLE_USER,
    user,
  };
};

//THUNK CREATOR

export const fetchSingleUser = (userId) => {
  return async (dispatch) => {
    try {
      const {data: singleUserInfo} = await axios.get(`/api/users/${userId}`);
      dispatch(setSingleUser(singleUserInfo));
    } catch (err) {
      console.error("There was a problem fetching this user's information!");
      console.error(err);
    }
  };
};

//INITIAL STATE

const initialState = {};

//REDUCER

const singleUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SINGLE_USER:
      return action.user;
    default:
      return state;
  }
};

export default singleUserReducer;
