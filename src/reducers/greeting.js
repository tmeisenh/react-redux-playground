import { ActionTypes } from '../actions/action-types';

const defaultState = () => ({
  greetingText: 'loading...',
});

export default (state = defaultState(), action) => {
  switch (action.type) {
    case ActionTypes.GREETING_REQUEST:
      return state;
    case ActionTypes.GREETING_SENT:
      return { ...state, greetingText: action.greetingText };
    case ActionTypes.GREETING_ERROR:
    return { ...state, error: action.error };
    default:
      return state;
  }
};
