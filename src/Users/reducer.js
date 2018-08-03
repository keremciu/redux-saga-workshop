import { createSelector } from 'reselect';
import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
} from './actions';

const initialState = {
  data: [],
  status: {
    busy: false,
    success: true,
    error: false,
  },
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS: {
      return {
        ...state,
        status: {
          busy: false,
          success: true,
          error: false,
        },
      };
    }

    case FETCH_USERS_SUCCESS: {
      return {
        ...state,
        data: action.payload.data,
        status: {
          busy: false,
          success: true,
          error: false,
        },
      };
    }

    case FETCH_USERS_ERROR: {
      return {
        ...state,
        status: {
          busy: false,
          success: false,
          error: true,
        },
      };
    }

    default: return state;
  }
}

export const getUsers = createSelector(
  state => state.users,
  branch => branch
);