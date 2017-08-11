import { takeLatest } from 'redux-saga/effects';
import { ActionTypes } from '../actions/action-types';
import greeting from './greeting';

export default function* () {
  yield takeLatest(ActionTypes.GREETING_REQUEST, greeting);
}
