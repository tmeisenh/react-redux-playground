import actionTypes from '../actions/action-types';

const defaultState = () => ({
  greetingText: '',
});

export default (state = defaultState(), action) => {
  switch (action.type) {
    case actionTypes.GREETING_REQUEST:
      return state;
    case actionTypes.GREETING_SENT:
      return { ...state, greeting: action.greetingText };
    case actionTypes.GREETING_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
