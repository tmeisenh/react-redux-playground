import { TEXTFIELDUPDATED } from '../actions/fizzbuzz';

const defaultState = () => ({
  textValue: '',
  result: 'unknown result',
});

export default (state = defaultState(), action) => {
  switch (action.type) {
    case TEXTFIELDUPDATED:
      return {
        ...state,
        textValue: action.textFieldValue,
      };
    default:
      return state;
  }
};
