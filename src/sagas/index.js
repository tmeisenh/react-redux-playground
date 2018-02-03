import { takeLatest } from 'redux-saga/effects';
import { GREETING_REQUEST } from '../actions/';
import greeting from './greeting';

export default function* () {
  yield takeLatest(GREETING_REQUEST, greeting);
}
