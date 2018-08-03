import { spawn } from 'redux-saga/effects';
import userSaga from './Users/saga';

export default function* mainSaga() {
  yield spawn(userSaga);
}