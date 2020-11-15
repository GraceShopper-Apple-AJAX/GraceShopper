import axios from 'axios';

//ACTION TYPES

const SET_USERS = 'SET_USERS';

//ACTION CREATORS

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};

//THUNK CREATOR

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      const {data: userInfo} = await axios.get('/api/users');
      dispatch(setUsers(userInfo));
    } catch (err) {
      console.error('There was a problem fetching the users list!');
      console.error(err);
    }
  };
};

//INITIAL STATE

const initialState = [];

//REDUCER

const allUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return action.users;
    default:
      return state;
  }
};

export default allUsersReducer;
