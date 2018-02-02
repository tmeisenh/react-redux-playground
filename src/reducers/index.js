import { combineReducers } from 'redux';
import greeting from './greeting';
import listy from './listy';
import fizzbuzz from './fizzbuzz';

export default combineReducers({ greeting, listy, fizzbuzz });
