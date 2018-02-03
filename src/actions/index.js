export const GREETING_REQUEST = 'GREETING_REQUEST';
export const GREETING_SENT = 'GREETING_SENT';
export const GREETING_ERROR = 'GREETING_ERROR';

export const requestGreeting = () => ({ type: GREETING_REQUEST });
export const greetingSuccess = greetingText => ({ type: GREETING_SENT, greetingText });
export const greetingError = error => ({ type: GREETING_ERROR, error });
