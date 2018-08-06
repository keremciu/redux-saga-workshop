import { spawn, call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_USERS, createFetchUsersSuccess } from './actions';

const promiseFetch = (resolve) => {
  return fetch('https://randomuser.me/api/?results=5')
    .then(response => response.json())
    .then(data => {
      resolve(data.results);
    });
}

export function* performFetchUsers() {
  const result = yield call(
    () => new Promise(resolve => promiseFetch(resolve))
  );

  yield put(createFetchUsersSuccess({
    data: result
  }));
  
}

export function *watchFetchUsers() {
  yield takeEvery(FETCH_USERS, performFetchUsers);
}

export default function *() {
  yield spawn(watchFetchUsers);
}