import { ActionTypes } from './action-types';

export const requestGreeting = () => ({ type: ActionTypes.GREETING_REQUEST });
export const greetingSuccess = greetingText => ({ type: ActionTypes.GREETING_SENT, greetingText });
export const greetingError = error => ({ type: ActionTypes.GREETING_ERROR, error });
