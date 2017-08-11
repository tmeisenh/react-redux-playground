import actionTypes from '../actions/action-types';

const defaultState = () => ({
  greetingText: 'loading...',
});

export default (state = defaultState(), action) => {
  switch (action.type) {
    case actionTypes.GREETING_REQUEST:
      return state;
    case actionTypes.GREETING_SENT:
      return { ...state, greetingText: action.greetingText };
    case actionTypes.GREETING_ERROR:
      return { ...state, error: action.error };
    default: 
      return state;
  }
};
