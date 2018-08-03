import { combineReducers } from 'redux';
import usersReducer from './Users/reducer';

const reducers = {
  users: usersReducer,
};

export default combineReducers(reducers);
