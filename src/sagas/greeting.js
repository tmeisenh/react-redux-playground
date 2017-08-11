import { put } from 'redux-saga/effects';
import { api } from '../services/greeting';
import actionTypes from '../actions/action-types';

export default function* greet(params) {
  try {
    yield put({ type: actionTypes.GREETING_REQUEST });
    const greeting = yield call(api.greeting);
    yield put({ type: actionTypes.GREETING_SENT, greetingText: greeting });
  } catch (error) {
    yield put({ type: actionTypes.GREETING_ERROR, error });
  }
}
