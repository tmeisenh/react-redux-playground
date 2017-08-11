import { takeLatest } from 'redux-saga/effects';
import actionTypes from '../actions/action-types';
import greeting from './greeting';

export default function* () {
  yield takeLatest(actionTypes.GREETING_REQUEST);
}
