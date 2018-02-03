import {
  GREETING_REQUEST,
  GREETING_SENT,
  GREETING_ERROR,
} from '../actions/';


const defaultState = () => ({
  greetingText: 'loading...',
});

export default (state = defaultState(), action) => {
  switch (action.type) {
    case GREETING_REQUEST:
      return state;
    case GREETING_SENT:
      return { ...state, greetingText: action.greetingText };
    case GREETING_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
