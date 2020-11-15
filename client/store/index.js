import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import user from './user';
import productsReducer from './allProducts';
import singleProductReducer from './singleProduct';
import allUsersReducer from './admin-users';
import singleUserReducer from './admin-single-user';

const reducer = combineReducers({
  user: user,
  allProducts: productsReducer,
  singleProduct: singleProductReducer,
  allUsers: allUsersReducer,
  singleUser: singleUserReducer,
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
);
const store = createStore(reducer, middleware);

export default store;
export * from './user';
