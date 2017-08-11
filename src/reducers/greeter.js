import actionTypes from '../actions/action-types';

export default (state = {}, action) => {
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
