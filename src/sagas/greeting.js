import { put, call } from 'redux-saga/effects';
import { api } from '../services/greeting';
import { greetingSuccess, greetingError } from '../actions/index';

export default function* greet(params) {
  try {
    const greeting = yield call(api.greeting);
    yield put(greetingSuccess(greeting));
  } catch (error) {
    yield put(greetingError(error));
  }
}
