export const FETCH_USERS = 'FB_FETCH_USERS';
export function createFetchUsers(payload) {
  return {
    type: FETCH_USERS,
    payload,
  };
}

export const FETCH_USERS_SUCCESS = 'FB_FETCH_USERS_SUCCESS';
export function createFetchUsersSuccess(payload) {
  return {
    type: FETCH_USERS_SUCCESS,
    payload,
  };
}

export const FETCH_USERS_ERROR = 'FB_FETCH_USERS_ERROR';
export function createFetchUsersError(payload) {
  return {
    type: FETCH_USERS_ERROR,
    payload,
  };
}
