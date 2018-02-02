import { TEXTFIELDUPDATED } from '../actions/fizzbuzz';
import fizzBuzz from '../services/fizzbuzz';

const defaultState = () => ({
  textValue: '',
  result: '-',
});

export default (state = defaultState(), action) => {
  switch (action.type) {
    case TEXTFIELDUPDATED:
      return {
        ...state,
        textValue: action.textFieldValue,
        result: fizzBuzz(action.textFieldValue),
      };
    default:
      return state;
  }
};
